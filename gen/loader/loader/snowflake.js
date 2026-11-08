// icy blue six-armed snowflake with chunky black outlines and a white-flashing hexagon heart, turning slowly as its branches melt back in crystal by crystal to a small hexagon star, then grow out again one by one with a springy pop
export const frames=30,delay=[360,...Array(14).fill(70),120,...Array(14).fill(70)]
const{sin,cos,min,max,PI}=Math
const cl=x=>min(1,max(0,x)),io=x=>x<.5?2*x*x:1-2*(1-x)**2
const back=x=>x<=0?0:1+2.7*(x-1)**3+1.7*(x-1)**2
// branches: distance along arm, length
const B=[[46,20],[64,17],[79,10]]
export default(c,t)=>{
  // frame 0 holds full size, 1-14 melt, 15 holds small, 16-29 regrow; turns 60 degrees per loop, pausing on the holds
  const n=t*30,up=n>15,u=up?(n-15)/15:n/15,e=io(u),G=up?sin(u*PI/2):cos(u*PI/2)
  const L=30+54*G,S=B.map(([d])=>{const x=cl((G-(d-30)/54*.8)/.25);return up?back(x):x*x})
  c.translate(128,128),c.rotate(PI/6*(e+up))
  // arms drawn twice: fat black pass then colour pass
  const arm=(w,col,tip,o)=>{
    c.lineWidth=w,c.strokeStyle=col,c.fillStyle=tip
    for(let a=0;a<6;a++){
      c.save(),c.rotate(a*PI/3),c.beginPath(),c.moveTo(0,0),c.lineTo(0,-L)
      B.forEach(([d,l],j)=>{if(S[j]>0)for(const s of[-1,1])c.moveTo(0,-d),c.lineTo(s*sin(PI/3)*l*S[j],-d-cos(PI/3)*l*S[j])})
      c.stroke()
      // tip crystal
      const k=7+2*G
      c.beginPath(),c.moveTo(0,-L-k*1.5),c.lineTo(k,-L),c.lineTo(0,-L+k*1.2),c.lineTo(-k,-L),c.closePath(),c.fill()
      if(o)c.lineWidth=o,c.stroke()
      c.restore()
    }
  }
  arm(17,'#111','#111',8),arm(9,'#9cd6ff','#5aaef0')
  // centre hexagon, its heart flashes white while full size
  const hex=(r,f)=>{c.beginPath();for(let a=0;a<6;a++)c.lineTo(r*sin(a*PI/3),-r*cos(a*PI/3));c.closePath(),c.fillStyle=f,c.fill()}
  c.lineWidth=6,c.strokeStyle='#111',hex(21,'#dff3ff'),c.stroke(),hex(10,G>.97?'#fff':G>.85?'#b5e0ff':'#6cbcf5')
}
