// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book:Object,
    like:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event){
      const bookid = this.properties.book.id
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bookid=${bookid}`,
      })
    }
  }
})
