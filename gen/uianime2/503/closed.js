// brown haired shopkeeper girl with a bun and a blue apron flipping a hanging door sign from OPEN to CLOSED 503, then giving an apologetic little bow with a sorry hand
const{sin,cos,PI,max,min,abs,exp}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#a9714b',HD='#6f4428',HL='#ecd2bd',EYE='#51cf66',ED='#2b8a3e',SHT='#fff4e6',APR='#74c0fc',AD='#1c7ed6',BL='#ffa8a8',WOOD='#f3c98b',WD='#c98a45',OP='#d3f9d8',OPD='#2b8a3e',CL='#ffe3e3',CLD='#e03131',SW='#a5d8ff',PIN='#ff8787'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x),L=(a,b,u)=>a+(b-a)*u
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const G={O:c=>{c.moveTo(6,0);c.ellipse(0,0,6,10,0,0,T)},P:c=>{c.moveTo(-6,10);c.lineTo(-6,-10);c.lineTo(0,-10);c.arc(0,-4,6,-PI/2,PI/2);c.lineTo(-6,2)},
  E:c=>{c.moveTo(6,-10);c.lineTo(-6,-10);c.lineTo(-6,10);c.lineTo(6,10);c.moveTo(-6,0);c.lineTo(4,0)},N:c=>{c.moveTo(-6,10);c.lineTo(-6,-10);c.lineTo(6,10);c.lineTo(6,-10)},
  C:c=>{c.moveTo(3.8,-8.1);c.ellipse(0,0,6.5,10,0,-.3*PI,.3*PI,true)},L:c=>{c.moveTo(-6,-10);c.lineTo(-6,10);c.lineTo(6,10)},
  S:c=>{c.moveTo(6,-7);c.bezierCurveTo(4,-12,-6,-11,-6,-5);c.bezierCurveTo(-6,1,6,-1,6,5);c.bezierCurveTo(6,11,-4,12,-6,7)},D:c=>{c.moveTo(-6,-10);c.lineTo(-6,10);c.lineTo(-1,10);c.quadraticCurveTo(6,10,6,0);c.quadraticCurveTo(6,-10,-1,-10);c.closePath()},
  5:c=>{c.moveTo(6,-10);c.lineTo(-5,-10);c.lineTo(-6,-1);c.quadraticCurveTo(8,-5,7,4);c.quadraticCurveTo(6,12,-6,9)},0:c=>{c.moveTo(6,0);c.ellipse(0,0,6,10,0,0,T)},3:c=>{c.moveTo(-6,-8);c.quadraticCurveTo(0,-13,5,-8);c.quadraticCurveTo(7,-2,-1,-1);c.quadraticCurveTo(8,0,6,6);c.quadraticCurveTo(2,12,-6,8)}}
