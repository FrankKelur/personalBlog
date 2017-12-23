export default {
  validate (rule, value, callback) {
    console.log('arguments', arguments)
    if (rule.regex instanceof RegExp) { // 验证正则
      callback(rule.regex.test(value) ? undefined : rule.message)
    } else if (typeof rule.test === 'function') { // 验证rule里传来的test函数
      var res = rule.test(value)
      if (typeof res === 'boolean') {
        callback(res ? undefined : rule.message)
      } else {
        res.then(valid => { // 验证rule里传来的test异步函数
          console.log('valid', valid, rule)
          if (typeof valid === 'object') { // 自定义表单验证，验证文案后端决定
            var { re, message } = valid
            callback(re === '200' ? undefined : message)
          } else {
            callback(valid ? undefined : rule.message)
          }
        }).catch(() => {
          callback(rule.message)
        })
      }
    }
  }
}
