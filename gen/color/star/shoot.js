// smiling star shooting across with a rainbow streak behind it, little sparkles left in its wake
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=50
const SY='#ffd43b',TR=['#ff6b6b','#ffd43b','#4dabf7'],BL='#ff8787'
const pos=u=>[-40+u*336,52+u*150]
export default(c,t)=>{
  const[x,y]=pos(t),dx=336,dy=150,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,nx=-uy,ny=ux
  for(let k=1;k<=4;k++){const u=t-k*.07;const[sx,sy]=pos(u),s=8*(1-k/5);if(s>1){c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(sx+nx*16*(k%2?1:-1),sy+ny*16*(k%2?1:-1)-s);const ox=sx+nx*16*(k%2?1:-1),oy=sy+ny*16*(k%2?1:-1);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(ox+qx,oy+qy,ox+px,oy+py);c.fill();c.stroke()}}
  TR.forEach((col,k)=>{const o=(k-1)*13,len=110-abs(k-1)*20;for(const[w,s]of[[15,'#111'],[8,col]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x+nx*o-ux*20,y+ny*o-uy*20),c.lineTo(x+nx*o-ux*len,y+ny*o-uy*len),c.stroke()})
  c.strokeStyle='#111';c.lineWidth=7
  c.save();c.translate(x,y);c.rotate(t*T)
  c.fillStyle=SY;c.beginPath();for(let k=0;k<10;k++){const r=k%2?18:40,a=k*PI/5-PI/2;c.lineTo(cos(a)*r,sin(a)*r)}c.closePath();c.fill();c.stroke()
  c.restore()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(x+d*9,y-2,4,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(x,y+4,6,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(x+d*16,y+6,4,2.5,0,0,T),c.fill()
}
const abs=Math.abs
