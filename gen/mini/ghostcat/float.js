// ghost cat floating: a cat head on a sheet-like body that trails off into a curling tail, it bobs, dangles its droopy paws, the hem ripples and it blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=sin(T*t),bl=t>.3&&t<.36,w=x=>5*sin(x/12-T*t*2)
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(115,124+9*s);c.rotate(.05*cos(T*t));c.translate(-128,-124)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(const d of[-1,1])shape(()=>{c.moveTo(128+d*16,74);c.lineTo(128+d*42,38);c.lineTo(128+d*54,84)})
  shape(()=>{
    c.moveTo(78,100);c.bezierCurveTo(74,58,182,58,178,100)
    c.bezierCurveTo(182,140,176,160,196,176+w(10));c.bezierCurveTo(216,190+w(20),236,170,222,152+6*sin(T*t*2+1))
    c.bezierCurveTo(240,166,236,210,196,212);c.lineTo(180,212)
    for(let x=180;x>82;x-=16)c.quadraticCurveTo(x-8,226+w(x),x-16,212+w(x-16)*.4)
    c.bezierCurveTo(76,180,82,136,78,100)})
  c.lineWidth=13
  for(const d of[-1,1]){const k=6*sin(T*t*2+d)
    c.beginPath();c.moveTo(128+d*44,132);c.quadraticCurveTo(128+d*66,118+k*.4,128+d*76,130+k);c.stroke()}
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*20,92,6.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*20,95,6.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(122,108,6,.1*PI,.9*PI);c.arc(134,108,6,.1*PI,.9*PI);c.stroke()
}
