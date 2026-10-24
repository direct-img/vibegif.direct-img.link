// sky blue haired girl with a big bow juggling three file icons in a loop over her head, tongue out in concentration, sync arrows on her tee
const{sin,PI,max}=Math,T=2*PI
export const frames=10,delay=110
const SKIN='#ffe3d1',HAIR='#74c0fc',HD='#1c7ed6',HL='#e7f5ff',EYE='#f76707',ED='#d9480f',TEE='#ffe066',BL='#ffa8a8',BOW='#f783ac',SY='#4dabf7',FC=[['#ffc9c9','#fa5252'],['#b2f2bb','#40c057'],['#d0bfff','#7950f2']]
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const file=(c,x,y,a,[f,l])=>{c.save();c.translate(x,y);c.rotate(a)
  c.fillStyle=f;c.lineWidth=5;c.beginPath();c.moveTo(-16,-21);c.lineTo(6,-21);c.lineTo(16,-11);c.lineTo(16,21);c.lineTo(-16,21);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(6,-21);c.lineTo(6,-11);c.lineTo(16,-11);c.closePath();c.fill();c.stroke()
  c.strokeStyle=l;c.lineWidth=4;c.beginPath();for(const[w,yy]of[[12,-3],[20,5],[16,13]])c.moveTo(-9,yy),c.lineTo(-9+w,yy);c.stroke();c.restore()}
const pos=p=>{if(p<2/3){const q=p*1.5;return[212-168*q,196-4*166*q*(1-q)]}const q=(p-2/3)*3;return[44+168*q,196+30*sin(PI*q)]}
export default(c,t)=>{
  const lh=196-10*max(0,sin(3*T*t+2)),rh=196-10*max(0,sin(3*T*t-.6))
  const fp=[0,1,2].map(k=>(t+k/3)%1),top=fp.reduce((a,b)=>Math.abs(b-1/3)<Math.abs(a-1/3)?b:a),[tx]=pos(top),gx=(tx-128)/20
  const H=f=>{c.save();c.translate(128,174);c.scale(.66,.66);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,160);c.quadraticCurveTo(208,190,190,200);c.lineTo(66,200);c.quadraticCurveTo(48,190,50,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=TEE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.quadraticCurveTo(128,214,152,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.save();c.translate(128,260);c.rotate(-.4)
    for(const d of[0,PI])ds(c,14,7,SY,()=>{c.arc(0,0,16,d+.3,d+2.5)})
    c.fillStyle=SY;c.lineWidth=4;for(const d of[0,PI]){c.save();c.rotate(d+2.5);c.beginPath();c.moveTo(16,-10);c.lineTo(28,0);c.lineTo(10,4);c.closePath();c.restore();c.fill();c.stroke()}
    c.restore()
    for(const d of[-1,1]){c.fillStyle=HAIR;c.beginPath();c.moveTo(128+d*60,110);c.bezierCurveTo(128+d*82,150,128+d*76,200,128+d*62,226);c.quadraticCurveTo(128+d*50,214,128+d*48,200);c.quadraticCurveTo(128+d*58,160,128+d*48,120);c.closePath();c.fill();c.stroke()}
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1,1,-4);eye(c,153,140,1,1,-4)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.beginPath();c.moveTo(116,168);c.quadraticCurveTo(128,174,140,168);c.stroke()
    c.fillStyle='#ff8fab';c.beginPath();c.moveTo(130,171);c.quadraticCurveTo(132,184,139,182);c.quadraticCurveTo(144,176,140,169);c.fill();c.stroke()
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=BOW;c.lineWidth=7
    for(const d of[-1,1])c.beginPath(),c.moveTo(128,40),c.quadraticCurveTo(128+d*30,8,128+d*44,30),c.quadraticCurveTo(128+d*36,58,128,40),c.fill(),c.stroke()
    c.beginPath();c.arc(128,40,9,0,T);c.fill();c.stroke()
  })
  for(const[x,y,d]of[[44,lh,-1],[212,rh,1]])ds(c,20,11,TEE,()=>{c.moveTo(128+d*44,196);c.quadraticCurveTo(128+d*70,246,x,y+10)})
  fp.forEach((p,k)=>{const[x,y]=pos(p);file(c,x,y,p*T,FC[k])})
  c.fillStyle=SKIN;c.lineWidth=5;for(const[x,y]of[[44,lh],[212,rh]])c.beginPath(),c.ellipse(x,y+8,12,11,0,0,T),c.fill(),c.stroke()
}
