// silk moth fluttering: a fluffy white moth beats its little wings, sways its feathery antennae and blinks its big eyes
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const f=sin(T*t*3),bl=t>.62&&t<.68
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  c.translate(0,4*sin(T*t*3+1.2))
  for(const d of[-1,1]){
    c.save();c.translate(128+d*12,132);c.scale(d,1);c.rotate(-.24*f-.04)
    shape(()=>{c.moveTo(0,8);c.bezierCurveTo(34,6,62,22,56,46);c.bezierCurveTo(42,62,12,52,0,30)})
    shape(()=>{c.moveTo(0,-8);c.bezierCurveTo(30,-40,70,-58,94,-52);c.quadraticCurveTo(92,-36,84,-30);c.bezierCurveTo(86,-6,60,14,0,16)})
    c.strokeStyle='#111';c.lineWidth=3
    c.beginPath();c.moveTo(66,-40);c.quadraticCurveTo(70,-14,50,4);c.stroke()
    c.beginPath();c.moveTo(42,22);c.quadraticCurveTo(48,38,36,48);c.stroke()
    c.restore()
  }
  c.lineWidth=3
  for(const d of[-1,1]){
    const s=4*sin(T*t*2+d),x0=128+d*12,y0=88,cx=128+d*22,cy=48,x1=128+d*50+s,y1=32
    c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(cx,cy,x1,y1);c.stroke()
    for(let k=1;k<=5;k++){
      const u=k/6,px=(1-u)**2*x0+2*u*(1-u)*cx+u*u*x1,py=(1-u)**2*y0+2*u*(1-u)*cy+u*u*y1,l=12-k
      c.beginPath();c.moveTo(px-d*l*.7,py-l*.7);c.lineTo(px,py);c.lineTo(px+d*l*.7,py+l*.7);c.stroke()
    }
  }
  c.lineWidth=6
  shape(()=>c.ellipse(128,172,20,38,0,0,T))
  for(const[x,y,r]of[[110,134,14],[146,134,14],[128,142,16]])shape(()=>c.arc(x,y,r,0,T))
  shape(()=>c.arc(128,110,30,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*15,108,7,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.ellipse(128+d*15,110,7,9,0,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(128,120,5,.2*PI,.8*PI);c.stroke()
  for(const[y,w]of[[186,13],[198,10]])c.beginPath(),c.moveTo(128-w,y),c.quadraticCurveTo(128,y+5,128+w,y),c.stroke()
}
