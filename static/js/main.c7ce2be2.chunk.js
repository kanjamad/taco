(this.webpackJsonprioseotaco=this.webpackJsonprioseotaco||[]).push([[0],{61:function(e,c,t){},66:function(e,c,t){},69:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),s=t(15),r=t.n(s),l=(t(61),t(28)),o=t.n(l),j=t(48),i=t(11),d=t(75),b=t(71),O=t(52),h=t(2),x=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d.a,{bg:"primary",variant:"dark",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(d.a.Brand,{href:"#",children:"Logo"}),Object(h.jsx)(d.a.Toggle,{}),Object(h.jsxs)(d.a.Collapse,{className:"justify-content-end",children:[Object(h.jsx)(d.a.Text,{children:"Menu"}),Object(h.jsxs)(d.a.Text,{children:[Object(h.jsx)(O.a,{}),"Truck Locator"]})]})]})})})},u=t(3),p=t(76),y=t(72),f=t(73),g=t(74),m=t(78),w=t(53),v=t(54),_=function(e){return console.log(e),Object(h.jsxs)(p.a,Object(u.a)(Object(u.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(h.jsx)(p.a.Header,{closeButton:!0}),Object(h.jsxs)(p.a.Body,{children:[Object(h.jsx)(y.a,{fluid:!0,src:e.place.photo?e.place.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}),Object(h.jsx)("h1",{children:e.place.name}),Object(h.jsxs)("p",{children:[e.place.address,Object(h.jsx)("br",{}),e.place.city,", ",e.place.state," ",e.place.postal_code]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:Object(h.jsxs)("h5",{style:{color:"orange"},children:[Object(h.jsx)(w.a,{}),"(xxx)xxx-xxxx"]})}),Object(h.jsx)(g.a,{children:Object(h.jsxs)("h5",{style:{color:"orange",cursor:"pointer"},onClick:function(){return window.open("https://www.google.com/maps/search/?api=1&query=".concat(e.place.latitude,",").concat(e.place.longitude),"_blank")},children:[Object(h.jsx)(v.a,{}),"Get Directions"]})})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:"Monday"}),Object(h.jsxs)(g.a,{children:[e.place.monday_open," - ",e.place.monday_close]})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:"Tuesday"}),Object(h.jsxs)(g.a,{children:[e.place.tuesday_open," - ",e.place.tuesday_close]})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:"Wednesday"}),Object(h.jsxs)(g.a,{children:[e.place.wednesday_open," - ",e.place.wednesday_close]})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:"Thursday"}),Object(h.jsxs)(g.a,{children:[e.place.thursday_open," - ",e.place.thursday_close]})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:"Friday"}),Object(h.jsxs)(g.a,{children:[e.place.friday_open," - ",e.place.friday_close]})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:"Saturday"}),Object(h.jsxs)(g.a,{children:[e.place.saturday_open," - ",e.place.saturday_close]})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:"Sunday"}),Object(h.jsxs)(g.a,{children:[e.place.sunday_open," - ",e.place.sunday_close]})]})]}),Object(h.jsx)(p.a.Footer,{children:Object(h.jsx)(m.a,{variant:"secondary",size:"lg",onClick:function(){return window.open(e.place.url,"_blank")},children:"VIEW FULL DETAILS"})})]}))},k=t(43),S=(t(66),function(e){var c=e.place,t=e.show,n={lat:c.latitude,lng:c.longitude},s=Object(k.c)({googleMapsApiKey:"AIzaSyAImHTgKG69PO0oMPS_ydA3nXfMtRj5Lw8",libraries:["places"]}),r=s.isLoaded,l=s.loadError,o=Object(a.useRef)(),j=Object(a.useCallback)((function(e){o.current=e}),[]);return l?"Error":r?Object(h.jsx)(h.Fragment,{children:t&&Object(h.jsx)("div",{className:"map",children:Object(h.jsx)(k.a,{mapContainerStyle:{height:"100vh",width:"65vw"},zoom:14,center:n,options:{disableDefaultUI:!0,zoomControl:!0},onLoad:j,children:Object(h.jsx)(k.b,{position:n})})})}):"Loading..."}),T=t(77),C=t(55),F=t.n(C),L=function(e){var c=e.place,t=Object(a.useState)(!1),n=Object(i.a)(t,2),s=n[0],r=n[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),j=o[0],d=o[1],b=Object(a.useState)({}),O=Object(i.a)(b,2),x=O[0],u=O[1],p=function(e){var c={lat:e.coords.latitude,lng:e.coords.longitude};u(c)};Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(p)}),[]);var y=x;console.log(y);var w={lat:c.latitude,lng:c.longitude};console.log(w);var v=F()(y,w);console.log(v);var k=621e-6*v;console.log(k);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(f.a,{style:{width:"100%"},children:[Object(h.jsxs)(g.a,{xs:12,md:4,children:[Object(h.jsx)(T.a,{children:Object(h.jsxs)(T.a.Body,{children:[Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:Object(h.jsx)(T.a.Title,{children:c.name})}),Object(h.jsx)(g.a,{children:Object(h.jsxs)(T.a.Text,{children:[k," miles"]})})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:Object(h.jsxs)(T.a.Text,{children:[Object(h.jsxs)("p",{children:[c.address," ",Object(h.jsx)("br",{}),c.city,", ",c.state," ",c.postal_code]}),Object(h.jsxs)("p",{className:"text-success",children:[" ","Open today until ",function(){var e;switch((new Date).getDay()){case 0:e=c.sunday_close;break;case 1:e=c.monday_close;break;case 2:e=c.tuesday_close;break;case 3:case 4:e=c.wednesday_close;break;case 5:e=c.friday_close;break;case 6:e=c.Saturday_close;break;default:e=" 24 hrs"}return console.log(e),e}()," "]})]})}),Object(h.jsx)(g.a,{})]}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{children:Object(h.jsx)(m.a,{variant:"secondary",onClick:function(){d((function(e){return!e}))},children:"DIRECTIONS"})}),Object(h.jsx)(g.a,{children:Object(h.jsx)(m.a,{variant:"secondary",onClick:function(){return r(!0)},children:"MORE INFO"})})]})]})}),Object(h.jsx)(_,{place:c,show:s,onHide:function(){return r(!1)}})]}),Object(h.jsx)(g.a,{xs:12,md:8,children:Object(h.jsx)(S,{place:c,show:j})})]})})},I=function(e){var c=e.places;return Object(h.jsx)(T.a,{style:{height:"100vh",overflow:"auto"},children:Object(h.jsx)(T.a.Body,{children:c.map((function(e){return Object(h.jsx)(L,{place:e},e.id)}))})})},E=(t(68),function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=function(){var e=Object(j.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my.api.mockaroo.com/locations.json?key=a45f1200");case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,n(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(I,{places:t})]})}),B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),B()}},[[69,1,2]]]);
//# sourceMappingURL=main.c7ce2be2.chunk.js.map