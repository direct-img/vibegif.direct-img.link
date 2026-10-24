// a big scribbly tumbleweed bounces and spins along empty desert ground in the wind, puffing dust on each landing while pebbles and sand dashes scroll past
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=16,delay=75
let sd=53;const rn=()=>(sd=sd*16807%2147483647)/2147483647
const R=60,S=T*R,W=[]
for(let k=0;k<7;k++){
  const rx=R*(.5+rn()*.38),ry=rx*(.4+rn()*.45),a=rn()*T,d=rn()*(R*.96-rx),r0=rn()*T,o=rn()*T,n=.85+rn()*.3,p=[]
  for(let j=0;j<=56;j++){const b=o+j/56*T*n,w=1+.07*sin(3*b+k)+.05*sin(13*b+k*3),x=cos(b)*rx*w,y=sin(b)*ry*w;p.push([cos(a)*d+x*cos(r0)-y*sin(r0),sin(a)*d+x*sin(r0)+y*cos(r0)])}
  W.push(p)
}
for(let k=0;k<2;k++){const p=[],o=rn()*T;for(let j=0;j<=60;j++){const b=o+j/52*T,r=R*(.9+.06*sin(b*5+k*2)+.03*sin(b*11+k));p.push([cos(b)*r,sin(b)*r])}W.push(p)}
const P=(r,b)=>[cos(b)*R*r,sin(b)*R*r]
for(let k=0;k<3;k++){const b=rn()*T,p=[];for(let j=0;j<=20;j++){const v=j/20*2-1;p.push([cos(b)*v*R*.82-sin(b)*R*.2*sin(v*PI*1.5+k),sin(b)*v*R*.82+cos(b)*R*.2*sin(v*PI*1.5+k)])}W.push(p)}
for(let k=0;k<12;k++){const b=k*T/12+rn()*.3,e=(rn()-.5)*.4;W.push([P(.86,b),P(1.13,b+e)],[P(1.01,b+e*.6),P(1.1,b+e*.6+.17)])}
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const scr=(x0,t)=>((x0-S*t)%S+S)%S-48
export default(c,t)=>{
  const q=t*2%1,G=226,e=min(q,1-q),sy=e<.08?.9+.1*e/.08:1,x=124+10*sin(T*t),y=G-R-42*4*q*(1-q)
  c.save();c.translate(226,G)
  for(const[w,s]of[[13,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-8,-16),c.lineTo(-15,-16),c.lineTo(-15,-27),c.moveTo(8,-22),c.lineTo(15,-22),c.lineTo(15,-33),c.stroke()
  c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.roundRect(-7,-38,14,40,7);c.fill();c.stroke()
  c.restore()
  ln(c,11,()=>{c.moveTo(14,G);c.lineTo(242,G)})
  for(const x0 of[30,150,262])ln(c,10,()=>{const u=scr(x0,t);c.moveTo(u,G+14);c.lineTo(u+18,G+14)})
  for(const[x0,r]of[[96,14],[214,10],[318,12]]){const u=scr(x0,t);c.lineWidth=4;c.beginPath();c.ellipse(u,G,r,r*.75,0,PI,0);c.closePath();c.fill();c.stroke()}
  for(let k=0;k<3;k++){const p=(t*3+k/3)%1,yy=y-38+k*30,x1=x-R-14-26*p,L=30*(1-p)+8;if(x1-L>8)ln(c,11,()=>{c.moveTo(x1,yy);c.lineTo(x1-L,yy)})}
  if(q<.45)for(const d of[-1,1])for(const[o,s0]of[[26,11],[46,7]]){const p=q/.45,u=x+d*(o+14*p)-60*p;c.lineWidth=5;c.beginPath();c.arc(u,G-6-12*p,s0*(1-p)+2,0,T);c.fill();c.stroke()}
  c.save();c.translate(x,y+R);c.scale(2-sy,sy);c.translate(0,-R);c.rotate(T*t)
  for(const[w,s]of[[11,'#fff'],[4.5,'#111']]){c.lineWidth=w;c.strokeStyle=s;for(const p of W){c.beginPath();for(const[a,b]of p)c.lineTo(a,b);c.stroke()}}
  c.restore()
}
