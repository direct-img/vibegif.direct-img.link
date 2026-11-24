// a cheerful gardener girl with a teal bob, straw sun hat and denim overalls waters yet another freshly planted sapling tagged #47 in a graveyard of abandoned side projects, a little ghost drifting by
// tags: happy, hopeful, anime, coding, nature, funny
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
// hand-lettered text: glyphs are centerline paths on a grid with cap height 10 (baseline 10), stroked thick with round caps
const GL={"#":[6.2,'M2.4 0.6L1.4 9.4M5.2 0.6L4.2 9.4M0.4 3.3H6.2M0 6.7H5.8'],
  3:[5.6,'M0.3 1.2Q1.2 0 2.8 0Q5.2 0 5.2 2.5Q5.2 4.8 2.4 4.8Q5.6 4.8 5.6 7.4Q5.6 10 2.8 10Q1 10 0 8.6'],
  4:[5.8,'M4 10V0L0 7H5.8'],
  7:[5.5,'M0 0H5.5L2 10'],
  A:[6,'M0 10L3 0L6 10M1.2 6.6H4.8'],
  B:[6,'M0 10V0H3.3Q5.6 0 5.6 2.5Q5.6 4.9 3.3 4.9H0M3.3 4.9Q6 4.9 6 7.45Q6 10 3.3 10H0'],
  D:[6.2,'M0 0V10H2.4Q6.2 10 6.2 5Q6.2 0 2.4 0Z'],
  G:[6,'M5.8 1.6Q4.7 0 3.1 0Q0 0 0 5Q0 10 3.1 10Q6 10 6 6.6V5.6H3.4'],
  I:[3,'M0 0H3M1.5 0V10M0 10H3'],
  L:[5,'M0 0V10H5'],
  O:[6.4,'E3.2 5 3.2 5'],
  P:[5.8,'M0 10V0H3.2Q5.8 0 5.8 2.8Q5.8 5.6 3.2 5.6H0'],
  R:[5.9,'M0 10V0H3.2Q5.8 0 5.8 2.8Q5.8 5.6 3.2 5.6H0M2.8 5.6L5.9 10'],
  T:[6,'M0 0H6M3 0V10'],
  V:[6,'M0 0L3 10L6 0']}
// gp traces one glyph path: M L H V Q Z as in svg (absolute, one segment per letter) plus E cx cy rx ry for a full ellipse
const gp=(c,d)=>{c.beginPath();let x=0,y=0
  for(const[,o,a]of d.matchAll(/([MLHVQEZ])([^MLHVQEZ]*)/g)){const n=a.trim()?a.trim().split(/[\s,]+/).map(Number):[]
    if(o=='M')c.moveTo(x=n[0],y=n[1]);else if(o=='L')c.lineTo(x=n[0],y=n[1]);else if(o=='H')c.lineTo(x=n[0],y);else if(o=='V')c.lineTo(x,y=n[0])
    else if(o=='Q')c.quadraticCurveTo(n[0],n[1],x=n[2],y=n[3]);else if(o=='E'){c.moveTo(n[0]+n[2],n[1]);c.ellipse(n[0],n[1],n[2],n[3],0,0,2*Math.PI)}else c.closePath()}}
