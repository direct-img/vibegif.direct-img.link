// a girl with curly brown afro puffs, a teal polo and an ID lanyard sees the server rack flash ERR, yanks its thick power cable out of the wall outlet so every light dies, blows on the plug, plugs it back in, and as the lights flicker amber then all green she gives a relieved, smug thumbs-up
// tags: proud, anime, coding, server, power-cable, restart
// ---
// layout: girl on the left, wall outlet in the middle, server rack on the right, the cable runs from the outlet along the floor into the rack's power supply
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k,hop=(t,a,b)=>t<a||t>b?0:sin((t-a)/(b-a)*P)
const L2=(p,q,k)=>[lp(p[0],q[0],k),lp(p[1],q[1],k)],qp=(a,m,b,u)=>[0,1].map(j=>(1-u)**2*a[j]+2*(1-u)*u*m[j]+u*u*b[j])
const rnd=n=>{const s=sin(n*91.7+12.3)*43758.5;return s-Math.floor(s)}
// hand-lettered text: glyphs are centerline paths on a grid with cap height 10 (baseline 10), stroked thick with round caps
const G={E:[5.2,'M5.2 0H0V10H5.2M0 4.9H4.2'],
  K:[5.8,'M0 0V10M5.6 0L0 6.2M2 4.1L5.8 10'],
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
// head shape centred on the eyes' row, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// glossy anime eye at x (f=-1 left, 1 right); op lid openness, lx/ly look, pp pupil scale, ex special shapes
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,r=k%2?2.2:7.5;c.lineTo(x+lx+cos(q)*r,y+ly+sin(q)*r)}c.closePath();fs(c,'#fff',0);el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6*pp**.5,y+ly-4*pp**.5,3.4*pp**.5,4.2*pp**.5);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// eyes (o.L / o.R override one side), brows (br>0 worried, <0 cross), blush and mouth: smile grin o cat smug grit tongue wave flat
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,by=0,bc=O,bl=1}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${min(.5,.3*bl)})`,0)}
    const q={...o,...(f<0?o.L:o.R)},b=q.br??br,y=q.by??by;eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*b-y);c.quadraticCurveTo(f*20,-15-b-y,f*28,-12+3*b-y);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='tongue'){c.moveTo(-6,-1);c.quadraticCurveTo(0,3,6,-1);c.stroke();c.beginPath();c.moveTo(1,.5);c.quadraticCurveTo(3,7,6,5);c.quadraticCurveTo(7,2,5.5,-.5);fs(c,'#ff7d96',2/mo)}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-7,-1);c.quadraticCurveTo(1,5,8,-4);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else{c.moveTo(-5,0);c.lineTo(5,0);c.stroke()}
  c.restore()
}
const spk=(c,x,y,r,f='#fff3a0',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,d=k%2?r*.32:r;c.lineTo(x+cos(q)*d,y+sin(q)*d)}c.closePath();fs(c,f,w)}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
// each frame samples the story at its own time TT[i] and is held for DL[i] ms: quick through the yank, long on the dead server and the thumbs-up
const TT=[0,.075,.11,.15,.175,.2,.24,.28,.34,.37,.4,.43,.47,.5,.54,.57,.6,.63,.67,.7,.73,.77,.81,.86,.92,.96]
const DL=[160,160,100,120,120,70,100,200,100,100,100,100,80,120,90,90,90,90,100,100,80,200,200,200,90,100]
export const frames=26,delay=DL,rim=4
const S='#d9a477',H='#4a2c1e',Hd='#331d14',Hl='#7a4e36',J='#2bb3a0',Jd='#1d8a7a',Jl='#7fe3d2',PN='#3b4766',CB='#3d4357',CBl='#6f7894',I=['#2d5a2a','#8ad070']
// arm: skin limb from shoulder s bending through m to hand h, a short teal polo sleeve over its top
const arm=(c,s,m,h)=>{c.beginPath();c.moveTo(...s);c.quadraticCurveTo(...m,...h);st(c,10,S,3.2)
  const u=.36,a=L2(s,m,u),b=qp(s,m,h,u);c.beginPath();c.moveTo(...s);c.quadraticCurveTo(...a,...b);st(c,16,J,3.2)}
// fist (curled fingers toward +x, a rotates), thumbs-up fist
const fist=(c,x,y,a=0)=>{c.save();c.translate(x,y);c.rotate(a);el(c,0,0,8.5,8);fs(c,S,3.2);c.beginPath();for(const v of[-3,1.5])c.moveTo(1,v),c.quadraticCurveTo(6,v+.5,7.5,v+2.5);sk(c,1.8);c.restore()}
const thumb=(c,x,y)=>{rr(c,x-4.5,y-21,8.5,17,4.2);fs(c,S,3.2);el(c,x+1,y,9.5,8.5);fs(c,S,3.2);c.beginPath();for(const v of[-3,1,5])c.moveTo(x+3,y+v),c.lineTo(x+9,y+v);sk(c,1.8)}
// power plug: head centred on x,y with a little bolt, prongs out of its top (pr), cable leaves from the bottom; a rotates it
const plug=(c,x,y,a,pr)=>{c.save();c.translate(x,y);c.rotate(a)
  if(pr)for(const f of[-1,1]){rr(c,f*6-2.5,-28,5,17,2);fs(c,'#e4e8f0',2.6)}
  rr(c,-7,10,14,11,3);fs(c,CB,2.8);rr(c,-14,-13,28,26,8);fs(c,'#4b5269',3.2)
  c.beginPath();c.moveTo(2,-9);c.lineTo(-4,0);c.lineTo(1,0);c.lineTo(-2,8);c.lineTo(5,-2);c.lineTo(0,-2);c.lineTo(3,-9);c.closePath();fs(c,'#ffd34d',1.6)
  c.beginPath();c.moveTo(-9,-7);c.lineTo(-9,4);sk(c,2.6,CBl);c.restore()}
const SO=[138,168]
export default(c,_,i)=>{
  const t=TT[i]
  // status: err -> off (unplugged) -> boot (flicker) -> ok, a red flicker at the end leads back into err
  const s0=t>=.96||t<.2?'err':t<.5?'off':t<.66?'boot':'ok'
  // body: braced back for the yank, a little hop when it goes green
  const bx=-3*sg(t,.15,.18)*(1-sg(t,.26,.3)),by=-5*hop(t,.66,.74)
  const gx=74+bx,ha=t<.15?.04:t<.25?-.05:t<.32?.03:t<.45?.06:t<.66?.02:t<.76?0:t<.96?-.06:.04
  // near (right) hand: rest, reach, grip, yank up, look, blow, plug back and hold it in, thumbs-up, rest
  const RN=[105,186],GP=[SO[0],SO[1]+8],LK=[118,124],BL=[118,118],TU=[114,124],MR=[108,164],MG=[114,178],MH=[100,174],MT=[118,168]
  let hn,mn,pa=0,held=0
  if(t<.15){const k=sg(t,.06,.15);hn=L2(RN,GP,k);mn=L2(MR,MG,k)}
  else if(t<.185){hn=[GP[0]-(i%2),GP[1]];mn=MG}
  else if(t<.25){const k=1-(1-min(1,(t-.185)/.045))**3;hn=L2(GP,LK,k);mn=L2(MG,MH,k);pa=.25*k;held=1}
  else if(t<.45){const k=sg(t,.31,.35);hn=L2(LK,BL,k);mn=MH;pa=lp(.25,0,k);held=1}
  else if(t<.5){const k=sg(t,.45,.5);hn=L2(BL,GP,k);mn=L2(MH,MG,k);held=k<.97}
  else if(t<.69){hn=[GP[0]+2*hop(t,.5,.54),GP[1]];mn=MG}
  else if(t<.9){const k=sg(t,.69,.77);hn=L2(GP,TU,k);mn=L2(MG,MT,k)}
  else{const k=sg(t,.9,.97);hn=L2(TU,RN,k);mn=L2(MT,MR,k)}
  // far (left) hand: hanging, then on the hip
  const RF=[43,186],HP=[50,184],k2=sg(t,.69,.77)*(1-sg(t,.9,.97)),hf=L2(RF,HP,k2),mf=L2([40,162],[18,158],k2)
  const pc=held?[hn[0]+8*sin(pa),hn[1]-8*cos(pa)]:SO
  // server rack (drawn 2px left of its numbers)
  c.save();c.translate(-2,0)
  rr(c,164,44,80,192,9);fs(c,'#3a3f4e');c.beginPath();c.moveTo(174,49);c.lineTo(234,49);sk(c,2.4,'#59607a')
  const fl=s0=='err'&&i%2==0
  rr(c,192,37,24,9,3);fs(c,'#555c6e',2.6)
  c.beginPath();c.arc(204,37,11,P,0);c.closePath();fs(c,s0=='err'?(fl?'#ff4545':'#a8303e'):s0=='ok'?'#5be38a':'#5a5f70',3)
  c.beginPath();c.arc(204,37,6.5,P*1.2,P*1.45);sk(c,2.4,'rgba(255,255,255,.8)')
  if(fl)for(let k=0;k<5;k++){const a=-P*.92+k*P*.21;c.beginPath();c.moveTo(204+cos(a)*15,35+sin(a)*13);c.lineTo(204+cos(a)*21,35+sin(a)*19);sk(c,3.4,'#ff4545')}
  rr(c,172,56,64,28,6);fs(c,'#10131c',2.8)
  if(s0=='err')lt(c,'ERR',204,70,13,'#ff5a5a',.5,0,2.2)
  else if(s0=='ok')lt(c,'OK',204,70,13,'#6dff94',.5,0,2.2)
  else if(s0=='boot'){rr(c,180,66,48,8,4);fs(c,'#2a2e3c',0);rr(c,180,66,max(8,48*sg(t,.5,.64)),8,4);fs(c,'#ffc23d',0)}
  if(t>=.2&&t<.235){c.beginPath();c.moveTo(184,70);c.lineTo(224,70);sk(c,3,'#fff')}
  const tw=i*5%12
  for(let k=0;k<4;k++){const y=92+k*29;rr(c,172,y,64,23,4);fs(c,'#555c6e',2.6)
    c.beginPath();for(let v=0;v<3;v++)c.moveTo(180+v*7,y+6),c.lineTo(180+v*7,y+17);sk(c,2.4,'#3a3f4e')
    for(let v=0;v<3;v++){const r=rnd(k*3+v+i*7),x=210+v*9,yy=y+11.5
      const f=s0=='err'?((k+v+i)%2?'#ff5a5a':'#6e2630'):s0=='off'?'#252833':s0=='boot'?(r<.4?'#252833':'#ffc23d'):t>.9&&k==1&&v==2?'#ff5a5a':k*3+v==tw?'#d6ffe2':'#5df08a'
      if(s0=='ok'&&t<.76){c.save();c.globalAlpha=.45*(1-sg(t,.66,.76));el(c,x,yy,8);fs(c,'#6dff94',0);c.restore()}
      el(c,x,yy,3.6);fs(c,f,1.8)}}
  rr(c,172,210,64,18,4);fs(c,'#2d313d',2.6);rr(c,178,213,12,12,3);fs(c,'#14161f',2)
  for(let v=0;v<4;v++){c.beginPath();c.moveTo(200+v*8,214);c.lineTo(200+v*8,224);sk(c,2.2,'#454b5e')}
  c.restore()
  // wall outlet: two sockets, the plug lives in the top one
  rr(c,122,140,32,66,7);fs(c,'#f6f1e4');el(c,138,181,1.8);fs(c,'#cfc6ad',1.4)
  for(const y of[SO[1],194]){rr(c,127,y-11,22,22,6);fs(c,'#e8e1cd',2.2);for(const f of[-1,1]){rr(c,138+f*4.5-1.6,y-7,3.2,9,1);fs(c,O,0)}el(c,138,y+6,2.2,2);fs(c,O,0)}
  // spark when it pops out
  if(t>=.2&&t<.27){const k=(t-.2)/.07;c.save();c.translate(SO[0],SO[1]);for(let j=0;j<7;j++){const a=j*P*2/7+.3;c.beginPath();c.moveTo(cos(a)*(9+k*10),sin(a)*(9+k*10));c.lineTo(cos(a)*(17+k*14),sin(a)*(17+k*14));st(c,2.6,'#ffd34d',1.6)}c.restore()}
  // girl: afro puffs and back hair
  const hx=gx,hy=90+by,pb=t>.2&&t<.27?2:0
  c.save();c.translate(hx,hy);c.rotate(ha);c.scale(.72,.72)
  for(const f of[-1,1]){c.beginPath();for(let k=0;k<90;k++){const a=k*P/45,r=27+pb+3.4*abs(sin(a*6.5))**.6;c.lineTo(f*46+cos(a)*r,-52+sin(a)*r)}c.closePath();fs(c,H,4.4)
    c.beginPath();for(const[u,v]of[[-10,-8],[6,-14],[-4,6],[12,4]]){c.moveTo(f*46+u+4,-52+v);c.arc(f*46+u,-52+v,4.5,0,P*1.3)}sk(c,2.6,Hl);el(c,f*29,-38,7.5,9.5,f*.6);fs(c,'#ffcf3f',3)}
  c.beginPath();c.moveTo(-46,-14);c.bezierCurveTo(-54,14,-50,30,-42,38);c.lineTo(42,38);c.bezierCurveTo(50,30,54,14,46,-14);fs(c,Hd,4.4)
  c.restore()
  // legs, sneakers
  for(const f of[-1,1]){c.beginPath();c.moveTo(gx+f*10,188);c.lineTo(74+f*11,224);st(c,13,PN,3.2)
    c.beginPath();c.moveTo(74+f*11-9,236);c.quadraticCurveTo(74+f*11-9,224,74+f*11+f*2,224);c.quadraticCurveTo(74+f*11+f*12,226,74+f*11+f*12,236);c.closePath();fs(c,'#f4f4f8',3.2)
    c.beginPath();c.moveTo(74+f*11-8,232);c.lineTo(74+f*11+f*11,232);sk(c,2.2,'#ff7a5c')}
  // neck, polo, collar, placket, lanyard and badge
  rr(c,gx-6,116+by,12,18,4);fs(c,'#c48e62',3)
  c.beginPath();c.moveTo(gx-13,128+by);c.quadraticCurveTo(gx-28,129+by,gx-29,144+by);c.lineTo(gx-28,196);c.quadraticCurveTo(gx,201,gx+28,196);c.lineTo(gx+29,144+by);c.quadraticCurveTo(gx+28,129+by,gx+13,128+by);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(gx-26,190);c.quadraticCurveTo(gx,195,gx+26,190);sk(c,2.2,Jd)
  c.beginPath();c.moveTo(gx,134+by);c.lineTo(gx,152+by);sk(c,2.4,Jd);for(const v of[140,147]){el(c,gx,v+by,1.6);fs(c,'#fff',1.2)}
  for(const f of[-1,1]){c.beginPath();c.moveTo(gx+f*1,133+by);c.lineTo(gx+f*14,127+by);c.lineTo(gx+f*12,141+by);c.closePath();fs(c,Jl,2.8)}
  c.beginPath();c.moveTo(gx-9,131+by);c.lineTo(gx-2,164+by);c.moveTo(gx+9,131+by);c.lineTo(gx+2,164+by);sk(c,3,'#ff7a5c')
  rr(c,gx-9,162+by,18,22,3);fs(c,'#fff',2.6);el(c,gx,169+by,3.6);fs(c,'#ffcf9a',1.4);c.beginPath();c.moveTo(gx-5,177+by);c.lineTo(gx+5,177+by);sk(c,2,'#7aa0d8')
  // head and face
  c.save();c.translate(hx,hy);c.rotate(ha);c.scale(.72,.72)
  hd(c,S,4.4)
  const fc=t>=.96||t<.06?{e:I,lx:7,ly:-3,pp:.6,m:'o',br:.6,by:3}
    :t<.15?{e:I,op:.5,lx:7,m:'flat',br:-.4}
    :t<.2?{e:I,op:.72,lx:8,ly:5,m:'grit',br:-.8}
    :t<.25?{ex:'shut',m:'grit',br:-.8}
    :t<.32?{e:I,lx:8,ly:-3,m:'o',mo:.8,br:.3,by:2}
    :t<.45?{ex:'calm',m:'o',mo:.75,bl:1.6}
    :t<.5?{e:I,lx:8,ly:6,m:'tongue',br:-.3}
    :t<.66?{e:I,lx:8,ly:-4,pp:1.15,m:'wave',br:.8}
    :t<.76?{ex:'happy',m:'grin',mo:1.1,bl:1.6}
    :{e:I,op:.7,lx:3,ly:1,m:'smug',mo:1.15,bl:1.6,L:{ex:'happy',by:2},R:{br:-.3}}
  face(c,{...fc,bc:Hd})
  c.beginPath();c.moveTo(-50,18);c.bezierCurveTo(-56,-40,-30,-66,0,-66);c.bezierCurveTo(30,-66,56,-40,50,18)
  c.lineTo(48,-8);for(let k=1;k<=8;k++){const x=48-k*12,y=k==8?18:-8-(k==4?4:0);c.quadraticCurveTo(x+6,y+14,x,y)}c.closePath();fs(c,H,4.4)
  c.beginPath();for(const[u,v]of[[-26,-36],[2,-46],[26,-34],[-10,-24],[16,-22]]){c.moveTo(u+4.5,v);c.arc(u,v,4.5,0,P*1.3)}sk(c,2.4,Hd)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.46);sk(c,5,Hl)
  if(t>=.06&&t<.2)drop(c,44,-18,1.1)
  c.restore()
  // the cable: from the plug down to the floor, then up into the rack's power supply
  const sn=sin(pa),cs=cos(pa),cx=pc[0]-sn*21,cy=pc[1]+cs*21,fx=min(cx-10,SO[0]-4)
  c.beginPath();c.moveTo(cx,cy);c.bezierCurveTo(cx-sn*30,cy+cs*30,fx,238,fx+22,237);c.lineTo(168,237);c.quadraticCurveTo(182,237,182,222);st(c,7,CB,3)
  c.save();c.translate(-1.3,-1.3);c.beginPath();c.moveTo(cx-sn*4,cy+cs*4);c.bezierCurveTo(cx-sn*30,cy+cs*30,fx,238,fx+22,237);c.lineTo(168,237);sk(c,1.8,CBl);c.restore()
  rr(c,177,213,10,12,3);fs(c,'#4b5269',2.4)
  // plug, far arm, near arm, hands
  plug(c,pc[0],pc[1],pa,held)
  arm(c,[gx-22,138+by],[mf[0]+bx*.5,mf[1]],hf)
  arm(c,[gx+22,138+by],[mn[0]+bx*.5,mn[1]],hn)
  const k3=sg(t,.69,.77)*(1-sg(t,.9,.97))
  if(k3>.6)thumb(c,hn[0],hn[1]);else fist(c,hn[0],hn[1],t>=.08&&t<.69?-.2:P/2)
  fist(c,hf[0],hf[1],P/2)
  // blowing on the prongs: air puffs and dust flying off
  if(t>=.33&&t<.45){const mx=hx+3,my=hy+23,tx=pc[0]-4,ty=pc[1]-24
    for(let k=0;k<3;k++){const p=((t-.33)/.12*1.5+k/3)%1,x=lp(mx+10,tx-9,p),y=lp(my+(k-1)*4,ty+2+(k-1)*6,p);c.save();c.globalAlpha=min(1,sin(p*P)*1.6);c.beginPath();c.moveTo(x-7,y+2);c.quadraticCurveTo(x-3,y-3,x,y);c.quadraticCurveTo(x+3,y+3,x+7,y-2);st(c,2.8,'#d4ecff',1.5);c.restore()}
    for(let k=0;k<4;k++){const p=((t-.35)/.1+k/4)%1;if(t>=.35){el(c,pc[0]+4+p*20+k*2,pc[1]-30-p*14+k*3,1.8+k%2);fs(c,'#b8ad9a',1.2)}}}
  // click when it goes back in
  if(t>=.5&&t<.56){for(let k=0;k<4;k++){const a=-P*.75+k*P*.5;c.beginPath();c.moveTo(SO[0]+cos(a)*20,SO[1]+sin(a)*20);c.lineTo(SO[0]+cos(a)*27,SO[1]+sin(a)*27);sk(c,3)}}
  // green: sparkles, and a glint on the thumb
  if(t>=.66&&t<.95)[[153,94,0],[156,26,.35],[153,212,.65]].forEach(([x,y,o])=>{const s=sin(((t-.66)/.29*2+o)%1*P);if(s>.35)spk(c,x,y,10*s,'#b8ffcc')})
  if(t>=.78&&t<.9){const s=sin((t-.78)/.12*P);spk(c,hn[0]+12,hn[1]-24,8*s,'#fff3a0',2.2)}
}
