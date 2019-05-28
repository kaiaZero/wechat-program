import { HTTP } from '../util/http-p.js'
class BookModel extends HTTP {
  getHotList(){
    return this.request({
      url:'book/hot_list',
      })
  }
  getMyBookCount(){
    return this.request({
      url: 'book/favor/count',
    })
  }
  getDetail(bookid){
    return this.request({
      url:`book/${bookid}/detail`
    })
  }
  getLikeStatus(bookid){
    return this.request({
      url:`book/${bookid}/favor`
    })
  }
  getComments(bookid){
    return this.request({
      url:`book/${bookid}/short_comment`
    })
  }
  getHotKeywords(){
    return this.request({
      url: 'book/hot_keyword'
    })
  }
  search(start,q){
    return this.request({
      url:'book/search?summary=1',
      data: {
        start:start,
        q:q,
        count:10
      },
      method: 'GET'

    })
  }
  postComments(bookid,comment){
    return this.request({
      url:'book/add/short_comment',
      data:{
        book_id:bookid,
        content:comment
      },
      method:'Post'
    })
  }
}

export {BookModel}