// cheshire cat: it vanishes bit by bit, tail first, then body, then head, until only the grin floats there, then it comes back
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
const ss=x=>x<0?0:x>1?1:x*x*(3-2*x),k=(t,a,b,c,d)=>t<.5?1-ss((t-a)/(b-a)):ss((t-c)/(d-c))
export default(c,t)=>{
  const tl=k(t,.06,.18,.86,.96),bd=k(t,.16,.3,.74,.88),hd=k(t,.28,.42,.6,.76),bl=t>.04&&t<.08
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()},at=(x,y,z,f)=>{c.save();c.translate(x,y);c.scale(z,z);c.translate(-x,-y);f();c.restore()}
  c.translate(128,128);c.scale(.94,.94);c.translate(-128,-124+4*sin(T*t))
  if(tl>0){c.lineWidth=16;c.setLineDash([150*tl,400]);c.beginPath();c.moveTo(170,206);c.quadraticCurveTo(150,226,90,220);c.quadraticCurveTo(60,218,52,200+5*sin(T*t*2));c.stroke();c.setLineDash([])
    c.fillStyle=c.strokeStyle='#111';c.lineWidth=4;for(const[i,x]of[138,108,78].entries())if(tl>.2+i*.25)c.beginPath(),c.moveTo(x,211+(x-108)*.03),c.lineTo(x+4,225),c.stroke()}
  if(bd>0)at(128,104,bd,()=>{
    c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
    shape(()=>{c.moveTo(128,104);c.bezierCurveTo(186,104,192,222,128,222);c.bezierCurveTo(64,222,70,104,128,104)})
    c.fillStyle=c.strokeStyle='#111';c.lineWidth=4
    for(const d of[-1,1])for(const y of[140,162])c.beginPath(),c.moveTo(128+d*41,y),c.quadraticCurveTo(128+d*35,y+4,128+d*31,y+10),c.stroke()
    for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*22,214),c.lineTo(128+d*22,222),c.stroke()
  })
  if(tl>.9&&bd>.99){c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.moveTo(96,206);c.quadraticCurveTo(130,212,168,204);c.stroke()}
  if(hd>0)at(128,108,hd,()=>{
    c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
    for(const d of[-1,1])shape(()=>{c.moveTo(128+d*24,48);c.lineTo(128+d*44,12);c.lineTo(128+d*50,60)})
    shape(()=>c.ellipse(128,80,52,42,0,0,T))
    c.fillStyle=c.strokeStyle='#111';c.lineWidth=4
    for(const x of[112,128,144])c.beginPath(),c.moveTo(x,40+(x==128?-2:2)),c.lineTo(x,54+(x==128?2:0)),c.stroke()
    for(const d of[-1,1])for(const y of[70,82])c.beginPath(),c.moveTo(128+d*50,y),c.lineTo(128+d*38,y+3),c.stroke()
    c.lineWidth=3.5;for(const d of[-1,1])if(bl)c.beginPath(),c.arc(128+d*20,70,7,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.ellipse(128+d*20,72,7,9,0,0,T),c.fill()
    c.beginPath();c.moveTo(122,86);c.lineTo(134,86);c.lineTo(128,92);c.closePath();c.fill()
  })
  const y=(x,k)=>96+k*2*((x-84)/88)*(1-(x-84)/88)
  c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=3.5
  c.beginPath();c.moveTo(84,96);c.quadraticCurveTo(128,112,172,96);c.quadraticCurveTo(128,154,84,96);c.fill();c.stroke()
  c.lineWidth=2;c.beginPath();c.moveTo(88,99);c.quadraticCurveTo(128,130,168,99);c.stroke()
  for(let x=96;x<170;x+=12)c.beginPath(),c.moveTo(x,y(x,16)+1),c.lineTo(x,y(x,58)-1),c.stroke()
}
