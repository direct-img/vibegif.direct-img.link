// a tan girl with a black bob, red inner streaks and a mint cardigan slaps a giant red breakpoint dot, the code freezes in icy blue and she peeks around with a magnifying glass at floating variable bubbles
// tags: curious, anime, coding, debugging, ice, float
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
export const frames=28,delay=85,rim=4
const H='#2a2433',Hd='#17131d',Hr='#e8394f',Hl='#5a5070',S='#d9a27a',J='#7fd8b6',Jd='#4fae8c',
  B=[[42,44,'i = 7','#ffd166'],[54,126,'ok: true','#a1f08f'],[80,84,'x = 0.3','#7ee0ff'],[92,22,'n: null','#ff9ed0']],TT=[.26,.4,.54,.68]
const flake=(c,x,y,r)=>{c.beginPath();for(let k=0;k<3;k++){const a=k*P/3;c.moveTo(x-cos(a)*r,y-sin(a)*r);c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.lineWidth=5;c.strokeStyle=O;c.stroke();c.lineWidth=2.2;c.strokeStyle='#e6f6ff';c.stroke()}
export default(c,t,i)=>{
  let lx=B[0][0],ly=B[0][1];for(let k=1;k<4;k++){const u=sg(t,TT[k-1]+.04,TT[k]);lx+=(B[k][0]-B[k-1][0])*u;ly+=(B[k][1]-B[k-1][1])*u}
  const sl=sg(t,.06,.12)*(1-sg(t,.14,.2)),fz=sg(t,.12,.2)*(1-sg(t,.86,.96)),lean=sg(t,.2,.3)*(1-sg(t,.84,.94)),
    up=sg(t,.56,.68)*(1-sg(t,.82,.92)),ins=sg(t,.2,.28)*(1-sg(t,.84,.9)),hx=178+lean*-10,hy=100-up*4
  // code panel and breakpoint dot (the world that freezes)
  rr(c,8,14,140,128,10);fs(c,'#232842');rr(c,8,14,22,128,[10,0,0,10]);fs(c,'#2f3554',3)
  for(let k=0;k<6;k++){const y=34+k*18;tx(c,''+(k+1),19,y,10,'#6c7396',0)
    if(k==3){rr(c,30,y-8,116,16,0);c.fillStyle=`rgba(255,214,90,${.35*fz})`;c.fill()}
    const w=[60,90,46,80,70,40][k],ind=[0,10,20,20,10,0][k];rr(c,36+ind,y-3,w,6,3);fs(c,['#ff79a8','#7ee0ff','#ffd166','#a1f08f','#c99bff','#ff79a8'][k],0)}
  el(c,19,88,5);fs(c,'#ff3b55',1.8)
  const sq=sl>.5?.8:1;c.save();c.translate(58,212);c.scale(1/sq,sq)
  el(c,0,8,30,12);fs(c,'#8b1d30');rr(c,-30,-4,60,12,0);fs(c,'#8b1d30',0);el(c,0,-4,30,12);fs(c,'#ff3b55');el(c,-9,-8,9,4);fs(c,'rgba(255,255,255,.6)',0)
  c.beginPath();c.moveTo(-30,-4);c.lineTo(-30,8);c.moveTo(30,-4);c.lineTo(30,8);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  c.restore()
  if(sl>.5)for(const a of[-1.2,-.6,0,.6,1.2]){c.beginPath();c.moveTo(58+sin(a)*40,206-cos(a)*28);c.lineTo(58+sin(a)*52,206-cos(a)*38);c.lineWidth=4;c.strokeStyle=O;c.stroke()}
  // freeze: tint what's drawn so far icy blue, frost in the corners
  if(fz>0){c.save();c.globalCompositeOperation='source-atop';c.fillStyle=`rgba(120,190,255,${.55*fz})`;c.fillRect(0,0,256,256);c.restore()
    c.save();c.globalAlpha=fz;for(const[x,y,r]of[[16,22,8],[140,20,6],[16,134,7],[90,226,6]])flake(c,x,y,r);c.restore()
}
  // back hair
  c.save();c.translate(hx,hy);c.scale(.82,.82);c.rotate(lean*-.12+up*.06)
  c.beginPath();c.moveTo(-52,-10);c.bezierCurveTo(-58,24,-54,40,-46,46);c.quadraticCurveTo(-30,50,-20,40);c.lineTo(20,40);c.quadraticCurveTo(30,50,46,46);c.bezierCurveTo(54,40,58,24,52,-10);fs(c,Hd)
  c.beginPath();c.moveTo(-44,10);c.quadraticCurveTo(-50,34,-40,44);c.moveTo(44,10);c.quadraticCurveTo(50,34,40,44);c.lineWidth=5;c.strokeStyle=Hr;c.stroke()
  c.restore()
  // body: black turtleneck under a mint cardigan
  c.beginPath();c.moveTo(160,144);c.bezierCurveTo(138,150,130,170,128,200);c.lineTo(128,240);c.lineTo(234,240);c.lineTo(234,200);c.bezierCurveTo(232,170,222,150,200,144);c.closePath();fs(c,J)
  pg(c,166,144,194,144,190,240,170,240);fs(c,'#2c2838',3)
  rr(c,170,140,20,12,5);fs(c,'#2c2838',3)
  for(const y of[176,200,224]){el(c,197,y,2.6);fs(c,'#fff',1.5)}
  // head
  c.save();c.translate(hx,hy);c.scale(.82,.82);c.rotate(lean*-.12+up*.06)
  hd(c,S)
  const lk=ins>.5?{lx:-6,ly:max(-6,min(4,(ly-hy)/12))}:{lx:-4,ly:3}
  face(c,sl>.3?{ex:'shut',m:'grin',mo:.9,br:-.6}:fz>.5?{e:['#7a0f22','#ff7a8a'],...lk,pp:1.05,m:up>.5?'o':'cat',mo:up>.5?.9:1,br:.5}:{e:['#7a0f22','#ff7a8a'],...lk,op:.8,m:'smug',br:-.4})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,26)
  qs(c,[50,26,46,-4,40,4,34,-14,24,-4,16,-22,6,-10,-6,-24,-16,-6,-28,-20,-36,0,-44,-6,-50,26],.18);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-36,-6);c.quadraticCurveTo(-30,-30,-14,-44);c.lineWidth=4;c.strokeStyle=Hr;c.stroke()
  c.beginPath();c.arc(0,-24,40,P*1.25,P*1.5);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  for(const a of[-1,1]){c.beginPath();c.moveTo(30-6,-50-6*a);c.lineTo(30+6,-50+6*a);st(c,4,'#ff3b55',2.5)}
  c.restore()
  // floating variable bubbles
  const bub=()=>B.forEach(([x,y,s,col],k)=>{const p=sg(t,TT[k]-.07,TT[k]-.02)*(1-sg(t,.84,.9)),b=sin(t*4*P+k*1.7)*2.5
    if(p<=0)return;c.save();c.translate(x,y+b);c.scale(p,p)
    c.font='bold 13px DejaVu Sans Mono';const w=c.measureText(s).width+16
    rr(c,-w/2,-11,w,22,11);fs(c,'#fff',3);el(c,-w/2+6,8,4);fs(c,'#fff',2.5)
    rr(c,-w/2+3,-8,w-6,4,2);fs(c,'rgba(140,200,255,.35)',0)
    tx(c,s,0,1,13,col,4);c.restore()});bub()
  // arms: slam the dot, then hold the magnifying glass up to the bubbles
  const arm=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,15,J);el(c,x,y,9,8);fs(c,S,3.2)}
  arm(212,162,232,198,214,222)
  let mx,my,ma
  if(ins<.05){const r=sg(t,0,.07)*(1-sl)+0,s2=sl;mx=118-s2*42+(1-r)*-4;my=170-r*20+s2*34;arm(152,160,120,186,mx,my)}
  else{const a=ins,X=lx+8+(1-a)*40,Y=ly+2+(1-a)*40;mx=X+33;my=Y+33
    c.beginPath();c.moveTo(mx,my);c.lineTo(X+15,Y+15);st(c,6,'#8a5a2b',3)
    c.save();el(c,X,Y,20);c.clip();el(c,X,Y,20);fs(c,'#eaf6ff',0);c.translate(X,Y);c.scale(1.5,1.5);c.translate(-X,-Y);bub();c.restore()
    el(c,X,Y,20);fs(c,'rgba(200,235,255,.15)',5);el(c,X-7,Y-7,5,3,-.7);fs(c,'#fff',0)
    arm(152,160,130,190,mx,my)}
}
