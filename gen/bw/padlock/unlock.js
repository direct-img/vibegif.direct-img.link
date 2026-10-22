// key slides into a padlock and turns, the shackle pops up and swings round on its right leg, then it all closes and the key slides out
// the swing is a horizontal squash about the right leg, so the shackle seems to turn in depth
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
export default(c,t)=>{
  const dx=26*(1-ease(t/.16))+26*ease((t-.88)/.12),turn=ease((t-.16)/.12)-ease((t-.76)/.12)
  const up=ease((t-.28)/.1)-ease((t-.68)/.1),sw=2.4*(ease((t-.36)/.14)-ease((t-.54)/.14))
  c.save();c.translate(148,-22*up);c.scale(cos(sw),1);c.translate(-148,0)
  for(const[w,k]of[[34,'#111'],[20,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(72,150),c.lineTo(72,84),c.arc(110,84,38,PI,0),c.lineTo(148,150),c.stroke()
  c.restore()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.roundRect(40,122,140,110,18);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(54,138);c.lineTo(166,138);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(110,170,11,0,T);c.moveTo(104,174);c.lineTo(101,204);c.lineTo(119,204);c.lineTo(116,174);c.fill()
  if(up>.6&&sw<.3)for(const a of[-2.4,-1.9,-1.4])for(const[w,k]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(64+cos(a)*30,108+sin(a)*30),c.lineTo(64+cos(a)*44,108+sin(a)*44),c.stroke()
  const k=max(.3,abs(cos(turn*PI/2)))
  c.save();c.translate(dx,172);c.scale(1,k);c.lineWidth=7;c.strokeStyle='#111';c.fillStyle='#fff'
  c.beginPath();c.roundRect(106,-9,84,18,6);c.fill();c.stroke()
  c.lineWidth=5;for(const x of[136,152])c.beginPath(),c.moveTo(x,-9),c.lineTo(x,9),c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(204,0,24,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(208,0,8,0,T);c.stroke()
  c.restore()
}
