(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),o=n.n(r),a=n(7),s=n.n(a),c=(n(14),n(2)),u=n(3),h=n(5),d=n(4),l=n(8),j=n.n(l),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).d=150,e.r=150,e.count=0,e}return Object(u.a)(n,[{key:"preload",value:function(e){}},{key:"mouseMoved",value:function(e,t){var n=this;this.count+=(Math.abs(e.movedX)+Math.abs(e.movedY))/20,requestAnimationFrame((function(){return n.draw(e)}))}},{key:"mouseWheel",value:function(e,t){var n=this;this.count+=Math.abs(t.deltaY)/10,requestAnimationFrame((function(){return n.draw(e)}))}},{key:"windowResized",value:function(e){e.resizeCanvas(e.windowWidth,e.windowHeight)}},{key:"setup",value:function(e,t){var n=this,i=[];i.push(e.createCanvas(e.windowWidth,e.windowHeight).parent(t)),i.push(e.select("#front")),e.frameRate(30);for(var r=0,o=i;r<o.length;r++){var a=o[r];a.mouseMoved((function(t){n.mouseMoved(e,t)})),a.mouseWheel((function(t){n.mouseWheel(e,t)}))}}},{key:"draw",value:function(e){e.background(20),this.d=e.height/8;for(var t=function(t,n,i){return function(t){return 1/(e.exp(-10*(t-.5))+1)}(e.noise(t,n,i))},n=[],i=0;i<e.width/this.d+2;i++){n.push([]);for(var r=0;r<e.height/this.d+2;r++)n[i].push(e.createVector((t(i*this.d*10,r*this.d*10,this.count/this.r+100*i)+i-1)*this.d,(t(i*this.d*10,r*this.d*10,this.count/500+this.r)+r-1)*this.d))}e.strokeWeight(1);for(var o=1;o<e.width/this.d+1;o++)for(var a=1;a<e.height/this.d+1;a++)for(var s=-1;s<=1;s++)for(var c=-1;c<=1;c++){var u=e.dist(n[o][a].x,n[o][a].y,n[o+s][a+c].x,n[o+s][a+c].y),h=e.dist(n[o][a].x,n[o][a].y,e.width/2,e.height/2)*this.d*this.d/300*0;e.stroke(255,255,255,e.map(u*u+h,this.d*this.d*3,0,0,100)),e.line(n[o][a].x,n[o][a].y,n[o+s][a+c].x,n[o+s][a+c].y)}this.count+=.5,e.noLoop()}},{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{style:{position:"absolute",width:"100vw",height:"100vh",overflow:"hidden",WebkitMask:"url('crack.svg') left / auto 80% no-repeat"},children:Object(i.jsx)(j.a,{setup:function(t,n){e.setup(t,n)},draw:function(t){e.draw(t)},preload:function(t){e.preload(t)},windowResized:function(t){e.windowResized(t)}})})}}]),n}(o.a.Component),v=(n(15),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{}),Object(i.jsx)("div",{id:"front",className:"fullsize",children:Object(i.jsx)("span",{id:"front-roger-fan",children:"Roger Fan"})})]})}}]),n}(o.a.Component)),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{id:"Projects",className:"fullsize",children:[Object(i.jsx)("h1",{children:"Projects"}),Object(i.jsx)("p",{children:"Hello!"})]})})}}]),n}(o.a.Component),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={},i}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{}),Object(i.jsx)(b,{})]})}}]),n}(o.a.Component);s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9748d110.chunk.js.map