// components/search/index.js
import {KeywordModel} from '../../models/keyword.js'
const keywordModel = new KeywordModel()
import {BookModel} from '../../models/book.js'
const bookModel = new BookModel()

Component({
  properties: {
    hotSearch:Array,
    more:{
      type:String,
      observer:'_load_more'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords:[],
    searching:false,
    dataArray:[],
    q:''
  },
  attached(){
    const word = keywordModel.getHistory()
    this.setData({
      historyWords:word
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    _load_more(){
      console.log(123)
    },
    onCancel(event){
      this.triggerEvent('cancel',{},{})
    },
    onSearch(event){
      this.setData({
        searching:true,
        dataArray: []
      })
      const word = event.detail.value || event.detail.text
      bookModel.search(0,word).then(res=>{
        this.setData({
          dataArray:res.books,
          q:word
        })
        keywordModel.addToHistory(word)
      })
    },
    onX(event){
      this.setData({
        searching:false,
        q:''
      })
    }
  }
})
