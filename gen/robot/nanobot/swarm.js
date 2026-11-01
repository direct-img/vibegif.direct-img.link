// swarm of tiny hexagonal nanobots streaming in a figure-eight like a flock, then snapping edge to edge from the center out into a tilting honeycomb panel with glowing cyan seams, a ripple wave rolling across it, before it shatters back into the flock
export const frames=36,delay=78
let s=5
const R=()=>(s=s*16807%2147483647)/2147483647,P=Math.PI,TAU=2*P,D=14,Q=Math.sqrt(3)
const B=[]
for(let q=-5;q<6;q++)for(let r=-5;r<6;r++){
  const g=Math.max(Math.abs(q),Math.abs(r),Math.abs(q+r));if(g>5)continue
  B.push({x:D*(q+r/2),y:D*r*Q/2,g,u:R()*.3,o:[R()-.5,R()-.5,R()-.5].map(v=>v*46),f:R()*TAU,sp:R()<.5?-2:2,d:g*.024+R()*.02})
}
const back=x=>1+2.7*(x-1)**3+1.7*(x-1)**2,cl=x=>x<0?0:x>1?1:x
const rot=([x,y,z],a,b)=>([x,z]=[x*Math.cos(a)-z*Math.sin(a),x*Math.sin(a)+z*Math.cos(a)],[y,z]=[y*Math.cos(b)-z*Math.sin(b),y*Math.sin(b)+z*Math.cos(b)],[x,y,z])
export default(c,t)=>{
  const sn=Math.sin,cs=Math.cos,ry=.85*sn(TAU*(t-.56)),rx=-.4,U1=rot([1,0,0],ry,rx),V1=rot([0,1,0],ry,rx)
  const N1=[U1[1]*V1[2]-U1[2]*V1[1],U1[2]*V1[0]-U1[0]*V1[2],U1[0]*V1[1]-U1[1]*V1[0]],front=N1[2]>0
  const V=B.map(b=>{
    const a=TAU*(b.u+t),br=1+.25*sn(TAU*2*t+b.f)
    const w=[92*sn(a)+b.o[0]*br,46*sn(2*a)+b.o[1]*br,50*cs(a)+b.o[2]*br]
    const up=cl((t-.12-b.d)/.16),dn=cl((t-.72-(.14-b.d))/.16),e=up<1?back(up)*(up>0):1-dn*dn*(3-2*dn)
    // ripple across the panel
    const wf=(t-.42)/.24*8-1.5,rp=t>.4&&t<.7?Math.exp(-(((b.g-wf)/.9)**2)):0
    const L=rot([b.x,b.y,0],ry,rx).map((v,m)=>v-N1[m]*rp*12)
    const p=w.map((v,m)=>v+(L[m]-v)*e)
    // hex basis: spinning screen-facing in the flock, panel plane when locked
    const sa=b.f+TAU*t*b.sp,su=[cs(sa),sn(sa),0],sv=[-sn(sa),cs(sa),0],k=Math.min(e,1)
    const u=su.map((v,m)=>v+(U1[m]-v)*k),v=sv.map((x,m)=>x+(V1[m]-x)*k),r=5.3+(D/Q-.9-5.3)*k
    return{p,u,v,r,e,rp,lock:up>=1&&dn<=0,flash:up>=1&&t-.12-b.d<.2}
  })
  const pr=([x,y,z])=>{const k=320/(320+z);return[128+x*k,128+y*k]}
  const hex=(o,s)=>{c.beginPath();for(let m=0;m<6;m++){const q=m*P/3+P/6,a=cs(q)*o.r*s,b=sn(q)*o.r*s;c.lineTo(...pr(o.p.map((p,j)=>p+o.u[j]*a+o.v[j]*b)))}c.closePath()}
  for(const o of V.sort((a,b)=>b.p[2]-a.p[2])){
    const face=o.e<.5||front
    if(o.lock){hex(o,1.32);c.fillStyle=o.rp>.4?'#c8fbff':'#1fb8d8';c.fill()}
    hex(o,1);c.fillStyle=o.rp>.5?'#ffffff':face?(o.p[2]>30&&!o.lock?'#9aa7b6':'#dbe3eb'):'#6b7787';c.fill()
    c.strokeStyle='#111';c.lineWidth=1.6;c.stroke()
    if(face){hex(o,.42);c.fillStyle=o.rp>.5||o.flash?'#ffe14d':o.p[2]>30&&!o.lock?'#1b8aa3':'#22dcff';c.fill()}
  }
}
