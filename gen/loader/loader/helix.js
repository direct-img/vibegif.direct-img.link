// an upright DNA double helix spinning about its axis, a pink strand and a cyan strand of beads on twisting backbones joined by two-tone rungs, beads behind shrink and darken and pass correctly behind the front ones
export const frames=26,delay=70
const{sin,cos,PI}=Math,T=2*PI,N=9,R=56,
mix=(a,b,k)=>a.map((v,j)=>v+(b[j]-v)*k),
rgb=a=>`rgb(${a.map(v=>v|0)})`,
K=[20,18,40],C=[[244,72,140],[30,178,226]],L=C.map(a=>mix(a,[255,255,255],.45))
export default(c,t)=>{
 c.translate(128,128)
 const it=[],P=[]
 for(let j=0;j<N;j++){const y=(j-(N-1)/2)*22,e=sin(PI*(j+.5)/N)**.5
  P.push([0,1].map(s=>{const a=j*.6+T*t+s*PI;return[R*sin(a),y,cos(a),e]}))}
 // every rung half, backbone piece and bead goes in a list sorted back to front
 P.forEach((q,j)=>q.forEach(([x,y,z,e],s)=>{
  const k=(z+1)/2,col=C[s]
  it.push([z-.02,()=>{c.lineWidth=6,c.strokeStyle=rgb(mix(L[s],K,.55*(1-k)))
   c.beginPath(),c.moveTo(x,y),c.lineTo(0,y),c.stroke()}])
  if(j<N-1){const[x2,y2,z2]=P[j+1][s]
   it.push([(z+z2)/2-.03,()=>{c.lineWidth=5,c.strokeStyle=rgb(mix(col,K,.6*(1-(z+z2+2)/4)))
    c.beginPath(),c.moveTo(x,y),c.lineTo(x2,y2),c.stroke()}])}
  it.push([z,()=>{c.fillStyle=rgb(mix(col,K,.6*(1-k)))
   c.beginPath(),c.arc(x,y,(6.5+7.5*k)*(.55+.45*e),0,T),c.fill()}])
 }))
 it.sort((a,b)=>a[0]-b[0]).forEach(v=>v[1]())
}
