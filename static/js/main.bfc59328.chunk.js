(this["webpackJsonpcasa-luker-client"]=this["webpackJsonpcasa-luker-client"]||[]).push([[0],{222:function(e,t,a){},381:function(e,t,a){},450:function(e,t,a){},458:function(e,t,a){},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){},567:function(e,t,a){},568:function(e,t,a){},569:function(e,t,a){},570:function(e,t,a){},572:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(31),n=a.n(s),r=a(63),o=a(221),i=a(79),l=a(253),d=a(582),u=a(62),j=a(27),b=a(50),h=a.n(b),p=a(71),O=a(35),m=a(272),x="/",g="/products",f="SESSION_DESTROY",v=a(257),I=a.n(v),k=a(258),y=a.n(k),C=I.a.create({baseURL:"https://afternoon-bastion-43792.herokuapp.com/",withCredentials:!0,headers:{common:{ContentType:"application/json"},ContentType:"application/json"}});C.defaults.paramsSerializer=function(e){return y.a.stringify(e,{encode:!1})},C.interceptors.response.use((function(e){return e}),(function(e){return e.response}));var N="SESSION_CREATE",S={admin:!1,email:null,logged:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(j.a)(Object(j.a)({},e),t.payload);case f:return localStorage.removeItem("token"),localStorage.removeItem("logged"),S;default:return e}},E=a(262),_=Object(E.a)({queryKey:!1,basename:"/"});var A=a(161),T=a(30),P=a(578),q=a(74),M=a.n(q),R=(a(380),a(222),a(576)),F=a(577),D=a(580),H=a(583),U=a(67),L=a(585),B=a(586),K=a.p+"static/media/logo-luker.a89f8fb4.png",V=a.p+"static/media/logo-treking.550b6522.png",z=(a(381),a(5)),X=function(e,t,a){m.a[e]({message:t,description:a})};var J={goToHome:function(){return Object(O.d)(g)},goToAuth:function(){return Object(O.d)("/no-link")}},W=Object(r.c)((function(e){return{}}),J)((function(e){var t=e.goToHome,a=e.goToAuth;Object(c.useEffect)((function(){localStorage.getItem("user")&&(localStorage.clear(),a())}),[]);return Object(z.jsxs)(R.a,{className:"sign-up-container",children:[Object(z.jsx)(F.a,{xs:24,children:Object(z.jsx)("img",{className:"logo",src:K,alt:"casa luker"})}),Object(z.jsx)(F.a,{xs:24,children:Object(z.jsx)("div",{className:"sign-up-content",children:Object(z.jsxs)("div",{className:"sign-up-form-content",children:[Object(z.jsx)("p",{className:"sign-up-title",children:"Iniciar sesi\xf3n"}),Object(z.jsxs)(D.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){var a=e.username,c=e.password;"admin"===a&&"123456789"===c?(X("success","Bienvenido",""),localStorage.setItem("user",{name:"Milt\xf3n casta\xf1o",charge:"Jefe de cedi"}),t()):X("error","Autenticaci\xf3n fallida","Usuario y/o contrase\xf1a incorrecta")},children:[Object(z.jsx)(D.a.Item,{name:"username",rules:[{required:!0,message:"Por favor inserta un usuario"}],children:Object(z.jsx)(H.a,{prefix:Object(z.jsx)(L.a,{className:"site-form-item-icon",style:{fontSize:"20px"}}),placeholder:"Tu usuario",size:"large"})}),Object(z.jsx)(D.a.Item,{name:"password",rules:[{required:!0,message:"Por favor inserta tu contrase\xf1a"}],children:Object(z.jsx)(H.a,{prefix:Object(z.jsx)(B.a,{className:"site-form-item-icon",style:{fontSize:"20px"}}),type:"password",size:"large",placeholder:"Tu contrase\xf1a"})}),Object(z.jsx)(D.a.Item,{children:Object(z.jsx)("a",{className:"login-form-forgot",href:"",children:"\xbfOlvidaste tu contrase\xf1a?"})}),Object(z.jsx)(D.a.Item,{children:Object(z.jsx)(U.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Acceder"})})]})]})})}),Object(z.jsx)(F.a,{xs:24,children:Object(z.jsxs)("div",{className:"footer-content",children:[Object(z.jsx)("img",{className:"logo",src:V,alt:"casa luker"}),Object(z.jsx)("p",{className:"extra-text",children:"Innovation in logistics 4.0"})]})})]})})),G=(a(450),a(584)),Q=a(579),Z="products",Y="vehicles",$=a(167);a(451),a(573);try{$.a.initializeApp({apiKey:"AIzaSyBY6W4R-um6DDynmX9nIZlwpAngFVDalzM",authDomain:"wms-demo-4478e.firebaseapp.com",projectId:"wms-demo-4478e",storageBucket:"wms-demo-4478e.appspot.com",messagingSenderId:"530564375885",appId:"1:530564375885:web:6cc0c64264d39f8f9fc304",measurementId:"G-MKWXDX63HQ"})}catch(tt){}$.a.auth();var ee=$.a.firestore(),te=[{title:"UVA",dataIndex:"uva",key:"uva"},{title:"Nombre",dataIndex:"name",key:"name"},{title:"SKU",dataIndex:"sku",key:"sku"},{title:"Unidades",dataIndex:"stock",key:"stock",render:function(e,t){return Object(z.jsx)("p",{children:"".concat(e," ").concat(t.units?t.units:"")})}},{title:"Ciudad destino",dataIndex:"city",key:"city"},{title:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("p",{children:"Ubicaci\xf3n"}),Object(z.jsx)("span",{children:"RAC | Piso | Posici\xf3n"})]}),key:"location",dataIndex:"location",render:function(e){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(G.a,{color:"#f50",children:e.rac.toUpperCase()},e.rac),Object(z.jsx)(G.a,{color:"#108ee9",children:e.floor.toUpperCase()},e.floor),Object(z.jsx)(G.a,{color:"#87d068",children:e.position.toUpperCase()},e.position)]})}},{title:"Estado",key:"status",dataIndex:"status",render:function(e){return Object(z.jsx)(G.a,{color:"IN_STOCK"===e?"orange":"geekblue",children:("IN_STOCK"===e?"inventario":"producci\xf3n").toUpperCase()},e)}}],ae=function(){var e=Object(c.useState)([]),t=Object(T.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){ee.collection(Z).onSnapshot((function(e){s([]);var t=[];e.forEach((function(e){e.data().name&&e.data().uva&&t.push(Object(j.a)(Object(j.a)({},e.data()),{},{key:e.id}))})),t.length>0&&s(t)}))}),[]),Object(z.jsx)("div",{className:"table-container",children:Object(z.jsx)(Q.a,{dataSource:a,columns:te})})},ce=function(e,t){var a=M()(e,"HH:mm:ss"),c=M()(t,"HH:mm:ss"),s=M.a.duration(c.diff(a)),n=parseInt(s.asHours()),r=parseInt(s.asMinutes())%60,o=parseInt(s.asSeconds())%60;return"".concat(n,":").concat(r,":").concat(o)},se=function(e,t,a){m.a[e]({message:t,description:a})},ne="IN_PRODUCTION",re="NOT_ARRIVE",oe="ARRIVE",ie="ON_DOCK",le="EXIT",de=["#0074D9","#FF4136","#2ECC40","#FF851B","#7FDBFF","#B10DC9","#FFDC00","#001f3f","#39CCCC","#01FF70","#85144b","#F012BE","#3D9970","#111111","#AAAAAA"],ue=["Enero","Febrero","Marzo","Abril"],je=["Bogot\xe1 D.C.","Tunja","Bucaramanga","Cartagena","Barranquilla"],be=(a(458),"https://server1.proyectohorus.com.ar"),he="https://afternoon-bastion-43792.herokuapp.com/",pe=function(e){var t=e.isProductView,a=void 0!==t&&t,s=e.isVehicleView,n=void 0!==s&&s,r=Object(c.useState)([]),o=Object(T.a)(r,2),i=o[0],l=o[1],d=Object(c.useState)([]),u=Object(T.a)(d,2),j=u[0],b=u[1],h="",p=function(){window.Webcam.snap((function(e){var t=new XMLHttpRequest;t.open("POST",be+"/api/v2/functions/codebar/decoder?responseformat=json",!0),t.setRequestHeader("Authorization","Bearer "+h),t.setRequestHeader("Content-Type","image/jpeg; application/json; charset=utf-8"),t.onload=function(){if(200==t.status&&this.response){var e=JSON.parse(this.response),c="";if(c=e&&"FAIL"!==e.detected_id&&void 0!==e.detected_id?e.detected_id.replace("VEHICLE","").replace("(QRCODE)",""):"No detectado",a){!function(e){var t="",a=new XMLHttpRequest;a.open("POST",he+"product-qr-code",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Access-Control-Allow-Origin","*"),a.setRequestHeader("Access-Control-Allow-Methods","POST"),a.onload=function(){if(this.response)try{console.log(typeof this.response,this.response),t=JSON.parse(this.response),200==a.status?(t.value&&t.value.includes("/")?l(t.value.split("/")):l([]),se(t.response,t.message)):404==a.status&&""!==t.value&&se("warning",t.message)}catch(tt){console.log(tt)}},a.send(e)}(this.response);var s=document.getElementById("results");s&&(s.innerHTML="".concat(c))}else n&&function(e){var t="",a=new XMLHttpRequest;a.open("POST",he+"vehicle-qr-code",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Access-Control-Allow-Origin","*"),a.setRequestHeader("Access-Control-Allow-Methods","POST"),a.onload=function(){if(this.response)try{console.log(typeof this.response,this.response),t=JSON.parse(this.response),200==a.status?(t.value&&t.value.includes("/")?b(t.value.split("/")):b([t.value,""]),se(t.response,t.message)):404==a.status&&""!==t.value&&se("warning",t.message)}catch(tt){console.log(tt)}},a.send(e)}(this.response)}};var c=e.split(";base64,"),s=(c[0].replace("data:",""),c[1]);t.send(function(e,t){t=t||"";for(var a=1024,c=atob(e),s=c.length,n=Math.ceil(s/a),r=new Array(n),o=0;o<n;++o){for(var i=o*a,l=Math.min(i+a,s),d=new Array(l-i),u=i,j=0;u<l;++j,++u)d[j]=c[u].charCodeAt(0);r[o]=new Uint8Array(d)}return new Blob(r,{type:t})}(s,"image/jpeg"))}))},O=function(){!function(){var e=new FormData;e.append("user","TrekingSAS2"),e.append("password","Treking2021#"),e.append("profileuuid","1a28921e97e211eb944500155d714f00");var t=new XMLHttpRequest;t.open("POST",be+"/api/v2/functions/login?responseformat=json",!0),t.onload=function(){if(200==t.status&&this.response){var e=JSON.parse(this.response);h=e.token,e.instance}},t.send(e)}(),setInterval(p,2e3)};return Object(c.useEffect)((function(){setTimeout(O,5e3)}),[]),Object(z.jsx)("div",{className:"camqr-container",children:Object(z.jsxs)(R.a,{className:"camqr-content",children:[Object(z.jsx)(F.a,{xs:8,children:Object(z.jsxs)("div",{className:"info-qr",children:[Object(z.jsx)("p",{className:"subtitle",children:"TrekingAI - CamQR"}),Object(z.jsxs)(R.a,{children:[Object(z.jsx)(F.a,{xs:20,children:Object(z.jsxs)("div",{className:"description-content",children:[Object(z.jsx)("p",{className:"description",children:"Para hacer uso de la lectura inteligente:"}),Object(z.jsxs)(R.a,{children:[Object(z.jsx)(F.a,{xs:2,children:Object(z.jsx)("span",{className:"description-list-number",children:"1. "})}),Object(z.jsx)(F.a,{xs:22,children:Object(z.jsx)("span",{className:"description-item",children:"Activa la c\xe1mara"})}),Object(z.jsx)(F.a,{xs:2,children:Object(z.jsx)("span",{className:"description-list-number",children:"2. "})}),Object(z.jsx)(F.a,{xs:22,children:Object(z.jsx)("span",{className:"description-item",children:"Escanea el c\xf3digo QR en orden."})})]})]})}),Object(z.jsx)(F.a,{xs:4})]})]})}),Object(z.jsx)(F.a,{xs:8,children:Object(z.jsx)("div",{className:"my-camera",id:"my_camera"})}),Object(z.jsx)(F.a,{xs:8,children:Object(z.jsxs)("div",{className:"response-content",children:[Object(z.jsx)("p",{className:"title",children:"Lectura AI"}),Object(z.jsx)("div",{className:"response-view-content",children:a?Object(z.jsxs)("div",{className:"product-response",children:[Object(z.jsx)("p",{className:"position",children:i.length>0?"RAC: ".concat(i[0]," | Piso: ").concat(i[1]," | Posici\xf3n: ").concat(i[2]):"RAC: | Piso: | Posici\xf3n:"}),Object(z.jsx)("p",{id:"results",className:"uva"})]}):Object(z.jsxs)(R.a,{className:"vehicle-response",children:[Object(z.jsxs)(F.a,{xs:12,children:[Object(z.jsx)("p",{className:"title",children:"Posici\xf3n:"}),Object(z.jsx)("p",{className:"position-result",children:j.length>0?j[0]:""})]}),Object(z.jsxs)(F.a,{xs:12,children:[Object(z.jsx)("p",{className:"title",children:"Placa:"}),Object(z.jsx)("p",{className:"vehicle-result",children:j.length>0?j[1]:""})]})]})})]})})]})})},Oe=function(){return Object(z.jsx)(R.a,{className:"products-container",children:Object(z.jsxs)(F.a,{xs:24,children:[Object(z.jsx)("h2",{children:"Lectura inteligente"}),Object(z.jsx)(pe,{isProductView:!0}),Object(z.jsx)("h2",{children:"Lista de productos"}),Object(z.jsx)(ae,{})]})})},me=(a(459),[{title:"Placa",dataIndex:"vehicle",key:"vehicle"},{title:"Canal",dataIndex:"channel",key:"channel"},{title:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("p",{children:"Tiempos"}),Object(z.jsx)("span",{children:"Entrada | Muelle | Salida"})]}),key:"times",dataIndex:"times",render:function(e){var t=e.arrive&&e.on_dock?ce(e.arrive,e.on_dock):"",a=e.on_dock&&e.exit?ce(e.on_dock,e.exit):"",c=e.arrive&&e.exit?ce(e.arrive,e.exit):"";return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"timer-exact-container",children:[Object(z.jsx)(G.a,{color:"#f50",children:e.arrive},e.arrive),Object(z.jsx)(G.a,{color:"#108ee9",children:e.on_dock},e.on_dock),Object(z.jsx)(G.a,{color:"#87d068",children:e.exit},e.exit)]}),Object(z.jsxs)("div",{className:"timer-container",children:[Object(z.jsx)(G.a,{color:"blue",children:"EM: ".concat(t)},e.arrive),Object(z.jsx)(G.a,{color:"green",children:"MS: ".concat(a)},e.on_dock),Object(z.jsx)(G.a,{color:"magenta",children:"T: ".concat(c)},e.exit)]})]})}},{title:"Estado",key:"status",dataIndex:"status",render:function(e){return e===oe?Object(z.jsx)(G.a,{className:"status-tag",color:"#f50",children:"Entrada"},e):e===ie?Object(z.jsx)(G.a,{className:"status-tag",color:"#108ee9",children:"En Muelle"},e):e===le?Object(z.jsx)(G.a,{className:"status-tag",color:"#87d068",children:"Salida"},e):Object(z.jsx)(G.a,{color:"magenta",children:"Pendiente"},e)}}]),xe=function(){var e=Object(c.useState)([]),t=Object(T.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){ee.collection(Y).onSnapshot((function(e){s([]);var t=[];e.forEach((function(e){e.data().channel&&e.data().brand&&t.push(Object(j.a)(Object(j.a)({},e.data()),{},{key:e.id}))})),t.length>0&&s(t)}))}),[]),Object(z.jsx)("div",{className:"table-container",children:Object(z.jsx)(Q.a,{dataSource:a,columns:me})})},ge=function(){return Object(z.jsx)(R.a,{className:"products-container",children:Object(z.jsxs)(F.a,{xs:24,children:[Object(z.jsx)("h2",{children:"Lectura inteligente"}),Object(z.jsx)(pe,{isVehicleView:!0}),Object(z.jsx)("h2",{children:"Lista de veh\xedculos"}),Object(z.jsx)(xe,{})]})})},fe=a(124),ve=a(581),Ie=(a(460),fe.a.Option),ke={labelCol:{span:4},wrapperCol:{span:20}},ye={wrapperCol:{span:24}},Ce=function(){var e=Object(p.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.name&&t.uva&&t.sku&&t.units.units&&t.units.stock&&t.city)){e.next=13;break}return e.prev=1,a=ee.collection(Z).doc(),e.next=5,a.set({uva:t.uva,name:t.name,stock:t.units.stock,units:t.units.units,city:t.city,sku:t.sku,location:{rac:"",floor:"",position:""},status:ne,created_at:new Date});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.abrupt("return",!0);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){return Object(z.jsx)(R.a,{className:"new-product-container",children:Object(z.jsxs)(F.a,{xs:24,children:[Object(z.jsx)("h2",{children:"Nuevo producto"}),Object(z.jsx)("div",{className:"new-product-form-content",children:Object(z.jsxs)(D.a,Object(j.a)(Object(j.a)({},ke),{},{name:"basic",onFinish:function(e){Ce(e).then((function(e){e?se("success","Se agreg\xf3 el producto satisfactoriamente"):se("error","NO se agreg\xf3 el producto. Int\xe9ntalo nuevamente.")}))},onFinishFailed:function(e){},children:[Object(z.jsx)(D.a.Item,{label:"UVA",name:"uva",rules:[{required:!0,message:"Por favor inserta c\xf3digo UVA"}],children:Object(z.jsx)(H.a,{})}),Object(z.jsx)(D.a.Item,{label:"Nombre",name:"name",rules:[{required:!0,message:"Por favor inserta un nombre"}],children:Object(z.jsx)(H.a,{})}),Object(z.jsx)(D.a.Item,{label:"SKU",name:"sku",rules:[{required:!0,message:"Por favor inserta c\xf3digo SKU"}],children:Object(z.jsx)(H.a,{})}),Object(z.jsx)(D.a.Item,{label:"Unidades",children:Object(z.jsxs)(H.a.Group,{compact:!0,children:[Object(z.jsx)(D.a.Item,{name:["units","stock"],noStyle:!0,rules:[{required:!0,message:"Cantidad es requerida"}],children:Object(z.jsx)(ve.a,{min:1,max:1e3,style:{width:"30%"},placeholder:"Cantidad"})}),Object(z.jsx)(D.a.Item,{name:["units","units"],noStyle:!0,rules:[{required:!0,message:"Unidad es requerida"}],children:Object(z.jsxs)(fe.a,{placeholder:"Selecciona una unidad",style:{width:"70%"},children:[Object(z.jsx)(Ie,{value:"kg",children:"Kilogramos"}),Object(z.jsx)(Ie,{value:"t",children:"Toneladas"}),Object(z.jsx)(Ie,{value:"gr",children:"Gramos"}),Object(z.jsx)(Ie,{value:"lb",children:"Libras"}),Object(z.jsx)(Ie,{value:"lt",children:"Litros"})]})})]})}),Object(z.jsx)(D.a.Item,{label:"Ciudad destino",name:"city",rules:[{required:!0,message:"Por favor inserta ciudad destino"}],children:Object(z.jsx)(fe.a,{placeholder:"Selecciona una ciudad",children:je.map((function(e){return Object(z.jsx)(Ie,{value:e,children:e},e)}))})}),Object(z.jsx)(D.a.Item,Object(j.a)(Object(j.a)({},ye),{},{children:Object(z.jsx)(U.a,{type:"primary",htmlType:"submit",children:"Agregar"})}))]}))})]})})},Se=(a(461),fe.a.Option),we={labelCol:{span:4},wrapperCol:{span:20}},Ee={wrapperCol:{span:24}},_e=function(){var e=Object(p.a)(h.a.mark((function e(t){var a,c,s,n,r,o,i,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.vehicle,c=t.model,s=t.brand,n=t.channel,r=t.boxes_to_load,o=t.kg_to_load,i=t.name_client,!(a&&c&&s&&n&&r&&o)){e.next=14;break}return e.prev=2,l=ee.collection(Y).doc(),e.next=6,l.set({name_client:i,vehicle:a,model:c,brand:s,channel:n,boxes_to_load:r,kg_to_load:o,status:re,times:{arrive:"",on_dock:"",exit:""},created_at:new Date});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:return e.abrupt("return",!0);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){return Object(z.jsx)(R.a,{className:"new-vehicle-container",children:Object(z.jsxs)(F.a,{xs:24,children:[Object(z.jsx)("h2",{children:"Nuevo veh\xedculo"}),Object(z.jsx)("div",{className:"new-vehicle-form-content",children:Object(z.jsxs)(D.a,Object(j.a)(Object(j.a)({},we),{},{name:"basic",onFinish:function(e){_e(e).then((function(e){e?se("success","Se registr\xf3 el veh\xedculo satisfactoriamente"):se("error","NO se registr\xf3 el veh\xedculo. Int\xe9ntalo nuevamente.")}))},onFinishFailed:function(e){},children:[Object(z.jsx)(D.a.Item,{name:"vehicle",label:"Placa",placeholder:"Ej: ABC123",rules:[{required:!0,message:"Por favor inserta la placa del vehiculo!",whitespace:!0},function(){return{validator:function(e,t){return/[a-z]{3}[0-9]{3}$/.exec(t.toLowerCase())?Promise.resolve():Promise.reject("Estructura de placa: XXX123")}}}],normalize:function(e){return(e||"").toUpperCase()},children:Object(z.jsx)(H.a,{})}),Object(z.jsx)(D.a.Item,{label:"Marca",name:"brand",rules:[{required:!0,message:"Por favor inserta marca"}],children:Object(z.jsx)(H.a,{})}),Object(z.jsx)(D.a.Item,{label:"Nombre cliente",name:"name_client",rules:[{required:!0,message:"Por favor inserta nombre de cliente"}],children:Object(z.jsx)(H.a,{})}),Object(z.jsx)(D.a.Item,{label:"Modelo",name:"model",rules:[{required:!0,message:"Por favor inserta modelo del veh\xedculo"}],children:Object(z.jsx)(ve.a,{min:1990,max:2021,style:{width:"100%"},placeholder:"EJ: 2021"})}),Object(z.jsx)(D.a.Item,{label:"Canal",name:"channel",rules:[{required:!0,message:"Canal es requerida"}],children:Object(z.jsxs)(fe.a,{placeholder:"Selecciona un canal",style:{width:"100%"},children:[Object(z.jsx)(Se,{value:"cadenas",children:"Cadenas"}),Object(z.jsx)(Se,{value:"exportacion",children:"Exportaci\xf3n"}),Object(z.jsx)(Se,{value:"industrial",children:"Industrial"})]})}),Object(z.jsx)(D.a.Item,{label:"Cajas a cargar",name:"boxes_to_load",rules:[{required:!0,message:"Por favor inserta cajas a cargar"}],children:Object(z.jsx)(ve.a,{min:1,max:2e3,style:{width:"100%"},placeholder:"EJ: 15"})}),Object(z.jsx)(D.a.Item,{label:"KG a cargar",name:"kg_to_load",rules:[{required:!0,message:"Por favor inserta KG a cargar"}],children:Object(z.jsx)(ve.a,{min:1,max:2e3,style:{width:"100%"},placeholder:"EJ: 10"})}),Object(z.jsx)(D.a.Item,Object(j.a)(Object(j.a)({},Ee),{},{children:Object(z.jsx)(U.a,{type:"primary",htmlType:"submit",children:"Agregar"})}))]}))})]})})},Te=a(117),Pe=a(159),qe=a(82),Me=(a(567),function(e,t){return Math.floor(Math.random()*(t-e+1))+e}),Re=function(e){Object(Pe.a)(e);var t=Object(c.useState)([]),a=Object(T.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)([]),o=Object(T.a)(r,2),i=o[0],l=o[1];Object(c.useEffect)((function(){ee.collection(Z).onSnapshot((function(e){l([]);var t=[];e.forEach((function(e){e.data().name&&e.data().uva&&t.push(Object(j.a)(Object(j.a)({},e.data()),{},{key:e.id}))})),t.length>0&&l(t)})),s.length>0&&n([]),ee.collection(Z).get().then((function(e){var t={};e.forEach((function(e){t[e.data().city]&&void 0!==t[e.data().city]?t=Object(j.a)(Object(j.a)({},t),{},Object(Te.a)({},e.data().city,t[e.data().city]+1)):void 0!==e.data().city&&(t=Object(j.a)(Object(j.a)({},t),{},Object(Te.a)({},e.data().city,1)))}));var a=[];console.log("objCities",t),Object.entries(t).forEach((function(e){var t=Object(T.a)(e,2),c=t[0],s=t[1];a.push({data:[Me(1e3,2e3),Me(2e3,3e3),Me(1e3,4e3),s],borderColor:de[Me(0,de.length-1)],backgroundColor:"transparent",label:c})})),n(a),console.log(s)})).catch((function(e){console.log("Error getting documents: ",e)}))}),[]);var d={datasets:s,labels:ue},u={pointRadius:1},b={datasets:[{data:[100,120,180,i.length],label:"Inventario total",backgroundColor:"rgba(128,164,237, 0.8)",borderColor:"rgba(128,164,237, 1)",pointRadius:9,pointBackgroundColor:"rgba(150,164,237, 1)"}],labels:["Enero","Febrero","Marzo","Abril"]};return Object(z.jsxs)("div",{className:"products-statistics-container",children:[Object(z.jsx)("h2",{children:"Estad\xedsticas de productos"}),Object(z.jsxs)(R.a,{className:"products-statistics-content",children:[Object(z.jsx)(F.a,{xs:12,children:Object(z.jsx)(qe.c,{data:d,options:u})}),Object(z.jsx)(F.a,{xs:12,children:Object(z.jsx)(qe.c,{data:b,options:u})})]})]})},Fe=(a(568),function(e){var t=e%3600;return Math.floor(t/60)}),De=[{title:"Home",path:x,exact:!0,component:W},{title:"SignUp",path:"/sign_up",exact:!0,component:W},{title:"Products list",path:g,exact:!0,component:Oe},{title:"Products new",path:"/products/new",exact:!0,component:Ne},{title:"Products statistics",path:"/products/statistics",exact:!0,component:Re},{title:"Transports list",path:"/transports",exact:!0,component:ge},{title:"New vehicle",path:"/transports/new",exact:!0,component:Ae},{title:"Transports statistics",path:"/transports/statistics",exact:!0,component:function(e){Object(Pe.a)(e);var t=Object(c.useState)([]),a=Object(T.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(0),o=Object(T.a)(r,2),i=o[0],l=o[1],d=Object(c.useState)(0),u=Object(T.a)(d,2),j=u[0],b=u[1],h=Object(c.useState)(0),p=Object(T.a)(h,2),O=p[0],m=p[1],x=Object(c.useState)(0),g=Object(T.a)(x,2),f=(g[0],g[1],Object(c.useState)(0)),v=Object(T.a)(f,2),I=(v[0],v[1],Object(c.useState)(0)),k=Object(T.a)(I,2);k[0],k[1];Object(c.useEffect)((function(){!function(){var e=ee.collection(Y);["industrial","exportacion","cadenas"].forEach((function(t){e.where("channel","==",t).get().then((function(e){var a=0;e.forEach((function(e){a++})),"industrial"===t&&b(a),"exportacion"===t&&m(a),"cadenas"===t&&l(a)})).catch((function(e){console.log("Error getting documents: ",e)}))})),e.onSnapshot((function(e){var t=[],a=[],c=0,s=0,r=0,o=0,i=0,l=0;e.forEach((function(e){c=e.data().kg_to_load+c,s=e.data().boxes_to_load+s;var n=e.data().times;if(n.arrive&&n.on_dock&&!n.exit){var d=ce(n.arrive,n.on_dock).split(":");r=parseInt(d[1])+r,parseInt(d[2])+o>=60?(r=1+r,o=Math.abs(parseInt(d[2])-o)):o=parseInt(d[2])+o}if(n.on_dock&&n.exit){var u=ce(n.on_dock,n.exit).split(":");i=parseInt(u[1])+i,parseInt(u[2])+l>=60?(i=1+i,l=Math.abs(parseInt(u[2])-l)):l=parseInt(u[2])+l}var j=0;switch(e.data().status){case"NOT_ARRIVE":j=1;break;case"ARRIVE":j=2;break;case"ON_DOCK":j=4;break;case"EXIT":j=6}a.push(j),t.push("".concat(e.data().name_client))})),r=Fe(o)+r,i=Fe(l)+i,a.length>0&&n({labels:t,data:a,sumKg:c,sumBoxes:s,arriveMinutes:r,arriveSeconds:o,onDockMinutes:i,onDockSeconds:l})}))}()}),[]);var y={labels:["Cadenas","Exportaci\xf3n","Industrial"],datasets:[{label:"Canales",data:[i,O,j],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},C={labels:s.labels,datasets:[{label:"Ubicaci\xf3n veh\xedculo: 1 (pendiente), 2 (entrada), 4 (en muelle), 6 (salida)",data:s.data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},N={labels:["Entrada (".concat(s.arriveMinutes,":").concat(s.arriveSeconds,"):"),"En muelle (".concat(s.onDockMinutes,":").concat(s.onDockSeconds,")")],datasets:[{label:"Tiempos en almac\xe9n (minutos)",data:[s.arriveMinutes,s.onDockMinutes],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},S={labels:["KG movilizados","CJ cargadas"],datasets:[{label:"Productividad",data:[s.sumKg,s.sumBoxes],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},w={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},E={scales:{x:{max:7,min:0},xAxes:[{ticks:{beginAtZero:!0}}]}};return Object(z.jsxs)("div",{className:"products-statistics-container",children:[Object(z.jsx)("h2",{children:"Estad\xedsticas de transportes"}),Object(z.jsxs)(R.a,{className:"products-statistics-content",children:[Object(z.jsxs)(F.a,{xs:12,children:[Object(z.jsx)("h2",{children:"Canales"}),Object(z.jsx)(qe.a,{data:y,options:w})]}),Object(z.jsxs)(F.a,{xs:12,children:[Object(z.jsx)("h2",{children:"Ubicaci\xf3n veh\xedculos"}),Object(z.jsx)(qe.b,{data:C,options:E})]}),Object(z.jsxs)(F.a,{xs:12,children:[Object(z.jsx)("h2",{children:"Productividad"}),Object(z.jsx)(qe.b,{data:S,options:E})]}),Object(z.jsxs)(F.a,{xs:12,children:[Object(z.jsx)("h2",{children:"Tiempos en almac\xe9n (minutos)"}),Object(z.jsx)(qe.d,{data:N,options:w})]})]})]})}}],He=[],Ue=function(){return Object(z.jsxs)(A.d,{children:[He.map((function(e){return Object(z.jsx)(A.b,{path:e.path,strict:e.strict,exact:e.exact,component:e.component},e.path)})),De.map((function(e){return Object(z.jsx)(A.b,{path:e.path,strict:e.strict,exact:e.exact,component:e.component},e.path)})),Object(z.jsx)(A.a,{to:"/"})]})},Le=a(90),Be=a(160),Ke=(a(569),a(109)),Ve=function(e){e.auth,e.push,e.logOut;var t=Object(z.jsx)(Le.a,{children:Object(z.jsx)(Le.a.Item,{children:Object(z.jsx)("a",{rel:"noopener noreferrer",onClick:function(){localStorage.clear(),window.location="/"},children:"Cerrar sesi\xf3n"})})});return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("img",{className:"logo",src:K,alt:"logo casa-luker"}),Object(z.jsx)(Be.a,{overlay:t,children:Object(z.jsxs)("div",{className:"profile-content",children:[Object(z.jsx)("img",{className:"profile-img",src:"https://picsum.photos/50/50",alt:"profile"}),Object(z.jsxs)("div",{className:"username-container",children:[Object(z.jsx)("p",{children:"Milton Casta\xf1o"}),Object(z.jsx)("span",{children:"Jefe de Cedi"})]}),Object(z.jsx)(Ke.a,{})]})})]})},ze=a(587),Xe=a(588),Je=(a(570),Le.a.SubMenu),We=function(e){var t=e.push;return Object(z.jsxs)(Le.a,{onClick:function(e){t("/".concat(e.key))},style:{width:256},defaultOpenKeys:["sub1","sub2"],mode:"inline",children:[Object(z.jsxs)(Je,{icon:Object(z.jsx)(ze.a,{}),title:"Productos",children:[Object(z.jsx)(Le.a.Item,{children:"Lista de productos"},"products"),Object(z.jsx)(Le.a.Item,{children:"Agregar un producto"},"products/new"),Object(z.jsx)(Le.a.Item,{children:"Estad\xedsticas"},"products/statistics")]},"sub1"),Object(z.jsxs)(Je,{icon:Object(z.jsx)(Xe.a,{}),title:"Transporte",children:[Object(z.jsx)(Le.a.Item,{children:"Lista de veh\xedculos"},"transports"),Object(z.jsx)(Le.a.Item,{children:"Agregar un veh\xedculo"},"transports/new"),Object(z.jsx)(Le.a.Item,{children:"Estad\xedsticas"},"transports/statistics")]},"sub2")]})};var Ge=Object(A.f)(Object(r.c)((function(e){return{auth:e.auth}}),{push:O.d,sessionsDestroy:function(){return function(e){localStorage.removeItem("user"),e(Object(O.d)(x)),e({type:f,payload:{admin:!1,logged:!1}})}}})((function(e){var t=e.auth,a=e.push,s=e.sessionsDestroy,n=Object(c.useState)(!1),r=Object(T.a)(n,2),o=r[0],i=r[1];M.a.locale("es"),Object(c.useEffect)((function(){localStorage.getItem("user")&&i(!0)}),[localStorage.getItem("user")]);return Object(z.jsxs)(P.a,{children:[o&&Object(z.jsx)(P.a.Header,{className:"nav",children:Object(z.jsx)(Ve,{logOut:s,auth:t,push:a})}),Object(z.jsxs)(P.a,{children:[o&&Object(z.jsx)(P.a.Sider,{children:Object(z.jsx)(We,{logOut:s,auth:t,push:a})}),Object(z.jsx)(P.a.Content,{children:Object(z.jsx)("div",{className:"layout-content",children:Object(z.jsx)(Ue,{})})})]})]})}))),Qe=function(){return Object(z.jsx)(u.a,{history:_,children:Object(z.jsx)(A.c,{history:_,children:Object(z.jsx)(Ge,{})})})},Ze=function(){var e,t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d;return Object(i.e)((e=_,Object(i.c)({router:Object(u.b)(e),auth:w,form:d.a})),t(Object(i.a)(l.a,Object(o.a)(_))))}(),Ye=function(){return Object(z.jsx)(r.a,{store:Ze,children:Object(z.jsx)(Qe,{})})},$e=function(){return Object(z.jsx)(Ye,{})},et=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,589)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};a(571);n.a.render(Object(z.jsx)($e,{}),document.getElementById("root")),et()}},[[572,1,2]]]);
//# sourceMappingURL=main.bfc59328.chunk.js.map