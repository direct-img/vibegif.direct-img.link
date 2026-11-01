// a big snowball rolling through bumpy snow, a twig turning round with it, puffs of snow kicked up behind
export const frames=30,delay=50,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const R=74,bx=136,P=T*R/3,sc=T*R*t,rot=T*t
  const gy=x=>200+5*S(T*(x+sc)/P)-15*Math.exp(-(((x-bx-R*.8)/17)**2))
  const by=gy(bx)-R+12
  const f=(col,w=6)=>{c.fillStyle=col;c.fill();c.lineWidth=w;c.strokeStyle=K;c.stroke()}
  // the snowball: lumpy edge, shading, bits stuck in it, all turning together
  const ball=()=>{c.beginPath();for(let j=0;j<=96;j++){const a=j/96*T,r=R+1.5*S(7*(a-rot))+1*S(11*(a-rot)+2);c.lineTo(bx+C(a)*r,by+S(a)*r)}}
  ball();c.fillStyle='#d4e6f5';c.fill()
  c.save();c.clip();c.beginPath();c.arc(bx-9,by-10,R-4,0,T);c.fillStyle='#fbfdff';c.fill()
  c.lineWidth=4;c.strokeStyle='#bcd6ec'
  for(const[a,d]of[[.3,40],[1.6,52],[2.7,24],[3.9,48],[5.1,34]]){const q=a+rot;c.beginPath();c.arc(bx+C(q)*d,by+S(q)*d,9,q+1,q+3.4);c.stroke()}
  c.beginPath();c.arc(bx-6,by-8,R-16,3.5,4.4);c.lineWidth=6;c.strokeStyle='#fff';c.stroke()
  // pebble
  const pa=4.6+rot;c.beginPath();c.ellipse(bx+C(pa)*30,by+S(pa)*30,8,6,pa,0,T);f('#9aa3b5',4)
  c.restore()
  // twig poking out
  const ta=1+rot,tw=d=>[bx+C(ta)*d,by+S(ta)*d],[x0,y0]=tw(44),[x1,y1]=tw(R+22),[x2,y2]=tw(R+2),[x3,y3]=[x2+C(ta-.8)*18,y2+S(ta-.8)*18]
  c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.moveTo(x2,y2);c.lineTo(x3,y3)
  c.lineWidth=11;c.strokeStyle=K;c.stroke();c.lineWidth=5;c.strokeStyle='#8a5a3b';c.stroke()
  ball();c.lineWidth=6;c.strokeStyle=K;c.stroke()
  // snowbank with bumps sliding by, pushed up in front of the ball
  const bank=()=>{c.beginPath();c.moveTo(18,224);c.quadraticCurveTo(14,gy(28),30,gy(30));for(let x=30;x<=226;x+=4)c.lineTo(x,gy(x));c.quadraticCurveTo(242,gy(226),238,224);c.quadraticCurveTo(128,252,18,224)}
  bank();c.fillStyle='#fbfdff';c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(128,250,130,26,0,0,T);c.fillStyle='#d4e6f5';c.fill()
  c.lineWidth=4;c.strokeStyle='#bcd6ec'
  for(let k=0;k<9;k++){const x=((k*P/3-sc)%(3*P)+3*P)%(3*P)-60;c.beginPath();c.moveTo(x,gy(x)+13+(k%3)*7);c.lineTo(x+12+(k%2)*8,gy(x)+13+(k%3)*7);c.stroke()}
  c.restore();bank();c.lineWidth=6;c.strokeStyle=K;c.stroke()
  // a puffy trail of kicked-up snow behind the ball, one outline around all the puffs
  const pf=[]
  for(let k=0;k<7;k++){const p=(t*3+k/7)%1,x=bx-R*.55-78*p,r=19*(p<.12?p/.12:(1-p)/.88)**.6;pf.push([x,gy(x)-6-26*p+(k%2)*6,r])}
  for(const[w,col]of[[3,K],[0,'#fbfdff']])pf.forEach(([x,y,r])=>{c.beginPath();c.arc(x,y,r+w,0,T);c.fillStyle=col;c.fill()})
  pf.forEach(([x,y,r])=>{c.beginPath();c.arc(x+r*.25,y+r*.3,r*.55,.2,2.4);c.lineWidth=3;c.strokeStyle='#cfe2f2';c.stroke()})
  // speed lines
  c.lineWidth=5;c.strokeStyle=K
  for(const[dy,l,o]of[[-44,22,0],[-12,30,.4],[20,18,.75]]){const x=bx-R-10-8*S(T*(t*3+o));c.beginPath();c.moveTo(x,by+dy);c.lineTo(x-l,by+dy);c.stroke()}
}
