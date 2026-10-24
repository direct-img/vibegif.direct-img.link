// folder flap swings open showing nothing inside, a little moth flutters out and flies off, then the flap closes
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=24,delay=70
const cl=u=>min(1,max(0,u)),ease=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2)
const moth=(c,f)=>{
  for(const d of[-1,1]){
    for(const[w,s]of[[11,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(d*3,-14);c.quadraticCurveTo(d*6,-26,d*16,-31);for(const k of[0,1,2]){const x=d*(6+k*4),y=-22-k*3.5;c.moveTo(x,y);c.lineTo(x+d*5,y+4)}c.stroke()}
    c.strokeStyle='#111';c.lineWidth=5
    c.save();c.scale(d*f,1)
    c.beginPath();c.moveTo(4,2);c.quadraticCurveTo(30,4,26,22);c.quadraticCurveTo(12,26,4,12);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(4,-8);c.lineTo(48,-20);c.quadraticCurveTo(48,2,8,6);c.closePath();c.fill();c.stroke()
    c.fillStyle='#bbb';c.beginPath();c.arc(30,-9,5,0,T);c.fill();c.fillStyle='#fff'
    c.lineWidth=3.5;c.beginPath();c.moveTo(14,-2);c.lineTo(40,-12);c.stroke()
    c.restore()
  }
  c.lineWidth=5;c.beginPath();c.ellipse(0,2,8,18,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(0,-11,9,0,T);c.fill();c.stroke()
  c.lineWidth=3.5;for(const y of[6,13])c.beginPath(),c.moveTo(-6,y),c.lineTo(6,y),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*3.5,-12,2.3,0,T),c.fill()
}
export default(c,t)=>{
  const o=ease((t-.04)/.16)-ease((t-.84)/.12),u=(t-.2)/.6
  c.beginPath();c.roundRect(32,56,80,34,11);c.fill();c.stroke()
  c.beginPath();c.roundRect(32,74,192,150,12);c.fill();c.stroke()
  if(o>0)c.fillStyle='#ddd',c.beginPath(),c.roundRect(40,84,176,136,8),c.fill(),c.fillStyle='#fff'
  const mo=()=>{if(u>0&&u<1){const s=cl(u/.1)*(1-.45*u)*(u>.9?1-(u-.9)/.1:1),x=128+34*sin(u*T*1.5)+40*u,y=150-112*u**.9
    c.save();c.translate(x,y);c.rotate(.25*sin(u*T*1.5+1));c.scale(s*1.25,s*1.25);moth(c,.3+.7*abs(cos(T*t*5)));c.restore();c.lineWidth=7}}
  if(u<.12)mo()
  const fy=1-.36*o
  c.save();c.translate(128,224);c.transform(1,0,-.12*o,fy,0,0)
  c.beginPath();c.roundRect(-96,-128,192,128,12);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),o>.5?c.ellipse(d*26,-68,7,9,0,0,T):c.ellipse(d*26,-64,7,7,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();o>.5?c.ellipse(0,-46,7,8,0,0,T):c.arc(0,-52,9,.15*PI,.85*PI);c.stroke()
  c.restore()
  if(u>=.12)mo()
}
