(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e){e.exports=JSON.parse('{"a":{"dev":"ws://localhost:8000","prod":"wss://chatbasico06.herokuapp.com"}}')},70:function(e,t,n){e.exports=n(80)},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=n(15),u=n(35),i=n(11),s=n(44),m=n(18),f=function(e){return console.log("mensajes => ",e),function(t){t({type:"MENSAJES_ADD",value:e})}},v=function(e){return function(t){t({type:"USER_ADD",value:e})}},E=n(56);console.log("entorno front ","production");var d,b,p,g=E.a.dev,h=n(111),j=n(109),O=n(113),S=n(114),y=n(115),w=n(122),k=n(110),x=n(112),D=n(116),N=function(e){var t=e.event,n=void 0===t?function(e){return e}:t,o=Object(a.useState)(""),c=Object(m.a)(o,2),l=c[0],u=c[1],i=function(e){e.preventDefault(),n(l),u("")};return r.a.createElement("form",{onSubmit:i},r.a.createElement(w.a,{value:l,onChange:function(e){return u(e.target.value)},label:"Nueva sala",size:"small",variant:"outlined"}),r.a.createElement(k.a,{onClick:i,disabled:!l},"crear"))},J=function(){var e=Object(l.c)((function(e){return e})),t=e.mensajes,n=void 0===t?[]:t,o=e.usuario,c=void 0===o?null:o,u=Object(l.b)(),E=Object(a.useState)(""),p=Object(m.a)(E,2),J=p[0],A=p[1],C=Object(a.useState)([]),_=Object(m.a)(C,2),W=_[0],I=_[1],M=Object(i.g)();Object(a.useEffect)((function(){return R()}),[]);var R=function(){return z(),U(),function(){d.close(),b.close()}},z=function(){var e,t;e="home",t=c,(d=new WebSocket("".concat(g,"/ws/chat/").concat(e,"/").concat(t,"/"))).onopen=function(){console.log("conectado...")},d.onmessage=function(e){var t=JSON.parse(e.data);console.log(n,t),u(f(Object(s.a)(t.mensajes))),A("")},d.onclose=function(){return console.log("cerrar conexion...")},d.onerror=function(e){return console.log("error...",e)}},U=function(){(b=new WebSocket("".concat(g,"/ws/salas/"))).onopen=function(){console.log("conectado...")},b.onmessage=function(e){var t=JSON.parse(e.data);console.log(t),I(t.salas)},b.onclose=function(){return console.log("cerrar conexion...")},b.onerror=function(e){return console.log("error...",e)}};return r.a.createElement("div",null,r.a.createElement(h.a,{onClick:function(){u(v(null))}},r.a.createElement(x.a,null)),r.a.createElement("div",null,r.a.createElement("b",null,"Salas"),r.a.createElement("hr",null),r.a.createElement(N,{event:function(e){b.send(JSON.stringify({sala:e,usuario:c}))}}),r.a.createElement(j.a,null,W.map((function(e){return r.a.createElement(O.a,{key:e.pk,button:!0,onClick:function(){return M.push("/sala/".concat(e.pk))}},r.a.createElement(S.a,{primary:e.nombre,secondary:"".concat(e.creador," - ").concat(e.fecha)}),r.a.createElement(y.a,null,r.a.createElement(D.a,null)))})))),r.a.createElement("h3",null,"Home"),r.a.createElement("h4",null,c),r.a.createElement("form",{onSubmit:function(e){d.send(JSON.stringify({message:J,user:c})),e.preventDefault()}},r.a.createElement(w.a,{value:J,onChange:function(e){return A(e.target.value)},variant:"outlined",size:"small",focused:!0}),r.a.createElement(k.a,{type:"submit",variant:"text",disabled:!J,color:"secondary",endIcon:r.a.createElement(D.a,null)},"enviar")),r.a.createElement("hr",null),n.map((function(e,t){return r.a.createElement("section",{key:e.usuario+"_"+t},r.a.createElement("b",null,e.usuario),r.a.createElement("p",null,e.message))})))},A=n(117),C=Object(A.a)((function(e){return{container:{display:"flex",justifyContent:"center"},form:{width:300,height:350}}})),_=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(l.b)(),u=C(),i=function(e){c(v(n)),o(""),e.preventDefault()};return r.a.createElement("div",{className:u.container},r.a.createElement("div",{className:u.form},r.a.createElement("h4",null,"registro"),r.a.createElement("form",{onSubmit:i},r.a.createElement(w.a,{label:"Nombre ",value:n,onChange:function(e){return o(e.target.value)},variant:"outlined",fullWidth:!0}),r.a.createElement(k.a,{fullWidth:!0,disabled:""===n,color:"primary",variant:"contained",onClick:i},"agregar"))))},W=n(120),I=n(121),M=n(118),R=n(119),z=function(){var e=Object(l.c)((function(e){return e})),t=e.mensajes,n=void 0===t?[]:t,o=e.usuario,c=void 0===o?null:o,v=Object(l.b)(),E=Object(i.h)().id,d=Object(a.useState)(""),b=Object(m.a)(d,2),h=b[0],x=b[1],N=Object(a.useState)({}),J=Object(m.a)(N,2),A=J[0],C=J[1];Object(a.useEffect)((function(){return _()}),[]);var _=function(){return console.log("sala ",E),z(),function(){p.close(),v(f([]))}},z=function(){(p=function(e){return new WebSocket("".concat(g,"/ws/sala/").concat(e,"/"))}(E)).onopen=function(){console.log("conectado...")},p.onmessage=function(e){var t=JSON.parse(e.data),n=t.sala,a=t.mensajes;console.log(a,n,a),C(n),v(f(Object(s.a)(a)))},p.onclose=function(){return console.log("cerrar conexion...")},p.onerror=function(e){return console.log("error...",e)}};return r.a.createElement("div",{style:{height:"90%",width:"calc(100% - 40px)",position:"absolute"}},r.a.createElement(u.b,{to:"/"},r.a.createElement(k.a,{variant:"text",color:"primary",startIcon:r.a.createElement(M.a,null)},"salir ",c)),r.a.createElement("h3",null,"sala : ",A.nombre),r.a.createElement("b",null,"Creada: ",A.fecha+" por :"+A.creador),r.a.createElement("hr",null),r.a.createElement(j.a,{style:{height:"calc(100% - 200px)",width:"calc(100% - 5px)",marginTop:20,overflow:"auto"}},n.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{key:e.pk},r.a.createElement(S.a,{primary:e.text,secondary:"".concat(e.usuario," - ").concat(e.date," ")})),r.a.createElement(y.a,null,c===e.usuario&&r.a.createElement(R.a,null)),r.a.createElement(W.a,null))}))),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:function(e){p.send(JSON.stringify({sala:E,usuario:c,mensaje:h})),console.log("enviar",h),x(""),e.preventDefault()}},r.a.createElement("br",null),r.a.createElement(w.a,{fullWidth:!0,color:"primary",InputProps:{startAdornment:r.a.createElement(I.a,{position:"start"},r.a.createElement(D.a,{color:"primary"}))},label:"nuevo mensaje",size:"small",variant:"outlined",value:h,onChange:function(e){return x(e.target.value)}})))},U=function(){var e=Object(l.c)((function(e){return e})).usuario,t=void 0===e?null:e;Object(a.useEffect)((function(){return n()}));var n=function(){console.log("rutas",t)};return r.a.createElement(u.a,null,null!==t?r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",component:J,exact:!0}),r.a.createElement(i.b,{path:"/sala/:id",component:z,exact:!0}),r.a.createElement(i.b,{path:"",component:function(){return r.a.createElement(i.a,{to:"/"})}})):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/registro",component:_,exact:!0}),r.a.createElement(i.b,{path:"",component:function(){return r.a.createElement(i.a,{to:"/registro"})}})))};var B=function(){return r.a.createElement(U,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(31),H=n(60),L=[],P=[],T=Object(F.c)({mensajes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENSAJES_ADD":return t.value;default:return e}},salas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SALAS_ADD":return t.value;default:return e}},usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_ADD":return localStorage.setItem("chat_user",t.value),t.value;case"USER_REMOVE":return localStorage.removeItem("chat_user"),t.value;default:var n=localStorage.getItem("chat_user");console.log(n);var a="null"!==n?n:null;return e||a}}}),V=Object(F.d)(T,{mensajes:L,salas:P,usuario:null},Object(F.a)(H.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:V},r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.dd066a2f.chunk.js.map