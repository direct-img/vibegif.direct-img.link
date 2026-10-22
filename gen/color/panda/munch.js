// panda sitting and munching on a bamboo stalk, cheeks working, bamboo bobbing with every chew
// black parts get a white rim so they still show on dark backgrounds
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=80
const BB='#69db7c',PK='#ffa8c5'
export default(c,t)=>{
  const ch=abs(sin(2*PI*t*2)),by=6*ch
  const dark=f=>{c.beginPath();f();c.lineWidth=15;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()}
  for(const d of[-1,1])dark(()=>c.arc(128+d*46,56,20,0,T))
  for(const d of[-1,1])dark(()=>c.ellipse(128+d*40,222,24,16,0,0,T))
  c.fillStyle='#fff';c.beginPath();c.ellipse(128,180,62,52,0,0,T);c.fill();c.stroke()
  for(const d of[-1,1]){c.fillStyle=PK;c.beginPath();c.ellipse(128+d*40,224,10,7,0,0,T);c.fill()}
  c.fillStyle='#fff';c.beginPath();c.arc(128,100,56,0,T);c.fill();c.stroke()
  for(const d of[-1,1])c.fillStyle='#111',c.beginPath(),c.ellipse(128+d*24,96,15,19,d*.55,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*23,94,5,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,116,8,6,0,0,T);c.fill()
  c.fillStyle=PK;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*38,122+ch*2,10,6,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath()
  if(ch>.5)c.ellipse(128,132,7,5,0,0,T);else c.moveTo(118,130),c.quadraticCurveTo(123,136,128,130),c.quadraticCurveTo(133,136,138,130)
  c.stroke()
  for(const[x0,y0,x1,y1]of[[86,158,156,186-by],[176,152,176,170-by]])
    for(const[w,s]of[[36,'#fff'],[26,'#111']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,y0),c.lineTo(x1,y1),c.stroke()
  c.save();c.translate(196,230-by);c.rotate(-.42)
  for(const[w,s]of[[28,'#111'],[16,BB]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.lineTo(0,-118),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;for(const y of[-36,-80])c.beginPath(),c.moveTo(-9,y),c.lineTo(9,y),c.stroke()
  c.fillStyle=BB;for(const[a,y]of[[1,-104],[1,-88]])c.save(),c.translate(a*8,y),c.rotate(-.5+(y+96)*.03),c.beginPath(),c.ellipse(18,0,20,7,0,0,T),c.fill(),c.stroke(),c.restore()
  c.restore()
  for(const[x,y]of[[156,186],[176,170]])c.lineWidth=13,c.strokeStyle='#fff',c.beginPath(),c.arc(x,y-by,13,0,T),c.stroke(),c.fillStyle='#111',c.fill()
  c.lineWidth=7;c.strokeStyle='#111'
}
