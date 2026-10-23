// snow globe gets a shake, snow swirls around a tiny house and pine inside, then drifts down and settles
// each flake lifts off its resting spot, swirls, and lands back on the same spot, so the loop is seamless
const{sin,cos,PI,abs,min}=Math,T=2*PI
export const frames=24,delay=70
const GL='#d0ebff',BS='#a9744f',BAND='#ffd43b',RF='#ff6b6b',WL='#ffd8a8',WIN='#ffd43b',PN='#51cf66',BR='#8d6346'
const F=[...Array(14)].map((_,j)=>({gx:62+j*9.6,gy:178-(j%3)*5,r:24+(j*37)%56,q:j*2.4}))
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  const u=t/.32,sh=t<.32?.15*sin(PI*u)*sin(3*T*u):0,cx=128,cy=108,R=90
  if(abs(sh)>.05){const d=sh>0?1:-1;for(const r of[104,118])for(const[w,s]of[[10,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,140,r,d>0?-.3:PI-.3,d>0?.3:PI+.3),c.stroke()}
  c.strokeStyle='#111';c.save();c.translate(128,240);c.rotate(sh);c.translate(-128,-240)
  const glob=()=>{c.beginPath();c.arc(cx,cy,R,0,T)}
  glob();c.fillStyle=GL;c.fill()
  c.save();glob();c.clip()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(128,192,100,32,0,0,T);c.fill();c.stroke()
  c.fillStyle=BR;c.lineWidth=5;c.beginPath();c.rect(162,150,10,14);c.fill();c.stroke()
  for(const[w,y0,h]of[[28,154,28],[22,134,26],[16,114,24]]){c.fillStyle=PN;c.beginPath();c.moveTo(167-w,y0);c.lineTo(167,y0-h);c.lineTo(167+w,y0);c.closePath();c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.moveTo(167-w*.4,y0-h*.6);c.lineTo(167,y0-h);c.lineTo(167+w*.4,y0-h*.6);c.quadraticCurveTo(167,y0-h*.45,167-w*.4,y0-h*.6);c.fill()}
  c.fillStyle=WL;c.beginPath();c.rect(80,128,46,36);c.fill();c.stroke()
  c.fillStyle=BR;c.beginPath();c.rect(110,96,10,20);c.fill();c.stroke()
  c.fillStyle=RF;c.beginPath();c.moveTo(72,132);c.lineTo(103,102);c.lineTo(134,132);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(84,120);c.lineTo(103,102);c.lineTo(122,120);c.quadraticCurveTo(103,112,84,120);c.fill();c.stroke()
  c.fillStyle=WIN;c.beginPath();c.rect(86,138,14,12);c.fill();c.stroke();c.fillStyle=BR;c.beginPath();c.rect(106,144,12,20);c.fill();c.stroke()
  for(const f of F){
    const sw=k=>[cx+f.r*cos(f.q+k*T*1.6),cy-8+f.r*.85*sin(f.q+k*T*1.6)]
    let x,y,rr
    if(t<.12){const b=sm(t/.12),[sx,sy]=sw(t);x=f.gx+(sx-f.gx)*b;y=f.gy+(sy-f.gy)*b;rr=min(1,b*4)}
    else if(t<.4){[x,y]=sw(t);rr=1}
    else{const e=sm((t-.4)/.6),[sx,sy]=sw(.4);x=sx+(f.gx-sx)*e+8*(1-e)*sin(e*T*2+f.q);y=sy+(f.gy-sy)*e;rr=min(1,(1-e)*5)}
    if(rr>.05){c.fillStyle='#fff';c.lineWidth=2;c.beginPath();c.arc(x,y,3.8*rr,0,T);c.fill();c.stroke()}
  }
  c.restore()
  c.strokeStyle='#fff';c.lineWidth=8;c.beginPath();c.arc(cx,cy,R-16,PI*1.08,PI*1.38);c.stroke();c.lineWidth=6;c.beginPath();c.arc(cx,cy,R-16,PI*1.45,PI*1.53);c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;glob();c.stroke()
  c.fillStyle=BS;c.beginPath();c.moveTo(64,184);c.lineTo(192,184);c.lineTo(210,240);c.lineTo(46,240);c.closePath();c.fill();c.stroke()
  c.fillStyle=BAND;c.beginPath();c.moveTo(58,202);c.lineTo(198,202);c.lineTo(203,218);c.lineTo(53,218);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.restore()
}
