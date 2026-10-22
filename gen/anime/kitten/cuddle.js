// girl with peach double buns hugging a gray tabby kitten to her cheek, both nuzzling, the kitten purring and kneading while hearts float up
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#ffb4a2',HD='#f08c7a',HL='#ffe3dc',SW='#b2f2bb',SWD='#69db7c',CAT='#adb5bd',CD='#868e96',CW='#f8f9fa',PINK='#ff8fab',BL='#ffa8a8',HT='#f06595'
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  const n=sin(2*T*t),tilt=.12+.05*n
  c.fillStyle=HT;c.lineWidth=4;for(const[x0,o]of[[150,0],[200,.5]]){const p=(t+o)%1,s=1.3*sin(PI*p);if(s>.15)heart(c,x0+8*sin(p*T),96-p*80,s)}
  c.lineWidth=6;c.fillStyle=SW;c.beginPath();c.moveTo(60,214);c.quadraticCurveTo(30,222,24,260);c.lineTo(200,260);c.quadraticCurveTo(190,224,150,214);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(82,212);c.quadraticCurveTo(104,236,128,212);c.lineTo(104,206);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.save();c.translate(104,200);c.rotate(tilt);c.translate(-104,-200)
  c.save();c.translate(104,138);c.scale(.95,.95);c.translate(-128,-128)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,208,96,200,150);c.lineTo(56,150);c.bezierCurveTo(48,96,60,34,128,34);c.fill();c.stroke()
  for(const d of[-1,1]){const x=128+d*42;c.fillStyle=HAIR;c.beginPath();c.arc(x,34,22,0,T);c.fill();c.stroke();c.strokeStyle=HD;c.lineWidth=4;c.beginPath();c.arc(x,34,12,PI*.2,PI*1.5);c.arc(x+2,32,5,PI*1.5,PI*3,false);c.stroke();c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SWD;c.beginPath();c.ellipse(x-d*6,56,12,6,-d*.5,0,T);c.fill();c.stroke();c.lineWidth=6}
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,146),c.quadraticCurveTo(x,128,x+15,146),c.stroke()
  for(const x of[103,153])c.beginPath(),c.moveTo(x+(x<128?-15:15),146),c.lineTo(x+(x<128?-20:20),142),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,14,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-2,166),c.lineTo(128+d*42+k+2,159),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,184,140,166);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=PINK;c.beginPath();c.ellipse(128,180,8,5,0,0,T);c.fill();c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,188,150)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,100,164,110);c.quadraticCurveTo(156,96,146,92);c.quadraticCurveTo(140,104,132,110)
  c.quadraticCurveTo(126,96,118,92);c.quadraticCurveTo(112,104,104,110);c.quadraticCurveTo(96,96,88,96);c.quadraticCurveTo(82,104,80,110);c.quadraticCurveTo(70,118,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.restore();c.restore()
  c.save();c.translate(210,200);c.rotate(.35*sin(T*t+1))
  for(const[w,col]of[[18,'#111'],[10,CAT]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(0,0),c.bezierCurveTo(26,-6,30,-40,14,-56),c.stroke()
  c.strokeStyle=CD;c.lineWidth=10;c.beginPath();c.moveTo(18,-18);c.lineTo(22,-26);c.moveTo(22,-40);c.lineTo(19,-47);c.stroke();c.strokeStyle='#111';c.restore()
  c.fillStyle=CAT;c.lineWidth=5;c.beginPath();c.ellipse(186,200,30,28,-.2,0,T);c.fill();c.stroke()
  c.fillStyle=CW;c.beginPath();c.ellipse(180,208,15,17,-.2,0,T);c.fill()
  c.save();c.translate(178,150);c.rotate(-.18-.08*n);c.translate(3*n,0);c.scale(1.12,1.12)
  c.fillStyle=CAT;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(d*12,-22),c.lineTo(d*26,-40+(d>0?2*n:0)),c.lineTo(d*30,-10),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=PINK;for(const d of[-1,1])c.beginPath(),c.moveTo(d*16,-20),c.lineTo(d*25,-32),c.lineTo(d*26,-14),c.closePath(),c.fill()
  c.fillStyle=CAT;c.beginPath();c.ellipse(0,0,34,28,0,0,T);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=CD;for(const x of[-9,0,9])c.beginPath(),c.moveTo(x-4,-30),c.lineTo(x,-16),c.lineTo(x+4,-30),c.fill()
  c.fillStyle=CW;c.beginPath();c.ellipse(0,14,18,13,0,0,T);c.fill();c.restore()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(d*20,0),c.quadraticCurveTo(d*13,-7,d*6,0),c.stroke()
  c.fillStyle=PINK;c.lineWidth=2.5;c.beginPath();c.moveTo(-4,6);c.lineTo(4,6);c.lineTo(0,10);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(0,10);c.quadraticCurveTo(-3,15,-7,12);c.moveTo(0,10);c.quadraticCurveTo(3,15,7,12);c.stroke()
  c.lineWidth=2;c.beginPath();for(const d of[-1,1])for(const y of[8,13])c.moveTo(d*14,y),c.lineTo(d*30,y+(y-10)*1.4);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*20,10,5,3,0,0,T),c.fill()
  c.restore()
  for(const[k,x]of[[0,152],[1,166]]){const y=170+5*sin(4*T*t+k*PI);c.fillStyle=CW;c.lineWidth=4;c.beginPath();c.ellipse(x,y,8,7,0,0,T);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(x-2,y-6);c.lineTo(x-2,y-2);c.moveTo(x+2,y-6);c.lineTo(x+2,y-2);c.stroke()}
  line(c,[[70,240],[124,222],[148,206]],12,SW);c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.ellipse(156,204,11,10,-.4,0,T);c.fill();c.stroke()
  line(c,[[194,256],[214,232],[212,216]],12,SW);c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.ellipse(210,210,10,11,.3,0,T);c.fill();c.stroke()
  c.lineWidth=4;for(const k of[0,1]){if(sin(4*T*t+k*PI)>0)for(const r of[k?20:12])c.beginPath(),c.arc(212,140,r+8,-.55,.55),c.stroke()}
}
