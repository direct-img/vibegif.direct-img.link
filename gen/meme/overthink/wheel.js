// pink brain sprinting flat out in a hamster wheel under the moon, wide eyed and sweating, question marks popping off it
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=12,delay=80,rim=5
const PK='#faa2c1',PD='#e64980',MT='#ced4da',MD='#868e96',SW='#74c0fc',MN='#ffe066'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const CL=[[-26,-6,20],[-6,-16,22],[18,-12,21],[30,6,17],[-30,12,16],[-10,10,20],[14,12,19]]
const qm=(c,x,y,s,a)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  for(const[w,st]of[[13,'#111'],[6,'#fff']]){c.lineWidth=w;c.strokeStyle=st;c.beginPath();c.arc(0,-8,8,-PI*.95,PI*.35);c.lineTo(0,6);c.moveTo(0,15);c.lineTo(0,15);c.stroke()}
  c.restore();c.strokeStyle='#111'}
export default(c,t)=>{
  const rot=t*T/3,ph=t*T*3,bob=abs(sin(ph))*-6,X=126,Y=158+bob
  // moon + stars
  c.fillStyle=MN;c.lineWidth=5;c.beginPath();c.arc(34,34,22,.6,-2.4+T,false);c.arc(46,24,18,-2.1+T,1.05,true);c.closePath();c.fill();c.stroke()
  for(const[x,y,s]of[[226,24,7],[206,48,5],[70,14,4]]){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.35:s,a=k*PI/4;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath();c.fill();c.stroke()}
  // stand back leg
  c.lineWidth=12;c.strokeStyle='#111';c.beginPath();c.moveTo(128,128);c.lineTo(62,240);c.moveTo(128,128);c.lineTo(194,240);c.stroke()
  c.lineWidth=5;c.strokeStyle=MD;c.stroke();c.strokeStyle='#111'
  // wheel: spokes turning, rim
  c.lineWidth=5;c.beginPath();for(let k=0;k<6;k++){const a=rot+k*PI/3;c.moveTo(128+cos(a)*12,128+sin(a)*12);c.lineTo(128+cos(a)*86,128+sin(a)*86)}c.stroke()
  for(const r of[86,104]){for(const[w,s]of[[11,'#111'],[4,MT]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,128,r,0,T),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=MT;c.beginPath();c.arc(128,128,13,0,T);c.fill();c.stroke()
  // legs: feet planted on the wheel floor, pushing backwards
  for(const o of[0,PI]){const a=ph+o,hx=X+(o?-8:8),fx=X+(o?-8:8)+18*cos(a),fy=210-max(0,sin(a))*14
    c.lineWidth=6;c.beginPath();c.moveTo(hx,Y+20);c.lineTo((hx+fx)/2+6,(Y+20+fy)/2);c.lineTo(fx,fy);c.stroke()
    c.fillStyle=o?'#ff6b6b':'#fa5252';c.lineWidth=4.5;c.beginPath();c.ellipse(fx+5,fy+1,10,6,0,0,T);c.fill();c.stroke()}
  // brain
  c.save();c.translate(X,Y);c.rotate(.12)
  c.lineWidth=14;for(const[x,y,r]of CL)c.beginPath(),c.arc(x,y,r,0,T),c.stroke()
  c.fillStyle=PK;for(const[x,y,r]of CL)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.strokeStyle=PD;c.lineWidth=4;c.beginPath();c.moveTo(4,-34);c.bezierCurveTo(-4,-22,10,-14,2,-4)
  c.moveTo(-30,-14);c.quadraticCurveTo(-22,-20,-18,-10);c.moveTo(22,-24);c.quadraticCurveTo(30,-16,24,-8);c.moveTo(34,14);c.quadraticCurveTo(28,20,36,26);c.moveTo(-36,20);c.quadraticCurveTo(-28,22,-26,30);c.stroke()
  c.strokeStyle='#111'
  for(const d of[-1,1]){const x=6+d*14,y=6
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(x,y,10,12,0,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x+3,y,3.4,0,T);c.fill()}
  c.fillStyle='#c92a2a';c.lineWidth=4;c.beginPath();c.ellipse(10,28,6,4+2*abs(sin(ph)),0,0,T);c.fill();c.stroke()
  c.restore()
  // sweat flying off the back
  for(let k=0;k<3;k++){const p=(t*3+k/3)%1,x=X-34-p*44,y=Y-28-p*30+p*p*60,z=1-p*.7;if(p<.85)c.fillStyle=SW,c.lineWidth=3.5,c.beginPath(),c.moveTo(x,y-8*z),c.quadraticCurveTo(x+6*z,y,x,y+4*z),c.quadraticCurveTo(x-6*z,y,x,y-8*z),c.fill(),c.stroke()}
  // ?s popping off the top
  for(let k=0;k<2;k++){const p=(t*2+k/2)%1,s=ez(p,0,.15)*(1-ez(p,.75,1));if(s>.05)qm(c,X+(k?24:-8)+p*10*(k?1:-1),Y-56-p*30,s,(k?.25:-.2))}
  // front leg of stand
  c.lineWidth=12;c.beginPath();c.moveTo(40,240);c.lineTo(216,240);c.stroke();c.lineWidth=5;c.strokeStyle=MD;c.stroke();c.strokeStyle='#111'
}
