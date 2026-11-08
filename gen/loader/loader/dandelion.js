// big dandelion seed head: eight chunky parachute seeds, each a terracotta stalk topped by a fan of thick light-amber strokes ending in cream puffs, outlined in dark brown around a dotted orange center; seeds on the top right let go one at a time and drift to the top right corner at full size, shrinking away only at the end, while a new seed springs back into each gap
const{sin,cos,PI,min,max,atan2}=Math,T=2*PI
export const frames=40,delay=60
const D='#5a2614',X=110,Y=146,
  cl=x=>min(1,max(0,x)),
  ss=x=>x*x*(3-2*x),
  // springy ease out for regrowth
  sp=x=>1-cos(x*PI*1.5)*(1-x)**2,
  A=[-.95,-.48,0,.48,.95].map(a=>[28*cos(a),28*sin(a)]),
  // slots that let go, in order: top, top right, right
  GO={6:0,7:1/3,0:2/3},F=.46,G0=.14,G1=.4,
  E=[120,-120]                          // where seeds drift to, toward the top right corner
// one seed: tuft base at the origin, tuft pointing +x, stalk running back to -x
const seed=(c,s)=>{
  c.save(),c.scale(s,s)
  const fan=()=>{c.beginPath();for(const[x,y]of A)c.moveTo(0,0),c.lineTo(x,y);c.stroke()},
    puffs=r=>{c.beginPath();for(const[x,y]of A)c.moveTo(x+r,y),c.arc(x,y,r,0,T);c.fill()}
  // dark pass, then color pass, so the seed gets one clean outline
  c.strokeStyle=c.fillStyle=D
  c.lineWidth=11,c.beginPath(),c.moveTo(-30,0),c.lineTo(0,0),c.stroke()
  c.beginPath(),c.ellipse(-33,0,8,5.5,0,0,T),c.fill()
  c.lineWidth=12,fan(),puffs(11)
  c.strokeStyle='#d97757',c.lineWidth=5,c.beginPath(),c.moveTo(-30,0),c.lineTo(0,0),c.stroke()
  c.fillStyle='#9a4a2a',c.beginPath(),c.ellipse(-33,0,4.5,2.5,0,0,T),c.fill()
  c.strokeStyle='#f3c98f',c.lineWidth=6,fan()
  c.fillStyle='#fdeccb',puffs(7)
  c.restore()
}
export default(c,t)=>{
  c.translate(X,Y)
  const fly=[]
  for(let k=0;k<8;k++){
    const a=k*T/8,p=k in GO?(t-GO[k]+1)%1:1
    if(p<F)fly.push([a,p/F])
    // the replacement sprouts once the old seed has drifted clear
    if(p>=G0){
      const g=p<G1?sp((p-G0)/(G1-G0)):1
      c.save(),c.rotate(a),c.translate(22+30*g,0),seed(c,g),c.restore()
    }
  }
  c.lineWidth=5,c.strokeStyle=D,c.fillStyle='#e8875f'
  c.beginPath(),c.arc(0,0,25,0,T),c.fill(),c.stroke()
  c.fillStyle='#f6c453'
  for(let k=0;k<7;k++){
    const r=k?13:0,b=k*T/6
    c.beginPath(),c.arc(r*cos(b),r*sin(b),4,0,T),c.fill()
  }
  // drifting seeds: out to the corner, tuft-first into the wind, full size until late
  for(const[a,q]of fly){
    // slow lift, then the wind whisks it off
    const s=1-ss(cl((q-.55)/.45)),e=q**1.6,sx=52*cos(a),sy=52*sin(a),
      x=sx+(E[0]-sx)*e,y=sy+(E[1]-sy)*e,
      // aim from the seed's own angle toward the corner, with a little wobble
      d=atan2(E[1],E[0]),r=a+((d-a+3*PI)%T-PI)*ss(cl(q/.5))+.25*sin(T*q)
    if(s<.06)continue
    c.save(),c.translate(x,y),c.rotate(r),seed(c,s),c.restore()
  }
}
