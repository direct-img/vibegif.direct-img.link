// trumpet tooting three times, a valve pressing on each note, the bell flaring and sound waves rolling out
const{sin,PI,floor}=Math,T=2*PI
export const frames=24,delay=70
const D=(c,f,a=11,b=4)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t)=>{
  const p=(3*t)%1,n=floor(3*t),toot=sin(PI*p)
  for(const o of[0,.5]){
    const q=(t+o)%1,s=.4*sin(PI*q),x=206+20*q+6*sin(q*T*2),y=88-66*q
    if(s<.08)continue
    c.save();c.translate(x,y);c.scale(s,s)
    D(c,()=>{c.moveTo(18,-6);c.lineTo(18,-80);c.quadraticCurveTo(26,-56,44,-50)},16,6)
    c.lineWidth=7/s;c.beginPath();c.ellipse(0,0,22,15,-.35,0,T);c.fill();c.stroke();c.restore()
  }
  for(const r of[14+30*p,2+30*p])if(r>12)D(c,()=>c.arc(214,128,r,-.6,.6))
  c.translate(6,4)
  D(c,()=>{c.moveTo(140,124);c.bezierCurveTo(160,124,160,164,140,164);c.lineTo(66,164);c.bezierCurveTo(50,164,50,140,66,140)},22,10)
  D(c,()=>{c.moveTo(26,124);c.lineTo(150,124)},22,10)
  c.beginPath();c.moveTo(12,112);c.quadraticCurveTo(20,124,12,136);c.lineTo(28,128);c.lineTo(28,120);c.closePath();c.fill();c.stroke()
  for(let k=0;k<3;k++){
    const x=80+24*k,d=k==n?8*toot:0
    D(c,()=>{c.moveTo(x,100);c.lineTo(x,86+d)},10,4)
    c.beginPath();c.ellipse(x,84+d,11,5,0,0,T);c.fill();c.stroke()
    c.beginPath();c.roundRect(x-7,104,14,66,5);c.fill();c.stroke()
    c.beginPath();c.roundRect(x-10,98,20,10,4);c.fill();c.stroke()
  }
  c.save();c.translate(146,124);c.scale(1+.06*toot,1+.1*toot)
  c.beginPath();c.moveTo(-2,-8);c.bezierCurveTo(24,-9,38,-22,50,-34);c.lineTo(50,34);c.bezierCurveTo(38,22,24,9,-2,8);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(50,0,8,34,0,0,T);c.fill();c.stroke()
  c.restore()
}
