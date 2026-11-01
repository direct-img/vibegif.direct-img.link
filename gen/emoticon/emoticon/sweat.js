// emoticon sweating nervously, a big sweat drop beads up and slides down while it chuckles with an uneasy smile
export const frames=44,delay=55
const P=Math.PI,{sin,cos,max,min,abs}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
const win=(t,a,b,c,d)=>ez((t-a)/(b-a))*(1-ez((t-c)/(d-c)))
// sweat drop, round end at x,y, tip pointing along angle a
const drop=(c,x,y,r,a=0)=>{
  if(r<.5)return
  c.save();c.translate(x,y);c.rotate(a)
  c.beginPath();c.moveTo(0,-2.4*r);c.quadraticCurveTo(r*1.1,-r*.6,r,0);c.arc(0,0,r,0,P);c.quadraticCurveTo(-r*1.1,-r*.6,0,-2.4*r)
  c.fillStyle='#fff';c.fill();c.lineWidth=5;c.strokeStyle=K;c.stroke()
  c.beginPath();c.arc(0,0,r*.55,-.1*P,.42*P);c.lineWidth=r*.22;c.strokeStyle=G;c.stroke()
  c.restore()
}
export default(c,t)=>{
  // three nervous "heh"s, eyes sliding away while they last
  const hh=t>.1&&t<.52?abs(sin((t-.1)/.42*3*P)):0,lk=-9*win(t,.08,.16,.56,.66)
  c.translate(128,130-5*hh)
  c.beginPath();c.ellipse(0,0,96+2*hh,96-3*hh,0,0,2*P)
  c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  // worried brows
  c.lineWidth=8;c.strokeStyle=K
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*62,-44);c.quadraticCurveTo(s*42,-52-2*hh,s*20,-58-3*hh);c.stroke()}
  // round eyes
  for(const s of[-1,1]){
    c.beginPath();c.ellipse(s*36+lk,-16,11.5,15,0,0,2*P);c.fillStyle=K;c.fill()
    c.beginPath();c.arc(s*36+lk-3,-21,3.5,0,2*P);c.fillStyle='#fff';c.fill()
  }
  // uneasy smile: a crooked, wavering grin that opens into a sheepish "heh" on each chuckle
  const o=hh**.7,L=[],wv=u=>2*sin(u*P*2.5+t*2*P*4)*(1-u*u)*(1-o)
  for(let k=0;k<=24;k++)L.push(k/12-1)
  c.beginPath();L.forEach((u,k)=>c.lineTo(u*40,40-4*u+16*(1-u*u)*(1-o)+wv(u)))
  if(o>.05){[...L].reverse().forEach(u=>c.lineTo(u*40,40-4*u+(16+8*o)*(1-u*u)));c.closePath();c.fillStyle=K;c.fill()}
  c.lineWidth=8;c.stroke()
  // the sweat drop: beads on the temple rim, swells, slides down the side of the head and drips off
  const g=ez(t/.3),sl=.4*ez((t-.4)/.12)+.6*ez((t-.6)/.18),f=cl((t-.8)/.16)
  const a=-.95+1.4*sl,R=90
  if(t<.8)drop(c,cos(a)*R,sin(a)*R,15*g+2*sl,.5*sl-.1)
  else if(f<1)drop(c,cos(a)*R+6*f,sin(a)*R+46*f*f,17*(1-f)**.6,.4-.4*f)
}
