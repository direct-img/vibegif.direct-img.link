// envelope flap opens, a letter with a beating heart slides out, then tucks back in and the flap closes
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
export default(c,t)=>{
  const fy=1-2*ease(t/.18)+2*ease((t-.82)/.18),ly=118-78*ease((t-.18)/.25)+78*ease((t-.62)/.2),hb=1+.15*sin(2*T*t*3)
  const flap=()=>{c.beginPath();c.moveTo(48,110);c.lineTo(128,110+64*fy);c.lineTo(208,110);c.closePath();c.fill();c.stroke()}
  c.beginPath();c.roundRect(48,108,160,108,10);c.fill();c.stroke()
  if(fy<0)flap()
  c.beginPath();c.rect(68,ly,120,96);c.fill();c.stroke()
  c.lineWidth=4;for(const y of[64,76])c.beginPath(),c.moveTo(92,ly+y),c.lineTo(164,ly+y),c.stroke()
  c.save();c.translate(128,ly+32);c.scale(hb,hb);c.fillStyle='#111';c.beginPath();c.moveTo(0,16);c.bezierCurveTo(-26,-2,-14,-22,0,-10);c.bezierCurveTo(14,-22,26,-2,0,16);c.fill();c.restore()
  c.lineWidth=7;c.fillStyle='#fff'
  c.beginPath();c.moveTo(48,116);c.lineTo(128,172);c.lineTo(208,116);c.lineTo(208,206);c.quadraticCurveTo(208,216,198,216);c.lineTo(58,216);c.quadraticCurveTo(48,216,48,206);c.closePath();c.fill();c.stroke()
  if(fy>=0)flap()
}
