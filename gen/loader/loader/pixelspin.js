// retro pixel spinner on a coarse 12x12 grid, a ring of slate blocks where a bright amber pixel arc chases round in crisp steps, stretching long then snapping short, with a blinking amber cursor block in the middle
const{atan2,hypot,PI}=Math,T=2*PI
export const frames=64,delay=30
const n=12,g=17,s=15,o=128-n*g/2,
 cl=x=>x<0?0:x>1?1:x,io=x=>(x=cl(x),x<.5?2*x*x:1-2*(1-x)**2),
 M=(x,m)=>(x%m+m)%m,
 // ring cells with their angle clockwise from 12 o'clock
 Q=[]
for(let j=0;j<n;j++)for(let i=0;i<n;i++){
 const x=i-5.5,y=j-5.5,d=hypot(x,y)
 if(d>3.2&&d<5.8)Q.push([i,j,M(atan2(x,-y),T)])
}
export default(c,t)=>{
 const q=t*2,k=q|0,u=q-k,b=u*T*.45,
  // head races ahead, then the tail catches up: one full turn per half loop
  tl=k*T+b+.55*T*io((u-.42)/.58),
  hd=k*T+.13*T+b+.55*T*io(u/.58)
 for(const[i,j,a]of Q){
  c.fillStyle=M(a-tl,T)<hd-tl?'#ffa51e':'#4f5b78'
  c.fillRect(o+i*g+1,o+j*g+1,s,s)
 }
 // blinking cursor block
 if(u<.5)c.fillStyle='#ffa51e',c.fillRect(o+5*g+1,o+5*g+1,g+s,g+s)
}
