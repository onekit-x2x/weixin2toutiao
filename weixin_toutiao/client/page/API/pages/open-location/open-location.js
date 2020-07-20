import wx from "../../../../onekit/wx"
Page({
  onShareAppMessage() {
    return {
      title: '查看位置',
      path: 'page/API/pages/open-location/open-location'
    }
  },

 openLocation(e) {
    console.log(e)
    const value = e.detail.value
    console.log(value)
    tt.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    })
  }
})
