(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),s=(a(52),a(3)),i=a(4),o=a(6),d=a(5),u=a(7),m=a(137),h=a(41),p=a.n(h),E=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar is-transparent"},l.a.createElement("div",{class:"navbar-brand"},l.a.createElement("a",{class:"navbar-item",href:"https://github.com/batch11g6/SmartChain"},l.a.createElement("img",{src:p.a,alt:"Smart Chain",width:"52",height:"58"})),l.a.createElement("h6",{class:"navbar-item"},"Smart Chain"),l.a.createElement("div",{class:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{class:"navbar-end"},l.a.createElement("div",{class:"navbar-item"},l.a.createElement("div",{class:"field is-grouped"},l.a.createElement("p",{class:"control"},l.a.createElement("a",{class:""},l.a.createElement("span",{class:"icon"}),l.a.createElement("span",null,l.a.createElement("a",{href:"%PUBLIC_URL%/"},l.a.createElement(m.a,{to:"/"},"Home"))))),l.a.createElement("p",{class:"control"},l.a.createElement("a",{class:" "},l.a.createElement("span",{class:"icon"}),l.a.createElement("span",null,l.a.createElement("a",{href:"%PUBLIC_URL%/about"},l.a.createElement(m.a,{to:"/about"},"About"))))),"\xa0\xa0\xa0\xa0\xa0")))))}}]),t}(n.Component),b=a(13),g=a(42),f=a.n(g),v=a(25),O=a(43),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),y=a(44),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={long:"",lat:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?l.a.createElement("div",null,sessionStorage.setItem("long",this.props.coords.longitude),sessionStorage.setItem("lat",this.props.coords.latitude)):l.a.createElement("div",null,"Getting the location data\u2026 "):l.a.createElement("div",null,"Geolocation is not enabled"):l.a.createElement("div",null,"Your browser does not support Geolocation")}}]),t}(l.a.Component),w=Object(y.geolocated)({positionOptions:{enableHighAccuracy:!0},userDecisionTimeout:5e3})(C),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(O.Card,{shadow:0,style:{width:"100%",height:"400px"}},l.a.createElement(v.Map,{google:this.props.google,style:{width:"100%",height:"800px"},initialCenter:{lat:sessionStorage.getItem("lat"),lng:sessionStorage.getItem("long")},zoom:15,onClick:this.onMapClicked},l.a.createElement(v.Marker,{onClick:this.onMarkerClick,name:"location"}))),l.a.createElement(j,null))}}]),t}(n.Component),S=(Object(v.GoogleApiWrapper)({apiKey:""})(k),a(31),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.dialogColor;return l.a.createElement("div",null,l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"columns"},l.a.createElement("div",{class:"column"},l.a.createElement("header",{class:"card-header"},l.a.createElement("p",{class:"card-header-title"},"Smart Chain"),l.a.createElement("a",{href:"#",class:"card-header-icon","aria-label":"more options"},l.a.createElement("span",{class:"icon"},l.a.createElement("i",{class:"fas fa-angle-down","aria-hidden":"true"})))),l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{class:"content color_gray"},l.a.createElement("div",null,l.a.createElement("img",{width:"40%",src:this.props.statusUrlImage}),l.a.createElement("p",{style:{color:e}},this.props.displayMessage)),l.a.createElement("br",null),l.a.createElement("strong",null,"Product Name: ")," ",this.props.productDetails.productname,l.a.createElement("br",null),l.a.createElement("strong",null,"Ingredients: "),this.props.productDetails.ingredients,l.a.createElement("br",null),l.a.createElement("strong",null,"Manufactured date: "),this.props.productDetails.manufactureddate,l.a.createElement("br",null),l.a.createElement("strong",null,"Expiry date: "),this.props.productDetails.expirydate,l.a.createElement("br",null),l.a.createElement("strong",null,"Price (\u20b9): "),this.props.productDetails.price,l.a.createElement("br",null),l.a.createElement("strong",null,"batch number: "),this.props.productDetails.batchnumber,l.a.createElement("br",null)))))))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={delay:2e3,result:" ",statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",isPresent:!1,details:"",displayMessage:"Scan the QR code by placing the product QR code in front of the camera",dialogColor:"gray",productDetails:{}},a.handleScan=a.handleScan.bind(Object(b.a)(Object(b.a)(a))),a.handleOpenDialog=a.handleOpenDialog.bind(Object(b.a)(Object(b.a)(a))),a.handleCloseDialog=a.handleCloseDialog.bind(Object(b.a)(Object(b.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleOpenDialog",value:function(){this.setState({openDialog:!0})}},{key:"handleCloseDialog",value:function(){this.setState({openDialog:!1}),this.setState({statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",dialogColor:"black",displayMessage:"Scan the QR code by placing the product QR code in front of the camera"})}},{key:"handleScan",value:function(e){var t=this;this.setState({result:e});var a={data:this.state.result};null!==this.state.result&&64===this.state.result.length?fetch("https://smartchainrestapi.herokuapp.com/api/product/isvaild/",{method:"POST",body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){console.log("json.isPresent",e.isPresent),console.log("json.data",e.data.data.productname),t.setState({isPresent:e.isPresent,details:e.details,productDetails:e.data.data}),!0===e.isPresent?(t.setState({statusUrl:"https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif",displayMessage:"The product is authenticated. It is a valid product and safe to use",isPresent:e.isPresent,dialogColor:"green"}),t.handleOpenDialog()):!1===e.isPresent?(t.setState({statusUrl:"https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif",displayMessage:"The product seems to be counterfeit it is adviced not to use this product",isPresent:e.isPresent,dialogColor:"orange"}),t.handleOpenDialog()):t.setState({statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",dialogColor:"black",displayMessage:"Scan the QR code by placing the product QR code in front of the camera"})}).catch(function(e){return console.log(e)}):console.log("waiting")}},{key:"handleError",value:function(e){console.error(e)}},{key:"render",value:function(){return l.a.createElement("div",{class:"columns"},l.a.createElement("div",{class:"column"},l.a.createElement("div",{class:"card"},l.a.createElement("header",{class:"card-header"},l.a.createElement("p",{class:"card-header-title "},"Scan the QR Code"),l.a.createElement("a",{href:"#",class:"card-header-icon","aria-label":"more options"},l.a.createElement("span",{class:"icon"},l.a.createElement("i",{class:"fas fa-angle-down","aria-hidden":"true"})))),l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{class:"content"},l.a.createElement(f.a,{delay:this.state.delay,style:{height:400,width:420},onError:this.handleError,onScan:this.handleScan,facingMode:"rear"}),l.a.createElement("table",{class:"table is-striped is-bordered is-responsive"},l.a.createElement("thead",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Valid"),l.a.createElement("th",null,"Details")),l.a.createElement("tr",null,l.a.createElement("td",null,this.state.result),l.a.createElement("td",null,this.state.isPresent),l.a.createElement("td",null,this.state.details))))))),l.a.createElement("div",{class:"column"},l.a.createElement(S,{statusUrlImage:this.state.statusUrl,displayMessage:this.state.displayMessage,dialogColor:this.state.dialogColor,isPresent:this.state.isPresent,resultCode:this.state.result,productDetails:this.state.productDetails})))}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{class:"card"},l.a.createElement("header",{class:"card-header"},l.a.createElement("p",{class:"card-header-title"},"Smart Chain"),l.a.createElement("a",{href:"#",class:"card-header-icon","aria-label":"more options"},l.a.createElement("span",{class:"icon"},l.a.createElement("i",{class:"fas fa-angle-down","aria-hidden":"true"})))),l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{class:"content"},l.a.createElement(D,null)))))}}]),t}(n.Component),M=(n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function U(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(132),a(134);var R=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).handleGithubClick=e.handleGithubClick.bind(Object(b.a)(Object(b.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleGithubClick",value:function(){window.location.assign("https://github.com/batch11g6/SmartChain")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(j,null),l.a.createElement("div",{class:"columns"},l.a.createElement("div",{class:"column"}),l.a.createElement("div",{class:"column"},l.a.createElement("div",{class:"card"},l.a.createElement("header",{class:"card-header"},l.a.createElement("h4",{class:"card-header-title color_gray"},"Smart Chain"),l.a.createElement("a",{href:"#",class:"card-header-icon","aria-label":"more options"},l.a.createElement("span",{class:"icon"},l.a.createElement("i",{class:"fas fa-angle-down","aria-hidden":"true"})))),l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{class:"content color_gray"},l.a.createElement("br",null),l.a.createElement("h1",{class:"color_gray"},"Project Mentor: Sangeetha V"),l.a.createElement("h1",{className:"color_gray"},"Tream Members"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"USN")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/dm212"},"Yashwanth D M")),l.a.createElement("td",null,"1KS15CS123")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/Phaneendra97"},"Phaneendra A R")),l.a.createElement("td",null,"1KS15CS002")),l.a.createElement("tr",null,l.a.createElement("td",null,"Mayura K R"),l.a.createElement("td",null,"1KS15CS056")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/NikilMunireddy"},"Nikil M")),l.a.createElement("td",null,"1KS15CS066")))),l.a.createElement("a",{class:"button is-link is-rounded",onClick:this.handleGithubClick},"GitHub")))),l.a.createElement("div",{class:"column"})))}}]),t}(n.Component),I=a(138),G=a(140),x=a(139);c.a.render(l.a.createElement(I.a,null,l.a.createElement(G.a,null,l.a.createElement(x.a,{exact:!0,path:"/",component:P}),l.a.createElement(x.a,{path:"/about",component:R}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");M?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):U(t,e)})}}()},31:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/smartchain.4d5d888c.jpg"},47:function(e,t,a){e.exports=a(136)},52:function(e,t,a){}},[[47,2,1]]]);
//# sourceMappingURL=main.0e757cb9.chunk.js.map