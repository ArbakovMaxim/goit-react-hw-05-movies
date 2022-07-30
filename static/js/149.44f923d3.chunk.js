"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[149],{5953:function(e,n,t){t.d(n,{f:function(){return l}});var r,a,u,c=t(168),i=t(6031),s=t(501),o=i.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n"]))),f=i.ZP.li(a||(a=(0,c.Z)(["\n  margin-bottom: 1rem;\n"]))),p=(0,i.ZP)(s.OL)(u||(u=(0,c.Z)(["\n  text-decoration: none;\n  &:hover {\n    color: green;\n  }\n"]))),v=t(184),l=function(e){var n=e.movies,t=e.location;return(0,v.jsx)(o,{children:n.map((function(e){var n=e.id,r=e.title;return(0,v.jsx)(f,{children:(0,v.jsx)(p,{to:"/movies/".concat(n),state:{from:t},children:r})},n)}))})}},149:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(5861),a=t(885),u=t(7757),c=t.n(u),i=(t(5462),t(6066)),s=t(2791),o=t(2488),f=t(501),p=t(6871),v=t(5705),l=t(184),h=function(e){var n=e.submit,t=(0,v.TA)({initialValues:{searchMoviesInput:""},onSubmit:function(e){n(e)}});return(0,l.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,l.jsx)("input",{name:"searchMoviesInput",type:"text",onChange:t.handleChange,value:t.values.searchMoviesInput}),(0,l.jsx)("button",{type:"submit",children:"Submit"})]})},m=t(5953),d=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],v=(0,f.lr)(),d=(0,a.Z)(v,2),x=d[0],b=d[1],k=(0,p.TH)();(0,s.useEffect)((function(){var e,n=null!==(e=x.get("search"))&&void 0!==e?e:"";n&&g(n)}),[]);var g=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o.V0(n);case 4:(t=e.sent)&&u(t),0===t.length&&i.Am.info("\u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435 \u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e,\u0438\u0449\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e \u0430\u0434\u0435\u043a\u0432\u0430\u0442\u043d\u043e\u0435. ");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(h,{submit:function(e){var n=e.searchMoviesInput;b(""!==n?{search:n}:{}),g(n)}})}),(0,l.jsx)("div",{children:(0,l.jsx)(m.f,{movies:t,location:k})})]})}},2488:function(e,n,t){t.d(n,{yo:function(){return l},CB:function(){return d},q5:function(){return h},UF:function(){return v},V0:function(){return m}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c),s="40792e31f61894f4069807b40dd76a51",o="https://api.themoviedb.org/3/",f=t(6066),p=i().create({baseURL:o,params:{api_key:s,language:"en-US",include_adult:!1}}),v=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("trending/movie/day");case 3:if(!(n=e.sent)){e.next=6;break}return e.abrupt("return",n.data.results);case 6:if(0!==n.data.results.length){e.next=8;break}return e.abrupt("return",f.Am.info("\u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435 \u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e,\u0438\u0449\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e \u0430\u0434\u0435\u043a\u0432\u0430\u0442\u043d\u043e\u0435. "));case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",f.Am.info(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("movie/".concat(n,"/credits"));case 3:if(!(t=e.sent)){e.next=6;break}return e.abrupt("return",t.data.cast);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("movie/".concat(n,"/reviews"));case 3:if(!(t=e.sent)){e.next=6;break}return e.abrupt("return",t.data.results);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",f.Am.info(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("search/movie",{params:{query:n}});case 3:if(!(t=e.sent)){e.next=6;break}return e.abrupt("return",t.data.results);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f.Am.info(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("movie/".concat(n));case 3:if(!(t=e.sent)){e.next=6;break}return e.abrupt("return",t);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",f.Am.info(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=149.44f923d3.chunk.js.map