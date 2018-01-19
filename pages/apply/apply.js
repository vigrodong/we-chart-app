// const app = getApp();
// console.log(app);

Page({
  data:{
    items: [
      { name: 'openidl', value: 'lbm', },
      { name: 'openidc', value: 'lgc' },
    ],
    fromdate:'',
    fromtime:'',
    todate:'',
    totime:'',
  },
  send:function(){
    var from = this.data.fromdate + ' ' + this.data.fromtime;
    var to = this.data.todate + ' ' + this.data.totime;
    var applyfor = [];
    if (from == ' ' || 
      to == ' ' || 
      applyfor.length == 0
    ){
      wx.showToast({
        title: '请确认消息填写完整',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
    wx.request({
      url: this.globalData.domain+'send',
      method:"POST",
      data:{

      },
      success:res=>{

      }
    });
  },
  bindDateOneChange: function (e) {
    this.setData({
      fromdate: e.detail.value
    });
  },
  bindTimeOneChange: function (e) {
    this.setData({
      fromtime: e.detail.value
    });
  },
  bindDateTwoChange: function (e) {
    this.setData({
      todate: e.detail.value
    });
  },
  bindTimeTwoChange: function (e) {
    this.setData({
      totime: e.detail.value
    });
  },
  checkboxChange:function(e){
    console.log(e);
  }
});