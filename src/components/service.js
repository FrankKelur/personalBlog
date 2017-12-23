// import { fetch } from 'common/utils'

export default {
  getNavList (params, url = '/api/get_nav_list') {
    return new Promise((resolve, reject) => {
      resolve({
        re: '200',
        data: [
          {
            label: 'IT技术',
            id: 'it',
            children: [
              {
                label: '前端',
                id: 'front-end',
                children: []
              },
              {
                label: '后端',
                id: 'back-end',
                children: []
              },
              {
                label: '人工智能',
                id: 'AI',
                children: [
                  {
                    label: '机器学习',
                    id: 'machine-learning',
                    children: []
                  },
                  {
                    label: '神经网络',
                    id: 'neural-net',
                    children: []
                  },
                  {
                    label: '知识图谱',
                    id: 'knowledge-graph',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            label: '电影',
            id: 'movie',
            children: []
          },
          {
            label: '段子',
            id: 'joke',
            children: []
          },
          {
            label: '绘画',
            id: 'painting',
            children: []
          },
          {
            label: '摄影',
            id: 'photograph',
            children: []
          },
          {
            label: '历史',
            id: 'history',
            children: []
          }
        ]
      })
    })
    // return fetch(url, params)
  },
  getRecommendList (params, url = '/api/get_recommend_list') {
    return new Promise((resolve, reject) => {
      resolve({
        re: '200',
        data: [
          {
            thumbnail: 'assets/the-story-of-success.JPG',
            url: 'https://book.douban.com/subject/25863621/',
            title: '不一样的成功启示录',
            desc: '怪才格拉德威尔告诉我们，如果没有机遇和文化、环境因素，即便是智商超过爱因斯坦，也只能做一份平庸的工作。'
          },
          {
            thumbnail: 'assets/the-story-of-success.JPG',
            url: 'https://book.douban.com/subject/25863621/',
            title: '不一样的成功启示录',
            desc: '怪才格拉德威尔告诉我们，如果没有机遇和文化、环境因素，即便是智商超过爱因斯坦，也只能做一份平庸的工作。'
          },
          {
            thumbnail: 'assets/the-story-of-success.JPG',
            url: 'https://book.douban.com/subject/25863621/',
            title: '不一样的成功启示录',
            desc: '怪才格拉德威尔告诉我们，如果没有机遇和文化、环境因素，即便是智商超过爱因斯坦，也只能做一份平庸的工作。'
          }
        ]
      })
    })
    // return fetch(url, params)
  },
  getArticleList (params, url = '/api/get_page') {
    return new Promise((resolve, reject) => {
      resolve({
        re: '200',
        data: [
          {
            title: '双因素认证（2FA）教程',
            content: [
              {
                type: 'p',
                text: '所谓认证（authentication）就是确认用户的身份，是网站登录必不可少的步骤。'
              },
              {
                type: 'p',
                text: '密码是最常见的认证方法，但是不安全，容易泄露和冒充。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110101.jpg'
              },
              {
                type: 'p',
                text: '越来越多的地方，要求启用双因素认证（Two-factor authentication，简称 2FA）。本文介绍它的概念和实现方法。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110102.png'
              },
              {
                type: 'h2',
                text: '一、双因素认证的概念'
              },
              {
                type: 'p',
                text: '一般来说，三种不同类型的证据，可以证明一个人的身份。'
              },
              {
                type: 'p',
                text: '秘密信息：只有该用户知道、其他人不知道的某种信息，比如密码。'
              },
              {
                type: 'p',
                text: '个人物品：该用户的私人物品，比如身份证、钥匙。'
              },
              {
                type: 'p',
                text: '生理特征：该用户的遗传特征，比如指纹、相貌、虹膜等等。'
              },
              {
                type: 'p',
                text: '这些证据就称为三种"因素"（factor）。因素越多，证明力就越强，身份就越可靠。'
              },
              {
                type: 'p',
                text: '双因素认证就是指，通过认证同时需要两个因素的证据。'
              },
              {
                type: 'p',
                text: '银行卡就是最常见的双因素认证。用户必须同时提供银行卡和密码，才能取到现金。'
              },
              {
                type: 'h2',
                text: '二、双因素认证方案'
              },
              {
                type: 'p',
                text: '常用的双因素组合是密码 + 某种个人物品，比如网上银行的 U 盾。用户插上 U 盾，再输入密码，才能登录网上银行。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110103.jpg'
              },
              {
                type: 'p',
                text: '但是，用户不可能随时携带 U 盾，手机才是最好的替代品。密码 + 手机就成了最佳的双因素认证方案。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110104.jpg'
              },
              {
                type: 'p',
                text: '国内的很多网站要求，用户输入密码时，还要提供短消息发送的验证码，以证明用户确实拥有该手机。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110105.png'
              },
              {
                type: 'p',
                text: '但是，短消息是不安全的，容易被拦截和伪造，SIM 卡也可以克隆。已经有案例，先伪造身份证，再申请一模一样的手机号码，把钱转走。'
              },
              {
                type: 'p',
                text: '因此，安全的双因素认证不是密码 + 短消息，而是下面要介绍的 TOTP。'
              },
              {
                type: 'h2',
                text: '三、TOTP 的概念'
              },
              {
                type: 'p',
                text: 'TOTP 的全称是"基于时间的一次性密码"（Time-based One-time Password）。它是公认的可靠解决方案，已经写入国际标准 RFC6238。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110106.jpg'
              },
              {
                type: 'p',
                text: '它的步骤如下。'
              },
              {
                type: 'p',
                text: '第一步，用户开启双因素认证后，服务器生成一个密钥。'
              },
              {
                type: 'p',
                text: '第二步：服务器提示用户扫描二维码（或者使用其他方式），把密钥保存到用户的手机。也就是说，服务器和用户的手机，现在都有了同一把密钥。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110107.png'
              },
              {
                type: 'p',
                text: '注意，密钥必须跟手机绑定。一旦用户更换手机，就必须生成全新的密钥。'
              },
              {
                type: 'p',
                text: '第三步，用户登录时，手机客户端使用这个密钥和当前时间戳，生成一个哈希，有效期默认为30秒。用户在有效期内，把这个哈希提交给服务器。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110108.png'
              },
              {
                type: 'p',
                text: '第四步，服务器也使用密钥和当前时间戳，生成一个哈希，跟用户提交的哈希比对。只要两者不一致，就拒绝登录。'
              },
              {
                type: 'p',
                text: '第三步，用户登录时，手机客户端使用这个密钥和当前时间戳，生成一个哈希，有效期默认为30秒。用户在有效期内，把这个哈希提交给服务器。'
              },
              {'type': 'h2', 'text': '五、TOTP 的实现'}, {
                'type': 'p',
                'text': 'TOTP 很容易写，各个语言都有实现。下面我用 JavaScript 实现2fa来演示一下真实代码。'
              }, {'type': 'p', 'text': '首先，安装这个模块。'}, {'type': 'p', 'text': '然后，生成一个32位字符的密钥。'}, {
                'type': 'p',
                'text': '现在就可以生成哈希了。'
              }, {'type': 'h2', 'text': '六、总结'}, {
                'type': 'p',
                'text': '双因素认证的优点在于，比单纯的密码登录安全得多。就算密码泄露，只要手机还在，账户就是安全的。各种密码破解方法，都对双因素认证无效。'
              }, {
                'type': 'p',
                'text': '缺点在于，登录多了一步，费时且麻烦，用户会感到不耐烦。而且，它也不意味着账户的绝对安全，入侵者依然可以通过盗取 cookie 或 token，劫持整个对话（session）。'
              }, {'type': 'p', 'text': '双因素认证还有一个最大的问题，那就是帐户的恢复。'}, {
                'type': 'img',
                'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110111.jpg'
              }, {'type': 'p', 'text': '一旦忘记密码或者遗失手机，想要恢复登录，势必就要绕过双因素认证，这就形成了一个安全漏洞。除非准备两套双因素认证，一套用来登录，另一套用来恢复账户。'}, {
                'type': 'h2',
                'text': '七、参考链接'
              }, {'type': 'p', 'text': '（正文完）'}
            ]
          },
          {
            title: '双因素认证（2FA）教程',
            content: [
              {
                type: 'p',
                text: '所谓认证（authentication）就是确认用户的身份，是网站登录必不可少的步骤。'
              },
              {
                type: 'p',
                text: '密码是最常见的认证方法，但是不安全，容易泄露和冒充。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110101.jpg'
              },
              {
                type: 'p',
                text: '越来越多的地方，要求启用双因素认证（Two-factor authentication，简称 2FA）。本文介绍它的概念和实现方法。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110102.png'
              },
              {
                type: 'h2',
                text: '一、双因素认证的概念'
              },
              {
                type: 'p',
                text: '一般来说，三种不同类型的证据，可以证明一个人的身份。'
              },
              {
                type: 'p',
                text: '秘密信息：只有该用户知道、其他人不知道的某种信息，比如密码。'
              },
              {
                type: 'p',
                text: '个人物品：该用户的私人物品，比如身份证、钥匙。'
              },
              {
                type: 'p',
                text: '生理特征：该用户的遗传特征，比如指纹、相貌、虹膜等等。'
              },
              {
                type: 'p',
                text: '这些证据就称为三种"因素"（factor）。因素越多，证明力就越强，身份就越可靠。'
              },
              {
                type: 'p',
                text: '双因素认证就是指，通过认证同时需要两个因素的证据。'
              },
              {
                type: 'p',
                text: '银行卡就是最常见的双因素认证。用户必须同时提供银行卡和密码，才能取到现金。'
              },
              {
                type: 'h2',
                text: '二、双因素认证方案'
              },
              {
                type: 'p',
                text: '常用的双因素组合是密码 + 某种个人物品，比如网上银行的 U 盾。用户插上 U 盾，再输入密码，才能登录网上银行。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110103.jpg'
              },
              {
                type: 'p',
                text: '但是，用户不可能随时携带 U 盾，手机才是最好的替代品。密码 + 手机就成了最佳的双因素认证方案。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110104.jpg'
              },
              {
                type: 'p',
                text: '国内的很多网站要求，用户输入密码时，还要提供短消息发送的验证码，以证明用户确实拥有该手机。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110105.png'
              },
              {
                type: 'p',
                text: '但是，短消息是不安全的，容易被拦截和伪造，SIM 卡也可以克隆。已经有案例，先伪造身份证，再申请一模一样的手机号码，把钱转走。'
              },
              {
                type: 'p',
                text: '因此，安全的双因素认证不是密码 + 短消息，而是下面要介绍的 TOTP。'
              },
              {
                type: 'h2',
                text: '三、TOTP 的概念'
              },
              {
                type: 'p',
                text: 'TOTP 的全称是"基于时间的一次性密码"（Time-based One-time Password）。它是公认的可靠解决方案，已经写入国际标准 RFC6238。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110106.jpg'
              },
              {
                type: 'p',
                text: '它的步骤如下。'
              },
              {
                type: 'p',
                text: '第一步，用户开启双因素认证后，服务器生成一个密钥。'
              },
              {
                type: 'p',
                text: '第二步：服务器提示用户扫描二维码（或者使用其他方式），把密钥保存到用户的手机。也就是说，服务器和用户的手机，现在都有了同一把密钥。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110107.png'
              },
              {
                type: 'p',
                text: '注意，密钥必须跟手机绑定。一旦用户更换手机，就必须生成全新的密钥。'
              },
              {
                type: 'p',
                text: '第三步，用户登录时，手机客户端使用这个密钥和当前时间戳，生成一个哈希，有效期默认为30秒。用户在有效期内，把这个哈希提交给服务器。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110108.png'
              },
              {
                type: 'p',
                text: '第四步，服务器也使用密钥和当前时间戳，生成一个哈希，跟用户提交的哈希比对。只要两者不一致，就拒绝登录。'
              },
              {
                type: 'p',
                text: '第三步，用户登录时，手机客户端使用这个密钥和当前时间戳，生成一个哈希，有效期默认为30秒。用户在有效期内，把这个哈希提交给服务器。'
              },
              {'type': 'h2', 'text': '五、TOTP 的实现'}, {
                'type': 'p',
                'text': 'TOTP 很容易写，各个语言都有实现。下面我用 JavaScript 实现2fa来演示一下真实代码。'
              }, {'type': 'p', 'text': '首先，安装这个模块。'}, {'type': 'p', 'text': '然后，生成一个32位字符的密钥。'}, {
                'type': 'p',
                'text': '现在就可以生成哈希了。'
              }, {'type': 'h2', 'text': '六、总结'}, {
                'type': 'p',
                'text': '双因素认证的优点在于，比单纯的密码登录安全得多。就算密码泄露，只要手机还在，账户就是安全的。各种密码破解方法，都对双因素认证无效。'
              }, {
                'type': 'p',
                'text': '缺点在于，登录多了一步，费时且麻烦，用户会感到不耐烦。而且，它也不意味着账户的绝对安全，入侵者依然可以通过盗取 cookie 或 token，劫持整个对话（session）。'
              }, {'type': 'p', 'text': '双因素认证还有一个最大的问题，那就是帐户的恢复。'}, {
                'type': 'img',
                'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110111.jpg'
              }, {'type': 'p', 'text': '一旦忘记密码或者遗失手机，想要恢复登录，势必就要绕过双因素认证，这就形成了一个安全漏洞。除非准备两套双因素认证，一套用来登录，另一套用来恢复账户。'}, {
                'type': 'h2',
                'text': '七、参考链接'
              }, {'type': 'p', 'text': '（正文完）'}
            ]
          },
          {
            title: '双因素认证（2FA）教程',
            content: [
              {
                type: 'p',
                text: '所谓认证（authentication）就是确认用户的身份，是网站登录必不可少的步骤。'
              },
              {
                type: 'p',
                text: '密码是最常见的认证方法，但是不安全，容易泄露和冒充。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110101.jpg'
              },
              {
                type: 'p',
                text: '越来越多的地方，要求启用双因素认证（Two-factor authentication，简称 2FA）。本文介绍它的概念和实现方法。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110102.png'
              },
              {
                type: 'h2',
                text: '一、双因素认证的概念'
              },
              {
                type: 'p',
                text: '一般来说，三种不同类型的证据，可以证明一个人的身份。'
              },
              {
                type: 'p',
                text: '秘密信息：只有该用户知道、其他人不知道的某种信息，比如密码。'
              },
              {
                type: 'p',
                text: '个人物品：该用户的私人物品，比如身份证、钥匙。'
              },
              {
                type: 'p',
                text: '生理特征：该用户的遗传特征，比如指纹、相貌、虹膜等等。'
              },
              {
                type: 'p',
                text: '这些证据就称为三种"因素"（factor）。因素越多，证明力就越强，身份就越可靠。'
              },
              {
                type: 'p',
                text: '双因素认证就是指，通过认证同时需要两个因素的证据。'
              },
              {
                type: 'p',
                text: '银行卡就是最常见的双因素认证。用户必须同时提供银行卡和密码，才能取到现金。'
              },
              {
                type: 'h2',
                text: '二、双因素认证方案'
              },
              {
                type: 'p',
                text: '常用的双因素组合是密码 + 某种个人物品，比如网上银行的 U 盾。用户插上 U 盾，再输入密码，才能登录网上银行。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110103.jpg'
              },
              {
                type: 'p',
                text: '但是，用户不可能随时携带 U 盾，手机才是最好的替代品。密码 + 手机就成了最佳的双因素认证方案。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110104.jpg'
              },
              {
                type: 'p',
                text: '国内的很多网站要求，用户输入密码时，还要提供短消息发送的验证码，以证明用户确实拥有该手机。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110105.png'
              },
              {
                type: 'p',
                text: '但是，短消息是不安全的，容易被拦截和伪造，SIM 卡也可以克隆。已经有案例，先伪造身份证，再申请一模一样的手机号码，把钱转走。'
              },
              {
                type: 'p',
                text: '因此，安全的双因素认证不是密码 + 短消息，而是下面要介绍的 TOTP。'
              },
              {
                type: 'h2',
                text: '三、TOTP 的概念'
              },
              {
                type: 'p',
                text: 'TOTP 的全称是"基于时间的一次性密码"（Time-based One-time Password）。它是公认的可靠解决方案，已经写入国际标准 RFC6238。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110106.jpg'
              },
              {
                type: 'p',
                text: '它的步骤如下。'
              },
              {
                type: 'p',
                text: '第一步，用户开启双因素认证后，服务器生成一个密钥。'
              },
              {
                type: 'p',
                text: '第二步：服务器提示用户扫描二维码（或者使用其他方式），把密钥保存到用户的手机。也就是说，服务器和用户的手机，现在都有了同一把密钥。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110107.png'
              },
              {
                type: 'p',
                text: '注意，密钥必须跟手机绑定。一旦用户更换手机，就必须生成全新的密钥。'
              },
              {
                type: 'p',
                text: '第三步，用户登录时，手机客户端使用这个密钥和当前时间戳，生成一个哈希，有效期默认为30秒。用户在有效期内，把这个哈希提交给服务器。'
              },
              {
                type: 'img',
                url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110108.png'
              },
              {
                type: 'p',
                text: '第四步，服务器也使用密钥和当前时间戳，生成一个哈希，跟用户提交的哈希比对。只要两者不一致，就拒绝登录。'
              },
              {
                type: 'p',
                text: '第三步，用户登录时，手机客户端使用这个密钥和当前时间戳，生成一个哈希，有效期默认为30秒。用户在有效期内，把这个哈希提交给服务器。'
              },
              {'type': 'h2', 'text': '五、TOTP 的实现'}, {
                'type': 'p',
                'text': 'TOTP 很容易写，各个语言都有实现。下面我用 JavaScript 实现2fa来演示一下真实代码。'
              }, {'type': 'p', 'text': '首先，安装这个模块。'}, {'type': 'p', 'text': '然后，生成一个32位字符的密钥。'}, {
                'type': 'p',
                'text': '现在就可以生成哈希了。'
              }, {'type': 'h2', 'text': '六、总结'}, {
                'type': 'p',
                'text': '双因素认证的优点在于，比单纯的密码登录安全得多。就算密码泄露，只要手机还在，账户就是安全的。各种密码破解方法，都对双因素认证无效。'
              }, {
                'type': 'p',
                'text': '缺点在于，登录多了一步，费时且麻烦，用户会感到不耐烦。而且，它也不意味着账户的绝对安全，入侵者依然可以通过盗取 cookie 或 token，劫持整个对话（session）。'
              }, {'type': 'p', 'text': '双因素认证还有一个最大的问题，那就是帐户的恢复。'}, {
                'type': 'img',
                'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110111.jpg'
              }, {'type': 'p', 'text': '一旦忘记密码或者遗失手机，想要恢复登录，势必就要绕过双因素认证，这就形成了一个安全漏洞。除非准备两套双因素认证，一套用来登录，另一套用来恢复账户。'}, {
                'type': 'h2',
                'text': '七、参考链接'
              }, {'type': 'p', 'text': '（正文完）'}
            ]
          }
        ]
      })
    })
    // return fetch(url, params)
  },
  getArticleComments (params, url = '/api/get_article_comments') {
    return new Promise((resolve, reject) => {
      resolve({
        re: '200',
        data: [
          {
            id: '1001',
            author: 'Spring J Phoenix',
            content: '浅显易懂，Thumbs up！',
            ref: '',
            children: []
          },
          {
            id: '1002',
            ref: '',
            author: '百年目标第一季',
            content: '每次使用都比较好奇居然没有被墙。。。。',
            children: []
          },
          {
            id: '1002',
            ref: '',
            author: 'baixiangcpp',
            content: '有一种小黄车就是基于 TOTP 算法的吧。4个按钮的那种小黄车。 ',
            children: [
              {
                id: '1004',
                ref: '1002',
                author: '潞潞',
                content: '那个是固定的吧，出厂就不会变了。',
                at: 'baixiangcpp'
              }
            ]
          },
          {
            id: '1003',
            ref: '',
            author: 'Spring J Phoenix',
            content: '浅显易懂，Thumbs up！',
            children: []
          }
        ]
      })
    })
  }
}
