// rocket blasting along with its flame flickering, body rattling and speed lines streaking past
const{sin,PI}=Math,T=2*PI
export const frames=16,delay=50
export default(c,t,i)=>{
  for(const[x,len,o]of[[34,46,0],[66,30,.5],[196,38,.25],[226,52,.75]]){
    const y=((t*2+o)%1)*(256+len*2)-len*2
    for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(x,y+len),c.stroke()
  }
  c.lineWidth=7;c.strokeStyle='#111'
  c.translate(i%2?2:-2,0)
  const h=44+10*sin(2*T*t)+6*sin(5*T*t)
  c.beginPath();c.moveTo(108,178);c.quadraticCurveTo(110,178+h*.7,128,178+h);c.quadraticCurveTo(146,178+h*.7,148,178);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(118,182);c.quadraticCurveTo(120,180+h*.45,128,180+h*.6);c.quadraticCurveTo(136,180+h*.45,138,182);c.closePath();c.fill();c.fillStyle='#fff'
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*30,128),c.quadraticCurveTo(128+d*56,150,128+d*58,186),c.lineTo(128+d*30,172),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.roundRect(110,166,36,16,4);c.fill();c.stroke()
  c.beginPath();c.moveTo(128,28);c.bezierCurveTo(162,52,162,96,160,170);c.lineTo(96,170);c.bezierCurveTo(94,96,94,52,128,28);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(106,62);c.quadraticCurveTo(128,70,150,62);c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(128,106,19,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(128,106,11,PI*1.1,PI*1.6);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(128,140);c.lineTo(128,166);c.stroke()
}
