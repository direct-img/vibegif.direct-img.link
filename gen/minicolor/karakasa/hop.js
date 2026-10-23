// karakasa umbrella yokai hopping on its one leg: big single eye, long tongue flapping behind the hop
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=75
const B='#ff9f43',L='#ffcfa1',A='#ff85a8',G='#c9a27e',D='#2b2633'
export default(c,t)=>{
  const air=t<.5,u=t/.5,h=air?28*sin(PI*u):0,v=air?cos(PI*u):0,sq=t>.5&&t<.66?sin(PI*(t-.5)/.16):0,bl=t>.8&&t<.86
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  c.translate(128,212-h);c.scale(1+.08*sq,1-.08*sq);c.rotate(.07*sin(T*t))
  fill(G,()=>c.roundRect(-22,-12,44,9,4));for(const x of[-14,8])fill(G,()=>c.rect(x,-4,6,4))
  c.strokeStyle=B;c.lineWidth=9;c.beginPath();c.moveTo(0,-14);c.lineTo(0,-48-(air?6*v:0));c.stroke()
  const hy=-56-(air?6*v:0)
  fill(B,()=>{c.moveTo(0,hy-112);c.quadraticCurveTo(26,hy-72,56,hy-4)
    for(const x of[28,0,-28,-56])c.quadraticCurveTo(x+14,hy+12,x,hy-4)
    c.quadraticCurveTo(-26,hy-72,0,hy-112)})
  c.strokeStyle=L;c.lineWidth=4;for(const x of[-28,28])c.beginPath(),c.moveTo(0,hy-106),c.quadraticCurveTo(x*.45,hy-60,x,hy-4),c.stroke()
  // tongue: hangs out of the mouth and lags behind the hop
  c.strokeStyle=A;c.lineWidth=12;c.beginPath();c.moveTo(0,hy-30);c.bezierCurveTo(4,hy-10,20+10*v,hy+4-10*v,30+8*sin(T*t*2),hy+20-16*v);c.stroke()
  fill(D,()=>c.ellipse(0,hy-30,11,7,0,0,PI))
  if(bl){c.strokeStyle=D;c.lineWidth=4;c.beginPath();c.arc(0,hy-64,13,.15*PI,.85*PI);c.stroke()}
  else{fill('#fff',()=>c.arc(0,hy-62,14,0,T));c.fillStyle=D;c.beginPath();c.arc(3*sin(T*t),hy-60,7,0,T);c.fill()}
}
