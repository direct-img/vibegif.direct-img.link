// mouse sitting up and sniffing: nose twitching, whiskers wiggling, an ear flicking and its tail curling
const{sin,cos,PI}=Math,T=2*PI
export const delay=70
export default(c,t)=>{
  const sn=t<.5?sin(8*T*t):0,tw=2*sn,ef=t>.6&&t<.8?sin(PI*(t-.6)/.2):0,tc=sin(T*t)
  for(const[l,s]of[[15,'#111'],[6,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(160,214),c.bezierCurveTo(206,232,238,204,226,170+6*tc),c.quadraticCurveTo(216,142+8*tc,198,152+6*tc),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.ellipse(128,182,50,46,0,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.ellipse(128,194,28,24,0,0,T);c.stroke();c.lineWidth=7
  for(const x of[104,152])c.beginPath(),c.ellipse(x,226,19,9,0,0,T),c.fill(),c.stroke()
  for(const d of[-1,1]){
    c.save();c.translate(128+d*26,96);c.rotate(d>0?.35*ef:0)
    c.beginPath();c.arc(d*20,-26,30,0,T);c.fill();c.stroke()
    c.lineWidth=5;c.beginPath();c.arc(d*20,-26,16,0,T);c.stroke();c.lineWidth=7;c.restore()
  }
  c.beginPath();c.arc(128,112,46,0,T);c.fill();c.stroke()
  for(const x of[112,144])c.beginPath(),c.arc(x,166,10,0,T),c.fill(),c.stroke()
  for(const d of[-1,1])for(const a of[-.24,0,.24]){
    const x=128+d*16,y=132+tw*.5,e=(d>0?0:PI)+d*(a+.1*sn)
    for(const[l,s]of[[7,'#111'],[2.5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(x+46*cos(e),y+46*sin(e)),c.stroke()
  }
  c.strokeStyle='#111';c.fillStyle='#111'
  for(const x of[110,146])c.beginPath(),c.arc(x,106,7,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[108,144])c.beginPath(),c.arc(x,103,2.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.rect(123,145,10,9);c.fill();c.stroke();c.beginPath();c.moveTo(128,145);c.lineTo(128,154);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(128,128+tw);c.lineTo(128,139);c.arc(122,139,6,0,PI);c.moveTo(140,139);c.arc(134,139,6,0,PI);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,127+tw,8,6,0,0,T);c.fill()
}
