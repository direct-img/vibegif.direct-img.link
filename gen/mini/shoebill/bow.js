// shoebill: stands stock-still and deadpan, gives one slow blink, then a stiff little bow of its giant clog bill and straightens back up
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const b=t>.4&&t<.88?sin(PI*(t-.4)/.48)**2:0,bl=t>.14&&t<.26
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=7
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.lineWidth=6;for(const x of[100,128])c.beginPath(),c.moveTo(x+2,186),c.lineTo(x,232),c.moveTo(x-7,234),c.lineTo(x+13,234),c.stroke()
  c.translate(118,196);c.rotate(.1*b);c.translate(-118,-196)
  c.lineWidth=6
  shape(()=>{c.moveTo(92,180);c.lineTo(70,214);c.lineTo(100,200)})
  shape(()=>c.ellipse(116,146,40,54,.2,0,T))
  c.save();c.translate(136,104);c.rotate(.5*b)
  shape(()=>c.ellipse(4,-18,16,24,.15,0,T))
  const x=6,y=-40
  shape(()=>{c.moveTo(x-18,y-14);c.quadraticCurveTo(x-34,y-20,x-36,y-8);c.quadraticCurveTo(x-28,y-6,x-24,y)})
  shape(()=>c.arc(x,y,28,0,T))
  shape(()=>{c.moveTo(x+6,y-22);c.bezierCurveTo(x+40,y-26,x+70,y-16,x+84,y-2);c.quadraticCurveTo(x+90,y+8,x+80,y+14)
    c.lineTo(x+76,y+6);c.bezierCurveTo(x+60,y+24,x+30,y+28,x+4,y+22);c.closePath()})
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3
  c.beginPath();c.moveTo(x+14,y+8);c.quadraticCurveTo(x+50,y+14,x+78,y+6);c.stroke()
  const ex=x-2,ey=y-6
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(ex,ey-2,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(ex,ey,6,0,PI),c.fill(),c.lineWidth=3.5,c.beginPath(),c.moveTo(ex-8,ey),c.lineTo(ex+8,ey),c.stroke()
  c.restore()
  c.lineWidth=3;c.beginPath();c.moveTo(144,124);c.quadraticCurveTo(128,170,96,190);c.stroke()
}
