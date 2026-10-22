// lemon squeezed from both sides: it squashes, scrunches its face and squirts juice drops up and away
const{sin,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
export default(c,t)=>{
  const s=sin(PI*min(1,max(0,(t-.12)/.46)))**1.5,sq=s>.35
  c.save();c.translate(128,150);c.scale(1-.2*s,1+.16*s)
  c.save();c.translate(10,-58);c.rotate(-.5);c.beginPath();c.ellipse(16,-6,20,9,-.2,0,T);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(-2,-2);c.lineTo(30,-9);c.stroke();c.restore()
  c.lineWidth=14
  const nub=d=>{c.beginPath();c.ellipse(d*80,0,14,11,0,0,T)},body=()=>{c.beginPath();c.ellipse(0,0,78,58,0,0,T)}
  for(const d of[-1,1])nub(d),c.stroke();body();c.stroke()
  for(const d of[-1,1])nub(d),c.fill();body();c.fill()
  c.lineWidth=3;for(const[x,y]of[[-50,-28],[46,-34],[-56,22],[54,24],[-30,40],[34,44],[-8,-46],[20,-44]])c.beginPath(),c.arc(x,y,2.5,0,T),c.stroke()
  c.lineWidth=5;c.fillStyle='#111'
  if(sq)for(const d of[-1,1])c.beginPath(),c.moveTo(d*16,-18),c.lineTo(d*30,-10),c.lineTo(d*16,-2),c.stroke()
  else{for(const d of[-1,1])c.beginPath(),c.ellipse(d*24,-10,6,8,0,0,T),c.fill();c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*24-2,-13,2.5,0,T),c.fill()}
  if(sq){c.beginPath();c.ellipse(0,16,7,9,0,0,T);c.fillStyle='#111';c.fill()}
  else{c.beginPath();c.arc(0,6,11,.15*PI,.85*PI);c.stroke()}
  c.lineWidth=3;for(const d of[-1,1])for(const o of[-6,0,6])c.beginPath(),c.moveTo(d*46+o-2,14),c.lineTo(d*46+o+3,6),c.stroke()
  c.restore()
  if(s>.25)for(const d of[-1,1])for(const[w,st]of[[11,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=st;for(const y of[-22,0,22]){const x=128+d*(124-16*s);c.beginPath();c.moveTo(x,150+y);c.lineTo(x-d*12,150+y*.9);c.stroke()}}
  c.lineWidth=4;c.strokeStyle='#111';c.fillStyle='#fff'
  for(const[vx,v,t0]of[[-1,1,.3],[.35,1.15,.34],[1,.95,.38],[-.4,1.05,.43]]){
    const u=(t-t0)/.4;if(u<0||u>=1)continue
    const x=128+vx*86*u,y=88-v*362*u+546*u*u
    c.beginPath();c.moveTo(x,y-11);c.quadraticCurveTo(x+8,y-1,x+7,y+3);c.arc(x,y+3,7,0,PI);c.quadraticCurveTo(x-8,y-1,x,y-11);c.fill();c.stroke()
  }
}
