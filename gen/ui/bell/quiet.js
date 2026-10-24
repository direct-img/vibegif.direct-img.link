// notification bell fast asleep, no badge, gently rocking and breathing with a snot bubble while Zzz float up
const{sin,PI,max}=Math,T=2*PI
export const frames=20,delay=90
export default(c,t)=>{
  const D=(f,a=13,b=5)=>{for(const[w,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  for(const k of[0,1,2]){
    const p=(t+k/3)%1,s=(6+10*p)*max(0,sin(PI*p))**.4,x=164+54*p+6*sin(T*p),y=108-84*p
    if(s>1)D(()=>{c.moveTo(x-s,y-s);c.lineTo(x+s,y-s);c.lineTo(x-s,y+s);c.lineTo(x+s,y+s)},s>8?14:12,s>8?6:5)
  }
  const br=sin(T*t),S=1.1
  c.translate(108,36);c.rotate(.04*br);c.scale(S,S*(1+.02*br));c.lineWidth=7/S
  c.beginPath();c.arc(0,160,13,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(0,4,10,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(-46,128);c.bezierCurveTo(-46,86,-42,16,0,14);c.bezierCurveTo(42,16,46,86,46,128);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(-60,122,120,20,10);c.fill();c.stroke()
  c.lineWidth=5/S;c.beginPath();c.moveTo(-28,40);c.quadraticCurveTo(-34,62,-35,84);c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(d*16,78,7,.1*PI,.9*PI),c.stroke()
  c.fillStyle='#ddd';for(const d of[-1,1])c.beginPath(),c.ellipse(d*25,92,6,4,0,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(0,100,4.5,3.5+.8*br,0,0,T);c.fill()
  const b=5+6*(1+br)/2;c.fillStyle='#fff';c.lineWidth=4/S;c.beginPath();c.arc(8+b*.8,102,b,0,T);c.fill();c.stroke()
  c.lineWidth=2.5/S;c.beginPath();c.arc(8+b*.8-b*.35,102-b*.35,b*.35,PI,1.5*PI);c.stroke()
}
