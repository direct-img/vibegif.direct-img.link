// a closed door chained shut with a big padlock, it rattles as someone tries it but the lock just swings and holds
const{sin,cos,PI,min,max,exp,hypot,atan2}=Math,T=2*PI
export const frames=20,delay=70
const chain=(c,x0,y0,x1,y1,j)=>{
  const L=hypot(x1-x0,y1-y0),n=Math.round(L/17),a=atan2(y1-y0,x1-x0)
  for(const odd of[1,0])for(let k=odd;k<=n;k+=2){
    const v=k/n,x=x0+(x1-x0)*v,y=y0+(y1-y0)*v+j*sin(PI*v)
    c.save();c.translate(x,y);c.rotate(a)
    if(odd){c.lineWidth=13;c.beginPath();c.moveTo(-8,0);c.lineTo(8,0);c.stroke()}
    else{c.lineWidth=5;c.beginPath();c.ellipse(0,0,12,8,0,0,T);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
    c.restore()
  }
}
export default(c,t,i)=>{
  const u=t*2%1,sh=u<.3?(i%2?3:-3):0,a=.34*sin(3*T*t)*exp(-2.6*u),j=sh*.7
  if(sh)for(const d of[-1,1])for(const y of[84,112,140])for(const[w,k]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(128+d*(100+(i%2)*3),y),c.lineTo(128+d*(114+(i%2)*3),y-6),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.roundRect(46,12,164,232,[30,30,4,4]);c.fill();c.stroke()
  c.save();c.translate(sh,0)
  c.beginPath();c.roundRect(60,26,136,218,[20,20,2,2]);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.roundRect(76,44,104,64,10);c.roundRect(76,124,104,100,10);c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(176,140,9,0,T);c.fill();c.stroke()
  chain(c,72,52,184,214,j);chain(c,184,52,72,214,-j)
  c.fillStyle='#111';for(const[x,y]of[[72,52],[184,52],[72,214],[184,214]])c.beginPath(),c.arc(x,y,7,0,T),c.fill()
  c.fillStyle='#fff';c.restore()
  c.save();c.translate(128+sh,128);c.rotate(a)
  for(const[w,k]of[[30,'#111'],[16,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(-20,34),c.lineTo(-20,20),c.arc(0,20,20,PI,0),c.lineTo(20,34),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111';c.beginPath();c.roundRect(-36,30,72,58,14);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(0,52,9,0,T);c.moveTo(-5,56);c.lineTo(-8,76);c.lineTo(8,76);c.lineTo(5,56);c.fill()
  c.restore()
}
