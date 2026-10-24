// pink haired girl with low pigtails squeezing a yellow folder tight to her chest, eyes shut in bliss, blush glowing as hearts float up
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#faa2c1',HD='#e64980',HL='#fff0f6',TOP='#a5d8ff',TD='#4dabf7',SCR='#ffd43b',FO='#ffd43b',FD='#fab005',BL='#ff8fab',MO='#c92a2a',TG='#ff8fab',HT=['#ff6b9d','#f06595','#ff8787']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const sq=max(0,sin(2*T*t))**2,bl=1+.15*sq
  c.lineWidth=4
  for(const[x0,o,k]of[[218,0,0],[232,.33,1],[210,.66,2]]){const p=(t+o)%1,s=1.5*sin(PI*p);if(s>.15)c.fillStyle=HT[k],heart(c,x0+8*sin(T*(p*2+o)),214-p*190,s)}
  const head=f=>f()
  head(()=>{
    c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,156);c.lineTo(58,156);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
    for(const d of[-1,1]){c.save();c.translate(128+d*62,150);c.rotate(-d*.15)
      c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,-4);c.bezierCurveTo(d*30-6,10,d*30,60,d*16,96);c.quadraticCurveTo(d*8,110,-d*4,100);c.bezierCurveTo(d*8,60,-d*16,20,-8,-4);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(d*8,16);c.quadraticCurveTo(d*20,50,d*12,88);c.stroke();c.strokeStyle='#111'
      c.fillStyle=SCR;c.lineWidth=5;c.beginPath();c.ellipse(0,0,13,9,d*.4,0,T);c.fill();c.stroke();c.lineWidth=6;c.restore()}
  })
  c.lineWidth=6;c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,204),c.quadraticCurveTo(128+d*18,186,128+d*32,190),c.quadraticCurveTo(128+d*30,206,128,212),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,146,14,PI*1.15,PI*1.85),c.stroke()
    c.lineWidth=5;for(const[x,d]of[[103,-1],[153,1]])c.beginPath(),c.moveTo(x+d*13,139),c.lineTo(x+d*19,134),c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,160,15*bl,8*bl,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-8,-3,2,7])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,156),c.stroke()
    c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(128,170,138,166);c.quadraticCurveTo(136,180,128,180);c.quadraticCurveTo(120,180,118,166);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,181,6,5,0,0,T);c.fill();c.restore()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
    c.quadraticCurveTo(184,118,178,104);c.quadraticCurveTo(172,108,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,84,110)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,124,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=HT[0];c.lineWidth=4;heart(c,166,70,1.2)
  })
  // folder squeezed to her chest
  c.save();c.translate(128,226);c.rotate(-.05);c.scale(1-.05*sq,1+.02*sq)
  c.lineWidth=6;c.fillStyle=FD;c.beginPath();c.moveTo(-60,-30);c.lineTo(-60,-44);c.quadraticCurveTo(-60,-50,-54,-50);c.lineTo(-18,-50);c.lineTo(-8,-38);c.lineTo(56,-38);c.quadraticCurveTo(62,-38,62,-32);c.lineTo(62,40);c.lineTo(-60,40);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.rect(-46,-40,84,30);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=FO;c.beginPath();c.moveTo(-64,-24);c.lineTo(62,-24);c.lineTo(66,40);c.lineTo(-64,40);c.closePath();c.fill();c.stroke()
  c.fillStyle=HT[1];c.lineWidth=4;heart(c,0,6,1.5)
  c.restore()
  for(const d of[-1,1]){const x=128+d*(54-3*sq);ds(c,30,19,TOP,()=>{c.moveTo(128+d*78,258);c.lineTo(x+d*8,234)})
    c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(x,230,12,14,d*.3,0,T);c.fill();c.stroke()
    for(const y of[220,230,240])c.beginPath(),c.ellipse(x-d*10,y,8,5,0,0,T),c.fill(),c.stroke()
    if(sq>.3)ds(c,8,3.5,'#fff',()=>{for(const y of[-14,0,14])c.moveTo(128+d*(76+6*sq),218+y*1.2),c.lineTo(128+d*(90+6*sq),218+y*1.6)})}
}
