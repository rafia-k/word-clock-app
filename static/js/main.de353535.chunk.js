(this["webpackJsonpword-clock-app"]=this["webpackJsonpword-clock-app"]||[]).push([[0],{2:function(e,t,n){},8:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),E=n(3),o=n.n(E);n(8),n(2);var c=function(e){var t=e.text,n="word-gray";return e.lit&&(n="word-lit"),r.a.createElement("div",{className:n},t)},i={1:"ONE",2:"TWO",3:"THREE",4:"FOUR",5:"FIVE",6:"SIX",7:"SEVEN",8:"EIGHT",9:"NINE",10:"TEN",11:"ELEVEN",12:"TWELVE"};function l(e,t){e.set(t,!0)}function T(e){var t=new Map;return e.forEach((function(e){return t.set(e,!1)})),t}var s=function(){var e=["IT","IS","TEN","TWENTY","FIVE","QUARTER","HALF","MINUTES","PAST","TO"],t=["ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","ELEVEN","TWELVE","O'CLOCK"],n=T(e),a=T(t),E=new Date,o=E.getHours(),s=E.getMinutes();o>12&&(o-=12);var u=s;return u>30&&(u=60-u),function(e,t,n,a,r){l(e,"IT"),l(e,"IS"),l(t,"O'CLOCK"),28<=a&&a<33?(l(e,"HALF"),l(e,"PAST")):3<=r&&r<8?(l(e,"FIVE"),l(e,"MINUTES")):8<=r&&r<13?(l(e,"TEN"),l(e,"MINUTES")):13<=r?l(e,"QUARTER"):18<=r&&r<23?(l(e,"TWENTY"),l(e,"MINUTES")):23<=r&&r<28&&(l(e,"TWENTY"),l(e,"FIVE"),l(e,"MINUTES")),3<=a&&a<30?l(e,"PAST"):30<a&&a<=57&&l(e,"TO"),0<=a&&a<30?l(t,i[n]):(12===n&&(n=0),l(t,i[n+1]))}(n,a,o,s,u),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("h3",{className:"title"},"WORD CLOCK")),r.a.createElement("div",{className:"flex-container"},e.map((function(e){return r.a.createElement(c,{text:e,lit:n.get(e)})})),t.map((function(e){return r.a.createElement(c,{text:e,lit:a.get(e)})}))),r.a.createElement("div",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[9,1,2]]]);
//# sourceMappingURL=main.de353535.chunk.js.map