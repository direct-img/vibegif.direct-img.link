// snow leopard loafing: its thick spotted tail swishes in a slow S curve, an ear flicks back and it blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=sin(T*t),k=sin(T*t-1.2),bl=t>.78&&t<.84,tw=t>.36&&t<.44?-.4:0
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(10,-12)
  const P=[[66,188],[20,200],[18+16*s,122],[46+24*k,86+8*s]]
  const B=u=>[0,1].map(i=>(1-u)**3*P[0][i]+3*(1-u)**2*u*P[1][i]+3*(1-u)*u*u*P[2][i]+u**3*P[3][i])
  c.lineWidth=26;c.beginPath();c.moveTo(...P[0]);c.bezierCurveTo(...P[1],...P[2],...P[3]);c.stroke()
  c.lineWidth=6
  shape(()=>c.ellipse(120,178,70,34,0,0,T))
  for(const x of[164,200])shape(()=>c.ellipse(x,208,20,10,0,0,T))
  c.save();c.translate(166,112);c.rotate(-.3+tw);shape(()=>c.ellipse(0,-4,11,13,0,0,T));c.restore()
  c.save();c.translate(214,112);c.rotate(.3);shape(()=>c.ellipse(0,-4,11,13,0,0,T));c.restore()
  shape(()=>c.ellipse(190,144,38,34,0,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const u of[.35,.55,.75,.92]){const[x,y]=B(u);c.beginPath();c.arc(x,y,5,0,T);c.fill()}
  c.lineWidth=3
  for(const[x,y]of[[76,170],[102,160],[96,188],[128,172],[152,160],[64,194],[124,196]])c.beginPath(),c.arc(x,y,6,.3,1.7*PI),c.stroke()
  for(const[x,y]of[[182,122],[198,122],[190,114]])c.beginPath(),c.arc(x,y,2.5,0,T),c.fill()
  for(const x of[164,200])c.beginPath(),c.moveTo(x+6,204),c.lineTo(x+6,212),c.moveTo(x+14,204),c.lineTo(x+14,212),c.stroke()
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(190+d*15,140,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(190+d*15,142,5.5,0,T),c.fill()
  c.beginPath();c.moveTo(184,152);c.lineTo(196,152);c.lineTo(190,158);c.closePath();c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(190,158);c.lineTo(190,162);c.quadraticCurveTo(186,167,181,165);c.moveTo(190,162);c.quadraticCurveTo(194,167,199,165);c.stroke()
}
