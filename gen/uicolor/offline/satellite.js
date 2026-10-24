// worried satellite dish sweeping back and forth hunting for a signal, its little signal waves breaking up into dots and fizzling out
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=100
const DS='#74c0fc',DI='#e7f5ff',ST='#adb5bd',BA='#868e96',FE='#ff6b6b',WV='#ffd43b',BL='#ffa8a8'
export default(c,t)=>{
  const a=.42*sin(T*t),lk=3.5*cos(T*t)
  c.fillStyle=BA;c.beginPath();c.roundRect(68,214,120,26,10);c.fill();c.stroke()
  c.fillStyle=ST;c.beginPath();c.roundRect(116,176,24,42,6);c.fill();c.stroke()
  c.save();c.translate(128,190);c.rotate(a)
  for(let k=0;k<3;k++){
    const p=(t*3+k/3)%1,r=18+40*p,d=max(1,14-15*p)
    c.setLineDash([d,6+20*p*p])
    for(const[w,s]of[[13,'#111'],[6,WV]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(0,-122,r,-PI/2-.62,-PI/2+.62),c.stroke()
  }
  c.setLineDash([]);c.strokeStyle='#111'
  c.fillStyle=ST;c.lineWidth=7;c.beginPath();c.roundRect(-16,-20,32,22,6);c.fill();c.stroke()
  for(const[w,s]of[[12,'#111'],[5,ST]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-74,-74),c.lineTo(0,-118),c.lineTo(74,-74),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=DS;c.beginPath();c.ellipse(0,-60,92,58,0,0,PI);c.ellipse(0,-60,92,34,0,PI,0,true);c.fill();c.stroke()
  c.fillStyle=DI;c.beginPath();c.ellipse(0,-60,92,34,0,0,T);c.fill();c.stroke()
  for(const[w,s]of[[12,'#111'],[5,ST]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-74,-74),c.lineTo(-60,-82),c.moveTo(74,-74),c.lineTo(60,-82),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=FE;c.beginPath();c.arc(0,-122,11,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(-3,-125,3,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-56,-30,10,4,.3,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*22+lk,-60,6,7.5,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*22+lk-2,-63,2.4,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(d*14+lk,-76),c.lineTo(d*30+lk,-71),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*42,-50,8,4.5,0,0,T),c.fill()
  c.beginPath();c.moveTo(-10+lk,-45);c.quadraticCurveTo(-5+lk,-50,0+lk,-45);c.quadraticCurveTo(5+lk,-40,10+lk,-45);c.stroke()
  c.restore()
}
