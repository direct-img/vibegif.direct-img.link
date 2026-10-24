// glass cookie jar with nothing but crumbs at the bottom, its lid rattling and hopping, the jar peering down sadly
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=70
const GL='#e7f5ff',GS='#a5d8ff',LD='#ff8787',LK='#ffd43b',CR='#e0a96d',CH='#8b5a3c',BL='#ffa8a8'
const CB=[[84,224,8],[104,229,6],[122,225,9],[146,229,6],[164,224,8],[182,229,5],[134,231,4],[94,231,4]]
const body=c=>{c.beginPath();c.moveTo(74,96);c.quadraticCurveTo(48,100,48,132);c.lineTo(48,208);c.quadraticCurveTo(48,236,76,236);c.lineTo(180,236);c.quadraticCurveTo(208,236,208,208);c.lineTo(208,132);c.quadraticCurveTo(208,100,182,96);c.closePath()}
export default(c,t,i)=>{
  const h=abs(sin(t*T*2)),ly=-14*h,lr=.13*sin(t*T*6)*h,sh=(i%2?1.5:-1.5)*h
  c.translate(sh,0)
  body(c);c.fillStyle=GL;c.fill()
  CB.forEach(([x,y,r],k)=>{const dy=-4*h*abs(sin(k*1.7+t*T*4));c.save();c.translate(x,y+dy);c.rotate(k+dy/4);c.fillStyle=CR;c.lineWidth=3;c.beginPath();for(let n=0;n<6;n++){const a=n*T/6,q=r*(n%2?.75:1);c.lineTo(cos(a)*q,sin(a)*q)}c.closePath();c.fill();c.stroke();if(r>6)c.fillStyle=CH,c.beginPath(),c.arc(1,-1,2,0,T),c.fill();c.restore()})
  c.lineWidth=7;body(c);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=8;c.beginPath();c.moveTo(66,128);c.lineTo(66,196);c.stroke();c.lineWidth=6;c.beginPath();c.moveTo(66,210);c.lineTo(66,214);c.stroke()
  c.strokeStyle='#111';c.fillStyle=GS;c.lineWidth=6;c.beginPath();c.roundRect(68,78,120,22,8);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24,146,6.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(126+d*24,148,2.2,0,T),c.fill()
  c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,128),c.lineTo(128+d*32,133),c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(128,176,11,1.2*PI,1.8*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,8,5,0,0,T),c.fill()
  c.save();c.translate(128,70+ly);c.rotate(lr)
  c.fillStyle=LD;c.lineWidth=7;c.beginPath();c.roundRect(-16,-38,32,22,10);c.fill();c.stroke()
  c.beginPath();c.roundRect(-70,-22,140,30,13);c.fill();c.stroke()
  c.fillStyle=LK;c.lineWidth=4;c.beginPath();c.arc(0,-28,4.5,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-54,-12);c.lineTo(-30,-12);c.stroke();c.restore()
  if(h>.5)for(const d of[-1,1])for(const[w,s]of[[10,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*82,56+ly),c.lineTo(128+d*96,48+ly),c.moveTo(128+d*84,70+ly),c.lineTo(128+d*100,70+ly),c.stroke()
}
