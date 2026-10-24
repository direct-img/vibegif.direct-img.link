// a paper plane swoops in, flies a loop-the-loop and zooms off the other side, leaving a dashed trail behind it
const{sin,cos,PI,atan2,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=60
const sm=u=>(u=min(1,max(0,u)),u*u*(3-2*u))
const P=s=>{const w=sm((s-.28)/.38);return[-52+360*s-56*sin(T*w),176-56*(1-cos(T*w))-22*sin(PI*min(1,max(0,s)))]}
const Q=[];{let l=0,q=P(-1);for(let s=-1;s<=2.001;s+=.004){const p=P(s);l+=hypot(p[0]-q[0],p[1]-q[1]);Q.push([s,...p,l]);q=p}}
const L=.46
const trail=(c,h)=>{
  const D=[];let cur=null
  for(const[s,x,y,l]of Q){if(s<h-L||s>h-.06){cur=null;continue}if(l%30<17){if(!cur)D.push(cur=[]);cur.push([x,y,s])}else cur=null}
  for(const k of[0,1])for(const d of D){const f=(d[0][2]-h+L)/L;c.lineWidth=k?max(0,9*f-1):4+9*f;c.strokeStyle=k?'#fff':'#111';c.beginPath();for(const[x,y]of d)c.lineTo(x,y);c.stroke()}
}
const plane=(c,h)=>{
  const[x,y]=P(h),[a,b]=P(h-.01),[e,f]=P(h+.01)
  c.save();c.translate(x,y);c.rotate(atan2(f-b,e-a));c.scale(1.4,1.4);c.strokeStyle='#111';c.lineWidth=5
  c.fillStyle='#ddd';c.beginPath();c.moveTo(32,0);c.lineTo(-14,4);c.lineTo(-22,18);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(32,0);c.lineTo(-30,-20);c.lineTo(-14,4);c.closePath();c.fill();c.stroke()
  c.restore()
}
export default(c,t)=>{
  for(const h of[t,t+1])trail(c,h)
  for(const h of[t,t+1])plane(c,h)
}
