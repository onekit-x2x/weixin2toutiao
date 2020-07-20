export default class VideoContext{
  constructor(ttVideoContext) {
    this.ttVideoContext = ttVideoContext;
  }
  play(){
    return  this.ttVidesoContext.play();
  }
  pause(){
    return  this.ttVideoContext.pause();
  }
  stop(){
    return  this.ttVideoContext.stop();
  }
  seek(position){
    return this.ttVideoContext.seek(position);
  }
 
  requestFullScreen(){
    return this.ttVideoContext.requestFullScreen();
  }
  exitFullScreen(){
      return this.ttVideoContext.exitFullScreen();
    }
 
  





}