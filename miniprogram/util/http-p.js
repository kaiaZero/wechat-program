import {
  config
} from '../config.js'

const tips = {
  1: '抱歉，出现了一个错误',
  1005: '不正确的开发者key',
  3000: '该期内容不存在',
}
class HTTP {
  //对参数解构，既能看到对象的具体属性，又能在调用时以对象形式传参
  request({url, data = {}, method = 'GET'}){
    return  new Promise((resolve,reject)=>{
      this._request(url,resolve,reject,data, method)
    })
  }
  //如果不传data和method，默认值为{}和GET
  _request(url, resolve,reject,data={}, method='GET') {
    wx.request({
      url: config.api_base_url + url,
      method,
      data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey,
      },
      success: (res)=>{
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          reject()
          const error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        reject()
        wx.showToast({
          title: '错误',
          icon: 'none',
          duration: 2000
        })

      }
    })
  }
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip?tip:tips['1'],
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  HTTP
}