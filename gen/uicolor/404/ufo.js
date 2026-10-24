// a little ufo hovers over a colorful "404" and beams the 0 up out of it, the 0 dangling and swaying in the tractor beam before it drops back in its slot
const{sin,cos,PI,floor}=Math,T=2*PI
export const frames=16,delay=80
const C4='#ff6b6b',C0='#ffd43b',C4b='#4dabf7',SA='#b197fc',SD='#9775fa',GL='#d0ebff',AL='#8ce99a',BM='#ffec99',LT=['#ff6b6b','#ffd43b','#69db7c']
const dig=(c,f,col)=>{for(const[w,s]of[[32,'#111'],[19,col]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const four=(c,x,y)=>()=>{c.moveTo(x-14,y-34);c.lineTo(x-20,y+8);c.lineTo(x+24,y+8);c.moveTo(x+12,y-34);c.lineTo(x+12,y+34)}
export default(c,t,i)=>{
  const h=(1-cos(T*t))/2,e=h*h*(3-2*h),uy=Math.round(2*sin(T*t)),oy=184-58*e,ox=128+6*sin(2*T*t+1)*e,sw=.2*sin(2*T*t)*e
  c.fillStyle=BM;c.beginPath();c.moveTo(106,72);c.lineTo(150,72);c.lineTo(186,226);c.ellipse(128,226,58,12,0,0,PI);c.closePath();c.fill()
  c.save();c.clip();c.strokeStyle='#fff';c.lineWidth=6
  for(let k=0;k<3;k++){const q=(t*2+k/3)%1,y=226-q*150,w=22+(y-74)/152*36;c.beginPath();c.ellipse(128,y,w,7,0,0,PI);c.stroke()}
  c.restore();c.lineWidth=5;c.beginPath();c.moveTo(106,72);c.lineTo(150,72);c.lineTo(186,226);c.ellipse(128,226,58,12,0,0,PI);c.closePath();c.stroke()
  c.lineWidth=5;c.setLineDash([9,11]);c.beginPath();c.ellipse(128,184,23,34,0,0,T);c.stroke();c.setLineDash([])
  dig(c,four(c,44,184),C4);dig(c,four(c,198,184),C4b)
  c.save();c.translate(ox,oy);c.rotate(sw);dig(c,()=>c.ellipse(0,0,23,34,0,0,T),C0)
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.ellipse(0,0,23,34,0,PI*1.12,PI*1.38);c.stroke();c.restore()
  c.strokeStyle='#fff';c.lineWidth=6;for(const x of[30,184])c.beginPath(),c.moveTo(x,160),c.lineTo(x-2,170),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.save();c.translate(128,uy)
  c.fillStyle=GL;c.beginPath();c.arc(0,50,35,PI,0);c.closePath();c.fill()
  c.fillStyle=AL;c.beginPath();c.arc(0,34,15,0,T);c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*6,33,4,5.5,d*.3,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*6-1.5,31,1.6,0,T),c.fill()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,50,26,PI*1.12,PI*1.35);c.stroke();c.strokeStyle='#111'
  c.lineWidth=7;c.beginPath();c.arc(0,50,35,PI,0);c.stroke()
  c.fillStyle=BM;c.beginPath();c.ellipse(0,75,24,8,0,0,T);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.fillStyle=SA;c.beginPath();c.ellipse(0,61,74,17,0,0,T);c.fill();c.stroke()
  c.fillStyle=SD;c.beginPath();c.ellipse(0,59,72,7,0,0,PI);c.lineTo(-72,64);c.ellipse(0,64,72,12,0,PI,0,true);c.closePath();c.fill()
  c.beginPath();c.ellipse(0,61,74,17,0,0,T);c.stroke()
  c.lineWidth=4;for(let k=0;k<5;k++){const x=(k-2)*26,y=64+(k==0||k==4?-4:k==2?3:1);c.fillStyle=(k+floor(t*8))%2?'#fff':LT[k%3];c.beginPath();c.arc(x,y,6,0,T);c.fill();c.stroke()}
  c.restore()
}
