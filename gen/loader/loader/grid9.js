// a 3x3 grid of rounded squares colored by diagonal from coral through orange, gold and green to blue, a wave runs from the top-left corner to the bottom-right making each square shrink with a quarter turn and spring back
const{PI,min}=Math
export const frames=40,delay=40
const C=['#ff5c7a','#ff8a3d','#f2b52c','#34c38f','#3d8bff'],
  ss=x=>x*x*(3-2*x),
  back=x=>1+2.3*(x-1)**3+1.3*(x-1)**2 // ease-out with overshoot
export default(c,t)=>{
  for(let r=0;r<3;r++)for(let q=0;q<3;q++){
    const d=r+q,u=(((t-d*.09)%1+1)%1)/.5,  // each cell is busy for half the loop
      s=u>=1?1:u<.4?1-.64*ss(u/.4):.36+.64*back(min(1,(u-.4)/.6)),
      a=u<1?ss(min(1,u/.75))*PI/2:0 // turn settles before the springy end
    c.save(),c.translate(62+q*66,62+r*66),c.rotate(a),c.scale(s,s)
    c.fillStyle=C[d],c.beginPath(),c.roundRect(-27,-27,54,54,14),c.fill(),c.restore()
  }
}
