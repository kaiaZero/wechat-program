// components/classic/music/index.js
import {
  classicBeh
} from '../classic_beh.js'
const mMgr = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,
    title: String,
    index: Number,
    playNo: Number
  },
  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'images/player@waiting.png',
    playSrc: 'images/player@playing.png',
    playing: false,
  },

  /**
   * 组件的方法列表
   */
  attached() {
    // 在组件实例进入页面节点树时执行
    if (this.properties.playNo !== this.properties.index) {
      this.setData({
        playing: false
      })
    } else {
      this.setData({
        playing: true
      })
    }
  },
  methods: {
    onPlay: function() {
      if (!this.data.playing) {
        mMgr.src = this.properties.src
        mMgr.title = this.properties.title
        this.setData({
          playing: !this.data.playing
        })
        mMgr.play()
        this.triggerEvent('play', this.properties.index, {})
      } else {
        mMgr.pause()
        this.setData({
          playing: false
        })
      }
    }
  }
})