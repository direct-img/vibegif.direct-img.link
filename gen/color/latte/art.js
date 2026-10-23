// latte in a teal cup seen from above at an angle, a heart of foam blooming in the coffee and fading, steam curling up
const{sin,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80
const CU='#38d9a9',CD='#0ca678',SA='#fff',CO='#a9744f',CR='#c99a6e',FO='#fff4e6',BL='#ffa8a8'
const heart=(c,s)=>{c.beginPath();c.moveTo(0,s*.95);c.bezierCurveTo(-s*1.5,0,-s*.9,-s*1.05,0,-s*.45);c.bezierCurveTo(s*.9,-s*1.05,s*1.5,0,0,s*.95);c.closePath()}
export default(c,t)=>{
  c.fillStyle=SA;c.beginPath();c.ellipse(128,204,112,34,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(128,200,74,20,0,0,T);c.stroke();c.lineWidth=7
  for(const[w,s]of[[22,'#111'],[11,CU]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.ellipse(208,146,22,17,-.2,-1.2,1.6),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=CU;c.beginPath();c.moveTo(52,110);c.bezierCurveTo(56,230,200,230,204,110);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24,174,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24-2,172,2.2,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,180,8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,184,9,5,0,0,T),c.fill()
  c.lineWidth=7;c.fillStyle=CU;c.beginPath();c.ellipse(128,110,76,40,0,0,T);c.fill();c.stroke()
  c.fillStyle=CO;c.beginPath();c.ellipse(128,112,62,31,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=CR;c.beginPath();c.ellipse(128,113,50,23,0,0,T);c.fill()
  const p=t,g=min(1,p/.3),m=min(1,max(0,(p-.25)/.25)),f=p>.82?1-(p-.82)/.18:1
  if(p>.02){
    c.save();c.globalAlpha=f;c.translate(128,114);c.scale(1+.25*(1-f),.52*(1+.25*(1-f)));c.fillStyle=FO
    const rc=22*g*(1-m);if(rc>.5)c.beginPath(),c.arc(0,4,rc,0,T),c.fill()
    if(m>0){heart(c,30*m);c.fill();c.strokeStyle=CR;c.lineWidth=5;heart(c,17*m);c.stroke();c.fillStyle=FO;heart(c,11*m);c.fill()}
    c.restore();c.strokeStyle='#111'
  }
  c.lineCap='round'
  for(let k=0;k<3;k++){
    const x0=102+k*26,pts=[];for(let s=0;s<=1.001;s+=.1)pts.push([x0+7*sin(T*(s*1.1-t)+k*2),64-44*s])
    for(const[w,s]of[[9,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y])=>c.lineTo(x,y));c.stroke()}
  }
  c.strokeStyle='#111';c.lineWidth=7
}
