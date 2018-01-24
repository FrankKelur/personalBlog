var commentDAO = require('./dao/commentDAO')
var articleDAO = require('./dao/articleDAO')
var recommendDAO = require('./dao/recommendDAO')
var pageDAO = require('./dao/pageDAO')

module.exports = {
  async submit_comment (conn, entity) {
    // 提交评论
    var res = await commentDAO.save(conn, entity)
    return res
  },
  async get_article_comments (conn, articleId) {
    // 获取一个文章的评价
    var res = await commentDAO.list(conn, articleId)
    return res
  },
  async get_page (conn, params) {
    var res = await articleDAO.list(conn, params.id)
    return res
  },
  async get_recommend_list (conn) {
    //  获取推荐列表，前五条
    var res = await recommendDAO.list(conn)
    return res
  },
  async get_nav_list (conn) {
    // 获取页面tree
    var list = await pageDAO.list(conn, null)
    // 循环调用，获取所有页面
    for (var idx in list) {
      var item = list[idx]
      item.children = await pageDAO.list(conn, item.id)
      for (var j in item.children) {
        var subDir = item.children[j]
        subDir.children = await pageDAO.list(conn, subDir.id)
      }
    }
    return list
  }
}
