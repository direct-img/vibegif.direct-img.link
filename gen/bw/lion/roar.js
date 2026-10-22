// lion roaring: the mane puffs out, the mouth opens wide on its fangs and roar lines burst out
// the mane is one outline: every tuft is stroked wide first, then all of them are filled
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=70
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  const r=t<.3?0:t<.42?sm((t-.3)/.12):t<.8?1:sm(1-(t-.8)/.12),sh=r*1.5*sin(10*T*t),R=62+10*r,n=14
  if(r>.5)for(const d of[-1,1])for(const k of[0,1]){
    const p=((t-.42)*3+k*.5)%1,rr=104+16*p
    for(const[l,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.arc(128,140,rr,d>0?-.32:PI-.32,d>0?.32:PI+.32),c.stroke()
  }
  c.translate(sh,0)
  const L=[...Array(n)].map((_,i)=>[128+R*cos(i*T/n+.11),126+R*.94*sin(i*T/n+.11)]),tr=24+4*r
  c.lineWidth=14;c.strokeStyle='#111';for(const[x,y]of L)c.beginPath(),c.arc(x,y,tr,0,T),c.stroke()
  c.fillStyle='#fff';for(const[x,y]of L)c.beginPath(),c.arc(x,y,tr,0,T),c.fill()
  c.beginPath();c.arc(128,126,R,0,T);c.fill()
  c.lineWidth=7
  for(const d of[-1,1]){c.beginPath();c.arc(128+d*38,86,14,0,T);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.arc(128+d*38,88,6,0,T);c.stroke();c.lineWidth=7}
  c.beginPath();c.arc(128,128,50,0,T);c.fill();c.stroke()
  if(r>.5){c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*30,108),c.lineTo(128+d*14,116),c.lineTo(128+d*30,124),c.stroke()}
  else{
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*20,116,6.5,0,T),c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*20-2,113,2.3,0,T),c.fill()
  }
  if(r>.05){
    const h=6+24*r,y=154+4*r
    c.fillStyle='#111';c.beginPath();c.ellipse(128,y+h/2,14+8*r,h/2+4,0,0,T);c.fill()
    c.fillStyle='#fff';c.lineWidth=3
    for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*15*(.6+.4*r),y),c.lineTo(128+d*9*(.6+.4*r),y+6+6*r),c.lineTo(128+d*5,y+2),c.closePath(),c.fill()
    if(r>.4)for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,y+h+4),c.lineTo(128+d*9,y+h-6),c.lineTo(128+d*5,y+h+3),c.closePath(),c.fill()
  }
  c.fillStyle='#fff';c.lineWidth=5
  for(const d of[-1,1]){c.beginPath();c.ellipse(128+d*14,146,17,13,0,0,T);c.fill();c.stroke()}
  c.fillStyle='#fff';c.beginPath();c.ellipse(128,148,10,9,0,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])for(const[x,y]of[[10,144],[18,150],[12,152]])c.beginPath(),c.arc(128+d*x,y,1.8,0,T),c.fill()
  c.beginPath();c.moveTo(116,132);c.lineTo(140,132);c.quadraticCurveTo(140,140,128,146);c.quadraticCurveTo(116,140,116,132);c.fill()
}
