import CanvasContext from "./api/CanvasContext"
import VideoContext from "./api/VideoContext"
import LivePlayerContext from "./api/LivePlayerContext"
import WORKER from "./api/WORKER"
import wx_cloud from "./lib/wx.cloud"
import onekit from "./lib/onekit"
export default class wx {
  /////////////////// animation //////////////////////////
  static createAnimation(object) { return tt.createAnimation(object); }
  ///////////////// basic ////////////////////////////////
  static canIUse(object) { return true; }
  static _getSystemInfo(result) { return tt._getSystemInfo(object); }
  static getSystemInfo(object) { return tt.getSystemInfo(object); }
  static getSystemInfoSync(object) { return tt.getSystemInfoSync(object); }
  static base64ToArrayBuffer(base64) { return tt.base64ToArrayBuffer(object); }
  static arrayBufferToBase64(arrayBuffer) { return tt.arrayBufferToBase64(object); }
  static getUpdateManager(object) { return tt.getUpdateManager(object); }
  static getLaunchOptionsSync(object) { return tt.getLaunchOptionsSync(object); }
  static offPageNotFound(object) { return tt.offPageNotFound(object); }
  static onPageNotFound(object) { return tt.onPageNotFound(object); }
  static offError(object) { return tt.offError(object); }
  static onError(object) { return tt.onError(object); }
  static offAppShow(object) { return tt.offAppShow(object); }
  static onAppShow(object) { return tt.onAppShow(object); }
  static offAppHide(object) { return tt.offAppHide(object); }
  static onAppHide(object) { return tt.onAppHide(object); }
  static setEnableDebug(object) { return tt.setEnableDebug(object); }
  static getLogManager(object) { return tt.getLogManager(object); }
  /////////////////// Canvas ///////////////////
  static drawCanvas(object) { 
var canvasId = object.canvasId;
    var actions = object.actions;
    var canvasContext = tt.createCanvasContext(canvasId);
    for (var action of actions) {
      var data = action.data;
      switch (action.method) {
        case "save":
          canvasContext.save();
          break;
        case "restore":
          canvasContext.restore();
          break;
        case "setFillStyle":
          canvasContext.setFillStyle(onekit.color.array2str(data[1]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data[1]));
          break;
        case "setFontSize":
          canvasContext.setFontSize(data[0]);
          break;
        case "setGlobalAlpha":
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case "setShadow":
          var dat = data[3];
          canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data));
          break;
        case "drawImage":
          canvasContext.drawImage.apply(canvasContext, data)
          break;
        case "fillText":
          canvasContext.fillText.apply(canvasContext, data)
          break;
        case "setLineCap": canvasContext.setLineCap(data[0]); break;
        case "setLineJoin": canvasContext.setLineJoin(data[0]); break;
        case "setLineWidth": canvasContext.setLineWidth(data[0]); break;
        case "setMiterLimit": canvasContext.setMiterLimit(data[0]); break;
        case "rotate": canvasContext.rotate(data[0]); break;
        case "scale": canvasContext.scale(data[0], data[1]); break;
        case "translate": canvasContext.translate(data[0], data[1]); break;
        case "strokePath":
          canvasContext.beginPath()
          for (var dat of data) {
            var dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "moveTo": canvasContext.moveTo(dt[0], dt[1]); break;
              case "lineTo": canvasContext.lineTo(dt[0], dt[1]); break;
              case "closePath": canvasContext.closePath(); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              case "quadraticCurveTo": canvasContext.quadraticCurveTo.apply(canvasContext, dt); break;
              case "bezierCurveTo": canvasContext.bezierCurveTo.apply(canvasContext, dt); break;

              default:
                console.log("[drawCanvas-strokePath]", dat.method);
                break;
            }
          }
          canvasContext.stroke()
          break
        case "fillPath":
          for (var dat of data) {
            var dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              default:
                console.log("[drawCanvas-fillPath]", dat.method);
                break;
            }
          }
          canvasContext.fill()
          break;
        case "clearRect": canvasContext.clearRect(data[0], data[1], data[2], data[3]); break;
        default:
          console.log("[drawCanvas]", action.method);
          break;
      }
    }
    canvasContext.draw();


   }
  static createContext() { var context = new CanvasContext(); return context; }
  static createCanvasContext(object) { return tt.createCanvasContext(object); }
  static canvasToTempFilePath(object) { return tt.canvasToTempFilePath(object); }
  static canvasPutImageData(object) { return tt.canvasPutImageData(object) };
  static canvasGetImageData(object) { return tt.canvasGetImageData(object) };
  ////////////// Device //////////////////
  static onBeaconServiceChange(object) { return tt.onBeaconServiceChange(object); }
  static onBeaconUpdate(object) { return tt.onBeaconUpdate(object); }
  static getBeacons(object) { return tt.getBeacons(object); }
  static stopBeaconDiscovery(object) { /*return tt.stopBeaconDiscovery(object); */ }
  static startBeaconDiscovery(object) { /*return tt.startBeaconDiscovery(object);*/ }
  static stopWifi(object) {/* return tt.stopWifi(object);*/ }
  static startWifi(object) {/* return tt.startWifi(object);*/ }
  static setWifiList(object) { return tt.setWifiList(object); }
  static onWifiConnected(object) { return tt.onWifiConnected(object); }
  static onGetWifiList(object) { return tt.onGetWifiList(object); }
  static getWifiList(object) { return tt.getWifiList(object); }
  static getConnectedWifi(object) { return tt.getConnectedWifi(object); }
  static connectWifi(object) { return tt.connectWifi(object); }
  //
  static onAccelerometerChange(callback) { return tt.onAccelerometerChange(callback); }
  static stopAccelerometer(object) { return tt.stopAccelerometer(object); }
  static startAccelerometer(object) { return tt.startAccelerometer(object); }
  static getBatteryInfoSync(object) { return tt.getBatteryInfoSync(object); }
  static _getBatteryInfo(result) { return tt._getBatteryInfo(object); }
  static getBatteryInfo(object) { return tt.getBatteryInfo(object); }
  //
  static getClipboardData(object) { return tt.getClipboardData(object); }
  static setClipboardData(object) { return tt.setClipboardData(object); }
  static onCompassChange(callback) { return tt.onCompassChange(callback); }
  static stopCompass(object) { return tt.stopCompass(object); }
  static startCompass(object) { return tt.startCompass(object); }
  static addPhoneContact(object) {/*return tt.addPhoneContact(object);*/ }
  static onGyroscopeChange(callback) { return tt.onGyroscopeChange(object); }
  static stopGyroscope(object) { return tt.stopGyroscope(object); }
  static startGyroscope(object) { return tt.startGyroscope(object); }
  //
  static onDeviceMotionChange(object) { return tt.onDeviceMotionChange(object); }
  static stopDeviceMotionListening(object) { return tt.stopDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return tt.startDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return tt.startDeviceMotionListening(object); }
  //
  static getNetworkType = function (object) { return tt.getNetworkType(object); }
  static _network = function (res) { return tt._network(object); }
  static onNetworkStatusChange = function (callack) { return tt.onNetworkStatusChange(object); }
  //
  static makePhoneCall = function (object) { return tt.makePhoneCall(object); }

  static scanCode = function (object) { return tt.scanCode(object); }
  //
  static vibrateLong(object) { return tt.vibrateLong(object); }
  static vibrateShort(object) { return tt.vibrateShort(object); }
  //
  static onMemoryWarning(object) { return tt.onMemoryWarning(object); }
  //
  static writeBLECharacteristicValue(object) { return tt.writeBLECharacteristicValue(object); }
  static readBLECharacteristicValue(object) { return tt.readBLECharacteristicValue(object); }
  static onBLEConnectionStateChange(object) { return tt.onBLEConnectionStateChange(object); }
  static onBLECharacteristicValueChange(object) { return tt.onBLECharacteristicValueChange(object); }
  static notifyBLECharacteristicValueChange(object) { return tt.notifyBLECharacteristicValueChange(object); }
  static getBLEDeviceServices(object) { return tt.getBLEDeviceServices(object); }
  static getBLEDeviceCharacteristics(object) { return tt.getBLEDeviceCharacteristics(object); }
  static createBLEConnection(object) { return tt.createBLEConnection(object); }
  static closeBLEConnection(object) { return tt.closeBLEConnection(object); }
  //
  static stopBluetoothDevicesDiscovery(object) {/* return tt.stopBluetoothDevicesDiscovery(object);*/ }
  static startBluetoothDevicesDiscovery(object) { return tt.startBluetoothDevicesDiscovery(object); }
  static openBluetoothAdapter(object) {/* return tt.openBluetoothAdapter(object);*/ }
  static onBluetoothDeviceFound(object) { return tt.onBluetoothDeviceFound(object); }
  static onBluetoothAdapterStateChange(object) { return tt.onBluetoothAdapterStateChange(object); }
  static getConnectedBluetoothDevices(object) { return tt.getConnectedBluetoothDevices(object); }
  static getBluetoothDevices(object) { return tt.getBluetoothDevices(object); }
  static getBluetoothAdapterState(object) { return tt.getBluetoothAdapterState(object); }
  static closeBluetoothAdapter(object) { /*return tt.closeBluetoothAdapter(object);*/ }
  //
  static stopHCE(object) { return tt.stopHCE(object); }
  static startHCE(object) { return tt.startHCE(object); }
  static sendHCEMessage(object) { return tt.sendHCEMessage(object); }
  static onHCEMessage(object) { return tt.onHCEMessage(object); }
  static getHCEState(object) { return tt.getHCEState(object); }
  //
  static setScreenBrightness(object) { return tt.setScreenBrightness(object); }
  static setKeepScreenOn(object) { return tt.setKeepScreenOn(object); }
  static onUserCaptureScreen(object) { return tt.onUserCaptureScreen(object); }

  static getScreenBrightness(object) { /*return tt.setKeepScreenOn(object);*/ }
  /////////////////// Ext //////////////
  static getExtConfigSync(object) { return tt.getExtConfigSync(object) }
  static getExtConfig(object) { return tt.getExtConfig(object) }
  //////////////////// File //////////
  static getFileSystemManager(object) { return tt.getFileSystemManager(object) }
  static getFileInfo(object) { return tt.getFileInfo(object) }
  static removeSavedFile(object) { return tt.removeSavedFile(object) }
  static getSavedFileInfo(object) { return tt.getSavedFileInfo(object) }
  static getSavedFileList(object) { return tt.getSavedFileList(object) }
  static openDocument(object) { return tt.openDocument(object) }
  static saveFile(object) { return tt.saveFile(object); }
  //////////// Location ///////////////
  static openLocation(object) { return tt.openLocation(object) }
  static getLocation(object) { return tt.getLocation(object) }
  static chooseLocation(object) { return tt.chooseLocation(object) }
  ////////// Media ////////////////////
  static createMapContext(id) { 
    return getApp().onekit.context[id];
    }
  static compressImage(object) { return tt.compressImage(object) }
  static saveImageToPhotosAlbum(object) { return tt.saveImageToPhotosAlbum(object) }
  static getImageInfo(object) { return tt.getImageInfo(object) }
  static previewImage(object) { return tt.previewImage(object) }
  static chooseImage(object) { return tt.chooseImage(object); }
  static saveVideoToPhotosAlbum(object) { return tt.saveVideoToPhotosAlbum(object) }
  static chooseVideo(object) { return tt.chooseVideo(object) }
  static createVideoContext(object) { return tt.createVideoContext(object) }
  static createLivePlayerContext(object) { return tt.createLivePlayerContext(object) }
  static stopVoice(object) { return tt.stopVoice(object) }
  static pauseVoice(object) { return tt.pauseVoice(object) }
  static playVoice(object) { return tt.playVoice(object) }
  static setInnerAudioOption(object) { return tt.setInnerAudioOption(object) }
  static getAvailableAudioSources(object) { return tt.getAvailableAudioSources(object) }
  static createInnerAudioContext(object) { return tt.createInnerAudioContext(object) }
  static createAudioContext(object) { return tt.createAudioContext(object) }
  static onBackgroundAudioStop(object) { return tt.onBackgroundAudioStop(object) }
  static onBackgroundAudioPause(object) { return tt.onBackgroundAudioPause(object) }
  static onBackgroundAudioPlay(object) { return tt.onBackgroundAudioPlay(object) }
  static stopBackgroundAudio(object) { return tt.stopBackgroundAudio(object) }
  static seekBackgroundAudio(object) { return tt.seekBackgroundAudio(object) }
  static pauseBackgroundAudio(object) { return tt.pauseBackgroundAudio(object) }
  static playBackgroundAudio(object) { /*return tt.playBackgroundAudio(object)*/ }
  static getBackgroundAudioPlayerState(object) {/* return tt.getBackgroundAudioPlayerState(object) */ }
  static getBackgroundAudioManager(object) { return tt.getBackgroundAudioManager(object) }
  static createLivePusherContext(object) { return tt.createLivePusherContext(object) }
  static startRecord(object) {
    var recorderManager = tt.getRecorderManager(object);
    recorderManager.onStart(() => {
      var res = "stopRecord才会返回tempFilePath!!";
      if (object.success) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    });
    var result = recorderManager.start();
    return result;
  }
  static stopRecord(object) {
    var recorderManager = tt.getRecorderManager(object);
    recorderManager.onStop((res) => {
      if (object.success) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    });
    var result = recorderManager.stop();
    return result;
  }
  static getRecorderManager(object) { return tt.getRecorderManager(object) }
  //////////////// Network ///////////////
  static request(object) { return tt.request(object); }
  static downloadFile(object) { return tt.downloadFile(object) }
  static uploadFile(object) {
    tt.uploadFile({
      url: object.url,
      filePath: object.filePath,
      fileName: object.name,
      fileType: "image",
      header: object.header,
      formData: object.formData,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    });
  };
  //
  static connectSocket(object) { return tt.connectSocket(object) }
  static onSocketError(object) { return tt.onSocketError(object) }
  static onSocketMessage(object) { return tt.onSocketMessage(object) }
  static onSocketClose(object) { return tt.onSocketClose(object) }
  static onSocketOpen(object) { return tt.connectSocket(object) }
  static sendSocketMessage(object) { return tt.sendSocketMessage(object) }
  static closeSocket(object) { return tt.closeSocket(object) }
  static offLocalServiceResolveFail(object) { return tt.offLocalServiceResolveFail(object) }
  static onLocalServiceResolveFail(object) { return tt.onLocalServiceResolveFail(object) }
  static offLocalServiceDiscoveryStop(object) { return tt.offLocalServiceDiscoveryStop(object) }
  static onLocalServiceDiscoveryStop(object) { return tt.onLocalServiceDiscoveryStop(object) }
  static offLocalServiceLost(object) { return tt.offLocalServiceLost(object) }
  static onLocalServiceLost(object) { return tt.onLocalServiceLost(object) }
  static offLocalServiceFound(object) { return tt.offLocalServiceFound(object) }
  static onLocalServiceFound(object) { return tt.onLocalServiceFound(object) }
  static stopLocalServiceDiscovery(object) { return tt.stopLocalServiceDiscovery(object) }
  static startLocalServiceDiscovery(object) { return tt.startLocalServiceDiscovery(object) }
  //
  static stopLocalServiceDiscovery(object) { return tt.stopLocalServiceDiscovery(object); }
  static startLocalServiceDiscovery(object) { return tt.startLocalServiceDiscovery(object); }
  static onLocalServiceResolveFail(callback) { return tt.onLocalServiceResolveFail(callback); }
  static onLocalServiceLost(callback) { return tt.onLocalServiceLost(callback); }
  static onLocalServiceFound(callback) { return tt.onLocalServiceFound(callback); }
  static onLocalServiceDiscoveryStop(callback) { return tt.onLocalServiceDiscoveryStop(callback); }
  static offLocalServiceResolveFail(callback) { return tt.offLocalServiceResolveFail(callback); }
  static offLocalServiceLost(callback) { return tt.offLocalServiceLost(callback); }
  static offLocalServiceFound(callback) { return tt.offLocalServiceFound(callback); }
  static offLocalServiceDiscoveryStop(callback) { return tt.offLocalServiceDiscoveryStop(callback); }
  ///////// Open Interface //////////
  static _checkSession(){
      var now = new Date().getTime();
        return getApp().onekitwx._jscode && getApp().onekitwx._login && now<= getApp().onekitwx._login + 1000*60 *60*24*3;
  }
  static checkSession(object) {
   if(wx._checkSession()){
     if (object.success) {
                object.success();
              }
               if (object.complete) {
                object.complete();
              }
          
   }else{
      if (object.fail) {
                object.fail();
              }
               if (object.complete) {
                object.complete();
              }
  }
 }

  static login = function (object) {
    var that = this;
    if (!object) {
      return tt.login(object);
    }
    var object2 = {
    };
    object2.success = function (res) {
      getApp().onekitwx._jscode = res.code;
      getApp().onekitwx._login = new Date().getTime();
      var result = { code: res.code };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(complete);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    console.log(wx._checkSession());
    if (wx._checkSession()) {
      object2.success({ code: getApp().onekitwx._jscode });
    } else {
      tt.login(object2);
    }
  };
  static getUserInfo(object) {

    wx.login({
      success: (res) => {
        var jscode = res.code;
        var withCredentials = object.withCredentials === true
        tt.getUserInfo({
          withCredentials: withCredentials,
          success(res) {
            console.log(res);
            var url = getApp().onekitwx.server + "userinfo";
            tt.request({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                withCredentials : withCredentials,
                data: JSON.stringify(res),
                js_code: jscode
              },
              success(res) {
                if (object.success) {
                  res.detail = res.data;
                  object.success(res.data);
                }
                if (object.complete) {
                  object.complete(res);
                }
              }, fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    });
  };
  static getOpenData = function(object) {
    
      if(!getApp().onekitwx._opendataCallbacks){
        getApp().onekitwx._opendataCallbacks = [];
      }
    function success(data) {
      var opendata = data.opendata;
      getApp().onekitwx._opendata = opendata;
      for (var cb = 0; cb < getApp().onekitwx._opendataCallbacks.length; cb++) {
        getApp().onekitwx._opendataCallbacks[cb](opendata);
      }
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekitwx._opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekitwx._opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekitwx._opendata = {};
      wx.login({
      success(res) {
        var jscode = res.code;
        tt.getUserInfo({
          withCredentials: true,
          success(res) {
            var url = getApp().onekitwx.server + "opendata";
            tt.request({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                data : JSON.stringify(res),
                js_code: jscode
              },
              success(res) {
                success(res.data);
              }, fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    })

  };
  static _getPhoneNumber = function (data, callback) {
    wx.login({
      success: (res) => {
        var jscode = res.code;
        var url = getApp().onekitwx.server + "phonenumber";
         console.log(data,jscode);
        tt.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            data: JSON.stringify(data),
            js_code: jscode
          },
          success(res) {
            var data = res.data;
            callback(data);
          }, fail(res) {
            console.log(res.data);
          }
        });
      }
    });
  }
  static getPhoneNumber = function (object) {
    getApp().onekitwx._bindgetphonenumber = (data) => {
      _getPhoneNumber(data, (res) => {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      });
    }
    tt.navigateTo({ url: "page/getphonenumber" });

  }
  static navigateToMiniProgram(object) { return tt.navigateToMiniProgram(object) }
  static navigateBackMiniProgram(object) { return tt.navigateBackMiniProgram(object) }
  static getAccountInfoSync(object) { return tt.getAccountInfoSync(object) }

  static reportMonitor(object) { /*return tt.reportMonitor(object)*/ }
  static reportAnalytics(object, eventName) { return tt.reportAnalytics(object, eventName) }
  static requestPayment(object) {
    var url = getApp().onekitwx.server + "orderinfo";
    tt.request({
      url: url,
      data: {
        out_trade_no: object.package.split("=")[1]
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success(res) {
        console.log(res);
        var object2 = {
          orderInfo: res.data,
          service: 3,
          _debug:1,
          success: object.success,
          fail: object.fail,
          complete: object.complete
        };
        return tt.pay(object2);
      }
    })
  };
  static authorize(object) { return tt.authorize(object) }
  static openSetting(object) { return tt.openSetting(object) }
  static getSetting(object) { return tt.getSetting(object) }
  static chooseAddress(object) { return tt.chooseAddress(object) }
  static openCard(object) { return tt.openCard(object); }
  static addCard = function (object) { return tt.addCard(object); }
  static chooseInvoiceTitle(object) { return tt.chooseInvoiceTitle(object) }
  static chooseInvoice(object) { return tt.chooseInvoice(object) }
  static startSoterAuthentication(object) { return tt.startSoterAuthentication(object) }
  static checkIsSupportSoterAuthentication(object) { return tt.checkIsSupportSoterAuthentication(object) }
  static checkIsSoterEnrolledInDevice(object) { return tt.checkIsSoterEnrolledInDevice(object) }
  static getWeRunData(object) { return tt.getWeRunData(object) }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    tt.httpRequest({
      url: "http://192.168.0.106:8080/onekit_adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res)
      }

    });
  };
  ////////// Router //////////////
  static navigateBack(object) { return tt.navigateBack(object); }
  static switchTab(object) { return tt.switchTab(object); }
  static navigateTo(object) { return tt.navigateTo(object); }
  static reLaunch(object) { return tt.reLaunch(object); }
  static redirectTo(object) { return tt.redirectTo(object); }
  ///////////// Share /////////////
  static updateShareMenu(object) { return tt.updateShareMenu(object) }
  static showShareMenu(object) { return tt.showShareMenu(object); }
  static hideShareMenu(object) { return tt.hideShareMenu(object) }
  static getShareInfo(object) { return tt.getShareInfo(object) }
  /////////////// Storage //////////////
  static getStorageInfoSync(object) { return tt.getStorageInfoSync(object) }
  static getStorageInfo(object) { return tt.getStorageInfo(object) }
  static clearStorageSync(object) { return tt.clearStorageSync(object) }
  static clearStorage(object) { return tt.clearStorage(object) }
  static removeStorageSync(object) { return tt.removeStorageSync(object) }
  static removeStorage(object) { return tt.removeStorage(object) }
  static setStorageSync = function (key, value) { return tt.setStorageSync({ key: key, data: value }) }
  static setStorage(object) { return tt.setStorage(object) }
  static getStorageSync = function (key) { return tt.getStorageSync(key); }
  static getStorage(object) { return tt.getStorage(object) }
  ////////////// UI ////////////////
  static showActionSheet(object) { return tt.showActionSheet(object); }
  // static redirectTo(object) { return tt.redirectTo(object) }
  // static redirectTo(object) { return tt.redirectTo(object) }
  static hideLoading(object) { return tt.hideLoading(object) }
  static showLoading(object) { return tt.showLoading(object); }
  static hideToast(object) { return tt.hideToast(object); }
  static showToast(object) { return tt.showToast(object); }
  static showModal(object) { return tt.showModal(object); }
  static setNavigationBarColor(object) { return tt.setNavigationBarColor(object) }
  static hideNavigationBarLoading(object) {
    /*return tt.hideNavigationBarLoading(object2)*/
  }
  static showNavigationBarLoading(object) {/*
    return tt.showNavigationBarLoading(object2)*/
  }
  static setNavigationBarTitle = function (object) { return tt.setNavigationBarTitle(object); };
  static setBackgroundTextStyle(object) { return tt.setBackgroundTextStyle(object) }

  static setBackgroundColor(object) {/* return tt.setBackgroundColor(object) */ }
  static setTabBarItem(object) { /*return tt.setTabBarItem(object)*/ }
  static setTabBarStyle(object) {/* return tt.setTabBarStyle(object)*/ }
  static hideTabBar(object) { /*return tt.hideTabBar(object) */ }
  static showTabBar(object) { /*return tt.showTabBar(object)*/ }
  static hideTabBarRedDot(object) {/* return tt.hideTabBarRedDot(object) */ }
  static showTabBarRedDot(object) { /*return tt.showTabBarRedDot(object) */ }
  static removeTabBarBadge(object) { /*return tt.removeTabBarBadge(object)*/ }
  static setTabBarBadge(object) { /*return tt.setTabBarBadge(object) */ }

  static loadFontFace(object) {/* return tt.loadFontFace(object)*/ }

  static stopPullDownRefresh(object) { return tt.stopPullDownRefresh(object); }
  static startPullDownRefresh(object) { return tt.startPullDownRefresh(object); }
  static pageScrollTo(object) { return tt.pageScrollTo(object) }
  static setTopBarText(object) { return tt.setTopBarText(object) }
  static nextTick(object) { return tt.nextTick(object) }
  static getMenuButtonBoundingClientRect(object) { return tt.getMenuButtonBoundingClientRect(object) }
  static offWindowResize(object) { return tt.offWindowResize(object) }
  static onWindowResize(object) { return tt.onWindowResize(object) }
  ////////////// Worker ///////////////
  static createWorker(path) { return new Worker(path); }
  ////////////// WXML ///////////////
  static createSelectorQuery(object) { return tt.createSelectorQuery(object) }
  static createIntersectionObserver(object) { return tt.createIntersectionObserver(object) }
  /////////////////////////////////////
  static hideKeyboard(object) { return tt.hideKeyboard(object) }
  ///////////// cloud ////////////////
  static get cloud() {
    return new wx_cloud();
  }
}