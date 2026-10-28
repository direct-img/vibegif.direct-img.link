// long berry red haired girl in a showgirl vest tugging a little stage curtain aside to reveal a spinning "NEW" burst badge with sparkles, beaming, then letting it swing shut again
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#e8366a',HD='#a51d45',HL='#ffc9d9',EYE='#40c057',ED='#2b8a3e',VS='#7950f2',BOW='#ffd43b',BL='#ffa8a8',CU='#f06595',CD='#c2255c',ROD='#fab005',STG='#f3d9fa',BG='#ffd43b',BGD='#f59f00',RED='#f03e3e',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d,st)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';if(st)spark(c,x-3,y-3,8,0);else c.beginPath(),c.arc(x-4,y-5,4.5,0,T),c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r,o=1)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();if(o)c.stroke()}
export default(c,t,i)=>{
  const o=ease((t-.06)/.26)-ease((t-.7)/.24),ct=16+84*o,cp=16+120*o,cb=16+90*o,hx=140+4*o,pz=1+.06*sin(T*t*2),hap=o>.6,bk=i==1
  c.lineWidth=6;c.fillStyle=STG;c.beginPath();c.roundRect(12,30,138,170,10);c.fill();c.stroke()
  c.save();c.translate(70,116);c.rotate(T*t/4);c.scale(pz,pz)
  c.fillStyle=BG;c.lineWidth=6;c.beginPath();for(let k=0;k<28;k++){const a=k*PI/14,r=k%2?44:55;c.lineTo(r*cos(a),r*sin(a))}c.closePath();c.fill();c.stroke()
  c.strokeStyle=BGD;c.lineWidth=4;c.beginPath();c.arc(0,0,36,0,T);c.stroke();c.restore()
  c.save();c.translate(70,116);c.rotate(-.12);c.scale(pz,pz)
  for(const[w,s]of[[14,'#111'],[7,RED]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath()
    c.moveTo(-30,12);c.lineTo(-30,-12);c.lineTo(-16,12);c.lineTo(-16,-12)
    c.moveTo(4,-12);c.lineTo(-8,-12);c.lineTo(-8,12);c.lineTo(4,12);c.moveTo(-8,0);c.lineTo(2,0)
    c.moveTo(12,-12);c.lineTo(17,12);c.lineTo(22,-2);c.lineTo(27,12);c.lineTo(32,-12);c.stroke()}
  c.restore();c.strokeStyle='#111'
  if(o>.5){const q=min(1,(o-.5)*2);c.fillStyle=SP;c.lineWidth=4;for(const[x,y,r,ph]of[[28,50,15,0],[124,52,12,1.3],[30,178,11,2.6],[112,182,14,4]])spark(c,x,y,r*q*(.7+.3*sin(T*t*4+ph)))}
  const n=6,w=(150-cb)/n,L=(a,k)=>a+(150-a)*k/n
  c.lineWidth=6;c.fillStyle=CU;c.beginPath();c.moveTo(ct,30);c.lineTo(150,30);c.lineTo(150,198)
  for(let k=n;k>0;k--)c.quadraticCurveTo(cb+(k-.5)*w,206,cb+(k-1)*w,198)
  c.quadraticCurveTo(cp-4*o,176,cp,150);c.quadraticCurveTo(cp-8*o,90,ct,30);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CD;c.lineWidth=4;c.beginPath();for(let k=1;k<n;k++)c.moveTo(L(ct,k),40),c.quadraticCurveTo(L(cp,k)-8*o,90,L(cp,k),150),c.quadraticCurveTo(L(cp,k)-4*o,176,L(cb,k),192);c.stroke();c.strokeStyle='#111'
  ds(c,13,7,ROD,()=>{c.moveTo(12,30);c.lineTo(154,30)})
  c.fillStyle=ROD;c.lineWidth=5;for(const x of[12,154])c.beginPath(),c.arc(x,30,8,0,T),c.fill(),c.stroke()
  const H=f=>{c.save();c.translate(198,152);c.rotate(.05*o);c.scale(.6,.6);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(204,34,216,110,214,200);c.quadraticCurveTo(214,300,222,400);c.lineTo(34,400);c.quadraticCurveTo(42,300,42,200);c.bezierCurveTo(40,110,52,34,128,34);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,400);c.lineTo(216,400);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=VS;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*28,190),c.quadraticCurveTo(128+d*76,198,128+d*92,400),c.lineTo(128+d*14,400),c.lineTo(128+d*6,250),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=BOW;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*22,200),c.lineTo(128+d*22,226),c.closePath(),c.fill(),c.stroke()
    c.beginPath();c.arc(128,213,6,0,T);c.fill();c.stroke()
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,196);c.quadraticCurveTo(128,206,142,196);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.moveTo(142,168);c.lineTo(142,194);c.stroke()
    c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(bk){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}
    else eye(c,103,140,-1,hap),eye(c,153,140,1,hap)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a'
    if(hap){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,170,144,164);c.quadraticCurveTo(142,186,128,186);c.quadraticCurveTo(114,186,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,188,9,7,0,0,T);c.fill();c.restore()}
    else{c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(122,174,128,168);c.quadraticCurveTo(134,174,140,166);c.stroke()}
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,230)
    c.bezierCurveTo(40,76,88,36,128,36);c.bezierCurveTo(168,36,216,76,196,230);c.quadraticCurveTo(188,236,180,228)
    c.quadraticCurveTo(186,140,178,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,140,76,228);c.quadraticCurveTo(68,236,60,230);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=BOW;c.lineWidth=7;c.beginPath();for(let k=0;k<10;k++){const a=-PI/2+k*PI/5,r=k%2?8:18;c.lineTo(166+r*cos(a),66+r*sin(a))}c.closePath();c.fill();c.stroke()
  })
  ds(c,20,12,'#fff',()=>{c.moveTo(168,188);c.quadraticCurveTo(hx+30,178,hx+10,154)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx+2,150,12,13,0,0,T);c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();for(const y of[146,153])c.moveTo(hx-9,y),c.lineTo(hx-2,y);c.stroke()
}
