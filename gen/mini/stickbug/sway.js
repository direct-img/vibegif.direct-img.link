// stick insect: it rocks back and forth like a twig in the breeze with its feet planted, antennae swaying, it blinks
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=sin(T*t),dx=10*s,dy=-3*cos(T*t*2),bl=t>.62&&t<.68
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=5
  c.translate(128,128);c.scale(.9,.9);c.translate(-128,-124)
  for(const[hx,hy,kx,ky,fx]of[[64,156,34,176,18],[108,146,96,180,80],[150,136,180,166,200]])
    c.beginPath(),c.moveTo(hx+dx,hy+dy),c.lineTo(kx+dx,ky+dy),c.lineTo(fx,210),c.stroke()
  c.save();c.translate(dx,dy)
  c.lineWidth=16;c.beginPath();c.moveTo(18,150);c.quadraticCurveTo(24,164,40,160);c.lineTo(176,128);c.stroke()
  c.lineWidth=3;for(const i of[0,1])c.beginPath(),c.moveTo(202,104),c.bezierCurveTo(214,84-8*i,226+4*sin(T*t*2+i),74-10*i,244-10*i,66-18*i+5*sin(T*t+i*2)),c.stroke()
  c.lineWidth=6;c.beginPath();c.ellipse(194,118,22,19,-.2,0,T);c.fill();c.stroke()
  c.fillStyle=c.strokeStyle='#111'
  c.lineWidth=3;for(const x of[64,108,150])c.beginPath(),c.moveTo(x-1,163-.235*(x-40)-8),c.lineTo(x+1,163-.235*(x-40)+5),c.stroke()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(201,111,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(201,113,6,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(205,122,5,.15*PI,.75*PI);c.stroke()
  c.restore()
}
