module.exports = {
  add (conn, entity) {
    var sql = 'insert into comment (author, content, replay, article_id) values (?, ?, ?, ?)'
    var params = [entity.author, entity.content, entity.replay, entity.article_id]
    return new Promise((resolve, reject) => {
      conn.query(sql, params, (err, res) => {
        if (err) {
          console.log('[Insert error] - ', err.message)
          return
        }
        console.log('[Insert Id] - ', res)
        resolve(res)
      })
    })
  },
  mod (conn, entity) {
    var sql = 'update comment set author = ?, content = ?, replay = ?, article_id = ? where id = ?'
    var params = [entity.author, entity.content, entity.replay, entity.article_id, entity.id]
    return new Promise((resolve, reject) => {
      conn.query(sql, params, (err, res) => {
        if (err) {
          console.log('[Update error] - ', err.message)
          return
        }
        console.log('[Update affectedRows] - ', res.affectedRows)
        resolve(res)
      })
    })
  },
  list (conn, articleId) {
    var sql = 'select * from comment where article_id = ?'
    var params = [articleId]
    return new Promise((resolve, reject) => {
      conn.query(sql, params, (err, res) => {
        if (err) {
          console.log('[List error] - ', err.message)
          return
        }
        resolve(res)
        console.log('[List result] - ', res.length)
      })
    })
  },
  delete (conn, id) {
    var sql = 'delete from comment where id = ?'
    var params = [id]
    return new Promise((resolve, reject) => {
      conn.query(sql, params, (err, res) => {
        if (err) {
          console.log('[Delete error] - ', err.message)
          return
        }
        console.log('[Delete affectedRows] - ', res.affectedRows)
        resolve(res)
      })
    })
  },
  detail (conn, id) {
    var sql = 'select * from comment where id = ?'
    var params = [id]
    return new Promise((resolve, reject) => {
      conn.query(sql, params, (err, res) => {
        if (err) {
          console.log('[Detail error] - ', err.message)
          return
        }
        console.log('[Detail result] - ', res)
        resolve(res[0])
      })
    })
  }
}
