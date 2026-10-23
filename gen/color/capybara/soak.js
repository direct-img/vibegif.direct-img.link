// capybara soaking in a hot spring with a yuzu on its head, eyes shut in bliss, bobbing gently as steam curls up
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=100
const SN='#d9a77a',BR='#c08552',BD='#8d6346',WA='#74c0fc',WL='#d0ebff',ST='#ced4da',SD='#adb5bd',YZ='#ffd43b',YD='#fab005',LF='#51cf66',BL='#ffa8a8'
export default(c,t)=>{
  const b=Math.round(3*sin(T*t)),yw=.1*sin(T*t-.8)
  const D=(wd,cl,f)=>{for(const[l,s]of[[wd,'#111'],[wd-8,cl]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  for(const[x,o]of[[56,0],[204,.5]]){const p=(t+o)%1,a=sin(PI*p)
    if(a>.15)D(12,'#fff',()=>{for(let k=0;k<=8;k++){const u=k/8;c.lineTo(x+7*sin(u*T+p*T),70-p*24-u*40)}})}
  c.fillStyle=ST
  for(const[x,y,rx,ry]of[[36,184,26,18],[220,182,28,20],[70,226,30,16],[188,228,32,16]])c.beginPath(),c.ellipse(x,y,rx,ry,0,0,T),c.fill(),c.stroke()
  c.fillStyle=WA;c.beginPath();c.ellipse(128,198,104,38,0,0,T);c.fill();c.stroke()
  c.save();c.translate(0,b)
  c.fillStyle=BR
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,84,11,9,0,0,T),c.fill(),c.stroke()
  c.beginPath();c.roundRect(68,80,120,130,[52,52,30,30]);c.fill();c.stroke()
  c.fillStyle=BD;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,85,5,4,0,0,T),c.fill()
  c.fillStyle=SN;c.beginPath();c.ellipse(128,156,40,28,0,0,T);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.fillStyle=BD;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*14,148,6,4,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(128,152);c.lineTo(128,162);c.moveTo(116,166);c.quadraticCurveTo(128,172,140,166);c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(128+d*30,118,9,1.15*PI,1.85*PI),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,132,8,5,0,0,T),c.fill()
  c.save();c.translate(128,70);c.rotate(yw)
  c.lineWidth=7;c.fillStyle=YZ;c.beginPath();c.ellipse(0,-14,26,22,0,0,T);c.fill();c.stroke()
  c.fillStyle=YD;for(const[x,y]of[[-10,-20],[6,-8],[12,-22],[-4,-6]])c.beginPath(),c.arc(x,y,2,0,T),c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-10,-24,6,4,-.5,0,T);c.fill()
  c.fillStyle=LF;c.lineWidth=5;c.beginPath();c.ellipse(10,-40,12,6,-.4,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(0,-36);c.lineTo(2,-42);c.stroke()
  c.restore()
  c.restore()
  c.lineWidth=7
  const wy=x=>196+3*sin(x/14+T*t*2)
  c.save();c.beginPath();c.ellipse(128,198,104,38,0,0,T);c.clip()
  c.fillStyle=WA;c.beginPath();c.moveTo(20,240);for(let x=20;x<=236;x+=4)c.lineTo(x,wy(x));c.lineTo(236,240);c.closePath();c.fill()
  c.beginPath();for(let x=60;x<=196;x+=4)c.lineTo(x,wy(x));c.stroke()
  c.strokeStyle=WL;c.lineWidth=4
  for(const[x,w]of[[96,22],[160,18],[128,34]]){const y=x==128?220:212;c.beginPath();c.moveTo(x-w,y);c.lineTo(x+w,y);c.stroke()}
  c.restore()
  c.strokeStyle='#111';c.lineWidth=7;c.beginPath();c.ellipse(128,198,104,38,0,0,T);c.stroke()
  c.fillStyle=ST;for(const[x,y,rx,ry]of[[70,226,30,16],[188,228,32,16]])c.beginPath(),c.ellipse(x,y,rx,ry,0,0,T),c.fill(),c.stroke()
  c.fillStyle=SD;for(const[x,y]of[[62,222],[196,224]])c.beginPath(),c.ellipse(x,y,8,4,0,0,T),c.fill()
}
