// flustered red haired girl with a side ponytail holding her palm out as a flurry of little envelopes fly in and bounce off it, sweating under a red "429" badge
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=15,delay=90
const SKIN='#ffe3d1',HAIR='#fa5252',HD='#c92a2a',HL='#ffc9c9',EYE='#4dabf7',ED='#1864ab',TOP='#96f2d7',TD='#20c997',BL='#ff8787',RD='#fa5252',SW='#a5d8ff',CLIP='#ffd43b',EN=['#ffe066','#a5d8ff','#fcc2d7','#b2f2bb','#d0bfff'],Z=.62
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x-3,y+2,11,14,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x-3,y-8,13,9,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x-3,y+2,11,14,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-3,y+4,3.5,4.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-7,y-4,4,0,T);c.fill();c.beginPath();c.arc(x+2,y+9,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-7);c.quadraticCurveTo(x,y-22,x+16,y-7);c.moveTo(x+d*15,y-8);c.lineTo(x+d*21,y-13);c.stroke()
}
const G={4:c=>{c.moveTo(4,10);c.lineTo(4,-10);c.lineTo(-7,4);c.lineTo(7,4)},2:c=>{c.moveTo(-6,-4);c.bezierCurveTo(-6,-13,7,-13,6,-3);c.lineTo(-6,10);c.lineTo(7,10)},9:c=>{c.moveTo(6,-4);c.arc(0,-4,6,0,T);c.moveTo(6,-4);c.quadraticCurveTo(6,8,-4,10)}}
const env=(c,x,y,a,f,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.fillStyle=f;c.lineWidth=4.5;c.beginPath();c.roundRect(-17,-12,34,24,4);c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(-15,-9);c.lineTo(0,3);c.lineTo(15,-9);c.stroke();c.fillStyle=RD;c.beginPath();c.arc(0,3,3.5,0,T);c.fill();c.restore()}
export default(c,t,i)=>{
  const E=[0,1,2,3,4].map(k=>{const p=(t+k*.4)%1,[x0,y0]=[[-20,0],[-24,70],[-24,136],[-24,196],[-14,256]][k],hy=92+k*17,hx=36-(k%2)*4;if(p<.4){const q=p/.4;return{x:x0+(hx-x0)*q,y:y0+(hy-y0)*q,a:.15*sin(T*q*2+k),k,q:-1}}
    const q=(p-.4)/.6;return{x:hx-100*q,y:hy-50*q+240*q*q,a:-7*q*(k%2?1:-1),k,q}})
  const hit=E.some(e=>e.q>=0&&e.q<.1),jx=hit?5:0,hx=70+jx,hy=126
  const H=f=>{c.save();c.translate(174,180);c.scale(Z,Z);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.save();c.translate(184,54);c.rotate(.1*sin(T*t*3))
    c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,-6);c.bezierCurveTo(52,-18,74,52,56,132);c.quadraticCurveTo(50,154,28,162);c.quadraticCurveTo(44,110,26,70);c.quadraticCurveTo(14,34,-10,18);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=6;c.beginPath();c.moveTo(20,12);c.bezierCurveTo(40,34,50,80,44,124);c.stroke();c.strokeStyle=HL;c.lineWidth=7;c.beginPath();c.moveTo(34,14);c.quadraticCurveTo(50,30,56,56);c.stroke();c.strokeStyle='#111';c.lineWidth=9
    c.fillStyle=CLIP;c.beginPath();c.ellipse(2,4,14,18,.6,0,T);c.fill();c.stroke();c.restore()
    c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,164);c.lineTo(52,164);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,380);c.lineTo(216,380);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.lineTo(128+d*30,186),c.lineTo(128+d*38,214),c.closePath(),c.fill(),c.stroke()
    c.strokeStyle=TD;c.lineWidth=6;c.beginPath();c.moveTo(128,212);c.lineTo(128,380);c.stroke();c.strokeStyle='#111'
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hit){c.lineWidth=9;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,126),c.lineTo(128+d*18,140),c.lineTo(128+d*38,154),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,16,9,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-7,0,7])c.beginPath(),c.moveTo(128+d*44+k-2,167),c.lineTo(128+d*44+k+2,157),c.stroke()
    c.lineWidth=6;c.beginPath();c.moveTo(116,170);for(let k=1;k<=4;k++)c.quadraticCurveTo(113+k*6,k%2?164:176,116+k*6,170);c.stroke()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,160)
    c.quadraticCurveTo(188,120,180,102);c.quadraticCurveTo(172,104,166,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(78,104,76,104);c.quadraticCurveTo(68,124,66,160);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
    c.fillStyle=SW;c.lineWidth=7;for(const[x,y,s]of[[38,96,1],[28,128,.7]])c.beginPath(),c.moveTo(x,y-20*s),c.quadraticCurveTo(x+13*s,y,x,y+8*s),c.quadraticCurveTo(x-13*s,y,x,y-20*s),c.fill(),c.stroke()
  })
  const bs=1+(hit?.08:0)
  c.save();c.translate(200,30);c.scale(bs,bs);c.fillStyle=RD;c.lineWidth=6;c.beginPath();c.roundRect(-42,-22,84,44,14);c.fill();c.stroke()
  c.beginPath();c.moveTo(-8,22);c.lineTo(0,34);c.lineTo(8,22);c.fill();c.stroke();c.fillRect(-10,16,20,7)
  for(const[k,n]of[[-1,4],[0,2],[1,9]]){c.save();c.translate(k*22,0);c.scale(.95,.95);c.beginPath();G[n](c);c.restore();c.lineWidth=11;c.strokeStyle='#111';c.stroke();c.lineWidth=5.5;c.strokeStyle='#fff';c.stroke()}
  c.restore();c.strokeStyle='#111'
  ds(c,22,13,TOP,()=>{c.moveTo(146,214);c.quadraticCurveTo(100,224,hx+4,hy+28)})
  c.save();c.translate(hx,hy);c.rotate(-.12);c.scale(.92,.92)
  c.lineWidth=5;c.fillStyle=SKIN
  for(const[x,y,h]of[[-15,-22,15],[-5,-27,17],[5,-27,17],[15,-22,15]])c.beginPath(),c.roundRect(x-5,y-h,10,h+14,5),c.fill(),c.stroke()
  c.beginPath();c.ellipse(22,8,6,12,-.7,0,T);c.fill();c.stroke()
  c.beginPath();c.roundRect(-20,-14,40,36,13);c.fill();c.stroke()
  c.fillStyle=TOP;c.beginPath();c.roundRect(-18,22,36,13,5);c.fill();c.stroke()
  c.restore()
  for(const e of E)if(e.q>=0&&e.q<.14)for(const a of[-.9,-.3,.3,.9])ds(c,7,3,'#fff',()=>{const x=hx-20,y=e.y;c.moveTo(x+cos(PI+a)*12,y+sin(PI+a)*12);c.lineTo(x+cos(PI+a)*24,y+sin(PI+a)*24)})
  for(const e of E)if(e.x>-40&&e.y<290)env(c,e.x,e.y,e.a,EN[e.k],1.1)
}
