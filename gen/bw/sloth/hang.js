// sloth hanging from a branch by its arms, slowly swaying and taking a long sleepy blink
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=100
export default(c,t)=>{
  const a=.07*sin(T*t),bl=t>.5&&t<.8
  const dbl=(f,b,w)=>{c.beginPath();f();for(const[l,s]of[[b,'#111'],[w,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.stroke();c.strokeStyle='#111';c.lineWidth=7}
  for(const[x,r]of[[34,-.5],[222,.5]])c.beginPath(),c.ellipse(x,30,16,8,r,0,T),c.fill(),c.stroke()
  c.beginPath();c.roundRect(12,38,232,24,12);c.fill();c.stroke()
  c.lineWidth=4;for(const x of[40,196,220])c.beginPath(),c.moveTo(x,46),c.quadraticCurveTo(x+8,50,x+14,46),c.stroke();c.lineWidth=7
  c.translate(128,50);c.rotate(a);c.translate(-128,-50)
  for(const d of[-1,1])dbl(()=>{c.moveTo(128+d*24,212);c.quadraticCurveTo(128+d*36,232,128+d*30,240)},26,14)
  for(const d of[-1,1])dbl(()=>{c.moveTo(128+d*34,152);c.lineTo(128+d*36,56)},30,18)
  c.lineWidth=5
  for(const d of[-1,1])for(const o of[-8,0,8])c.beginPath(),c.moveTo(128+d*36+o,58),c.quadraticCurveTo(128+d*36+o+9,40,128+d*36+o-1,34),c.stroke()
  c.lineWidth=7
  c.beginPath();c.ellipse(128,182,46,50,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;for(const y of[180,196,212])c.beginPath(),c.arc(128,y-30,26,.35*PI,.65*PI),c.stroke();c.lineWidth=7
  c.beginPath();c.arc(128,130,40,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(128,138,30,24,0,0,T);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*15,136,12,6.5,d*.45,0,T),c.fill()
  c.fillStyle='#fff';c.strokeStyle='#fff'
  for(const d of[-1,1])if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(128+d*14,134,4,.15*PI,.85*PI),c.stroke()
  else{c.beginPath();c.arc(128+d*14,135,4.5,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.arc(128+d*14,135.5,2.8,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(128+d*14-1,134,1,0,T);c.fill()}
  c.strokeStyle='#111';c.fillStyle='#111';c.beginPath();c.ellipse(128,148,7,5,0,0,T);c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(128,149,9,.2*PI,.8*PI);c.stroke()
}
