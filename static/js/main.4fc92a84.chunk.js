(this["webpackJsonpmatch-memory"]=this["webpackJsonpmatch-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(5),s=t.n(r),i=(t(10),t(3)),d=t(2),o=(t(11),t(12),t(0)),u=function(c){var e=c.card,t=c.handleChoice,n=c.flipped,a=c.disabled;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:n?"flipped":"",children:[Object(o.jsx)("img",{src:e.src,className:"front",alt:"card front"}),Object(o.jsx)("img",{src:"./img/cover.png",className:"back",alt:"card back",onClick:function(){a||t(e)}})]})})},j=[{src:"./img/helmet-1.png",matched:!1},{src:"./img/potion-1.png",matched:!1},{src:"./img/ring-1.png",matched:!1},{src:"./img/scroll-1.png",matched:!1},{src:"./img/shield-1.png",matched:!1},{src:"./img/sword-1.png",matched:!1}];var m=function(){var c=Object(n.useState)([]),e=Object(d.a)(c,2),t=e[0],a=e[1],r=Object(n.useState)(0),s=Object(d.a)(r,2),m=s[0],l=s[1],b=Object(n.useState)(null),h=Object(d.a)(b,2),O=h[0],f=h[1],p=Object(n.useState)(null),g=Object(d.a)(p,2),x=g[0],v=g[1],N=Object(n.useState)(!1),k=Object(d.a)(N,2),S=k[0],M=k[1],w=function(){var c=[].concat(j,j).sort((function(){return Math.random()-.5})).map((function(c){return Object(i.a)(Object(i.a)({},c),{},{id:Math.random()})}));l(0),a(c)},C=function(c){O?v(c):f(c)};return Object(n.useEffect)((function(){w()}),[]),Object(n.useEffect)((function(){O&&x&&(M(!0),O.src===x.src&&a((function(c){return c.map((function(c){return c.src===O.src?Object(i.a)(Object(i.a)({},c),{},{matched:!0}):c}))})),setTimeout((function(){f(null),v(null),l((function(c){return c+1})),M(!1)}),1e3))}),[O,x]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Magic Match"}),Object(o.jsx)("button",{onClick:w,children:"New Game"}),Object(o.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(o.jsx)(u,{handleChoice:C,card:c,flipped:c==O||c===x||c.matched,disabled:S},c.id)}))}),Object(o.jsxs)("p",{children:["Turns: ",m]})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.4fc92a84.chunk.js.map