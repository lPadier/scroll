(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,n){e.exports=n(493)},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},493:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),l=n(161),c=n.n(l),o=(n(169),n(57));n(170),n(171);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){a=!0,l=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=40,i=["scrollTop","scrollHeight","offsetTop"];function m(e){var t=e.dark,n=e.children,l=u(Object(r.useState)(0),2),c=l[0],o=l[1],m=Object(r.useRef)(null),d=Object(r.useRef)(null),f=Object(r.useRef)(null),v=Object(r.useRef)(null),b=Object(r.useRef)(!1),E=Object(r.useRef)(0),h=Object(r.useRef)(0),p=Object(r.useRef)(1);return Object(r.useEffect)(function(){var e={},t=function(e){e.preventDefault();var t=f.current;null!=t&&(b.current=!0,h.current=e.clientY,E.current=t.scrollTop);var n=m.current;null!=n&&(n.dataset.moving=!0)},n=function(){if(b.current){b.current=!1;var e=m.current;null!=e&&delete e.dataset.moving}},r=function(e){if(b.current){var t=f.current;if(null!=t){var n=(e.clientY-h.current)/p.current;t.scrollTop=E.current+n}}},a=v.current;return function t(){var n=m.current,r=f.current,a=v.current;if(null!=r){var l={};l.scrollTop=r.scrollTop,l.scrollHeight=r.scrollHeight,l.offsetHeight=r.offsetHeight,i.some(function(t){return l[t]!==e[t]})&&(null!=d.current&&clearTimeout(d.current),null!=n&&(n.dataset.scrolling=!0),d.current=setTimeout(function(){var e=m.current;null!=e&&delete e.dataset.scrolling},100),e=l);var c=l.scrollTop,o=l.scrollHeight,u=100*c/o,s=l.offsetHeight/o;p.current=s,null!=a&&(a.style.transform="translateY(".concat(u,"%) scaleY(").concat(s,")"),Array.from(a.children).forEach(function(e){return e.style.transform="scaleY(".concat(1/s,")")})),null!=n&&(s<1?delete n.dataset.hidden:n.dataset.hidden=!0)}requestAnimationFrame(t)}(),window.addEventListener("mouseup",n),window.addEventListener("mousemove",r),a.addEventListener("mousedown",t),function(){window.cancelAnimationFrame(null),window.removeEventListener("mouseup",n),window.removeEventListener("mousemove",r),a.removeEventListener("mousedown",t)}},[]),Object(r.useLayoutEffect)(function(){var e=f.current;if(null!=e){var t=e.offsetWidth-e.clientWidth;o(function(e){return t})}},[]),a.a.createElement("div",{className:"scroll-y ".concat(t?"dark":""),ref:m},a.a.createElement("div",{ref:f,className:"scroll-y__scrollbar-hider",style:{right:-s,paddingRight:s-c}},n),a.a.createElement("div",{className:"scroll-y__scrollbar-container"},a.a.createElement("div",{ref:v,className:"scroll-y__scrollbar"},a.a.createElement("div",{className:"scroll-y__scrollbar__top"}),a.a.createElement("div",{className:"scroll-y__scrollbar__bottom"}))))}var d=n(162);var f="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";function v(e){var t=e.count;return a.a.createElement(a.a.Fragment,null,new Array(t).fill(f).map(function(e,t){return a.a.createElement("p",{key:t},e)}))}function b(e){var t=e.children;return a.a.createElement("div",{className:"nativeScroll"},t)}var E=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(e),n=Object(o.a)(t,2),a=n[0],l=n[1];return Object(r.useLayoutEffect)(function(){a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]),[a,function(){return l(function(e){return!e})}]}(!0),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(r.useState)(!0),u=Object(o.a)(c,2),s=u[0],i=u[1],f=Object(r.useState)(!1),E=Object(o.a)(f,2),h=E[0],p=E[1],g=Object(r.useState)(5),w=Object(o.a)(g,2),y=w[0],O=w[1],j=s?b:m;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"@clustree/scroll"),a.a.createElement("div",{className:"main"},a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("code",null,"<ScrollY />")," is a custom scrollbar with a transparent track."),a.a.createElement("p",null,"It takes one boolean prop: ",a.a.createElement("code",null,"dark")," that determines if the scrollbar thumb is dark or light."),a.a.createElement("p",null,"This allows one to have consistent scrollbar styling across many browsers and OSes, including Internet Explorer 11."),a.a.createElement("button",{type:"button",onClick:l},"Toggle Dark mode")),a.a.createElement("div",null,a.a.createElement("h3",null,"Demo:"),a.a.createElement("h4",null,s?"Using native scrollbars":"Using <ScrollY />"," ",a.a.createElement("button",{type:"button",onClick:function(){return i(function(e){return!e})}},s?"Use <ScrollY />":"Use native scrollbars"," ")),a.a.createElement("label",null,"Number of paragraphs:"," ",a.a.createElement("input",{type:"range",min:"1",max:"10",value:y,onChange:function(e){return O(d.Number.parseInt(e.target.value,10))}})," ".concat(y)),a.a.createElement("div",{className:"demo"},a.a.createElement(j,{dark:!n},a.a.createElement("div",{className:"inner"},a.a.createElement(v,{count:y}),a.a.createElement("div",{className:"relative"},a.a.createElement("button",{onClick:function(){return p(function(e){return!e})}},"Toggle absolutely positionned content"),h?a.a.createElement("div",{className:"absolute"},"Absolute content that overflows affects total height for the scrollbar"):null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,1,2]]]);
//# sourceMappingURL=main.48d1aeec.chunk.js.map