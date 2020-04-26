import wx from "../../wx"
Component({
  mixins: [],
  data: {
    hideContact: true
  },
  attached() { },
  didUpdate() { },
  didUnmount() { },
  props: {},
  methods: {
    contactBG_tap() {
      this.setData({ hideContact: true });
    },
    button_onTap(e) {
      var that = this;
      if (this.props.openType) {
        switch (this.props.openType) {
          case "contact":
            this.setData({ hideContact: false });
            break;
          case "share":
            wx.showShareMenu({
              success(){

              }
            });
            break;
          case "getUserInfo":
          if(that.onGetuserinfo){
          wx.getUserInfo({
            success(res){
              e.detail = res;
              that.onGetuserinfo(e);
            }
          })
          }
            break;
          case "getPhoneNumber":
         if(that.onGetphonenumber){
          wx.getPhoneNumber({
            success(res){
              e.detail = res;
              that.onGetphonenumber(e);
            }
          })
          }
            break;
          case "launchApp":
            break;
          case "openSetting":
            wx.openSetting({

            });
            break;
          case "feedback":
            break;
          default:
            break;
        }
      }
      if (this.onTap) { this.onTap(e); }
    },
  },
});
