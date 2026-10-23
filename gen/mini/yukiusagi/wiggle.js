// yukiusagi, a snow bunny mound with leaf ears and berry eyes: the leaves wiggle, it gives a little squish and blinks while snowflakes drift down
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const q=sin(T*t*2),bl=t>.62&&t<.68
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(0,11)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(const[i,x]of[34,222,62,196].entries()){const p=(t+i/4)%1;c.beginPath();c.arc(x+8*sin(T*p),20+150*p,5*sin(PI*p),0,T);c.fill()}
  c.lineWidth=6
  c.translate(128,206);c.scale(1+.03*q,1-.04*q);c.translate(-128,-206)
  for(const d of[-1,1]){
    c.save();c.translate(128+d*22,116);c.rotate(d*(.42+.14*sin(T*t*2+(d>0?0:2))))
    shape(()=>{c.moveTo(0,4);c.bezierCurveTo(-24,-20,-18,-62,0,-82);c.bezierCurveTo(18,-62,24,-20,0,4)})
    c.fillStyle=c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(0,0);c.lineTo(0,-70)
    for(const y of[-22,-40,-56])c.moveTo(0,y),c.lineTo(-9,y-10),c.moveTo(0,y),c.lineTo(9,y-10)
    c.stroke();c.restore();c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  }
  shape(()=>{c.moveTo(46,206);c.bezierCurveTo(30,142,82,112,128,112);c.bezierCurveTo(174,112,226,142,210,206);c.closePath()})
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*28,156,7,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*28,158,7.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(122,168,6,.1*PI,.9*PI);c.arc(134,168,6,.1*PI,.9*PI);c.stroke()
}
