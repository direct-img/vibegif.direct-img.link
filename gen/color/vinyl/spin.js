// record player spinning a vinyl whose label has a little face, tonearm riding the grooves, notes floating up
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
const BASE='#ffa94d',BD='#e8590c',REC='#343a40',GR='#5c636a',SH='#868e96',LAB='#ff6b6b',ARM='#dee2e6',HEAD='#ffd43b',NOTE=['#4dabf7','#b197fc']
const note=(c,x,y,s,col)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.fillStyle=col
  for(const[w,st]of[[9,'#111'],[3,col]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(5,4),c.lineTo(5,-24),c.lineTo(17,-18),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.ellipse(0,5,8,6,-.4,0,T);c.fill();c.stroke();c.restore()
}
export default(c,t)=>{
  const cx=110,cy=150
  c.fillStyle=BASE;c.beginPath();c.roundRect(22,64,212,168,22);c.fill();c.stroke()
  c.fillStyle=BD;c.lineWidth=5;c.beginPath();c.roundRect(186,206,30,12,6);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(202,184,10,0,T);c.fill();c.stroke();c.beginPath();c.moveTo(202,184);c.lineTo(202,176);c.stroke()
  c.lineWidth=7;c.fillStyle=REC;c.beginPath();c.arc(cx,cy,76,0,T);c.fill();c.stroke()
  c.strokeStyle=GR;c.lineWidth=2;for(const r of[66,58,50,42])c.beginPath(),c.arc(cx,cy,r,0,T),c.stroke()
  c.strokeStyle=SH;c.lineWidth=5;for(const[r,a0]of[[62,-2.5],[54,.65]])c.beginPath(),c.arc(cx,cy,r,a0,a0+.5),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(cx,cy);c.rotate(T*t)
  c.fillStyle=LAB;c.lineWidth=5;c.beginPath();c.arc(0,0,28,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*10,-9,3.5,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(0,8,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle='#ffc9c9';for(const d of[-1,1])c.beginPath(),c.ellipse(d*17,2,4,2.5,0,0,T),c.fill()
  c.restore()
  c.fillStyle=ARM;c.lineWidth=3;c.beginPath();c.arc(cx,cy,4,0,T);c.fill();c.stroke()
  const hx=166,hy=196
  for(const[w,st]of[[13,'#111'],[6,ARM]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(206,92),c.lineTo(208,160),c.lineTo(hx,hy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5
  c.save();c.translate(hx,hy);c.rotate(.75);c.fillStyle=HEAD;c.beginPath();c.roundRect(-9,-6,22,14,4);c.fill();c.stroke();c.restore()
  c.fillStyle=ARM;c.beginPath();c.roundRect(196,64,20,16,4);c.fill();c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(206,92,14,0,T);c.fill();c.stroke()
  c.fillStyle='#868e96';c.beginPath();c.arc(206,92,5,0,T);c.fill()
  for(let k=0;k<2;k++){const p=(t+k/2)%1,s=p<.2?p*5:p<.8?1:(1-p)*5;note(c,108+(k?10:-12)+6*sin(p*T),112-p*94,s,NOTE[k])}
}
