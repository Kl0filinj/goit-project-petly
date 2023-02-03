"use strict";(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[318],{6318:function(e,n,t){t.r(n),t.d(n,{News:function(){return y}});var r=t(1413),a=t(5861),o=t(9439),i=t(4687),s=t.n(i),c=t(2791),u=t(4087),p=t(5946),l=t(9229),x=t(9115),d=t(9483),f=t(9683),m=t(3466),h=t(184),g=function(e){var n=e.news;return(0,h.jsx)(f.M,{justifyItems:"center",mt:["40px"],columns:[1,1,1,2,3],spacing:["48px","48px","48px","60px","60px"],p:2,children:n.map((function(e){var n=e._id,t=e.title,r=e.description,a=e.date,o=e.url;return(0,h.jsxs)(u.xu,{position:"relative",maxWidth:["330px",null,null,null,null,"394px"],p:2,_before:{content:'" "',position:"absolute",top:"-4px",left:"0",w:"85%",height:"4px",bg:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",borderRadius:"40px"},_hover:{shadow:"md"},children:[(0,h.jsx)(p.X,{noOfLines:2,as:"h3",length:60,fontSize:"24px",lineHeight:"1.375",letterSpacing:"-0.01em",children:t}),(0,h.jsx)(l.x,{noOfLines:8,mt:"16px",fontSize:"16px",lineHeight:"1.375",overflow:"hidden",color:"#111321",children:r}),(0,h.jsxs)(u.xu,{display:"flex",justifyContent:"space-between",alignItems:"center",mt:["20px","20px","20px","20px","40px"],children:[(0,h.jsx)(l.x,{fontSize:"16px",color:"rgba(17, 17, 17, 0.6)",lineHeight:"1.375",children:a}),(0,h.jsx)(m.r,{position:"relative",fontSize:"16px",lineHeight:"1.375",color:"#F59256",bgColor:"transparent",as:"a",href:o,target:"_blank",rel:"noreferrer",children:"Read more"})]})]},n)}))})},w=function(){var e=(0,a.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://goit-project-petly-backend.onrender.com/api","/news"));case 2:return n=e.sent,t=n.json(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=t(5904),j=function(e){var n=e.searchFunction,t=(0,c.useState)(""),r=(0,o.Z)(t,2),a=r[0],i=r[1];return(0,h.jsx)(v.HS,{type:"text",value:a,onChange:function(e){i(e.target.value),n(e.target.value)},handleClear:function(){i(""),n("")},maxWidth:["280px","280px","280px","608px","608px"]})},F=t(3204),C=function(){return(0,h.jsx)(u.xu,{textAlign:"center",children:(0,h.jsx)(F.$,{thickness:"4px",speed:"0.85s",emptyColor:"#F59256;",color:"#F5F5F5",textAlign:"center",size:"xl"})})},y=function(){var e=(0,c.useState)([]),n=(0,o.Z)(e,2),t=n[0],i=n[1],f=(0,c.useState)(!0),m=(0,o.Z)(f,2),v=m[0],F=m[1];(0,c.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w({});case 3:n=e.sent,Z(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var y=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.toLowerCase(),e.next=3,w({});case 3:r=e.sent,a=r.filter((function(e){return e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)})),Z(a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(e){var n=e.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{dateForSort:Date.parse(new Date(e.date))})})),t=n.sort((function(e,n){return n.dateForSort-e.dateForSort}));i(t),F(!1)};return(0,h.jsx)(u.xu,{bgColor:"#FDF7F2",children:(0,h.jsx)(x.Z,{children:(0,h.jsxs)(d.Z,{pt:["54px","54px","54px","94px","60px"],children:[(0,h.jsx)(p.X,{as:"h2",size:"3xl",fontSize:["24px","24px","24px","48px"],textAlign:"center",mb:["28px","28px","28px","40px"],children:"News"}),v?(0,h.jsx)(C,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j,{searchFunction:y}),(0,h.jsx)(g,{news:t})]}),0===t.length&&!v&&(0,h.jsx)(l.x,{textAlign:"center",children:"There are not news according to your request. Please try again."})]})})})}},5946:function(e,n,t){t.d(n,{X:function(){return x}});var r=t(1413),a=t(5987),o=t(7872),i=t(9084),s=t(9477),c=t(2952),u=t(6992),p=t(184),l=["className"],x=(0,o.G)((function(e,n){var t=(0,i.mq)("Heading",e),o=(0,s.Lr)(e),x=(o.className,(0,a.Z)(o,l));return(0,p.jsx)(c.m.h2,(0,r.Z)((0,r.Z)({ref:n,className:(0,u.cx)("chakra-heading",e.className)},x),{},{__css:t}))}));x.displayName="Heading"},9683:function(e,n,t){t.d(n,{M:function(){return f}});var r=t(1413),a=t(5987),o=t(7872),i=t(2952),s=t(184),c=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],u=(0,o.G)((function(e,n){var t=e.templateAreas,o=e.gap,u=e.rowGap,p=e.columnGap,l=e.column,x=e.row,d=e.autoFlow,f=e.autoRows,m=e.templateRows,h=e.autoColumns,g=e.templateColumns,w=(0,a.Z)(e,c),v={display:"grid",gridTemplateAreas:t,gridGap:o,gridRowGap:u,gridColumnGap:p,gridAutoColumns:h,gridColumn:l,gridRow:x,gridAutoFlow:d,gridAutoRows:f,gridTemplateRows:m,gridTemplateColumns:g};return(0,s.jsx)(i.m.div,(0,r.Z)({ref:n,__css:v},w))}));u.displayName="Grid";var p=t(5310),l=t(3142),x=t(2625),d=["columns","spacingX","spacingY","spacing","minChildWidth"],f=(0,o.G)((function(e,n){var t,o=e.columns,i=e.spacingX,c=e.spacingY,f=e.spacing,m=e.minChildWidth,h=(0,a.Z)(e,d),g=(0,p.F)(),w=m?function(e,n){return(0,x.XQ)(e,(function(e){var t,r=(0,l.LP)("sizes",e,"number"===typeof(t=e)?"".concat(t,"px"):t)(n);return null===e?null:"repeat(auto-fit, minmax(".concat(r,", 1fr))")}))}(m,g):(t=o,(0,x.XQ)(t,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")})));return(0,s.jsx)(u,(0,r.Z)({ref:n,gap:f,columnGap:i,rowGap:c,templateColumns:w},h))}));f.displayName="SimpleGrid"}}]);
//# sourceMappingURL=318.8c8e09bc.chunk.js.map