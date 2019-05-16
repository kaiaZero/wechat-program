import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLatest(sCallback){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        let key = this._getKey(res.index)
        wx.setStorageSync(key, res)
      }
    })
  }
  getClassic(index,nextOrPrevious,sCallBack){
    let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if(!classic){
      this.request({
        url: `classic/${index}/${nextOrPrevious}`,
        success: (res) => {
          sCallBack(res)
          wx.setStorageSync(this._getKey(res.index),res)
        }
      })
    }
    else{
      sCallBack(classic)
    }
  }

  isFirst(index){
    return index == 1 ? true: false
  }

  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  _getLatestIndex(){
    let index = wx.getStorageSync('latest')
    return index
  }

  _setLatestIndex(index){
    wx.setStorage({
      key: 'latest',
      data: index
    })
  }
  _getKey(index){
  let key = 'classic-' + index
  return key
}

}

export {ClassicModel}