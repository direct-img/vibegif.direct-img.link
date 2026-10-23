// ferris wheel slowly turning, its candy-colored gondolas hanging upright, a smiling hub
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=100
const G=['#ff6b6b','#ffd43b','#4dabf7','#69db7c'],RIM='#b197fc',LEG='#f783ac',BASE='#a9744f',HUB='#ffd43b',BL='#ffa8a8'
const CX=128,CY=104,R=78
export default(c,t)=>{
  // turning by half a revolution per loop lines gondola k up with gondola k+4, which has the same color
  const a0=t*PI
  for(const[w,s]of[[16,'#111'],[8,LEG]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(72,232),c.lineTo(CX,CY),c.lineTo(184,232),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=BASE;c.beginPath();c.roundRect(44,226,168,16,8);c.fill();c.stroke()
  for(let k=0;k<8;k++){const a=a0+k*PI/4;for(const[w,s]of[[9,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(CX,CY),c.lineTo(CX+R*cos(a),CY+R*sin(a)),c.stroke()}
  for(const[w,s]of[[16,'#111'],[8,RIM]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(CX,CY,R,0,T),c.stroke()
  c.strokeStyle='#111'
  for(let k=0;k<8;k++){
    const a=a0+k*PI/4,x=CX+R*cos(a),y=CY+R*sin(a)
    c.save();c.translate(x,y)
    c.lineWidth=4;c.beginPath();c.moveTo(0,0);c.lineTo(0,9);c.stroke()
    c.lineWidth=5;c.fillStyle=G[k%4];c.beginPath();c.roundRect(-14,8,28,22,7);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.roundRect(-9,13,18,8,3);c.fill();c.lineWidth=3;c.stroke()
    c.restore()
  }
  c.lineWidth=6;c.fillStyle=HUB;c.beginPath();c.arc(CX,CY,17,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(CX+d*6,CY-3,2.5,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(CX+d*10,CY+4,3.5,2.5,0,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(CX,CY+2,4,.2*PI,.8*PI);c.stroke()
}
