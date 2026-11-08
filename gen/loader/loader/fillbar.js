// dark outlined pill progress bar on a light track, a green to teal fill grows in uneven eased spurts with a glowing mint cap on its leading edge, gives a springy happy bump when full, then drains back left and starts over
const{sin,PI,exp,min,abs}=Math
export const frames=60,delay=40
const cl=x=>x<0?0:x>1?1:x,
 eo=x=>1-(1-x)**3,
 io=x=>x<.5?4*x*x*x:1-(2-2*x)**3/2,
 // [t, progress] keys: spurts ease out, the drain eases in-out
 K=[[0,0],[.05,0],[.15,.21],[.2,.21],[.27,.36],[.33,.36],[.46,.79],[.51,.79],[.59,1],[.8,1],[.92,0],[1,0]],
 P=t=>{
  for(let k=1;k<K.length;k++)if(t<=K[k][0]){
   const[a,p]=K[k-1],[b,q]=K[k],u=cl((t-a)/(b-a))
   return p+(q-p)*(q<p?io(u):eo(u))
  }
  return 0
 }
export default(c,t)=>{
 const p=P(t),v=abs(P(t+.008)-P(t-.008))/.016,
  u=(t-.59)/.22,b=u>0&&u<1?sin(u*PI*3)*exp(-4*u):0,
  W=196,H=84,x0=-W/2,y0=-H/2,d=10,iw=W-2*d,ih=H-2*d,r=ih/2,L=x0+d,xe=L+p*iw
 c.translate(128,128),c.scale(1+.06*b,1+.12*b)
 c.beginPath(),c.roundRect(x0,y0,W,H,H/2),c.fillStyle='#dde4ec',c.fill()
 c.save(),c.beginPath(),c.roundRect(L,y0+d,iw,ih,r),c.clip()
 if(p>0){
  const g=c.createLinearGradient(L,0,L+iw,0),cw=7+min(14,v*10)+12*abs(b)
  g.addColorStop(0,'#3ccf5e'),g.addColorStop(1,'#11b0a8')
  // bright cap: a mint pill peeking out ahead of the main fill
  c.fillStyle='#d6fff2',c.beginPath(),c.roundRect(xe-3*ih,y0+d,3*ih,ih,r),c.fill()
  c.fillStyle=g,c.beginPath(),c.roundRect(L-2*ih,y0+d,xe-cw-L+2*ih,ih,r),c.fill()
  const gw=xe-cw-L-r*1.4
  if(gw>0)c.fillStyle='rgba(255,255,255,.4)',c.beginPath(),c.roundRect(L+r*.7,y0+d+8,gw,10,5),c.fill()
 }
 c.restore()
 c.lineWidth=12,c.beginPath(),c.roundRect(x0,y0,W,H,H/2),c.stroke()
}
