"use strict";(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[356],{4356:function(e,t,n){n.r(t),n.d(t,{News:function(){return C}});var r=n(1413),a=n(5861),o=n(9439),i=n(4687),s=n.n(i),u=n(2791),c=n(4087),l=n(5946),p=n(9229),d=n(9115),m=n(9483),f=n(9683),h=n(3466),x=n(184),g=function(e){var t=e.news;return(0,x.jsx)(f.M,{justifyItems:"center",maxW:{md:"704px",lg:"940px",xl:"1240px"},mt:"60px",columns:{base:1,md:2,xl:3},spacing:{base:"12",md:"60px"},p:2,ml:"auto",mr:"auto",children:t.map((function(e){var t=e._id,n=e.title,r=e.description,a=e.date,o=e.url;return(0,x.jsxs)(c.xu,{position:"relative",maxWidth:{base:"330px",lg:"394px"},p:2,transitionProperty:"box-shadow",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",_before:{content:'" "',position:"absolute",top:"-1",left:"0",w:"85%",h:"1",bg:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",borderRadius:"10"},_hover:{shadow:"md"},children:[(0,x.jsx)(l.X,{noOfLines:2,as:"h3",length:60,fontSize:"2xl",lineHeight:"short",letterSpacing:"-0.01em",children:n}),(0,x.jsx)(p.x,{noOfLines:5,mt:"4",fontSize:"md",lineHeight:"short",overflow:"hidden",color:"#111321",children:r}),(0,x.jsxs)(c.xu,{display:"flex",justifyContent:"space-between",alignItems:"center",mt:{base:"5",lg:"10"},children:[(0,x.jsx)(p.x,{fontSize:"md",color:"rgba(17, 17, 17, 0.6)",lineHeight:"short",children:null===a||void 0===a?void 0:a.split("-").reverse().join("/")}),(0,x.jsx)(h.r,{position:"relative",fontSize:"md",lineHeight:"short",color:"#F59256",bgColor:"transparent",as:"a",href:o,target:"_blank",rel:"noreferrer",children:"Read more"})]})]},t)}))})},w=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://goit-project-petly-backend.onrender.com/api","/news"));case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=n(3923),j=function(e){var t=e.searchFunction,n=(0,u.useState)(""),r=(0,o.Z)(n,2),a=r[0],i=r[1];return(0,x.jsx)(v.HS,{type:"text",value:a,onChange:function(e){i(e.target.value),t(e.target.value)},handleClear:function(){i(""),t("")},maxWidth:{base:"280px",md:"608px"}})},b=n(854),C=function(){var e=(0,u.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1],f=(0,u.useState)(!1),h=(0,o.Z)(f,2),v=h[0],C=h[1];(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,w();case 4:t=e.sent,y(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),C(!1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var F=function(){var e=(0,a.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toLowerCase(),e.next=3,w();case 3:r=e.sent,a=r.filter((function(e){return e.title.toLowerCase().includes(n)||e.description.toLowerCase().includes(n)})),y(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){var t=e.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{dateForSort:Date.parse(new Date(e.date))})})),n=t.sort((function(e,t){return t.dateForSort-e.dateForSort}));i(n),C(!1)};return(0,x.jsx)(c.xu,{bgColor:"#FDF7F2",h:"100vh",children:(0,x.jsx)(d.Z,{children:(0,x.jsxs)(m.Z,{children:[(0,x.jsx)(l.X,{as:"h2",size:"3xl",fontSize:{base:"2xl",md:"5xl"},textAlign:"center",mb:{base:"7",lg:"10"},children:"News"}),v?(0,x.jsx)(b.Z,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j,{searchFunction:F}),(0,x.jsx)(g,{news:n})]}),0===n.length&&!v&&(0,x.jsx)(p.x,{textAlign:"center",children:"There are not news according to your request. Please try again."})]})})})}},5946:function(e,t,n){n.d(t,{X:function(){return d}});var r=n(1413),a=n(5987),o=n(7872),i=n(9084),s=n(9477),u=n(2952),c=n(6992),l=n(184),p=["className"],d=(0,o.G)((function(e,t){var n=(0,i.mq)("Heading",e),o=(0,s.Lr)(e),d=(o.className,(0,a.Z)(o,p));return(0,l.jsx)(u.m.h2,(0,r.Z)((0,r.Z)({ref:t,className:(0,c.cx)("chakra-heading",e.className)},d),{},{__css:n}))}));d.displayName="Heading"},9683:function(e,t,n){n.d(t,{M:function(){return f}});var r=n(1413),a=n(5987),o=n(7872),i=n(2952),s=n(184),u=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],c=(0,o.G)((function(e,t){var n=e.templateAreas,o=e.gap,c=e.rowGap,l=e.columnGap,p=e.column,d=e.row,m=e.autoFlow,f=e.autoRows,h=e.templateRows,x=e.autoColumns,g=e.templateColumns,w=(0,a.Z)(e,u),v={display:"grid",gridTemplateAreas:n,gridGap:o,gridRowGap:c,gridColumnGap:l,gridAutoColumns:x,gridColumn:p,gridRow:d,gridAutoFlow:m,gridAutoRows:f,gridTemplateRows:h,gridTemplateColumns:g};return(0,s.jsx)(i.m.div,(0,r.Z)({ref:t,__css:v},w))}));c.displayName="Grid";var l=n(5310),p=n(3142),d=n(2625),m=["columns","spacingX","spacingY","spacing","minChildWidth"],f=(0,o.G)((function(e,t){var n,o=e.columns,i=e.spacingX,u=e.spacingY,f=e.spacing,h=e.minChildWidth,x=(0,a.Z)(e,m),g=(0,l.F)(),w=h?function(e,t){return(0,d.XQ)(e,(function(e){var n,r=(0,p.LP)("sizes",e,"number"===typeof(n=e)?"".concat(n,"px"):n)(t);return null===e?null:"repeat(auto-fit, minmax(".concat(r,", 1fr))")}))}(h,g):(n=o,(0,d.XQ)(n,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")})));return(0,s.jsx)(c,(0,r.Z)({ref:t,gap:f,columnGap:i,rowGap:u,templateColumns:w},x))}));f.displayName="SimpleGrid"}}]);
//# sourceMappingURL=356.367939e7.chunk.js.map