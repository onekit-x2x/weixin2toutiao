import onekit from "./onekit";
export default class CloudContext {

  constructor(server, appid) {
    var that = this;
    this.guid = appid;

    this.todos = [];
    this.socketTask = tt.connectSocket({
      url: `${server}${this.guid}_`,
    });
    this.socketTask.onOpen(() => {
      console.log("WebSocket 已连接");
    });
    this.socketTask.onClose(() => {
      console.log("WebSocket 已断开");
    });

    this.socketTask.onError(error => {
      console.error("WebSocket 发生错误:", error);
    });
    this.echo = false;
    this.callbacks = {};
    this.socketTask.onMessage(message => {
      //console.log("socket message:", message);
      var DATA = JSON.parse(message.data);
      console.log(DATA);
      switch (DATA.type) {
        case "echo":
          that.echo = true;
           for (var todo of that.todos) {
            that.socketTask.send(todo);
          }
          break;
        case "event":
          if (DATA.data) {
            // if(DATA.method == 'bindregionchange'){
            //   var gesture;
            //   DATA.data.detail.gesture = gesture;
            // }
            getApp().onekitwx.webview.triggerEvent(DATA.method, DATA.data);
          }
          break;
        case "context":
          console.log(that.callbacks);
          that.callbacks[DATA.ucid](DATA.data);
          break;
      }
    });
    
  }
  send(params, callback) {
    if (callback) { this.callbacks[params.ucid] = callback; }
      var DATA = {
          data : {
            guid: this.guid,
            data : params
          }
      };
    if (this.echo) {
      this.socketTask.send(DATA);
    } else {
      this.todos.push(DATA);
    }
  }




}