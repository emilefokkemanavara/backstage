/*! For license information please see 15c904e4.7267012e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[462249],{407563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(824246),s=n(511151);const o={id:"v1.26.0",title:"v1.26.0",description:"Backstage Release v1.26.0"},a=void 0,i={id:"releases/v1.26.0",title:"v1.26.0",description:"Backstage Release v1.26.0",source:"@site/../docs/releases/v1.26.0.md",sourceDirName:"releases",slug:"/releases/v1.26.0",permalink:"/docs/releases/v1.26.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.26.0.md",tags:[],version:"current",frontMatter:{id:"v1.26.0",title:"v1.26.0",description:"Backstage Release v1.26.0"},sidebar:"releases",previous:{title:"v1.27.0",permalink:"/docs/releases/v1.27.0"},next:{title:"v1.25.0",permalink:"/docs/releases/v1.25.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Auth Improvements",id:"auth-improvements",level:3},{value:"App Backend",id:"app-backend",level:3},{value:"New Backend System",id:"new-backend-system",level:3},{value:"New Auth Modules",id:"new-auth-modules",level:3},{value:"OpenAPI Tooling",id:"openapi-tooling",level:3},{value:"Events System Improvement for the New Backend System",id:"events-system-improvement-for-the-new-backend-system",level:3},{value:"Catalog Error Events",id:"catalog-error-events",level:3},{value:"Kubernetes Proxy breaking change",id:"kubernetes-proxy-breaking-change",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["These are the release notes for the v1.26.0 release of ",(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"auth-improvements",children:"Auth Improvements"}),"\n",(0,r.jsxs)(t.p,{children:["All of the main parts of ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution",children:"BEP-0003"}),", and its efforts for making backends secure by default, are now in place! Our ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=qQcVHbXjU2Q&list=FLzNMnHaDkW4h6Dpoi3K-cBQ&index=4",children:"BackstageCon lightning talk"})," about auth gives some additional context and details."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Backstage user tokens issued by the ",(0,r.jsx)(t.code,{children:"auth"})," backend will now have a new ",(0,r.jsx)(t.code,{children:"uip"})," claim. This claim is a separate identity proof that is used internally for limited user identification needs such as cookies or service on-behalf-of tokens, without having to pass through the real user token and its full authorization power."]}),"\n",(0,r.jsx)(t.li,{children:"Plugin to plugin auth is now properly scoped and backed by a zero-configuration public key signature scheme. We have also added on-behalf-of tokens to carry the user identity safely in upstream requests, thanks to the identity proof mechanism mentioned above."}),"\n",(0,r.jsx)(t.li,{children:"Plugins such as TechDocs that need to expose cookie based endpoints now issue their own private plugin scoped cookies by leveraging the same identity proof mechanism, making it impossible to abuse cookies for requests to other plugins that happened to be co-deployed on the same domain."}),"\n",(0,r.jsxs)(t.li,{children:["Making requests to your backend plugins ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/auth/service-to-service-auth",children:"from external callers"})," has also been made easier than ever with a new configuration section that, in addition to the legacy service tokens, lets you configure static tokens as well. This system was made extensible so that more auth methods can be added going forward."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Note that if you have scaled your Backstage deployment to three or more distinct backends, you must take care to update the backend with the most central plugins first, i.e the ones with fewest outbound calls. The new automated plugin service auth does use feature detection to determine the authentication method, but is only able to do so for a single hop. What this means in practice is that if you\u2019re using the permission backend plugin you should update that instance first, followed by the catalog."}),"\n",(0,r.jsx)(t.p,{children:"Note also that the plugin service auth system uses the plugin database to store asymmetric keys. This means that any plugin that wants to make requests to other plugins now must have a database (and also accept incoming HTTP requests on the JWKS endpoint). For most adopters this will not require any action since the default setup auto-creates logical databases as needed. But if you have custom or locked-down setups, you may in rare cases encounter the need to create additional plugin databases."}),"\n",(0,r.jsx)(t.h3,{id:"app-backend",children:"App Backend"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"app-backend"})," plugin is now able to protect the main application bundle and only serve a limited public bundle to unauthenticated users. This is enabled by adding a ",(0,r.jsx)(t.code,{children:"src/index-public-experimental.tsx"})," entry point to your app package, which will only be used in production builds. This is still an experimental feature, but if you want to know more or try it out, check out the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/23719",children:"pull request where it was added"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"new-backend-system",children:"New Backend System"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Modules are no longer loaded unless the associated plugin is present."}),"\n",(0,r.jsx)(t.li,{children:"A new initialization option for service factories has been added, allowing service creators to override whether the service is lazily or eagerly initialized."}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"/api/:pluginId"})," path is now reserved for plugin traffic and can no longer be configured in the http router service. Requests towards ",(0,r.jsx)(t.code,{children:"/api/:pluginId"})," that don\u2019t match any registered plugin will now return a 404."]}),"\n",(0,r.jsxs)(t.li,{children:["A sweeping change has been made across all plugins to correctly use the ",(0,r.jsx)(t.code,{children:"LoggerService"})," instead of the old Winston logger (Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/drodil",children:"@drodil"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/24224",children:"#24224"}),"). For most users this will be transparent, but some users of the old backend system will notice, and will want to remove the winston compatibility wrapper."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"new-auth-modules",children:"New Auth Modules"}),"\n",(0,r.jsxs)(t.p,{children:["Several more auth providers have been migrated to be implemented as standalone modules, adding support for them in the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin",children:"new backend system"}),". The migrated providers are Cloudflare Access, Azure Easy Auth (",(0,r.jsx)(t.a,{href:"https://github.com/yaegashi",children:"@yaegashi"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/23909",children:"#23909"}),"), and Bitbucket (",(0,r.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/24287",children:"#24287"}),"). If you detect any issues, please reach out on ",(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," or ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues",children:"open an issue"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"openapi-tooling",children:"OpenAPI Tooling"}),"\n",(0,r.jsxs)(t.p,{children:["A new lint rule has been added to the ",(0,r.jsx)(t.code,{children:"@backstage/repo-tools repo schema openapi lint"})," command, which enforces that ",(0,r.jsx)(t.code,{children:"allowReserved: true"})," is set for all URL parameters. This is because the default encoding is unnecessarily strict and doesn\u2019t for example permit ",(0,r.jsx)(t.code,{children:"+"})," as an encoding of spaces."]}),"\n",(0,r.jsxs)(t.p,{children:["Two new ",(0,r.jsx)(t.code,{children:"fuzz"})," commands have also been added, for the ",(0,r.jsx)(t.code,{children:"repo schema openapi"})," and ",(0,r.jsx)(t.code,{children:"package schema openapi"})," group for fuzzing plugins. This can help find bugs in your application code through auto-generated schema-compliant inputs. For more information on the underlying library this leverages, take a look at ",(0,r.jsx)(t.a,{href:"https://schemathesis.readthedocs.io/en/stable/index.html",children:"the docs"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"events-system-improvement-for-the-new-backend-system",children:"Events System Improvement for the New Backend System"}),"\n",(0,r.jsxs)(t.p,{children:["The events system should now be accessed via a dependency on the exported ",(0,r.jsx)(t.code,{children:"eventsServiceRef"})," instead of the old ",(0,r.jsx)(t.code,{children:"EventBroker"})," and ",(0,r.jsx)(t.code,{children:"EventSubscriber"})," patterns, in the new backend system. Because of this, if you are still on the old backend system, you may note some minor changes in how the GitHub catalog providers are constructed. See the pull request for more details and links to the updated installation instructions."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/24260",children:"#24260"})]}),"\n",(0,r.jsx)(t.h3,{id:"catalog-error-events",children:"Catalog Error Events"}),"\n",(0,r.jsx)(t.p,{children:"Entity processing errors that happen in the catalog used to be sent to the local logger. This led to sometimes large amounts of noise, and the logs often aren\u2019t easy to inspect in production. In this release, they are instead sent to the events system. If you want to retain the logging behavior, you can do so by subscribing to the topic; see the pull request for details."}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/punkle",children:"@punkle"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/23022",children:"#23022"})]}),"\n",(0,r.jsx)(t.h3,{id:"kubernetes-proxy-breaking-change",children:"Kubernetes Proxy breaking change"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"KubernetesProxy"})," now requires the ",(0,r.jsx)(t.code,{children:"DiscoveryService"})," to be passed to its constructor if you are on the old backend system."]}),"\n",(0,r.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,r.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,r.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage's ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.26.0-changelog.md",children:"Changelog"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage ",(0,r.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Sign up for our ",(0,r.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,g(k,y.prototype),k.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var s,o={},a=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=t[s]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===o[s]&&(o[s]=c[s]);return{$$typeof:n,type:e,key:a,ref:i,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,s,o,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+C(c,0):o,x(a)?(s="",null!=e&&(s=e.replace(R,"$&/")+"/"),T(a,t,s,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",x(e))for(var l=0;l<e.length;l++){var u=o+C(i=e[l],l);c+=T(i,t,s,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=T(i=i.value,t,s,u=o+C(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function B(e,t,n){if(null==e)return e;var r=[],s=0;return T(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},O={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:B,forEach:function(e,t,n){B(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return B(e,(function(){t++})),t},toArray:function(e){return B(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=s,t.Profiler=a,t.PureComponent=v,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:s,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(667294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);