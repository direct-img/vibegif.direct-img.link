// rock golem stomping in place: stacked boulders, glowing slit eyes, each stomp gives a little bounce
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const sd=t<.5?-1:1,u=(t*2)%1,lift=u<.55?22*sin(PI*u/.55):0,bo=u>.55?5*sin(PI*min(1,(u-.55)/.3)):0
  const bx=128-sd*4*sin(PI*min(1,u/.55)),by=134+bo
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=8
  const rock=(x,y,rx,ry,s)=>{c.beginPath()
    for(let k=0;k<8;k++){const a=k*T/8+.2*sin(s*3+k),q=1+.1*sin(s*5+k*2.1);c.lineTo(x+rx*q*cos(a),y+ry*q*sin(a))}
    c.closePath();c.fill();c.stroke()}
  rock(106,200-(sd<0?lift:0),18,22,1);rock(150,200-(sd>0?lift:0),18,22,2)
  rock(bx,by,50,44,3);rock(bx,by-58,26,22,4)
  for(const d of[-1,1]){const sw=d*sd*3*sin(PI*u)
    rock(bx+d*58,by-28,20,16,5+d);rock(bx+d*78,by+2+sw,15,20,8+d);rock(bx+d*80,by+36+sw,20,18,11+d)}
  c.strokeStyle='#fff';c.lineWidth=5
  for(const d of[-1,1])c.beginPath(),c.moveTo(bx+d*5,by-58),c.lineTo(bx+d*15,by-61),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(bx-6,by-14);c.lineTo(bx+4,by-4);c.lineTo(bx-4,by+6);c.lineTo(bx+6,by+16);c.stroke()
}
