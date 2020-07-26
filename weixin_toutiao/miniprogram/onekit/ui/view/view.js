// onekit/ui/view/view.js
Component({
  
  data: {

  },
  properties: {
    hoverClass:{
      type:String,
      value:"none"
    },
    hoverStopPropagation:{
      type:Boolean,
      value:false
    },
    hoverStartTime:{
      type:Number,
      value:50
    },
    hoverStayTime:{
      type:Number,
      value:400
    }
  },
  attached(){
  },
  methods: {

  }
})