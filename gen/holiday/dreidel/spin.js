// a blue dreidel spinning on its point and wobbling round, Hebrew letters sweeping past on its sides
export const frames=36,delay=50,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
// letters nun, gimel, hei, shin as strokes in a 28x40 box, y down
const LT=[
  c=>{c.moveTo(-3,-19);c.lineTo(1,-19);c.quadraticCurveTo(5,-19,5,-13);c.lineTo(5,13);c.quadraticCurveTo(5,18,0,18);c.lineTo(-11,18)},
  c=>{c.moveTo(-7,-19);c.lineTo(1,-19);c.quadraticCurveTo(6,-19,6,-12);c.lineTo(6,18);c.moveTo(6,5);c.lineTo(-9,18)},
  c=>{c.moveTo(-13,-18);c.lineTo(9,-18);c.quadraticCurveTo(13,-18,13,-12);c.lineTo(13,18);c.moveTo(-9,-4);c.lineTo(-9,18)},
  c=>{c.moveTo(-14,-18);c.lineTo(-9,12);c.quadraticCurveTo(-7,18,-1,18);c.lineTo(6,18);c.quadraticCurveTo(13,18,13,9);c.lineTo(13,-18);c.moveTo(-1,-18);c.lineTo(3,10)}
]
export default(c,t)=>{
  const w=33,H=72,P=44,Z=1.24,al=.38,ps=T*2*t,ph=T*t,th=.2,X0=128,Y0=220
  // spin about the axis, tilt toward the precessing direction, then view from slightly above
  const tf=([x,y,z])=>{
    let a=x*C(ps)+z*S(ps),b=-x*S(ps)+z*C(ps);x=a;z=b
    a=x*C(-ph)+z*S(-ph);b=-x*S(-ph)+z*C(-ph);x=a;z=b
    a=x*C(th)+y*S(th);b=-x*S(th)+y*C(th);x=a;y=b
    a=x*C(ph)+z*S(ph);b=-x*S(ph)+z*C(ph);return[a,y,b]
  }
  const tip=tf([0,-P,0]),pr=p=>{const[x,y,z]=tf(p),X=x-tip[0],Y=y-tip[1],Zz=z-tip[2];return[X0+X*Z,Y0-(Y*C(al)-Zz*S(al))*Z,Zz*C(al)+Y*S(al)]}
  const dep=n=>{const[x,y,z]=tf(n),[ox,oy,oz]=tf([0,0,0]);return[(z-oz)*C(al)+(y-oy)*S(al),x-ox,y-oy,z-oz]}
  const sh=(n,b)=>{const[,x,y,z]=dep(n),q=Math.hypot(x,y,z),l=Math.max(0,(-.45*x+.75*y+.5*z)/q),k=.6+.45*l;return`rgb(${b.map(v=>Math.min(255,v*k|0))})`}
  const poly=(pts,col)=>{c.beginPath();pts.forEach(p=>{const[x,y]=pr(p);c.lineTo(x,y)});c.closePath();c.fillStyle=col;c.fill();c.lineWidth=5;c.strokeStyle=K;c.stroke()}
  const B=[74,146,230]
  // ground shadow
  c.beginPath();c.ellipse(X0,Y0+4,48,10,0,0,T);c.fillStyle='#cfdcec';c.fill();c.lineWidth=5;c.strokeStyle=K;c.stroke()
  // pyramid point
  const corner=i=>{const a=i*T/4-T/8;return[C(a)*w*1.414,0,S(a)*w*1.414]}
  for(let i=0;i<4;i++){const a=i*T/4,n=[C(a)*P,-w,S(a)*P];if(dep(n)[0]>0)poly([corner(i),corner(i+1),[0,-P,0]],sh(n,B))}
  // sides with letters
  for(let i=0;i<4;i++){
    const a=i*T/4,n=[C(a),0,S(a)];if(dep(n)[0]<=0)continue
    const p0=corner(i),p1=corner(i+1)
    poly([p0,p1,[p1[0],H,p1[2]],[p0[0],H,p0[2]]],sh(n,B))
    const ctr=[n[0]*w,H/2,n[2]*w],u=[n[2],0,-n[0]],[ox,oy]=pr(ctr),[ux,uy]=pr([ctr[0]+u[0],ctr[1],ctr[2]+u[2]]),[vx,vy]=pr([ctr[0],ctr[1]-1,ctr[2]])
    c.save();c.transform(ux-ox,uy-oy,vx-ox,vy-oy,ox,oy)
    c.beginPath();LT[i](c);c.lineWidth=11;c.strokeStyle=K;c.stroke();c.lineWidth=5.5;c.strokeStyle='#ffd34d';c.stroke()
    c.restore()
  }
  // top face and handle
  poly([0,1,2,3].map(i=>{const p=corner(i);p[1]=H;return p}),sh([0,1,0],B))
  const[sx,sy]=pr([0,H,0]),[tx,ty]=pr([0,H+30,0])
  c.beginPath();c.moveTo(sx,sy);c.lineTo(tx,ty);c.lineWidth=24;c.strokeStyle=K;c.stroke();c.lineWidth=13;c.strokeStyle='#f2b632';c.stroke()
  c.beginPath();c.arc(tx,ty,10,0,T);c.fillStyle='#f2b632';c.fill();c.lineWidth=5;c.strokeStyle=K;c.stroke()
  c.beginPath();c.moveTo(sx-3,sy-6);c.lineTo(tx-3,ty+4);c.lineWidth=3;c.strokeStyle='#ffe08a';c.stroke()
  // spin lines curving around the body
  const[mx,my]=pr([0,H*.45,0])
  c.lineWidth=5;c.strokeStyle=K
  for(const m of[-1,1])for(const[r,a0,a1]of[[84,.12,.62],[96,.3,.6]]){c.beginPath();c.ellipse(mx,my+4,r,r*.26,0,m>0?a0:Math.PI-a1,m>0?a1:Math.PI-a0);c.stroke()}
}
