// kingfisher on a branch: bobs, tips forward and darts beak-first into the water, then pops back up to its perch
const{sin,PI,min,abs,atan2}=Math,T=2*PI
export const frames=32,delay=70
const B='#2ec4b6',L='#97e2da',O='#ff9f43',W='#c9a27e',K='#8a94a6',D='#2b2633'
const sm=x=>x<=0?0:x>=1?1:x*x*(3-2*x),lerp=(a,b,k)=>a+(b-a)*k
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  // pose: x, y, rotation, and whether it's stretched out into a dart
  let x=96,y=100,r=0,dart=0,hide=0
  const dn=(t-.4)/.14,uw=(t-.54)/.1,upk=(t-.64)/.16,st=(t-.8)/.08
  if(dn>0&&dn<=.3)r=dn/.3*.7
  else if(dn>.3&&dn<=1){const k=(dn-.3)/.7;x=lerp(110,160,k*k);y=lerp(118,290,k*k);r=atan2(172,50);dart=1}
  else if(uw>0&&uw<=1)hide=1
  else if(upk>0&&upk<=1){const k=sm(upk);x=lerp(156,96,k);y=lerp(206,100,k)-50*sin(PI*k);r=lerp(-.6,0,k)}
  if(st>0&&st<1)y+=6*sin(PI*st)
  const bl=t>.2&&t<.25,bob=dn<0?2*sin(4*T*t):0
  c.strokeStyle=W;c.lineWidth=11;c.lineCap='round'
  c.beginPath();c.moveTo(16,138);c.quadraticCurveTo(70,132,136,140);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(40,136);c.lineTo(28,118);c.stroke()
  if(!hide){
    c.save();c.beginPath();c.rect(0,0,256,212);c.clip()
    c.translate(x,y+bob);c.rotate(r);c.scale(1.2,1.2)
    if(dart){
      // stretched out along +x: tail, body, orange underside, head, beak
      fill(B,()=>{c.moveTo(-30,0);c.lineTo(-56,-10);c.lineTo(-56,10);c.closePath()})
      fill(B,()=>c.ellipse(-4,0,36,17,0,0,T))
      c.save();c.beginPath();c.ellipse(-4,0,36,17,0,0,T);c.clip();fill(O,()=>c.ellipse(-4,16,36,12,0,0,T));c.restore()
      fill(B,()=>c.arc(24,-2,18,0,T))
      fill(K,()=>{c.moveTo(36,-8);c.lineTo(80,0);c.lineTo(36,6);c.closePath()})
      fill(D,()=>c.arc(26,-8,3.5,0,T))
    }else{
      fill(B,()=>{c.moveTo(-14,24);c.lineTo(-30,50);c.lineTo(-18,54);c.lineTo(0,30);c.closePath()})
      for(const d of[-6,8])fill(O,()=>c.ellipse(d,34,6,4,0,0,T))
      fill(B,()=>c.ellipse(0,6,27,32,-.2,0,T))
      c.save();c.beginPath();c.ellipse(0,6,27,32,-.2,0,T);c.clip();fill(O,()=>c.ellipse(16,18,22,28,0,0,T));c.restore()
      fill(B,()=>c.arc(10,-28,24,0,T))
      fill(L,()=>c.ellipse(22,-16,12,8,0,0,T))
      fill(K,()=>{c.moveTo(28,-34);c.lineTo(78,-22);c.lineTo(30,-18);c.closePath()})
      c.fillStyle=c.strokeStyle=D
      if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(16,-34,4.5,.15*PI,.85*PI),c.stroke()
      else c.beginPath(),c.arc(16,-32,4.5,0,T),c.fill()
    }
    c.restore()
  }
  // water line, splash and ripple
  c.strokeStyle=c.fillStyle=L;c.lineWidth=5;c.lineCap='round'
  const sp=(t-.5)/.3
  for(const[a,b]of[[40,96],[124,232]]){c.beginPath();for(let i=a;i<=b;i+=4)c.lineTo(i,214+3*sin(i/9+T*t*2));c.stroke()}
  if(sp>0&&sp<1){
    c.beginPath();c.ellipse(158,214,14+40*sp,4+6*sp,0,0,T);c.stroke()
    for(const d of[-1,-.4,.4,1]){const q=min(1,sp*1.6),h=212-40*q*(1-abs(d)*.3)+50*q*q;if(h<208)c.beginPath(),c.arc(158+d*30*q,h,5*(1-q*.6),0,T),c.fill()}
  }
}
