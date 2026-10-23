// dormouse asleep in a teacup: its back rises and falls with each breath, z's drift up, an ear twitches, its tail hangs over the side
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const b=sin(T*t),tw=t>.55&&t<.62?.3:0
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(let i=0;i<2;i++){
    const q=(t+i/2)%1,z=sin(PI*q)*(7+5*q),x=150+44*q+6*sin(T*q),y=84-58*q
    c.lineWidth=4;c.beginPath();c.moveTo(x-z,y-z);c.lineTo(x+z,y-z);c.lineTo(x-z,y+z);c.lineTo(x+z,y+z);c.stroke()
  }
  c.lineWidth=6
  shape(()=>c.ellipse(128,216,98,16,0,0,T))
  c.lineWidth=12;c.beginPath();c.ellipse(56,166,18,22,0,0,T);c.stroke()
  c.lineWidth=15;c.beginPath();c.moveTo(170,136);c.quadraticCurveTo(214,130,216+4*sin(T*t+1),194);c.stroke();c.lineWidth=6
    shape(()=>c.ellipse(128,140,70,14,0,0,T))
  shape(()=>c.ellipse(142,140-3*b,50,24+4*b,0,0,T))
  c.save();c.translate(82,102+b);c.rotate(-tw);shape(()=>c.arc(0,0,15,0,T));c.restore()
  shape(()=>c.arc(122,100+b,15,0,T))
  shape(()=>c.ellipse(102,126+b,30,25,0,0,T))
  shape(()=>{c.moveTo(58,140);c.bezierCurveTo(60,196,94,212,128,212);c.bezierCurveTo(162,212,196,196,198,140);c.ellipse(128,140,70,14,0,0,PI)})
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5
  c.beginPath();c.ellipse(128,140,70,14,0,.04*PI,.96*PI);c.stroke()
  c.beginPath();c.ellipse(128,210,40,6,0,.05*PI,.95*PI);c.stroke()
  c.beginPath();c.ellipse(102,126+b,30,25,0,-1.3,-.1);c.stroke()
  c.lineWidth=3;c.beginPath();c.arc(82,104+b,7,-2.6,-.6);c.stroke();c.beginPath();c.arc(122,102+b,7,-2.6,-.6);c.stroke()
  c.beginPath();c.moveTo(128,184);c.bezierCurveTo(112,170,108,186,128,196);c.bezierCurveTo(148,186,144,170,128,184);c.fill()
  for(const d of[-1,1])c.beginPath(),c.arc(102+d*12,122+b,5,.15*PI,.85*PI),c.stroke()
  c.beginPath();c.arc(102,134+b,3.5,0,T);c.fill()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=3
  for(const x of[72,134])c.beginPath(),c.ellipse(x,152,10,7,0,0,T),c.fill(),c.stroke()
}
