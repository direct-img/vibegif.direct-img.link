// hermit crab: eyes peek out of its shell, it climbs half out waving both claws, ducks back in and the shell wobbles
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=32,delay=70
const B='#f4c03e',L='#f9e0a0',A='#ee5a5a',D='#2b2633'
const e=x=>(x=min(1,max(0,x)),x*x*(3-2*x))
export default(c,t)=>{
  const o=e((t-.1)/.16)*(1-e((t-.7)/.14)),pe=e((t-.02)/.1)*(1-e((t-.8)/.08)),wob=.06*sin(PI*e((t-.84)/.16))*sin(T*t*8)
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()},ox=146,oy=166
  c.translate(110,198);c.rotate(wob);c.translate(-110,-198)
  c.strokeStyle=A;c.lineCap='round';c.lineJoin='round'
  for(let i=0;i<3;i++){c.lineWidth=7;c.beginPath();c.moveTo(ox-4+8*i,oy+8);c.lineTo(ox+o*(18+8*i),oy+8-o*4);c.lineTo(ox+o*(28+10*i),oy+30*o+4);c.stroke()}
  fill(A,()=>c.ellipse(ox+o*16,oy-o*6,22,18,0,0,T))
  for(const d of[-1,1]){c.strokeStyle=A;c.lineWidth=5;c.beginPath();c.moveTo(ox+4+d*4,oy-6);c.lineTo(ox+8+pe*10+d*7,oy-12-pe*30);c.stroke()
    const ex=ox+8+pe*10+d*7,ey=oy-14-pe*30;c.fillStyle=A;c.beginPath();c.arc(ex,ey,7.5,0,T);c.fill();c.fillStyle=D;c.beginPath();c.arc(ex+1,ey,4.5,0,T);c.fill()}
  for(const[dy,sz,p]of[[-22,1,0],[6,.75,1.3]]){
    const px=ox+o*(52*sz+4),py=oy+o*(dy-18*sz+6*sin(T*t*4+p)),g=.35+.25*sin(T*t*8+p)
    c.strokeStyle=A;c.lineWidth=9;c.beginPath();c.moveTo(ox+o*16,oy-o*6);c.lineTo(px,py);c.stroke()
    c.save();c.translate(px,py);c.rotate(-.5+.25*sin(T*t*4+p));c.scale(sz*(.4+.6*o),sz*(.4+.6*o))
    fill(A,()=>c.ellipse(12,-6,14,8,-g,0,T));fill(A,()=>c.ellipse(12,6,13,7,g,0,T));fill(A,()=>c.arc(0,0,10,0,T));c.restore()
  }
  for(const[x,y,r]of[[37,60,12],[50,76,20],[72,100,32],[108,140,56]])fill(B,()=>c.arc(x,y,r,0,T))
  c.strokeStyle=L;c.lineWidth=4
  for(const[x,y,r]of[[37,60,12],[50,76,20],[72,100,32]])c.beginPath(),c.arc(x,y,r,-.3,2.1),c.stroke()
  fill(A,()=>c.ellipse(ox,oy,20,26,-.6,0,T))
}
