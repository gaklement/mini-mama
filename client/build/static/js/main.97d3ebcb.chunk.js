(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(34),o=n.n(a),r=n(2),s=n(10),l=n(6),d=n(5),j={apricot:"#f67e7d",apricotDark:"#773231",apricotDisabled:"#ffadab",blue:"#5a819e",blueDark:"#4a718e",concealer:"#ffe5c4",grey:"#b5b5b5",greyDark:"#313131",greyDisabled:"#969696",jiggaBlue:"#1D394D",jiggaBlueLight:"#326082",purple:"#7d7aa2",salmon:"#ffc1a7",turquoise:"#6cc2bd",yellow:"#e8c750"},b=n(0);var u={alignItems:"center",backgroundColor:j.yellow,border:"none",borderRadius:3,color:j.greyDark,display:"flex",fontFamily:"monospace",fontSize:15,height:36,justifyContent:"center",width:135,"&disabled":{backgroundColor:j.apricotDisabled,color:j.greyDisabled},"&secondary":{backgroundColor:j.grey,color:j.greyDark}},O=function(e){var t=e.disabled,n=e.children,i=e.onClick,c=e.secondary,a=e.style,o=Object(d.a)(u,{style:a},{"&disabled":t,"&secondary":c});return Object(b.jsx)("button",Object(r.a)(Object(r.a)({},o),{},{disabled:t,onClick:i,children:n}))};var h={borderRadius:3,border:"none",fontFamily:"monospace",fontSize:15,marginTop:"0em",marginBottom:"0em",paddingLeft:5},m=function(e){var t=e.onChange,n=e.onKeyDown,i=e.placeholder,c=e.style,a=e.value,o=Object(d.a)(h,{style:c});return Object(b.jsx)("input",Object(r.a)(Object(r.a)({},o),{},{type:"text",onChange:t,onKeyDown:function(e){return n(e,a)},placeholder:i,value:a}))},f=n(37);var g={width:36,"&small":{width:20,height:20,fontSize:12}},p=function(e){var t=e.small,n=e.style,i=Object(f.a)(e,["small","style"]),c=Object(d.a)(g,{style:n},{"&small":t});return Object(b.jsx)(O,Object(r.a)(Object(r.a)({},i),{},{style:c}))},x=n(8);var v={display:"flex",justifyContent:"space-between",input:{flexGrow:1,marginRight:5}},y=function(e){var t=e.newListName,n=void 0===t?"":t,i=e.onChange,c=e.updateListName,a=Object(d.a)(v,{});return Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},a),{},{children:[Object(b.jsx)(m,{onChange:i,onKeyDown:function(e){return"Enter"===e.key&&n&&c(n)},style:a("input"),value:n}),Object(b.jsx)(p,{onClick:c,disabled:!n,children:Object(b.jsx)(x.a,{icon:l.b})})]}))},C=n(12),k=n.n(C);var I={confirmDeleteHint:{color:j.greyDark,fontSize:16,paddingLeft:20,paddingRight:20,paddingTop:20},confirmDeleteModal:{backgroundColor:"white",borderRadius:3,bottom:"".concat(39,"%"),height:"".concat(22,"%"),justifyContent:"center",opacity:"90%",position:"absolute",right:"".concat(5,"%"),width:"".concat(90,"%")},createListButton:{bottom:20,position:"absolute"},deleleList:{backgroundColor:j.turquoise},editActions:{display:"flex"},editMode:{bottom:20,position:"absolute",right:0,marginRight:8},editName:{marginLeft:5},listsContainer:{marginBottom:20,maxHeight:310,overflowY:"scroll"},listContainer:{display:"flex",justifyContent:"space-between"},listTitle:{backgroundColor:j.blueDark,borderRadius:3,flexGrow:1,fontSize:19,marginBottom:5,marginRight:5,paddingBottom:7,paddingLeft:5,paddingTop:7},listsTitle:{fontSize:"24px",marginBottom:20},modalActionsContainer:{display:"flex",justifyContent:"space-around",paddingTop:20}},w=function(e){var t=e.history,n=Object(i.useState)([]),c=Object(s.a)(n,2),a=c[0],o=c[1],j=Object(i.useState)(!1),u=Object(s.a)(j,2),h=u[0],m=u[1],f=Object(i.useState)(!1),g=Object(s.a)(f,2),v=g[0],C=g[1],w=Object(i.useState)(!1),D=Object(s.a)(w,2),B=D[0],L=D[1],S=Object(i.useState)({}),T=Object(s.a)(S,2),R=T[0],A=T[1],N=Object(i.useState)({}),z=Object(s.a)(N,2),E=z[0],F=z[1],M=Object(d.a)(I,{});function K(){k.a.get("/api/v1/lists").then((function(e){var t=e.data;o(t.lists)}))}Object(i.useEffect)((function(){K()}),[]);var H=Object(i.useCallback)((function(){C(!1),k.a.put("/api/v1/list",{listId:E.id,newName:E.name}).then((function(){K()}))}),[E,C]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",Object(r.a)(Object(r.a)({},M("listsTitle")),{},{children:"Meine Listen"})),v?Object(b.jsx)(y,{newListName:E.name,onChange:function(e){var t=e.target;F(Object(r.a)(Object(r.a)({},E),{},{name:t.value}))},updateListName:function(e){m(!1),H(e)}}):Object(b.jsxs)("div",{children:[Object(b.jsx)("div",Object(r.a)(Object(r.a)({},M("listsContainer")),{},{children:a.map((function(e){return Object(i.createElement)("div",Object(r.a)(Object(r.a)({},M("listContainer")),{},{key:e.id}),Object(b.jsx)("div",Object(r.a)(Object(r.a)({},M("listTitle")),{},{onClick:function(){t.push("/listDetail/".concat(e.id))},children:e.name})),h&&Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},M("editActions")),{},{children:[Object(b.jsx)(p,{onClick:function(){A(e),L(!0)},style:M("deleleList"),children:Object(b.jsx)(x.a,{icon:l.f})}),Object(b.jsx)(p,{onClick:function(){C(!0),F(e)},style:M("editName"),children:Object(b.jsx)(x.a,{icon:l.c})})]})))}))})),Object(b.jsx)("div",Object(r.a)(Object(r.a)({},M("createListButton")),{},{children:Object(b.jsx)(O,{onClick:function(){t.push("/create")},children:"Neue Liste"})})),Object(b.jsx)("div",Object(r.a)(Object(r.a)({},M("editMode")),{},{children:h?Object(b.jsx)(O,{onClick:function(){m(!1)},secondary:!0,children:"Abbrechen"}):Object(b.jsx)(O,{onClick:function(){m(!0)},secondary:!0,children:"Bearbeiten"})}))]}),B&&Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},M("confirmDeleteModal")),{},{children:[Object(b.jsx)("div",Object(r.a)(Object(r.a)({},M("confirmDeleteHint")),{},{children:'Soll die Liste "'.concat(R.name,'" wirklich gel\xf6scht werden?')})),Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},M("modalActionsContainer")),{},{children:[Object(b.jsx)(O,{secondary:!0,onClick:function(){A({}),L(!1),m(!1)},children:"Abbrechen"}),Object(b.jsx)(O,{onClick:function(){m(!1),k.a.delete("/api/v1/list?listId=".concat(R.id)).then((function(){K(),A({}),L(!1)}))},children:"Best\xe4tigen"})]}))]}))]})},D=n(36),B=n(4);var L={display:"flex",marginBottom:20,addItemInput:{flexGrow:1,marginRight:5}},S=function(e){var t=e.currentListItem,n=e.onAddListItem,i=e.onChange,c=Object(d.a)(L,{});return Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},c),{},{children:[Object(b.jsx)(m,{onChange:i,onKeyDown:function(e,i){"Enter"===e.key&&t&&n(i)},placeholder:"Produkt eingeben",style:c("addItemInput"),value:t}),Object(b.jsx)(p,{disabled:!t,onClick:n,children:Object(b.jsx)(x.a,{icon:l.d})})]}))};var T={borderBottom:"1px solid white",display:"flex",fontSize:18,justifyContent:"space-between",marginBottom:10,paddingBottom:5,buttonContainer:{display:"flex"},deleteItem:{backgroundColor:j.turquoise,marginRight:5}},R=function(e){e.listId;var t=e.listItem,n=e.onDeleteItem,i=e.onToggleItem,c=Object(d.a)(T,{});return Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},c),{},{onClick:function(){return i(t)},children:[t.name,t.done&&Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},c("buttonContainer")),{},{children:[Object(b.jsx)(p,Object(r.a)(Object(r.a)({},c("deleteItem")),{},{onClick:n,small:!0,children:Object(b.jsx)(x.a,{icon:l.f})})),Object(b.jsx)(p,{small:!0,children:Object(b.jsx)(x.a,{icon:l.e})})]}))]}))};var A={backgroundColor:j.jiggaBlueLight,borderRadius:3,marginBottom:10,maxHeight:310,overflowY:"scroll",paddingLeft:5,paddingRight:5,paddingTop:10,paddingBottom:10},N={actions:{display:"flex",justifyContent:"space-between"},backButton:{bottom:20},cancelButton:{position:"absolute",bottom:20},listItemContainer:A,oldListItemContainer:Object(r.a)(Object(r.a)({},A),{},{backgroundColor:j.purple}),oldSection:{marginTop:30},title:{fontSize:20,marginBottom:15}},z=function(e){var t=e.history,n=e.match,c=Object(i.useState)(""),a=Object(s.a)(c,2),o=a[0],j=a[1],u=Object(i.useState)({}),O=Object(s.a)(u,2),h=O[0],m=O[1],f=Object(i.useState)(!1),g=Object(s.a)(f,2),v=g[0],y=g[1],C=Object(d.a)(N,{}),I=Object(i.useCallback)((function(){k.a.get("/api/v1/list?listId=".concat(n.params.listId)).then((function(e){var t=e.data;return m(t)}))}),[n.params.listId]);Object(i.useEffect)((function(){return I()}),[I]);var w=Object(i.useCallback)((function(){var e="".concat(o.charAt(0).toUpperCase()).concat(o.slice(1));k.a.put("/api/v1/lists",{id:n.params.listId,item:e}).then((function(){return I()})),j("")}),[o,I,n.params.listId]),D=Object(i.useCallback)((function(e){k.a.put("/api/v1/item",{itemId:e.id,listId:n.params.listId}).then((function(){return I(n.params.listId)}))}),[I,n.params.listId]),B=h.items?h.items.filter((function(e){return!e.done})):[],L=h.items?h.items.filter((function(e){return e.done})):[];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",Object(r.a)(Object(r.a)({},C("title")),{},{children:h.name})),Object(b.jsx)(S,{currentListItem:o,onAddListItem:w,onChange:function(e){return j(e.target.value)}}),B.length>0&&Object(b.jsx)("div",Object(r.a)(Object(r.a)({},C("listItemContainer")),{},{children:B.map((function(e){return Object(b.jsx)(R,{listId:h.id,listItem:e,onToggleItem:D},e.id)}))})),v&&L.length>0&&Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},C("oldSection")),{},{children:[Object(b.jsx)("div",Object(r.a)(Object(r.a)({},C("title")),{},{children:"Erledigt"})),Object(b.jsx)("div",Object(r.a)(Object(r.a)({},C("oldListItemContainer")),{},{children:L.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return Object(b.jsx)(R,{listId:h.id,listItem:e,onToggleItem:function(e){1===L.length&&y(!1),D(e)},onDeleteItem:function(t){k.a.delete("/api/v1/item?id=".concat(e.id,"&listId=").concat(h.id)).then((function(){I()})),t.stopPropagation()}},e.id)}))}))]})),Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},C("actions")),{},{children:[Object(b.jsx)(p,{onClick:function(){return t.push("/")},secondary:!0,style:C("backButton"),children:Object(b.jsx)(x.a,{icon:l.a})}),L.length>0&&Object(b.jsx)(p,{onClick:function(){y(!v)},secondary:!v,children:Object(b.jsx)(x.a,{icon:v?l.b:l.e})})]}))]})};var E={display:"flex",flexDirection:"column",actions:{display:"flex",justifyContent:"space-between",marginTop:5},cancelButton:{marginRight:5,width:"50%"},confirm:{width:"50%"},nameInput:{height:36}},F=function(e){var t=e.history,n=Object(i.useState)(""),c=Object(s.a)(n,2),a=c[0],o=c[1],l=Object(d.a)(E,{});function j(e){k.a.post("/api/v1/lists",{name:e}).then((function(e){var n=e.data;o(""),t.push("/listDetail/".concat(n.listId))}))}return Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},l),{},{children:[Object(b.jsx)(m,{onChange:function(e){return o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&j(a)},placeholder:"Name der Liste",style:l("nameInput"),value:a}),Object(b.jsxs)("div",Object(r.a)(Object(r.a)({},l("actions")),{},{children:[Object(b.jsx)(O,{onClick:function(){return t.push("/")},secondary:!0,style:l("cancelButton"),children:"Abbrechen"}),Object(b.jsx)(O,{onClick:function(){return j(a)},disabled:!a,style:l("confirm"),children:"Fertig"})]}))]}))},M=n.p+"static/media/rocco_blue.08bcd557.png";var K={header:{display:"flex",marginBottom:50},logo:{height:100}},H=function(){var e=Object(d.a)(K,{});return Object(b.jsx)("div",Object(r.a)(Object(r.a)({},e),{},{children:Object(b.jsxs)(D.a,{children:[Object(b.jsx)("div",Object(r.a)(Object(r.a)({},e("header")),{},{children:Object(b.jsx)("img",Object(r.a)(Object(r.a)({},e("logo")),{},{src:M,alt:"logo-rooster",onClick:function(){return window.location="/"}}))})),Object(b.jsxs)(B.c,{children:[Object(b.jsx)(B.a,{path:"/",exact:!0,component:w}),Object(b.jsx)(B.a,{path:"/create",exact:!0,component:F}),Object(b.jsx)(B.a,{path:"/listDetail/:listId",exact:!0,component:z}),Object(b.jsx)(B.a,{path:"/",render:function(){return Object(b.jsx)("div",{children:"404"})}})]})]})}))},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))};n(71);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),P()}},[[72,1,2]]]);
//# sourceMappingURL=main.97d3ebcb.chunk.js.map