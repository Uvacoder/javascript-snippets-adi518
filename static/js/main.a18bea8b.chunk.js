(this["webpackJsonpjavascript-snippets-site"]=this["webpackJsonpjavascript-snippets-site"]||[]).push([[0],{149:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(12),o=t.n(i),c=(t(56),t(14)),l=t(1),s=t(2),u=t(150);function m(){var n=Object(l.a)(["\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  padding: 1rem;\n  align-items: center;\n  position: absolute;\n  transition: background-color 0.5s, padding 0.5s;\n\n  &.is-sticky {\n    position: fixed;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    background-color: rgba(var(--color-foreground-rgba), 0.85);\n\n    // FIXME: hacky workaround\n    svg {\n      fill: white;\n      width: 1.5rem;\n    }\n\n    .Title {\n      color: white;\n      visibility: visible;\n\n      @media (max-width: 425px) {\n        display: unset;\n      }\n    }\n  }\n"]);return m=function(){return n},n}var d=s.a.div(m()),p=function(n){var e=n.children,t=Object(u.a)().y;return a.a.createElement(d,{className:t>0?"is-sticky":null},e)};function f(){var n=Object(l.a)(["\n  padding: 4rem 14rem;\n  min-height: 100vh;\n\n  @media (max-width: 1024px) {\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  @media (max-width: 768px) {\n    padding: 2rem;\n  }\n"]);return f=function(){return n},n}var g=s.a.div(f());function h(){var n=Object(l.a)(["\n  --scale: 1;\n  --dim: calc(10rem * var(--scale));\n  --span1-font-size: calc(4rem * var(--scale));\n  --span2-font-size: calc(2rem * var(--scale));\n  // https://stackoverflow.com/a/51432213/4106263\n  display: flex;\n  text-align: left;\n  align-items: left;\n  position: relative;\n  width: var(--dim);\n  height: var(--dim);\n  flex-direction: column;\n  justify-content: center;\n  transform-style: preserve-3d;\n  transform: skew(-10deg, 0deg);\n  padding: calc(1rem * var(--scale));\n  transition: width 0.5s height 0.5s;\n  background: rgb(93, 0, 165);\n  background: linear-gradient(\n    0deg,\n    rgba(93, 0, 165, 0.3309698879551821) 0%,\n    rgba(143, 0, 205, 1) 100%\n  );\n\n  &::before {\n    height: var(--dim);\n    width: var(--dim);\n    content: '';\n    opacity: 0.25;\n    display: block;\n    background: white;\n    position: absolute;\n    box-shadow: 1rem 1rem 1rem;\n    transform: translateZ(-1px) translateY(1rem);\n  }\n\n  span {\n    color: white;\n    transition: font-size 0.5s;\n  }\n\n  span:nth-child(1) {\n    font-size: var(--span1-font-size);\n    text-shadow: 1rem 1rem 0.5rem rgba(0, 0, 0, 0.25);\n  }\n\n  span:nth-child(2) {\n    font-size: var(--span2-font-size);\n  }\n\n  @media (max-width: 768px) {\n    --scale: 0.9;\n  }\n\n  @media (max-width: 425px) {\n    --scale: 0.666;\n  }\n"]);return h=function(){return n},n}var v=s.a.div(h()),b=function(){return a.a.createElement(v,null,a.a.createElement("span",null,"JS"),a.a.createElement("span",null,"Snippets"))},w=t(48),E=function(n){var e=n.children,t=n.ariaLabel,r=void 0===t?"Emoji":t,i=Object(w.a)(n,["children","ariaLabel"]);return a.a.createElement("span",Object.assign({role:"img","aria-label":r},i),e)},x=E,y=t(5);function k(){var n=Object(l.a)(["\n  @media (max-width: 425px) {\n    display: none;\n  }\n"]);return k=function(){return n},n}var j=s.a.span(k()),z=function(){return a.a.createElement(j,{className:"Title"},"JS Snippets ",y.version)};function O(){var n=Object(l.a)(["\n  line-height: 2;\n  transition: font-size 0.5s;\n\n  &::before {\n    content: '< ';\n  }\n\n  &::after {\n    content: ' />';\n  }\n\n  @media (max-width: 768px) {\n    font-size: 1.25rem;\n  }\n"]);return O=function(){return n},n}function S(){var n=Object(l.a)(["\n  margin-top: 4rem;\n  font-size: 1.5rem;\n  text-align: center;\n  letter-spacing: 0.5rem;\n"]);return S=function(){return n},n}var J=s.a.div(S()),M=s.a.div(O()),I=function(){return a.a.createElement(J,null,a.a.createElement(M,{className:"animated pulse infinite slow"},"Improve your JavaScript ",a.a.createElement(x,null,"\ud83e\udd84")))};function N(){var n=Object(l.a)(["\n  color: var(--color-foreground);\n  transition: background-color 0.5s;\n\n  &:hover {\n    color: white;\n    background-color: var(--color-foreground);\n  }\n"]);return N=function(){return n},n}var P=s.a.a.attrs((function(){return{rel:"noopener noreferrer"}}))(N());function A(){var n=Object(l.a)(["\n  font-size: 0;\n\n  svg {\n    width: 1.15rem;\n    display: inline-block;\n  }\n"]);return A=function(){return n},n}function B(){var n=Object(l.a)(["\n  display: flex;\n  padding: 2rem;\n  margin-top: 4rem;\n  min-height: 10rem;\n  text-align: center;\n  align-items: center;\n  word-break: break-word;\n  justify-content: center;\n  background-color: gainsboro;\n"]);return B=function(){return n},n}var C=s.a.footer(B()),G=s.a.span(A()),L=function(){return a.a.createElement(G,null,a.a.createElement("svg",{fill:"red",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.a.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})))},T=function(){return a.a.createElement(C,null,a.a.createElement("div",null,"Made with\xa0",a.a.createElement(L,null),"\xa0by\xa0",a.a.createElement(P,{href:"https://github.com/roeib"},"@roeib"),",\xa0",a.a.createElement(P,{href:"https://www.linkedin.com/in/matan-yossef-931496111"},"@matany"),",\xa0",a.a.createElement(P,{href:"https://github.com/adi518"},"@adi518"),"\xa0and\xa0",a.a.createElement(P,{href:"https://github.com/JSsnippets/JavaScript-snippets/graphs/contributors"},"contributors"),"."))};function H(){var n=Object(l.a)(["\n  opacity: 0.5;\n  transition: opacity 0.5s;\n\n  a {\n    font-size: 0;\n    display: block;\n  }\n\n  svg {\n    width: 2rem;\n    fill: var(--color-foreground);\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return H=function(){return n},n}function W(){var n=Object(l.a)(["\n  z-index: 1;\n  display: grid;\n  grid-gap: 0.5rem;\n  margin-left: auto;\n  grid-auto-flow: column;\n"]);return W=function(){return n},n}var Y=s.a.div(W()),D=s.a.div(H()),F=Y,X=t(26),Z=t.n(X),$=t(43),_=t(47),q=t(44),K=t.n(q),Q=t(42),R=t(45),U=t.n(R),V=t(46),nn=t.n(V);t(147);function en(){var n=Object(l.a)(["\n  margin: auto;\n\n  :not(pre) > code[class*='language-'],\n  pre[class*='language-'] {\n    margin-top: 2rem;\n    border-radius: 0.5rem;\n    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);\n  }\n\n  h1 {\n    margin-top: 6rem;\n  }\n"]);return en=function(){return n},n}var tn=s.a.div(en()),rn=function(){var n=Object(r.useState)(null),e=Object(_.a)(n,2),t=e[0],i=e[1];return Object(Q.a)((function(){Object($.a)(Z.a.mark((function n(){var e,t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(nn.a);case 2:return e=n.sent,n.next=5,e.text();case 5:t=n.sent,i(t),K.a.highlightAll();case 8:case"end":return n.stop()}}),n)})))()})),a.a.createElement(tn,null,a.a.createElement(U.a,{source:t}))};function an(){var n=Object(l.a)(["\n  display: flex;\n  min-height: 100vh;\n  padding-top: 4rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 4rem;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  background-color: gainsboro;\n  color: var(--color-foreground);\n  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.05);\n"]);return an=function(){return n},n}var on=s.a.div(an());function cn(){var n=Object(l.a)(["\n  outline: none;\n  min-width: 10rem;\n  font-size: 1.25rem;\n  border-radius: 2rem;\n  padding: 0.5rem 1.5rem;\n  background-color: transparent;\n  color: var(--color-foreground);\n  font-family: var(--font-family);\n  transition: background-color 0.5s;\n  border: 0.125rem solid var(--color-foreground);\n\n  &:focus {\n    box-shadow: 0 0 0.25rem;\n  }\n\n  &:hover {\n    color: white;\n    background-color: var(--color-foreground);\n  }\n"]);return cn=function(){return n},n}var ln=s.a.button(cn());function sn(){var n=Object(l.a)(["\n  @media (max-width: 425px) {\n    display: none;\n  }\n"]);return sn=function(){return n},n}function un(){var n=Object(l.a)(["\n  font-size: 0;\n  margin-top: 2rem;\n  letter-spacing: 0.05rem;\n  transform: translateY(5px);\n\n  @media (max-width: 425px) {\n    position: absolute;\n    margin-top: 0;\n    left: 1rem;\n    top: 1rem;\n  }\n"]);return un=function(){return n},n}function mn(){var n=Object(l.a)(["\n  display: grid;\n  grid-gap: 1rem;\n  grid-auto-flow: column;\n\n  @media (max-width: 425px) {\n    grid-gap: 0;\n  }\n"]);return mn=function(){return n},n}function dn(){var n=Object(l.a)(["\n  display: flex;\n  font-size: 1.5rem;\n  margin-top: 3rem;\n  text-align: center;\n  flex-direction: column;\n"]);return dn=function(){return n},n}var pn=s.a.div(dn()),fn=s.a.div(mn()),gn=s.a.div(un()),hn=function(){return a.a.createElement(gn,null,a.a.createElement("a",{"data-size":"large","data-show-count":"true",className:"github-button",href:y.repository.url,"aria-label":"Star JSsnippets/JavaScript-snippets on GitHub"},"Star"))},vn=Object(s.a)(ln)(sn()),bn=function(){return a.a.createElement("a",{href:y.repository.url},a.a.createElement(vn,null,"GitHub"))},wn=function(){return a.a.createElement(pn,null,a.a.createElement(fn,null,a.a.createElement(c.Link,{to:"Page-Markdown",smooth:!0},a.a.createElement(ln,null,"Get started")),a.a.createElement(bn,null)),a.a.createElement(hn,null))},En=function(){return a.a.createElement(D,null,a.a.createElement("a",{href:y.repository.url},a.a.createElement("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 496 512",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))))},xn=function(){return a.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"}))},yn=function(){return a.a.createElement(D,null,a.a.createElement("a",{href:"https://www.facebook.com/snippetsJS"},a.a.createElement(xn,null)))};t(148);var kn=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(on,{className:"animated fadeIn"},a.a.createElement(p,null,a.a.createElement(z,null),a.a.createElement(F,null,a.a.createElement(yn,null),a.a.createElement(En,null))),a.a.createElement(b,null),a.a.createElement(I,null),a.a.createElement(wn,null)),a.a.createElement(c.Element,{name:"Page-Markdown"},a.a.createElement(g,null,a.a.createElement("h1",null,"Getting started"),a.a.createElement("p",null,"JS Snippets is all about staying updated with the latest JavaScript APIs. The following snippets consist of new and old APIs, so you get to see how things changed over time. JavaScript's undisputed nature makes it one of the fastest evolving languages. So go ahead, check out some of those snippets and who knows, you might be surprised with a feature or API you never knew existed! ",a.a.createElement(x,null,"\ud83d\udc4c")),a.a.createElement(rn,null))),a.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(kn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},46:function(n,e,t){n.exports=t.p+"static/media/SNIPPETS.7c8c2b08.md"},5:function(n){n.exports=JSON.parse('{"name":"javascript-snippets-site","version":"0.1.0","private":true,"homepage":"https://adi518.github.io/JavaScript-snippets","repository":{"url":"https://github.com/JSsnippets/JavaScript-snippets"},"dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","animate.css":"^3.7.2","node-sass":"^4.13.1","prism-themes":"^1.3.0","prismjs":"^1.19.0","react":"^16.12.0","react-dom":"^16.12.0","react-markdown":"^4.3.1","react-scripts":"3.3.1","react-scroll":"^1.7.16","react-use":"^13.24.0","styled-components":"^5.0.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"yarn build","deploy":"node ./gh-pages"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^2.2.0"}}')},51:function(n,e,t){n.exports=t(149)},56:function(n,e,t){}},[[51,1,2]]]);
//# sourceMappingURL=main.a18bea8b.chunk.js.map