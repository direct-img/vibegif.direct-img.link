// smiling clipboard whose sheet peels off a twin copy that slides out beside it, gets a green check and sparkles, then poofs away
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=80
const WD='#a9744f',CL='#ced4da',LN='#a5d8ff',CK='#51cf66',BL='#ffa8a8',SP='#ffd43b'
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u)
const sheet=c=>{
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(-48,-76,96,152,8);c.fill();c.stroke()
  c.strokeStyle=LN;c.lineWidth=7;c.beginPath();for(const[y,w]of[[-46,60],[-28,60],[-10,40]])c.moveTo(-30,y),c.lineTo(-30+w,y);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*16,26,5,6.5,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*16-2,23,2.2,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*28,38,7,4,0,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.arc(0,33,7,.15*PI,.85*PI);c.stroke()
}
const star=(c,x,y,s)=>{c.fillStyle=SP;c.lineWidth=3.5;c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const m=ease((t-.06)/.34),dx=88*m,dy=10*m,r=.14*m,sc=t<.82?1:1-ease((t-.82)/.14),ck=t<.42?0:t<.5?1.15*ease((t-.42)/.08):t<.56?1.15-.15*ease((t-.5)/.06):1
  const lift=t<.06?0:min(1,(t-.06)/.06)*(t<.4?1:0)
  c.fillStyle=WD;c.beginPath();c.roundRect(14,30,136,206,16);c.fill();c.stroke()
  c.save();c.translate(80,138);sheet(c);c.restore()
  c.fillStyle=CL;c.lineWidth=6;c.beginPath();c.roundRect(50,18,60,30,8);c.fill();c.stroke()
  c.fillStyle=WD;c.beginPath();c.arc(80,26,5,0,T);c.fill();c.stroke()
  if(sc>.02&&t>.06){
    c.save();c.translate(80+dx,138+dy-6*lift);c.rotate(r);c.scale(sc,sc);sheet(c)
    if(ck>0){c.save();c.translate(36,-62);c.scale(ck,ck);c.fillStyle=CK;c.lineWidth=6;c.beginPath();c.arc(0,0,20,0,T);c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(-10,0);c.lineTo(-3,8);c.lineTo(11,-8);c.stroke();c.restore()}
    c.restore()
  }
  if(t>.48&&t<.82){const p=(t-.48)/.34,s=sin(PI*p)*9;for(const[x,y,o]of[[238,128,0],[152,44,.5],[236,212,.25]])star(c,x,y,max(0,s*(1-.3*o)))}
  if(t>.82&&t<.98){const p=(t-.82)/.16;c.fillStyle='#fff';c.lineWidth=4;for(let k=0;k<6;k++){const a=k*PI/3+.3,d=20+46*p,s=8*(1-p)+1;c.beginPath();c.arc(168+cos(a)*d,148+sin(a)*d,s,0,T);c.fill();c.stroke()}}
}
