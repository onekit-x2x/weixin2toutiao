Component({
  mixins: [],
  data: {},
  props: {},
  attached() { },
  didUpdate() { },
  didUnmount() { },
  methods: {},
  properties: {
    unitId: {
      type: String
    },
    adIntervals: {
      type: Number
    },
    adType:{
      type:String,
      value:"banner"
    },
    adTheme:{
      type:String,
      value:"white"
    }

  },

});
