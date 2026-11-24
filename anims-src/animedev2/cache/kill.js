// a calm girl with a wine-red wolf cut and teal track jacket hits the big PURGE button expecting v2, gets a green PURGED toast but the smug browser still shows v1, mashes it until the toasts hit 99+, then goes dark, ties on a battle headband with flames behind her as a MISSION title card slams in
// tags: angry, frustrated, anime, coding, browser, mission
// ---
// beats: calm press -> "PURGED" but still v1, eye twitch -> harder, mashing, 99+ toasts, the page sticks its tongue out -> silence -> headband, war paint, flames, MISSION card -> poof back to calm
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
// head shape centred on the eyes' row, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);if(s)fs(c,s,w)}
// glossy anime eye; op lid openness, lx/ly look, pp pupil scale, ex 'happy'/'shut', fire = flame-shaped shine
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex,fire}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0)
  if(fire){c.save();c.translate(x+lx-2.5,y+ly-1.5);c.beginPath();c.moveTo(0,-7);c.quadraticCurveTo(4.5,-1.5,3,2.5);c.quadraticCurveTo(0,5,-3,2.5);c.quadraticCurveTo(-4.5,-1.5,0,-7);fs(c,'#fff3b0',0);c.restore()}
  else{el(c,x+lx-3.6*pp**.5,y+ly-4*pp**.5,3.4*pp**.5,4.2*pp**.5);fs(c,'#fff',0)}
  el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// face: e iris colours, br brow worry(+)/anger(-), m mouth, mo mouth scale, bl blush; L/R override per eye
