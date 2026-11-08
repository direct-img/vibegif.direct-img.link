// round radar screen in a mid-green bezel: a bright green beam sweeps clockwise over a dark green grid, trailing a stepped fading wedge, and four blips flash pale green with a ping ring as it passes, then dim and shrink
const{sin,cos,PI}=Math,T=2*PI
export const frames=36,delay=50
const R=82,W=['#3ee08a','#2cc271','#22a35e','#1b874e','#166e41','#125936','#0f482d'],
 B=[[.62,.55],[.4,1.9],[.78,3.3],[.52,4.6]] // blips: radius fraction, angle
export default(c,t)=>{
 const a=T*t-PI/2 // beam angle, clockwise from twelve
 c.translate(128,128),c.lineWidth=6
 c.fillStyle='#4fae6a',c.beginPath(),c.arc(0,0,R+17,0,T),c.fill(),c.stroke()
 // bezel ticks
 c.strokeStyle='#2c7a45',c.lineWidth=4
 for(let k=0;k<24;k++){
  const b=k*T/24,l=k%6?4:8
  c.beginPath(),c.moveTo((R+13)*cos(b),(R+13)*sin(b)),c.lineTo((R+13-l)*cos(b),(R+13-l)*sin(b)),c.stroke()
 }
 c.strokeStyle='#111',c.lineWidth=6
 c.fillStyle='#0c3420',c.beginPath(),c.arc(0,0,R,0,T),c.fill()
 // stepped wedge behind the beam
 W.map((f,k)=>{
  c.fillStyle=f,c.beginPath(),c.moveTo(0,0),c.arc(0,0,R,a-(k+1)*.2,a-k*.2+.01),c.fill()
 })
 // grid
 c.strokeStyle='#2a8a55',c.lineWidth=3,c.beginPath()
 for(const r of[R/3,2*R/3])c.moveTo(r,0),c.arc(0,0,r,0,T)
 c.moveTo(-R,0),c.lineTo(R,0),c.moveTo(0,-R),c.lineTo(0,R),c.stroke()
 // blips light up when the beam passes, then fade in colour and size
 B.map(([f,b])=>{
  const d=((a-b+PI/2)%T+T)%T/T,x=f*R*cos(b-PI/2),y=f*R*sin(b-PI/2)
  if(d<.6){
   const e=d/.6,r=11*(1-e)+3
   if(d<.25)c.strokeStyle=d<.12?'#9dffc4':'#3fcf7f',c.lineWidth=3,c.beginPath(),c.arc(x,y,8+d*90,0,T),c.stroke()
   c.fillStyle=e<.2?'#e6fff0':e<.45?'#8dffbb':e<.7?'#3fd982':'#25a35e'
   c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  }
 })
 // beam
 c.strokeStyle='#c8ffdc',c.lineWidth=5,c.beginPath(),c.moveTo(0,0),c.lineTo(R*cos(a),R*sin(a)),c.stroke()
 c.strokeStyle='#111',c.lineWidth=6,c.beginPath(),c.arc(0,0,R,0,T),c.stroke()
 c.fillStyle='#c8ffdc',c.beginPath(),c.arc(0,0,7,0,T),c.fill(),c.lineWidth=4,c.stroke()
}
