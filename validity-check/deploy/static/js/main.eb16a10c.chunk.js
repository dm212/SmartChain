(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){},130:function(e){e.exports={host:"127.0.0.1",port:5e3,localhostServerUrl:"localhost:5000",globalhostingDOmain:""}},136:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(10),r=a.n(l),i=(a(50),a(5)),s=a(6),c=a(8),u=a(7),d=a(9),h=a(3),m=a(137),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h.Header,null,o.a.createElement(h.HeaderRow,{title:"SCM"}),o.a.createElement(h.Navigation,null,o.a.createElement("a",{href:"/"},o.a.createElement(m.a,{to:"/"},o.a.createElement(h.Button,{colored:!0,style:{color:"#fff"}},"Home"))),o.a.createElement("a",{href:"/about"},o.a.createElement(m.a,{to:"/about"},o.a.createElement(h.Button,{colored:!0,style:{color:"#fff"}},"About"))))),o.a.createElement(h.Drawer,{title:"SCM"}))}}]),t}(n.Component),p=a(15),b=a(41),f=a.n(b),E=(a(116),a(26)),v=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null))}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h.Card,{shadow:0,style:{width:"100%",height:"400px"}},o.a.createElement(E.Map,{google:this.props.google,style:{width:"100%",height:"600px"},initialCenter:{lat:sessionStorage.getItem("lat"),lng:sessionStorage.getItem("long")},zoom:10,onClick:this.onMapClicked},o.a.createElement(E.Marker,{onClick:this.onMarkerClick,name:"location"}))),o.a.createElement(v,null))}}]),t}(n.Component),O=Object(E.GoogleApiWrapper)({apiKey:""})(y),w=(a(130),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={delay:2e3,result:" ",statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",isPresent:!1,details:"",displayMessage:"Scan the QR code by placing the product QR code in front of the camera",dialogColor:"gray"},a.handleScan=a.handleScan.bind(Object(p.a)(Object(p.a)(a))),a.handleOpenDialog=a.handleOpenDialog.bind(Object(p.a)(Object(p.a)(a))),a.handleCloseDialog=a.handleCloseDialog.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){fetch("http://www.geoplugin.net/json.gp").then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})}},{key:"handleOpenDialog",value:function(){this.setState({openDialog:!0})}},{key:"handleCloseDialog",value:function(){this.setState({openDialog:!1})}},{key:"handleScan",value:function(e){var t=this;this.setState({result:e});var a={data:e};null!==this.state.result?fetch("https://smartchainrestapi.herokuapp.com/api/product/isvaild/",{method:"POST",body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){console.log("json.isPresent",e.isPresent),console.log(e.details),t.setState({isPresent:e.isPresent,details:e.details}),"ok this"===e.details||!0===e.isPresent?(t.setState({statusUrl:"https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif",displayMessage:"The product is authenticated. It is a valid product and safe to use",isPresent:e.isPresent,dialogColor:"green"}),t.handleOpenDialog()):!1===e.isPresent&&"Spurious"===e.details?(t.setState({statusUrl:"https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif",displayMessage:"The product seems to be counterfeit it is adviced not to use this product",isPresent:e.isPresent,dialogColor:"orange"}),t.handleOpenDialog()):t.setState({statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",dialogColor:"black",displayMessage:"Scan the QR code by placing the product QR code in front of the camera"})}).catch(function(e){return console.log(e)}):console.log("waiting")}},{key:"handleError",value:function(e){console.error(e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(h.Grid,{className:"demo-grid-2"},o.a.createElement(h.Cell,{col:7},o.a.createElement(h.Card,{shadow:0,style:{width:"100%",height:"600px",margin:"auto"}},o.a.createElement(h.CardText,{className:""},o.a.createElement(f.a,{delay:this.state.delay,style:{height:400,width:420},onError:this.handleError,onScan:this.handleScan,facingMode:"rear"}),o.a.createElement(h.DataTable,{shadow:0,rows:[{ispresent:this.state.isPresent,code:this.state.result,details:this.state.details}],className:"data_table"},o.a.createElement(h.TableHeader,{numeric:!0,name:"ispresent",tooltip:"QR Code value"},"Is Valid"),o.a.createElement(h.TableHeader,{numeric:!0,name:"code",tooltip:"QR Code value"},"Code"),o.a.createElement(h.TableHeader,{numeric:!0,name:"details",tooltip:"Details"},"Details"))))),o.a.createElement(h.Cell,{col:5},o.a.createElement(h.Card,{class:"hide_block",shadow:0,style:{width:"100%",height:"900px",margin:"auto",right:"250px"}},o.a.createElement(h.CardText,null,o.a.createElement(h.Card,{shadow:0,style:{width:"100%",height:"584px"}},o.a.createElement("img",{src:this.state.statusUrl,style:{height:"300px"},alt:"Status logo"}),o.a.createElement(h.Card,{border:!0,class:"mdl-card__supporting-text",style:{color:this.state.dialogColor}},this.state.displayMessage)))))),o.a.createElement(h.Card,{class:"hide_desktop_block",shadow:0,style:{width:"100%",height:"500px",margin:"auto"}},o.a.createElement(h.CardText,null,o.a.createElement(h.Card,{shadow:0,style:{width:"100%",height:"500px"}},o.a.createElement("img",{src:this.state.statusUrl,style:{height:"300px"},alt:"Status logo"}),o.a.createElement("div",{border:!0,class:"mdl-card__supporting-text",style:{color:this.state.dialogColor}},this.state.displayMessage)))),"Content",o.a.createElement("br",null),"Long: ",sessionStorage.getItem("long")," \xa0 Lat: ",sessionStorage.getItem("lat"),o.a.createElement(O,null)),o.a.createElement(h.Dialog,{open:this.state.openDialog},o.a.createElement(h.DialogTitle,null,"Result"),o.a.createElement(h.DialogContent,null,o.a.createElement("p",{style:{color:this.state.dialogColor}},this.state.displayMessage),o.a.createElement("img",{src:this.state.statusUrl,alt:"img not found",style:{width:"100px",height:"100px"}})),o.a.createElement(h.DialogActions,null,o.a.createElement(h.Button,{type:"button",onClick:this.handleCloseDialog},"OK"))))}}]),t}(n.Component)),j=a(42),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={long:"",lat:""},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?o.a.createElement("div",null,sessionStorage.setItem("long",this.props.coords.longitude),sessionStorage.setItem("lat",this.props.coords.latitude)):o.a.createElement("div",null,"Getting the location data\u2026 "):o.a.createElement("div",null,"Geolocation is not enabled"):o.a.createElement("div",null,"Your browser does not support Geolocation")}}]),t}(o.a.Component),k=Object(j.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(C),S=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(g,null),o.a.createElement(w,null))}}]),t}(n.Component),D=(n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function x(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(132),a(134);var M=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement("div",null,o.a.createElement("h1",null,"About")))}}]),t}(n.Component),P=a(138),T=a(140),A=a(139);r.a.render(o.a.createElement(P.a,null,o.a.createElement(T.a,null,o.a.createElement(A.a,{exact:!0,path:"/",component:S}),o.a.createElement(A.a,{path:"/about",component:M}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");D?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):x(t,e)})}}()},45:function(e,t,a){e.exports=a(136)},50:function(e,t,a){}},[[45,2,1]]]);
//# sourceMappingURL=main.eb16a10c.chunk.js.map