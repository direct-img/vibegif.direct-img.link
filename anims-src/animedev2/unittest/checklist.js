// a fair girl with a red low bun, round glasses and a white lab coat ticks tests off her clipboard one by one, a green check pops in each time and she nods, then flips to a fresh sheet
// tags: proud, anime, coding, testing, clipboard, calm
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,floor}=Math
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
const H='#e8503a',Hd='#b5341f',Hl='#ff9c7a',S='#ffe1cc',J='#fdfdff',Jd='#c9d0e4',B='#2fb6a6',N=['login','signup','cart','pay','logout']
const ck=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(-7,0);c.lineTo(-2,6);c.lineTo(9,-9);c.lineCap='round';c.lineWidth=9;c.strokeStyle=O;c.stroke();c.lineWidth=4.5;c.strokeStyle='#36d07a';c.stroke();c.restore()}
export default(c,t,i)=>{
  const T0=k=>.04+k*.15,done=k=>sg(t,T0(k)+.08,T0(k)+.11),pop=k=>{const u=(t-T0(k)-.08)/.06;return u<0?0:u>1?1:1+sin(u*P)*.45},
    nod=[0,1,2,3,4].reduce((a,k)=>a+sin(sg(t,T0(k)+.08,T0(k)+.14)*P),0),cnt=[0,1,2,3,4].filter(k=>t>T0(k)+.09).length,
    fl=sg(t,.88,.97),all=t>.79&&t<.92,HX=170,hy=76+nod*4,CX=78,CY=172,CR=-.05
  const W=(x,y)=>[CX+x*cos(CR)-y*sin(CR),CY+x*sin(CR)+y*cos(CR)]
  // low bun and back hair
  c.save();c.translate(HX,hy);c.scale(.8,.8);c.rotate(.03+nod*.05)
  el(c,32,40,22,20);fs(c,H);c.beginPath();c.arc(32,40,12,P*.9,P*1.9);c.lineWidth=3;c.strokeStyle=Hd;c.stroke()
  c.beginPath();c.moveTo(-50,-10);c.bezierCurveTo(-56,20,-50,36,-38,40);c.lineTo(38,40);c.bezierCurveTo(50,36,56,20,50,-10);fs(c,Hd)
  c.restore()
  // lab coat over a teal blouse
  c.beginPath();c.moveTo(152,116);c.bezierCurveTo(128,122,120,146,118,180);c.lineTo(116,240);c.lineTo(234,240);c.lineTo(234,180);c.bezierCurveTo(232,146,222,122,192,116);c.closePath();fs(c,J)
  pg(c,158,116,172,146,186,116);fs(c,B,3);pg(c,158,116,164,140,150,120);fs(c,'#fff',3);pg(c,186,116,180,140,194,120);fs(c,'#fff',3)
  c.beginPath();c.moveTo(172,146);c.lineTo(172,240);c.lineWidth=2.5;c.strokeStyle=Jd;c.stroke()
  // head
  c.save();c.translate(HX,hy);c.scale(.8,.8);c.rotate(.03+nod*.05)
  hd(c,S)
  face(c,all?{ex:'happy',m:'grin',mo:1.1,br:.4,bc:Hd,fr:'#e09a80'}:fl>0?{e:['#1d6b3a','#86e8a0'],m:'smile',mo:.9,bc:Hd,fr:'#e09a80'}
    :{e:['#1d6b3a','#86e8a0'],lx:-5,ly:6,op:.82,m:nod>.3?'smile':'cat',mo:.9,br:.2,bc:Hd,fr:'#e09a80'})
  for(const f of[-1,1]){el(c,f*20,12,16,15);c.fillStyle='rgba(220,240,255,.25)';c.fill();c.lineWidth=3;c.strokeStyle='#7a3a2a';c.stroke()}
  c.beginPath();c.moveTo(-5,8);c.quadraticCurveTo(0,4,5,8);c.moveTo(-36,8);c.lineTo(-46,4);c.moveTo(36,8);c.lineTo(46,4);c.lineWidth=3;c.strokeStyle='#7a3a2a';c.stroke()
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,22)
  qs(c,[50,22,46,-6,38,-2,30,-20,14,-10,4,-26,-6,-12,-22,-26,-30,-10,-40,-16,-46,-2,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  // clipboard with the test list, boxes on the right
  c.save();c.translate(CX,CY);c.rotate(CR)
  rr(c,-62,-60,124,122,9);fs(c,'#c98b4f')
  const sheet=(on)=>{rr(c,-54,-48,108,104,4);fs(c,'#fff',3)
    c.font='bold 12px DejaVu Sans Mono';c.textBaseline='middle';c.textAlign='left';c.fillStyle='#8a90a8';c.fillText('TESTS',-46,-34);c.textAlign='right';c.fillStyle=on&&cnt==5?'#24a860':'#8a90a8';c.fillText((on?cnt:0)+'/5',46,-34)
    c.textAlign='left'
    N.forEach((s,k)=>{const y=-16+k*16;rr(c,32,y-6,12,12,2);fs(c,'#fff',2.4);c.fillStyle='#3a3f5a';c.font='bold 12px DejaVu Sans Mono';c.fillText(s,-46,y)
      if(on){const p=pop(k);if(p>0)ck(c,39,y-2,p)}})}
  sheet(0)
  if(fl<1){c.save();c.translate(0,-48);c.scale(1,1-2*fl);c.translate(0,48);if(fl<.5)sheet(1);else{rr(c,-54,-48,108,104,4);fs(c,'#eef0f6',3)}c.restore()}
  rr(c,-20,-66,40,16,4);fs(c,'#b8c0d4');rr(c,-10,-70,20,8,3);fs(c,'#8a93aa',3)
  c.restore()
  // arms: left grips the board's edge, right ticks with the pen
  const arm=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,15,J);el(c,x,y,8.5,8);fs(c,S,3.2)}
  arm(146,132,132,170,140,200)
  let px=196,py=150
  const k=floor((t-.04)/.15)
  if(k>=0&&k<5&&!all){const u=(t-T0(k))/.15,[bx,by]=W(36,-16+k*16),m=sg(u,0,.4),tk=sg(u,.45,.55),tk2=sg(u,.55,.75),up=sg(u,.8,1)
    const[sx,sy]=k?W(46,-16+(k-1)*16-12):[150,150]
    px=bx+tk*4+tk2*10;py=by+tk*6-tk2*14
    if(u<.4){px=sx+(bx-sx)*m;py=sy+(by-sy)*m}
    if(u>.8){px+=up*6;py-=up*6}}
  else if(all){px=212;py=96}
  else{const u=sg(t,0,.04);px=150-u*0;py=150}
  c.save();c.translate(px,py);c.rotate(.55);rr(c,-3,-34,7,32,3);fs(c,'#4a6cf0',2.6);pg(c,-3,-2,4,-2,.5,5);fs(c,'#ffe0a0',2);c.restore()
  arm(206,134,all?232:226,all?150:190,px+14,py-16)
  if(all)for(let k=0;k<4;k++){const a=k*P/2+t*9;star(c,HX+cos(a)*68,64+sin(a)*40,5+2*sin(t*40+k),'#ffe14d',2)}
}
