// fire salamander resting: little flames flicker along its back, tail sways, slow breaths, blinks
const{sin,PI,sqrt}=Math,T=2*PI
export const frames=24,delay=80
const B='#ee5a5a',A='#ff9f43',Y='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const br=1+.03*sin(T*t),bl=t>.62&&t<.68,sw=10*sin(T*t)
  c.translate(10,-14)
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  const flame=(x,y,h,s,k)=>fill(k?Y:A,()=>{const w=k?5:10;c.moveTo(x-w,y+4);c.quadraticCurveTo(x-w-2,y-h*.5,x+s,y-h);c.quadraticCurveTo(x+w+2,y-h*.5,x+w,y+4)})
  for(const[i,x]of[92,112,132,152,170].entries()){
    const y=152-20*br*sqrt(1-((x-126)/52)**2)+4,h=26+7*sin(2*T*t+i*1.9)+4*sin(3*T*t+i),s=3*sin(2*T*t+i*2.3)
    flame(x,y,h,s,0);flame(x,y,h*.55,s*.6,1)
  }
  // tail: tapering tube from the hips to a tip that curls up and sways
  for(let s=0;s<=1;s+=.015){const u=1-s,x=u*u*84+2*u*s*44+s*s*20,y=u*u*154+2*u*s*(176+sw*.3)+s*s*(130+sw);c.fillStyle=B;c.beginPath();c.arc(x,y,15-12*s,0,T);c.fill()}
  for(const[x,d]of[[96,-1],[106,-1],[150,1],[160,1]])fill(B,()=>{c.ellipse(x+d*6,178,6,14,d*.4,0,T)}),fill(B,()=>c.ellipse(x+d*12,190,9,5,0,0,T))
  fill(B,()=>c.ellipse(126,152,52,20*br,0,0,T))
  fill(B,()=>c.ellipse(186,146,28,18,-.08,0,T))
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(192,138,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(192,140,4.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(212,152);c.quadraticCurveTo(204,156,196,154);c.stroke()
}
