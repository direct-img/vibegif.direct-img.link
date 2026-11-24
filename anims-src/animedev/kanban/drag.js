// a brown-skinned girl with long wavy cherry-red hair, a yellow flower clip and denim overalls drags a sticky card across the board into DONE, it hangs there a beat, then a rubber band yanks it back to IN PROGRESS and she crosses her arms with puffed-out cheeks
// tags: angry, anime, work, agile, board, task
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,round}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w=3.5,pf=0)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47-pf,24+pf,-22-pf,46,0,46);c.bezierCurveTo(22+pf,46,47+pf,24+pf,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+4);c.lineTo(x+10,y+4);c.stroke();c.beginPath();c.moveTo(x-8,y+10);c.quadraticCurveTo(x,y+13,x+8,y+10);c.lineWidth=2;c.strokeStyle='rgba(43,29,46,.4)';return c.stroke()}
  if(ex=='dot'){el(c,x,y+3,3.2,4);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='open'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,10,0,11);c.quadraticCurveTo(-8,10,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='pout'){c.moveTo(-5,3);c.quadraticCurveTo(-2,-2,0,1);c.quadraticCurveTo(2,-2,5,3);c.stroke()}
  else if(m=='chew'){c.moveTo(-6,0);c.quadraticCurveTo(-3,3,0,0);c.quadraticCurveTo(3,3,6,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#ffe066',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a-P/2)*q,y+sin(a-P/2)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=26,delay=85,rim=3
const SK='#a8704a',HR='#d9304f',HD='#a01d3a',HL='#ff8fa3',DN='#4a78c8',DNd='#365ca3',I=['#0b5d63','#5fe0d0'],L=[50,154],R=[206,154]
const note=(c,x,y,a,col,chk=0)=>{c.save();c.translate(x,y);c.rotate(a);rr(c,-25,-16,50,32,4);fs(c,col,3);c.beginPath();c.moveTo(-17,-6);c.lineTo(12,-6);c.moveTo(-17,2);c.lineTo(5,2);c.moveTo(-17,9);c.lineTo(9,9);ln(c,2.2,'rgba(43,29,46,.45)')
  if(chk){el(c,15,9,7);fs(c,'#3ccf7a',2.2);c.beginPath();c.moveTo(12,9);c.lineTo(14.5,11.5);c.lineTo(18.5,6.5);ln(c,2.2,'#fff')}c.restore()}
export default(c,t,i)=>{
  const T=t*2*P
  // card position: drag over, rest, snap back with a wobble
  const dg=sg(t,.1,.4),sn=t<.5?0:min(1,(t-.5)/.07),ob=t>.57?sin((t-.57)*40)*Math.exp(-(t-.57)*14):0
  const ease=s=>1-(1-s)**3
  let cx=L[0]+(R[0]-L[0])*dg,cy=L[1]+sin(dg*P)*6
  if(t>=.5){cx=R[0]+(L[0]-R[0])*ease(sn)+ob*16;cy=L[1]}
  const ca=t<.4&&t>.1?(dg<.5?.12:-.08)*sin(dg*P):t>=.5?ob*.3:0
  const pout=t>.58&&t<.95,held=t<.42
  // whiteboard
  rr(c,10,16,236,198,12);fs(c,'#f7f8fc');rr(c,10,16,236,198,12);ln(c,6,'#aab2c6');rr(c,10,16,236,198,12);ln(c,2.2)
  c.beginPath();c.moveTo(128,22);c.lineTo(128,208);ln(c,2.5,'#c9cfdd')
  rr(c,18,26,88,18,9);fs(c,'#ffd84d',2.6);tx(c,'IN PROGRESS',62,35.5,10,O,0,'DejaVu Sans')
  rr(c,170,26,64,18,9);fs(c,'#6fe39a',2.6);tx(c,'DONE',202,35.5,11,O,0,'DejaVu Sans')
  note(c,46,72,-.05,'#9fd8ff');note(c,62,110,.04,'#c9b3ff')
  note(c,204,72,.04,'#ffd59a',1);note(c,212,110,-.05,'#b4f0c0',1)
  rr(c,L[0]-24,L[1]-15,48,30,4);c.setLineDash([5,4]);ln(c,2,'#c9cfdd');c.setLineDash([])
  // long wavy back hair
  const hx=128+(held?(dg-.5)*8:0),hy=90+(pout?2:0)
  const H=()=>{c.translate(hx,hy);c.rotate(held&&t>.1?(dg-.5)*.1:pout?-.06:0);c.scale(.8,.8)}
  c.save();H();c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-54,-84,54,-84,50,-20);c.quadraticCurveTo(66,40,58,110);qs(c,[58,110,40,124,20,114,0,124,-20,114,-40,124,-58,110],.3);c.quadraticCurveTo(-66,40,-50,-20);fs(c,HD);c.restore()
  // body: striped tee, overalls
  c.beginPath();c.moveTo(110,124);c.quadraticCurveTo(80,128,78,160);c.lineTo(76,240);c.lineTo(180,240);c.lineTo(178,160);c.quadraticCurveTo(176,128,146,124);c.closePath();fs(c,'#fff')
  c.save();c.clip();for(let y=134;y<240;y+=12){c.fillStyle='#3a4a8a';c.fillRect(70,y,120,4)}c.restore()
  c.beginPath();c.moveTo(78,160);c.quadraticCurveTo(80,128,110,124);c.quadraticCurveTo(80,128,78,160);ln(c,3.5)
  c.beginPath();c.moveTo(100,170);c.lineTo(156,170);c.lineTo(162,240);c.lineTo(94,240);c.closePath();fs(c,DN)
  for(const s of[-1,1]){c.beginPath();c.moveTo(128+s*24,172);c.lineTo(128+s*30,128);st(c,7,DN,3);el(c,128+s*24,176,4);fs(c,'#ffd84d',2.4)}
  rr(c,114,190,28,20,4);fs(c,DNd,2.4)
  // head
  c.save();H();hd(c,SK,3.5,pout?7:0)
  const ph=t<.1?0:t<.4?1:t<.5?2:t<.58?3:pout?4:0
  face(c,[{e:I,lx:-6,ly:4,m:'smile',br:-.2},{e:I,lx:dg>.5?6:-4,ly:5,m:'grin',br:-.5},{ex:'happy',m:'grin',br:.2},{e:I,pp:.55,lx:-7,ly:3,m:'o',br:.8},{e:I,op:.7,lx:-5,ly:2,m:'pout',mo:1.3,br:-1.2,blc:'rgba(255,80,100,.45)'}][ph])
  c.beginPath();c.moveTo(-54,26);c.bezierCurveTo(-60,-46,-30,-70,0,-70);c.bezierCurveTo(30,-70,60,-46,54,26)
  qs(c,[54,26,50,0,42,-10,34,2,26,-18,14,-6,4,-22,-6,-6,-18,-22,-28,-4,-38,-14,-46,4,-54,26],.2);c.closePath();fs(c,HR)
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*46,-6);c.quadraticCurveTo(s*62,24,s*54,52);c.quadraticCurveTo(s*62,72,s*52,86);c.quadraticCurveTo(s*44,60,s*44,40);c.quadraticCurveTo(s*48,18,s*38,2);fs(c,HR)}
  c.beginPath();c.arc(0,-24,42,P*1.2,P*1.46);ln(c,5,HL)
  c.save();c.translate(38,-46);for(let k=0;k<5;k++){c.save();c.rotate(k*P*.4);el(c,0,-8,5.5,8);fs(c,'#ffd84d',2.6);c.restore()}el(c,0,0,4.5);fs(c,'#ff8c42',2.4);c.restore()
  c.restore()
  if(pout){const x=hx+50,y=hy-14;c.save();c.translate(x,y);for(let k=0;k<4;k++){c.rotate(P/2);c.beginPath();c.moveTo(3,-3);c.quadraticCurveTo(5,-9,10,-8);ln(c,3,'#e2445c')}c.restore()}
  // rubber band from the slot, stretched while the card is away
  const off=Math.hypot(cx-L[0],cy-L[1])
  if(off>6){c.beginPath();c.moveTo(L[0]+20,L[1]);c.quadraticCurveTo((L[0]+cx)/2,(L[1]+cy)/2+10*min(1,off/60),cx-20,cy);ln(c,max(1.6,4.5-off/45),'#ff5c8a')}
  // the card
  note(c,cx,cy,ca,'#ffa0c8')
  if(sn>0&&sn<1)for(let k=0;k<3;k++){c.beginPath();c.moveTo(cx+30+k*4,cy-12+k*12);c.lineTo(cx+56+k*10,cy-12+k*12);ln(c,3)}
  // short tee sleeves
  for(const s of[-1,1]){el(c,128+s*38,146,13,15,s*.3);fs(c,'#fff');c.save();el(c,128+s*38,146,13,15,s*.3);c.clip();for(const y of[136,148]){c.fillStyle='#3a4a8a';c.fillRect(100+s*30,y,56,4)}c.restore()}
  // arms: dragging across, letting go, then crossed in a huff
  const cr=pout?sg(t,.58,.64)*(1-sg(t,.9,.95)):0
  let hx2=held&&t>.06?cx+6:t<.5?R[0]-4:110,hy2=held&&t>.06?cy+4:t<.5?cy+12:206
  if(t<=.06){const k=t/.06;hx2=84+(L[0]+6-84)*k;hy2=206+(L[1]+4-206)*k}
  if(t>=.5&&!cr){const k=sg(t,.5,.58);hx2=R[0]-4+(100-R[0]+4)*k;hy2=166+(206-166)*k}
  if(cr){hx2=100+(162-100)*cr;hy2=206-cr*30}
  c.beginPath();c.moveTo(92,140);c.quadraticCurveTo(min(hx2,92)-6+cr*40,190-cr*10,hx2,hy2);st(c,11,SK)
  el(c,hx2,hy2,8,7.5);fs(c,SK,3)
  const ox=cr?150-(150-96)*cr:162,oy=cr?206-cr*34:206
  c.beginPath();c.moveTo(164,140);c.quadraticCurveTo(176-cr*20,196,ox,oy);st(c,11,SK)
  el(c,ox,oy,8,7.5);fs(c,SK,3)
  if(ph==2)spk(c,R[0]+30,R[1]-26,9,'#fff3a0',2.4)
}
