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
  async get_page (conn, pageId) {
    var res = await articleDAO.list(conn, pageId)
    return res
  },
  async get_recommend_list (conn) {
    //  获取推荐列表，前五条
    var res = await recommendDAO.list(conn)
    return res
  },
  async get_nav_list (conn) {
    // 获取页面tree
    var res = await pageDAO.list(conn, null)
    // 循环调用，获取所有页面
    await getAllChildren(res)
    return res

    function getAllChildren (list) {
      return new Promise((resolve, reject) => {
        list.forEach(async (item, idx) => {
          item.children = await pageDAO.list(conn, item.id)
          if (idx === list.length - 1) {
            resolve(list)
          }
        })
      })
    }
  }
}
