import{p as w,E as S,j,az as P,a2 as T,F as C}from"./CPqKy37z.js";var b;let O=Symbol("headlessui.useid"),D=0;const W=(b=S)!=null?b:function(){return j(O,()=>`${++D}`)()};function z(e){w(O,e)}function I(e){var t;if(e==null||e.value==null)return null;let o=(t=e.value.$el)!=null?t:e.value;return o instanceof Node?o:null}function v(e,t,...o){if(e in t){let n=t[e];return typeof n=="function"?n(...o):n}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,v),r}var U=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(U||{}),H=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(H||{});function M({visible:e=!0,features:t=0,ourProps:o,theirProps:r,...n}){var i;let s=E(r,o),u=Object.assign(n,{props:s});if(e||t&2&&s.static)return y(u);if(t&1){let c=(i=s.unmount)==null||i?0:1;return v(c,{0(){return null},1(){return y({...n,props:{...s,hidden:!0,style:{display:"none"}}})}})}return y(u)}function y({props:e,attrs:t,slots:o,slot:r,name:n}){var i,s;let{as:u,...c}=N(e,["unmount","static"]),l=(i=o.default)==null?void 0:i.call(o,r),g={};if(r){let f=!1,h=[];for(let[d,p]of Object.entries(r))typeof p=="boolean"&&(f=!0),p===!0&&h.push(d);f&&(g["data-headlessui-state"]=h.join(" "))}if(u==="template"){if(l=$(l??[]),Object.keys(c).length>0||Object.keys(t).length>0){let[f,...h]=l??[];if(!R(f)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(t)).map(a=>a.trim()).filter((a,m,k)=>k.indexOf(a)===m).sort((a,m)=>a.localeCompare(m)).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let d=E((s=f.props)!=null?s:{},c,g),p=P(f,d,!0);for(let a in d)a.startsWith("on")&&(p.props||(p.props={}),p.props[a]=d[a]);return p}return Array.isArray(l)&&l.length===1?l[0]:l}return T(u,Object.assign({},c,g),{default:()=>l})}function $(e){return e.flatMap(t=>t.type===C?$(t.children):[t])}function E(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},o={};for(let r of e)for(let n in r)n.startsWith("on")&&typeof r[n]=="function"?(o[n]!=null||(o[n]=[]),o[n].push(r[n])):t[n]=r[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(o).map(r=>[r,void 0])));for(let r in o)Object.assign(t,{[r](n,...i){let s=o[r];for(let u of s){if(n instanceof Event&&n.defaultPrevented)return;u(n,...i)}}});return t}function N(e,t=[]){let o=Object.assign({},e);for(let r of t)r in o&&delete o[r];return o}function R(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let A=Symbol("Context");var x=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(x||{});function V(){return B()!==null}function B(){return j(A,null)}function Y(e){w(A,e)}var F=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(F||{});export{M as A,U as N,H as S,N as T,x as a,F as b,V as c,W as i,B as l,I as o,z as s,Y as t,v as u};
