(this["webpackJsonpgerenciador-de-notas-react-alura"]=this["webpackJsonpgerenciador-de-notas-react-alura"]||[]).push([[0],{18:function(t,e,a){},20:function(t,e,a){},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),r=a(5),s=a.n(r),o=(a(18),a(1));var i=function(t){return Object(o.jsxs)("section",{className:"card-nota",children:[Object(o.jsx)("header",{className:"card-nota_cabecalho",children:Object(o.jsx)("h3",{className:"card-nota_title",children:t.title})}),Object(o.jsx)("p",{className:"card-nota_text",children:t.text})]})},l=(a(20),a(2));function u(t){return t.map((function(t,e){return Object(o.jsx)("li",{className:"lista-notas_item",children:Object(o.jsx)(i,{title:t.title,text:t.text})},e)}))}var j=function(){var t=Object(l.c)((function(t){return t.saveNote}));return Object(o.jsx)("ul",{className:"lista-notas",children:u(t)})},d=a(10);a(29);var b=function(){var t=Object(l.b)(),e=Object(c.useState)(""),a=Object(d.a)(e,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),u=i[0],j=i[1];return Object(o.jsxs)("form",{className:"form-cadastro",children:[Object(o.jsx)("input",{type:"text",placeholder:"T\xedtulo",className:"form-cadastro_input",value:n,onChange:function(t){r(t.target.value)}}),Object(o.jsx)("textarea",{rows:15,placeholder:"Nota",className:"form-cadastro_input",value:u,onChange:function(t){j(t.target.value)}}),Object(o.jsx)("button",{className:"form-cadastro_input form-cadastro_submit",onClick:function(e){e.preventDefault(),t(function(t,e){return{type:"SAVE",payload:{title:t,text:e}}}(n,u)),r(""),j("")},children:"Criar Nota"})]})};a(30),a(31);var O=function(){return Object(o.jsxs)("section",{className:"content",children:[Object(o.jsx)(b,{}),Object(o.jsx)(j,{})]})};var f=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(O,{})})},x=a(3),h=a(13),m=[],p=Object(x.b)({saveNote:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SAVE":return e.payload.title||e.payload.text?[].concat(Object(h.a)(t),[e.payload]):t;default:return t}}}),v=Object(x.c)(p);s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l.a,{store:v,children:Object(o.jsx)(f,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2058b68d.chunk.js.map