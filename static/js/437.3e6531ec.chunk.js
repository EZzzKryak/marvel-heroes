"use strict";(self.webpackChunkmarvel_heroes=self.webpackChunkmarvel_heroes||[]).push([[437],{857:function(e,s,c){c.r(s),c.d(s,{default:function(){return _}});var n=c(9439),i=c(2791),a=c(4270),r=c(7689),l=c(1087),t=c(5681),o=c(2523),m=c(3957),d=c(184),u=function(e){var s=e.data,c=s.title,n=s.description,i=s.pageCount,r=s.thumbnail,t=s.language,o=s.price;return(0,d.jsxs)("div",{className:"single-comic",children:[(0,d.jsxs)(a.q,{children:[(0,d.jsx)("title",{children:c}),(0,d.jsx)("meta",{name:"description",content:"".concat(c," comic page")})]}),(0,d.jsx)("img",{src:r,alt:c,className:"single-comic__img"}),(0,d.jsxs)("div",{className:"single-comic__info",children:[(0,d.jsx)("h2",{className:"single-comic__name",children:c}),(0,d.jsx)("p",{className:"single-comic__descr",children:n}),(0,d.jsx)("p",{className:"single-comic__descr",children:i}),(0,d.jsxs)("p",{className:"single-comic__descr",children:["Language: ",t]}),(0,d.jsx)("div",{className:"single-comic__price",children:o})]}),(0,d.jsx)(l.rU,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},_=function(e){var s=(0,r.UO)().comicId,c=(0,i.useState)(null),a=(0,n.Z)(c,2),l=a[0],_=a[1],h=(0,t.Z)(),x=h.getComic,j=h.clearError,f=h.process,g=h.setProcess;(0,i.useEffect)((function(){p()}),[s]);var p=function(){s&&(j(),x(s).then(v).then((function(){return g("confirmed")})))},v=function(e){_(e)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.Z,{}),(0,o.Z)(f,u,l)]})}},2523:function(e,s,c){c.d(s,{Z:function(){return l}});var n=c(9613),i=c(184),a=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,i.jsxs)("div",{className:"skeleton",children:[(0,i.jsxs)("div",{className:"pulse skeleton__header",children:[(0,i.jsx)("div",{className:"pulse skeleton__circle"}),(0,i.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,i.jsx)("div",{className:"pulse skeleton__block"}),(0,i.jsx)("div",{className:"pulse skeleton__block"}),(0,i.jsx)("div",{className:"pulse skeleton__block"})]})]})},r=c(3394),l=function(e,s,c){switch(e){case"waiting":return(0,i.jsx)(a,{});case"loading":return(0,i.jsx)(r.Z,{});case"confirmed":return(0,i.jsx)(s,{data:c});case"error":return(0,i.jsx)(n.Z,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=437.3e6531ec.chunk.js.map