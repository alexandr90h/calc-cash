(this["webpackJsonpcalc-cash"]=this["webpackJsonpcalc-cash"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),s=(a(70),a(71),a(15)),l=a(135),j=a(146),u=a(147),b=a(21),d=a(22),h=a.n(d),o=a(31),O=a(38),g=a.n(O);function x(){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data.list);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(o.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g.a.defaults.baseURL="https://calc-cash-server.herokuapp.com/";var f=a(17),p=Object(f.b)("cash/getCashRequuest"),y=Object(f.b)("cash/getCashSuccess"),C=Object(f.b)("cash/getCashError"),w={summ:Object(f.b)("cash/changeSumm"),getCashRequuest:p,getCashSuccess:y,getCashError:C},k=a(3);function S(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),i=Object(s.a)(r,2),d=i[0],O=i[1],g=Object(n.useState)(0),m=Object(s.a)(g,2),f=m[0],p=m[1],y=Object(n.useState)(0),C=Object(s.a)(y,2),S=C[0],N=C[1],H=Object(n.useState)(0),E=Object(s.a)(H,2),R=E[0],q=E[1],L=Object(n.useState)(0),M=Object(s.a)(L,2),z=M[0],A=M[1],D=Object(n.useState)(0),J=Object(s.a)(D,2),B=J[0],F=J[1],I=Object(n.useState)(0),P=Object(s.a)(I,2),U=P[0],V=P[1],W=Object(n.useState)(0),_=Object(s.a)(W,2),G=_[0],K=_[1],Q=Object(n.useState)(0),T=Object(s.a)(Q,2),X=T[0],Y=T[1],Z=Object(n.useState)(0),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(b.b)(),ne=Object(b.c)((function(e){return e.summ})),ce=function(e){switch(e.target.name){case"thousand":c(Number(e.target.value));break;case"fiveHundred":p(Number(e.target.value));break;case"twoHundred":N(Number(e.target.value));break;case"hundred":O(Number(e.target.value));break;case"fifty":q(Number(e.target.value));break;case"twenty":A(Number(e.target.value));break;case"ten":F(Number(e.target.value));break;case"five":V(Number(e.target.value));break;case"two":K(Number(e.target.value));break;case"one":Y(Number(e.target.value));break;case"other":te(Number(e.target.value))}},re=function(){c(0),p(0),N(0),O(0),q(0),A(0),F(0),V(0),K(0),Y(0),te(0)};return Object(n.useEffect)((function(){ae(function(){var e=Object(o.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w.getCashRequuest()),e.prev=1,e.next=4,x();case 4:a=e.sent,t(w.getCashSuccess(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(w.getCashError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[ae,ne]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("form",{className:"main-form-conteiner",noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=1e3*a+500*f+200*S+100*d+50*R+20*z+10*B+5*U+2*G+X+ee;ae(w.summ(t)),function(e){v.apply(this,arguments)}({thousand:a,fiveHundred:f,twoHundred:S,hundred:d,fifty:R,twenty:z,ten:B,five:U,two:G,one:X,other:ee,sum:t}),re()},children:[Object(k.jsx)(l.a,{elevation:3}),Object(k.jsxs)("ul",{className:"main-form",children:[Object(k.jsxs)("li",{children:[Object(k.jsx)("span",{}),Object(k.jsx)(j.a,{id:"outlined-basic",label:"1000",variant:"outlined",onChange:ce,name:"thousand",value:a})]}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"500",variant:"outlined",onChange:ce,name:"fiveHundred",value:f})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"200",variant:"outlined",onChange:ce,name:"twoHundred",value:S})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"100",variant:"outlined",onChange:ce,name:"hundred",value:d})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"50",variant:"outlined",onChange:ce,name:"fifty",value:R})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"20",variant:"outlined",onChange:ce,name:"twenty",value:z})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"10",variant:"outlined",onChange:ce,name:"ten",value:B})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"5",variant:"outlined",onChange:ce,name:"five",value:U})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"2",variant:"outlined",onChange:ce,name:"two",value:G})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"1",variant:"outlined",onChange:ce,name:"one",value:X})}),Object(k.jsx)("li",{children:Object(k.jsx)(j.a,{id:"outlined-basic",label:"Other",variant:"outlined",onChange:ce,name:"other",value:ee})})]}),Object(k.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",children:"Primary"})]}),Object(k.jsxs)("div",{className:"result-conteiner",children:[Object(k.jsxs)("h1",{children:[Object(k.jsx)("span",{children:"\u0421\u0443\u043c\u0430: "}),1e3*a+500*f+200*S+100*d+50*R+20*z+10*B+5*U+2*G+X+ee]}),Object(k.jsxs)("h2",{children:[Object(k.jsx)("span",{children:"\u0412\u0438\u0440\u0443\u0447\u043a\u0430: "}),1e3*a+500*f+200*S+100*d]})]})]})}var N=a(5),H=a(141),E=a(143),R=a(145),q=a(139),L=a(142),M=a(144),z=a(140),A=a(42),D=a.n(A),J=Object(N.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(q.a),B=Object(N.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(z.a),F=Object(H.a)({table:{minWidth:700}});function I(){var e=F(),t=(Object(b.c)((function(e){return e.summ})),Object(b.c)((function(e){return e.cashList})));return Object(k.jsx)(L.a,{component:l.a,children:Object(k.jsxs)(E.a,{className:e.table,"aria-label":"customized table",children:[Object(k.jsx)(M.a,{children:Object(k.jsxs)(z.a,{children:[Object(k.jsx)(J,{children:"Date"}),Object(k.jsx)(J,{align:"right",children:"1000"}),Object(k.jsx)(J,{align:"right",children:"500"}),Object(k.jsx)(J,{align:"right",children:"200"}),Object(k.jsx)(J,{align:"right",children:"100"}),Object(k.jsx)(J,{align:"right",children:"50"}),Object(k.jsx)(J,{align:"right",children:"20"}),Object(k.jsx)(J,{align:"right",children:"10"}),Object(k.jsx)(J,{align:"right",children:"5"}),Object(k.jsx)(J,{align:"right",children:"2"}),Object(k.jsx)(J,{align:"right",children:"1"}),Object(k.jsx)(J,{align:"right",children:"Other"}),Object(k.jsx)(J,{align:"right",children:"Summ"})]})}),Object(k.jsx)(R.a,{children:t.map((function(e){return Object(k.jsxs)(B,{children:[Object(k.jsx)(J,{component:"th",scope:"row",children:D()(e.createdAt,"mm.dd.yyyy, dddd, HH:MM")}),Object(k.jsx)(J,{align:"right",children:e.thousand}),Object(k.jsx)(J,{align:"right",children:e.fiveHundred}),Object(k.jsx)(J,{align:"right",children:e.twoHundred}),Object(k.jsx)(J,{align:"right",children:e.hundred}),Object(k.jsx)(J,{align:"right",children:e.fifty}),Object(k.jsx)(J,{align:"right",children:e.twenty}),Object(k.jsx)(J,{align:"right",children:e.ten}),Object(k.jsx)(J,{align:"right",children:e.five}),Object(k.jsx)(J,{align:"right",children:e.two}),Object(k.jsx)(J,{align:"right",children:e.one}),Object(k.jsx)(J,{align:"right",children:e.other}),Object(k.jsx)(J,{align:"right",children:e.sum})]},e._id)}))})]})})}D.a.i18n={dayNames:["\u041d\u0434","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0435\u0434\u0456\u043b\u044f","\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0421\u0435\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440","\u041f'\u044f\u0442\u043d\u0438\u0446\u044f","\u0421\u0443\u0431\u043e\u0442\u0430"]};var P=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(S,{}),Object(k.jsx)(I,{})]})},U=a(43),V=a(14),W=Object(f.c)([],Object(U.a)({},w.getCashSuccess,(function(e,t){return t.payload}))),_=Object(f.c)(0,Object(U.a)({},w.summ,(function(e,t){return t.payload}))),G=Object(V.c)({summ:_,cashList:W}),K=Object(f.a)({reducer:G});i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(b.a,{store:K,children:Object(k.jsx)(P,{})})}),document.getElementById("root"))},70:function(e,t,a){},71:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.33dfd6e3.chunk.js.map