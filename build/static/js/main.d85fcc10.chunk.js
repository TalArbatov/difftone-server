(this.webpackJsonpdifftone=this.webpackJsonpdifftone||[]).push([[0],{100:function(e,t,n){},119:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(9),r=n.n(c),s=(n(90),n(91),n(48)),o=n(12),u=n(32),j=n(21),l=(n(92),n(36)),d="CREATE_QUESTIONNAIRE",b=n(167),O=n(160),h=n(3),p=function(e){var t=e.createOption,n=e.optionsNum,a=Object(i.useState)(""),c=Object(j.a)(a,2),r=c[0],s=c[1];return Object(h.jsxs)("div",{className:"option-wrapper",children:[Object(h.jsx)(b.a,{id:"outlined-basic",className:"option-input",label:"Enter Option (".concat(n+1,")"),variant:"outlined",onChange:function(e){return s(e.target.value)},value:r}),Object(h.jsx)(O.a,{variant:"contained",className:"add-option-btn",color:"grey",onClick:function(){t(r),s("")},children:"Add"})]})},x=n(162),f=n(161),m=function(e){var t=e.submitQuestion,n=e.questionNum,a=Object(i.useState)(""),c=Object(j.a)(a,2),r=c[0],s=c[1],o=Object(i.useState)([]),l=Object(j.a)(o,2),d=l[0],m=l[1];return Object(h.jsx)(f.a,{className:"question-wrapper",variant:"outlined",children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(b.a,{id:"outlined-basic",className:"question-input",label:"Enter Question Name (".concat(n+1,")"),variant:"outlined",onChange:function(e){return s(e.target.value)},value:r}),Object(h.jsx)(p,{createOption:function(e){return m([].concat(Object(u.a)(d),[e]))},optionsNum:d.length}),Object(h.jsx)(O.a,{className:"add-question-btn",variant:"contained",color:"primary",onClick:function(){t(r,d),s(""),m([])},children:"Add Question"})]})})},v=(n(100),function(e){var t=e.onTitleChange;return Object(h.jsx)("div",{className:"title-wrapper",children:Object(h.jsx)(b.a,{id:"outlined-basic",label:"Enter Questionnaire title",variant:"outlined",onChange:t})})}),g=n(163),q=n(46),N=n.n(q),y=Object(l.b)(null,(function(e){return{createQuestionnaire:function(t,n){return e(function(e,t){return{type:d,payload:{title:e,questions:t}}}(t,n))}}}))((function(e){var t=e.createQuestionnaire,n=Object(i.useState)(""),a=Object(j.a)(n,2),c=a[0],r=a[1],s=Object(i.useState)([]),o=Object(j.a)(s,2),l=o[0],d=o[1],b=Object(i.useState)({active:!1,content:""}),p=Object(j.a)(b,2),q=p[0],y=p[1];return Object(h.jsx)(f.a,{className:"questionnaire-wrapper",variant:"outlined",children:Object(h.jsx)(x.a,{children:q.active?Object(h.jsx)("p",{style:{color:"green"},children:q.content}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g.a,{color:"textSecondary",gutterBottom:!0,children:"Create a Questionnaire "}),Object(h.jsx)(v,{onTitleChange:function(e){return r(e.target.value)}}),Object(h.jsx)(m,{submitQuestion:function(e,t){return function(e,t){d([].concat(Object(u.a)(l),[{name:e,options:t}]))}(e,t)},questionNum:l.length}),Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){y({active:!0,content:"Questionnaire submitted succesfully!"});var e={title:c,questions:l};N.a.post("/questionnaire",e).then((function(e){e.sucess&&t(c,l)}))},children:"Submit"})]})})})})),C=(n(119),n(6)),S=function(e){var t=e.questionnaire,n=t.title,i=t.questions;return Object(h.jsx)(f.a,{className:"display-questionnaire-wrapper",variant:"outlined",children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)("h2",{children:n}),i.map((function(e,t){return Object(h.jsx)(f.a,{className:"display-question-wrapper",ariant:"outlined",children:Object(h.jsxs)(x.a,{children:[Object(h.jsxs)("h4",{children:["#",t+1," ",e.name]}),e.options.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)(g.a,{color:"textSecondary",gutterBottom:!0,children:["\u2022 ",e]})},t)}))]})},t)}))]})})},w=function(e){var t=e.questionnaires;return Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsx)(S,{questionnaire:e},t)}))})};w.prototypes={questionnaires:n.n(C).a.array.isRequired};var Q=w,E=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){N.a.get("/questionnaire").then((function(e){console.log(e.data),a(e.data)}))}),[]),Object(h.jsx)("div",{className:"display-wrapper",children:Object(h.jsx)(Q,{questionnaires:n||[]})})},k=n(164),T=n(165),A=n(166),F=n(76),B=n.n(F);var I=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(k.a,{className:"app-bar",position:"static",children:Object(h.jsxs)(T.a,{children:[Object(h.jsx)(A.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(h.jsx)(B.a,{})}),Object(h.jsx)(g.a,{variant:"h6",children:"Difftone Questionnaire Assignment"}),Object(h.jsxs)("div",{className:"menu-buttons",children:[Object(h.jsx)(O.a,{color:"inherit",children:Object(h.jsx)(s.b,{className:"link",to:"/create",children:"Create"})}),Object(h.jsx)(O.a,{color:"inherit",children:Object(h.jsx)(s.b,{className:"link",to:"/display",children:"Display"})})]})]})}),Object(h.jsx)("div",{className:"application-wrapper",children:Object(h.jsx)("div",{className:"application-content",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/create",children:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{path:"/display",children:Object(h.jsx)(E,{})}),Object(h.jsx)(o.a,{path:"/",children:Object(h.jsx)(y,{})})]})})})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},R=n(54),J=n(55),L={dummy:"",questionnaires:[],config:{}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(J.a)(Object(J.a)({},e),{},{questionnaires:[].concat(Object(u.a)(e.questionnaires),[{title:t.payload.title,questions:t.payload.questions}])});default:return e}},M=function(){return Object(R.b)(Object(R.a)({questionnaire:P}))}();r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(l.a,{store:M,children:Object(h.jsx)(I,{})})}),document.getElementById("root")),D()},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[128,1,2]]]);
//# sourceMappingURL=main.d85fcc10.chunk.js.map