// emoticon dead, X eyes and tongue lolling out while a little ghost soul wriggles out of the mouth and floats away
export const frames=48,delay=60
const P=Math.PI,{sin,cos,max,min}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
// ghost soul: round head, wavy tail tapering to (tx,ty) relative, peaceful closed eyes
const soul=(c,x,y,s,tx,ty,ink)=>{
  c.save();c.translate(x,y);c.scale(s,s)
  c.beginPath();c.moveTo(-23,0);c.arc(0,0,23,P,2*P)
  c.bezierCurveTo(23,18,tx*.3+12,ty*.55,tx,ty)
  c.bezierCurveTo(tx*.3-4,ty*.45,-23,22,-23,0)
  c.fillStyle='#fff';c.fill();c.lineWidth=5/s;c.strokeStyle=ink;c.stroke()
  c.lineWidth=4/s;c.beginPath()
  for(const e of[-8,8]){c.moveTo(e-5,-3);c.quadraticCurveTo(e,2,e+5,-3)}
  c.stroke();c.beginPath();c.arc(0,8,3,0,2*P);c.fillStyle=ink;c.fill();c.restore()
}
export default(c,t)=>{
  const a=-.24
  c.translate(118,146);c.rotate(a)
  c.beginPath();c.arc(0,0,96,0,2*P)
  c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  // X eyes
  c.lineWidth=10
  for(const s of[-1,1]){const x=s*40,y=-14;c.beginPath();c.moveTo(x-13,y-13);c.lineTo(x+13,y+13);c.moveTo(x+13,y-13);c.lineTo(x-13,y+13);c.stroke()}
  // slack mouth with the tongue flopped out of one corner, swaying limply
  c.save();c.translate(16,47);c.rotate(.12*sin(2*P*t))
  c.beginPath();c.moveTo(-12,0);c.lineTo(-12,20);c.arc(0,20,12,P,0,true);c.lineTo(12,0)
  c.fillStyle='#fff';c.fill();c.lineWidth=7;c.stroke()
  c.beginPath();c.moveTo(0,5);c.lineTo(0,19);c.lineWidth=4;c.stroke();c.restore()
  c.beginPath();c.moveTo(-36,44);c.quadraticCurveTo(0,51,38,44);c.lineWidth=9;c.stroke()
  // the soul: squeezes out of the mouth (0-.24), drifts up between the eyes and off to the corner, then fades away
  c.rotate(-a)
  const m=[cos(a)*-4-sin(a)*46,sin(a)*-4+cos(a)*46],e=ez(t/.24),r=ez((t-.14)/.7),f=cl((t-.8)/.18)
  const x=m[0]-10.5+98*ez((r-.45)/.55)**1.1+3*sin(r*P*3)*(1-r),y=m[1]-14*e-136*r**.9,s=(.3+.32*e+.38*ez((t-.45)/.14))*(1-f*f)
  const att=1-ez((t-.18)/.12),wg=sin(t*2*P*3)
  if(s>.05)soul(c,x,y,s,(m[0]-x)/s*att+(-8*wg-6)*(1-att),(m[1]-y)/s*att+(32+4*wg)*(1-att),f>.4?G:K)
}
