// three concentric rings in coral, gold and sky blue, each with a gap, turning clockwise at one, two and three turns per loop, the gaps line up at the top once per loop with a brief slowdown while a violet center dot pops
export const frames=45,delay=40
const{sin,cos,PI,max}=Math,T=2*PI
export default(c,t)=>{
  const e=t-.6*sin(T*t)/T, // eased phase, slowest when the gaps align
    w=17
  ;[[98,'#ff5a5f'],[72,'#f5a80f'],[46,'#2f95f5']].forEach(([r,s],k)=>{
    const a=-PI/2+T*(k+1)*e,g=22/r
    // full ring drawn identically every frame, then the gap is cut and capped (keeps frames diff-small)
    c.strokeStyle=c.fillStyle=s,c.lineWidth=w
    c.beginPath(),c.arc(128,128,r,0,T),c.stroke()
    c.globalCompositeOperation='destination-out'
    c.beginPath(),c.arc(128,128,r+w,a-g,a+g),c.arc(128,128,r-w,a+g,a-g,1),c.fill()
    c.globalCompositeOperation='source-over'
    for(const b of[a-g,a+g])c.beginPath(),c.arc(128+r*cos(b),128+r*sin(b),w/2,0,T),c.fill()
  })
  const p=max(0,cos(T*t))**6
  c.fillStyle='#8a63ff',c.beginPath(),c.arc(128,128,9+11*p,0,T),c.fill()
}
