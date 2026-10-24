// empty shopping cart rolling back and forth with a sad face and a tear, one lonely crumb sliding around the bottom of its basket
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
const BK='#d0ebff',GR='#74c0fc',MT='#ced4da',HD='#ff6b6b',CR='#e0a96d',CH='#8b5a3c',BL='#ffa8a8',TR='#74c0fc'
const bas=c=>{c.beginPath();c.moveTo(56,80);c.lineTo(222,80);c.lineTo(200,168);c.lineTo(78,168);c.closePath()}
export default(c,t)=>{
  const dx=10*sin(t*T),cx=140-38*sin(t*T-.9)
  c.translate(dx,0)
  for(const[w,s]of[[14,'#111'],[6,MT]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(60,84),c.lineTo(36,62),c.moveTo(84,166),c.lineTo(92,196),c.lineTo(192,196),c.lineTo(198,166),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6
  c.save();c.translate(34,60);c.rotate(.74);c.fillStyle=HD;c.beginPath();c.roundRect(-14,-9,24,18,9);c.fill();c.stroke();c.restore()
  for(const x of[100,184]){
    c.save();c.translate(x,214);c.rotate(dx/16);c.fillStyle='#495057';c.lineWidth=6;c.beginPath();c.arc(0,0,17,0,T);c.fill();c.stroke()
    c.fillStyle=MT;c.lineWidth=4;c.beginPath();c.arc(0,0,7,0,T);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,0,12,-.6,.6);c.stroke();c.restore()
  }
  c.strokeStyle='#111';c.lineWidth=7;bas(c);c.fillStyle=BK;c.fill()
  c.save();bas(c);c.clip();c.strokeStyle=GR;c.lineWidth=4;c.beginPath()
  for(const y of[102,124,146])c.moveTo(40,y),c.lineTo(230,y)
  for(let k=0;k<7;k++)c.moveTo(78+k*22,80),c.lineTo(86+k*19,168)
  c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=7;bas(c);c.stroke()
  for(const[w,s]of[[14,'#111'],[6,MT]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(50,80),c.lineTo(228,80),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(cx,159);c.rotate((cx-140)/8);c.fillStyle=CR;c.lineWidth=3.5;c.beginPath();for(let k=0;k<6;k++){const a=k*T/6,r=k%2?7:9.5;c.lineTo(cos(a)*r,sin(a)*r)}c.closePath();c.fill();c.stroke()
  c.fillStyle=CH;c.beginPath();c.arc(2,-1,2.5,0,T);c.fill();c.restore()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(139+d*22,112,6.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(137+d*22,110,2.2,0,T),c.fill()
  c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(139+d*12,96),c.lineTo(139+d*30,101),c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(139,146,11,1.15*PI,1.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(139+d*38,126,8,5,0,0,T),c.fill()
  const p=(t*2)%1,ty=118+p*34
  if(p<.85){c.fillStyle=TR;c.lineWidth=3;c.beginPath();c.moveTo(117,ty);c.quadraticCurveTo(124,ty+10,117,ty+12);c.quadraticCurveTo(110,ty+10,117,ty);c.fill();c.stroke()}
}
