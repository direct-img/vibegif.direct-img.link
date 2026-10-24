// an empty speech bubble hangs in awkward silence while a little cricket beside it rubs its wings and chirps
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=70
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t,i)=>{
  const ch=t*2%1<.4,j=ch?(i%2?1:-1):0,b=3*sin(t*T)
  c.save();c.translate(92,68+b);c.rotate(.03*sin(t*T))
  c.beginPath();c.moveTo(-36,-50);c.arcTo(76,-50,76,50,36);c.arcTo(76,50,-76,50,36);c.lineTo(-12,50);c.lineTo(-50,86);c.lineTo(-38,50);c.arcTo(-76,50,-76,-50,36);c.arcTo(-76,-50,76,-50,36);c.closePath();c.fill();c.stroke()
  c.restore()
  c.save();c.translate(142,198-(ch&&i%2?2:0));c.scale(1.15,1.15)
  if(ch)for(const a of[-1.5,-1.05,-.6])ln(c,10,()=>{const r=j>0?4:0;c.moveTo(46+cos(a)*(42+r),-32+sin(a)*(42+r));c.lineTo(46+cos(a)*(56+r),-32+sin(a)*(56+r))})
  for(const o of[0,1])ln(c,9,()=>{c.moveTo(-36-o*8,-22);c.quadraticCurveTo(-30+o*14,-80,10+o*22+5*sin(t*T*2+o*2),-92+o*12)})
  for(const[x,y,fx,fy]of[[-22,10,-36,30],[2,14,-6,30]])ln(c,11,()=>{c.moveTo(x,y);c.lineTo(fx,fy);c.lineTo(fx-10,fy)})
  c.beginPath();c.ellipse(20,0,46,24,0,0,T);c.fill();c.stroke()
  c.save();c.translate(-12,-16);c.rotate(ch?-.32+.1*j:-.06)
  c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(40,-24,78,6);c.quadraticCurveTo(40,4,0,0);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(14,-2);c.quadraticCurveTo(40,-10,62,2);c.stroke()
  c.restore()
  ln(c,11,()=>{c.moveTo(58,-30);c.lineTo(74,26);c.lineTo(84,26)})
  c.save();c.translate(40,-10);c.rotate(-.55);c.beginPath();c.ellipse(0,0,32,13,0,0,T);c.fill();c.stroke();c.restore()
  c.beginPath();c.arc(-36,-4,25,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(-44,-10,7,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(-46,-12,2.5,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(-46,4,7,.2*PI,.8*PI);c.stroke()
  c.restore()
}
