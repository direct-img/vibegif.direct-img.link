// a nerdy girl with a plum messy bun, pencil stuck in it, round glasses and a sweater vest runs her code, a big green PASSED check pops up first try and she leans in squinting at it, deeply suspicious
// tags: anime, coding, testing, doubt, funny, success
// ---
const P=Math.PI,O='#2b1d2e',{sin:S,cos:C,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,lw=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+16-lw);c.quadraticCurveTo(x,y+18-lw*1.3,a,y+16-lw);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+C(a+f)*a*.6,y+2+ly+S(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  if(lw){c.beginPath();c.moveTo(a+f*2,y+16-lw);c.quadraticCurveTo(x,y+18-lw*1.3,b-f*2,y+16-lw);c.lineWidth=2.4;c.stroke()}
  else{c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()}
}
const face=(c,o)=>{
  const{m='smile',mo=1,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    const q=f>0&&o.r?{...o,...o.r}:o,{br=0,bt=0,bc=O}=q
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br+3*bt);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br-3*bt);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='D'){c.moveTo(-9,-3);c.quadraticCurveTo(0,-1,9,-3);c.quadraticCurveTo(8,13,0,13);c.quadraticCurveTo(-8,13,-9,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,12,6.5,4.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const heart=(c,x,y,s,f='#ff5c8a',w=3)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-16,-2,-9,-15,0,-6);c.bezierCurveTo(9,-15,16,-2,0,8);fs(c,f,w/s);el(c,-5,-5,2.4,1.6,-.6);fs(c,'rgba(255,255,255,.75)',0);c.restore()}
const spark=(c,x,y,s,f='#ffe066',w=2.5)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<8;k++){const r=k%2?3.2:10,a=k*P/4;c.lineTo(S(a)*r,-C(a)*r)}c.closePath();fs(c,f,w/s);c.restore()}
export const frames=20,delay=100,rim=4
const H='#6b3a78',Hd='#46224f',Hl='#b27ac4',Sk='#c98a5f',V='#b5835a',Vd='#8a5f3c'
export default(c,t,i)=>{
  const T=t*2*P,pp=(t-.1)/.08,ck=pp<0?0:(pp<1?E(pp)*(1+.35*S(pp*P)):1)*(1-sg(t,.9,.97)),sus=sg(t,.34,.42)*(1-sg(t,.88,.96)),sur=t>.18&&t<.36
  const lean=sus*10,hx=170-lean,hy=112+sus*2
  // laptop seen from behind
  pg(c,16,214,128,214,136,232,8,232);fs(c,'#c8ccd9')
  pg(c,26,136,118,136,124,216,20,216);fs(c,'#e6e9f2')
  heart(c,52,166,.7,'#ff8fb8',2.5);spark(c,94,186,.8,'#ffd23a');rr(c,40,192,30,12,4);fs(c,'#7fd8ff',2.5)
  // the PASSED check popping up from the laptop
  if(ck>.01){c.save();c.translate(70,70+S(T*3)*1.5*sus);c.scale(ck,ck);c.rotate(sus*S(T*2)*.04)
    for(let k=0;k<8;k++){const a=k*P/4+T*.25;c.beginPath();c.moveTo(C(a)*40,S(a)*40);c.lineTo(C(a)*50,S(a)*50);ln(c,4,'#7cf29a')}
    el(c,0,0,34);fs(c,'#3fcf6a',4);el(c,-8,-12,10,6,-.5);fs(c,'rgba(255,255,255,.45)',0)
    c.beginPath();c.moveTo(-15,1);c.lineTo(-4,12);c.lineTo(16,-11);c.lineWidth=13;c.strokeStyle=O;c.stroke();c.lineWidth=7;c.strokeStyle='#fff';c.stroke()
    rr(c,-38,40,76,22,8);fs(c,'#fff',3.5);tx(c,'PASSED',0,51,15,'#2fa856',0,'DejaVu Sans')
    c.restore()}
  // messy bun + back hair
  c.save();c.translate(hx,hy);c.scale(.9,.9);c.rotate(-sus*.12)
  el(c,0,-76,26,21);fs(c,H);c.beginPath();c.arc(-2,-76,13,P*.8,P*2.1);ln(c,2.5,Hd);c.beginPath();c.arc(6,-80,8,P*1.1,P*2.2);ln(c,2.5,Hd)
  c.beginPath();c.moveTo(-14,-94);c.quadraticCurveTo(-22,-106,-12,-110);ln(c,6);ln(c,3,H)
  c.save();c.translate(6,-80);c.rotate(-.55);rr(c,-38,-5,64,10,2);fs(c,'#ffd23a',2.8);pg(c,26,-5,26,5,38,0);fs(c,'#f7c99a',2.5);pg(c,34,-2,34,2,38,0);fs(c,O,0);rr(c,-46,-5,10,10,3);fs(c,'#ff8fb8',2.8);c.beginPath();c.moveTo(-36,-5);c.lineTo(-36,5);ln(c,2.5,'#c8ccd9');c.restore()
  el(c,0,-58,22,6);fs(c,'#7fd8ff',3)
  c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-56,20,-52,40,-42,50);c.lineTo(42,50);c.bezierCurveTo(52,40,56,20,50,-14);fs(c,Hd)
  c.restore()
  // body: shirt collar + sweater vest
  c.beginPath();c.moveTo(hx-26,150);c.bezierCurveTo(hx-56,156,hx-62,186,hx-62,240);c.lineTo(hx+62,240);c.bezierCurveTo(hx+62,186,hx+56,156,hx+26,150);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(hx-34,156);c.lineTo(hx,206);c.lineTo(hx+34,156);c.bezierCurveTo(hx+52,170,hx+54,200,hx+52,240);c.lineTo(hx-52,240);c.bezierCurveTo(hx-54,200,hx-52,170,hx-34,156);c.closePath();fs(c,V)
  for(let y=214;y<240;y+=8){c.beginPath();c.moveTo(hx-48,y);c.lineTo(hx+48,y);ln(c,1.8,Vd)}
  for(const f of[-1,1]){pg(c,hx,158,hx+f*18,150,hx+f*16,166);fs(c,'#fff',3)}
  pg(c,hx-5,160,hx+5,160,hx+7,188,hx,196,hx-7,188);fs(c,'#e04a5a',2.8)
  // head
  c.save();c.translate(hx,hy);c.scale(.9,.9);c.rotate(-sus*.12)
  hd(c,Sk)
  const ex=sus>.5?{e:['#7a0f2e','#ff7f95'],op:.4,lw:5,lx:-5,ly:0,pp:.8,m:'flat',mo:1.3,br:-.6,bt:.9,bc:Hd,r:{br:1.4,bt:-.4,op:.55,lw:3},blc:'rgba(255,90,110,.3)'}
    :sur?{e:['#7a0f2e','#ff7f95'],lx:-5,ly:-2,pp:.55,m:'o',mo:1.1,br:1.2,bc:Hd,blc:'rgba(255,90,110,.35)'}
    :{e:['#7a0f2e','#ff7f95'],lx:-4,ly:4,m:'wave',mo:.8,br:.6,bc:Hd,blc:'rgba(255,90,110,.35)'}
  face(c,ex)
  c.beginPath();c.moveTo(-50,28);c.bezierCurveTo(-58,-42,-32,-70,0,-70);c.bezierCurveTo(32,-70,58,-42,50,28)
  qs(c,[50,28,44,-8,38,2,32,-16,22,-4,14,-22,4,-8,-6,-22,-16,-6,-26,-20,-34,0,-44,-10,-50,28],.22);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.24,P*1.44);ln(c,5,Hl)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,0);c.quadraticCurveTo(f*54,30,f*44,52);c.quadraticCurveTo(f*42,26,f*38,2);fs(c,H,3)}
  // round glasses with a glint
  for(const f of[-1,1]){el(c,f*20,11,16,15);fs(c,'rgba(200,230,255,.18)',3.4,'#8a2a3a')}
  c.beginPath();c.moveTo(-5,9);c.quadraticCurveTo(0,5,5,9);ln(c,3.2,'#8a2a3a');for(const f of[-1,1]){c.beginPath();c.moveTo(f*36,8);c.lineTo(f*46,4);ln(c,3.2,'#8a2a3a')}
  const gl=(t*1.3+.2)%1;if(sus>.5&&gl<.5)for(const f of[-1,1]){c.save();el(c,f*20,11,14.5,13.5);c.clip();const x=f*20-26+gl*104;c.beginPath();c.moveTo(x-8,26);c.lineTo(x+8,-4);ln(c,6,'rgba(255,255,255,.85)');c.restore()}
  else for(const f of[-1,1]){c.beginPath();c.moveTo(f*20+5,1);c.lineTo(f*20+10,6);ln(c,2.2,'rgba(255,255,255,.8)')}
  c.restore()
  // arms: tapping the laptop, then a thinking hand at the chin
  const sleeve=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,14,'#fff')}
  const tap=t<.12?abs(S(t*P*16))*4:0
  sleeve(hx-40,170,hx-56,204,118,212-tap);el(c,118,210-tap,8.5,8);fs(c,Sk,3)
  if(sus>.5){const rub=S(T*6)*2;sleeve(hx+40,172,hx+58,236,hx-4+rub,hy+50);el(c,hx-4+rub,hy+48,9,8);fs(c,Sk,3);c.beginPath();c.moveTo(hx-10+rub,hy+44);c.lineTo(hx+2+rub,hy+44);ln(c,2)}
  else{sleeve(hx+40,172,hx+52,220,hx+30,226);el(c,hx+30,226,8.5,8);fs(c,Sk,3)}
  // suspicious ? marks
  if(sus>.5)for(let k=0;k<2;k++){const p=(t*2+k/2)%1;c.save();c.translate(hx+52+k*16,hy-58-p*10+k*14);c.rotate(.2-k*.3);c.scale(.7+.3*S(p*P),.7+.3*S(p*P));tx(c,'?',0,0,24,k?'#ffd23a':'#ff8fb8',5,'DejaVu Sans');c.restore()}
  if(sur){c.beginPath();for(const a of[-2.2,-1.6,-1]){c.moveTo(hx+C(a)*68,hy-10+S(a)*62);c.lineTo(hx+C(a)*80,hy-10+S(a)*74)}ln(c,4)}
}
