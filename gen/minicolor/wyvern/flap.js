// little wyvern hovering: bat wings beating twice a loop, tail curling below, tiny horns, blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#8cc084',L='#c6e0c2',A='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const f=sin(2*T*t),bl=t>.42&&t<.48
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  const line=(col,lw,g)=>{c.strokeStyle=col;c.lineWidth=lw;c.beginPath();g();c.stroke()}
  c.translate(0,6*sin(2*T*t+1.3))
  // tail curling down and to the side, tapering, with a spade tip
  const sw=6*sin(T*t)
  for(let s=0;s<=1;s+=.02){const u=1-s,x=u*u*128+2*u*s*(140+sw)+s*s*(176+sw),y=u*u*168+2*u*s*222+s*s*(196);c.fillStyle=B;c.beginPath();c.arc(x,y,9-5*s,0,T);c.fill()}
  fill(B,()=>{c.moveTo(174+sw,198);c.lineTo(186+sw,178);c.lineTo(192+sw,200);c.closePath()})
  for(const d of[-1,1]){
    c.save();c.translate(128+d*16,122);c.scale(d*.92,.92);c.rotate(-.35*f)
    fill(L,()=>{c.moveTo(0,12);c.lineTo(46,-40);c.lineTo(92,-30);c.quadraticCurveTo(76,-18,84,6);c.quadraticCurveTo(64,4,58,28);c.quadraticCurveTo(34,14,8,28)})
    line(B,6,()=>{c.moveTo(0,0);c.lineTo(46,-40);c.lineTo(92,-30);c.moveTo(46,-40);c.lineTo(84,6);c.moveTo(46,-40);c.lineTo(58,28)})
    c.restore()
  }
  for(const d of[-1,1])fill(B,()=>c.ellipse(128+d*14,174,8,10,0,0,T))
  fill(B,()=>c.ellipse(128,140,30,36,0,0,T))
  fill(L,()=>c.ellipse(128,148,17,23,0,0,T))
  for(const d of[-1,1])fill(A,()=>{c.moveTo(128+d*10,72);c.quadraticCurveTo(128+d*16,52,128+d*28,48);c.quadraticCurveTo(128+d*24,62,128+d*24,76)})
  fill(B,()=>c.arc(128,94,30,0,T))
  fill(L,()=>c.ellipse(128,108,16,10,0,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1]){
    c.beginPath();c.arc(128+d*5,106,2.2,0,T);c.fill()
    if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*14,86,5,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(128+d*14,88,4.5,0,T),c.fill()
  }
}
