// cotton candy on a paper cone, its fluffy tufts swirling round and puffing while sparkles twinkle around it
// all tufts are stroked wide in black first and filled after, so the cloud keeps a single outline
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=80
const PK='#faa2c1',PD='#f783ac',BU='#a5d8ff',CN='#fff',ST='#f783ac',BL='#ff8fab',SPK='#ffd43b'
const star=(c,x,y,s)=>{c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.38:s,a=k*PI/4;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  c.fillStyle=CN;c.beginPath();c.moveTo(106,150);c.lineTo(150,150);c.lineTo(132,236);c.lineTo(124,236);c.closePath();c.fill()
  c.save();c.clip();c.strokeStyle=ST;c.lineWidth=7;for(let k=-3;k<5;k++)c.beginPath(),c.moveTo(100,160+k*22),c.lineTo(156,140+k*22),c.stroke();c.restore()
  c.beginPath();c.moveTo(106,150);c.lineTo(150,150);c.lineTo(132,236);c.lineTo(124,236);c.closePath();c.stroke()
  const tf=[...Array(11)].map((_,k)=>{const a=k*T/11+T*t;return[128+cos(a)*68,96+sin(a)*50,26+4*sin(2*T*t+k*1.9),k%3?PK:BU]})
  const blob=()=>{c.beginPath();c.ellipse(128,96,62,48,0,0,T);for(const[x,y,r]of tf)c.moveTo(x+r,y),c.arc(x,y,r,0,T)}
  c.lineWidth=16;blob();c.stroke();c.lineWidth=7
  for(const[x,y,r,col]of tf)c.fillStyle=col,c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.fillStyle=PK;c.beginPath();c.ellipse(128,96,62,48,0,0,T);c.fill()
  c.strokeStyle=PD;c.lineWidth=4.5;for(const[r,o]of[[50,0],[50,PI],[34,1.6]])c.beginPath(),c.ellipse(128,96,r*1.2,r*.85,0,T*t*-1+o,T*t*-1+o+1.1),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22,94,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22-2,92,2.2,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.arc(128,104,9,0,PI);c.closePath();c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,110,9,5,0,0,T),c.fill()
  c.fillStyle=SPK;c.lineWidth=4
  ;[[34,36],[222,42],[28,168],[226,160]].forEach(([x,y],k)=>{const s=14*max(0,sin(T*t*2+k*1.6));if(s>3)star(c,x,y,s)})
}
