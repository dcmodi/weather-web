(this["webpackJsonpweather-web"]=this["webpackJsonpweather-web"]||[]).push([[0],{68:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(19),s=c.n(r),i=(c(8),c(3)),j=c.n(i),o=c(6),h=c(7),d=c(20),l=c.n(d),p=(c(44),c(66),c(0)),m=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("Ahmedabad"),s=Object(h.a)(r,2),i=s[0],d=s[1];return Object(n.useEffect)(Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=").concat("4866f54586dd3e47a2e78c113d8d6a3c"),e.next=4,l.a.get(t);case 4:if(404!==(c=e.sent).status){e.next=7;break}throw"404 Error";case 7:if(200!==c.status){e.next=10;break}return e.next=10,a((function(){return c.data}));case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])}))),[i]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"mt-5",children:"Weather"}),Object(p.jsx)("input",{type:"text",placeholder:"Enter City",onChange:function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.target.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),value:i,style:{marginTop:"2rem",height:"10vh",width:"25vw",paddingLeft:"10px",fontSize:"1.5rem"}}),c.weather?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"m-4",children:[Object(p.jsx)("h3",{children:"".concat(c.name,",").concat(c.sys.country)}),Object(p.jsxs)("p",{className:"mt-1 font",children:["Current Temperature: ".concat((c.main.temp-273.15).toFixed(2)),Object(p.jsx)("span",{children:"\xb0C"})]}),Object(p.jsxs)("p",{className:"mt-1 font",children:["Feels Like: ".concat((c.main.feels_like-273.15).toFixed(2)),Object(p.jsx)("span",{children:"\xb0C"})]}),Object(p.jsxs)("p",{className:"mt-1 font",children:[Object(p.jsxs)("span",{children:["Max: ".concat((c.main.temp_max-273.15).toFixed(2))," "]}),Object(p.jsx)("span",{children:"\xb0C"}),",","Min: ".concat((c.main.temp_min-273.15).toFixed(2)),Object(p.jsx)("span",{children:"\xb0C"})]}),Object(p.jsxs)("div",{className:"row mt-2",children:[Object(p.jsxs)("div",{className:"col-7",children:[Object(p.jsx)("p",{className:"font",children:"".concat(c.weather[0].main)}),Object(p.jsx)("p",{children:c.weather[0].description})]}),Object(p.jsx)("div",{className:"col-5",children:Object(p.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(c.weather[0].icon,".png"),alt:"Weather Image",style:{height:"70px"}})})]})]})})}):null]})},x=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(m,{})})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[68,1,2]]]);
//# sourceMappingURL=main.13d44752.chunk.js.map