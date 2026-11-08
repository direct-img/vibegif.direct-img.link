// tomato-red cassette tape with a cream label, its two white toothed reels turning as brown tape winds from the left reel onto the right, then the cassette hops and flips over in 3D to play again
const{sin,cos,abs,max,PI}=Math,T=2*PI
export const frames=48,delay=40
const ink='#111',W=208,H=136,D=16,h=14,Rm=36,K=1.25*T/(Rm-h)
const ease=u=>u<.5?2*u*u:1-2*(1-u)**2
// draw a path built under a squashed x transform, then stroke it unsquashed
let c,cx,sx
const P=(f,fill,lw=6)=>{
  c.save(),c.translate(cx,0),c.scale(sx,1),c.beginPath(),f(),c.restore()
  fill&&(c.fillStyle=fill,c.fill()),lw&&(c.lineWidth=lw,c.strokeStyle=ink,c.stroke())
}
const face=p=>{
  const rL=(h*h+(Rm*Rm-h*h)*(1-p))**.5,rR=(h*h+(Rm*Rm-h*h)*p)**.5
  P(()=>c.roundRect(-W/2,-H/2,W,H,14),'#e8553e')
  P(()=>c.roundRect(-88,-56,176,86,10),'#fbe8c6',5)
  // two stripes on the label
  P(()=>c.rect(-86,-50,172,8),'#2ec4b6',0),P(()=>c.rect(-86,14,172,8),'#ffb627',0)
  // window with the tape packs
  c.save(),P(()=>c.roundRect(-70,-36,140,46,23),'#3b3a52',5),c.clip()
  P(()=>{c.arc(-40,-13,rL,0,T)},'#7a4a2e',0),P(()=>{c.arc(40,-13,rR,0,T)},'#7a4a2e',0)
  c.restore(),P(()=>c.roundRect(-70,-36,140,46,23),0,5)
  // hubs: white ring with six teeth, both turn the same way
  for(const[x,a]of[[-40,K*(Rm-rL)],[40,K*(rR-h)]]){
    P(()=>c.arc(x,-13,13,0,T),'#fff',5)
    P(()=>c.arc(x,-13,7,0,T),'#3b3a52',0)
    P(()=>{for(let j=0;j<6;j++){const b=a+j*T/6;c.moveTo(x+4*cos(b),-13+4*sin(b)),c.lineTo(x+9*cos(b),-13+9*sin(b))}},0,0)
    c.save(),c.translate(cx,0),c.scale(sx,1),c.lineWidth=3,c.strokeStyle='#fff',c.stroke(),c.restore()
  }
  // head opening at the bottom
  P(()=>{c.moveTo(-62,H/2),c.lineTo(-50,40),c.lineTo(50,40),c.lineTo(62,H/2)},'#c8432f',5)
  for(const x of[-30,0,30])P(()=>c.arc(x,54,4.5,0,T),'#3b3a52',0)
  for(const[x,y]of[[-90,-58],[90,-58],[-90,58],[90,58]])P(()=>c.arc(x,y,3.5,0,T),'#3b3a52',0)
}
export default(ctx,t)=>{
  c=ctx,c.translate(128,128)
  const F=.7
  if(t<F){
    // play: tape winds over, small landing squash at the start
    const u=t/F,q=u<.18?sin(u/.18*PI)*(1-u/.18):0
    c.translate(0,H/2),c.scale(1+.05*q,1-.07*q),c.translate(0,-H/2)
    cx=0,sx=1,face(ease(u))
    return
  }
  // flip about the vertical axis with a hop; the edge of the case shows as a slab
  const u=(t-F)/(1-F),e=ease(u),a=PI*e
  c.translate(0,-30*sin(PI*u))
  const ca=cos(a),sa=sin(a),fx=D/2*sa*(ca<0?-1:1)
  // side slab
  cx=-W/2*ca,sx=1
  P(()=>c.roundRect(-D/2*sa-.01,-H/2,D*sa+.02,H,3),'#b8412e',6)
  cx=fx,sx=max(abs(ca),.001)
  face(ca>0?1:0)
}
