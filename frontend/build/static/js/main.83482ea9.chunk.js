(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{59:function(e){e.exports=JSON.parse('{"a":{"dev":"://localhost:8000","prod":"://chatbasico06.herokuapp.com"}}')},78:function(e,t,a){e.exports=a(88)},88:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),c=a(18),i=a(42),u=a(11),s=a(23),m=function(e){return console.log("mensajes => ",e),function(t){t({type:"MENSAJES_ADD",value:e})}},f=function(e){return function(t){t({type:"USER_ADD",value:e})}},p=a(59),d="https:"===window.location.protocol?"wss":"ws";console.log("entorno front ","production");var g="".concat(d).concat(p.a.prod);console.log("ip ",g);var E,b,v=a(114),h=a(121),j=a(122),S=a(123),w=a(41),O=a(119),x=a(126),y=a(127),N=a(128),k=a(124),C=a(125),D=a(129),A=a(138),W=a(120),G=Object(v.a)((function(e){return{form:{display:"flex"},input:{flexGrow:1,alignSelf:"strech"}}})),I=function(e){var t=e.event,a=void 0===t?function(e){return e}:t,r=Object(n.useState)(""),l=Object(s.a)(r,2),c=l[0],i=l[1],u=function(e){e.preventDefault(),a(c),i("")},m=G();return o.a.createElement("form",{onSubmit:u,className:m.form},o.a.createElement(A.a,{className:m.input,value:c,onChange:function(e){return i(e.target.value)},label:"Nueva sala",size:"small",variant:"outlined"}),o.a.createElement(W.a,{onClick:u,disabled:!c,variant:"text",color:"secondary"},"crear"))},J=Object(v.a)((function(e){return{root:{flexGrow:1,top:0,bottom:0,left:0,right:0,position:"absolute"},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:78,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,alignSelf:"flex-end"},lista:{border:" 1px solid #eee",height:"calc(100% - 250px)",marginTop:15,overflow:"auto"}}})),_=function(){var e=Object(c.c)((function(e){return e})).usuario,t=void 0===e?null:e,a=Object(c.b)(),r=Object(n.useState)([]),l=Object(s.a)(r,2),i=l[0],m=l[1],p=Object(u.g)(),d=J();Object(n.useEffect)((function(){return b()}),[]);var b=function(){return v(),function(){E.close()}},v=function(){(E=new WebSocket("".concat(g,"/ws/salas/"))).onopen=function(){console.log("conectado...")},E.onmessage=function(e){var t=JSON.parse(e.data);console.log(t),m(t.salas)},E.onclose=function(){return console.log("cerrar conexion...")},E.onerror=function(e){return console.log("error...",e)}};return o.a.createElement("div",{className:d.root},o.a.createElement(h.a,{position:"sticky",color:"primary"},o.a.createElement(j.a,{className:d.toolbar},o.a.createElement(S.a,{edge:"start","aria-label":"open drawer",color:"inherit",onClick:function(){return p.push("/")}},o.a.createElement(k.a,{color:"inherit"})),o.a.createElement("div",{className:d.title},o.a.createElement(w.a,{component:"b",variant:"h5",noWrap:!0},"Bienvenido. "),o.a.createElement(w.a,{component:"h5",variant:"b",noWrap:!0},"App Chat. "),o.a.createElement(w.a,{component:"u",variant:"u",noWrap:!0}," hola : ",t)),o.a.createElement(S.a,{onClick:function(){a(f(null))},color:"inherit",edge:"end"},o.a.createElement(C.a,null)))),o.a.createElement("br",null),o.a.createElement("b",null,"Salas"),o.a.createElement("hr",null),o.a.createElement(I,{event:function(e){E.send(JSON.stringify({sala:e,usuario:t}))}}),o.a.createElement(O.a,{className:d.lista},i.map((function(e){return o.a.createElement(x.a,{key:e.pk,button:!0,onClick:function(){return p.push("/sala/".concat(e.pk))}},o.a.createElement(y.a,{primary:e.nombre,secondary:"".concat(e.creador," - ").concat(e.fecha)}),o.a.createElement(N.a,null,o.a.createElement(D.a,null)))}))))},B=a(140),R=Object(v.a)((function(e){return{root:{flexGrow:1,top:0,bottom:0,left:0,right:0,position:"absolute",justifyContent:"center",alignContent:"center",alignItems:"center",flexDirection:"column"},toolbar:{minHeight:78,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,alignSelf:"center"},form:{flexGrow:1,padding:10,maxWidth:380},input:{flexGrow:1,alignSelf:"strech"},boton:{marginLeft:5}}})),T=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(c.b)(),i=R(),u=function(e){l(f(a)),r(""),e.preventDefault()};return o.a.createElement("div",{className:i.root},o.a.createElement(h.a,{className:i.toolbar,position:"sticky",color:"primary"},o.a.createElement(B.a,null,o.a.createElement(w.a,{className:i.title,variant:"h5"},"App chat"))),o.a.createElement("div",{className:i.form},o.a.createElement("h4",null,"registro"),o.a.createElement("form",{onSubmit:u},o.a.createElement(A.a,{className:i.input,label:"Nombre ",value:a,onChange:function(e){return r(e.target.value)},variant:"outlined",size:"small"}),o.a.createElement(W.a,{className:i.boton,disabled:""===a,color:"primary",variant:"contained",onClick:u},"agregar"))))},H=a(65),M=a(131),U=a(135),z=a(136),L=a(130),q=a(132),F=a(133),P=a(134),V=a(137),$=Object(v.a)((function(e){return{root:{flexGrow:1,top:0,bottom:0,left:0,right:0,position:"absolute"},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:78,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,alignSelf:"flex-end"},lista:{height:"calc(100% - 220px)",width:"calc(100% - 5px)",marginTop:15,overflow:"auto"},form:{padding:5,flexGrow:1,alignSelf:"flex-end",width:"calc( 100% - 10px )"}}})),K=function(){var e=Object(c.c)((function(e){return e})),t=e.mensajes,a=void 0===t?[]:t,r=e.usuario,l=void 0===r?null:r,i=Object(c.b)(),f=Object(u.h)().id,p=Object(n.useState)(""),d=Object(s.a)(p,2),E=d[0],v=d[1],k=Object(n.useState)({}),C=Object(s.a)(k,2),W=C[0],G=C[1],I=Object(u.g)(),J=$();Object(n.useEffect)((function(){return _()}),[]);var _=function(){return console.log("sala ",f),B(),function(){b.close(),i(m([]))}},B=function(){(b=function(e){return new WebSocket("".concat(g,"/ws/sala/").concat(e,"/"))}(f)).onopen=function(){console.log("conectado...")},b.onmessage=function(e){var t=JSON.parse(e.data),a=t.sala,n=t.mensajes;console.log(n,a,n),G(a),i(m(Object(H.a)(n)));var o=document.querySelector(".msg-container");o.scrollTop=o.scrollHeight},b.onclose=function(){return console.log("cerrar conexion...")},b.onerror=function(e){return console.log("error...",e)}},R=function(e){b.send(JSON.stringify({sala:f,usuario:l,mensaje:E})),console.log("enviar",E),v(""),e.preventDefault()};return o.a.createElement("div",{className:J.root},o.a.createElement(h.a,{position:"sticky",color:"primary"},o.a.createElement(j.a,{className:J.toolbar},o.a.createElement(S.a,{edge:"start","aria-label":"open drawer",color:"inherit",onClick:function(){return I.push("/")}},o.a.createElement(L.a,{color:"inherit"})),o.a.createElement("div",{className:J.title},o.a.createElement(w.a,{component:"b",variant:"h5",noWrap:!0},"Sala : ",W.nombre),o.a.createElement(w.a,{component:"h5",variant:"b",noWrap:!0},"Creada: ",W.fecha),o.a.createElement(w.a,{component:"u",variant:"u",noWrap:!0}," por : ",W.creador)),o.a.createElement(S.a,{edge:"end"},o.a.createElement(M.a,{badgeContent:"2",color:"secondary"},o.a.createElement(q.a,null))))),o.a.createElement(O.a,{className:"msg-container "+J.lista},a.map((function(e){return o.a.createElement(n.Fragment,{key:e.pk},o.a.createElement(x.a,{style:{background:l===e.usuario?"#eeeeee":"white"}},o.a.createElement(y.a,{primary:e.text,secondary:"".concat(e.usuario," - ").concat(e.date," ")}),o.a.createElement(N.a,null,l===e.usuario?o.a.createElement(F.a,null):o.a.createElement(P.a,null))),o.a.createElement(U.a,null))}))),o.a.createElement("form",{onSubmit:R},o.a.createElement("br",null),o.a.createElement(A.a,{color:"primary",InputProps:{startAdornment:o.a.createElement(z.a,{position:"start"},o.a.createElement(V.a,{htmlColor:"#00000080"})),endAdornment:o.a.createElement(z.a,{position:"end"},o.a.createElement(S.a,{onClick:R},o.a.createElement(D.a,{color:"primary"})))},className:J.form,placeholder:"mensaje..",variant:"outlined",value:E,onChange:function(e){return v(e.target.value)}})))},Q=function(){var e=Object(c.c)((function(e){return e})).usuario,t=void 0===e?null:e;Object(n.useEffect)((function(){return a()}));var a=function(){console.log("rutas",t)};return o.a.createElement(i.a,null,null!==t?o.a.createElement(u.d,null,o.a.createElement(u.b,{path:"/",component:_,exact:!0}),o.a.createElement(u.b,{path:"/sala/:id",component:K,exact:!0}),o.a.createElement(u.b,{path:"",component:function(){return o.a.createElement(u.a,{to:"/"})}})):o.a.createElement(u.d,null,o.a.createElement(u.b,{path:"/registro",component:T,exact:!0}),o.a.createElement(u.b,{path:"",component:function(){return o.a.createElement(u.a,{to:"/registro"})}})))};var X=function(){return o.a.createElement(Q,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(33),Z=a(64),ee=[],te=[],ae=Object(Y.c)({mensajes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENSAJES_ADD":return t.value;default:return e}},salas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SALAS_ADD":return t.value;default:return e}},usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_ADD":return localStorage.setItem("chat_user",t.value),t.value;case"USER_REMOVE":return localStorage.removeItem("chat_user"),t.value;default:var a=localStorage.getItem("chat_user");console.log(a);var n="null"!==a?a:null;return e||n}}}),ne=Object(Y.d)(ae,{mensajes:ee,salas:te,usuario:null},Object(Y.a)(Z.a));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{store:ne},o.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.83482ea9.chunk.js.map