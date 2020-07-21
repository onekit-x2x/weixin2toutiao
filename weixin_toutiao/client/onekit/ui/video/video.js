Component({

    properties: {
        src: { 
            type: String, 
            value: "", 
        },
        initialTime: { 
            type: Number, 
            value: "", 
        },
        
        autoplay:{
            type: Boolean, 
            value: false,
        },
        loop:{
             type: Boolean, 
            value: false,
        },
        mute:{
             type: Boolean, 
            value: false,
        },
        pageGesture:{
             type: Boolean, 
            value: false,
        },
        direction:{
            type: Number, 
            value: "",
        },
        showFullscreenBtn:{
             type: Boolean, 
            value: true,
        },
        showPlayBtn:{
             type: Boolean, 
            value: true,
        },
        showCenterPlayBtn:{
            type: Boolean, 
            value: true,
        },
        showMuteBtn:{
            type: Boolean, 
            value: true,
        },
        enableProgressGesture:{
            type: Boolean, 
            value: true,
        },
        poster:{
            type: String, 
            value: "",
        },
        controls:{
            type: Boolean, 
            value:true,
        }
    },
    methods: {
       video_play(e){
       console.log("video_play", e);
        this.triggerEvent('play',e.details)
       },
       video_pause(e){
       console.log("video_pause", e);
        this.triggerEvent('pause',e.details)
       },
       video_ended(e){
       console.log("video_ended", e);
        this.triggerEvent('ended',e.details)
       },
        video_timeupdate(e){
       console.log("video_timeupdate", e);
        this.triggerEvent('timeupdate',e.details)
       },
        video_fullscreenchange(e){
       console.log("video_fullscreenchange", e);
        this.triggerEvent('fullscreenchange',e.details)
       },
       video_error(e){
       console.log("video_error", e);
        this.triggerEvent('error',e.details)
       },
       video_waiting(e){
       console.log("video_waiting", e);
        this.triggerEvent('waiting',e.details)
       },
    }
});