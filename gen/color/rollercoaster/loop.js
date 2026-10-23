// coaster car with a cheering rider racing around a loop-the-loop on a track held up by striped supports
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const RA='#ff6b6b',SU='#4dabf7',CA='#ffd43b',CD='#fab005',SKIN='#ffd8a8',HAIR='#a9744f',GR='#69db7c',BL='#ffa8a8'
const CX=128,CY=106,R=68,Y0=CY+R,X0=-44,X1=300,L1=CX-X0,L2=T*R,L3=X1-CX
// position and heading along the track by distance: in from the left, once round the loop, out to the right
const at=s=>s<L1?[X0+s,Y0,0]:s<L1+L2?(a=>[CX+R*cos(a),CY+R*sin(a),PI/2-a])(PI/2-(s-L1)/R):[CX+s-L1-L2,Y0,0]
export default(c,t)=>{
  c.fillStyle=GR;c.beginPath();c.roundRect(10,230,236,14,7);c.fill();c.stroke()
  for(const[x,y]of[[30,Y0],[CX-46,CY+50],[CX,Y0],[CX+46,CY+50],[226,Y0]]){for(const[w,s]of[[13,'#111'],[5,SU]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(x,231),c.stroke()}
  for(const[w,s]of[[15,'#111'],[7,RA]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.arc(CX,CY,R,0,T);c.stroke();c.beginPath();c.moveTo(4,Y0);c.lineTo(252,Y0);c.stroke()}
  c.strokeStyle='#111'
  const[x,y,a]=at((t*(L1+L2+L3)+90)%(L1+L2+L3))
  c.save();c.translate(x,y);c.rotate(-a)
  for(const[w,s]of[[9,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-30,-14),c.lineTo(-46,-14),c.moveTo(-30,-24),c.lineTo(-42,-24),c.stroke()
  c.strokeStyle='#111'
  for(const[w,s]of[[9,'#111'],[4,SKIN]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-10,-34),c.lineTo(-18,-50),c.moveTo(2,-34),c.lineTo(8,-50),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5
  c.fillStyle=HAIR;c.beginPath();c.arc(-4,-38,10,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.arc(-3,-36,8,0,PI);c.fill()
  c.lineWidth=6;c.fillStyle=CA;c.beginPath();c.roundRect(-24,-30,48,22,7);c.fill();c.stroke()
  c.fillStyle=CD;c.beginPath();c.roundRect(-24,-14,48,6,3);c.fill()
  c.fillStyle='#111';c.beginPath();c.arc(12,-21,3,0,T);c.fill()
  c.lineWidth=3;c.beginPath();c.arc(16,-18,4,.2*PI,.9*PI);c.stroke()
  c.fillStyle='#495057';c.lineWidth=4;for(const wx of[-13,13])c.beginPath(),c.arc(wx,-6,5,0,T),c.fill(),c.stroke()
  c.restore()
}
