// rainbow paints itself across between two smiling clouds, shines for a bit, then wipes away
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const C=['#ff6b6b','#ffa94d','#ffd43b','#69db7c','#4dabf7','#b197fc']
const cloud=(c,x,y)=>{
  const P=[[x-22,y+4,18],[x,y-8,24],[x+22,y+4,18]],base=()=>c.roundRect(x-40,y,80,26,13)
  c.lineWidth=14;for(const[a,b,r]of P)c.beginPath(),c.arc(a,b,r,0,T),c.stroke();c.beginPath();base();c.stroke()
  c.fillStyle='#fff';for(const[a,b,r]of P)c.beginPath(),c.arc(a,b,r,0,T),c.fill();c.beginPath();base();c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(x+d*10,y+6,3,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(x,y+10,5,.15*PI,.85*PI);c.stroke();c.lineWidth=7
}
export default(c,t)=>{
  const p=min(1,t/.38),q=max(0,(t-.8)/.2),a0=PI+PI*q,a1=PI+PI*p
  if(a1>a0+.01){
    c.lineCap='butt';c.lineWidth=74;c.beginPath();c.arc(128,186,72,a0,a1);c.stroke()
    C.forEach((col,k)=>{c.strokeStyle=col;c.lineWidth=11;c.beginPath();c.arc(128,186,97-k*10,a0,a1);c.stroke()})
    c.strokeStyle='#111'
  }
  c.lineCap='round'
  if(t>.4&&t<.8)for(const[x,y,o]of[[128,70,0],[60,96,.33],[196,96,.66]]){const s=12*max(0,sin(PI*((t-.4)/.4*2+o)%1*1));if(s>1.5){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}}
  cloud(c,42,184+3*sin(t*T));cloud(c,214,184+3*sin(t*T+PI))
}
