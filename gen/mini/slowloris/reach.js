// slow loris on a branch: huge eyes in a dark mask, it slooowly stretches one arm up to the twig ahead, grips it and lets go, head tilting along, and blinks
const{sin,cos,PI,hypot}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const r=(1-cos(T*t))/2,bl=t>.06&&t<.12,hx=118+4*r,hy=112-2*r
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(0,-14)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  const body=()=>c.ellipse(86,170,50,30,-.1,0,T)
  c.lineWidth=16;c.beginPath();c.moveTo(24,205);c.quadraticCurveTo(128,186,232,197);c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(200,194);c.quadraticCurveTo(214,172,212,138);c.stroke()
  c.lineWidth=6;shape(()=>c.ellipse(210,128,9,16,.3,0,T))
  shape(body)
  for(const x of[54,96])shape(()=>c.ellipse(x,196,11,9,0,0,T))
  const sx=124,sy=156,ax=138+70*r,ay=186-18*r-34*sin(PI*r),qx=(sx+ax)/2+6+8*r,qy=(sy+ay)/2-6-10*r
  const arm=(o,p)=>{c.beginPath();c.moveTo(sx+o,sy+p);c.quadraticCurveTo(qx+o,qy+p,ax+o,ay+p);c.stroke()}
  c.lineWidth=14;arm(0,0)
  let nx=-(ay-sy),ny=ax-sx;const n=hypot(nx,ny);nx/=n;ny/=n;if(nx*(86-sx)+ny*(170-sy)<0)nx=-nx,ny=-ny
  c.save();c.beginPath();body();c.clip();c.strokeStyle='#111';c.lineWidth=3;arm(7.5*nx,7.5*ny);c.restore()
  shape(()=>c.arc(ax,ay,10,0,T))
  c.strokeStyle='#111';c.lineWidth=2.5;for(const d of[-4,4])c.beginPath(),c.moveTo(ax+d,ay-8),c.lineTo(ax+d,ay-2),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6
  c.save();c.translate(hx,hy);c.rotate(.2*r)
  for(const d of[-1,1])shape(()=>c.arc(d*31,-16,8,0,T))
  shape(()=>c.ellipse(0,0,38,34,0,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1]){c.beginPath();c.moveTo(d*8,-20);c.quadraticCurveTo(d*26,-20,d*26,-3);c.quadraticCurveTo(d*26,10,d*15,10);c.quadraticCurveTo(d*5,9,d*6,-4);c.closePath();c.fill()}
  c.fillStyle=c.strokeStyle='#fff'
  for(const d of[-1,1])if(bl)c.lineWidth=3,c.beginPath(),c.arc(d*16,-4,7,.2*PI,.8*PI),c.stroke()
  else c.lineWidth=2,c.beginPath(),c.arc(d*16,-3,6.5,0,T),c.stroke(),c.beginPath(),c.arc(d*16+2.5,-5.5,3,0,T),c.fill()
  c.fillStyle=c.strokeStyle='#111';c.beginPath();c.arc(0,16,3.5,0,T);c.fill()
  c.lineWidth=3;c.beginPath();c.arc(-5,20,5,.15*PI,.85*PI);c.arc(5,20,5,.15*PI,.85*PI);c.stroke()
  c.restore()
}
