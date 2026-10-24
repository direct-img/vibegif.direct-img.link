// mint oven baking a happy little cake that puffs up behind the glowing window while the timer dial ticks round
const{sin,cos,PI,floor}=Math,T=2*PI
export const frames=24,delay=90
const O='#63e6be',OD='#38d9a9',PN='#c3fae8',IN='#ffc078',CK='#fff3bf',CR='#ffd8a8',BL='#ffa8a8',HN='#dee2e6',RD='#ff6b6b',PAN='#adb5bd'
export default(c,t,i)=>{
  const s=.5-.5*cos(T*t),h=34+22*s,tk=floor(t*12),tick=i%2==0,hot=.5+.5*sin(4*T*t)
  c.fillStyle='#495057';for(const x of[46,184])c.beginPath(),c.roundRect(x,222,26,18,6),c.fill(),c.stroke()
  c.fillStyle=O;c.beginPath();c.roundRect(22,22,212,206,26);c.fill();c.stroke()
  c.fillStyle=PN;c.lineWidth=5;c.beginPath();c.roundRect(36,34,184,52,16);c.fill();c.stroke()
  for(const[x,a]of[[66,-.8],[104,.6]]){c.fillStyle='#fff';c.beginPath();c.arc(x,60,14,0,T);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(x,60);c.lineTo(x+cos(a-PI/2)*9,60+sin(a-PI/2)*9);c.stroke();c.lineWidth=5}
  c.save();c.translate(182,60);if(tick)c.rotate(.08*(tk%2?1:-1))
  c.fillStyle='#fff3bf';c.beginPath();c.arc(0,0,20,0,T);c.fill();c.stroke()
  c.lineWidth=3;for(let k=0;k<4;k++){const a=k*PI/2;c.beginPath();c.moveTo(cos(a)*13,sin(a)*13);c.lineTo(cos(a)*16,sin(a)*16);c.stroke()}
  const ha=-PI/2+tk*T/12;c.strokeStyle=RD;c.lineWidth=4;c.beginPath();c.moveTo(0,0);c.lineTo(cos(ha)*13,sin(ha)*13);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(0,0,3,0,T);c.fill();c.restore()
  if(tick)for(const a of[-.5,0,.5].map(v=>v-PI/4))for(const[w,st]of[[8,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(182+cos(a)*27,60+sin(a)*27),c.lineTo(182+cos(a)*35,60+sin(a)*35),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=OD;c.beginPath();c.roundRect(36,98,184,118,18);c.fill();c.stroke()
  c.fillStyle=HN;c.lineWidth=5;c.beginPath();c.roundRect(72,104,112,12,6);c.fill();c.stroke()
  const win=()=>{c.beginPath();c.roundRect(54,124,148,84,12)}
  c.fillStyle=IN;win();c.fill();c.save();win();c.clip()
  c.fillStyle='#ffe8cc';c.beginPath();c.ellipse(128,210,74+6*hot,36+4*hot,0,0,T);c.fill()
  for(const[w,st]of[[8,'#111'],[4,hot>.5?RD:'#ff8787']]){c.lineWidth=w;c.strokeStyle=st;c.beginPath();for(let x=66;x<=190;x+=12)c.lineTo(x,(x-66)%24?140:134);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(54,202);c.lineTo(202,202);c.stroke()
  c.lineWidth=5;c.fillStyle=PAN;c.beginPath();c.moveTo(74,188);c.lineTo(182,188);c.lineTo(176,202);c.lineTo(80,202);c.closePath();c.fill();c.stroke()
  const cake=()=>{c.beginPath();c.moveTo(84,190);c.lineTo(84,190-h*.5);c.bezierCurveTo(84,184-h,172,184-h,172,190-h*.5);c.lineTo(172,190);c.closePath()}
  c.fillStyle=CK;cake();c.fill();c.save();cake();c.clip();c.fillStyle=CR;c.fillRect(70,180-h,120,h*.4);c.restore();cake();c.stroke()
  const ey=198-h*.6
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*14,ey,4.5,6,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*14-1.5,ey-2.5,2,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*26,ey+8,7,4,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,ey+4,7,.15*PI,.85*PI);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(170,132);c.lineTo(150,152);c.moveTo(186,134);c.lineTo(178,142);c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=5;win();c.stroke()
}
