// heavy bipedal battle mech walking to the right side-on: reverse-jointed hydraulic legs, glowing cyan visor, missile pod and swaying antenna, dust kicks up on each footfall
export const frames=24,delay=65
const{PI,sin,cos,atan2,acos,hypot,min,max}=Math,T=PI*2
const G=226,HX=122,L1=56,L2=60,S=36
// ankle offset from the hip for leg phase p: 60% stance sliding back, 40% swing arcing forward
const step=p=>{
  p=(p%1+1)%1
  if(p<.6)return[S-2*S*p/.6,0,0]
  const s=(p-.6)/.4,e=s*s*(3-2*s)
  return[-S+2*S*e,24*sin(PI*s),sin(PI*s)*.22*(1-s)-.06*sin(PI*s*2)]
}
const ik=(h,a)=>{
  const dx=a[0]-h[0],dy=a[1]-h[1],d=min(hypot(dx,dy),L1+L2-.5),th=atan2(dy,dx)
  const k=acos((L1*L1+d*d-L2*L2)/(2*L1*d))
  return[h[0]+cos(th+k)*L1,h[1]+sin(th+k)*L1]
}
const P=(c,pts,f,lw=4)=>{c.beginPath();pts.forEach(p=>c.lineTo(...p));c.closePath();c.fillStyle=f;c.fill();c.lineWidth=lw;c.stroke()}
const leg=(c,p,by,far)=>{
  const[fx,fl,tilt]=step(p),h=[HX,118+by],a=[HX+fx,G-12-fl],k=ik(h,a)
  const L=far?'#a19d93':'#ece8de',D=far?'#7d7a72':'#c8c3b6',M=far?'#55534e':'#6b6f75'
  // foot plate
  c.save();c.translate(...a);c.rotate(tilt)
  P(c,[[-16,4],[-10,-6],[10,-6],[24,6],[26,12],[-18,12]],D)
  P(c,[[-6,-8],[6,-8],[8,0],[-8,0]],L,3.5)
  c.restore()
  // hydraulic piston from thigh root to mid shin
  const m=[(k[0]+a[0])/2,(k[1]+a[1])/2],r=[h[0]+12,h[1]+4]
  c.lineCap='butt';c.strokeStyle='#111';c.lineWidth=9;c.beginPath();c.moveTo(...r);c.lineTo(...m);c.stroke()
  c.strokeStyle=far?'#8f9399':'#dfe4ea';c.lineWidth=4;c.stroke()
  c.strokeStyle='#111';c.lineWidth=13;c.beginPath();c.moveTo(...r);c.lineTo(r[0]+(m[0]-r[0])*.45,r[1]+(m[1]-r[1])*.45);c.stroke()
  c.strokeStyle=M;c.lineWidth=7;c.stroke();c.lineCap='round';c.strokeStyle='#111'
  // shin then thigh, as tapered plates
  const seg=(u,v,w0,w1,f)=>{
    const an=atan2(v[1]-u[1],v[0]-u[0]),n=[-sin(an),cos(an)]
    P(c,[[u[0]+n[0]*w0,u[1]+n[1]*w0],[v[0]+n[0]*w1,v[1]+n[1]*w1],[v[0]-n[0]*w1,v[1]-n[1]*w1],[u[0]-n[0]*w0,u[1]-n[1]*w0]],f)
  }
  seg(k,a,10,7,L)
  seg(h,k,15,10,D)
  for(const[q,s]of[[a,6.5],[k,9.5],[h,12]]){c.fillStyle=M;c.lineWidth=3.5;c.beginPath();c.arc(...q,s,0,T);c.fill();c.stroke()}
  // dust on footfall
  if(p%1<.22&&!far){
    const s=p%1/.22
    c.lineWidth=2.5
    for(const[d,o]of[[-1,0],[1,4],[-1,10],[1,-6]]){
      const x=a[0]+d*(16+30*s)+o,y=G-4-12*s*(1-s)*2-(o>0?4:0),rr=(7+o/3)*(1-s*.9)
      if(rr>1)c.fillStyle='#d9d2c3',c.beginPath(),c.arc(x,y,rr,0,T),c.fill(),c.stroke()
    }
  }
}
export default(c,t)=>{
  const by=2.5*cos(T*2*t-1.2),sw=sin(T*2*t-2)
  // ground with rubble scrolling past
  c.strokeStyle='#8a8a8a';c.lineWidth=4;c.beginPath();c.moveTo(24,G);c.lineTo(232,G);c.stroke()
  c.fillStyle='#8a8a8a'
  for(let j=-1;j<6;j++){const x=36+j*40-((t*S*2/.6)%40);if(x>26&&x<228)c.fillRect(x,G+6,j%2?6:12,3)}
  c.strokeStyle='#111'
  leg(c,t+.5,by,1)
  c.save();c.translate(0,by);c.translate(HX,118);c.rotate(.025*sw);c.translate(-HX,-118)
  // exhaust puffs from the rear stack
  for(let j=0;j<2;j++){
    const u=(t*2+j/2)%1,x=60-26*u-4*sin(T*u),y=40-30*u,rr=3+7*u
    if(u<.92)c.fillStyle='#cfccc6',c.lineWidth=2.5,c.beginPath(),c.arc(x,y,rr*(u<.85?1:(1-u)/.15+.0),0,T),c.fill(),c.stroke()
  }
  P(c,[[62,46],[70,46],[72,66],[60,66]],'#6b6f75',3.5)
  // antenna
  c.lineWidth=2.5;c.beginPath();c.moveTo(138,62);c.quadraticCurveTo(134-sw*3,40,128-sw*8,20);c.stroke()
  c.fillStyle='#ff4b3a';c.beginPath();c.arc(128-sw*8,20,3.5,0,T);c.fill();c.lineWidth=2;c.stroke()
  // missile pod
  P(c,[[74,40],[116,40],[122,62],[72,62]],'#c8c3b6')
  c.fillStyle='#e8562f';c.lineWidth=3
  for(const y of[46,56])c.beginPath(),c.arc(119+(y-46)*.25,y,4.5,-PI/2,PI/2),c.fill(),c.stroke()
  // hull
  P(c,[[62,66],[150,58],[184,70],[196,92],[184,112],[150,124],[86,124],[62,104]],'#ece8de',5)
  P(c,[[66,98],[184,98],[184,112],[150,124],[86,124],[66,104]],'#c8c3b6',4)
  c.fillStyle='#e8562f';c.lineWidth=3;c.beginPath();c.moveTo(70,68);c.lineTo(92,65);c.lineTo(92,96);c.lineTo(70,96);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#ece8de';c.lineWidth=4;c.lineCap='butt'
  for(let j=0;j<3;j++){c.beginPath();c.moveTo(72+j*8,92);c.lineTo(80+j*8,70);c.stroke()}
  c.strokeStyle='#111';c.lineCap='round'
  // visor
  P(c,[[150,72],[180,76],[188,90],[156,90]],'#123a44',3.5)
  c.fillStyle='#46e6ff';c.beginPath();c.moveTo(158,80);c.lineTo(178,82);c.lineTo(182,87);c.lineTo(160,87);c.closePath();c.fill()
  c.fillStyle='#e8fdff';c.fillRect(164+6*sin(T*t),82,6,3)
  // vents and rivets
  c.lineWidth=2.5;for(let j=0;j<4;j++){c.beginPath();c.moveTo(104+j*9,74);c.lineTo(104+j*9,90);c.stroke()}
  c.fillStyle='#111';for(const x of[100,140,170])c.beginPath(),c.arc(x,111,2.2,0,T),c.fill()
  // chin cannon
  c.save();c.translate(170,114);c.rotate(.05*sw)
  P(c,[[-14,-6],[22,-6],[22,6],[-14,8]],'#6b6f75',3.5)
  P(c,[[22,-3],[44,-3],[44,3],[22,3]],'#9aa1a9',3)
  c.fillStyle='#111';c.fillRect(44,-4,4,8)
  c.restore()
  c.restore()
  leg(c,t,by,0)
}
