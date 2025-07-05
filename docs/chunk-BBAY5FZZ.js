import{c as ht,e as ft}from"./chunk-VU3HS2LR.js";import{A as d,K as I,aa as v,b as ct,ca as Y,d as ut,e as bt,f as dt,ha as pt,i as P,ma as gt,na as y,pa as q,sa as $,ua as mt,x as X,y as u}from"./chunk-KIZG7WGD.js";import{$a as L,Ab as nt,Bb as it,Cb as T,Eb as B,Fb as E,Gb as J,Hb as rt,Ia as c,Jb as at,Kb as V,Lb as lt,Mb as Q,Nb as H,O as D,Ob as R,P as M,T as g,Ta as O,Ua as N,Ub as f,Va as C,Wb as K,Xa as h,Za as _,gc as F,hb as w,ja as S,jc as m,ka as p,kc as W,ob as a,pb as G,qb as Z,qc as l,rb as z,rc as st,sb as j,tb as A,ub as ot,yb as et,zb as b}from"./chunk-2XIWJZZI.js";var Ct=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,wt={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":Y(t.value)&&String(t.value).length===1,"p-badge-dot":v(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},U=(()=>{class t extends q{name="badge";theme=Ct;classes=wt;static \u0275fac=(()=>{let o;return function(n){return(o||(o=p(t)))(n||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var ao=(()=>{class t extends ${disabled;badgeSize;set size(o){this._size=o,console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;severity;value;badgeStyle;badgeStyleClass;id;badgeEl;_componentStyle=g(U);get activeElement(){return this.el.nativeElement.nodeName.indexOf("-")!=-1?this.el.nativeElement.firstChild:this.el.nativeElement}get canUpdateBadge(){return this.id&&!this.disabled}constructor(){super()}ngOnChanges({value:o,size:e,severity:n,disabled:r,badgeStyle:s,badgeStyleClass:kt}){super.ngOnChanges({value:o,size:e,severity:n,disabled:r}),r&&this.toggleDisableState(),this.canUpdateBadge&&(n&&this.setSeverity(n.previousValue),e&&this.setSizeClasses(),o&&this.setValue(),(s||kt)&&this.applyStyles())}ngAfterViewInit(){super.ngAfterViewInit(),this.id=pt("pn_id_")+"_badge",this.renderBadgeContent()}setValue(o){let e=o??this.document.getElementById(this.id);if(!e)return;this.value!=null?(X(e,"p-badge-dot")&&d(e,"p-badge-dot"),this.value&&String(this.value).length===1?u(e,"p-badge-circle"):d(e,"p-badge-circle")):(X(e,"p-badge-dot")||u(e,"p-badge-dot"),d(e,"p-badge-circle")),e.innerHTML="";let n=this.value!=null?String(this.value):"";this.renderer.appendChild(e,this.document.createTextNode(n))}setSizeClasses(o){let e=o??this.document.getElementById(this.id);e&&(this.badgeSize?(this.badgeSize==="large"&&(u(e,"p-badge-lg"),d(e,"p-badge-xl")),this.badgeSize==="xlarge"&&(u(e,"p-badge-xl"),d(e,"p-badge-lg"))):this.size&&!this.badgeSize?(this.size==="large"&&(u(e,"p-badge-lg"),d(e,"p-badge-xl")),this.size==="xlarge"&&(u(e,"p-badge-xl"),d(e,"p-badge-lg"))):(d(e,"p-badge-lg"),d(e,"p-badge-xl")))}renderBadgeContent(){if(this.disabled)return null;let o=this.activeElement,e=this.document.createElement("span");e.id=this.id,e.className="p-badge p-component",this.setSeverity(null,e),this.setSizeClasses(e),this.setValue(e),u(o,"p-overlay-badge"),this.renderer.appendChild(o,e),this.badgeEl=e,this.applyStyles()}applyStyles(){if(this.badgeEl&&this.badgeStyle&&typeof this.badgeStyle=="object")for(let[o,e]of Object.entries(this.badgeStyle))this.renderer.setStyle(this.badgeEl,o,e);this.badgeEl&&this.badgeStyleClass&&this.badgeEl.classList.add(...this.badgeStyleClass.split(" "))}setSeverity(o,e){let n=e??this.document.getElementById(this.id);n&&(this.severity&&u(n,`p-badge-${this.severity}`),o&&d(n,`p-badge-${o}`))}toggleDisableState(){if(this.id)if(this.disabled){let o=this.activeElement?.querySelector(`#${this.id}`);o&&this.renderer.removeChild(this.activeElement,o)}else this.renderBadgeContent()}static \u0275fac=function(e){return new(e||t)};static \u0275dir=C({type:t,selectors:[["","pBadge",""]],inputs:{disabled:[0,"badgeDisabled","disabled"],badgeSize:"badgeSize",size:"size",severity:"severity",value:"value",badgeStyle:"badgeStyle",badgeStyleClass:"badgeStyleClass"},features:[f([U]),h,S]})}return t})(),tt=(()=>{class t extends ${styleClass=m();style=m();badgeSize=m();size=m();severity=m();value=m();badgeDisabled=m(!1,{transform:l});_componentStyle=g(U);containerClass=F(()=>{let o="p-badge p-component";return Y(this.value())&&String(this.value()).length===1&&(o+=" p-badge-circle"),this.badgeSize()==="large"?o+=" p-badge-lg":this.badgeSize()==="xlarge"?o+=" p-badge-xl":this.badgeSize()==="small"&&(o+=" p-badge-sm"),v(this.value())&&(o+=" p-badge-dot"),this.styleClass()&&(o+=` ${this.styleClass()}`),this.severity()&&(o+=` p-badge-${this.severity()}`),o});static \u0275fac=(()=>{let o;return function(n){return(o||(o=p(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(e,n){e&2&&(lt(n.style()),Q(n.containerClass()),at("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[f([U]),h],decls:1,vars:1,template:function(e,n){e&1&&H(0),e&2&&R(n.value())},dependencies:[P,y],encapsulation:2,changeDetection:0})}return t})(),vt=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=N({type:t});static \u0275inj=M({imports:[tt,y,y]})}return t})();var St=["content"],zt=["loadingicon"],Tt=["icon"],Bt=["*"],xt=t=>({class:t});function Et(t,i){t&1&&ot(0)}function Ft(t,i){if(t&1&&z(0,"span",8),t&2){let o=b(3);a("ngClass",o.iconClass()),w("aria-hidden",!0)("data-pc-section","loadingicon")}}function Pt(t,i){if(t&1&&z(0,"SpinnerIcon",9),t&2){let o=b(3);a("styleClass",o.spinnerIconClass())("spin",!0),w("aria-hidden",!0)("data-pc-section","loadingicon")}}function Dt(t,i){if(t&1&&(j(0),_(1,Ft,1,3,"span",6)(2,Pt,1,4,"SpinnerIcon",7),A()),t&2){let o=b(2);c(),a("ngIf",o.loadingIcon),c(),a("ngIf",!o.loadingIcon)}}function Mt(t,i){}function Ot(t,i){if(t&1&&_(0,Mt,0,0,"ng-template",10),t&2){let o=b(2);a("ngIf",o.loadingIconTemplate||o._loadingIconTemplate)}}function Nt(t,i){if(t&1&&(j(0),_(1,Dt,3,2,"ng-container",2)(2,Ot,1,1,null,5),A()),t&2){let o=b();c(),a("ngIf",!o.loadingIconTemplate&&!o._loadingIconTemplate),c(),a("ngTemplateOutlet",o.loadingIconTemplate||o._loadingIconTemplate)("ngTemplateOutletContext",K(3,xt,o.iconClass()))}}function Lt(t,i){if(t&1&&z(0,"span",8),t&2){let o=b(2);Q(o.icon),a("ngClass",o.iconClass()),w("data-pc-section","icon")}}function jt(t,i){}function At(t,i){if(t&1&&_(0,jt,0,0,"ng-template",10),t&2){let o=b(2);a("ngIf",!o.icon&&(o.iconTemplate||o._iconTemplate))}}function Vt(t,i){if(t&1&&(j(0),_(1,Lt,1,4,"span",11)(2,At,1,1,null,5),A()),t&2){let o=b();c(),a("ngIf",o.icon&&!o.iconTemplate&&!o._iconTemplate),c(),a("ngTemplateOutlet",o.iconTemplate||o._iconTemplate)("ngTemplateOutletContext",K(3,xt,o.iconClass()))}}function Qt(t,i){if(t&1&&(G(0,"span",12),H(1),Z()),t&2){let o=b();w("aria-hidden",o.icon&&!o.label)("data-pc-section","label"),c(),R(o.label)}}function Ht(t,i){if(t&1&&z(0,"p-badge",13),t&2){let o=b();a("value",o.badge)("severity",o.badgeSeverity)}}var Rt=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,qt={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},k=(()=>{class t extends q{name="button";theme=Rt;classes=qt;static \u0275fac=(()=>{let o;return function(n){return(o||(o=p(t)))(n||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var x={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},yt=(()=>{class t extends ${_componentStyle=g(k);static \u0275fac=(()=>{let o;return function(n){return(o||(o=p(t)))(n||t)}})();static \u0275dir=C({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(e,n){e&2&&V("p-button-label",!0)},features:[f([k]),h]})}return t})(),$t=(()=>{class t extends ${_componentStyle=g(k);static \u0275fac=(()=>{let o;return function(n){return(o||(o=p(t)))(n||t)}})();static \u0275dir=C({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(e,n){e&2&&V("p-button-icon",!0)},features:[f([k]),h]})}return t})(),To=(()=>{class t extends ${iconPos="left";loadingIcon;set label(o){this._label=o,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(o){this._icon=o,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(o){this._loading=o,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=W($t);labelSignal=W(yt);isIconOnly=F(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(o){this._buttonProps=o,o&&typeof o=="object"&&Object.entries(o).forEach(([e,n])=>this[`_${e}`]!==n&&(this[`_${e}`]=n))}_severity;get severity(){return this._severity}set severity(o){this._severity=o,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(x);isTextButton=F(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(k);ngAfterViewInit(){super.ngAfterViewInit(),u(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(o){super.ngOnChanges(o);let{buttonProps:e}=o;if(e){let n=e.currentValue;for(let r in n)this[r]=n[r]}}getStyleClass(){let o=[x.button,x.component];return this.icon&&!this.label&&v(this.htmlElement.textContent)&&o.push(x.iconOnly),this.loading&&(o.push(x.disabled,x.loading),!this.icon&&this.label&&o.push(x.labelOnly),this.icon&&!this.label&&!v(this.htmlElement.textContent)&&o.push(x.iconOnly)),this.text&&o.push("p-button-text"),this.severity&&o.push(`p-button-${this.severity}`),this.plain&&o.push("p-button-plain"),this.raised&&o.push("p-button-raised"),this.size&&o.push(`p-button-${this.size}`),this.outlined&&o.push("p-button-outlined"),this.rounded&&o.push("p-button-rounded"),this.size==="small"&&o.push("p-button-sm"),this.size==="large"&&o.push("p-button-lg"),this.hasFluid&&o.push("p-button-fluid"),o}get hasFluid(){let e=this.el.nativeElement.closest("p-fluid");return v(this.fluid)?!!e:this.fluid}setStyleClass(){let o=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...o)}removeExistingSeverityClass(){let o=["success","info","warn","danger","help","primary","secondary","contrast"],e=this.htmlElement.classList.value.split(" ").find(n=>o.some(r=>n===`p-button-${r}`));e&&this.htmlElement.classList.remove(e)}createLabel(){if(!I(this.htmlElement,".p-button-label")&&this.label){let e=this.document.createElement("span");this.icon&&!this.label&&e.setAttribute("aria-hidden","true"),e.className="p-button-label",e.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(e)}}createIcon(){if(!I(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let e=this.document.createElement("span");e.className="p-button-icon",e.setAttribute("aria-hidden","true");let n=this.label?"p-button-icon-"+this.iconPos:null;n&&u(e,n);let r=this.getIconClass();r&&u(e,r),!this.loadingIcon&&this.loading&&(e.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(e,this.htmlElement.firstChild)}}updateLabel(){let o=I(this.htmlElement,".p-button-label");if(!this.label){o&&this.htmlElement.removeChild(o);return}o?o.textContent=this.label:this.createLabel()}updateIcon(){let o=I(this.htmlElement,".p-button-icon"),e=I(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&o?o.innerHTML=this.spinnerIcon:o?.innerHTML&&(o.innerHTML=""),o?this.iconPos?o.className="p-button-icon "+(e?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():o.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let o;return function(n){return(o||(o=p(t)))(n||t)}})();static \u0275dir=C({type:t,selectors:[["","pButton",""]],contentQueries:function(e,n,r){e&1&&(J(r,n.iconSignal,$t,5),J(r,n.labelSignal,yt,5)),e&2&&rt(2)},hostVars:4,hostBindings:function(e,n){e&2&&V("p-button-icon-only",n.isIconOnly())("p-button-text",n.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",l],rounded:[2,"rounded","rounded",l],text:[2,"text","text",l],outlined:[2,"outlined","outlined",l],size:"size",plain:[2,"plain","plain",l],fluid:[2,"fluid","fluid",l],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[f([k]),h,S]})}return t})(),Ut=(()=>{class t extends ${type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new L;onFocus=new L;onBlur=new L;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(o){this._buttonProps=o,o&&typeof o=="object"&&Object.entries(o).forEach(([e,n])=>this[`_${e}`]!==n&&(this[`_${e}`]=n))}get hasFluid(){let e=this.el.nativeElement.closest("p-fluid");return v(this.fluid)?!!e:this.fluid}_componentStyle=g(k);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(o=>{switch(o.getType()){case"content":this._contentTemplate=o.template;break;case"icon":this._iconTemplate=o.template;break;case"loadingicon":this._loadingIconTemplate=o.template;break;default:this._contentTemplate=o.template;break}})}ngOnChanges(o){super.ngOnChanges(o);let{buttonProps:e}=o;if(e){let n=e.currentValue;for(let r in n)this[r]=n[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let o;return function(n){return(o||(o=p(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-button"]],contentQueries:function(e,n,r){if(e&1&&(T(r,St,5),T(r,zt,5),T(r,Tt,5),T(r,gt,4)),e&2){let s;B(s=E())&&(n.contentTemplate=s.first),B(s=E())&&(n.loadingIconTemplate=s.first),B(s=E())&&(n.iconTemplate=s.first),B(s=E())&&(n.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",l],loading:[2,"loading","loading",l],loadingIcon:"loadingIcon",raised:[2,"raised","raised",l],rounded:[2,"rounded","rounded",l],text:[2,"text","text",l],plain:[2,"plain","plain",l],severity:"severity",outlined:[2,"outlined","outlined",l],link:[2,"link","link",l],tabindex:[2,"tabindex","tabindex",st],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",l],fluid:[2,"fluid","fluid",l],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[f([k]),h,S],ngContentSelectors:Bt,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(e,n){e&1&&(nt(),G(0,"button",0),et("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),it(1),_(2,Et,1,0,"ng-container",1)(3,Nt,3,5,"ng-container",2)(4,Vt,3,5,"ng-container",2)(5,Qt,2,3,"span",3)(6,Ht,1,2,"p-badge",4),Z()),e&2&&(a("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),w("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),c(2),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),c(),a("ngIf",n.loading),c(),a("ngIf",!n.loading),c(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),c(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[P,ct,ut,dt,bt,mt,ht,ft,vt,tt,y],encapsulation:2,changeDetection:0})}return t})(),Bo=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=N({type:t});static \u0275inj=M({imports:[P,Ut,y,y]})}return t})();export{ao as a,tt as b,vt as c,To as d,Ut as e,Bo as f};
