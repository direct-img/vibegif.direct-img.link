// a cheerful girl with long red braids, a chef hat and a white apron fries an egg on a red-hot graphics card, flips it with a spatula and it lands back sizzling
// tags: happy, anime, food, cooking, hot, computer
// ---
const P=Math.PI,O='#2b1d2e',{sin:S,cos:C,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
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
export const frames=20,delay=90,rim=4
const H='#e8383d',Hd='#a81e2a',Hl='#ff9a9a',Sk='#e8b48a',J='#2b2b3a'
export default(c,t,i)=>{
  const T=t*2*P,fl=(t-.36)/.2,air=fl>0&&fl<1,ey=air?-96*4*fl*(1-fl):0,ang=air?E(fl)*2*P:0,land=(t-.56)/.12
  const sq=land>0&&land<1?S(land*P)*.25:0,lift=sg(t,.3,.36)*(1-sg(t,.38,.46)),win=t>.58&&t<.94
  // braids hanging down the back
  const hx=104,hy=96
  c.save();c.translate(hx,hy);c.scale(.86,.86)
  c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-58,30,-50,50,-40,56);c.lineTo(40,56);c.bezierCurveTo(50,50,58,30,50,-14);fs(c,Hd)
  c.restore()
  // body: tee + apron
  c.beginPath();c.moveTo(hx-26,134);c.bezierCurveTo(hx-54,140,hx-62,160,hx-64,190);c.lineTo(hx+64,190);c.bezierCurveTo(hx+62,160,hx+54,140,hx+26,134);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-22,150);c.lineTo(hx+22,150);c.lineTo(hx+30,190);c.lineTo(hx-30,190);c.closePath();fs(c,'#fff',3)
  c.beginPath();c.moveTo(hx-20,150);c.lineTo(hx-14,134);c.moveTo(hx+20,150);c.lineTo(hx+14,134);ln(c,3,'#fff');heart(c,hx,166,.5,'#ff7a8a',2)
  // head
  c.save();c.translate(hx,hy);c.scale(.86,.86);c.rotate(win?S(T*3)*.04:0)
  hd(c,Sk)
  face(c,win?{ex:'happy',m:'grin',mo:1.1,br:.6,bc:Hd,fr:'#c97a50'}:{e:['#1d4fa6','#82cfff'],lx:4,ly:air?-4-ey*.02:6,pp:air?.8:1,m:air?'o':'smile',mo:air?1.2:1,br:air?1:.3,bc:Hd,fr:'#c97a50'})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-42,-32,-70,0,-70);c.bezierCurveTo(32,-70,58,-42,50,26)
  qs(c,[50,26,46,-2,40,8,34,-12,26,2,20,-16,10,-2,2,-18,-8,-4,-18,-20,-28,-6,-38,-18,-46,4,-50,26],.15);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.25,P*1.45);ln(c,5,Hl)
  // chef hat
  c.beginPath();c.moveTo(-32,-66);c.bezierCurveTo(-62,-72,-52,-106,-26,-98);c.bezierCurveTo(-20,-118,14,-118,14,-100);c.bezierCurveTo(36,-114,62,-88,32,-66);c.closePath();fs(c,'#fff',3.2)
  for(const x of[-14,8]){c.beginPath();c.moveTo(x,-70);c.quadraticCurveTo(x+3,-82,x-1,-94);ln(c,2.2,'#d0d4e2')}
  rr(c,-36,-74,72,18,6);fs(c,'#fff',3.2)
  c.restore()
  // the red-hot graphics card
  const g=c.createLinearGradient(0,166,0,214);g.addColorStop(0,'#ffcb5c');g.addColorStop(1,'#ff5a36')
  rr(c,18,164,220,54,12);fs(c,g)
  rr(c,18,210,220,20,8);fs(c,'#b8322a');for(let k=0;k<14;k++){rr(c,40+k*9,224,6,6,1);fs(c,'#ffd23a',0)}
  rr(c,186,213,44,13,4);fs(c,'#2b1d2e',0);tx(c,'99°C',208,220,11,i%2?'#ff5c5c':'#ffd2d2',0,'DejaVu Sans')
  for(const[fx,fr]of[[60,1],[196,-1]]){el(c,fx,190,30,19);fs(c,'#3a3346');el(c,fx,190,30,19);c.save();c.clip()
    for(let k=0;k<5;k++){const a=T*2*fr+k*P*2/5;c.beginPath();c.moveTo(fx,190);c.quadraticCurveTo(fx+C(a+.5)*22,190+S(a+.5)*14,fx+C(a)*30,190+S(a)*19);ln(c,6,'#5d5470')}
    c.restore();el(c,fx,190,8,5);fs(c,'#ff7a4a',2.5)}
  // heat shimmer
  for(let k=0;k<4;k++){const p=(t*2+k/4)%1,x=28+k*66,y=158-p*20;c.globalAlpha=S(p*P);c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+5,y-5,x,y-10);c.quadraticCurveTo(x-5,y-15,x,y-20);ln(c,3,'#ff9a5c');c.globalAlpha=1}
  // the egg: sizzling, flipped through the air, splat back down
  c.save();c.translate(128+(air?S(fl*P)*40:0),188+ey);c.rotate(air?S(fl*P)*.3:0);c.scale(1+sq,(air?C(ang):1)*(1-sq))
  const wh=()=>{c.beginPath();for(let a=0;a<=20;a++){const q=a/20*2*P,r=1+.13*S(q*4+1)+.06*S(q*7);c.lineTo(C(q)*23*r,S(q)*12*r)}c.closePath()}
  const up=air?C(ang)>0:1
  wh();fs(c,up?'#fff':'#f2c46a',3)
  if(up){wh();c.save();c.clip();el(c,-4,-3,14,6);fs(c,'#ffffff',0);c.restore();el(c,3,-1,9,6.5);fs(c,'#ffb21e',3);el(c,0,-3,3,2);fs(c,'#fff4c8',0)}
  c.restore()
  // sizzle bubbles and steam
  if(!air){for(let k=0;k<6;k++){const a=k*1.1+(i%3)*.7,p=(t*3+k/6)%1;el(c,128+C(a)*25,190+S(a)*12,1.5+p*2);fs(c,'#fff',1.5)}
    for(let k=0;k<3;k++){const p=(t*1.5+k/3)%1,x=112+k*16+S(p*P*2+k)*5,y=176-p*40;c.globalAlpha=min(1,(1-p)*2);el(c,x,y,5+p*5,4+p*4);fs(c,'#f2f2f8',2.2);c.globalAlpha=1}}
  if(land>0&&land<1.6){const z=sg(land,0,.3)*(1-sg(land,1.1,1.6));c.save();c.translate(200,140);c.rotate(.15);c.scale(z,z);tx(c,'TSSS!',0,0,20,'#ff8a3d',5,'DejaVu Sans');c.restore()}
  // arms: one resting on the card, one with the spatula
    if(win){const u=abs(S((t-.58)/.36*P*3))*4;c.beginPath();c.moveTo(hx-34,146);c.quadraticCurveTo(hx-60,150,hx-62,124-u);st(c,12,J);el(c,hx-62,120-u,8,7.5);fs(c,Sk,3);rr(c,hx-66,104-u,7,14,3.5);fs(c,Sk,2.6)}
  else{c.beginPath();c.moveTo(hx-34,146);c.quadraticCurveTo(hx-50,166,hx-36,160);st(c,12,J);el(c,hx-34,158,8,7.5);fs(c,Sk,3)}
  const sa=-.9-lift*.6+(air?-.3:0),shx=hx+46,shy=178-lift*6
  c.beginPath();c.moveTo(hx+32,146);c.quadraticCurveTo(hx+48,156,shx,shy);st(c,12,J)
  c.save();c.translate(shx,shy);c.rotate(sa);c.beginPath();c.moveTo(0,0);c.lineTo(-30,0);st(c,4,'#9a6a3a',2.5);rr(c,-52,-8,24,16,3);fs(c,'#cfd5e3',3);for(const y of[-3,3]){c.beginPath();c.moveTo(-48,y);c.lineTo(-34,y);ln(c,1.8)}c.restore()
  el(c,shx,shy,8,7.5);fs(c,Sk,3)
  // braids over the shoulders
  for(const f of[-1,1]){const bx=hx+f*42;for(let k=0;k<3;k++){el(c,bx+f*k*1.5,124+k*11,9,7.5,f*.3);fs(c,k%2?H:'#f04a4f',3)}rr(c,bx+f*4-6,154,12,6,3);fs(c,'#ffd23a',2.5);c.beginPath();c.moveTo(bx+f*4-4,160);c.lineTo(bx+f*4-7,170);c.lineTo(bx+f*4,165);c.lineTo(bx+f*4+7,171);c.lineTo(bx+f*4+5,160);c.closePath();fs(c,H,3)}
}
