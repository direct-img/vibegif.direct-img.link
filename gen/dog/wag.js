// pup sitting and panting with its tail going and ears bouncing
const{sin,cos,PI}=Math,T=2*PI
export const delay=60
export default(c,t)=>{
  const b=2*sin(2*T*t),w=sin(2*T*t+1),a=-1+.5*w,ex=176+52*cos(a),ey=196+52*sin(a)
  for(const[l,s]of[[24,'#111'],[10,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(150,206),c.quadraticCurveTo(186,196,ex,ey),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.ellipse(128,180,52,50,0,0,T);c.fill();c.stroke()
  for(const x of[106,150]){
    c.beginPath();c.roundRect(x-13,178,26,46,13);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(x-4,224);c.lineTo(x-4,216);c.moveTo(x+4,224);c.lineTo(x+4,216);c.stroke();c.lineWidth=7
  }
  c.beginPath();c.arc(128,98+b,52,0,T);c.fill();c.stroke()
  for(const s of[-1,1])c.beginPath(),c.ellipse(128+s*50,100+b,18,36,-s*(.35+.12*sin(2*T*t+.5)),0,T),c.fill(),c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(150,92+b,17,15,0,0,T);c.fill()
  c.beginPath();c.arc(106,94+b,7,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(150,94+b,8,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.arc(151,95+b,5,0,T);c.fill()
  c.fillStyle='#fff';for(const x of[104,149])c.beginPath(),c.arc(x,92+b,2.5,0,T),c.fill()
  c.beginPath();c.ellipse(128,120+b,26,18,0,0,T);c.fill();c.stroke()
  const L=16+5*sin(2*T*t+2)
  c.beginPath();c.roundRect(120,124+b,16,L,[0,0,8,8]);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(128,128+b);c.lineTo(128,120+b+L*.8);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(128,114+b);c.lineTo(128,122+b);c.arc(121,122+b,7,0,PI);c.moveTo(142,122+b);c.arc(135,122+b,7,0,PI);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,110+b,10,7,0,0,T);c.fill()
}
