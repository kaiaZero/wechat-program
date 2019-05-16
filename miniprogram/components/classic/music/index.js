// components/classic/music/index.js
import { classicBeh } from '../classic_beh.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],

  /**
   * 组件的初始数据
   */
  data: {
    pauceSrc:'images/player@waiting.png',
    playSrc:'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
