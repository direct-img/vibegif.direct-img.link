// snail inching along in place: body stretches and bunches up, shell rocks, eye stalks wobble
const{sin,cos,PI}=Math,T=2*PI
export const delay=90
export default(c,t)=>{
  const f=196+12*sin(t*T),b=56+12*sin(t*T-1.4),w=3*sin(2*T*t)
  for(const[l,s,r]of[[38,'#111',26],[24,'#fff',19]]){
    c.lineWidth=l;c.strokeStyle=c.fillStyle=s
    c.beginPath();c.moveTo(b,210);c.lineTo(f-14,210);c.quadraticCurveTo(f,208,f,180);c.stroke()
    c.beginPath();c.arc(f,172,r,0,T);c.fill()
  }
  c.lineWidth=7;c.strokeStyle='#111';c.fillStyle='#fff'
  const sx=(b+f)/2-14,sy=150+2*sin(2*T*t),r=.08*sin(t*T-.7)
  c.beginPath();c.arc(sx,sy,50,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();for(let a=0;a<3.6*PI;a+=.1)c.lineTo(sx+(4+a*3.6)*cos(a+r*6),sy+(4+a*3.6)*sin(a+r*6));c.stroke()
  for(const[x0,x1,y1]of[[f-8,f-16+w,118],[f+6,f+14-w,122]]){
    for(const[l,s]of[[12,'#111'],[5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,160),c.lineTo(x1,y1),c.stroke()
    c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.arc(x1,y1,8,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x1+2,y1,4,0,T);c.fill();c.fillStyle='#fff'
  }
  c.beginPath();c.arc(f+4,174,9,.1*PI,.7*PI);c.stroke()
}
