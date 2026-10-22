// hot dog getting a zigzag of mustard squirted along it as the bottle slides across, then the line wipes off for the loop
// the black sausage gets a white rim so it shows on dark backgrounds
const{sin,PI,min,max,abs}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const zy=x=>149+8*sin((x-50)/156*T*5)
export default(c,t)=>{
  const sq=t<.6,head=50+156*ease(t/.6),tail=50+156*ease((t-.78)/.22),bx=t<.78?head:206-156*ease((t-.78)/.22),by=118-(t>=.78?34*sin(PI*min(1,(t-.78)/.22)):0)
  c.beginPath();c.moveTo(34,160);c.quadraticCurveTo(34,124,80,122);c.lineTo(176,122);c.quadraticCurveTo(222,124,222,160);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(16,130,224,38,19);c.lineWidth=16;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;for(const[x0,x1]of[[30,44],[212,226]])c.beginPath(),c.moveTo(x0,140),c.lineTo(x1,138),c.stroke()
  if(head-tail>1)for(const[w,s]of[[12,'#111'],[6,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(let x=tail;x<=head;x+=2)c.lineTo(x,zy(x));c.stroke()}
  c.lineWidth=7;c.strokeStyle='#111';c.fillStyle='#fff'
  c.beginPath();c.moveTo(30,160);c.quadraticCurveTo(128,172,226,160);c.quadraticCurveTo(226,206,180,206);c.lineTo(76,206);c.quadraticCurveTo(30,206,30,160);c.fill();c.stroke()
  const happy=t>=.6&&t<.78
  c.fillStyle='#111'
  if(happy){c.lineWidth=5;for(const x of[106,150])c.beginPath(),c.arc(x,186,7,PI*1.15,PI*1.85),c.stroke()}
  else{for(const x of[106,150])c.beginPath(),c.ellipse(x,184,5,6.5,0,0,T),c.fill();c.fillStyle='#fff';for(const x of[104,148])c.beginPath(),c.arc(x,182,2,0,T),c.fill()}
  c.lineWidth=4.5;c.beginPath();c.arc(128,190,8,.15*PI,.85*PI);c.stroke()
  c.lineWidth=3;for(const x of[86,170])for(const o of[-5,0,5])c.beginPath(),c.moveTo(x+o-2,198),c.lineTo(x+o+2,191),c.stroke()
  c.lineWidth=7;c.fillStyle='#fff'
  if(sq&&t>.02)for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(bx,by),c.lineTo(bx,zy(bx)-2),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  const k=sq?1-.1*abs(sin(10*T*t)):1
  c.save();c.translate(bx,by);c.rotate(t>=.78?-.4*sin(PI*min(1,(t-.78)/.22)):0)
  c.beginPath();c.moveTo(-5,0);c.lineTo(-12,-24);c.lineTo(12,-24);c.lineTo(5,0);c.closePath();c.fill();c.stroke()
  c.scale(k,1);c.beginPath();c.roundRect(-22,-92,44,70,12);c.fill();c.stroke()
  c.lineWidth=4;for(const y of[-66,-48])c.beginPath(),c.moveTo(-12,y),c.lineTo(12,y),c.stroke()
  c.restore()
}
