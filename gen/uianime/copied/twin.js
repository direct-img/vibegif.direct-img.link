// mint haired girl with hair clips flashing a V sign, the copy icon duplicates and an identical clone pops in beside her with a poof, both wink in sync, then the clone poofs away
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#63e6be',HD='#0ca678',HL='#e6fcf5',EYE='#f06595',ED='#a61e4d',TOP='#ffc9c9',TD='#fa5252',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',CL=['#ffd43b','#74c0fc'],CP='#74c0fc',CPD='#1c7ed6'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const bk=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)))-1;return 1+2.7*x**3+1.7*x**2}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const girl=(c,x,y,s,w,b)=>{c.save();c.translate(x,y);c.scale(s,s);c.rotate(w?.06:0);c.translate(-128,-186);c.lineWidth=10
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,214,96,208,200);c.quadraticCurveTo(200,214,186,208);c.lineTo(70,208);c.quadraticCurveTo(56,214,48,200);c.bezierCurveTo(42,96,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,204),c.quadraticCurveTo(128+d*20,186,128+d*36,190),c.quadraticCurveTo(128+d*34,212,128,216),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
  c.fillStyle=TD;c.beginPath();c.moveTo(128,214);c.lineTo(112,204);c.lineTo(112,226);c.closePath();c.moveTo(128,214);c.lineTo(144,204);c.lineTo(144,226);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,153,140,1)
  if(w){c.lineWidth=8;c.beginPath();c.moveTo(90,130);c.lineTo(112,141);c.lineTo(90,152);c.stroke()}else if(b){c.lineWidth=8;c.beginPath();c.moveTo(88,142);c.quadraticCurveTo(103,149,118,142);c.stroke()}else eye(c,103,140,-1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
  c.lineWidth=6;c.fillStyle=MO;c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,170,142,164);c.quadraticCurveTo(140,184,128,184);c.quadraticCurveTo(116,184,114,164);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,185,8,6,0,0,T);c.fill();c.restore()
  if(w){c.fillStyle=TG;c.beginPath();c.moveTo(130,180);c.quadraticCurveTo(132,196,140,194);c.quadraticCurveTo(146,186,140,178);c.fill();c.stroke()}
  c.lineWidth=10;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,200)
  c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,210,74,192,200);c.quadraticCurveTo(184,190,178,198)
  c.quadraticCurveTo(186,130,178,104);c.quadraticCurveTo(170,106,164,114);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,88);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,130,78,198);c.quadraticCurveTo(72,190,64,200);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=8;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;for(const[k,[cx,cy,a]]of[[78,82,-.9],[90,70,-.7]].entries())c.fillStyle=CL[k],c.save(),c.translate(cx,cy),c.rotate(a),c.beginPath(),c.roundRect(-20,-6,40,12,6),c.fill(),c.stroke(),c.restore()
  c.fillStyle=CL[0];c.save();c.translate(170,74);for(const a of[.8,-.8])c.save(),c.rotate(a),c.beginPath(),c.roundRect(-16,-6,32,12,6),c.fill(),c.stroke(),c.restore();c.restore()
  const hy=150-(w?8:0)
  ds(c,30,20,TOP,()=>{c.moveTo(186,330);c.quadraticCurveTo(226,270,208,hy+26)})
  for(const a of[-.25,.2])ds(c,18,10,SKIN,()=>{c.moveTo(206,hy+8);c.lineTo(206+sin(a)*36,hy+8-cos(a)*36)})
  c.fillStyle=SKIN;c.lineWidth=7;c.beginPath();c.ellipse(208,hy+16,17,16,0,0,T);c.fill();c.stroke()
  c.restore()}
const poof=(c,x,y,p)=>{if(p<=0||p>=1)return;const r=10+16*sin(PI*p);c.fillStyle='#fff';c.lineWidth=5;for(let k=0;k<6;k++){const a=k*T/6+.3,d=22+30*p;c.beginPath();c.arc(x+cos(a)*d,y+sin(a)*d*.8,r*(1-p*.5),0,T);c.fill();c.stroke()}}
export default(c,t,i)=>{
  const cs=bk(t,.3,.44)*(1-ez(t,.84,.94)),w=t>=.47&&t<.8,o=12*(ez(t,.08,.24)-ez(t,.86,.98)),pu=ez(t,.08,.16)-ez(t,.16,.26)
  c.save();c.translate(128,42);c.scale(1+.15*pu,1+.15*pu)
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(-20-o*.5,-20-o*.5,40,40,8);c.fill();c.stroke()
  c.fillStyle=CP;c.beginPath();c.roundRect(-20+o*.5,-20+o*.5,40,40,8);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();for(const y of[-8,0,8])c.moveTo(-10+o*.5,y+o*.5),c.lineTo((y>0?2:10)+o*.5,y+o*.5);c.stroke();c.strokeStyle='#111';c.restore()
  const by=184-3*sin(T*t*2)
  girl(c,64,by,.6,w,i==2)
  if(cs>.01)girl(c,192,by+(1-cs)*30,.6*cs,w,i==2)
  poof(c,192,150,(t-.24)/.24);poof(c,192,150,(t-.82)/.16)
  if(t>=.4&&t<.5){c.save();c.setLineDash([8,6]);c.lineDashOffset=-i*7;c.strokeStyle=CPD;c.lineWidth=4;c.beginPath();c.roundRect(136,78,114,174,8);c.stroke();c.restore()}
  if(w){const q=(t-.47)/.33;c.fillStyle='#ffd43b';c.lineWidth=3.5;for(const[x,y,d]of[[24,66,0],[128,92,.2],[234,60,.4]]){const r=sin(PI*min(1,max(0,(q-d)*1.6)));if(r>.1){c.beginPath();c.moveTo(x,y-12*r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*1.8*r,y+(b-a)*1.8*r,x+a*12*r,y+b*12*r);c.fill();c.stroke()}}}
}