const face=(c,o)=>{
  const{m='smile',mo=1,bl=1}=o
  for(const f of[-1,1]){
    const q={...o,...(f<0?o.L:o.R)},br=q.br??0
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.32*bl})`,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=3;c.strokeStyle=O;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='yell'){c.moveTo(-9,-4);c.quadraticCurveTo(0,-7,9,-4);c.quadraticCurveTo(9,13,0,14);c.quadraticCurveTo(-9,13,-9,-4);fs(c,'#a3304a',2.2/mo)
    c.save();c.clip();rr(c,-10,-8,20,6.5,2);fs(c,'#fff',0);el(c,0,14,6,4.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='wavy'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3:3,-8+k*4,0);c.stroke()}
  else if(m=='smirk'){c.moveTo(-7,1);c.quadraticCurveTo(1,3,8,-4);c.stroke()}
  else{c.moveTo(-5,0);c.lineTo(5,0);c.stroke()}
  c.restore()
}
const spk=(c,x,y,r,f='#fff6a8',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,d=k%2?r*.28:r;c.lineTo(x+cos(q)*d,y+sin(q)*d)}c.closePath();fs(c,f,w)}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const vein=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<4;k++){const a=k*P/2+P/4;c.moveTo(cos(a)*3+cos(a-P/4)*4,sin(a)*3+sin(a-P/4)*4);c.quadraticCurveTo(cos(a)*3,sin(a)*3,cos(a)*3+cos(a+P/4)*4,sin(a)*3+sin(a+P/4)*4)}
  c.lineWidth=5.5;c.strokeStyle=O;c.stroke();c.lineWidth=2.6;c.strokeStyle='#ff3b4e';c.stroke();c.restore()}
// bumpy cloud outline
const cl=(c,x,y,rx,ry,n=9,b=.18)=>{c.beginPath();for(let j=0;j<=n*10;j++){const a=j/(n*10)*2*P,q=1+b*abs(sin(a*n/2));c.lineTo(x+cos(a)*rx*q,y+sin(a)*ry*q)}c.closePath()}
// hand-lettered text: glyphs are centerline paths on a grid with cap height 10 (baseline 10), stroked thick with round caps
const G={" ":[2.6,''],
  "✓":[7,'M0 5.6L2.6 9.4L7 0.6'],
  "+":[5,'M0 6.2H5M2.5 3.7V8.7'],
  1:[3.2,'M0.4 2.1L2.6 0V10'],
  2:[5.5,'M0.2 2.2Q0.8 0 2.8 0Q5.3 0 5.3 2.6Q5.3 4.4 3.2 6.2L0 10H5.5'],
  3:[5.6,'M0.3 1.2Q1.2 0 2.8 0Q5.2 0 5.2 2.5Q5.2 4.8 2.4 4.8Q5.6 4.8 5.6 7.4Q5.6 10 2.8 10Q1 10 0 8.6'],
  8:[5.5,'M2.75 4.7Q0.4 4.7 0.4 2.35Q0.4 0 2.75 0Q5.1 0 5.1 2.35Q5.1 4.7 2.75 4.7Q0 4.7 0 7.35Q0 10 2.75 10Q5.5 10 5.5 7.35Q5.5 4.7 2.75 4.7Z'],
  9:[5.5,'M0.7 9.2Q1.5 10 2.6 10Q5.5 10 5.5 4.4Q5.5 0 2.7 0Q0 0 0 2.9Q0 5.7 2.7 5.7Q4.6 5.7 5.4 4.1'],
  ":":[1,'M0.5 4.2V4.3M0.5 9.7V9.8'],
  A:[6,'M0 10L3 0L6 10M1.2 6.6H4.8'],
  C:[5.8,'M5.8 1.6Q4.7 0 3.1 0Q0 0 0 5Q0 10 3.1 10Q4.7 10 5.8 8.4'],
  D:[6.2,'M0 0V10H2.4Q6.2 10 6.2 5Q6.2 0 2.4 0Z'],
  E:[5.2,'M5.2 0H0V10H5.2M0 4.9H4.2'],
  G:[6,'M5.8 1.6Q4.7 0 3.1 0Q0 0 0 5Q0 10 3.1 10Q6 10 6 6.6V5.6H3.4'],
  H:[6,'M0 0V10M6 0V10M0 5H6'],
  I:[3,'M0 0H3M1.5 0V10M0 10H3'],
  K:[5.8,'M0 0V10M5.6 0L0 6.2M2 4.1L5.8 10'],
  L:[5,'M0 0V10H5'],
  M:[7,'M0 10V0L3.5 6.2L7 0V10'],
  N:[6,'M0 10V0L6 10V0'],
  O:[6.4,'E3.2 5 3.2 5'],
  P:[5.8,'M0 10V0H3.2Q5.8 0 5.8 2.8Q5.8 5.6 3.2 5.6H0'],
  R:[5.9,'M0 10V0H3.2Q5.8 0 5.8 2.8Q5.8 5.6 3.2 5.6H0M2.8 5.6L5.9 10'],
  S:[5.6,'M5.4 1.5Q4.4 0 2.9 0Q0.3 0 0.3 2.6Q0.3 4.5 2.9 4.9Q5.6 5.4 5.6 7.6Q5.6 10 2.9 10Q1.1 10 0 8.5'],
  T:[6,'M0 0H6M3 0V10'],
  U:[6,'M0 0V6.6Q0 10 3 10Q6 10 6 6.6V0'],
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
const SK='#f1c09a',H='#6e2446',Hd='#461329',Hl='#b04c78',J='#22b3a2',Jd='#147a6e',EY=['#8f2206','#ffb43a'],FY=['#c0120c','#ffd23a'],
  HX=82,HY=128,HS=.92,WX=136,WY=14,WW=112,WH=94,BX=170,BY=206
// one entry per frame: d delay, th "v2" thought, hand pose, bt button squash, toast count, page mood, face, band headband, fire flames, card title scale, poof
const F=[
  {d:320,th:1,hand:'hover',face:'calm',page:'smug'},
  {d:260,th:1,hand:'press',bt:1,toast:1,pop:1,face:'hope',page:'spin'},
  {d:520,hand:'rest',toast:1,face:'twitch',page:'smug'},
  {d:170,hand:'slam',bt:1,toast:2,pop:1,face:'grit',page:'spin',fx:1},
  {d:260,hand:'rest',toast:3,face:'grit',page:'bleh',vein:1},
  {d:110,hand:'mash',bt:1,toast:8,pop:1,face:'rage',page:'spin',fx:1,sh:2,vein:1},
  {d:110,hand:'mash2',bt:.5,toast:99,pop:1,face:'rage',page:'bleh',fx:1,sh:-2,vein:1},
  {d:520,hand:'rest',toast:99,face:'dark',page:'bleh'},
  {d:240,hand:'tie',band:1,face:'dark',page:'smug',tie:1},
  {d:180,hand:'fist',band:1,face:'fire',page:'scared',fire:1},
  {d:90,hand:'fist',band:1,face:'fire',page:'scared',fire:2,card:1.12},
  {d:160,hand:'fist',band:1,face:'fire',page:'scared',fire:1,card:1,sh:2},
  {d:300,hand:'fist',band:1,face:'fire',page:'scared',fire:2,card:1},
  {d:300,hand:'fist',band:1,face:'fire',page:'scared',fire:1,card:1},
  {d:120,hand:'rest',face:'calm',page:'smug',poof:1},
  {d:150,hand:'hover',face:'calm',page:'smug',poof:2}]
export const frames=F.length,rim=4,delay=F.map(f=>f.d)
export default(c,_,i)=>{
  const s=F[i],gx=HX+(s.sh||0),gy=HY,tb=gy+44
  // ---- flames behind her in mission mode
  if(s.fire){const ph=s.fire==2?1:0
    for(const[k,col]of[[1,'#ff6a2b'],[.84,'#ffd34d']]){c.beginPath();c.moveTo(gx-62*k,240)
      const p=[];for(let j=0;j<=12;j++){const a=P+j/12*P,r=(j%2?54:64+(j+ph)%3*3)*k,ry=(j%2?108:136+(j+ph)%3*10)*k;p.push(gx+cos(a)*r+(j%2?0:(ph?5:-5)),gy+40+sin(a)*ry)}
      qs(c,p,ph?.22:-.22);c.lineTo(gx+62*k,240);c.closePath();fs(c,col,3)}}
  // ---- browser: the stale v1 page with a smug face, or the reload spinner
  {const cx=WX+WW/2,ct=WY+17
    rr(c,WX,WY,WW,WH,8);fs(c,s.page=='spin'?'#f4f1ea':'#eadcbc')
    c.save();rr(c,WX,WY,WW,WH,8);c.clip()
    c.beginPath();c.rect(WX,WY,WW,17);fs(c,'#8c8170',0);c.beginPath();c.moveTo(WX,ct);c.lineTo(WX+WW,ct);sk(c,3)
    ;['#ff6b6b','#ffd34d','#5fd38a'].forEach((k,n)=>{el(c,WX+10+n*9,WY+8.5,3.2);fs(c,k,1.6)})
    rr(c,WX+38,WY+4,WW-46,9,4.5);fs(c,'#d8ccb0',1.6)
    if(s.page!='spin'){c.beginPath();for(let n=0;n<4;n++){const a=n*P/8;c.moveTo(WX,ct);c.lineTo(WX+cos(a)*24,ct+sin(a)*24)}
      for(const r of[9,16]){c.moveTo(WX+r,ct);for(let n=1;n<4;n++){const a=n*P/8;c.quadraticCurveTo(WX+cos(a-P/16)*r*.8,ct+sin(a-P/16)*r*.8,WX+cos(a)*r,ct+sin(a)*r)}}
      sk(c,1.3,'#9b8f78')}
    c.restore();rr(c,WX,WY,WW,WH,8);sk(c,3.5)
    if(s.page=='spin'){c.beginPath();c.arc(cx,ct+38,16,-P*.4,P*1.25);sk(c,6,'#8c8170');const ax=cx+cos(-P*.4)*16,ay=ct+38+sin(-P*.4)*16;pg(c,ax-8,ay-4,ax+4,ay+3,ax+5,ay-10);fs(c,'#8c8170',0)}
    else{lt(c,'v1',cx,ct+19,24,'#7a5c3a',.5,0,2.3)
      const ey=ct+50,mood=s.page
      for(const f of[-1,1]){const x=cx+f*15
        if(mood=='scared'){el(c,x,ey,7,8);fs(c,'#fff',2.6);el(c,x+2,ey+1,2.2,2.6);fs(c,O,0)}
        else if(mood=='bleh'&&f>0){c.beginPath();c.moveTo(x-6,ey-5);c.lineTo(x+5,ey);c.lineTo(x-6,ey+4);sk(c,3)}
        else{c.save();el(c,x,ey,7.5,6.5);c.clip();el(c,x,ey,7.5,6.5);fs(c,'#fff',0);el(c,x-3.5,ey+2.5,3.2,3.8);fs(c,O,0);c.restore()
          c.beginPath();c.moveTo(x-8,ey-1.5-f);c.lineTo(x+8,ey-1.5+f);c.lineTo(x+8,ey-8);c.lineTo(x-8,ey-8);fs(c,'#eadcbc',0);c.beginPath();c.moveTo(x-8.5,ey-1.5-f);c.lineTo(x+8.5,ey-1.5+f);sk(c,3)
          c.beginPath();c.ellipse(x,ey,7.5,6.5,0,.15*P,.85*P);sk(c,2)}}
      for(const f of[-1,1]){el(c,cx+f*27,ey+8,5,2.8);fs(c,'rgba(255,100,125,.35)',0)}
      c.beginPath()
      if(mood=='scared'){c.moveTo(cx-8,ey+13);for(let k=1;k<5;k++)c.quadraticCurveTo(cx-8+k*4-2,ey+13+(k%2?-3:3),cx-8+k*4,ey+13);sk(c,2.4);drop(c,WX+WW-8,ct+16,.85,.3)}
      else if(mood=='bleh'){c.moveTo(cx-8,ey+10);c.quadraticCurveTo(cx,ey+15,cx+8,ey+10);sk(c,2.4);c.beginPath();c.moveTo(cx-4,ey+12);c.quadraticCurveTo(cx-4,ey+22,cx+1,ey+22);c.quadraticCurveTo(cx+5,ey+22,cx+4,ey+12);fs(c,'#ff7d96',2.2)}
      else{c.moveTo(cx-8,ey+11);c.quadraticCurveTo(cx,ey+15,cx+9,ey+8);sk(c,2.4)}}}
  // ---- girl: back hair (and headband tails)
  c.save();c.translate(gx,gy);c.scale(HS,HS)
  if(s.band){const w=s.tie?6:i%2?3:-3
    c.beginPath();c.moveTo(-44,-36);c.quadraticCurveTo(-60,-46+w,-74,-38-w);c.lineTo(-71,-28-w);c.quadraticCurveTo(-58,-34+w,-44,-26);c.closePath();fs(c,'#fff',3)
    c.beginPath();c.moveTo(-44,-32);c.quadraticCurveTo(-56,-20-w,-68,-12+w);c.lineTo(-63,-4+w);c.quadraticCurveTo(-52,-14-w,-42,-24);c.closePath();fs(c,'#fff',3)
    if(s.tie){c.beginPath();for(const v of[-50,-34,-18]){c.moveTo(-84,v);c.lineTo(-96,v+4)}sk(c,2.6)}}
  c.beginPath();c.moveTo(-48,-18);c.bezierCurveTo(-56,14,-54,38,-64,58)
  qs(c,[-64,58,-50,52,-48,70,-34,58,0,62,34,58,48,70,50,52,64,58],.12);c.bezierCurveTo(54,38,56,14,48,-18);c.arc(0,-18,48,0,P,1);c.closePath();fs(c,Hd)
  c.restore()
  // ---- torso: track jacket with stripes over a white tee
  c.beginPath();c.moveTo(gx-18,tb);c.bezierCurveTo(gx-46,tb+4,gx-52,tb+26,gx-52,240);c.lineTo(gx+52,240);c.bezierCurveTo(gx+52,tb+26,gx+46,tb+4,gx+18,tb);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(gx-15,tb+1);c.lineTo(gx,tb+22);c.lineTo(gx+15,tb+1);fs(c,'#fff',3)
  for(const f of[-1,1]){c.beginPath();c.moveTo(gx+f*15,tb);c.lineTo(gx+f*2,tb+24);c.lineTo(gx+f*4,tb+40);c.lineTo(gx+f*22,tb+6);c.closePath();fs(c,Jd,3)
    c.beginPath();c.moveTo(gx+f*30,tb+5);c.quadraticCurveTo(gx+f*46,tb+12,gx+f*48,240);sk(c,4,'#fff')}
  c.beginPath();c.moveTo(gx+2,tb+30);c.lineTo(gx+2,240);sk(c,2.4)
  // ---- the big PURGE button
  {const q=s.bt||0
    pg(c,BX-40,BY+2,BX+40,BY+2,BX+46,236,BX-46,236);fs(c,'#4a4f66')
    rr(c,BX-30,BY+12,60,17,4);fs(c,'#fff4c8',2.4);lt(c,'PURGE',BX,BY+20.5,10,'#2b1d2e',.5,0,2.1)
    el(c,BX,BY+2,30,8);fs(c,'#2f3346',3)
    c.beginPath();c.moveTo(BX-24,BY+1);c.lineTo(BX-24,BY-12+q*9);c.quadraticCurveTo(BX-24,BY-24+q*14,BX,BY-25+q*15);c.quadraticCurveTo(BX+24,BY-24+q*14,BX+24,BY-12+q*9);c.lineTo(BX+24,BY+1);c.quadraticCurveTo(BX,BY+8,BX-24,BY+1);fs(c,'#ff3b4e')
    c.beginPath();c.moveTo(BX-14,BY-17+q*11);c.quadraticCurveTo(BX-6,BY-21+q*13,BX+2,BY-21+q*13);sk(c,4,'#ff9aa6')
    if(s.fx){c.lineWidth=3;c.strokeStyle=O;for(const a of[-2.7,-2.3,-.85,-.45]){c.beginPath();c.moveTo(BX+cos(a)*34,BY-6+sin(a)*24);c.lineTo(BX+cos(a)*46,BY-6+sin(a)*32);c.stroke()}}}
  // arms: sleeve from the shoulder to the hand, white cuff, fist or open hand
  const arm=(f,x,y,kind,bend=16)=>{const sx=gx+f*36,sy=tb+10,mx=(sx+x)/2+f*4,my=max(sy,y)+bend
    c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(mx,my,x,y);st(c,15,J)
    const a=Math.atan2(y-my,x-mx),cx=x-cos(a)*7,cy=y-sin(a)*7;c.beginPath();c.moveTo(cx-sin(a)*7,cy+cos(a)*7);c.lineTo(cx+sin(a)*7,cy-cos(a)*7);sk(c,5,'#fff')
    if(kind=='open'){el(c,x+cos(a)*3,y+sin(a)*3,10,8,a);fs(c,SK,3.2);c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(const u of[-3.5,0,3.5]){c.moveTo(6,u);c.lineTo(12,u*1.3)}sk(c,1.8);c.restore()}
    else{el(c,x,y,9.5,8.5,a);fs(c,SK,3.2);c.save();c.translate(x,y);c.rotate(a-P/2);c.beginPath();for(const u of[-4,0,4]){c.moveTo(u,3);c.lineTo(u,7)}sk(c,2);c.restore()}}
  const R={hover:[168,166,'open'],press:[170,190,'open'],rest:[168,178,'open'],slam:[170,190,'fist'],mash:[164,189,'fist'],mash2:[176,184,'fist'],tie:[gx+50,gy-36,'fist'],fist:[gx+58,gy+12,'fist']}[s.hand]
  if(s.hand=='tie')arm(-1,gx-50,gy-36,'fist',-30),arm(1,R[0],R[1],'fist',-30)
  else arm(-1,gx-46,tb+66,'open',0)
  // ---- head
  c.save();c.translate(gx,gy);c.scale(HS,HS)
  hd(c,SK)
  const fc=s.face
  face(c,fc=='calm'?{e:EY,op:.86,lx:5,ly:1,br:.1,m:'smile'}
    :fc=='hope'?{e:EY,op:1,lx:6,ly:-1,br:.4,m:'grin',bl:1.4}
    :fc=='twitch'?{e:EY,lx:6,ly:1,m:'wavy',L:{op:1,pp:.6,br:.6},R:{op:.42,br:-1.2,tl:3},bl:.6}
    :fc=='grit'?{e:EY,op:.72,lx:6,ly:2,br:-1.2,m:'grit',mo:1.1}
    :fc=='rage'?{ex:'shut',br:-1.4,m:'yell',mo:1.15}
    :fc=='dark'?{e:EY,op:.6,lx:4,ly:2,br:-1.4,m:'flat',bl:.4}
    :{e:FY,fire:1,op:.86,lx:4,ly:1,pp:.75,br:-1.3,m:'smirk',mo:1.15,bl:.6})
  if(fc=='twitch'){c.beginPath();for(const[u,v]of[[36,-4],[40,4],[38,13]]){c.moveTo(u,v);c.lineTo(u+7,v+(v-4)*.3)}sk(c,2.4)}
  if(fc=='dark'){c.save();hd(c);c.clip();const g=c.createLinearGradient(0,-24,0,26);g.addColorStop(0,'rgba(46,18,58,.8)');g.addColorStop(.75,'rgba(46,18,58,.62)');g.addColorStop(1,'rgba(46,18,58,0)')
    c.fillStyle=g;c.fillRect(-50,-24,100,50);c.restore();for(const f of[-1,1]){el(c,f*20+4,10,5,2.6,f*.2);fs(c,'#fff',0)}}
  if(fc=='fire'){for(const f of[-1,1]){c.beginPath();c.moveTo(f*24,22);c.lineTo(f*37,19);c.moveTo(f*25,29);c.lineTo(f*38,26);st(c,3.2,'#e8283f',1.4)}}
  // bangs: choppy wolf-cut fringe with long side locks
  c.beginPath();c.moveTo(-52,40);c.bezierCurveTo(-60,-44,-30,-70,0,-70);c.bezierCurveTo(30,-70,60,-44,52,40)
  qs(c,[52,40,46,24,47,4,40,-8,34,-24,26,-6,20,-30,10,-10,2,-32,-8,-12,-16,-30,-24,-8,-32,-26,-40,-8,-47,4,-46,24,-52,40],.12);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.18,P*1.4);sk(c,5,Hl);c.beginPath();c.arc(0,-26,40,P*1.52,P*1.62);sk(c,5,Hl)
  c.beginPath();c.moveTo(2,-68);c.quadraticCurveTo(-2,-90,16,-92);c.quadraticCurveTo(6,-86,8,-68);fs(c,H,3)
  if(s.band){c.beginPath();c.moveTo(-50,-34);c.quadraticCurveTo(0,-66,50,-34);st(c,11,'#fff',3.2);el(c,0,-50,6.5,6);fs(c,'#ff3b4e',2.4);el(c,-48,-32,7,6);fs(c,'#fff',3)}
  if(s.vein)vein(c,34,-50,1+.15*(i%2))
  c.restore()
  // ---- the pressing / fist arm in front
  if(s.hand!='tie'||1)arm(1,R[0],R[1],R[2],s.hand=='fist'?-24:s.hand=='tie'?-30:10)
  if(s.hand=='mash'||s.hand=='mash2'){const[x,y]=R;c.beginPath();for(const r of[16,22])c.arc(x,y-4,r,-P*.85,-P*.35);sk(c,2.4)}
  // ---- toast: green PURGED pill, a red count badge as it piles up
  if(s.toast){const tx=186,ty=126,p=s.pop?1.06:1
    c.save();c.translate(tx,ty);c.scale(p,p)
    if(s.toast>1){rr(c,-38,-7,88,26,13);fs(c,'#167a43',3);rr(c,-41,-10,88,26,13);fs(c,'#178a4a',3)}
    rr(c,-44,-13,88,26,13);fs(c,'#1f9e57',3.2)
    lt(c,'✓ PURGED',0,0,11,'#ffffff',.5,0,2.2)
    if(s.toast>1){const n=s.toast>9?'99+':''+s.toast,w=n.length>1?16:10;rr(c,40-w,-26,w*2,22,11);fs(c,'#ff3b4e',2.8);lt(c,n,40,-15,10,'#ffffff',.5,0,2.2)}
    c.restore()}
  // ---- "v2" thought cloud: what she expects
  if(s.th){for(const[x,y,r]of[[80,62,4],[72,54,5.5]]){el(c,x,y,r);fs(c,'#fff',2.6)}
    cl(c,46,32,30,18);fs(c,'#fff',3);lt(c,'v2',46,34,20,'#ff3d8b',.5,0,2.4);spk(c,80,18,7)}
  // ---- MISSION title card slamming in
  if(s.card){const sl=s.card>1;c.save();c.translate(128,sl?200:208);c.rotate(sl?-.08:-.03);c.scale(sl?1.03:1,sl?1.03:1)
    if(sl){c.lineWidth=3;c.strokeStyle=O;for(let k=0;k<7;k++){const a=-2.7+k*.35;c.beginPath();c.moveTo(cos(a)*96,sin(a)*40);c.lineTo(cos(a)*108,sin(a)*56);c.stroke()}}
    rr(c,-116,-31,232,62,7);fs(c,'#1d1530')
    c.beginPath();c.rect(-110,-26,220,3);c.rect(-110,23,220,3);c.fillStyle='#ff3b4e';c.fill()
    lt(c,'MISSION:',0,-13,11,'#ffd34d',.5,0,2.2);lt(c,'KILL THE CACHE',0,9.5,16,'#ffffff',.5,0,2.3)
    c.restore()}
  // ---- poof back to calm
  if(s.poof==1)for(const[u,v,r]of[[-30,-30,26],[0,-48,30],[30,-28,26],[-34,10,24],[34,12,24],[0,-6,30],[-6,40,24],[30,48,20],[-34,48,20]]){el(c,gx+u,gy+v+10,r);fs(c,'#f4f2fa',2.6)}
  if(s.poof==2)for(const[u,v,r]of[[-52,-50,9],[-8,-82,10],[44,-62,8],[-60,8,8],[56,0,7]]){el(c,gx+u,gy+v,r);fs(c,'#f4f2fa',2.4);spk(c,gx+u*1.25,gy+v*1.2,5)}
}
