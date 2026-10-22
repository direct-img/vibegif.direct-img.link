// ladybug crawling on a leaf, legs stepping, antennae twitching, wings peeking open now and then
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=70
const LF='#69db7c',VN='#2f9e44',R='#fa5252',WG='#e7f5ff'
export default(c,t)=>{
  c.save();c.translate(128,128);c.rotate(-.5)
  c.fillStyle=LF;c.beginPath();c.moveTo(-122,0);c.quadraticCurveTo(0,-118,122,0);c.quadraticCurveTo(0,118,-122,0);c.fill();c.stroke()
  c.strokeStyle=VN;c.lineWidth=5;c.beginPath();c.moveTo(-110,0);c.lineTo(110,0);for(const x of[-60,-20,20,60])c.moveTo(x,0),c.lineTo(x+26,-36),c.moveTo(x,0),c.lineTo(x+26,36);c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=7
  const y=4*sin(2*T*t),r=.08*sin(T*t),w=max(0,sin(PI*(t-.55)/.3))*(t>.55&&t<.85)
  c.translate(128,140+y);c.rotate(r)
  for(const d of[-1,1])for(let k=0;k<3;k++){
    const st=(k%2?1:-1)*d*5*sin(2*T*t)
    c.lineWidth=6;c.beginPath();c.moveTo(d*30,-22+k*24);c.lineTo(d*58,-34+k*28+st);c.lineTo(d*66,-24+k*30+st);c.stroke()
  }
  for(const d of[-1,1]){c.lineWidth=5;c.beginPath();c.moveTo(d*10,-58);c.quadraticCurveTo(d*18,-84,d*(28+3*sin(4*T*t+d)),-88);c.stroke();c.fillStyle='#111';c.beginPath();c.arc(d*(28+3*sin(4*T*t+d)),-88,5,0,T);c.fill()}
  c.lineWidth=7
  if(w>0)for(const d of[-1,1])c.fillStyle=WG,c.beginPath(),c.ellipse(d*30,20,26,52,d*.3,0,T),c.fill(),c.lineWidth=4,c.stroke(),c.lineWidth=7
  c.fillStyle='#111';c.beginPath();c.arc(0,-46,26,PI,0);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*11,-56,6,0,T),c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*11,-55,3,0,T),c.fill()
  for(const d of[-1,1]){
    c.save();c.translate(0,-44);c.rotate(-d*w*.45);c.translate(0,44)
    c.fillStyle=R;c.beginPath();c.moveTo(0,-44);c.arc(0,4,48,-PI/2,PI/2,d<0);c.closePath();c.fill();c.stroke()
    c.fillStyle='#111';for(const[x,yy,rr]of[[16,-14,9],[28,14,8],[12,26,7]])c.beginPath(),c.arc(d*x,yy,rr,0,T),c.fill()
    c.restore()
  }
}
