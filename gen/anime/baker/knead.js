// baker girl in a polka-dot kerchief kneading a ball of dough on a floured board, pushing it flat and rolling it back, flour puffing up
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#e0a458',HD='#b8782e',HL='#f7dcae',EYE='#82c91e',ED='#5c940d',BL='#ffa8a8',KER='#ff6b6b',APR='#a5d8ff',WOOD='#e0a96d',WD='#b5803f',DOUGH='#ffe8cc',DS='#f5d0a0'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,ly)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x,y+2+ly,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8+ly,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3+ly,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5+ly,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8+ly,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const puff=(c,x,y,r)=>{c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();for(const[a,b,q]of[[-.7,.2,.7],[0,-.4,.9],[.7,.1,.75]])c.moveTo(x+a*r+q*r,y+b*r),c.arc(x+a*r,y+b*r,q*r,0,T);c.fill();c.stroke()}
export default(c,t)=>{
  const k=(1-cos(2*T*t))/2,u=(2*t)%1
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(102,150);c.quadraticCurveTo(62,160,52,240);c.lineTo(204,240);c.quadraticCurveTo(194,160,154,150);c.closePath();c.fill();c.stroke()
  c.fillStyle=APR;c.lineWidth=5;c.beginPath();c.moveTo(106,172);c.lineTo(150,172);c.lineTo(156,240);c.lineTo(100,240);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(108,172);c.lineTo(114,154);c.moveTo(148,172);c.lineTo(142,154);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(118,138);c.lineTo(118,156);c.quadraticCurveTo(128,164,138,156);c.lineTo(138,138);c.fill();c.beginPath();c.moveTo(118,138);c.lineTo(118,154);c.moveTo(138,138);c.lineTo(138,154);c.stroke()
  c.save();c.translate(128,100);c.scale(.72,.72);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,38);c.bezierCurveTo(198,38,212,110,202,196);c.quadraticCurveTo(190,212,176,202);c.lineTo(80,202);c.quadraticCurveTo(66,212,54,196);c.bezierCurveTo(44,110,58,38,128,38);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1,4);eye(c,153,140,1,4)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,163,13,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const x of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+x-2,166),c.lineTo(128+d*44+x+2,160),c.stroke()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(128,180,138,166);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ff8fab';c.lineWidth=3;c.beginPath();c.ellipse(134,170,4,3,0,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(54,90,80,60,128,60);c.bezierCurveTo(176,60,202,90,188,150)
  c.quadraticCurveTo(186,122,178,106);c.quadraticCurveTo(170,110,162,116);c.quadraticCurveTo(160,100,148,92)
  c.quadraticCurveTo(138,108,124,112);c.quadraticCurveTo(126,100,120,92);c.quadraticCurveTo(108,106,92,112)
  c.quadraticCurveTo(92,102,86,98);c.quadraticCurveTo(70,118,68,150);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*58,108);c.quadraticCurveTo(128+d*72,160,128+d*62,200);c.quadraticCurveTo(128+d*52,196,128+d*50,176);c.quadraticCurveTo(128+d*52,140,128+d*46,112);c.closePath();c.fill();c.stroke()}
  c.strokeStyle=HL;c.lineWidth=5;c.beginPath();c.arc(128,110,52,PI*1.3,PI*1.42);c.stroke();c.beginPath();c.arc(128,110,52,PI*1.58,PI*1.7);c.stroke();c.strokeStyle='#111'
  const ker=()=>{c.moveTo(56,96);c.bezierCurveTo(50,22,206,22,200,96);c.quadraticCurveTo(128,70,56,96);c.closePath()}
  c.lineWidth=7;c.fillStyle=KER;c.beginPath();ker();c.fill();c.save();c.clip();c.fillStyle='#fff';for(const[x,y]of[[84,58],[112,44],[146,46],[176,60],[98,78],[130,66],[162,80],[70,82],[190,84]])c.beginPath(),c.arc(x,y,6,0,T),c.fill();c.restore();c.beginPath();ker();c.stroke()
  c.fillStyle=KER;for(const a of[-.5,.7])c.beginPath(),c.ellipse(204+cos(a)*12,92+sin(a)*12,13,8,a,0,T),c.fill(),c.stroke()
  c.beginPath();c.arc(202,94,7,0,T);c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle=WOOD;c.beginPath();c.roundRect(12,212,232,36,12);c.fill();c.stroke()
  c.fillStyle=WD;c.beginPath();c.roundRect(12,236,232,12,6);c.fill();c.stroke()
  c.fillStyle='#fff';for(const[x,y]of[[40,222],[52,228],[66,220],[192,224],[206,219],[218,228],[180,230]])c.beginPath(),c.arc(x,y,2.5,0,T),c.fill()
  const rx=36+18*k,ry=22-8*k,cy=230-ry
  c.fillStyle=DOUGH;c.lineWidth=6;c.beginPath();c.ellipse(128,cy,rx,ry,0,0,T);c.fill();c.stroke()
  c.strokeStyle=DS;c.lineWidth=4;c.beginPath();c.ellipse(128,cy+ry*.2,rx*.6,ry*.45,0,.15*PI,.85*PI);c.stroke();c.strokeStyle='#111'
  c.lineWidth=3;c.beginPath();c.moveTo(128-rx*.35,cy-ry*.25);c.quadraticCurveTo(128,cy-ry*(.5-.4*k),128+rx*.35,cy-ry*.25);c.stroke()
  if(u>.25&&u<.8){const p=(u-.25)/.55,r=11*sin(PI*p);for(const d of[-1,1])puff(c,128+d*(rx+10+26*p),cy-4-26*p,r)}
  for(const d of[-1,1]){
    const hx=128+d*(16+14*k),hy=cy-ry+6+4*k
    ds(c,20,11,'#fff',()=>{c.moveTo(128+d*30,166);c.lineTo(128+d*54,190)})
    ds(c,18,9,SKIN,()=>{c.moveTo(128+d*54,190);c.lineTo(hx+d*6,hy+2)})
    c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,13,10,d*.3,0,T);c.fill();c.stroke()
  }
}
