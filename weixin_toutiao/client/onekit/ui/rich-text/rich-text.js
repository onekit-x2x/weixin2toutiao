Component({
  mixins: [],
  data: {},
  properties: {
    nodes:{
      type:String,
      value:"[]"
    }
  },
  attached() {
    var nodes = this.props.nodes;
    if (typeof (nodes) === "string") {
      nodes = this._html2nodes(nodes);
      this.setData({nodes:nodes});
    }
  },
  
  methods: {
    // _html2nodes(html) {
    //   function _html2node(xParent) {
    //     var nodes = [];
    //     for (var xNode of xParent.childNodes) {
    //       var node;
    //       switch (xNode.nodeType) {
    //         case 3:
    //           node = {
    //             type: "text",
    //             text: xNode.nodeValue
    //           }
    //           break;
    //         case 1:
    //           node = {
    //             name: xNode.tagName.toLowerCase(),
    //             children: _html2node(xNode),
    //             attrs:{}
    //           };
    //           if (xNode.attributes["class"]) {
    //             node.attrs.class = xNode.attributes["class"].value;
    //           }
    //           if (xNode.attributes["style"]) {
    //             node.attrs.style = xNode.attributes["style"].value;
    //           }
    //           break;
    //         default:
    //           console.warn(xNode.nodeType);
    //           node = null;
    //           break;
    //       }
    //       if (node) { nodes.push(node); }
    //     }
    //     return nodes;
    //   }
    //   var document = new DOMParser().parseFromString(html, 'text/html');
    //   return _html2node(document.querySelector('body'));
    // }
  },

});
