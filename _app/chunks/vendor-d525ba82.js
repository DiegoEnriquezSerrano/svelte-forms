function _(){}function me(e,t){for(const n in t)e[n]=t[n];return e}function pe(e){return e&&typeof e=="object"&&typeof e.then=="function"}function I(e){return e()}function z(){return Object.create(null)}function p(e){e.forEach(I)}function H(e){return typeof e=="function"}function ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ye(e){return Object.keys(e).length===0}function T(e,...t){if(e==null)return _;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(e){let t;return T(e,n=>t=n)(),t}function Rt(e,t,n){e.$$.on_destroy.push(T(t,n))}function Nt(e,t,n,u){if(e){const r=Z(e,t,n,u);return e[0](r)}}function Z(e,t,n,u){return e[1]&&u?me(n.ctx.slice(),e[1](u(t))):n.ctx}function Mt(e,t,n,u){if(e[2]&&u){const r=e[2](u(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const f=[],s=Math.max(t.dirty.length,r.length);for(let o=0;o<s;o+=1)f[o]=t.dirty[o]|r[o];return f}return t.dirty|r}return t.dirty}function Ut(e,t,n,u,r,f){if(r){const s=Z(t,n,u,f);e.p(s,r)}}function It(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let u=0;u<n;u++)t[u]=-1;return t}return-1}let w=!1;function Ae(){w=!0}function ke(){w=!1}function we(e,t,n,u){for(;e<t;){const r=e+(t-e>>1);n(r)<=u?e=r+1:t=r}return e}function Ee(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let c=0;c<t.length;c++){const a=t[c];a.claim_order!==void 0&&i.push(a)}t=i}const n=new Int32Array(t.length+1),u=new Int32Array(t.length);n[0]=-1;let r=0;for(let i=0;i<t.length;i++){const c=t[i].claim_order,a=(r>0&&t[n[r]].claim_order<=c?r+1:we(1,r,d=>t[n[d]].claim_order,c))-1;u[i]=n[a]+1;const l=a+1;n[l]=i,r=Math.max(l,r)}const f=[],s=[];let o=t.length-1;for(let i=n[r]+1;i!=0;i=u[i-1]){for(f.push(t[i-1]);o>=i;o--)s.push(t[o]);o--}for(;o>=0;o--)s.push(t[o]);f.reverse(),s.sort((i,c)=>i.claim_order-c.claim_order);for(let i=0,c=0;i<s.length;i++){for(;c<f.length&&s[i].claim_order>=f[c].claim_order;)c++;const a=c<f.length?f[c]:null;e.insertBefore(s[i],a)}}function Se(e,t){if(w){for(Ee(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function je(e,t,n){e.insertBefore(t,n||null)}function ve(e,t,n){w&&!n?Se(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function zt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function D(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function Ht(){return $(" ")}function Zt(){return $("")}function Dt(e,t,n,u){return e.addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)}function Wt(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Gt(e){return e===""?null:+e}function Oe(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function G(e,t,n,u,r=!1){W(e);const f=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const i=n(o);return i===void 0?e.splice(s,1):e[s]=i,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const i=n(o);return i===void 0?e.splice(s,1):e[s]=i,r?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return u()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function Te(e,t,n,u){return G(e,r=>r.nodeName===t,r=>{const f=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||f.push(o.name)}f.forEach(s=>r.removeAttribute(s))},()=>u(t))}function Pt(e,t,n){return Te(e,t,n,D)}function $e(e,t){return G(e,n=>n.nodeType===3,n=>{const u=""+t;if(n.data.startsWith(u)){if(n.data.length!==u.length)return n.splitText(u.length)}else n.data=u},()=>$(t),!0)}function Bt(e){return $e(e," ")}function P(e,t,n){for(let u=n;u<e.length;u+=1){const r=e[u];if(r.nodeType===8&&r.textContent.trim()===t)return u}return e.length}function qt(e){const t=P(e,"HTML_TAG_START",0),n=P(e,"HTML_TAG_END",t);if(t===n)return new B;W(e);const u=e.splice(t,n+1);E(u[0]),E(u[u.length-1]);const r=u.slice(1,u.length-1);for(const f of r)f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new B(r)}function Ft(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Jt(e,t){e.value=t==null?"":t}function Yt(e,t,n){e.classList[n?"add":"remove"](t)}class Ce{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,n,u=null){this.e||(this.e=D(n.nodeName),this.t=n,this.c(t)),this.i(u)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)je(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(E)}}class B extends Ce{constructor(t){super();this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)ve(this.t,this.n[n],t)}}let S;function x(e){S=e}function A(){if(!S)throw new Error("Function called outside component initialization");return S}function Vt(e){A().$$.on_mount.push(e)}function Kt(e){A().$$.after_update.push(e)}function Qt(e,t){A().$$.context.set(e,t)}function Xt(e){return A().$$.context.get(e)}const k=[],q=[],j=[],F=[],Le=Promise.resolve();let C=!1;function Re(){C||(C=!0,Le.then(M))}function L(e){j.push(e)}let R=!1;const N=new Set;function M(){if(!R){R=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];x(t),Ne(t.$$)}for(x(null),k.length=0;q.length;)q.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];N.has(t)||(N.add(t),t())}j.length=0}while(k.length);for(;F.length;)F.pop()();C=!1,R=!1,N.clear()}}function Ne(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const v=new Set;let b;function Me(){b={r:0,c:[],p:b}}function Ue(){b.r||p(b.c),b=b.p}function J(e,t){e&&e.i&&(v.delete(e),e.i(t))}function Ie(e,t,n,u){if(e&&e.o){if(v.has(e))return;v.add(e),b.c.push(()=>{v.delete(e),u&&(n&&e.d(1),u())}),e.o(t)}}function en(e,t){const n=t.token={};function u(r,f,s,o){if(t.token!==n)return;t.resolved=o;let i=t.ctx;s!==void 0&&(i=i.slice(),i[s]=o);const c=r&&(t.current=r)(i);let a=!1;t.block&&(t.blocks?t.blocks.forEach((l,d)=>{d!==f&&l&&(Me(),Ie(l,1,1,()=>{t.blocks[d]===l&&(t.blocks[d]=null)}),Ue())}):t.block.d(1),c.c(),J(c,1),c.m(t.mount(),t.anchor),a=!0),t.block=c,t.blocks&&(t.blocks[f]=c),a&&M()}if(pe(e)){const r=A();if(e.then(f=>{x(r),u(t.then,1,t.value,f),x(null)},f=>{if(x(r),u(t.catch,2,t.error,f),x(null),!t.hasCatch)throw f}),t.current!==t.pending)return u(t.pending,0),!0}else{if(t.current!==t.then)return u(t.then,1,t.value,e),!0;t.resolved=e}}function tn(e,t,n){const u=t.slice(),{resolved:r}=e;e.current===e.then&&(u[e.value]=r),e.current===e.catch&&(u[e.error]=r),e.block.p(u,n)}function nn(e,t){const n={},u={},r={$$scope:1};let f=e.length;for(;f--;){const s=e[f],o=t[f];if(o){for(const i in s)i in o||(u[i]=1);for(const i in o)r[i]||(n[i]=o[i],r[i]=1);e[f]=o}else for(const i in s)r[i]=1}for(const s in u)s in n||(n[s]=void 0);return n}function un(e){return typeof e=="object"&&e!==null?e:{}}function rn(e){e&&e.c()}function cn(e,t){e&&e.l(t)}function ze(e,t,n,u){const{fragment:r,on_mount:f,on_destroy:s,after_update:o}=e.$$;r&&r.m(t,n),u||L(()=>{const i=f.map(I).filter(H);s?s.push(...i):p(i),e.$$.on_mount=[]}),o.forEach(L)}function He(e,t){const n=e.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(e,t){e.$$.dirty[0]===-1&&(k.push(e),Re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function sn(e,t,n,u,r,f,s,o=[-1]){const i=S;x(e);const c=e.$$={fragment:null,ctx:null,props:f,update:_,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:z(),dirty:o,skip_bound:!1,root:t.target||i.$$.root};s&&s(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(l,d,...h)=>{const m=h.length?h[0]:d;return c.ctx&&r(c.ctx[l],c.ctx[l]=m)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](m),a&&Ze(e,l)),d}):[],c.update(),a=!0,p(c.before_update),c.fragment=u?u(c.ctx):!1,t.target){if(t.hydrate){Ae();const l=Oe(t.target);c.fragment&&c.fragment.l(l),l.forEach(E)}else c.fragment&&c.fragment.c();t.intro&&J(e.$$.fragment),ze(e,t.target,t.anchor,t.customElement),ke(),M()}x(i)}class on{$destroy(){He(this,1),this.$destroy=_}$on(t,n){const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(n),()=>{const r=u.indexOf(n);r!==-1&&u.splice(r,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const g=[];function De(e,t){return{subscribe:We(e,t).subscribe}}function We(e,t=_){let n;const u=new Set;function r(o){if(ge(e,o)&&(e=o,n)){const i=!g.length;for(const c of u)c[1](),g.push(c,e);if(i){for(let c=0;c<g.length;c+=2)g[c][0](g[c+1]);g.length=0}}}function f(o){r(o(e))}function s(o,i=_){const c=[o,i];return u.add(c),u.size===1&&(n=t(r)||_),o(e),()=>{u.delete(c),u.size===0&&(n(),n=null)}}return{set:r,update:f,subscribe:s}}function fn(e,t,n){const u=!Array.isArray(e),r=u?[e]:e,f=t.length<2;return De(n,s=>{let o=!1;const i=[];let c=0,a=_;const l=()=>{if(c)return;a();const h=t(u?i[0]:i,s);f?s(h):a=H(h)?h:_},d=r.map((h,m)=>T(h,be=>{i[m]=be,c&=~(1<<m),o&&l()},()=>{c|=1<<m}));return o=!0,l(),function(){p(d),a()}})}var O=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ge=1/0,Pe="[object Symbol]",Be=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y="\\ud800-\\udfff",Fe="\\u0300-\\u036f\\ufe20-\\ufe23",Je="\\u20d0-\\u20f0",V="\\u2700-\\u27bf",K="a-z\\xdf-\\xf6\\xf8-\\xff",Ye="\\xac\\xb1\\xd7\\xf7",Ve="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ke="\\u2000-\\u206f",Qe=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="A-Z\\xc0-\\xd6\\xd8-\\xde",Xe="\\ufe0e\\ufe0f",X=Ye+Ve+Ke+Qe,U="['\u2019]",ee="["+X+"]",te="["+Fe+Je+"]",ne="\\d+",et="["+V+"]",ue="["+K+"]",re="[^"+Y+X+ne+V+K+Q+"]",tt="\\ud83c[\\udffb-\\udfff]",nt="(?:"+te+"|"+tt+")",ut="[^"+Y+"]",ie="(?:\\ud83c[\\udde6-\\uddff]){2}",ce="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+Q+"]",rt="\\u200d",se="(?:"+ue+"|"+re+")",it="(?:"+y+"|"+re+")",oe="(?:"+U+"(?:d|ll|m|re|s|t|ve))?",fe="(?:"+U+"(?:D|LL|M|RE|S|T|VE))?",le=nt+"?",ae="["+Xe+"]?",ct="(?:"+rt+"(?:"+[ut,ie,ce].join("|")+")"+ae+le+")*",st=ae+le+ct,ot="(?:"+[et,ie,ce].join("|")+")"+st,ft=RegExp(U,"g"),lt=RegExp(te,"g"),at=RegExp([y+"?"+ue+"+"+oe+"(?="+[ee,y,"$"].join("|")+")",it+"+"+fe+"(?="+[ee,y+se,"$"].join("|")+")",y+"?"+se+"+"+oe,y+"+"+fe,ne,ot].join("|"),"g"),dt=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ht={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},_t=typeof O=="object"&&O&&O.Object===Object&&O,xt=typeof self=="object"&&self&&self.Object===Object&&self,bt=_t||xt||Function("return this")();function mt(e,t,n,u){var r=-1,f=e?e.length:0;for(u&&f&&(n=e[++r]);++r<f;)n=t(n,e[r],r,e);return n}function pt(e){return e.match(Be)||[]}function gt(e){return function(t){return e==null?void 0:e[t]}}var yt=gt(ht);function At(e){return dt.test(e)}function kt(e){return e.match(at)||[]}var wt=Object.prototype,Et=wt.toString,de=bt.Symbol,he=de?de.prototype:void 0,_e=he?he.toString:void 0;function St(e){if(typeof e=="string")return e;if(Ot(e))return _e?_e.call(e):"";var t=e+"";return t=="0"&&1/e==-Ge?"-0":t}function jt(e){return function(t){return mt(Ct(Tt(t).replace(ft,"")),e,"")}}function vt(e){return!!e&&typeof e=="object"}function Ot(e){return typeof e=="symbol"||vt(e)&&Et.call(e)==Pe}function xe(e){return e==null?"":St(e)}function Tt(e){return e=xe(e),e&&e.replace(qe,yt).replace(lt,"")}var $t=jt(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});function Ct(e,t,n){return e=xe(e),t=n?void 0:t,t===void 0?At(e)?kt(e):pt(e):e.match(t)||[]}var ln=$t;function an(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}export{Vt as A,me as B,We as C,tn as D,Nt as E,Se as F,Ut as G,It as H,Mt as I,zt as J,en as K,_ as L,ln as M,Yt as N,Xt as O,B as P,qt as Q,fn as R,on as S,Lt as T,an as U,Jt as V,Dt as W,Gt as X,p as Y,Rt as Z,O as _,Oe as a,Wt as b,Pt as c,E as d,D as e,ve as f,$e as g,Ft as h,sn as i,rn as j,Ht as k,Zt as l,cn as m,Bt as n,ze as o,nn as p,un as q,Me as r,ge as s,$ as t,Ie as u,He as v,Ue as w,J as x,Qt as y,Kt as z};
