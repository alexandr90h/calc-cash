(this["webpackJsonpcalc-cash"]=this["webpackJsonpcalc-cash"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),s=(a(108),a(109),a(15)),l=a(265),j=a(276),b=a(277),u=a(16),d=a(24),h=a.n(d),o=a(37),O=a(50),g=a.n(O);function x(){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data.list);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(o.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g.a.defaults.baseURL="https://calc-cash-server.herokuapp.com/";var f=a(18),p=Object(f.b)("cash/getCashRequuest"),y=Object(f.b)("cash/getCashSuccess"),C=Object(f.b)("cash/getCashError"),S={summ:Object(f.b)("cash/changeSumm"),getCashRequuest:p,getCashSuccess:y,getCashError:C},w=a(2);function k(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),i=Object(s.a)(r,2),d=i[0],O=i[1],g=Object(n.useState)(0),m=Object(s.a)(g,2),f=m[0],p=m[1],y=Object(n.useState)(0),C=Object(s.a)(y,2),k=C[0],N=C[1],M=Object(n.useState)(0),H=Object(s.a)(M,2),E=H[0],A=H[1],L=Object(n.useState)(0),R=Object(s.a)(L,2),q=R[0],z=R[1],B=Object(n.useState)(0),D=Object(s.a)(B,2),J=D[0],W=D[1],F=Object(n.useState)(0),I=Object(s.a)(F,2),P=I[0],U=I[1],V=Object(n.useState)(0),_=Object(s.a)(V,2),G=_[0],K=_[1],Q=Object(n.useState)(0),T=Object(s.a)(Q,2),X=T[0],Y=T[1],Z=Object(n.useState)(0),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(u.b)(),ne=Object(u.c)((function(e){return e.summ})),ce=function(e){switch(e.target.name){case"thousand":c(Number(e.target.value));break;case"fiveHundred":p(Number(e.target.value));break;case"twoHundred":N(Number(e.target.value));break;case"hundred":O(Number(e.target.value));break;case"fifty":A(Number(e.target.value));break;case"twenty":z(Number(e.target.value));break;case"ten":W(Number(e.target.value));break;case"five":U(Number(e.target.value));break;case"two":K(Number(e.target.value));break;case"one":Y(Number(e.target.value));break;case"other":te(Number(e.target.value))}},re=function(){c(0),p(0),N(0),O(0),A(0),z(0),W(0),U(0),K(0),Y(0),te(0)};return Object(n.useEffect)((function(){ae(function(){var e=Object(o.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S.getCashRequuest()),e.prev=1,e.next=4,x();case 4:a=e.sent,t(S.getCashSuccess(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(S.getCashError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[ae,ne]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("form",{className:"main-form-conteiner",noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=1e3*a+500*f+200*k+100*d+50*E+20*q+10*J+5*P+2*G+X+ee;ae(S.summ(t)),function(e){v.apply(this,arguments)}({thousand:a,fiveHundred:f,twoHundred:k,hundred:d,fifty:E,twenty:q,ten:J,five:P,two:G,one:X,other:ee,sum:t}),re()},children:[Object(w.jsx)(l.a,{elevation:3}),Object(w.jsxs)("ul",{className:"main-form",children:[Object(w.jsxs)("li",{children:[Object(w.jsx)("span",{}),Object(w.jsx)(j.a,{id:"outlined-basic",label:"1000",variant:"outlined",onChange:ce,name:"thousand",value:a})]}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"500",variant:"outlined",onChange:ce,name:"fiveHundred",value:f})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"200",variant:"outlined",onChange:ce,name:"twoHundred",value:k})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"100",variant:"outlined",onChange:ce,name:"hundred",value:d})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"50",variant:"outlined",onChange:ce,name:"fifty",value:E})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"20",variant:"outlined",onChange:ce,name:"twenty",value:q})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"10",variant:"outlined",onChange:ce,name:"ten",value:J})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"5",variant:"outlined",onChange:ce,name:"five",value:P})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"2",variant:"outlined",onChange:ce,name:"two",value:G})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"1",variant:"outlined",onChange:ce,name:"one",value:X})}),Object(w.jsx)("li",{children:Object(w.jsx)(j.a,{id:"outlined-basic",label:"Other",variant:"outlined",onChange:ce,name:"other",value:ee})})]}),Object(w.jsx)(b.a,{variant:"contained",color:"primary",type:"submit",children:"Primary"})]}),Object(w.jsxs)("div",{className:"result-conteiner",children:[Object(w.jsxs)("h1",{children:[Object(w.jsx)("span",{children:"\u0421\u0443\u043c\u0430: "}),1e3*a+500*f+200*k+100*d+50*E+20*q+10*J+5*P+2*G+X+ee]}),Object(w.jsxs)("h2",{children:[Object(w.jsx)("span",{children:"\u0412\u0438\u0440\u0443\u0447\u043a\u0430: "}),1e3*a+500*f+200*k+100*d]})]})]})}var N=a(5),M=a(271),H=a(273),E=a(275),A=a(269),L=a(272),R=a(274),q=a(270),z=a(33),B=a.n(z),D=Object(N.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(A.a),J=Object(N.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(q.a),W=Object(M.a)({table:{minWidth:700}});function F(){var e=W(),t=(Object(u.c)((function(e){return e.summ})),Object(u.c)((function(e){return e.cashList})));return Object(w.jsx)(L.a,{component:l.a,children:Object(w.jsxs)(H.a,{className:e.table,"aria-label":"customized table",children:[Object(w.jsx)(R.a,{children:Object(w.jsxs)(q.a,{children:[Object(w.jsx)(D,{children:"Date"}),Object(w.jsx)(D,{align:"right",children:"1000"}),Object(w.jsx)(D,{align:"right",children:"500"}),Object(w.jsx)(D,{align:"right",children:"200"}),Object(w.jsx)(D,{align:"right",children:"100"}),Object(w.jsx)(D,{align:"right",children:"50"}),Object(w.jsx)(D,{align:"right",children:"20"}),Object(w.jsx)(D,{align:"right",children:"10"}),Object(w.jsx)(D,{align:"right",children:"5"}),Object(w.jsx)(D,{align:"right",children:"2"}),Object(w.jsx)(D,{align:"right",children:"1"}),Object(w.jsx)(D,{align:"right",children:"Other"}),Object(w.jsx)(D,{align:"right",children:"Summ"})]})}),Object(w.jsx)(E.a,{children:t.map((function(e){return Object(w.jsxs)(J,{children:[Object(w.jsx)(D,{component:"th",scope:"row",children:B()(e.createdAt,"mm.dd.yyyy, dddd, HH:MM")}),Object(w.jsx)(D,{align:"right",children:e.thousand}),Object(w.jsx)(D,{align:"right",children:e.fiveHundred}),Object(w.jsx)(D,{align:"right",children:e.twoHundred}),Object(w.jsx)(D,{align:"right",children:e.hundred}),Object(w.jsx)(D,{align:"right",children:e.fifty}),Object(w.jsx)(D,{align:"right",children:e.twenty}),Object(w.jsx)(D,{align:"right",children:e.ten}),Object(w.jsx)(D,{align:"right",children:e.five}),Object(w.jsx)(D,{align:"right",children:e.two}),Object(w.jsx)(D,{align:"right",children:e.one}),Object(w.jsx)(D,{align:"right",children:e.other}),Object(w.jsx)(D,{align:"right",children:e.sum})]},e._id)}))})]})})}B.a.i18n={dayNames:["\u041d\u0434","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0435\u0434\u0456\u043b\u044f","\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0421\u0435\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440","\u041f\u044f\u0442\u043d\u0438\u0446\u044f","\u0421\u0443\u0431\u043e\u0442\u0430"]};var I=a(97);function P(){var e=Object(u.c)((function(e){return e.cashList})),t=function(e,t){var a=0,n=0;return e.map((function(e){B()(e.createdAt,"dddd")===t&&(n++,a+=Number(e.sum))})),a/n},a={labels:["\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0421\u0435\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440","\u041f\u044f\u0442\u043d\u0438\u0446\u044f","\u0421\u0443\u0431\u043e\u0442\u0430"],datasets:[{label:"\u0421\u0435\u0440\u0435\u0434\u043d\u044f \u0441\u0443\u043c\u0430",data:[Math.round(t(e,"\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a")),Math.round(t(e,"\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a")),Math.round(t(e,"\u0421\u0435\u0440\u0435\u0434\u0430")),Math.round(t(e,"\u0427\u0435\u0442\u0432\u0435\u0440")),Math.round(t(e,"\u041f\u044f\u0442\u043d\u0438\u0446\u044f")),Math.round(t(e,"\u0421\u0443\u0431\u043e\u0442\u0430"))],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};return Object(w.jsxs)("div",{className:"statistic-box",children:[Object(w.jsxs)("ul",{className:"statistic-list",children:[Object(w.jsxs)("li",{children:["\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a:"," ",Object(w.jsx)("span",{children:String(Math.round(t(e,"\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a")))})]}),Object(w.jsxs)("li",{children:["\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a:"," ",Object(w.jsx)("span",{children:String(Math.round(t(e,"\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a")))})]}),Object(w.jsxs)("li",{children:["\u0421\u0435\u0440\u0435\u0434\u0430:"," ",Object(w.jsx)("span",{children:String(Math.round(t(e,"\u0421\u0435\u0440\u0435\u0434\u0430")))})]}),Object(w.jsxs)("li",{children:["\u0427\u0435\u0442\u0432\u0435\u0440:"," ",Object(w.jsx)("span",{children:String(Math.round(t(e,"\u0427\u0435\u0442\u0432\u0435\u0440")))})]}),Object(w.jsxs)("li",{children:["\u041f\u044f\u0442\u043d\u0438\u0446\u044f:"," ",Object(w.jsx)("span",{children:String(Math.round(t(e,"\u041f\u044f\u0442\u043d\u0438\u0446\u044f")))})]}),Object(w.jsxs)("li",{children:["\u0421\u0443\u0431\u043e\u0442\u0430:"," ",Object(w.jsx)("span",{children:String(Math.round(t(e,"\u0421\u0443\u0431\u043e\u0442\u0430")))})]})]}),Object(w.jsx)(I.Bar,{data:a,width:500,options:{scales:{yAxes:[{stacked:2e3}]}}})]})}B.a.i18n={dayNames:["\u041d\u0434","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0435\u0434\u0456\u043b\u044f","\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0421\u0435\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440","\u041f\u044f\u0442\u043d\u0438\u0446\u044f","\u0421\u0443\u0431\u043e\u0442\u0430"]};var U=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(k,{}),Object(w.jsx)(F,{}),Object(w.jsx)(P,{})]})},V=a(63),_=a(14),G=Object(f.c)([],Object(V.a)({},S.getCashSuccess,(function(e,t){return t.payload}))),K=Object(f.c)(0,Object(V.a)({},S.summ,(function(e,t){return t.payload}))),Q=Object(_.c)({summ:K,cashList:G}),T=Object(f.a)({reducer:Q});i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(u.a,{store:T,children:Object(w.jsx)(U,{})})}),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.1ccd37d0.chunk.js.map