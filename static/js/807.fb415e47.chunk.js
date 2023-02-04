"use strict";(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[807],{2807:function(e,t,n){n.r(t),n.d(t,{Login:function(){return _},Register:function(){return L}});var a=n(2791),r=n(4087),s=n(6529),i=n(5149),o=n(9033),l=n(5861),c=n(9439),d=n(4687),p=n.n(d),x=n(1087),m=n(5946),u=n(9229),h=n(5705),g=n(9434),b=n(9869),f=n(5904),w=n(1724),y=/^\S*$/,j=w.Ry({email:w.Z_().email("Invalid email adress").required("Required").min(10).max(63).matches(/^[^-][a-zA-Z0-9_.-]{1,64}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email adress"),password:w.Z_().min(7,"Must be 7 characters or more").max(32,"Must be 32 characters or less").matches(y,"Must not contain spaces").required("Required"),confirm:w.Z_().oneOf([w.iH("password"),null],"Password must match").required("Required"),name:w.Z_(),address:w.Z_().matches(/^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/,"Must be in format City, Region"),phone:w.Z_().max(13,"Must be 12 numbers or less").matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/,"Mobile phone must include numbers in format +380xxxxxxxxx")}),v=w.Ry({email:w.Z_().email("Invalid email adress").required("Required"),password:w.Z_().min(7,"Must be 7 characters or more").max(32,"Must be 32 characters or less").matches(y,"Must not contain spaces").required("Required")}),Z=n(8724),k=n(9085),S=function(e){return k.Am.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},C=n(184),R=function(){var e=(0,g.v9)(b.Y6),t=(0,g.I0)(),n=(0,a.useState)(!1),s=(0,c.Z)(n,2),i=s[0],o=s[1],d=function(){o((function(e){return!e}))},w=function(){var e=(0,l.Z)(p().mark((function e(n,a){var r,s,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.resetForm,s={email:n.email,password:n.password},e.next=4,t((0,Z.x4)(s));case 4:i=e.sent,r(),i.payload||S("Please try again later"),i.error.message&&i.error&&S(i.payload.message);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,C.jsxs)(r.xu,{width:{base:"280px",md:"608px",xl:"618px"},px:{base:"0",md:"20"},pt:{base:"22px",md:"60px"},pb:{base:"0",md:"10",xl:"60px"},borderRadius:"40px",boxShadow:{base:"0",md:"7px 4px 14px rgba(0, 0, 0, 0.11)"},bgColor:{base:"accent.background",md:"white"},mx:"auto",children:[(0,C.jsx)(m.X,{as:"h1",mb:"10",mt:{base:"0"},textAlign:"center",fontWeight:"medium",children:"Login"}),(0,C.jsx)(h.J9,{initialValues:{email:"",password:""},validationSchema:v,onSubmit:w,isSubmitting:!0,children:function(t){return(0,C.jsxs)(r.xu,{as:h.l0,position:"relative",width:{base:"280px",md:"448px",xl:"458px"},children:[(0,C.jsx)(f.gt,{control:"input",type:"email",name:"email",id:"lg-email",placeholder:"Email"}),(0,C.jsx)(f.gt,{control:"input",type:"password",name:"password",id:"lg-password",placeholder:"Password",show:i,handleClick:d,mb:"0"}),(0,C.jsx)(f.zx,{isDisabled:t.isSubmitting,type:"submit",controle:"secondary",mb:"40px",mt:"40px",h:{base:"44px",xl:"48px"},width:{base:"280px",md:"448px",xl:"458px"},isLoading:e,loadingText:"Login",children:"Login"}),(0,C.jsxs)(r.xu,{display:"flex",justifyContent:"center",children:[(0,C.jsx)(u.x,{fontFamily:"body",fontSize:"xs",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"accent.grey",textAlign:"center",children:"Don't have an account?"}),(0,C.jsx)(r.xu,{as:"span",textDecoration:"underline",fontFamily:"body",fontSize:"xs",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"#3091EB;",textAlign:"center",children:(0,C.jsx)(x.rU,{to:"/register",children:"Register"})})]})]})}})]})},_=function(){return(0,C.jsx)(r.xu,{as:"main",bgImage:{base:s,md:i,xl:o},bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:"accent.background",h:"100vh",pt:{md:"180px",xl:"60px"},children:(0,C.jsx)(R,{})})},z=n(1413),q=n(5987),A=n(1428),F=function(){var e=(0,a.useState)(!1),t=(0,c.Z)(e,2),n=t[0],r=t[1],s=(0,a.useState)(!1),i=(0,c.Z)(s,2),o=i[0],l=i[1],d=function(e){"password"===e?r((function(e){return!e})):l((function(e){return!e}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(A.Z,{control:"input",type:"email",name:"email",id:"reg-email",placeholder:"Email"}),(0,C.jsx)(A.Z,{control:"input",type:"password",handleClick:function(){return d("password")},show:n,name:"password",id:"reg-password",placeholder:"Password"}),(0,C.jsx)(A.Z,{control:"input",type:"password",handleClick:d,show:o,name:"confirm",id:"reg-confirm-password",placeholder:"Confirm Password",mb:"0"})]})},M=function(e){var t=e.handleBackClick,n=e.isDisabled,a=(0,g.v9)(b.Y6);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(A.Z,{control:"input",type:"text",name:"name",id:"reg-name",placeholder:"Name"}),(0,C.jsx)(A.Z,{control:"input",type:"text",name:"address",id:"address",placeholder:"City, region"}),(0,C.jsx)(A.Z,{control:"input",type:"tel",name:"phone",id:"reg-phone",placeholder:"Mobile phone",mb:"0"}),(0,C.jsx)(f.zx,{controle:"secondary",mb:"4",mt:"10",type:"submit",isDisabled:n,isLoading:a,loadingText:"Register",children:"Register"}),(0,C.jsx)(f.zx,{mb:"10",onClick:t,isDisabled:n,children:"Back"})]})},P=["step"],D=function(e){var t=e.step,n=(0,q.Z)(e,P);switch(t){case"step1":return(0,C.jsx)(F,(0,z.Z)({},n));case"step2":return(0,C.jsx)(M,(0,z.Z)({},n));default:return null}},H=function(){var e=(0,a.useState)("step1"),t=(0,c.Z)(e,2),n=t[0],s=t[1],i=(0,g.I0)(),o=function(){var e=(0,l.Z)(p().mark((function e(t,n){var a,r,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.resetForm,r={email:t.email,password:t.password,name:t.name,address:t.address,phone:t.phone},e.next=4,i((0,Z.z2)(r));case 4:"auth/register/fulfilled"===(s=e.sent).type&&(i((0,Z.x4)({email:t.email,password:t.password})),a()),s.payload||S("Please try again later"),s.error&&S(s.payload.message);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){s("step1")};return(0,C.jsxs)(r.xu,{width:{base:"280px",md:"608px",xl:"618px"},px:{base:"0",md:"20"},pt:{base:"22px",md:"60px"},pb:{base:"0",md:"10",xl:"60px"},borderRadius:"40px",boxShadow:{base:"0",md:"7px 4px 14px rgba(0, 0, 0, 0.11)"},bgColor:{base:"accent.background",md:"white"},mx:"auto",children:[(0,C.jsx)(m.X,{as:"h1",mb:"10",mt:{base:"0"},textAlign:"center",fontWeight:"medium",children:"Registration"}),(0,C.jsx)(h.J9,{initialValues:{email:"",password:"",confirm:"",name:"",address:"",phone:""},validationSchema:j,onSubmit:o,children:function(e){return(0,C.jsxs)(r.xu,{as:h.l0,position:"relative",width:{base:"280px",md:"448px",xl:"458px"},children:[(0,C.jsx)(D,{step:n,isDisabled:e.isSubmitting,handleBackClick:d}),"step1"===n&&(0,C.jsx)(f.zx,{controle:"secondary",mb:"10",mt:"10",h:{base:"44px",xl:"12"},width:{base:"280px",md:"448px",xl:"458px"},onClick:(0,l.Z)(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.next=3,e.validateForm();case 3:if(t.t1=t.sent,t.t2=t.t0.keys.call(t.t0,t.t1).length,0!==t.t2){t.next=9;break}s("step2"),t.next=10;break;case 9:e.submitForm();case 10:case"end":return t.stop()}}),t)}))),children:"Next"}),(0,C.jsxs)(r.xu,{display:"flex",justifyContent:"center",children:[(0,C.jsx)(u.x,{fontFamily:"body",fontSize:"xs",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"accent.grey",textAlign:"center",children:"Already have an account?"}),(0,C.jsx)(r.xu,{as:"span",textDecoration:"underline",fontFamily:"body",fontSize:"xs",fontWeight:"normal",lineHeight:"1.33",letterSpacing:"0.04em",color:"#3091EB;",textAlign:"center",children:(0,C.jsx)(x.rU,{to:"/login",children:"Login"})})]})]})}})]})},L=function(){return(0,C.jsx)(r.xu,{as:"main",bgImage:{base:s,md:i,xl:o},bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:"accent.background",h:"100vh",pt:{md:"145px",xl:"26px"},children:(0,C.jsx)(H,{})})}},9033:function(e,t,n){e.exports=n.p+"static/media/bg-auth-laptop.37258932ae831c4f8073.png"},6529:function(e,t,n){e.exports=n.p+"static/media/bg-auth-mobile.4113b880676e40779373.png"},5149:function(e,t,n){e.exports=n.p+"static/media/bg-auth-tablet.b2c9c95741743cc440fe.png"},5946:function(e,t,n){n.d(t,{X:function(){return x}});var a=n(1413),r=n(5987),s=n(7872),i=n(9084),o=n(9477),l=n(2952),c=n(6992),d=n(184),p=["className"],x=(0,s.G)((function(e,t){var n=(0,i.mq)("Heading",e),s=(0,o.Lr)(e),x=(s.className,(0,r.Z)(s,p));return(0,d.jsx)(l.m.h2,(0,a.Z)((0,a.Z)({ref:t,className:(0,c.cx)("chakra-heading",e.className)},x),{},{__css:n}))}));x.displayName="Heading"}}]);
//# sourceMappingURL=807.fb415e47.chunk.js.map