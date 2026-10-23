// shrimp curled in a c, flicking its long antennae and snapping its tail fan, little legs pedalling
const{sin,cos,PI,max,atan2}=Math,T=2*PI
export const frames=24,delay=75
const B='#ff7a5c',L='#ffbcad',D='#2b2633'
export default(c,t)=>{
  const fl=max(0,sin(T*t*2))**3,cx=116,cy=130,R=48,n=7,a0=-.45,span=4+.3*fl
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const seg=k=>{const a=a0-span*k/n;return[cx+R*cos(a),cy+R*sin(a),a,26-12*k/n]}
  c.translate(0,4*sin(T*t))
  const[hx,hy]=seg(0),ax=hx+40,ay=hy-12
  c.strokeStyle=B;c.lineWidth=3;c.lineCap='round'
  for(const[ex,ey,qx,qy,p]of[[124,22,214,40,0],[176,16,236,60,1.5]]){const w=sin(T*t*2+p);c.beginPath();c.moveTo(ax-6,ay);c.quadraticCurveTo(qx,qy,ex+10*w,ey+4*w);c.stroke()}
  c.lineWidth=4
  for(let k=1;k<5;k++){const[x,y,a]=seg(k),b=a+PI+.35*sin(T*t*2-k);c.beginPath();c.moveTo(x,y);c.lineTo(x+32*cos(b),y+32*sin(b));c.stroke()}
  const[tx,ty,ta]=seg(n);c.save();c.translate(tx,ty);c.rotate(atan2(-cos(ta),sin(ta))+.5*fl)
  for(const a of[-.65,0,.65])fill(B,()=>c.ellipse(18*cos(a),18*sin(a),17,7,a,0,T))
  c.restore()
  for(let k=n;k>=0;k--){const[x,y,,r]=seg(k);fill(B,()=>c.arc(x,y,r,0,T))}
  c.strokeStyle=L;c.lineWidth=3
  for(let k=1;k<n;k++){const[x,y,a,r]=seg(k);c.beginPath();c.arc(x,y,r-6,a-.7,a+.7);c.stroke()}
  fill(B,()=>{c.moveTo(hx-12,hy-20);c.quadraticCurveTo(hx+30,hy-30,hx+44,hy-10);c.quadraticCurveTo(hx+30,hy+16,hx-6,hy+18)})
  c.strokeStyle=B;c.lineWidth=5;c.beginPath();c.moveTo(ax-8,ay+2);c.lineTo(ax+12,ay-6);c.stroke()
  c.fillStyle=D;c.beginPath();c.arc(hx+24,hy-14,5,0,T);c.fill()
}
