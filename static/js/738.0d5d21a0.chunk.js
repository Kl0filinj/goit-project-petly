"use strict";(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[738],{738:function(e,t,n){n.r(t),n.d(t,{Login:function(){return S},Register:function(){return D}});var a=n(2791),r=n(4087),s=n(2855),i=n(5861),o=n(9439),l=n(4687),c=n.n(l),d=n(1087),x=n(5946),p=n(9229),m=n(5705),u=n(9434),h=n(9869),b=n(3923),g=n(1724),f=/^\S*$/,w=g.Ry({email:g.Z_().email("Invalid email adress").required("Required").min(10).max(63).matches(/^[^-][a-zA-Z0-9_.-]{1,64}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email adress"),password:g.Z_().min(7,"Must be 7 characters or more").max(32,"Must be 32 characters or less").matches(f,"Must not contain spaces").required("Required"),confirm:g.Z_().oneOf([g.iH("password"),null],"Password must match").required("Required"),name:g.Z_().matches(/^([a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401]+)$/,"Name must contain only letters"),address:g.Z_().matches(/^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/,"Must be in format City, Region"),phone:g.Z_().max(13,"Must be 12 numbers or less").matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/,"Mobile phone must include numbers in format +380xxxxxxxxx")}),y=g.Ry({email:g.Z_().email("Invalid email adress").required("Required"),password:g.Z_().min(7,"Must be 7 characters or more").max(32,"Must be 32 characters or less").matches(f,"Must not contain spaces").required("Required")}),j=n(8724),v=n(8945),Z=n(184),k=function(){var e=(0,u.v9)(h.Y6),t=(0,u.I0)(),n=(0,a.useState)(!1),s=(0,o.Z)(n,2),l=s[0],g=s[1],f=function(){g((function(e){return!e}))},w=function(){var e=(0,i.Z)(c().mark((function e(n,a){var r,s,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.resetForm,s={email:n.email,password:n.password},e.next=4,t((0,j.x4)(s));case 4:i=e.sent,console.log(i),"auth/login/fulfilled"===i.type&&r(),i.payload||(0,v.J)("Please try again later"),i.error.message&&i.error&&(0,v.J)(i.payload.message);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,Z.jsxs)(r.xu,{width:{base:"280px",md:"608px",xl:"618px"},px:{base:"0",md:"20"},pt:{base:"22px",md:"60px"},pb:{base:"0",md:"10",xl:"60px"},borderRadius:"40px",boxShadow:{base:"0",md:"7px 4px 14px rgba(0, 0, 0, 0.11)"},bgColor:{base:"accent.background",md:"white"},mx:"auto",children:[(0,Z.jsx)(x.X,{as:"h1",mb:"10",mt:{base:"0"},textAlign:"center",fontWeight:"medium",children:"Login"}),(0,Z.jsx)(m.J9,{initialValues:{email:"",password:""},validationSchema:y,onSubmit:w,isSubmitting:!0,children:function(t){return(0,Z.jsxs)(r.xu,{as:m.l0,position:"relative",width:{base:"280px",md:"448px",xl:"458px"},children:[(0,Z.jsx)(b.gt,{control:"input",type:"email",name:"email",id:"lg-email",placeholder:"Email"}),(0,Z.jsx)(b.gt,{control:"input",type:"password",name:"password",id:"lg-password",placeholder:"Password",show:l,handleClick:f,mb:"0"}),(0,Z.jsx)(b.zx,{isDisabled:t.isSubmitting,type:"submit",controle:"secondary",mb:"40px",mt:"40px",h:{base:"44px",xl:"48px"},width:{base:"280px",md:"448px",xl:"458px"},isLoading:e,loadingText:"Login",children:"Login"}),(0,Z.jsxs)(r.xu,{display:"flex",justifyContent:"center",children:[(0,Z.jsx)(p.x,{fontFamily:"body",fontSize:"xs",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"accent.grey",textAlign:"center",children:"Don't have an account?"}),(0,Z.jsx)(r.xu,{as:"span",textDecoration:"underline",fontFamily:"body",fontSize:"xs",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"#3091EB;",textAlign:"center",children:(0,Z.jsx)(d.rU,{to:"/register",children:"Register"})})]})]})}})]})},S=function(){return(0,Z.jsx)(r.xu,{as:"main",bgImage:{base:s.xs,md:s.Ye,xl:s.$W},bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:"accent.background",h:{base:"calc(100vh - 74px)",md:"calc(100vh - 96px)",xl:"calc(100vh - 88px)"},pt:{md:"180px",xl:"60px"},children:(0,Z.jsx)(k,{})})},C=n(1413),R=n(5987),z=n(1428),_=function(){var e=(0,a.useState)(!1),t=(0,o.Z)(e,2),n=t[0],r=t[1],s=(0,a.useState)(!1),i=(0,o.Z)(s,2),l=i[0],c=i[1],d=function(e){"password"===e?r((function(e){return!e})):c((function(e){return!e}))};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(z.Z,{control:"input",type:"email",name:"email",id:"reg-email",placeholder:"Email"}),(0,Z.jsx)(z.Z,{control:"input",type:"password",handleClick:function(){return d("password")},show:n,name:"password",id:"reg-password",placeholder:"Password"}),(0,Z.jsx)(z.Z,{control:"input",type:"password",handleClick:d,show:l,name:"confirm",id:"reg-confirm-password",placeholder:"Confirm Password",mb:"0"})]})},A=function(e){var t=e.handleBackClick,n=e.isDisabled,a=(0,u.v9)(h.Y6);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(z.Z,{control:"input",type:"text",name:"name",id:"reg-name",placeholder:"Name"}),(0,Z.jsx)(z.Z,{control:"input",type:"text",name:"address",id:"address",placeholder:"City, region"}),(0,Z.jsx)(z.Z,{control:"input",type:"tel",name:"phone",id:"reg-phone",placeholder:"Mobile phone",mb:"0"}),(0,Z.jsx)(b.zx,{controle:"secondary",mb:"4",mt:"10",type:"submit",isDisabled:n,isLoading:a,loadingText:"Register",children:"Register"}),(0,Z.jsx)(b.zx,{mb:"10",onClick:t,isDisabled:n,children:"Back"})]})},q=["step"],F=function(e){var t=e.step,n=(0,R.Z)(e,q);switch(t){case"step1":return(0,Z.jsx)(_,(0,C.Z)({},n));case"step2":return(0,Z.jsx)(A,(0,C.Z)({},n));default:return null}},M=function(){var e=(0,a.useState)("step1"),t=(0,o.Z)(e,2),n=t[0],s=t[1],l=(0,u.I0)(),h=function(){var e=(0,i.Z)(c().mark((function e(t,n){var a,r,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.resetForm,r={email:t.email,password:t.password,name:t.name,address:t.address,phone:t.phone},e.next=4,l((0,j.z2)(r));case 4:"auth/register/fulfilled"===(s=e.sent).type&&(l((0,j.x4)({email:t.email,password:t.password})),a()),s.payload||(0,v.J)("Please try again later"),s.error&&(0,v.J)(s.payload.message);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){s("step1")};return(0,Z.jsxs)(r.xu,{width:{base:"280px",md:"608px",xl:"618px"},px:{base:"0",md:"20"},pt:{base:"22px",md:"60px"},pb:{base:"0",md:"10",xl:"60px"},borderRadius:"40px",boxShadow:{base:"0",md:"7px 4px 14px rgba(0, 0, 0, 0.11)"},bgColor:{base:"accent.background",md:"white"},mx:"auto",children:[(0,Z.jsx)(x.X,{as:"h1",mb:"10",mt:{base:"0"},textAlign:"center",fontWeight:"medium",children:"Registration"}),(0,Z.jsx)(m.J9,{initialValues:{email:"",password:"",confirm:"",name:"",address:"",phone:""},validationSchema:w,onSubmit:h,children:function(e){return(0,Z.jsxs)(r.xu,{as:m.l0,position:"relative",width:{base:"280px",md:"448px",xl:"458px"},children:[(0,Z.jsx)(F,{step:n,isDisabled:e.isSubmitting,handleBackClick:g}),"step1"===n&&(0,Z.jsx)(b.zx,{controle:"secondary",mb:"10",mt:"10",h:{base:"44px",xl:"12"},width:{base:"280px",md:"448px",xl:"458px"},onClick:(0,i.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.next=3,e.validateForm();case 3:if(t.t1=t.sent,t.t2=t.t0.keys.call(t.t0,t.t1).length,0!==t.t2){t.next=9;break}s("step2"),t.next=10;break;case 9:e.submitForm();case 10:case"end":return t.stop()}}),t)}))),children:"Next"}),(0,Z.jsxs)(r.xu,{display:"flex",justifyContent:"center",children:[(0,Z.jsx)(p.x,{fontFamily:"body",fontSize:"xs",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"accent.grey",textAlign:"center",children:"Already have an account?"}),(0,Z.jsx)(r.xu,{as:"span",textDecoration:"underline",fontFamily:"body",fontSize:"xs",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"#3091EB;",textAlign:"center",children:(0,Z.jsx)(d.rU,{to:"/login",children:"Login"})})]})]})}})]})},D=function(){return(0,Z.jsx)(r.xu,{as:"main",bgImage:{base:s.xs,md:s.Ye,xl:s.$W},bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:"accent.background",h:{base:"calc(100vh - 74px)",md:"calc(100vh - 96px)",xl:"calc(100vh - 88px)"},pt:{md:"145px",xl:"26px"},children:(0,Z.jsx)(M,{})})}}}]);
//# sourceMappingURL=738.0d5d21a0.chunk.js.map