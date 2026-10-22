// bubble tea cup with tapioca pearls riding up the straw and jiggling at the bottom
const{sin,cos,PI,hypot}=Math,T=2*PI
export const frames=20,delay=70
const TEA='#ffd8a8',PE='#5c3d2e',ST='#f783ac',LID='#e7f5ff',BL='#ffa8a8'
const S0=[146,196],S1=[172,22]
export default(c,t)=>{
  for(const[w,s]of[[30,'#111'],[20,ST]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(...S0),c.lineTo(...S1),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  for(let k=0;k<4;k++){const p=(t+k/4)%1,x=S0[0]+(S1[0]-S0[0])*p,y=S0[1]+(S1[1]-S0[1])*p;if(y<70){c.fillStyle=PE;c.beginPath();c.arc(x,y,7,0,T);c.fill()}}
  const cup=()=>{c.beginPath();c.moveTo(62,84);c.lineTo(194,84);c.lineTo(178,232);c.quadraticCurveTo(176,240,168,240);c.lineTo(88,240);c.quadraticCurveTo(80,240,78,232);c.closePath()}
  cup();c.fillStyle=TEA;c.fill()
  c.save();cup();c.clip()
  c.fillStyle='#fff8f0';c.fillRect(50,84,160,22)
  c.fillStyle=PE;for(let k=0;k<11;k++){const x=92+(k%6)*15+(k>5?8:0),y=224-(k>5?14:0)+2*sin(2*T*t+k);c.beginPath();c.arc(x,y,8,0,T);c.fill()}
  c.fillStyle='#fff';for(let k=0;k<11;k++){const x=92+(k%6)*15+(k>5?8:0),y=224-(k>5?14:0)+2*sin(2*T*t+k);c.beginPath();c.arc(x-3,y-3,2,0,T);c.fill()}
  c.restore();cup();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(66,106);c.lineTo(190,106);c.stroke();c.lineWidth=7
  c.fillStyle=LID;c.beginPath();c.moveTo(54,84);c.bezierCurveTo(60,36,196,36,202,84);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(50,78,156,14,7);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(108,70,18,PI*1.15,PI*1.45);c.stroke();c.lineWidth=7
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22,146,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22-2,144,2.2,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,154,9,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,160,9,5,0,0,T),c.fill()
}
