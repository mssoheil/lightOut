(this.webpackJsonplightout=this.webpackJsonplightout||[]).push([[0],[,,,,,function(t,e,n){t.exports=n(13)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(2),c=n.n(i),o=(n(10),n(11),n(4)),s=n(3);n(12);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{},e)}var f=function(){var t=r.useReducer(u,{randomArray:Array(5).fill([])}),e=Object(o.a)(t,2),n=e[0],a=e[1];function i(t){var e=0,n=t.map((function(t,n){return t.map((function(t,n){return t.id===Math.floor(25*Math.random()+1)?(t.isActivated=!0,e+=1,t):t}))}));return 0===e&&(n[0][0].isActivated=!0),n}return r.useEffect((function(){var t=n.randomArray.map((function(t,e){for(var n=[],r=0;r<5;r++)n[r]={row:e,col:r,isActivated:!1,id:5*e+r+1};return n}));a({randomArray:i(t)})}),[]),r.createElement("div",{className:"lightOut"},r.createElement("h3",null,"The lightOut game"),r.createElement("p",null,"the purpose of the game is to turn off all the lights on the board",r.createElement("br",null),"clicking on a square switches its lightning state clicking on a square",r.createElement("br",null),"also switches the state of its North, South, East and West neighbors"),r.createElement("div",{className:"wrapper"},r.createElement("div",{className:"inner-wrapper"},n.randomArray.map((function(t,e){return r.createElement("div",null,t.map((function(t,e){return r.createElement("span",{onClick:function(){return function(t,e,r){var i=n.randomArray;i[t][e].isActivated=!i[t][e].isActivated,e+1<5&&(i[t][e+1].isActivated=!i[t][e+1].isActivated),e-1>=0&&(i[t][e-1].isActivated=!i[t][e-1].isActivated),t-1>=0&&(i[t-1][e].isActivated=!i[t-1][e].isActivated),t+1<5&&(i[t+1][e].isActivated=!i[t+1][e].isActivated),a({randomArray:i}),0===i.filter((function(t){return 0!==t.filter((function(t){return t.isActivated})).length})).length&&window.alert("won")}(t.row,t.col)},className:"lightOut__item ".concat(t.isActivated?"active":"")})})))})))))};var d=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.829a3ce8.chunk.js.map