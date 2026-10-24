// a stressed speed gauge's needle climbs and jitters in the hatched red zone while the dial trembles, steams and flashes alert lines, then drops back and climbs again
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const X=128,Y=146,A=PI*5/6,SW=PI*4/3,ang=v=>A+SW*v
export default(c,t,i)=>{
  const hot=t>=.4&&t<.72,v=t<.4?.06+.82*(t/.4)**2:hot?.9+(i%2?.05:-.03):.06+.84*(1-ease((t-.72)/.14))
  if(hot){
    for(const d of[-1,1])for(const a of[-.45,0,.45])ln(c,11,()=>{const b=-PI/2+d*(1.2+a*.4),r=i%2?5:0;c.moveTo(X+cos(b)*(104+r),Y+sin(b)*(104+r));c.lineTo(X+cos(b)*(120+r),Y+sin(b)*(120+r))})
    c.translate(i%2?3:-3,i%3-1)
  }
  c.lineWidth=7;c.beginPath();c.arc(X,Y,92,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(X,Y,80,0,T);c.stroke()
  c.save();c.beginPath();c.arc(X,Y,74,ang(.72),ang(1));c.arc(X,Y,54,ang(1),ang(.72),true);c.closePath();c.clip()
  c.lineWidth=5;for(let x=40;x<240;x+=11)c.beginPath(),c.moveTo(x,20),c.lineTo(x-60,120),c.stroke()
  c.restore();c.lineWidth=5;c.beginPath();c.arc(X,Y,74,ang(.72),ang(1));c.arc(X,Y,54,ang(1),ang(.72),true);c.closePath();c.stroke()
  for(let k=0;k<=8;k++){const a=ang(k/8),r=k%2?66:58;c.lineWidth=k%2?4:6;c.beginPath();c.moveTo(X+cos(a)*r,Y+sin(a)*r);c.lineTo(X+cos(a)*74,Y+sin(a)*74);c.stroke()}
  const a=ang(v)
  c.fillStyle='#111';c.beginPath();c.moveTo(X+cos(a)*68,Y+sin(a)*68);c.lineTo(X+cos(a+PI/2)*8,Y+sin(a+PI/2)*8);c.lineTo(X-cos(a)*14,Y-sin(a)*14);c.lineTo(X+cos(a-PI/2)*8,Y+sin(a-PI/2)*8);c.closePath();c.fill()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(X,Y,12,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.lineWidth=5
  if(hot){
    for(const d of[-1,1])c.beginPath(),c.moveTo(X+d*24,180),c.lineTo(X+d*14,186),c.lineTo(X+d*24,192),c.stroke()
    c.beginPath();for(let k=0;k<=6;k++)c.lineTo(X-15+k*5,206+(k%2?-3:3));c.stroke()
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(X+40,170);c.bezierCurveTo(X+34,182,X+36,190,X+42,190);c.bezierCurveTo(X+48,190,X+50,182,X+40,170);c.fill();c.stroke()
  }else{
    const w=v>.5?8:6
    for(const d of[-1,1])c.beginPath(),c.arc(X+d*18,186,w*.75,0,T),c.fill()
    c.beginPath();v>.5?c.ellipse(X,204,6,5,0,0,T):c.arc(X,200,8,PI*.15,PI*.85);v>.5?c.fill():c.stroke()
  }
  if(hot)for(const d of[-1,1])for(const o of[0,.5]){const p=((t-.4)/.32*2+o)%1;c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(X+d*(56+14*p),Y-74-36*p,6+9*p,0,T);c.fill();c.stroke()}
}
