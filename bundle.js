!function(e){function t(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=p.p+""+e+"."+O+".hot-update.js",t.appendChild(r)}function r(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,r=p.p+""+O+".hot-update.json";t.open("GET",r,!0),t.timeout=1e4,t.send(null)}catch(n){return e(n)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+r+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+r+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(a){return void e(a)}e(null,n)}}}function n(e){function t(e,t){"ready"===P&&o("prepare"),M++,p.e(e,function(){function r(){M--,"prepare"===P&&(T[e]||c(e),0===M&&0===k&&s())}try{t.call(null,n)}finally{r()}})}var r=x[e];if(!r)return p;var n=function(t){return r.hot.active?x[t]?(x[t].parents.indexOf(e)<0&&x[t].parents.push(e),r.children.indexOf(t)<0&&r.children.push(t)):g=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),g=[]),p(t)};for(var a in p)Object.prototype.hasOwnProperty.call(p,a)&&(y?Object.defineProperty(n,a,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(a)):n[a]=p[a]);return y?Object.defineProperty(n,"e",{enumerable:!0,value:t}):n.e=t,n}function a(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,r){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r;else t._acceptedDependencies[e]=r},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:i,apply:f,status:function(e){return e?void j.push(e):P},addStatusHandler:function(e){j.push(e)},removeStatusHandler:function(e){var t=j.indexOf(e);t>=0&&j.splice(t,1)},data:w[e]};return t}function o(e){P=e;for(var t=0;t<j.length;t++)j[t].call(null,e)}function u(e){var t=+e+""===e;return t?+e:e}function i(e,t){if("idle"!==P)throw new Error("check() is only allowed in idle status");"function"==typeof e?(_=!1,t=e):(_=e,t=t||function(e){if(e)throw e}),o("check"),r(function(e,r){if(e)return t(e);if(!r)return o("idle"),void t(null,null);A={},E={},T={};for(var n=0;n<r.c.length;n++)E[r.c[n]]=!0;m=r.h,o("prepare"),h=t,b={};var a=0;c(a),"prepare"===P&&0===M&&0===k&&s()})}function l(e,t){if(E[e]&&A[e]){A[e]=!1;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(b[r]=t[r]);0===--k&&0===M&&s()}}function c(e){E[e]?(A[e]=!0,k++,t(e)):T[e]=!0}function s(){o("ready");var e=h;if(h=null,e)if(_)f(_,e);else{var t=[];for(var r in b)Object.prototype.hasOwnProperty.call(b,r)&&t.push(u(r));e(null,t)}}function f(t,r){function n(e){for(var t=[e],r={},n=t.slice();n.length>0;){var o=n.pop(),e=x[o];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+o);if(0===o)return;for(var u=0;u<e.parents.length;u++){var i=e.parents[u],l=x[i];if(l.hot._declinedDependencies[o])return new Error("Aborted because of declined dependency: "+o+" in "+i);t.indexOf(i)>=0||(l.hot._acceptedDependencies[o]?(r[i]||(r[i]=[]),a(r[i],[o])):(delete r[i],t.push(i),n.push(i)))}}}return[t,r]}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.indexOf(n)<0&&e.push(n)}}if("ready"!==P)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(r=t,t={}):t&&"object"==typeof t?r=r||function(e){if(e)throw e}:(t={},r=r||function(e){if(e)throw e});var i={},l=[],c={};for(var s in b)if(Object.prototype.hasOwnProperty.call(b,s)){var f=u(s),d=n(f);if(!d){if(t.ignoreUnaccepted)continue;return o("abort"),r(new Error("Aborted because "+f+" is not accepted"))}if(d instanceof Error)return o("abort"),r(d);c[f]=b[f],a(l,d[0]);for(var f in d[1])Object.prototype.hasOwnProperty.call(d[1],f)&&(i[f]||(i[f]=[]),a(i[f],d[1][f]))}for(var y=[],v=0;v<l.length;v++){var f=l[v];x[f]&&x[f].hot._selfAccepted&&y.push({module:f,errorHandler:x[f].hot._selfAccepted})}o("dispose");for(var h=l.slice();h.length>0;){var f=h.pop(),_=x[f];if(_){for(var j={},k=_.hot._disposeHandlers,M=0;M<k.length;M++){var T=k[M];T(j)}w[f]=j,_.hot.active=!1,delete x[f];for(var M=0;M<_.children.length;M++){var A=x[_.children[M]];if(A){var E=A.parents.indexOf(f);E>=0&&A.parents.splice(E,1)}}}}for(var f in i)if(Object.prototype.hasOwnProperty.call(i,f))for(var _=x[f],C=i[f],M=0;M<C.length;M++){var S=C[M],E=_.children.indexOf(S);E>=0&&_.children.splice(E,1)}o("apply"),O=m;for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(e[f]=c[f]);var L=null;for(var f in i)if(Object.prototype.hasOwnProperty.call(i,f)){for(var _=x[f],C=i[f],N=[],v=0;v<C.length;v++){var S=C[v],T=_.hot._acceptedDependencies[S];N.indexOf(T)>=0||N.push(T)}for(var v=0;v<N.length;v++){var T=N[v];try{T(i)}catch(R){L||(L=R)}}}for(var v=0;v<y.length;v++){var D=y[v],f=D.module;g=[f];try{p(f)}catch(R){if("function"==typeof D.errorHandler)try{D.errorHandler(R)}catch(R){L||(L=R)}else L||(L=R)}}return L?(o("fail"),r(L)):(o("idle"),void r(null,l))}function p(t){if(x[t])return x[t].exports;var r=x[t]={exports:{},id:t,loaded:!1,hot:a(t),parents:g,children:[]};return e[t].call(r.exports,r,r.exports,n(t)),r.loaded=!0,r.exports}var d=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){l(e,t),d&&d(e,t)};var y=!1;try{Object.defineProperty({},"x",{get:function(){}}),y=!0}catch(v){}var h,b,m,_=!0,O="5d76960ff4acf7fdfb77",w={},g=[],j=[],P="idle",k=0,M=0,T={},A={},E={},x={};return p.m=e,p.c=x,p.p="",p.h=function(){return O},n(0)(0)}([function(e,t,r){"use strict";var n=r(2);new n.App({element:document.querySelector("#app")})},function(e,t){"use strict";function r(e){return e.reduce(function(e,t){return e+=t},0)}function n(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}Object.defineProperty(t,"__esModule",{value:!0}),t.countArray=r,t.createNode=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(8);Object.defineProperty(t,"AbstractComponent",{enumerable:!0,get:function(){return n(a)["default"]}});var o=r(9);Object.defineProperty(t,"App",{enumerable:!0,get:function(){return n(o)["default"]}});var u=r(12);Object.defineProperty(t,"Layout",{enumerable:!0,get:function(){return n(u)["default"]}});var i=r(10);Object.defineProperty(t,"Control",{enumerable:!0,get:function(){return n(i)["default"]}});var l=r(14);Object.defineProperty(t,"Player",{enumerable:!0,get:function(){return n(l)["default"]}});var c=r(16);Object.defineProperty(t,"PlayersList",{enumerable:!0,get:function(){return n(c)["default"]}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(19),c=n(l),s=r(4),f=n(s),p=r(20),d=n(p),y=r(5),v=n(y),h=r(1),b={frame:0,availableFrames:0,maxScore:0,isOver:!1,isOn:!1,players:[],current:{player:null,score:0,available:0,pins:[]}},m=function(e){function t(e){return a(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),i(t,[{key:"addPlayer",value:function(e){return e.players.push({pins:[[]],strikes:[],spares:[],score:[],exit:!1,isWinner:!1}),e}},{key:"setWinner",value:function(e){e.players.forEach(function(t){var r=(0,h.countArray)(t.score);t.isWinner=r===e.maxScore})}},{key:"updateGame",value:function(e){var t=e.current.score,r=e.players[e.current.player].pins.length-1,n=d["default"].isOver(e.current.pins),a=d["default"].isLastFrame(e.frame);e.players[e.current.player].pins[r].push(t),e.players[e.current.player].score[r]=d["default"].countScore(e.current.pins),e.players[e.current.player].strikes[r]=d["default"].isStrike(e.current.pins),e.players[e.current.player].spares[r]=d["default"].isSpare(e.current.pins),n&&(e.players[e.current.player].exit=a,e.current.player===e.players.length-1?a?(e.isOver=a,e.isOn=!a,e.maxScore=d["default"].getMaxScore(e.players)):e.current.player=0:e.current.player++,e.current.pins=[],e.players[e.current.player].pins.push([])),e.current.available=d["default"].getAvailablePins(e.current.pins),e.isOver?Object.assign(e,_.setWinner(e)):0===e.current.player&&0===e.current.pins.length&&e.frame++}}]),t}(c["default"]),_=new m(b);_.appToken=v["default"].register(function(e){var t=_.state;switch(e.type){case f["default"].ADD_PLAYER:Object.assign(t,_.addPlayer(t)),_.update(t);break;case f["default"].START:t.isOn=!0,t.current.player=0,t.current.available=d["default"].getAvailablePins([]),t.availableFrames=d["default"].getAvailableFrames(),_.update(t);break;case f["default"].ROLL:var r=void 0;r=isNaN(e.value)?d["default"].roll(t.current.pins):e.value,t.current.score=r,t.current.pins.push(t.current.score),Object.assign(t,_.updateGame(t)),_.update(t)}}),t["default"]=_},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={START:"START",ROLL:"ROLL",ADD_PLAYER:"ADD_PLAYER"}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(18),o=n(a);t["default"]=new o["default"]("app-token")},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a={},o=-1,u=function(){function e(){r(this,e)}return n(e,[{key:"emit",value:function(e,t){if(!a[e])return!1;for(var r=a[e],n=r?r.length:0;n--;)r[n].func(t);return this}},{key:"on",value:function(e,t){a[e]||(a[e]=[]);var r=(++o).toString();return a[e].push({token:r,func:t}),r}},{key:"off",value:function(e){for(var t in a)if(a[t])for(var r=0,n=a[t].length;n>r;r++)if(a[t][r].token===e)return a[t].splice(r,1),e;return this}}]),e}();t["default"]=u},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){return{type:l["default"].START}}function o(e){return{type:l["default"].ROLL,value:e}}function u(){return{type:l["default"].ADD_PLAYER}}Object.defineProperty(t,"__esModule",{value:!0}),t.start=a,t.roll=o,t.addPlayer=u;var i=r(4),l=n(i)},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(){r(this,e)}return n(e,[{key:"removeChildNodes",value:function(e){for(e||(e=this.element);e.firstChild;)e.removeChild(e.firstChild);return this}},{key:"update",value:function(e){return this.removeChildNodes(),Array.isArray(e)?e.forEach(this.append.bind(this)):this.append(e),this}},{key:"append",value:function(e){if(e instanceof HTMLElement)this.element.appendChild(e);else if("function"==typeof e){var t=e.tpl();this.element.appendChild(t),new e({element:t})}else if(e instanceof Object&&e.Class){var r=e.Class.tpl(),n={element:r};Object.assign(n,e.options),this.element.appendChild(r),new e.Class(n)}}}]),e}();t["default"]=a},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(3),c=n(l),s=r(2),f=function(e){function t(e){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this));return r.element=e.element,r.render(),c["default"].onChange(r.render.bind(r)),r}return u(t,e),i(t,[{key:"render",value:function(){this.update(s.Layout)}}]),t}(s.AbstractComponent);t["default"]=f},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(7),c=r(5),s=n(c),f=r(3),p=n(f),d=r(2),y=r(11),v=function(e){function t(e){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this));return r.element=e.element,r.render(),r.element.addEventListener("click",r.bindEvents.bind(r)),r}return u(t,e),i(t,null,[{key:"tpl",value:function(){return(0,y.elementTpl)()}}]),i(t,[{key:"bindEvents",value:function(e){switch(e.target.getAttribute("data-click")){case"roll-random":s["default"].dispatch((0,l.roll)());break;case"roll-value":var t=Number(e.target.getAttribute("data-value"));s["default"].dispatch((0,l.roll)(t));break;case"add-player":s["default"].dispatch((0,l.addPlayer)());break;case"start":s["default"].dispatch((0,l.start)())}}},{key:"prepareProps",value:function(e){var t={};return t.available=e.current.available,t}},{key:"render",value:function(){var e=p["default"].state,t=this.prepareProps(e),r=[];e.isOn||e.isOver||(r.push((0,y.addPlayerTpl)()),e.players.length&&r.push((0,y.startTpl)())),e.players.length&&!e.isOver&&e.isOn&&r.push((0,y.buttonsTpl)(t)),this.update(r)}}]),t}(d.AbstractComponent);t["default"]=v},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){return(0,c.createNode)('\n        <div id="controls" class="'+f["default"].controls+'"></div>\n    ')}function o(){return(0,c.createNode)('\n        <button class="'+f["default"].button+" "+f["default"].addPlayer+'" data-click="add-player">Add player</button>\n    ')}function u(){return(0,c.createNode)('\n        <button class="'+f["default"].button+" "+f["default"].start+'" data-click="start">Start</button>\n    ')}function i(e){for(var t="",r=0;e>=r;r++)t+='\n            <button class="'+f["default"].button+'"\n                data-click="roll-value" data-value="'+r+'">'+r+"</button>\n        ";return t}function l(e){return(0,c.createNode)('\n        <div class="'+f["default"].container+'">\n            <div class="'+f["default"].noteRandom+'">Try roll at random</div>\n            <button class="'+f["default"].button+" "+f["default"].rollRandom+'" data-click="roll-random">0...'+e.available+'</button>\n            <div class="'+f["default"].note+'">or choose the exact number of pins to be knocked down</div>\n            <div class="'+f["default"].buttonsContainer+'">\n                '+i(e.available)+"\n            </div>\n        </div>\n    ")}Object.defineProperty(t,"__esModule",{value:!0}),t.elementTpl=a,t.addPlayerTpl=o,t.startTpl=u,t.buttonsTpl=l;var c=r(1),s=r(21),f=n(s)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(3),c=n(l),s=r(2),f=r(13),p=function(e){function t(e){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this));return r.element=e.element,r.render(),r}return u(t,e),i(t,null,[{key:"tpl",value:function(){return(0,f.elementTpl)()}}]),i(t,[{key:"prepareProps",value:function(e){var t={};return e.frame+1&&(t.frame=e.frame+1),t}},{key:"render",value:function(){var e=c["default"].state,t=this.prepareProps(e),r=[];r.push((0,f.titleTpl)()),e.players.length?(e.isOver?r.push((0,f.isOverTpl)()):null!==e.current.player&&r.push((0,f.frameNumberTpl)(t)),r.push(s.PlayersList)):r.push((0,f.welcomeTpl)()),r.push(s.Control),this.update(r)}}]),t}(s.AbstractComponent);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){return(0,c.createNode)('\n        <div class="'+f["default"].layout+'"></div>\n    ')}function o(){return(0,c.createNode)('\n        <div class="'+f["default"].title+'">\n            Minimalistic interface\n            for&nbsp;a&nbsp;<a class="'+f["default"].link+'" href="https://github.com/diakt/bowling">bowling scoring system<a/>\n        </div>\n    ')}function u(){return(0,c.createNode)('\n        <div class="'+f["default"].welcome+'">Please add new player</div>\n    ')}function i(){return(0,c.createNode)('\n        <div class="'+f["default"].isOver+'">The game is Over</div>\n    ')}function l(e){return(0,c.createNode)('\n        <div class="'+f["default"].currentFrame+'">Current frame: <span class="'+f["default"].number+'">'+e.frame+"</span></div>\n    ")}Object.defineProperty(t,"__esModule",{value:!0}),t.elementTpl=a,t.titleTpl=o,t.welcomeTpl=u,t.isOverTpl=i,t.frameNumberTpl=l;var c=r(1),s=r(22),f=n(s)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(3),c=n(l),s=r(2),f=r(1),p=r(15),d=function(e){function t(e){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this));return r.id=e.id,r.element=e.element,r.render(),r}return u(t,e),i(t,null,[{key:"tpl",value:function(){return(0,p.elementTpl)()}}]),i(t,[{key:"collectFrames",value:function(e,t,r,n){if(0===r.length)return t;r=r.slice(0);var a=(0,f.countArray)(e.score.slice(0,n+1)),o=e.strikes[n],u=e.spares[n],i=[],l=void 0;return o?i.push("X"):u?(i.push("/"),r.shift(),r.shift(),l=(0,f.countArray)(r)):0===r[0]?(i.push("–"),l=(0,f.countArray)(r)):(i.push(r[0]),r.shift(),l=(0,f.countArray)(r||[])),l&&i.push(l),t.push({score:i,previousScore:a}),t}},{key:"prepareProps",value:function(e){var t=e.players[this.id],r=t.pins.reduce(this.collectFrames.bind(this,t),[]),n=[];return e.isOver||(t.exit&&n.push("exit"),this.id===e.current.player&&n.push("current")),t.isWinner&&n.push("winner"),{id:this.id+1,availableFrames:e.availableFrames,frames:r,classNames:n}}},{key:"render",value:function(){var e=c["default"].state,t=this.prepareProps(e);this.update((0,p.childrenTpl)(t))}}]),t}(s.AbstractComponent);t["default"]=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){return(0,i.createNode)('\n        <div class="'+c["default"].player+'"></div>\n    ')}function o(e){var t="";e.frames.length&&(t=e.frames.reduce(function(e,t){return e+='\n                <div class="'+c["default"].frame+'">\n                    <div class="'+c["default"].score+'">'+(t.score[0]||"")+'</div>\n                    <div class="'+c["default"].score+'">'+(t.score[1]||"")+'</div>\n                    <div class="'+c["default"].frameScore+'">'+t.previousScore+"</div>\n                </div>\n            "},""));for(var r=e.availableFrames-e.frames.length;r;)r--,t+='\n                <div class="'+c["default"].frame+'">\n                    <div class="'+c["default"].score+" "+c["default"].score+'"></div>\n                </div>\n        ';return(0,i.createNode)('\n        <div class="'+c["default"].playerWrapper+" "+u(e)+'">\n            <div class="'+c["default"].name+'">Player '+e.id+':</div>\n            <div class="'+c["default"].frames+'">'+t+"</div>\n        </div>\n    ")}function u(e){return e.classNames.map(function(e){return c["default"][e]}).join(" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.elementTpl=a,t.childrenTpl=o;var i=r(1),l=r(23),c=n(l)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(3),c=n(l),s=r(2),f=r(17),p=function(e){function t(e){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this));return r.element=e.element,r.render(),r}return u(t,e),i(t,null,[{key:"tpl",value:function(){return(0,f.elementTpl)()}}]),i(t,[{key:"render",value:function(){var e=c["default"].state,t=[];e.players.forEach(function(e,r){t.push({Class:s.Player,options:{id:r}})}),this.update(t)}}]),t}(s.AbstractComponent);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){return(0,o.createNode)('\n        <div id="players-list" class="'+i["default"].scoreboard+'"></div>\n    ')}Object.defineProperty(t,"__esModule",{value:!0}),t.elementTpl=a;var o=r(1),u=r(24),i=n(u)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(6),c=n(l),s=function(e){function t(e){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this));return r.token=e,r}return u(t,e),i(t,[{key:"dispatch",value:function(e){this.emit(""+this.token,e)}},{key:"register",value:function(e){return this.on(""+this.token,e),this.token}}]),t}(c["default"]);t["default"]=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(6),c=n(l),s=function(e){function t(e){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this));return r.state=e,r}return u(t,e),i(t,[{key:"update",value:function(e){this.state=Object.assign(this.state,e),this.emit("store.change")}},{key:"onChange",value:function(e){var t=this;this.on("store.change",function(){return e(t.state)})}}]),t}(c["default"]);t["default"]=s},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(1),u=function(){function e(){n(this,e)}return a(e,null,[{key:"roll",value:function(t){var r,n=e.getAvailablePins(t),a=10===n?Math.floor(3*Math.random())+1:4;switch(a){case 1:r=Math.floor(3*Math.random())+8;break;case 2:r=Math.floor(3*Math.random())+5;break;case 3:r=Math.floor(6*Math.random());break;case 4:r=Math.floor(Math.random()*n)}return r}},{key:"countScore",value:function(e){var t;return t=this.isStrike(e)?(0,o.countArray)(e)+(0,o.countArray)(e.slice(1)):this.isSpare(e)?(0,o.countArray)(e)+(e[2]?e[2]:0):(0,o.countArray)(e)}},{key:"getAvailablePins",value:function(t){var r=10;return t.length&&(r=e.isStrike(t)?10-(t[1]?t[1]:0):e.isSpare(t)?10-(t[2]?t[2]:0):10-(t[0]?t[0]:0)),r}},{key:"getMaxScore",value:function(e){var t=[];return e.forEach(function(e){t.push((0,o.countArray)(e.score))}),Math.max.apply(Math,t)}},{key:"isOver",value:function(t){var r;return r=e.isStrike(t)?10===t[1]?2:3:e.isSpare(t)?10===t[2]?3:4:2,t.length===r}},{key:"isStrike",value:function(e){return 10===e[0]}},{key:"isSpare",value:function(e){return e[0]+e[1]>=10&&10!==e[0]}},{key:"isLastFrame",value:function(t){return t===e.getAvailableFrames()-1}},{key:"getAvailableFrames",value:function(){return 10}}]),e}();t["default"]=u},function(e,t){e.exports={controls:"controls_1L569",button:"button_1j4Ux",container:"container_1j-AH","buttons-container":"buttons-container_rCNqi",buttonsContainer:"buttons-container_rCNqi","add-player":"add-player_2_wq3",addPlayer:"add-player_2_wq3","roll-random":"roll-random_3IQ6L",rollRandom:"roll-random_3IQ6L",start:"start_luAmo",note:"note_1YjIN","note-random":"note-random_fGaQ5",noteRandom:"note-random_fGaQ5"}},function(e,t){e.exports={layout:"layout_EHoUo",title:"title_25dEs",link:"link_JVTgB","is-over":"is-over_3sA-h",isOver:"is-over_3sA-h","current-frame":"current-frame_3iM5a",currentFrame:"current-frame_3iM5a",number:"number_3GZ-V",welcome:"welcome_37Lq7"}},function(e,t){e.exports={player:"player_2dQCb","player-wrapper":"player-wrapper_1gMhD",playerWrapper:"player-wrapper_1gMhD",exit:"exit_2DVnA",name:"name_3ahqj",winner:"winner_3IfGb",current:"current_2MpNR",frames:"frames_RnsA5",frame:"frame_1UoLu",score:"score_2I1Lj","frame-score":"frame-score_3vagK",frameScore:"frame-score_3vagK"}},function(e,t){e.exports={scoreboard:"scoreboard_3MeYP"}}]);