// four chunky rounded squares in a 2x2, coral amber teal and indigo, the group swings a quarter turn with anticipation and overshoot while each square spins the other way, then squashes and wobbles at every stop
const{sin,cos,PI,exp}=Math
// 4 steps of 14 frames: the first holds the rest pose, the swing frames run quicker
export const frames=56,delay=Array.from({length:56},(_,i)=>(i%=14)?i>2&&i<9?30:40:150)
const cl=x=>x<0?0:x>1?1:x,sm=x=>x*x*(3-2*x),
 // turn keys [u, progress]: wind back, swing past, settle
 K=[[0,0],[.16,-.07],[.6,1.08],[.76,.985],[.92,1]],
 A=u=>{
  for(let k=1;k<K.length;k++)if(u<K[k][0]){
   const[a,p]=K[k-1],[b,q]=K[k]
   return p+(q-p)*sm((u-a)/(b-a))
  }
  return 1
 },
 C=['#ff5d6c','#ffb11f','#22bfae','#5a63f0'],
 S=80,D=47
export default(c,t)=>{
 const q=t*4,s=q|0,u=q-s,G=(s+A(u))*PI/2,
  w=cl((u-.52)/.48),sp=sin(w*PI*2.5)*exp(-3*w)*(1-w),
  d=D*(1-.12*sin(PI*cl((u-.1)/.55)))
 c.translate(128,128),c.scale(1+.12*sp,1-.12*sp),c.rotate(G)
 for(let j=0;j<4;j++){
  const a=PI/4+j*PI/2
  c.save(),c.translate(cos(a)*d*1.414,sin(a)*d*1.414),c.rotate(-2*G)
  c.fillStyle=C[j],c.beginPath(),c.roundRect(-S/2,-S/2,S,S,19),c.fill()
  c.restore()
 }
}
