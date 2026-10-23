// manga rokurokubi girl in a toned kimono: her neck stretches up into a playful loop, head tilting with a teehee wink, then it slurps back down
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
// soft droopy eye with a long lower lash
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,14,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+4,10.5,12,0,0,T);c.clip();c.fillStyle='#111';c.fillRect(x-12,y-10,24,26);c.fillStyle=tn;c.beginPath();c.ellipse(x,y+10,9,6,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y,4,0,T);c.fill();c.beginPath();c.arc(x+4,y+9,1.8,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-d*15,y-4);c.quadraticCurveTo(x,y-12,x+d*15,y-2);c.lineTo(x+d*19,y+3);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-d*6,y+20);c.lineTo(x+d*8,y+19);c.stroke()
}
// crosshatch inside whatever path is current
const hatch=(c,x0,y0,w,h)=>{c.save();c.clip();c.lineWidth=1.6;c.beginPath();for(let k=-h;k<w;k+=6)c.moveTo(x0+k,y0+h),c.lineTo(x0+k+h,y0);for(let k=0;k<w+h;k+=6)c.moveTo(x0+k,y0+h),c.lineTo(x0+k-h,y0);c.stroke();c.restore()}
const head=(c,tn,wink)=>{
  // bun with crossed kanzashi pins and a dangling flower charm
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.arc(150,40,26,0,T);c.fill();hatch(c,120,10,60,60);c.beginPath();c.arc(150,40,26,0,T);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(118,20);c.lineTo(186,58);c.moveTo(186,18);c.lineTo(122,60);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(186,58);c.lineTo(190,78);c.stroke();c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<5;k++){const a=k*T/5;c.beginPath();c.arc(190+5*cos(a),84+5*sin(a),4,0,T);c.fill();c.stroke()}
  // hatched hair shell, then face, then blunt hatched bangs and side locks
  c.lineWidth=6;c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,70,86,40,128,40);c.bezierCurveTo(170,40,204,70,186,150);c.closePath();c.fill();hatch(c,50,36,156,118);c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,70,86,40,128,40);c.bezierCurveTo(170,40,204,70,186,150);c.closePath();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fillStyle='#fff';c.fill();c.stroke()
  if(wink){c.lineWidth=5;c.beginPath();c.moveTo(92,134);c.lineTo(112,141);c.lineTo(92,148);c.stroke();eye(c,153,138,1,tn)}
  else{eye(c,103,138,-1,tn);eye(c,153,138,1,tn)}
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  if(wink){c.lineWidth=3.5;c.fillStyle='#111';c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(128,176,138,166);c.closePath();c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(133,174,5,6,.3,0,T);c.fill();c.stroke()}
  else{c.lineWidth=3.5;c.beginPath();c.arc(128,164,6,.2*PI,.8*PI);c.stroke()}
  const bangs=()=>{c.beginPath();c.moveTo(72,140);c.bezierCurveTo(60,80,90,46,128,46);c.bezierCurveTo(166,46,196,80,184,140);c.lineTo(178,108);c.lineTo(78,108);c.closePath()}
  c.lineWidth=6;c.fillStyle='#fff';bangs();c.fill();bangs();hatch(c,56,40,144,104);bangs();c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*52,104);c.quadraticCurveTo(128+d*62,140,128+d*56,170);c.lineTo(128+d*48,160);c.quadraticCurveTo(128+d*50,130,128+d*44,108);c.closePath();c.fill();c.stroke()}
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  const e=ease((t-.08)/.3)-ease((t-.72)/.22),wb=e>.95?sin((t-.38)/.34*T*2)*.12:0
  const hx=128-34*e+20*wb,hy=160-96*e,tl=-.25*e+wb
  // kimono shoulders with a crossed white collar and toned sleeves
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(104,206);c.quadraticCurveTo(52,212,40,256);c.lineTo(216,256);c.quadraticCurveTo(204,212,152,206);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle=tn;c.fillRect(30,200,196,60);c.restore();c.stroke()
  // the neck: a long tube from the collar up to her chin, curling into a loop as it stretches
  const bx=128,by=214,ex=hx+tl*-30,ey=hy+38
  // straight line plus a circling offset: once it's long enough the offset outruns it and ties a loop
  const B=26*e,neck=()=>{c.beginPath();for(let k=0;k<=40;k++){const s=k/40,a=T*s+PI;c.lineTo(bx+(ex-bx)*s+B*(cos(a)+1)*1.1,by+(ey-by)*s+B*sin(a)*1.25)}}
  for(const[l,s]of[[20,'#111'],[12,'#fff']])c.lineWidth=l,c.strokeStyle=s,neck(),c.stroke()
  c.strokeStyle='#111'
  if(e>.2&&e<.95){c.lineWidth=3;c.beginPath();for(const d of[-1,1])c.moveTo(bx+d*20,by-40*e),c.quadraticCurveTo(bx+d*30,by-56*e,bx+d*22,by-72*e);c.stroke()}
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(108,206);c.lineTo(128,240);c.lineTo(148,206);c.lineTo(138,206);c.lineTo(128,224);c.lineTo(118,206);c.closePath();c.fill();c.stroke()
  // head rides on top of the neck
  c.save();c.translate(hx,hy);c.rotate(tl);c.scale(.6,.6);c.translate(-128,-120);head(c,tn,e>.9);c.restore()
  // sparkles while she's up
  if(e>.9){c.fillStyle='#fff';c.lineWidth=2.5;for(const[x,y,r]of[[hx+56,hy-34,7],[hx-60,hy-10,5]]){const s=r*(.6+.4*sin(t*T*6));c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?s*.35:s;c.lineTo(x+q*cos(a),y+q*sin(a))}c.closePath();c.fill();c.stroke()}}
}
