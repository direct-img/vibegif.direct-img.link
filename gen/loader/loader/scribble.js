// hand-drawn terracotta asterisk doodle with nine uneven, slightly crooked marker strokes round a wobbly blob, it breathes in and out while each stroke drifts, bends and stretches at its own pace
const{sin,cos,atan2,PI}=Math,T=2*PI,N=9
export const frames=40,delay=50
const h=n=>(x=>x-Math.floor(x))(sin(n*127.1+311.7)*43758.5453),
  // marker stroke on a bent spine (r0,0)->(r1,0), width w tapering to w*.4, round ends
  arm=(c,r0,r1,w,b,k)=>{const L=[],R=[],m=(r0+r1)/2,q=b*(r1-r0),W=s=>w*(1-.45*s)*(1+.08*sin(s*9+k))
    for(let j=0;j<=16;j++){const s=j/16,n=1-s,
      x=n*n*r0+2*n*s*m+s*s*r1,y=2*n*s*q,a=atan2(2*(n-s)*q,2*n*(m-r0)+2*s*(r1-m)),d=W(s)
      L.push([x-d*sin(a),y+d*cos(a)]),R.unshift([x+d*sin(a),y-d*cos(a)])}
    c.beginPath(),[...L,...R].map(([x,y])=>c.lineTo(x,y)),c.fill()
    c.beginPath(),c.arc(r1,0,W(1),0,T),c.fill()}
export default(c,t)=>{
  const P=T*t,br=1+.07*sin(P)
  c.translate(134,120),c.rotate(.06*sin(P+1)),c.fillStyle='#d97757'
  for(let k=0;k<N;k++){
    // per-arm character from the seeded hash, wobble with whole-number frequencies
    const m=1+(h(k)>.5),a=k*T/N+(h(k+9)-.5)*.25+.07*sin(m*P+T*h(k+19)),
      L=(70+28*h(k+29))*br*(1+.08*sin(m*P+T*h(k+39))),
      b=(h(k+49)-.5)*.16+.06*sin((3-m)*P+T*h(k+59))
    c.save(),c.rotate(a-PI/2),arm(c,8,L,9+3*h(k+69),b,k),c.restore()
  }
  // wobbly centre blob
  c.beginPath()
  for(let j=0;j<=24;j++){const a=j*T/24,r=(21+2.5*sin(3*a+P)+2*sin(2*a-2*P))*br
    c.lineTo(r*cos(a),r*sin(a))}
  c.fill()
}
