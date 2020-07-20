export default class LivePlayerContext{
  constructor(ttLivePlayerContext) {
    this.ttLivePlayerContext = ttLivePlayerContext;
  }
  play(){
    return  this.ttLivePlayerContext.play();
  }
  


}