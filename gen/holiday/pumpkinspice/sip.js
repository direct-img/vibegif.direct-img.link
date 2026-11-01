// pumpkin spice latte to-go cup lifted in a knit mitten and tipped for a sip, set back down steaming with a happy little heart
export const frames=36,delay=55,rim=5
const K='#2a1810',P=Math.PI*2,PI=Math.PI,S=Math.sin,C=Math.cos
const ss=(a,b,x)=>{x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)}
export default(c,t)=>{
  // lift curve: up and tipped from .12 to .34, two gulps until .6, back down by .82, a little settle after
  const u=ss(.12,.34,t)-ss(.6,.82,t),sip=u*(S(P*(t-.34)/.14)*.5+.5)*(t>.34&&t<.62),
    st=t>.82?S(PI*(t-.82)/.18)*(1-(t-.82)/.18)*3:0,
    th=-.45*u-.09*sip,ox=-16*u-3*sip,oy=-26*u+st-2*sip
  c.strokeStyle=K
  const L=p=>{c.beginPath();p.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.closePath()}
  c.save();c.translate(130+ox,162+oy);c.rotate(th);c.scale(.98,.98)
  // cup body (origin at the middle of the cup), tapering down
  const cup=()=>L([[-46,-58],[46,-58],[35,72],[-35,72]])
  c.save();cup();c.fillStyle='#e6dccb';c.fill();c.clip();c.translate(-8,0);cup();c.fillStyle='#fbf7f0';c.fill();c.restore()
  c.lineWidth=6;cup();c.stroke()
  // kraft sleeve
  const sl=()=>L([[-44,-26],[44,-26],[40,26],[-40,26]])
  c.save();sl();c.fillStyle='#b8743a';c.fill();c.clip();c.translate(-7,0);sl();c.fillStyle='#d6914e';c.fill();c.restore()
  c.lineWidth=5;sl();c.stroke()
  // little pumpkin badge
  c.save();c.translate(-12,2);c.lineWidth=3.5
  c.beginPath();c.moveTo(0,-11);c.quadraticCurveTo(1,-17,5,-19);c.stroke()
  for(const[x,r]of[[-7,9],[7,9],[0,10]]){c.beginPath();c.ellipse(x,0,r,11,0,0,P);c.fillStyle='#ec7a22';c.fill();c.stroke()}
  c.restore()
  // lid: rim band and raised top with the sip hole
  L([[-52,-58],[52,-58],[50,-70],[-50,-70]]);c.fillStyle='#fffdf8';c.fill();c.lineWidth=6;c.stroke()
  c.beginPath();c.moveTo(-44,-70);c.bezierCurveTo(-42,-84,42,-84,44,-70);c.closePath();c.fillStyle='#f1ebe0';c.fill();c.stroke()
  c.beginPath();c.ellipse(-22,-77,8,3.4,-.12,0,P);c.fillStyle=K;c.fill()
  // knit mitten gripping the right side, thumb over the front
  const mt=()=>{c.beginPath();c.moveTo(30,-30);c.bezierCurveTo(52,-40,76,-24,72,6);c.bezierCurveTo(70,28,56,40,40,38);c.lineTo(34,10);c.closePath()}
  c.save();mt();c.fillStyle='#b8862a';c.fill();c.clip();c.translate(-5,-4);mt();c.fillStyle='#e2ae45';c.fill()
  c.strokeStyle='#b8862a';c.lineWidth=3;c.beginPath();for(let k=0;k<4;k++){const y=-18+k*13;c.moveTo(40,y);c.lineTo(48,y+6);c.lineTo(56,y);c.moveTo(56,y);c.lineTo(64,y+6);c.lineTo(72,y)}c.stroke()
  c.restore();c.lineWidth=6;mt();c.stroke()
  c.lineWidth=24;c.beginPath();c.moveTo(40,2);c.quadraticCurveTo(26,-4,18,-14);c.stroke();c.lineWidth=13;c.strokeStyle='#e2ae45';c.stroke();c.strokeStyle=K
  c.beginPath();c.moveTo(36,36);c.lineTo(66,22);c.lineTo(76,42);c.lineTo(46,58);c.closePath();c.fillStyle='#c4442c';c.fill();c.stroke()
  c.strokeStyle='#8f2a18';c.lineWidth=3;c.beginPath();for(let k=1;k<5;k++){c.moveTo(36+k*6,36-k*2.8);c.lineTo(46+k*6,58-k*2.8)}c.stroke()
  // where the sip hole is in canvas space, for the steam
  const hm=c.getTransform(),hx=hm.a*-22+hm.c*-78+hm.e,hy=hm.b*-22+hm.d*-78+hm.f
  c.restore()
  // steam from the sip hole, smaller while it's being sipped
  for(let k=0;k<2;k++){
    const Lk=(40+10*k+6*S(P*t+k*2))*(1-.8*u),pts=[],n=20
    if(Lk<8)continue
    for(let j=0;j<=n;j++){const yy=Lk*j/n,v=j/n,A=2+yy*.16,ph=yy*.12-P*2*t+k*2.6,w=S(PI*v)**.8*(6-1.5*v)
      pts.push([hx+(k?10:-6)*Math.min(1,yy/20)+A*S(ph),hy-6-yy,w,A*.12*C(ph)+.16*S(ph)])}
    const Lp=pts.map(([x,y,w,d])=>[x-w/Math.hypot(1,d),y-w*d/Math.hypot(1,d)]),Rp=pts.map(([x,y,w,d])=>[x+w/Math.hypot(1,d),y+w*d/Math.hypot(1,d)]).reverse()
    L([...Lp,...Rp]);c.fillStyle='#fffaf2';c.fill();c.lineWidth=4.5;c.stroke()
  }
  // a happy heart floats up after the sip
  if(t>.62&&t<.98){
    const v=(t-.62)/.36,k=Math.min(1,v*5)*Math.min(1,(1-v)*4),x=66-8*v+4*S(P*v*1.5),y=84-44*v
    c.save();c.translate(x,y);c.scale(1.3*k,1.3*k);c.rotate(-.15)
    c.beginPath();c.moveTo(0,10);c.bezierCurveTo(-18,-2,-12,-16,0,-8);c.bezierCurveTo(12,-16,18,-2,0,10);c.fillStyle='#e8562a';c.fill();c.lineWidth=4;c.stroke()
    c.restore()
  }
}
