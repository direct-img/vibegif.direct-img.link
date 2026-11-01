// sleek white humanoid robot seen side-on crouches, swings its arms, springs into a tucked backflip, spins a full turn in the air and sticks the landing, cyan visor glowing
export const frames=36,delay=[420,...Array(35).fill(55)]
// t, torso, hip, knee, ankle, shoulder, elbow, head (deg, clockwise, 0 = upright/hanging)
const K=[
  [0,0,0,0,0,-6,-20,0],[.16,30,-100,110,-40,18,-15,-20],[.25,18,-60,70,-25,-100,-15,-10],
  [.33,-12,8,6,45,-165,-5,10],[.385,-62,-95,110,35,-160,-10,15],[.44,-140,-145,150,40,-12,-18,20],[.54,-260,-145,150,40,-12,-18,20],
  [.63,-335,-55,60,-5,-70,-20,0],[.71,-332,-95,105,-40,-95,-20,-15],[.84,-350,-35,45,-15,-40,-30,-5],
  [1,-360,0,0,0,-6,-20,0]
]
const G=228,HX=112,D=Math.PI/180
const at=t=>{
  let j=0;while(K[j+1][0]<=t)j++
  const u=(t-K[j][0])/(K[j+1][0]-K[j][0]),a=K[j-1]||K[j],b=K[j],c=K[j+1],d=K[j+2]||c
  return b.map((_,k)=>.5*(2*b[k]+(c[k]-a[k])*u+(2*a[k]-5*b[k]+4*c[k]-d[k])*u*u+(3*b[k]-a[k]-3*c[k]+d[k])*u*u*u))
}
const rot=([x,y],a)=>[x*Math.cos(a)-y*Math.sin(a),x*Math.sin(a)+y*Math.cos(a)]
const add=(p,q)=>[p[0]+q[0],p[1]+q[1]]
// forward kinematics from the pelvis at the origin; f offsets the far-side limbs
const fk=(t,f)=>{
  const[,T,hp,kn,an,sh,el,hd]=at(t).map(v=>v*D),o=f*D
  const th=T+hp+o*5,sn=th+kn-o*4,ft=sn+an,ua=T+sh+o*9,fa=ua+el
  const P=[0,0],N=rot([0,-48],T),S=add(P,rot([0,-42],T)),Kn=rot([0,36],th),A=add(Kn,rot([0,36],sn))
  const E=add(S,rot([0,29],ua)),Hd=add(E,rot([0,27],fa))
  return{T,hd,P,N,S,K:Kn,A,heel:add(A,rot([-6,7],ft)),toe:add(A,rot([20,7],ft)),ft,E,H:Hd,head:add(N,rot([2,-16],T+hd))}
}
const ground=t=>{
  const b=[fk(t,0),fk(t,1)],c=b.map(q=>q.heel[1]>=q.toe[1]?[q.heel,HX]:[q.toe,HX+26]).sort((a,b)=>b[0][1]-a[0][1])[0]
  return[c[1]-c[0][0],G-c[0][1]]
}
export default(c,t)=>{
  let r=ground(t)
  const t0=.33,t1=.71
  if(t>t0&&t<t1){
    const s=(t-t0)/(t1-t0),a=ground(t0),b=ground(t1)
    r=[a[0]+(b[0]-a[0])*s,a[1]+(b[1]-a[1])*s-150*s*(1-s)]
    const lo=Math.max(...[0,1].flatMap(f=>{const q=fk(t,f);return[q.heel[1],q.toe[1],q.K[1],q.head[1]+14,q.H[1]]}))
    if(r[1]+lo>G)r[1]=G-lo
  }
  const tr=p=>add(p,r)
  c.translate(HX+12,G);c.scale(1.14,1.14);c.translate(-HX-12,-G)
  // floor shadow shrinks as it rises
  const hgt=G-r[1],sw=Math.max(14,46-Math.max(0,hgt-70)*.5)
  c.fillStyle='#8a8f98';c.beginPath();c.ellipse(HX+12,G+5,sw,4,0,0,7);c.fill()
  c.lineCap=c.lineJoin='round'
  const ln=(a,b)=>{c.beginPath();c.moveTo(...tr(a));c.lineTo(...tr(b));c.stroke()}
  const chain=(pts,ws,col,sh)=>{
    for(const[k,w]of ws.entries()){c.strokeStyle='#111';c.lineWidth=w+7;ln(pts[k],pts[k+1])}
    for(const[k,w]of ws.entries()){
      const a=pts[k],b=pts[k+1],l=Math.hypot(b[0]-a[0],b[1]-a[1]),n=[(a[1]-b[1])/l*w*.24,(b[0]-a[0])/l*w*.24]
      c.strokeStyle=col;c.lineWidth=w;ln(a,b)
      c.strokeStyle=sh;c.lineWidth=w*.38;ln(add(a,n),add(b,n))
    }
  }
  const joint=(p,r,col,g)=>{c.fillStyle=col;c.lineWidth=3;c.strokeStyle='#111';c.beginPath();c.arc(...tr(p),r,0,7);c.fill();c.stroke();if(g){c.fillStyle=g;c.beginPath();c.arc(...tr(p),r*.38,0,7);c.fill()}}
  const foot=(q,col)=>{
    c.fillStyle=col;c.strokeStyle='#111';c.lineWidth=4;c.beginPath()
    for(const p of[[-7,-4],[8,-4],[21,3],[21,8],[-7,8]])c.lineTo(...tr(add(q.A,rot(p,q.ft))))
    c.closePath();c.fill();c.stroke()
  }
  const leg=(q,a,j,s,g)=>{chain([q.P,q.K,q.A],[18,14],a,s);foot(q,a);joint(q.K,6.5,j,g);joint(q.A,5,j)}
  const arm=(q,a,j,s,g)=>{chain([q.S,q.E,q.H],[12,10],a,s);joint(q.E,5.5,j,g);joint(q.H,6,j)}
  const far=fk(t,1),q=fk(t,0)
  arm(far,'#aeb7c1','#2a2f36','#949eaa');leg(far,'#aeb7c1','#2a2f36','#949eaa')
  // torso in its own frame
  c.save();c.translate(...tr(q.P));c.rotate(q.T);c.strokeStyle='#111';c.lineWidth=4
  const rr=(x,y,w,h,k,f)=>{c.fillStyle=f;c.beginPath();c.roundRect(x,y,w,h,k);c.fill();c.stroke()}
  rr(-21,-48,12,26,4,'#7d8793')
  rr(-8,-30,16,24,5,'#3a4048')
  c.strokeStyle='#555d66';c.lineWidth=2;for(const y of[-24,-18,-12]){c.beginPath();c.moveTo(-6,y);c.lineTo(6,y);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=4
  rr(-13,-10,26,16,6,'#e9edf1')
  c.fillStyle='#eef2f5';c.beginPath();c.moveTo(-14,-54);c.lineTo(10,-54);c.quadraticCurveTo(18,-50,16,-36);c.lineTo(9,-26);c.lineTo(-12,-26);c.closePath();c.fill();c.stroke()
  c.fillStyle='#c9d1d9';c.beginPath();c.moveTo(-12,-28);c.lineTo(8,-28);c.lineTo(12,-34);c.lineTo(-11,-34);c.fill()
  c.fillStyle='#2ee6ff';c.fillRect(9,-48,4,10)
  c.restore()
  // head
  c.save();c.translate(...tr(q.head));c.rotate(q.T+q.hd);c.strokeStyle='#111';c.lineWidth=4
  c.fillStyle='#3a4048';c.fillRect(-4,8,8,8);c.strokeRect(-4,8,8,8)
  c.fillStyle='#eef2f5';c.beginPath();c.ellipse(0,0,12,14,0,0,7);c.fill();c.stroke()
  c.fillStyle='#1a1f26';c.beginPath();c.roundRect(1,-6,13,11,5);c.fill();c.stroke()
  c.fillStyle='#2ee6ff';c.fillRect(5,-2,8,3)
  c.restore()
  leg(q,'#f2f5f8','#3a4048','#c9d1da','#2ee6ff');joint(q.P,7,'#3a4048','#2ee6ff')
  arm(q,'#f2f5f8','#3a4048','#c9d1da','#2ee6ff');joint(q.S,7.5,'#3a4048','#2ee6ff')
  // whoosh arcs while spinning
  if(t>.37&&t<.62){
    const p=tr(q.P),a=q.T-Math.PI/2
    c.strokeStyle='#9aa3ad';c.lineWidth=4;c.lineCap='round'
    for(const[R,o,l]of[[60,.5,1],[70,.7,.6],[52,3.7,.8]]){c.beginPath();c.arc(p[0],p[1],R,a+o,a+o+l);c.stroke()}
  }
}
