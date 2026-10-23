// kraken surfacing: four tentacles rise out of a rolling wave line and curl, one big eye peeks over the water and looks around
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const W=174,wy=x=>W+4*sin(x/17-T*t),hy=W+3*sin(T*t),bl=t>.55&&t<.61
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.beginPath();c.ellipse(128,hy+8,48,68,0,PI,2*PI);c.closePath();c.fill();c.stroke()
  for(const[i,[x,d,L,b0,b1]]of[[72,-1,72,2,.55],[104,-1,128,1.2,.6],[152,1,128,1.2,.6],[184,1,72,2,.55]].entries()){
    const B=d*(b0+b1*sin(T*t+i*1.7)),N=26,P=[];let px=x,py=wy(x)+6
    for(let j=0;j<=N;j++){const s=j/N,th=-PI/2+d*(L<99?.45:.08)+B*s*s;P.push([px,py,th,13*(1-s)+2.5]);px+=cos(th)*L/N;py+=sin(th)*L/N}
    c.lineWidth=4;c.beginPath()
    for(const[x,y,th,w]of P)c.lineTo(x-sin(th)*w,y+cos(th)*w)
    for(const[x,y,th,w]of P.reverse())c.lineTo(x+sin(th)*w,y-cos(th)*w)
    c.closePath();c.fill();c.stroke();P.reverse()
    c.fillStyle='#fff'
    for(const j of[6,11,16]){const[x,y,th,w]=P[j];c.beginPath();c.arc(x-d*sin(th)*w*.45,y+d*cos(th)*w*.45,max(1.6,w*.2),0,T);c.fill()}
    c.fillStyle='#111'
  }
  c.lineWidth=7;c.beginPath();for(let x=56;x<=200;x+=4)c.lineTo(x,wy(x));c.stroke()
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.moveTo(115,hy-26),c.quadraticCurveTo(128,hy-20,141,hy-26),c.stroke()
  else{c.beginPath();c.ellipse(128,hy-28,16,10,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.arc(128+7*sin(T*t),hy-28,5.5,0,T);c.fill()}
}
