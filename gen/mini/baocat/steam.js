// bao bun cat: a soft steamed bun with cat ears and a pleated top, it squishes, blinks and puffs curls of steam
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const q=sin(T*t*2),bl=t>.7&&t<.76
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(128,128);c.scale(1.12,1.12);c.translate(-128,-128)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(const[i,x]of[104,128,152].entries()){
    const L=30+10*sin(T*t+i*2.1),y0=78
    c.lineWidth=5;c.beginPath()
    for(let y=0;y<=L;y+=2)c.lineTo(x+6*sin(y/9-T*t*2+i),y0-y)
    c.stroke()
  }
  c.lineWidth=6
  c.translate(128,214);c.scale(1+.035*q,1-.045*q);c.translate(-128,-214)
  for(const d of[-1,1])shape(()=>{c.moveTo(128+d*30,104);c.lineTo(128+d*58,66);c.lineTo(128+d*76,124)})
  shape(()=>{c.moveTo(52,212);c.bezierCurveTo(36,140,84,98,128,98);c.bezierCurveTo(172,98,220,140,204,212);c.quadraticCurveTo(128,222,52,212)})
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3
  c.beginPath();for(let a=0;a<2.6*PI;a+=.2){const r=a*4.2;c.lineTo(128+r*cos(-a),122+.42*r*sin(-a))}c.stroke()
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*26,160,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*26,162,6.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(122,172,6,.1*PI,.9*PI);c.arc(134,172,6,.1*PI,.9*PI);c.stroke()
}
