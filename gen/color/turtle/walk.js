// turtle plodding along in place: legs stepping in diagonal pairs, head bobbing, shell rocking
const{sin,cos,PI,abs,max}=Math,T=2*PI
export const frames=16,delay=80
const SH='#51cf66',RIM='#2f9e44',SK='#ffe066',BL='#ffa8a8'
export default(c,t)=>{
  const y=-2*abs(sin(T*t)),hb=3*sin(2*T*t)
  for(const[x,ph]of[[84,0],[110,PI],[150,PI],[176,0]]){
    const l=max(0,sin(T*t+ph))*9,s=6*cos(T*t+ph)
    c.fillStyle=SK;c.beginPath();c.roundRect(x-13+s,170+y-l,26,46,12);c.fill();c.stroke()
  }
  c.fillStyle=SK;c.beginPath();c.moveTo(58,170+y);c.lineTo(34,184+y);c.lineTo(60,186+y);c.closePath();c.fill();c.stroke()
  for(const[w,s]of[[34,'#111'],[20,SK]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(184,172+y),c.lineTo(204,148+y+hb),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.fillStyle=RIM;c.beginPath();c.roundRect(48,160+y,164,22,11);c.fill();c.stroke()
  c.fillStyle=SH;c.beginPath();c.moveTo(56,166+y);c.arc(130,166+y,74,PI,0);c.closePath();c.fill();c.stroke()
  c.save();c.beginPath();c.moveTo(56,166+y);c.arc(130,166+y,74,PI,0);c.closePath();c.clip()
  c.lineWidth=5;c.beginPath()
  const hx=(a,r)=>[130+cos(a)*r,124+y+sin(a)*r]
  for(let k=0;k<=6;k++){const[x,yy]=hx(k*PI/3,24);k?c.lineTo(x,yy):c.moveTo(x,yy)}
  for(const a of[PI,PI*4/3,PI*5/3,0]){const[x,yy]=hx(a,24),[x2,y2]=hx(a,90);c.moveTo(x,yy);c.lineTo(x2,a==PI||a==0?160+y:y2)}
  c.stroke();c.restore();c.lineWidth=7
  c.beginPath();c.moveTo(56,166+y);c.arc(130,166+y,74,PI,0);c.closePath();c.stroke()
  c.fillStyle=SK;c.beginPath();c.arc(210,140+y+hb,25,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(218,132+y+hb,5.5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(216,130+y+hb,2,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(214,144+y+hb,9,.1*PI,.6*PI);c.stroke()
  c.fillStyle=BL;c.beginPath();c.ellipse(204,146+y+hb,6,4,0,0,T);c.fill()
}
