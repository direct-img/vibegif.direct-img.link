// tesseract (4D hypercube) wireframe rotating through the fourth dimension and turning itself inside out, edges shading violet to red by 4D depth
export const frames=20,delay=60
const T=Math.PI*2,V=[...Array(16)].map((_,i)=>[0,1,2,3].map(b=>i>>b&1?1:-1))
const E=[];for(let i=0;i<16;i++)for(let b=0;b<4;b++)if(!(i>>b&1))E.push([i,i|1<<b])
export default(c,t)=>{
  // quarter turn of an isoclinic XW+YZ rotation maps the hypercube onto itself, so it loops
  const a=T*t/4,C=Math.cos(a),S=Math.sin(a),p=V.map(([x,y,z,w])=>{
    ;[x,w]=[x*C-w*S,x*S+w*C];[y,z]=[y*C-z*S,y*S+z*C]
    const k=3.5/(3.5-w);x*=k;y*=k;z*=k
    ;[y,z]=[y*.9-z*.44,y*.44+z*.9];[x,z]=[x*.85+z*.53,-x*.53+z*.85]
    const q=44*6/(6-z)
    return[114+x*q,128+y*q,z,w]
  })
  E.map(([i,j])=>[p[i],p[j]]).sort((A,B)=>A[0][2]+A[1][2]-B[0][2]-B[1][2]).map(([A,B])=>{
    c.beginPath();c.moveTo(A[0],A[1]);c.lineTo(B[0],B[1])
    c.lineWidth=12;c.strokeStyle='#111';c.stroke()
    c.lineWidth=5;c.strokeStyle=`hsl(${130-(A[3]+B[3])*46},100%,57%)`;c.stroke()
  })
  for(const v of p){c.lineWidth=3;c.strokeStyle='#111';c.fillStyle='#fff';c.beginPath();c.arc(v[0],v[1],4.5,0,T);c.fill();c.stroke()}
}
