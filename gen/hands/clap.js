// two mitten hands clapping twice per loop with a burst of lines each time they meet
const{sin,cos,PI}=Math,T=2*PI
export const delay=60
export default(c,t)=>{
  const k=(1+cos(2*T*t))/2,g=8+44*k
  if(k<.12)for(const d of[-1,1])for(const a of[-.5,0,.5]){
    const ang=-PI/2+d*(.55+a*.5)
    for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+cos(ang)*58,104+sin(ang)*58),c.lineTo(128+cos(ang)*84,104+sin(ang)*84),c.stroke()
  }
  c.lineWidth=7;c.strokeStyle='#111'
  for(const d of[-1,1]){
    c.save();c.translate(128+d*g,212);c.scale(d,1);c.rotate(-.22-.12*k)
    c.beginPath();c.ellipse(-2,-74,12,24,-.5,0,T);c.fill();c.stroke()
    c.beginPath();c.roundRect(0,-150,46,118,23);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();for(const x of[12,23,34])c.moveTo(x,-150+8),c.lineTo(x,-126);c.stroke();c.lineWidth=7
    c.beginPath();c.roundRect(-3,-40,52,22,5);c.fill();c.stroke()
    c.restore()
  }
}
