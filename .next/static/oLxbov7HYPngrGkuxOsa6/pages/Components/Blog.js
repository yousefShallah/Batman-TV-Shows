(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{NPxl:function(t,n,e){"use strict";e.r(n);var s=e("ln6h"),a=e.n(s),o=e("O40h"),r=e("0iUn"),c=e("sLSF"),u=e("MI3g"),i=e("a7VT"),h=e("AT/M"),l=e("Tit0"),w=e("vYYK"),p=e("q1tI"),f=e.n(p),v=e("YFqc"),b=e.n(v),d=e("vcXL"),m=e.n(d),j=f.a.createElement,O=function(t){function n(){var t,e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return e=Object(u.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(a))),Object(w.a)(Object(h.a)(e),"state",{shows:[]}),e}return Object(l.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(a.a.mark(function t(){var n,e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m()("https://api.tvmaze.com/search/shows?q=batman");case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,this.setState({shows:e});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("this.state.shows",this.state.shows),j("div",null,j("h3",null,"Batman TV Shows"),j("ul",null,this.state.shows.map(function(t){return j("li",{key:t.show.id},j(b.a,{href:t.show.url},j("a",{target:"blank"}," ",t.show.name,"  ")))})))}}]),n}(f.a.Component);n.default=O},nYHR:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Components/Blog",function(){return e("NPxl")}])},vcXL:function(t,n,e){"use strict";var s=self.fetch.bind(self);t.exports=s,t.exports.default=t.exports}},[["nYHR",0,1]]]);