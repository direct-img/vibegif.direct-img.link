// sleepy candle in a little holder, its flame flickering and leaning while glow lines pulse around it
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80
export default(c,t)=>{
  const L=9*sin(T*t)+4*sin(3*T*t+1),H=1+.1*sin(2*T*t+.5),g=.5+.5*sin(2*T*t)
  for(const[w,s]of[[25,'#111'],[11,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(200,206,15,-PI*.7,PI*.6),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.ellipse(128,218,80,16,0,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(94,122);c.lineTo(94,214);c.quadraticCurveTo(128,226,162,214);c.lineTo(162,122);c.fill();c.stroke()
  c.beginPath();c.ellipse(128,122,34,9,0,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(140,128);c.lineTo(140,160);c.arc(146,160,6,PI,0,true);c.lineTo(152,130);c.fill();c.lineWidth=6;c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*16,168,4,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,174,8,.2*PI,.8*PI);c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(128+d*16,166,8,1.15*PI,1.85*PI),c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(128,118);c.lineTo(128,104);c.stroke()
  const tx=128+L,ty=98-62*H
  for(const a of[-2.6,-2,-1.15,-.55])for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+cos(a)*(46+4*g),74+sin(a)*(46+4*g)),c.lineTo(128+cos(a)*(58+8*g),74+sin(a)*(58+8*g)),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111';c.fillStyle='#fff'
  const fl=(s,b)=>{c.beginPath();c.moveTo(128+L*s,98-(98-ty)*s);c.quadraticCurveTo(128+18*s+L*.3,70+28*(1-s),128+16*s,98);c.arc(128,98,16*s,0,PI);c.quadraticCurveTo(128-18*s+L*.3,70+28*(1-s),128+L*s,98-(98-ty)*s)}
  fl(1);c.fill();c.stroke()
  c.fillStyle='#111';fl(.5);c.fill();c.fillStyle='#fff'
}
