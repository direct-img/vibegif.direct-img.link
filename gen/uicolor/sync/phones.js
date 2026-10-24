// two smiling phones tossing a file back and forth in a high arc, each one hopping as it catches, sync arrows spinning between them
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=80
const PL='#9775fa',PR='#ff8787',SC='#e7f5ff',FL='#fff',FC='#ffd43b',AR='#51cf66',BL='#ffa8a8'
const ease=u=>u*u*(3-2*u)
const phone=(c,x,col,tilt,hop,open)=>{
  c.save();c.translate(x,236-hop);c.rotate(tilt)
  c.fillStyle=col;c.beginPath();c.roundRect(-38,-148,76,148,18);c.fill();c.stroke()
  c.fillStyle=SC;c.lineWidth=5;c.beginPath();c.roundRect(-28,-132,56,116,9);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(-10,-144,20,5,2.5);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*12,-50,4.5,6,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*12-1.5,-52.5,1.8,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*20,-38,5.5,3.5,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath()
  if(open)c.fillStyle='#ff8787',c.moveTo(-6,-40),c.quadraticCurveTo(0,-26,6,-40),c.closePath(),c.fill()
  else c.arc(0,-42,6,.15*PI,.85*PI)
  c.stroke();c.restore();c.lineWidth=7
}
const file=(c,x,y,r)=>{
  c.save();c.translate(x,y);c.rotate(r);c.lineWidth=5
  c.fillStyle=FL;c.beginPath();c.moveTo(-18,-24);c.lineTo(8,-24);c.lineTo(18,-14);c.lineTo(18,24);c.lineTo(-18,24);c.closePath();c.fill();c.stroke()
  c.fillStyle=FC;c.beginPath();c.moveTo(8,-24);c.lineTo(8,-14);c.lineTo(18,-14);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#4dabf7';c.lineWidth=4;c.beginPath();for(const y of[-8,2,12])c.moveTo(-9,y),c.lineTo(9,y);c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=7
}
export default(c,t)=>{
  const h=t<.5?0:1,u=((t*2)%1),fly=u<.72,f=fly?ease(u/.72):1,dir=h?-1:1
  const x0=h?198:58,x1=h?58:198,fx=x0+(x1-x0)*f,fy=148-110*sin(PI*f),land=fly?0:(u-.72)/.28
  const ca=fly?0:sin(PI*land)
  phone(c,58,PL,-.1,h?ca*10:0,h&&!fly)
  phone(c,198,PR,.1,h?0:ca*10,!h&&!fly)
  c.save();c.translate(128,186);c.rotate(-T*t*2)
  for(let k=0;k<2;k++){c.rotate(PI);for(const[w,s]of[[12,'#111'],[5,AR]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(0,0,20,.25,PI-.5),c.stroke();c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=AR;c.beginPath();const ex=cos(PI-.5)*20,ey=sin(PI-.5)*20;c.moveTo(ex-9,ey-4);c.lineTo(ex+3,ey-9);c.lineTo(ex+3,ey+5);c.closePath();c.fill();c.stroke()}
  c.restore();c.lineWidth=7
  if(fly&&f>.06&&f<.94)for(let k=1;k<=3;k++){const g=max(0,f-k*.07),gx=x0+(x1-x0)*g,gy=148-110*sin(PI*g);c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(gx,gy,5-k,0,T);c.fill();c.stroke()}
  file(c,fx+(fly?0:dir*ca*1),fy-ca*10,dir*.5*sin(PI*f)*(fly?1:0))
}
