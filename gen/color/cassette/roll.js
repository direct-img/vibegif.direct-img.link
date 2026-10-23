// cassette tape whose spinning reels are its eyes, tape ticking along between them, notes floating up
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const BODY='#4dabf7',BD='#1c7ed6',LAB='#fff9db',BAND='#ff6b6b',STR='#ffd43b',WIN='#495057',TAPE='#a9744f',TL='#d9a47c',BL='#faa2c1',NOTE=['#b197fc','#69db7c']
const note=(c,x,y,s,col)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.fillStyle=col
  for(const[w,st]of[[9,'#111'],[3,col]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(5,4),c.lineTo(5,-24),c.lineTo(17,-18),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.ellipse(0,5,8,6,-.4,0,T);c.fill();c.stroke();c.restore()
}
export default(c,t)=>{
  const a=T*t*2/3
  for(let k=0;k<2;k++){const p=(t+k/2)%1,s=p<.75?1:(1-p)*4;note(c,56+k*140+6*sin(p*T),58-p*40,s,NOTE[k])}
  c.lineWidth=7;c.fillStyle=BODY;c.beginPath();c.roundRect(22,56,212,146,18);c.fill();c.stroke()
  c.fillStyle='#e7f5ff';c.lineWidth=4;for(const[x,y]of[[38,72],[218,72],[38,186],[218,186]])c.beginPath(),c.arc(x,y,5,0,T),c.fill(),c.stroke()
  const lab=()=>{c.beginPath();c.roundRect(42,68,172,98,10)}
  c.fillStyle=LAB;lab();c.fill()
  c.save();lab();c.clip();c.fillStyle=BAND;c.fillRect(42,68,172,16);c.fillStyle=STR;c.fillRect(42,84,172,6);c.restore()
  c.lineWidth=5;lab();c.stroke();c.beginPath();c.moveTo(42,84);c.lineTo(214,84);c.stroke()
  const win=()=>{c.beginPath();c.roundRect(68,98,120,46,23)}
  c.fillStyle=WIN;win();c.fill()
  c.save();win();c.clip()
  c.fillStyle=TAPE;for(const x of[98,158])c.beginPath(),c.arc(x,121,19,0,T),c.fill()
  c.strokeStyle=TAPE;c.lineWidth=5;c.beginPath();c.moveTo(98,138);c.lineTo(158,138);c.stroke()
  c.strokeStyle=TL;c.lineWidth=2;for(let k=0;k<5;k++){const x=98+((k*12+t*24)%60);c.beginPath();c.moveTo(x,136);c.lineTo(x+4,136);c.stroke()}
  c.strokeStyle='#111'
  for(const x of[98,158]){
    c.save();c.translate(x,121);c.rotate(a)
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,0,12,0,T);c.fill();c.stroke()
    c.fillStyle='#111';for(let k=0;k<6;k++)c.save(),c.rotate(k*PI/3),c.fillRect(-1.5,-12,3,5),c.restore()
    c.beginPath();c.arc(0,0,4.5,0,T);c.fill()
    c.restore()
  }
  c.restore()
  c.lineWidth=5;win();c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(128,150,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*58,154,9,5,0,0,T),c.fill()
  c.lineWidth=7;c.fillStyle=BD;c.beginPath();c.moveTo(62,202);c.lineTo(78,176);c.lineTo(178,176);c.lineTo(194,202);c.closePath();c.fill();c.stroke()
  c.fillStyle=WIN;for(const x of[100,156])c.beginPath(),c.arc(x,190,5,0,T),c.fill()
  c.beginPath();c.roundRect(120,184,16,12,3);c.fill()
}
