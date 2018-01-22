const request = require('../../utils/util.js').request;
const app = getApp();

Page({
  data: {
    items: [
      { name: 'openidl', value: 'lbm', },
      { name: 'openidc', value: 'lgc' },
    ],
    fromdate: '',
    fromtime: '',
    todate: '',
    totime: '',
    applyfor: [],
  },
  onLoad: function() {
    // wx.request()

  },
  send: function() {
    var data = this.data;
    var applyfor = this.data.applyfor.map(target => target);
    var processControl = false;
    [{
        isLegal: data.fromdate == '',
        message: '请填写申请日期',
      },
      {
        isLegal: data.fromtime == '',
        message: '请填写申请时间',
      },
      {
        isLegal: data.todate == '',
        message: '请填写请假结束日期',
      },
      {
        isLegal: data.totime == '',
        message: '请填写请假结束时间',
      },
      {
        isLegal: applyfor.length == 0,
        message: '请填写审批人',
      },
      {
        isLegal: data.fromdate + data.fromtime >= data.todate + data.totime,
        message: '请保证申请开始要在申请结束之前',
      }].some(target => {
      if (target.isLegal) {
        wx.showToast({
          title: target.message,
          icon: 'none',
          duration: 2000,
        });
        processControl = true;
        return true;
      }
    });
    if (processControl) {
      return false;
    }
    request({
      url: app.globalData.domain + 'askforleave',
      method: 'POST',
      data: {
        startTime: data.fromdate + ' ' + data.fromtime ,
        endTime: data.todate + ' ' + data.totime,
        applyFor: applyfor,
        token: app.globalData.token
      }
    }).then((res)=>{
      console.log(res);
      wx.showToast({
        title: '请求成功',
        icon: 'success',
        duration: 2000,
      });
    }).catch((err)=>{
      wx.showToast({
        title: '请求成功',
        icon: 'success',
        duration: 2000,
      });
      console.log(err);
    });
  },
  bindDateOneChange: function(e) {
    this.setData({
      fromdate: e.detail.value,
    });
  },
  bindTimeOneChange: function(e) {
    this.setData({
      fromtime: e.detail.value,
    });
  },
  bindDateTwoChange: function(e) {
    this.setData({
      todate: e.detail.value,
    });
  },
  bindTimeTwoChange: function(e) {
    this.setData({
      totime: e.detail.value,
    });
  },
  checkboxChange: function(e) {
    console.log(e.detail.value);
    this.data.applyfor = e.detail.value;
  },
});