// custard pudding on a plate wobbling and jiggling, the caramel on top shining
// the whole pudding gets a white rim so the black caramel shows on dark backgrounds
const{sin,exp,PI}=Math,T=2*PI
export const frames=16,delay=70
const body=c=>{c.beginPath();c.moveTo(-66,0);c.lineTo(-46,-94);c.quadraticCurveTo(0,-108,46,-94);c.lineTo(66,0);c.quadraticCurveTo(0,8,-66,0);c.closePath()}
export default(c,t)=>{
  c.beginPath();c.ellipse(128,214,100,20,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(128,212,74,12,0,0,T);c.stroke();c.lineWidth=7
  const k=.16*sin(2*T*t),sy=1+.05*sin(4*T*t+.6)
  c.save();c.translate(128,212);c.transform(1,0,k,sy,0,0)
  body(c);c.lineWidth=16;c.strokeStyle='#fff';c.stroke();c.fill()
  c.save();body(c);c.clip();c.fillStyle='#111';c.beginPath();c.moveTo(-90,-130);c.lineTo(90,-130)
  for(let x=90;x>=-90;x-=2)c.lineTo(x,-82+[[-48,12],[-22,22],[4,10],[28,18],[52,9]].reduce((y,[d,L])=>y+L*exp(-(((x-d)/6)**2)),0))
  c.closePath();c.fill();c.restore()
  c.lineWidth=7;c.strokeStyle='#111';body(c);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-32,-94);c.quadraticCurveTo(-20,-100,-6,-100);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*18,-42,5.5,7.5,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*18-2,-45,2.2,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.arc(0,-32,9,.15*PI,.85*PI);c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const o of[-5,0,5])c.beginPath(),c.moveTo(d*38+o-2,-24),c.lineTo(d*38+o+2,-32),c.stroke()
  c.restore()
}
