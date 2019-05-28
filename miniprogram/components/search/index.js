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
      observer:'loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords:[],
    searching:false,
    dataArray:[],
    q:'',
    start:0,
    total:0,
    loading:false,
    nonResult: false,
    loadingCenter:false
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
    loadMore(){
      if(!this.data.q){
        return
      }
      if(this._isLocked()){
        return
      }
      if (this.data.start+10>=this.data.total){
        return
      }
      this._locked()
      this.setData({
        start:this.data.start+10,
      })
      console.log(this.data.start)

      bookModel.search(this.data.start, this.data.q).then(res=>{
        this.setData({
          dataArray: this.data.dataArray.concat(res.books),
        })
        this._unLocked()
        console.log(this.data.loading)
      },()=>{
        this._unLocked()
      })
    },
    onCancel(event){
      this.triggerEvent('cancel',{},{})
    },
    onSearch(event){
      const word = event.detail.value || event.detail.text
      this._showResult()
      this.setData({
        dataArray: [],
        start:0,
        nonResult: false,
        loadingCenter:true
      })
      bookModel.search(0,word).then(res=>{
        this.setData({
          dataArray:res.books,
          q:word,
          total:res.total,
          loadingCenter:false
        })
        if(res.total==0){
          this.setData({
            nonResult:true
          })
        }
        this._unLocked()
        keywordModel.addToHistory(word)
      })
    },

    _isLocked() {
      return this.data.loading ? true : false
    },
    _locked() {
      this.setData({
        loading: true
      })
    },
    _unLocked(){
      this.setData({
        loading: false
      })
    },

    _showResult(){
      this.setData({
        searching:true
      })
    },
    _closeResult(){
      this.setData({
        searching: false
      })
    },
    onX(event){
      this.setData({
        q:'',
      })
      this._closeResult()
    }
  }
})
