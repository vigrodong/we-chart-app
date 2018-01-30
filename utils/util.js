const app = getApp();

const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' +
      [hour, minute, second].map(formatNumber).join(':');
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

const request = options => {
  if(!options.header){
    options.header={};
  }
  options.header.token = app.globalData.token;
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: res => {
        resolve(res);
      },
      fail: res => {
        login().then((token) => {
          wx.request({
            ...options,
            success: res => {
              resolve(res);
            },
          });
        }).catch((err) => {
          resolve(err);
        });
      },
    });
  });
};
const login = () => {
  return Promise((reslove, reject) => {
    wx.login({
      success: res => {
        wx.getUserInfo({
          success: resIn => {
            wx.request({
              url: app.globalData.domain + 'wxUserLogin',
              method: 'POST',
              data: {
                code: res.code,
                userinfo: resIn,
              },
              success: resData => {
                app.globalData.token = resData.data.token;
                resolve(resData.data.token);
              },
              fail: err => {
                reject(err);
              },
            });
          },
          fail: err => {
            reject(err);
          },
        });
      },
      fail: err => {
        reject(err);
      },
    });
  });
};
const match = function(match) {
  var split = String.prototype.split;
  return function(str) {
    return split.call(str, match);
  };
};
const find = a=>b=a+b;

module.exports = {
  formatTime: formatTime,
  request: request,
  match: match,
};
