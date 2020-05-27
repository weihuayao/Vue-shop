import Mock from 'mockjs'
import position from './position.js'
import indexCategory from './index_category'
import shop from './shops'
import lougout from './logout'
import {
  userInfoSuccess,
  pwdSucces,
  pwdFail,
  loginSmsSuccess,
  loginSmsFail
} from './userinfo'
import data from './data'

Mock.mock('/position', 'get', () => {
  return position
})

Mock.mock('/indexCategory', 'get', () => {
  return indexCategory
})

Mock.mock('/shops', 'get', () => {
  return shop
})

// 账号密码登录
Mock.mock('/login_pwd', 'post', (options) => {
  const {name, pwd, captcha} = JSON.parse(options.body)
  if (name === 'admin' && pwd === 'admin' && captcha === 'wk3v') {
    return pwdSucces
  } else {
    return pwdFail
  }
})

// 手机号验证码登录
Mock.mock('/login_sms', 'post', (options) => {
  console.log(options)
  const {phone, code} = JSON.parse(options.body)
  if (phone === '15797671079' && code === '961122') {
    return loginSmsSuccess
  } else {
    return loginSmsFail
  }
})

// 获取短信验证码
Mock.mock('/sendcode' + '.*', 'get', (options) => {
  console.log(options)
  return shop
})

Mock.mock('/userinfo', 'get', () => {
  return userInfoSuccess
})

Mock.mock('/logout', 'get', () => {
  return lougout
})

Mock.mock('/info', {code: 0, data: data.info})

Mock.mock('/goods', {code: 0, data: data.goods})

Mock.mock('/ratings', {code: 0, data: data.ratings})
