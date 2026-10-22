// mint-haired girl at a festival goldfish tub: she scoops a fish up on her paper poi, the paper tears, the fish drops back and darts away
const{sin,cos,PI,max,min,atan2,hypot}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#63e6be',HD='#12b886',HL='#e6fcf5',EYE='#f06595',ED='#a61e4d',TEE='#d0bfff',TD='#9775fa',RIB='#ff6b6b',TUB='#4dabf7',TL='#a5d8ff',WA='#99e9f2',WL='#e3fafc',BL='#ffa8a8',POI='#f783ac',Z=.7
const cl=x=>max(0,min(1,x)),ease=x=>x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+4,11.5,14,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-6,13,9,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+4,11.5,14,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+6,5.5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-2,5,0,T);c.fill();c.beginPath();c.arc(x+5,y+10,2.5,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const fish=(c,x,y,a,col,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.lineWidth=3.5/s;c.fillStyle=col
  c.beginPath();c.moveTo(-8,0);c.quadraticCurveTo(-18,-9,-20,-3);c.lineTo(-17,0);c.lineTo(-20,3);c.quadraticCurveTo(-18,9,-8,0);c.fill();c.stroke()
  c.beginPath();c.ellipse(0,0,11,6.5,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(6,-2,1.6,0,T);c.fill();c.restore()}
const E=th=>[128+72*cos(th),198+14*sin(th)]
export default(c,t)=>{
  const up=ease(cl((t-.3)/.12)),tear=cl((t-.42)/.06),down=ease(cl((t-.8)/.14)),sub=t<.3||t>=.94
  const C=[128-6*up+6*down,214-50*up+50*down],H=[C[0]+44,C[1]-24]
  let F,fa=0
  if(t<.3){const th=PI-PI/2*ease(t/.3);F=E(th);const[nx,ny]=E(th-.05);fa=atan2(ny-F[1],nx-F[0])}
  else if(t<.5){const dr=cl((t-.44)/.06);F=[C[0],C[1]+(214-C[1])*dr*dr];fa=-.3+dr*3}
  else{const k=(t-.5)/.5,th=PI/2-1.5*PI*(1-(1-k)**2);F=E(th);const[nx,ny]=E(th-.05);fa=atan2(ny-F[1],nx-F[0])}
  c.save();c.translate(128,126);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=8.5;c.fillStyle=HAIR;for(const d of[-1,1])c.beginPath(),c.arc(128+d*50,52,26,0,T),c.fill(),c.stroke()
  c.fillStyle=RIB;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*34,70),c.lineTo(128+d*20,58),c.lineTo(128+d*22,82),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=HD;c.beginPath();c.moveTo(128,50);c.bezierCurveTo(62,50,58,110,68,170);c.lineTo(188,170);c.bezierCurveTo(198,110,194,50,128,50);c.fill();c.stroke()
  c.fillStyle=TEE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(58,196,44,262);c.lineTo(212,262);c.quadraticCurveTo(198,196,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,168,24,26);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.beginPath();c.moveTo(108,190);c.quadraticCurveTo(128,212,148,190);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const st=t>=.3&&t<.44?1:t>=.46&&t<.84?2:0
  if(st==2){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*39,134),c.lineTo(128+d*23,143),c.lineTo(128+d*39,152),c.stroke()}
  else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,161,14,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath()
  if(st==1)c.moveTo(114,164),c.quadraticCurveTo(128,188,142,164),c.closePath(),c.fill(),c.stroke()
  else if(st==2)c.moveTo(112,176),c.quadraticCurveTo(116,160,128,162),c.quadraticCurveTo(140,160,144,176),c.quadraticCurveTo(128,170,112,176),c.fill(),c.stroke()
  else c.moveTo(120,168),c.lineTo(136,168),c.stroke()
  c.lineWidth=8.5;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,42,128,42);c.bezierCurveTo(168,42,202,74,186,146)
  c.quadraticCurveTo(184,116,174,104);c.quadraticCurveTo(166,108,160,116);c.quadraticCurveTo(154,100,140,94);c.quadraticCurveTo(134,104,128,110)
  c.quadraticCurveTo(122,100,112,96);c.quadraticCurveTo(104,108,98,116);c.quadraticCurveTo(92,106,84,104);c.quadraticCurveTo(72,118,70,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.3,1.42],[1.5,1.6]])c.beginPath(),c.arc(128,104,54,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  if(st==2){const w=(t*5)%1;c.fillStyle=TL;c.lineWidth=5;for(const d of[-1,1])for(const k of[0,.5]){const q=(w+k)%1,x=128+d*(40+50*q),y=144-20*q+60*q*q,r=13;c.save();c.translate(x,y);c.rotate(d*(.6-q*1.2));c.beginPath();c.moveTo(0,-r*1.6);c.quadraticCurveTo(r,0,0,r);c.quadraticCurveTo(-r,0,0,-r*1.6);c.restore();c.fill();c.stroke()}}
  c.restore()
  c.lineWidth=6;c.fillStyle=TUB;c.beginPath();c.moveTo(14,198);c.lineTo(24,234);c.quadraticCurveTo(128,256,232,234);c.lineTo(242,198);c.closePath();c.fill();c.stroke()
  c.fillStyle=TL;c.beginPath();c.ellipse(128,198,114,36,0,0,T);c.fill();c.stroke()
  c.fillStyle=WA;c.beginPath();c.ellipse(128,200,102,28,0,0,T);c.fill();c.lineWidth=4;c.stroke()
  c.save();c.beginPath();c.ellipse(128,200,100,26,0,0,T);c.clip()
  for(const[o,r,n,col]of[[0,.75,1,'#ff922b'],[.4,.45,-1,'#ff6b6b'],[.7,.95,1,'#fff']]){const th=(t*n+o)*T,x=128+82*r*cos(th),y=200+18*r*sin(th);fish(c,x,y,th+n*PI/2,col)}
  if(t<.3||t>=.5)fish(c,F[0],F[1],fa,'#ff6b6b',1.15)
  if(sub){c.strokeStyle=WL;c.lineWidth=3;const r=(t*4)%1;c.beginPath();c.ellipse(C[0]+26,C[1]-13,8+14*r,3+5*r,0,0,T);c.stroke()}
  const sp=cl((t-.48)/.12);if(sp>0&&sp<1){c.strokeStyle=WL;c.lineWidth=3.5;c.beginPath();c.ellipse(F[0],206,10+30*sp,3+8*sp,0,0,T);c.stroke()}
  c.restore();c.strokeStyle='#111'
  if(sp>0&&sp<1){c.fillStyle=WA;c.lineWidth=3;for(const d of[-1,-.4,.4,1]){const x=F[0]+d*30*sp,y=206-40*sp*(1-sp)*(2-Math.abs(d));c.beginPath();c.arc(x,y,4,0,T);c.fill();c.stroke()}}
  for(const[l,s]of[[24,'#111'],[13,TEE]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(150,150),c.quadraticCurveTo(170,150,H[0]+2,H[1]-2),c.stroke()
  for(const[l,s]of[[24,'#111'],[13,TEE]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(106,150),c.quadraticCurveTo(80,150,64,176),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(40,176);c.quadraticCurveTo(42,198,60,200);c.quadraticCurveTo(78,198,80,176);c.closePath();c.fill();c.stroke()
  c.strokeStyle=TUB;c.lineWidth=3;c.beginPath();c.moveTo(44,186);c.quadraticCurveTo(60,192,76,186);c.stroke();c.strokeStyle='#111'
  c.fillStyle=TL;c.beginPath();c.ellipse(60,176,20,5,0,0,T);c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(66,178,9,8,0,0,T);c.fill();c.stroke()
  const hd=[C[0]+20,C[1]-11]
  if(sub){for(const[l,s]of[[10,'#111'],[5,POI]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...H),c.lineTo(C[0]+26,C[1]-13),c.stroke();c.strokeStyle='#111'}
  else{
    for(const[l,s]of[[10,'#111'],[5,POI]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...H),c.lineTo(...hd),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(C[0],C[1],21,13,0,0,T)
    if(tear>0){const R=k=>.35+.25*tear+.12*sin(k*2.7);c.moveTo(C[0]+16*R(0)*1.2,C[1]);for(let k=1;k<=10;k++){const a=k*T/10;c.lineTo(C[0]+16*cos(a)*R(k)*1.2,C[1]+10*sin(a)*R(k)*1.2)}c.closePath()}
    c.fill('evenodd');if(tear>0)c.lineWidth=2.5,c.stroke(),c.lineWidth=4
    c.fillStyle=POI;c.beginPath();c.ellipse(C[0],C[1],21,13,0,0,T);c.ellipse(C[0],C[1],17,10,0,0,T,true);c.fill();c.stroke()
    if(t>=.3&&t<.44)fish(c,F[0],F[1]-2,fa,'#ff6b6b',1.15)
    else if(t>=.44&&t<.5)fish(c,F[0],F[1],fa,'#ff6b6b',1.15)
  }
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(H[0],H[1],10,9,0,0,T);c.fill();c.stroke()
}
