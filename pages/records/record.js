import {request} from '../../utils/util.js'
const app = getApp();

Page({
  data:{
    list:[],
  },
  onLoad:function(){
    request({
      url: app.globalData.domain + 'records'
    }).then((res)=>{
      this.setData({list:res.data})
    })
  },
  onReachBottom:function(){
    request({
      url: app.globalData.domain + 'records'
    }).then((res) => {
      this.setData({ list: this.data.list.concat(res.data) })
    });
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    request({
      url: app.globalData.domain + 'records'
    }).then((res) => {
      console.log(2);
      this.setData({ list: res.data.concat(this.data.list) })
      console.log(this.data.list)
    });
    wx.stopPullDownRefresh();
  },
});