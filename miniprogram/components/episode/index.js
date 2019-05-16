// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      // observer:function(newVal,oldVal,path){
      //   if (newVal < 10) {
      //     let newIndex = '0' + newVal
      //     this.setData({
      //       _index:newIndex
      //     })
      //   }
      // }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: Number,
    month: '',
    _index:'',
    month:[
      '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
    ]
  },

  attached:function(){
    let date = new Date()
    let year = date.getFullYear()
    let month = this.data.month[date.getMonth()]
    this.setData({
      year:year,
      month:month
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
