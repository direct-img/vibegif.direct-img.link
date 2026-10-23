// jelly-cat drifting: a cat-eared jellyfish bell that pulses as it bobs, tentacles waving behind
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#ff85a8',L='#ffc2d3',D='#2b2633'
export default(c,t)=>{
  const s=sin(T*t),rx=62*(1-.07*s),ry=56*(1+.06*s),cx=128,cy=96-8*sin(T*t-1),bl=t>.72&&t<.78
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  for(const[k,col,w,len]of[[-1.5,B,7,112],[-.5,L,10,84],[.5,L,10,84],[1.5,B,7,112]]){
    c.strokeStyle=col;c.lineWidth=w;c.beginPath()
    for(let j=0;j<=14;j++){const q=j/14;c.lineTo(cx+k*rx*.4+q*k*6+12*q*sin(T*t-q*4+k),cy+10+q*len*(1+.06*s))}
    c.stroke()
  }
  for(const d of[-1,1]){
    const a=-PI/2+d*.74
    c.save();c.translate(cx+rx*cos(a),cy+ry*sin(a)+4);c.rotate(d*(.5+.06*s))
    fill(B,()=>{c.moveTo(-16,10);c.lineTo(0,-24);c.lineTo(16,10)});fill(L,()=>{c.moveTo(-6,6);c.lineTo(0,-10);c.lineTo(6,6)});c.restore()
  }
  fill(B,()=>{c.ellipse(cx,cy,rx,ry,0,PI,T);for(let i=0;i<4;i++){const x0=cx+rx-i*rx/2;c.quadraticCurveTo(x0-rx/4,cy+18,x0-rx/2,cy)}})
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.arc(cx+d*21,cy-14,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(cx+d*21,cy-12,5.5,0,T),c.fill()
  c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.arc(cx+d*4.5,cy-3,4.5,.1*PI,.9*PI),c.stroke()
}
