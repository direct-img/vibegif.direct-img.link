// happy rocket blasting up and away with a file strapped to its nose, flame flickering, speed streaks and little clouds rushing past
const{sin,PI,round}=Math,T=2*PI
export const frames=16,delay=70
const RD='#ff6b6b',NZ='#adb5bd',FO='#ff922b',FY='#ffd43b',AR='#4dabf7',LN='#d0ebff',BL='#ffa8a8'
const cloud=(c,x,y,s)=>{const b=[[-14*s,3*s,10*s],[2*s,-4*s,13*s],[17*s,3*s,9*s]];c.lineWidth=13;for(const[a,d,r]of b)c.beginPath(),c.arc(x+a,y+d,r,0,T),c.stroke();c.fillStyle='#fff';for(const[a,d,r]of b)c.beginPath(),c.arc(x+a,y+d,r,0,T),c.fill();c.lineWidth=7}
export default(c,t,i)=>{
  const b=round(4*sin(T*t)),w=.04*sin(2*T*t),fh=26+(i%2?10:0)+4*sin(4*T*t)
  c.translate(128,128);c.rotate(.6)
  for(const[x,o,L]of[[-56,0,40],[58,.5,40],[-70,.3,30],[72,.8,30]]){
    const p=(t*2+o)%1,y=-50+p*120,l=L*sin(PI*p)
    for(const[lw,s]of[[11,'#111'],[5,'#fff']])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y-l/2),c.lineTo(x,y+l/2),c.stroke()
  }
  c.strokeStyle='#111'
  for(const[x,o]of[[-88,.1],[90,.6]]){const p=(t+o)%1,s=sin(PI*p);if(s>.15)cloud(c,x,-46+p*92,.85*s)}
  c.translate(0,8+b);c.rotate(w);c.scale(.94,.94)
  c.fillStyle=FO;c.lineWidth=5;c.beginPath();c.moveTo(-18,66);c.quadraticCurveTo(-20,66+fh*.6,0,66+fh);c.quadraticCurveTo(20,66+fh*.6,18,66);c.closePath();c.fill();c.stroke()
  c.fillStyle=FY;c.beginPath();c.moveTo(-10,66);c.quadraticCurveTo(-10,66+fh*.45,0,66+fh*.7);c.quadraticCurveTo(10,66+fh*.45,10,66);c.closePath();c.fill()
  c.lineWidth=7;c.fillStyle=NZ;c.beginPath();c.roundRect(-20,54,40,16,5);c.fill();c.stroke()
  c.fillStyle=RD;for(const d of[-1,1]){c.beginPath();c.moveTo(d*24,18);c.quadraticCurveTo(d*50,30,d*50,64);c.lineTo(d*24,52);c.closePath();c.fill();c.stroke()}
  const bd=()=>{c.beginPath();c.moveTo(0,-56);c.bezierCurveTo(34,-40,34,0,30,58);c.lineTo(-30,58);c.bezierCurveTo(-34,0,-34,-40,0,-56);c.closePath()}
  c.fillStyle='#fff';bd();c.fill();c.save();bd();c.clip();c.fillStyle=RD;c.fillRect(-40,-70,80,34);c.fillRect(-40,44,80,20);c.restore();bd();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(-31,-36);c.lineTo(31,-36);c.moveTo(-31,44);c.lineTo(31,44);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*12,2,5,7,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*12-2,-1,2.2,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*20,15,6,3.5,0,0,T),c.fill()
  c.lineWidth=4.5;c.fillStyle='#ff8787';c.beginPath();c.moveTo(-7,11);c.quadraticCurveTo(0,23,7,11);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-20,-14,3.5,9,.15,0,T);c.fill()
  c.save();c.translate(0,-86);c.rotate(-1.4*w)
  for(const[lw,s]of[[9,'#111'],[4,'#ffd8a8']])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(-20,28),c.lineTo(-4,36),c.moveTo(20,28),c.lineTo(4,36),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#fff'
  c.beginPath();c.moveTo(-26,-38);c.lineTo(12,-38);c.lineTo(26,-24);c.lineTo(26,30);c.lineTo(-26,30);c.closePath();c.fill();c.stroke()
  c.fillStyle=LN;c.lineWidth=5;c.beginPath();c.moveTo(12,-38);c.lineTo(12,-24);c.lineTo(26,-24);c.closePath();c.fill();c.stroke()
  for(const[lw,s]of[[13,'#111'],[6,AR]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(0,16),c.lineTo(0,-18),c.moveTo(-12,-6),c.lineTo(0,-20),c.lineTo(12,-6),c.stroke()
  c.restore()
}
