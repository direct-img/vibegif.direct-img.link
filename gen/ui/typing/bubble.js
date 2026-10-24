// chat speech bubble gently bobbing while three typing dots pulse up and darken one after another
const{sin,PI,max}=Math,T=2*PI
export const frames=18,delay=70
export default(c,t)=>{
  c.translate(0,3*sin(T*t))
  const B=()=>{c.beginPath();c.roundRect(22,56,212,128,44)},K=()=>{c.beginPath();c.moveTo(58,168);c.quadraticCurveTo(58,204,30,218);c.quadraticCurveTo(84,214,100,176);c.closePath()}
  c.lineWidth=14;B();c.stroke();K();c.stroke();B();c.fill();K();c.fill()
  for(let k=0;k<3;k++){
    const u=((t-k*.16)%1+1)%1,p=u<.42?sin(PI*u/.42):0
    c.fillStyle=p>.6?'#111':p>.25?'#555':'#999'
    c.beginPath();c.arc(84+k*44,120-12*p,14+4*p,0,T);c.fill()
  }
}
