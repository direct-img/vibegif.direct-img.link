// tadpole swimming in place: a wave runs down its tail, its new little back legs kick, it bobs and blows bubbles, and blinks
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const bl=t>.7&&t<.76,kk=.5*sin(T*t*2)
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(0,16)
  for(const i of[0,1]){const q=(t+i/2)%1;shape(()=>c.arc(206+8*sin(T*q)+10*q,104-86*q,4+5*q,0,T))}
  c.translate(0,7*sin(T*t))
  const N=24,P=[...Array(N+1)].map((_,i)=>{const u=i/N;return[118-96*u,130+18*u*sin(T*t*2-4*u),24*(1-u)**1.3+3]})
  shape(()=>{for(const[x,y,w]of P)c.lineTo(x,y-w);for(const[x,y,w]of[...P].reverse())c.lineTo(x,y+w);c.closePath()})
  c.lineWidth=7
  for(const[x,y,p]of[[120,160,0],[136,166,PI]]){const a=.5+.5*sin(T*t*2+p)
    c.beginPath();c.moveTo(x,y-10);c.lineTo(x-10,y+10);c.lineTo(x-20-8*a,y+8+10*a);c.stroke()}
  c.lineWidth=6
  shape(()=>c.ellipse(156,128,52,46,-.05,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const[x,y]of[[164,114],[196,118]])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(x,y-2,6.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(x,y,6.5,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(184,134,8,.2*PI,.8*PI);c.stroke()
}
