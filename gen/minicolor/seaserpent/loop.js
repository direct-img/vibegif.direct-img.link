// sea serpent: its humps roll up out of the water line and back under, tail fin flicks, head bobs
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#2ec4b6',L='#97e2da',W='#4ea8de',D='#2b2633'
export default(c,t)=>{
  const wy=188,hb=4*sin(T*t),bl=t>.3&&t<.36
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  const dot=(x,y,r)=>{c.fillStyle=B;c.beginPath();c.arc(x,y,r,0,T);c.fill()}
  c.save();c.beginPath();c.rect(0,0,256,wy);c.clip()
  // humps: a wave travelling along the body, both ends stay under water
  for(let x=54;x<=182;x+=1.5)dot(x,wy+16-64*sin(PI*(x-54)/128)**.6*sin(T*(x/104-t)),15)
  // tail fin flicking up out of the water on the left
  c.save();c.translate(42,wy+4);c.rotate(-.3+.2*sin(T*t+1));fill(B,()=>{c.moveTo(-8,0);c.quadraticCurveTo(-22,-36,-8,-52);c.quadraticCurveTo(8,-30,10,0)});c.restore()
  // neck rising from the water, head looking left
  for(let s=0;s<=1;s+=.02){
    const u=1-s,x=u*u*u*208+3*u*u*s*222+3*u*s*s*180+s*s*s*194,y=u*u*u*(wy+18)+3*u*u*s*(wy-36)+3*u*s*s*(128+hb)+s*s*s*(104+hb)
    dot(x,y,16-3*s)
  }
  c.restore()
  for(let i=0;i<3;i++)fill(L,()=>{c.moveTo(204,88+hb+i*10);c.lineTo(234,76+hb+i*14);c.lineTo(208,100+hb+i*10)})
  fill(B,()=>c.ellipse(186,96+hb,31,21,-.12,0,T))
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(178,87+hb,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(178,89+hb,5,0,T),c.fill()
  c.strokeStyle=W;c.lineWidth=8;c.beginPath()
  for(let x=18;x<=238;x+=2)c.lineTo(x,wy+3.5*sin(T*(x/44-2*t)))
  c.stroke()
}
