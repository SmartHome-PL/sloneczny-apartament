import{a as M,b as j,c as I}from"./chunk-MLG7LGMH.js";import{J as s,Ja as f,Ka as m,La as u,Q as a,X as p,mb as l,ob as h,s as r,w as c,x as n,za as d}from"./chunk-YFFT5UH7.js";var v=(()=>{let t=class t{constructor(i,o){this.router=i,this.jsonLoaderService=o,this.menuItems=[]}ngOnInit(){this.jsonLoaderService.loadData("assets/data/home-menu-items.json").subscribe(i=>{this.menuItems=i})}};t.\u0275fac=function(o){return new(o||t)(s(f),s(u))},t.\u0275cmp=c({type:t,selectors:[["app-object-list"]],decls:1,vars:1,consts:[[3,"menuItems"]],template:function(o,C){o&1&&p(0,"app-grid-menu",0),o&2&&a("menuItems",C.menuItems)},dependencies:[M],styles:["mat-grid-list[_ngcontent-%COMP%]{margin:.25rem}.full-width-button[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=t;return e})();var b=[{path:"objects",component:v}],y=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n({type:t}),t.\u0275inj=r({imports:[m.forChild(b),m]});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n({type:t}),t.\u0275inj=r({imports:[d,I,y,j,l,h]});let e=t;return e})();export{q as a};