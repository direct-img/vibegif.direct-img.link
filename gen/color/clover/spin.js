// four-leaf clover spinning like a pinwheel on its stem with a smiling center, lucky sparkles twinkling around
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=70
const L=['#69db7c','#51cf66'],V='#2f9e44',ST='#40c057',BL='#ffa8a8',SP='#ffd43b'
const CX=128,CY=106
const leaf=c=>{c.beginPath();c.moveTo(0,-4);c.bezierCurveTo(-30,-20,-46,-46,-30,-60);c.bezierCurveTo(-18,-70,-4,-64,0,-52);c.bezierCurveTo(4,-64,18,-70,30,-60);c.bezierCurveTo(46,-46,30,-20,0,-4);c.closePath()}
const spark=(c,x,y,s)=>{c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  // leaves alternate two greens, so half a turn per loop lands every leaf on one of the same color
  for(const[w,s]of[[17,'#111'],[8,ST]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(CX,CY),c.quadraticCurveTo(CX+6,190,CX+30,236),c.stroke()
  c.strokeStyle='#111'
  c.fillStyle=SP;c.lineWidth=4
  for(const[x,y,o]of[[38,52,0],[220,62,.25],[218,178,.5],[40,172,.75]]){const s=11*max(0,sin(PI*((t*2+o)%1)));if(s>1.5)spark(c,x,y,s)}
  c.save();c.translate(CX,CY);c.rotate(t*PI)
  for(let k=0;k<4;k++){
    c.save();c.rotate(k*PI/2);leaf(c);c.fillStyle=L[k%2];c.lineWidth=7;c.fill();c.stroke()
    c.strokeStyle=V;c.lineWidth=4;c.beginPath();c.moveTo(0,-10);c.lineTo(0,-46);c.moveTo(0,-30);c.lineTo(-12,-42);c.moveTo(0,-30);c.lineTo(12,-42);c.stroke();c.strokeStyle='#111'
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(-22,-50,8,PI*1.1,PI*1.6);c.stroke();c.strokeStyle='#111'
    c.restore()
  }
  c.restore()
  for(const[w,s]of[[10,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(CX,CY,92,-PI*.15+t*PI,PI*.15+t*PI),c.stroke(),c.beginPath(),c.arc(CX,CY,92,PI*.85+t*PI,PI*1.15+t*PI),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=L[0];c.beginPath();c.arc(CX,CY,18,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(CX+d*6,CY-3,2.5,3.5,0,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(CX+d*11,CY+4,4,2.5,0,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(CX,CY+2,4,.2*PI,.8*PI);c.stroke()
}
