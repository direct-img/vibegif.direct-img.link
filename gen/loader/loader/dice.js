// pink-red die with white pips seen in 3D from above, crouching then hopping and tumbling end over end toward you, landing with a squash and a little bounce on its grey shadow, showing a different face each landing (1-2-3 corner, then 6-4-5)
const{sin,cos,min,PI,SQRT1_2:Q}=Math,T=2*PI
export const frames=48,delay=40
const ink='#111',h=43,H=46
// view: turn the front-right corner to us, tip the top towards us
const yw=-PI/4,pt=.5
const V=([x,y,z])=>{const X=x*cos(yw)+z*sin(yw),Z=-x*sin(yw)+z*cos(yw);return[X,y*cos(pt)-Z*sin(pt),y*sin(pt)+Z*cos(pt)]}
// rotation about the horizontal axis A by angle a (Rodrigues)
const A=[Q,0,-Q]
const rot=(a,v)=>{
  const c=cos(a),s=sin(a),d=A[0]*v[0]+A[1]*v[1]+A[2]*v[2]
  const x=[A[1]*v[2]-A[2]*v[1],A[2]*v[0]-A[0]*v[2],A[0]*v[1]-A[1]*v[0]]
  return v.map((e,i)=>e*c+x[i]*s+A[i]*d*(1-c))
}
// faces: normal, u, v, pips (opposite faces add to 7, 1-2-3 run counter-clockwise)
const q=.5,P4=[[-q,-q],[q,-q],[-q,q],[q,q]]
const faces=[
  [[0,1,0],[1,0,0],[0,0,1],[[0,0]]],
  [[0,-1,0],[1,0,0],[0,0,-1],[...P4,[-q,0],[q,0]]],
  [[0,0,1],[1,0,0],[0,-1,0],[[-q,-q],[q,q]]],
  [[0,0,-1],[-1,0,0],[0,-1,0],[...P4,[0,0]]],
  [[1,0,0],[0,0,-1],[0,-1,0],[[-q,-q],[0,0],[q,q]]],
  [[-1,0,0],[0,0,1],[0,-1,0],P4],
]
const shades=['#b8324f','#e2456a','#ff6f8f']
const ease=u=>u*u*(3-2*u)
export default(c,t)=>{
  // each half of the loop: crouch, hop with a half turn, land, small bounce, settle
  const k=t<.5?0:1,u=t*2-k
  let a=PI*k,y=0,sq=0
  if(u<.12)sq=.1*sin(PI*u/.12)
  else if(u<.6){const v=(u-.12)/.48;y=H*4*v*(1-v),a+=PI*ease(v),sq=-.06*sin(PI*v)}
  else if(u<.72)sq=.16*sin(PI*(u-.6)/.12)
  else if(u<.88){const v=(u-.72)/.16;y=H*.16*4*v*(1-v)}
  else sq=.04*sin(PI*(u-.88)/.12)
  // lift so the lowest corner sits on the ground
  const cs=[];for(const x of[-1,1])for(const yy of[-1,1])for(const z of[-1,1])cs.push(rot(a,[x,yy,z]))
  const cy=y-h*min(...cs.map(p=>p[1]))
  const gx=128,gy=200
  // shadow shrinks as it rises
  const sw=h*1.6*(1-.35*y/H)
  c.fillStyle='#9aa0ab',c.beginPath(),c.ellipse(gx,gy,sw,sw*sin(pt)*.8,0,0,T),c.fill()
  // squash and stretch about the ground point
  c.translate(gx,gy),c.scale(1+sq,1-sq)
  const S=p=>{const r=V(p);return[r[0],-r[1]]},C=S([0,cy,0])
  for(const[n,fu,fv,pips]of faces){
    const N=V(rot(a,n))
    if(N[2]<.02)continue
    const w=n=>{const r=rot(a,n).map(e=>e*h);return S(r)},o=w(n),eu=w(fu),ev=w(fv)
    const L=.45*N[0]+.8*N[1]+.4*N[2],col=shades[L>.75?2:L>.35?1:0]
    c.save(),c.transform(eu[0],eu[1],ev[0],ev[1],C[0]+o[0],C[1]+o[1])
    c.beginPath(),c.roundRect(-1,-1,2,2,.16),c.restore()
    c.fillStyle=col,c.fill(),c.lineWidth=6,c.strokeStyle=ink,c.stroke()
    c.save(),c.transform(eu[0],eu[1],ev[0],ev[1],C[0]+o[0],C[1]+o[1])
    c.beginPath();for(const[x,z]of pips)c.moveTo(x+.19,z),c.arc(x,z,.19,0,T)
    c.restore(),c.fillStyle='#fff',c.fill()
  }
}
