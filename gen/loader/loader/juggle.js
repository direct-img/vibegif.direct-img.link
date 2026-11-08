// three balls in red, gold and blue juggled in a cascade by two grey cupped hands, each ball thrown from the inside and caught on the outside so the arcs cross in the middle, with real juggling timing
const{sin,PI}=Math,T=2*PI
export const frames=40,delay=40
// time in beats: a throw every beat, hands alternate, loop = 6 beats (every ball back in its first hand)
const D=1.2,F=3-D,E=2-D,          // dwell in hand, flight, empty hand
  HY=172,IX=22,OX=76,H=116,R=19,  // hand height, inner/outer x, throw height, ball radius
  C=['#ff4f5e','#ffb321','#3a86ff'],G=['#ffb3b9','#ffe3a3','#b5d1ff'], // ball, glint
  ss=x=>x*x*(3-2*x),
  // hand on side g (+1 right, -1 left), f beats after its last throw: swing out empty, then scoop in with the ball
  hand=(g,f)=>f<E?[g*(IX+(OX-IX)*ss(f/E)),HY-9*sin(PI*f/E)]:[g*(OX-(OX-IX)*ss((f-E)/D)),HY+18*sin(PI*(f-E)/D)]
export default(c,t)=>{
  const s=t*6,cx=128
  const hands=[1,-1].map(g=>hand(g,((s-(g>0?0:1))%2+2)%2))
  for(let j=0;j<3;j++){
    const tau=((s-j)%3+3)%3,n=Math.round(s-tau+6)%6,g=n%2?-1:1  // last throw of ball j and who threw it
    let x,y
    if(tau<F){const u=tau/F;x=g*IX+(-g*OX-g*IX)*u,y=HY-4*H*u*(1-u)}
    else[x,y]=hand(-g,E+tau-F)
    c.fillStyle=C[j],c.strokeStyle='#111',c.lineWidth=4.5
    c.beginPath(),c.arc(cx+x,y,R,0,T),c.fill(),c.stroke()
    c.fillStyle=G[j],c.beginPath(),c.ellipse(cx+x-6,y-7,6,4,-.6,0,T),c.fill()
  }
  // cupped hands: a thick grey U with a dark edge, wrapped under the ball
  for(const[w,col]of[[16,'#111'],[8,'#8d97a6']])for(const[x,y]of hands)
    c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.arc(cx+x,y,R+6,.12*PI,.88*PI),c.stroke()
}
