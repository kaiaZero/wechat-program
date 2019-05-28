const pagination = Behavior({
  data:{
    dataArray:[],
    total:0,
    loading:false
  },
  methods:{
    setMoreData(dataArray){
      const tempArray = this.data.dataArray.cancat(dataArray)
      this.setData({
        dataArray: tempArray
      })
    },

    getCurrentStart(){
      return this.data.dataArray.length
    },

    setTotal(){
      this.data.total = total
    },

    hasMore(){
      if(this.data.dataArray.length > this.data.total){
        return false
      }else{
        return true
      }
    },
    initialize(){
      this.setData({
        dataArray:[],
        nonResult:false,
        loading:false
      })
    },
    isLocked() {
      return this.data.loading ? true : false
    },
    locked() {
      this.setData({
        loading: true
      })
    },
    unLocked() {
      this.setData({
        loading: false
      })
    }

  }
})

export {paginationBev}