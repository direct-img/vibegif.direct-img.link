// 4x4 grid of chunky slate dots, a rainbow snake of five bigger beads with little eyes slithers through every cell along a winding loop, the body bunching and stretching as it goes
const{sin,cos,PI,atan2,floor}=Math,T=2*PI
export const frames=64,delay=40
// winding loop through all 16 cells
const R=[[0,0],[1,0],[2,0],[3,0],[3,1],[2,1],[1,1],[1,2],[2,2],[3,2],[3,3],[2,3],[1,3],[0,3],[0,2],[0,1]],
 N=16,g=52,X=k=>128+(k-1.5)*g,
 C=['#ff4d6d','#ff8a3d','#ffc83a','#36d399','#4aa8ff'],
 cell=n=>(n=R[((n%N)+N)%N],[X(n[0]),X(n[1])]),
 at=p=>{const n=floor(p),f=p-n,[a,b]=cell(n),[e,d]=cell(n+1);return[a+(e-a)*f,b+(d-b)*f]},
 // pulsing pace: slows near each cell, never quite stops
 E=x=>{const n=floor(x),u=x-n;return n+u-sin(T*u)/T*.85}
export default(c,t)=>{
 c.fillStyle='#8e98ac'
 for(const[a,b]of R)c.beginPath(),c.arc(X(a),X(b),16,0,T),c.fill()
 const q=t*N,P=[0,1,2,3,4].map(k=>E(q-k*.16)-k*.92)
 // body: thick strokes along the path between neighbouring beads
 c.lineWidth=26
 for(let k=3;k>=0;k--){
  const a=P[k+1],b=P[k]
  c.strokeStyle=C[k+1],c.beginPath(),c.moveTo(...at(a))
  for(let n=floor(a)+1;n<b;n++)c.lineTo(...cell(n))
  c.lineTo(...at(b)),c.stroke()
 }
 for(let k=4;k>=0;k--){
  const[x,y]=at(P[k]),r=k?22-k:25
  c.fillStyle=C[k],c.beginPath(),c.arc(x,y,r,0,T),c.fill()
 }
 // eyes look along the direction of travel
 const[x,y]=at(P[0]),[u,v]=at(P[0]+.3),a=atan2(v-y,u-x)
 for(const s of[-1,1]){
  const ex=x+cos(a)*6+cos(a+s*PI/2)*10,ey=y+sin(a)*6+sin(a+s*PI/2)*10
  c.fillStyle='#fff',c.beginPath(),c.arc(ex,ey,7,0,T),c.fill()
  c.fillStyle='#111',c.beginPath(),c.arc(ex+cos(a)*2.5,ey+sin(a)*2.5,3.6,0,T),c.fill()
 }
}
