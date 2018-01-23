import {request} from '../../utils/util.js'
const app = getApp();

Page({
  data:{
    list:[
      { id: 1, name: 'wzd', state: 'pending', fromtime: '2018-08-29 9:30', totime:'2018-09-29 9:30',applyfor:['lgc','lbm']},
      { id: 2, name: 'lgc', state: 'success', fromtime: '2018-08-29 9:30', totime: '2018-09-29 9:30', applyfor: ['lgc', 'lbm']},
      { id: 3, name: 'lmj', state: 'failed', fromtime: '2018-08-29 9:30', totime: '2018-09-29 9:30', applyfor: ['lgc', 'lbm']},
      { id: 1, name: 'wzd', state: 'pending', fromtime: '2018-08-29 9:30', totime: '2018-09-29 9:30', applyfor: ['lgc', 'lbm']},
      { id: 2, name: 'lgc', state: 'success', fromtime: '2018-08-29 9:30', totime: '2018-09-29 9:30', applyfor: ['lgc', 'lbm']},
      { id: 3, name: 'lmj', state: 'failed', fromtime: '2018-08-29 9:30', totime: '2018-09-29 9:30', applyfor: ['lgc', 'lbm']}
    ]
  },
  onLoad:function(){
    // request({}).then((res)=>{
    //   this.setData({list:res})
    // })
  }
});