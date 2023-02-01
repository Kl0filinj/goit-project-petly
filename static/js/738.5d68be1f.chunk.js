"use strict";(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[738],{738:function(e,t,n){n.r(t),n.d(t,{Login:function(){return S},Register:function(){return A}});var a=n(2791),s=n(4087),r=n(3487),i=n(5219),p=n(8987),x=n(5861),o=n(4687),l=n.n(o),d=n(1087),m=n(5946),c=n(9229),u=n(5705),h=n(9434),b=n(1482),g=n(1724),f=/^\S*$/,w=g.Ry({email:g.Z_().email("Invalid email adress").required("Required"),password:g.Z_().min(7,"Must be 7 characters or more").max(32,"Must be 32 characters or less").matches(f,"Must not contain spaces").required("Required"),confirm:g.Z_().oneOf([g.iH("password"),null],"Password must match").required("Required"),name:g.Z_(),address:g.Z_(),phone:g.Z_().max(13,"Must be 12 numbers or less").matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/,"Mobile phone must include numbers in format +380xxxxxxxxx")}),j=g.Ry({email:g.Z_().email("Invalid email adress").required("Required"),password:g.Z_().min(7,"Must be 7 characters or more").max(32,"Must be 32 characters or less").matches(f,"Must not contain spaces").required("Required")}),y=n(5561),v=n(184),F=function(){var e=(0,h.I0)(),t=function(){var t=(0,x.Z)(l().mark((function t(n,a){var s,r,i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a.resetForm,r={email:n.email,password:n.password},t.next=4,e((0,y.x)(r));case 4:i=t.sent,s(),i.error.message&&alert(i.payload.message);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return(0,v.jsxs)(s.xu,{width:{base:"280px",md:"608px",xl:"618px"},px:{base:"0",md:"80px"},pt:{base:"42px",md:"60px"},pb:{base:"0",md:"40px",xl:"60px"},borderRadius:"40px",boxShadow:{base:"0",md:"7px 4px 14px rgba(0, 0, 0, 0.11)"},bgColor:{base:"#FDF7F2",md:"white"},mx:"auto",children:[(0,v.jsx)(m.X,{as:"h1",mb:"40px",mt:{base:"0"},textAlign:"center",fontWeight:"medium",children:"Login"}),(0,v.jsx)(u.J9,{initialValues:{email:"",password:""},validationSchema:j,onSubmit:t,isSubmitting:!0,children:function(e){return(0,v.jsxs)(s.xu,{as:u.l0,position:"relative",width:{base:"280px",md:"448px",xl:"458px"},children:[(0,v.jsx)(b.gt,{control:"input",type:"email",name:"email",id:"lg-email",placeholder:"Email",h:{md:"52px"},width:{base:"280px",md:"448px",xl:"458px"},p:{base:"11px 14px",md:"14px 32px"}}),(0,v.jsx)(b.gt,{control:"input",type:"password",name:"password",id:"lg-password",placeholder:"Password",h:{md:"52px"},width:{base:"280px",md:"448px",xl:"458px"},p:{base:"11px 14px",md:"14px 32px"},mb:"0"}),(0,v.jsx)(b.zx,{isDisabled:e.isSubmitting,type:"submit",controle:"secondary",mb:"40px",mt:"40px",h:{base:"44px",xl:"48px"},width:{base:"280px",md:"448px",xl:"458px"},children:"Login"}),(0,v.jsxs)(s.xu,{display:"flex",justifyContent:"center",children:[(0,v.jsx)(c.x,{fontFamily:"body",fontSize:"12px",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"rgba(17, 17, 17, 0.6)",textAlign:"center",children:"Don't have an account?"}),(0,v.jsx)(s.xu,{as:"span",textDecoration:"underline",fontFamily:"body",fontSize:"12px",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"#3091EB;",textAlign:"center",children:(0,v.jsx)(d.rU,{to:"/register",children:"Register"})})]})]})}})]})},S=function(){return(0,v.jsx)(s.xu,{as:"main",bgImage:{base:r,md:i,xl:p},bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:"#FDF7F2",h:"100vh",pt:{md:"169px",xl:"46px"},children:(0,v.jsx)(F,{})})},Z=n(9439),k=n(1413),R=n(4925),C=n(1428),_=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(C.Z,{control:"input",type:"email",name:"email",id:"reg-email",placeholder:"Email",h:{md:"52px"},width:{base:"280px",md:"448px",xl:"458px"},p:{base:"11px 14px",md:"14px 32px"}}),(0,v.jsx)(C.Z,{control:"input",type:"password",name:"password",id:"reg-password",placeholder:"Password",h:{md:"52px"},width:{base:"280px",md:"448px",xl:"458px"},p:{base:"11px 14px",md:"14px 32px"}}),(0,v.jsx)(C.Z,{control:"input",type:"password",name:"confirm",id:"reg-confirm Password",placeholder:"Confirm Password",h:{md:"52px"},width:{base:"280px",md:"448px",xl:"458px"},mb:"0",p:{base:"11px 14px",md:"14px 32px"}})]})},z=function(e){var t=e.handleBackClick;e.isDisabled;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(C.Z,{control:"input",type:"text",name:"name",id:"reg-name",placeholder:"Name",h:{md:"52px"},width:{base:"280px",md:"448px",xl:"458px"}}),(0,v.jsx)(C.Z,{control:"input",type:"text",name:"address",id:"address",placeholder:"City, region",h:{md:"52px"},width:{base:"280px",md:"448px",xl:"458px"}}),(0,v.jsx)(C.Z,{control:"input",type:"tel",name:"phone",id:"reg-phone",placeholder:"Mobile phone",h:{md:"52px"},width:{base:"280px",md:"448px",xl:"458px"},mb:"0"}),(0,v.jsx)(b.zx,{controle:"secondary",mb:"16px",mt:"40px",h:{base:"44px",xl:"48px"},width:{base:"280px",md:"448px",xl:"458px"},type:"submit",children:"Register"}),(0,v.jsx)(b.zx,{mb:"40px",h:{base:"44px",xl:"48px"},width:{base:"280px",md:"448px",xl:"458px"},onClick:t,children:"Back"})]})},q=["step"],D=function(e){var t=e.step,n=(0,R.Z)(e,q);switch(t){case"step1":return(0,v.jsx)(_,(0,k.Z)({},n));case"step2":return(0,v.jsx)(z,(0,k.Z)({},n));default:return null}},M=function(){var e=(0,a.useState)("step1"),t=(0,Z.Z)(e,2),n=t[0],r=t[1],i=(0,h.I0)(),p=function(){var e=(0,x.Z)(l().mark((function e(t,n){var a,s,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.resetForm,s={email:t.email,password:t.password,name:t.name,address:t.address,phone:t.phone},e.next=4,i((0,y.z)(s));case 4:r=e.sent,console.log(r),"auth/register/fulfilled"===r.type&&(i((0,y.x)({email:t.email,password:t.password})),a()),r.error&&alert(r.payload.message);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){r("step1")};return(0,v.jsxs)(s.xu,{width:{base:"280px",md:"608px",xl:"618px"},px:{base:"0",md:"80px"},pt:{base:"42px",md:"60px"},pb:{base:"0",md:"40px",xl:"60px"},borderRadius:"40px",boxShadow:{base:"0",md:"7px 4px 14px rgba(0, 0, 0, 0.11)"},bgColor:{base:"#FDF7F2",md:"white"},mx:"auto",children:[(0,v.jsx)(m.X,{as:"h1",mb:"40px",mt:{base:"0"},textAlign:"center",fontWeight:"medium",children:"Registration"}),(0,v.jsx)(u.J9,{initialValues:{email:"",password:"",confirm:"",name:"",address:"",phone:""},validationSchema:w,onSubmit:p,children:function(e){return(0,v.jsxs)(s.xu,{as:u.l0,position:"relative",width:{base:"280px",md:"448px",xl:"458px"},children:[(0,v.jsx)(D,{step:n,isDisabled:e.isSubmitting,handleBackClick:o}),"step1"===n&&(0,v.jsx)(b.zx,{controle:"secondary",mb:"40px",mt:"40px",h:{base:"44px",xl:"48px"},width:{base:"280px",md:"448px",xl:"458px"},onClick:(0,x.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.next=3,e.validateForm();case 3:if(t.t1=t.sent,t.t2=t.t0.keys.call(t.t0,t.t1).length,0!==t.t2){t.next=9;break}r("step2"),t.next=10;break;case 9:e.submitForm();case 10:case"end":return t.stop()}}),t)}))),children:"Next"}),(0,v.jsxs)(s.xu,{display:"flex",justifyContent:"center",children:[(0,v.jsx)(c.x,{fontFamily:"body",fontSize:"12px",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"rgba(17, 17, 17, 0.6)",textAlign:"center",children:"Already have an account?"}),(0,v.jsx)(s.xu,{as:"span",textDecoration:"underline",fontFamily:"body",fontSize:"12px",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"#3091EB;",textAlign:"center",children:(0,v.jsx)(d.rU,{to:"/login",children:"Login"})})]})]})}})]})},A=function(){return(0,v.jsx)(s.xu,{as:"main",bgImage:{base:r,md:i,xl:p},bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:"#FDF7F2",h:"100vh",pt:{md:"169px",xl:"46px"},children:(0,v.jsx)(M,{})})}},8987:function(e,t,n){e.exports=n.p+"static/media/bg-auth-laptop.37258932ae831c4f8073.png"},3487:function(e,t,n){e.exports=n.p+"static/media/bg-auth-mobile.4113b880676e40779373.png"},5219:function(e,t,n){e.exports=n.p+"static/media/bg-auth-tablet.b2c9c95741743cc440fe.png"}}]);
//# sourceMappingURL=738.5d68be1f.chunk.js.map