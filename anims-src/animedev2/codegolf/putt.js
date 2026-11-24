// a sporty girl with a chocolate-brown high ponytail, white visor and pink polo putts a golf ball along a one-line code green, it drops in the hole and she fist pumps
// tags: happy, proud, anime, coding, sport, game
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
const spark=(c,x,y,s,f='#ffe066',w=2.5)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<8;k++){const r=k%2?3.2:10,a=k*P/4;c.lineTo(S(a)*r,-C(a)*r)}c.closePath();fs(c,f,w/s);c.restore()}
export const frames=24,delay=80,rim=4
const H='#7a4a2e',Hd='#55301c',Hl='#b98a62',Sk='#f6cfb0',J='#ff7eb3',Jd='#e0558f',N='#2f3a6b',G='#9be07a',Gd='#5fae48'
export default(c,t,i)=>{
  const bs=sg(t,.06,.18),fw=sg(t,.19,.24),a=.2-.5*bs+.75*fw-.45*sg(t,.6,.7)
  const rl=(t-.24)/.34,bx=rl<0?106:rl<1?106+116*(1-(1-rl)**2.2):222,sink=sg(t,.56,.62),pump=sg(t,.62,.66)*(1-sg(t,.88,.94))
  const pb=t>.94?E((t-.94)/.05):t>.6?0:1,hop=pump*abs(S((t-.62)/.26*P*2))*-6
  // the one-line code green
  rr(c,14,210,234,28,14);fs(c,G);rr(c,22,216,218,8,4);fs(c,'#b8ee9c',0)
  c.font='bold 20px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle='#3f8a30';c.fillText('f=x=>x*2',114,226)
  c.fillStyle='#7cc466';c.fillText('1',24,226)
  el(c,222,226,10,4.5);fs(c,'#2b3a22',3)
  // flag, wobbling when the ball drops
  const fw2=sink*(1-sg(t,.66,.86))*S(t*P*30)*.08
  c.save();c.translate(222,226);c.rotate(fw2);c.beginPath();c.moveTo(0,0);c.lineTo(0,-128);st(c,3.5,'#fff',2.5)
  const wv=S(t*P*4)*4;c.beginPath();c.moveTo(0,-128);c.quadraticCurveTo(-20,-122+wv,-44,-112+wv);c.quadraticCurveTo(-20,-102-wv,0,-96);c.closePath();fs(c,'#ff5c5c',3.2);tx(c,'1',-16,-112,18,'#fff',0,'DejaVu Sans')
  c.restore()
  // ball rolling over the code and plunking into the cup
  if(pb>.01){const by=226-6*(1-sink)+sink*6,sc=t>.94?pb:1
    c.save();el(c,222,226,40,40);if(rl>.9){c.beginPath();c.rect(0,0,256,226)}else c.rect(0,0,256,256);c.clip()
    c.translate(t>.94?106:bx,t>.94?220:by-sink*2);c.scale(sc,sc);el(c,0,0,6.5);fs(c,'#fff',2.8)
    for(let k=0;k<3;k++){const q=(bx-106)/6.5+k*2.1;el(c,C(q)*3,S(q)*1.5-1,1,1);fs(c,'#c8ccd8',0)}c.restore()
    if(rl>0&&rl<.85)for(let k=1;k<3;k++){c.beginPath();c.moveTo(bx-10-k*8,220+k*3);c.lineTo(bx-18-k*10,220+k*3);ln(c,2.5,Gd)}}
  // ponytail swinging behind
  const hx=66,hy=80+hop
  c.save();c.translate(hx,hy);c.scale(.8,.8);c.rotate(-.04)
  c.save();c.translate(16,-62);c.rotate(.2+S(t*P*2)*.12+pump*S(t*P*8)*.15)
  c.beginPath();c.moveTo(-8,0);c.bezierCurveTo(30,-24,70,-4,66,40);c.quadraticCurveTo(64,60,74,78);c.quadraticCurveTo(52,70,46,46);c.bezierCurveTo(46,20,26,8,8,8);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(14,2);c.bezierCurveTo(36,-6,56,10,56,36);ln(c,2.5,Hd);el(c,0,2,7,9,.4);fs(c,'#ff7eb3',3)
  c.restore();c.restore()
  // legs and sneakers
  for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*12,184+hop);c.lineTo(hx+f*16,222+hop*.3);st(c,11,Sk,3.2);c.beginPath();c.moveTo(hx+f*15,212+hop*.3);c.lineTo(hx+f*16,222+hop*.3);ln(c,11,'#fff')
    el(c,hx+f*18,228+hop*.3,12,6.5);fs(c,'#fff',3.2);c.beginPath();c.moveTo(hx+f*18-8,229+hop*.3);c.lineTo(hx+f*18+8,229+hop*.3);ln(c,2.5,Jd)}
  // pleated skirt and polo
  pg(c,hx-30,164+hop,hx+30,164+hop,hx+40,192+hop,hx-40,192+hop);fs(c,N);for(const x of[-20,-6,8,22]){c.beginPath();c.moveTo(hx+x*.8,166+hop);c.lineTo(hx+x,190+hop);ln(c,2,'#4d5a96')}
  c.beginPath();c.moveTo(hx-22,116+hop);c.bezierCurveTo(hx-40,120+hop,hx-36,150+hop,hx-32,170+hop);c.lineTo(hx+32,170+hop);c.bezierCurveTo(hx+36,150+hop,hx+40,120+hop,hx+22,116+hop);c.closePath();fs(c,J)
  for(const f of[-1,1]){pg(c,hx,120+hop,hx+f*16,113+hop,hx+f*14,128+hop);fs(c,'#fff',3)}
  c.beginPath();c.moveTo(hx,122+hop);c.lineTo(hx,140+hop);ln(c,2.5,Jd);el(c,hx,130+hop,1.8);fs(c,'#fff',0)
  // head with visor
  c.save();c.translate(hx,hy);c.scale(.8,.8)
  hd(c,Sk)
  const win=pump>.5,lk=t<.24?[3,6]:t<.6?[3+5*min(1,max(0,rl)),5]:[6,4]
  face(c,win?{ex:'happy',m:'grin',mo:1.1,br:.6,bc:Hd}:{e:['#1d6b2b','#8fe48a'],lx:lk[0],ly:lk[1],pp:.9,m:t<.24?'cat':'o',mo:t<.24?1:.9,br:t<.24?-.4:.6,bt:t<.24?.6:0,bc:Hd})
  if(t<.22&&!win){el(c,4,38,3.5,3);fs(c,'#ff8c9c',2)}
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-42,-32,-70,0,-70);c.bezierCurveTo(32,-70,58,-42,50,26)
  qs(c,[50,26,44,-4,36,8,30,-12,20,4,14,-14,4,0,-6,-16,-16,2,-26,-14,-36,6,-44,-6,-50,26],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.2,P*1.32);ln(c,5,Hl)
  c.beginPath();c.moveTo(-50,-28);c.quadraticCurveTo(0,-52,50,-28);c.lineTo(48,-40);c.quadraticCurveTo(0,-62,-48,-40);c.closePath();fs(c,'#fff',3.2)
  c.beginPath();c.moveTo(-46,-30);c.quadraticCurveTo(0,-50,46,-30);c.quadraticCurveTo(30,-8,0,-10);c.quadraticCurveTo(-30,-8,-46,-30);fs(c,'#ffd2e4',3.2)
  c.restore()
  // arms + putter: pendulum stroke, then a one-handed fist pump
  const arm=(sx,sy,x,y,f)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(sx+f*10,(sy+y)/2+6,x,y);st(c,11,Sk,3.2);c.beginPath();c.moveTo(sx,sy);c.lineTo(sx+(x-sx)*.3,sy+(y-sy)*.3);ln(c,15,J);c.beginPath();c.moveTo(sx,sy);c.lineTo(sx+(x-sx)*.3,sy+(y-sy)*.3);ln(c,8.5,J)}
  const px=hx+16,py=162+hop,ang=win?.05:a,phx=px+66*S(ang),phy=py+64*C(ang)
  c.beginPath();c.moveTo(px,py);c.lineTo(phx,phy);st(c,3.5,'#c8ccd8',2.5);rr(c,phx-5,phy-5,16,8,3);fs(c,'#8e98ae',2.8)
  arm(hx-24,124+hop,px-3,py-2,-1);el(c,px-3,py-2,7);fs(c,Sk,3)
  if(win){const up=abs(S((t-.62)/.26*P*2));arm(hx+24,124+hop,hx+40,92-up*10+hop,1);el(c,hx+40,88-up*10+hop,8.5,9);fs(c,Sk,3.2);c.beginPath();c.moveTo(hx+35,84-up*10+hop);c.lineTo(hx+45,84-up*10+hop);ln(c,2)
    for(const q of[-.6,0,.6]){c.beginPath();c.moveTo(hx+40+S(q)*16,76-up*10+hop-C(q)*10);c.lineTo(hx+40+S(q)*24,72-up*10+hop-C(q)*14);ln(c,3)}}
  else{arm(hx+24,124+hop,px+3,py,1);el(c,px+3,py,7);fs(c,Sk,3)}
  // score pop
  const sp=(t-.6)/.06,z=sp<0?0:(sp<1?E(sp)*(1+.35*S(sp*P)):1)*(1-sg(t,.86,.92))
  if(z>.01){c.save();c.translate(182,60);c.rotate(-.1);c.scale(z,z);tx(c,'8 bytes!',0,0,22,'#ffd23a',6,'DejaVu Sans');c.restore();spark(c,120,28,.7*z,'#fff3a0');spark(c,236,22,.8*z,'#fff3a0')
  if(sink>0&&t<.7){const q=(t-.56)/.14;for(let k=0;k<5;k++){const a=-P/2+(k-2)*.5;c.beginPath();c.moveTo(222+C(a)*(10+q*10),222+S(a)*(6+q*8));c.lineTo(222+C(a)*(16+q*12),222+S(a)*(10+q*10));ln(c,3)}}}
}
