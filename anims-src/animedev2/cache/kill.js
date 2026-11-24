// a fired-up girl with a wine-red wolf cut, white battle headband and teal track jacket yells "KILL THE CACHE!" and bonks the smug CACHE box that keeps serving the dusty v1 page with a giant squeaky refresh hammer, the browser flips to a sparkly v2 and she poses in victory, then the box tiptoes right back
// tags: angry, excited, anime, coding, hammer, refresh
// ---
// timeline: shout (bubble) -> wind up -> swing -> bonk + poof -> browser flips to v2 -> victory -> box sneaks back, browser flips to v1 -> she fumes
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k
// keyframes [[t,v...],...] eased with smoothstep between keys
const kf=(t,K)=>{for(let j=1;j<K.length;j++)if(t<=K[j][0]){const a=K[j-1],b=K[j],k=E((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,n)=>lp(v,b[n+1],k))}return K[K.length-1].slice(1)}
// head shape centred on the eyes' row, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6*pp**.5,y+ly-4*pp**.5,3.4*pp**.5,4.2*pp**.5);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// face: e iris colours, ex eye style, m mouth, mo mouth scale, br brow worry(+)/anger(-), bl blush
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.32*bl})`,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=3;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='grin'){const w=9;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='yell'){c.moveTo(-9,-4);c.quadraticCurveTo(0,-7,9,-4);c.quadraticCurveTo(9,13,0,14);c.quadraticCurveTo(-9,13,-9,-4);fs(c,'#a3304a',2.2/mo)
    c.save();c.clip();rr(c,-10,-8,20,6.5,2);fs(c,'#fff',0);el(c,0,14,6,4.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  c.restore()
}
const spk=(c,x,y,r,f='#fff6a8',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,d=k%2?r*.28:r;c.lineTo(x+cos(q)*d,y+sin(q)*d)}c.closePath();fs(c,f,w)}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
// anger vein mark
const vein=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<4;k++){const a=k*P/2+P/4;c.moveTo(cos(a)*3+cos(a-P/4)*4,sin(a)*3+sin(a-P/4)*4);c.quadraticCurveTo(cos(a)*3,sin(a)*3,cos(a)*3+cos(a+P/4)*4,sin(a)*3+sin(a+P/4)*4)}
  c.lineWidth=5.5;c.strokeStyle=O;c.stroke();c.lineWidth=2.6;c.strokeStyle='#ff3b4e';c.stroke();c.restore()}
// hand-lettered text: glyphs are centerline paths on a grid with cap height 10 (baseline 10), stroked thick with round caps
const G={" ":[2.6,''],
  "!":[1,'M0.5 0V6.4M0.5 9.7V9.8'],
  1:[3.2,'M0.4 2.1L2.6 0V10'],
  2:[5.5,'M0.2 2.2Q0.8 0 2.8 0Q5.3 0 5.3 2.6Q5.3 4.4 3.2 6.2L0 10H5.5'],
  "?":[5,'M0 2.2Q0.6 0 2.6 0Q5 0 5 2.4Q5 4 3.2 4.9Q2.4 5.3 2.4 6.6M2.4 9.7V9.8'],
  A:[6,'M0 10L3 0L6 10M1.2 6.6H4.8'],
  B:[6,'M0 10V0H3.3Q5.6 0 5.6 2.5Q5.6 4.9 3.3 4.9H0M3.3 4.9Q6 4.9 6 7.45Q6 10 3.3 10H0'],
  C:[5.8,'M5.8 1.6Q4.7 0 3.1 0Q0 0 0 5Q0 10 3.1 10Q4.7 10 5.8 8.4'],
  E:[5.2,'M5.2 0H0V10H5.2M0 4.9H4.2'],
  H:[6,'M0 0V10M6 0V10M0 5H6'],
  I:[3,'M0 0H3M1.5 0V10M0 10H3'],
  K:[5.8,'M0 0V10M5.6 0L0 6.2M2 4.1L5.8 10'],
  L:[5,'M0 0V10H5'],
  N:[6,'M0 10V0L6 10V0'],
  O:[6.4,'E3.2 5 3.2 5'],
  T:[6,'M0 0H6M3 0V10'],
  v:[4.6,'M0 3.8L2.3 10L4.6 3.8']}
// gp traces one glyph path: M L H V Q Z as in svg (absolute, one segment per letter) plus E cx cy rx ry for a full ellipse
const gp=(c,d)=>{c.beginPath();let x=0,y=0
  for(const[,o,a]of d.matchAll(/([MLHVQEZ])([^MLHVQEZ]*)/g)){const n=a.trim()?a.trim().split(/[\s,]+/).map(Number):[]
    if(o=='M')c.moveTo(x=n[0],y=n[1]);else if(o=='L')c.lineTo(x=n[0],y=n[1]);else if(o=='H')c.lineTo(x=n[0],y);else if(o=='V')c.lineTo(x,y=n[0])
    else if(o=='Q')c.quadraticCurveTo(n[0],n[1],x=n[2],y=n[3]);else if(o=='E'){c.moveTo(n[0]+n[2],n[1]);c.ellipse(n[0],n[1],n[2],n[3],0,0,2*Math.PI)}else c.closePath()}}
// lt(c, text, x, y, h, fill, align=.5, ol=1.4, wt=1.9): x anchor, y middle of the cap height, h cap height px, ol outline px, wt stroke weight
const lt=(c,s,x,y,h,f,al=.5,ol=1.4,wt=1.9,O='#2b1d2e')=>{
  const k=h/10,gs=[...s].map(ch=>G[ch]??[2.6,'']),tr=1.5+wt*.5+2*ol/k,W=gs.reduce((q,g)=>q+g[0],0)+tr*(gs.length-1)
  c.save();c.translate(x-W*k*al,y-5*k);c.scale(k,k);c.lineCap=c.lineJoin='round'
  const ps=[];let px=0;for(const g of gs){if(g[1])ps.push([px,g[1]]);px+=g[0]+tr}
  for(const[pass,col,lw]of[[0,O,wt+2*ol/k],[1,f,wt]])if(lw>wt||pass){c.strokeStyle=col;c.lineWidth=lw;for(const[q,d]of ps){c.save();c.translate(q,0);gp(c,d);c.stroke();c.restore()}}
  c.restore();return W*k
}
// story time of each frame: quick frames on the swing, longer holds on the poses
const S=[0,.1,.22,.37,.405,.43,.455,.475,.525,.555,.59,.66,.74,.8,.85,.9,.94,.97]
export const frames=S.length,rim=4,delay=[90,170,170,130,160,50,170,100,80,80,90,200,200,150,150,140,110,110]
const SK='#f1c09a',H='#6e2446',Hd='#461329',Hl='#b04c78',J='#22b3a2',Jd='#147a6e',EY=['#8f2206','#ffb43a'],RED='#ff4458',YL='#ffd34d',
  HX=80,HY=126,HS=.92,BXc=201,BYb=234,WX=142,WY=66,WW=106,WH=90,L=70,BS=1.1
// the smug CACHE box, origin at its bottom centre; mood: smug shock flat sneak
const box=(c,x,y,sx,sy,mood,leg=0,look=-1)=>{
  c.save();c.translate(x,y);c.scale(BS,BS)
  if(leg){for(const f of[-1,1]){const u=(leg+(f>0))%2?6:0;c.beginPath();c.moveTo(f*12,-4);c.lineTo(f*13,6-u);sk(c,9);c.strokeStyle='#e9ae6c';c.lineWidth=3;c.stroke();el(c,f*15,7-u,6,3.5);fs(c,'#7a4a8a',2.4)}}
  c.scale(sx,sy)
  pg(c,-31,-50,-2,-50,-8,-61,-37,-58);fs(c,'#c98b4f',3)
  pg(c,31,-50,2,-50,8,-61,37,-58);fs(c,'#c98b4f',3)
  rr(c,-31,-52,62,52,4);fs(c,'#e9ae6c')
  c.beginPath();c.moveTo(-31,-45);c.lineTo(31,-45);sk(c,2,'#b77b40')
  rr(c,-6,-52,12,9,1);fs(c,'#f3d29a',2)
  if(mood=='flat'){c.lineWidth=3;c.strokeStyle=O;for(const f of[-1,1]){c.beginPath();c.moveTo(f*12-4,-38);c.lineTo(f*12+4,-30);c.moveTo(f*12+4,-38);c.lineTo(f*12-4,-30);c.stroke()}}
  else if(mood=='shock'){for(const f of[-1,1]){el(c,f*12,-34,6.5,7.5);fs(c,'#fff',2.6);el(c,f*12+look,-34,2,2.4);fs(c,O,0)}el(c,0,-24,3,3.6);fs(c,'#a3304a',2.2)}
  else{for(const f of[-1,1]){c.save();el(c,f*12,-34,7,6.5);c.clip();el(c,f*12,-34,7,6.5);fs(c,'#fff',0);el(c,f*12+look*3.5,-31.5,3,3.6);fs(c,O,0);c.restore()
      c.beginPath();c.moveTo(f*12-8,-35.5-f*.8);c.lineTo(f*12+8,-35.5+f*.8);c.lineTo(f*12+8,-41);c.lineTo(f*12-8,-41);fs(c,'#e9ae6c',0);c.beginPath();c.moveTo(f*12-8.5,-35.5-f*.8);c.lineTo(f*12+8.5,-35.5+f*.8);sk(c,3)
      c.beginPath();c.ellipse(f*12,-34,7,6.5,0,.15*P,.85*P);sk(c,2)}
    el(c,-21,-25,4.5,2.6);fs(c,'rgba(255,100,125,.35)',0);el(c,21,-25,4.5,2.6);fs(c,'rgba(255,100,125,.35)',0)
    c.beginPath();if(mood=='sneak'){c.moveTo(-7,-26);c.quadraticCurveTo(-3.5,-21,0,-25);c.quadraticCurveTo(3.5,-21,7,-26)}else{c.moveTo(-7,-25);c.quadraticCurveTo(0,-21,8,-28)}sk(c,2.4)}
  rr(c,-25,-19,50,15,3);fs(c,'#fffaf0',2.4);lt(c,'CACHE',0,-11.5,9.5,'#2b1d2e',.5,0,2)
  c.restore()
}
export default(c,_,i)=>{
  const t=S[i]
  // hammer: angle, hand x, hand y (the swing itself is one fast linear frame)
  const sw=t>.41&&t<.45,[A0,hx0,hy0]=sw?(u=>[lp(-2.05,.06,u),lp(118,132,u),lp(120,170,u)])((t-.41)/.04*1.24)
    :kf(t,[[0,-1.36,124,126],[.34,-1.36,124,126],[.41,-2.05,118,120],[.45,.06,132,170],[.47,-.12,132,165],[.5,.06,132,171],[.53,.06,132,171],[.63,-1.42,122,122],[1,-1.36,124,126]])
  const flat=t>=.45&&t<.49,gone=t>=.49&&t<.78,shk=[0,0]
  const vic=sg(t,.56,.62)*(1-sg(t,.81,.835)),hop=0,pm=vic>.9&&i%2?6:0
  const bt=t>=.96?t-.96:t+.04,bub=bt<.07?(u=>1.05*sin(u*P*.62)/sin(P*.62)-.05*E((u-.8)/.2))(bt/.07):1-sg(bt,.36,.4)
  // browser flip: 0 = v1 dusty, 1 = v2 fresh
  const fl=t<.5?0:t<.58?(t-.5)/.08:t<.92?1:t<.98?1-(t-.92)/.06:0
  c.save();c.translate(shk[0],shk[1])
  // ---- browser window
  {const sx=cos(fl*P),v2=fl>.5,cx=WX+WW/2,cy=WY+WH/2
    c.save();c.translate(cx,cy);c.scale(max(.03,abs(sx)),1);c.translate(-cx,-cy)
    rr(c,WX,WY,WW,WH,8);fs(c,v2?'#ffffff':'#eadcbc')
    c.save();rr(c,WX,WY,WW,WH,8);c.clip()
    c.beginPath();c.rect(WX,WY,WW,17);fs(c,v2?'#6c63ff':'#8c8170',0)
    c.beginPath();c.moveTo(WX,WY+17);c.lineTo(WX+WW,WY+17);sk(c,3)
    ;['#ff6b6b','#ffd34d','#5fd38a'].forEach((k,n)=>{el(c,WX+10+n*9,WY+8.5,3.2);fs(c,v2?k:'#b5aa95',1.6)})
    rr(c,WX+38,WY+4,WW-46,9,4.5);fs(c,v2?'#efeeff':'#d8ccb0',1.6)
    if(v2){rr(c,WX+10,WY+25,WW-20,10,4);fs(c,'#ffd0e6',0);for(let n=0;n<3;n++){rr(c,WX+12+n*30,WY+WH-19,24,10,3);fs(c,['#7ee0c8','#ffd34d','#a7c4ff'][n],1.8)}}
    else{for(let n=0;n<3;n++){rr(c,WX+12,WY+WH-22+n*7,WW-24-n*18,3,1.5);fs(c,'#cdbb95',0)}
      c.beginPath();for(let n=0;n<4;n++){const a=n*P/8;c.moveTo(WX,WY+17);c.lineTo(WX+cos(a)*26,WY+17+sin(a)*26)}
      for(const r of[9,17]){c.moveTo(WX+r,WY+17);for(let n=1;n<4;n++){const a=n*P/8;c.quadraticCurveTo(WX+cos(a-P/16)*r*.8,WY+17+sin(a-P/16)*r*.8,WX+cos(a)*r,WY+17+sin(a)*r)}}
      sk(c,1.3,'#9b8f78')}
    c.restore()
    rr(c,WX,WY,WW,WH,8);sk(c,3.5)
    lt(c,v2?'v2':'v1',cx,cy+3,30,v2?'#ff3d8b':'#7a5c3a',.5,0,2.3)
    c.restore()}
  // ---- impact star behind the box
  if(flat){const p=(t-.45)/.04;c.save();c.translate(BXc,BYb-36);c.scale(.9+p*.25,.9+p*.25)
    c.beginPath();for(let k=0;k<20;k++){const a=k*P/10,r=k%2?21:35;c.lineTo(cos(a)*r*1.12,sin(a)*r*.85)}c.closePath();fs(c,'#fff15c',3);c.restore()}
  // ---- the cache box: smug, shocked on the wind-up, flattened by the bonk, gone, then tiptoeing back
  if(!gone){
    const mood=flat?'flat':t>.36&&t<.45?'shock':t>.93||t<.04?'sneak':'smug'
    const walk=t>=.78&&t<.92,ox=t>=.78?80*max(0,1-(t-.78)/.14):0
    if(t>.36&&t<.45)drop(c,BXc+40,BYb-66,.85,.3)
    box(c,BXc+ox,BYb-(walk?7+(i%2)*3:0),flat?1.3:1,flat?.5:1,mood,walk?i:0,t>.36&&t<.45?-1.5:-1)}
  // ---- poof cloud where the box was
  if(t>=.47&&t<.62){const p=(t-.47)/.15;c.globalAlpha=1-p*p
    for(const[u,v,r]of[[-22,-6,16],[0,-16,19],[22,-6,16],[-12,8,14],[14,10,15],[0,0,16]]){el(c,BXc+u*(1+p*.6),BYb-26+v*(1+p*.6)-p*10,r*(.6+p*.6));fs(c,'#f4f2fa',2.5)}
    for(let k=0;k<4;k++){const a=-P*.9+k*P*.27;spk(c,BXc+cos(a)*(30+p*24),BYb-30+sin(a)*(24+p*22),7*(1-p))}
    c.globalAlpha=1}
  // ---- swing swoosh behind her
  if(sw){const a1=-2.05,a2=A0-.12,hx=hx0,hy=hy0;c.beginPath();c.arc(hx,hy,L+26,a1,a2);c.arc(hx,hy,L-16,a2+.1,a1+.25,1);c.closePath();fs(c,'#fff',2.6)
    for(const r of[L-4,L+12]){c.beginPath();c.arc(hx,hy,r,a1+.35,a2-.08);sk(c,2.2)}}
  // ---- girl: headband tails and back hair
  const gx=HX,gy=HY-hop
  c.save();c.translate(gx,gy);c.scale(HS,HS)
  {const k=t>.36&&t<.6?1:0,w=k*sin(i*1.9)*4,w2=k*sin(i*1.9+1.3)*5
    c.beginPath();c.moveTo(-44,-36);c.quadraticCurveTo(-62,-44+w,-76,-34+w2);c.lineTo(-73,-24+w2);c.quadraticCurveTo(-60,-32+w,-44,-26);c.closePath();fs(c,'#fff',3)
    c.beginPath();c.moveTo(-44,-32);c.quadraticCurveTo(-58,-20+w2,-70,-10+w);c.lineTo(-65,-2+w);c.quadraticCurveTo(-54,-12+w2,-42,-24);c.closePath();fs(c,'#fff',3)}
  c.beginPath();c.moveTo(-48,-18);c.bezierCurveTo(-56,14,-54,38,-64,58)
  qs(c,[-64,58,-50,52,-48,70,-34,58,0,62,34,58,48,70,50,52,64,58],.12);c.bezierCurveTo(54,38,56,14,48,-18);c.arc(0,-18,48,0,P,1);c.closePath();fs(c,Hd)
  c.restore()
  // ---- torso: track jacket with stripes over a white tee
  const tb=gy+44
  c.beginPath();c.moveTo(gx-18,tb);c.bezierCurveTo(gx-46,tb+4,gx-52,tb+26,gx-52,240);c.lineTo(gx+52,240);c.bezierCurveTo(gx+52,tb+26,gx+46,tb+4,gx+18,tb);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(gx-15,tb+1);c.lineTo(gx,tb+22);c.lineTo(gx+15,tb+1);fs(c,'#fff',3)
  for(const f of[-1,1]){c.beginPath();c.moveTo(gx+f*15,tb);c.lineTo(gx+f*2,tb+24);c.lineTo(gx+f*4,tb+40);c.lineTo(gx+f*22,tb+6);c.closePath();fs(c,Jd,3)
    c.beginPath();c.moveTo(gx+f*30,tb+5);c.quadraticCurveTo(gx+f*46,tb+12,gx+f*48,240);sk(c,4,'#fff')}
  c.beginPath();c.moveTo(gx+2,tb+30);c.lineTo(gx+2,240);sk(c,2.4)
  // ---- left arm: fist pump while shouting, V sign in victory
  {const up=max(1-sg(t,.36,.42),sg(t,.95,1)),pump=up*(i%2?-4:3),ls=[gx-36,tb+10]
    const[lx,ly]=vic>.5?[gx-62,gy-4-pm]:[lp(gx-44,gx-62,up),lp(tb+60,gy-6+pump,up)]
    c.beginPath();c.moveTo(...ls);c.quadraticCurveTo(gx-66,tb+30,lx,ly+8);st(c,15,J)
    c.beginPath();c.moveTo(lx-7,ly+8);c.lineTo(lx+7,ly+11);sk(c,5,'#fff')
    if(vic>.5){for(const a of[-.32,.18]){c.beginPath();c.moveTo(lx,ly);c.lineTo(lx+sin(a)*16,ly-cos(a)*16);st(c,4.6,SK,3)}el(c,lx,ly+1,8.5,8);fs(c,SK,3.2);c.beginPath();c.moveTo(lx-4,ly-1);c.quadraticCurveTo(lx+2,ly-3,lx+5,ly+2);sk(c,2)}
    else{el(c,lx,ly,9.5,8.5);fs(c,SK,3.2);if(up>.5){c.beginPath();for(const u of[-4,0,4]){c.moveTo(lx+u,ly-7);c.lineTo(lx+u,ly-3)}sk(c,2)}}}
  // ---- head
  c.save();c.translate(gx,gy);c.scale(HS,HS)
  hd(c,SK)
  const ph=t<.36?'yell':t<.45?'wind':t<.56?'hit':t<.84?'win':t<.92?'see':'mad'
  face(c,ph=='yell'?{e:EY,op:.92,lx:4,ly:1,br:-1.1,m:'yell',mo:1.1+(i%2)*.08,bl:1.2}
    :ph=='wind'?{e:EY,op:.72,lx:5,ly:2,br:-1.3,m:'grit',mo:1.1}
    :ph=='hit'?{ex:'shut',m:'grit',mo:1.1,br:-.8}
    :ph=='win'?{ex:'happy',m:'grin',mo:1.2,br:.3,bl:1.6}
    :ph=='see'?{e:EY,op:1,lx:7,ly:0,pp:.6,br:.9,m:'o',bl:.8}
    :{e:EY,op:.78,lx:6,ly:1,br:-1.2,m:'grit',bl:1})
  // bangs: choppy wolf-cut fringe with long side locks
  c.beginPath();c.moveTo(-52,40);c.bezierCurveTo(-60,-44,-30,-70,0,-70);c.bezierCurveTo(30,-70,60,-44,52,40)
  qs(c,[52,40,46,24,47,4,40,-8,34,-24,26,-6,20,-30,10,-10,2,-32,-8,-12,-16,-30,-24,-8,-32,-26,-40,-8,-47,4,-46,24,-52,40],.12);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.18,P*1.4);sk(c,5,Hl);c.beginPath();c.arc(0,-26,40,P*1.52,P*1.62);sk(c,5,Hl)
  c.beginPath();c.moveTo(2,-68);c.quadraticCurveTo(-2,-90,16,-92);c.quadraticCurveTo(6,-86,8,-68);fs(c,H,3)
  // headband with a red circle, knot at the back
  c.beginPath();c.moveTo(-50,-34);c.quadraticCurveTo(0,-66,50,-34);st(c,11,'#fff',3.2)
  el(c,0,-50,6.5,6);fs(c,'#ff3b4e',2.4)
  el(c,-48,-32,7,6);fs(c,'#fff',3)
  if(ph=='yell'||ph=='wind'||ph=='mad')vein(c,34,-52,ph=='mad'?.8+.3*(i%2):1+.15*(i%2))
  if(ph=='see'||ph=='hit'&&t>.47)drop(c,44,-22,.9,.3)
  c.restore()
  // ---- hammer: swing smear, handle, squeaky head with a refresh arrow, then the gripping fist and arm
  {const rs=[gx+36,tb+10],dx=cos(A0),dy=sin(A0),hx=hx0,hy=hy0-pm,cx=hx+dx*L,cy=hy+dy*L
    c.beginPath();c.moveTo(hx-dx*12,hy-dy*12);c.lineTo(cx-dx*16,cy-dy*16);st(c,8,'#ffb547',3.2)
    c.save();c.translate(cx,cy);c.rotate(A0)
    rr(c,-19,-29,38,58,9);fs(c,RED)
    c.save();rr(c,-19,-29,38,58,9);c.clip();rr(c,-20,-15,40,30,0);fs(c,YL,2.6);c.beginPath();c.moveTo(-14,-25);c.lineTo(14,-25);sk(c,4,'#ff9aa6');c.restore()
    rr(c,-19,-29,38,58,9);sk(c,3.5)
    c.rotate(-A0);el(c,0,0,11.5);fs(c,'#fff',2.4)
    c.beginPath();c.arc(0,0,6.5,-P*.35,P*1.25);sk(c,2.8);c.beginPath();const ax=cos(-P*.35)*6.5,ay=sin(-P*.35)*6.5;c.moveTo(ax-4.5,ay-3);c.lineTo(ax+1,ay+.5);c.lineTo(ax+2.5,ay-5.5);sk(c,2.8)
    c.restore()
    const mx=(rs[0]+hx)/2+18,my=(rs[1]+hy)/2+8
    c.beginPath();c.moveTo(...rs);c.quadraticCurveTo(mx,my,hx-dx*2,hy-dy*2+4);st(c,15,J)
    el(c,hx,hy,10,9,A0);fs(c,SK,3.2);c.save();c.translate(hx,hy);c.rotate(A0);c.beginPath();for(const u of[-4,0,4]){c.moveTo(u,-8);c.lineTo(u,-3)}sk(c,2);c.restore()}
  // ---- BONK lettering
  if(t>=.45&&t<.53){const s=t<.46?1.1:1;c.save();c.translate(206,134);c.rotate(-.15);c.scale(s,s);lt(c,'BONK!',0,0,15,'#ffe14d',.5,1.4,2.2);c.restore()}
  // ---- fresh v2 sparkles
  if(t>.56&&t<.86){for(let k=0;k<5;k++){const q=sin((((t-.56)*3+k/5)%1)*P)
    spk(c,[WX-2,WX+WW-2,WX+WW-14,WX+20,WX+WW/2+14][k],[WY+20,WY+4,WY+WH+6,WY+WH+4,WY-4][k],q*(k%2?8:10),'#fff6a8',2.2)}}
  // ---- dust puffs when the box settles back in and the page goes stale again
  if(t>.92&&t<.99){const p=(t-.92)/.07;c.globalAlpha=1-p*.6;for(const f of[-1,1]){el(c,BXc+f*(28+p*6),BYb-4-p*5,7+p*3,5+p*2);fs(c,'#e2dccd',2)}c.globalAlpha=1}
  // ---- her reactions: "!?" when the box is back, sparkles in victory
  if(t>.84&&t<.93){const s=t<.86?.7:1;c.save();c.translate(34,62);c.rotate(-.15);c.scale(s,s);lt(c,'!?',0,0,18,'#ff4458',.5,1.4,2.3);c.restore()}
  if(vic>.3)for(let k=0;k<3;k++){const q=.4+.6*abs(sin(i*1.3+k*2));spk(c,[22,22,150][k],[96,170,100][k],q*8*vic,'#fff6a8',2.2)}
  // ---- battle-cry bubble
  if(bub>.01){const s2=bt<.36?[(i*7%3-1)*1.5,(i*5%3-1)*1.2]:[0,0];c.save();c.translate(71+s2[0],35+s2[1]);c.scale(bub,bub);c.rotate(-.04)
    c.beginPath();for(let k=0;k<32;k++){const a=k*P/16,r=k%2?1:1.14;c.lineTo(cos(a)*54*r,sin(a)*25.5*r)}c.closePath();fs(c,'#fff',3.5)
    c.beginPath();c.moveTo(18,20);c.lineTo(34,44);c.lineTo(30,18);fs(c,'#fff',3.5);c.beginPath();c.moveTo(17,18);c.lineTo(31,17);sk(c,4,'#fff')
    lt(c,'KILL THE',0,-9,13,'#ff3b4e',.5,1.3,2.1);lt(c,'CACHE!',0,11,13,'#ff3b4e',.5,1.3,2.1)
    c.restore()}
  c.restore()
}
