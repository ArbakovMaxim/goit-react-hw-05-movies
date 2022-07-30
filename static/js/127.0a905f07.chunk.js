"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[127],{2127:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n,a,u,c=r(5861),s=r(885),i=r(7757),o=r.n(i),p=r(168),f=r(6031),l=f.ZP.img(n||(n=(0,p.Z)(["\n  width: 150px;\n  height: 200px;\n"]))),v=f.ZP.ul(a||(a=(0,p.Z)(["\n  display: grid;\n  list-style: none;\n  grid-template-columns: repeat(auto-fill, 360px);\n  justify-content: space-between;\n  flex-flow: wrap;\n  text-align: center;\n"]))),d=f.ZP.li(u||(u=(0,p.Z)(["\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid black;\n  background-color: #d7d7d7;\n"]))),h=r(184),x=function(e){var t=e.moviesInfoActors;return(0,h.jsx)(v,{children:t.map((function(e){return(0,h.jsxs)(d,{children:[(0,h.jsx)("h3",{children:e.name}),(0,h.jsxs)("p",{children:["Character: ",e.character]}),e.profile_path&&(0,h.jsx)(l,{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name})]},e.credit_id)}))})},m=r(2791),b=r(6871),k=r(2488),g=function(){var e=(0,m.useState)([]),t=(0,s.Z)(e,2),r=t[0],n=t[1],a=(0,b.UO)("").id;return(0,m.useEffect)((function(){var e=function(){var e=(0,c.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.yo(a);case 2:(t=e.sent)&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,h.jsx)(x,{moviesInfoActors:r})}},2488:function(e,t,r){r.d(t,{yo:function(){return v},CB:function(){return x},q5:function(){return d},UF:function(){return l},V0:function(){return h}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),s=r.n(c),i="40792e31f61894f4069807b40dd76a51",o="https://api.themoviedb.org/3/",p=r(6066),f=s().create({baseURL:o,params:{api_key:i,language:"en-US",include_adult:!1}}),l=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("trending/movie/day");case 3:if(!(t=e.sent)){e.next=6;break}return e.abrupt("return",t.data.results);case 6:if(0!==t.data.results.length){e.next=8;break}return e.abrupt("return",p.Am.info("\u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435 \u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e,\u0438\u0449\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e \u0430\u0434\u0435\u043a\u0432\u0430\u0442\u043d\u043e\u0435. "));case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",p.Am.info(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("movie/".concat(t,"/credits"));case 3:if(!(r=e.sent)){e.next=6;break}return e.abrupt("return",r.data.cast);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("movie/".concat(t,"/reviews"));case 3:if(!(r=e.sent)){e.next=6;break}return e.abrupt("return",r.data.results);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",p.Am.info(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("search/movie",{params:{query:t}});case 3:if(!(r=e.sent)){e.next=6;break}return e.abrupt("return",r.data.results);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p.Am.info(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("movie/".concat(t));case 3:if(!(r=e.sent)){e.next=6;break}return e.abrupt("return",r);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",p.Am.info(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=127.0a905f07.chunk.js.map