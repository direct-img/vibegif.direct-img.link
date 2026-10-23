// soccer ball kicked spinning into the goal, the net bulging back around it, then a fresh ball bounces in to start again
const{sin,cos,PI,abs,max,min,exp,hypot}=Math,T=2*PI
export const frames=24,delay=70
const GR='#69db7c',GRD='#51cf66',NET='#adb5bd'
const ball=(c,x,y,r,a)=>{
  if(r<1)return
  c.save();c.translate(x,y);c.rotate(a)
  c.fillStyle='#fff';c.beginPath();c.arc(0,0,r,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#111'
  const pent=(px,py,s)=>{c.beginPath();for(let k=0;k<5;k++){const b=k*T/5-PI/2;c.lineTo(px+cos(b)*s,py+sin(b)*s)}c.closePath();c.fill()}
  pent(0,0,r*.34);c.lineWidth=max(2,r*.08);c.strokeStyle='#111'
  for(let k=0;k<5;k++){const b=k*T/5-PI/2;pent(cos(b)*r*.98,sin(b)*r*.98,r*.32);c.beginPath();c.moveTo(cos(b)*r*.34,sin(b)*r*.34);c.lineTo(cos(b)*r*.7,sin(b)*r*.7);c.stroke()}
  c.restore();c.lineWidth=max(3,r*.2);c.beginPath();c.arc(0,0,r,0,T);c.stroke();c.restore()
}
const lerp=(a,b,p)=>a+(b-a)*p
export default(c,t)=>{
  // 0-.4 flight, .4-.7 net bulge and drop, .7-.82 ball pops away, .82-1 a fresh ball bounces in at the kick spot
  const S=[50,200,30],H=[178,124,17]
  let x,y,r,a=0,m=0,pop=0
  if(t<.4){const p=t/.4;x=lerp(S[0],H[0],p);y=lerp(S[1],H[1],p)-46*sin(PI*p);r=lerp(S[2],H[2],p);a=-p*T*1.5}
  else if(t<.7){const p=(t-.4)/.3;m=sin(PI*min(1,p*1.6))*(1-p*.3);x=H[0];y=lerp(H[1],178,p*p);r=H[2];a=-T*1.5-p*2}
  else if(t<.82){const p=(t-.7)/.12;x=H[0];y=178;r=H[2]*(1-p);a=0;pop=p}
  else{const p=(t-.82)/.18;x=S[0];y=S[1]-24*abs(sin(PI*p))*(1-p);r=S[2]*min(1,p*1.6)*(1+.15*sin(PI*min(1,p*1.6)));a=0}
  c.lineWidth=7;c.fillStyle=GR;c.beginPath();c.roundRect(8,192,240,52,14);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(8,192,240,52,14);c.clip();c.fillStyle=GRD;for(const sx of[40,120,200])c.fillRect(sx,192,40,52);c.restore()
  c.beginPath();c.roundRect(8,192,240,52,14);c.stroke()
  // net: grid on the back panel, each point pulled toward the impact spot while the ball pushes in
  const P=(px,py)=>{const d=hypot(px-H[0],py-H[1]),k=m*.45*exp(-d*d/1800);return[px+(H[0]-px)*k,py+(H[1]-py)*k]}
  c.strokeStyle=NET;c.lineWidth=3
  for(let gx=100;gx<=228;gx+=16){c.beginPath();for(let gy=84;gy<=194;gy+=4)c.lineTo(...P(gx,gy));c.stroke()}
  for(let gy=84;gy<=194;gy+=14){c.beginPath();for(let gx=100;gx<=228;gx+=4)c.lineTo(...P(gx,gy));c.stroke()}
  c.beginPath();for(const[ax,ay,bx,by]of[[84,70,100,84],[244,70,228,84]])c.moveTo(ax,ay),c.lineTo(bx,by);c.stroke()
  c.strokeStyle='#111'
  if(t>=.4&&t<.82)ball(c,x,y,r,a)
  if(pop>0){const s=8+18*pop;for(let k=0;k<6;k++){const b=k*T/6;for(const[w,st]of[[9,'#111'],[4,'#ffd43b']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(x+cos(b)*s,y+sin(b)*s),c.lineTo(x+cos(b)*(s+10*(1-pop)+2),y+sin(b)*(s+10*(1-pop)+2)),c.stroke()}c.strokeStyle='#111'}
  for(const[w,st]of[[16,'#111'],[8,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(84,196),c.lineTo(84,70),c.lineTo(244,70),c.lineTo(244,196),c.stroke()
  c.strokeStyle='#111'
  if(t<.4||t>=.82){c.fillStyle='#2f9e44';c.beginPath();c.ellipse(x,t<.4?lerp(226,196,t/.4):226,r*.8,r*.22,0,0,T);c.fill();ball(c,x,y,r,a)}
}
