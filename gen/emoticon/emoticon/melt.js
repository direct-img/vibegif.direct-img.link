// emoticon melting, the head sags and drips down into a puddle on the floor, blinks, then springs back into shape
export const frames=36,delay=75
const P=Math.PI,{sin,cos,max,min,abs,exp,sqrt}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
const F=96
// drips hanging off the lower rim: [position across, length, width]
const DR=[[-.72,.75,12],[-.3,1,14],[.22,.55,11],[.64,.9,13]]
export default(c,t)=>{
  // melt down (.06-.6), lie there (.6-.8), spring back up with a wobble (.8-1)
  const sp=cl((t-.8)/.2),m=t<.8?ez((t-.06)/.54)**1.1:(1-ez(sp/.4))-.12*sin(P*cl((sp-.25)/.75)*2)*(1-sp)
  const mm=max(0,m),bl=max(0,1-abs(t-.7)/.035)
  c.translate(128,124)
  const rx=96+16*mm,ry=96-58*m,cy=F-ry-2-10*mm,pq=cl((mm-.18)/.45),pw=min(112,40+80*pq),ph=6+12*pq
  // puddle spreading on the floor
  if(pq>0){
    c.beginPath()
    for(let k=0;k<=48;k++){const a=k/48*2*P,w=1+.035*sin(a*6)*pq;c.lineTo(cos(a)*pw*w,F+4-ph*.4+sin(a)*ph*w)}
    c.closePath();c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  }
  // the sagging head, its lower rim running into drips
  const dl=mm*min(1,(F+4-cy)/ry)
  c.beginPath();c.ellipse(0,cy,rx,ry,0,P,2*P)
  for(let k=0;k<=80;k++){
    const u=1-k/40,x=u*rx
    let y=cy+ry*sqrt(max(0,1-u*u))
    for(const[p,l,w]of DR)y+=l*30*dl*exp(-(((u-p)*rx/w)**4))
    c.lineTo(x,y)
  }
  c.closePath();c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  // face rides down with it, eyes drooping
  const fs=sqrt(ry/96),fw=rx/96,fy=cy-ry*.1
  c.fillStyle=K
  for(const s of[-1,1]){
    c.save();c.translate(s*36*fw,fy-12*fs);c.rotate(s*.3*mm);c.scale(1+.15*mm,fs*(1-.9*bl))
    c.beginPath();c.moveTo(-15,0);c.lineTo(15,0);c.ellipse(0,0,15,15,0,0,P);c.closePath();c.fill()
    c.restore()
    c.beginPath();c.moveTo(s*60*fw,fy-38*fs+8*mm);c.lineTo(s*18*fw,fy-44*fs);c.lineWidth=8;c.strokeStyle=K;c.stroke()
  }
  // a limp, wobbling mouth
  c.beginPath()
  for(let k=0;k<=16;k++){const u=k/8-1;c.lineTo(u*26*fw,fy+36*fs+3*sin(u*P*2+t*2*P*3)*(.4+mm))}
  c.lineWidth=8;c.stroke()
  // heat shimmer rising above
  c.lineWidth=5;c.strokeStyle=G
  for(let k=0;k<3;k++){
    const x=(k-1)*70,ph2=(t*2+k/3)%1,y0=cy-ry*sqrt(1-(x/rx)**2)-10-ph2*20,a=sin(P*ph2)*cl((y0-18+116)/12)
    if(a<.15)continue
    c.beginPath();for(let j=0;j<=6;j++)c.lineTo(x+4*sin(j*.9+t*2*P*2)*a,y0-j*3);c.stroke()
  }
}
