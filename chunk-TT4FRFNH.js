import{a as Q,b as N}from"./chunk-QJAIUSZ5.js";import{$a as B,Ba as G,C as g,D as h,Ka as P,La as S,O as x,R as m,Ta as w,X as y,ba as c,ca as a,hb as b,ja as _,jb as M,ka as v,ma as p,mb as F,nb as O,oa as $,ra as j,ta as L,ua as A,y as d,z as R}from"./chunk-HB7IKZQF.js";var V=["*"];var X=".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}",z=class{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){let t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}update(t,i){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=i.map(e=>this._trackTile(e))}_trackTile(t){let i=this._findMatchingGap(t.colspan);return this._markTilePosition(i,t),this.columnIndex=i+t.colspan,new T(this.rowIndex,i)}_findMatchingGap(t){t>this.tracker.length;let i=-1,e=-1;do{if(this.columnIndex+t>this.tracker.length){this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i);continue}if(i=this.tracker.indexOf(0,this.columnIndex),i==-1){this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i);continue}e=this._findGapEndIndex(i),this.columnIndex=i+1}while(e-i<t||e==0);return Math.max(i,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let i=t+1;i<this.tracker.length;i++)if(this.tracker[i]!=0)return i;return this.tracker.length}_markTilePosition(t,i){for(let e=0;e<i.colspan;e++)this.tracker[t+e]=i.rowspan}},T=class{constructor(t,i){this.row=t,this.col=i}},W=new R("MAT_GRID_LIST"),E=(()=>{let t=class t{constructor(e,r){this._element=e,this._gridList=r,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(w(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(w(e))}_setStyle(e,r){this._element.nativeElement.style[e]=r}};t.\u0275fac=function(r){return new(r||t)(m(x),m(W,8))},t.\u0275cmp=g({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(r,n){r&2&&y("rowspan",n.rowspan)("colspan",n.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:V,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(r,n){r&1&&(_(),c(0,"div",0),v(1),a())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0});let o=t;return o})();var Y=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,f=class{constructor(){this._rows=0,this._rowspan=0}init(t,i,e,r){this._gutterSize=q(t),this._rows=i.rowCount,this._rowspan=i.rowspan,this._cols=e,this._direction=r}getBaseTileSize(t,i){return`(${t}% - (${this._gutterSize} * ${i}))`}getTilePosition(t,i){return i===0?"0":l(`(${t} + ${this._gutterSize}) * ${i}`)}getTileSize(t,i){return`(${t} * ${i}) + (${i-1} * ${this._gutterSize})`}setStyle(t,i,e){let r=100/this._cols,n=(this._cols-1)/this._cols;this.setColStyles(t,e,r,n),this.setRowStyles(t,i,r,n)}setColStyles(t,i,e,r){let n=this.getBaseTileSize(e,r),s=this._direction==="rtl"?"right":"left";t._setStyle(s,this.getTilePosition(n,i)),t._setStyle("width",l(this.getTileSize(n,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}},I=class extends f{constructor(t){super(),this.fixedRowHeight=t}init(t,i,e,r){super.init(t,i,e,r),this.fixedRowHeight=q(this.fixedRowHeight),Y.test(this.fixedRowHeight)}setRowStyles(t,i){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,i)),t._setStyle("height",l(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",l(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(i=>{i._setStyle("top",null),i._setStyle("height",null)})}},k=class extends f{constructor(t){super(),this._parseRatio(t)}setRowStyles(t,i,e,r){let n=e/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(n,r),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,i)),t._setStyle("paddingTop",l(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",l(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(i=>{i._setStyle("marginTop",null),i._setStyle("paddingTop",null)})}_parseRatio(t){let i=t.split(":");i.length,this.rowHeightRatio=parseFloat(i[0])/parseFloat(i[1])}},D=class extends f{setRowStyles(t,i){let e=100/this._rowspan,r=(this._rows-1)/this._rows,n=this.getBaseTileSize(e,r);t._setStyle("top",this.getTilePosition(n,i)),t._setStyle("height",l(this.getTileSize(n,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(i=>{i._setStyle("top",null),i._setStyle("height",null)})}};function l(o){return`calc(${o})`}function q(o){return o.match(/([A-Za-z%]+)$/)?o:`${o}px`}var tt="fit",Z=(()=>{let t=class t{constructor(e,r){this._element=e,this._dir=r,this._gutter="1px"}get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(w(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let r=`${e??""}`;r!==this._rowHeight&&(this._rowHeight=r,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===tt?this._tileStyler=new D:e&&e.indexOf(":")>-1?this._tileStyler=new k(e):this._tileStyler=new I(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new z);let e=this._tileCoordinator,r=this._tiles.filter(s=>!s._gridList||s._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,r),this._tileStyler.init(this.gutterSize,e,this.cols,n),r.forEach((s,u)=>{let H=e.positions[u];this._tileStyler.setStyle(s,H.row,H.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}};t.\u0275fac=function(r){return new(r||t)(m(x),m(B,8))},t.\u0275cmp=g({type:t,selectors:[["mat-grid-list"]],contentQueries:function(r,n,s){if(r&1&&L(s,E,5),r&2){let u;j(u=A())&&(n._tiles=u)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(r,n){r&2&&y("cols",n.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[$([{provide:W,useExisting:t}])],ngContentSelectors:V,decls:2,vars:0,template:function(r,n){r&1&&(_(),c(0,"div"),v(1),a())},styles:[X],encapsulation:2,changeDetection:0});let o=t;return o})(),U=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=h({type:t}),t.\u0275inj=d({imports:[M,b,M,b]});let o=t;return o})();var J=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=g({type:t,selectors:[["app-object-list"]],decls:11,vars:0,consts:[["cols","2","rowHeight","2:1","gutterSize","0.25rem"],["mat-raised-button","","color","primary","routerLink","/oswiecim",1,"full-width-button"],["mat-raised-button","","color","accent","routerLink","/libiaz",1,"full-width-button"]],template:function(r,n){r&1&&(c(0,"mat-grid-list",0)(1,"mat-grid-tile")(2,"button",1)(3,"mat-icon"),p(4,"dashboard"),a(),p(5," O\u015Bwi\u0119cim "),a()(),c(6,"mat-grid-tile")(7,"button",2)(8,"mat-icon"),p(9,"dashboard"),a(),p(10," Libi\u0105\u017C "),a()()())},dependencies:[P,Z,E,Q,F],styles:["mat-grid-list[_ngcontent-%COMP%]{margin:.25rem}.full-width-button[_ngcontent-%COMP%]{width:100%;height:100%}"]});let o=t;return o})();var it=[{path:"objects",component:J}],K=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=h({type:t}),t.\u0275inj=d({imports:[S.forChild(it),S]});let o=t;return o})();var Rt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=h({type:t}),t.\u0275inj=d({imports:[G,K,U,N,O]});let o=t;return o})();export{Rt as a};
