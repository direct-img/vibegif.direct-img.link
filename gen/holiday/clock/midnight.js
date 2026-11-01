// alarm clock counting down the last seconds to midnight, then ringing and hopping in a burst of confetti
export const frames=48,delay=60,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),rn=n=>(n=Math.sin(n*127.1+311.7)*43758.5453,n-Math.floor(n))
const M=.5,CX=128,CY=146,R=72
export default(c,t)=>{
  const u=t-M,ring=u>0?Math.exp(-u*4.5)*sm(u/.02)*(1-sm((t-.84)/.12)):0
  // second hand ticks round once, minute hand clicks onto 12 and slips back while the clock rattles
  const tk=cl(t/M)*12,sec=P*(Math.floor(tk)+cl((tk%1)*2.2)**.5)/12,mn=-P/60*(1-sm(u/.03)+sm((t-.82)/.12))
  // hop and squash
  const hop=hop0(u),sq=u>0?.1*Math.exp(-u*9)*Math.cos(u*34):0
  c.save();c.translate(CX,CY+R-hop);c.scale(1+sq,1-sq);c.translate(0,-R)
  const sh=ring*.06*Math.sin(u*90)+(u<0?.03*sm(t/M)**2*Math.sin(P*t*8):0)
  c.rotate(sh)
  // feet
  c.lineWidth=6;c.fillStyle='#f3bd3a'
  for(const d of[-1,1]){c.save();c.translate(d*44,R-6);c.rotate(d*.5);c.beginPath();c.roundRect(-7,-4,14,24,6);c.fill();c.stroke();c.restore()}
  // hammer and bells
  const hm=ring*.55*Math.sin(u*95)
  c.save();c.translate(0,-R+4);c.rotate(hm);c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.lineTo(0,-30);c.stroke()
  c.fillStyle='#f3bd3a';c.beginPath();c.arc(0,-32,7,0,P);c.fill();c.stroke();c.restore()
  for(const d of[-1,1]){
    c.save();c.rotate(d*.66);c.translate(0,-R-6);c.rotate(d*ring*.2*Math.sin(u*95+1));c.lineWidth=6
    const b=()=>{c.moveTo(-32,6);c.bezierCurveTo(-32,-34,32,-34,32,6);c.closePath()}
    S(c,b,'#f8c843','#d0901c',-6,-3)
    c.fillStyle='#fff3c0';c.beginPath();c.ellipse(-13,-12,4,8,-.7,0,P);c.fill()
    c.fillStyle='#f3bd3a';c.beginPath();c.arc(0,-24,6,0,P);c.fill();c.stroke()
    c.restore()
  }
  // body and face
  c.lineWidth=7
  S(c,()=>c.arc(0,0,R,0,P),'#3f72e6','#2a4fb4',-7,-6)
  c.lineWidth=6
  S(c,()=>c.arc(0,0,R-15,0,P),'#fff8e8','#e6dcc4',4,5)
  // ticks, star at twelve
  for(let j=1;j<12;j++){
    const a=j*P/12,q=j%3?0:1
    c.lineWidth=q?6:4;c.beginPath();c.moveTo(Math.sin(a)*(R-25+(q?-6:0)),-Math.cos(a)*(R-25+(q?-6:0)));c.lineTo(Math.sin(a)*(R-25),-Math.cos(a)*(R-25));c.lineTo(Math.sin(a)*(R-24.5),-Math.cos(a)*(R-24.5));c.stroke()
  }
  c.beginPath()
  for(let j=0;j<10;j++){const a=j*Math.PI/5-Math.PI/2,r=(j%2?4:9)*(1+ring*.5);c.lineTo(Math.cos(a)*r,-R+31+Math.sin(a)*r)}
  c.closePath();c.fillStyle='#ffd23f';c.lineWidth=3;c.fill();c.stroke()
  // hands
  const hand=(a,l,w,col)=>{c.save();c.rotate(a);c.beginPath();c.moveTo(0,8);c.lineTo(0,-l);c.lineWidth=w+5;c.strokeStyle='#111';c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke();c.restore()}
  hand(-.01,30,7,'#2b2b38');hand(mn,44,5,'#2b2b38')
  c.save();c.rotate(sec);c.lineWidth=3.5;c.strokeStyle='#e5413a';c.beginPath();c.moveTo(0,12);c.lineTo(0,-48);c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=3;c.fillStyle='#e5413a';c.beginPath();c.arc(0,0,6,0,P);c.fill();c.stroke()
  c.restore()
  // confetti bursting out of the top and fluttering down, twinkles
  conf(c,u,1)
  for(let j=0;j<4;j++){
    const q=(u-.04-j*.07)/.14
    if(q>0&&q<1)tw(c,[34,222,40,216][j],[118,92,196,178][j],12*Math.sin(Math.PI*q))
  }
  // ring lines beside the bells
  if(ring>.08)for(const d of[-1,1])for(let j=0;j<2;j++){
    const r=18+j*11+5*((u*8)%1)
    c.save();c.translate(CX+d*58,CY-R-14-hop);c.lineWidth=5;c.globalAlpha=Math.min(1,ring*1.8)
    c.beginPath();c.arc(0,0,r,d>0?-1.1:Math.PI-.15,d>0?.15:Math.PI+1.1);c.stroke();c.restore()
  }
}
const hop0=u=>u>0?Math.abs(Math.sin(u*12))*26*Math.exp(-u*6)*(1-sm((u-.34)/.12)):0
const S=(c,f,b,d,x,y)=>{c.beginPath();f();c.fillStyle=d;c.fill();c.save();c.clip();c.translate(x,y);c.beginPath();f();c.fillStyle=b;c.fill();c.restore();c.beginPath();f();c.stroke()}
// confetti: bursts from the top of the clock, then flutters down
const conf=(c,u,front)=>{
  for(let j=0;j<24;j++){
    const s=(u-rn(j)*.03)*2.88,p=s/.3
    if(s<=0||u>.49||!front)continue
    const ax=24+208*((j*7%24)+.5)/24+(rn(j+7)-.5)*8,ay=16+rn(j+3)*(56+56*Math.abs(ax-128)/104),f=Math.max(0,s-.3),e=1-(1-Math.min(p,1))**3
    const x=CX+(ax-CX)*e+9*Math.sin(f*6+j)*sm(f*3)+(ax-CX)*.12*f,y=CY-66+(ay-CY+66)*e+f*(40+70*rn(j+9))
    const z=Math.min(sm(p*2.5),(.49-u)/.1,(x-15)/10,(241-x)/10,(y-15)/10,(241-y)/10)
    if(z<.12)continue
    c.save();c.translate(x,y);c.rotate(rn(j+60)*6+s*5*(j%2?1:-1));c.scale(z,z*(.3+.7*Math.abs(Math.cos(s*6+j))))
    c.fillStyle=['#ffd23f','#ff5fa2','#2cb5c9','#7c5cff','#3aa95a'][j%5];c.lineWidth=3
    c.beginPath();j%3?c.rect(-9,-5,18,10):c.arc(0,0,7,0,P);c.fill();c.stroke();c.restore()
  }
}
// four point twinkle
const tw=(c,x,y,z)=>{
  if(z<.6)return
  c.beginPath()
  for(let j=0;j<8;j++){const a=j*Math.PI/4,r=j%2?z*.32:z;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
  c.closePath();c.fillStyle='#ffd23f';c.lineWidth=2.5;c.fill();c.stroke()
}
