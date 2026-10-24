// inbox tray at zero turned into a tiny island: palm tree swaying, a cool sun in shades, the tray smiling with relaxed closed eyes
const{sin,PI}=Math,T=2*PI
export const frames=16,delay=100
const TY='#b197fc',TD='#7950f2',WA='#74c0fc',SA='#ffe066',TK='#c08457',LF='#51cf66',CO='#8b5a3c',SU='#ffd43b',SR='#ffa94d',BL='#ffa8a8'
export default(c,t)=>{
  c.save();c.translate(204,52+3*sin(t*T));c.save();c.rotate(t*T/8)
  c.fillStyle=SR;c.lineWidth=4;for(let k=0;k<8;k++)c.save(),c.rotate(k*PI/4),c.beginPath(),c.roundRect(30,-5,13,10,5),c.fill(),c.stroke(),c.restore()
  c.restore();c.fillStyle=SU;c.lineWidth=6;c.beginPath();c.arc(0,0,25,0,T);c.fill();c.stroke()
  c.fillStyle='#343a40';c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.roundRect(d>0?2:-17,-8,15,10,4),c.fill(),c.stroke()
  c.beginPath();c.moveTo(-2,-5);c.lineTo(2,-5);c.stroke()
  c.lineWidth=3.5;c.beginPath();c.arc(0,6,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*15,8,4,2.5,0,0,T),c.fill()
  c.restore()
  c.lineWidth=7;c.fillStyle=TD;c.beginPath();c.moveTo(54,140);c.lineTo(202,140);c.lineTo(226,172);c.lineTo(30,172);c.closePath();c.fill();c.stroke()
  c.fillStyle=WA;c.beginPath();c.moveTo(62,148);c.lineTo(194,148);c.lineTo(212,172);c.lineTo(44,172);c.closePath();c.fill()
  c.strokeStyle='#fff';c.lineWidth=4;for(const[x,o]of[[70,0],[184,.5]]){const w=3*sin(t*T*2+o*T);c.beginPath();c.arc(x+w,166,6,PI*1.1,PI*1.9);c.arc(x+12+w,166,6,PI*1.1,PI*1.9);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=SA;c.beginPath();c.ellipse(128,170,50,20,0,PI,T);c.fill();c.stroke()
  c.save();c.translate(132,160);c.rotate(.05*sin(t*T))
  for(const[w,s]of[[20,'#111'],[11,TK]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.quadraticCurveTo(8,-44,-22,-76),c.stroke()
  c.strokeStyle='#111';c.lineWidth=3;c.beginPath();for(const[x,y]of[[1,-16],[2,-34],[-4,-52]])c.moveTo(x-6,y+1),c.lineTo(x+5,y-1);c.stroke()
  c.translate(-22,-78)
  ;[-2.75,-2.15,-1.35,-.65,-.05].forEach((a,k)=>{c.save();c.rotate(a+.09*sin(t*T*2+k));c.fillStyle=LF;c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(28,-20,58,4);c.quadraticCurveTo(44,0,40,10);c.quadraticCurveTo(34,0,26,6);c.quadraticCurveTo(14,-4,0,0);c.fill();c.stroke();c.restore()})
  c.fillStyle=CO;c.lineWidth=4;for(const[x,y]of[[-6,8],[7,9]])c.beginPath(),c.arc(x,y,7,0,T),c.fill(),c.stroke()
  c.restore()
  c.lineWidth=7;c.fillStyle=TY;c.beginPath();c.moveTo(30,172);c.lineTo(82,172);c.lineTo(94,190);c.lineTo(162,190);c.lineTo(174,172);c.lineTo(226,172);c.lineTo(212,232);c.lineTo(44,232);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*24,212,7,1.15*PI,1.85*PI),c.stroke()
  c.beginPath();c.arc(128,214,8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,218,8,5,0,0,T),c.fill()
}
