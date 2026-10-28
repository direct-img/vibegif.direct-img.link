// chocolate haired maid girl with twin braids holding out a plate of choc chip cookies with a hopeful smile, a cursor clicks the pulsing green accept button and she lights up
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#8d5b3c',HD='#5c3a22',HL='#e9cbb1',EYE='#20c997',ED='#087f5b',DR='#91a7ff',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',RB='#ff6b6b',CK='#e8b07a',CD='#c47f45',CH='#5c3a22',RIM='#a5d8ff',OK='#51cf66',OD='#2f9e44',SP='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-10,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+7,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const braid=(c,d,a)=>{c.save();c.translate(128+d*64,146);c.rotate(a);c.lineWidth=7
  c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,104);c.quadraticCurveTo(-16,122,-10,132);c.quadraticCurveTo(-4,124,0,134);c.quadraticCurveTo(4,124,10,132);c.quadraticCurveTo(16,122,8,104);c.closePath();c.fill();c.stroke()
  for(let k=3;k>=0;k--){c.fillStyle=HAIR;c.beginPath();c.ellipse(0,14+k*24,16-k,15,0,0,T);c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=4;c.beginPath();c.moveTo(-8,8+k*24);c.quadraticCurveTo(-2,20+k*24,9,16+k*24);c.stroke();c.strokeStyle='#111';c.lineWidth=7}
  c.fillStyle=RB;c.lineWidth=5;c.beginPath();c.moveTo(0,106);c.lineTo(-15,98);c.lineTo(-15,114);c.closePath();c.moveTo(0,106);c.lineTo(15,98);c.lineTo(15,114);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(0,106,5,0,T);c.fill();c.stroke();c.restore()}
