module.exports = {
  add (conn, entity) {
    var sql = 'insert into recommend (thumbnail, url, title, description) values (?, ?, ?, ?)'
    var params = [entity.thumbnail, entity.url, entity.title, entity.description]
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
    var sql = 'update recommend set thumbnail = ?, url = ?, title = ?, desc = ? where id = ?'
    var params = [entity.thumbnail, entity.url, entity.title, entity.desc, entity.id]
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
  list (conn) {
    var sql = 'select * from recommend limit 5'
    var params = []
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
    var sql = 'delete from recommend where id = ?'
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
    var sql = 'select * from recommend where id = ?'
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
