// arrows pop up, crouch and shoot one after another into a happy cloud, which puffs up each time one zips inside
const{sin,PI,min,max}=Math,T=2*PI
export const frames=24,delay=60
const back=u=>(u=min(1,max(0,u)),1+2.7*(u-1)**3+1.7*(u-1)**2)
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t)=>{
  const u=t*2%1,s=1.1*back(u/.14),q=max(0,(u-.3)/.2),k=u>.14&&u<.3?sin(PI*(u-.14)/.16):0,y=196+6*k-110*q*q,pf=u>.42&&u<.82?sin(PI*(u-.42)/.4):0
  if(q<1){
    if(q>0)for(const x of[-30,0,30])ln(c,11,()=>{c.moveTo(128+x,y+(x?16:58));c.lineTo(128+x,y+(x?16:58)+56*q)})
    c.save();c.translate(128,y+40);c.scale(s*(1+.1*k),s*(1-.14*k));c.translate(0,-40)
    c.beginPath();c.moveTo(0,-40);c.lineTo(36,-2);c.lineTo(15,-2);c.lineTo(15,38);c.lineTo(-15,38);c.lineTo(-15,-2);c.lineTo(-36,-2);c.closePath();c.fill();c.stroke()
    c.restore()
  }
  if(pf>.3)for(const d of[-1,1])for(const[y,q]of[[66,-10],[100,0]])ln(c,11,()=>{c.moveTo(128+d*(102+6*pf),y);c.lineTo(128+d*(116+6*pf),y+q)})
  c.translate(128,110);c.scale(1+.08*pf,1+.06*pf);c.translate(-128,-110)
  const P=[[80,96,38],[128,72,50],[178,94,40]],base=()=>c.roundRect(42,92,172,56,28)
  c.lineWidth=14;for(const[x,yy,r]of P)c.beginPath(),c.arc(x,yy,r,0,T),c.stroke()
  c.beginPath();base();c.stroke()
  for(const[x,yy,r]of P)c.beginPath(),c.arc(x,yy,r,0,T),c.fill()
  c.beginPath();base();c.fill()
  c.lineWidth=6
  if(pf>.3)for(const x of[106,150])c.beginPath(),c.arc(x,114,8,PI*1.15,PI*1.85),c.stroke()
  else{c.fillStyle='#111';for(const x of[106,150])c.beginPath(),c.arc(x,110,6,0,T),c.fill()}
  c.beginPath();c.arc(128,120,10,PI*.15,PI*.85);c.stroke()
}
