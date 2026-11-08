// eight rounded terracotta and coral petals curl out of a fat orange-ringed gold dot like a pinwheel, straighten into an asterisk, turn an eighth of a turn, then wind back up and fold into the dot
const{sin,cos,sqrt,atan2,min,max,PI}=Math,T=2*PI,N=8
export const frames=40,delay=40
const cl=x=>min(1,max(0,x)),
  ss=x=>(x=cl(x),x*x*(3-2*x)),
  oBack=x=>(x=cl(x)-1,1+2.4*x*x*x+1.4*x*x),
  iBack=x=>(x=cl(x),2.4*x*x*x-1.4*x*x),
  // petal: ellipse-ish blade along a quadratic spine (r0,0)->(r1,0) bent sideways by b
  petal=(c,r0,r1,b,w)=>{const L=[],R=[],cx=(r0+r1)/2,cy=b*(r1-r0)
    for(let k=0;k<=20;k++){const s=k/20,m=1-s,
      x=m*m*r0+2*m*s*cx+s*s*r1,y=2*m*s*cy,
      dx=2*m*(cx-r0)+2*s*(r1-cx),dy=2*m*cy-2*s*cy,a=atan2(dy,dx),
      h=w*2*sqrt(s*m)*(.6+.4*s)
      L.push([x-h*sin(a),y+h*cos(a)]),R.unshift([x+h*sin(a),y-h*cos(a)])}
    c.beginPath(),[...L,...R].map(([x,y])=>c.lineTo(x,y)),c.fill()}
export default(c,t)=>{
  c.translate(128,128)
  // open: 0 closed .. 1 open (with overshoot), bend: pinwheel curl
  const o=t<.5?oBack((t-.1)/.28):1-iBack((t-.62)/.3),
    b=t<.5?.9*(1-ss((t-.1)/.3)):.9*ss((t-.6)/.32),
    r=T/N*ss((t-.12)/.76)
  c.rotate(r)
  if(o>.02)for(let k=0;k<N;k++)
    c.save(),c.rotate(k*T/N),c.fillStyle=k%2?'#e8875f':'#c9653f',
    petal(c,4,4+98*o,b,17*min(1,o*1.6)),c.restore()
  // dot: fat when closed, squeezes just before opening, small when open
  const d=13+11*(1-cl(o*1.5))-3*sin(PI*cl((t-.02)/.1))
  c.fillStyle='#d97757',c.beginPath(),c.arc(0,0,d+4,0,T),c.fill()
  c.fillStyle='#f2a945',c.beginPath(),c.arc(0,0,d,0,T),c.fill()
}
