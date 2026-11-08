// dotted globe of blue ocean and green land dots spinning on a tilted axis, front dots big and bright, back dots small and dim showing through, a teal orbit ring with a white moon circling round it
const{sin,cos,PI,round,max,min}=Math,T=2*PI
export const frames=40,delay=60
const R=74,K=1.42*R
// dots in latitude rows, every row has an even count so a half turn maps the globe onto itself
const G=[]
for(let j=-4;j<=4;j++){
  const f=j*PI/10,n=max(2,round(T*cos(f)/(PI/10)/2)*2)
  for(let i=0;i<n;i++)G.push([f,T*(i+(j&1)/2)/n])
}
// land blobs (lat,lon,radius), repeated half a turn round so the pattern has 2-fold symmetry
const B=[[.55,.2,.5],[-.4,.75,.45],[.75,2,.4],[-.15,2.35,.3]]
const land=(f,l)=>B.some(([a,b,r])=>[b,b+PI].some(b=>
  sin(f)*sin(a)+cos(f)*cos(a)*cos(l-b)>cos(r)))
const OC=['#1d3f86','#2557b0','#2f72d6','#4593f2','#6db4ff'],LD=['#285c34','#317f3f','#3ca64b','#56c95c','#8be37a']
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=min(255,D[j]+16&~31)
  }
  c.putImageData(d,0,0)
}
const ps=.42,ci=.36,si=.93
// ring point at angle q: ellipse tilted in screen, z>0 is toward the viewer
const RP=q=>{const x=cos(q),y=sin(q)*ci;return[128+K*(x*cos(ps)-y*sin(ps)),128+K*(x*sin(ps)+y*cos(ps)),sin(q)*si]}
const ring=(c,s)=>{
  c.beginPath()
  for(let k=0;k<=40;k++){const[x,y]=RP(s?k*PI/40:PI+k*PI/40);k?c.lineTo(x,y):c.moveTo(x,y)}
  c.strokeStyle='#111';c.lineWidth=11;c.stroke();c.strokeStyle='#4fd1c5';c.lineWidth=5;c.stroke()
}
const moon=(c,q)=>{
  const[x,y,z]=RP(q)
  c.beginPath();c.arc(x,y,12+3*z,0,T);c.fillStyle='#f4fbff';c.fill();c.lineWidth=4.5;c.strokeStyle='#111';c.stroke()
}
export default(c,t)=>{
  const a=PI*t,q=-T*t,ax=.38,az=-.3
  const P=G.map(([f,l])=>{
    const L=l+a
    let x=cos(f)*sin(L),y=-sin(f),z=cos(f)*cos(L)
    // lean the axis toward the viewer, then tilt it sideways
    ;[y,z]=[y*cos(ax)-z*sin(ax),y*sin(ax)+z*cos(ax)];[x,y]=[x*cos(az)-y*sin(az),x*sin(az)+y*cos(az)]
    return[x,y,z,land(f,l)]
  }).sort((p,q)=>p[2]-q[2])
  const mz=sin(q)>0
  ring(c,0);mz||moon(c,q)
  P.forEach(([x,y,z,g])=>{
    const k=min(4,max(0,round((z+1)*2)))
    c.beginPath();c.arc(128+x*R,128+y*R,3+(z+1)*3.3,0,T)
    c.fillStyle=(g?LD:OC)[k];c.fill()
  })
  ring(c,1);mz&&moon(c,q)
  Q(c)
}