const word=(c,w,x,y,s,g,col,lw)=>{c.beginPath();[...w].forEach((ch,k)=>{c.save();c.translate(x+(k-(w.length-1)/2)*g,y);c.scale(s,s);G[ch](c);c.restore()});c.lineWidth=lw;c.strokeStyle=col;c.stroke();c.strokeStyle='#111'}
const NX=66,NY=34
export default(c,t,i)=>{
  const f1=ease((t-.06)/.2),f2=ease((t-.8)/.2),th=PI*(f1+f2),cs=cos(th),bw=t>.34&&t<.74,bo=ease((t-.3)/.08)-ease((t-.68)/.08)
  const sw=t<.26?0:t<.8?.14*exp(-4*(t-.26))*sin(T*(t-.26)*3.2)*(1-ease((t-.7)/.1)):0
  const hs=t<.3?1-ease((t-.22)/.08):t<.72?0:ease((t-.72)/.08),hx=L(L(160,134,bo),112+18*abs(cs),hs),hy=L(L(150,150+3*sin(T*t*4),bo),146,hs)
  c.save();c.translate(NX,NY);c.rotate(sw)
  c.lineWidth=4;ds(c,6,2.5,'#fff',()=>{c.moveTo(-44,56);c.lineTo(0,0);c.lineTo(44,56)})
  c.save();c.translate(0,92);c.scale(max(.04,abs(cs)),1)
  c.fillStyle=WOOD;c.lineWidth=6;c.beginPath();c.roundRect(-58,-38,116,76,12);c.fill();c.stroke()
  c.fillStyle=cs>0?OP:CL;c.lineWidth=4.5;c.beginPath();c.roundRect(-48,-28,96,56,7);c.fill();c.stroke()
  if(cs>0)word(c,'OPEN',0,0,1,22,OPD,6)
  else word(c,'CLOSED',0,-6,.75,15,CLD,4.5),word(c,'503',0,17,.5,11,'#495057',3.5)
  c.restore()
  c.fillStyle='#adb5bd';c.lineWidth=4;c.beginPath();c.arc(0,0,6,0,T);c.fill();c.stroke()
  c.restore()
  const H=f=>{c.save();c.translate(182,186+2*sin(T*t*2));c.scale(.64,.64);c.translate(-128,-186);f();c.restore()}
  const R=f=>{c.save();c.translate(128,186+18*bo);c.rotate(-.14*bo);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9
    R(()=>{c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,160);c.quadraticCurveTo(200,180,184,180);c.lineTo(72,180);c.quadraticCurveTo(56,180,52,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()})
    c.fillStyle=SHT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,380);c.lineTo(216,380);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SHT;for(const d of[-1,1])c.beginPath(),c.moveTo(128,204),c.lineTo(128+d*28,186),c.lineTo(128+d*34,212),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=APR;c.beginPath();c.moveTo(84,246);c.lineTo(172,246);c.lineTo(182,380);c.lineTo(74,380);c.closePath();c.fill();c.stroke()
    for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*44,250),c.lineTo(128+d*60,198),c.lineTo(128+d*48,196),c.lineTo(128+d*32,250),c.fill(),c.stroke()
    c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.roundRect(104,272,48,40,8);c.fill();c.stroke()
    c.fillStyle=PIN;c.lineWidth=5;c.beginPath();c.moveTo(128,302);c.bezierCurveTo(112,290,118,278,128,286);c.bezierCurveTo(138,278,144,290,128,302);c.fill();c.stroke()
    R(()=>{
      c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.arc(128,28,30,0,T);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.arc(128,28,18,PI*1.1,PI*1.9);c.stroke();c.strokeStyle=HL;c.lineWidth=7;c.beginPath();c.arc(128,28,22,PI*1.2,PI*1.45);c.stroke()
      c.strokeStyle='#111';c.lineWidth=9;ds(c,12,6,PIN,()=>{c.moveTo(92,10);c.lineTo(170,36)});c.fillStyle=PIN;c.beginPath();c.arc(170,36,9,0,T);c.fill();c.stroke()
      c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
      if(bw){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,136,14,PI*.15,PI*.85),c.stroke()}
      else eye(c,103,140,-1),eye(c,153,140,1)
      c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
      c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
      c.lineWidth=6;c.beginPath();if(bw)c.moveTo(118,172),c.quadraticCurveTo(123,166,128,171),c.quadraticCurveTo(133,166,138,172);else c.arc(128,164,9,.15*PI,.85*PI);c.stroke()
      c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,156)
      c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,156)
      c.quadraticCurveTo(186,120,180,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,134,110)
      c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
      c.quadraticCurveTo(78,104,76,104);c.quadraticCurveTo(68,124,66,156);c.closePath();c.fill();c.stroke()
      c.strokeStyle=HL;c.lineWidth=8;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
      c.strokeStyle='#111'
      if(bw){c.lineWidth=6;c.beginPath();c.moveTo(86,108);c.lineTo(112,116);c.moveTo(170,108);c.lineTo(144,116);c.stroke()
        c.fillStyle=SW;c.lineWidth=7;c.beginPath();c.moveTo(200,96);c.quadraticCurveTo(213,116,200,124);c.quadraticCurveTo(187,116,200,96);c.fill();c.stroke()}
    })
  })
  ds(c,20,11,SHT,()=>{c.moveTo(148,212);c.quadraticCurveTo(L(118,120,bo),L(220,226,bo),hx+4,hy+12)})
  c.fillStyle=SKIN;c.lineWidth=5
  if(bo>.5){c.save();c.translate(hx,hy);c.rotate(-.25+.18*sin(T*t*4));c.beginPath();c.ellipse(8,4,5,9,-.4,0,T);c.fill();c.stroke();c.beginPath();c.roundRect(-9,-24,18,38,9);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(-2,-16);c.lineTo(-2,2);c.stroke();c.restore()}
  else c.beginPath(),c.ellipse(hx,hy,12,12,0,0,T),c.fill(),c.stroke()
}
