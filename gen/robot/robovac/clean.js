// round white robot vacuum cleaner gliding diagonally across the floor, side brushes spinning and lidar turning, sweeping up a trail of crumbs and leaving sparkles behind
export const frames=24,delay=60
const P=Math.PI,R=76,K=.5,cx=140,cy=132,H=Math.PI-.6,fx=Math.cos(H),fz=Math.sin(H),nx=-fz,nz=fx
let s=7;const rnd=()=>(s=s*16807%2147483647)/2147483647
const crumbs=[...Array(14)].map((_,k)=>({p:k/14+rnd()*.03,w:(rnd()*2-1)*R*.85,r:4.5+rnd()*3.5,a:rnd()*P,c:['#e3a65c','#b87436','#f4d08f','#c9ced6'][k%4],n:5+(rnd()*3|0)}))
const stars=[...Array(5)].map((_,k)=>({p:k/5,w:(k/4*2-1)*R*.75+rnd()*8,r:5+rnd()*3}))
const S=(x,z,y=0)=>[cx+x,cy+z*K-y]
export default(c,t)=>{
  const bob=Math.sin(t*P*8)*.6
  // sparkles left on the clean floor behind
  for(const q of stars){
    const f=(q.p+t)%1,d=R+4+f*44,[x,y]=S(-fx*d+nx*q.w,-fz*d+nz*q.w),z=Math.sin(P*f)*q.r+1
    c.save();c.translate(x,y);c.rotate(f*1.2);c.beginPath()
    for(let k=0;k<8;k++){const r=k%2?z*.38:z*1.5,a=k*P/4;c.lineTo(Math.cos(a)*r,Math.sin(a)*r)}
    c.closePath();c.fillStyle='#d4f6ff';c.lineWidth=2;c.stroke();c.fill();c.restore()
  }
  // crumbs approach the front, get swept toward the middle and vanish under it
  for(const q of crumbs){
    const d=100*(1-(q.p+t)%1)-8
    if(d<0)continue
    const w=q.w*Math.min(1,d/30),e=Math.sqrt(R*R-w*w),[x,y]=S(fx*(e+d)+nx*w,fz*(e+d)+nz*w)
    c.save();c.translate(x,y);c.rotate(q.a+d*.05);c.beginPath()
    for(let k=0;k<q.n;k++){const a=k/q.n*2*P,r=q.r*(.7+.3*Math.sin(k*2.3+q.a));c.lineTo(Math.cos(a)*r,Math.sin(a)*r*.8)}
    c.closePath();c.fillStyle=q.c;c.lineWidth=2;c.fill();c.stroke();c.restore()
  }
  const brush=(a,sp)=>{
    const[hx,hy]=S(Math.cos(a)*R*.97,Math.sin(a)*R*.97,3)
    for(const w of[4.5,2.2])for(let k=0;k<3;k++)for(const f of[-.13,0,.13]){
      const b=sp+k*2*P/3+f,L=50-Math.abs(f)*34
      c.beginPath();c.moveTo(hx,hy);c.lineTo(hx+Math.cos(b)*L,hy+Math.sin(b)*L*K)
      c.lineWidth=w;c.strokeStyle=w>3?'#111':'#a9b4c2';c.stroke()
    }
    c.strokeStyle='#111'
  }
  const sp=t*P*16
  brush(H+.62,-sp);brush(H-.62,sp)
  // body
  const y0=5+bob,y1=32+bob
  c.beginPath();c.ellipse(cx,cy-y0,R,R*K,0,0,P);c.ellipse(cx,cy-y1,R,R*K,0,P,0,true);c.closePath()
  const g=c.createLinearGradient(cx-R,0,cx+R,0)
  g.addColorStop(0,'#c3cad3');g.addColorStop(.35,'#eef1f5');g.addColorStop(1,'#9aa3ae')
  c.fillStyle=g;c.fill()
  const a0=Math.max(.15,H-.55),a1=Math.min(P-.02,H+.55)
  c.beginPath();c.ellipse(cx,cy-y0-7,R,R*K,0,a0,a1);c.ellipse(cx,cy-y0-18,R,R*K,0,a1,a0,true);c.closePath()
  c.fillStyle='#232a33';c.fill()
  const[lx0,ly0]=S(Math.cos(H-.3)*R,Math.sin(H-.3)*R,y0+12.5)
  c.beginPath();c.ellipse(lx0,ly0,5,2.2,-.3,0,2*P);c.fillStyle='#ff4d4d';c.fill()
  c.beginPath();c.ellipse(cx,cy-y0,R,R*K,0,0,P);c.ellipse(cx,cy-y1,R,R*K,0,P,0,true);c.closePath()
  c.lineWidth=5;c.stroke()
  // top
  c.beginPath();c.ellipse(cx,cy-y1,R,R*K,0,0,2*P);c.fillStyle='#f6f8fa';c.fill();c.stroke()
  c.beginPath();c.ellipse(cx,cy-y1,R*.84,R*K*.84,0,0,2*P);c.lineWidth=2;c.strokeStyle='#b8c0ca';c.stroke();c.strokeStyle='#111'
  const[gx,gy]=S(-fx*6,-fz*6,y1)
  c.beginPath();c.ellipse(gx,gy,R*.56,R*K*.56,0,0,2*P);c.fillStyle='#2b3440';c.fill();c.lineWidth=3;c.stroke()
  c.beginPath();c.ellipse(gx,gy,R*.46,R*K*.4,0,P*1.1,P*1.55);c.lineWidth=3;c.strokeStyle='#6f7f93';c.stroke();c.strokeStyle='#111'
  // power button with pulsing ring
  const[bx,by]=S(fx*R*.7,fz*R*.7,y1),gl=.5+.5*Math.cos(t*2*P)
  c.beginPath();c.ellipse(bx,by,10,4.6,0,0,2*P);c.fillStyle=`rgb(${60+gl*60|0},${190+gl*50|0},255)`;c.fill();c.lineWidth=2;c.stroke()
  c.beginPath();c.ellipse(bx,by,3.8,1.7,0,0,2*P);c.fillStyle='#fff';c.fill()
  // lidar turret
  const[lx,ly]=S(-fx*R*.3,-fz*R*.3,y1+1),lr=19,lh=12
  c.beginPath();c.ellipse(lx,ly,lr,lr*K,0,0,P);c.ellipse(lx,ly-lh,lr,lr*K,0,P,0,true);c.closePath()
  c.fillStyle='#dfe4ea';c.fill();c.lineWidth=3;c.stroke()
  const la=t*2*P*2
  if(Math.sin(la)>0){const sx=lx+Math.cos(la)*lr*.8,sy=ly-lh*.5+Math.sin(la)*lr*K
    c.beginPath();c.rect(sx-3,sy-lh*.25,6,lh*.5);c.fillStyle='#ff5a3c';c.fill();c.lineWidth=1.5;c.stroke()}
  c.beginPath();c.ellipse(lx,ly-lh,lr,lr*K,0,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=3;c.stroke()
  c.beginPath();c.ellipse(lx,ly-lh,lr*.45,lr*K*.45,0,0,2*P);c.fillStyle='#c7ced6';c.fill();c.lineWidth=1.5;c.stroke()
}
