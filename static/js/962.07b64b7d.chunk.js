"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[962],{962:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(439),a=e(791),i=e(689),c=e(894),u=e(196),o=e(184),s=function(t){var n=t.reviews;return(0,o.jsx)("ul",{className:u.Z.reviewsList,children:n.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{className:u.Z.author,children:e}),(0,o.jsx)("p",{className:u.Z.content,children:r})]},n)}))})},f=function(){var t=(0,i.UO)().movieId,n=(0,a.useState)([]),e=(0,r.Z)(n,2),u=e[0],f=e[1];return(0,a.useEffect)((function(){try{(0,c.tx)(t).then((function(t){return f(t.results)}))}catch(n){console.log(n)}}),[t]),(0,o.jsx)("div",{children:0===(null===u||void 0===u?void 0:u.length)?(0,o.jsx)("p",{children:"We don't have any reviews for this movie yet."}):(0,o.jsx)(s,{reviews:u})})}},894:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return f},tx:function(){return p},z1:function(){return s},zv:function(){return d}});var r=e(861),a=e(757),i=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="?api_key=158ad78a017acca92c1d8a0f66634ca7",o=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day".concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie".concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n).concat(u,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits").concat(u,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews").concat(u,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},196:function(t,n){n.Z={infoContainer:"AditInfo_infoContainer__qS11L",infoTitle:"AditInfo_infoTitle__r33wS",infoList:"AditInfo_infoList__QW6N8",infoLink:"AditInfo_infoLink__ChAvK",castList:"AditInfo_castList__xEvj6",castitem:"AditInfo_castitem__ctzHw",castName:"AditInfo_castName__-ZIbA",reviewsList:"AditInfo_reviewsList__5OO4R",author:"AditInfo_author__T25JD",content:"AditInfo_content__evOgF"}}}]);
//# sourceMappingURL=962.07b64b7d.chunk.js.map