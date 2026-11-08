// a honeycomb of seven dark-outlined hexagons, centre first then clockwise round the ring, each pops up and lights from dull brown to bright amber with a glowing core, then they shrink and dim back in the same spiral order
export const frames=40,delay=50
const{sin,cos,PI,max,min,sqrt}=Math,T=2*PI,
cl=x=>max(0,min(1,x)),
// back-out ease for the pop
bo=s=>1+2.4*(s-1)**3+1.4*(s-1)**2,
H=[[0,0],...[...Array(6)].map((_,j)=>{const a=-PI/2-PI/6+j*PI/3,d=sqrt(3)*31+6;return[d*cos(a),d*sin(a)]})],
mix=(a,b,k)=>`rgb(${a.map((v,j)=>v+(b[j]-v)*k|0)})`,
hex=(c,x,y,r)=>{c.beginPath();for(let j=0;j<6;j++){const a=-PI/2+j*PI/3;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath()}
export default(c,t)=>{
 H.forEach(([x,y],j)=>{
  const on=cl((t-.02-j*.05)/.15),off=cl((t-.5-j*.05)/.15),
   k=cl(on*3)*(1-cl(off*3)),
   // pop up with overshoot, sink back with a small dip
   s=.8+.2*(on>0?bo(on):0)-.2*(off>0?(off<.6?sin(off/.6*PI/2)**2*1.08:1.08-.08*sin((off-.6)/.4*PI/2)**2):0)
  c.lineWidth=6.5,c.lineJoin='round'
  hex(c,128+x,128+y,31*s),c.fillStyle=mix([150,100,38],[255,170,20],k),c.fill(),c.stroke()
  hex(c,128+x,128+y,15*s*(.6+.4*k)),c.fillStyle=mix([174,124,58],[255,226,120],k),c.fill()
 })
}
