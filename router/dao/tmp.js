var pageDao = require('./pageDAO')
var articleDao = require('./articleDAO')
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qwer1234',
  port: '3306',
  database: 'personal-blog'
})
connection.connect()
async function clearPages () {
  var list = await pageDao.list(connection, null)
  for (var i in list) {
    var dir = list[i]
    dir.children = await pageDao.list(connection, dir.id)
    for (var j in dir.children) {
      var subDir = dir.children[j]
      subDir.children = await pageDao.list(connection, subDir.id)
      for (var k in subDir.children) {
        var page = subDir.children[k]
        var articles = await articleDao.list(connection, page.id)
        if (articles.length === 0) {
          await pageDao.delete(connection, page.id)
          console.log('----delete-----', page.label)
        }
      }
    }
  }
  connection.end()
}

clearPages()
