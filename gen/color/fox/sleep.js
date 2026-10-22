// fox curled up asleep on its own tail, breathing slowly, a sleep bubble swelling and shrinking at its nose
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=90
const O='#ff922b',W='#fff',IN='#ffd8a8',BU='#d0ebff',BL='#ffa8a8'
export default(c,t)=>{
  const b=sin(t*T),y=-3*b
  const F=(col,f)=>{c.fillStyle=col;c.beginPath();f();c.fill();c.stroke()}
  F(O,()=>c.ellipse(148,166+y*.5,72,50+2*b,0,0,T))
  c.save();c.translate(214,206);c.rotate(.03*sin(2*T*t));c.translate(-214,-206)
  c.beginPath();c.ellipse(132,206,84,24,-.04,0,T);c.fillStyle=O;c.fill()
  c.save();c.clip();c.fillStyle=W;c.beginPath();c.ellipse(52,206,34,32,0,0,T);c.fill();c.lineWidth=5;c.stroke();c.restore()
  c.beginPath();c.ellipse(132,206,84,24,-.04,0,T);c.stroke();c.restore()
  for(const[a,b2,tp]of[[[58,140],[84,116],[52,98]],[[94,116],[118,138],[122,100]]]){
    F(O,()=>{c.moveTo(a[0],a[1]+y);c.lineTo(tp[0],tp[1]+y);c.lineTo(b2[0],b2[1]+y);c.closePath()})
    c.fillStyle=IN;c.beginPath();c.moveTo(a[0]+(b2[0]-a[0])*.3,a[1]+(b2[1]-a[1])*.3+y);c.lineTo(tp[0]+(a[0]+b2[0]-2*tp[0])*.2,tp[1]+12+y);c.lineTo(a[0]+(b2[0]-a[0])*.7,a[1]+(b2[1]-a[1])*.7+y);c.closePath();c.fill()
  }
  F(O,()=>c.arc(88,152+y,38,0,T))
  F(W,()=>c.ellipse(62,166+y,26,16,-.15,0,T))
  c.fillStyle='#111';c.beginPath();c.ellipse(38,162+y,7,6,0,0,T);c.fill()
  c.lineWidth=5;for(const x of[78,104])c.beginPath(),c.arc(x,144+y,7,.15*PI,.85*PI),c.stroke()
  c.fillStyle=BL;c.beginPath();c.ellipse(104,166+y,8,5,0,0,T);c.fill()
  const r=4+12*(1+b)/2
  c.lineWidth=4;c.fillStyle=BU;c.beginPath();c.arc(30-r*.4,148+y-r*.5,r,0,T);c.fill();c.stroke()
  c.fillStyle=W;c.beginPath();c.arc(26-r*.6,144+y-r*.8,r*.25,0,T);c.fill()
}
