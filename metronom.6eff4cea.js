parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"mnIH":[function(require,module,exports) {
function t(t,e,n){this.amount=t,this.content=e,this.letter=n}module.exports=t;
},{}],"JtY9":[function(require,module,exports) {
var t=require("./bars");function e(t,e,n){this.name=t,this.parts=[e.length],this.addParts(e),this.tempi=n}e.prototype.getName=function(){return this.name},e.prototype.getParts=function(){return this.parts.length},e.prototype.getPart=function(t){return this.parts[t-1]},e.prototype.getTempi=function(){return this.tempi},e.prototype.addParts=function(e){for(var n,r=e.length,o=0;o<r;o++)if((n=e[o])instanceof t){for(var a=[n.amount],i=0;i<n.amount;i++)a[i]=n.content;this.parts[o]=a}else{for(var s,p=[],h=0;h<n.length;h++)if((s=n[h])instanceof t){s.amount;for(var u=0;u<s.amount;u++)p[p.length]=s.content}else p[p.length]=s;this.parts[o]=p}},module.exports=e;
},{"./bars":"mnIH"}],"e1hH":[function(require,module,exports) {
var e=require("../piece/piece"),n=require("../piece/bars"),r=new n(66,[2,2,2,2]),t=new n(75,[2,2,2]),w=[new n(2,[2,2,2,2]),[2,2,2,3],new n(3,[2,2,3]),[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],new n(2,[3,3,2]),new n(12,[3]),[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3,3],new n(6,[3]),new n(3,[2,2,3]),[3,3,2],new n(3,[2,2,3]),[3,3,2],new n(2,[2,2,3]),new n(2,[3,3,3]),[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,2,3],new n(4,[3]),new n(2,[2,2,3]),[2,2,3,3],new n(60,[3]),new n(3,[3,2]),new n(62,[3]),[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],new n(14,[3]),[2,2,3],new n(4,[3])];function o(){e.call(this,"Masquerade",[r,t,w],[176,60,140])}o.prototype=Object.create(e.prototype),o.prototype.constructor=o,Object.defineProperty(o.prototype,"constructor",{value:o,enumerable:!1,writable:!0}),module.exports=o;
},{"../piece/piece":"JtY9","../piece/bars":"mnIH"}],"G029":[function(require,module,exports) {
var e=require("../piece/piece"),r=require("../piece/bars"),t=[[3,2,2],new r(8,[3,2,2]),new r(2,[2,2,3],"A"),[2,2,2,2],[2,2],[3,3],[3],new r(4,[2,2])];function o(){e.call(this,"Riverdance",[t],[108])}o.prototype=Object.create(e.prototype),o.prototype.constructor=o,Object.defineProperty(o.prototype,"constructor",{value:o,enumerable:!1,writable:!0}),module.exports=o;
},{"../piece/piece":"JtY9","../piece/bars":"mnIH"}],"Bnav":[function(require,module,exports) {
"use strict";var e=require("./music/masquerade"),t=require("./music/riverdance"),n=new e,u=n.getPart(1),i=n.getPart(2),a=n.getPart(3),r=n.getTempi();function c(){T=!1,q(),B=!0,x(),A(),B=!1,z()}function o(){B=!0}function d(){var u=G(),i=u.options[u.selectedIndex].text;H().innerHTML=i,0===u.selectedIndex&&(n=new e),1===u.selectedIndex&&(n=new t),C("tempo").value=n.getTempi()[0],C("satz").value=1,C("satz").max=n.getParts()}b().addEventListener("click",c),D().addEventListener("click",o),G().addEventListener("change",d),C("satz").addEventListener("change",h);var l,m,s,v,g=0,f=0,w=0,p=(new Date).getTime(),E=200,I=0,y=!0,B=!1,T=!0;function h(e){var t=document.getElementById("satz").value;document.getElementById("tempo").value=r[t-1]}function k(){B=!1,z()}function x(){var e=document.getElementById("tempo").value;E=3e4/e,y=!!document.getElementById("achtelzeigen").checked;var t=document.getElementById("satz").value;1==t&&(l=u.slice(0)),2==t&&(l=i.slice(0)),3==t&&(l=a.slice(0)),g=document.getElementById("starttakt").value-1,I=document.getElementById("vorlauf").value;for(var n=l[g],r=0;r<I;r++)l.splice(g,0,n);document.getElementById("aktuellertakt").value=g+1-I,f=0,w=0,p=(new Date).getTime()}function z(){var e=(new Date).getTime();e-p>=E&&(0==f&&0==w?L(10,600,50):0==w?L(10,500,50):y&&L(10,400,50),p=e,++w>=l[g][f]&&(w=0,++f>=l[g].length&&(f=0,g++,document.getElementById("aktuellertakt").value=g+1-I))),g<l.length&&!B&&setTimeout(z,1)}function A(){for(var e=1;e<99999;e++)window.clearTimeout(e)}function q(){try{window.AudioContext=window.AudioContext||window.webkitAudioContext}catch(e){alert("Web Audio API is not supported in this browser")}m=new AudioContext,L(1,100,1)}function L(e,t,n){s=m.createOscillator(),v=m.createGain(),s.connect(v),s.type="square",v.connect(m.destination),s.frequency.value=t,v.gain.value=.01*e,s.start(m.currentTime),s.stop(m.currentTime+.001*n)}function P(e){for(var t=0,n=e.length-1;n>0;n--)t+=e[n];return t}function C(e){return document.getElementById(e)}function b(){return C("startButton")}function D(){return C("stopButton")}function G(){return C("pieceSelection")}function H(){return C("pieceTitle")}
},{"./music/masquerade":"e1hH","./music/riverdance":"G029"}]},{},["Bnav"], null)
//# sourceMappingURL=https://chrira.github.io/programmable-metronome/metronom.6eff4cea.map