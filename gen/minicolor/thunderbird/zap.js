// thunderbird hovering: lightning-bolt wings beat twice a loop and little sparks crackle off the tips at the top of each beat
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80
const B='#ff7a5c',L='#ffbdad',A='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const f=sin(2*T*t-PI/2),bl=t>.66&&t<.72
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  const bolt=()=>{for(const[x,y]of[[-14,0],[14,0],[0,32],[18,32],[-18,84],[-8,44],[-26,44]])c.lineTo(x,y);c.closePath()}
  c.translate(0,5*sin(2*T*t+1.4))
  for(const d of[-1,1]){c.save();c.translate(128+d*20,128);c.scale(d,1);c.rotate(-2.3+.32*f);fill(A,bolt);c.restore()}
  c.save();c.translate(128,176);c.scale(.55,.55);fill(A,bolt);c.restore()
  fill(B,()=>c.ellipse(128,144,30,38,0,0,T))
  fill(L,()=>c.ellipse(128,152,18,24,0,0,T))
  fill(A,()=>{for(const[x,y]of[[112,82],[116,60],[124,74],[130,50],[136,72],[144,58],[144,82]])c.lineTo(x,y);c.closePath()})
  fill(B,()=>c.arc(128,98,26,0,T))
  fill(A,()=>{c.moveTo(122,102);c.lineTo(134,102);c.lineTo(128,112);c.closePath()})
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*12,92,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*12,94,4.5,0,T),c.fill()
  // sparks: little four-point stars popping near each wing tip while the wings are up
  const z=max(0,-f)**3
  if(z>.05)for(const d of[-1,1])for(const[x,y,s]of[[92,40,1],[78,74,.7],[104,22,.6]]){
    const r=10*s*z,cx=128+d*x,cy=y+6
    fill(A,()=>{c.moveTo(cx,cy-r);c.quadraticCurveTo(cx,cy,cx+r,cy);c.quadraticCurveTo(cx,cy,cx,cy+r);c.quadraticCurveTo(cx,cy,cx-r,cy);c.quadraticCurveTo(cx,cy,cx,cy-r)})
  }
}
