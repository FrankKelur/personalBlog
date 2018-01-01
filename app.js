var http = require('http')
var https = require('https')
var Koa = require('koa')
var path = require('path')
var Pug = require('koa-pug')
var router = require('./router/index')
// var webpackDevMiddleware = require('webpack-dev-middleware')
var {devMiddleware, hotMiddleware} = require('koa-webpack-middleware')
var webpack = require('webpack')
var webpackConfig = require('./build/webpack.dev.conf')
var compiler = webpack(webpackConfig)
var json = require('koa-json')
var app = new Koa()
var pug = new Pug({
  viewPath: __dirname,
  app: app,
  locals: {
    title: 'Personal Blog'
  }
})
var serve = require('koa-static')

console.log('NODE_ENV', process.env.NODE_ENV)
app.use(json())
app.use(devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}))

if (process.env.NODE_ENV !== 'production') {
  app.use(hotMiddleware(compiler, {}))
}

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  var ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  var ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} ${ms}`)
})

app.use(serve(path.join(__dirname, 'static')))

app.use(router.routes()).use(router.allowedMethods())

http.createServer(app.callback()).listen('3000')
// https.createServer(app.callback()).listen('3001')
