// pages/book/book.js
import {
  BookModel
} from '../../models/book.js'
import {
  random
} from '../../util/common.js'

const bookModel = new BookModel()

Page({

/**
 * 页面的初始数据
 */
data: {
  books:[],
  searching:false,
  hotSearch:[],
  more:''
},

/**
 * 生命周期函数--监听页面加载
 */
onLoad: function(options) {
  bookModel.getHotList()
  .then(res=>{
    this.setData({
      books:res
    }) 
  })
  bookModel.getHotKeywords()
  .then(res=>{
    this.setData({
      hotSearch: res.hot
    })  
  })
  //多次调用api的情况
  //promise的正确用法
  // bookModel.getHotList()
  // .then(res=>{
  //   console.log(res)
  //   return bookModel.getMyBookCount()
  // }).then(res=>{
  //   console.log(res)
  //   return bookModel.getMyBookCount()
  // }).then(res=>{
  //   console.log(res)
  // })
  // const hotList = bookModel.getHotList()
  //典型的promise错误用法
  // hotList.then(res=>{
  //   console.log(res)
  //   bookModel.getMyBookCount()
  //   .then(res=>{
  //     console.log(res)
  //     bookModel.getMyBookCount
  //     .then(res=>{
  //       console.log(res)
  //     })
  //   })
  // })

},
onSearching(){
  this.setData({
    searching:true
  })
},
onCancel(){
  this.setData({
    searching: false
  })
},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({
      more:random(16)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})