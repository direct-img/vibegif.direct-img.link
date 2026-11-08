// twelve tapered terracotta rays round a small amber dot, a wave sweeps clockwise round the ring so each ray in turn shoots long and turns gold, then dips short and darker before settling
const{exp,acos,min,round,PI}=Math,T=2*PI,N=12
export const frames=32,delay=40
const mix=(a,b,f)=>`rgb(${a.map((v,k)=>round(v+(b[k]-v)*f))})`,
  base=[217,119,87],gold=[242,169,69],dark=[176,82,50],
  // tapered ray along +x: round base radius w centred at r0, sharp tip at r1
  ray=(c,r0,r1,w)=>{const q=acos(min(1,w/(r1-r0)))
    c.beginPath(),c.moveTo(r1,0),c.arc(r0,0,w,q,-q),c.closePath(),c.fill()}
export default(c,t)=>{
  c.translate(128,128)
  for(let k=0;k<N;k++){
    // u: time since the wave crest passed this ray, wrapped to -.5..+.5
    const u=((t-k/N)%1+1.5)%1-.5,
      g=exp(-((u/.1)**2))-.35*exp(-(((u-.19)/.1)**2))
    c.save(),c.rotate(k*T/N-PI/2)
    c.fillStyle=g>0?mix(base,gold,g):mix(base,dark,-g/.35)
    ray(c,27,80+28*g,6.5+2.5*g)
    c.restore()
  }
  c.fillStyle='#f2a945',c.beginPath(),c.arc(0,0,13,0,T),c.fill()
}
