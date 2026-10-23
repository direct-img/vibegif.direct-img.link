// striped hot-air balloon with a happy face bobbing up and down, burner flame puffing, little clouds drifting by
const{sin,PI,round}=Math,T=2*PI
export const frames=20,delay=80
const ST=['#ff6b6b','#ffd43b','#4dabf7','#fff'],SK='#fa5252',BK='#a9744f',BKD='#7f5539',FO='#ff922b',FY='#ffd43b',BL='#ffa8a8'
const env=c=>{c.beginPath();c.moveTo(100,170);c.bezierCurveTo(30,128,36,16,128,16);c.bezierCurveTo(220,16,226,128,156,170);c.closePath()}
// union outline: stroke every puff wide in black, then fill them all white
const cloud=(c,x,y)=>{const b=[[-16,4,12],[2,-4,16],[20,4,11]];c.lineWidth=14;for(const[a,d,r]of b)c.beginPath(),c.arc(x+a,y+d,r,0,T),c.stroke();c.fillStyle='#fff';for(const[a,d,r]of b)c.beginPath(),c.arc(x+a,y+d,r,0,T),c.fill();c.lineWidth=7}
export default(c,t)=>{
  const b=round(6*sin(t*T)),p=.5+.5*sin(4*T*t),fh=12+14*p
  cloud(c,round(48+8*sin(t*T)),212);cloud(c,round(204-8*sin(t*T+1)),56)
  c.translate(0,b)
  for(const[w,s]of[[9,'#111'],[3,'#ffd8a8']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(106,180),c.lineTo(112,206),c.moveTo(150,180),c.lineTo(144,206),c.stroke()
  c.strokeStyle='#111'
  c.fillStyle=FO;c.lineWidth=5;c.beginPath();c.moveTo(118,204);c.quadraticCurveTo(114,196-fh*.4,128,196-fh);c.quadraticCurveTo(142,196-fh*.4,138,204);c.closePath();c.fill();c.stroke()
  c.fillStyle=FY;c.beginPath();c.moveTo(123,203);c.quadraticCurveTo(121,199-fh*.3,128,199-fh*.6);c.quadraticCurveTo(135,199-fh*.3,133,203);c.closePath();c.fill()
  c.lineWidth=7;env(c);c.fillStyle=ST[0];c.fill()
  c.save();env(c);c.clip()
  for(const[k,rx]of[[1,70],[2,46],[3,20]])c.fillStyle=ST[k],c.beginPath(),c.ellipse(128,92,rx,120,0,0,T),c.fill()
  c.lineWidth=4;for(const rx of[70,46,20])c.beginPath(),c.ellipse(128,92,rx,120,0,0,T),c.stroke()
  c.restore()
  c.lineWidth=7;env(c);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(128,96,62,PI*1.12,PI*1.3);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(const x of[108,148])c.beginPath(),c.ellipse(x,108,6,8,0,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[106,146])c.beginPath(),c.arc(x,105,2.5,0,T),c.fill()
  c.fillStyle=BL;for(const x of[92,164])c.beginPath(),c.ellipse(x,124,9,5,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,118,10,.15*PI,.85*PI);c.stroke()
  c.lineWidth=7;c.fillStyle=SK;c.beginPath();c.moveTo(100,170);c.lineTo(156,170);c.lineTo(150,184);c.lineTo(106,184);c.closePath();c.fill();c.stroke()
  c.fillStyle=BKD;c.beginPath();c.roundRect(102,200,52,10,5);c.fill();c.stroke()
  c.fillStyle=BK;c.beginPath();c.roundRect(106,208,44,30,6);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();for(const y of[218,228])c.moveTo(108,y),c.lineTo(148,y);for(const x of[120,136])c.moveTo(x,210),c.lineTo(x,236);c.stroke()
}
