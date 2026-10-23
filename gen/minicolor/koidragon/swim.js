// koi-dragon swimming in place, seen from above: its body waves in an S, whiskers and fins trail, little horns on its head
const{sin,cos,PI,hypot,atan2}=Math,T=2*PI
export const frames=24,delay=80
const B='#ff7a5c',L='#ffbcad',A='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const N=40,P=[],Nr=[],hw=s=>s<.16?30*Math.sqrt(1-((.16-s)/.16)**2):30*(1-.84*((s-.16)/.84)**1.15)
  for(let j=0;j<=N;j++){const s=j/N;P.push([214-150*s,128+(3+24*s**1.4)*sin(T*t-3.4*s)])}
  for(let j=0;j<=N;j++){const a=P[Math.max(0,j-1)],b=P[Math.min(N,j+1)],dx=b[0]-a[0],dy=b[1]-a[1],l=hypot(dx,dy);Nr.push([-dy/l,dx/l])}
  const at=(s,o=0)=>{const j=Math.round(s*N);return[P[j][0]+Nr[j][0]*o,P[j][1]+Nr[j][1]*o]}
  const ang=s=>{const j=Math.round(s*N);return atan2(Nr[j][0],-Nr[j][1])}
  // tail fan at the end, trailing the body's last bend
  const[ex,ey]=P[N],ta=ang(1)
  c.save();c.translate(ex,ey);c.rotate(ta)
  fill(L,()=>{c.moveTo(0,0);c.quadraticCurveTo(-14,-30,-36,-30+6*sin(T*t-4));c.quadraticCurveTo(-26,-6,-30,0);c.quadraticCurveTo(-26,6,-36,30+6*sin(T*t-4));c.quadraticCurveTo(-14,30,0,0)})
  c.restore()
  for(const d of[-1,1]){const[x,y]=at(.3,d*hw(.3)*.8);c.save();c.translate(x,y);c.rotate(ang(.3)+PI+d*(.7+.3*sin(T*t*2+d)))
    fill(L,()=>c.ellipse(14,0,18,8,0,0,T));c.restore()}
  // dragon whiskers: flow from the snout out and back along the body, rippling
  const[hx,hy]=P[0],fx=P[0][0]-P[4][0],fy=P[0][1]-P[4][1],fl=hypot(fx,fy),ux=fx/fl,uy=fy/fl
  c.strokeStyle=A;c.lineCap='round';c.lineWidth=4
  for(const d of[-1,1]){c.beginPath();for(let k=0;k<=16;k++){const q=k/16,al=2-80*q,la=d*(13+30*q**.6+8*q*sin(T*t*2-q*5+d))
    c.lineTo(hx+ux*al-uy*la,hy+uy*al+ux*la)}c.stroke()}
  fill(B,()=>{for(let j=0;j<=N;j++){const[x,y]=at(j/N,hw(j/N));c.lineTo(x,y)}for(let j=N;j>=0;j--){const[x,y]=at(j/N,-hw(j/N));c.lineTo(x,y)}c.closePath()})
  for(const[s,rx,ry]of[[.46,17,11],[.68,10,7]]){const[x,y]=at(s);c.save();c.translate(x,y);c.rotate(ang(s));fill(L,()=>c.ellipse(0,0,rx,ry,0,0,T));c.restore()}
  c.strokeStyle=A;c.lineWidth=7
  for(const d of[-1,1]){const[x,y]=at(.13,d*12),[x2,y2]=at(.25,d*38);c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.stroke()}
  c.fillStyle=D;for(const d of[-1,1]){const[x,y]=at(.06,d*hw(.06)*.72);c.beginPath();c.arc(x,y,4.5,0,T);c.fill()}
}
