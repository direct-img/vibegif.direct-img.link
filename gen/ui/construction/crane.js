// a tower crane lowers a content block into the empty slot of a half-built web page, the page scrolls down to make room and a fresh block pops onto the hook
const{sin,PI,min,max}=Math,T=2*PI
export const frames=28,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const back=u=>(u=min(1,max(0,u)),1+2.7*(u-1)**3+1.7*(u-1)**2)
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const brick=(c,x,y)=>{
  c.lineWidth=5;c.beginPath();c.roundRect(x,y,124,26,6);c.fill();c.stroke()
  c.fillStyle='#bbb';c.beginPath();c.roundRect(x+8,y+6,24,14,3);c.fill();c.fillStyle='#fff'
  c.strokeStyle='#bbb';for(const[d,w]of[[9,72],[17,48]])c.beginPath(),c.moveTo(x+42,y+d),c.lineTo(x+42+w,y+d),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
}
export default(c,t)=>{
  const p=ease(t/.42),land=t>=.5,o=32*ease((t-.54)/.28),sx=land?0:6*sin(T*t/.42*1.5)*(1-p)
  const hy=land?114-56*ease((t-.5)/.3):58+56*p,sc=t>.82?back((t-.82)/.16):1
  c.beginPath();c.roundRect(14,100,152,138,12);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(14,122);c.lineTo(166,122);c.stroke()
  c.fillStyle='#111';for(const x of[30,44,58])c.beginPath(),c.arc(x,111,4,0,T),c.fill()
  c.fillStyle='#fff';c.save();c.beginPath();c.rect(18,124,144,110);c.clip()
  for(let k=-2;k<4;k++){
    const y=132+32*k+o
    if(k>0||k==0&&land)brick(c,28,y)
    else c.setLineDash([8,7]),c.lineWidth=4,c.strokeStyle='#888',c.beginPath(),c.roundRect(28,y,124,26,6),c.stroke(),c.setLineDash([]),c.strokeStyle='#111'
  }
  c.restore()
  if(t>.42&&t<.56)for(const d of[-1,1]){const u=(t-.42)/.14;c.lineWidth=5;c.beginPath();c.arc(90+d*(66+10*u),156-6*u,7*(1-u)+3,0,T);c.fill();c.stroke()}
  c.lineWidth=7
  ln(c,9,()=>{c.moveTo(24,34);c.lineTo(200,14);c.lineTo(244,34)})
  c.beginPath();c.roundRect(188,40,24,196,4);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();for(let y=40;y<230;y+=24)c.moveTo(188,y),c.lineTo(212,y+12),c.lineTo(188,y+24);c.stroke()
  c.lineWidth=7;c.beginPath();c.roundRect(172,226,56,14,5);c.fill();c.stroke()
  c.beginPath();c.roundRect(20,30,228,14,4);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();for(let x=26;x<240;x+=16)c.moveTo(x,31),c.lineTo(x+8,43),c.lineTo(x+16,31);c.stroke()
  c.lineWidth=7;c.beginPath();c.roundRect(220,44,24,26,4);c.fill();c.stroke()
  c.beginPath();c.moveTo(200,12);c.lineTo(212,30);c.lineTo(188,30);c.closePath();c.fill();c.stroke()
  const hx=90+sx
  ln(c,9,()=>{c.moveTo(90,52);c.lineTo(hx,hy-10)})
  c.beginPath();c.roundRect(78,42,24,12,4);c.fill();c.stroke()
  if(!land||t>.82){
    c.save();c.translate(hx,hy+31);c.scale(sc,sc);c.translate(-hx,-hy-31)
    ln(c,8,()=>{c.moveTo(hx-50,hy+18);c.lineTo(hx,hy);c.lineTo(hx+50,hy+18)})
    brick(c,hx-62,hy+18);c.restore()
  }
  ln(c,11,()=>{c.moveTo(hx,hy-12);c.lineTo(hx,hy);c.arc(hx-6,hy,6,0,PI*.9)})
}
