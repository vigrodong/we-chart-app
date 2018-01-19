//app.js
App({
  onLaunch: function () {
    wx.getUserInfo({
      success:res=>{
        this.globalData.userInfo = res.userInfo;
      }
    })
    // 登录
    wx.login({
      success:res=>{
        wx.getUserInfo({
          success:resIn=>{
            if(!this.globalData.userInfo){
              this.globalData.userInfo = resIn.userInfo;
            }
            if (!this.globalData.session){
              wx.request({
                url: this.globalData.domain + 'wxUserLogin',
                method: 'POST',
                data: {
                  code: res.code,
                  userinfo: resIn
                },
                success:res=>{
                  console.log(res);
                },
              })
            }
          }
        })
      }
    })  
  },
  globalData: {
    domain: 'http://192.168.203.209:3000/api/',
    userInfo: null,
    session:'',
  }
})