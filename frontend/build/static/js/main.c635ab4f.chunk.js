(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e){e.exports=JSON.parse('{"a":{"dev":"://localhost:8000","prod":"://chatbasico06.herokuapp.com"}}')},70:function(e,t,n){e.exports=n(80)},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=n(15),u=n(35),i=n(11),s=n(44),m=n(18),f=function(e){return console.log("mensajes => ",e),function(t){t({type:"MENSAJES_ADD",value:e})}},v=function(e){return function(t){t({type:"USER_ADD",value:e})}},E=n(56),d="https:"===window.location.protocol?"wss":"ws";console.log("entorno front ","production");var p="".concat(d).concat(E.a.prod);console.log("ip ",p);var b,g,h,j=n(111),O=n(109),S=n(113),y=n(114),w=n(115),k=n(122),x=n(110),D=n(112),N=n(116),J=function(e){var t=e.event,n=void 0===t?function(e){return e}:t,r=Object(a.useState)(""),c=Object(m.a)(r,2),l=c[0],u=c[1],i=function(e){e.preventDefault(),n(l),u("")};return o.a.createElement("form",{onSubmit:i},o.a.createElement(k.a,{value:l,onChange:function(e){return u(e.target.value)},label:"Nueva sala",size:"small",variant:"outlined"}),o.a.createElement(x.a,{onClick:i,disabled:!l},"crear"))},A=function(){var e=Object(l.c)((function(e){return e})),t=e.mensajes,n=void 0===t?[]:t,r=e.usuario,c=void 0===r?null:r,u=Object(l.b)(),E=Object(a.useState)(""),d=Object(m.a)(E,2),h=d[0],A=d[1],C=Object(a.useState)([]),_=Object(m.a)(C,2),W=_[0],I=_[1],M=Object(i.g)();Object(a.useEffect)((function(){return R()}),[]);var R=function(){return z(),U(),function(){b.close(),g.close()}},z=function(){var e,t;e="home",t=c,(b=new WebSocket("".concat(p,"/ws/chat/").concat(e,"/").concat(t,"/"))).onopen=function(){console.log("conectado...")},b.onmessage=function(e){var t=JSON.parse(e.data);console.log(n,t),u(f(Object(s.a)(t.mensajes))),A("")},b.onclose=function(){return console.log("cerrar conexion...")},b.onerror=function(e){return console.log("error...",e)}},U=function(){(g=new WebSocket("".concat(p,"/ws/salas/"))).onopen=function(){console.log("conectado...")},g.onmessage=function(e){var t=JSON.parse(e.data);console.log(t),I(t.salas)},g.onclose=function(){return console.log("cerrar conexion...")},g.onerror=function(e){return console.log("error...",e)}};return o.a.createElement("div",null,o.a.createElement(j.a,{onClick:function(){u(v(null))}},o.a.createElement(D.a,null)),o.a.createElement("div",null,o.a.createElement("b",null,"Salas"),o.a.createElement("hr",null),o.a.createElement(J,{event:function(e){g.send(JSON.stringify({sala:e,usuario:c}))}}),o.a.createElement(O.a,null,W.map((function(e){return o.a.createElement(S.a,{key:e.pk,button:!0,onClick:function(){return M.push("/sala/".concat(e.pk))}},o.a.createElement(y.a,{primary:e.nombre,secondary:"".concat(e.creador," - ").concat(e.fecha)}),o.a.createElement(w.a,null,o.a.createElement(N.a,null)))})))),o.a.createElement("h3",null,"Home"),o.a.createElement("h4",null,c),o.a.createElement("form",{onSubmit:function(e){b.send(JSON.stringify({message:h,user:c})),e.preventDefault()}},o.a.createElement(k.a,{value:h,onChange:function(e){return A(e.target.value)},variant:"outlined",size:"small",focused:!0}),o.a.createElement(x.a,{type:"submit",variant:"text",disabled:!h,color:"secondary",endIcon:o.a.createElement(N.a,null)},"enviar")),o.a.createElement("hr",null),n.map((function(e,t){return o.a.createElement("section",{key:e.usuario+"_"+t},o.a.createElement("b",null,e.usuario),o.a.createElement("p",null,e.message))})))},C=n(117),_=Object(C.a)((function(e){return{container:{display:"flex",justifyContent:"center"},form:{width:300,height:350}}})),W=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(l.b)(),u=_(),i=function(e){c(v(n)),r(""),e.preventDefault()};return o.a.createElement("div",{className:u.container},o.a.createElement("div",{className:u.form},o.a.createElement("h4",null,"registro"),o.a.createElement("form",{onSubmit:i},o.a.createElement(k.a,{label:"Nombre ",value:n,onChange:function(e){return r(e.target.value)},variant:"outlined",fullWidth:!0}),o.a.createElement(x.a,{fullWidth:!0,disabled:""===n,color:"primary",variant:"contained",onClick:i},"agregar"))))},I=n(120),M=n(121),R=n(118),z=n(119),U=function(){var e=Object(l.c)((function(e){return e})),t=e.mensajes,n=void 0===t?[]:t,r=e.usuario,c=void 0===r?null:r,v=Object(l.b)(),E=Object(i.h)().id,d=Object(a.useState)(""),b=Object(m.a)(d,2),g=b[0],j=b[1],D=Object(a.useState)({}),J=Object(m.a)(D,2),A=J[0],C=J[1];Object(a.useEffect)((function(){return _()}),[]);var _=function(){return console.log("sala ",E),W(),function(){h.close(),v(f([]))}},W=function(){(h=function(e){return new WebSocket("".concat(p,"/ws/sala/").concat(e,"/"))}(E)).onopen=function(){console.log("conectado...")},h.onmessage=function(e){var t=JSON.parse(e.data),n=t.sala,a=t.mensajes;console.log(a,n,a),C(n),v(f(Object(s.a)(a)))},h.onclose=function(){return console.log("cerrar conexion...")},h.onerror=function(e){return console.log("error...",e)}};return o.a.createElement("div",{style:{height:"90%",width:"calc(100% - 40px)",position:"absolute"}},o.a.createElement(u.b,{to:"/"},o.a.createElement(x.a,{variant:"text",color:"primary",startIcon:o.a.createElement(R.a,null)},"salir ",c)),o.a.createElement("h3",null,"sala : ",A.nombre),o.a.createElement("b",null,"Creada: ",A.fecha+" por :"+A.creador),o.a.createElement("hr",null),o.a.createElement(O.a,{style:{height:"calc(100% - 200px)",width:"calc(100% - 5px)",marginTop:20,overflow:"auto"}},n.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{key:e.pk},o.a.createElement(y.a,{primary:e.text,secondary:"".concat(e.usuario," - ").concat(e.date," ")})),o.a.createElement(w.a,null,c===e.usuario&&o.a.createElement(z.a,null)),o.a.createElement(I.a,null))}))),o.a.createElement("hr",null),o.a.createElement("form",{onSubmit:function(e){h.send(JSON.stringify({sala:E,usuario:c,mensaje:g})),console.log("enviar",g),j(""),e.preventDefault()}},o.a.createElement("br",null),o.a.createElement(k.a,{fullWidth:!0,color:"primary",InputProps:{startAdornment:o.a.createElement(M.a,{position:"start"},o.a.createElement(N.a,{color:"primary"}))},label:"nuevo mensaje",size:"small",variant:"outlined",value:g,onChange:function(e){return j(e.target.value)}})))},B=function(){var e=Object(l.c)((function(e){return e})).usuario,t=void 0===e?null:e;Object(a.useEffect)((function(){return n()}));var n=function(){console.log("rutas",t)};return o.a.createElement(u.a,null,null!==t?o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/",component:A,exact:!0}),o.a.createElement(i.b,{path:"/sala/:id",component:U,exact:!0}),o.a.createElement(i.b,{path:"",component:function(){return o.a.createElement(i.a,{to:"/"})}})):o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/registro",component:W,exact:!0}),o.a.createElement(i.b,{path:"",component:function(){return o.a.createElement(i.a,{to:"/registro"})}})))};var F=function(){return o.a.createElement(B,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(31),L=n(60),P=[],T=[],V=Object(H.c)({mensajes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENSAJES_ADD":return t.value;default:return e}},salas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SALAS_ADD":return t.value;default:return e}},usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_ADD":return localStorage.setItem("chat_user",t.value),t.value;case"USER_REMOVE":return localStorage.removeItem("chat_user"),t.value;default:var n=localStorage.getItem("chat_user");console.log(n);var a="null"!==n?n:null;return e||a}}}),$=Object(H.d)(V,{mensajes:P,salas:T,usuario:null},Object(H.a)(L.a));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:$},o.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.c635ab4f.chunk.js.map