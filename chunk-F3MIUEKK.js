import{$ as p,A as y,F as v,I as s,J as g,Ja as H,Q as m,T as S,V as a,W as c,_ as b,aa as M,ea as f,fa as T,fb as u,ga as C,hb as w,ja as z,ka as I,kb as R,lb as $,mb as E,nb as G,qb as j,rb as P,s as l,w as h,wa as k,x as d,z as x,za as D}from"./chunk-6ZLOLUOG.js";var L=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d({type:t}),t.\u0275inj=l({imports:[w,u,w,u]});let e=t;return e})();function B(e,t){if(e&1){let r=b();a(0,"div",2)(1,"button",3),p("click",function(){let o=x(r).$implicit,_=M();return y(_.navigateTo(o.path))}),f(2),z(3,"translate"),a(4,"mat-icon"),f(5),c()()()}if(e&2){let r=t.$implicit;s(),m("disabled",r.disabled)("color",r.disabled?"disabled":"enabled"),s(),C(" ",I(3,4,r.title)," "),s(3),T(r.icon)}}var st=(()=>{let t=class t{constructor(i){this.router=i,this.menuItems=[],this.gridColumns=2}ngOnInit(){this.setGridColumns()}onResize(i){this.setGridColumns()}setGridColumns(){if(typeof window<"u"){let i=window.innerWidth;i>1200?this.gridColumns=4:i>800?this.gridColumns=3:this.gridColumns=2}}navigateTo(i){this.router.navigate([i])}};t.\u0275fac=function(n){return new(n||t)(g(H))},t.\u0275cmp=h({type:t,selectors:[["app-grid-menu"]],hostBindings:function(n,o){n&1&&p("resize",function(O){return o.onResize(O)},!1,v)},inputs:{menuItems:"menuItems"},decls:2,vars:1,consts:[[1,"grid-container"],["class","grid-item",4,"ngFor","ngForOf"],[1,"grid-item"],["mat-raised-button","",3,"disabled","color","click"]],template:function(n,o){n&1&&(a(0,"div",0),S(1,B,6,6,"div",1),c()),n&2&&(s(),m("ngForOf",o.menuItems))},dependencies:[k,R,E,j],styles:['@charset "UTF-8";.grid-container[_ngcontent-%COMP%]{padding:.25rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(12.5rem,1fr));gap:.25rem}@media (max-width: 600px){.grid-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(6rem,1fr))}}.grid-item[_ngcontent-%COMP%]{aspect-ratio:2/1;display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]{width:100%;height:100%}.mat-disabled[_ngcontent-%COMP%]{background-color:#dcdcdc}.mat-enabled[_ngcontent-%COMP%]{background-color:#696969}']});let e=t;return e})();var ft=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d({type:t}),t.\u0275inj=l({imports:[D,$,G,L,P]});let e=t;return e})();export{st as a,L as b,ft as c};
