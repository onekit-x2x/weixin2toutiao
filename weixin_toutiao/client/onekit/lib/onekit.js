var onekit = {}
onekit.trim = function (str) {
    return str.replace(/^\s+|\s+$/gm,'');
}
onekit.color = {};
onekit.updateContext = function( method, data){
  console.log(guid);
    var context = {
        method,
        data
    }
  tt.request({
    url: 'http://localhost/weixin2toutiao/cloud/context_set.jsp', // 目标服务器url
    data:{
        guid,
        context : JSON.stringify(context),
    }
     });
   },
   
onekit.color.fix = function(string) {
  var str = string;
  if (!str) {
    return null;
  }
  switch (str) {
    case "transparent":
      return "#00000000";
    case "black":
      return "#000000FF";
    default:
      break;
  }
  if (str.indexOf('rgb') < 0) {
    if (str.length == 7) {
      str += "FF";
    }
    return str;
  }
  str = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
  var array = str.split(",");
  if (array.length == 3) {
    array.push(1);
  }
  var color = onekit.color.rgba2str(array[0], array[1], array[2], array[3] * 255+"");
  return color;
}
onekit.guid = function(){
  var guid= 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
    return guid;
}
onekit.color.rgba2str = function(r, g, b, a) {
  function componentToHex(c) {
    c = onekit.trim(c);
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
    + componentToHex(a);
}
onekit.color.str2array = function(str) {
  return [parseInt(str.substr(1, 2), 16),
  parseInt(str.substr(3, 2), 16),
  parseInt(str.substr(5, 2), 16),
  parseInt(str.substr(7, 2), 16)];
}
onekit.color.array2str = function(array) {
  function f(v){
    var s =  v.toString(16);
    if(s.length==1){s="0"+s;}
    return s;
  }
  var str= "#"+f(array[0])+f(array[1])+f(array[2])+f(array[3]);
  return str;
}
export default onekit;
