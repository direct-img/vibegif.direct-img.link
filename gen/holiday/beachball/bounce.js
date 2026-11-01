// striped beach ball bouncing with a squash on landing, spinning on its tilted axis as it flies
export const frames=28,delay=40,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos,n=([x,y,z])=>{const l=Math.hypot(x,y,z);return[x/l,y/l,z/l]}
const A=n([.34,-.52,.78]),U=n([A[2],0,-A[0]]),V=[A[1]*U[2]-A[2]*U[1],A[2]*U[0]-A[0]*U[2],A[0]*U[1]-A[1]*U[0]]
const cols=[[255,75,75],[255,255,255],[47,155,255],[255,210,63],[255,255,255],[60,207,110]]
const dot=(p,q)=>p[0]*q[0]+p[1]*q[1]+p[2]*q[2],cap=.93
export default(c,t)=>{
  const r=60,G=232,h=4*t*(1-t),y=G-r-92*h,w=-P*t
  // squash near the ground, stretch while falling fast
  const q=Math.max(0,1-Math.min(t,1-t)/.07),sy=1-.2*q+.06*(1-h)*(1-q),sx=1/Math.sqrt(sy)
  // point on the ball at latitude f, longitude l (spun by w)
  const pt=(f,l)=>{const a=C(f),b=C(l+w)*a,d=S(l+w)*a,e=S(f);return[0,1,2].map(i=>b*U[i]+d*V[i]+e*A[i])}
  const sw=r*(1.1-.55*h)
  c.beginPath();c.ellipse(128,G,sw,sw*.16,0,0,P);c.fillStyle='#c9cfdc';c.fill()
  // paint the panels pixel by pixel: which slice of the sphere does each pixel see
  const x0=Math.floor(128-r*sx-2),y0=Math.max(0,Math.floor(G+sy*(y-G-r)-2)),W=Math.ceil(2*r*sx+4),H=Math.min(256-y0,Math.ceil(2*r*sy+4))
  const im=c.getImageData(x0,y0,W,H),d=im.data
  for(let j=0;j<H;j++)for(let i=0;i<W;i++){
    const X=((x0+i+.5-128)/sx)/r,Y=((y0+j+.5-G)/sy-(y-G))/r,m=X*X+Y*Y
    if(m>1.04)continue
    const p=[X,Y,Math.sqrt(Math.max(0,1-m))],la=dot(p,A)
    let k=Math.floor(((Math.atan2(dot(p,V),dot(p,U))-w)/P*6%6+12)%6),o=(j*W+i)*4
    const col=la>cap?[255,255,255]:cols[k]
    d[o]=col[0];d[o+1]=col[1];d[o+2]=col[2];d[o+3]=255
  }
  c.putImageData(im,x0,y0)
  c.save();c.translate(128,G);c.scale(sx,sy);c.translate(0,y-G)
  c.save();c.beginPath();c.arc(0,0,r,0,P);c.clip()
  // seams on the side facing us, and the pole cap
  c.lineWidth=3.5
  for(let k=0;k<6;k++){c.beginPath();let on=0;for(let j=0;j<=48;j++){const p=pt(Math.asin(cap)-j/48*P/2,k*P/6);p[2]>0?(c[on?'lineTo':'moveTo'](p[0]*r,p[1]*r),on=1):on=0}c.stroke()}
  c.beginPath();for(let j=0;j<40;j++){const p=pt(Math.asin(cap),j/40*P);c.lineTo(p[0]*r,p[1]*r)}c.closePath();c.stroke()
  // shade and shine
  c.beginPath();c.arc(0,0,r,0,P);c.arc(-12,-12,r,0,P,1);c.fillStyle='rgba(20,30,80,.22)';c.fill()
  c.beginPath();c.ellipse(-27,-30,8,15,.75,0,P);c.fillStyle='rgba(255,255,255,.8)';c.fill()
  c.restore()
  c.lineWidth=6;c.beginPath();c.arc(0,0,r,0,P);c.stroke()
  c.restore()
}
