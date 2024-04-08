import './polyfills.server.mjs';
import{c as F,g as h,j as D,k as I,l as N}from"./chunk-T23I2X6Z.mjs";import{f as k,g as R,j as S}from"./chunk-SF5PYR6V.mjs";import{d as w}from"./chunk-XANWRWW7.mjs";import{Ja as M,Kb as A,La as P,Ma as b,O as E,Oa as O,Ra as _,T as c,Y as C,cb as s,da as y,db as a,eb as u,ga as v,la as x,ob as d,rb as m}from"./chunk-5AVTVMVE.mjs";var j=(()=>{let e=class e{constructor(){this.title="guru"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,template:function(r,i){r&1&&u(0,"router-outlet")},dependencies:[h]});let n=e;return n})();var g=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-main"]],standalone:!0,features:[m],decls:21,vars:0,consts:[[1,"flex-container"],[1,"header"],["routerLink","./",1,"logo"],["src","/assets/image/logo.png","width","140","height","60"],[1,"menu"],["routerLink","./",1,"menus"],["routerLink","./product",1,"menus"],["routerLink","./question",1,"menus"],["routerLink","./about",1,"menus"],["routerLink","./contact",1,"menus"],[1,"login"],["href","http://gps.gpsguru.co.th/","target","_blank"],[1,"section"],[1,"footer"]],template:function(r,i){r&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),u(3,"img",3),a(),s(4,"div",4)(5,"div",5),d(6,"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01"),a(),s(7,"div",6),d(8,"\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),a(),s(9,"div",7),d(10,"\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22"),a(),s(11,"div",8),d(12,"\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32"),a(),s(13,"div",9),d(14,"\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32"),a()(),s(15,"div",10)(16,"a",11),d(17," \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A "),a()()(),s(18,"div",12),u(19,"router-outlet"),a(),u(20,"div",13),a())},dependencies:[h,N,D],styles:[".flex-container[_ngcontent-%COMP%]{background-image:url(/assets/image/Trailer_White_0.jpg);height:100vh;background-position:center;background-repeat:no-repeat;background-size:cover}.flex-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:#585858;width:100%;height:80px;background-color:#ffffffb3;box-shadow:#e6e6e6 0 -5px 10px 10px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.flex-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:100%;width:20%;display:flex;justify-content:center;align-items:center}.flex-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{height:100%;width:60%;font-size:15px;display:flex;justify-content:center;align-items:center}.flex-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;cursor:pointer}.flex-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]:hover{color:#787878}.flex-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{height:100%;width:20%;display:flex;justify-content:center;align-items:center}.flex-container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 80px)}.flex-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;height:300px;background-color:#323232}"]});let n=e;return n})();var L=[{path:"",component:g,children:[{path:"",loadComponent:()=>import("./chunk-AUYFCBOP.mjs").then(n=>n.HomeComponent)},{path:"product",loadComponent:()=>import("./chunk-R7NYNDWB.mjs").then(n=>n.ProductComponent)},{path:"promotion",loadComponent:()=>import("./chunk-QPQM7ZS3.mjs").then(n=>n.PromotionComponent)},{path:"about",loadComponent:()=>import("./chunk-LVOO6XWI.mjs").then(n=>n.AboutComponent)},{path:"contact",loadComponent:()=>import("./chunk-U6DTQTBF.mjs").then(n=>n.ContactComponent)},{path:"question",loadComponent:()=>import("./chunk-UDHWGPTM.mjs").then(n=>n.QuestionComponent)},{path:"service",loadComponent:()=>import("./chunk-IV4MVK2W.mjs").then(n=>n.ServiceComponent)},{path:"work",loadComponent:()=>import("./chunk-T7DRY6CR.mjs").then(n=>n.WorkComponent)}]},{path:"**",component:g}];var q="@",H=(()=>{let e=class e{constructor(o,r,i,l,p){this.doc=o,this.delegate=r,this.zone=i,this.animationType=l,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=v(P,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-4PE54LF2.mjs")).catch(r=>{throw new E(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let l=new i(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(o,r){let i=this.delegate.createRenderer(o,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let l=new f(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let W=p.createRenderer(o,r);l.use(W)}).catch(p=>{l.use(i)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){M()},e.\u0275prov=C({token:e,factory:e.\u0275fac});let n=e;return n})(),f=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(q)}};function B(n="animations"){return O("NgAsyncAnimations"),x([{provide:b,useFactory:(e,t,o)=>new H(e,t,o,n),deps:[w,k,_]},{provide:y,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var z={providers:[I(L),S(),B()]};var U={providers:[F()]},V=A(z,U);var Q=()=>R(j,V),Ce=Q;export{Ce as a};