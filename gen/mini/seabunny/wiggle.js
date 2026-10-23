// sea bunny inching along: a fluffy sea slug wiggles its dark-tipped bunny ears, sways its little gill flower and blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
const D=[[150,136],[178,148],[124,128],[202,166],[162,172],[136,156],[190,130],[112,180],[184,186],[214,146]]
export default(c,t)=>{
  const s=sin(T*t*2),bl=t>.5&&t<.56
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(132,202);c.scale(1+.05*s,1-.05*s);c.translate(-132,-202)
  c.save();c.translate(200,126);c.rotate(.25*sin(T*t*2+1))
  for(let i=-2;i<=2;i++){c.save();c.rotate(i*.4);shape(()=>c.ellipse(0,-16,6,14,0,0,T));c.restore()}
  c.restore()
  for(const[x,y,r,k]of[[84,124,-.3,0],[112,116,.12,1.6]]){c.save();c.translate(x,y);c.rotate(r+.2*sin(T*t*2+k))
    shape(()=>c.ellipse(0,-22,10,25,0,0,T));c.fillStyle='#111';c.beginPath();c.ellipse(0,-34,5.5,9,0,0,T);c.fill();c.restore()}
  shape(()=>c.ellipse(132,158,88,46,0,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const[x,y]of D)c.beginPath(),c.arc(x,y,3,0,T),c.fill()
  for(const x of[72,96])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(x,148,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(x,150,5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(84,160,6,.2*PI,.8*PI);c.stroke()
}
