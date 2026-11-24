// a girl with dark skin and two big curly afro puffs in a mustard cardigan tears open an envelope, reads her job offer and leaps for joy as confetti bursts around her
// tags: excited, happy, anime, celebration, career, bounce
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){c.save();c.translate(x+lx,y+ly+2);pg(c,...[...Array(10)].flatMap((_,k)=>{const r=k%2?3.2:8,a=k*P/5-P/2;return[cos(a)*r,sin(a)*r]}));fs(c,'#fff',0);c.restore()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
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
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
// hand-lettered text: glyphs are centerline paths on a grid with cap height 10 (baseline 10), stroked thick with round caps
const G={E:[5.2,'M5.2 0H0V10H5.2M0 4.9H4.2'],
  F:[5.2,'M5.2 0H0V10M0 4.9H4.2'],
  O:[6.4,'E3.2 5 3.2 5'],
  R:[5.9,'M0 10V0H3.2Q5.8 0 5.8 2.8Q5.8 5.6 3.2 5.6H0M2.8 5.6L5.9 10']}
// gp traces one glyph path: M L H V Q Z as in svg (absolute, one segment per letter) plus E cx cy rx ry for a full ellipse
const gp=(c,d)=>{c.beginPath();let x=0,y=0
  for(const[,o,a]of d.matchAll(/([MLHVQEZ])([^MLHVQEZ]*)/g)){const n=a.trim()?a.trim().split(/[\s,]+/).map(Number):[]
    if(o=='M')c.moveTo(x=n[0],y=n[1]);else if(o=='L')c.lineTo(x=n[0],y=n[1]);else if(o=='H')c.lineTo(x=n[0],y);else if(o=='V')c.lineTo(x,y=n[0])
    else if(o=='Q')c.quadraticCurveTo(n[0],n[1],x=n[2],y=n[3]);else if(o=='E'){c.moveTo(n[0]+n[2],n[1]);c.ellipse(n[0],n[1],n[2],n[3],0,0,2*Math.PI)}else c.closePath()}}
// lt(c, text, x, y, h, fill, align=.5, ol=1.4, wt=1.9): x is the anchor (align 0 left, .5 center, 1 right), y the middle of the cap height,
// h the cap height in px, ol the outline thickness in px on each side (0 for none), wt the stroke weight in grid units
// returns the drawn width in px. strokes use lineCap/lineJoin round, draws all outlines before all fills so letters don't cut each other
const lt=(c,s,x,y,h,f,al=.5,ol=1.4,wt=1.9,O='#2b1d2e')=>{
  const k=h/10,gs=[...s].map(ch=>G[ch]??[2.6,'']),tr=1.5+wt*.5+2*ol/k,W=gs.reduce((q,g)=>q+g[0],0)+tr*(gs.length-1)
  c.save();c.translate(x-W*k*al,y-5*k);c.scale(k,k);c.lineCap=c.lineJoin='round'
  const ps=[];let px=0;for(const g of gs){if(g[1])ps.push([px,g[1]]);px+=g[0]+tr}
  for(const[pass,col,lw]of[[0,O,wt+2*ol/k],[1,f,wt]])if(lw>wt||pass){c.strokeStyle=col;c.lineWidth=lw;for(const[q,d]of ps){c.save();c.translate(q,0);gp(c,d);c.stroke();c.restore()}}
  c.restore();return W*k
}
export const frames=28,delay=[...Array(28)].map((_,k)=>k>=8&&k<12?120:75),rim=4
const H='#3a2218',Hl='#74503a',S='#8d5a3b',Sd='#6e4229',C='#f2b632',Cd='#c98a14',K='#2f3d7a',I=['#6e3205','#f2b640']
const CF=['#ff5d8f','#ffd23f','#4cc9f0','#7ae582','#b388ff','#ff8c42']
const conf=[...Array(30)].map((_,k)=>{const a=-P/2+(k/30-.5)*P*1.7+sin(k*7.3)*.15,v=150+(k*37%60);return{a,v,c:CF[k%6],s:sin(k*3.1)*6,w:k%3}})
const puff=(c,x,y,r)=>{c.beginPath();for(let k=0;k<=18;k++){const a=k/18*2*P,q=r+(k%2?0:3.5);c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,H);c.lineWidth=2.4;c.strokeStyle=Hl;for(const[u,v,s]of[[-.4,-.4,.5],[.3,-.1,.4],[-.1,.4,.35]]){c.beginPath();c.arc(x+u*r,y+v*r,r*s*.5,P*.9,P*1.9);c.stroke()}}
export default(c,t,i)=>{
  const op=sg(t,.08,.16)-sg(t,.95,1),sl=sg(t,.16,.28),rd=t>.26&&t<.46,sq0=sg(t,.42,.48)*(1-sg(t,.48,.52)),air=t>.5&&t<.74
  const u=(t-.5)/.24,jy=air?sin(u*P)*17:0,sq1=sg(t,.72,.76)*(1-sg(t,.76,.84)),sq=sq0+sq1-(t>.48&&t<.56?.6*sin((t-.48)/.08*P):0)
  const fold=sg(t,.9,.97),envIn=t<.44||t>=.93,happy=t>.5
  // confetti behind
  const cf=(back)=>{if(t<.53)return;const d=(t-.53)*1.6;conf.forEach((p,k)=>{const x=128+cos(p.a)*p.v*d,y=96+sin(p.a)*p.v*d+170*d*d;if(y>250||t>.97)return;c.save();c.globalAlpha=t>.9?1-(t-.9)/.07:1;c.translate(x,y);c.rotate(p.s*d*3);if(p.w==0){rr(c,-5,-3,10,6,1.5);fs(c,p.c,2.2)}else if(p.w==1){el(c,0,0,4.5);fs(c,p.c,2.2)}else{c.beginPath();c.moveTo(-6,0);c.quadraticCurveTo(-3,-5,0,0);c.quadraticCurveTo(3,5,6,0);st(c,2.5,p.c,1.8)}c.restore()})}
  cf(1)
  // whole body squash/jump
  c.save();c.translate(128,242);c.scale(1.06,1.06);c.translate(-128,-236);c.translate(128,234);c.scale(1+sq*.1,1-sq*.12);c.translate(-128,-234-jy)
  // legs + shoes
  const lg=air?6:0
  for(const f of[-1,1]){c.beginPath();c.moveTo(128+f*11,196);c.lineTo(128+f*(13+lg),222-(air?4:0));st(c,11,S);rr(c,128+f*(13+lg)-6,212-(air?4:0),12,10,3);fs(c,'#fff',2.5);el(c,128+f*(15+lg),227-(air?4:0),11,6.5);fs(c,'#ff5a5f',3)}
  // skirt + torso
  c.beginPath();c.moveTo(100,184);c.lineTo(94,206);c.quadraticCurveTo(128,214,162,206);c.lineTo(156,184);c.closePath();fs(c,K)
  c.beginPath();c.moveTo(114,188);c.lineTo(110,208);c.moveTo(128,188);c.lineTo(128,210);c.moveTo(142,188);c.lineTo(146,208);c.lineWidth=2;c.strokeStyle='#1c2552';c.stroke()
  c.beginPath();c.moveTo(112,134);c.bezierCurveTo(98,140,96,160,98,190);c.lineTo(158,190);c.bezierCurveTo(160,160,158,140,144,134);c.closePath();fs(c,C)
  pg(c,116,136,128,158,140,136);fs(c,'#fff',2.6)
  c.beginPath();c.moveTo(128,158);c.lineTo(128,188);c.lineWidth=2.6;c.strokeStyle=O;c.stroke();for(const y of[166,178]){el(c,133,y,2.3);fs(c,'#fff',1.8)}
  // head
  const hb=air?-.06*sin(u*P*2):0
  c.save();c.translate(128,100);c.scale(.76,.76);c.rotate(hb)
  for(const f of[-1,1]){puff(c,f*44,-58,26);rr(c,f*30-8,-48,16,9,4);fs(c,'#ff6fa3',2.6)}
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-56,-46,-30,-66,0,-66);c.bezierCurveTo(30,-66,56,-46,50,0);c.closePath();fs(c,H)
  hd(c,S)
  const e={e:I}
  if(t<.2)face(c,{...e,m:'cat',ly:3,lx:0,br:.2,bc:H,op:.9})
  else if(t<.3)face(c,{...e,m:'o',ly:4,br:.2,bc:H})
  else if(t<.44)face(c,{...e,ex:'star',ly:2+(i%2),m:'o',mo:1.6,br:-1,bc:H})
  else if(t<.5)face(c,{...e,ex:'shut',m:'grin',br:-.5,bc:H})
  else if(t<.8)face(c,{...e,ex:'happy',m:'grin',mo:1.25,br:-.6,bc:H})
  else face(c,{...e,ex:t<.88?'star':'happy',m:'smile',mo:1.1,bc:H})
  // curly fringe
  c.beginPath();c.moveTo(-48,10);c.bezierCurveTo(-54,-44,-28,-64,0,-64);c.bezierCurveTo(28,-64,54,-44,48,10)
  for(let k=0;k<=10;k++){const x=46-k*9.2,y=-16+(k%2?-6:0)+(k==0||k==10?20:0);c.lineTo(x,y)}
  c.closePath();c.save();c.clip();c.restore()
  c.beginPath();c.moveTo(-48,8);c.bezierCurveTo(-54,-44,-28,-64,0,-64);c.bezierCurveTo(28,-64,54,-44,48,8);c.quadraticCurveTo(46,-8,40,-14)
  for(let k=0;k<8;k++){const x0=40-k*10,x1=x0-10;c.arc((x0+x1)/2,-16,5.2,0,P,0)}
  c.quadraticCurveTo(-46,-8,-48,8);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.44);c.lineWidth=4.5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  // what's in her hands
  const paper=(x,y,s,r=0,sy=1)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s*sy);rr(c,-29,-33,58,66,4);fs(c,'#fffdf5',3);lt(c,'OFFER',0,-19,13,'#1f8a4c',.5,0,2.2);c.lineWidth=2.4;c.strokeStyle='#c8c4d8';for(const y of[-3,5,13]){c.beginPath();c.moveTo(-19,y);c.lineTo(19,y);c.stroke()}
    pg(c,...[...Array(10)].flatMap((_,k)=>{const q=k%2?4:9,a=k*P/5-P/2;return[14+cos(a)*q,23+sin(a)*q]}));fs(c,'#ffd23f',2.2);c.restore()}
  const env=(x,y,s,a=1,back)=>{c.save();c.globalAlpha=a;c.translate(x,y);c.scale(s,s);const fy=1-2*op
    if(back){if(fy<0){c.save();c.translate(0,-22);c.scale(1,fy);pg(c,-34,0,0,26,34,0);fs(c,'#e0d3b5',3);c.restore()}c.restore();return}
    rr(c,-34,-22,68,44,4);fs(c,'#f6efe0',3)
    c.beginPath();c.moveTo(-34,22);c.lineTo(0,2);c.lineTo(34,22);c.lineWidth=2.5;c.strokeStyle=O;c.stroke()
    if(fy>=0){c.save();c.translate(0,-22);c.scale(1,fy);pg(c,-34,0,0,26,34,0);fs(c,'#ede2c8',3);c.restore()}
    if(op<.5){c.save();c.translate(0,-22+26*(1-2*op));c.scale(1,1-2*op);c.beginPath();c.moveTo(0,4);c.bezierCurveTo(-9,-4,-5,-12,0,-6);c.bezierCurveTo(5,-12,9,-4,0,4);fs(c,'#e8435a',2.4);c.restore()}
    c.restore()}
  const hand=(x,y)=>{el(c,x,y,8.5,8);fs(c,S,3)}
  const arm=(sx,sy,x,y,k=0)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo((sx+x)/2+k,(sy+y)/2+10,x,y);st(c,12,C)}
  if(t<.44){
    // letter peeking out of the envelope, then lifted up to read
    const ey=190,ly=ey+8-sl*34
    arm(110,142,96,194,-12);arm(146,142,160,194,12)
    env(128,ey,1,1,1);if(op>.5){c.save();c.beginPath();c.rect(0,0,256,ey+18);c.clip();paper(128,ly,.9);c.restore()}
    env(128,ey,1);hand(96,194);hand(160,194)
  }else if(!air&&t<.5){
    // envelope dropped, letter clutched at chest
    {const d=sg(t,.44,.5);c.save();c.translate(128+d*20,190+d*90);c.rotate(d*.8);env(0,0,1);c.restore()}
    arm(110,142,104,166,-10);arm(146,142,152,166,10);paper(128,150,.85,0);hand(104,166);hand(152,166)
  }else if(air){
    const k=E(min(1,u*3))
    arm(146,142,146+44*k,142-40*k,0);paper(146+50*k,124-40*k,.78,.3*k);hand(146+44*k,142-40*k)
    arm(110,142,110-40*k,142-48*k,0);el(c,110-40*k,142-48*k,9);fs(c,S,3)
  }else{
    // hug the letter, then it folds back into its envelope for the loop
    const bob=sin((t-.74)/.26*P*2)*2
    const hy=166+bob+fold*28;arm(110,142,104-fold*8,hy,-10);arm(146,142,152+fold*8,hy,10)
    if(fold<1)paper(128,152+bob,.85,0,1-fold)
    if(fold>0)env(128,176+fold*14,fold)
    hand(104-fold*8,hy);hand(152+fold*8,hy)
  }
  c.restore()
    // little joy marks
  if(t>.3&&t<.46){c.lineWidth=3.5;c.strokeStyle=O;for(const a of[-2.5,-1.9,-1.25,-.65]){c.beginPath();c.moveTo(128+cos(a)*74,100+sin(a)*70);c.lineTo(128+cos(a)*88,100+sin(a)*84);c.stroke()}}
}
