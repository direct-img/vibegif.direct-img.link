// turtle that carries a little cottage as its shell: it plods in place, the chimney puffs smoke, window and door cut out in white
const{sin,PI,max,min}=Math,T=2*PI
export const frames=24,delay=90,rim=3
export default(c,t)=>{
  const b=1.5*sin(2*T*t),bl=t>.8&&t<.86
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(126,136);c.scale(1.1,1.1);c.translate(-128,-136)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(const[x,p]of[[84,0],[100,PI],[140,PI],[156,0]]){const s=sin(T*t+p);shape(()=>c.roundRect(x-8+5*s,170+b,16,26-6*max(0,s)-b,7))}
  c.translate(0,b)
  for(let i=0;i<2;i++){
    const u=(t+i/2)%1,r=(4+10*u)*min(1,(1-u)*5)
    if(r>.5)c.beginPath(),c.arc(152+16*u+3*sin(T*u),68-50*u,r,0,T),c.fill()
  }
  shape(()=>{c.moveTo(62,168);c.lineTo(44,176);c.lineTo(64,178)})
  c.lineWidth=18;c.beginPath();c.moveTo(166,168);c.quadraticCurveTo(184,166,192,152);c.stroke();c.lineWidth=6
  c.save();c.translate(196,148);c.rotate(.08*sin(2*T*t));shape(()=>c.ellipse(8,-2,19,14,-.15,0,T))
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(14,-7,4,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(14,-6,3.5,0,T),c.fill()
  c.restore()
  shape(()=>c.ellipse(120,174,64,12,0,0,T))
  shape(()=>c.rect(74,114,92,56))
  shape(()=>{c.moveTo(62,118);c.lineTo(120,72);c.lineTo(178,118);c.closePath()})
  shape(()=>c.rect(144,74,14,26))
  c.fillStyle='#fff'
  for(const[x,y]of[[86,126],[99,126],[86,138],[99,138]])c.fillRect(x,y,10,9)
  c.beginPath();c.moveTo(130,164);c.lineTo(130,146);c.arc(140,146,10,PI,0);c.lineTo(150,164);c.fill()
}
