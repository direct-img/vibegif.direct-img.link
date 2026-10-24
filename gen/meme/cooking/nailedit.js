// a proud chef presents a charred, still-burning roast under a blaring smoke alarm and blows a chef's kiss
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),lp=(a,b,u)=>a+(b-a)*u
const WALL='#ffe8cc',TILE='#ffd8a8',CTR='#868e96',SKIN='#ffd3b0',JK='#fff',MU='#5c3d2e',BURN='#2b2b2b',SMK='#ced4da',FIRE='#ff922b',FY='#ffd43b'
export default(c,t,i)=>{
  const up=io((t-.3)/.14)-io((t-.62)/.12),fl=io((t-.5)/.08)*(1-io((t-.66)/.12)),kiss=up>.6&&fl<.3,bob=0,bl=i%4<2
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=WALL;c.fill();c.clip()
  c.fillStyle=TILE;c.fillRect(0,150,256,80);c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(0,150);c.lineTo(256,150);c.stroke()
  c.strokeStyle='#111'
  c.fillStyle=CTR;c.lineWidth=6;c.beginPath();c.rect(-10,226,276,40);c.fill();c.stroke()
  c.save();c.translate(128,0)
  c.fillStyle=JK;c.beginPath();c.moveTo(-58,262);c.lineTo(-52,170);c.quadraticCurveTo(-46,140,0,138);c.quadraticCurveTo(46,140,52,170);c.lineTo(58,262);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ff6b6b';c.beginPath();c.moveTo(-20,140);c.lineTo(20,140);c.lineTo(10,160);c.lineTo(0,152);c.lineTo(-10,160);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const x of[-14,14])for(const y of[180,204])c.beginPath(),c.arc(x,y,4,0,T),c.fill()
  c.restore()
  c.save();c.translate(128,96+bob*.4)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.arc(0,0,36,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(-30,-22);c.lineTo(-28,-40);c.arc(-18,-52,16,PI*.75,PI*1.6);c.arc(2,-64,20,PI*1.1,PI*1.9);c.arc(22,-52,16,PI*1.4,PI*.25);c.lineTo(30,-22);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(-32,-30,64,14,4);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();for(const d of[-1,1])c.arc(d*14,4,7,PI*1.15,PI*1.85);c.stroke()
  c.fillStyle='#ff8fa3';for(const d of[-1,1])c.beginPath(),c.ellipse(d*24,14,7,4.5,0,0,T),c.fill()
  c.lineWidth=4;if(kiss){c.fillStyle='#e8590c';c.beginPath();c.arc(0,27,4.5,0,T);c.fill();c.stroke()}else{c.fillStyle='#c92a2a';c.beginPath();c.moveTo(-9,22);c.quadraticCurveTo(0,34,9,22);c.closePath();c.fill();c.stroke()}
  c.fillStyle=MU;c.beginPath();c.moveTo(0,15);c.bezierCurveTo(-8,10,-18,12,-20,16);c.bezierCurveTo(-24,14,-26,10,-22,6);c.bezierCurveTo(-28,8,-28,20,-18,21);c.bezierCurveTo(-10,22,-4,19,0,18);c.bezierCurveTo(4,19,10,22,18,21);c.bezierCurveTo(28,20,28,8,22,6);c.bezierCurveTo(26,10,24,14,20,16);c.bezierCurveTo(18,12,8,10,0,15);c.fill();c.stroke()
  c.restore()
  const px=72,py=176+bob
  for(const[w,s]of[[22,'#111'],[12,JK]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(84,154),c.quadraticCurveTo(70,186,px+10,py+6),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(px,py,52,13,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.strokeStyle='#adb5bd';c.beginPath();c.ellipse(px,py-1,36,7,0,0,T);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6
  c.fillStyle=BURN;c.beginPath();c.moveTo(px-38,py-2);c.bezierCurveTo(px-42,py-30,px-16,py-38,px,py-38);c.bezierCurveTo(px+16,py-38,px+42,py-30,px+38,py-2);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#5c5f66';c.lineWidth=4;c.beginPath();c.moveTo(px-22,py-24);c.lineTo(px-12,py-28);c.lineTo(px-6,py-22);c.moveTo(px+8,py-26);c.lineTo(px+18,py-22);c.stroke()
  c.strokeStyle='#111'
  for(const d of[-1,1]){c.save();c.translate(px+d*26,py-6);c.rotate(d*1.05);c.lineWidth=5;c.fillStyle=BURN;c.beginPath();c.ellipse(0,-6,10,13,0,0,T);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.roundRect(-3.5,-30,7,16,2);c.fill();c.stroke();for(const e of[-1,1])c.beginPath(),c.arc(e*4.5,-31,5,0,T),c.fill(),c.stroke();c.restore()}
  const f=1+.18*sin(T*t*7)
  c.save();c.translate(px+4,py-36);c.scale(.8,.8*f);c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=FIRE;c.beginPath();c.moveTo(-12,0);c.quadraticCurveTo(-14,-16,-2,-30);c.quadraticCurveTo(0,-18,6,-20);c.quadraticCurveTo(14,-12,12,0);c.closePath();c.fill();c.stroke()
  c.fillStyle=FY;c.beginPath();c.moveTo(-5,0);c.quadraticCurveTo(-6,-10,0,-16);c.quadraticCurveTo(6,-8,5,0);c.closePath();c.fill();c.restore()
  c.strokeStyle='#111';c.lineWidth=5
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=px+4+10*sin(T*(p+k*.3))-18*p,y=py-62-p*130,r=10+12*p,B=[[0,0,r],[r*.8,r*.4,r*.7],[-r*.7,r*.45,r*.65]];c.fillStyle='#111';for(const[a,b,q]of B)c.beginPath(),c.arc(x+a,y+b,q+5,0,T),c.fill();c.fillStyle=SMK;for(const[a,b,q]of B)c.beginPath(),c.arc(x+a,y+b,q,0,T),c.fill();c.fillStyle='#e9ecef';c.beginPath();c.arc(x-r*.3,y-r*.3,r*.35,0,T);c.fill()}
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(64,6,32,24,0,0,PI);c.fill();c.stroke()
  c.fillStyle=bl?'#fa5252':'#862e2e';c.lineWidth=4;c.beginPath();c.arc(64,18,6.5,0,T);c.fill();c.stroke()
  if(bl){c.strokeStyle='#fa5252';c.lineWidth=5;for(const r of[38,50])for(const d of[-1,1])c.beginPath(),c.arc(64,8,r,PI/2-d*.6-.3,PI/2-d*.6+.3),c.stroke()}
  c.strokeStyle='#111'
  const hx=lp(186,140,up)+lp(0,60,fl),hy=lp(206,124,up)+lp(0,-34,fl)
  for(const[w,s]of[[22,'#111'],[12,JK]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(174,156),c.quadraticCurveTo(lp(198,190,up),lp(196,176,up),hx,hy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
  if(fl>.3){c.save();c.translate(hx,hy);c.rotate(-.4);c.beginPath();c.arc(0,0,10,0,T);c.fill();c.stroke();for(let k=0;k<4;k++){c.save();c.rotate(-1.2+k*.5);c.beginPath();c.roundRect(6,-3.5,14,7,3.5);c.fill();c.stroke();c.restore()}c.restore()
    c.fillStyle=FY;c.lineWidth=3;for(const[a,r,s]of[[-1.1,36,1],[-.3,42,.85],[.5,34,.75]]){const sx=hx+r*cos(a)*fl,sy=hy+r*sin(a)*fl-10,z=13*s*fl;c.beginPath();for(let k=0;k<8;k++){const q=k*PI/4,rr=k%2?z*.35:z;c.lineTo(sx+rr*cos(q),sy+rr*sin(q))}c.closePath();c.fill();c.stroke()}}
  else{c.beginPath();c.arc(hx,hy,10,0,T);c.fill();c.stroke();c.beginPath();c.ellipse(hx-4,hy-10,4,7,-.3,0,T);c.fill();c.stroke()}
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}
