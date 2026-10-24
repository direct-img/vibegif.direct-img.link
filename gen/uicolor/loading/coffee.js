// smiling coffee machine drips coffee into a glass mug that fills up bit by bit, steams when full, then empties to brew again
const{sin,PI,min}=Math,T=2*PI
export const frames=24,delay=80
const BO='#ff8787',BD='#fa5252',RC='#495057',GL='#d0ebff',CO='#a9744f',CR='#e8b27a',BL='#ffc9c9',ME='#ced4da'
const ss=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
export default(c,t)=>{
  const f=ss(t/.74)-ss((t-.88)/.12),lv=204-8-62*f,brew=t<.76
  c.fillStyle=BO;c.beginPath();c.roundRect(34,14,188,226,24);c.fill();c.stroke()
  c.fillStyle=RC;c.beginPath();c.roundRect(56,88,144,124,[10,10,4,4]);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=ME;c.beginPath();c.moveTo(112,86);c.lineTo(144,86);c.lineTo(136,104);c.lineTo(120,104);c.closePath();c.fill();c.stroke()
  c.fillStyle=ME;c.beginPath();c.roundRect(48,208,160,16,6);c.fill();c.stroke()
  c.lineWidth=3;for(let x=64;x<200;x+=16)c.beginPath(),c.moveTo(x,212),c.lineTo(x,220),c.stroke()
  c.lineWidth=7
  for(const[w,s]of[[22,'#111'],[10,GL]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(166,146),c.bezierCurveTo(194,144,194,190,164,188),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  const mug=()=>{c.beginPath();c.roundRect(86,128,82,78,[4,4,16,16])}
  c.fillStyle=GL;mug();c.fill()
  c.save();mug();c.clip()
  if(f>.01){c.fillStyle=CO;c.fillRect(80,lv,96,90);c.fillStyle=CR;c.beginPath();c.ellipse(127,lv,46,4+2*sin(T*t*4),0,0,T);c.fill()}
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(100,142);c.lineTo(100,174);c.stroke()
  c.restore();mug();c.stroke()
  if(brew)for(let k=0;k<4;k++){const p=(t*8+k/4)%1,y=106+p*(lv-106);if(y<lv-6){c.fillStyle=CO;c.lineWidth=3;c.beginPath();c.moveTo(128,y-10);c.quadraticCurveTo(135,y,128,y+6);c.quadraticCurveTo(121,y,128,y-10);c.fill();c.stroke()}}
  c.lineWidth=7
  const happy=t>.76&&t<.92
  if(t>.7&&t<.94)for(let k=0;k<2;k++){const a=min(1,(t-.7)/.08)*min(1,(.94-t)/.06),pts=[];for(let s=0;s<=1;s+=.125)pts.push([116+k*24+5*sin(T*(s-t*2)+k*2),122-26*s*a]);c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();pts.forEach(([x,y])=>c.lineTo(x,y));c.stroke()}
  c.strokeStyle='#111'
  if(happy){c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*26,54,7,PI*1.15,PI*1.85),c.stroke()}
  else{c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*26,50,6.5,0,T),c.fill();c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*26-2,48,2.3,0,T),c.fill()}
  c.lineWidth=5;c.beginPath();c.arc(128,58,happy?11:8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*48,62,9,5,0,0,T),c.fill()
  c.lineWidth=4;c.fillStyle=brew&&Math.floor(t*12)%2?'#ffd43b':'#69db7c';c.beginPath();c.arc(196,36,7,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(60,36,7,0,T);c.fill();c.stroke()
}
