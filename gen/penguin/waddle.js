// penguin waddling in place, rocking side to side and lifting each foot in turn
// the black body gets a white rim so it doesn't vanish on dark backgrounds
const{sin,max,PI}=Math,T=2*PI
export default(c,t)=>{
  const s=sin(t*T)
  c.translate(128,226);c.rotate(.1*s);c.translate(-128,-226)
  const dark=f=>{c.beginPath();f();c.lineWidth=16;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()}
  for(const d of[-1,1])dark(()=>c.ellipse(128+d*58,148,14,40,-d*(.25+.15*sin(t*T+(d>0?PI:0))),0,T))
  dark(()=>c.ellipse(128,140,60,82,0,0,T))
  c.fillStyle='#fff'
  c.beginPath();c.ellipse(128,158,44,60,0,0,T);c.fill()
  for(const x of[112,144])c.beginPath(),c.arc(x,104,23,0,T),c.fill()
  c.fillStyle='#111';for(const x of[114,142])c.beginPath(),c.arc(x,100,6,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[112,140])c.beginPath(),c.arc(x,98,2,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.moveTo(118,111);c.quadraticCurveTo(128,105,138,111);c.lineTo(128,124);c.closePath();c.lineWidth=4;c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=7
  for(const[x,d]of[[106,1],[150,-1]])c.beginPath(),c.ellipse(x,224-max(0,d*s)*10,18,8,0,0,T),c.fill(),c.stroke()
}
