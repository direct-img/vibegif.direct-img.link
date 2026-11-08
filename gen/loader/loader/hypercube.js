// tesseract wireframe turning in 4D, thick neon tubes with dark outlines, the small inner pink cube swells out through the cyan outer one while it all spins, front edges thicker and brighter
const{sin,cos,PI}=Math
export const frames=48,delay=40
// ease in-out with a soft hold at the ends
const E=x=>x*x*x*(x*(6*x-15)+10)
const V=[...Array(16)].map((_,k)=>[0,1,2,3].map(b=>k>>b&1?1:-1))
const ED=[];V.forEach((_,k)=>[1,2,4,8].forEach(b=>k<(k^b)&&ED.push([k,k^b])))
const S=96
// posterize: alpha to 3 levels, rgb to 8 levels, keeps the lossless webp small
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=Math.min(255,D[j]+16&~31)
  }
  c.putImageData(d,0,0)
}
export default(c,t)=>{
  const a=PI/2*E(t),b=PI/2*t,ca=cos(a),sa=sin(a),cb=cos(b),sb=sin(b)
  const P=V.map(([x,y,z,w])=>{
    // XW turn swaps inner and outer cube, slow YZ turn spins it
    ;[x,w]=[x*ca-w*sa,x*sa+w*ca];[y,z]=[y*cb-z*sb,y*sb+z*cb]
    const s=1/(3-w);x*=s;y*=s;z*=s
    // fixed view tilt
    ;[x,z]=[x*.87-z*.5,x*.5+z*.87];[y,z]=[y*.94-z*.34,y*.34+z*.94]
    const f=4/(4-z*1.6)
    return[128+x*f*S,128+y*f*S,z,w,f]
  })
  ED.map(([p,q])=>[P[p],P[q]]).sort((m,n)=>m[0][2]+m[1][2]-n[0][2]-n[1][2]).forEach(([p,q])=>{
    const z=(p[2]+q[2])/2,w=(p[3]+q[3])/2,L=Math.round((z+.7)*2.2),
      lw=3.5+2.6*(p[4]+q[4])+L*1.4
    c.beginPath();c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1])
    c.strokeStyle='#111';c.lineWidth=lw+6;c.stroke()
    // hue: inner cube pink, outer cube cyan, stepped; lightness by depth
    const h=Math.max(0,Math.min(4,Math.round((w+1)*2)))/4
    c.strokeStyle=`hsl(${310-h*125},100%,${48+Math.max(0,Math.min(3,L))*9}%)`
    c.lineWidth=lw;c.stroke()
  })
  Q(c)
}
