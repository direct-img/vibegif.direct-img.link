// striped tiger doing a big cat stretch, rump up and front paws out, eyes shut and a little yawn, then back to standing
const{sin,cos,PI,hypot}=Math,T=2*PI
export const frames=24,delay=85
const B='#ff9f43',L='#ffd2a6',A='#b5531c',D='#2b2633'
const mix=(a,b,k)=>a+(b-a)*k
export default(c,t)=>{
  const s=(1-cos(T*t))/2,k=s*s*(3-2*s)
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const line=(col,lw,f)=>{c.strokeStyle=col;c.lineWidth=lw;c.beginPath();f();c.stroke()}
  const hx=mix(80,78,k),hy=mix(134,108,k),sx=mix(166,160,k),sy=mix(136,176,k),px=mix(170,214,k)
  const tail=()=>{c.moveTo(hx-12,hy-6);c.quadraticCurveTo(mix(36,52,k),mix(132,90,k),mix(44,72,k),mix(88,46,k))}
  line(B,13,tail);c.lineCap='butt';c.setLineDash([9,11]);line(A,13,tail);c.setLineDash([]);c.lineCap='round'
  for(const[x,o]of[[hx+12,0],[hx-6,8]])line(B,19,()=>{c.moveTo(x,hy+10);c.lineTo(x+o-2,214)})
  for(const o of[12,-4])line(B,19,()=>{c.moveTo(sx+o*.4,sy+6);c.lineTo(px+o,214)})
  line(B,62,()=>{c.moveTo(hx,hy);c.lineTo(sx,sy)})
  const dx=sx-hx,dy=sy-hy,l=hypot(dx,dy),ux=dx/l,uy=dy/l
  for(const f of[.18,.38,.58,.78]){
    const x=hx+dx*f,y=hy+dy*f
    line(A,7,()=>{c.moveTo(x+uy*30,y-ux*30);c.lineTo(x+uy*12+ux*4,y-ux*12+uy*4)})
  }
  const ex=mix(196,204,k),ey=mix(104,166,k),r=mix(0,.25,k)
  c.save();c.translate(ex,ey);c.rotate(r)
  for(const d of[-1,1])fill(B,()=>{c.moveTo(d*8-9,-22);c.lineTo(d*20,-36);c.lineTo(d*28+(d>0?-2:2),-14);c.closePath()})
  fill(B,()=>c.arc(0,0,30,0,T))
  fill(L,()=>c.ellipse(10,12,18,12,0,0,T))
  for(const y of[-2,8])line(A,5,()=>{c.moveTo(-28,y);c.lineTo(-16,y+2)})
  line(A,5,()=>{c.moveTo(4,-30);c.lineTo(4,-20)})
  c.fillStyle=c.strokeStyle=D
  if(k>.55)c.lineWidth=4,c.beginPath(),c.arc(10,-4,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(10,-4,5,0,T),c.fill()
  c.beginPath();c.ellipse(22,6,4.5,3.5,0,0,T);c.fill()
  if(k>.7)c.beginPath(),c.ellipse(14,18,6,7*(k-.7)/.3+1,0,0,T),c.fill()
  c.restore()
}
