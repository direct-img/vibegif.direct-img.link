// chunky cartoon flame with a dark brown outline: orange outer tongues, an amber middle and a pale gold core lick and flicker side to side, the flame bobs with a little lift and squash and two orange embers float up
const{sin,PI,min}=Math,T=2*PI
export const frames=36,delay=40
// teardrop: round base (x,y,r) pulled up to a tip (tx,ty), b bends the tip
const drop=(c,x,y,r,tx,ty,b)=>{
  const h=y-ty
  c.moveTo(tx,ty)
  c.bezierCurveTo(tx+b-r*.2,ty+h*.35,x-r,y-h*.45,x-r,y)
  c.arc(x,y,r,PI,0,true)
  c.bezierCurveTo(x+r,y-h*.45,tx+b+r*.2,ty+h*.35,tx,ty)
}
export default(c,t)=>{
  const w=T*t,
    sw=12*sin(w)+5*sin(2*w+1),      // tip sway
    lk=14*sin(w-.9)+6*sin(3*w),      // lagging curl
    q=sin(2*w+.5)
  // squash and lift anchored at the base
  c.translate(128,226),c.scale(1-.045*q,1+.06*q),c.translate(-128,-226)
  const outer=[
    [128,176,48,128+sw,58-8*sin(3*w+1)-4*sin(2*w),lk],
    [104,180,30,72+6*sin(2*w+2),104+12*sin(3*w),-14-6*sin(w)],
    [152,180,30,184+6*sin(2*w),112+12*sin(3*w+2.2),14+6*sin(w+1)]
  ]
  // embers drawn first so they slip out from behind the flame
  for(let k=0;k<2;k++){
    const p=(t+k/2)%1,r=10*min(1,p*3)*(1-p)**.7
    if(r<1.5)continue
    c.beginPath()
    c.arc(128+(k?-1:1)*(22+18*sin(T*p+k)),92-70*p,r,0,T)
    c.lineWidth=4,c.strokeStyle='#5c2412',c.stroke(),c.fillStyle='#f2a541',c.fill()
  }
  // outline pass, then fill pass, so the tongues merge into one silhouette
  c.lineWidth=13,c.strokeStyle=c.fillStyle='#5c2412'
  for(const d of outer)c.beginPath(),drop(c,...d),c.stroke()
  c.fillStyle='#e9773f'
  for(const d of outer)c.beginPath(),drop(c,...d),c.fill()
  c.fillStyle='#f2a541',c.beginPath()
  drop(c,128,186,34,128+sw*.8,102-8*sin(3*w+2),lk*.8),c.fill()
  c.fillStyle='#fde09a',c.beginPath()
  drop(c,128,198,18,128+sw*.5,148-6*sin(2*w+3),lk*.5),c.fill()
}
