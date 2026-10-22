// hamster running flat out in a spinning wheel
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=50
const RIM='#4dabf7',ST='#adb5bd',HB='#ffc078',BE='#fff4e6',PK='#faa2c1'
export default(c,t)=>{
  const rot=t*T/4,b=2*sin(4*T*t)
  for(const d of[-1,1])c.beginPath(),c.moveTo(128,128),c.lineTo(128+d*52,236),c.lineWidth=12,c.stroke(),c.lineWidth=7
  c.fillStyle=ST;c.beginPath();c.roundRect(60,228,136,14,7);c.fill();c.stroke()
  for(const[w,st]of[[8,'#111'],[3,'#dee2e6']]){c.lineWidth=w;c.strokeStyle=st;c.beginPath();for(let k=0;k<8;k++){const a=rot+k*PI/4;c.moveTo(128,128);c.lineTo(128+cos(a)*90,128+sin(a)*90)}c.stroke()}
  c.strokeStyle='#111'
  c.lineWidth=7;c.beginPath();c.arc(128,128,100,0,T);c.arc(128,128,88,0,T,true);c.fillStyle=RIM;c.fill('evenodd')
  c.beginPath();c.arc(128,128,100,0,T);c.stroke();c.beginPath();c.arc(128,128,88,0,T);c.stroke()
  c.lineWidth=4;for(let k=0;k<24;k++){const a=rot+k*T/24;c.beginPath();c.moveTo(128+cos(a)*88,128+sin(a)*88);c.lineTo(128+cos(a)*100,128+sin(a)*100);c.stroke()}
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(128,128,10,0,T);c.fill();c.stroke();c.lineWidth=7
  const hy=180+b
  c.save();c.translate(128,200);c.scale(1.25,1.25);c.translate(-128,-200)
  for(let k=0;k<4;k++){const a=-4*T*t+k*PI/2+(k>1?PI/4:0),lx=(k<2?106:146)+cos(a)*7,ly=hy+26+sin(a)*5;c.fillStyle=PK;c.beginPath();c.ellipse(lx,ly,8,6,0,0,T);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7}
  c.fillStyle=HB;c.beginPath();c.arc(108,hy-26,9,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(84,hy+4);c.lineTo(76,hy);c.stroke()
  c.beginPath();c.ellipse(128,hy,48,30,0,0,T);c.fill();c.stroke()
  c.fillStyle=BE;c.beginPath();c.ellipse(140,hy+12,26,15,0,0,T);c.fill()
  c.fillStyle=PK;c.beginPath();c.arc(124,hy-24,4,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.arc(156,hy-10,5,0,T);c.fill();c.beginPath();c.arc(176,hy-2,3.5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(154,hy-12,1.8,0,T);c.fill()
  c.fillStyle=PK;c.beginPath();c.ellipse(158,hy+4,7,4,0,0,T);c.fill()
  c.restore()
  for(const k of[0,1,2])for(const[w,st]of[[9,'#111'],[3,'#fff']]){const x=62-k*6;c.lineWidth=w;c.strokeStyle=st;c.beginPath();c.moveTo(x,hy-12+k*12);c.lineTo(x-14,hy-12+k*12);c.stroke()}
  c.strokeStyle='#111'
}
