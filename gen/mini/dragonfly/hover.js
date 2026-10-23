// dragonfly hovering, seen from above: four wings buzz between two poses every frame, a long banded tail, a slow figure-eight drift
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=70,rim=3
export default(c,t,i)=>{
  const z=i%2
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(128+5*sin(T*t),128+5*sin(T*t*2));c.rotate(.05*sin(T*t));c.translate(-128,-128)
  for(const[x,a]of[[166,.36],[144,-.42]])for(const d of[-1,1]){
    const l=z?66:80
    c.save();c.translate(x,128);c.scale(1,d);c.rotate(a+(z?.06:-.06))
    c.beginPath();c.ellipse(0,-l/2-4,11,l/2,0,0,T);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(0,-12);c.lineTo(0,-l+6);c.stroke()
    c.restore()
  }
  c.beginPath();c.moveTo(148,121);c.lineTo(40,125);c.lineTo(40,131);c.lineTo(148,135);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(158,128,20,13,0,0,T);c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(184,128+d*10,11,0,T),c.fill(),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2.5;for(const x of[66,88,110,130])c.beginPath(),c.moveTo(x,124),c.lineTo(x,132),c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(188,128+d*12,3.5,0,T),c.fill()
}
