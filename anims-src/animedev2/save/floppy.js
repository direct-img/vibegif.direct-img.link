// a pale girl with long pink twin tails in a navy sailor uniform compulsively mashing Ctrl+S, a little floppy disk pops out of the S key with every press and flies off spinning
// tags: anxious, anime, coding, keyboard, retro, fast
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
export const frames=16,delay=65,rim=4
const H='#ff8fbf',Hd='#e0609a',Hl='#ffd0e6',S='#ffe8de',J='#2c3a78',Jl='#4658a8',R='#e8344e',FC=['#4a8cff','#ff6b8a','#ffd04d','#5fd6a8']
const flop=(c,x,y,r,s,col)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
  c.beginPath();c.moveTo(-14,-14);c.lineTo(10,-14);c.lineTo(14,-10);c.lineTo(14,14);c.lineTo(-14,14);c.closePath();fs(c,col,3)
  rr(c,-7,-14,15,10,1);fs(c,'#cfd6e4',2.5);rr(c,1,-12,4,6,1);fs(c,O,0)
  rr(c,-9,1,18,11,2);fs(c,'#fff',2.5);c.beginPath();c.moveTo(-5,5);c.lineTo(5,5);c.moveTo(-5,8.5);c.lineTo(3,8.5);c.lineWidth=1.4;c.strokeStyle='#9aa';c.stroke()
  c.restore()}
export default(c,t,i)=>{
  const dn=i%2==0,sh=dn?1.5:0
  // twin tails behind
  c.save();c.translate(128,94+sh);c.scale(.88,.88)
  for(const f of[-1,1]){const w=sin(t*4*P+f)*4
    c.beginPath();c.moveTo(f*40,-50);c.bezierCurveTo(f*92,-60,f*96+w,0,f*80+w,60);c.quadraticCurveTo(f*76,90,f*90+w,110);c.quadraticCurveTo(f*58,96,f*58,60);c.bezierCurveTo(f*60,10,f*52,-20,f*34,-28);c.closePath();fs(c,H)
    c.beginPath();c.moveTo(f*70,-30);c.quadraticCurveTo(f*84,10,f*72,60);c.lineWidth=3;c.strokeStyle=Hd;c.stroke()}
  c.beginPath();c.moveTo(-50,-10);c.bezierCurveTo(-56,30,-50,46,-40,50);c.lineTo(40,50);c.bezierCurveTo(50,46,56,30,50,-10);fs(c,Hd)
  c.restore()
  // sailor uniform
  c.beginPath();c.moveTo(106,138);c.bezierCurveTo(82,144,72,164,70,190);c.lineTo(186,190);c.bezierCurveTo(184,164,174,144,150,138);c.closePath();fs(c,'#fff')
  pg(c,104,138,84,160,110,174,128,186,146,174,172,160,152,138);fs(c,J)
  c.beginPath();c.moveTo(90,160);c.lineTo(110,172);c.moveTo(166,160);c.lineTo(146,172);c.lineWidth=2.5;c.strokeStyle='#fff';c.stroke()
  pg(c,128,170,112,160,110,180);fs(c,R,3);pg(c,128,170,144,160,146,180);fs(c,R,3);pg(c,124,172,116,196,128,190,140,196,132,172);fs(c,R,3);el(c,128,170,6,5);fs(c,'#ff5d72',3)
  // head
  c.save();c.translate(128,94+sh);c.scale(.88,.88);c.rotate(dn?.03:-.02)
  hd(c,S)
  face(c,dn?{ex:'shut',m:'grit',mo:.9,br:-.8,bc:Hd}:{e:['#5a1f9a','#d08cff'],lx:2,ly:4,pp:.55,m:'wave',mo:1,br:-.8,bc:Hd})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,24)
  qs(c,[50,24,44,-8,36,2,30,-18,18,-2,8,-22,0,-6,-8,-22,-18,-2,-30,-18,-36,2,-44,-8,-50,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  for(const f of[-1,1]){el(c,f*40,-46,8,8);fs(c,'#ffd04d',3);el(c,f*40,-46,3,3);fs(c,'#fff6c0',0)}
  c.restore()
  drop(c,180,62+(i%4)*2,1);if(!dn)drop(c,74,78,.7)
  // keyboard with Ctrl and S keys
  pg(c,22,182,234,182,244,236,12,236);fs(c,'#e6e9f2')
  for(let r=0;r<2;r++)for(let k=0;k<4;k++){rr(c,92+k*14-r*2,196+r*16,11,11,2);fs(c,'#fff',1.6)}
  for(let k=0;k<2;k++){rr(c,206+k*0-k*2,196+k*16,14,11,2);fs(c,'#fff',1.6)}
  rr(c,20,192+1,64,36,7);fs(c,'#7b5cd6');rr(c,24,194+1,56,26,6);fs(c,'#b9a2ff',2.5);tx(c,'Ctrl',44,209,17,'#fff',4,'DejaVu Sans')
  const kd=dn?5:0;rr(c,148,184+kd,54,46,7);fs(c,'#c92a4a');rr(c,152,186+kd,46,35,6);fs(c,'#ff6b8a',2.5);tx(c,'S',166,207+kd,22,'#fff',4,'DejaVu Sans')
  if(dn)for(const a of[.5,1,1.5]){c.beginPath();c.moveTo(174+sin(a)*36,204-cos(a)*36);c.lineTo(174+sin(a)*46,204-cos(a)*46);c.lineWidth=4;c.strokeStyle=O;c.stroke()}
  // arms: one holds Ctrl, the other pounds S
  const arm=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,14,'#fff');el(c,x,y,9.5,8.5);fs(c,S,3.2)}
  arm(102,150,74,168,74,194)
  if(dn)arm(154,150,178,164,186,190);else arm(154,150,186,148,192,156)
  // floppies popping out, one per press
  for(let k=0;k<8;k++){const a=((i-2*k+16)%16)/8;if(a>=1||a<=0&&!dn)continue
    const d=k%4,x=180+[50,92,66,80][d]*a,y=186-a*[250,190,280,220][d]+a*a*120,s=min(1,a*5+.2)
    flop(c,x,y,(k%2?1:-1)*a*P*1.3,s*.95,FC[d])}
}
