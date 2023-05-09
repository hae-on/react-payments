/*! For license information please see 67.69ff8095.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpayment=self.webpackChunkpayment||[]).push([[67],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@remix-run/router/dist/router.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Action;__webpack_require__.d(__webpack_exports__,{Ep:function(){return createPath},J0:function(){return invariant},RQ:function(){return joinPaths},Zn:function(){return stripBasename},Zq:function(){return getPathContributingMatches},aU:function(){return Action},cP:function(){return parsePath},lX:function(){return createBrowserHistory},pC:function(){return resolveTo}}),function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(Action||(Action={}));const PopStateEventType="popstate";function createBrowserHistory(options){return void 0===options&&(options={}),getUrlBasedHistory((function createBrowserLocation(window,globalHistory){let{pathname:pathname,search:search,hash:hash}=window.location;return createLocation("",{pathname:pathname,search:search,hash:hash},globalHistory.state&&globalHistory.state.usr||null,globalHistory.state&&globalHistory.state.key||"default")}),(function createBrowserHref(window,to){return"string"==typeof to?to:createPath(to)}),null,options)}function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function getHistoryState(location,index){return{usr:location.state,key:location.key,idx:index}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?parsePath(to):to,{state:state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function createPath(_ref){let{pathname:pathname="/",search:search="",hash:hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}function getUrlBasedHistory(getLocation,createHref,validateLocation,options){void 0===options&&(options={});let{window:window=document.defaultView,v5Compat:v5Compat=!1}=options,globalHistory=window.history,action=Action.Pop,listener=null,index=getIndex();function getIndex(){return(globalHistory.state||{idx:null}).idx}function handlePop(){action=Action.Pop;let nextIndex=getIndex(),delta=null==nextIndex?null:nextIndex-index;index=nextIndex,listener&&listener({action:action,location:history.location,delta:delta})}function createURL(to){let base="null"!==window.location.origin?window.location.origin:window.location.href,href="string"==typeof to?to:createPath(to);return invariant(base,"No window.location.(origin|href) available to create URL for href: "+href),new URL(href,base)}null==index&&(index=0,globalHistory.replaceState(_extends({},globalHistory.state,{idx:index}),""));let history={get action(){return action},get location(){return getLocation(window,globalHistory)},listen(fn){if(listener)throw new Error("A history only accepts one active listener");return window.addEventListener(PopStateEventType,handlePop),listener=fn,()=>{window.removeEventListener(PopStateEventType,handlePop),listener=null}},createHref(to){return createHref(window,to)},createURL:createURL,encodeLocation(to){let url=createURL(to);return{pathname:url.pathname,search:url.search,hash:url.hash}},push:function push(to,state){action=Action.Push;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex()+1;let historyState=getHistoryState(location,index),url=history.createHref(location);try{globalHistory.pushState(historyState,"",url)}catch(error){window.location.assign(url)}v5Compat&&listener&&listener({action:action,location:history.location,delta:1})},replace:function replace(to,state){action=Action.Replace;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex();let historyState=getHistoryState(location,index),url=history.createHref(location);globalHistory.replaceState(historyState,"",url),v5Compat&&listener&&listener({action:action,location:history.location,delta:0})},go(n){return globalHistory.go(n)}};return history}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(isPathRelative||null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search:search="",hash:hash=""}="string"==typeof to?parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname:pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";class AbortedDeferredError extends Error{}const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;Symbol("deferred")},"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{aD:function(){return chunk_KKE3V3AL.aD}});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./node_modules/react-router-dom/dist/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{VK:function(){return BrowserRouter},rU:function(){return Link}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_remix_run_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function BrowserRouter(_ref){let{basename:basename,children:children,window:window}=_ref,historyRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();null==historyRef.current&&(historyRef.current=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.lX)({window:window,v5Compat:!0}));let history=historyRef.current,[state,setState]=react__WEBPACK_IMPORTED_MODULE_0__.useState({action:history.action,location:history.location});return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>history.listen(setState)),[history]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.F0,{basename:basename,children:children,location:state.location,navigationType:state.action,navigator:history})}const isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function LinkWithRef(_ref4,ref){let absoluteHref,{onClick:onClick,relative:relative,reloadDocument:reloadDocument,replace:replace,state:state,target:target,to:to,preventScrollReset:preventScrollReset}=_ref4,rest=_objectWithoutPropertiesLoose(_ref4,_excluded),{basename:basename}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.Us),isExternal=!1;if("string"==typeof to&&ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,isBrowser)){let currentUrl=new URL(window.location.href),targetUrl=to.startsWith("//")?new URL(currentUrl.protocol+to):new URL(to),path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zn)(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}let href=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.oQ)(to,{relative:relative}),internalOnClick=function useLinkClickHandler(to,_temp){let{target:target,replace:replaceProp,state:state,preventScrollReset:preventScrollReset,relative:relative}=void 0===_temp?{}:_temp,navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.s0)(),location=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.TH)(),path=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.WU)(to,{relative:relative});return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event=>{if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();let replace=void 0!==replaceProp?replaceProp:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Ep)(location)===(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Ep)(path);navigate(to,{replace:replace,state:state,preventScrollReset:preventScrollReset,relative:relative})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative])}(to,{replace:replace,state:state,target:target,preventScrollReset:preventScrollReset,relative:relative});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref:ref,target:target}))}));var DataRouterHook,DataRouterStateHook;(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmitImpl="useSubmitImpl",DataRouterHook.UseFetcher="useFetcher"})(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(DataRouterStateHook||(DataRouterStateHook={}))},"./node_modules/react-router/dist/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{F0:function(){return Router},TH:function(){return useLocation},Us:function(){return NavigationContext},WU:function(){return useResolvedPath},oQ:function(){return useHref},s0:function(){return useNavigate}});var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const is="function"==typeof Object.is?Object.is:function isPolyfill(x,y){return x===y&&(0!==x||1/x==1/y)||x!=x&&y!=y},{useState:useState,useEffect:useEffect,useLayoutEffect:useLayoutEffect,useDebugValue:useDebugValue}=react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2));function checkIfSnapshotChanged(inst){const latestGetSnapshot=inst.getSnapshot,prevValue=inst.value;try{const nextValue=latestGetSnapshot();return!is(prevValue,nextValue)}catch(error){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement,(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;const NavigationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const LocationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const RouteContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({outlet:null,matches:[]});function useHref(to,_temp){let{relative:relative}=void 0===_temp?{}:_temp;useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let{basename:basename,navigator:navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{hash:hash,pathname:pathname,search:search}=useResolvedPath(to,{relative:relative}),joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([basename,pathname])),navigator.createHref({pathname:joinedPathname,search:search,hash:hash})}function useInRouterContext(){return null!=react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext)}function useLocation(){return useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location}function useNavigate(){useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let{basename:basename,navigator:navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{matches:matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zq)(matches).map((match=>match.pathnameBase))),activeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{activeRef.current=!0})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(to,options){if(void 0===options&&(options={}),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pC)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);"/"!==basename&&(path.pathname="/"===path.pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}),[basename,navigator,routePathnamesJson,locationPathname])}function useResolvedPath(to,_temp2){let{relative:relative}=void 0===_temp2?{}:_temp2,{matches:matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zq)(matches).map((match=>match.pathnameBase)));return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pC)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)),[to,routePathnamesJson,locationPathname,relative])}class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.state={location:props.location,error:props.error}}static getDerivedStateFromError(error){return{error:error}}static getDerivedStateFromProps(props,state){return state.location!==props.location?{error:props.error,location:props.location}:{error:props.error||state.error,location:state.location}}componentDidCatch(error,errorInfo){console.error("React Router caught the following error during render",error,errorInfo)}render(){return this.state.error?React.createElement(RouteContext.Provider,{value:this.props.routeContext},React.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}var DataRouterHook,DataRouterStateHook;!function(DataRouterHook){DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator"}(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseBlocker="useBlocker",DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator"}(DataRouterStateHook||(DataRouterStateHook={}));function Router(_ref4){let{basename:basenameProp="/",children:children=null,location:locationProp,navigationType:navigationType=_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.aU.Pop,navigator:navigator,static:staticProp=!1}=_ref4;useInRouterContext()&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({basename:basename,navigator:navigator,static:staticProp})),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.cP)(locationProp));let{pathname:pathname="/",search:search="",hash:hash="",state:state=null,key:key="default"}=locationProp,locationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{let trailingPathname=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zn)(pathname,basename);return null==trailingPathname?null:{location:{pathname:trailingPathname,search:search,hash:hash,state:state,key:key},navigationType:navigationType}}),[basename,pathname,search,hash,state,key,navigationType]);return null==locationContext?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider,{value:navigationContext},react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider,{children:children,value:locationContext}))}var AwaitRenderStatus;!function(AwaitRenderStatus){AwaitRenderStatus[AwaitRenderStatus.pending=0]="pending",AwaitRenderStatus[AwaitRenderStatus.success=1]="success",AwaitRenderStatus[AwaitRenderStatus.error=2]="error"}(AwaitRenderStatus||(AwaitRenderStatus={}));new Promise((()=>{}));class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.state={error:null}}static getDerivedStateFromError(error){return{error:error}}componentDidCatch(error,errorInfo){console.error("<Await> caught the following error during render",error,errorInfo)}render(){let{children:children,errorElement:errorElement,resolve:resolve}=this.props,promise=null,status=AwaitRenderStatus.pending;if(resolve instanceof Promise)if(this.state.error){AwaitRenderStatus.error;let renderError=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(promise,"_tracked",{get:()=>!0}),Object.defineProperty(promise,"_error",{get:()=>renderError})}else resolve._tracked?(resolve,void 0!==promise._error?AwaitRenderStatus.error:void 0!==promise._data?AwaitRenderStatus.success:AwaitRenderStatus.pending):(AwaitRenderStatus.pending,Object.defineProperty(resolve,"_tracked",{get:()=>!0}),resolve.then((data=>Object.defineProperty(resolve,"_data",{get:()=>data})),(error=>Object.defineProperty(resolve,"_error",{get:()=>error}))));else AwaitRenderStatus.success,Promise.resolve(),Object.defineProperty(promise,"_tracked",{get:()=>!0}),Object.defineProperty(promise,"_data",{get:()=>resolve});if(status===AwaitRenderStatus.error&&promise._error instanceof AbortedDeferredError)throw neverSettledPromise;if(status===AwaitRenderStatus.error&&!errorElement)throw promise._error;if(status===AwaitRenderStatus.error)return React.createElement(AwaitContext.Provider,{value:promise,children:errorElement});if(status===AwaitRenderStatus.success)return React.createElement(AwaitContext.Provider,{value:promise,children:children});throw promise}}}}]);