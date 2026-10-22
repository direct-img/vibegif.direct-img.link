// round apple tree leaning in the wind, leaves blowing off and tumbling away to the side
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const LF='#51cf66',LD='#2f9e44',TR='#a9744f',AP='#fa5252',GR='#8ce99a'
const leaf=(c,x,y,a,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(-12,0);c.quadraticCurveTo(0,-10,12,0);c.quadraticCurveTo(0,10,-12,0);c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const w=.07*sin(t*T)+.03
  c.fillStyle=GR;c.beginPath();c.ellipse(128,236,90,12,0,0,T);c.fill();c.stroke()
  c.fillStyle=TR;c.beginPath();c.moveTo(112,236);c.quadraticCurveTo(118,180,114,140);c.lineTo(142,140);c.quadraticCurveTo(138,180,146,236);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(124,200);c.quadraticCurveTo(128,186,124,172);c.stroke();c.lineWidth=7
  c.save();c.translate(128,150);c.rotate(w);c.translate(-128,-150)
  const P=[[128,72,52],[84,102,40],[172,102,40],[104,132,38],[152,132,38],[128,112,46]]
  c.lineWidth=14;for(const[x,y,r]of P)c.beginPath(),c.arc(x,y,r,0,T),c.stroke()
  c.fillStyle=LF;for(const[x,y,r]of P)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.lineWidth=5;c.strokeStyle=LD;for(const[x,y]of[[96,80],[150,66],[176,116],[110,140]])c.beginPath(),c.arc(x,y,12,PI*1.1,PI*1.6),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5
  c.fillStyle=AP;for(const[x,y]of[[98,104],[150,94],[168,138],[118,62],[130,140]])c.beginPath(),c.arc(x,y,9,0,T),c.fill(),c.stroke()
  c.restore();c.lineWidth=5;c.fillStyle=LF
  for(const[y0,o,sp]of[[70,0,1],[110,.33,1],[150,.66,1]]){const p=(t*sp+o)%1;leaf(c,150+p*140,y0+30*sin(p*T*1.5)+p*30,p*T*2,.9)}
}
