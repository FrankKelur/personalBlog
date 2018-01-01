module.exports = {
  add (conn, entity) {
    var sql = 'insert into page (label, parent, icon) values (?, ?, ?)'
    var params = [entity.label, entity.parent, entity.icon]
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
    var sql = 'update page set label = ?, parent = ? where id = ?'
    var params = [entity.label, entity.parent, entity.id]
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
  list (conn, parent) {
    var sql = 'select * from page where parent = ?'
    var params = [parent]
    if (!parent) {
      sql = 'select * from page where parent is null'
      params = []
    }
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
    var sql = 'delete from page where id = ?'
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
  }
}
