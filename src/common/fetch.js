import merge from 'lodash/merge'

const _returnContentByType = (response) => {
  let type = response.headers.get('Content-Type').split('')[0]
  switch (type) {
    case 'text/html':
      console.log('response.text()', response.text())
      return response.text()
    case 'application/json':
      console.log('response.json()', response.json())
      return response.json()
    default:
      return response.json()
  }
}

const headers = {
  'Content-Type': 'application/json'
}

const queen = new Set()

const func = (url, parameters, option) => {
  return new Promise((resolve, reject) => {
    let key = url + JSON.stringify(parameters)
    // 防止重复请求
    if (queen.has(key)) {
      return Promise.reject(new Error('duplicate request error...'))
    }
    queen.add(key)
    const params = merge({}, {
      credentials: 'include',
      method: 'POST',
      headers: headers,
      cache: 'default',
      body: JSON.stringify(parameters)
    }, option)

    fetch(url, params).then(response => {
      queen.delete(key)
      if (response.ok) {
        return _returnContentByType(response)
      } else {
        return {networkError: true}
      }
    }).then(res => {
      resolve(res)
      return res
    })
  })
}

export default func
