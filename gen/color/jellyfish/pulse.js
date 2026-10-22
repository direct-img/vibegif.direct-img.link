// pink jellyfish pulsing its bell, drifting up on each squeeze, tentacles trailing and bubbles rising
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
const PK='#faa2c1',LT='#ffdeeb',DK='#f06595',BU='#d0ebff'
export default(c,t)=>{
  const s=sin(t*T),y=92-10*s,rx=66*(1-.12*s),ry=56*(1+.1*s),bot=y+ry*.55
  c.lineWidth=4;for(const[x0,o]of[[46,0],[210,.5],[196,.2]]){const p=(t+o)%1;c.fillStyle=BU;c.beginPath();c.arc(x0+6*sin(p*T*2),240-p*230,3+5*p,0,T);c.fill();c.stroke()}
  const D=(w,col,f)=>{for(const[l,st]of[[w,'#111'],[w-8,col]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),f(),c.stroke()}
  for(const k of[-1.5,-.5,.5,1.5])D(11,PK,()=>{for(let v=0;v<=1;v+=.05)c.lineTo(128+k*rx*.42+9*v*sin(v*7-t*T+k),bot+v*112)})
  for(const k of[-1,0,1])D(24,LT,()=>{for(let v=0;v<=1;v+=.05)c.lineTo(128+k*20+12*v*sin(v*6-t*T+k*2),bot-4+v*80)})
  c.lineWidth=7;c.strokeStyle='#111';c.fillStyle=PK
  c.beginPath();c.ellipse(128,bot,rx,ry*1.4,0,PI,T)
  const n=6;for(let k=0;k<n;k++){const x=128+rx-(k+.5)*2*rx/n;c.arc(x,bot,rx/n,0,PI)}
  c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.ellipse(128,bot,rx*.78,ry*1.1,0,PI*1.18,PI*1.4);c.stroke()
  c.fillStyle=LT;for(const[dx,dy,r]of[[30,-60,6],[44,-38,4],[-6,-74,5]])c.beginPath(),c.arc(128+dx*rx/66,bot+dy*ry/56,r,0,T),c.fill()
  c.strokeStyle='#111';c.lineWidth=5
  for(const d of[-1,1])c.beginPath(),c.arc(128+d*20,bot-22,6,PI*1.15,PI*1.85),c.stroke()
  c.beginPath();c.arc(128,bot-14,6,.15*PI,.85*PI);c.stroke()
  c.fillStyle=DK;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*36,bot-14,8,5,0,0,T),c.fill()
}
