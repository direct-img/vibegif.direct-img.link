// dolphin leaping in a big arc out of a little rolling wave and diving back in, slowest at the top, quick under water
const{sin,cos,PI}=Math,T=2*PI
export const frames=32,delay=60
const B='#4ea8de',L='#a7d4ef',A='#2ec4b6',AL='#96e1da',D='#2b2633'
export default(c,t)=>{
  const u=(t+.5)%1-.5,v=Math.abs(u)*2,th=Math.sign(u)*PI*(.525*v+.475*v**8)-PI/2,R=74,fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.save();c.beginPath();c.rect(0,0,256,194);c.clip()
  c.translate(128+R*cos(th),182+R*sin(th));c.rotate(th+PI/2)
  c.save();c.translate(-60,0);c.rotate(.2*sin(T*t*2))
  fill(B,()=>{c.moveTo(6,-4);c.quadraticCurveTo(-6,-6,-16,-18);c.quadraticCurveTo(-10,-4,-12,0);c.quadraticCurveTo(-10,4,-16,18);c.quadraticCurveTo(-6,6,6,4)})
  c.restore()
  fill(B,()=>{c.moveTo(6,-22);c.quadraticCurveTo(-2,-44,-16,-46);c.quadraticCurveTo(-12,-30,-20,-17)})
  fill(B,()=>c.ellipse(14,17,14,6,.6,0,T))
  fill(B,()=>{c.moveTo(60,4);c.quadraticCurveTo(58,-4,46,-6);c.bezierCurveTo(36,-24,0,-26,-22,-17);c.bezierCurveTo(-40,-10,-52,-5,-60,-3)
    c.lineTo(-60,3);c.bezierCurveTo(-46,8,-4,22,26,15);c.quadraticCurveTo(44,10,60,4)})
  fill(L,()=>c.ellipse(8,9,28,6,.05,0,T))
  c.fillStyle=D;c.beginPath();c.arc(36,-7,3.5,0,T);c.fill()
  c.restore()
  c.fillStyle=c.strokeStyle=A;c.lineWidth=6;c.beginPath();c.moveTo(30,206)
  for(let x=30;x<=226;x+=4)c.lineTo(x,182+5*sin(x*T/66-T*t))
  c.lineTo(226,206);c.closePath();c.fill();c.stroke()
  c.strokeStyle=AL;c.lineWidth=4;c.lineCap='round';c.beginPath()
  for(let x=48;x<=208;x+=4)c.lineTo(x,194+3*sin(x*T/66-T*t+1.5))
  c.stroke()
}
