// an AI chat bubble proudly announces 2+2=5 with sparkles while a girl with a long silver hime cut and navy hoodie holds her tea and stares at it, totally deadpan, then slowly blinks
// tags: anime, ai, chatbot, math, funny, calm
// ---
const P=Math.PI,O='#2b1d2e',{sin:S,cos:C,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
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
const spark=(c,x,y,s,f='#ffe066',w=2.5)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<8;k++){const r=k%2?3.2:10,a=k*P/4;c.lineTo(S(a)*r,-C(a)*r)}c.closePath();fs(c,f,w/s);c.restore()}
export const frames=20,delay=100,rim=4
const H='#dfe3ee',Hd='#a3aac2',Hl='#fff',Sk='#fff0e8',J='#2f3a66',Jd='#212a4e'
export default(c,t,i)=>{
  const ans=t>=.2,pp=(t-.2)/.08,z=pp<0?0:pp<1?E(pp)*(1+.3*S(pp*P)):1,bob=ans?S(t*P*6)*1.5:0
  const bk=t>.56&&t<.68?S((t-.56)/.12*P):0,dots=t<.74?0:min(3,(t-.74)/.07+1|0)
  // little AI avatar, smug and glowing
  c.save();c.translate(42,124+bob*1.5);c.scale(1.2,1.2)
  el(c,0,0,20,18);fs(c,'#b8f0ff');rr(c,-13,-9,26,17,7);fs(c,'#2b2440',2.5)
  if(ans)for(const f of[-1,1]){c.beginPath();c.moveTo(f*6-3,1);c.quadraticCurveTo(f*6,-4,f*6+3,1);ln(c,2.4,'#7fffe0')}else for(const f of[-1,1]){el(c,f*6,-1,2.4,3);fs(c,'#7fffe0',0)}
  c.beginPath();c.moveTo(0,-18);c.lineTo(0,-25);ln(c,3);spark(c,0,-29,.5,'#ffe066',2)
  c.restore()
  // chat bubble
  c.save();c.translate(124,50+bob);const bs=ans?1+.06*S(min(1,pp)*P):1;c.scale(bs,bs)
  c.beginPath();c.roundRect(-100,-38,196,72,18);c.moveTo(-74,30);fs(c,'#fff',3.5)
  c.beginPath();c.moveTo(-84,30);c.lineTo(-90,56);c.lineTo(-64,32);c.fillStyle='#fff';c.fill();c.beginPath();c.moveTo(-84,33);c.lineTo(-90,56);c.lineTo(-64,33.5);ln(c,3.5)
  if(!ans)for(let k=0;k<3;k++){el(c,-20+k*20,-2-5*max(0,S(t*P*20-k*1.2)),6);fs(c,'#b5bdd6',0)}
  else{c.save();c.scale(z,z);tx(c,'2+2=5',0,0,38,'#7a5cff',6,'DejaVu Sans')
    c.restore()
    for(const[x,y,s,k]of[[-84,-22,1,0],[82,-22,1.2,1],[86,18,.8,2],[-78,18,.7,3]]){const tw=.6+.4*S(t*P*8+k*1.7);spark(c,x,y,s*tw*z,k%2?'#ffe066':'#ffb3ec',2.2)}}
  c.restore()
  // long silver hair behind
  const hx=146,hy=160
  c.save();c.translate(hx,hy);c.scale(.96,.96)
  c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-60,30,-62,60,-62,80);c.lineTo(62,80);c.bezierCurveTo(62,60,60,30,50,-20);c.closePath();fs(c,Hd)
  c.beginPath();c.moveTo(-40,46);c.quadraticCurveTo(0,30,40,46);c.lineTo(44,64);c.quadraticCurveTo(0,52,-44,64);c.closePath();fs(c,Jd)
  c.restore()
  // hoodie with tea mug
  c.beginPath();c.moveTo(hx-28,200);c.bezierCurveTo(hx-58,204,hx-66,222,hx-66,242);c.lineTo(hx+66,242);c.bezierCurveTo(hx+66,222,hx+58,204,hx+28,200);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-32,202);c.quadraticCurveTo(hx,220,hx+32,202);ln(c,4,Jd)
  for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*9,208);c.lineTo(hx+f*10,224);ln(c,2.5,'#fff')}
  // head
  c.save();c.translate(hx,hy);c.scale(.96,.96)
  hd(c,Sk)
  face(c,{e:['#3e2f6e','#b9a9ef'],op:.52-bk*.52,lx:-4,ly:-2,pp:.85,m:'flat',mo:1.2,bl:0,br:-.3,bc:Hd})
  // hime cut: blunt bangs and cheek-length side locks
  c.beginPath();c.moveTo(-52,40);c.bezierCurveTo(-60,-46,-32,-70,0,-70);c.bezierCurveTo(32,-70,60,-46,52,40);c.lineTo(36,40);c.quadraticCurveTo(42,12,38,-14);c.lineTo(-38,-14);c.quadraticCurveTo(-42,12,-36,40);c.closePath();fs(c,H)
  for(const x of[-24,-8,8,24]){c.beginPath();c.moveTo(x,-14);c.lineTo(x+(x>0?-2:2),-28);ln(c,2,Hd)}
  c.beginPath();c.arc(0,-28,42,P*1.2,P*1.5);ln(c,5,Hl)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*45,-4);c.lineTo(f*45,34);ln(c,2,Hd)}
  for(const a of[-.5,.5]){c.save();c.translate(30,-26);c.rotate(a);rr(c,-10,-3,20,6,3);fs(c,'#ffd23a',2.5);c.restore()}
  c.restore()
  // hands around the mug
  rr(c,hx-18,212,36,30,6);fs(c,'#9ad8c8');c.beginPath();c.arc(hx+20,226,8,-P/2,P/2);ln(c,4)
  for(const f of[-1,1]){el(c,hx+f*18,226,8,7.5);fs(c,Sk,3)}
  for(let k=0;k<2;k++){const p=(t*2+k/2)%1,x=hx-6+k*12,y=208-p*16;c.globalAlpha=min(1,(1-p)*2,p*4);c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+4,y-4,x,y-8);c.quadraticCurveTo(x-4,y-12,x,y-16);ln(c,2.5,'#c8cfe0');c.globalAlpha=1}
  // the silent "..."
  for(let k=0;k<dots;k++){el(c,hx+60+k*13,112-k*4,4.5);fs(c,O,0)}
}
