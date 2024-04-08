import{a as G,b as Oe,c as Ie,d as y,j as Se,k as ke,m as q,o as Le}from"./chunk-QSRUTVTV.js";import{$ as f,A as ue,Aa as ve,Ab as Pe,Ba as we,Bb as Ne,Ca as Ee,Da as Te,Ea as Re,Fa as v,Ha as O,Na as be,Pa as Me,Q as he,R as g,Sa as D,U as N,_ as fe,a as A,b as ce,c as le,ca as E,da as z,ea as pe,fa as T,ha as $,ia as h,ja as R,ka as C,m as V,na as K,oa as ye,q as P,va as X,wa as b,wb as De,xa as M,xb as J,y as de,ya as me,yb as Ae,za as ge}from"./chunk-OMAJML26.js";var Z=class{};var w=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(s=>{let n=s.indexOf(":");if(n>0){let r=s.slice(0,n),o=r.toLowerCase(),i=s.slice(n+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){let s=new t;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){let s=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,s);let r=(e.op==="a"?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":let o=e.value;if(!o)this.headers.delete(s),this.normalizedNames.delete(s);else{let i=this.headers.get(s);if(!i)return;i=i.filter(a=>o.indexOf(a)===-1),i.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,i)}break}}setHeaderEntries(e,s){let n=(Array.isArray(s)?s:[s]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}};var Y=class{encodeKey(e){return xe(e)}encodeValue(e){return xe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function dt(t,e){let s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[i,a]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],l=s.get(i)||[];l.push(a),s.set(i,l)}),s}var ut=/%(\d[a-f0-9])/gi,ht={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function xe(t){return encodeURIComponent(t).replace(ut,(e,s)=>ht[s]??e)}function j(t){return`${t}`}var m=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new Y,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=dt(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{let n=e.fromObject[s],r=Array.isArray(n)?n.map(j):[j(n)];this.map.set(s,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){let s=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(o=>{s.push({param:n,value:o,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let s=this.encoder.encodeKey(e);return this.map.get(e).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let s=new t({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let s=(e.op==="a"?this.map.get(e.param):void 0)||[];s.push(j(e.value)),this.map.set(e.param,s);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(j(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Q=class{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function ft(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ce(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function je(t){return typeof Blob<"u"&&t instanceof Blob}function Fe(t){return typeof FormData<"u"&&t instanceof FormData}function pt(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var I=class t{constructor(e,s,n,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(ft(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new w,this.context??=new Q,!this.params)this.params=new m,this.urlWithParams=s;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=s;else{let a=s.indexOf("?"),l=a===-1?"?":a<s.length-1?"&":"";this.urlWithParams=s+l+i}}}serializeBody(){return this.body===null?null:Ce(this.body)||je(this.body)||Fe(this.body)||pt(this.body)||typeof this.body=="string"?this.body:this.body instanceof m?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Fe(this.body)?null:je(this.body)?this.body.type||null:Ce(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof m?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let s=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,o=e.body!==void 0?e.body:this.body,i=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,a=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,l=e.headers||this.headers,c=e.params||this.params,u=e.context??this.context;return e.setHeaders!==void 0&&(l=Object.keys(e.setHeaders).reduce((d,p)=>d.set(p,e.setHeaders[p]),l)),e.setParams&&(c=Object.keys(e.setParams).reduce((d,p)=>d.set(p,e.setParams[p]),c)),new t(s,n,o,{params:c,headers:l,context:u,reportProgress:a,responseType:r,withCredentials:i})}},Ke=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Ke||{}),H=class{constructor(e,s=Xe.Ok,n="OK"){this.headers=e.headers||new w,this.status=e.status!==void 0?e.status:s,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var S=class t extends H{constructor(e={}){super(e),this.type=Ke.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var Xe=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(Xe||{});function W(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var on=(()=>{let e=class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof I)i=n;else{let c;o.headers instanceof w?c=o.headers:c=new w(o.headers);let u;o.params&&(o.params instanceof m?u=o.params:u=new m({fromObject:o.params})),i=new I(n,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let a=V(i).pipe(ue(c=>this.handler.handle(c)));if(n instanceof I||o.observe==="events")return a;let l=a.pipe(de(c=>c instanceof S));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe(P(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(P(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(P(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(P(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new m().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,W(o,r))}post(n,r,o={}){return this.request("POST",n,W(o,r))}put(n,r,o={}){return this.request("PUT",n,W(o,r))}};e.\u0275fac=function(r){return new(r||e)(h(Z))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})();var yt=new E("");var Ue="b",_e="h",Be="s",Ve="st",ze="u",$e="rt",F=new E(""),mt=["GET","HEAD"];function gt(t,e){let u=R(F),{isCacheActive:s}=u,n=le(u,["isCacheActive"]),{transferCache:r,method:o}=t;if(!s||o==="POST"&&!n.includePostRequests&&!r||o!=="POST"&&!mt.includes(o)||r===!1||n.filter?.(t)===!1)return e(t);let i=R(C),a=wt(t),l=i.get(a,null),c=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(c=r.includeHeaders),l){let{[Ue]:d,[$e]:p,[_e]:et,[Be]:tt,[Ve]:nt,[ze]:rt}=l,B=d;switch(p){case"arraybuffer":B=new TextEncoder().encode(d).buffer;break;case"blob":B=new Blob([d]);break}let st=new w(et);return V(new S({body:B,headers:st,status:tt,statusText:nt,url:rt}))}return e(t).pipe(he(d=>{d instanceof S&&i.set(a,{[Ue]:d.body,[_e]:vt(d.headers,c),[Be]:d.status,[Ve]:d.statusText,[ze]:d.url||"",[$e]:t.responseType})}))}function vt(t,e){if(!e)return{};let s={};for(let n of e){let r=t.getAll(n);r!==null&&(s[n]=r)}return s}function wt(t){let{params:e,method:s,responseType:n,url:r,body:o}=t,i=e.keys().sort().map(u=>`${u}=${e.getAll(u)}`).join("&"),l=[s,n,r,typeof o=="string"?o:"",i].join("|"),c=Et(l);return c}function Et(t){let e=0;for(let s of t)e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Je(t){return[{provide:F,useFactory:()=>(Me("NgHttpTransferCache"),A({isCacheActive:!0},t))},{provide:yt,useValue:gt,multi:!0,deps:[C,F]},{provide:De,multi:!0,useFactory:()=>{let e=R(J),s=R(F);return()=>{Ae(e).then(()=>{s.isCacheActive=!1})}}}]}var ne=class extends Ie{constructor(){super(...arguments),this.supportsDOMEvents=!0}},re=class t extends ne{static makeCurrent(){Oe(new t)}onAndCancel(e,s,n){return e.addEventListener(s,n),()=>{e.removeEventListener(s,n)}}dispatchEvent(e,s){e.dispatchEvent(s)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,s){return s=s||this.getDefaultDocument(),s.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,s){return s==="window"?window:s==="document"?e:s==="body"?e.body:null}getBaseHref(e){let s=Rt();return s==null?null:bt(s)}resetBaseElement(){k=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Se(document.cookie,e)}},k=null;function Rt(){return k=k||document.querySelector("base"),k?k.getAttribute("href"):null}function bt(t){return new URL(t,document.baseURI).pathname}var Mt=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),se=new E(""),Ze=(()=>{let e=class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new g(5101,!1);return this._eventNameToPlugin.set(n,r),r}};e.\u0275fac=function(r){return new(r||e)(h(se),h(D))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),U=class{constructor(e){this._doc=e}},ee="ng-app-id",Ye=(()=>{let e=class e{constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=q(i),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(o=>o.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${ee}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(o=>{o.textContent!=null&&r.set(o.textContent,o)}),r}return null}changeUsageCount(n,r){let o=this.styleRef;if(o.has(n)){let i=o.get(n);return i.usage+=r,i.usage}return o.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let o=this.styleNodesInDOM,i=o?.get(r);if(i?.parentNode===n)return o.delete(r),i.removeAttribute(ee),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(ee,this.appId),n.appendChild(a),a}}addStyleToHost(n,r){let o=this.getStyleElement(n,r),i=this.styleRef,a=i.get(r)?.elements;a?a.push(o):i.set(r,{elements:[o],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(h(y),h(z),h($,8),h(T))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),te={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},ae=/%COMP%/g,Qe="%COMP%",Dt=`_nghost-${Qe}`,At=`_ngcontent-${Qe}`,Pt=!0,Nt=new E("",{providedIn:"root",factory:()=>Pt});function Ot(t){return At.replace(ae,t)}function It(t){return Dt.replace(ae,t)}function He(t,e){return e.map(s=>s.replace(ae,t))}var Ge=(()=>{let e=class e{constructor(n,r,o,i,a,l,c,u=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=l,this.ngZone=c,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=q(l),this.defaultRenderer=new L(n,a,c,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===N.ShadowDom&&(r=ce(A({},r),{encapsulation:N.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof _?o.applyToHost(n):o instanceof x&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let a=this.doc,l=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(r.encapsulation){case N.Emulated:i=new _(c,u,r,this.appId,d,a,l,p);break;case N.ShadowDom:return new oe(c,u,n,r,a,l,this.nonce,p);default:i=new x(c,u,r,d,a,l,p);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(h(Ze),h(Ye),h(z),h(Nt),h(y),h(T),h(D),h($))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),L=class{constructor(e,s,n,r){this.eventManager=e,this.doc=s,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,s){return s?this.doc.createElementNS(te[s]||s,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,s){(qe(e)?e.content:e).appendChild(s)}insertBefore(e,s,n){e&&(qe(e)?e.content:e).insertBefore(s,n)}removeChild(e,s){e&&e.removeChild(s)}selectRootElement(e,s){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new g(-5104,!1);return s||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,s,n,r){if(r){s=r+":"+s;let o=te[r];o?e.setAttributeNS(o,s,n):e.setAttribute(s,n)}else e.setAttribute(s,n)}removeAttribute(e,s,n){if(n){let r=te[n];r?e.removeAttributeNS(r,s):e.removeAttribute(`${n}:${s}`)}else e.removeAttribute(s)}addClass(e,s){e.classList.add(s)}removeClass(e,s){e.classList.remove(s)}setStyle(e,s,n,r){r&(O.DashCase|O.Important)?e.style.setProperty(s,n,r&O.Important?"important":""):e.style[s]=n}removeStyle(e,s,n){n&O.DashCase?e.style.removeProperty(s):e.style[s]=""}setProperty(e,s,n){e!=null&&(e[s]=n)}setValue(e,s){e.nodeValue=s}listen(e,s,n){if(typeof e=="string"&&(e=G().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${s}`);return this.eventManager.addEventListener(e,s,this.decoratePreventDefault(n))}decoratePreventDefault(e){return s=>{if(s==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(s)):e(s))===!1&&s.preventDefault()}}};function qe(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var oe=class extends L{constructor(e,s,n,r,o,i,a,l){super(e,o,i,l),this.sharedStylesHost=s,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=He(r.id,r.styles);for(let u of c){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,s){return super.appendChild(this.nodeOrShadowRoot(e),s)}insertBefore(e,s,n){return super.insertBefore(this.nodeOrShadowRoot(e),s,n)}removeChild(e,s){return super.removeChild(this.nodeOrShadowRoot(e),s)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},x=class extends L{constructor(e,s,n,r,o,i,a,l){super(e,o,i,a),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=r,this.styles=l?He(l,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},_=class extends x{constructor(e,s,n,r,o,i,a,l){let c=r+"-"+n.id;super(e,s,n,o,i,a,l,c),this.contentAttr=Ot(c),this.hostAttr=It(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,s){let n=super.createElement(e,s);return super.setAttribute(n,this.contentAttr,""),n}},St=(()=>{let e=class e extends U{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}};e.\u0275fac=function(r){return new(r||e)(h(y))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),We=["alt","control","meta","shift"],kt={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Lt={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},xt=(()=>{let e=class e extends U{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o){let i=e.parseEventName(r),a=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>G().onAndCancel(n,i.domEventName,a))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),a="",l=r.indexOf("code");if(l>-1&&(r.splice(l,1),a="code."),We.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=a,c}static matchEventFullKeyCode(n,r){let o=kt[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),We.forEach(a=>{if(a!==o){let l=Lt[a];l(n)&&(i+=a+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}};e.\u0275fac=function(r){return new(r||e)(h(y))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})();function In(t,e){return Pe(A({rootComponent:t},Ct(e)))}function Ct(t){return{appProviders:[...Bt,...t?.providers??[]],platformProviders:_t}}function jt(){re.makeCurrent()}function Ft(){return new X}function Ut(){return fe(document),document}var _t=[{provide:T,useValue:ke},{provide:pe,useValue:jt,multi:!0},{provide:y,useFactory:Ut,deps:[]}];var Bt=[{provide:ye,useValue:"root"},{provide:X,useFactory:Ft,deps:[]},{provide:se,useClass:St,multi:!0,deps:[y,D,T]},{provide:se,useClass:xt,multi:!0,deps:[y]},Ge,Ye,Ze,{provide:be,useExisting:Ge},{provide:Le,useClass:Mt,deps:[]},[]];var Sn=(()=>{let e=class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};e.\u0275fac=function(r){return new(r||e)(h(y))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=f({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=h(zt),o},providedIn:"root"});let t=e;return t})(),zt=(()=>{let e=class e extends Vt{constructor(n){super(),this._doc=n}sanitize(n,r){if(r==null)return null;switch(n){case v.NONE:return r;case v.HTML:return M(r,"HTML")?b(r):Re(this._doc,String(r)).toString();case v.STYLE:return M(r,"Style")?b(r):r;case v.SCRIPT:if(M(r,"Script"))return b(r);throw new g(5200,!1);case v.URL:return M(r,"URL")?b(r):Te(String(r));case v.RESOURCE_URL:if(M(r,"ResourceURL"))return b(r);throw new g(5201,!1);default:throw new g(5202,!1)}}bypassSecurityTrustHtml(n){return me(n)}bypassSecurityTrustStyle(n){return ge(n)}bypassSecurityTrustScript(n){return ve(n)}bypassSecurityTrustUrl(n){return we(n)}bypassSecurityTrustResourceUrl(n){return Ee(n)}};e.\u0275fac=function(r){return new(r||e)(h(y))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ie=function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t}(ie||{});function kn(...t){let e=[],s=new Set,n=s.has(ie.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:o}of t)s.add(o),r.length&&e.push(r);return K([[],Ne(),s.has(ie.NoHttpTransferCache)||n?[]:Je({}),e])}export{on as a,Ge as b,In as c,Sn as d,Vt as e,kn as f};