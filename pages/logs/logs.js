//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
  },
  openoffer:function(){
    wx.navigateTo({
      url: '../apply/apply'
    })
  }
})
