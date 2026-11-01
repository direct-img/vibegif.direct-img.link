// emoticon laughing hard with ≧ ≦ squeezed eyes and a gaping ▽ mouth, head bouncing as outlined HA glyphs pop out from alternate corners
const P=Math.PI,K='#111',G='#9a9a9a'
export const frames=28,delay=45
// HA drawn as strokes, black outline under a white core so it reads on any background
const HA=(c,x,y,s,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath()
  c.moveTo(-25,-15);c.lineTo(-25,15);c.moveTo(-5,-15);c.lineTo(-5,15);c.moveTo(-25,0);c.lineTo(-5,0)
  c.moveTo(5,15);c.lineTo(15,-15);c.lineTo(25,15);c.moveTo(8.5,5);c.lineTo(21.5,5)
  c.strokeStyle=K;c.lineWidth=19;c.stroke();c.strokeStyle='#fff';c.lineWidth=10;c.stroke();c.restore()
}
export default(c,t,i)=>{
  const p=t*4%1,u=Math.sin(P*p),g=(1-u)**3,r=.08*Math.sin(4*P*t)
  const sx=1+.05*g-.02*u,sy=1-.05*g+.03*u
  // each landing stamps a HA out of alternate top corners, overshooting then shrinking away
  const q=(t*4+.2)%1,d=Math.floor(t*4+.2)%2?1:-1
  const e=Math.min(1,q/.22),k=q<.7?(1+1.7*(e-1)**3+.7*(e-1)**2)*Math.min(1,(.7-q)/.15):0
  c.save();c.translate(128,130+96*(1-sy)-16*u);c.rotate(r)
  c.beginPath();c.ellipse(0,0,96*sx,96*sy,0,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.scale(sx,sy);c.translate(0,2-10*u)
  // ≧ ≦ eyes: squeezed chevrons on a bar, with the old brows lifting
  c.lineWidth=10
  for(const d of[-1,1]){
    c.beginPath();c.moveTo(d*48,-50);c.lineTo(d*24,-38);c.lineTo(d*48,-26);c.moveTo(d*50,-13);c.lineTo(d*24,-13);c.stroke()
    c.lineWidth=9;c.beginPath();c.arc(d*38,-54-6*u,18,d>0?1.25*P:1.35*P,d>0?1.65*P:1.75*P);c.stroke()
  }
  // ▽ mouth: a hollow triangle glyph gaping deeper at the top of each bounce, grey tongue in its point
  const H=50+16*u,m=()=>{c.beginPath();c.moveTo(-48,6);c.lineTo(48,6);c.lineTo(0,6+H);c.closePath()}
  m();c.save();c.clip();c.fillStyle=G;c.beginPath();c.ellipse(0,6+H,30,24+6*u,0,0,2*P);c.fill();c.restore()
  m();c.lineWidth=11;c.stroke()
  c.restore()
  if(k>0)HA(c,128+d*(74+8*q),50-10*q,.95*k,d*.28)
}
