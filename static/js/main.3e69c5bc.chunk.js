(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),o=(n(9),n(2)),i=(n(10),n(11),n(0)),l=a.a.lazy((function(){return n.e(3).then(n.bind(null,14))}));function u(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(o.a)(s,2),u=r[0],d=r[1],j=Object(c.useState)(0),h=Object(o.a)(j,2),b=h[0],g=h[1];function f(){var e=document.getElementById("search-bar").value;g(1),d(!0),fetch("https://api.unsplash.com/search/collections?client_id=8ob47p2bor1FSQwzaZfyrmG_fvhp7EJqQWllFJUBUEo&query="+e+"&per_page=30").then((function(e){return e.json()})).then((function(e){a(e.results),d(!1)})).catch((function(e){console.log(e)}))}var m=6*b,p=m-6,O=n.slice(p,m);Object(c.useEffect)((function(){0!==b&&window.localStorage.setItem("curentPage",b)}),[b]),Object(c.useEffect)((function(){var e,t;a(null!==(e=JSON.parse(window.localStorage.getItem("apiFetchData")))&&void 0!==e?e:[]),g(null!==(t=window.localStorage.getItem("curentPage"))&&void 0!==t?t:0)}),[]),Object(c.useEffect)((function(){0!==n.length&&window.localStorage.setItem("apiFetchData",JSON.stringify(n))}),[n]);return u?Object(i.jsx)("div",{className:"spinner-grow loader",role:"status",children:Object(i.jsx)("span",{className:"sr-only",children:"Loading..."})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(i.jsx)("input",{id:"search-bar",type:"text",onKeyUp:function(e){"Enter"===e.code&&f()},placeholder:"Search for photos"}),Object(i.jsx)("button",{id:"search-button",onClick:f,children:Object(i.jsx)("i",{className:"fa fa-search"})})]}),Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsxs)("div",{className:"row text-center",children:[Object(i.jsx)("h1",{children:"Image Gallery"}),Object(i.jsx)("p",{children:"Your passion is capturing great moments. So is ours."}),0!==O.length?O.map((function(e,t){return Object(i.jsx)("div",{className:"col img-container",children:Object(i.jsx)("img",{src:e.preview_photos[0].urls.regular,alt:e.title.toLowerCase(),className:"rounded mx-auto d-block"},"img"+(t+1).toString())},"div"+(t+1).toString())})):Array.from({length:6},(function(e,t){return t+1})).map((function(e){return Object(i.jsx)("div",{className:"col img-container",children:Object(i.jsx)("img",{src:"https://source.unsplash.com/1600x900/?"+e,className:"rounded mx-auto d-block"})})}))]})}),Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)("div",{children:"...Loading Pagination"}),children:Object(i.jsx)(l,{postsPerPage:6,totalPosts:n.length,paginate:function(e){return g(e)}})})]})}var d=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.3e69c5bc.chunk.js.map