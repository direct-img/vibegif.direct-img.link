// meerkat on sentry duty: standing tall on its mound with paws held up, it snaps its pointed snout left, front, right, stretches up and blinks
const{sin,cos,PI,min,max,abs,floor,atan2}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
const K=[0,0,-1,-1,0,0,1,1]
export default(c,t)=>{
  const n=K.length,u=t*n,i=floor(u),f=min(1,(u-i)/.4),e=f*f*(3-2*f),h=K[i]+(K[(i+1)%n]-K[i])*e,a=abs(h),ph=h*PI/2
  const up=5*max(0,sin(T*t*2)),bl=t>.5&&t<.56
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  shape(()=>{c.moveTo(46,238);c.quadraticCurveTo(128,200,210,238);c.closePath()})
  c.lineWidth=9;c.beginPath();c.moveTo(146,194);c.quadraticCurveTo(178,190,186,210);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(186,210);c.quadraticCurveTo(190,220,200,228);c.stroke()
  for(const x of[114,142])shape(()=>c.ellipse(x,222,12,6,0,0,T))
  shape(()=>{c.moveTo(117,112-up);c.bezierCurveTo(104,134-up,100,172,106,198);c.quadraticCurveTo(110,218,128,218);c.quadraticCurveTo(146,218,150,198);c.bezierCurveTo(156,172,152,134-up,139,112-up);c.closePath()})
  c.translate(0,-up)
  const X=128+5*h,Y=82,tx=X+44*h,ty=Y+28-20*a,d=atan2(ty-Y,tx-X),nx=-sin(d),ny=cos(d),mx=(X+tx)/2,my=(Y+ty)/2
  c.lineWidth=24;c.beginPath();c.moveTo(128,118);c.lineTo(X,Y+8);c.stroke();c.lineWidth=6
  // ears and eyes sit at an angle around the head, so turning the head slides them round and hides the far ones
  const E=[-1,1].map(s=>[X+19*sin(s*PI/2+ph*.75),cos(s*PI/2+ph*.75)])
  for(const[x,z]of E)if(z>-.3)shape(()=>c.arc(x,Y-4,6.5,0,T))
  shape(()=>c.arc(X,Y,19,0,T))
  shape(()=>{c.moveTo(X+nx*15,Y+ny*15);c.quadraticCurveTo(mx+nx*8,my+ny*8,tx,ty);c.quadraticCurveTo(mx-nx*8,my-ny*8,X-nx*15,Y-ny*15)})
  c.fillStyle=c.strokeStyle='#111'
  for(const[x,z]of E)if(z>-.3)c.beginPath(),c.ellipse(x,Y-4,3,4,0,0,T),c.fill()
  for(const s of[-1,1]){const al=s*.5+ph,x=X+17*sin(al),y=Y+4,r=-s*.7*(1-a)+h*.3
    if(cos(al)<.1)continue
    if(bl)c.lineWidth=4,c.beginPath(),c.arc(x,y-3,6,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.ellipse(x,y,7,5,r,0,T),c.fill()}
  c.beginPath();c.ellipse(tx,ty,4.5,4,0,0,T);c.fill()
  c.translate(0,up*.5)
  c.lineWidth=3.5
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(128+s*17,122);c.quadraticCurveTo(128+s*22,142,128+s*12,140);c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(128+s*10,147,5,6.5,0,0,T);c.fill();c.stroke()}
}
