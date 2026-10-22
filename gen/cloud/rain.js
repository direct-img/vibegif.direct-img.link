// sleepy rain cloud drifting while drops fall out from under it
const{sin,PI}=Math,T=2*PI
export default(c,t)=>{
  for(const[x,o]of[[72,0],[100,.55],[128,.25],[156,.8],[184,.4]]){
    const y=150+((t+o)%1)*120
    c.beginPath();c.moveTo(x,y-14);c.bezierCurveTo(x+3,y-7,x+8,y-3,x+8,y+3);c.arc(x,y+3,8,0,PI);c.bezierCurveTo(x-8,y-3,x-3,y-7,x,y-14)
    c.lineWidth=5;c.fill();c.stroke()
  }
  const y=sin(t*T)*3,parts=[[78,118+y,36],[124,92+y,48],[176,112+y,38]],base=()=>c.roundRect(44,112+y,168,52,26)
  c.lineWidth=14;for(const[x,yy,r]of parts)c.beginPath(),c.arc(x,yy,r,0,T),c.stroke()
  c.beginPath();base();c.stroke()
  for(const[x,yy,r]of parts)c.beginPath(),c.arc(x,yy,r,0,T),c.fill()
  c.beginPath();base();c.fill()
  c.lineWidth=6
  for(const x of[104,152])c.beginPath(),c.arc(x,126+y,9,PI*.15,PI*.85),c.stroke()
  c.beginPath();c.arc(128,154+y,8,PI*1.2,PI*1.8);c.stroke()
}
