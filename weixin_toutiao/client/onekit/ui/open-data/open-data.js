import wx from "../../wx"
Component({
  mixins: [],
  data: {},
  props: {},

  attached() {
    var that = this;
    wx.getOpenData({
      success(opendata) {
        switch (that.props.type) {
          case "userNickName":
            that.setData({userNickName:opendata.nickName});
            break;
          case "userAvatarUrl":
          that.setData({userAvatarUrl:opendata.avatarUrl});
            break;
          case "userGender":
          that.setData({userGender:opendata.gender});
            break;
          case "userCity":
          that.setData({userCity:opendata.city});
            break;
          case "userProvince":
          that.setData({userProvince:opendata.province});
            break;
          case "userCountry":
          that.setData({userCountry:opendata.country});
            break;
          case "userLanguage":
          that.setData({userLanguage:opendata.language});
            break;
          default:
            break;
        }
      }
    });
  },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
