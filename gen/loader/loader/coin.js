// thick gold coin spinning on its edge in 3D over a grey shadow, lingering on each face (a raised star on the front, a heart on the back) and showing its ridged rim as it turns edge-on, with a white twinkle when the star faces you
const{sin,cos,abs,sign,max,PI}=Math,T=2*PI
export const frames=36,delay=50
const ink='#111',R=76,D=18
let c,cx,sx
// build a path in the face plane (x squashed by sx), stroke it unsquashed
const P=(f,fill,lw=6,st=ink)=>{
  c.save(),c.translate(cx,0),c.scale(sx,1),c.beginPath(),f(),c.restore()
  fill&&(c.fillStyle=fill,c.fill()),lw&&(c.lineWidth=lw,c.strokeStyle=st,c.stroke())
}
const star=(r,k=5,q=.45)=>{for(let j=0;j<2*k;j++){const a=j*PI/k-PI/2,s=j%2?r*q:r;c.lineTo(s*cos(a),s*sin(a))}c.closePath()}
const heart=s=>{
  c.moveTo(0,s*.9)
  c.bezierCurveTo(-s*1.2,s*.1,-s*.9,-s*.95,0,-s*.38)
  c.bezierCurveTo(s*.9,-s*.95,s*1.2,s*.1,0,s*.9)
}
export default(ctx,t)=>{
  c=ctx,c.translate(128,122)
  // two half turns per loop, each eased so it lingers face-on
  const n=2*t,j=n|0,u=n-j,a=PI*(j+u-sin(T*u)/T*.55)
  const ca=cos(a),sa=sin(a),w=R*abs(ca),s=D/2*sa,face=ca>0
  // shadow under the edge it stands on
  c.fillStyle='#8d93a1',c.beginPath(),c.ellipse(0,R+2,62,9,0,0,T),c.fill()
  // rim: hull of the two face ellipses
  cx=0,sx=1
  P(()=>{c.ellipse(-abs(s),0,w,R,0,PI/2,PI*1.5),c.ellipse(abs(s),0,w,R,0,-PI/2,PI/2)},'#c98a14')
  // ridges across the visible part of the rim
  c.strokeStyle='#8f5f08',c.lineWidth=3
  for(let k=0;k<36;k++){
    const b=k*T/36,nz=-cos(b)*sa*(face?1:-1)
    if(nz<.15)continue
    const x=R*cos(b)*ca,y=R*sin(b)
    if(abs(y)>R-5)continue
    c.beginPath(),c.moveTo(x-s+1.5*sign(s),y),c.lineTo(x+s-1.5*sign(s),y),c.stroke()
  }
  if(w<2)return
  // the visible face
  cx=face?s:-s,sx=abs(ca)
  const lit=abs(ca)>.75?'#ffd23f':abs(ca)>.4?'#f4c430':'#e3ad1f'
  P(()=>c.ellipse(0,0,R,R,0,0,T),lit)
  if(face)P(()=>star(42),'#e7a91c',5),P(()=>star(30),'#ffe17a',0)
  else P(()=>heart(44),'#e7a91c',5),P(()=>{c.translate(0,4),heart(30)},'#ffe17a',0)
  // twinkle when the star is facing out
  const g=max(0,1-abs(a%T)/.5,1-abs(a%T-T)/.5)
  if(g>0){
    cx=0,sx=1
    c.save(),c.translate(-34,-38),c.scale(g,g)
    P(()=>star(24,4,.25),'#fff',4),c.restore()
  }
}
