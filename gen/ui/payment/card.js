// a credit card pops in and swipes down the side slot of a card terminal, the screen thinks, then a check pops up with a beep
const{sin,cos,PI,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=70
const cl=u=>min(1,max(0,u)),ease=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),back=u=>(u=cl(u),1+3*(u-1)**3+2*(u-1)**2)
const L=hypot(11,11)+hypot(24,26)
export default(c,t)=>{
  const D=(f,a=12,b=5)=>{for(const[w,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const sw=ease((t-.12)/.2),cy=72+96*sw,cs=back(t/.1)*(1-ease((t-.8)/.08)),ck=cl((t-.42)/.12),v=sin(cl((t-.12)/.2)*PI)
  c.beginPath();c.roundRect(112,56,104,180,18);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(126,72,76,60,9);c.fill()
  c.fillStyle='#fff';c.lineWidth=4
  for(let r=0;r<3;r++)for(let k=0;k<3;k++)c.beginPath(),c.arc(140+k*24,156+r*24,8,0,T),c.fill(),c.stroke()
  c.lineWidth=7
  if(ck>0&&t<.94){
    const s=t>.88?1-(t-.88)/.06:1;c.save();c.translate(164,102);c.scale(s,s)
    c.strokeStyle='#fff';c.lineWidth=10;c.setLineDash([L*ck,999]);c.beginPath();c.moveTo(-17,0);c.lineTo(-6,11);c.lineTo(18,-15);c.stroke();c.restore()
  }else for(let k=0;k<3;k++){
    const j=t>.12&&t<.42?max(0,sin(T*(t*5-k*.25))):0
    c.fillStyle='#fff';c.beginPath();c.arc(146+k*18,104-9*j,5,0,T);c.fill()
  }
  c.fillStyle='#fff'
  if(ck>.5&&t<.66)for(const a of[-1.65,-.95,-.25])D(()=>{c.moveTo(210+cos(a)*20,60+sin(a)*20);c.lineTo(210+cos(a)*32,60+sin(a)*32)},11,4)
  if(cs>.01){
    if(v>.2)for(const x of[50,70,90])D(()=>{c.moveTo(x,cy-58-6*v);c.lineTo(x,max(12,cy-58-40*v))},11,4)
    c.save();c.translate(70,cy);c.scale(cs,cs)
    c.beginPath();c.roundRect(-34,-52,68,104,10);c.fill();c.stroke()
    c.fillStyle='#111';c.fillRect(14,-48,12,96)
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(-24,-34,22,26,5);c.fill();c.stroke()
    c.beginPath();c.moveTo(-24,-21);c.lineTo(-2,-21);c.moveTo(-13,-34);c.lineTo(-13,-8);c.stroke()
    c.lineWidth=6;for(const y of[12,30])c.beginPath(),c.moveTo(-18,y),c.lineTo(-18,y+10),c.stroke()
    c.restore()
  }
  c.lineWidth=7;c.beginPath();c.roundRect(98,36,22,184,10);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(109,48);c.lineTo(109,208);c.stroke()
}
