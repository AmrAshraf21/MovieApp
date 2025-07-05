import{a as C}from"./chunk-IQWOGYRB.js";import{b as M,e as w,i as S,m as D,na as p,pa as F,sa as I}from"./chunk-KIZG7WGD.js";import{Ia as g,Jb as $,O as n,P as m,T as o,Ta as u,Ua as d,Ub as k,Xa as f,_ as h,hb as a,ka as l,ob as y,pb as c,qb as v,rb as b}from"./chunk-2XIWJZZI.js";var R=class e{http=o(D);apiKey=C.tmdbApiKey;baseUrl="https://api.themoviedb.org/3";getNowPlayingMovies(r=1,t="en"){return this.http.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${r}&language=${t}`)}getMovieDetails(r,t="en"){return this.http.get(`${this.baseUrl}/movie/${r}?api_key=${this.apiKey}&language=${t}`)}getMovieRecommendations(r,t="en"){return this.http.get(`${this.baseUrl}/movie/${r}/recommendations?api_key=${this.apiKey}&language=${t}`)}getMovieReviews(r,t="en"){return this.http.get(`${this.baseUrl}/movie/${r}/reviews?api_key=${this.apiKey}&language=${t}`)}searchMovies(r,t="en",s=1){return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(r)}&language=${t}&page=${s}`)}getPopularTVShows(r=1,t="en"){return this.http.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}&page=${r}&language=${t}`)}getTVShowDetails(r,t="en"){return this.http.get(`${this.baseUrl}/tv/${r}?api_key=${this.apiKey}&language=${t}`)}getMovieVideo(r){return this.http.get(`https://api.themoviedb.org/3/movie/${r}/videos?api_key=${this.apiKey}`)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"})};var V=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.colorOne")};
    }
    40% {
        stroke: ${e("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${e("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.colorFour")};
    }
}
`,U={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},K=(()=>{class e extends F{name="progressspinner";theme=V;classes=U;static \u0275fac=(()=>{let t;return function(i){return(t||(t=l(e)))(i||e)}})();static \u0275prov=n({token:e,factory:e.\u0275fac})}return e})();var j=(()=>{class e extends I{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=o(K);static \u0275fac=(()=>{let t;return function(i){return(t||(t=l(e)))(i||e)}})();static \u0275cmp=u({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[k([K]),f],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(s,i){s&1&&(c(0,"div",0),h(),c(1,"svg",1),b(2,"circle",2),v()()),s&2&&(y("ngStyle",i.style)("ngClass",i.styleClass),a("aria-label",i.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),g(),$("animation-duration",i.animationDuration),a("data-pc-section","root"),g(),a("fill",i.fill)("stroke-width",i.strokeWidth))},dependencies:[S,M,w,p],encapsulation:2,changeDetection:0})}return e})(),Y=(()=>{class e{static \u0275fac=function(s){return new(s||e)};static \u0275mod=d({type:e});static \u0275inj=m({imports:[j,p,p]})}return e})();export{R as a,j as b,Y as c};
