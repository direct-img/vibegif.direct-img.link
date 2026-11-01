// emoticon grimacing, cringes down with clenched teeth stretched wide while the eyes dart side to side
export const frames=36,delay=65
const P=Math.PI,{max,min,abs,round}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
const win=(t,a,b,c,d)=>ez((t-a)/(b-a))*(1-ez((t-c)/(d-c)))
export default(c,t,i)=>{
  // cringe in (.12-.24) with a quick shudder, hold, ease back out (.72-.9)
  const q=win(t,.12,.24,.72,.9),sh=(i%2*2-1)*2.5*max(0,1-abs(t-.27)/.08)
  // eyes: glance one way, then the other, then back to the viewer
  const lk=13*(ez((t-.2)/.06)-2*ez((t-.46)/.07)+ez((t-.76)/.08))
  c.translate(128+sh,128+round(8*q))
  c.beginPath();c.ellipse(0,0,96+round(5*q),96-round(8*q),0,0,2*P)
  c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  // shudder lines beside the head while cringing
  if(q>.3){c.lineWidth=5;c.strokeStyle=G
    for(const s of[-1,1])for(let k=0;k<3;k++){
      const x=s*(106+5*q+(i%2)*2),y=-42+k*20+s*4
      c.beginPath();c.moveTo(x,y);c.lineTo(x+s*6*q,y-4);c.stroke()}}
  c.strokeStyle=K
  // brows hitched up unevenly
  c.lineWidth=9
  c.beginPath();c.moveTo(-60,-46-6*q);c.quadraticCurveTo(-40,-60-10*q,-18,-50-6*q);c.stroke()
  c.beginPath();c.moveTo(18,-48-2*q);c.quadraticCurveTo(40,-52-4*q,60,-44-q);c.stroke()
  // small round eyes, squinting a touch in the cringe
  for(const s of[-1,1]){
    c.beginPath();c.ellipse(s*36+lk,-18+3*q,12,14-2*q,0,0,2*P);c.fillStyle=K;c.fill()
    c.beginPath();c.arc(s*36+lk-4,-22+3*q,3.5,0,2*P);c.fillStyle='#fff';c.fill()
  }
  // clenched teeth, stretched wide with the corners pulled back
  const w=44+14*q+q*(i%2)*1.5,h=19-3*q,y=44
  const m=()=>{c.beginPath();c.moveTo(-w,y-h+6)
    c.quadraticCurveTo(0,y-h-6+4*q,w,y-h+6);c.quadraticCurveTo(w+6,y+2,w,y+h+4*q)
    c.quadraticCurveTo(0,y+h+4-4*q,-w,y+h+4*q);c.quadraticCurveTo(-w-6,y+2,-w,y-h+6);c.closePath()}
  m();c.fillStyle='#fff';c.fill()
  c.save();c.clip();c.lineWidth=4.5;c.beginPath()
  c.moveTo(-w,y+2*q);c.lineTo(w,y+2*q)
  for(let k=-1.5;k<=1.5;k++){c.moveTo(k*w*.4,y-h-8);c.lineTo(k*w*.4,y+h+8)}
  c.stroke();c.restore()
  m();c.lineWidth=8;c.stroke()
}
