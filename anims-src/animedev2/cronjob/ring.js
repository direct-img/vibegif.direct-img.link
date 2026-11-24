// a sleepy girl with messy chestnut hair, a sleep mask pushed up and starry blue pajamas dozes on her desk, a * * * * * alarm clock rings, she groggily slaps it quiet and flops back down as its hand sweeps round to ring again
// tags: tired, anime, coding, sleep, alarm, schedule
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,floor,round}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const star=(c,x,y,r,f,w=2)=>{c.beginPath();for(let k=0;k<10;k++){const a=k*P/5-P/2,q=k%2?r*.45:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);c.stroke();c.beginPath();c.moveTo(x+f*9,y+3);c.lineTo(x+f*13,y);c.lineWidth=3;return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){star(c,x+lx,y+ly+2,7.5*pp,'#fff36b',1.6);el(c,x+lx-4.5,y+ly-5,2.4,2.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
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
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='drool'){c.moveTo(-5,0);c.quadraticCurveTo(0,3,5,0);c.stroke();c.beginPath();c.moveTo(4,1);c.quadraticCurveTo(7,6,5,9);c.quadraticCurveTo(2,6,4,1);fs(c,'#bfe8ff',1.6)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=30,delay=85,rim=4
const H='#8a4a2a',Hd='#5e2f1a',Hl='#c07a4e',S='#f2c39c',J='#8fc6ff',Jd='#5f98d8'
export default(c,t,i)=>{
  const ring=t<.33,wake=sg(t,.1,.2)*(1-sg(t,.38,.5)),sl=sg(t,.2,.28),hit=sg(t,.29,.33),rel=sg(t,.4,.5),
    sh=ring?sin(i*2.6)*.16:0,sq=t>=.33&&t<.4?.8:1
  const cx=62,cy=118
  // desk
  rr(c,6,182,244,56,8);fs(c,'#c98b5a');rr(c,6,182,244,12,[8,8,0,0]);fs(c,'#e0a676',3.5)
  // her back hunched over, pajamas with stars
  c.beginPath();c.moveTo(130,186);c.bezierCurveTo(130,140,160,112,196,112);c.bezierCurveTo(232,112,248,146,248,186);c.closePath();fs(c,J)
  for(const[x,y]of[[214,134],[236,166],[160,150]])star(c,x,y,5.5,'#ffe14d',1.8)
  // folded arm under her head
  c.beginPath();c.moveTo(244,184);c.quadraticCurveTo(200,170,142,180);st(c,22,J,3.2);el(c,134,182,10,8.5);fs(c,S,3.2)
  // the slapping arm: winds up from behind her head, smacks down on the clock, slides back
  let hand=0
  if(sl>0&&rel<1){const up=sl*(1-hit),k=1-rel,x=cx+8+rel*60,y=(t<.33?cy-36-up*34:cy-36+(t<.4?10:0))+rel*50
    c.beginPath();c.moveTo(160,150);c.quadraticCurveTo(128-up*10,(y+150)/2-24*up*k,x+12,y+4);st(c,15,J,3.2)
    hand=()=>{c.beginPath();c.moveTo(x+24,y+6);c.lineTo(x+12,y+4);st(c,15,J,3.2);el(c,x,y,13,9.5,-.2);fs(c,S,3.2)}}
  // head: cheek down on the arm, lifts up groggily when the alarm rings
  const hx=180-wake*4,hy=140-wake*26,hr=-.4+wake*.32
  c.save();c.translate(hx,hy);c.scale(.92,.92);c.rotate(hr)
  c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-58,20,-52,36,-42,40);c.lineTo(42,40);c.bezierCurveTo(52,36,58,20,50,-14);fs(c,Hd)
  hd(c,S)
  face(c,wake>.5?{e:['#3a4ea8','#9ab0ff'],op:.4,ly:2,lx:-6,m:t>.27&&t<.4?'grit':'frown',mo:.9,br:-.6,bc:Hd}:{ex:'calm',m:'drool',bc:Hd})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,24)
  qs(c,[50,24,48,-2,40,6,36,-18,22,-4,14,-24,0,-6,-10,-22,-20,-2,-32,-20,-40,4,-48,-4,-50,24],.25);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(6,-66);c.quadraticCurveTo(14,-92,30,-86);c.quadraticCurveTo(16,-82,14,-66);fs(c,H,3)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.45);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  rr(c,-40,-62,80,22,10);fs(c,'#ff9ec4');for(const f of[-1,1]){c.beginPath();c.moveTo(f*22-8,-50);c.quadraticCurveTo(f*22,-45,f*22+8,-50);c.lineWidth=2.5;c.strokeStyle=O;c.stroke()}
  c.restore()
  // alarm clock on a little stand labelled with its schedule
    rr(c,8,163,108,26,7);fs(c,'#fff');tx(c,'* * * * *',62,181,19,'#d0213a',0)
  c.save();c.translate(cx,cy+(1-sq)*26);c.rotate(sh);c.scale(1/sq,sq)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*20,30);c.lineTo(f*28,44);c.lineWidth=5;c.strokeStyle=O;c.stroke()}
  for(const f of[-1,1]){c.save();c.translate(f*26,-32);c.rotate(f*.5+(ring?sin(i*3.3+f)*.25:0));c.beginPath();c.arc(0,4,16,P,0);c.closePath();fs(c,'#ffcf3f');el(c,0,-13,3.5);fs(c,'#ffcf3f',2.5);c.restore()}
  c.beginPath();c.moveTo(0,-38);c.lineTo(0,-48);c.lineWidth=4;c.strokeStyle=O;c.stroke();el(c,0,-50,5,3);fs(c,'#ffcf3f',2.5)
  el(c,0,0,38);fs(c,'#ff6b6b');el(c,0,0,30);fs(c,'#fff',2.5)
  for(let k=0;k<12;k++){const a=k*P/6;c.beginPath();c.moveTo(cos(a)*24,sin(a)*24);c.lineTo(cos(a)*(k%3?27:21),sin(a)*(k%3?27:21));c.lineWidth=2;c.strokeStyle=O;c.stroke()}
  const ma=-P/2+(t<.45?0:sg(t,.45,1)*2*P),ha=-P/2+.9
  c.beginPath();c.moveTo(0,0);c.lineTo(cos(ha)*13,sin(ha)*13);c.lineWidth=4;c.strokeStyle=O;c.stroke()
  c.beginPath();c.moveTo(0,0);c.lineTo(cos(ma)*21,sin(ma)*21);c.lineWidth=2.8;c.strokeStyle='#e8344e';c.stroke();el(c,0,0,3);fs(c,O,0)
  c.restore()
  if(ring){for(const f of[-1,1])for(let k=0;k<3;k++){const a=-P/2+f*(.6+k*.38),r=54+(i%2)*4;c.beginPath();c.moveTo(cx+cos(a)*r,cy-8+sin(a)*r);c.lineTo(cx+cos(a)*(r+10),cy-8+sin(a)*(r+10));c.lineWidth=4;c.strokeStyle=O;c.stroke()}
    c.save();c.translate(116,40);c.rotate(.2+sh*.5);tx(c,'RING!',0,0,18,'#ffcf3f',5,'DejaVu Sans');c.restore()}
  if(t>=.33&&t<.4)for(const a of[-1.3,-.7,.7,1.3]){c.beginPath();c.moveTo(cx+sin(a)*46,cy+8-cos(a)*42);c.lineTo(cx+sin(a)*58,cy+8-cos(a)*54);c.lineWidth=4;c.strokeStyle=O;c.stroke()}
  if(hand)hand()
  // zzz while asleep
  if(t>.45||t<.06)for(let k=0;k<3;k++){const p=((t+.55)%1*2+k/3)%1,x=200+p*28+sin(p*6)*4,y=86-p*58,z=11+p*11
    if(p<.9)tx(c,'z',x,y,z,'#9ab0ff',4,'DejaVu Sans')}
}
