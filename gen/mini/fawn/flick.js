// fawn standing still: big ears with one flicking, the short tail flicks twice, white spots on its back, it blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const br=sin(T*t),ef=t>.2&&t<.32?.6*sin(PI*(t-.2)/.12):0,tf=t>.55&&t<.8?.5*sin(T*(t-.55)/.125):0,hd=.06*sin(T*t),bl=t>.86&&t<.92
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  c.translate(-6,0);c.lineWidth=7
  for(const l of[[86,136,78,176,84,212],[100,138,100,176,102,212],[146,138,146,176,144,212],[160,136,162,176,166,212]])
    c.beginPath(),c.moveTo(l[0],l[1]),c.lineTo(l[2],l[3]),c.lineTo(l[4],l[5]),c.stroke()
  c.lineWidth=6
  shape(76,114,-.3-tf,()=>c.ellipse(-4,-8,6,11,-.4,0,T))
  shape(122,126,0,()=>c.ellipse(0,br,50,24+br*.5,0,0,T))
  c.lineWidth=20;c.beginPath();c.moveTo(156,118);c.lineTo(172,82);c.stroke();c.lineWidth=6
  c.save();c.translate(172,84);c.rotate(hd);c.translate(-172,-84)
  shape(166,64,-1,()=>c.ellipse(0,-13,6.5,15,0,0,T))
  shape(179,60,.15-ef,()=>c.ellipse(0,-13,6.5,15,0,0,T))
  shape(178,72,0,()=>c.ellipse(0,0,16,14,0,0,T))
  shape(194,80,.3,()=>c.ellipse(0,0,12,8,0,0,T))
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(182,68,4,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(182,70,3.6,0,T),c.fill()
  c.restore();c.fillStyle='#fff'
  for(const[x,y,r]of[[96,116,3.4],[112,112,3.6],[128,111,3.4],[144,114,3.2],[104,127,3],[122,124,3.2],[138,126,3]])c.beginPath(),c.arc(x,y+br,r,0,T),c.fill()
}
