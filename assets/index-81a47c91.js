(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function w(){}const pe=t=>t;function ge(t){return t()}function se(){return Object.create(null)}function T(t){t.forEach(ge)}function te(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $e(t){return Object.keys(t).length===0}const ye=typeof window<"u";let Ee=ye?()=>window.performance.now():()=>Date.now(),ne=ye?t=>requestAnimationFrame(t):w;const L=new Set;function be(t){L.forEach(e=>{e.c(t)||(L.delete(e),e.f())}),L.size!==0&&ne(be)}function qe(t){let e;return L.size===0&&ne(be),{promise:new Promise(n=>{L.add(e={c:t,f:n})}),abort(){L.delete(e)}}}function p(t,e){t.appendChild(e)}function we(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ce(t){const e=b("style");return Ne(we(t),e),e.sheet}function Ne(t,e){return p(t.head||t,e),e.sheet}function q(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function xe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function X(){return S(" ")}function Oe(){return S("")}function re(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Se(t){return Array.from(t.childNodes)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e,n){t.classList[n?"add":"remove"](e)}function ke(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}const I=new Map;let G=0;function ze(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ae(t,e){const n={stylesheet:Ce(e),rules:{}};return I.set(t,n),n}function ce(t,e,n,r,o,i,s,l=0){const c=16.666/r;let u=`{
`;for(let v=0;v<=1;v+=c){const y=e+(n-e)*i(v);u+=v*100+`%{${s(y,1-y)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${ze(f)}_${l}`,_=we(t),{stylesheet:d,rules:m}=I.get(_)||Ae(_,t);m[a]||(m[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${r}ms linear ${o}ms 1 both`,G+=1,a}function Le(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),G-=o,G||Te())}function Te(){ne(()=>{G||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),I.clear())})}let M;function j(t){M=t}function Pe(){if(!M)throw new Error("Function called outside component initialization");return M}function je(){const t=Pe();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=ke(e,n,{cancelable:r});return o.slice().forEach(s=>{s.call(t,i)}),!i.defaultPrevented}return!0}}function Me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const A=[],ue=[],R=[],fe=[],Be=Promise.resolve();let Y=!1;function De(){Y||(Y=!0,Be.then(ve))}function B(t){R.push(t)}const U=new Set;let z=0;function ve(){if(z!==0)return;const t=M;do{try{for(;z<A.length;){const e=A[z];z++,j(e),Re(e.$$)}}catch(e){throw A.length=0,z=0,e}for(j(null),A.length=0,z=0;ue.length;)ue.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];U.has(n)||(U.add(n),n())}R.length=0}while(A.length);for(;fe.length;)fe.pop()();Y=!1,U.clear(),j(t)}function Re(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}let P;function Fe(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function V(t,e,n){t.dispatchEvent(ke(`${e?"intro":"outro"}${n}`))}const F=new Set;let $;function Z(){$={r:0,c:[],p:$}}function ee(){$.r||T($.c),$=$.p}function h(t,e){t&&t.i&&(F.delete(t),t.i(e))}function E(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),$.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Xe={duration:0};function ae(t,e,n,r){const o={direction:"both"};let i=e(t,n,o),s=r?0:1,l=null,c=null,u=null;function f(){u&&Le(t,u)}function a(d,m){const g=d.b-s;return m*=Math.abs(g),{a:s,b:d.b,d:g,duration:m,start:d.start,end:d.start+m,group:d.group}}function _(d){const{delay:m=0,duration:g=300,easing:v=pe,tick:y=w,css:x}=i||Xe,C={start:Ee()+m,b:d};d||(C.group=$,$.r+=1),l||c?c=C:(x&&(f(),u=ce(t,s,d,g,m,v,x)),d&&y(0,1),l=a(C,g),B(()=>V(t,d,"start")),qe(O=>{if(c&&O>c.start&&(l=a(c,g),c=null,V(t,l.b,"start"),x&&(f(),u=ce(t,s,l.b,l.duration,0,v,i.css))),l){if(O>=l.end)y(s=l.b,1-s),V(t,l.b,"end"),c||(l.b?f():--l.group.r||T(l.group.c)),l=null;else if(O>=l.start){const D=O-l.start;s=l.a+l.d*v(D/l.duration),y(s,1-s)}}return!!(l||c)}))}return{run(d){te(i)?Fe().then(()=>{i=i(o),_(d)}):_(d)},end(){f(),l=c=null}}}function ie(t){t&&t.c()}function K(t,e,n,r){const{fragment:o,after_update:i}=t.$$;o&&o.m(e,n),r||B(()=>{const s=t.$$.on_mount.map(ge).filter(te);t.$$.on_destroy?t.$$.on_destroy.push(...s):T(s),t.$$.on_mount=[]}),i.forEach(B)}function W(t,e){const n=t.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(t,e){t.$$.dirty[0]===-1&&(A.push(t),De(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,r,o,i,s,l=[-1]){const c=M;j(t);const u=t.$$={fragment:null,ctx:[],props:i,update:w,not_equal:o,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:se(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const m=d.length?d[0]:_;return u.ctx&&o(u.ctx[a],u.ctx[a]=m)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](m),f&&Ie(t,a)),_}):[],u.update(),f=!0,T(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const a=Se(e.target);u.fragment&&u.fragment.l(a),a.forEach(k)}else u.fragment&&u.fragment.c();e.intro&&h(t.$$.fragment),K(t,e.target,e.anchor,e.customElement),ve()}j(c)}class Q{$destroy(){W(this,1),this.$destroy=w}$on(e,n){if(!te(n))return w;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!$e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ge(t){let e,n,r,o;return{c(){e=b("button"),n=S(t[0]),N(e,"class","square svelte-rbw1lj"),N(e,"data-index",t[1]),le(e,"winner",t[2].includes(t[1]))},m(i,s){q(i,e,s),p(e,n),r||(o=re(e,"click",t[3]),r=!0)},p(i,[s]){s&1&&oe(n,i[0]),s&2&&N(e,"data-index",i[1]),s&6&&le(e,"winner",i[2].includes(i[1]))},i:w,o:w,d(i){i&&k(e),r=!1,o()}}}function Je(t,e,n){const r=je();function o(){r("squareclick",{id:s})}let{content:i}=e,{index:s}=e,{wincombo:l}=e;return t.$$set=c=>{"content"in c&&n(0,i=c.content),"index"in c&&n(1,s=c.index),"wincombo"in c&&n(2,l=c.wincombo)},[i,s,l,o]}class Ke extends Q{constructor(e){super(),H(this,e,Je,Ge,J,{content:0,index:1,wincombo:2})}}function de(t,{delay:e=0,duration:n=400,easing:r=pe}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:i=>`opacity: ${i*o}`}}function We(t){let e,n,r,o,i,s;return{c(){e=b("div"),n=S(t[0]),N(e,"class","game-message svelte-4jxr8j")},m(l,c){q(l,e,c),p(e,n),o=!0,i||(s=re(e,"click",t[1]),i=!0)},p(l,[c]){(!o||c&1)&&oe(n,l[0])},i(l){o||(B(()=>{r||(r=ae(e,de,{},!0)),r.run(1)}),o=!0)},o(l){r||(r=ae(e,de,{},!1)),r.run(0),o=!1},d(l){l&&k(e),l&&r&&r.end(),i=!1,s()}}}function He(t,e,n){let{message:r}=e;function o(i){Me.call(this,t,i)}return t.$$set=i=>{"message"in i&&n(0,r=i.message)},[r,o]}class Qe extends Q{constructor(e){super(),H(this,e,He,We,J,{message:0})}}function _e(t,e,n){const r=t.slice();return r[14]=e[n],r[16]=n,r}function Ue(t){let e,n,r,o,i;function s(u,f){return u[2]!==""?Ze:Ye}let l=s(t),c=l(t);return{c(){e=b("div"),c.c(),n=X(),r=b("button"),r.textContent="Play again",N(e,"class","gameover svelte-1tqzvzc")},m(u,f){q(u,e,f),c.m(e,null),p(e,n),p(e,r),o||(i=re(r,"click",t[7]),o=!0)},p(u,f){l===(l=s(u))&&c?c.p(u,f):(c.d(1),c=l(u),c&&(c.c(),c.m(e,n)))},i:w,o:w,d(u){u&&k(e),c.d(),o=!1,i()}}}function Ve(t){let e,n,r=t[0],o=[];for(let s=0;s<r.length;s+=1)o[s]=me(_e(t,r,s));const i=s=>E(o[s],1,1,()=>{o[s]=null});return{c(){e=b("div");for(let s=0;s<o.length;s+=1)o[s].c();N(e,"class","board svelte-1tqzvzc")},m(s,l){q(s,e,l);for(let c=0;c<o.length;c+=1)o[c].m(e,null);n=!0},p(s,l){if(l&73){r=s[0];let c;for(c=0;c<r.length;c+=1){const u=_e(s,r,c);o[c]?(o[c].p(u,l),h(o[c],1)):(o[c]=me(u),o[c].c(),h(o[c],1),o[c].m(e,null))}for(Z(),c=r.length;c<o.length;c+=1)i(c);ee()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)h(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)E(o[l]);n=!1},d(s){s&&k(e),xe(o,s)}}}function Ye(t){let e;return{c(){e=b("div"),e.textContent="The game ended in a draw.",N(e,"class","svelte-1tqzvzc")},m(n,r){q(n,e,r)},p:w,d(n){n&&k(e)}}}function Ze(t){let e,n,r,o;return{c(){e=b("div"),n=S("The winner is "),r=S(t[2]),o=S("."),N(e,"class","svelte-1tqzvzc")},m(i,s){q(i,e,s),p(e,n),p(e,r),p(e,o)},p(i,s){s&4&&oe(r,i[2])},d(i){i&&k(e)}}}function me(t){let e,n;return e=new Ke({props:{content:t[0][t[16]],index:t[16],wincombo:t[3]}}),e.$on("squareclick",t[6]),{c(){ie(e.$$.fragment)},m(r,o){K(e,r,o),n=!0},p(r,o){const i={};o&1&&(i.content=r[0][r[16]]),o&8&&(i.wincombo=r[3]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){W(e,r)}}}function he(t){let e,n;return e=new Qe({props:{message:t[4]}}),e.$on("click",t[8]),{c(){ie(e.$$.fragment)},m(r,o){K(e,r,o),n=!0},p(r,o){const i={};o&16&&(i.message=r[4]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){W(e,r)}}}function et(t){let e,n,r,o,i;const s=[Ve,Ue],l=[];function c(f,a){return f[1]?0:1}e=c(t),n=l[e]=s[e](t);let u=t[5]&&he(t);return{c(){n.c(),r=X(),u&&u.c(),o=Oe()},m(f,a){l[e].m(f,a),q(f,r,a),u&&u.m(f,a),q(f,o,a),i=!0},p(f,[a]){let _=e;e=c(f),e===_?l[e].p(f,a):(Z(),E(l[_],1,1,()=>{l[_]=null}),ee(),n=l[e],n?n.p(f,a):(n=l[e]=s[e](f),n.c()),h(n,1),n.m(r.parentNode,r)),f[5]?u?(u.p(f,a),a&32&&h(u,1)):(u=he(f),u.c(),h(u,1),u.m(o.parentNode,o)):u&&(Z(),E(u,1,1,()=>{u=null}),ee())},i(f){i||(h(n),h(u),i=!0)},o(f){E(n),E(u),i=!1},d(f){l[e].d(f),f&&k(r),u&&u.d(f),f&&k(o)}}}function tt(t,e,n){let r=Array(9).fill(""),o="X",i=!0,s="",l=!0,c=[],u="",f=!1,a;function _(y){r[y.detail.id]!==""||!l||(n(0,r[y.detail.id]=o,r),n(0,r),d()||m(),o=o==="X"?"O":"X")}function d(){return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach(x=>{const[C,O,D]=x;if(r[C]!==""&&r[C]===r[O]&&r[C]===r[D])return console.log("winner"),n(4,u=`${o} wins!`),n(3,c=[C,O,D]),l=!1,setTimeout(()=>n(1,i=!1),1e3),n(5,f=!0),a=setTimeout(()=>n(5,f=!1),4e3),!0}),!1}function m(){r.filter(x=>x==="").length===0&&(console.log("draw"),n(4,u="Draw!"),n(1,i=!1),l=!1,n(5,f=!0),setTimeout(()=>n(5,f=!1),4e3))}function g(){n(0,r=Array(9).fill("")),n(2,s=""),n(1,i=!0),n(3,c=[]),l=!0,n(5,f=!1),clearTimeout(a)}return[r,i,s,c,u,f,_,g,()=>{n(5,f=!1)}]}class nt extends Q{constructor(e){super(),H(this,e,tt,et,J,{})}}function rt(t){let e,n,r,o,i,s,l;return s=new nt({}),{c(){e=b("main"),n=b("h1"),n.textContent="Tictactoe game",r=X(),o=b("h2"),o.textContent="Built with SvelteJS",i=X(),ie(s.$$.fragment)},m(c,u){q(c,e,u),p(e,n),p(e,r),p(e,o),p(e,i),K(s,e,null),l=!0},p:w,i(c){l||(h(s.$$.fragment,c),l=!0)},o(c){E(s.$$.fragment,c),l=!1},d(c){c&&k(e),W(s)}}}class ot extends Q{constructor(e){super(),H(this,e,null,rt,J,{})}}new ot({target:document.getElementById("app")});