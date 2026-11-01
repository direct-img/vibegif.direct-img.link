// emoticon mind blown, a crack zips across the forehead, the lid of the head flips off in a big puff cloud, then the puff sucks back in and the lid lands
export const frames=30,delay=92
// keys: t, swell, crack, lid flight, body drop, cloud, blank eyes
const k=[
[0,  0,  0, 0,  0,  0,  0],
[.08,0,  0, 0,  0,  0,  0],
[.28,1,  1, 0,  0,  0,  0],
[.34,0,  1, 1,  1.2,1.12,1],
[.4, 0,  1, 1,  1,  1,  1],
[.6, 0,  1, 1,  1,  .95,1],
[.73,0,  1, .08,.3, 0,  1],
[.77,-.5,1, 0,  0,  0,  1],
[.83,.1, .6,0,  0,  0,  .5],
[.92,0,  0, 0,  0,  0,  0],
[1,  0,  0, 0,  0,  0,  0]]
const P=Math.PI,B='#111',G='#9a9a9a',S=Math.sin,C=Math.cos,cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x)),
K=t=>{let i=0;while(k[i+1][0]<=t)i++;const a=k[i],b=k[i+1],s=ez((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,j)=>v+(b[j+1]-v)*s)}
const CY=-52,CX=Math.sqrt(96*96-CY*CY),A=Math.atan2(CY,CX),
// zigzag crack from left to right, drawn up to p of the way
zz=(c,p=1)=>{for(let n=0;n<=12*p;n++)c.lineTo(-CX+n*CX/6,CY+(n%2?7:-3))},
// cloud blobs: outline every circle, then fill them all so only the silhouette keeps its ink
puff=(c,bs,w=7)=>{c.strokeStyle=B;c.lineWidth=w;for(const[x,y,r]of bs){c.beginPath();c.arc(x,y,r,0,2*P);c.stroke()}
  c.fillStyle='#fff';for(const[x,y,r]of bs){c.beginPath();c.arc(x,y,r,0,2*P);c.fill()}}
export default(c,t,i)=>{
  const[sw,cr,fl,drop,cd,bl]=K(t),a=2*P*t,tr=t>.1&&t<.29?(i%2?1:-1)*ez((t-.1)/.18)*2.4:0,
  sc=1+.05*sw,hx=128+tr,hy=128+32*drop,qy=1-.15*drop,open=cd>.02||fl>.01
  // body (the whole head until it pops)
  c.save();c.translate(hx,hy);c.scale(sc-.04*Math.min(0,sw)+.05*drop,(sc+.06*Math.min(0,sw))*qy)
  c.beginPath()
  if(open){c.moveTo(-CX,CY);zz(c);c.arc(0,0,96,A,P-A)}else c.arc(0,0,96,0,2*P)
  c.closePath();c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  if(!open&&cr>0){c.beginPath();c.moveTo(-CX,CY);zz(c,cr);c.lineWidth=5;c.stroke()}
  // face: a widening stare, then blank rings once the mind has left
  for(const s of[-1,1]){
    const x=s*34,y=2,r=1+.12*cl(sw)
    c.beginPath();c.ellipse(x,y,15*r,19*r,0,0,2*P);c.fillStyle=bl>.5?'#fff':B;c.fill()
    if(bl>.5){c.lineWidth=6;c.stroke()}
    c.lineWidth=6;c.beginPath();c.moveTo(x-12,y-28-5*bl);c.quadraticCurveTo(x,y-35-8*bl,x+12,y-28-5*bl);c.stroke()
  }
  const mo=.25+.75*Math.max(bl,cl(sw))
  c.beginPath();c.ellipse(0,56,8+9*mo,5+15*mo,0,0,2*P);c.fillStyle=B;c.fill()
  c.restore()
  // the puff: a stem of smoke out of the head into a billowing cloud, stray puffs flying off
  if(cd>.02){
    const oy=hy+CY*qy,cy=oy+(58-oy)*Math.min(cd,1),w=n=>1+.07*S(a*3+n*1.7)
    for(let n=0;n<4;n++){
      const s=n%2?1:-1,p=cl((t-.33)/.3+n*.1),r=13*(1-p)
      if(r>1)puff(c,[[128+s*(56+56*p)*(n<2?1:.8),cy-(n<2?-10:18)-26*p,r]],5)
    }
    puff(c,[
      ...[[-64,6,24],[-35,-6,28],[0,-10,29],[35,-6,28],[64,6,24],[-32,16,24],[3,17,25],[36,15,22]].map(([x,y,r],n)=>[128+x*cd,cy+y*cd,r*cd*w(n)]),
      ...[.45,.75,1].map((f,n)=>[128+(n%2?-5:4),cy+18+(oy-cy-18)*f,(14+2*n)*Math.min(cd,1)*w(n+8)])])
    c.strokeStyle=G;c.lineWidth=4
    for(const[x,y,r]of[[-32,16,24],[3,17,25],[36,15,22]]){c.beginPath();c.arc(128+x*cd,cy+y*cd,r*cd*.62,P*.15,P*.75);c.stroke()}
  }
  // the lid: flips off into the corner, tumbles there, then sails back and lands
  if(open){
    const e=ez(fl),x=hx+(206-hx)*e,y=hy+CY*qy-12+(46-(hy+CY*qy-12))*e,s=sc*(1-.55*Math.sqrt(e))
    c.save();c.translate(x,y);c.rotate(2.6*e+.18*S(a*3)*e);c.scale(s,s);c.translate(0,12-CY)
    c.beginPath();c.moveTo(-CX,CY);zz(c);c.arc(0,0,96,A,P-A,true);c.closePath()
    c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
    c.restore()
  }
}
