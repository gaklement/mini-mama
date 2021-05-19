(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(34),o=n.n(a),r=n(2),s=n(8),l=n(11),d=n.n(l),j=n(5),b={turquoise:"#6cc2bd",blue:"#5a819e",darkBlue:"#4a718e",jiggaBlue:"#1D394D",purple:"#7d7aa2",apricot:"#f67e7d",apricotDark:"#773231",apricotDisabled:"#ffadab",salmon:"#ffc1a7",concealer:"#ffe5c4",grey:"#b5b5b5",darkGrey:"#313131",greyDisabled:"#969696",yellow:"#e8c750"},u=n(0);var O={alignItems:"center",backgroundColor:b.yellow,border:"none",borderRadius:3,color:b.darkGrey,display:"flex",fontFamily:"monospace",fontSize:15,height:36,justifyContent:"center",width:135,"&disabled":{backgroundColor:b.apricotDisabled,color:b.greyDisabled},"&secondary":{backgroundColor:b.grey,color:b.darkGrey}},h=function(e){var t=e.disabled,n=e.children,c=e.onClick,i=e.secondary,a=e.style,o=Object(j.a)(O,{style:a},{"&secondary":i,"&disabled":t});return Object(u.jsx)("button",Object(r.a)(Object(r.a)({},o),{},{disabled:t,onClick:c,children:n}))},f=n(37);var p={width:36},m=function(e){var t=e.style,n=Object(f.a)(e,["style"]),c=Object(j.a)(p,{style:t});return Object(u.jsx)(h,Object(r.a)(Object(r.a)({},n),{},{style:c}))},x=n(12),g=n(13);var y={confirmDeleteHint:{color:b.darkGrey,fontSize:16,paddingLeft:20,paddingRight:20,paddingTop:20},confirmDeleteModal:{backgroundColor:"white",borderRadius:3,bottom:"".concat(40,"%"),height:"".concat(20,"%"),justifyContent:"center",opacity:"90%",position:"absolute",right:"".concat(5,"%"),width:"".concat(90,"%")},createListButton:{bottom:20,position:"absolute"},deleleList:{backgroundColor:b.turquoise},editButton:{bottom:20,position:"absolute",right:0,marginRight:8},listsContainer:{marginBottom:20,maxHeight:310,overflowY:"scroll"},listContainer:{display:"flex",justifyContent:"space-between"},listTitle:{backgroundColor:b.darkBlue,borderRadius:3,flexGrow:1,fontSize:20,marginBottom:5,marginRight:5,paddingBottom:7,paddingLeft:5,paddingTop:7},listsTitle:{fontSize:"24px",marginBottom:20},modalActionsContainer:{display:"flex",justifyContent:"space-around",paddingTop:20}},v=function(e){var t=e.history,n=Object(c.useState)([]),i=Object(s.a)(n,2),a=i[0],o=i[1],l=Object(c.useState)(!1),b=Object(s.a)(l,2),O=b[0],f=b[1],p=Object(c.useState)(!1),v=Object(s.a)(p,2),C=v[0],k=v[1],I=Object(c.useState)({}),w=Object(s.a)(I,2),B=w[0],D=w[1],L=Object(j.a)(y,{});function S(){d.a.get("/api/v1/lists").then((function(e){var t=e.data;o(t.lists)}))}return Object(c.useEffect)((function(){S()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",Object(r.a)(Object(r.a)({},L("listsTitle")),{},{children:"Meine Listen"})),Object(u.jsx)("div",Object(r.a)(Object(r.a)({},L("listsContainer")),{},{children:a.map((function(e){return Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},L("listContainer")),{},{children:[Object(c.createElement)("div",Object(r.a)(Object(r.a)({},L("listTitle")),{},{key:e.id,onClick:function(){t.push("/listDetail/".concat(e.id))}}),e.name),O&&Object(u.jsx)(m,{onClick:function(){D(e),k(!0)},style:L("deleleList"),children:Object(u.jsx)(x.a,{icon:g.e})})]}))}))})),Object(u.jsx)("div",Object(r.a)(Object(r.a)({},L("createListButton")),{},{children:Object(u.jsx)(h,{onClick:function(){t.push("/create")},children:"Neue Liste"})})),Object(u.jsx)("div",Object(r.a)(Object(r.a)({},L("editButton")),{},{children:O?Object(u.jsx)(h,{onClick:function(){f(!1)},secondary:!0,children:"Abbrechen"}):Object(u.jsx)(h,{onClick:function(){f(!0)},secondary:!0,children:"Bearbeiten"})})),C&&Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},L("confirmDeleteModal")),{},{children:[Object(u.jsx)("div",Object(r.a)(Object(r.a)({},L("confirmDeleteHint")),{},{children:'Soll die Liste "'.concat(B.name,'" wirklich gel\xf6scht werden?')})),Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},L("modalActionsContainer")),{},{children:[Object(u.jsx)(h,{secondary:!0,onClick:function(){D({}),k(!1)},children:"Abbrechen"}),Object(u.jsx)(h,{onClick:function(){f(!1),d.a.delete("/api/v1/list?listId=".concat(B.id)).then((function(){S(),D({}),k(!1)}))},children:"Best\xe4tigen"})]}))]}))]})},C=n(36),k=n(4);var I={borderBottom:"1px solid white",done:{float:"right"}},w=function(e){var t=e.listItem,n=e.onClick,c=Object(j.a)(I,{});return Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},c),{},{onClick:function(){return n(t)},children:[t.name,t.done&&Object(u.jsx)("span",Object(r.a)(Object(r.a)({},c("done")),{},{children:"Done"}))]}))};var B={borderRadius:3,border:"none",fontFamily:"monospace",fontSize:15,height:33,paddingLeft:5},D=function(e){var t=e.onChange,n=e.onKeyDown,c=e.placeholder,i=e.style,a=e.value,o=Object(j.a)(B,{style:i});return Object(u.jsx)("input",Object(r.a)(Object(r.a)({},o),{},{type:"text",onChange:t,onKeyDown:function(e){"Enter"===e.key&&n(a)},placeholder:c,value:a}))};var L={display:"flex",marginBottom:20,addItemInput:{flexGrow:1,marginRight:5}},S=function(e){var t=e.currentListItem,n=e.onAddListItem,c=e.onChange,i=Object(j.a)(L,{});return Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},i),{},{children:[Object(u.jsx)(D,{onChange:c,onKeyDown:n,placeholder:"Produkt eingeben",style:i("addItemInput"),value:t}),Object(u.jsx)(m,{disabled:!t,onClick:function(){return n()},children:Object(u.jsx)(x.a,{icon:g.d})})]}))};var T={display:"flex",justifyContent:"space-between",input:{flexGrow:1,marginRight:5}},R=function(e){var t=e.newListName,n=e.onChange,c=e.updateListName,i=Object(j.a)(T,{});return Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},i),{},{children:[Object(u.jsx)(D,{onChange:n,onKeyDown:function(){return t&&c(t)},style:i("input"),value:t}),Object(u.jsx)(m,{onClick:c,disabled:!t,children:Object(u.jsx)(x.a,{icon:g.b})})]}))};var A={backButton:{position:"absolute",bottom:20},cancelButton:{position:"absolute",bottom:20},listTitle:{display:"flex",fontSize:20,justifyContent:"space-between",marginBottom:5}},E=function(e){var t=e.history,n=e.match,i=Object(c.useState)(""),a=Object(s.a)(i,2),o=a[0],l=a[1],b=Object(c.useState)({}),O=Object(s.a)(b,2),f=O[0],p=O[1],y=Object(c.useState)(!1),v=Object(s.a)(y,2),C=v[0],k=v[1],I=Object(c.useState)(f.name),B=Object(s.a)(I,2),D=B[0],L=B[1],T=Object(j.a)(A,{}),E=Object(c.useCallback)((function(){d.a.get("/api/v1/list?listId=".concat(n.params.listId)).then((function(e){var t=e.data;return p(t)}))}),[n.params.listId]);Object(c.useEffect)((function(){return E()}),[E]),Object(c.useEffect)((function(){return L(f.name)}),[f]);var F=Object(c.useCallback)((function(){d.a.put("/api/v1/lists",{id:n.params.listId,item:o}).then((function(){return E()})),l("")}),[o,E,n.params.listId]),G=Object(c.useCallback)((function(e){d.a.put("/api/v1/item",{itemId:e.id,listId:n.params.listId}).then((function(){return E(n.params.listId)}))}),[E,n.params.listId]),N=Object(c.useCallback)((function(){k(!1),d.a.put("/api/v1/list",{listId:n.params.listId,newName:D}).then((function(){return E(n.params.listId)}))}),[n.params.listId,E,D]),z=f.items?f.items.filter((function(e){return!e.done})):[],K=f.items?f.items.filter((function(e){return e.done})):[];return Object(u.jsx)("div",{children:C?Object(u.jsxs)("div",{children:[Object(u.jsx)(R,{newListName:D,onChange:function(e){return L(e.target.value)},updateListName:N}),Object(u.jsx)(h,{onClick:function(){return k(!1)},secondary:!0,style:T("cancelButton"),children:"Abbrechen"})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},T("listTitle")),{},{children:[f.name,Object(u.jsx)(m,{onClick:function(){k(!0)},children:Object(u.jsx)(x.a,{icon:g.c})})]})),Object(u.jsx)(S,{currentListItem:o,onAddListItem:F,onChange:function(e){return l(e.target.value)}}),z.map((function(e){return Object(u.jsx)(w,{listId:f.id,listItem:e,onClick:G},e.id)})),K.length>0&&Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Closed"}),K.map((function(e){return Object(u.jsx)(w,{listId:f.id,listItem:e,onClick:G},e.id)}))]}),Object(u.jsx)(m,{onClick:function(){return t.push("/")},secondary:!0,style:T("backButton"),children:Object(u.jsx)(x.a,{icon:g.a})})]})})};var F={display:"flex",flexDirection:"column",actions:{display:"flex",justifyContent:"space-between",marginTop:5},cancelButton:{marginRight:5,width:"50%"},confirm:{width:"50%"}},G=function(e){var t=e.history,n=Object(c.useState)(""),i=Object(s.a)(n,2),a=i[0],o=i[1],l=Object(j.a)(F,{});function b(e){d.a.post("/api/v1/lists",{name:e}).then((function(e){var n=e.data;o(""),t.push("/listDetail/".concat(n.listId))}))}return Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},l),{},{children:[Object(u.jsx)(D,{onChange:function(e){return o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&b(a)},placeholder:"Name der Liste",value:a}),Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},l("actions")),{},{children:[Object(u.jsx)(h,{onClick:function(){return t.push("/")},secondary:!0,style:l("cancelButton"),children:"Abbrechen"}),Object(u.jsx)(h,{onClick:function(){return b(a)},disabled:!a,style:l("confirm"),children:"Fertig"})]}))]}))},N=n.p+"static/media/rocco_blue.08bcd557.png";var z={header:{display:"flex",marginBottom:50},logo:{width:"30%"}},K=function(){var e=Object(j.a)(z,{});return Object(u.jsx)("div",Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsxs)(C.a,{children:[Object(u.jsx)("div",Object(r.a)(Object(r.a)({},e("header")),{},{children:Object(u.jsx)("img",Object(r.a)(Object(r.a)({},e("logo")),{},{src:N,alt:"logo-rooster",onClick:function(){return window.location="/"}}))})),Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{path:"/",exact:!0,component:v}),Object(u.jsx)(k.a,{path:"/create",exact:!0,component:G}),Object(u.jsx)(k.a,{path:"/listDetail/:listId",exact:!0,component:E}),Object(u.jsx)(k.a,{path:"/",render:function(){return Object(u.jsx)("div",{children:"404"})}})]})]})}))},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};n(71);o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root")),M()}},[[72,1,2]]]);
//# sourceMappingURL=main.2e36904d.chunk.js.map