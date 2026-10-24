// red stop sign on a pole with a big white hand wagging no-no inside it, stern little face on the palm
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80
const RD='#ff6b6b',PL='#adb5bd',BL='#ffa8a8'
const oct=(c,r)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4+PI/8;c.lineTo(128+cos(a)*r,104+sin(a)*r)}c.closePath()}
const F=[[-22.5,-128],[-7.5,-136],[7.5,-132],[22.5,-120]]
const parts=[c=>c.roundRect(-30,-82,60,76,20),c=>c.roundRect(-20,-30,40,34,10),...F.map(([x,y])=>c=>c.roundRect(x-7,y,14,-50-y,7)),c=>{c.save();c.translate(-26,-42);c.rotate(-.75);c.roundRect(-7,-44,14,48,7);c.restore()}]
export default(c,t)=>{
  const A=.26*sin(t*T*2),v=cos(t*T*2)
  c.translate(128,244);c.rotate(.025*sin(t*T*2-.6));c.translate(-128,-244)
  c.fillStyle=PL;c.beginPath();c.roundRect(116,176,24,66,6);c.fill();c.stroke()
  oct(c,92);c.fillStyle=RD;c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;oct(c,79);c.stroke()
  if(v*v>.3)for(const r of[132,114]){const a=-PI/2+A-v*.12;for(const[w,s]of[[10,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,172,r*.88,a-(v>0?.2:-.05),a+(v>0?.05:.2)),c.stroke()}
  c.save();c.translate(128,172);c.rotate(A);c.scale(.88,.88)
  c.strokeStyle='#111';c.lineWidth=14;for(const p of parts)c.beginPath(),p(c),c.stroke()
  c.fillStyle='#fff';for(const p of parts)c.beginPath(),p(c),c.fill()
  c.lineWidth=4;c.beginPath();for(const x of[-15,0,15])c.moveTo(x,-82),c.lineTo(x,-70);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*12,-50,5,0,T),c.fill()
  c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(d*5,-58),c.lineTo(d*20,-64),c.stroke()
  c.beginPath();c.arc(0,-24,8,1.2*PI,1.8*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*21,-38,6,3.5,0,0,T),c.fill()
  c.restore()
}
