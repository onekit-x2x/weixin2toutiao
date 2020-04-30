import wx from "../../../../onekit/wx"

Page({
  
  onShareAppMessage() {
    return {
      title: 'map',
      path: 'page/component/pages/map/map'
    }
  },

  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id:0,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      title:'ssss',
      callout: {
        display: 'BYCLICK',
        content: '西山壹号院',
        color: '#FFF',
        fontSize: '16',
        borderRadius: 50,
        bgColor: '#5B9FFF',
        padding: 2,
        textAlign: 'center'
      }, label: {
        'content': 'label',
        'color': '#7B68EE',
        'fontSize': 16,
        'borderWidth': 1,
        'borderColor': '#5B9FFF',
        'borderRadius': 50,
        'bgColor': '#ADCFFF',
        'padding': 3,
        'textAlign': 'center'
      },
    },],
    circles:[{
      latitude: 23.099994+0.0008,
      longitude: 113.324520,
      radius: 30, 
      strokeWidth: 1,
      color: "#5B9FFF",
      fillColor: "#ADCFFF",
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }],
    polyline: [{
      points: [{
      latitude: 23.099994,
      longitude: 113.324520,
      }, {
          latitude: 23.098995 + 0.002,
          longitude: 113.323520 + 0.002,
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: false,  
      arrowLine:true,
    }],
    polygons: [{
      points: [
        {
      latitude: 23.099994,
      longitude: 113.324520,
        },
        {
          latitude: 23.098995,
          longitude: 113.323520,
        },
        {
          latitude: 23.098996,
          longitude: 113.325520,
        }
      ],
      strokeWidth: 3,
      strokeColor: '#FFFFFFAA',
    }],
    controls: [{
      id: 1,
      iconPath: '/image/green_tri.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
    scale:18,
    skew:0,
    rotate:0,
    enable3d: false,
    showCompass: false,
    showLocation:true,
    showScale:false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolyline: true,
    drawPolygon: true,
    enableSatellite: false,
    enableTraffic: false
  },
  onReady: function (e) {
    var that = this;
    this.mapContext = wx.createMapContext('eMap');

    // this.mapContext.getCenterLocation({
    //       success(res){
    //         console.log('getCenterLocation',res);
    //       }
    //     });

    // this.mapContext.getRegion({
    //   success(res){
    //     console.log(res);
    //   }
    // });

    // this.mapContext.getRotate({
    //   success(res){
    //     console.log('getRotate',res);
    //   }
    // });
    
    // this.mapContext.getScale({
    //   success(res){
    //     console.log('getScale',res);
    //   }
    // });

    // this.mapContext.getSkew({
    //   success(res){
    //     console.log('getSkew',res);
    //   }
    // });

    // this.mapContext.includePoints({
    //   points : [
    //     {
    //       longitude : this.data.longitude + 0.01,
    //       latitude : this.data.latitude
    //     },
    //     {
    //       longitude : this.data.longitude ,
    //       latitude : this.data.latitude + 0.01
    //     }
    //   ],
    //   padding : 5,
    //   success(res){
    //     console.log('includePoints',res);
    //   }
    // });

    // this.mapContext.moveToLocation({
    //   longitude : this.data.markers[0].longitude + 0.01,
    //   latitude : this.data.markers[0].latitude + 0.01,
    //   success(res){
    //     console.log('moveToLocation',res);
    //   }
    // });

    // this.mapContext.setCenterOffset({
    //   offset : [1,2],
    //   success(res){
    //     console.log('setCenterOffset',res);
    //   }
    // });

    this.mapContext.translateMarker({
      markerId : 0,
      destination : {
        latitude: 23.098995 + 0.002,
        longitude: 113.323520 + 0.002,
      },
      autoRotate : false ,
      rotate : 0,
      duration : 350,
      success(res){
        console.log('translateMarker',res);
      }
    });

  },
  map_tap(e){
    console.log(e);
  },
  map_markertap(e) {
    console.log("markertap:", e);
  },
  map_regionchange(e) {
    console.log("regionchange:", e);
  },
  map_controltap(e) {
    console.log("controltap:", e);
  },
  map_updated(e) {
    console.log("updated:", e);
  },
  map_callouttap(e) {
    console.log("callouttap:", e);
  },
  map_poitap(e) {
    console.log("poitap:", e);
  },
  map_labeltap(e) {
    console.log("labeltap:", e);
  },
  toggle3d() {
    this.setData({
      enable3d: !this.data.enable3d
    })
  },
  toggleShowCompass() {
    this.setData({
      showCompass: !this.data.showCompass
    })
  },
  toggleShowScale() {
    this.setData({
      showScale: !this.data.showScale
    })
  },
  toggleOverlooking() {
    this.setData({
      enableOverlooking: !this.data.enableOverlooking
    })
  },
  toggleZoom() {
    this.setData({
      enableZoom: !this.data.enableZoom
    })
  },
  toggleScroll() {
    this.setData({
      enableScroll: !this.data.enableScroll
    })
  },
  toggleRotate() {
    this.setData({
      enableRotate: !this.data.enableRotate
    })
  },
  togglePolygon() {
    this.setData({
      drawPolygon: !this.data.drawPolygon
    })
  },
  togglePolyline() {
    this.setData({
      drawPolyline: !this.data.drawPolyline
    })
  },

  toggleSatellite() {
    this.setData({
      enableSatellite: !this.data.enableSatellite
    })
  },
  toggleTraffic() {
    this.setData({
      enableTraffic: !this.data.enableTraffic
    })
  },
  //map上下文
  toggleGetCenterLocation(){
    this.mapContext.getCenterLocation({
      success(res){
        console.log("gtCenterLocation",res);
      }
    });
  },
  toggleGetRegion() {
    this.mapContext.getRegion({
      success(res) {
        console.log("getRegion", res);
      }
    });
  },
  toggleGetRotate() {
    this.mapContext.getRotate({
      success(res) {
        console.log("getRotate", res);
      },
      fail(res){
        console.log(res);
      }
    });
  },
  toggleGetScale() {
    this.mapContext.getScale({
      success(res) {
        console.log("getScale", res);
      }
    });
  },
  toggleGetSkew() {
    this.mapContext.getSkew({
      success(res) {
        console.log("getSkew", res);
      },
      fail(res){
        console.log(res);
      }
    });
  },
  toggleIncludePoints() {
    var points = this.data.polygons[0].points;
    console.log("所有points点：",points);
    this.mapContext.includePoints({
      points,
      success(res) {
        console.log("includePoints", res);
      }
    });
  },
  toggleMoveToLocation() {
    var that = this;
    that.mapContext.getCenterLocation({
      type:'gcj02',
      success(res){
        var longitude = res.longitude;
        var latitude = res.latitude;
        that.mapContext.moveToLocation({
          longitude,
          latitude,
          success(res) {
            console.log("moveToLocation", res);
          },
          fail(res){
            console.log(res);
          }
        });
      }
    });

  },
  toggleTranslateMarker() {
    var markers = this.data.markers;
    var markerId = markers[0].id;
    console.log(markerId);
    var rotate = this.data.rotate;
    var destination = {
          latitude: 23.098995 + 0.002,
          longitude: 113.323520 + 0.002,
    };
    this.mapContext.translateMarker({
      markerId,
      destination,
      autoRotate:true,
      rotate,
      success(res) {
        console.log("translateMarker", res);
      },
      fail(res){
        console.log(res);
      }
    });
  },

})
