module.exports = {
  add (conn, entity) {
    var sql = 'insert into article (title, content) values (?, ?)'
    var params = [entity.title, JSON.stringify(entity.content)]
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
    var sql = 'update article set title = ?, content = ?, page_id = ? where id = ?'
    var params = [entity.title, entity.content, entity.page_id, entity.id]
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
  list (conn, pageId) {
    var sql = 'select * from article where page_id = ?'
    var params = [pageId]
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
    var sql = 'delete from article where id = ?'
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
    var sql = 'select * from article where id = ?'
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
