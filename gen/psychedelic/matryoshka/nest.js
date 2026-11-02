// psychedelic matryoshka (russian nesting doll) with a rippling rainbow apron rocks, cracks open, its halves fly off in a burst of sparkles and the smaller color-shifting doll inside hops out and grows into its place, nesting forever
export const frames=24,delay=70
const{PI,sin,cos,sqrt,exp,log,max,min,floor}=Math,TAU=2*PI
const H=224,hs=100,e=7,r=.6,b=8,G=246
const sm=x=>(x=x<0?0:x>1?1:x,x*x*(3-2*x))
const W=h=>{
  const a=76*sqrt(max(0,1-((h-60)/110)**2)),d=54*sqrt(max(0,1-((h-172)/52)**2))
  return log(exp(.3*a)+exp(.3*d))/.3
}
const R=[...Array(61)].map((_,j)=>{const h=H*sin(j/60*PI/2);return[W(h),-h]}),ws=W(hs),w0=W(0)
const hsl=(h,s=92,l=56)=>`hsl(${(h%360+360)%360},${s}%,${l}%)`
const arc=c=>{for(let j=0;j<=20;j++){const x=ws*(j/10-1);c.lineTo(x,-hs+e*sqrt(max(0,1-(x/ws)**2)))}}
// p: 0 whole, 1 top half, 2 bottom half
const path=(c,p)=>{
  const u=R.filter(q=>p==1?-q[1]>hs:p==2?-q[1]<hs:1),d=[...u].reverse()
  c.beginPath()
  if(p)c.moveTo(ws,-hs)
  ;(p==2?d:u).forEach(q=>c.lineTo(...q))
  ;(p==2?u:d).forEach(q=>c.lineTo(-q[0],q[1]))
  if(p)c.lineTo(-ws,-hs),arc(c)
  c.closePath()
}
const ell=(c,x,y,a,b2)=>{c.beginPath();c.ellipse(x,y,a,b2,0,0,TAU)}
const art=(c,h,t)=>{
  const m=floor(t*6),f=t*6-m
  c.fillStyle=hsl(h);c.fillRect(-90,-240,180,250)
  // scarf with a wavy hem
  c.beginPath();c.moveTo(-90,-240);c.lineTo(90,-240)
  for(let x=90;x>=-90;x-=5)c.lineTo(x,-128+14*cos(x/90*PI/2)+3*sin(x/7))
  c.fillStyle=hsl(h+150,90,50);c.fill();c.lineWidth=4;c.stroke()
  for(let k=0;k<12;k++){
    const q=k/12*TAU+t*TAU/6
    ell(c,52*cos(q),-170+50*sin(q),5,5);c.fillStyle=hsl(h+60*k+480*t);c.fill();c.lineWidth=2.5;c.stroke()
  }
  // apron of rainbow petal ripples flowing out
  c.save();ell(c,0,-60,50,48);c.clip()
  for(let j=9;j>=0;j--){
    const p=(j+f)*.19
    c.beginPath()
    for(let a=0;a<=96;a++){
      const q=a/96*TAU,s=p*(1+.13*sin(6*q+3*p-t*TAU))
      c.lineTo(50*s*cos(q),-60+48*s*sin(q))
    }
    c.fillStyle=hsl(h+60*((j-m+60)%6));c.fill()
  }
  for(let k=0;k<6;k++){
    c.save();c.translate(0,-60);c.rotate(k*TAU/6-t*TAU/3)
    ell(c,0,-11,5,9);c.fillStyle='#fff';c.fill();c.lineWidth=2.5;c.stroke();c.restore()
  }
  ell(c,0,-60,6,6);c.fillStyle='#111';c.fill()
  c.restore()
  ell(c,0,-60,50,48);c.lineWidth=4;c.stroke()
  // lacquer shine
  c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=5
  c.beginPath();c.ellipse(0,-174,40,42,0,PI*1.1,PI*1.3);c.stroke()
  c.beginPath();c.ellipse(0,-58,64,80,0,PI*.88,PI*1.08);c.stroke()
  c.strokeStyle='#111'
  // face
  ell(c,0,-168,31,35);c.fillStyle='#ffe3cf';c.fill()
  c.save();c.clip()
  c.beginPath();c.moveTo(-40,-210);c.lineTo(40,-210);c.lineTo(40,-176)
  c.quadraticCurveTo(14,-178,0,-196);c.quadraticCurveTo(-14,-178,-40,-176)
  c.fillStyle='#3a1630';c.fill();c.restore()
  ell(c,0,-168,31,35);c.lineWidth=3.5;c.stroke()
  for(const s of[-1,1]){
    ell(c,s*12,-164,7.5,8.5);c.fillStyle='#fff';c.fill()
    ell(c,s*12,-163,5.5,6);c.fillStyle=hsl(h+200+120*sin(t*TAU));c.fill()
    ell(c,s*12,-163,2.6,2.8);c.fillStyle='#111';c.fill()
    ell(c,s*12,-164,7.5,8.5);c.lineWidth=2.5;c.stroke()
    ell(c,s*19,-150,5,4);c.fillStyle='#ff5c8a';c.fill()
  }
  c.beginPath();c.moveTo(-6,-145);c.quadraticCurveTo(0,-140,6,-145);c.quadraticCurveTo(0,-136,-6,-145)
  c.fillStyle='#e0123c';c.fill();c.lineWidth=2;c.stroke()
}
const T=(c,o)=>{c.translate(o.x,o.y);c.rotate(o.a||0);c.scale(o.s*(o.sx||1),o.s*(o.sy||1));c.translate(0,o.p||0)}
const doll=(c,o,p,h,t)=>{
  c.save();T(c,o);path(c,p);c.clip();art(c,h,t);c.restore()
  c.save();T(c,o);path(c,p);c.lineWidth=7/o.s**.5;c.stroke()
  if(!p){c.beginPath();arc(c);c.lineWidth=4;c.stroke()}
  c.restore()
}
export default(c,t,i)=>{
  const z=sm((t-.42)/.43),S1=r**(1-z),S0=S1/r,h0=320-140*z
  const hop=t>.45&&t<.85?44*sin(PI*(t-.45)/.4):0
  const x=(t-.42)/.2,q=(t-.85)/.15,sq=q>0?.1*sin(TAU*q)*(1-q):0
  const Y1=G-b*(1-z),Yb=Y1+b*S0,Ys=Yb-hs*S0
  if(t<.3){
    const a=.12*sin(t/.3*TAU)*sin(t/.3*PI),px=(a>0?1:-1)*w0*.9
    c.translate(128+px,G);c.rotate(a);c.translate(-px,0)
    return doll(c,{x:0,y:0,s:1},0,h0,t)
  }
  const cr=t<.42,u=cr?7*sm((t-.3)/.05):7+300*x*x,D=cr?0:300*x*x
  const B={x:128,y:Ys+D,s:S0,a:cr?0:.35*x,p:hs}
  // rainbow sparkles burst out of the crack
  if(!cr&&t<.72)for(let k=0;k<9;k++){
    const a=-PI/2+(k/8-.5)*3.4,d=(t-.42)*(400+150*(k%3)),s=11*sin(PI*min(1,(t-.4)/.33))
    c.save();c.translate(128+d*cos(a),Ys-12+d*sin(a));c.rotate(t*9+k)
    c.beginPath()
    for(let j=0;j<8;j++){const v=j%2?s*.35:s*1.5;c.lineTo(v*cos(j*PI/4),v*sin(j*PI/4))}
    c.closePath();c.fillStyle=hsl(k*47+600*t,100,60);c.lineWidth=2.5;c.stroke();c.fill();c.restore()
  }
  if(t<.62){
    c.save();T(c,B)
    ell(c,0,-hs,ws,e);c.fillStyle='#f6d7a7';c.fill()
    ell(c,0,-hs+1,ws-5,e-2.5);c.fillStyle='#1c0b26';c.fill()
    ell(c,0,-hs,ws,e);c.lineWidth=4;c.stroke();c.restore()
  }
  doll(c,{x:128,y:Y1-hop,s:S1,sx:1+sq,sy:1-sq},0,h0+140,t)
  if(t<.62){
    doll(c,B,2,h0,t)
    doll(c,{x:128+(cr?(i%2?2:-2):-20*x),y:Ys-u,s:S0,a:cr?(i%2?.02:-.02):-.45*x,p:hs},1,h0,t)
  }
}
