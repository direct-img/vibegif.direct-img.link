// round error badge with a big X shaking its head side to side like "nope nope", then pausing
const{sin,PI,abs,min}=Math,T=2*PI
export const frames=20,delay=60
export default(c,t)=>{
  const D=(f,a=12,b=5)=>{for(const[w,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const u=min(1,t/.6),s=sin(T*u*3)*sin(PI*u)**.6
  if(abs(s)>.6){const d=s>0?-1:1;for(const r of[96,114])D(()=>c.arc(128+16*s,128,r,d>0?-.4:PI-.4,d>0?.4:PI+.4),11,4)}
  c.translate(128+16*s,128);c.rotate(.1*s);c.scale(1-.06*abs(s),1)
  c.beginPath();c.arc(0,0,84,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(0,0,70,0,T);c.stroke()
  c.translate(18*s,0);c.scale(1-.2*abs(s),1);c.lineWidth=26
  c.beginPath();c.moveTo(-30,-30);c.lineTo(30,30);c.moveTo(30,-30);c.lineTo(-30,30);c.stroke()
}
