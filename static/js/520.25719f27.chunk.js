"use strict";(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[520],{8520:function(e,t,n){n.r(t),n.d(t,{Notices:function(){return k}});var a=n(9439),r=n(2791),i=n(7689),o=n(6456),s=n(9085),l=n(184),d=function(e){var t=e.searchFunction,n=(0,r.useState)(""),i=(0,a.Z)(n,2),d=i[0],c=i[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.HS,{name:"search",onChange:function(e){c(e.target.value.toLowerCase()),t(e.target.value)},handleSearch:function(e){e.preventDefault(),""!==d.trim()?t(d):(0,s.Am)("What pet do you need?")},handleClear:function(){c(""),t("")},value:d,mb:"28px"}),(0,l.jsx)(s.Ix,{})]})},c=n(8348),x=n(4087),m=n(9229),p=n(2435),u={categoryName:"lost-found",title:"",name:"",birthday:"",breed:"",sex:"male",location:"",price:"",photo:null,comments:""},h=n(1724),f=n(2426),b=n.n(f),g=/(^[1-9])(\d*)$/,j=["image/jpg","image/jpeg","image/png"],y=h.Ry().shape({categoryName:h.Z_().oneOf(["lost-found","for-free","sell"]).required("Required"),title:h.Z_().min(2).max(48).required("Required"),name:h.Z_().min(2).max(16),birthday:h.hT().min(b()("06021995","DDMMYYYY"),"Must be at later than 06.02.1995").max(b()(),"Must be at earlier than ".concat(b()().add(1,"days").format("DD.MM.YYYY"))),breed:h.Z_().min(2).max(24),sex:h.Z_().oneOf(["male","female"]).required("Required"),location:h.Z_().matches(/^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/,"Must be in format City, Region").required("Required"),price:h.Z_().when("categoryName",{is:"sell",then:function(e){return e.matches(g,"Must be a positive integer number").required("Required")},otherwise:function(e){return e.notRequired()}}),photo:h.nK().test("fileFormat","Unsupported file type",(function(e){return null===e||e&&j.includes(e.type)})).nullable(),comments:h.Z_().min(8).max(120).required("Required")}),w=n(5705),v=n(9434),C=n(5984),M=n(5062),F=n(1686),D=function(e){var t=e.onClose,n=(0,v.I0)(),i=(0,v.v9)(F.uL),s=(0,r.useState)(!0),d=(0,a.Z)(s,2),c=d[0],p=d[1],h=(0,r.useMemo)((function(){return(0,C.x0)()}),[]),f=(0,r.useMemo)((function(){return(0,C.x0)()}),[]),g=(0,r.useMemo)((function(){return(0,C.x0)()}),[]),j=(0,r.useMemo)((function(){return(0,C.x0)()}),[]),D=(0,r.useMemo)((function(){return(0,C.x0)()}),[]),Y=(0,r.useMemo)((function(){return(0,C.x0)()}),[]),S=(0,r.useMemo)((function(){return(0,C.x0)()}),[]),_=(0,r.useMemo)((function(){return(0,C.x0)()}),[]);function q(e,t){var n=t.title,a=t.name,r=t.birthday,i=t.breed;return!e||void 0!==n||void 0!==a||void 0!==r||void 0!==i}return(0,l.jsx)(w.J9,{initialValues:u,validationSchema:y,onSubmit:function(e,a){var r=e.categoryName,i=e.title,s=e.name,l=e.birthday,d=e.breed,c=e.sex,x=e.location,m=e.price,p=e.photo,u=e.comments,h=a.resetForm,f=new FormData;f.append("categoryName",r),f.append("title",i.trim()),f.append("name",s.trim()),f.append("birthdate",l?b()(l,"YYYYY-MM-DD").format("DD.MM.YYYY"):null),f.append("breed",d.trim()),f.append("sex",c),f.append("location",x.trim()),f.append("price",m?Number(m):""),f.append("photo",p),f.append("comments",u.trim()),n((0,M.Fy)(f)).then((function(e){var n=e.error;if(n)return(0,o.Jc)(n.message);(0,o.Qm)("Notice successfully added"),h(),t()})).catch((function(e){return(0,o.Jc)(e.message)}))},validateOnChange:!0,validateOnBlur:!0,children:function(e){var n=e.values,a=e.errors,r=e.dirty;return(0,l.jsx)(w.l0,{autoComplete:"off",encType:"multipart/form-data",children:c?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.gt,{control:"category-radio",name:"categoryName"}),(0,l.jsx)(o.gt,{type:"text",name:"title",label:(0,l.jsxs)(l.Fragment,{children:["Title of ad",(0,l.jsx)(m.x,{as:"span",color:"accent.accentOrange",children:"*"})]}),placeholder:"Type title",id:h,width:60}),(0,l.jsx)(o.gt,{type:"text",name:"name",label:"Name pet",placeholder:"Type name pet",id:f,width:60}),(0,l.jsx)(o.gt,{type:"date",name:"birthday",label:"Date of birthday",id:g,width:60}),(0,l.jsx)(o.gt,{type:"text",name:"breed",label:"Breed",placeholder:"Type breed",id:j,width:60,mb:"40px"}),(0,l.jsxs)(x.xu,{maxW:"none",display:"flex",flexDirection:{base:"column",md:"row-reverse"},justifyContent:{base:"center",md:"center"},children:[(0,l.jsx)(o.zx,{controle:"secondary",onClick:function(){return p(!1)},isDisabled:q(r,a),mb:{base:"3",md:"0"},width:{md:"180px"},children:"Next"}),(0,l.jsx)(o.zx,{onClick:t,mr:{md:"5"},width:{md:"180px"},children:"Cancel"})]})]}):(0,l.jsxs)(x.xu,{display:"flex",flexDirection:"column",maxW:"none",children:[(0,l.jsx)(o.gt,{control:"sex-radio",name:"sex",label:(0,l.jsxs)(l.Fragment,{children:["The sex",(0,l.jsx)(m.x,{as:"span",color:"accent.accentOrange",children:"*"})]})}),(0,l.jsx)(o.gt,{type:"text",name:"location",label:(0,l.jsxs)(l.Fragment,{children:["Location",(0,l.jsx)(m.x,{as:"span",color:"accent.accentOrange",children:"*"})]}),placeholder:"Type location",id:D,width:"60"}),"sell"===n.categoryName&&(0,l.jsx)(o.gt,{type:"text",name:"price",label:(0,l.jsxs)(l.Fragment,{children:["Price",(0,l.jsx)(m.x,{as:"span",color:"accent.accentOrange",children:"*"})]}),placeholder:"Type price",id:Y,width:"60"}),(0,l.jsx)(m.x,{fontSize:{base:"18px",md:"2xl"},fontWeight:"medium",lineHeight:{base:"short",md:"1.2"},letterSpacing:"-0.01em",mb:"5",children:"Load the pet`s image"}),(0,l.jsx)(o.gt,{control:"file",id:S,name:"photo",size:{base:"116px",md:"140px"},borderRadius:"20px",plusSize:{base:"55%",md:"50%"}}),(0,l.jsx)(o.gt,{control:"textarea",name:"comments",label:(0,l.jsxs)(l.Fragment,{children:["Comments",(0,l.jsx)(m.x,{as:"span",color:"accent.accentOrange",children:"*"})]}),placeholder:"Type comments",id:_}),(0,l.jsxs)(x.xu,{maxW:"none",width:"full",display:"flex",flexDirection:{base:"column",md:"row-reverse"},justifyContent:{base:"center",md:"center"},children:[(0,l.jsx)(o.zx,{type:"submit",mb:{base:"3",md:"0"},controle:"secondary",width:{md:"180px"},children:i?"Adding...":"Done"}),(0,l.jsx)(o.zx,{onClick:function(){return p(!0)},mr:{md:"5"},width:{md:"180px"},children:"Back"})]})]})})}})},Y=n(9869),S=(0,n(5903).I)({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"}),_=function(){var e=(0,c.q)(),t=e.isOpen,n=e.onOpen,a=e.onClose,r=(0,v.v9)(Y.M7);return(0,l.jsx)(x.xu,{maxWidth:{base:"280px",md:"704px",xl:"1248px"},mx:"auto",id:"22",children:(0,l.jsxs)(x.xu,{mb:{base:"30px",md:"60px"},display:"flex",children:[(0,l.jsxs)(x.xu,{as:"nav",maxW:{base:"280px",md:"474px",xl:"802px"},display:"flex",flexWrap:"wrap",gap:{base:"12px",md:"16px 12px",xl:"12px"},mr:"auto",ml:{base:"auto",md:"0"},children:[(0,l.jsx)(o.g6,{to:"lost-found",children:"lost/found"}),(0,l.jsx)(o.g6,{to:"free",children:"in good hand"}),(0,l.jsx)(o.g6,{exact:!0,to:"sell",children:"sell"}),r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.g6,{to:"favorite",children:"favorite ads"}),(0,l.jsx)(o.g6,{to:"own",children:"my ads"})]})]}),(0,l.jsxs)(x.xu,{display:"flex",w:{base:"80px",md:"140px"},h:{base:"80px"},flexDirection:{base:"column-reverse",md:"row"},alignItems:{base:"center"},justifyContent:{base:"center"},borderRadius:{base:"50%",md:"100%"},bgColor:{base:"#F59256",md:"transparent"},as:"Button",position:{base:"fixed",md:"static"},top:"455px",right:"20px",zIndex:"2",children:[(0,l.jsx)(m.x,{maxWidth:{xl:"767px"},size:{w:"74px",h:"27px"},textAlign:"center",fontStyle:"normal",fontWeight:"500",fontSize:{base:"12px",md:"20px"},lineHeight:"27px",mr:{base:"0px",md:"12px"},color:{base:"white",md:"#111111"},children:"Add pet"}),(0,l.jsx)(p.z,{display:"flex",alignItems:{base:"center"},justifyContent:{base:"center"},backgroundColor:"#F59256",borderRadius:"50%",w:{base:"21px",md:"44px"},h:{base:"21px",md:"44px"},_hover:{backgroundColor:"#FF6101"},_focus:{backgroundColor:"#FF6101"},onClick:function(){r||(0,s.Am)("Please log in!"),n(!0)},children:(0,l.jsx)(S,{w:{base:"21px",md:"16px"},h:{base:"21px",md:"16px"},color:"white"})})]}),(0,l.jsx)(o.u_,{isOpen:t,onClose:a,title:"Add pet",children:(0,l.jsx)(D,{onClose:a})})]})})},q=n(5946),k=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2)[1],n=(0,i.TH)(),s=(0,i.s0)(),c=n.pathname;return(0,r.useEffect)((function(){"/notices"===c&&s("sell")}),[c,s]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.W2,{children:(0,l.jsxs)(o.$0,{children:[(0,l.jsx)(q.X,{as:"h1",fontSize:{base:"24px",md:"48px"},fontWeight:"bold",lineHeight:"short",textAlign:"center",mb:7,children:"Find your favorite pet"}),(0,l.jsx)(d,{setSearchQuery:t}),(0,l.jsx)(_,{}),(0,l.jsx)(r.Suspense,{fallback:null,children:(0,l.jsx)(i.j3,{})})]})})})}}}]);
//# sourceMappingURL=520.25719f27.chunk.js.map