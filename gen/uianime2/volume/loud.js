// long hot pink haired girl in big mint headphones bobbing her head to the beat with eyes closed, a speaker icon blasts pulsing sound waves, eq bars bounce and music notes float up
const{sin,cos,PI,min,abs}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#f06595',HD='#c2255c',HL='#ffdeeb',TEE='#d0bfff',TD='#9775fa',BL='#ff8fab',MO='#c92a2a',TG='#ff8fab',MN='#63e6be',MD='#12b886',CU='#495057',NT=['#f783ac','#b197fc','#4dabf7'],EQ=['#ff8fab','#ffa94d','#ffd43b','#8ce99a','#74c0fc']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const note=(c,x,y,s,col,two)=>{c.save();c.translate(x,y);c.scale(s,s);c.fillStyle=col;c.lineWidth=4
  if(two){c.beginPath();c.moveTo(-4,-28);c.lineTo(22,-34);c.lineTo(22,-24);c.lineTo(-4,-18);c.closePath();c.fill();c.stroke();ds(c,10,4,col,()=>{c.moveTo(-4,0);c.lineTo(-4,-26);c.moveTo(22,-6);c.lineTo(22,-32)});for(const[px,py]of[[-10,0],[16,-6]])c.beginPath(),c.ellipse(px,py,9,7,-.4,0,T),c.fill(),c.stroke()}
  else{ds(c,10,4,col,()=>{c.moveTo(4,0);c.lineTo(4,-30);c.quadraticCurveTo(10,-20,18,-18)});c.beginPath();c.ellipse(-2,0,9,7,-.4,0,T);c.fill();c.stroke()}
  c.restore()}
export default(c,t)=>{
  const p=t*4%1,by=-8*sin(PI*p),a=.12*sin(T*t*2),sw=.4*a,X=108,Y=198
  const G=(x,y)=>{const u=(x-128)*.72,v=(y-186)*.72;return[X+u*cos(a)-v*sin(a),Y+by+u*sin(a)+v*cos(a)]}
  for(let k=0;k<5;k++){const h=12+36*abs(sin(T*t*2+k*1.2)),x=199+k*11;c.fillStyle=EQ[k];c.lineWidth=4.5;c.beginPath();c.roundRect(x,240-h,9,h,3);c.fill();c.stroke()}
  c.save();c.translate(196,58);const s=1+.1*(1-p);c.scale(s,s)
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(-30,-11);c.lineTo(-16,-11);c.lineTo(2,-27);c.lineTo(2,27);c.lineTo(-16,11);c.lineTo(-30,11);c.closePath();c.fill();c.stroke()
  for(let k=0;k<3;k++)ds(c,11,5,k<3-p*3?HAIR:'#dee2e6',()=>{c.arc(4,0,14+k*12,-.75,.75)})
  c.restore()
  for(let k=0;k<3;k++){const q=(t+k/3)%1,x=[30,62,142][k]+10*sin(T*q+k),y=[170,150,96][k]-100*q,sc=sin(PI*q);if(sc>.05)note(c,x,y,.8*min(1,sc*2),NT[k],k==1)}
  const H=f=>{c.save();c.translate(X,Y+by);c.rotate(a);c.scale(.72,.72);c.translate(-128,-186);f();c.restore()}
  H(()=>{c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,218,100,214,170);c.quadraticCurveTo(220,226,226,262);c.lineTo(30,262);c.quadraticCurveTo(36,226,42,170);c.bezierCurveTo(38,100,56,34,128,34);c.fill();c.stroke()})
  c.save();c.translate(X,Y+by*.5);c.rotate(sw);c.scale(.72,.72);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=TEE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(48,198,36,330);c.lineTo(220,330);c.quadraticCurveTo(208,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(106,190);c.quadraticCurveTo(128,212,150,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=TD;c.lineWidth=6;c.beginPath();c.moveTo(128,250);c.bezierCurveTo(100,226,108,206,128,222);c.bezierCurveTo(148,206,156,226,128,250);c.fill();c.stroke()
  c.restore()
  c.save();c.translate(X,Y+by);c.rotate(a);c.scale(.72,.72);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
  c.lineWidth=6;c.fillStyle=MO
  if(p<.5){c.beginPath();c.ellipse(128,172,10,12,0,0,T);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,184,8,6,0,0,T);c.fill();c.restore()}
  else{c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,184,142,164);c.closePath();c.fill();c.stroke()}
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,170)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,170);c.quadraticCurveTo(184,160,180,168)
  c.quadraticCurveTo(186,124,178,104);c.quadraticCurveTo(172,106,166,114);c.quadraticCurveTo(162,98,152,90);c.quadraticCurveTo(146,104,136,110)
  c.quadraticCurveTo(132,96,124,88);c.quadraticCurveTo(118,102,108,110);c.quadraticCurveTo(104,96,96,92);c.quadraticCurveTo(90,104,84,110)
  c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,128,76,168);c.quadraticCurveTo(70,160,66,170);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  ds(c,26,15,MN,()=>{c.moveTo(48,128);c.bezierCurveTo(40,10,216,10,208,128)})
  c.strokeStyle=MD;c.lineWidth=4;c.beginPath();c.moveTo(70,60);c.bezierCurveTo(100,30,156,30,186,60);c.stroke();c.strokeStyle='#111'
  for(const d of[-1,1]){const x=128+d*84
    c.fillStyle=CU;c.lineWidth=7;c.beginPath();c.roundRect(x-(d>0?16:4),104,20,58,8);c.fill();c.stroke()
    c.fillStyle=MN;c.beginPath();c.roundRect(x+(d>0?0:-24)+d*4,96,24,74,12);c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(x+d*16,133,5,18,0,0,T);c.fill();c.stroke()}
  c.restore()
  const[hx,hy]=G(220,150)
  ds(c,24,15,TEE,()=>{c.moveTo(180,226);c.quadraticCurveTo(204,200,hx,hy+12)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,12,14,a,0,T);c.fill();c.stroke()
}
