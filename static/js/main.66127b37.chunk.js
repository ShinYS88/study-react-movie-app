(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{58:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),i=s.n(n),r=s(29),c=s.n(r),o=s(9),l=s(2),m=s(17),j=s.n(m),u=s(30),d=s(11),b=s(12),h=s(14),v=s(13),p=s(31),O=s.n(p),x=s(5),_=s.n(x);s(58);function g(e){var t=e.id,s=e.year,n=e.title,i=e.summary,r=e.poster,c=e.genres;return Object(a.jsx)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:n,summary:i,poster:r,genres:c}},children:Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:r,alt:n,title:n}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:n}),Object(a.jsx)("h3",{className:"movie__year",children:s}),Object(a.jsxs)("h3",{className:"movie__summary",children:[i.slice(0,140),"..."]}),Object(a.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]})})}g.protoType={id:_.a.number.isRequired,year:_.a.number.isRequired,title:_.a.string.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var y=g,f=(s(62),function(e){Object(h.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(j.a.mark((function t(){var s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,console.log(a),e.setState({movies:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return console.log(s),Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"lodder",children:Object(a.jsx)("span",{className:"lodder__text",children:"loadding..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component));var N=function(){return Object(a.jsx)("div",{className:"about__container",children:Object(a.jsx)("span",{children:"About this page: \uc5b4\ubc14\uc6c3 \ud398\uc774\uc9c0"})})},k=function(e){Object(h.a)(s,e);var t=Object(v.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,s=e.history;console.log(t.state),void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return e?Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:e.title}),Object(a.jsx)("img",{src:e.poster,alt:e.title,title:e.title}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:e.title}),Object(a.jsx)("h3",{className:"movie__year",children:e.year}),Object(a.jsxs)("h3",{className:"movie__summary",children:[e.summary.slice(0,140),"..."]}),Object(a.jsx)("ul",{className:"movie__genres",children:e.genres.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]}):null}}]),s}(i.a.Component);var q=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:" About"})]})};s(63);var R=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(q,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(a.jsx)(l.a,{path:"/about",component:N}),Object(a.jsx)(l.a,{path:"/movie/:id",component:k})]})};c.a.render(Object(a.jsx)(R,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.66127b37.chunk.js.map