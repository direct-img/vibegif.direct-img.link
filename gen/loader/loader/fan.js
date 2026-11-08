// teal desk fan on a stand, its round head swinging left and right in 3D while three coral oval blades whirl behind a black wire grille
const{sin,cos,abs,PI}=Math,T=2*PI
export const frames=30,delay=60
const ink='#111',R=60,HY=-30,D=19
let c,cx,sx
// path built in the head's face plane (x squashed by the turn), stroked unsquashed
const P=(f,fill,lw=6,st=ink)=>{
  c.save(),c.translate(cx,HY),c.scale(sx,1),c.beginPath(),f(),c.restore()
  fill&&(c.fillStyle=fill,c.fill()),lw&&(c.lineWidth=lw,c.strokeStyle=st,c.stroke())
}
export default(ctx,t)=>{
  c=ctx,c.translate(128,128)
  const th=.62*sin(T*t),ct=cos(th),st=sin(th),hx=18*st
  // stand
  c.lineWidth=6,c.strokeStyle=ink
  c.beginPath(),c.roundRect(-58,84,116,22,11),c.fillStyle='#2a9d8f',c.fill(),c.stroke()
  c.beginPath(),c.roundRect(-34,88,16,8,4),c.fillStyle='#ffd166',c.fill(),c.lineWidth=4,c.stroke()
  c.lineWidth=6,c.beginPath(),c.roundRect(-8,20,16,68,4),c.fillStyle='#21867a',c.fill(),c.stroke()
  c.beginPath(),c.arc(0,22,12,0,T),c.fillStyle='#2a9d8f',c.fill(),c.stroke()
  // head depth band: hull of back and front rims
  const w=R*ct,s=D/2*st
  cx=hx,sx=1
  P(()=>{c.ellipse(-abs(s),0,w,R,0,PI/2,PI*1.5),c.ellipse(abs(s),0,w,R,0,-PI/2,PI/2)},'#21867a')
  cx=hx+s,sx=ct
  P(()=>c.arc(0,0,R,0,T),'#dff4f0',0)
  // three oval blades, 10 thirds of a turn per loop
  const b=10*T/3*t
  for(let k=0;k<3;k++){const a=b+k*T/3;P(()=>c.ellipse(29*cos(a),29*sin(a),26,15,a+.35,0,T),'#ff6b6b',4)}
  // grille
  P(()=>{for(const r of[23,41])c.moveTo(r,0),c.arc(0,0,r,0,T)},0,3,ink)
  P(()=>{for(let k=0;k<4;k++){const a=k*T/4+PI/4;c.moveTo(16*cos(a),16*sin(a)),c.lineTo(R*cos(a),R*sin(a))}},0,3,ink)
  P(()=>c.arc(0,0,R-3,0,T),0,12,'#2a9d8f')
  P(()=>{c.arc(0,0,R+3,0,T),c.moveTo(R-9,0),c.arc(0,0,R-9,0,T)},0,5)
  P(()=>c.arc(0,0,15,0,T),'#ffd166',5)
}
