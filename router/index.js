const Router = require('koa-router')
const router = new Router()
const service = require('./service')
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qwer1234',
  port: '3306',
  database: 'personal-blog'
})
connection.connect()

router.post('/api/*', async (ctx, next) => {
  console.log('请求 ctx', '==============\n\n\n==============', ctx.request.body, ctx.query, ctx.url, ctx.header, ctx.methods, ctx.method, ctx.path, ctx.origin, '==============\n\n\n==============')
  var method = ctx.url.replace('/api/', '')
  var res = await service[method](connection, ctx.request.body)
  console.log('-------------------\n\n\n-------------------', res)
  ctx.body = {re: '200', data: res}
})

router.get('/pages/index', (ctx) => {
  ctx.render('layout', {}, true)
})

module.exports = router
