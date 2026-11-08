// orange four-point paper star with dark brown creases folds its points over the center one after another showing a darker terracotta back, the folded square twists 45 degrees, then all four points spring open again
const{cos,sin,PI,min,max,floor}=Math,H=PI/2
export const frames=60,delay=40
const cl=x=>min(1,max(0,x)),
  io=x=>(1-cos(PI*x))/2,
  // sine ease with a little anticipation and overshoot
  bk=x=>io(x)-.16*sin(2*PI*x),
  R=98,D=40
export default(c,t)=>{
  const u=t*2%1,
    th=[0,1,2,3].map(k=>u<.55?PI*io(cl((u-.04-k*.085)/.18)):PI*(1-bk(cl((u-.69+k*.03)/.3)))),
    f=th.reduce((a,v)=>a+(1-cos(v))/8,0),
    rot=floor(t*2)*H/2+H/2*bk(cl((u-.4)/.22)),
    // grow while folded, but never let a half-open point reach the edge
    s=min(1+.35*f,104/max(...th.map(a=>D+(R-D)*max(0,cos(a)))))
  c.translate(128,128),c.scale(s,s),c.rotate(rot)
  c.lineWidth=5,c.strokeStyle='#4a1f12'
  const poly=(p,col)=>{
    c.beginPath(),p.forEach(([x,y])=>c.lineTo(x,y)),c.closePath()
    c.fillStyle=col,c.fill(),c.stroke()
  }
  poly([[-D,-D],[D,-D],[D,D],[-D,D]],'#e8875f')
  th.forEach((a,k)=>{
    const q=cos(a),x=D+(R-D)*q
    c.save(),c.rotate(k*H)
    poly([[D,-D],[x,0],[D,D]],q>=0?q>.55?'#e8875f':'#d97757':q<-.55?'#a8472a':'#bc5a38')
    c.restore()
  })
}
