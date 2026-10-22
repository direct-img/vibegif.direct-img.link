// squirrel sitting up nibbling an acorn in its paws, jaw working, crumbs falling, fluffy tail flicking
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t)=>{
  const ny=3*sin(4*T*t),open=sin(4*T*t)>0,tr=.06*sin(T*t)+.03*sin(2*T*t)
  c.save();c.translate(108,206);c.rotate(tr);c.translate(-108,-206)
  c.beginPath();c.moveTo(112,214);c.bezierCurveTo(40,220,20,150,38,104);c.bezierCurveTo(52,60,104,30,136,50)
  c.bezierCurveTo(112,56,88,74,84,104);c.bezierCurveTo(80,144,98,176,124,192);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const[x0,y0,x1,y1,x2,y2]of[[52,118,60,96,76,80],[48,160,56,140,62,128],[94,52,108,46,118,46]])c.beginPath(),c.moveTo(x0,y0),c.quadraticCurveTo(x1,y1,x2,y2),c.stroke()
  c.restore();c.lineWidth=7
  c.beginPath();c.moveTo(146,84);c.quadraticCurveTo(136,50,156,34);c.quadraticCurveTo(172,54,168,80);c.fill();c.stroke()
  const parts=[[134,168,38,48,.2],[118,208,34,28,0],[162,102,32,28,.25],[190,114,17,13,.3]]
  c.lineWidth=14;for(const[x,y,rx,ry,r]of parts)c.beginPath(),c.ellipse(x,y,rx,ry,r,0,T),c.stroke()
  for(const[x,y,rx,ry,r]of parts)c.beginPath(),c.ellipse(x,y,rx,ry,r,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(154,150);c.quadraticCurveTo(160,180,146,206);c.moveTo(96,196);c.quadraticCurveTo(112,184,132,190);c.stroke()
  c.lineWidth=7;c.beginPath();c.ellipse(150,236,22,8,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(168,94,6,8,.2,0,T);c.fill();c.beginPath();c.ellipse(205,110,5,4,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(166,91,2.2,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(176,116,8+(open?2:0),.6*PI,1.6*PI);c.stroke()
  if(open){c.fillStyle='#111';c.beginPath();c.ellipse(197,124,5,4,0,0,T);c.fill();c.fillStyle='#fff';c.fillRect(194,120,6,4)}
  else c.beginPath(),c.moveTo(191,123),c.lineTo(202,121),c.stroke()
  for(const[w,s]of[[9,'#111'],[3,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(204,114);c.lineTo(226,108);c.moveTo(204,118);c.lineTo(224,124);c.stroke()}
  c.strokeStyle='#111';c.fillStyle='#fff'
  const ax=187,ay=150+ny
  c.lineWidth=6;c.beginPath();c.ellipse(ax,ay+6,12,14,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(ax,ay-6,15,9,0,PI,T);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.save();c.beginPath();c.ellipse(ax,ay-6,15,9,0,PI,T);c.clip();for(let k=-3;k<=3;k++)c.beginPath(),c.moveTo(ax+k*7-8,ay-16),c.lineTo(ax+k*7+8,ay),c.moveTo(ax+k*7+8,ay-16),c.lineTo(ax+k*7-8,ay),c.stroke();c.restore()
  c.lineWidth=5;c.beginPath();c.moveTo(ax,ay-15);c.lineTo(ax+3,ay-22);c.stroke()
  for(const[w,s]of[[24,'#111'],[12,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(152,152),c.lineTo(174,158+ny),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;for(const[x,y]of[[174,158],[200,156]])c.beginPath(),c.ellipse(x,y+ny,8,7,0,0,T),c.fill(),c.stroke()
  c.lineWidth=3;for(const k of[0,.5]){const p=(2*t+k)%1;c.beginPath();c.arc(182+k*16+4*sin(p*7),170+p*58,3.5,0,T);c.fill();c.stroke()}
}
