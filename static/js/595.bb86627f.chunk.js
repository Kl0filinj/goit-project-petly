"use strict";(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[595],{2595:function(e,r,s){s.r(r),s.d(r,{OurFriends:function(){return U}});var t=s(5861),n=s(9439),i=s(4687),l=s.n(i),a=s(2791),o=s(9115),d=s(9483),c=s(5946),x=s(854),m=function(){var e=(0,t.Z)(l().mark((function e(){var r,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://goit-project-petly-backend.onrender.com/api","/services"));case 2:return r=e.sent,s=r.json(),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=s(5984),u=s(1888),p=s(3627),f=s(2435),g=s(954),b=s(8574),j=s(4087),v=s(9229),y=s(184),k=function(e){var r,s,t=e.workDays,n=["MN: ","TU: ","WE: ","TH: ","FR: ","SA: ","SU: "],i=(new Date).getDay(),l=function(){return 0===i?6:i-1};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(u.J,{children:[(0,y.jsx)(p.x,{children:(0,y.jsx)(f.z,{alignItems:"start",justifyContent:"start",variant:"link",color:"#111111",fontWeight:"medium",fontSize:{base:"xs",md:"sm",lg:"md"},lineHeight:{base:"1.33",md:"1.35",lg:"short"},type:"click",children:t[l()].from&&t[l()].to?"".concat(null===(r=t[l()])||void 0===r?void 0:r.from," - ").concat(null===(s=t[l()])||void 0===s?void 0:s.to):"Closed"})}),(0,y.jsx)(g.y,{maxW:"120px",children:(0,y.jsx)(b.b,{display:"inline-block",p:"12px",border:"1px solid #f59256",cursor:"pointer",bgColor:"#FFFFFF",boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.25)",borderRadius:"2",fontWeight:"medium",fontSize:"xs",lineHeight:"1.34",children:t.map((function(e,r){var s=e.from,t=e.to,l=e.isOpen;return(0,y.jsx)(j.xu,{children:l?(0,y.jsxs)(j.xu,{display:"flex",justifyContent:"space-between",bgColor:r+1===i?"accent.accentOrange":"inherit",borderRadius:"sm",px:"0.5",children:[(0,y.jsx)(v.x,{children:n[r]}),(0,y.jsxs)(v.x,{children:[s,"-",t]})]}):(0,y.jsxs)(j.xu,{display:"flex",justifyContent:"space-between",bgColor:r+1===i?"accent.accentOrange":"inherit",borderRadius:"sm",px:"0.5",children:[(0,y.jsxs)(v.x,{children:[n[r]," "]}),(0,y.jsx)(v.x,{children:"Closed"})]})},(0,h.x0)())}))})})]})})},w=s(9683),F=s(2899),S=s(1413),C=s(5987),W=s(4390),_=s(6992),Z=s(7872),z=s(2952),D=["className"],H=(0,Z.G)((function(e,r){var s=e.className,t=(0,C.Z)(e,D),n=(0,W.v)();return(0,y.jsx)(z.m.div,(0,S.Z)({ref:r,className:(0,_.cx)("chakra-card__header",s),__css:n.header},t))})),A=s(3466),O=s(751),R=s(8082),E=s(3303),N=function(e){var r=e.friends;return(0,y.jsx)(w.M,{justifyItems:"center",columns:{base:1,md:2,lg:3},spacing:{base:"3",md:"8"},children:r.map((function(e){var r=e._id,s=e.title,t=e.url,n=e.addressUrl,i=e.address,l=e.imageUrl,a=e.workDays,o=e.phone,d=e.email;return(0,y.jsxs)(F.Z,{bgColor:"#FFFFFF",borderRadius:"10",boxShadow:"7px 4px 14px rgba(49, 21, 4, 0.07)",w:{base:"280px",md:"336px",lg:"280px",xl:"394px"},p:{base:"3",md:"4"},children:[(0,y.jsx)(H,{as:"h3",p:0,textAlign:"center",mt:{base:2.5,md:4},mb:{base:2.5,md:4},color:"#F59256",fontWeight:"bold",fontSize:{base:"sm",md:"md",lg:"xl"},lineHeight:{base:"1.33",md:"short",lg:"1.35"},children:(0,y.jsx)(A.r,{position:"relative",color:"#f59256",href:t,target:"_blank",rel:"noreferrer",children:s})}),(0,y.jsxs)(O.K,{direction:{base:"column",sm:"row"},mt:{base:"3",md:"4"},children:[(0,y.jsx)(j.xu,{maxWidth:{base:"110px",md:"120px",xl:"158px"},children:(0,y.jsx)(R.E,{m:0,src:l,alt:s})}),(0,y.jsx)(O.K,{children:(0,y.jsxs)(E.e,{p:0,children:[(0,y.jsxs)(j.xu,{as:"div",display:"flex",flexDirection:"column",textAlign:"start",mb:{base:"1",md:"2",lg:"3"},fontWeight:"medium",fontSize:{base:"xs",md:"sm",lg:"md"},lineHeight:{base:"1.33",md:"1.35",lg:"short"},color:"#111111",position:"relative",children:["Time:",a?(0,y.jsx)(k,{workDays:a}):(0,y.jsx)("hr",{})]}),(0,y.jsxs)(j.xu,{as:"div",display:"flex",flexDirection:"column",textAlign:"start",mb:{base:"1",md:"2",lg:"3"},fontWeight:"medium",fontSize:{base:"xs",md:"sm",lg:"md"},lineHeight:{base:"1.33",md:"1.35",lg:"short"},color:"#111111",type:"address",children:["Address:",(0,y.jsx)(A.r,{href:n,target:"_blank",rel:"noreferrer",children:i?(0,y.jsx)("span",{children:i}):(0,y.jsx)("hr",{})})]}),(0,y.jsxs)(j.xu,{as:"div",display:"flex",flexDirection:"column",textAlign:"start",mb:{base:"1",md:"2",lg:"3"},fontWeight:"medium",fontSize:{base:"xs",md:"sm",lg:"md"},lineHeight:{base:"1.33",md:"1.35",lg:"short"},color:"#111111",type:"email",children:["Email:",(0,y.jsxs)(A.r,{href:"mailto:{address}",children:[d||(0,y.jsx)(v.x,{})," "]})]}),(0,y.jsxs)(j.xu,{as:"div",display:"flex",flexDirection:"column",textAlign:"start",fontWeight:"medium",fontSize:{base:"xs",md:"sm",lg:"md"},lineHeight:{base:"1.33",md:"1.35",lg:"short"},color:"#111111",type:"phone",children:["Phone:",(0,y.jsxs)(A.r,{href:"tel:{phone}",children:[" ",o||(0,y.jsx)("hr",{})," "]})]})]})})]})]},r)}))})},U=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),s=r[0],i=r[1],h=(0,a.useState)(!1),u=(0,n.Z)(h,2),p=u[0],f=u[1];return(0,a.useEffect)((function(){function e(){return(e=(0,t.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,m();case 4:r=e.sent,i(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,f(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,y.jsx)(o.Z,{children:(0,y.jsxs)(d.Z,{pt:{base:"58px",md:"94px",lg:"72px"},children:[(0,y.jsx)(c.X,{as:"h1",fontSize:{base:"2xl",md:"5xl"},fontWeight:"bold",lineHeight:"short",textAlign:"center",mb:{base:"10",md:"45px",xl:"60px"},children:"Our friend"}),p?(0,y.jsx)(x.Z,{}):(0,y.jsx)(N,{friends:s})]})})}}}]);
//# sourceMappingURL=595.bb86627f.chunk.js.map