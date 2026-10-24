// chibi girl with a red ponytail and sweatband sprinting in place on a striped progress bar that rolls under her feet like a treadmill
const{sin,cos,PI,max,min,sqrt,round,abs}=Math,T=2*PI
export const frames=12,delay=60
const SKIN='#ffe3d1',HAIR='#ff6b6b',HD='#e03131',HL='#ffc9c9',EYE='#20c997',ED='#087f5b',TEE='#fff',SHO='#4dabf7',SHD='#1c7ed6',SHOE='#f783ac',BAR='#e7f5ff',ST='#69db7c',SD='#40c057',BL='#ffa8a8',SW='#a5d8ff',Z=.8
const knee=(hx,hy,fx,fy,l)=>{let vx=fx-hx,vy=fy-hy,d=sqrt(vx*vx+vy*vy);if(d>2*l-.5){const k=(2*l-.5)/d;vx*=k;vy*=k;d=2*l-.5}const h=sqrt(l*l-d*d/4);return[hx+vx/2+vy/d*h,hy+vy/2-vx/d*h,hx+vx,hy+vy]}
const dbl=(c,w,col,pts)=>{for(const[lw,s]of[[w,'#111'],[w-9,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();c.moveTo(...pts[0]);for(const p of pts.slice(1))c.lineTo(...p);c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  const a=t*T,b=round(-6*abs(sin(a))),fl=k=>5*sin(2*a+k)
  c.lineWidth=6;c.fillStyle=BAR;c.beginPath();c.roundRect(12,200,232,44,22);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(22,209,212,26,13);c.clip();c.fillStyle=ST;c.fillRect(0,0,256,256)
  c.fillStyle=SD;const o=-(t*2%1)*28;for(let x=o;x<260;x+=28)c.beginPath(),c.moveTo(x,236),c.lineTo(x+14,236),c.lineTo(x+28,208),c.lineTo(x+14,208),c.closePath(),c.fill()
  c.restore();c.lineWidth=4;c.beginPath();c.roundRect(22,209,212,26,13);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(34,215);c.lineTo(70,215);c.stroke();c.strokeStyle='#111'
  for(const[y,o,l]of[[70,0,40],[112,.5,56],[150,.25,34]]){const p=(t*2+o)%1,x=46-50*p,w=l*min(1,(1-p)*2.5);if(w>4)dbl(c,13,'#fff',[[x,y],[x-w,y]])}
  c.save();c.translate(128,200);c.scale(Z,Z);c.translate(-118,-238)
  const hip=[118,192+b],sh=[122,150+b]
  const leg=(ph,front)=>{const s=sin(a+ph),cc=cos(a+ph),[kx,ky,fx,fy]=knee(hip[0],hip[1],hip[0]+34*s,236-26*max(0,cc),28)
    dbl(c,22,SKIN,[hip,[kx,ky],[fx,fy-4]]);dbl(c,21,'#fff',[[fx+(kx-fx)*.2,fy+(ky-fy)*.2],[fx,fy-5]])
    c.fillStyle=front?SHOE:'#e64980';c.lineWidth=5;c.beginPath();c.ellipse(fx+6,fy-3,14,8,s*.25,0,T);c.fill();c.stroke()}
  const arm=ph=>{const al=-1*sin(a+ph),ex=sh[0]+22*sin(al),ey=sh[1]+22*cos(al),hx=ex+20*sin(al+1.8),hy=ey+20*cos(al+1.8)
    dbl(c,22,SKIN,[[sh[0],sh[1]+6],[ex,ey],[hx,hy]]);dbl(c,24,TEE,[sh,[sh[0]+8*sin(al),sh[1]+8*cos(al)+4]])
    c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(hx,hy,9,0,T);c.fill();c.stroke()}
  leg(PI,0);arm(PI)
  c.save();c.translate(132,80+b);c.scale(1.02,1.02)
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-26,-50);c.bezierCurveTo(-70,-70,-96,-40,-112,-16+fl(0));c.quadraticCurveTo(-96,-24,-88,-20);c.quadraticCurveTo(-100,-4,-106,14+fl(1));c.quadraticCurveTo(-76,0,-52,-16);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=4;c.beginPath();c.moveTo(-44,-50);c.quadraticCurveTo(-70,-54,-90,-34+fl(0)*.6);c.stroke();c.strokeStyle='#111'
  c.fillStyle=HD;c.lineWidth=6;c.beginPath();c.moveTo(10,-62);c.bezierCurveTo(-40,-66,-62,-40,-58,0);c.quadraticCurveTo(-54,40,-30,52);c.lineTo(20,40);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(-30,-48,9,0,T);c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle=SHO;c.beginPath();c.moveTo(98,174+b);c.lineTo(146,174+b);c.lineTo(150,200+b);c.lineTo(122,204+b);c.lineTo(94,200+b);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(99,190+b);c.lineTo(147,190+b);c.stroke();c.strokeStyle='#111'
  c.fillStyle=TEE;c.beginPath();c.moveTo(102,140+b);c.quadraticCurveTo(92,160,96,180+b);c.lineTo(148,180+b);c.quadraticCurveTo(152,158,144,140+b);c.closePath();c.fill();c.stroke()
  c.fillStyle=SHD;c.lineWidth=4;c.beginPath();c.moveTo(116,152+b);c.lineTo(122,146+b);c.lineTo(128,152+b);c.lineTo(134,146+b);c.stroke()
  leg(0,1)
  c.save();c.translate(132,80+b);c.scale(1.02,1.02)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(-6,46);c.lineTo(-6,62);c.lineTo(10,62);c.lineTo(10,46);c.fill()
  c.beginPath();c.moveTo(-42,-6);c.bezierCurveTo(-42,40,-4,60,22,60);c.bezierCurveTo(44,58,58,30,58,-6);c.bezierCurveTo(58,-60,-42,-60,-42,-6);c.fill();c.stroke()
  for(const[x,rx]of[[4,12],[42,9]]){
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,10,rx,15,0,0,T);c.fill()
    c.save();c.beginPath();c.ellipse(x,10,rx,15,0,0,T);c.clip();c.beginPath();c.ellipse(x+rx*.3,12,rx*.8,13,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke();c.fillStyle=ED;c.beginPath();c.ellipse(x+2,4,rx,8,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+rx*.35,13,rx*.38,6,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-1,6,3.5,0,T);c.fill();c.restore()
    c.lineWidth=5.5;c.beginPath();c.moveTo(x-rx-2,-2);c.quadraticCurveTo(x,-10,x+rx+2,-2);c.stroke()
  }
  c.fillStyle=BL;c.beginPath();c.ellipse(-16,32,10,5,0,0,T);c.fill()
  c.fillStyle='#c92a2a';c.lineWidth=3.5;c.beginPath();c.moveTo(22,38);c.quadraticCurveTo(30,36,36,40);c.quadraticCurveTo(32,52,24,48);c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-46,14)
  c.bezierCurveTo(-56,-40,-26,-66,10,-66);c.bezierCurveTo(46,-66,68,-40,62,-4)
  c.lineTo(54,-10);c.lineTo(52,-2);c.lineTo(42,-14);c.lineTo(36,-4);c.lineTo(26,-18);c.lineTo(18,-6);c.lineTo(8,-20);c.lineTo(-2,-8)
  c.lineTo(-12,-20);c.lineTo(-22,-6);c.lineTo(-30,-14);c.lineTo(-36,4);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[s,e]of[[1.2,1.32],[1.4,1.48],[1.58,1.7]])c.beginPath(),c.arc(10,-12,46,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-50,-30);c.quadraticCurveTo(10,-56,66,-26);c.lineTo(64,-14);c.quadraticCurveTo(10,-44,-50,-18);c.closePath();c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.roundRect(20,-42,12,11,3);c.fill();c.stroke()
  const p=(t*2)%1;c.fillStyle=SW;c.lineWidth=3.5;c.save();c.translate(-54-30*p,-36-16*p);c.rotate(-.9);c.scale(1-p*.5,1-p*.5);c.beginPath();c.moveTo(0,-10);c.quadraticCurveTo(8,2,0,6);c.quadraticCurveTo(-8,2,0,-10);c.fill();c.stroke();c.restore()
  c.restore()
  arm(0)
  c.restore()
}
