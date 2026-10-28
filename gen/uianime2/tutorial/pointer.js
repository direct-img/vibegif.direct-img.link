// dark brown haired teacher girl in glasses with a low ponytail guiding a cursor across a mini whiteboard with her pointer stick, tapping the OK button so it clicks with a ripple while she winks
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#6d4c41',HD='#3e2723',HL='#d7ccc8',EYE='#4dabf7',ED='#1864ab',CA='#ffc078',CD='#e8590c',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',BRD='#adb5bd',BT='#4dabf7',BTD='#1c7ed6',WD='#c47f45',TIP='#ff6b6b',RP='#ffd43b',SC='#ff8787'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x-4,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x-4,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-5,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-8,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+1,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const go=ez(t,0,.4)-ez(t,.75,1),cx=34+62*go,cy=50+60*go,ck=i==7,rp=i>=7&&i<12,wk=i>=8&&i<12,pr=i==7||i==8
  const tx=cx+20-6*(ck?1:0),ty=cy+26-6*(ck?1:0),hx=146+(tx-110)*.2,hy=186+(ty-136)*.2
  for(const[a,b]of[[44,26],[112,130]])ds(c,12,6,WD,()=>{c.moveTo(a,140);c.lineTo(b,250)})
  c.fillStyle=BRD;c.lineWidth=7;c.beginPath();c.roundRect(6,22,144,122,12);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(16,32,124,102,6);c.fill();c.stroke()
  c.strokeStyle='#dee2e6';c.lineWidth=5;c.beginPath();c.moveTo(28,46);c.lineTo(88,46);c.moveTo(28,60);c.lineTo(68,60);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SC;c.lineWidth=3;for(const x of[112,124])c.beginPath(),c.arc(x,46,4,0,T),c.fill(),c.stroke()
  const by=pr?3:0
  if(!pr){c.fillStyle=BTD;c.lineWidth=5;c.beginPath();c.roundRect(52,96,68,30,10);c.fill();c.stroke()}
  c.fillStyle=pr?BTD:BT;c.lineWidth=5;c.beginPath();c.roundRect(52,93+by,68,30,10);c.fill();c.stroke()
  ds(c,8,4,'#fff',()=>{c.moveTo(80,108+by);c.ellipse(74,108+by,6,8,0,0,T);c.moveTo(86,100+by);c.lineTo(86,116+by);c.moveTo(97,100+by);c.lineTo(87,109+by);c.lineTo(97,116+by)})
  if(rp){const q=(i-7)/4;for(const k of[0,1]){const r=8+28*q-k*12;if(r>4)ds(c,9-4*q,5-2.5*q,RP,()=>c.arc(cx,cy,r,0,T))}}
  if(ck)ds(c,7,3,'#fff',()=>{for(const a of[-2.6,-2,-1.4]){c.moveTo(cx+cos(a)*12,cy+sin(a)*12);c.lineTo(cx+cos(a)*22,cy+sin(a)*22)}})
  c.save();c.translate(cx,cy);const cs=ck?.85:1;c.scale(cs,cs);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(0,0);c.lineTo(0,26);c.lineTo(7,20);c.lineTo(12,31);c.lineTo(17,29);c.lineTo(12,18);c.lineTo(21,18);c.closePath();c.fill();c.stroke();c.restore()
  const H=f=>{c.save();c.translate(192,182);c.scale(.66,.66);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,204,150);c.quadraticCurveTo(200,182,180,192);c.lineTo(76,192);c.quadraticCurveTo(56,182,52,150);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=CA;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*26,196),c.quadraticCurveTo(128+d*72,200,128+d*88,330),c.lineTo(128+d*10,330),c.lineTo(128+d*10,240),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=CD;c.lineWidth=5;for(const y of[262,296])c.beginPath(),c.arc(110,y,5,0,T),c.fill(),c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle='#fff';c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.lineTo(128+d*28,190),c.lineTo(128+d*32,214),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.lineWidth=8;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(wk){c.lineWidth=8;c.beginPath();c.arc(153,148,14,1.15*PI,1.85*PI);c.stroke();eye(c,103,140,-1)}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,164,13,7,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*46+k-2,168),c.lineTo(128+d*46+k+2,160),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(wk||i%4<2){c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,170,142,166);c.quadraticCurveTo(140,184,128,184);c.quadraticCurveTo(116,184,114,166);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,186,8,6,0,0,T);c.fill();c.restore()}
    else{c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(128,176,138,168);c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
    c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,160);c.quadraticCurveTo(184,150,180,156)
    c.quadraticCurveTo(184,124,176,100);c.quadraticCurveTo(160,96,148,84);c.quadraticCurveTo(142,98,128,104)
    c.quadraticCurveTo(116,96,108,84);c.quadraticCurveTo(102,100,90,104);c.quadraticCurveTo(84,102,80,98)
    c.quadraticCurveTo(70,124,76,156);c.quadraticCurveTo(70,150,66,160);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.roundRect(x-22,120,44,40,12),c.stroke()
    c.beginPath();c.moveTo(125,136);c.quadraticCurveTo(128,132,131,136);c.moveTo(81,132);c.lineTo(74,128);c.moveTo(175,132);c.lineTo(182,128);c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;for(const x of[103,153])c.beginPath(),c.moveTo(x+8,126),c.lineTo(x+14,132),c.stroke();c.strokeStyle='#111'
    c.save();c.translate(188,192);c.rotate(.08);c.fillStyle=HAIR;c.lineWidth=8;c.beginPath();c.moveTo(-16,0);c.bezierCurveTo(-22,40,-8,80,6,104);c.quadraticCurveTo(14,88,14,70);c.quadraticCurveTo(22,30,16,0);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(0,14);c.quadraticCurveTo(-4,50,4,84);c.stroke();c.strokeStyle='#111'
    c.fillStyle=SC;c.lineWidth=7;c.beginPath();c.ellipse(0,4,20,11,0,0,T);c.fill();c.stroke();c.restore()
  })
  ds(c,10,5,WD,()=>{c.moveTo(hx+8,hy+4);c.lineTo(tx,ty)})
  c.fillStyle=TIP;c.lineWidth=4;c.beginPath();c.arc(tx,ty,5,0,T);c.fill();c.stroke()
  ds(c,24,15,CA,()=>{c.moveTo(166,214);c.quadraticCurveTo(146,224,hx+6,hy+10)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,12,12,0,0,T);c.fill();c.stroke()
}
