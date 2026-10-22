// bat flapping its wings and bobbing up and down
// every dark part gets its white rim in one pass first, so the bat reads as one silhouette on black
const{sin,cos,PI}=Math,T=2*PI
export const delay=60
export default(c,t)=>{
  const w=sin(2*T*t),y=118-8*w,E=[[100,-22],[78,18],[52,10],[30,26],[2,14]]
  const wing=d=>()=>{c.save();c.translate(128+d*14,y);c.scale(d,1);c.rotate(-.45*w);c.moveTo(0,-6);c.quadraticCurveTo(50,-46,...E[0]);for(let i=1;i<5;i++){const[p,q]=[E[i-1],E[i]];c.quadraticCurveTo((p[0]+q[0])/2,(p[1]+q[1])/2-12,...q)}c.closePath();c.restore()}
  const parts=[wing(-1),wing(1),()=>c.ellipse(128,y+18,22,28,0,0,T),()=>c.arc(128,y-14,24,0,T)]
  for(const d of[-1,1])parts.push(()=>{c.moveTo(128+d*8,y-34);c.lineTo(128+d*22,y-60);c.lineTo(128+d*22,y-24);c.closePath()})
  c.lineWidth=16;c.strokeStyle='#fff';for(const f of parts)c.beginPath(),f(),c.stroke()
  c.fillStyle='#111';for(const f of parts)c.beginPath(),f(),c.fill()
  c.lineWidth=3;c.strokeStyle='#fff'
  for(const d of[-1,1]){c.save();c.translate(128+d*14,y);c.scale(d,1);c.rotate(-.45*w);for(const[x,yy]of E.slice(1,4))c.beginPath(),c.moveTo(4,0),c.lineTo(x,yy-10),c.stroke();c.restore()}
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*10,y-16,7,0,T),c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*9,y-15,3.8,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*9-1.5,y-17,1.4,0,T),c.fill()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*3,y-3),c.lineTo(128+d*7,y+5),c.lineTo(128+d*9,y-3),c.closePath(),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(118,y-4);c.quadraticCurveTo(128,y,138,y-4);c.stroke()
}
