// the white rabbit running late: he frets over his pocket watch as its hand whirls, taps his foot, an ear twitches, a sweat drop slides
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const tp=max(0,sin(T*t*3)),tw=t>.4&&t<.48?.3:0,bl=t>.8&&t<.86,sd=(t*2)%1
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  c.translate(128,140);c.scale(.9,.9);c.translate(-128,-128-3*tp)
  shape(108,52,-.18,()=>c.ellipse(0,-6,12,34,0,0,T))
  shape(142,52,.2+tw,()=>c.ellipse(0,-6,12,34,0,0,T))
  shape(0,0,0,()=>c.ellipse(124,172,40,46,0,0,T))
  shape(98,222,0,()=>c.ellipse(0,0,24,9,0,0,T))
  shape(132,222+3*tp,-.35*tp,()=>c.ellipse(20,0,24,9,0,0,T))
  shape(0,0,0,()=>c.ellipse(124,98,36,32,0,0,T))
  c.lineWidth=11;c.beginPath();c.moveTo(156,152);c.lineTo(178,150);c.stroke();c.lineWidth=6
  shape(194,150,0,()=>c.arc(0,0,26,0,T))
  shape(194,120,0,()=>c.rect(-5,-5,10,7))
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=2.5
  c.beginPath();c.arc(194,150,20,0,T);c.stroke()
  for(let i=0;i<4;i++){const a=i*PI/2;c.beginPath();c.moveTo(194+15*cos(a),150+15*sin(a));c.lineTo(194+18*cos(a),150+18*sin(a));c.stroke()}
  const h=T*t*2-PI/2;c.lineWidth=3;c.beginPath();c.moveTo(194,150);c.lineTo(194+13*cos(h),150+13*sin(h));c.stroke()
  c.beginPath();c.arc(194,150,3,0,T);c.fill()
  c.lineWidth=2;c.setLineDash([3,4]);c.beginPath();c.moveTo(186,176);c.quadraticCurveTo(160,196,132,170);c.stroke();c.setLineDash([])
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(176,154,9,8,0,0,T);c.fill();c.stroke()
  c.fillStyle=c.strokeStyle='#111'
  c.beginPath();c.moveTo(124,132);c.lineTo(110,124);c.lineTo(110,140);c.closePath();c.moveTo(124,132);c.lineTo(138,124);c.lineTo(138,140);c.closePath();c.fill()
  for(const x of[124,124])c.beginPath(),c.arc(x,156,2.5,0,T),c.arc(x,170,2.5,0,T),c.fill()
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(124+d*14+4,94,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(124+d*14+4,96,5.5,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.moveTo(124+d*8+4,81),c.lineTo(124+d*19+4,86),c.stroke()
  c.beginPath();c.ellipse(130,106,4,3,0,0,T);c.fill()
  c.beginPath();c.moveTo(124,114);c.quadraticCurveTo(130,110,136,114);c.stroke()
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=4
  if(sd<.8){const y=76+24*sd,z=sin(PI*sd/.8);c.save();c.translate(82,y);c.scale(z,z);c.beginPath();c.moveTo(0,-8);c.quadraticCurveTo(7,2,0,6);c.quadraticCurveTo(-7,2,0,-8);c.fill();c.stroke();c.restore()}
}
