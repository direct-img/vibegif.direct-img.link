// video player stuck buffering: a ring of dots spins where the play button would be while the scrubber sits frozen partway
const{cos,sin,PI}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t)=>{
  c.beginPath();c.roundRect(14,36,228,184,20);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(28,50,200,124,10);c.fill()
  c.fillStyle='#fff'
  for(let k=0;k<8;k++){const a=k*T/8-PI/2,g=((t-k/8)%1+1)%1;c.beginPath();c.arc(128+cos(a)*34,112+sin(a)*34,4+8*(1-g)**1.6,0,T);c.fill()}
  c.lineWidth=5;c.beginPath();c.moveTo(34,186);c.lineTo(34,208);c.lineTo(53,197);c.closePath();c.fill();c.stroke()
  c.lineCap='round';c.lineWidth=12
  for(const[a,b,s]of[[74,222,'#ddd'],[74,168,'#999'],[74,132,'#111']])c.strokeStyle=s,c.beginPath(),c.moveTo(a,197),c.lineTo(b,197),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.arc(132,197,11,0,T);c.fill();c.stroke()
}
