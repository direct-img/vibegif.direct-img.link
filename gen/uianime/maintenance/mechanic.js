// sky blue haired mechanic girl in goggles and coveralls, wrench in hand, wiping the sweat off her brow with a phew while gears keep turning behind her
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#74c0fc',HD='#339af0',HL='#e7f5ff',EYE='#51cf66',ED='#2b8a3e',BL='#ffa8a8',JS='#ff922b',JSD='#e8590c',GG='#ffd43b',GR='#ced4da',GD='#868e96',GY='#ffe066',WR='#dee2e6',SW='#a5d8ff',GRS='#868e96'
const E=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const gear=(c,x,y,n,ro,ri,a,col,h)=>{
  c.save();c.translate(x,y);c.rotate(a);c.fillStyle=col;c.lineWidth=5;c.beginPath()
  for(let k=0;k<n;k++){const b=k*T/n,w=PI/n*.55;c.lineTo(ri*cos(b-w*1.5),ri*sin(b-w*1.5));c.lineTo(ro*cos(b-w),ro*sin(b-w));c.lineTo(ro*cos(b+w),ro*sin(b+w));c.lineTo(ri*cos(b+w*1.5),ri*sin(b+w*1.5))}
  c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(let k=0;k<h;k++){const b=k*T/h;c.beginPath();c.arc(ri*.58*cos(b),ri*.58*sin(b),ri*.17,0,T);c.fill();c.stroke()}
  c.fillStyle=GD;c.beginPath();c.arc(0,0,ri*.24,0,T);c.fill();c.stroke();c.restore()
}
const drop=(c,x,y,s)=>{c.fillStyle=SW;c.lineWidth=4;c.beginPath();c.moveTo(x,y-10*s);c.quadraticCurveTo(x+7*s,y+2*s,x,y+5*s);c.quadraticCurveTo(x-7*s,y+2*s,x,y-10*s);c.fill();c.stroke()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x,y+3,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y-7,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+4,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-3,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+9,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const up=E((t-.22)/.1)-E((t-.62)/.1),wp=min(1,max(0,(t-.32)/.26)),sh=t>.3&&t<.66,ph=t>=.66&&t<.92
  gear(c,204,50,12,38,30,T*t/6+.17,GR,6);gear(c,194,104,8,24,18,.57-T*t/4,GY,4)
  c.save();c.translate(112,168);c.scale(.76,.76);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,212,100,206,150);c.lineTo(214,170);c.lineTo(194,166);c.lineTo(186,180);c.lineTo(70,180);c.lineTo(62,166);c.lineTo(42,170);c.lineTo(50,150);c.bezierCurveTo(44,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=JS;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(54,198,44,300);c.lineTo(212,300);c.quadraticCurveTo(202,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(106,190);c.lineTo(128,226);c.lineTo(150,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=JSD;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*22,190),c.lineTo(128+d*4,230),c.lineTo(128+d*30,214),c.lineTo(128+d*36,192),c.closePath(),c.fill(),c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(150,244,36,22,4);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=8;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(sh||ph){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
  else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  c.strokeStyle=GRS;c.lineWidth=6;c.beginPath();c.moveTo(158,164);c.lineTo(176,158);c.moveTo(162,172);c.lineTo(174,168);c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;if(ph){c.fillStyle='#c92a2a';c.beginPath();c.ellipse(128,172,6,7,0,0,T);c.fill();c.stroke()}
  else{c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,180,140,166);c.stroke()}
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,158)
  c.bezierCurveTo(48,74,88,38,128,38);c.bezierCurveTo(168,38,208,74,190,158)
  c.lineTo(182,128);c.lineTo(178,106);c.lineTo(166,108);c.lineTo(162,94);c.lineTo(148,108);c.lineTo(138,92);c.lineTo(126,108)
  c.lineTo(114,94);c.lineTo(104,108);c.lineTo(92,96);c.lineTo(88,110);c.lineTo(76,108);c.lineTo(72,128);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.32],[1.6,1.7]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  // goggles up on her head
  c.strokeStyle='#111';ds(c,16,9,'#495057',()=>{c.moveTo(60,70);c.quadraticCurveTo(128,40,196,70)})
  for(const x of[100,156]){c.fillStyle='#868e96';c.lineWidth=7;c.beginPath();c.arc(x,58,21,0,T);c.fill();c.stroke();c.fillStyle=GG;c.lineWidth=4;c.beginPath();c.arc(x,58,13,0,T);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(x,58,7,PI*1.1,PI*1.5);c.stroke();c.strokeStyle='#111'}
  c.restore()
  // sweat before the wipe, one drop flicked off after
  if(t<.3){drop(c,74,104,1);drop(c,152,94,.8)}
  if(t>.56&&t<.84){const p=(t-.56)/.28;drop(c,166+60*p,96-30*p+60*p*p,1.1)}
  if(ph){const p=(t-.66)/.26;c.fillStyle='#fff';c.lineWidth=4;c.beginPath();for(const[ox,oy,r]of[[-8,2,8],[2,-4,10],[11,3,7]])c.moveTo(80-40*p+ox+r,150-10*p+oy),c.arc(80-40*p+ox,150-10*p+oy,r*(1-p*.4),0,T);c.stroke();c.fill()}
  // wrench in her other hand
  c.save();c.translate(178,212);c.rotate(-.9)
  ds(c,20,11,WR,()=>{c.moveTo(0,0);c.lineTo(66,0)})
  c.fillStyle=WR;c.lineWidth=6;c.beginPath();c.arc(80,0,20,.55,T-.55);c.lineTo(84,-7);c.lineTo(84,7);c.closePath();c.fill();c.stroke()
  c.restore()
  ds(c,22,13,JS,()=>{c.moveTo(160,200);c.quadraticCurveTo(176,224,178,214)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(178,212,12,13,0,0,T);c.fill();c.stroke()
  // the wiping arm
  const R=[46,226,70,244],S=[32,146,68,112],F=[50,128,116,100],L=(p,q,f)=>p.map((v,k)=>v+(q[k]-v)*f),[ex,ey,hx,hy]=t<.32?L(R,S,up):t<.62?L(S,F,E(wp)):L(R,F,up)
  ds(c,22,13,JS,()=>{c.moveTo(78,196);c.lineTo(ex,ey);c.lineTo(hx,hy)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,12,11,0,0,T);c.fill();c.stroke()
  if(sh&&wp>0&&wp<1)for(const k of[0,1])ds(c,7,3,'#fff',()=>{c.moveTo(hx-16-k*12,hy-8+k*14);c.lineTo(hx-34-k*12,hy-8+k*14)})
}
