import AppSocket from "../../lib/AppSocket"
import onekit from "../../lib/onekit"
Component({
    mixins: [],
    data: {
    },
    properties: {
        longitude: {
            type: Number,
            value: 116.406568,
        },
        latitude: {
            type: Number,
            value: 39.914935
        },
        scale: {
            type: Number,
            value: 16
        },
        markers: {
            type: Array

        },
        covers: {
            type: Array
        },
        polyline: {
            type: Array
        },
        polygons: {
            type: Array
        },
        circles: {
            type: Array
        },
        controls: {
            type: Array
        },
        includePoints: {
            type: Array
        },
        showLocation: {
            type: Boolean,
            value: false
        },
        subkey: {
            type: String
        },
        layerStyle: {
            type: Number,
            value: 1
        },
        rotate: {
            type: Number,
            value: 0
        },
        skew: {
            type: Number,
            value: 0
        },
        enable3D: {
            type: Boolean,
            value: false
        },
        showCompass: {
            type: Boolean,
            value: false,
        },
        showScale: {
            type: Boolean,
            value: false,
        },
        enable3D: {
            type: Boolean,
            value: false,
        },
        enableOverlooking: {
            type: Boolean,
            value: false,
        },
        enableZoom: {
            type: Boolean,
            value: true,
        },
        enableScroll: {
            type: Boolean,
            value: true,
        },
        enableRotate: {
            type: Boolean,
            value: false,
        },
        enableSatellite: {
            type: Boolean,
            value: false,
        },
        enableTraffic: {
            type: Boolean,
            value: false,
        },
        setting: {
            type: Object,
        },
    },
    attached() {
      
        getApp().onekit.webview = this;
        ////////////////////////////////////////
        var properties = {};
        for (var name in this.properties) {
            var value = this.properties[name];
            if (value != null) {
                properties[name] = value;
            }
        }
        console.log(properties);
        // properties.enable3D = true;
        var guid = getApp().onekit.appid;//onekit.guid();
        // console.log(encodeURIComponent(JSON.stringify(properties)));
        // console.log(guid);
        // var url = `http://localhost/baidu2toutiao/app/map.html?guid=${guid}&properties=${encodeURIComponent(JSON.stringify(properties))}`;
        // var url = `http://localhost/weixin2toutiao/app/map.html?guid=${guid}&properties=${encodeURIComponent(JSON.stringify(properties))}`;
        // var url = `https://www.onekit.com/weixin2toutiao/app/map.html?guid=${guid}&properties=${encodeURIComponent(JSON.stringify(properties))}`;
        var url = `https://www.onekit.com/baidu2toutiao/app/map.html?guid=${guid}&properties=${encodeURIComponent(JSON.stringify(properties))}`;
        this.setData({
            url
        });
        ////////////////////////////////////////////////////

        this.data.ucid = onekit.guid();
        this.appSocket = getApp().onekit.socket;
        if (this.id) {
            var context = getApp().onekit.context[this.id] = {};
            context.getCenterLocation = this.getCenterLocation;
            context.getRegion = this.getRegion;
            context.getRotate = this.getRotate;
            context.getScale = this.getScale;
            context.getSkew = this.getSkew;
            context.includePoints = this.includePoints;
            context.moveToLocation = this.moveToLocation;
            context.setCenterOffset = this.setCenterOffset;
            context.translateMarker = this.translateMarker;
        }
        ////////////////////////////////////////////////////
    },

    didUpdate() { },
    didUnmount() { },
    methods: {
        socketSend(method, params, callbacks) {
            var data = {
                method,
                ucid: this.data.ucid,
                data: params
            };
            //
                this.appSocket.send(data,function (res) {
                    if (callbacks.success) {
                        callbacks.success(res);
                    }
                    if (callbacks.complete) {
                        callbacks.complete(res);
                    }
                });
        },
        getCenterLocation(object) {
            this.socketSend('getCenterLocation', {}, object);
        },
        getRegion(object) {
            this.socketSend('getRegion', {}, object);
        },
        getRotate(object) {
            this.socketSend('getRotate', {}, object);
        },
        getScale(object) {
            this.socketSend('getScale', {}, object);
        },
        getSkew(object) {
            this.socketSend('getSkew', {}, object);
        },
        includePoints(object) {
            var data = {
                points : object.points
            };
            if(object.padding){
                data.padding = object.padding;
            }
            this.socketSend('includePoints', data, object);
        },
        moveToLocation(object) {
            var data = {};
            if(object.longitude && object.latitude){
                data.longitude = object.longitude;
                data.latitude = object.latitude;
            }
            this.socketSend('moveToLocation', data, object);
        },
        setCenterOffset(object) {
            console.warn("[onekit-map]暂不支持setCenterOffset");
        },
        translateMarker(object) {
            var data = {
                markerId : object.markerId,
                destination : object.destination,
                autoRotate : object.autoRotate,
                rotate : object.rotate,
            };
            if(object.duration){
                data.duration = object.duration;
            }
            if(object.animationEnd){
                data.animationEnd = object.animationEnd;
            }
            console.log(object);
            this.socketSend('translateMarker', data, object);
        },
    },

});
