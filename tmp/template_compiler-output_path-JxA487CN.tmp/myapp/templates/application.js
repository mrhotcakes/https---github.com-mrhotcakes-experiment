export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.6",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 55,
          "column": 0
        }
      },
      "moduleName": "myapp/templates/application.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n      ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","header clearfix");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("nav");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("ul");
      dom.setAttribute(el4,"class","nav nav-pills pull-xs-right");
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      dom.setAttribute(el5,"class","nav-item active");
      var el6 = dom.createTextNode("\n              ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"class","nav-link");
      dom.setAttribute(el6,"href","#");
      var el7 = dom.createTextNode("Home ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("span");
      dom.setAttribute(el7,"class","sr-only");
      var el8 = dom.createTextNode("(current)");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      dom.setAttribute(el5,"class","nav-item");
      var el6 = dom.createTextNode("\n              ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"class","nav-link");
      dom.setAttribute(el6,"href","#");
      var el7 = dom.createTextNode("About");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      dom.setAttribute(el5,"class","nav-item");
      var el6 = dom.createTextNode("\n              ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"class","nav-link");
      dom.setAttribute(el6,"href","#");
      var el7 = dom.createTextNode("Contact");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h3");
      dom.setAttribute(el3,"class","text-muted");
      var el4 = dom.createTextNode("Bootstrap Safari Hunt");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n      ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","jumbotron");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h1");
      dom.setAttribute(el3,"class","display-3");
      var el4 = dom.createTextNode("Jumbotron heading");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("p");
      dom.setAttribute(el3,"class","lead");
      var el4 = dom.createTextNode("Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("p");
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","btn btn-lg btn-success");
      dom.setAttribute(el4,"href","#");
      dom.setAttribute(el4,"role","button");
      var el5 = dom.createTextNode("Sign up today");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n      ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row marketing");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-6");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      var el5 = dom.createTextNode("Subheading");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      var el5 = dom.createTextNode("Subheading");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      var el5 = dom.createTextNode("Subheading");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Maecenas sed diam eget risus varius blandit sit amet non magna.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-6");
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      var el5 = dom.createTextNode("Subheading");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      var el5 = dom.createTextNode("Subheading");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      var el5 = dom.createTextNode("Subheading");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n          ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Maecenas sed diam eget risus varius blandit sit amet non magna.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n      ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("footer");
      dom.setAttribute(el2,"class","footer");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("p");
      var el4 = dom.createTextNode("© Company 2014");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode(" ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment(" /container ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,4,4,contextualElement);
      return morphs;
    },
    statements: [
      ["content","outlet",["loc",[null,[54,0],[54,10]]]]
    ],
    locals: [],
    templates: []
  };
}()));