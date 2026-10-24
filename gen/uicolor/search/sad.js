// sad magnifying glass swaying side to side, big eyes peeking left and right for results, a little question mark bobbing beside it
const{sin,PI}=Math,T=2*PI
export const frames=14,delay=100
const RG='#9775fa',LN='#d0ebff',HN='#ffa94d',BL='#ffa8a8',QM='#ffd43b',SW='#74c0fc'
export default(c,t)=>{
  const a=.14*sin(t*T),x=112+10*sin(t*T),y=100+3*sin(2*T*t),lk=sin(t*T+.7),qs=1+.08*sin(2*T*t)
  c.save();c.translate(210,56+5*sin(2*T*t+1));c.scale(qs,qs);c.rotate(.15*sin(t*T))
  for(const[w,s]of[[17,'#111'],[8,QM]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(0,-14,13,PI*1.05,PI*2.45),c.lineTo(0,6),c.stroke()
  c.strokeStyle='#111';c.fillStyle=QM;c.lineWidth=4;c.beginPath();c.arc(0,22,6.5,0,T);c.fill();c.stroke();c.restore()
  c.save();c.translate(x,y);c.rotate(a)
  c.save();c.rotate(PI/4);c.fillStyle=HN;c.beginPath();c.roundRect(76,-15,68,30,15);c.fill();c.stroke()
  c.fillStyle=RG;c.beginPath();c.roundRect(66,-19,22,38,6);c.fill();c.stroke();c.restore()
  c.fillStyle=RG;c.beginPath();c.arc(0,0,72,0,T);c.fill();c.stroke()
  c.fillStyle=LN;c.beginPath();c.arc(0,0,56,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(0,0,44,PI*1.08,PI*1.38);c.stroke();c.strokeStyle='#111'
  c.lineWidth=4;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*21,-4,13,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*21+lk*5,-2,6.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*21+lk*5-2,-4,2,0,T),c.fill()
  c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(d*10,-26),c.lineTo(d*30,-21),c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(0,32,10,1.2*PI,1.8*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*36,16,7,4,0,0,T),c.fill()
  c.fillStyle=SW;c.lineWidth=3;c.beginPath();c.moveTo(40,-34);c.quadraticCurveTo(47,-23,40,-21);c.quadraticCurveTo(33,-23,40,-34);c.fill();c.stroke()
  c.restore()
}
