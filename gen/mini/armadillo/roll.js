// armadillo trots in place, curls up into a banded ball, rocks a little, then unrolls and trots on
const{sin,cos,PI}=Math,T=2*PI
export const frames=32,delay=70,rim=3
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  const k=t<.5?ease((t-.3)/.15):1-ease((t-.75)/.15),rock=t>.45&&t<.75?.5*sin(PI*(t-.45)/.3):0
  const span=PI*(1.15+.85*k),R=58-14*k,gy=210,leg=18*(1-k),cx=128+R*rock,cy=gy-leg+R*cos(span/2)
  const a0=-PI/2-span/2+rock,a1=-PI/2+span/2+rock,w=sin(T*t*4)*(1-k),bl=t>.12&&t<.17
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,s,f)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();f();c.fill();c.stroke();c.restore()}
  if(leg>1){c.lineWidth=13;for(const[x,ph]of[[-.55,0],[-.35,PI],[.35,PI],[.55,0]]){
    const lx=cx+R*x,a=.35*sin(T*t*4+ph)*(1-k)
    c.beginPath();c.moveTo(lx,gy-leg-6);c.lineTo(lx-(leg+6)*sin(a),gy-leg-6+(leg+6)*cos(a)-6);c.stroke()}c.lineWidth=6}
  const s=1-k
  if(s>.02){
    shape(cx+R*cos(a0),cy+R*sin(a0),a0-.25,s,()=>{c.moveTo(-2,-9);c.quadraticCurveTo(22,-4,44,2);c.quadraticCurveTo(22,5,-2,9)})
    c.save();c.translate(cx+R*cos(a1)-2,cy+R*sin(a1)-4+1.5*w);c.rotate(a1+.15);c.scale(s,s)
    c.beginPath();c.ellipse(8,0,17,13,0,0,T);c.moveTo(14,-9);c.lineTo(40,2);c.lineTo(14,9);c.fill();c.stroke()
    c.beginPath();c.ellipse(2,-13,5,8,-.5,0,T);c.fill();c.stroke()
    c.fillStyle=c.strokeStyle='#fff'
    if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(12,-4,3,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(12,-3,2.8,0,T),c.fill()
    c.restore();c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  }
  c.beginPath();c.arc(cx,cy,R,a0,a1);c.closePath();c.fill();c.stroke()
  // bands: parallel white stripes kept inside a shrunken copy of the shell, they turn with the ball when it rocks
  c.save();c.beginPath();c.arc(cx,cy,R-9,a0,a1);c.closePath();c.clip()
  c.translate(cx,cy);c.rotate(rock);c.strokeStyle='#fff';c.lineWidth=3.5
  for(let j=-2;j<=2;j++)c.beginPath(),c.moveTo(j*R*.28,-R),c.lineTo(j*R*.28,R),c.stroke()
  c.restore()
}
