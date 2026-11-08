// white paper plane with a dark outline flying a loop-the-loop around the centre, slowing over the top and swooping through the bottom, banking harder as it speeds up, leaving a blue dashed trail whose dashes shrink away behind it
const{sin,cos,PI}=Math,T=2*PI
export const frames=40,delay=50
const R=60,S=42,ND=24,a=.35,
 V=[[1,0,0],[-.7,0,0],[-.8,.08,-.7],[-.8,.08,.7],[-.62,-.26,0]], // nose, tail, left tip, right tip, keel
 F=[[0,1,2,'#e2e8f0'],[0,4,1,'#c4cfdd'],[0,3,1,'#fff']]
// path position (y up) for loop fraction s, starting at the bottom going right
const pos=s=>[R*sin(T*s),-R*cos(T*s)]
export default(c,t)=>{
 const s=t+a*sin(T*t)/T,sp=1+a*cos(T*t),f=T*s,b=.45+.5*sp // speed eases, bank grows with speed
 c.translate(128,128)
 // trail: dashes anchored along the loop, shorter and thinner the further behind
 c.strokeStyle='#5b8cf0'
 for(let j=0;j<ND;j++){
  const d=((s-j/ND)%1+1)%1,k=1-(d-.08)/.5
  if(d<.08||k<=0)continue
  const m=j/ND,l=(.06+.22*k)/ND,[x0,y0]=pos(m-l),[x1,y1]=pos(m+l)
  c.lineWidth=3+5*k,c.beginPath(),c.moveTo(x0,-y0),c.lineTo(x1,-y1),c.stroke()
 }
 // plane frame: forward along the path, up toward the loop centre, rolled by the bank
 const fw=[cos(f),sin(f),0],up0=[-sin(f),cos(f),0],
  up=[up0[0]*cos(b),up0[1]*cos(b),sin(b)],rt=[-up0[0]*sin(b),-up0[1]*sin(b),cos(b)],
  [px,py]=pos(s),
  P=V.map(([x,y,z])=>[0,1,2].map(i=>[px,py,0][i]+S*((x-.1)*fw[i]+y*up[i]+z*rt[i])))
 c.lineWidth=4.5,c.strokeStyle='#111'
 F.map(q=>[q,(P[q[0]][2]+P[q[1]][2]+P[q[2]][2])/3]).sort((p,q)=>p[1]-q[1]).map(([q])=>{
  c.beginPath(),[0,1,2].map(i=>c.lineTo(P[q[i]][0],-P[q[i]][1])),c.closePath()
  c.fillStyle=q[3],c.fill(),c.stroke()
 })
}
