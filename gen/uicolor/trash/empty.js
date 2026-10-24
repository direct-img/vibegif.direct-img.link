// clean empty trash bin flipping its lid open and shut with a big grin, sparkles popping out of it and twinkling all around
const{sin,PI,max}=Math,T=2*PI
export const frames=20,delay=80
const BN='#63e6be',BD='#20c997',RM='#38d9a9',IN='#c3fae8',BL='#ffa8a8',TG='#ff8787'
const E=u=>u<0?0:u>1?1:u*u*(3-2*u)
const sp=(c,x,y,s)=>{if(s<1.5)return;c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
const bod=c=>{c.beginPath();c.moveTo(70,112);c.lineTo(186,112);c.lineTo(176,236);c.lineTo(80,236);c.closePath()}
export default(c,t)=>{
  const o=E((t-.08)/.14)-E((t-.56)/.08),b=t>.64&&t<.76?sin(PI*(t-.64)/.12):0,th=.55*o+.12*b,q=t>.62&&t<.8?sin(PI*(t-.62)/.18):0
  for(const[x,y,f,s]of[[34,150,0,13],[222,140,.3,12],[28,222,.55,11],[228,214,.8,14]])sp(c,x,y,s*max(0,sin(PI*((t*2+f)%1))))
  c.save();c.translate(128,236);c.scale(1+.04*q,1-.06*q);c.translate(-128,-236)
  c.fillStyle=BN;bod(c);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(86,128);c.lineTo(91,184);c.stroke()
  c.strokeStyle=BD;c.lineWidth=6;c.beginPath();for(const x of[104,128,152])c.moveTo(x,198),c.lineTo(x+(x-128)*.06,222);c.stroke()
  c.strokeStyle='#111';c.fillStyle='#111'
  if(th>.15)c.lineWidth=5,[-1,1].forEach(d=>{c.beginPath();c.arc(128+d*20,156,7,1.15*PI,1.85*PI);c.stroke()})
  else[-1,1].forEach(d=>{c.beginPath();c.arc(128+d*20,152,6.5,0,T);c.fill()}),c.fillStyle='#fff',[-1,1].forEach(d=>{c.beginPath();c.arc(126+d*20,150,2.2,0,T);c.fill()})
  c.fillStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(112,170);c.quadraticCurveTo(128,196,144,170);c.closePath();c.fill();c.stroke()
  c.fillStyle=TG;c.beginPath();c.ellipse(128,184,7,4,0,0,T);c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*38,172,8,5,0,0,T),c.fill()
  c.lineWidth=7;c.fillStyle=RM;c.beginPath();c.roundRect(62,104,132,16,8);c.fill();c.stroke()
  if(th>.05){c.fillStyle=IN;c.lineWidth=5;c.beginPath();c.ellipse(128,108,56,7,0,0,T);c.fill();c.stroke()}
  c.restore()
  const u=(t-.18)/.42
  if(u>0&&u<1)for(const[x,f,s]of[[104,0,13],[150,.2,11],[126,.4,15]]){const v=(u-f)/.6;if(v>0&&v<1)sp(c,x+8*sin(v*T),104-80*v,s*sin(PI*v))}
  c.save();c.translate(198,104-4*q);c.rotate(th);c.fillStyle=RM;c.lineWidth=7
  c.beginPath();c.roundRect(-92,-28,32,16,7);c.fill();c.stroke()
  c.beginPath();c.roundRect(-150,-18,156,20,9);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-136,-10);c.lineTo(-112,-10);c.stroke();c.restore()
}
