(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{32:function(t,n,e){"use strict";e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return d}));var c=e(33),r=e.n(c);r.a.defaults.baseURL="https://api.themoviedb.org/3";var a=function(){return r.a.get("/trending/movie/day?api_key=381e4b32f80b6d35c69daa1c549c8820").then((function(t){return t.data.results})).catch((function(t){return console.log(t)}))},o=function(t){return r.a.get("/search/movie?api_key=381e4b32f80b6d35c69daa1c549c8820&query=".concat(t)).then((function(t){return t.data.results})).catch((function(t){return console.log(t)}))},i=function(t){return r.a.get("/movie/".concat(t,"?api_key=381e4b32f80b6d35c69daa1c549c8820")).then((function(t){return t.data})).catch((function(t){console.log(t)}))},u=function(t){return r.a.get("/movie/".concat(t,"/credits?api_key=f9bd48f5e3b13d2262b70dc60f892c4d")).then((function(t){return t.data.cast})).catch((function(t){console.log(t)}))},d=function(t){return r.a.get("/movie/".concat(t,"/reviews?api_key=f9bd48f5e3b13d2262b70dc60f892c4d")).then((function(t){return t.data.results})).catch((function(t){console.log(t)}))}},61:function(t,n,e){"use strict";e.r(n);var c=e(34),r=e(0),a=e(32),o=e(8),i=e(1);n.default=function(){var t=Object(r.useState)([]),n=Object(c.a)(t,2),e=n[0],u=n[1];return Object(r.useEffect)((function(){Object(a.d)().then((function(t){return u(t.map((function(t){var n=t.title,e=t.id;return Object(i.jsx)("li",{children:Object(i.jsx)(o.c,{to:{pathname:"/movies/".concat(e),state:{page:"/"}},children:n})},e)})))}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Trending today"}),Object(i.jsx)("ul",{children:e})]})}}}]);
//# sourceMappingURL=HomePage.a4a66b3a.chunk.js.map