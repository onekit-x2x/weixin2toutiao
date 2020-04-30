Component({
   data: {

  },
  properties: {
    hidden:Boolean
  },
  attached(){
  },
  methods: {
    	modal_confirm() {
        this.triggerEvent("confirm")
      }
  }
});
