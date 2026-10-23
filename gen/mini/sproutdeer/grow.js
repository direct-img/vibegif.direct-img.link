// deer whose antlers are bare branches: leaves sprout at the tips, then wither and drop off; it flicks an ear and its tail and blinks
const{sin,PI,max,min,atan2,cos}=Math,T=2*PI
export const frames=24,delay=90,rim=3
const br=[[[182,70],[180,48],[174,30],[170,14]],[[180,48],[198,38]],[[174,30],[190,20]],[[172,72],[156,58],[136,52]],[[156,58],[146,38]]]
const pulse=(t,a,b)=>t>a&&t<b?sin(PI*(t-a)/(b-a)):0
export default(c,t)=>{
  const bl=t>.86&&t<.92
  c.fillStyle=c.strokeStyle='#111'
  c.translate(-6,4)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  c.lineWidth=9;for(const x of[70,86,146,160])c.beginPath(),c.moveTo(x,160),c.lineTo(x+(x<100?-3:3),222),c.stroke()
  c.lineWidth=6
  shape(()=>c.ellipse(112,148,56,26+sin(T*t),0,0,T))
  c.save();c.translate(62,134);c.rotate(-.5-.6*pulse(t,.74,.84));shape(()=>c.ellipse(-8,0,11,6,0,0,T));c.restore()
  shape(()=>{c.moveTo(144,132);c.lineTo(164,84);c.lineTo(186,90);c.lineTo(168,150);c.closePath()})
  shape(()=>c.ellipse(180,82,20,14,.35,0,T))
  shape(()=>c.ellipse(198,94,11,8,.35,0,T))
  c.save();c.translate(170,76);c.rotate(.35-.5*pulse(t,.6,.68));shape(()=>c.ellipse(-12,0,13,6,0,0,T));c.restore()
  c.lineWidth=5;for(const s of br){c.beginPath();c.moveTo(...s[0]);for(const p of s.slice(1))c.lineTo(...p);c.stroke()}
  br.forEach((s,i)=>{
    const[x,y]=s.at(-1),[px,py]=s.at(-2),a=atan2(y-py,x-px)
    const g=min(1,max(0,(t-i*.04)/.2)),q=min(1,max(0,(t-.5-i*.04)/.26)),z=g*(1-q)
    if(z>.02){c.save();c.translate(x+cos(a)*4-10*q,y+sin(a)*4+36*q*q);c.rotate(a+q*2.5);c.scale(z,z);c.beginPath();c.ellipse(7,0,10,5.5,0,0,T);c.fill();c.restore()}
  })
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(187,78,4,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(187,80,3.5,0,T),c.fill()
}
