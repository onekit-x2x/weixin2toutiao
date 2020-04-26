import wx from "../../../../onekit/wx"
Page({
  onShareAppMessage() {
    return {
      title: '获取用户信息',
      path: 'page/API/pages/get-user-info/get-user-info'
    }
  },

  data: {
    hasUserInfo: false
  },
  bindgetuserinfo(info) {
      console.log(info)
    const userInfo = info.detail.userInfo
    this.setData({
      userInfo,
      hasUserInfo: true
    })
  },
  clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
})
