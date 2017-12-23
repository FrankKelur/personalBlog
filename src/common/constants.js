import validator from './validator'
const numberRule = /^[1-9][0-9]*$/
const longTextRule = /^[\s\S]{,10000}$/

const constants = {
  pages: [10, 15, 20, 50],
  passwordReg: /^(?![0-9A-Za-z]+$)(?![0-9\W_]+$)(?![a-zA-Z\W_]+$)[a-zA-Z0-9\W_]{8,25}$/, // 8-25个字符，必须包括大小写字母、数字及特殊字符
  pwdRule1: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![\W_]+$)[a-zA-Z0-9\W_]{8,25}$/, // z todo 8-25个字符，必须至少包括大小写字母、数字及特殊字符中的其中两种
  pwdRule2: /^[\s\S]{8,25}$/,
  length30LimitNoSpace: /^[\S]{1,30}$/, // 不能有空格
  noSpace: /^\S*$/,
  qianhouNoSpace: /^\S+|\S+$/, // 前后不能有空格
  length30Limit: /^[\s\S]{1,30}$/,
  length128Limit: /^[\s\S]{1,128}$/,
  variable0To128: /^[a-zA-Z0-9_]{0,128}$/,
  uidReg: /^[a-zA-Z0-9]{5,15}$/,
  text0To10Reg: /^[\s\S]{0,10}$/,
  text0To128Limit: /^[\s\S]{0,128}$/,
  text0To10000Limit: /^[\s\S]{0,10000}$/,
  text0To25Reg: /^[\s\S]{0,25}$/,
  text0To128Reg: /^[\s\S]{0,128}$/,
  text0To40Reg: /^[\s\S]{0,40}$/,
  longTextRule: longTextRule,
  numberRule: numberRule,
  /* eslint-disable*/
  emailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ruleMap: {
    required: {
     name: 'required',
      validator: validator.validate,
      test (val) {
        console.log('验证表单 test called')
        return !!val
      },
     // required: true,
     trigger: 'blur,change',
     message: ''
    },
    number: {
      name: 'number',
      trigger: 'blur,change',
      regex: numberRule,
      validator: validator.validate,
      message: ''
    },
    longText: {
      name: 'longText',
      trigger: 'blur,change',
      regex: longTextRule,
      validator: validator.validate,
      message: ''
    }
  }
}
export default constants
