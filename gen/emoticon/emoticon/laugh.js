// emoticon laughing hard with eyes squeezed shut, head bouncing on every ha
const P=Math.PI,K='#111',G='#9a9a9a'
export const frames=28,delay=45
export default(c,t,i)=>{
  const p=t*4%1,u=Math.sin(P*p),g=(1-u)**3,r=.08*Math.sin(4*P*t)
  const sx=1+.05*g-.02*u,sy=1-.05*g+.03*u
  // shake marks at the sides on each landing
  if(p<.2||p>.8){
    c.strokeStyle=G;c.lineWidth=5
    for(const d of[-1,1])for(const k of[0,1]){
      c.beginPath();c.arc(128,140,106+k*11,d>0?-.2:P-.14,d>0?.14:P+.2);c.stroke()
    }
    c.strokeStyle=K
  }
  c.translate(128,130+96*(1-sy)-16*u);c.rotate(r)
  c.beginPath();c.ellipse(0,0,96*sx,96*sy,0,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.scale(sx,sy);c.translate(0,2-10*u)
  // squeezed eyes
  c.lineWidth=9
  for(const d of[-1,1]){
    c.beginPath();c.moveTo(d*48,-42);c.lineTo(d*24,-28);c.lineTo(d*48,-14);c.stroke()
    c.beginPath();c.arc(d*38,-48-6*u,18,d>0?1.25*P:1.35*P,d>0?1.65*P:1.75*P);c.stroke()
  }
  // wide open mouth with tongue, gaping wider at the top of each bounce
  const H=46+20*u
  c.beginPath();c.moveTo(-54,8);c.quadraticCurveTo(0,16,54,8);c.ellipse(0,8,54,H,0,0,P);c.closePath()
  c.fillStyle=K;c.fill();c.save();c.clip()
  c.fillStyle=G;c.beginPath();c.ellipse(0,8+H,30,18+6*u,0,0,2*P);c.fill();c.restore()
}
