// four-legged robot dog trotting side-on in a diagonal gait, white armored body with orange stripe, jointed legs with rubber feet, cyan visor head and antenna tail, ground scrolling under it
export const frames=16,delay=55
const P=Math.PI*2,S=40,B=.5,G=196,L1=46,L2=48
const ik=(h,f,k)=>{
  const dx=f[0]-h[0],dy=f[1]-h[1],d=Math.min(Math.hypot(dx,dy),L1+L2-1)
  const a=Math.atan2(dy,dx)+k*Math.acos((L1*L1+d*d-L2*L2)/(2*L1*d))
  return[h[0]+L1*Math.cos(a),h[1]+L1*Math.sin(a)]
}
const foot=p=>{
  p=(p%1+1)%1
  if(p<B)return[S/2-S*p/B,0]
  const s=(p-B)/(1-B),e=s*s*(3-2*s)
  return[-S/2+S*e,-18*Math.sin(Math.PI*s)]
}
const bar=(c,a,b,w,col)=>{
  c.beginPath();c.moveTo(...a);c.lineTo(...b)
  c.strokeStyle='#111';c.lineWidth=w+7;c.stroke();c.strokeStyle=col;c.lineWidth=w;c.stroke()
}
const dot=(c,[x,y],r,f,s='#111',w=4)=>{c.beginPath();c.arc(x,y,r,0,P);c.fillStyle=f;c.fill();c.strokeStyle=s;c.lineWidth=w;c.stroke()}
export default(c,t)=>{
  const b=2.5*Math.cos(P*t*2),hy=110+b
  // ground dashes, scrolling at the stance foot speed so feet don't slide
  c.strokeStyle='#8f9aa6';c.lineWidth=5
  for(let x=-(t*S/B)%40-40;x<300;x+=40){
    const a=Math.max(x,30),z=Math.min(x+18,226)
    if(z>a){c.beginPath();c.moveTo(a,G+9);c.lineTo(z,G+9);c.stroke()}
  }
  // legs: [hip x, phase, knee side, near]
  const leg=([hx,ph,k,n])=>{
    const h=[hx+(n?0:7),hy-(n?0:3)],o=foot(ph+t),f=[hx+(n?0:7)+o[0],G-(n?0:3)+o[1]],kn=ik(h,f,k)
    bar(c,h,kn,15,n?'#e9edf1':'#aeb7c1');bar(c,kn,f,10,n?'#5a646f':'#3f4750')
    dot(c,kn,6,n?'#ff8a1f':'#b8611a',3);dot(c,f,7.5,'#22272d',n?'#111':'#111',3.5)
  }
  const far=[[166,.5,1,0],[80,0,1,0]],near=[[166,0,1,1],[80,.5,1,1]]
  far.forEach(leg)
  // tail antenna
  const tw=.25*Math.sin(P*t*2)
  bar(c,[66,hy-14],[66-22*Math.cos(1.1+tw),hy-14-22*Math.sin(1.1+tw)],3,'#8f9aa6')
  dot(c,[66-24*Math.cos(1.1+tw),hy-14-24*Math.sin(1.1+tw)],5,'#ff8a1f',`#111`,3.5)
  // torso
  c.beginPath();c.roundRect(58,hy-26,132,40,[14,18,14,14]);c.fillStyle='#eef1f4';c.fill()
  c.save();c.clip();c.fillStyle='#c9d1d9';c.fillRect(50,hy+3,150,20);c.fillStyle='#ff8a1f';c.fillRect(50,hy-9,150,8);c.restore()
  c.strokeStyle='#111';c.lineWidth=7;c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(124,hy-26);c.lineTo(124,hy+14);c.stroke()
  for(let k=0;k<3;k++){c.fillStyle=k<2?'#5cff9d':'#2a6b45';c.fillRect(98+k*8,hy-20,5,7)}
  // neck + head
  bar(c,[176,hy-14],[194,hy-30],12,'#5a646f')
  c.beginPath();c.moveTo(182,hy-46);c.lineTo(222,hy-44);c.quadraticCurveTo(234,hy-42,232,hy-30);c.lineTo(228,hy-20);c.lineTo(188,hy-18);c.quadraticCurveTo(178,hy-20,178,hy-32);c.closePath()
  c.fillStyle='#eef1f4';c.fill();c.lineWidth=6;c.stroke()
  c.beginPath();c.roundRect(198,hy-40,30,14,6);c.fillStyle='#16222b';c.fill();c.lineWidth=3.5;c.stroke()
  const bl=t>.8&&t<.9?2:8
  c.beginPath();c.roundRect(206,hy-33-bl/2,16,bl,3);c.fillStyle='#4fe6ff';c.fill()
  bar(c,[188,hy-46],[184,hy-58+tw*6],2.5,'#8f9aa6')
  dot(c,[184,hy-60+tw*6],3.5,'#4fe6ff','#111',3)
  near.forEach(leg)
  for(const x of[166,80]){dot(c,[x,hy],11,'#5a646f','#111',5);dot(c,[x,hy],4,'#ff8a1f','#111',2)}
}
