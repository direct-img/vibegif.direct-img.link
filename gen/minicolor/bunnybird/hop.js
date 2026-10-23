// bunny-bird hopping: round flat-color body, long ears that lag behind the hop, wings flapping in the air, blinks while resting
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=70
const B='#7b8cff',L='#c3cbff',A='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const air=t<.5,h=air?50*sin(PI*t/.5):0,v=air?cos(PI*t/.5):0,sq=t>.5&&t<.68?.13*sin(PI*(t-.5)/.18):0
  const rx=50*(1+sq),ry=50*(1-sq),cx=128,cy=206-ry-h,bl=t>.82&&t<.88
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  for(const d of[-1,1])fill(A,()=>c.ellipse(cx+d*16,cy+ry+4+(air?4*v:0),10,6,0,0,T))
  for(const d of[-1,1]){
    c.save();c.translate(cx+d*16,cy-ry+14);c.rotate(d*(.2+.35*v+.4*sq))
    fill(B,()=>c.ellipse(0,-30,16,32,0,0,T));fill(L,()=>c.ellipse(0,-28,6,20,0,0,T));c.restore()
  }
  for(const d of[-1,1]){
    c.save();c.translate(cx+d*(rx-6),cy+2);c.rotate(d*(air?.5+.5*sin(T*t*4):.15))
    fill(B,()=>c.ellipse(d*12,6,10,20,-d*.5,0,T));c.restore()
  }
  fill(B,()=>c.ellipse(cx,cy,rx,ry,0,0,T))
  fill(L,()=>c.ellipse(cx,cy+20*(1-sq),30*(1+sq),24*(1-sq),0,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.arc(cx+d*18,cy-12,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(cx+d*18,cy-10,5.5,0,T),c.fill()
  fill(A,()=>{c.moveTo(cx-7,cy-3);c.lineTo(cx+7,cy-3);c.lineTo(cx,cy+6);c.closePath()})
}
