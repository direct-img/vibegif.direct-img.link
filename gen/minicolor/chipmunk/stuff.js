// chipmunk sitting up with an acorn, stuffs it in its mouth and its cheeks balloon out, blinks, then grabs another
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=32,delay=70
const B='#e8955a',L='#f8d1b0',A='#8c4f2c',N='#f4c03e',D='#2b2633'
const cl=x=>max(0,min(1,x)),ease=x=>(x=cl(x),x*x*(3-2*x))
export default(c,t)=>{
  const lift=ease((t-.26)/.16)-ease((t-.86)/.14)*0,eat=t>.42&&t<.86,ns=t<.42?1:t>.86?ease((t-.86)/.12):0
  const puff=ease((t-.42)/.08)*(1+.12*sin(PI*cl((t-.42)/.16)))-ease((t-.86)/.1)
  const cr=14+13*puff,nb=t<.26?1.5*sin(T*t*8):0,bl=t>.68&&t<.73
  const nx=128,ny=150-30*lift+nb
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.strokeStyle=B;c.lineWidth=26;c.beginPath();c.moveTo(150,200);c.bezierCurveTo(196,204,200,150,186,108+3*sin(T*t));c.stroke()
  c.strokeStyle=A;c.lineWidth=7;c.beginPath();c.moveTo(166,200);c.bezierCurveTo(194,196,192,150,184,116+3*sin(T*t));c.stroke()
  for(const d of[-1,1])fill(B,()=>c.ellipse(128+d*20,212,16,7,0,0,T))
  fill(B,()=>c.ellipse(128,172,42,44,0,0,T))
  fill(L,()=>c.ellipse(128,180,25,32,0,0,T))
  for(const d of[-1,1])fill(B,()=>c.arc(128+d*29,70,11,0,T)),fill(L,()=>c.arc(128+d*29,70,5,0,T))
  fill(B,()=>c.arc(128,102,36,0,T))
  for(const x of[-14,0,14])c.strokeStyle=A,c.lineWidth=6,c.beginPath(),c.moveTo(128+x,70+abs(x)*.25),c.lineTo(128+x*.9,88),c.stroke()
  for(const d of[-1,1])fill(L,()=>c.arc(128+d*(18+cr*.55),118,cr,0,T))
  fill(L,()=>c.ellipse(128,120,10,8,0,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.arc(128+d*15,98,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*15,100,5,0,T),c.fill()
  c.beginPath();c.ellipse(128,114,4.5,3.5,0,0,T);c.fill()
  if(ns>0){
    c.save();c.translate(nx,ny);c.scale(ns,ns)
    fill(N,()=>c.ellipse(0,5,11,13,0,0,T));fill(A,()=>c.ellipse(0,-7,13,7,0,0,T))
    c.strokeStyle=A;c.lineWidth=3;c.beginPath();c.moveTo(0,-11);c.lineTo(2,-16);c.stroke();c.restore()
  }
  const hy=eat?150:ny+6
  for(const d of[-1,1])fill(B,()=>c.ellipse(128+d*(eat?11:17),hy,7,9,d*.3,0,T))
}
const abs=Math.abs
