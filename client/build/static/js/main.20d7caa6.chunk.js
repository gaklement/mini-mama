(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(19),r=n.n(a),s=n(5),o=n(6),j=n.n(o),u=n(7),d=n(0);var b=function(t){var e=t.onCreateList,n=Object(c.useState)(),i=Object(u.a)(n,2),a=i[0],r=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",onChange:function(t){return r(t.target.value)}}),Object(d.jsx)("button",{disabled:!a,onClick:function(){e(a)},children:"Add new list"})]})};var l=function(){var t=Object(c.useState)(),e=Object(u.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){j.a.get("/api/v1/lists").then((function(t){i(t.data.lists)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{onCreateList:function(t){return function(t){j.a.post("/api/v1/lists",{name:t}).then((function(){console.log("==a new list was added")}))}(t)}}),Object(d.jsx)("p",{children:"Lists:"}),n&&n.map((function(t){return Object(d.jsx)("div",{children:t.name},t.id)}))]})},O=n(20);var f={header:{borderBottom:"1px solid grey",fontSize:24,margin:"auto",textAlign:"center",width:"70%"}},h=function(){var t=Object(O.a)(f,{});return Object(d.jsxs)("div",Object(s.a)(Object(s.a)({},t),{},{children:[Object(d.jsx)("div",Object(s.a)(Object(s.a)({},t("header")),{},{children:"I LIKE FOOD"})),Object(d.jsx)(l,{})]}))},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};n(49);r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),v()}},[[50,1,2]]]);
//# sourceMappingURL=main.20d7caa6.chunk.js.map