// campfire: three flame tongues flickering on two crossed logs, little face in the flame, sparks floating up
// the black flame gets a white rim so it still shows on dark backgrounds
const{sin,PI}=Math,T=2*PI
export const frames=20,delay=70
const tongue=(c,x,by,h,w,b)=>{
  c.moveTo(x+b,by-h)
  c.bezierCurveTo(x+w*.2+b*.5,by-h*.55,x+w,by-h*.5,x+w,by-w)
  c.arc(x,by-w,w,0,PI)
  c.bezierCurveTo(x-w,by-h*.5,x-w*.2+b*.5,by-h*.55,x+b,by-h)
}
export default(c,t)=>{
  const s=k=>sin(T*t*k)
  c.lineWidth=4
  for(const[x0,o]of[[98,0],[152,.4],[126,.75]]){const p=(t+o)%1;c.beginPath();c.arc(x0+10*sin(p*T*2+o*5),120-p*110,4*(1-p)+1.5,0,T);c.fill();c.stroke()}
  c.beginPath()
  tongue(c,128,214,156+8*s(2),54,14*s(2))
  tongue(c,96,214,100+8*s(3),34,-16+8*s(2))
  tongue(c,160,214,112+8*s(2),36,16-8*s(3))
  c.lineWidth=16;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()
  c.beginPath();tongue(c,128,212,92+6*s(3),30,8*s(2));c.fillStyle='#fff';c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*10,180,4,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,187,6,.15*PI,.85*PI);c.stroke()
  c.fillStyle='#fff';c.lineWidth=7
  for(const d of[-1,1]){
    c.save();c.translate(128,222);c.rotate(d*.22);c.beginPath();c.roundRect(-78,-13,156,26,13);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.ellipse(d*68,0,6,9,0,0,T);c.stroke();c.lineWidth=7;c.restore()
  }
}
