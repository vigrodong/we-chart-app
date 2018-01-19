const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const request = options =>{
  return new Promise((resolve,reject)=>{
      wx.request({options,
        success:res=>{
          resolve(res);
        },
        fail:res=>{
          
        }
      })
  })
}
const login = ()=>{
  wx.login({
    success:res=>{
      wx.request({
        url:'',
        data:{
          code:res.code,
          
        }
      })
    }
  })
}
module.exports = {
  formatTime: formatTime
}
