// egg wobbles, then the top pops up and a chick peeks out, blinks, and ducks back in
const{sin,cos,PI,max,min,asin}=Math,T=2*PI
export const frames=24,delay=70
const X=128,Y=150,RX=62,RY=78,CY=140,a0=asin((CY-Y)/RY),L=X-RX*cos(a0),W=2*RX*cos(a0)
const zig=(c,ltr)=>{for(let k=0;k<=8;k++)c.lineTo(L+W*(ltr?k:8-k)/8,CY+(k%2?8:-8))}
export default(c,t)=>{
  const o=min(1,max(0,(t-.08)/.6)),lift=sin(PI*o),w=t>.72?.08*sin((t-.72)/.28*2*T)*sin(PI*(t-.72)/.28):0
  c.translate(X,228);c.rotate(w);c.translate(-X,-228)
  const hy=184-56*lift
  c.beginPath();c.arc(X,hy,36,0,T);c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(X+d*6,hy-36,9,d<0?PI*1.1:PI*1.5,d<0?PI*1.5:PI*1.9),c.stroke()
  c.fillStyle='#111'
  for(const d of[-1,1])
    if(o>.45&&o<.55)c.lineWidth=4,c.beginPath(),c.moveTo(X+d*14-5,hy-4),c.lineTo(X+d*14+5,hy-4),c.stroke()
    else c.beginPath(),c.arc(X+d*14,hy-4,5,0,T),c.fill()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(X-8,hy+6);c.lineTo(X+8,hy+6);c.lineTo(X,hy+15);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-4,0,4])c.beginPath(),c.moveTo(X+d*24+k-2,hy+12),c.lineTo(X+d*24+k+2,hy+6),c.stroke()
  c.lineWidth=7
  c.beginPath();c.ellipse(X,Y,RX,RY,0,a0,PI-a0);zig(c,1);c.closePath();c.fill();c.stroke()
  c.translate(L,CY);c.rotate(-.5*lift);c.translate(-L,-CY-30*lift)
  c.beginPath();c.ellipse(X,Y,RX,RY,0,PI-a0,T+a0);zig(c,0);c.closePath();c.fill();c.stroke()
}
