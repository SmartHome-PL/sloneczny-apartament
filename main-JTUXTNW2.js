import{a as De,j as me,k as Le,l as re,m as se,n as Ne}from"./chunk-JOLAJL3G.js";import{$ as l,Aa as we,Ab as ne,Bb as j,C as v,Cb as Be,D as y,Db as oe,Eb as He,Fb as F,Ga as q,Ha as D,I as x,Ia as G,Ja as K,K as k,La as Z,M as ce,Ma as I,Na as Se,O as m,Oa as xe,P as r,Pa as Oe,Qa as Pe,Ra as ke,Sa as Te,Ta as Re,V as d,Va as Ee,Wa as J,Xa as le,Y as z,Z as _,_ as c,aa as M,ba as Y,ca as Q,ea as C,f as X,ha as p,ia as h,la as ye,ma as u,nb as ue,oa as O,ob as ee,pb as L,qb as de,ra as Ce,rb as te,sa as Ie,sb as je,t as E,ta as T,tb as pe,u as w,ua as R,v as Me,w as be,wa as $,wb as Fe,x as ve,xa as U,xb as Ae,y as f,yb as P,z as S,za as W,zb as ie}from"./chunk-ANEDNGXR.js";var it=[{path:"",loadChildren:()=>import("./chunk-CFHNGDP5.js").then(t=>t.PagesModule)}],Ve=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=w({imports:[le.forRoot(it),le]});let t=e;return t})();var A=(()=>{let e=class e{constructor(i){this.platformId=i}setLanguage(i){I(this.platformId)&&localStorage.setItem("preferredLanguage",i)}getLanguage(){return I(this.platformId)?localStorage.getItem("preferredLanguage"):null}};e.\u0275fac=function(n){return new(n||e)(be(x))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ae=class{constructor(e){this.http=e}getTranslation(e){return this.http.get(`./assets/i18n/${e}.json`)}};var B=(()=>{let e=class e{constructor(){this.isOpen=new X(!1)}get isOpen$(){return this.isOpen.asObservable()}open(){this.isOpen.next(!0)}close(){this.isOpen.next(!1)}toggle(){this.isOpen.next(!this.isOpen.value)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var H=(()=>{let e=class e{constructor(){this.isOpen=new X(!1)}get isOpen$(){return this.isOpen.asObservable()}open(){this.isOpen.next(!0)}close(){this.isOpen.next(!1)}toggle(){this.isOpen.next(!this.isOpen.value)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function nt(t,e){if(t&1){let s=C();c(0,"button",2),p("click",function(){let o=v(s).$implicit,a=h();return y(a.switchLanguage(o.path))}),u(1),l()}if(t&2){let s=e.$implicit;d("disabled",s.disabled)("color",s.disabled?"disabled":"enabled"),m(),O(" ",s.icon," ")}}var ot=(t,e,s)=>({open:t,mobile:e,"mobile.open":s}),$e=(()=>{let e=class e{constructor(i,n,o,a,g,N){this.translate=i,this.languageService=n,this.sideMenuService=o,this.jsonLoaderService=a,this.languageMenuService=g,this.platformId=N,this.isMobile=!0,this.isOpen=!1,this.isFirstLoadGuard=!0,this.languageMenuItems=[],this.isOpenSubscription=this.languageMenuService.isOpen$.subscribe(V=>{this.isOpen=V})}ngOnInit(){this.jsonLoaderService.loadData("assets/data/language-menu-items.json").subscribe(i=>{this.languageMenuItems=i})}ngOnDestroy(){this.isOpenSubscription&&this.isOpenSubscription.unsubscribe()}onResize(i){this.languageMenuService.close()}switchLanguage(i){this.languageService.setLanguage(i),this.translate.use(i),this.sideMenuService.close(),this.languageMenuService.close()}toggleLanguageMenu(){this.languageMenuService.toggle()}closeLanguageMenu(){this.languageMenuService.close()}openLanguageMenu(){this.languageMenuService.open()}};e.\u0275fac=function(n){return new(n||e)(r(P),r(A),r(B),r(F),r(H),r(x))},e.\u0275cmp=f({type:e,selectors:[["app-language-menu"]],hostBindings:function(n,o){n&1&&p("resize",function(g){return o.onResize(g)},!1,k)},inputs:{triggeringButton:"triggeringButton",isMobile:"isMobile"},decls:2,vars:6,consts:[[1,"language-menu",3,"ngClass"],["mat-raised-button","",3,"disabled","color","click",4,"ngFor","ngForOf"],["mat-raised-button","",3,"disabled","color","click"]],template:function(n,o){n&1&&(c(0,"div",0),_(1,nt,2,3,"button",1),l()),n&2&&(d("ngClass",Ie(2,ot,o.isOpen,o.isMobile,o.isMobile&&o.isOpen)),m(),d("ngForOf",o.languageMenuItems))},dependencies:[q,D,j],styles:[".language-menu[_ngcontent-%COMP%]{top:-100%;right:.75rem;position:fixed;background-color:#6e9491;border-radius:0 0 .25rem .25rem;box-shadow:0 4px 6px #0000001a;z-index:20;transition:.5s;padding-bottom:.25rem;padding-right:.25rem;width:12.75rem}.language-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:.25rem;margin-left:.25rem;width:4rem;height:4rem;box-sizing:border-box}.language-menu[_ngcontent-%COMP%]   .mat-disabled[_ngcontent-%COMP%]{background-color:#f6c5a6;color:#fffeee}.language-menu[_ngcontent-%COMP%]   .mat-enabled[_ngcontent-%COMP%]{background-color:#ed8949;color:#fffeee}.language-menu.open[_ngcontent-%COMP%]{background-color:#6e9491;border-radius:0 0 .25rem .25rem;top:4rem;right:.75rem}.language-menu.mobile[_ngcontent-%COMP%]{background-color:#92afad;border-radius:0 0 0 .25rem;top:4rem;right:-13rem}.language-menu.mobile.open[_ngcontent-%COMP%]{background-color:#92afad;border-radius:0 0 0 .25rem;top:4rem;right:13rem}@media (max-width: 600px){.language-menu.mobile[_ngcontent-%COMP%]{right:-13rem}.language-menu.mobile.open[_ngcontent-%COMP%]{right:8.75rem}}"]});let t=e;return t})();var ct=["languageMenuComponent"];function lt(t,e){if(t&1){let s=C();Y(0),c(1,"button",10),p("click",function(){let o=v(s).$implicit,a=h(2);return y(a.naviageTo(o.path))}),u(2),T(3,"translate"),l(),Q()}if(t&2){let s=e.$implicit;m(2),O(" ",R(3,1,s.title)," ")}}function mt(t,e){if(t&1){let s=C();Y(0),_(1,lt,4,3,"ng-container",8),c(2,"button",9),p("click",function(){v(s);let n=h();return y(n.toggleLanguageMenu())}),u(3),l(),Q()}if(t&2){let s=h();m(),d("ngForOf",s.menuItems),m(2),O(" ",s.getLanguage()," ")}}function ut(t,e){t&1&&(c(0,"mat-icon"),u(1," close "),l())}function dt(t,e){t&1&&(c(0,"mat-icon"),u(1,"menu"),l())}function pt(t,e){if(t&1){let s=C();c(0,"button",10),p("click",function(){v(s);let n=h();return y(n.toggleSideMenu())}),_(1,ut,2,0,"mat-icon",11),T(2,"async"),_(3,dt,2,0,"ng-template",null,12,we),l()}if(t&2){let s=ye(4),i=h();m(),d("ngIf",R(2,2,i.sideMenuService.isOpen$))("ngIfElse",s)}}var We=(()=>{let e=class e{constructor(i,n,o,a,g,N,V){this.router=i,this.jsonLoaderService=n,this.translate=o,this.sideMenuService=a,this.languageMenuService=g,this.platformId=N,this.elementRef=V,this.menuItems=[],this.isMobile=!0,this.isOpenLanguageMenu=!1,this.lastScrollTop=0,this.scrollDownStart=0,this.isOpenLanguageMenuSubscription=this.languageMenuService.isOpen$.subscribe(tt=>{this.isOpenLanguageMenu=tt})}ngOnInit(){this.setIsMobile(),this.jsonLoaderService.loadData("assets/data/top-menu-items.json").subscribe(i=>{this.menuItems=i}),I(this.platformId)&&(this.triggeringButton=document.querySelector("button[aria-expanded]")),I(this.platformId)&&document.addEventListener("click",this.handleClickOutside.bind(this),!0)}ngOnDestroy(){I(this.platformId)&&document.removeEventListener("click",this.handleClickOutside.bind(this),!0)}onScroll(){let i=window.scrollY,n=document.querySelector(".toolbar");n&&(i>this.lastScrollTop&&i>64?n.style.top="-4rem":n.style.top="0"),this.lastScrollTop=i}onResize(i){this.setIsMobile(),this.sideMenuService.close()}setIsMobile(){typeof window<"u"&&(window.innerWidth>800?this.isMobile=!1:this.isMobile=!0)}toggleSideMenu(){this.isOpenLanguageMenu&&this.languageMenuService.close(),this.sideMenuService.toggle()}naviageTo(i){this.router.navigate([i])}getLanguage(){return this.translate.currentLang==="en"?"\u{1F1EC}\u{1F1E7}":"\u{1F1F5}\u{1F1F1}"}toggleLanguageMenu(){this.languageMenuService.toggle()}handleClickOutside(i){let n=document.getElementById("languageToggleButton");if(n&&i.target instanceof Node&&n.contains(i.target))return;this.languageMenuComponentRef&&!this.languageMenuComponentRef.element.nativeElement.contains(i.target)&&this.languageMenuService.close()}};e.\u0275fac=function(n){return new(n||e)(r(J),r(F),r(P),r(B),r(H),r(x),r(ce))},e.\u0275cmp=f({type:e,selectors:[["app-top-menu"]],viewQuery:function(n,o){if(n&1&&U(ct,5,z),n&2){let a;$(a=W())&&(o.languageMenuComponentRef=a.first)}},hostBindings:function(n,o){n&1&&p("scroll",function(g){return o.onScroll(g)},!1,k)("resize",function(g){return o.onResize(g)},!1,k)},decls:13,vars:4,consts:[[1,"toolbar"],[1,"logo-spacer"],[1,"menu-spacer"],[4,"ngIf"],["mat-button","",3,"click",4,"ngIf"],[3,"triggeringButton","isMobile"],["languageMenuComponent",""],[1,"toolbar-placeholder"],[4,"ngFor","ngForOf"],["mat-button","","id","languageToggleButton",3,"click"],["mat-button","",3,"click"],[4,"ngIf","ngIfElse"],["showMenuIcon",""]],template:function(n,o){n&1&&(c(0,"mat-toolbar",0)(1,"mat-toolbar-row")(2,"mat-icon"),u(3,"dashboard"),l(),M(4,"span",1),c(5,"span"),u(6,"S\u0142oneczny Apartament"),l(),M(7,"span",2),_(8,mt,4,2,"ng-container",3)(9,pt,5,4,"button",4),l()(),M(10,"app-language-menu",5,6)(12,"div",7)),n&2&&(m(8),d("ngIf",!o.isMobile),m(),d("ngIf",o.isMobile),m(),d("triggeringButton",o.triggeringButton)("isMobile",o.isMobile))},dependencies:[D,G,se,re,oe,j,$e,K,ie],styles:[".toolbar-placeholder[_ngcontent-%COMP%]{height:4rem}mat-toolbar[_ngcontent-%COMP%]{height:4rem!important;position:fixed;top:0;left:0;right:0;transition:top .3s;z-index:1000;background-color:#374b4a;color:#fff;min-width:350px}mat-toolbar[_ngcontent-%COMP%]   .logo-spacer[_ngcontent-%COMP%]{flex:0 1 1rem}mat-toolbar[_ngcontent-%COMP%]   .menu-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:100%}mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;transform:scale(2);padding-left:.25rem}@media (max-width: 599px){mat-toolbar[_ngcontent-%COMP%]{padding-top:.25rem}mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:calc(100% + .25rem)}}.side-menu[_ngcontent-%COMP%]{width:13rem;position:fixed;right:-13rem;top:4rem;height:100vh;background-color:#323232;z-index:100;overflow-x:hidden;transition:.5s}.side-menu[_ngcontent-%COMP%]   button.language[_ngcontent-%COMP%]{margin:.25rem 0rem 0rem .25rem;width:4rem;height:4rem}.side-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:.25rem;width:calc(100% - .5rem);height:4rem}.side-menu.open[_ngcontent-%COMP%]{right:0}"]});let t=e;return t})();var ht=["languageMenuComponent"];function ft(t,e){if(t&1){let s=C();c(0,"div",4),p("click",function(){v(s);let n=h();return y(n.closeSideMenu())}),c(1,"mat-icon"),u(2,"dashboard"),l()()}}function _t(t,e){if(t&1){let s=C();Y(0),c(1,"button",5),p("click",function(){let o=v(s).$implicit,a=h();return y(a.naviageTo(o.path))}),u(2),T(3,"translate"),l(),Q()}if(t&2){let s=e.$implicit;m(2),O(" ",R(3,1,s.title)," ")}}var Mt=t=>({open:t}),Xe=(()=>{let e=class e{constructor(i,n,o,a,g,N,V){this.router=i,this.jsonLoaderService=n,this.translate=o,this.languageService=a,this.sideMenuService=g,this.languageMenuService=N,this.platformId=V,this.isSideMenuOpen=!1,this.menuItems=[],this.isMobile=!0,o.setDefaultLang("en"),o.use("en")}ngOnInit(){this.setIsMobile(),this.jsonLoaderService.loadData("assets/data/top-menu-items.json").subscribe(i=>{this.menuItems=i}),I(this.platformId)&&(this.triggeringButton=document.querySelector("button[aria-expanded]"))}ngAfterViewInit(){I(this.platformId)&&setTimeout(()=>{},0)}onResize(i){this.setIsMobile()}setIsMobile(){typeof window<"u"&&(window.innerWidth>800?this.isMobile=!1:this.isMobile=!0)}closeSideMenu(){this.languageMenuService.close(),this.sideMenuService.close()}naviageTo(i){this.closeSideMenu(),this.router.navigate([i])}switchLanguage(i){this.closeSideMenu(),this.languageService.setLanguage(i),this.translate.use(i)}getLanguage(){return this.translate.currentLang==="en"?"\u{1F1EC}\u{1F1E7}":"\u{1F1F5}\u{1F1F1}"}toggleLanguageMenu(){this.languageMenuService.toggle()}handleClickOutside(i){let n=document.getElementById("languageToggleButton");if(n&&i.target instanceof Node&&n.contains(i.target))return;this.languageMenuComponentRef&&!this.languageMenuComponentRef.element.nativeElement.contains(i.target)&&this.languageMenuService.close()}};e.\u0275fac=function(n){return new(n||e)(r(J),r(F),r(P),r(A),r(B),r(H),r(x))},e.\u0275cmp=f({type:e,selectors:[["app-side-menu"]],viewQuery:function(n,o){if(n&1&&U(ht,5,z),n&2){let a;$(a=W())&&(o.languageMenuComponentRef=a.first)}},hostBindings:function(n,o){n&1&&p("resize",function(g){return o.onResize(g)},!1,k)},decls:7,vars:10,consts:[["class","overlay",3,"click",4,"ngIf"],[1,"side-menu",3,"ngClass"],["mat-button","","id","languageToggleButton",1,"language",3,"click"],[4,"ngFor","ngForOf"],[1,"overlay",3,"click"],["mat-raised-button","",3,"click"]],template:function(n,o){n&1&&(_(0,ft,3,0,"div",0),T(1,"async"),c(2,"div",1),T(3,"async"),c(4,"button",2),p("click",function(){return o.toggleLanguageMenu()}),u(5),l(),_(6,_t,4,3,"ng-container",3),l()),n&2&&(d("ngIf",R(1,4,o.sideMenuService.isOpen$)),m(2),d("ngClass",Ce(8,Mt,R(3,6,o.sideMenuService.isOpen$))),m(3),O(" ",o.getLanguage()," "),m(),d("ngForOf",o.menuItems))},dependencies:[q,D,G,oe,j,K,ie],styles:[".side-menu[_ngcontent-%COMP%]{width:13rem;position:fixed;right:-13rem;top:4rem;height:100vh;background-color:#6e9491;z-index:100;overflow-x:hidden;transition:.5s}.side-menu[_ngcontent-%COMP%]   button.language[_ngcontent-%COMP%]{margin:.25rem 0rem 0rem .25rem;width:4rem;height:4rem}.side-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:.25rem;width:calc(100% - .5rem);height:4rem;background-color:#ed8949;color:#fffeee}.side-menu.open[_ngcontent-%COMP%]{right:0}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;z-index:10}.overlay[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:fixed;transform:scale(6);color:#425a58bf;top:calc(50% + 2rem);left:calc(50% - 7.5rem)}@media (max-width: 600px){.side-menu[_ngcontent-%COMP%]{width:8.75rem;right:-8.75rem}.side-menu.open[_ngcontent-%COMP%]{right:0}.overlay[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:calc(50% - 5.375rem)}}"]});let t=e;return t})();var qe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["app-footer"]],decls:10,vars:0,consts:[[1,"app-creator"],[1,"split-text"],["href","https://www.facebook.com/SmartHomePoland","target","_blank","rel","noopener noreferrer",1,"company-link","split-text"],[1,"footer-spacer"],[1,"app-version"]],template:function(n,o){n&1&&(c(0,"mat-toolbar")(1,"mat-toolbar-row")(2,"div",0)(3,"span",1),u(4," App designed by "),l(),c(5,"a",2),u(6,"SmartHome"),l()(),M(7,"span",3),c(8,"span",4),u(9,"SimpleApart v.0.0.1 alpha"),l()()())},dependencies:[se,re],styles:['@charset "UTF-8";mat-toolbar[_ngcontent-%COMP%]{width:100%;height:4rem;z-index:100;font-size:.75rem;font-weight:400;background-color:#374b4a;color:#fff;min-width:350px}mat-toolbar[_ngcontent-%COMP%]   .footer-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]   .company-link[_ngcontent-%COMP%]{color:#fff}@media (max-width: 599px){mat-toolbar[_ngcontent-%COMP%]   .app-creator[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:1.25rem}mat-toolbar[_ngcontent-%COMP%]   .app-creator[_ngcontent-%COMP%]   .split-text[_ngcontent-%COMP%]{margin-top:-1rem}mat-toolbar[_ngcontent-%COMP%]   .app-version[_ngcontent-%COMP%]{margin-top:.25rem}}.toolbar-placeholder[_ngcontent-%COMP%]{height:4rem}']});let t=e;return t})();var Ge=(()=>{let e=class e{constructor(i,n){this.translate=i,this.languageService=n,this.title="sa-simple",i.setDefaultLang("en"),i.use("en");let o=this.languageService.getLanguage();if(o)this.translate.use(o);else{let a=i.getBrowserLang();a&&i.use(a.match(/en|pl/)?a:"en")}}};e.\u0275fac=function(n){return new(n||e)(r(P),r(A))},e.\u0275cmp=f({type:e,selectors:[["app-root"]],decls:6,vars:0,consts:[[1,"page-body"],[1,"page-content"]],template:function(n,o){n&1&&(c(0,"div",0),M(1,"app-top-menu")(2,"app-side-menu"),c(3,"div",1),M(4,"router-outlet"),l(),M(5,"app-footer"),l())},dependencies:[Ee,We,Xe,qe],styles:[".page-body[_ngcontent-%COMP%]{margin:0;display:flex;flex-direction:column;min-height:100vh;background-color:#fff;min-width:350px}.page-body[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{padding:.25rem;flex:1 1 0%}"]});let t=e;return t})();var Ke={transformMenu:ue("transformMenu",[de("void",L({opacity:0,transform:"scale(0.8)"})),te("void => enter",ee("120ms cubic-bezier(0, 0, 0.2, 1)",L({opacity:1,transform:"scale(1)"}))),te("* => void",ee("100ms 25ms linear",L({opacity:0})))]),fadeInItems:ue("fadeInItems",[de("showing",L({opacity:1})),te("void => *",[L({opacity:0}),ee("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},Fi=Ke.fadeInItems,Ai=Ke.transformMenu;var It=new Me("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=ve(me);return()=>t.scrollStrategies.reposition()}});function wt(t){return()=>t.scrollStrategies.reposition()}var St={provide:It,deps:[me],useFactory:wt};var Ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=w({providers:[St],imports:[Z,Fe,pe,Le,De,pe]});let t=e;return t})();var Je=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=w({imports:[Z,Ne,He,Be,Ze,ne]});let t=e;return t})();var et=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e,bootstrap:[Ge]}),e.\u0275inj=w({providers:[Re(),xe(Oe())],imports:[Te,Ve,Je,je,Pe,ne.forRoot({loader:{provide:Ae,useClass:ae,deps:[Se]}})]});let t=e;return t})();ke().bootstrapModule(et).catch(t=>console.error(t));