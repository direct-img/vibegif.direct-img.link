// leopard gecko: it grins, flicks its tongue up to lick its own eyeball shut, curls its chubby tail and blinks
const{sin,cos,PI,max,atan2,hypot}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
const bz=(p,q,r,s)=>[(1-s)**2*p[0]+2*(1-s)*s*q[0]+s*s*r[0],(1-s)**2*p[1]+2*(1-s)*s*q[1]+s*s*r[1]]
export default(c,t)=>{
  const q=t>.3&&t<.62?sin(PI*(t-.3)/.32):0,tw=sin(T*t),bl=t>.82&&t<.88||q>.55
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(121,132);c.scale(1.08,1.08);c.translate(-124,-144)
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  // tail: a tapered tube along a curve, fat at the hip
  const A=[78,138],B=[30,140+6*tw],C=[40,184],L=[],R=[]
  for(let i=0;i<=16;i++){const s=i/16,[x,y]=bz(A,B,C,s),[x2,y2]=bz(A,B,C,s+.01),a=atan2(y2-y,x2-x),w=18*(1-s)+5;L.push([x-w*sin(a),y+w*cos(a)]);R.unshift([x+w*sin(a),y-w*cos(a)])}
  shape(()=>{for(const[x,y]of[...L,...R])c.lineTo(x,y);c.closePath()})
  shape(()=>c.arc(...bz(A,B,C,1),5,0,T))
  c.lineWidth=11
  for(const[x,y,dx]of[[166,148,16],[92,152,-16]]){c.beginPath();c.moveTo(x,y);c.lineTo(x+dx,y+28);c.stroke()}
  c.lineWidth=6
  for(const[x,dx]of[[182,1],[76,-1]])for(const a of[-.6,0,.6])shape(()=>c.arc(x+dx*8*cos(a+PI/2)+8*sin(a),182+8*cos(a)-2,4.5,0,T))
  shape(()=>c.ellipse(124,138,56,26,-.05,0,T))
  shape(()=>c.ellipse(184,118,36,27,-.2,0,T))
  if(q>0){
    const P=[214,128],Q=[246,88],E=[190,96],pts=[...Array(13)].map((_,i)=>bz(P,Q,E,q*i/12))
    c.strokeStyle='#111';c.lineWidth=17;c.beginPath();for(const p of pts)c.lineTo(...p);c.stroke()
    c.beginPath();c.arc(...pts[12],9.5,0,T);c.fillStyle='#111';c.fill()
    c.strokeStyle=c.fillStyle='#fff';c.lineWidth=10;c.beginPath();for(const p of pts)c.lineTo(...p);c.stroke()
    c.beginPath();c.arc(...pts[12],6.5,0,T);c.fill()
  }
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(186,102,9,.15*PI,.85*PI),c.stroke()
  else{c.beginPath();c.arc(186,106,10,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(189,102,3,0,T);c.fill();c.fillStyle='#111'}
  c.lineWidth=3.5;c.beginPath();c.moveTo(214,126);c.quadraticCurveTo(196,138,172,128);c.stroke()
  for(const[x,y]of[[100,126],[122,122],[144,128],[112,142],[136,144],[62,140]])c.beginPath(),c.arc(x,y,3.5,0,T),c.fill()
}
