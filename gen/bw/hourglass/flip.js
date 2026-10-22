// sand runs from the top bulb to the bottom, then the hourglass flips over and it starts again
const{PI,min}=Math,T=2*PI
export const frames=24,delay=90
const glass=c=>{
  c.beginPath();c.moveTo(86,54);c.bezierCurveTo(86,100,120,110,122,128);c.bezierCurveTo(120,146,86,156,86,202)
  c.lineTo(170,202);c.bezierCurveTo(170,156,136,146,134,128);c.bezierCurveTo(136,110,170,100,170,54);c.closePath()
}
export default(c,t)=>{
  const p=min(1,t/.72),f=t>.75?(t-.75)/.25:0,e=f<.5?2*f*f:1-2*(1-f)**2
  c.translate(128,128);c.rotate(e*PI);c.translate(-128,-128)
  glass(c);c.fill()
  c.save();glass(c);c.clip();c.fillStyle='#111'
  if(f>0)c.fillRect(80,152-24*e,96,52+4*e)
  else{
    const top=72+p*56,lv=204-52*p,m=22*Math.sin(PI*p)
    c.fillRect(80,top,96,128-top)
    if(p>0){c.beginPath();c.moveTo(80,204);c.lineTo(80,lv+m*.4);c.quadraticCurveTo(128,lv-m,176,lv+m*.4);c.lineTo(176,204);c.fill()}
    if(p<1)c.fillRect(126,126,4,80)
  }
  c.restore()
  glass(c);c.stroke()
  for(const x of[74,182])for(const[w,s]of[[14,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,50),c.lineTo(x,206),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  for(const y of[36,204])c.beginPath(),c.roundRect(62,y,132,16,7),c.fill(),c.stroke()
}
