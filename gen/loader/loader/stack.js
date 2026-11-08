// three thick dark outlined slabs in coral amber and teal stacked on a slate shelf pop away top-down, each squashing, stretching and vanishing in a burst of colored dots, then they drop back in one by one and land with a jelly squash
const{sin,cos,PI,exp,min}=Math,T=2*PI
export const frames=64,delay=40
const cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),
 eo=x=>1-(1-cl(x))**3,
 ob=x=>(x=cl(x),1+2.7*(x-1)**3+1.7*(x-1)**2),
 C=['#ff6b6b','#ffb547','#3fcfc0'],W=[190,164,176],O=[0,-7,6],
 H=60,F=207,D=[.42,.58,.74],E=k=>.26-k*.08,
 // springy squash after a landing, 0 at rest
 sq=u=>u<0||u>1?0:sin(u*PI*2.6)*exp(-3.5*u)*(1-u),
 slab=(c,k,x,cy,w,h)=>{
  if(w<12)return
  c.fillStyle=C[k],c.beginPath(),c.roundRect(x-w/2,cy-h/2,w,h,min(16,h/2)),c.fill(),c.stroke()
  c.fillStyle='rgba(255,255,255,.32)',c.beginPath(),c.roundRect(x-w/2+12,cy-h/2+8,w-24,h*.16,h*.08),c.fill()
 }
export default(c,t)=>{
 c.fillStyle='#69738c',c.lineWidth=5,c.beginPath(),c.roundRect(26,F,204,16,8),c.fill(),c.stroke()
 c.lineWidth=6
 let y=F+3
 for(let k=0;k<3;k++){
  const d=t-D[k],e=(t-E(k))/.13,x=128+O[k]
  if(d<0&&e>=1)break
  if(d<0){
   // leaving: squash down, spring up tall, shrink to nothing, dots burst out
   let sx=1,sy=1,s=1,l=0
   if(e>0){
    const p=sm(e/.35),v=cl((e-.35)/.65),q=sm(v/.3)
    sx=1+.12*p-.24*q,sy=1-.25*p+.45*q,l=8*q,s=1-sm((v-.25)/.35)
   }
   const w=W[k]*sx*s,h=H*sy*s,cy=y-H*sy/2-l
   slab(c,k,x,cy,w,h)
   const u=cl((e-.5)/.5)
   if(u>0&&u<1)for(let i=0;i<6;i++){
    const a=i*T/6+.5,r=24+48*eo(u)
    c.fillStyle=C[k],c.beginPath(),c.arc(x+cos(a)*r*1.45,cy+sin(a)*r*.42,14*(1-u),0,T),c.fill()
   }
   y-=H-3
  }else{
   // arriving: pop in at the top, fall, land with a squash that echoes down the stack
   let a=sq((d-.095)/.12)*.3
   for(let j=k+1;j<3;j++)a+=sq((t-D[j]-.095)/.12)*.1
   const pop=ob(d/.04),f=cl((d-.035)/.06)**2,h=H*(1-a),w=W[k]*(1+a*.4),
    yb=d<.095?74+(y-74)*f:y
   slab(c,k,x,yb-h/2*pop,w*pop,h*pop)
   y-=h-3
  }
 }
}
