parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"6hXu":[function(require,module,exports) {
function t(t,e){this.name=t,this.parts=e}t.prototype.getName=function(){return this.name},t.prototype.getParts=function(){return this.parts.length},t.prototype.getPart=function(t){return this.parts[t-1]},module.exports=t;
},{}],"e1hH":[function(require,module,exports) {
var e=require("./piece"),t=[[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2]],r=[[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2]],o=[[2,2,2,2],[2,2,2,2],[2,2,2,3],[2,2,3],[2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[3,3,2],[3,3,2],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3,3],[3],[3],[3],[3],[3],[3],[2,2,3],[2,2,3],[2,2,3],[3,3,2],[2,2,3],[2,2,3],[2,2,3],[3,3,2],[2,2,3],[2,2,3],[3,3,3],[3,3,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,2,3],[3],[3],[3],[3],[2,2,3],[2,2,3],[2,2,3,3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3,2],[3,2],[3,2],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[2,2,3],[3],[3],[3],[3]];function p(){e.call(this,"Masquerade",[t,r,o])}p.prototype=Object.create(e.prototype),p.prototype.constructor=p,Object.defineProperty(p.prototype,"constructor",{value:p,enumerable:!1,writable:!0}),module.exports=p;
},{"./piece":"6hXu"}],"Bnav":[function(require,module,exports) {
"use strict";var e=require("./music/masquerade"),t=new e,n=t.getPart(1),o=t.getPart(2),u=t.getPart(3);document.getElementById("startButton").addEventListener("click",E),document.getElementById("stopButton").addEventListener("click",T);var a,c,i,l,r=0,d=0,m=0,s=(new Date).getTime(),g=200,v=0,y=!0,f=!1,w=!0;function B(e){var t=document.getElementById("satz").value;1==t?document.getElementById("tempo").value=176:2==t?document.getElementById("tempo").value=60:3==t&&(document.getElementById("tempo").value=140)}function E(){w=!1,A(),f=!0,p(),h(),f=!1,k()}function I(){f=!1,k()}function p(){var e=document.getElementById("tempo").value;g=3e4/e,y=!!document.getElementById("achtelzeigen").checked;var t=document.getElementById("satz").value;1==t&&(a=n.slice(0)),2==t&&(a=o.slice(0)),3==t&&(a=u.slice(0)),r=document.getElementById("starttakt").value-1,v=document.getElementById("vorlauf").value;for(var c=a[r],i=0;i<v;i++)a.splice(r,0,c);document.getElementById("aktuellertakt").value=r+1-v,d=0,m=0,s=(new Date).getTime()}function k(){var e=(new Date).getTime();e-s>=g&&(0==d&&0==m?q(10,600,50):0==m?q(10,500,50):y&&q(10,400,50),s=e,++m>=a[r][d]&&(m=0,++d>=a[r].length&&(d=0,r++,document.getElementById("aktuellertakt").value=r+1-v))),r<a.length&&!f&&setTimeout(k,1)}function h(){for(var e=1;e<99999;e++)window.clearTimeout(e)}function T(){f=!0}function A(){try{window.AudioContext=window.AudioContext||window.webkitAudioContext}catch(e){alert("Web Audio API is not supported in this browser")}c=new AudioContext,q(1,100,1)}function q(e,t,n){i=c.createOscillator(),l=c.createGain(),i.connect(l),i.type="square",l.connect(c.destination),i.frequency.value=t,l.gain.value=.01*e,i.start(c.currentTime),i.stop(c.currentTime+.001*n)}function x(e){for(var t=0,n=e.length-1;n>0;n--)t+=e[n];return t}
},{"./music/masquerade":"e1hH"}]},{},["Bnav"], null)
//# sourceMappingURL=https://chrira.github.io/programmable-metronome/metronom.77b84b16.map