(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(17),s=a.n(n),i=(a(62),a(16)),o=a(18),r=(a(68),a(69),a(41)),j=a.n(r),l=a(42),d=a.n(l),b=a(43),u=a.n(b),h=a(44),p=a.n(h),O=a(45),m=a.n(O),N=a(46),x=a.n(N),v=a(95),f=(a(70),a(3));var g=function(e){var t=e.title,a=e.Icon,c=e.avatar,n=e.onClick;return Object(f.jsxs)("div",{className:"headerOption",onClick:n,children:[a&&Object(f.jsx)(a,{className:"headerOption__icon"}),c&&Object(f.jsx)(v.a,{className:"headerOption__icon",src:c}),Object(f.jsx)("h3",{className:"headerOption__title",children:t})]})},G=a(25),A=G.a.initializeApp({apiKey:"AIzaSyBDCQBCef4DZYHsm0qjaBKH990ovL8kKx0",authDomain:"linkedin-clone-3c3dc.firebaseapp.com",projectId:"linkedin-clone-3c3dc",storageBucket:"linkedin-clone-3c3dc.appspot.com",messagingSenderId:"494630948204",appId:"1:494630948204:web:1396e7df23aa20f31bf749",measurementId:"G-CVG1XWCZW1"}).firestore(),R=G.a.auth(),k=a(30),w=Object(k.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),y=w.actions,q=y.login,S=y.logout,Z=function(e){return e.user},B=w.reducer;var U=function(){var e=Object(o.b)();return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsxs)("div",{className:"header__left",children:[Object(f.jsx)("img",{src:"https://www.flaticon.com/svg/174/174857.svg"}),Object(f.jsxs)("div",{className:"header__search",children:[Object(f.jsx)(j.a,{}),Object(f.jsx)("input",{type:"text",placeholder:"Search"})]})]}),Object(f.jsxs)("div",{className:"header__right",children:[Object(f.jsx)(g,{Icon:d.a,title:"Home"}),Object(f.jsx)(g,{Icon:u.a,title:"My Network"}),Object(f.jsx)(g,{Icon:p.a,title:"Jobs"}),Object(f.jsx)(g,{Icon:m.a,title:"Messaging"}),Object(f.jsx)(g,{Icon:x.a,title:"Notifications"}),Object(f.jsx)(g,{avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wj5eIytdhkQR7q3Bs6HuamdVegth7QJwrw&usqp=CAU",title:"me",onClick:function(){e(S()),R.signOut()}})]})]})};a(76);var X=function(){var e=function(e){return Object(f.jsxs)("div",{className:"sidebar__recentItem",children:[Object(f.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(f.jsx)("p",{children:e})]})};return Object(f.jsxs)("div",{className:"sidebar",children:[Object(f.jsxs)("div",{className:"sidebar__top",children:[Object(f.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGOEHrFc5mAv8AUMMwvRl7rsnf1wvBYGf8Q&usqp=CAU",alt:""}),Object(f.jsx)(v.a,{className:"sidebar__avatar"}),Object(f.jsx)("h2",{children:"Abhinav Kumar"}),Object(f.jsx)("h4",{children:"Abhinavkumar@gmail.com"})]}),Object(f.jsxs)("div",{className:"sidebar__stats",children:[Object(f.jsxs)("div",{className:"sidebar__stat",children:[Object(f.jsx)("p",{children:"Who viewd you"}),Object(f.jsx)("p",{className:"sidebar__statNumber",children:"2,456"})]}),Object(f.jsxs)("div",{className:"sidebar__stat",children:[Object(f.jsx)("p",{children:"Views on post"}),Object(f.jsx)("p",{className:"sidebar__statNumber",children:"2,896"})]})]}),Object(f.jsxs)("div",{className:"sidebar__bottom",children:[Object(f.jsx)("p",{children:"Recents"}),e("react"),e("programming"),e("softwareengineering"),e("design"),e("developer")]})]})},M=(a(77),a(51)),T=a.n(M),E=a(52),Q=a.n(E);a(78);var L=function(e){var t=e.title,a=e.Icon,c=e.color;return Object(f.jsxs)("div",{className:"inputOption",children:[Object(f.jsx)(a,{style:{color:c}}),Object(f.jsx)("h4",{children:t})]})},J=a(53),P=a.n(J),C=a(54),H=a.n(C),V=a(55),z=a.n(V),W=(a(79),a(47)),I=a.n(W),K=a(48),F=a.n(K),Y=a(49),D=a.n(Y),_=a(50),$=a.n(_),ee=Object(c.forwardRef)((function(e,t){var a=e.name,c=e.description,n=e.message,s=e.photoUrl;return Object(f.jsxs)("div",{ref:t,className:"post",children:[Object(f.jsxs)("div",{className:"post__header",children:[Object(f.jsx)(v.a,{src:s,children:a[0]}),Object(f.jsxs)("div",{className:"post__info",children:[Object(f.jsx)("h2",{children:a}),Object(f.jsx)("p",{children:c})]})]}),Object(f.jsx)("div",{className:"post__body",children:Object(f.jsx)("p",{children:n})}),Object(f.jsxs)("div",{className:"post__buttons",children:[Object(f.jsx)(L,{Icon:I.a,title:"Like",color:"gray"}),Object(f.jsx)(L,{Icon:F.a,title:"Like",color:"gray"}),Object(f.jsx)(L,{Icon:D.a,title:"Like",color:"gray"}),Object(f.jsx)(L,{Icon:$.a,title:"Like",color:"gray"})]})]})})),te=a(56);var ae=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),r=o[0],j=o[1];return Object(c.useEffect)((function(){A.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(f.jsxs)("div",{className:"feed",children:[Object(f.jsxs)("div",{className:"feed__inputContainer",children:[Object(f.jsxs)("div",{className:"feed__input",children:[Object(f.jsx)(T.a,{}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r&&A.collection("posts").add({name:"Abhinav",description:"This is  a test",message:r,photoUrl:"",timestamp:G.a.firestore.FieldValue.serverTimestamp()}),j("")},children:[Object(f.jsx)("input",{type:"text",value:r,onChange:function(e){return j(e.target.value)}}),Object(f.jsx)("button",{type:"submit",children:"Send"})]})]}),Object(f.jsxs)("div",{className:"feed__inputOptions",children:[Object(f.jsx)(L,{title:"Photo",Icon:Q.a,color:"#70b5f9"}),Object(f.jsx)(L,{title:"Video",Icon:P.a,color:"#e7a33e"}),Object(f.jsx)(L,{title:"Event",Icon:H.a,color:"#c0cbcd"}),Object(f.jsx)(L,{title:"Write article",Icon:z.a,color:"#7fc15e"})]})]}),Object(f.jsx)(te.a,{children:a.map((function(e){var t=e.id,a=e.data,c=a.name,n=a.description,s=a.message,i=a.photoUrl;return Object(f.jsx)(ee,{name:c,description:n,message:s,photoUrl:i},t)}))})]})};a(80);var ce=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),j=r[0],l=r[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),u=b[0],h=b[1],p=Object(c.useState)(""),O=Object(i.a)(p,2),m=O[0],N=O[1],x=Object(o.b)();return Object(f.jsxs)("div",{className:"login",children:[Object(f.jsx)("img",{src:"data:image/png;base64,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",alt:"linkedIn Image"}),Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"text",placeholder:"Full Name (required if registering)"}),Object(f.jsx)("input",{value:m,onChange:function(e){return N(e.target.value)},placeholder:"Profile pic URL (optional)",type:"text"}),Object(f.jsx)("input",{value:j,onChange:function(e){return l(e.target.value)},type:"text",placeholder:"Email"}),Object(f.jsx)("input",{value:u,onChange:function(e){return h(e.target.value)},type:"password",placeholder:"Password"}),Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),R.signInWithEmailAndPassword(j,u).then((function(e){x(q({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.photoURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(f.jsxs)("p",{children:["Not a member? ",Object(f.jsx)("span",{className:"login__register",onClick:function(){a||alert("Please Enter you full name"),R.createUserWithEmailAndPassword(j,u).then((function(e){e.user.updateProfile({displayName:a,photoURL:m}).then((function(){x(q({email:e.user.email,uid:e.user.uid,displayName:a,photoURL:m}))}))})).catch((function(e){return alert(e)}))},children:"Register Now"})]})]})};var ne=function(){var e=Object(o.c)(Z),t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],s=(a[1],Object(o.b)());return Object(c.useEffect)((function(){R.onAuthStateChanged((function(e){s(e?q({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):S())}))}),[n]),console.log(n),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(U,{}),e.user?Object(f.jsxs)("div",{className:"app__body",children:[Object(f.jsx)(X,{}),Object(f.jsx)(ae,{})]}):Object(f.jsx)(ce,{})]})},se=Object(k.a)({reducer:{user:B}});s.a.render(Object(f.jsx)(o.a,{store:se,children:Object(f.jsx)(ne,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.635f28c1.chunk.js.map