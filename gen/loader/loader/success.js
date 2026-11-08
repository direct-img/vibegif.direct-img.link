// green spinner arc with a dark outline whirls round, stretching and shrinking, then closes into a full ring that floods into a solid green badge with a bounce, a white checkmark draws in and pops, holds a beat, then the check shrinks away and the badge hollows back into the spinning arc
const{sin,PI,exp,hypot}=Math,T=2*PI
export const frames=56,delay=40
const cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),
 R=78,G='#2fbf5b',
 // spring bump: 0 at u<=0, rings down to 0
 sp=u=>u<=0||u>=1?0:sin(u*PI*3)*exp(-4*u)*(1-u),
 // spinner arc length over spinner time
 K=[[0,T],[.12,.5*PI],[.26,1.15*PI],[.38,.55*PI],[.48,T]],
 len=v=>{for(let k=1;k<K.length;k++)if(v<K[k][0]){const[a,p]=K[k-1],[b,q]=K[k];return p+(q-p)*sm((v-a)/(b-a))}return T},
 CK=[[-40,2],[-13,29],[41,-27]]
export default(c,t)=>{
 c.translate(128,128)
 const sc=1+.1*sp((t-.4)/.22)+.07*sp((t-.57)/.16)
 c.scale(sc,sc)
 if(t>.36&&t<.9){
  // badge: dark rim plus green annulus whose hole closes up then reopens
  const ri=69*(1-sm((t-.37)/.1)+sm((t-.81)/.09))
  c.fillStyle='#111',c.beginPath(),c.arc(0,0,93,0,T)
  if(ri>6)c.arc(0,0,ri-6,0,T,1)
  c.fill()
  c.fillStyle=G,c.beginPath(),c.arc(0,0,87,0,T)
  if(ri>0)c.arc(0,0,ri,0,T,1)
  c.fill()
  const k=cl((t-.47)/.11),s=1-sm((t-.77)/.06)+.15*sp((t-.74)/.08)
  if(k>0&&s>0){
   c.save(),c.scale(s,s),c.strokeStyle='#fff',c.lineWidth=22,c.beginPath(),c.moveTo(...CK[0])
   // draw the check up to fraction k of its length
   const l1=hypot(27,27),l2=hypot(54,56),d=sm(k)*(l1+l2)
   if(d<l1)c.lineTo(CK[0][0]+27*d/l1,CK[0][1]+27*d/l1)
   else c.lineTo(...CK[1]),c.lineTo(CK[1][0]+54*(d-l1)/l2,CK[1][1]-56*(d-l1)/l2)
   c.stroke(),c.restore()
  }
 }else{
  const v=(t<.5?t+1:t)-.88,L=len(v),B=-PI/2+T*2.25*sm(v/.48)+v*4
  c.lineWidth=30,c.beginPath(),c.arc(0,0,R,B-L,B),c.stroke()
  c.strokeStyle=G,c.lineWidth=18,c.beginPath(),c.arc(0,0,R,B-L,B),c.stroke()
 }
}
