(this.webpackJsonpsummarizer=this.webpackJsonpsummarizer||[]).push([[6],{500:function(e){e.exports=JSON.parse('{"admin":"admin","blogger":"blogger"}')},520:function(e,c,s){"use strict";s.r(c);var t=s(56),l=s(0),i=s(21),a=s(73),n=s(32),d=s(95),j=s(82),r=s(33),o=(s(242),s(500)),h=s(47),b=s(524),m=s(2);c.default=Object(a.b)(null)(Object(i.g)((function(e){var c=Object(l.useState)([]),s=Object(t.a)(c,2),i=s[0],a=s[1],O=Object(l.useState)(!1),x=Object(t.a)(O,2),N=(x[0],x[1]),v=n.a.getState().user,u=v.first_name,g=v.last_name,p=v.email,f=(v.deleted,v.role);Object(l.useEffect)((function(){f===o.admin&&w()}),[]);var w=function(){try{j.a.getApi("".concat(r.apiEndPoint,"/").concat(r.getUsers),{},{headers:{"Content-Type":"application/json"}}).then((function(c){c?0!==c.length?(N(!1),a(c)):(Object(h.b)("No Blogs are there"),N(!1),a(c)):(Object(h.b)("No Response from API, Try again"),console.log("No Response from API"),N(!1),e.history.push("/login"))}))}catch(c){console.log("Error Response from API",c)}},y=function(c){try{j.a.delete("".concat(r.apiEndPoint,"/").concat(r.deleteUser),c,{headers:{"Content-Type":"application/json"}}).then((function(c){c?0!==c.length?(N(!1),a(c)):(Object(h.b)("No Blogs are there"),N(!1),a(c)):(Object(h.b)("No Response from API, Try again"),console.log("No Response from API"),N(!1),e.history.push("/login"))}))}catch(s){console.log("Error Response from API",s)}};return Object(m.jsx)(d.a,{component:Object(m.jsx)(l.Fragment,{children:Object(m.jsx)("div",{className:"overflow-class",children:Object(m.jsx)(b.a,{container:!0,children:Object(m.jsxs)(b.a,{item:!0,xs:12,children:[Object(m.jsx)("div",{className:"row no-gutters my-auto",children:Object(m.jsx)("div",{className:"cardtitle text-center text-white",children:f===o.admin?"Users Data":"Your Profile Data"})}),Object(m.jsx)("div",{className:"row my-2 ",children:Object(m.jsx)("div",{className:"col-sm-7 mx-auto",children:Object(m.jsx)("div",{className:"width-100 ",children:Object(m.jsx)("div",{className:"m-auto loginCard ",children:Object(m.jsxs)(l.Fragment,{children:[" ",f===o.admin?i.map((function(e,c){return Object(m.jsx)("div",{className:"card-blog",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-9 ",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4 ",children:Object(m.jsx)("h4",{children:"First Name: "})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("h4",{children:e.first_name})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4 ",children:Object(m.jsx)("h4",{children:"Last Name: "})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("h4",{children:e.last_name})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4 ",children:Object(m.jsx)("h4",{children:"Email: "})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("h4",{children:e.email})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4 ",children:Object(m.jsx)("h4",{children:"Role: "})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("h4",{children:e.role})})]})]}),Object(m.jsxs)("div",{className:"col-3",children:[Object(m.jsx)("button",{className:"btn-edit-install",id:"button",style:{height:40},disabled:!e.deleted,onClick:function(){return y({_id:e._id,deleted:!1})},children:Object(m.jsx)("i",{className:"icon-edit "})}),Object(m.jsx)("button",{className:"btn-delete-install",id:"button",style:{height:40},disabled:e.deleted,onClick:function(){return y({_id:e._id,deleted:!0})},children:Object(m.jsx)("i",{className:"icon-delete "})})]})]})},c)})):Object(m.jsx)("div",{className:"card-blog",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-9 ",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4 ",children:Object(m.jsx)("h4",{children:"First Name: "})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("h4",{children:u})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4 ",children:Object(m.jsx)("h4",{children:"Last Name: "})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("h4",{children:g})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4 ",children:Object(m.jsx)("h4",{children:"Email: "})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("h4",{children:p})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4 ",children:Object(m.jsx)("h4",{children:"Role: "})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("h4",{children:f})})]})]}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("button",{className:"btn-delete-install",id:"button",style:{height:40},disabled:!0,children:Object(m.jsx)("i",{className:"icon-delete "})})})]})})]})})})})})]})})})},"FeedRails")})})))}}]);
//# sourceMappingURL=6.82ab6417.chunk.js.map