// lt(c, text, x, y, h, fill, align=.5, ol=1.4, wt=1.9): x is the anchor (align 0 left, .5 center, 1 right), y the middle of the cap height,
// h the cap height in px, ol the outline thickness in px on each side (0 for none), wt the stroke weight in grid units
// returns the drawn width in px. strokes use lineCap/lineJoin round, draws all outlines before all fills so letters don't cut each other
const lt=(c,s,x,y,h,f,al=.5,ol=1.4,wt=1.9,O='#2b1d2e')=>{
  const k=h/10,gs=[...s].map(ch=>GL[ch]??[2.6,'']),tr=1.5+wt*.5+2*ol/k,W=gs.reduce((q,g)=>q+g[0],0)+tr*(gs.length-1)
  c.save();c.translate(x-W*k*al,y-5*k);c.scale(k,k);c.lineCap=c.lineJoin='round'
  const ps=[];let px=0;for(const g of gs){if(g[1])ps.push([px,g[1]]);px+=g[0]+tr}
  for(const[pass,col,lw]of[[0,O,wt+2*ol/k],[1,f,wt]])if(lw>wt||pass){c.strokeStyle=col;c.lineWidth=lw;for(const[q,d]of ps){c.save();c.translate(q,0);gp(c,d);c.stroke();c.restore()}}
  c.restore();return W*k
}
const heart=(c,x,y,s,f='#ff5c8a',w=3)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-16,-2,-9,-15,0,-6);c.bezierCurveTo(9,-15,16,-2,0,8);fs(c,f,w/s);el(c,-5,-5,2.4,1.6,-.6);fs(c,'rgba(255,255,255,.75)',0);c.restore()}
const spark=(c,x,y,s,f='#ffe066',w=2.5)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<8;k++){const r=k%2?3.2:10,a=k*P/4;c.lineTo(S(a)*r,-C(a)*r)}c.closePath();fs(c,f,w/s);c.restore()}
export const frames=20,delay=90,rim=4
const H='#2fc4b2',Hd='#1c8f86',Hl='#9af2e6',Sk='#a8704a',D='#4f7fd0',Dd='#365fa8',Y='#ffd24a',G='#7ed36b',GS='#c9c3dc',GSd='#9c94b8'
export default(c,t,i)=>{
  const T=t*2*P,pour=sg(t,.02,.14)*(1-sg(t,.5,.62)),hop=t>.6&&t<.95?-abs(S((t-.6)/.35*P*2))*7:0,grow=1+.08*S(T*2)+pour*.06
  // tombstones of side projects past
  const stone=(x,y,w,h,a,l1,l2)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();c.moveTo(-w/2,0);c.lineTo(-w/2,-h+w/2);c.arc(0,-h+w/2,w/2,P,0);c.lineTo(w/2,0);c.closePath();fs(c,GS)
    c.beginPath();c.moveTo(w/2-7,-4);c.lineTo(w/2-7,-h+w/2);c.arc(0,-h+w/2,w/2-7,0,-.6,1);ln(c,3,GSd)
    const ty=-h+w/2-4;lt(c,'RIP',0,ty,10,'#6a6090',.5,0,2.1);lt(c,l1,0,ty+19,10,'#3e3558',.5,0,2.1);if(l2)lt(c,l2,0,ty+36,10,'#3e3558',.5,0,2.1);c.restore()}
  stone(90,204,60,106,.04,'TODO','APP');stone(43,212,54,92,-.06,'BLOG','V3')
  // tiny ghost drifting between the stones
  const gy=74+S(T)*5,gx=50+S(T)*4
  c.save();c.translate(gx,gy);c.rotate(S(T)*.08);c.beginPath();c.moveTo(-15,10);c.lineTo(-15,-2);c.arc(0,-2,15,P,0);c.lineTo(15,10);for(let k=0;k<4;k++)c.quadraticCurveTo(15-k*7.5-3.75,15+(k%2?-3:3),15-(k+1)*7.5,10);c.closePath();fs(c,'#fff',3)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*5-3,-2);c.quadraticCurveTo(f*5,1,f*5+3,-2);ln(c,2.2)}el(c,0,5,2.5,2);fs(c,O,0);el(c,-9,3,3,1.8);fs(c,'rgba(255,120,150,.5)',0);c.restore()
  // grassy ground
  c.beginPath();c.moveTo(10,236);c.lineTo(10,212);c.quadraticCurveTo(70,196,128,204);c.quadraticCurveTo(190,212,246,200);c.lineTo(246,236);c.quadraticCurveTo(128,242,10,236);fs(c,G)
  for(const x of[24,60,150,232]){c.beginPath();c.moveTo(x-6,210);c.lineTo(x-3,200);c.lineTo(x,208);c.lineTo(x+3,198);c.lineTo(x+6,209);ln(c,3,'#4fa84a')}
  // fresh mound, sapling and its little tag
  el(c,114,222,30,9);fs(c,'#8a5a3a');for(const[x,y]of[[102,219],[120,224],[128,218]]){el(c,x,y,2.5,1.5);fs(c,'#6a4026',0)}
  c.save();c.translate(114,220);c.scale(grow*1.25,grow*1.25);c.rotate(S(T*2)*.06)
  c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(-2,-14,0,-28);ln(c,8);ln(c,4,'#5fb84f')
  for(const f of[-1,1]){c.save();c.translate(0,-26);c.rotate(f*(.5+.12*S(T*2+f)));c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(f*8,-14,f*20,-12);c.quadraticCurveTo(f*12,2,0,0);fs(c,'#8fe06a',3);c.beginPath();c.moveTo(f*2,-2);c.quadraticCurveTo(f*10,-8,f*16,-10);ln(c,1.6,'#4fa84a');c.restore()}
  c.restore()
  c.beginPath();c.moveTo(84,228);c.lineTo(84,202);ln(c,4,'#8a5a3a');c.save();c.translate(84,198);c.rotate(-.12);rr(c,-18,-11,36,21,3);fs(c,'#f7deb0',2.8);lt(c,'#47',0,-.5,11,'#b03a28',.5,0,2.1);c.restore()
  if(t>.62&&t<.96)spark(c,140,176-sg(t,.62,.8)*8,(.5+.3*S(T*6))*sg(t,.6,.66),'#fff3a0')
  // water drops arcing from the spout
  // the girl: boots, overalls, arms and can
  const hx=190,hy=90+hop
  for(const f of[-1,1]){rr(c,hx+f*14-9,206+hop*.4,18,26,5);fs(c,'#ff6b6b',3);c.beginPath();c.moveTo(hx+f*14-9,212+hop*.4);c.lineTo(hx+f*14+9,212+hop*.4);ln(c,2.5,'#c94848')}
  c.beginPath();c.moveTo(hx-24,130+hop);c.bezierCurveTo(hx-42,136+hop,hx-40,170+hop,hx-34,210+hop);c.lineTo(hx+34,210+hop);c.bezierCurveTo(hx+40,170+hop,hx+42,136+hop,hx+24,130+hop);c.closePath();fs(c,Y)
  c.beginPath();c.moveTo(hx-24,156+hop);c.lineTo(hx+24,156+hop);c.lineTo(hx+34,210+hop);c.lineTo(hx+2,210+hop);c.lineTo(hx,196+hop);c.lineTo(hx-2,210+hop);c.lineTo(hx-34,210+hop);c.closePath();fs(c,D)
  rr(c,hx-14,162+hop,28,20,4);fs(c,Dd,2.5);el(c,hx,171+hop,4);fs(c,'#ffd24a',2)
  for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*22,158+hop);c.lineTo(hx+f*18,132+hop);ln(c,5);ln(c,2,Dd);el(c,hx+f*21,156+hop,2.8);fs(c,'#ffd24a',1.8)}
  // head with straw hat
  c.save();c.translate(hx,hy);c.scale(.8,.8);c.rotate(hop?S(T*4)*.05:-.06)
  c.beginPath();c.moveTo(-48,-20);c.bezierCurveTo(-56,20,-52,40,-40,46);c.lineTo(40,46);c.bezierCurveTo(52,40,56,20,48,-20);fs(c,Hd)
  hd(c,Sk)
  face(c,hop?{ex:'happy',m:'grin',mo:1.05,br:.5,bc:Hd,blc:'rgba(255,90,110,.42)'}:{e:['#7a4300','#ffcf5a'],lx:-5,ly:3,m:'smile',br:.3,bc:Hd,blc:'rgba(255,90,110,.42)'})
  c.beginPath();c.moveTo(-50,30);c.bezierCurveTo(-58,-40,-32,-66,0,-66);c.bezierCurveTo(32,-66,58,-40,50,30);c.quadraticCurveTo(44,40,38,40);c.quadraticCurveTo(44,10,40,-10)
  qs(c,[40,-10,30,-4,24,-12,14,-2,6,-14,-4,-2,-12,-14,-22,-2,-30,-12,-40,-8],.2);c.quadraticCurveTo(-44,10,-38,40);c.quadraticCurveTo(-44,40,-50,30);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,38,P*1.22,P*1.42);ln(c,5,Hl)
  el(c,0,-50,78,16,-.05);fs(c,'#f2d27a',3.5);c.beginPath();c.ellipse(0,-50,64,10,-.05,.3,P-.3);ln(c,1.8,'#c9a24a')
  c.beginPath();c.moveTo(-36,-52);c.bezierCurveTo(-38,-96,38,-96,36,-52);c.quadraticCurveTo(0,-44,-36,-52);fs(c,'#f7dc8a',3.5)
  c.beginPath();c.moveTo(-36,-58);c.quadraticCurveTo(0,-50,36,-58);c.lineTo(35,-66);c.quadraticCurveTo(0,-58,-35,-66);c.closePath();fs(c,'#ff6b6b',3)
  el(c,30,-60,6,5);fs(c,'#fff6a8',2.5);el(c,30,-60,2);fs(c,'#ff9a3c',0)
  c.restore()
  // watering can held out, tipping to pour
  const ca=-.15-pour*.45,cx=hx-32,cy=150+hop
  c.save();c.translate(cx,cy);c.rotate(ca)
  c.beginPath();c.moveTo(-14,-6);c.lineTo(-40,-20);ln(c,9);ln(c,4,'#7fd0ff');el(c,-42,-21,5,7,.5);fs(c,'#7fd0ff',3)
  rr(c,-16,-16,34,32,8);fs(c,'#7fd0ff');c.beginPath();c.moveTo(-6,-16);c.quadraticCurveTo(2,-30,12,-16);ln(c,4);heart(c,1,1,.5,'#fff',2)
  c.restore()
  if(pour>.5){const sx=cx-42*C(ca)+21*S(ca),sy=cy-42*S(ca)-21*C(ca);for(let k=0;k<5;k++){const p=(t*5+k/5)%1,x=sx-6-p*8+(k%2)*5,y=sy+8+p*(196-sy-8);el(c,x,y,2.6,3.6);fs(c,'#8fd8ff',2)}}
  // gloved hands on the can
  for(const[sx,sy,x,y]of[[hx-24,140,cx+12,cy-6],[hx-30,148,cx-2,cy+10]]){c.beginPath();c.moveTo(sx,sy+hop);c.quadraticCurveTo((sx+x)/2,y+12,x,y);st(c,10,Y,3.2);el(c,x,y,7.5,7);fs(c,G,3)}
  if(hop){const p=(t-.6)/.35;c.save();c.translate(226,60-p*20);c.rotate(.2);c.globalAlpha=S(p*P);c.beginPath();c.moveTo(1.5,6);c.lineTo(1.5,-11);c.quadraticCurveTo(4,-4,10,-3);ln(c,7.5);el(c,-3,6,5.5,4,-.4);fs(c,'#ff9ad6',2.8);c.beginPath();c.moveTo(1.5,5);c.lineTo(1.5,-11);c.quadraticCurveTo(4,-4,10,-3);ln(c,2.6,'#ff9ad6');c.restore();c.globalAlpha=1}
}
