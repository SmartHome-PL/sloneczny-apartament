import{a as g,b,c as y}from"./chunk-PNEJJEII.js";import{Fa as I,Ga as m,I as s,P as f,W as d,hb as M,jb as j,q as p,r,t as a,v as u,va as h,w as n,xa as l}from"./chunk-EVJNX5AE.js";var v=(()=>{let t=class t{constructor(o){this.http=o,this.menuItemsUrl="assets/data/home-menu-items.json"}getMenuItems(){return this.http.get(this.menuItemsUrl)}};t.\u0275fac=function(i){return new(i||t)(a(l))},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var C=(()=>{let t=class t{constructor(o,i){this.router=o,this.homeObjectMenuItemsService=i,this.menuItems=[]}ngOnInit(){this.homeObjectMenuItemsService.getMenuItems().subscribe(o=>{this.menuItems=o})}};t.\u0275fac=function(i){return new(i||t)(s(I),s(v))},t.\u0275cmp=u({type:t,selectors:[["app-object-list"]],decls:1,vars:1,consts:[[3,"menuItems"]],template:function(i,w){i&1&&d(0,"app-grid-menu",0),i&2&&f("menuItems",w.menuItems)},dependencies:[b],styles:["mat-grid-list[_ngcontent-%COMP%]{margin:.25rem}.full-width-button[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=t;return e})();var F=[{path:"objects",component:C}],O=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n({type:t}),t.\u0275inj=r({imports:[m.forChild(F),m]});let e=t;return e})();var J=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n({type:t}),t.\u0275inj=r({imports:[h,y,O,g,M,j]});let e=t;return e})();export{J as a};
