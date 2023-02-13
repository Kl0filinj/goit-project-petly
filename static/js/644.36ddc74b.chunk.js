"use strict";(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[644],{8644:function(e,t,n){n.r(t),n.d(t,{Notices:function(){return Fe}});var i,o,r=n(9439),l=n(2791),a=n(1087),s=n(7689),x=n(9434),p=n(4087),c=n(5946),d=n(3923),u=n(9085),h=function(e){return e.filter},m=n(5653),f=n(184),g=function(e){var t=e.submitFunction,n=(0,x.I0)(),i=(0,x.v9)(h),o=(0,l.useState)(!1),a=(0,r.Z)(o,2),p=a[0],c=a[1],g=(0,s.UO)().categoryName,b=(0,s.TH)().pathname;(0,l.useEffect)((function(){""===i&&c(!1)}),[i]),(0,l.useEffect)((function(){n((0,m.T)("")),c(!1)}),[n,b]);return(0,f.jsx)(d.HS,{type:"text",name:"search",onChange:function(e){var t=e.target.value;n((0,m.T)(t))},handleSearch:function(e){e.preventDefault(),""!==i.trim()?(t(),c(!0)):(0,u.Am)("What pet do you need?")},handleClear:function(){n((0,m.T)("")),c(!1)},value:i,isSubmited:p,mb:"28px",category:g})},b=n(8348),v=n(9229),j=n(4224),y={categoryName:"lost-found",title:"",name:"",birthday:"",breed:"",sex:"male",location:"",price:"",photo:null,comments:""},F=n(1724),C=n(2426),w=n.n(C),S=/(^[1-9])(\d*)$/,D=["image/jpg","image/jpeg","image/png"],z=F.Ry().shape({categoryName:F.Z_().oneOf(["lost-found","for-free","sell"]).required("Required"),title:F.Z_().min(2).max(48).matches(/^(?!(?:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?[0-9]){3})((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)$/,"Can contain only two digits").required("Required"),name:F.Z_().min(2).max(16).matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491\s\-']+$/,"Can only contain letters"),birthday:F.hT().min(w()("06021995","DDMMYYYY"),"Must be at later than 06.02.1995").max(w()(),"Must be at earlier than ".concat(w()().add(1,"days").format("DD.MM.YYYY"))),breed:F.Z_().min(2).max(24).matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491\s\-']+$/,"Can only contain letters"),sex:F.Z_().oneOf(["male","female"]).required("Required"),location:F.Z_().matches(/^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/,"Must be in format City, Region").required("Required"),price:F.Z_().when("categoryName",{is:"sell",then:function(e){return e.matches(S,"Must be a positive integer number").required("Required")},otherwise:function(e){return e.notRequired()}}),photo:F.nK().test("fileSize","Only documents up to 1MB are permitted",(function(e){return null===e||e&&e.size<=1e6})).test("fileFormat","Unsupported file type",(function(e){return null===e||e&&D.includes(e.type)})).nullable(),comments:F.Z_().min(8).max(120).required("Required")}),H=n(5705),k=n(5984),B=n(3204),W=n(5062),_=n(6916),L=function(e){return e.notices.error},O=function(e){return e.notices.isLoading},N=function(e){return e.notices.currentNotice},R=(0,_.P1)([function(e){return e.notices.userNotices},function(e){return e.notices.favorite},function(e){return e.notices.categories},function(e){return e.notices.total}],(function(e,t,n,i){return{ownNotices:e,favoriteNotices:t,categories:n,totalNotices:i}})),M=function(e){var t=e.notices,n=e.filter,i=t.userNotices;if(!n)return i;var o=n.toLowerCase();return i.filter((function(e){return e.title.toLocaleLowerCase().includes(o)}))},T=function(e){var t=e.notices,n=e.filter,i=t.favorite;if(!n)return i;var o=n.toLowerCase();return i.filter((function(e){return e.title.toLocaleLowerCase().includes(o)}))},E=function(e){var t=e.onClose,n=(0,x.I0)(),i=(0,x.v9)(O),o=(0,s.TH)(),a=(0,l.useMemo)((function(){return o.pathname.split("/")[2]}),[o.pathname]),c=(0,l.useState)(!0),u=(0,r.Z)(c,2),h=u[0],m=u[1],g=(0,l.useMemo)((function(){return(0,k.x0)()}),[]),b=(0,l.useMemo)((function(){return(0,k.x0)()}),[]),j=(0,l.useMemo)((function(){return(0,k.x0)()}),[]),F=(0,l.useMemo)((function(){return(0,k.x0)()}),[]),C=(0,l.useMemo)((function(){return(0,k.x0)()}),[]),S=(0,l.useMemo)((function(){return(0,k.x0)()}),[]),D=(0,l.useMemo)((function(){return(0,k.x0)()}),[]),_=(0,l.useMemo)((function(){return(0,k.x0)()}),[]);function L(e,t){var n=t.title,i=t.name,o=t.birthday,r=t.breed;return!e||void 0!==n||void 0!==i||void 0!==o||void 0!==r}return(0,f.jsx)(H.J9,{initialValues:y,validationSchema:z,onSubmit:function(e,i){var o=e.categoryName,r=e.title,l=e.name,s=e.birthday,x=e.breed,p=e.sex,c=e.location,u=e.price,h=e.photo,m=e.comments,f=i.resetForm,g=new FormData;g.append("categoryName",o),g.append("title",r.trim()),g.append("name",l.trim()),g.append("birthdate",s?w()(s,"YYYYY-MM-DD").format("DD.MM.YYYY"):null),g.append("breed",x.trim()),g.append("sex",p),g.append("location",c.trim()),g.append("price",u?Number(u):""),g.append("photo",h),g.append("comments",m.trim()),n((0,W.Fy)({newPet:g,category:a})).then((function(e){var n=e.error;if(n)return(0,d.Jc)(n.message);(0,d.Qm)("Notice successfully added"),f(),t()})).catch((function(e){return(0,d.Jc)(e.message)}))},validateOnChange:!0,children:function(e){var n=e.values,o=e.errors,r=e.dirty;return(0,f.jsx)(H.l0,{autoComplete:"off",encType:"multipart/form-data",children:h?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.gt,{control:"category-radio",name:"categoryName"}),(0,f.jsx)(d.gt,{type:"text",name:"title",label:(0,f.jsxs)(f.Fragment,{children:["Title of ad",(0,f.jsx)(v.x,{as:"span",color:"accent.accentOrange",children:"*"})]}),placeholder:"Type title",id:g,width:60}),(0,f.jsx)(d.gt,{type:"text",name:"name",label:"Name pet",placeholder:"Type name pet",id:b,width:60}),(0,f.jsx)(d.gt,{type:"date",name:"birthday",label:"Date of birthday",id:j,width:60}),(0,f.jsx)(d.gt,{type:"text",name:"breed",label:"Breed",placeholder:"Type breed",id:F,width:60,mb:"40px"}),(0,f.jsxs)(p.xu,{maxW:"none",display:"flex",flexDirection:{base:"column",md:"row-reverse"},justifyContent:{base:"center",md:"center"},children:[(0,f.jsx)(d.zx,{controle:"secondary",onClick:function(){return m(!1)},isDisabled:L(r,o),mb:{base:"3",md:"0"},width:{md:"180px"},children:"Next"}),(0,f.jsx)(d.zx,{onClick:t,mr:{md:"5"},width:{md:"180px"},children:"Cancel"})]})]}):(0,f.jsxs)(p.xu,{display:"flex",flexDirection:"column",maxW:"none",children:[(0,f.jsx)(d.gt,{control:"sex-radio",name:"sex",label:(0,f.jsxs)(f.Fragment,{children:["The sex",(0,f.jsx)(v.x,{as:"span",color:"accent.accentOrange",children:"*"})]})}),(0,f.jsx)(d.gt,{type:"text",name:"location",label:(0,f.jsxs)(f.Fragment,{children:["Location",(0,f.jsx)(v.x,{as:"span",color:"accent.accentOrange",children:"*"})]}),placeholder:'Type location, e.g. "Kyiv, UA"',id:C,width:"60"}),"sell"===n.categoryName&&(0,f.jsx)(d.gt,{type:"text",name:"price",label:(0,f.jsxs)(f.Fragment,{children:["Price",(0,f.jsx)(v.x,{as:"span",color:"accent.accentOrange",children:"*"})]}),placeholder:"Type price",id:S,width:"60"}),(0,f.jsx)(v.x,{fontSize:{base:"18px",md:"2xl"},fontWeight:"medium",lineHeight:{base:"short",md:"1.2"},letterSpacing:"-0.01em",mb:"5",children:"Load the pet`s image"}),(0,f.jsx)(d.gt,{control:"file",id:D,name:"photo",size:{base:"116px",md:"140px"},mx:"0",borderRadius:"20px",plusSize:{base:"55%",md:"50%"}}),(0,f.jsx)(d.gt,{control:"textarea",name:"comments",label:(0,f.jsxs)(f.Fragment,{children:["Comments",(0,f.jsx)(v.x,{as:"span",color:"accent.accentOrange",children:"*"})]}),placeholder:"Type comments",id:_}),(0,f.jsxs)(p.xu,{maxW:"none",width:"full",display:"flex",flexDirection:{base:"column",md:"row-reverse"},justifyContent:{base:"center",md:"center"},children:[(0,f.jsx)(d.zx,{type:"submit",mb:{base:"3",md:"0"},controle:"secondary",width:{md:"180px"},children:i?(0,f.jsxs)(f.Fragment,{children:[" Adding ",(0,f.jsx)(B.$,{emptyColor:"#FF6101",color:"#F5F5F5",textAlign:"center",size:"xs"})]}):"Done"}),(0,f.jsx)(d.zx,{onClick:function(){return m(!0)},mr:{md:"5"},width:{md:"180px"},children:"Back"})]})]})})}})},Y=n(9869),Z=n(8652),A=function(){var e=(0,b.q)(),t=e.isOpen,n=e.onOpen,i=e.onClose,o=(0,x.v9)(Y.M7);return(0,f.jsx)(p.xu,{maxWidth:{base:"280px",md:"704px",xl:"1248px"},mx:"auto",id:"22",children:(0,f.jsxs)(p.xu,{mb:{base:"30px",md:"60px"},display:"flex",children:[(0,f.jsxs)(p.xu,{as:"nav",maxW:{base:"280px",md:"474px",xl:"802px"},display:"flex",flexWrap:"wrap",gap:{base:"12px",md:"16px 12px",xl:"12px"},mr:"auto",ml:{base:"auto",md:"0"},children:[(0,f.jsx)(d.g6,{to:"/notices/lost-found",children:"lost/found"}),(0,f.jsx)(d.g6,{to:"/notices/for-free",children:"in good hand"}),(0,f.jsx)(d.g6,{exact:"true",to:"/notices/sell",children:"sell"}),o&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.g6,{to:"/notices/favorite",children:"favorite ads"}),(0,f.jsx)(d.g6,{to:"/notices/own",children:"my ads"})]})]}),(0,f.jsxs)(p.xu,{display:"flex",w:{base:"80px",md:"129px"},h:{base:"80px",md:"44px"},flexDirection:{base:"column-reverse",md:"row"},alignItems:{base:"center"},justifyContent:{base:"center"},borderRadius:{base:"50%",md:"100%"},bgColor:{base:"#F59256",md:"transparent"},position:{base:"fixed",md:"static"},top:"455px",right:"20px",zIndex:"2",children:[(0,f.jsx)(v.x,{maxWidth:{xl:"767px"},size:{w:"74px",h:"27px"},textAlign:"center",fontStyle:"normal",fontWeight:"500",fontSize:{base:"12px",md:"20px"},lineHeight:"27px",mr:{base:"0px",md:"12px"},color:{base:"white",md:"#111111"},children:"Add pet"}),(0,f.jsx)(j.z,{display:"flex",alignItems:{base:"center"},justifyContent:{base:"center"},backgroundColor:"#F59256",borderRadius:"50%",w:{base:"21px",md:"44px"},h:{base:"21px",md:"44px"},_hover:{backgroundColor:"#FF6101"},_focus:{backgroundColor:"#FF6101"},onClick:function(){o?n(!0):(0,u.Am)("Please log in!")},children:(0,f.jsx)(Z.d,{w:{base:"21px",md:"16px"},h:{base:"21px",md:"16px"},color:"white"})})]}),(0,f.jsx)(d.u_,{isOpen:t,onClose:i,title:"Add pet",children:(0,f.jsx)(E,{onClose:i})})]})})},P=n(9683),q=n(8058),I=n(2899),$=n(3303),J=n(8082),U=n(8613),X=["title","titleId"];function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Q.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function V(e,t){var n=e.title,r=e.titleId,a=K(e,X);return l.createElement("svg",Q({width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?l.createElement("title",{id:r},n):null,i||(i=l.createElement("g",{clipPath:"url(#clip0_332_1539)"},l.createElement("rect",{width:16,height:16,transform:"translate(0.5)",fill:"white"}),l.createElement("path",{d:"M5.16666 2C3.32599 2 1.83333 3.47733 1.83333 5.3C1.83333 6.77133 2.41666 10.2633 8.15866 13.7933C8.26152 13.8559 8.3796 13.889 8.5 13.889C8.62039 13.889 8.73847 13.8559 8.84133 13.7933C14.5833 10.2633 15.1667 6.77133 15.1667 5.3C15.1667 3.47733 13.674 2 11.8333 2C9.99266 2 8.5 4 8.5 4C8.5 4 7.00733 2 5.16666 2Z",fill:"#F59256",stroke:"#F59256",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),o||(o=l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_332_1539"},l.createElement("rect",{width:16,height:16,fill:"white",transform:"translate(0.5)"})))))}var G=l.forwardRef(V),ee=(n.p,n(1820)),te=n(3380),ne=n(2853),ie=n(7693),oe=n(7521),re=n(3541),le=n(4585),ae=n(3466),se=n(1461),xe=function(e){var t,n,i,o,r,a,s,c,u=e.isOpen,h=e.onClose,m=e.id,g=e.toggleFavorite,b=e.favorite,j=(0,x.I0)(),y=(0,x.v9)(N);return(0,l.useEffect)((function(){u&&j((0,W.Ag)(m))}),[j,m,u]),(0,f.jsxs)(ee.u_,{isOpen:u,onClose:h,children:[(0,f.jsx)(te.Z,{bg:"rgba(17, 17, 17, 0.6);"}),(0,f.jsxs)(ne.h,{w:["280px",null,"280px","704px"],maxW:"none",borderRadius:["20px",null,"20px","40px"],children:[(null===y||void 0===y?void 0:y.title)&&(0,f.jsx)(ie.x,{mx:"auto",display:["none","none","none",null],mb:["20px",null,"20px","40px"],p:"0",fontSize:["2xl",null,"2xl","4xl"],fontWeight:"500",lineHeight:"short",color:"#111111",children:y.title}),(0,f.jsx)(oe.f,{px:"20px",py:[null,null,null,"32px"],pb:["40px","40px","40px",null],pt:["60px","60px","60px",null],children:(0,f.jsxs)(p.xu,{bg:"#ffffff",position:"relative",children:[(0,f.jsxs)(p.xu,{display:[null,null,null,"grid"],gridTemplateColumns:"288px 356px",gap:"20px",children:[(0,f.jsxs)(p.xu,{position:"relative",width:[null,null,"240px","288px"],height:[null,null,"240px","328px"],"border-radius":"0px 0px 40px 40px",overflow:"hidden",children:[(0,f.jsx)(J.E,{objectFit:"cover",borderRadius:"0px 0px 40px 40px",w:"100%",h:"100%",src:null!==(t=null===y||void 0===y?void 0:y.photo)&&void 0!==t?t:q,alt:null===y||void 0===y?void 0:y.breed,onError:function(e){e.target.src=q}}),(0,f.jsx)(v.x,{position:"absolute",top:"20px",left:"0",display:"flex",alignItems:"center",minHeight:"28px",minWidth:"158px",paddingLeft:"20px",fontSize:"12px",lineHeight:"1.36",letterSpacing:"0.04em",borderTopRightRadius:"20px",borderBottomRightRadius:"20px",bg:"rgba(255, 255, 255, 0.6)",children:"for-free"===(null===y||void 0===y?void 0:y.categoryName)?"in good hands":null===y||void 0===y?void 0:y.categoryName.split("-").join(" ")})]}),(0,f.jsxs)(p.xu,{children:[(0,f.jsx)(v.x,{maxWidth:"316px",mb:["16px","16px","16px","20px"],mt:["16px","16px","16px","0px"],fontWeight:"700",fontSize:"28px",lineHeight:"1.36",letterSpacing:"-0.01em",children:null===y||void 0===y?void 0:y.title}),(0,f.jsxs)(re.aV,{display:"flex",flexDirection:"column",_notLast:{marginBottom:"0px"},children:[(0,f.jsxs)(re.HC,{display:"flex",_notLast:{marginBottom:"8px"},children:[(0,f.jsx)(le.l,{minWidth:"118px",fontWeight:"600",fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",m:"0",children:"Name:"}),(0,f.jsx)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",children:null!==y&&void 0!==y&&y.name?null===y||void 0===y?void 0:y.name:"-"})]}),(0,f.jsxs)(re.HC,{display:"flex",_notLast:{marginBottom:"8px"},children:[(0,f.jsx)(le.l,{minWidth:"118px",fontWeight:"600",fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",m:"0",children:"Birthday:"}),(0,f.jsx)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",children:"null"===(null===y||void 0===y?void 0:y.birthdate)?"-":null===y||void 0===y?void 0:y.birthdate})]}),(0,f.jsxs)(re.HC,{display:"flex",_notLast:{marginBottom:"8px"},children:[(0,f.jsx)(le.l,{minWidth:"118px",fontWeight:"600",fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",m:"0",children:"Breed:"}),(0,f.jsx)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",children:null!==y&&void 0!==y&&y.breed?null===y||void 0===y?void 0:y.breed:"-"})]}),(0,f.jsxs)(re.HC,{display:"flex",_notLast:{marginBottom:"8px"},children:[(0,f.jsx)(le.l,{minWidth:"118px",fontWeight:"600",fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",m:"0",children:"Location:"}),(0,f.jsx)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",children:null===y||void 0===y?void 0:y.location})]}),(0,f.jsxs)(re.HC,{display:"flex",_notLast:{marginBottom:"8px"},children:[(0,f.jsx)(le.l,{minWidth:"118px",fontWeight:"600",fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",m:"0",children:"The sex:"}),(0,f.jsx)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",children:null===y||void 0===y?void 0:y.sex})]}),(null===y||void 0===y?void 0:y.owner)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(re.HC,{display:"flex",_notLast:{marginBottom:"8px"},children:[(0,f.jsx)(le.l,{minWidth:"118px",fontWeight:"600",fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",m:"0",children:"Email:"}),null!==y&&void 0!==y&&null!==(n=y.owner)&&void 0!==n&&n.email?(0,f.jsx)(ae.r,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",href:"mailto: ".concat(null===y||void 0===y||null===(i=y.owner)||void 0===i?void 0:i.email),children:null===y||void 0===y||null===(o=y.owner)||void 0===o?void 0:o.email}):(0,f.jsx)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",children:"-"})]}),(0,f.jsxs)(re.HC,{display:"flex",_notLast:{marginBottom:"8px"},children:[(0,f.jsx)(le.l,{minWidth:"118px",fontWeight:"600",fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",m:"0",children:"Phone:"}),null!==y&&void 0!==y&&null!==(r=y.owner)&&void 0!==r&&r.phone?(0,f.jsx)(ae.r,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",href:"mailto: ".concat(null===y||void 0===y||null===(a=y.owner)||void 0===a?void 0:a.phone),children:null===y||void 0===y||null===(s=y.owner)||void 0===s?void 0:s.phone}):(0,f.jsx)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",children:"-"})]})]}),(null===y||void 0===y?void 0:y.price)&&(0,f.jsxs)(re.HC,{display:"flex",_notLast:{marginBottom:"8px"},children:[(0,f.jsx)(le.l,{minWidth:"118px",fontWeight:"600",fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",m:"0",children:"Price:"}),(0,f.jsxs)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",children:[null===y||void 0===y?void 0:y.price," $"]})]})]})]})]}),(0,f.jsxs)(v.x,{fontSize:["14px","14px","14px","16px"],lineHeight:"1.36",mt:"28px",children:[(0,f.jsx)("b",{children:"Comments:"})," ",null===y||void 0===y?void 0:y.comments]}),(0,f.jsxs)(p.xu,{display:[null,null,"flex","flex"],justifyContent:"flex-start",flexWrap:[null,null,"wrap","nowrap"],pr:[null,null,null,"20px"],mt:["40px","40px","40px","32px"],flexDirection:"row-reverse",children:[(0,f.jsx)(ae.r,{display:"flex",justifyContent:"center",alignItems:"center",width:["100%","100%","100%","160px"],height:[10,null,10,null,10],marginBottom:["12px","12px","12px","0px"],fontSize:"16px",lineHeight:"1.375",letterSpacing:"0.04em",cursor:"pointer",color:"#ffffff",textAlign:"center",backgroundColor:"#F59256",borderRadius:"40px",_hover:{backgroundColor:"#FF6101"},_focus:{backgroundColor:"#FF6101"},href:"tel: ".concat(null===y||void 0===y||null===(c=y.owner)||void 0===c?void 0:c.phone),children:"Contact"}),(0,f.jsx)(d.zx,{display:"flex",justifyContent:"center",alignItems:"center",width:["100%","100%","100%","160px"],height:[10,null,10,null,10],marginRight:[null,null,null,"12px"],fontSize:"16px",lineHeight:"1.375",letterSpacing:"0.04em",cursor:"pointer",borderRadius:"40px",_hover:{borderColor:"#FF6101"},_focus:{borderColor:"#FF6101"},rightIcon:(0,f.jsx)(G,{}),variant:"solid",onClick:g,children:b?"Remove from":"Add to"})]})]})}),(0,f.jsx)(se.o,{width:["34px",null,"34px","44px"],height:["34px",null,"34px","44px"],top:"20px",right:"20px",bg:"#FDF7F2",borderRadius:"50%",_hover:{backgroundColor:"accent.accentOrange"},_focus:{backgroundColor:"accent.accentOrange"}})]})]})},pe=n(367),ce=n(7874);w()().format();var de=function(e){var t=e.id,n=e.photo,i=e.owner,o=e.title,a=e.breed,s=e.location,u=e.birthdate,h=e.price,m=e.categoryName,g=(0,x.I0)(),j=(0,b.q)(),y=j.isOpen,F=j.onOpen,C=j.onClose,S=(0,b.q)(),D=S.isOpen,z=S.onOpen,H=S.onClose,k=(0,x.v9)(Y.M7),B=(0,x.v9)(Y.PR),_=B._id,L=B.favorites,O=(0,l.useState)((function(){return Boolean(null===L||void 0===L?void 0:L.includes(t))})),N=(0,r.Z)(O,2),R=N[0],M=N[1],T=i===_,E=function(){if(k)return R?R?(g((0,W.zm)(t)),g((0,pe.nJ)(t)),void M(!1)):void 0:(g((0,W._p)(t)),g((0,pe.t)(t)),void M(!0));(0,d.Jc)("You must sign in for add to favorites!")};return(0,f.jsxs)(I.Z,{as:"li",width:"100%",boxShadow:"7px 4px 14px rgba(49, 21, 4, 0.07)",borderBottomRadius:"20px",children:[(0,f.jsxs)($.e,{p:"0",mb:"30px",children:[(0,f.jsxs)(p.xu,{position:"relative",children:[(0,f.jsx)(J.E,{src:null!==n&&void 0!==n?n:q,alt:a,objectFit:"cover",width:{base:"280px",md:"336px",xl:"288px"},height:"288px",loading:"lazy"}),(0,f.jsx)(p.xu,{as:"span",position:"absolute",top:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",w:"158px",h:"28px",px:"20px",py:"6px",borderRightRadius:"20px",color:"#111111",fontSize:"xs",fontWeight:"medium",lineHeight:"xl",letterSpacing:"0.04em",backgroundColor:"rgba(255, 255, 255, 0.6)",backdropFilter:"blur(2px)",children:"for-free"===m?"in good hands":m.split("-").join("/")}),(0,f.jsx)(d._6,{toggleFav:E,isFavorite:R})]}),(0,f.jsxs)(p.xu,{p:"20px",children:[(0,f.jsx)(c.X,{mb:"20px",color:"#111111",fontSize:"28px",fontWeight:"bold",lineHeight:"short",letterSpacing:"-0.01em",children:o}),(0,f.jsxs)(v.x,{mb:"8px",fontSize:"16px",fontWeight:"medium",lineHeight:"short",color:"#111111",children:["Breed: ",a]}),(0,f.jsxs)(v.x,{mb:"8px",fontSize:"16px",fontWeight:"medium",lineHeight:"short",color:"#111111",children:["Location: ",s]}),(0,f.jsxs)(v.x,{mb:h&&"8px",fontSize:"16px",fontWeight:"medium",lineHeight:"short",color:"#111111",children:["Age: ","null"===u?"-":function(e){return w()(e,"DD.MM.YYYY").fromNow(!0)}(u)]}),h&&(0,f.jsxs)(v.x,{mb:h&&"8px",fontSize:"16px",fontWeight:"medium",lineHeight:"short",color:"#111111",children:["Price: ",h," $"]})]})]}),(0,f.jsxs)(U.e,{pt:"0",px:"16px",pb:"32px",width:"100%",display:"flex",alignItems:"center",flexDirection:"column",children:[(0,f.jsx)(d.xC,{onClick:F,children:"Learn more"}),T&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.xC,{mt:"12px",position:"relative",controle:"delete",onClick:z,children:"Delete"}),(0,f.jsx)(ce.Z,{isOpen:D,onClose:H,title:"Are you sure you want to delete this notice?",children:(0,f.jsx)(p.xu,{textAlign:"center",children:(0,f.jsx)(d.op,{onClick:function(){g((0,W.Wq)(t))},children:"Delete"})})})]}),(0,f.jsx)(xe,{isOpen:y,onClose:C,id:t,toggleFavorite:E,favorite:R})]})]})},ue=function(e){var t=e.notices;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(P.M,{as:"ul",mx:"auto",maxWidth:{base:"280px",md:"704px",xl:"1248px"},gridTemplateColumns:{base:"1fr",md:"1fr 1fr",xl:"1fr 1fr 1fr 1fr"},gap:"32px",width:"full",listStyleType:"none",children:(0,f.jsx)(f.Fragment,{children:t.map((function(e){var t=e._id,n=e.photo,i=e.title,o=e.breed,r=e.location,l=e.birthdate,a=e.price,s=e.categoryName,x=e.owner;return(0,f.jsx)(de,{id:t,photo:n,title:i,breed:o,location:r,birthdate:l,price:a,categoryName:s,owner:x},t)}))})})})},he=n(176),me=n(6048),fe=n.n(me),ge=n(2491),be=function(e){var t=e.total,n=e.currentPage,i=(0,ge.a)("(max-width: 767px)"),o=(0,r.Z)(i,1)[0],s=(0,a.lr)(),x=(0,r.Z)(s,2)[1],c=(0,l.useState)(0),d=(0,r.Z)(c,2),u=d[0],h=d[1];(0,l.useEffect)((function(){null!==t&&h(n)}),[t,n]);var m=Math.ceil(t/8);return(0,f.jsx)(he.k,{justify:"center",children:(0,f.jsx)(p.xu,{as:fe(),previousLabel:"Prev",nextLabel:"Next",pageCount:m,onPageChange:function(e){var t=e.selected;x({page:t+1}),window.scrollTo({top:0,behavior:"smooth"})},forcePage:u-1,pageRangeDisplayed:o?0:2,marginPagesDisplayed:o?0:2,renderOnZeroPageCount:null,containerClassName:"paginationList",pageClassName:"paginationButton",pageLinkClassName:"paginationLink",previousClassName:"paginationButton prevButton",previousLinkClassName:"paginationLink extremeButtonsLink prevButtonLink",nextClassName:"paginationButton nextButton",nextLinkClassName:"paginationLink extremeButtonsLink nextButtonLink",breakClassName:"paginationBreak",__css:{"&":{display:"flex",listStyle:"none",pt:"60px"},".paginationButton":{display:"flex",justify:"center",align:"center",w:"40px",h:"40px",mr:"10px",bg:"#FFFFFF",borderRadius:"50%"},".paginationButton:nth-last-of-type(-n + 2)":{mr:"0"},".paginationButton:not(.disabled):hover":{bg:"accent.accentOrange",color:"#FFFFFF"},".paginationLink":{w:"40px",h:"40px",textAlign:"center",p:"10px",pb:"10px",fontSize:"14px",lineHeight:"1.3",border:"2px solid",borderColor:"accent.accentOrange",borderRadius:"50%"},".prevButton":{w:"60px",mr:"15px",borderRadius:"10px"},".nextButton":{w:"60px",ml:"15px",borderRadius:"10px"},".extremeButtonsLink":{w:"60px",px:"10px",py:"10px",borderRadius:"10px"},".paginationBreak":{display:"flex",alignItems:"center",mr:"10px",fontWeight:"500",fontSize:"20px"},".selected":{bg:"accent.accentOrange",color:"#FFFFFF"},".disabled > a":{borderColor:"#bfbfbf",bg:"#f3f3f3",color:"#bfbfbf"},".disabled:hover > a":{cursor:"default"}}})})},ve=n(854);var je=n.p+"static/media/dog.ec68581ba42861ff1332c12b19da1ee8.svg",ye=function(e){var t=e.category;return(0,f.jsxs)(p.xu,{textAlign:"center",children:[(0,f.jsx)(J.E,{margin:"auto",src:je,alt:"dog"}),(0,f.jsx)(c.X,{mt:"10",fontSize:"2xl",fontWeight:"bold",children:"own"===t?"You have not added your pets yet.":"favorite"===t?"There are currently no favorite animals.":"sell"===t?"There are currently no pets for sale.":"for-free"===t?"There are no pets that can be free.":"lost-found"===t?"So far, no pets have been found or lost.":"Oops! Your pet list is empty."}),(0,f.jsx)(v.x,{mt:"4",fontSize:"xl",children:"Don't worry, you are in the right place! Try using the navigation menu to get back on track."})]})},Fe=function(){var e=(0,x.I0)(),t=(0,s.UO)().categoryName,n=(0,a.lr)(),i=(0,r.Z)(n,2),o=i[0],u=i[1],m=o.get("page"),b=null===m?1:m,v=(0,x.v9)(h).toLowerCase(),j=(0,x.v9)(R),y=j.categories,F=j.totalNotices,C=(0,x.v9)(T),w=(0,x.v9)(M),S=(0,x.v9)(O),D=(0,x.v9)(L);(0,l.useEffect)((function(){u(""!==v?{page:null===b?1:b,query:v}:{page:null===b?1:b})}),[b,v,u]),(0,l.useEffect)((function(){if(""===v){if("favorite"===t)return void e((0,W._l)());e("own"===t?(0,W.RB)():(0,W._H)({categoryName:t,page:b,searchQuery:v}))}}),[e,t,b,v]);var z=8*b,H=z-8,k=(0,l.useMemo)((function(){return function(e){return e.length<=8?e:e.slice(H,z)}}),[z,H]),B=(0,l.useMemo)((function(){return"favorite"===t?k(C):"own"===t?k(w):y}),[y,t,C,w,k]),_=(0,l.useMemo)((function(){return"favorite"===t?C.length:"own"===t?w.length:F}),[t,C.length,w.length,F]);return(0,f.jsx)(p.xu,{bgColor:"#FDF7F2",h:{base:"calc(100vh - 74px)",md:"calc(100vh - 96px)",xl:"calc(100vh - 88px)"},children:(0,f.jsx)(d.W2,{children:(0,f.jsxs)(d.$0,{pt:{base:"26px",md:"66px",xl:"39px"},children:[(0,f.jsx)(c.X,{as:"h1",fontSize:{base:"24px",md:"48px"},fontWeight:"bold",lineHeight:"short",textAlign:"center",mb:"40px",children:"Find your favorite pet"}),(0,f.jsx)(g,{submitFunction:function(){e((0,W._H)({categoryName:t,page:b,searchQuery:v}))}}),(0,f.jsx)(A,{}),D?(0,f.jsx)(c.X,{children:" Here is problem, try to reload the page"}):(0,f.jsx)(f.Fragment,{children:S?(0,f.jsx)(ve.Z,{}):(0,f.jsx)(f.Fragment,{children:0!==B.length?(0,f.jsx)(ue,{notices:B}):(0,f.jsx)(ye,{category:t})})}),!S&&_>8&&(0,f.jsx)(be,{total:_,currentPage:b})]})})})}},8058:function(e,t,n){e.exports=n.p+"static/media/no_img.295cf90aa4bc156e1ea4.png"}}]);
//# sourceMappingURL=644.36ddc74b.chunk.js.map