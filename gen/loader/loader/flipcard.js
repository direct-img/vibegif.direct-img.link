// a rounded teal card with a pale inner square flips left-right in perspective to show its coral back with a pale dot, settles with a springy wobble, then flips top-bottom back to teal; dark outline
export const frames=48,delay=40
const{sin,cos,PI,abs,min,max}=Math,T=2*PI,
// flip angle keys (catmull-rom): hold, tip back, flip, overshoot, wobble, settle
K0=[0,0,-.22,.7,2.5,3.45,3.02,3.19,3.12,PI,PI,PI],
ang=u=>{const n=K0.length-1,f=u*(n-1),j=f|0,s=f-j,[a,b,d,e]=[j-1,j,j+1,j+2].map(k=>K0[max(0,min(n,k))])
 return(2*b+(d-a)*s+(2*a-5*b+4*d-e)*s*s+(3*b-a-3*d+e)*s*s*s)/2},
rr=(h,r,n=7)=>{const p=[]
 for(let q=0;q<4;q++){const x=(q%3?-1:1)*(h-r),y=(q<2?1:-1)*(h-r)
  for(let j=0;j<=n;j++){const a=(q+j/n)*PI/2;p.push([x+r*cos(a),y+r*sin(a)])}}
 return p},
ci=(r,n=28)=>[...Array(n)].map((_,j)=>[r*cos(j/n*T),r*sin(j/n*T)]),
O=rr(78,26),F=rr(38,12),D=ci(26),
mix=(a,b,k)=>`rgb(${a.map((v,j)=>v+(b[j]-v)*k|0)})`,
K=[17,17,17]
export default(c,t)=>{
 const A=!(Math.floor(t*2)%2),u=t*2%1,a=ang(u),
  ca=cos(a),sa=sin(a),lift=1+.07*sin(PI*min(1,u*1.1)),
  P=([x,y])=>{const[X,Y,Z]=A?[x*ca,y,-x*sa]:[-x,y*ca,y*sa],f=lift*560/(560-Z)
   return[128+X*f,128+Y*f]},
  nz=A?ca:-ca,front=nz>0,dk=(1-abs(nz))*.45,
  path=q=>{c.beginPath();q.map(P).forEach(([x,y],j)=>j?c.lineTo(x,y):c.moveTo(x,y));c.closePath()}
 c.lineWidth=9
 path(O),c.fillStyle=mix(front?[38,190,170]:[255,104,84],K,dk),c.fill()
 path(front?F:D),c.fillStyle=mix(front?[190,244,232]:[255,220,204],K,dk),c.fill()
 path(O),c.stroke()
}
