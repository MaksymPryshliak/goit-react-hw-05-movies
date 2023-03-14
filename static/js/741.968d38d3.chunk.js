"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[741],{741:function(t,n,r){r.r(n),r.d(n,{default:function(){return g}});var e=r(439),a=r(791),A=r(689),s=r(894),u=r(887),c=r(196),o=r(184),i=function(t){var n=t.cast;return(0,o.jsx)("ul",{className:c.Z.castList,children:n.map((function(t){var n=t.id,r=t.name,e=t.profile_path,a=t.character;return(0,o.jsxs)("li",{className:c.Z.castitem,children:[(0,o.jsx)("img",{width:"50",src:e?"https://image.tmdb.org/t/p/w500".concat(e):u,alt:r}),(0,o.jsxs)("div",{className:c.Z.castInfo,children:[(0,o.jsx)("p",{className:c.Z.castName,children:r}),(0,o.jsxs)("p",{className:c.Z.castChar,children:["Character: ",a]})]})]},n)}))})},g=function(){var t=(0,A.UO)().movieId,n=(0,a.useState)([]),r=(0,e.Z)(n,2),u=r[0],c=r[1];return(0,a.useEffect)((function(){try{(0,s.zv)(t).then((function(t){return c(t.cast.splice(0,8))}))}catch(n){console.log(n)}})),(0,o.jsx)(o.Fragment,{children:0===(null===u||void 0===u?void 0:u.length)?"We don't have any information about cast for this movie":(0,o.jsx)(i,{cast:u})})}},894:function(t,n,r){r.d(n,{Hg:function(){return c},TP:function(){return i},tx:function(){return w},z1:function(){return o},zv:function(){return g}});var e=r(861),a=r(757),A=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="?api_key=158ad78a017acca92c1d8a0f66634ca7",c=function(){var t=(0,e.Z)(A().mark((function t(){var n;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day".concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(A().mark((function t(n){var r;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie".concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(A().mark((function t(n){var r;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(n).concat(u,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,e.Z)(A().mark((function t(n){var r;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(n,"/credits").concat(u,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),w=function(){var t=(0,e.Z)(A().mark((function t(n){var r;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(n,"/reviews").concat(u,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},196:function(t,n){n.Z={infoContainer:"AditInfo_infoContainer__qS11L",infoTitle:"AditInfo_infoTitle__r33wS",infoList:"AditInfo_infoList__QW6N8",infoLink:"AditInfo_infoLink__ChAvK",castList:"AditInfo_castList__xEvj6",castitem:"AditInfo_castitem__ctzHw",castName:"AditInfo_castName__-ZIbA",reviewsList:"AditInfo_reviewsList__5OO4R",author:"AditInfo_author__T25JD",content:"AditInfo_content__evOgF"}},887:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=741.968d38d3.chunk.js.map