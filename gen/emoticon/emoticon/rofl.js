// emoticon rolling on the floor laughing, spinning round and round with dust puffing up behind it
const P=Math.PI,K='#111',G='#9a9a9a',S=Math.sin
export const frames=21,delay=57
export default(c,t,i)=>{
  const b=Math.abs(S(4*P*t)),y0=130-5*b
  // floor
  c.strokeStyle=G;c.lineWidth=6;c.beginPath();c.moveTo(34,236);c.lineTo(222,236);c.stroke()
  // dust puffs kicked up behind, drifting back and shrinking away
  c.fillStyle=G
  for(let j=0;j<2;j++){
    const f=(t*4+j/2)%1,r=13*S(P*Math.sqrt(f)),x=80-46*f,y=226-20*f
    c.beginPath()
    for(const[a,b,k]of[[0,0,1],[-1.1,.5,.7],[1.1,.6,.6]])c.moveTo(x+a*r+k*r,y+b*r),c.arc(x+a*r,y+b*r,k*r,0,2*P)
    c.fill()
  }
  // spin swooshes trailing the roll
  c.lineWidth=6
  for(const R of[110,121]){c.beginPath();c.arc(128,y0,R,1.1*P,1.4*P);c.stroke()}
  c.strokeStyle=K
  c.translate(128,y0);c.rotate(2*P*t)
  c.fillStyle='#fff';c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  // laughing face: squeezed eyes, brows up, big open mouth
  c.lineWidth=9
  for(const d of[-1,1]){
    c.beginPath();c.moveTo(d*48,-40);c.lineTo(d*24,-26);c.lineTo(d*48,-12);c.stroke()
    c.beginPath();c.arc(d*38,-48,18,d>0?1.25*P:1.35*P,d>0?1.65*P:1.75*P);c.stroke()
  }
  const H=48+8*b
  c.beginPath();c.moveTo(-52,10);c.quadraticCurveTo(0,18,52,10);c.ellipse(0,10,52,H,0,0,P);c.closePath()
  c.fillStyle=K;c.fill();c.save();c.clip()
  c.fillStyle=G;c.beginPath();c.ellipse(0,10+H,28,18,0,0,2*P);c.fill();c.restore()
  // tears flicking off the eye corners
  for(const d of[-1,1]){
    c.save();c.translate(d*62,-22);c.rotate(d>0?-.3:P+.3);c.beginPath()
    c.arc(0,0,8,-P/2,P/2);c.quadraticCurveTo(-8,8,-19,0);c.quadraticCurveTo(-8,-8,0,-8)
    c.fillStyle=G;c.lineWidth=4;c.stroke();c.fill();c.restore()
  }
}
