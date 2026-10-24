// a little traffic cone sways beside a striped road barrier while the warning lamp on top blinks on and off
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t,i)=>{
  const on=i%8<4,sw=.05*sin(t*T*2),cx=(y,d)=>70+d*(10+(y-46)*.17)
  for(const[x,d]of[[122,-1],[214,1]])ln(c,18,()=>{c.moveTo(x,130);c.lineTo(x+d*14,234)})
  c.save();c.beginPath();c.roundRect(94,104,150,40,10);c.fill();c.clip()
  c.fillStyle='#111';for(let x=80;x<260;x+=36)c.beginPath(),c.moveTo(x,104),c.lineTo(x+18,104),c.lineTo(x-4,144),c.lineTo(x-22,144),c.fill()
  c.restore();c.beginPath();c.roundRect(94,104,150,40,10);c.stroke()
  if(on)for(const a of[-2.8,-2.2,-1.57,-.94,-.34])ln(c,11,()=>{c.moveTo(208+cos(a)*32,80+sin(a)*32);c.lineTo(208+cos(a)*46,80+sin(a)*46)})
  c.fillStyle=on?'#fff':'#888';c.beginPath();c.arc(208,84,20,PI,0);c.lineTo(228,92);c.lineTo(188,92);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(184,90,48,16,5);c.fill();c.stroke()
  if(on){c.lineWidth=5;c.beginPath();c.arc(208,84,11,PI*1.15,PI*1.45);c.stroke();c.lineWidth=7}
  c.translate(70,228);c.rotate(sw);c.translate(-70,-228)
  c.beginPath();c.roundRect(14,212,112,22,8);c.fill();c.stroke()
  c.beginPath();c.moveTo(cx(46,-1),46);c.lineTo(cx(46,1),46);c.lineTo(cx(214,1),214);c.lineTo(cx(214,-1),214);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(cx(90,-1),90);c.lineTo(cx(90,1),90);c.lineTo(cx(118,1),118);c.lineTo(cx(118,-1),118);c.fill()
  const e=on?2:-1;for(const d of[-1,1])c.beginPath(),c.arc(70+d*13+e,160-(on?2:0),5.5,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(70+e,172,9,.15*PI,.85*PI);c.stroke()
}
