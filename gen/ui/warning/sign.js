// warning triangle with a big "!" wobbling on its corner, the "!" jiggling along, alert lines flashing on both sides
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t,i)=>{
  const D=(f,a=12,b=5)=>{for(const[w,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const a=.1*sin(2*T*t),b=.14*sin(2*T*t-1.2),fl=i%4<2
  if(fl)for(const d of[-1,1])for(const k of[0,1,2]){const g=-PI/2+d*(.62+k*.3),r=96+(k==1?8:0);D(()=>{c.moveTo(128+cos(g)*r,130+sin(g)*r);c.lineTo(128+cos(g)*(r+20),130+sin(g)*(r+20))},12,5)}
  c.translate(128,214);c.rotate(a);c.translate(-128,-214)
  const tri=()=>{c.beginPath();c.moveTo(128,44);c.lineTo(222,206);c.lineTo(34,206);c.closePath()}
  tri();c.lineWidth=34;c.stroke();c.lineWidth=20;c.strokeStyle='#fff';c.stroke();c.fill()
  c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(128,62);c.lineTo(207,198);c.lineTo(49,198);c.closePath();c.stroke()
  c.translate(128,188);c.rotate(b);c.lineWidth=24;c.beginPath();c.moveTo(0,-90);c.lineTo(0,-46);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(0,-12,13,0,T);c.fill()
}
