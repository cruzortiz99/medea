(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[8],{138:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var n=a(596),c=a(573),i=a(597);function s(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")}function r(){var e="#";return Object(n.a)(0,6).pipe(Object(c.a)((function(){return"0123456789abcdef".split("")[Math.round(16*Math.random())]})),Object(i.a)((function(e,t){return"".concat(e).concat(t)}),e)).subscribe((function(t){e=t})),e}},167:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(593),c={rightMenuOptions:new n.a([]),isLoading:new n.a(!1)};t.a=c},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(16),c=a(0);function i(e){var t=Object(c.useState)(),a=Object(n.a)(t,2),i=a[0],s=a[1],r=Object(c.useRef)(e);return Object(c.useEffect)((function(){var e=r.current.subscribe(s);return function(){return e.unsubscribe()}}),[r.current]),[i,r.current]}},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(16),c=a(200),i=a(0),s=function e(t,a){Object(c.a)(this,e),this.width=0,this.height=0,this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.width=t,this.height=a,this.xs=t<=640,this.sm=t<=960&&t>640,this.md=t<=1280&&t>960,this.lg=t<=1920&&t>960,this.xl=t>1920};function r(){var e=Object(i.useState)(new s(0,0)),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(i.useEffect)((function(){c(new s(window.screen.width,window.screen.height))}),[window.screen.width,window.screen.height]),a}},435:function(e,t,a){e.exports={appPage:"AppMainTemplate_appPage__yGWfi",sidebar:"AppMainTemplate_sidebar__2q9ES",open:"AppMainTemplate_open__3HOAC",header:"AppMainTemplate_header__1ayc8",left:"AppMainTemplate_left__3PsLU",body:"AppMainTemplate_body__3ejIr",right:"AppMainTemplate_right__3YGpZ",footer:"AppMainTemplate_footer__2V77a",close:"AppMainTemplate_close__3tWk1",sidebarButton:"AppMainTemplate_sidebarButton__2nwKI",fixed:"AppMainTemplate_fixed__mbSCQ",content:"AppMainTemplate_content__PensM",version:"AppMainTemplate_version__1YP5_"}},592:function(e,t,a){"use strict";a.r(t);var n=a(17),c=a(0),i=a(1),s=a(16),r=a(567),b=a(55),o=a(574),l=a(594),j=a(575),h=a(590),u=a(231),d=a(595),p=a(8),O=a(167),f=a(138);var x=a(169),_=a(170),m=a(56),g=a(435),A=a.n(g),T=a(3);var v=function(e){var t=Object(_.a)(),a=Object(c.useState)(t.lg||t.xl),n=Object(s.a)(a,2),g=n[0],v=n[1],w=Object(c.useState)(t.lg||t.xl),E=Object(s.a)(w,2),M=E[0],N=E[1],S=[{label:"Avisos y Fallas",href:p.a.ALERTS_FAILURES,icon:Object(T.jsx)(r.a,{})},{label:"Ordenes",href:p.a.ORDERS,icon:Object(T.jsx)(r.a,{})},{label:"Costos",href:p.a.BUDGET,icon:Object(T.jsx)(r.a,{})},{label:"Historial de Equipos",href:p.a.EQUIPMENT_HISTORY,icon:Object(T.jsx)(r.a,{})},{label:"Mantenimiento Preventivo",href:p.a.PREVENTIVE_MAINTENANCE,icon:Object(T.jsx)(r.a,{})},{label:"Actualizar datos",href:p.a.UPDATE_DATA,icon:Object(T.jsx)(r.a,{})},{label:"Documentaci\xf3n",href:p.a.DOCUMENTATION,icon:Object(T.jsx)(r.a,{})},{label:"Acerca de",href:p.a.ABOUT,icon:Object(T.jsx)(r.a,{})}],y=Object(x.a)(O.b.rightMenuOptions.asObservable()),I=Object(s.a)(y,1)[0],R=Object(i.f)().pathname,P=Object(x.a)(O.b.isLoading.asObservable()),U=Object(s.a)(P,1)[0];return Object(T.jsxs)(T.Fragment,{children:[U&&Object(T.jsx)(m.a,{}),Object(T.jsxs)(o.a,{className:Object(f.a)(A.a.appPage),children:[Object(T.jsx)(l.a,{collapsible:!0,width:g?270:76,children:Object(T.jsxs)(j.a,{className:Object(f.a)(A.a.sidebar,g?A.a.open:A.a.close),children:[Object(T.jsx)(j.a.Header,{children:Object(T.jsx)(h.a,{className:Object(f.a)(A.a.sidebar,A.a.header),children:Object(T.jsx)(h.a.Item,{as:b.b,to:p.a.ALERTS_FAILURES,icon:Object(T.jsx)(r.a,{style:{fontSize:"25px",height:"25px"}}),style:{paddingTop:"0.25rem",height:"100%"},children:g&&Object(T.jsxs)("h3",{children:["MEDEA",Object(T.jsx)("span",{className:A.a.version,children:"0.2.0"})]})})})}),Object(T.jsx)(j.a,{children:Object(T.jsx)(j.a.Body,{children:Object(T.jsx)(h.a,{className:Object(f.a)(A.a.sidebar,A.a.left,A.a.body),children:S.map((function(e,t){return Object(T.jsx)(h.a.Item,{as:b.b,active:R===e.href,to:e.href,href:e.href,icon:e.icon,style:{height:"40px",paddingTop:"12px"},children:g&&e.label},t)}))})})}),Object(T.jsx)(o.a,{className:Object(f.a)(A.a.sidebar,A.a.footer),children:Object(T.jsx)(u.a,{onClick:function(){return v((function(e){return!e}))},children:g?"Close":"Open"})})]})}),Object(T.jsx)(o.a,{className:A.a.content,children:Object(T.jsx)(d.a,{children:e.children})}),I&&0===I.length?void 0:Object(T.jsx)(l.a,{className:Object(f.a)(A.a.right,t.md||t.sm||t.xs?A.a.fixed:""),collapsible:!0,width:M?270:0,children:Object(T.jsx)(j.a,{className:Object(f.a)(A.a.sidebar,A.a.right,M?A.a.open:A.a.close),children:Object(T.jsxs)(h.a,{appearance:"subtle",className:Object(f.a)(A.a.sidebar,A.a.right,A.a.body),children:[Object(T.jsx)(u.a,{className:Object(f.a)(A.a.right,A.a.sidebarButton),onClick:function(){return N((function(e){return!e}))},children:Object(T.jsx)(r.b,{})}),null===I||void 0===I?void 0:I.map((function(e,t){return Object(T.jsx)(h.a.Item,{href:e.href,style:{height:"40px",paddingTop:"12px"},children:M&&e.label},t)}))]})})})]})]})};t.default=function(e){var t,a=Object(i.g)();return Object(c.useEffect)((function(){a(p.a.ALERTS_FAILURES)}),[]),Object(T.jsx)(v,{children:Object(T.jsxs)(i.d,{children:[null===(t=e.routes)||void 0===t?void 0:t.map((function(e,t){return Object(T.jsx)(i.b,{path:e.path,element:Object(T.jsx)(e.component,Object(n.a)({},e))},t)})),Object(T.jsx)(i.b,{path:"/*",element:Object(T.jsx)(i.a,{to:p.a.NOT_FOUND})})]})})}}}]);
//# sourceMappingURL=8.1e3868b6.chunk.js.map