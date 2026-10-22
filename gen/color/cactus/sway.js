// potted cactus swaying to music, arms waving, pink flower bobbing on its head
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
const G='#51cf66',GD='#2f9e44',POT='#ff922b',PD='#e8590c',FL='#f783ac',FC='#ffd43b',BL='#ffa8a8'
export default(c,t)=>{
  const r=.09*sin(t*T),aL=.18*sin(t*T*2),aR=.18*sin(t*T*2+PI)
  c.save();c.translate(128,182);c.rotate(r);c.translate(-128,-182)
  const body=()=>c.roundRect(98,48,60,150,30)
  const arm=(d,a)=>{c.save();c.translate(128+d*28,132);c.rotate(d*a);c.beginPath();c.moveTo(0,0);c.lineTo(d*30,0);c.lineTo(d*30,-40);c.restore()}
  c.lineWidth=40;for(const[d,a]of[[-1,aL],[1,aR]])arm(d,a),c.stroke()
  c.lineWidth=7;c.beginPath();body();c.stroke();c.lineWidth=14;c.beginPath();body();c.stroke()
  c.strokeStyle=G;c.lineWidth=26;for(const[d,a]of[[-1,aL],[1,aR]])arm(d,a),c.stroke()
  c.fillStyle=G;c.beginPath();body();c.fill()
  c.strokeStyle=GD;c.lineWidth=4;for(const x of[114,142])c.beginPath(),c.moveTo(x,66),c.lineTo(x,190),c.stroke()
  c.strokeStyle='#111';c.lineWidth=3;for(const[x,y]of[[106,80],[150,96],[106,170],[150,180],[128,62]])c.beginPath(),c.moveTo(x-4,y),c.lineTo(x+4,y-4),c.moveTo(x-4,y-4),c.lineTo(x+4,y),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*13,106,5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*13-2,104,1.8,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,114,8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*22,118,6,3.5,0,0,T),c.fill()
  c.lineWidth=5;const fy=46+3*sin(t*T*2)
  c.fillStyle=FL;for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.beginPath();c.ellipse(128+cos(a)*11,fy+sin(a)*11,9,6,a,0,T);c.fill();c.stroke()}
  c.fillStyle=FC;c.beginPath();c.arc(128,fy,6,0,T);c.fill();c.stroke()
  c.restore();c.lineWidth=7
  c.fillStyle=POT;c.beginPath();c.moveTo(80,196);c.lineTo(176,196);c.lineTo(164,244);c.lineTo(92,244);c.closePath();c.fill();c.stroke()
  c.fillStyle=PD;c.beginPath();c.roundRect(72,184,112,20,6);c.fill();c.stroke()
}
