(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3i6D":function(t,n,e){"use strict";e.r(n);var a=e("ln6h"),s=e.n(a),o=e("O40h"),i=e("0iUn"),r=e("sLSF"),u=e("MI3g"),l=e("a7VT"),c=e("AT/M"),h=e("Tit0"),p=e("vYYK"),w=e("q1tI"),d=e.n(w),m=d.a.createElement,f=function(t){function n(){var t,e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return e=Object(u.a)(this,(t=Object(l.a)(n)).call.apply(t,[this].concat(s))),Object(p.a)(Object(c.a)(e),"state",{shows:[]}),e}return Object(h.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(s.a.mark(function t(){var n,e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.tvmaze.com/search/shows?q=batman");case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,this.setState({shows:e});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getData",value:function(){this.state.shows.map(function(t){return m("ul",null,m("li",null,m("p",null," ",t.show.name," ")))})}},{key:"render",value:function(){console.log("this.state.shows",this.state.shows);var t={padding:20,"border-bottom":"1px solid #DDD",display:"flex",float:"center",width:"90%"},n={padding:20,width:"70%",margin:" 10px auto"},e={width:"100%",margin:" 10px auto"},a={"list-style-type":"none",float:"right"};return m("div",null,m("ul",null,this.state.shows.map(function(s){return m("ul",{className:"about-list",style:t},m("li",{style:a},m("div",{className:"about-person",style:n},m("h3",null," ",s.show.name," "),m("p",null," ",s.show.summary," "),m("img",{src:s.show.image.original,style:e}))))})))}}]),n}(d.a.Component);n.default=f},e7bD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Components/Body",function(){return e("3i6D")}])}},[["e7bD",0,1]]]);