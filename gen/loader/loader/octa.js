// solid octahedron gem with alternating pink and teal facets, flat stepped shading and dark edges, spinning steadily while it tumbles head over heels with an eased flip, grey shadow below and a white glint popping out at rest
const{sin,cos,PI,max,min,round,hypot}=Math
export const frames=48,delay=40
const V=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]
const F=[];for(const a of[0,1])for(const b of[2,3])for(const d of[4,5])F.push([a,b,d])
// two facet colors (checker by octant), five shade steps each
const C=[['#7a1f5c','#b02d7c','#e0479b','#ff79b8','#ffb3d6'],['#125e5e','#1a8a85','#24b3a7','#4fd8c6','#9bf1e2']]
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=min(255,D[j]+8&~15)
  }
  c.putImageData(d,0,0)
}
const SS=u=>u*u*u*(u*(6*u-15)+10)
export default(c,t)=>{
  // half turns keep the checker colors in place, so the loop is seamless
  const ay=PI*t,ax=PI*(t<.15?0:t>.85?1:SS((t-.15)/.7)),
    cy=cos(ay),sy=sin(ay),cx=cos(ax),sx=sin(ax),S=92
  const R=([x,y,z])=>{
    ;[y,z]=[y*cx-z*sx,y*sx+z*cx];[x,z]=[x*cy+z*sy,-x*sy+z*cy]
    // tilt toward the viewer so the top shows
    return[x,y*.93-z*.36,y*.36+z*.93]
  }
  const P=V.map(v=>{const[x,y,z]=R(v),f=4.5/(4.5-z);return[128+x*S*f,116+y*S*f]})
  const xs=P.map(p=>p[0]),w=max(...xs)-min(...xs)
  c.beginPath();c.ellipse(128,232,w*.4,7,0,0,2*PI);c.fillStyle='#9a9aa6';c.fill()
  F.forEach(f=>{
    const n=R([0,1,2].map(j=>f.reduce((s,k)=>s+V[k][j],0)))
    if(n[2]<=0)return
    // light from upper left front
    const l=(-.45*n[0]-.6*n[1]+.66*n[2])/hypot(...n)
    c.beginPath();f.forEach(k=>c.lineTo(...P[k]));c.closePath()
    c.fillStyle=C[(f[0]+f[1]+f[2])%2][max(0,min(4,round(l*4.2+1.4)))];c.fill()
    c.lineWidth=5;c.stroke()
  })
  // a glint pops out while the gem rests
  const u=(t+.1)%1,g=u<.22?sin(PI*u/.22)*19:0
  if(g>2){
    c.beginPath()
    for(let k=0;k<8;k++){const r=k%2?g*.3:g,a=k*PI/4;c.lineTo(62+r*sin(a),50-r*cos(a))}
    c.closePath();c.fillStyle='#fff';c.lineWidth=3.5;c.fill();c.stroke()
  }
  Q(c)
}
