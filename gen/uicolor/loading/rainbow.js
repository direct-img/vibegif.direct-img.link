// rainbow loader between two smiling clouds: the empty arch fills in band by band from red to violet, sparkles when complete, then wipes clear to start over
const{sin,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80
const C=['#ff6b6b','#ffa94d','#ffd43b','#69db7c','#4dabf7','#b197fc'],X=128,Y=182,RO=114,RI=42,BW=(RO-RI)/6
const cloud=(c,x,y)=>{
  const P=[[x-20,y+2,16],[x+2,y-10,21],[x+22,y+2,15]],base=()=>c.roundRect(x-36,y,72,24,12)
  c.lineWidth=14;c.strokeStyle='#111';for(const[a,b,r]of P)c.beginPath(),c.arc(a,b,r,0,T),c.stroke();c.beginPath();base();c.stroke()
  c.fillStyle='#fff';for(const[a,b,r]of P)c.beginPath(),c.arc(a,b,r,0,T),c.fill();c.beginPath();base();c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(x+2+d*9,y+6,3,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(x+2,y+10,4.5,.15*PI,.85*PI);c.stroke()
  c.fillStyle='#ffc9c9';for(const d of[-1,1])c.beginPath(),c.ellipse(x+2+d*18,y+11,4,2.5,0,0,T),c.fill();c.lineWidth=7
}
const spark=(c,x,y,s)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const q=max(0,min(1,(t-.8)/.14))
  c.fillStyle='#fff';c.beginPath();c.arc(X,Y,RO,PI,0);c.arc(X,Y,RI,0,PI,true);c.closePath();c.fill()
  c.lineCap='butt'
  C.forEach((col,k)=>{const p=max(0,min(1,(t-k*.1)/.12)),a0=PI+PI*q,a1=PI+PI*p;if(a1>a0+.01){c.strokeStyle=col;c.lineWidth=BW+.8;c.beginPath();c.arc(X,Y,RO-BW*(k+.5),a0,a1);c.stroke()}})
  c.lineCap='round';c.strokeStyle='#111';c.lineWidth=7
  c.beginPath();c.arc(X,Y,RO,PI,0);c.arc(X,Y,RI,0,PI,true);c.closePath();c.stroke()
  const h0=PI*max(1.1,1+q),h1=PI*min(1.3,1+min(1,t/.12));c.strokeStyle='#fff';c.lineWidth=5;if(h1>h0+.05)c.beginPath(),c.arc(X,Y,RO-7,h0,h1),c.stroke()
  c.strokeStyle='#111'
  if(t>.68&&t<.84)for(const[x,y,o]of[[128,40,0],[40,72,.33],[216,72,.66]]){const s=13*sin(PI*((t-.68)/.16));if(s>1.5)spark(c,x,y,s*1.2*(1-o*.3))}
  cloud(c,X-(RO+RI)/2,Y+4+Math.round(2*sin(T*t)));cloud(c,X+(RO+RI)/2,Y+4+Math.round(2*sin(T*t+PI)))
}
