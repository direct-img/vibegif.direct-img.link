// cute helicopter hovering and gently tilting, main rotor whirring, tail rotor spinning, downwash puffs below
const{sin,cos,PI,abs,round}=Math,T=2*PI
export const frames=16,delay=70
const B='#ff6b6b',BD='#e03131',GL='#a5d8ff',SK='#868e96',RT='#dee2e6',BL='#ffa8a8'
const body=c=>{c.beginPath();c.ellipse(140,138,62,44,0,0,T)}
export default(c,t)=>{
  const b=round(4*sin(t*T)),r=.05*sin(t*T+1),th=t*T*2
  c.lineWidth=5
  for(const d of[-1,1])for(let k=0;k<2;k++){const p=(t*2+k/2)%1,x=140+d*(30+64*p),y=226+8*p,l=12*sin(PI*p);if(l>2)for(const[w,s]of[[9,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x-d*l,y-l*.3),c.lineTo(x+d*l,y+l*.3),c.stroke()}
  c.strokeStyle='#111'
  c.save();c.translate(140,140+b);c.rotate(r);c.translate(-140,-140)
  for(const[lw,st]of[[12,'#111'],[5,SK]])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.moveTo(118,176),c.lineTo(112,204),c.moveTo(162,176),c.lineTo(168,204),c.moveTo(80,204),c.lineTo(196,204),c.quadraticCurveTo(212,204,214,192),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=B;c.beginPath();c.moveTo(92,122);c.lineTo(34,112);c.lineTo(34,128);c.lineTo(92,152);c.closePath();c.fill();c.stroke()
  c.fillStyle=BD;c.beginPath();c.moveTo(28,126);c.lineTo(18,90);c.lineTo(38,94);c.lineTo(44,120);c.closePath();c.fill();c.stroke()
  const tp=t*T*6
  for(const a of[tp,tp+PI/2])for(const[lw,st]of[[10,'#111'],[4,RT]])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.moveTo(26-14*cos(a),104-14*sin(a)),c.lineTo(26+14*cos(a),104+14*sin(a)),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SK;c.beginPath();c.arc(26,104,5,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=SK;c.beginPath();c.roundRect(132,80,16,18,4);c.fill();c.stroke()
  body(c);c.fillStyle=B;c.fill()
  c.save();body(c);c.clip();c.fillStyle=BD;c.fillRect(70,160,140,30)
  c.fillStyle=GL;c.beginPath();c.ellipse(170,124,40,30,0,0,T);c.fill();c.lineWidth=5;c.stroke();c.restore()
  c.lineWidth=7;body(c);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(170,124,26,PI*1.1,PI*1.4);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(const x of[156,182])c.beginPath(),c.ellipse(x,124,5,7,0,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[154,180])c.beginPath(),c.arc(x,121,2.5,0,T),c.fill()
  c.fillStyle=BL;for(const x of[142,196])c.beginPath(),c.ellipse(x,150,8,5,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(169,146,7,.2*PI,.8*PI);c.stroke()
  for(const[lw,st]of[[9,'#111'],[3,RT]])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.ellipse(140,78,104,7,0,0,T),c.stroke()
  for(const a of[th,th+PI/2])for(const[lw,st]of[[11,'#111'],[5,SK]])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.moveTo(140-100*cos(a),78-5*sin(a)),c.lineTo(140+100*cos(a),78+5*sin(a)),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SK;c.beginPath();c.arc(140,78,8,0,T);c.fill();c.stroke()
  c.restore()
}
