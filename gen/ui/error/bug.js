// a little beetle scuttles in a figure eight over a code editor, the line it's crawling on lights up as the buggy one
const{sin,cos,PI,atan2,round,min,max}=Math,T=2*PI
export const frames=24,delay=70
const C=[[0,[28,1],[40,0],[22,0]],[1,[22,1],[58,0]],[2,[30,0],[18,1],[36,0]],[2,[46,0],[26,0]],[1,[16,1],[40,0]],[0,[12,1]],[0,[34,1],[50,0]]]
export default(c,t)=>{
  const x=128+74*sin(T*t),y=148+44*sin(2*T*t),h=atan2(88*cos(2*T*t),74*cos(T*t)),r=min(6,max(0,round((y-88)/20))),st=sin(T*t*8)
  c.beginPath();c.roundRect(16,36,224,188,14);c.fill();c.stroke()
  c.beginPath();c.moveTo(16,64);c.lineTo(240,64);c.stroke()
  c.lineWidth=4;for(const k of[0,1,2])c.beginPath(),c.arc(36+k*18,50,5,0,T),k?c.stroke():(c.fillStyle='#111',c.fill(),c.stroke())
  c.fillStyle='#ddd';c.beginPath();c.roundRect(26,79+r*20,204,18,5);c.fill()
  C.forEach(([n,...s],k)=>{
    const y=88+k*20;let x=60+n*18
    c.lineWidth=8;c.strokeStyle='#bbb';c.beginPath();c.moveTo(34,y);c.lineTo(42,y);c.stroke()
    for(const[l,d]of s)c.strokeStyle=d?'#111':'#aaa',c.beginPath(),c.moveTo(x,y),c.lineTo(x+l,y),c.stroke(),x+=l+12
  })
  c.strokeStyle='#111';c.lineWidth=3;c.beginPath();for(let k=0;k<=30;k++)c.lineTo(60+k*4,88+r*20+10+(k%2?2:-2));c.stroke()
  c.translate(x,y);c.rotate(h);c.scale(1.25,1.25)
  c.lineWidth=4.5
  for(const s of[-1,1])for(const k of[-1,0,1]){const g=(k+s)%2?st:-st;c.beginPath();c.moveTo(k*9,s*10);c.lineTo(k*12+g*6,s*22);c.lineTo(k*16+g*7,s*28);c.stroke()}
  for(const s of[-1,1]){c.beginPath();c.moveTo(26,s*5);c.quadraticCurveTo(36,s*8,40,s*16+st*2*s);c.stroke()}
  c.fillStyle='#111';c.lineWidth=6;c.beginPath();c.arc(22,0,11,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(-2,0,23,18,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(14,0);c.lineTo(-22,0);c.stroke()
  c.fillStyle='#fff';for(const[a,b,r]of[[2,-9,4],[-12,-8,3],[2,9,4],[-12,8,3]])c.beginPath(),c.arc(a,b,r,0,T),c.fill()
  for(const s of[-1,1])c.beginPath(),c.arc(26,s*5,4,0,T),c.fill();c.fillStyle='#111';for(const s of[-1,1])c.beginPath(),c.arc(28,s*5,2,0,T),c.fill()
}
