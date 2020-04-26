Component({
  properties: {
    percent: { type: Number },
    strokeWidth: { type: String },
    activeColor: { type: String, value: "#F85959" },
    color: { type: String, value: "#F85959" },
    backgroundColor: { type: String },
    active: { type: Boolean },
    showInfo: { type: Boolean },
    fontSize: { type: String, value: 16 },
    borderRadius: { type: String, value: 0 },
    activeMode: { type: String, value: "backwards" },
    "bindactiveend": { type: "Eventhandle" }
  },
  data: {
    pageBackgroundColor: '#5cb85c'
  },
  attached() {
    var borderRadius = this.properties.borderRadius;
    borderRadius = this._fix(borderRadius);
    this.setData({ borderRadius })
    console.log(borderRadius)

    var fontSize = this.properties.fontSize;
    fontSize = this._fix(fontSize);
    this.setData({ fontSize })
    console.log(fontSize)

    var strokeWidth = this.properties.strokeWidth;
    strokeWidth = this._fix(strokeWidth);
    this.setData({ strokeWidth })

    
//  bindactiveend: function(event) {
//       console.log(event);
//     }
  
  },
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