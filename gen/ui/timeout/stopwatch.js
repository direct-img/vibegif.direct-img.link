// a stopwatch hand ticks round to zero as the time left shrinks away, then it rings and shakes, and winds back for another go
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t,i)=>{
  const X=128,Y=146,ring=t>=.5&&t<.8,f=T*(.25+.75*(min(1,t/.5)-ease((t-.8)/.18)))-PI/2
  if(ring)for(const d of[-1,1])for(const a of[-.5,0,.5])ln(c,11,()=>{const b=-PI/2+d*(.72+a*.5),r=i%2?4:0;c.moveTo(X+cos(b)*(106+r),Y+sin(b)*(106+r));c.lineTo(X+cos(b)*(122+r),Y+sin(b)*(122+r))})
  c.translate(X,Y);if(ring)c.rotate(i%2?.09:-.09),c.translate(i%2?2:-2,0);c.translate(-X,-Y)
  c.save();c.translate(X,Y);c.rotate(PI/4);c.beginPath();c.roundRect(-9,-100,18,22,5);c.fill();c.stroke();c.restore()
  c.beginPath();c.roundRect(X-10,48,20,24,4);c.fill();c.stroke()
  c.beginPath();c.roundRect(X-28,ring&&i%2?34:28,56,20,8);c.fill();c.stroke()
  c.beginPath();c.arc(X,Y,86,0,T);c.fill();c.stroke()
  c.fillStyle='#ddd';c.beginPath();c.moveTo(X,Y);c.arc(X,Y,64,f,PI*1.5);c.closePath();c.fill();c.fillStyle='#fff'
  c.lineWidth=5;c.beginPath();c.arc(X,Y,72,0,T);c.stroke()
  for(let k=0;k<12;k++){const a=k*T/12,r=k%3?62:56;c.lineWidth=k%3?4:6;c.beginPath();c.moveTo(X+cos(a)*r,Y+sin(a)*r);c.lineTo(X+cos(a)*68,Y+sin(a)*68);c.stroke()}
  c.lineWidth=8;c.beginPath();c.moveTo(X-cos(f)*12,Y-sin(f)*12);c.lineTo(X+cos(f)*60,Y+sin(f)*60);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(X,Y,9,0,T);c.fill()
}
