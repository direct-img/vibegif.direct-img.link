// little imp giggling: quick bounces with squeezed eyes and a wide grin, then catches its breath, tail swishing
const{sin,abs,PI}=Math,T=2*PI
export const frames=24,delay=75
const B='#ff85a8',L='#ffc2d4',A='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const gg=t<.6,g=gg?abs(sin(4*PI*t/.6)):0,sq=gg?.06*(1-g):0,y=gg?-12*g:-2*sin(PI*(t-.6)/.4)
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,190+y);c.scale(1+sq,1-sq)
  c.save();c.translate(36,-18);c.rotate(.3*sin(T*t))
  c.strokeStyle=B;c.lineWidth=8;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(40,8,54,-16);c.stroke()
  fill(B,()=>{c.moveTo(54,-12);c.lineTo(44,-24);c.lineTo(58,-38);c.lineTo(66,-20);c.closePath()});c.restore()
  for(const d of[-1,1])fill(B,()=>c.ellipse(d*20,-4,12,8,0,0,T))
  for(const d of[-1,1])fill(A,()=>{c.moveTo(d*22,-104);c.quadraticCurveTo(d*30,-130,d*44,-136);c.quadraticCurveTo(d*44,-118,d*40,-100)})
  for(const d of[-1,1])fill(B,()=>{c.moveTo(d*48,-74);c.lineTo(d*76,-92);c.lineTo(d*54,-56)})
  fill(B,()=>c.ellipse(0,-58,56,52,0,0,T))
  fill(L,()=>c.ellipse(0,-30,28,20,0,0,T))
  for(const d of[-1,1])fill(B,()=>c.ellipse(d*(50+(gg?3*g:0)),-30-(gg?6*g:0),9,14,d*.5,0,T))
  c.fillStyle=c.strokeStyle=D;c.lineWidth=4.5
  if(gg){
    for(const d of[-1,1])c.beginPath(),c.moveTo(d*28,-70),c.lineTo(d*18,-78),c.lineTo(d*8,-70),c.stroke()
    c.beginPath();c.moveTo(-18,-56);c.quadraticCurveTo(0,-56,18,-56);c.quadraticCurveTo(14,-36,0,-36);c.quadraticCurveTo(-14,-36,-18,-56);c.fill()
    c.fillStyle=L;c.beginPath();c.moveTo(-12,-56);c.lineTo(-8,-50);c.lineTo(-4,-56);c.fill()
    c.strokeStyle=B;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(d*84,-84,10+3*g,d>0?-.6:PI-.4+0,d>0?.4:PI+.6),c.stroke()
  }else{
    const bl=t>.86&&t<.92
    for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(d*18,-74,5,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(d*18,-72,5,0,T),c.fill()
    c.lineWidth=3.5;c.beginPath();c.moveTo(-10,-54);c.quadraticCurveTo(2,-46,12,-56);c.stroke()
  }
}
