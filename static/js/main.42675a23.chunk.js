(this.webpackJsonpghportfolio=this.webpackJsonpghportfolio||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports={Layout:"Layout_Layout__3SBgk",LogoContainer:"Layout_LogoContainer__1jiOW",BurguerButtonContainer:"Layout_BurguerButtonContainer__5hYSz",Navbar:"Layout_Navbar__oIDx-",Links:"Layout_Links__3iT4D",SocialMediaContainer:"Layout_SocialMediaContainer__3tAwp",Content:"Layout_Content__2WLOk"}},,function(t,e,n){t.exports={BurguerButton:"BurguerButton_BurguerButton__3aj1y",ButtonActive:"BurguerButton_ButtonActive__Snl2W"}},function(t,e,n){t.exports={Curtain:"Curtain_Curtain__23SsW",MenuContainer:"Curtain_MenuContainer__WRWi5",SocialMediaContainer:"Curtain_SocialMediaContainer__1Dvdr",Open:"Curtain_Open__3jjHz"}},function(t,e,n){t.exports={NavIcon:"NavIcon_NavIcon__3TeNK",NavIconBig:"NavIcon_NavIconBig__3-jCx",jello:"NavIcon_jello__2iyWk"}},function(t,e,n){t.exports={About:"About_About__N33eZ",InfoCard:"About_InfoCard__1iTNv",AvatarContainer:"About_AvatarContainer__hSsAG",TextContainer:"About_TextContainer__1uxTj"}},,,,,,function(t,e,n){t.exports={NavLink:"NavLink_NavLink__2kAua"}},function(t,e,n){t.exports={NavLinks:"NavLinks_NavLinks__34VVf"}},function(t,e,n){t.exports={NavIcons:"NavIcons_NavIcons__3TFxj"}},,,,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(9),r=n.n(i),s=n(5),o=n(6),u=n(14),j=n(7),l=n(10),b=n.n(l),d={buttonClasses:[b.a.BurguerButton],buttonActive:!1},h=function(t){return Object(j.a)(Object(j.a)({},t),{},{buttonClasses:[b.a.BurguerButton,b.a.ButtonActive],buttonActive:!0})},v=function(t){return Object(j.a)(Object(j.a)({},t),{},{buttonClasses:[b.a.BurguerButton],buttonActive:!1})},O=Object(u.b)({name:"bButton",initialState:d,reducers:{toggle:function(t){return t.buttonClasses.includes(b.a.ButtonActive)?v(t):h(t)},activate:h,deactivate:v}}),x=O.actions,g=x.toggle,_=(x.activate,x.deactivate),p={bButton:O.reducer},f=n(2),m=n(19),N=n.n(m),C=n(1),B=function(t){var e=t.to,n=t.size,a=t.spacing,c=t.children,i={fontSize:n,letterSpacing:a},r=Object(o.b)();return Object(C.jsx)("div",{className:N.a.NavLink,style:i,onClick:function(){r(_())},children:Object(C.jsx)(s.c,{to:e,style:function(t){return t.isActive?{color:"red"}:void 0},children:c})})},L=n(20),k=n.n(L),A=function(t){var e=t.size,n=t.spacing;return Object(C.jsxs)("div",{className:k.a.NavLinks,children:[Object(C.jsx)(B,{to:"about",size:e,spacing:n,children:"About"}),Object(C.jsx)(B,{to:"projects",size:e,spacing:n,children:"Projects"}),Object(C.jsx)(B,{to:"contact",size:e,spacing:n,children:"Contact"})]})},w=n(4),S=n(12),I=n.n(S),y=function(t){var e=t.src,n=t.alt,c=t.href,i=t.width,r=t.height,s=t.colorFilter,o=Object(a.useState)(""),u=Object(w.a)(o,2),j=u[0],l=u[1],b=Object(a.useState)([I.a.NavIcon]),d=Object(w.a)(b,2),h=d[0],v=d[1],O={filter:j},x={width:i,height:r};return Object(C.jsx)("div",{className:h.join(" "),style:x,children:Object(C.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(C.jsx)("img",{src:e,style:O,alt:n,onMouseEnter:function(){l(s),v([I.a.NavIcon,I.a.NavIconBig])},onMouseLeave:function(){l(""),v([I.a.NavIcon])}})})})},M=n.p+"static/media/github-alt-brands.32b9ac0d.svg",z=n.p+"static/media/linkedin-brands.f4041044.svg",T=n(21),P=n.n(T),W=function(t){var e=t.width,n=t.height;return Object(C.jsxs)("div",{className:P.a.NavIcons,children:[Object(C.jsx)(y,{src:M,width:e,height:n,colorFilter:"invert(100%) sepia(100%) saturate(0%) hue-rotate(302deg) brightness(103%) contrast(103%)",href:"https://github.com/SaulAndrade",alt:"Saul's GitHub page"}),Object(C.jsx)(y,{src:z,width:e,height:n,colorFilter:"invert(31%) sepia(49%) saturate(2601%) hue-rotate(178deg) brightness(89%) contrast(101%)",href:"https://www.linkedin.com/in/saul-andrade-34532515",alt:"Saul's LinkedIn page"})]})},F=n(11),D=n.n(F),E=function(t){var e=t.show?[D.a.Curtain,D.a.Open]:[D.a.Curtain];return r.a.createPortal(Object(C.jsxs)("div",{className:e.join(" "),children:[Object(C.jsx)("div",{className:D.a.MenuContainer,children:Object(C.jsx)(A,{size:"3rem",spacing:".25rem"})}),Object(C.jsx)("div",{className:D.a.SocialMediaContainer,children:Object(C.jsx)(W,{width:"5rem",height:"5rem"})})]}),document.getElementById("root"))},G=function(){var t=Object(o.c)((function(t){return t.bButton.buttonClasses})),e=Object(o.c)((function(t){return t.bButton.buttonActive})),n=Object(o.b)();return Object(C.jsxs)(c.a.Fragment,{children:[Object(C.jsx)(E,{show:e}),Object(C.jsxs)("div",{className:t.join(" "),onClick:function(){n(g())},children:[Object(C.jsx)("span",{}),Object(C.jsx)("span",{}),Object(C.jsx)("span",{})]})]})},J=n.p+"static/media/logo.0efaa24a.png",H=n(8),R=n.n(H),V=function(t){var e=t.children;return Object(C.jsxs)("div",{className:R.a.Layout,children:[Object(C.jsxs)("nav",{children:[Object(C.jsx)("div",{className:R.a.LogoContainer,children:Object(C.jsx)("img",{src:J,alt:"Saul's awesome Portfolio"})}),Object(C.jsxs)("div",{className:R.a.Navbar,children:[Object(C.jsx)("div",{className:R.a.Links,children:Object(C.jsx)(A,{size:"1rem",spacing:".25rem"})}),Object(C.jsx)("div",{className:R.a.SocialMediaContainer,children:Object(C.jsx)(W,{width:"3rem",height:"3rem"})})]}),Object(C.jsx)("div",{className:R.a.BurguerButtonContainer,children:Object(C.jsx)(G,{})})]}),Object(C.jsx)("div",{className:R.a.Content,children:e})]})},K=n.p+"static/media/avatarSaul.07cf199e.jpeg",Q=n(13),Y=n.n(Q),Z=function(){return Object(C.jsxs)("div",{className:Y.a.About,children:[Object(C.jsx)("h1",{children:".about"}),Object(C.jsxs)("div",{className:Y.a.InfoCard,children:[Object(C.jsxs)("div",{className:Y.a.TextContainer,children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Full-stack web developer based in Ottawa/ON, Canada."}),Object(C.jsx)("p",{children:"I am a full-stack web developer working mainly with ReactJS, GraphQL and MongoDB."}),Object(C.jsxs)("p",{children:["Check out my Portfolio at the ",Object(C.jsx)(s.b,{to:"/projects",children:"projects"})," page. There's a lot of interesting stuff there, including the source code for this very own website."]}),Object(C.jsxs)("p",{children:["If you want you want to get in touch, just drop me a line through the",Object(C.jsx)(s.b,{to:"/contact",children:" contact"})," page or send a message to saul.a.andrade@gmail.com"]})]}),Object(C.jsx)("h2",{children:"Saul Andrade."})]}),Object(C.jsx)("div",{className:Y.a.AvatarContainer,children:Object(C.jsx)("img",{src:K,alt:"Saul Andrade"})})]})]})},q=function(){return Object(C.jsx)("div",{children:"Projects Page"})},U=function(){return Object(C.jsx)("div",{children:"Contact Page"})};var X=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(V,{children:Object(C.jsxs)(f.d,{children:[Object(C.jsx)(f.b,{path:"about",element:Object(C.jsx)(Z,{})}),Object(C.jsx)(f.b,{path:"projects",element:Object(C.jsx)(q,{})}),Object(C.jsx)(f.b,{path:"contact",element:Object(C.jsx)(U,{})}),Object(C.jsx)(f.b,{path:"*",element:Object(C.jsx)(f.a,{to:"about"})})]})})})},$=(n(33),Object(u.a)({reducer:p}));r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(o.a,{store:$,children:Object(C.jsx)(s.a,{children:Object(C.jsx)(X,{})})})}),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.42675a23.chunk.js.map