import{b as B,c as j}from"./chunk-BBAY5FZZ.js";import{i as S,na as o,pa as M,sa as C}from"./chunk-KIZG7WGD.js";import{Ab as m,Bb as f,Ia as d,Lb as z,O as s,P as n,T as r,Ta as c,Ua as g,Ub as D,Xa as p,ka as l,ob as y,pb as u,qb as v,qc as h,rb as b}from"./chunk-2XIWJZZI.js";var w=["*"],I=({dt:e})=>`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${e("overlaybadge.outline.width")};
    outline-style: solid;
    outline-color: ${e("overlaybadge.outline.color")};
}
`,O={root:"p-overlaybadge"},F=(()=>{class e extends M{name="overlaybadge";theme=I;classes=O;static \u0275fac=(()=>{let a;return function(t){return(a||(a=l(e)))(t||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})(),E=(()=>{class e extends C{styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(a){this._size=a,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;_componentStyle=r(F);constructor(){super()}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=c({type:e,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",h],size:"size"},features:[D([F]),p],ngContentSelectors:w,decls:3,vars:7,consts:[[1,"p-overlaybadge"],[3,"styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(i,t){i&1&&(m(),u(0,"div",0),f(1),b(2,"p-badge",1),v()),i&2&&(d(2),z(t.style),y("styleClass",t.styleClass)("badgeSize",t.badgeSize)("severity",t.severity)("value",t.value)("badgeDisabled",t.badgeDisabled))},dependencies:[S,j,B,o],encapsulation:2,changeDetection:0})}return e})(),Q=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=g({type:e});static \u0275inj=n({imports:[E,o,o]})}return e})();export{Q as a};
