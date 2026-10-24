// chestnut haired girl in a track jacket yanking the pull cord of a big green refresh arrow, it whirls around and the cord springs back up
const{cos,PI,exp}=Math,T=2*PI
export const frames=13,delay=95
const SKIN='#ffe3d1',HAIR='#c0805a',HD='#8d5a3a',HL='#f3d9c7',EYE='#fab005',ED='#e67700',JK='#ffa94d',BL='#ffa8a8',GR='#51cf66',RP='#ffe8cc',HN='#ff6b6b',CLIP='#74c0fc'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x),L=(a,b,u)=>a+(b-a)*u
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x-4,y-1,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x-4,y-11,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-4,y,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-8,y-7,4.5,0,T);c.fill();c.beginPath();c.arc(x+1,y+6,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const pu=ease((t-.125)/.3125),pull=t>=.125&&t<.4375,bd=t<.4375?pu:1-ease((t-.625)/.3125)
  const f=t<.125?0:t<.4375?.6*pu:.6+.4*(1-(1-(t-.4375)/.5625)**2),th=T*f
  const ry=t<.4375?L(116,196,pu):116+80*exp(-9*(t-.4375))*cos(16*(t-.4375))
  const hy=t<.4375?ry:t<.625?196:L(196,116,ease((t-.625)/.3125)),hap=t>=.5&&t<.875
  const X=84,Y=60
  ds(c,10,5,RP,()=>{c.moveTo(X,Y);c.lineTo(X,ry)})
  c.save();c.translate(X,Y);c.rotate(th)
  ds(c,22,13,GR,()=>{c.arc(0,0,34,.9,T-.25)})
  c.fillStyle=GR;c.lineWidth=5;c.save();c.rotate(T-.3);c.beginPath();c.moveTo(14,-4);c.lineTo(54,-4);c.lineTo(34,22);c.closePath();c.restore();c.fill();c.stroke()
  c.restore()
  c.fillStyle='#adb5bd';c.lineWidth=4;c.beginPath();c.arc(X,Y,8,0,T);c.fill();c.stroke()
  if(f>.05&&f<.97)for(const k of[0,1,2])ds(c,7,3,'#fff',()=>{const a=-PI/2-1+k*.75;c.arc(X,Y,52+k%2*6,a,a+.45)})
  c.fillStyle=HN;c.lineWidth=5;c.beginPath();c.roundRect(X-9,ry,18,26,8);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(X-3,ry+6);c.lineTo(X-3,ry+18);c.stroke();c.strokeStyle='#111'
  const H=f=>{c.save();c.translate(170,176);c.scale(.68,.68);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.quadraticCurveTo(212,200,200,236);c.lineTo(56,236);c.quadraticCurveTo(44,200,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=JK;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(104,188);c.lineTo(128,214);c.lineTo(152,188);c.lineTo(156,204);c.lineTo(128,226);c.lineTo(100,204);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*62,214),c.lineTo(128+d*78,330),c.stroke();c.strokeStyle='#111'
    c.lineWidth=5;c.beginPath();c.moveTo(128,226);c.lineTo(128,330);c.stroke()
    c.fillStyle=SKIN;c.lineWidth=8;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(pull){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
    else if(hap){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a'
    if(pull){c.beginPath();c.moveTo(112,164);c.lineTo(144,164);c.quadraticCurveTo(144,180,128,180);c.quadraticCurveTo(112,180,112,164);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.rect(113,164,30,6);c.fill();c.stroke()}
    else{c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,(hap?190:180),142,164);c.closePath();c.fill();c.stroke();c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,180,8,6,0,0,T);c.fill();c.restore()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(168,96,158,102);c.quadraticCurveTo(146,96,140,84);c.quadraticCurveTo(130,100,112,108)
    c.quadraticCurveTo(104,100,100,92);c.quadraticCurveTo(92,104,82,108);c.quadraticCurveTo(72,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=CLIP;c.lineWidth=6;c.beginPath();c.roundRect(152,70,30,11,5);c.fill();c.stroke()
    if(pull){c.fillStyle='#a5d8ff';c.lineWidth=6;c.beginPath();c.moveTo(200,96);c.quadraticCurveTo(212,114,200,120);c.quadraticCurveTo(188,114,200,96);c.fill();c.stroke()}
  })
  ds(c,20,11,JK,()=>{c.moveTo(134,210);c.quadraticCurveTo(L(100,96,bd),L(200,226,bd),X,hy+14)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(X,hy+12,12,12,0,0,T);c.fill();c.stroke()
  ds(c,20,11,JK,()=>{c.moveTo(208,214);c.quadraticCurveTo(236,236,214,226-6*bd)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(212,222-6*bd,12,11,0,0,T);c.fill();c.stroke()
}
