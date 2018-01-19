//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {              
        wx.request({
          url: this.globalData.domain + 'wxUserLogin',
          data: {
            code: res.code
          },
          success: msg => {
            this.globalData.session = msg.data.session;
            // 获取用户信息
            wx.getSetting({
              success: res => {
                if (res.authSetting['scope.userInfo']) {
                  wx.getUserInfo({
                    success: res => {
                      // 可以将 res 发送给后台解码出 unionId
                      this.globalData.userInfo = res.userInfo 
                      wx.request({
                        url: this.globalData.domain +'updateUserInfo',
                        method:"POST",
                        data: { 
                          userinfo: this.globalData.userInfo,
                          session: this.globalData.session
                          }
                      })
                      // 所以此处加入 callback 以防止这种情况
                      if (this.userInfoReadyCallback) {
                        this.userInfoReadyCallback(res)
                      }
                    }
                  })
                }
              }
            })
          }
        })
      }
    })
  },
  globalData: {
    domain: 'http://192.168.203.209:3000/api/',
    userInfo: null,
    session:null,
  }
})