// brass pocket compass with a cream face and a red-and-white needle that gets knocked spinning, whirls a full turn, overshoots and wobbles to settle on north, the case jolting at each knock
const{sin,cos,exp,PI}=Math,T=2*PI
export const frames=48,delay=40
const ink='#111'
// needle angle: knock at t=0, one eased turn past north, damped wobble, hold
const ang=t=>{
  const S=.38,W=.42,ov=.6,k=4,w=16
  if(t<S){const u=t/S;return(T+ov)*(1-(1-u)**2)}
  if(t<S+W){
    const v=(t-S)/W,f=x=>exp(-k*x)*(cos(w*x)+k/w*sin(w*x))
    return T+ov*(f(v)-f(1)*v)
  }
  return T
}
// case jolt: quick damped tilt right after the knock
const jolt=t=>t<.16?-.14*sin(t/.16*2*PI)*(1-t/.16)**2:0
const P=(c,f,fill,lw=7)=>{c.beginPath(),f(),c.fillStyle=fill,c.fill(),c.lineWidth=lw,c.strokeStyle=ink,c.stroke()}
export default(c,t)=>{
  c.translate(128,136),c.rotate(jolt(t))
  // bail ring on top
  P(c,()=>{c.arc(0,-92,13,0,T),c.arc(0,-92,6,0,T,1)},'#e3a32e',6)
  P(c,()=>c.arc(0,0,88,0,T),'#e8ad37')
  P(c,()=>c.arc(0,0,74,0,T),'#c9851f',5)
  P(c,()=>c.arc(0,0,68,0,T),'#fff4dc',5)
  // compass rose behind the needle
  c.beginPath()
  for(let j=0;j<8;j++){
    const a=j*T/8-PI/2,r=j%2?30:58
    c.lineTo(r*cos(a),r*sin(a)),c.lineTo(11*cos(a+T/16),11*sin(a+T/16))
  }
  c.closePath(),c.fillStyle='#f3d79a',c.fill()
  // ticks
  c.strokeStyle=ink,c.lineWidth=4
  for(let j=0;j<16;j++){
    const a=j*T/16,r=j%4?59:54
    c.beginPath(),c.moveTo(r*cos(a),r*sin(a)),c.lineTo(64*cos(a),64*sin(a)),c.stroke()
  }
  // red north marker
  P(c,()=>{c.moveTo(0,-56),c.lineTo(-8,-44),c.lineTo(8,-44),c.closePath()},'#e63946',3)
  // needle
  c.rotate(ang(t))
  P(c,()=>{c.moveTo(0,-56),c.lineTo(13,0),c.lineTo(-13,0),c.closePath()},'#e63946',5)
  P(c,()=>{c.moveTo(0,56),c.lineTo(13,0),c.lineTo(-13,0),c.closePath()},'#dfe3ea',5)
  P(c,()=>c.arc(0,0,8,0,T),'#e8ad37',4)
}
