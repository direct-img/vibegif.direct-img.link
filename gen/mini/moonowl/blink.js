// owl nestled in a crescent moon: the moon's curve is its back and left wing, the lower tip is the perch it grips; big ringed eyes blink, the head tilts, a star twinkles
const{sin,cos,PI,atan2,sqrt,hypot}=Math,T=2*PI
export const frames=24,delay=85,rim=3
// crescent edges are circles through tips B and A, bulging s px toward the lower left
const B=[84,60],A=[204,214],M=[(B[0]+A[0])/2,(B[1]+A[1])/2],L=hypot(A[0]-B[0],A[1]-B[1]),n=[(B[1]-A[1])/L,(A[0]-B[0])/L]
const circ=s=>{const r=(L*L/4+s*s)/(2*s);return[M[0]-(r-s)*n[0],M[1]-(r-s)*n[1],r]}
const[ox,oy,R]=circ(72),[ix,iy,r]=circ(34),an=(x,y,P)=>atan2(P[1]-y,P[0]-x),top=x=>iy+sqrt(r*r-(x-ix)**2)
export default(c,t)=>{
  const bl=(t>.3&&t<.36)||(t>.44&&t<.5),k=.5+.5*sin(2*T*t)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(8,0)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  c.save();c.translate(42,40);c.scale(.55+.45*k,.55+.45*k);c.beginPath()
  for(let i=0;i<8;i++){const a=i*PI/4-PI/2,q=i%2?4:15;c.lineTo(q*cos(a),q*sin(a))}
  c.closePath();c.fill();c.restore()
  shape(()=>{c.arc(ox,oy,R,an(ox,oy,B),an(ox,oy,A),true);c.arc(ix,iy,r,an(ix,iy,A),an(ix,iy,B));c.closePath()})
  for(const x of[143,163]){
    const y=top(x);c.lineWidth=9;c.beginPath();c.moveTo(x,160);c.lineTo(x,y);c.stroke();c.lineWidth=6
    for(const d of[-7,0,7])c.beginPath(),c.arc(x+d,y-1-(d?0:1),4.5,0,T),c.fill()
  }
  c.translate(0,-10)
  shape(()=>c.ellipse(182,142,12,32,-.2,0,T))
  shape(()=>c.ellipse(144,138,42,48,0,0,T))
  c.strokeStyle='#fff';c.lineWidth=2.5
  for(const[x,y]of[[134,140],[154,140],[144,156]])c.beginPath(),c.moveTo(x-5,y-3),c.lineTo(x,y+2),c.lineTo(x+5,y-3),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6
  c.translate(144,112);c.rotate(.12*sin(T*t));c.translate(-144,-112)
  shape(()=>{c.ellipse(144,82,42,36,0,0,T)})
  for(const d of[-1,1])shape(()=>{c.moveTo(144+d*38,70);c.lineTo(144+d*44,38);c.lineTo(144+d*16,58);c.closePath()})
  c.fillStyle=c.strokeStyle='#fff'
  for(const d of[-1,1]){
    const x=144+d*18,y=84
    c.lineWidth=3;c.beginPath();c.arc(x,y,15,0,T);c.stroke()
    if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(x,y-3,8,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(x,y,10,0,T),c.fill(),c.fillStyle='#111',c.beginPath(),c.arc(x,y,5,0,T),c.fill(),c.fillStyle='#fff'
  }
  c.beginPath();c.moveTo(139,98);c.lineTo(149,98);c.lineTo(144,110);c.closePath();c.fill()
}