const cookie=(c,x,y,r)=>{c.fillStyle=CK;c.lineWidth=4.5;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()
  c.strokeStyle=CD;c.lineWidth=3;c.beginPath();c.arc(x,y,r-5,PI*.15,PI*.6);c.stroke();c.strokeStyle='#111'
  c.fillStyle=CH;for(const[a,b]of[[-.4,-.35],[.35,-.2],[-.1,.3],[.45,.4],[-.5,.25]])c.beginPath(),c.ellipse(x+a*r,y+b*r,r*.13,r*.11,a,0,T),c.fill()}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t,i)=>{
  const hap=t>=.5&&t<.9,pr=ez(t,.44,.5)-ez(t,.52,.6),cu=ez(t,.2,.46)-ez(t,.72,.94),bob=sin(T*t*2),of=.5+.5*sin(T*t-PI/2)
  const px=108,py=222-4*of-3*(hap?sin(PI*min(1,(t-.5)/.2)):0),ps=1+.08*of,blink=i==3
  const H=f=>{c.save();c.translate(102,172+2*bob);c.rotate(.04*sin(T*t));c.scale(.76,.76);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,204,158);c.lineTo(52,158);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=DR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(92,240);c.lineTo(164,240);c.lineTo(170,330);c.lineTo(86,330);c.closePath();c.fill();c.stroke()
    for(const d of[-1,1]){for(let k=0;k<3;k++){const x=128+d*(40+k*8),y=236-k*14;c.beginPath();c.arc(x+d*4,y,7,0,T);c.fill();c.stroke()}
      ds(c,16,7,'#fff',()=>{c.moveTo(128+d*34,240);c.lineTo(128+d*58,200)})}
    c.fillStyle='#fff';c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(128,204),c.quadraticCurveTo(128+d*18,186,128+d*32,190),c.quadraticCurveTo(128+d*30,208,128,214),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=RB;c.beginPath();c.moveTo(128,210);c.lineTo(114,200);c.lineTo(114,220);c.closePath();c.moveTo(128,210);c.lineTo(142,200);c.lineTo(142,220);c.closePath();c.fill();c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else if(blink){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,149,x+15,142),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO;c.beginPath()
    if(hap)c.moveTo(112,163),c.quadraticCurveTo(128,168,144,163),c.quadraticCurveTo(142,188,128,188),c.quadraticCurveTo(114,188,112,163)
    else c.moveTo(118,166),c.quadraticCurveTo(128,170,138,166),c.quadraticCurveTo(136,178,128,178),c.quadraticCurveTo(120,178,118,166)
    c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,hap?189:179,8,6,0,0,T);c.fill();c.restore()
    for(const d of[-1,1])braid(c,d,d*(-.06+.05*sin(T*t*2+d)))
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,160)
    c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,192,160);c.quadraticCurveTo(184,152,178,160)
    c.quadraticCurveTo(184,124,178,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,90);c.quadraticCurveTo(114,102,106,108);c.quadraticCurveTo(100,96,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,124,78,160);c.quadraticCurveTo(72,152,64,160);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(90,114);c.lineTo(112,108);c.moveTo(144,108);c.lineTo(166,114);c.stroke()
    c.fillStyle='#fff';c.lineWidth=7;for(let k=0;k<7;k++){const a=PI*(1.18+k*.107);c.beginPath();c.arc(128+cos(a)*70,112+sin(a)*70,11,0,T);c.fill();c.stroke()}
    c.beginPath();c.arc(128,112,62,PI*1.16,PI*1.84);c.arc(128,112,76,PI*1.84,PI*1.16,true);c.closePath();c.fill();c.stroke()
  })
  const bx=210,by=92,bs=(1+.05*sin(T*t*4)*(1-ez(t,.42,.5)+ez(t,.88,.98)))*(1-.12*pr)
  if(!hap&&t<.48){const p=(t*4)%1;c.strokeStyle=OK;c.lineWidth=6*(1-p);c.beginPath();c.roundRect(bx-40-10*p,by-28-10*p,80+20*p,56+20*p,20+6*p);c.stroke();c.strokeStyle='#111'}
  c.save();c.translate(bx,by);c.scale(bs,bs)
  c.fillStyle=OD;c.lineWidth=6;c.beginPath();c.roundRect(-38,-20,76,50,18);c.fill();c.stroke()
  c.fillStyle=hap?'#8ce99a':OK;c.beginPath();c.roundRect(-38,-28+7*pr,76,48,18);c.fill();c.stroke()
  ds(c,11,5,'#fff',()=>{c.moveTo(-15,-5+7*pr);c.lineTo(-4,6+7*pr);c.lineTo(16,-14+7*pr)})
  c.restore()
  if(hap){const q=min(1,(t-.5)/.3);c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[166,44,0],[246,50,.15],[244,140,.3],[176,138,.1]]){const r=sin(PI*min(1,max(0,q*1.3-o)));if(r>.1)spark(c,x,y,14*r)}}
  c.save();c.translate(px,py);c.scale(ps,ps)
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.ellipse(0,8,66,18,0,0,T);c.fill();c.stroke()
  c.strokeStyle=RIM;c.lineWidth=4;c.beginPath();c.ellipse(0,6,50,11,0,0,T);c.stroke();c.strokeStyle='#111'
  cookie(c,0,-20,23);cookie(c,-32,-6,21);cookie(c,32,-6,21)
  c.restore()
  for(const d of[-1,1]){const hx=px+d*62*ps,hy=py+10
    ds(c,26,16,DR,()=>{c.moveTo(px+d*72,262);c.lineTo(hx+d*4,hy+12)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,11,12,0,0,T);c.fill();c.stroke()}
  if(cu>.01){const x=290-74*cu,y=250-136*cu+5*pr,s=1-.15*pr;c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#fff';c.lineWidth=5
    c.beginPath();c.moveTo(0,0);c.lineTo(0,30);c.lineTo(8,23);c.lineTo(14,35);c.lineTo(20,32);c.lineTo(14,21);c.lineTo(25,21);c.closePath();c.fill();c.stroke();c.restore()}
}
