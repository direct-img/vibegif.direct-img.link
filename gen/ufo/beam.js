// flying saucer hovering with its lights chasing and a tractor beam pulling rings upward
const{sin,PI,floor}=Math,T=2*PI
export const frames=20,delay=70
export default(c,t)=>{
  const h=5*sin(t*T)
  const D=(f,a=12,b=5)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const hw=y=>26+(y-112)/120*46
  D(()=>{c.moveTo(128-hw(112),112+h);c.lineTo(128-hw(232),232);c.moveTo(128+hw(112),112+h);c.lineTo(128+hw(232),232)})
  for(let k=0;k<3;k++){const y=232-((t+k/3)%1)*112;D(()=>c.ellipse(128,y,hw(y),6,0,0,T),10,4)}
  c.translate(128,96+h);c.rotate(.04*sin(t*T+1));c.translate(-128,-96)
  c.beginPath();c.ellipse(128,106,52,13,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(128,90,36,PI,0);c.closePath();c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,84,15,0,T);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*6,83,4,6,d*.3,0,T),c.fill()
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(128,90,36,PI,0);c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(128,90,26,PI*1.15,PI*1.4);c.stroke();c.lineWidth=7
  c.beginPath();c.ellipse(128,98,86,22,0,0,T);c.fill();c.stroke()
  const on=floor(t*5)
  c.lineWidth=5;for(let k=0;k<5;k++)c.beginPath(),c.arc(72+k*28,100+(k==0||k==4?-2:3),6,0,T),c.fillStyle=k==on?'#111':'#fff',c.fill(),c.stroke()
}
