// bright blue three-lobed fidget spinner with silver bearings and a yellow centre cap, spinning clockwise and surging between slow and fast, tapered pale blue motion trails and outer speed arcs stretching behind each lobe as it speeds up
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=16,delay=50
const D=58,L=36,B='#2f8cff'
// spin angle: 2/3 turn per loop (a whole number of 1/3 turns), speed eases between 0.2x and 1.8x
const ang=t=>T*2/3*(t-.8*sin(T*t)/T)
// union of hub, arms and lobes, grown by g
const body=(c,a,g,f)=>{
 c.fillStyle=c.strokeStyle=f,c.lineWidth=40+2*g,c.beginPath()
 for(let k=0;k<3;k++){const b=a+k*T/3;c.moveTo(0,0),c.lineTo(D*cos(b),D*sin(b))}
 c.stroke(),c.beginPath()
 for(let k=0;k<3;k++){const b=a+k*T/3;c.moveTo(D*cos(b)+L+g,D*sin(b)),c.arc(D*cos(b),D*sin(b),L+g,0,T)}
 c.fill()
}
const disc=(c,x,y,r,f)=>{c.beginPath(),c.arc(x,y,r,0,T),c.fillStyle=f,c.fill(),c.stroke()}
export default(c,t)=>{
 const a=ang(t),v=(ang(t+.01)-ang(t-.01))/.02/frames // radians per frame
 c.translate(128,128)
 // trails: stepped arcs in the gap behind each lobe, longer when faster
 const l=min(v*3,1.1)
 for(let k=0;k<3;k++){
  const b=a+k*T/3-.62
  ;[[1,18,'#cfe7ff'],[.7,30,'#a6d2ff'],[.4,42,'#7dbbff']].map(([f,w,col])=>{
   const q=l*f
   if(q>.17)c.beginPath(),c.arc(0,0,D,b-q,b),c.lineWidth=w*min(1,q/.3),c.strokeStyle=col,c.stroke()
  })
  if(l>.25)c.beginPath(),c.arc(0,0,D+L+12,b+.45-l*.8,b+.35),c.lineWidth=6,c.strokeStyle='#5aa6ff',c.stroke()
 }
 body(c,a,3.5,'#111'),body(c,a,0,B)
 c.strokeStyle='#111',c.lineWidth=5
 for(let k=0;k<3;k++){
  const b=a+k*T/3,x=D*cos(b),y=D*sin(b)
  disc(c,x,y,21,'#e6ebf0'),c.lineWidth=4,disc(c,x,y,8,'#8d99a6'),c.lineWidth=5
 }
 disc(c,0,0,24,'#e6ebf0'),disc(c,0,0,13,'#ffd23f')
}
