(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Q3ob:function(e,t,r){e.exports=r("auEI").default},auEI:function(e,t,r){"use strict";r.r(t);r("BqyK"),r("r0ML");var n=r("EOzB"),a=r("gu4E"),i=r.n(a),o=r("ZUbM"),c=r("xH0s");function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=u(Object(o.useContentful)([o.PRIVACY_POLICY_IMAGE_URL]),1)[0];return Object(c.e)("section",null,Object(c.e)(i.a,{pageName:"privacy-policy",entryId:n.CONTENT_PRIVACY_POLICY,bannerImageUrl:e}))}},gu4E:function(e,t,r){e.exports=r("uUJu").default},uUJu:function(e,t,r){"use strict";r.r(t);r("BqyK");var n=r("cNRa"),a=r.n(n),i=r("+9af"),o=r("ZUbM"),c=(r("r0ML"),r("uNgz")),u=r("6nGc"),l=r("xH0s"),s=function(e){var t=e.children,r=e.imageUrl;return Object(l.e)("div",{css:g.backgroundImage({imageUrl:r,generateAWSImageUrl:u.generateAWSImageUrl})},t)};s.propTypes={imageUrl:a.a.string.isRequired,children:a.a.oneOfType([a.a.arrayOf(a.a.node),a.a.node])};var g={backgroundImage:function(e){var t=e.imageUrl,r=e.generateAWSImageUrl;return function(){return{position:"relative",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",backgroundPositionY:"center",backgroundPositionX:"center",backgroundColor:"transparent",backgroundImage:"url(".concat(r({url:t,config:{height:300}}),")")}}}},d=s;var f=function(e){var t=e.imageUrl,r=e.title;return Object(l.e)(d,{imageUrl:t},Object(l.e)("div",{css:y.container,"data-test-banner":!0},Object(l.e)("h1",{css:y.h1},r)))};f.propTypes={imageUrl:a.a.string.isRequired,title:a.a.string.isRequired};var p,b,m,y={container:{width:"100%",textAlign:"center",minHeight:"300px",display:"flex",justifyContent:"center",alignItems:"center"},h1:(p={margin:"0px",padding:"0px",color:c.COLORS.white,fontSize:"44px",lineHeight:1.59,fontWeight:700},b=c.MEDIA_BREAKPOINTS.down("md"),m={fontSize:"34px",textAlign:"center",lineHeight:1.3},b in p?Object.defineProperty(p,b,{value:m,enumerable:!0,configurable:!0,writable:!0}):p[b]=m,p)},v=f,O=r("hDs/"),h=r("ZjWj"),I=function(e){var t=e.entry;return Object(l.e)(h.a,null,Object(l.e)(O.a,{"data-test-description":!0},t.getField("text")))};I.propTypes={entry:a.a.object};var j=I,U=function(e){var t=e.entryId,r=e.bannerImageUrl,n=e.pageName,a=Object(o.useContentfulLegacy)((function(){return t})).entry;return Object(l.e)("section",{"data-test-section":n},Object(l.e)(v,{imageUrl:r,title:a.getField("title")}),Object(l.e)(i.Container,{css:A.container},a.getLinkedEntries("contentModules").map((function(e,t){return Object(l.e)(j,{key:t,entry:e})}))))};U.propTypes={entryId:a.a.string.isRequired,bannerImageUrl:a.a.string.isRequired,pageName:a.a.string};var A={container:{paddingTop:"2rem",paddingBottom:"2rem"}};t.default=U}}]);