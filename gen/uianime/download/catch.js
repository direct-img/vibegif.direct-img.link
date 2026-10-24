// blonde girl with her arms up catching a falling file box with a down arrow, oof squash, a happy beam, then the box poofs into sparkles and she looks up for the next one
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#ffe066',HD='#f59f00',HL='#fff9db',EYE='#20c997',ED='#087f5b',TEE='#b2f2bb',TD='#40c057',BL='#ffa8a8',BAND='#ff6b6b',BOX='#e8b07a',BD='#c47f45',AR='#4dabf7',SP='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const box=(c,x,y,sq)=>{c.save();c.translate(x,y);c.scale(1.2/sq,1.2*sq)
  c.fillStyle=BOX;c.lineWidth=6;c.beginPath();c.roundRect(-34,-28,68,56,5);c.fill();c.stroke()
  c.fillStyle=BD;c.lineWidth=4;c.beginPath();c.rect(-8,-28,16,18);c.fill();c.stroke()
  c.beginPath();c.moveTo(-34,-14);c.lineTo(34,-14);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(-18,-6,36,28,5);c.fill();c.stroke()
  c.fillStyle=AR;c.lineWidth=3.5;c.beginPath();c.moveTo(0,19);c.lineTo(11,8);c.lineTo(4,8);c.lineTo(4,-2);c.lineTo(-4,-2);c.lineTo(-4,8);c.lineTo(-11,8);c.closePath();c.fill();c.stroke()
  c.restore()}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t)=>{
  const CY=56,u=((t+.1875)%1)/.375,fall=u<1,fy=-45+(CY+45)*(.4*u+.6*u*u)
  const oof=t>=.1875&&t<.3125,imp=oof?sin(PI*(t-.1875)/.125):0,hap=t>=.3125&&t<.625,pf=t>=.625&&t<.75?(t-.625)/.125:-1
  const hop=hap?-5*max(0,sin(2*T*(t-.3125)/.3125)):0,by=CY+10*imp+hop,bob=4*imp,look=t<.1875||t>=.75
  const H=f=>{c.save();c.translate(128,200+bob);c.scale(.7,.7);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.quadraticCurveTo(214,200,196,236);c.lineTo(60,236);c.quadraticCurveTo(42,200,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=TEE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.quadraticCurveTo(128,214,152,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.lineWidth=8;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(128,262,14,0,T);c.fill();c.stroke();c.fillStyle=TD;c.beginPath();c.arc(128,262,6,0,T);c.fill()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(oof){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
    else if(hap){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else{const g=look?[5,-4]:[6,3];eye(c,103,140,-1,...g);eye(c,153,140,1,...g)}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a'
    if(oof){c.beginPath();c.ellipse(128,170,9,6,0,0,T);c.fill();c.stroke()}
    else if(look){c.beginPath();c.ellipse(128,170,6,7,0,0,T);c.fill();c.stroke()}
    else{c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,188,142,164);c.closePath();c.fill();c.stroke();c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,180,8,6,0,0,T);c.fill();c.restore()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,154)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,154)
    c.quadraticCurveTo(188,120,180,104);c.quadraticCurveTo(170,96,160,100);c.quadraticCurveTo(152,108,140,108);c.quadraticCurveTo(132,98,128,90)
    c.quadraticCurveTo(122,100,114,108);c.quadraticCurveTo(102,108,96,100);c.quadraticCurveTo(86,96,78,104);c.quadraticCurveTo(70,124,66,154);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=BAND;c.lineWidth=7;c.beginPath();c.moveTo(66,96);c.bezierCurveTo(70,44,186,44,190,96);c.lineTo(180,98);c.bezierCurveTo(176,58,80,58,76,98);c.closePath();c.fill();c.stroke()
    if(oof){c.fillStyle='#a5d8ff';c.lineWidth=6;c.beginPath();c.moveTo(196,110);c.quadraticCurveTo(208,128,196,134);c.quadraticCurveTo(184,128,196,110);c.fill();c.stroke()}
  })
  const sq=oof?1-.14*imp:1
  if(fall){box(c,128,fy,1);if(u>.2)for(const k of[-1,0,1])ds(c,8,3.5,'#fff',()=>{c.moveTo(128+k*24,fy-46+k*k*8);c.lineTo(128+k*24,fy-70+k*k*8)})}
  else if(t<.625)box(c,128,by,sq)
  else if(pf>=0){c.save();c.translate(128,CY);c.scale(1-pf,1-pf);box(c,0,0,1);c.restore()}
  const hy=fall||pf>=0||look?CY+6:by+6
  for(const d of[-1,1])ds(c,20,11,TEE,()=>{c.moveTo(128+d*44,222+bob);c.quadraticCurveTo(128+d*66,140,128+d*48,hy+8)})
  c.fillStyle=SKIN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*48,hy,11,12,0,0,T),c.fill(),c.stroke()
  if(oof)for(let k=0;k<5;k++){const a=PI+k*PI/4,r=56+12*imp;ds(c,7,3,'#fff',()=>{c.moveTo(128+cos(a)*r,CY+sin(a)*r*.6);c.lineTo(128+cos(a)*(r+12),CY+sin(a)*(r+12)*.6)})}
  if(pf>=0){c.fillStyle=SP;c.lineWidth=3.5;for(let k=0;k<6;k++){const a=k*PI/3+.3,r=20+48*pf;spark(c,128+cos(a)*r,CY+sin(a)*r*.8,13*sin(PI*min(1,pf*1.2+.15)))}}
  if(hap){const q=(t-.375)/.3125;c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[208,40,0],[48,62,.2],[214,104,.4]]){const r=sin(PI*min(1,max(0,q*1.4-o)));if(r>.1)spark(c,x,y,12*r)}}
}
