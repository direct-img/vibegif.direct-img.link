// eight-arm spark with four long terracotta arms and four short amber arms round a rust hub with a gold pin, it ticks clockwise an eighth of a turn like a clock hand, winding back a hair, snapping over with bent arms, overshooting and settling
const{sin,cos,atan2,PI}=Math,T=2*PI
// per tick: anticipation, two snap frames, overshoot, settle, long hold
const P=[-.05,.5,1.1,.96,1.01,1],D=[40,30,30,40,40,300]
export const frames=24,delay=[...D,...D,...D,...D]
// tapered arm on a curved spine (r0,0)->(r1,0) bent sideways by b, round base
const arm=(c,r0,r1,w,b)=>{const L=[],R=[],m=(r0+r1)/2,q=b*(r1-r0)
  for(let k=0;k<=16;k++){const s=k/16,n=1-s,
    x=n*n*r0+2*n*s*m+s*s*r1,y=2*n*s*q,a=atan2(2*n*q-2*s*q,2*n*(m-r0)+2*s*(r1-m)),
    h=w*(1-s)**.9
    L.push([x-h*sin(a),y+h*cos(a)]),R.unshift([x+h*sin(a),y-h*cos(a)])}
  c.beginPath(),[...L,...R].map(([x,y])=>c.lineTo(x,y)),c.fill()
  c.beginPath(),c.arc(r0,0,w,0,T),c.fill()}
export default(c,t,i)=>{
  const f=i%6,v=P[f]-(f?P[f-1]:0),s=1+.12*Math.max(0,v)
  c.translate(128,128),c.rotate(((i/6|0)+P[f])*T/8-PI/2)
  for(let k=0;k<8;k++){
    c.save(),c.rotate(k*T/8)
    // arms trail behind while snapping (negative bend = lag)
    k%2?(c.fillStyle='#f2a945',arm(c,12,62*s,8,-.3*v)):(c.fillStyle='#d97757',arm(c,12,104*s,10.5,-.22*v))
    c.restore()
  }
  c.fillStyle='#b5532f',c.beginPath(),c.arc(0,0,17,0,T),c.fill()
  c.fillStyle='#f6c26b',c.beginPath(),c.arc(0,0,6,0,T),c.fill()
}
