import { fetch } from 'common/utils'

export default {
  getNavList (params, url = '/api/get_nav_list') {
    // return new Promise((resolve, reject) => {
    //   resolve({
    //     re: '200',
    //     data: [
    //       {
    //         label: 'IT技术',
    //         id: 'it',
    //         icon: 'icon-electronics',
    //         children: [
    //           {
    //             label: '前端',
    //             id: 'front-end',
    //             children: []
    //           },
    //           {
    //             label: '后端',
    //             id: 'back-end',
    //             children: []
    //           },
    //           {
    //             label: '人工智能',
    //             id: 'AI',
    //             children: [
    //               {
    //                 label: '机器学习',
    //                 id: 'machine-learning',
    //                 children: []
    //               },
    //               {
    //                 label: '神经网络',
    //                 id: 'neural-net',
    //                 children: []
    //               },
    //               {
    //                 label: '知识图谱',
    //                 id: 'knowledge-graph',
    //                 children: []
    //               }
    //             ]
    //           }
    //         ]
    //       },
    //       {
    //         label: '电影',
    //         id: 'movie',
    //         icon: 'icon-iconfontplay2',
    //         children: []
    //       },
    //       {
    //         label: '段子',
    //         id: 'joke',
    //         icon: 'icon-smile',
    //         children: []
    //       },
    //       {
    //         label: '绘画',
    //         id: 'painting',
    //         icon: 'icon-color',
    //         children: []
    //       },
    //       {
    //         label: '漫画',
    //         id: 'cartoon',
    //         icon: 'icon-toys',
    //         children: []
    //       },
    //       {
    //         label: '摄影',
    //         id: 'photograph',
    //         icon: 'icon-video',
    //         children: []
    //       },
    //       {
    //         label: '历史',
    //         id: 'history',
    //         icon: 'icon-office',
    //         children: []
    //       }
    //     ]
    //   })
    // })
    return fetch(url, params)
  },
  getRecommendList (params, url = '/api/get_recommend_list') {
    // return new Promise((resolve, reject) => {
    //   resolve({
    //     re: '200',
    //     data: [
    //       {
    //         thumbnail: '/images/the-story-of-success.JPG',
    //         url: 'https://book.douban.com/subject/25863621/',
    //         title: '不一样的成功启示录',
    //         desc: '怪才格拉德威尔告诉我们，如果没有机遇和文化、环境因素，即便是智商超过爱因斯坦，也只能做一份平庸的工作。'
    //       },
    //       {
    //         thumbnail: '/images/the-story-of-success.JPG',
    //         url: 'https://book.douban.com/subject/25863621/',
    //         title: '不一样的成功启示录',
    //         desc: '怪才格拉德威尔告诉我们，如果没有机遇和文化、环境因素，即便是智商超过爱因斯坦，也只能做一份平庸的工作。'
    //       },
    //       {
    //         thumbnail: '/images/the-story-of-success.JPG',
    //         url: 'https://book.douban.com/subject/25863621/',
    //         title: '不一样的成功启示录',
    //         desc: '怪才格拉德威尔告诉我们，如果没有机遇和文化、环境因素，即便是智商超过爱因斯坦，也只能做一份平庸的工作。'
    //       }
    //     ]
    //   })
    // })
    return fetch(url, params)
  },
  getArticleList (params, url = '/api/get_page') {
    // return new Promise((resolve, reject) => {
    //   resolve({
    //     re: '200',
    //     data: [
    //       {
    //         title: '双因素认证（2FA）教程',
    //         content: [
    //           {
    //             type: 'p',
    //             text: '所谓认证（authentication）就是确认用户的身份，是网站登录必不可少的步骤。'
    //           },
    //           {
    //             type: 'p',
    //             text: '密码是最常见的认证方法，但是不安全，容易泄露和冒充。'
    //           },
    //           {
    //             type: 'img',
    //             url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110101.jpg'
    //           },
    //           {
    //             type: 'p',
    //             text: '越来越多的地方，要求启用双因素认证（Two-factor authentication，简称 2FA）。本文介绍它的概念和实现方法。'
    //           },
    //           {
    //             type: 'img',
    //             url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110102.png'
    //           },
    //           {
    //             type: 'h2',
    //             text: '一、双因素认证的概念'
    //           },
    //           {
    //             type: 'p',
    //             text: '一般来说，三种不同类型的证据，可以证明一个人的身份。'
    //           },
    //           {
    //             type: 'p',
    //             text: '秘密信息：只有该用户知道、其他人不知道的某种信息，比如密码。'
    //           },
    //           {
    //             type: 'p',
    //             text: '个人物品：该用户的私人物品，比如身份证、钥匙。'
    //           },
    //           {
    //             type: 'p',
    //             text: '生理特征：该用户的遗传特征，比如指纹、相貌、虹膜等等。'
    //           },
    //           {
    //             type: 'p',
    //             text: '这些证据就称为三种"因素"（factor）。因素越多，证明力就越强，身份就越可靠。'
    //           },
    //           {
    //             type: 'p',
    //             text: '双因素认证就是指，通过认证同时需要两个因素的证据。'
    //           },
    //           {
    //             type: 'p',
    //             text: '银行卡就是最常见的双因素认证。用户必须同时提供银行卡和密码，才能取到现金。'
    //           },
    //           {
    //             type: 'h2',
    //             text: '二、双因素认证方案'
    //           },
    //           {
    //             type: 'p',
    //             text: '常用的双因素组合是密码 + 某种个人物品，比如网上银行的 U 盾。用户插上 U 盾，再输入密码，才能登录网上银行。'
    //           },
    //           {
    //             type: 'img',
    //             url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110103.jpg'
    //           },
    //           {
    //             type: 'p',
    //             text: '但是，用户不可能随时携带 U 盾，手机才是最好的替代品。密码 + 手机就成了最佳的双因素认证方案。'
    //           },
    //           {
    //             type: 'img',
    //             url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110104.jpg'
    //           },
    //           {
    //             type: 'p',
    //             text: '国内的很多网站要求，用户输入密码时，还要提供短消息发送的验证码，以证明用户确实拥有该手机。'
    //           },
    //           {
    //             type: 'img',
    //             url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110105.png'
    //           },
    //           {
    //             type: 'p',
    //             text: '但是，短消息是不安全的，容易被拦截和伪造，SIM 卡也可以克隆。已经有案例，先伪造身份证，再申请一模一样的手机号码，把钱转走。'
    //           },
    //           {
    //             type: 'p',
    //             text: '因此，安全的双因素认证不是密码 + 短消息，而是下面要介绍的 TOTP。'
    //           },
    //           {
    //             type: 'h2',
    //             text: '三、TOTP 的概念'
    //           },
    //           {
    //             type: 'p',
    //             text: 'TOTP 的全称是"基于时间的一次性密码"（Time-based One-time Password）。它是公认的可靠解决方案，已经写入国际标准 RFC6238。'
    //           },
    //           {
    //             type: 'img',
    //             url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110106.jpg'
    //           },
    //           {
    //             type: 'p',
    //             text: '它的步骤如下。'
    //           },
    //           {
    //             type: 'p',
    //             text: '第一步，用户开启双因素认证后，服务器生成一个密钥。'
    //           },
    //           {
    //             type: 'p',
    //             text: '第二步：服务器提示用户扫描二维码（或者使用其他方式），把密钥保存到用户的手机。也就是说，服务器和用户的手机，现在都有了同一把密钥。'
    //           },
    //           {
    //             type: 'img',
    //             url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110107.png'
    //           },
    //           {
    //             type: 'p',
    //             text: '注意，密钥必须跟手机绑定。一旦用户更换手机，就必须生成全新的密钥。'
    //           },
    //           {
    //             type: 'p',
    //             text: '第三步，用户登录时，手机客户端使用这个密钥和当前时间戳，生成一个哈希，有效期默认为30秒。用户在有效期内，把这个哈希提交给服务器。'
    //           },
    //           {
    //             type: 'img',
    //             url: 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110108.png'
    //           },
    //           {
    //             type: 'p',
    //             text: '第四步，服务器也使用密钥和当前时间戳，生成一个哈希，跟用户提交的哈希比对。只要两者不一致，就拒绝登录。'
    //           },
    //           {
    //             type: 'p',
    //             text: '第三步，用户登录时，手机客户端使用这个密钥和当前时间戳，生成一个哈希，有效期默认为30秒。用户在有效期内，把这个哈希提交给服务器。'
    //           },
    //           {'type': 'h2', 'text': '五、TOTP 的实现'}, {
    //             'type': 'p',
    //             'text': 'TOTP 很容易写，各个语言都有实现。下面我用 JavaScript 实现2fa来演示一下真实代码。'
    //           }, {'type': 'p', 'text': '首先，安装这个模块。'}, {'type': 'p', 'text': '然后，生成一个32位字符的密钥。'}, {
    //             'type': 'p',
    //             'text': '现在就可以生成哈希了。'
    //           }, {'type': 'h2', 'text': '六、总结'}, {
    //             'type': 'p',
    //             'text': '双因素认证的优点在于，比单纯的密码登录安全得多。就算密码泄露，只要手机还在，账户就是安全的。各种密码破解方法，都对双因素认证无效。'
    //           }, {
    //             'type': 'p',
    //             'text': '缺点在于，登录多了一步，费时且麻烦，用户会感到不耐烦。而且，它也不意味着账户的绝对安全，入侵者依然可以通过盗取 cookie 或 token，劫持整个对话（session）。'
    //           }, {'type': 'p', 'text': '双因素认证还有一个最大的问题，那就是帐户的恢复。'}, {
    //             'type': 'img',
    //             'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017110111.jpg'
    //           }, {'type': 'p', 'text': '一旦忘记密码或者遗失手机，想要恢复登录，势必就要绕过双因素认证，这就形成了一个安全漏洞。除非准备两套双因素认证，一套用来登录，另一套用来恢复账户。'}, {
    //             'type': 'h2',
    //             'text': '七、参考链接'
    //           }, {'type': 'p', 'text': '（正文完）'}
    //         ],
    //         negative: '10',
    //         positive: '1099'
    //       },
    //       {
    //         title: '换头术',
    //         negative: '111',
    //         positive: '999',
    //         content: [{'type': 'p', 'text': '1、'}, {'type': 'p', 'text': '我读过一本医学畅销书《最好的告别》，作者是美国医生葛文德。'}, {
    //           'type': 'p',
    //           'text': '他的一个观点，令我印象深刻。他说，医学的进步改变了人们对于死亡的看法。人们不再把死亡当作不可避免的自然结果，而是归因于某种技术失败。某个治疗步骤出错了，或者技术还不够好，所以病人死了。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017101201.jpg'}, {
    //           'type': 'p',
    //           'text': '既然死亡是技术失败，而技术问题总可以用更好的技术解决，所以人们逐渐形成一种观念：衰老和死亡只有在反常的情况下才会发生，正常情况下是可以治疗和延迟的。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017101202.jpg'}, {
    //           'type': 'p',
    //           'text': '2、'
    //         }, {'type': 'p', 'text': '我一直无法忘怀这个观点，技术是否可以阻止死亡？如果技术变得无比先进，人类是否真能将死亡推迟得足够久，活到200岁呢？'}, {
    //           'type': 'p',
    //           'text': '我越来越觉得，这是很有可能的。未来人类的寿命也许非常长，远超过自然的生理极限。'
    //         }, {
    //           'type': 'p',
    //           'text': '延长寿命的关键是什么？我认为主要就是一点：克服器官老化和衰竭，方法就是器官移植。目前，器官移植的成功率正变得越来越高，越来越多的器官可以移植。肺癌就换肺，肝癌就换肝，冠心病就换心，都有办法救回来。'
    //         }, {'type': 'img', 'url': 'http://image.beekka.com/blog/201311/bg2013110412.jpg'}, {
    //           'type': 'p',
    //           'text': '台北市长柯文哲曾经是台大医院的外科权威，在一次演讲中，讲过两个他亲手处理的病例。一个女孩九天没有心跳，全靠体外循环维持生命，最后还是撑到心脏移植，活了过来；另一个病例更厉害，心脏由于严重的细菌感染都烂了，只好拿掉，没心脏撑了16天，心脏移植以后也活了下来。'
    //         }, {'type': 'img', 'url': 'http://image.beekka.com/blog/201311/bg2013110409.jpg'}, {
    //           'type': 'p',
    //           'text': '随着手术技术的成熟、抗排异药物的完善、人造器官的出现，可以想象，未来的器官移植终将像拔牙那样简单易行、安全可靠。'
    //         }, {'type': 'p', 'text': '3、'}, {'type': 'p', 'text': '目前为止，只有一个器官，从来没有人尝试过移植，那就是脑袋。'}, {
    //           'type': 'img',
    //           'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017101203.jpg'
    //         }, {
    //           'type': 'p',
    //           'text': '医学上，死亡的定义就是脑死亡。也就是说，如果大脑死了，就算身体的其他部分还活着（心脏还在跳动），这个人也是死了。反过来说，如果其他部分坏死了，但是大脑还有意识，那么这个人就是还活着。'
    //         }, {'type': 'p', 'text': '大部分人死的时候，大脑的功能其实都是好的，思维依然敏捷，就是身体的其他部分不行了，导致大脑养分供不上，于是先陷入昏迷，然后再死亡。'}, {
    //           'type': 'p',
    //           'text': '如果头部移植可以成功，那么人的寿命就会有本质的提高。躯干不行了，脑袋就移植到另一个躯干上，于是就可以接着活。'
    //         }, {'type': 'p', 'text': '4、'}, {
    //           'type': 'p',
    //           'text': '头部移植的难度无疑是极高的，血管和神经都要正确连接。一个人的大脑如何指挥另一具身体，没有人知道能不能实现。但是，技术是那么地不可思议，我觉得没有理由怀疑可能性，未来是一定可以做到头部移植。'
    //         }, {'type': 'p', 'text': '事实上，1970年就有人尝试，一只猴子的脑袋移植到另一只猴子身上。手术后猴子活了三天，被认为实验成功。'}, {
    //           'type': 'img',
    //           'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017101204.jpg'
    //         }, {
    //           'type': 'p',
    //           'text': '迄今为止，人的大脑移植还从来没有实验过。有一位意大利神经科医生 Sergio Canavero 宣称2017年底前，就要完成第一例头部移植手术。他还宣称，已经在一条狗身上实验成功，将脊髓神经跟大脑连接起来，让这条瘫痪的狗重新恢复了行动能力。'
    //         }, {
    //           'type': 'p',
    //           'text': '他还找到了一位俄国志愿者，此人患有退化性疾病，不能行走，不能照料自己，类似英国物理学家霍金的情况，因此愿意割下自己的脑袋，让医生安装在另一具躯体上。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017101205.jpg'}, {
    //           'type': 'p',
    //           'text': '医学界普遍不相信这个实验，认为这不过是另一场伪科学的闹剧。但是，没有一个科学家说，头部移植是绝对不可能的。'
    //         }, {'type': 'p', 'text': '5、'}, {
    //           'type': 'p',
    //           'text': '展望未来，几乎可以肯定，人类将不再是纯自然的产物，很可能一部分器官和肢体是自然的，另一部分是人工合成材料。这既是为了替换坏掉的器官，也可能是为了追求更强的功能，比如安装电动的碳纤维假肢，老年人就可以健步如飞，登高山如履平地。'
    //         }, {'type': 'p', 'text': '美国发明家、《奇点迫近》的作者、谷歌公司工程总监雷蒙德·库兹维尔（Raymond Kurzweil）说过一句著名的话。'}, {
    //           'type': 'p',
    //           'text': '未来，器官移植和换头术一旦成熟，人的寿命可能会翻倍增加。那时，只要保住脑袋就可以了，其他部分就不太重要了，因为可以换。动画《Futurama》里面，人甚至连躯体都不需要了，就是一个头安装在底座上那样活着。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017101206.jpg'}, {
    //           'type': 'p',
    //           'text': '到了那个地步，人与机器就将合为一体：机器给了人更长的寿命，人给了机器灵魂。'
    //         }, {'type': 'p', 'text': '（说明：本文选自我正在写的新书《未来世界的幸存者》，点击这里免费阅读全书。）'}, {'type': 'p', 'text': '（完）'}]
    //       },
    //       {
    //         title: 'CSS 框架 Bulma 教程',
    //         negative: '111',
    //         positive: '999',
    //         content: [{'type': 'p', 'text': '网页样式需要大量时间开发，最省事的方法就是使用 CSS 框架。'}, {
    //           'type': 'p',
    //           'text': 'Bootstrap 是最著名的 CSS 框架，但是今天我想推荐另一个更轻量化、更易用的框架----Bulma。有了它，即使完全不懂 CSS，也可以轻而易举做出美观的网页。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102301.png'}, {
    //           'type': 'p',
    //           'text': '我要感谢 100offer 对我提供赞助。100offer 是国内第一流的人力资源网站，本文结尾有他们的简介，最近想换工作的朋友可以看一下。'
    //         }, {'type': 'h2', 'text': '一、简介'}, {
    //           'type': 'p',
    //           'text': 'Bulma 框架最大的特点，就是简单好用。所有样式都基于class，只需为 HTML 元素指定class，样式立刻生效。'
    //         }, {'type': 'p', 'text': '上面代码中，a 元素只需加上几个class，就会出现一个主色调（is-primary）的大（is-large）按钮。'}, {
    //           'type': 'img',
    //           'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102302.png'
    //         }, {'type': 'p', 'text': 'Bulma 是一个手机优先的框架，提供五个宽度断点，具有良好的自适应特性，可以随心所欲为不同设备设置不同样式。'}, {
    //           'type': 'img',
    //           'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102303.png'
    //         }, {
    //           'type': 'p',
    //           'text': '它提供二十多种常用组件，比如表单 、表格、图标、面包屑、菜单、导航、Modal 窗口等等。简单的网站，可以不用写任何 CSS 代码。'
    //         }, {'type': 'h2', 'text': '二、基本用法'}, {'type': 'p', 'text': 'Bulma 的安装只需一步，把样式表插入网页即可。'}, {
    //           'type': 'p',
    //           'text': '使用更简单，就是为 HTML 元素加上class。'
    //         }, {'type': 'p', 'text': '上面的代码为 a 元素加上button类，这个链接就会被渲染成按钮。'}, {
    //           'type': 'img',
    //           'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102304.png'
    //         }, {
    //           'type': 'p',
    //           'text': 'Bulma 提供大量的修饰类，用来改变基类的样式。它们都是以is-或has-开头。比如，要改变 Button 的大小，就可以使用下面的修饰类。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102306.png'}, {
    //           'type': 'p',
    //           'text': 'Bulma 默认提供6种颜色。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102305.png'}, {
    //           'type': 'p',
    //           'text': '按钮状态的修饰类如下。'
    //         }, {'type': 'p', 'text': '完整的修饰类清单请看官方文档。'}, {'type': 'h2', 'text': '三、网格体系'}, {
    //           'type': 'p',
    //           'text': 'Bulma 的网格体系基于 Flex 布局，写起来非常容易。最简单的用法就是使用columns指定容器，使用column指定项目。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102307.png'}, {
    //           'type': 'p',
    //           'text': '屏幕宽度大于 768px 时，所有项目平铺，平分容器的宽度；宽度小于等于 768px 时，所有项目变成垂直堆叠。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102311.png'}, {
    //           'type': 'p',
    //           'text': '以下的修饰类用来指定项目的宽度。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102309.png'}, {
    //           'type': 'p',
    //           'text': '此外，还有一些修饰类也非常有用。'
    //         }, {'type': 'p', 'text': 'Bulma 也支持12网格体系。'}, {
    //           'type': 'img',
    //           'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102310.png'
    //         }, {'type': 'p', 'text': '如果要指定某个网格偏移，可以用is-offset-修饰类。'}, {'type': 'h2', 'text': '四、响应式布局'}, {
    //           'type': 'p',
    //           'text': '前面说过，Bulma 有五个宽度断点，分别是 mobile（手机）、tablet（平板）、desktop（桌面）、widescreen（宽屏）、fullHD（高清）。'
    //         }, {'type': 'p', 'text': 'columns布局默认是在手机上垂直堆叠，其他宽度都是平铺。如果希望手机也保持平铺，可以加上is-mobile修饰类。'}, {
    //           'type': 'p',
    //           'text': '如果希望手机和平板是垂直堆叠，其他宽度平铺，可以使用is-desktop修饰类。'
    //         }, {'type': 'p', 'text': '如果希望在不同设备，网格占据不同的宽度，可以像下面这样写。'}, {
    //           'type': 'p',
    //           'text': '上面代码中，这个网格在手机上占据二分之一宽度，平板三分之一宽度，桌面四分之一宽度，宽屏和高清则是平铺。'
    //         }, {'type': 'p', 'text': 'Bulma 允许为不同设备指定不同的布局。'}, {
    //           'type': 'p',
    //           'text': '上面代码中，手机是 flex 布局，平板是 inline 布局，其他宽度是 block 布局。'
    //         }, {'type': 'p', 'text': '下面是隐藏某个项目的修饰类。'}, {'type': 'p', 'text': '完整的清单请看官方文档。'}, {
    //           'type': 'h2',
    //           'text': '五、文字'
    //         }, {'type': 'p', 'text': 'Bulma 提供7个修饰指定文字大小。'}, {'type': 'p', 'text': '可以为不同设备指定不同的文字大小。'}, {
    //           'type': 'p',
    //           'text': '此外，还有字体颜色、对齐、轻重的修饰类。'
    //         }, {'type': 'h2', 'text': '六、定制'}, {
    //           'type': 'p',
    //           'text': '最后这个部分是高级内容，讲解如何定制 Bulma，也就是修改默认样式。Bulma 采用 Sass 语法（注意，不是 Scss 语法），所以定制的样式也必须使用 SASS。'
    //         }, {'type': 'p', 'text': '首先，克隆或下载源码。'}, {'type': 'p', 'text': '然后，安装依赖。'}, {
    //           'type': 'p',
    //           'text': '接着，在源码的根目录里面，新建一个app.sass文件，定制的代码都写在这个文件。在它里面，先引入 Bulma 基础变量。如果需要的话，可以改掉。'
    //         }, {'type': 'p', 'text': '上面代码中，预设的blue、pink和family-serif变量被改掉。'}, {
    //           'type': 'p',
    //           'text': '有一些 Bulma 变量是从基础变量衍生的，需要的话也可以改掉。'
    //         }, {'type': 'p', 'text': '上面代码中，主色调改成了pink变量。'}, {
    //           'type': 'p',
    //           'text': '接着，在这个文件里面加载 Bulma 的入口脚本。'
    //         }, {'type': 'p', 'text': '这一行的下面，你就可以写自己的样式了，比如为所有标题加一个下划线。'}, {
    //           'type': 'p',
    //           'text': '最后，打开package.json，找到下面这一行。'
    //         }, {'type': 'p', 'text': '把里面的bulma.sass改成app.sass。'}, {
    //           'type': 'p',
    //           'text': '以后每次修改完样式，运行一下npm run build，就会生成自己的样式表css/bulma.css了。'
    //         }, {'type': 'p', 'text': '（全文完）'}, {'type': 'p', 'text': '================================'}, {
    //           'type': 'p',
    //           'text': ''
    //         }, {'type': 'p', 'text': '优秀的人才不缺工作机会，只缺适合自己的好机会。但是他们往往没有精力，从海量机会中找到最适合的那个。'}, {
    //           'type': 'p',
    //           'text': '100offer 让您可以向数百家互联网企业，匿名展示简历和职业期望，省下查找职位和投递简历的时间。通过这种方式，对您感兴趣的企业，主动邀请您参加面试。'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102402.png'}, {
    //           'type': 'p',
    //           'text': '100offer 的用户之中，既有厌倦了大公司螺丝钉般的重复工作，转而进入创业公司的前 BAT 员工；也有在小公司工作多年，一心想进入大公司的互联网人；还有向往国外的工作与生活，成功肉身翻墙新加坡的工程师。'
    //         }, {'type': 'p', 'text': '准备好用不一样的方式迎接更好的职业机会了吗？现在就提交申请吧！'}, {
    //           'type': 'img',
    //           'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102401.jpg'
    //         }, {
    //           'type': 'p',
    //           'text': '另外，10月24日是程序员节。作为一名敲代码为生的程序员，你是不是被旁人贴过太多不属于你的标签----死板、呆萌、宅、不解人意？'
    //         }, {'type': 'img', 'url': 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017102403.jpg'}, {
    //           'type': 'p',
    //           'text': '100offer 给你一个撕掉标签的机会：关注 100offer 微信号，发送一段话／一张图／一段视频／一条语音...展示你除了敲代码以外的神技能，还有最高价值1024元的"程序员兴趣基金"等你拿！'
    //         }, {'type': 'p', 'text': '（完）'}]
    //       }
    //     ]
    //   })
    // })
    return fetch(url, params)
  },
  getArticleComments (params, url = '/api/get_article_comments') {
    // return new Promise((resolve, reject) => {
    //   resolve({
    //     re: '200',
    //     data: [
    //       {
    //         id: '1001',
    //         author: 'Spring J Phoenix',
    //         content: '浅显易懂，Thumbs up！',
    //         ref: '',
    //         children: []
    //       },
    //       {
    //         id: '1002',
    //         ref: '',
    //         author: '百年目标第一季',
    //         content: '每次使用都比较好奇居然没有被墙。。。。',
    //         children: []
    //       },
    //       {
    //         id: '1002',
    //         ref: '',
    //         author: 'baixiangcpp',
    //         content: '有一种小黄车就是基于 TOTP 算法的吧。4个按钮的那种小黄车。 ',
    //         children: [
    //           {
    //             id: '1004',
    //             ref: '1002',
    //             author: '潞潞',
    //             content: '那个是固定的吧，出厂就不会变了。',
    //             at: 'baixiangcpp'
    //           }
    //         ]
    //       },
    //       {
    //         id: '1003',
    //         ref: '',
    //         author: 'Spring J Phoenix',
    //         content: '浅显易懂，Thumbs up！',
    //         children: []
    //       }
    //     ]
    //   })
    // })
    return fetch(url, params)
  },
  submitComment (params, url = '/api/submit_comment') {
    // return new Promise((resolve, reject) => {
    //   resolve({
    //     re: '200',
    //     message: '保存成功！'
    //   })
    // })
    return fetch(url, params)
  }
}
