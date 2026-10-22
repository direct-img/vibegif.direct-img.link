// seal balancing a ball on its nose, the ball rolling side to side while its flippers clap
const{sin,cos,PI,atan2}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t)=>{
  const bx=11*sin(t*T),cl=(1-cos(2*T*t))/2,ph=.15+1.75*cl
  const flip=(px,py,L)=>{const dx=sin(ph),dy=cos(ph);c.beginPath();c.ellipse(px+dx*L/2,py+dy*L/2,10,L/2+4,atan2(dy,dx)-PI/2,0,T);c.fill();c.stroke()}
  for(const[x,y,r]of[[50,212,-.9],[44,234,-.3]])c.beginPath(),c.ellipse(x,y,22,10,r,0,T),c.fill(),c.stroke()
  flip(150,166,40)
  const parts=[[112,196,66,40,-.35],[148,150,26,38,-.35],[158,112,30,26,-.95],[180,88,17,12,-.95]]
  c.lineWidth=14;for(const[x,y,rx,ry,r]of parts)c.beginPath(),c.ellipse(x,y,rx,ry,r,0,T),c.stroke()
  for(const[x,y,rx,ry,r]of parts)c.beginPath(),c.ellipse(x,y,rx,ry,r,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(150,186);c.quadraticCurveTo(130,226,74,222);c.stroke()
  c.fillStyle='#111';for(const[x,y]of[[96,176],[84,190],[104,194]])c.beginPath(),c.arc(x,y,3.5,0,T),c.fill()
  c.beginPath();c.ellipse(164,104,6,8,-.3,0,T);c.fill();c.beginPath();c.ellipse(189,76,6,5,-.95,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(162,101,2.2,0,T);c.fill()
  c.fillStyle='#111';for(const[x,y]of[[176,92],[182,96],[172,98]])c.beginPath(),c.arc(x,y,1.8,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(178,104);c.quadraticCurveTo(186,102,192,94);c.stroke()
  c.lineWidth=7;c.fillStyle='#fff';flip(136,174,46)
  if(cl>.8)for(const a of[-.6,0,.6])for(const[l,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(196+cos(a)*14,156+sin(a)*14),c.lineTo(196+cos(a)*26,156+sin(a)*26),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  const x=190+bx,y=50+bx*bx/60
  c.beginPath();c.arc(x,y,26,0,T);c.fill();c.stroke()
  c.save();c.translate(x,y);c.rotate(bx/26);c.fillStyle='#111'
  c.beginPath();c.arc(0,0,23,0,T);c.clip();c.beginPath();c.ellipse(0,0,9,30,0,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.ellipse(0,0,19,30,0,0,T);c.stroke();c.restore()
}
