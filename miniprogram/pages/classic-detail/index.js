import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'


let classicModel = new ClassicModel()
let likeModel = new LikeModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
    like: false,
    count: 0,
    playNo:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pn = wx.getStorageSync("playNo")
    this.setData({
      playNo: pn
    })

    let cid = options.cid
    let type = options.type

    classicModel.getById(cid, type, (data) => {
      this._getLikeStatus(data.id, data.type)
      this.setData({
        classic: data
      })
    })

  },

  _getLikeStatus(cid, type) {
    likeModel.getClassicLikeStatus(cid, type, (data) => {
      this.setData({
        like: data.like_status,
        count: data.fav_nums
      })
    })

  },
  onPlay: function (event) {
    wx.setStorageSync("playNo", event.detail)
    this.setData({
      playNo: event.detail
    })
    console.log(this.data.playNo)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})