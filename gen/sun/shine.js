// sun in sunglasses, rays slowly turning and pulsing, a glint sliding across the lenses
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=80
export default(c,t)=>{
  const rot=t*T/6
  for(let k=0;k<12;k++){
    const a=rot+k*T/12,r1=60,r2=(k%2?86:100)+4*sin(2*T*t+k),w=.12
    c.beginPath();c.moveTo(128+r1*cos(a-w),128+r1*sin(a-w));c.lineTo(128+r2*cos(a),128+r2*sin(a));c.lineTo(128+r1*cos(a+w),128+r1*sin(a+w));c.closePath();c.fill();c.stroke()
  }
  c.beginPath();c.arc(128,128,62,0,T);c.fill();c.stroke()
  c.fillStyle='#111'
  for(const d of[-1,1])c.beginPath(),c.roundRect(128+d*24-20,104,40,28,[6,6,16,16]),c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(112,110);c.quadraticCurveTo(128,104,144,110);c.stroke()
  c.beginPath();c.moveTo(86,110);c.lineTo(70,104);c.moveTo(170,110);c.lineTo(186,104);c.stroke()
  const g=((t*1.6)%1)*90-30
  c.save();c.beginPath();for(const d of[-1,1])c.roundRect(128+d*24-20,104,40,28,[6,6,16,16]);c.clip()
  c.strokeStyle='#fff';c.lineWidth=5;for(const o of[0,12])c.beginPath(),c.moveTo(80+g+o,136),c.lineTo(98+g+o,100),c.stroke()
  c.restore()
  c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.arc(128,146,18,.2*PI,.8*PI);c.stroke()
}
