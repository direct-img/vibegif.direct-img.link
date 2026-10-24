// red battery nearly drained, its last little bar blinking, wobbling tiredly with a worried sweaty face and drops sliding down
const{sin,PI,floor}=Math,T=2*PI
export const frames=16,delay=90
const R='#ff6b6b',RD='#fa5252',CAP='#ced4da',DR='#a5d8ff',BL='#ffa8a8'
const drop=(c,x,y,s)=>{c.fillStyle=DR;c.lineWidth=4;c.beginPath();c.moveTo(x,y-11*s);c.quadraticCurveTo(x+9*s,y+2*s,x,y+5*s);c.quadraticCurveTo(x-9*s,y+2*s,x,y-11*s);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x-2*s,y,1.8*s,0,T);c.fill()}
export default(c,t,i)=>{
  const on=floor(t*4)%2==0,r=.05*sin(T*t),sq=1+.025*sin(2*T*t)
  c.save();c.translate(128,236);c.rotate(r);c.scale(2-sq,sq);c.translate(-128,-236)
  c.fillStyle=CAP;c.beginPath();c.roundRect(102,18,52,26,8);c.fill();c.stroke()
  c.fillStyle=on?R:'#ffa8a8';c.beginPath();c.roundRect(62,38,132,198,28);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(80,56,96,162,16);c.fill();c.stroke()
  if(on){c.fillStyle=RD;c.lineWidth=5;c.beginPath();c.roundRect(90,190,76,18,7);c.fill();c.stroke()}
  else{c.strokeStyle='#ffa8a8';c.lineWidth=4;c.setLineDash([6,6]);c.beginPath();c.roundRect(90,190,76,18,7);c.stroke();c.setLineDash([]);c.strokeStyle='#111'}
  c.fillStyle='#fff';c.beginPath();c.ellipse(76,74,4,12,0,0,T);c.fill()
  c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,100),c.lineTo(128+d*29,107),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*20,124,6,8,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*20-2,120,2.6,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*32,144,8,4.5,0,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.moveTo(114,158);for(let k=1;k<=7;k++)c.lineTo(114+k*4,158+(k%2?-4:0)+(i%2?1:0));c.stroke()
  for(const[x,o,z]of[[170,0,1.3],[88,.5,1]]){const p=(t*2+o)%1;drop(c,x,84+p*34,z*(.8+.3*p))}
  c.restore()
  for(const d of[-1,1])for(const[w,s]of[[9,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=s;const x=128+d*(86+(i%2)*3);c.beginPath();c.moveTo(x,96);c.lineTo(x+d*8,104);c.moveTo(x+2*d,118);c.lineTo(x+d*12,120);c.stroke()}
  c.strokeStyle='#111'
}
