// emoticon crying, a single tear wells up and rolls down the cheek while the lower lip wobbles
export const frames=40,delay=55
const P=Math.PI,{sin,max,min}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
const bump=(t,a,w)=>max(0,1-Math.abs(t-a)/w)**2
// teardrop pointing up, round end at x,y
const drop=(c,x,y,r,k=1)=>{
  c.beginPath();c.moveTo(x,y-2.3*r*k)
  c.quadraticCurveTo(x+r*1.05,y-r*.7,x+r,y);c.arc(x,y,r,0,P)
  c.quadraticCurveTo(x-r*1.05,y-r*.7,x,y-2.3*r*k)
  c.fillStyle=G;c.fill();c.lineWidth=4.5;c.strokeStyle=K;c.stroke()
  c.beginPath();c.arc(x-r*.35,y-r*.2,r*.28,0,2*P);c.fillStyle='#fff';c.fill()
}
// tear path down the right cheek, p 0..1
const path=p=>[38+16*p**1.4,14+64*p]
export default(c,t)=>{
  const sn=bump(t,.79,.07)+.6*bump(t,.31,.06)
  c.translate(128,128-5*sn)
  c.beginPath();c.ellipse(0,0,96-2*sn,96+3*sn,0,0,2*P)
  c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  c.fillStyle=K;c.strokeStyle=K
  // sad brows, inner ends raised
  c.lineWidth=9
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(s*64,-40+2*sn);c.quadraticCurveTo(s*46,-50-3*sn,s*18,-62-6*sn);c.stroke()
  }
  // glossy eyes brimming with water, blink at .3 squeezes the tear out
  const b=1-.9*bump(t,.29,.045)
  for(const s of[-1,1]){
    if(b>.5){c.beginPath();c.arc(s*36,-8,19,.12*P,.88*P);c.lineWidth=5;c.strokeStyle=G;c.stroke()}
    c.beginPath()
    if(b<.5){c.moveTo(s*36-16,-13);c.quadraticCurveTo(s*36,-3,s*36+16,-13);c.lineWidth=8;c.strokeStyle=K;c.stroke();continue}
    c.ellipse(s*36,-12,15,20*b,0,0,2*P);c.fillStyle=K;c.fill()
    c.beginPath();c.ellipse(s*36-5,-12-7*b,6,6*b,0,0,2*P);c.ellipse(s*36+5,-12+9*b,3,3*b,0,0,2*P);c.fillStyle='#fff';c.fill()
  }
  // tear: wells (0-.3), rolls (.3-.72), hangs (.72-.8), falls (.8-.94); trail dries from the top
  const w=ez((t-.03)/.27),r=ez((t-.3)/.42)**1.5,f=cl((t-.8)/.14)
  const p0=ez((t-.78)/.2)
  if(t>.3&&p0<r){
    c.beginPath();for(let k=0;k<=12;k++){const[x,y]=path(p0+(r-p0)*k/12);k?c.lineTo(x,y):c.moveTo(x,y)}
    c.lineWidth=8*(1-p0*.5);c.strokeStyle=G;c.stroke()
  }
  if(t<.8){
    const[x,y]=path(r),hang=ez((t-.7)/.1)
    drop(c,x,y+4*w+2*hang,10.5*w+1.5*hang,1+.25*hang+.2*(r>0&&r<1))
  }else if(f<1){
    const[x,y]=path(1);drop(c,x+3*f,y+6+40*f*f,12*(1-f)**.7,1.4-f*.3)
  }
  // wobbly lower lip: a frown with a quivering standing wave
  const q=sin(2*P*t*8)*(3.6+2.5*sn)
  c.beginPath()
  for(let k=0;k<=24;k++){
    const u=k/12-1,x=u*34,y=64-18*(1-u*u)+q*sin(P*u*2)*(1-u*u)
    k?c.lineTo(x,y):c.moveTo(x,y)
  }
  c.lineWidth=8;c.strokeStyle=K;c.stroke()
}
