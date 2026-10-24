// smiling cardboard box drifting down under a striped parachute, swaying gently as little clouds float up past it
const{sin,PI,round}=Math,T=2*PI
export const frames=12,delay=110
const P=['#4dabf7','#fff','#ff6b6b','#fff','#4dabf7'],BX='#e0a96d',BXD='#c08552',TP='#ffd8a8',BL='#ff8787'
const cloud=(c,x,y,s)=>{const b=[[-14*s,3*s,10*s],[2*s,-4*s,13*s],[17*s,3*s,9*s]];c.lineWidth=13;for(const[a,d,r]of b)c.beginPath(),c.arc(x+a,y+d,r,0,T),c.stroke();c.fillStyle='#fff';for(const[a,d,r]of b)c.beginPath(),c.arc(x+a,y+d,r,0,T),c.fill();c.lineWidth=7}
const can=c=>{c.beginPath();c.moveTo(-98,0);c.bezierCurveTo(-98,-74,98,-74,98,0);for(let k=0;k<5;k++){const x=98-k*39.2;c.quadraticCurveTo(x-19.6,16,x-39.2,0)}c.closePath()}
export default(c,t)=>{
  const a=.13*sin(T*t),b=round(4*sin(2*T*t))
  for(const[x,o]of[[32,0],[222,.5]]){const p=(t+o)%1,s=sin(PI*p);if(s>.08)cloud(c,x,226-p*190,.8*s)}
  c.strokeStyle='#111'
  c.save();c.translate(128,24+b);c.rotate(a);c.translate(0,48)
  const L=[[-96,2],[-20,14],[20,14],[96,2]],K=[[-30,104],[-14,104],[14,104],[30,104]]
  for(const[lw,s]of[[7,'#111'],[3,'#fff']]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();L.forEach(([x,y],k)=>{c.moveTo(x,y);c.lineTo(...K[k])});c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7
  c.save();can(c);c.clip()
  const gx=k=>(-98+k*39.2)*1.3
  for(let k=0;k<5;k++){c.fillStyle=P[k];c.beginPath();c.moveTo(0,-110);c.lineTo(gx(k),30);c.lineTo(gx(k+1),30);c.closePath();c.fill()}
  c.lineWidth=4;c.beginPath();for(let k=1;k<5;k++)c.moveTo(0,-110),c.lineTo(gx(k),30);c.stroke()
  c.restore();c.lineWidth=7;can(c);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-50,-36,12,5,-.6,0,T);c.fill()
  c.fillStyle=BXD;c.beginPath();c.moveTo(-40,108);c.lineTo(-30,98);c.lineTo(30,98);c.lineTo(40,108);c.closePath();c.fill();c.stroke()
  c.fillStyle=BX;c.beginPath();c.roundRect(-44,104,88,60,8);c.fill();c.stroke()
  c.fillStyle=TP;c.lineWidth=5;c.beginPath();c.rect(-10,104,20,22);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*17,134,5,6.5,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*17-2,131,2.2,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*28,146,7,4,0,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.arc(0,141,7,.15*PI,.85*PI);c.stroke()
  c.restore()
}
