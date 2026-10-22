// faucet with a drop swelling at the spout, letting go, and splashing into a puddle with a ripple
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
export default(c,t)=>{
  const X=170,ty=150,py=222
  c.lineWidth=7
  c.beginPath();c.ellipse(X,py,62,14,0,0,T);c.fill();c.stroke()
  if(t>=.62){const p=(t-.62)/.38;c.lineWidth=5;c.beginPath();c.ellipse(X,py,10+44*p,2+9*p,0,0,T);c.stroke()
    if(p<.7)for(const d of[-1,1]){const q=p/.7;c.lineWidth=6;c.beginPath();c.arc(X+d*(10+26*q),py-8-44*4*q*(1-q),7*(1-q*.4),0,T);c.fill();c.stroke()}}
  for(const[w,s]of[[52,'#111'],[38,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(44,96),c.lineTo(126,96),c.quadraticCurveTo(X,96,X,132),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.roundRect(X-26,126,52,20,7);c.fill();c.stroke()
  c.beginPath();c.roundRect(20,56,28,80,9);c.fill();c.stroke()
  c.beginPath();c.moveTo(92,70);c.lineTo(92,46);c.stroke()
  for(const[w,s]of[[24,'#111'],[10,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(60,40),c.lineTo(124,40),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111';c.beginPath();c.arc(92,40,11,0,T);c.fill();c.stroke()
  const drop=(y,r,s)=>{c.beginPath();c.moveTo(X,y-r*s);c.quadraticCurveTo(X+r*.9,y-r*.4,X+r,y);c.arc(X,y,r,0,PI);c.quadraticCurveTo(X-r*.9,y-r*.4,X,y-r*s);c.lineWidth=6;c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(X-r*.38,y-r*.05,r*.2,0,T);c.fill();c.fillStyle='#fff'}
  if(t<.46){const g=t/.46,r=6+10*g;drop(ty+r*.5+6*g,r,1.5+.9*g)}
  else if(t<.62){const f=(t-.46)/.16;drop(ty+20+(py-12-ty-20)*f*f,15,2.2)}
  else drop(ty+3,6,1.4)
}
