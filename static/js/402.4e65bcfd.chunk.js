(self.webpackChunkgoit_project_petly=self.webpackChunkgoit_project_petly||[]).push([[402],{6048:function(e,t,n){var a;e.exports=(a=n(2791),function(){var e={703:function(e,t,n){"use strict";var a=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=a}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";n.r(r),n.d(r,{default:function(){return k}});var e=n(98),t=n.n(e),a=n(697),i=n.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var s=function(e){var n=e.pageClassName,a=e.pageLinkClassName,r=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,f=e.extraAriaContext,d=e.pageLabelBuilder,g=e.rel,v=e.ariaLabel||"Page "+r+(f?" "+f:""),m=null;return i&&(m="page",v=e.ariaLabel||"Page "+r+" is your current page",n=void 0!==n?n+" "+s:s,void 0!==a?void 0!==l&&(a=a+" "+l):a=l),t().createElement("li",{className:n},t().createElement("a",o({rel:g,role:p?void 0:"button",className:a,href:p,tabIndex:i?"-1":"0","aria-label":v,"aria-current":m,onKeyPress:u},c(u)),d(r)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var u=function(e){var n=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,i=e.breakHandler,o=e.getEventListener,s=a||"break";return t().createElement("li",{className:s},t().createElement("a",c({className:r,role:"button",tabIndex:"0",onKeyPress:i},o(i)),n))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var p=u;function f(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function h(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(s,e);var n,a,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(i){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function s(e){var n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),C(b(n=o.call(this,e)),"handlePreviousPage",(function(e){var t=n.state.selected;n.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),C(b(n),"handleNextPage",(function(e){var t=n.state.selected,a=n.props.pageCount;n.handleClick(e,null,t<a-1?t+1:void 0,{isNext:!0})})),C(b(n),"handlePageSelected",(function(e,t){if(n.state.selected===e)return n.callActiveCallback(e),void n.handleClick(t,null,void 0,{isActive:!0});n.handleClick(t,null,e)})),C(b(n),"handlePageChange",(function(e){n.state.selected!==e&&(n.setState({selected:e}),n.callCallback(e))})),C(b(n),"getEventListener",(function(e){return C({},n.props.eventListener,e)})),C(b(n),"handleClick",(function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,o=void 0!==i&&i,s=r.isNext,l=void 0!==s&&s,c=r.isBreak,u=void 0!==c&&c,p=r.isActive,f=void 0!==p&&p;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=n.state.selected,g=n.props.onClick,v=a;if(g){var m=g({index:t,selected:d,nextSelectedPage:a,event:e,isPrevious:o,isNext:l,isBreak:u,isActive:f});if(!1===m)return;Number.isInteger(m)&&(v=m)}void 0!==v&&n.handlePageChange(v)})),C(b(n),"handleBreakClick",(function(e,t){var a=n.state.selected;n.handleClick(t,e,a<e?n.getForwardJump():n.getBackwardJump(),{isBreak:!0})})),C(b(n),"callCallback",(function(e){void 0!==n.props.onPageChange&&"function"==typeof n.props.onPageChange&&n.props.onPageChange({selected:e})})),C(b(n),"callActiveCallback",(function(e){void 0!==n.props.onPageActive&&"function"==typeof n.props.onPageActive&&n.props.onPageActive({selected:e})})),C(b(n),"getElementPageRel",(function(e){var t=n.state.selected,a=n.props,r=a.nextPageRel,i=a.prevPageRel,o=a.selectedPageRel;return t-1===e?i:t===e?o:t+1===e?r:void 0})),C(b(n),"pagination",(function(){var e=[],a=n.props,r=a.pageRangeDisplayed,i=a.pageCount,o=a.marginPagesDisplayed,s=a.breakLabel,l=a.breakClassName,c=a.breakLinkClassName,u=n.state.selected;if(i<=r)for(var f=0;f<i;f++)e.push(n.getPageElement(f));else{var d=r/2,g=r-d;u>i-r/2?d=r-(g=i-u):u<r/2&&(g=r-(d=u));var v,m,h=function(e){return n.getPageElement(e)},b=[];for(v=0;v<i;v++){var y=v+1;y<=o||y>i-o||v>=u-d&&v<=u+(0===u&&r>1?g-1:g)?b.push({type:"page",index:v,display:h(v)}):s&&b.length>0&&b[b.length-1].display!==m&&(r>0||o>0)&&(m=t().createElement(p,{key:v,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:n.handleBreakClick.bind(null,v),getEventListener:n.getEventListener}),b.push({type:"break",index:v,display:m}))}b.forEach((function(t,n){var a=t;"break"===t.type&&b[n-1]&&"page"===b[n-1].type&&b[n+1]&&"page"===b[n+1].type&&b[n+1].index-b[n-1].index<=2&&(a={type:"page",index:t.index,display:h(t.index)}),e.push(a.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,n.state={selected:a},n}return n=s,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,n=e.disableInitialCallback,a=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===t||n||this.callCallback(t),a&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==t&&t>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,n=t.pageCount,a=e+t.pageRangeDisplayed;return a>=n?n-1:a}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,n=t.hrefBuilder,a=t.pageCount,r=t.hrefAllControls;if(n)return r||e>=0&&e<a?n(e+1,a,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var n=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(n=n+" "+this.props.extraAriaContext),n}}},{key:"getPageElement",value:function(e){var n=this.state.selected,a=this.props,r=a.pageClassName,i=a.pageLinkClassName,o=a.activeClassName,s=a.activeLinkClassName,c=a.extraAriaContext,u=a.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:n===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var n=this.props,a=n.disabledClassName,r=n.disabledLinkClassName,i=n.pageCount,o=n.className,s=n.containerClassName,l=n.previousLabel,c=n.previousClassName,u=n.previousLinkClassName,p=n.previousAriaLabel,d=n.prevRel,v=n.nextLabel,m=n.nextClassName,h=n.nextLinkClassName,b=n.nextAriaLabel,y=n.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(f(c)).concat(P?" ".concat(f(a)):""),N="".concat(f(m)).concat(k?" ".concat(f(a)):""),L="".concat(f(u)).concat(P?" ".concat(f(r)):""),w="".concat(f(h)).concat(k?" ".concat(f(r)):""),E=P?"true":"false",O=k?"true":"false";return t().createElement("ul",{className:o||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:x},t().createElement("a",g({className:L,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":E,"aria-label":p,rel:d},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:N},t().createElement("a",g({className:w,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":b,rel:y},this.getEventListener(this.handleNextPage)),v)))}}])&&v(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),s}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var k=P}(),r}())},6916:function(e,t,n){"use strict";n.d(t,{P1:function(){return l}});var a="NOT_FOUND";var r=function(e,t){return e===t};function i(e,t){var n="object"===typeof t?t:{equalityCheck:t},i=n.equalityCheck,o=void 0===i?r:i,s=n.maxSize,l=void 0===s?1:s,c=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var a=t.length,r=0;r<a;r++)if(!e(t[r],n[r]))return!1;return!0}}(o),p=1===l?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:a},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var i=n[r];return r>0&&(n.splice(r,1),n.unshift(i)),i.value}return a}return{get:r,put:function(t,i){r(t)===a&&(n.unshift({key:t,value:i}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(l,u);function f(){var t=p.get(arguments);if(t===a){if(t=e.apply(null,arguments),c){var n=p.getEntries(),r=n.find((function(e){return c(e.value,t)}));r&&(t=r.value)}p.put(arguments,t)}return t}return f.clearCache=function(){return p.clear()},f}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var i,s=0,l={memoizeOptions:void 0},c=a.pop();if("object"===typeof c&&(l=c,c=a.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var u=l,p=u.memoizeOptions,f=void 0===p?n:p,d=Array.isArray(f)?f:[f],g=o(a),v=e.apply(void 0,[function(){return s++,c.apply(null,arguments)}].concat(d)),m=e((function(){for(var e=[],t=g.length,n=0;n<t;n++)e.push(g[n].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:v,dependencies:g,lastResult:function(){return i},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),m};return r}var l=s(i)},4390:function(e,t,n){"use strict";n.d(t,{Y:function(){return o},v:function(){return s}});var a=n(9439),r=(0,n(5084).eC)("Card"),i=(0,a.Z)(r,2),o=i[0],s=i[1]},3303:function(e,t,n){"use strict";n.d(t,{e:function(){return p}});var a=n(1413),r=n(5987),i=n(4390),o=n(6992),s=n(7872),l=n(2952),c=n(184),u=["className"],p=(0,s.G)((function(e,t){var n=e.className,s=(0,r.Z)(e,u),p=(0,i.v)();return(0,c.jsx)(l.m.div,(0,a.Z)({ref:t,className:(0,o.cx)("chakra-card__body",n),__css:p.body},s))}))},2899:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(1413),r=n(5987),i=n(4390),o=n(6992),s=n(7872),l=n(9477),c=n(9084),u=n(2952),p=n(184),f=["className","children","direction","justify","align"],d=(0,s.G)((function(e,t){var n=(0,l.Lr)(e),s=n.className,d=n.children,g=n.direction,v=void 0===g?"column":g,m=n.justify,h=n.align,b=(0,r.Z)(n,f),y=(0,c.jC)("Card",e);return(0,p.jsx)(u.m.div,(0,a.Z)((0,a.Z)({ref:t,className:(0,o.cx)("chakra-card",s),__css:(0,a.Z)({display:"flex",flexDirection:v,justifyContent:m,alignItems:h,position:"relative",minWidth:0,wordWrap:"break-word"},y.container)},b),{},{children:(0,p.jsx)(i.Y,{value:y,children:d})}))}))},8613:function(e,t,n){"use strict";n.d(t,{e:function(){return p}});var a=n(1413),r=n(5987),i=n(4390),o=n(6992),s=n(7872),l=n(2952),c=n(184),u=["className","justify"],p=(0,s.G)((function(e,t){var n=e.className,s=e.justify,p=(0,r.Z)(e,u),f=(0,i.v)();return(0,c.jsx)(l.m.div,(0,a.Z)({ref:t,className:(0,o.cx)("chakra-card__footer",n),__css:(0,a.Z)({display:"flex",justifyContent:s},f.footer)},p))}))},8652:function(e,t,n){"use strict";n.d(t,{d:function(){return a}});var a=(0,n(5903).I)({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"})},9683:function(e,t,n){"use strict";n.d(t,{M:function(){return g}});var a=n(1413),r=n(5987),i=n(7872),o=n(2952),s=n(184),l=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],c=(0,i.G)((function(e,t){var n=e.templateAreas,i=e.gap,c=e.rowGap,u=e.columnGap,p=e.column,f=e.row,d=e.autoFlow,g=e.autoRows,v=e.templateRows,m=e.autoColumns,h=e.templateColumns,b=(0,r.Z)(e,l),y={display:"grid",gridTemplateAreas:n,gridGap:i,gridRowGap:c,gridColumnGap:u,gridAutoColumns:m,gridColumn:p,gridRow:f,gridAutoFlow:d,gridAutoRows:g,gridTemplateRows:v,gridTemplateColumns:h};return(0,s.jsx)(o.m.div,(0,a.Z)({ref:t,__css:y},b))}));c.displayName="Grid";var u=n(5310),p=n(3142),f=n(2625),d=["columns","spacingX","spacingY","spacing","minChildWidth"],g=(0,i.G)((function(e,t){var n,i=e.columns,o=e.spacingX,l=e.spacingY,g=e.spacing,v=e.minChildWidth,m=(0,r.Z)(e,d),h=(0,u.F)(),b=v?function(e,t){return(0,f.XQ)(e,(function(e){var n,a=(0,p.LP)("sizes",e,"number"===typeof(n=e)?"".concat(n,"px"):n)(t);return null===e?null:"repeat(auto-fit, minmax(".concat(a,", 1fr))")}))}(v,h):(n=i,(0,f.XQ)(n,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")})));return(0,s.jsx)(c,(0,a.Z)({ref:t,gap:g,columnGap:o,rowGap:l,templateColumns:b},m))}));g.displayName="SimpleGrid"},2491:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var a=n(1413),r=n(9439),i=n(9216),o=n(2791);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ssr,s=void 0===n||n,l=t.fallback,c=(0,i.O)(),u=c.getWindow,p=Array.isArray(e)?e:[e],f=Array.isArray(l)?l:[l];f=f.filter((function(e){return null!=e}));var d=(0,o.useState)((function(){return p.map((function(e,t){return{media:e,matches:s?!!f[t]:u().matchMedia(e).matches}}))})),g=(0,r.Z)(d,2),v=g[0],m=g[1];return(0,o.useEffect)((function(){var e=u();m(p.map((function(t){return{media:t,matches:e.matchMedia(t).matches}})));var t=p.map((function(t){return e.matchMedia(t)})),n=function(e){m((function(t){return t.slice().map((function(t){return t.media===e.media?(0,a.Z)((0,a.Z)({},t),{},{matches:e.matches}):t}))}))};return t.forEach((function(e){"function"===typeof e.addListener?e.addListener(n):e.addEventListener("change",n)})),function(){t.forEach((function(e){"function"===typeof e.removeListener?e.removeListener(n):e.removeEventListener("change",n)}))}}),[u]),v.map((function(e){return e.matches}))}}}]);
//# sourceMappingURL=402.4e65bcfd.chunk.js.map