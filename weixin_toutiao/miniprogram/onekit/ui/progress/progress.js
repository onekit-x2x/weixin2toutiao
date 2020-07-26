Component({
  properties: {
    percent:{
      type:String
      },
    showInfo:{
      type:Boolean,
      value:false
    },
    strokeWidth:{
      type:Number,
      value:6
    },
    color:{
      type:String,
      value:"#09BB07"
      },
    activeColor:{
      type:String,
      value:"#09BB07"
      },
    backgroundColor:{
      type:String,
      value:"#EBEBEB"
      },
    active:{
      type:Boolean,
      value:false
    }
  },
  data: {
    pageBackgroundColor: '#5cb85c'
  },
  // attached() {
  //   var borderRadius = this.properties.borderRadius;
  //   borderRadius = this._fix(borderRadius);
  //   this.setData({ borderRadius })
  //   console.log(borderRadius)

  //   var fontSize = this.properties.fontSize;
  //   fontSize = this._fix(fontSize);
  //   this.setData({ fontSize })
  //   console.log(fontSize)

  //   var strokeWidth = this.properties.strokeWidth;
  //   strokeWidth = this._fix(strokeWidth);
  //   this.setData({ strokeWidth })


    //  bindactiveend: function(event) {
    //       console.log(event);
    //     }

  // },
  onLoad() {

  },
  methods: {
    _fix(string) {
      if (!isNaN(string)) {
        return string;
      }
      string = string.replace("rpx", "");
      string = string.replace("px", "");
      string = string.trim();
      return string;
    }
  }
})