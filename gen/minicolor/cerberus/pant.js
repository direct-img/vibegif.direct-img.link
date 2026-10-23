// three-headed puppy sitting, the heads pant one after another with tongues out, tail wagging
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#8a94a6',L='#c5cad3',A='#ff85a8',D='#2b2633'
export default(c,t)=>{
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  c.translate(0,-12)
  c.save();c.translate(168,200);c.rotate(.35*sin(3*T*t))
  c.strokeStyle=B;c.lineWidth=14;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(28,-6,30,-40);c.stroke();c.restore()
  fill(B,()=>c.ellipse(128,184,56,36,0,0,T))
  fill(L,()=>c.ellipse(128,192,26,22,0,0,T))
  for(const d of[-1,1])fill(L,()=>c.ellipse(128+d*26,218,14,8,0,0,T))
  for(const[i,x,y,r,a]of[[0,70,140,28,-.26],[2,186,140,28,.26],[1,128,106,31,0]]){
    const p=sin(T*(3*t-i/3)),bl=i==1&&t>.6&&t<.66
    c.save();c.translate(x,y+2.5*p);c.rotate(a)
    for(const d of[-1,1])fill(B,()=>{c.moveTo(d*r*.3,-r*.8);c.lineTo(d*r*.82,-r*1.25);c.lineTo(d*r*.95,-r*.3)})
    fill(B,()=>c.arc(0,0,r,0,T))
    for(const d of[-1,1])fill(L,()=>{c.moveTo(d*r*.55,-r*.78);c.lineTo(d*r*.8,-r*1.05);c.lineTo(d*r*.82,-r*.62)})
    fill(L,()=>c.ellipse(0,r*.36,r*.5,r*.36,0,0,T))
    fill(D,()=>c.ellipse(0,r*.5,r*.16,r*.14+1.5*(p+1),0,0,PI))
    fill(A,()=>c.roundRect(-r*.15,r*.52,r*.3,r*.34+4*(p+1),r*.15))
    fill(D,()=>c.ellipse(0,r*.2,5.5,4,0,0,T))
    c.fillStyle=c.strokeStyle=D
    for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(d*r*.38,-r*.16,5,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(d*r*.38,-r*.12,4.5,0,T),c.fill()
    c.restore()
  }
}
