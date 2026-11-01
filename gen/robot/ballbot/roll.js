// ball-balancing robot rolling back and forth on one big panelled sphere, its tall body and domed head leaning into the motion, arms and antenna swinging for balance, cyan eye looking where it goes
export const frames=24,delay=60
const T=Math.PI*2
const tube=(c,pts,w,col)=>{
  for(const[lw,s]of[[w+6,'#111'],[w,col]]){
    c.lineWidth=lw;c.strokeStyle=s;c.beginPath()
    pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()
  }
}
const disc=(c,x,y,r,f,lw=4)=>{c.beginPath();c.arc(x,y,r,0,T);c.fillStyle=f;c.fill();c.lineWidth=lw;c.stroke()}
export default(c,t,i)=>{
  const R=36,A=36,s=Math.sin(T*t),v=Math.cos(T*t)
  const x=128+A*s,y=194,th=A*s/R
  const ln=-.17*Math.sin(T*t+.6),sw=Math.sin(T*t+1.3)
  // floor shadow
  c.fillStyle='#8b939c';c.beginPath();c.ellipse(x+ln*20,232,R*1.05,6,0,0,T);c.fill()
  // ball
  c.save();c.beginPath();c.arc(x,y,R,0,T);c.clip()
  c.fillStyle='#b9c3cd';c.fillRect(x-R,y-R,R*2,R*2)
  c.fillStyle='#eef2f5';c.beginPath();c.arc(x-7,y-8,R*.93,0,T);c.fill()
  c.translate(x,y);c.rotate(th)
  for(const a of[0,Math.PI/2]){
    c.save();c.rotate(a)
    c.beginPath();c.ellipse(0,0,R,R*.42,0,0,Math.PI)
    c.lineWidth=13;c.strokeStyle='#111';c.stroke()
    c.lineWidth=6;c.strokeStyle=a?'#3b8fd9':'#f28c28';c.stroke()
    c.restore()
  }
  c.fillStyle='#111'
  for(const a of[.8,2.4,3.9,5.5]){c.beginPath();c.arc(Math.cos(a)*R*.62,Math.sin(a)*R*.62,2.4,0,T);c.fill()}
  c.restore()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-14,y-17,7,4,-.6,0,T);c.fill()
  c.lineWidth=5;c.beginPath();c.arc(x,y,R,0,T);c.stroke()
  // body, leaning around the ball centre
  c.save();c.translate(x,y);c.rotate(ln)
  const H=-R
  // arms behind torso swing for balance
  const arm=(d,ph)=>{
    const a=d*.25+sw*.35*ph,sx=d*24,sy=H-48
    const ex=sx+Math.sin(a)*20,ey=sy+Math.cos(a)*20
    const hx=ex+Math.sin(a+d*.5)*18,hy=ey+Math.cos(a+d*.5)*18
    tube(c,[[sx,sy],[ex,ey],[hx,hy]],5,'#9aa6b2')
    c.strokeStyle='#111';disc(c,ex,ey,4,'#5b6672',3);disc(c,hx,hy,6,'#f28c28',4)
  }
  arm(-1,1)
  // drive collar with omni wheels
  c.beginPath();c.arc(0,0,R+9,-2.6,-.54);c.arc(0,0,R+1,-.7,-2.44,true);c.closePath()
  c.fillStyle='#3c4652';c.fill();c.lineWidth=4.5;c.strokeStyle='#111';c.stroke()
  for(const a of[-2.2,-1.57,-.94]){c.fillStyle='#8d99a6';c.beginPath();c.arc(Math.cos(a)*(R+5),Math.sin(a)*(R+5),2.2,0,T);c.fill()}
  // torso
  c.beginPath();c.moveTo(-12,H-4);c.lineTo(12,H-4);c.lineTo(24,H-52);c.quadraticCurveTo(24,H-62,14,H-62)
  c.lineTo(-14,H-62);c.quadraticCurveTo(-24,H-62,-24,H-52);c.closePath()
  c.fillStyle='#e6ebf0';c.fill()
  c.save();c.clip();c.fillStyle='#bcc6d0';c.fillRect(10,H-70,30,70);c.restore()
  c.lineWidth=5;c.stroke()
  c.beginPath();c.roundRect(-11,H-48,20,15,4);c.fillStyle='#1d2733';c.fill();c.lineWidth=3;c.stroke()
  const bl=Math.floor(t*6)%2
  c.fillStyle=bl?'#5ef2a0':'#2b8c5b';c.fillRect(-7,H-44,5,7)
  c.fillStyle='#f28c28';c.fillRect(0,H-44,5,7)
  c.lineWidth=3;c.beginPath();c.moveTo(-6,H-22);c.lineTo(6,H-22);c.moveTo(-5,H-15);c.lineTo(5,H-15);c.stroke()
  arm(1,-1)
  // neck and head
  c.lineWidth=4;c.beginPath();c.roundRect(-7,H-70,14,10,3);c.fillStyle='#5b6672';c.fill();c.stroke()
  const hy=H-72,ex=v*7
  // antenna lags behind the lean
  const aa=-.6*Math.sin(T*t+1.9)
  tube(c,[[8,hy-24],[8+Math.sin(aa)*20,hy-24-Math.cos(aa)*20]],2,'#9aa6b2')
  c.strokeStyle='#111';disc(c,8+Math.sin(aa)*22,hy-24-Math.cos(aa)*22,5,bl?'#ff5a4e':'#c33a31',3.5)
  const hd=()=>{c.beginPath();c.arc(0,hy,30,Math.PI,0);c.lineTo(30,hy+2);c.quadraticCurveTo(30,hy+8,24,hy+8)
    c.lineTo(-24,hy+8);c.quadraticCurveTo(-30,hy+8,-30,hy+2);c.closePath()}
  hd();c.fillStyle='#bcc6d0';c.fill()
  c.save();c.clip();c.fillStyle='#eef2f5';c.beginPath();c.arc(-6,hy-4,30,0,T);c.fill();c.restore()
  hd();c.lineWidth=5;c.strokeStyle='#111';c.stroke()
  c.beginPath();c.roundRect(-23,hy-17,46,16,8);c.fillStyle='#1d2733';c.fill();c.lineWidth=4;c.stroke()
  if(i%12==8){c.fillStyle='#4de3ff';c.fillRect(ex-7,hy-10,14,3)}
  else{c.fillStyle='#4de3ff';c.beginPath();c.ellipse(ex,hy-9,7,5,0,0,T);c.fill()
  c.fillStyle='#e8fdff';c.beginPath();c.arc(ex-2,hy-11,2,0,T);c.fill()}
  c.restore()
}
