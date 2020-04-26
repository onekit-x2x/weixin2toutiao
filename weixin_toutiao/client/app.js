import wx from "onekit/wx"
import AppSocket from "onekit/lib/AppSocket"
import onekit from "onekit/lib/onekit"

const config = require('./config')

App({
    onekitwx:{
        server:"https://www.onekitwx.com/weixin2toutiao/api/",
        appid : onekit.guid(),
        context : {},
        webview : null,
        },
  onLaunch(opts) {
     //  this.onekitwx.socket = new AppSocket("ws://localhost/baidu2toutiao/socket/",this.onekitwx.appid);
      //  this.onekitwx.socket = new AppSocket("ws://localhost/weixin2toutiao/socket/",this.onekitwx.appid);
      // this.onekitwx.socket = new AppSocket('wss://www.onekitwx.com/weixin2toutiao/socket/',this.onekitwx.appid);
      this.onekitwx.socket = new AppSocket('wss://www.onekitwx.com/baidu2toutiao/socket/',this.onekitwx.appid);
    console.log('App Launch', opts)
   /* if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: config.envId,
        traceUser: true,
      })
    }*/
  },
  onShow(opts) {
    console.log('App Show', opts)
  },
  onHide() {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    openid: null
  },
  // lazy loading openid
  getUserOpenId(callback) {
    const self = this

    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success(data) {
          wx.request({
            url: config.openIdUrl,
            data: {
              code: data.code
            },
            success(res) {
              console.log('拉取openid成功', res)
              self.globalData.openid = res.data.openid
              callback(null, self.globalData.openid)
            },
            fail(res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          })
        },
        fail(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  },
  // 通过云函数获取用户 openid，支持回调或 Promise
  getUserOpenIdViaCloud() {
    return wx.cloud.callFunction({
      name: 'wxContext',
      data: {}
    }).then(res => {
      this.globalData.openid = res.result.openid
      return res.result.openid
    })
  }
})
