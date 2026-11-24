// girl with long wavy strawberry-pink hair, a straw sun hat and green overalls plants a seed in a .git flower pot, pats the soil, and it sprouts a little branch with commit-dot leaves while she sparkles
// tags: happy, anime, coding, git, nature, sparkle
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k,hop=(t,a,b)=>t<a||t>b?0:sin((t-a)/(b-a)*P)
// limb: a thick outlined quadratic stroke
const lb=(c,x0,y0,x1,y1,x2,y2,w,f)=>{c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(x1,y1,x2,y2);st(c,w,f)}
// head shape, centred on the eyes' row, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// hair cap with a fringe: p runs from the right temple across to the left one
const cap=(c,p,col,k=.18,hl)=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,p,k);c.closePath();fs(c,col)
  if(hl){c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);sk(c,5,hl);c.beginPath();c.arc(0,-24,40,P*1.56,P*1.64);sk(c,5,hl)}}
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
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,r=k%2?2.2:7.5;c.lineTo(x+lx+cos(q)*r,y+ly+sin(q)*r)}c.closePath();fs(c,'#fff',0);el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6*pp**.5,y+ly-4*pp**.5,3.4*pp**.5,4.2*pp**.5);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// face: o.e iris colours, ex eye style, m mouth, mo mouth scale, br brow worry(+)/anger(-), by brow lift, bc brow colour, fr freckles
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,by=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.32)',0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br-by);c.quadraticCurveTo(f*20,-15-br-by,f*28,-12+3*br-by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='open'){c.moveTo(-6,-3);c.quadraticCurveTo(0,-5,6,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-6,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='gasp'){c.moveTo(0,-6);c.bezierCurveTo(8,-6,8,12,0,12);c.bezierCurveTo(-8,12,-8,-6,0,-6);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,12,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='chew'){el(c,0,0,5,3.2);fs(c,'#a3304a',2.2/mo)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#fff3a0',w=2.5)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;if(w)c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
// open hand, fingers pointing up (rotate with a), thumb to the left (mirror with s<0)
const palm=(c,x,y,a,col,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,abs(s))
  for(const L of[0,1]){for(const[q,l]of[[-.55,10],[-.18,12],[.18,12],[.52,10],[-1.45,8]]){c.beginPath();c.moveTo(0,1);c.lineTo(sin(q)*l,-cos(q)*l);c.lineWidth=L?4.4:10.4;c.strokeStyle=L?col:O;c.stroke()}el(c,0,3,L?7:10.4,L?6.5:9.9);c.fillStyle=L?col:O;c.fill()}
  c.restore()}
export const frames=26,delay=85,rim=4
const H='#ff8fb8',Hd='#d9568a',Hl='#ffd0e2',S='#e5ad85',G='#5cc46a',Gd='#3e9a4c',Y='#f3d27a',Yd='#c9a24a',I=['#0b5d6b','#5fe0d0']
// plant: main line and branch as points, commit dots as [x,y,colour,at]
const MN=[[174,158],[168,130],[178,102],[170,76],[174,52]],BR=[[168,130],[196,118],[210,94],[203,68]]
const DT=[[168,130,'#3fc46a',.12],[178,102,'#3fc46a',.4],[170,76,'#3fc46a',.68],[210,94,'#ff6fa3',.6],[203,68,'#ff6fa3',.97]]
const part=(c,p,g)=>{let L=0;const d=[];for(let k=1;k<p.length;k++){d.push(hypot(p[k][0]-p[k-1][0],p[k][1]-p[k-1][1]));L+=d.at(-1)}
  let r=g*L;c.beginPath();c.moveTo(...p[0]);for(let k=1;k<p.length&&r>0;k++){const u=min(1,r/d[k-1]);c.lineTo(lp(p[k-1][0],p[k][0],u),lp(p[k-1][1],p[k][1],u));r-=d[k-1]}}
export default(c,t,i)=>{
  const gm=sg(t,.32,.56),gb=sg(t,.42,.62),fade=1-sg(t,.88,.95),glow=t>.56&&t<.9
  const seedIn=t<.12,drop=t>=.12&&t<.2,pat=t>=.2&&t<.32,clasp=t>=.56&&t<.9
  // girl: long wavy back hair
  const gx=86,bob=clasp?-3*abs(sin(t*P*8)):0
  c.save();c.translate(gx,104+bob);c.scale(.74,.74)
  c.beginPath();c.moveTo(-52,-30);c.bezierCurveTo(-58,-80,58,-80,52,-30);c.quadraticCurveTo(70,20,60,60);c.quadraticCurveTo(72,90,56,118);c.quadraticCurveTo(44,104,34,124);c.quadraticCurveTo(0,112,-34,124);c.quadraticCurveTo(-44,104,-56,118);c.quadraticCurveTo(-72,90,-60,60);c.quadraticCurveTo(-70,20,-52,-30);fs(c,Hd)
  c.restore()
  // legs, overalls, tee
  for(const f of[-1,1]){c.beginPath();c.moveTo(gx+f*9,204);c.lineTo(gx+f*10,230);st(c,10,S);el(c,gx+f*11,236,10,5.5);fs(c,'#8a5a3c',3)}
  c.beginPath();c.moveTo(gx-15,140+bob);c.quadraticCurveTo(gx-29,142+bob,gx-28,158);c.lineTo(gx-29,206);c.quadraticCurveTo(gx,212,gx+29,206);c.lineTo(gx+28,158);c.quadraticCurveTo(gx+29,142+bob,gx+15,140+bob);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(gx-18,166);c.lineTo(gx+18,166);c.lineTo(gx+26,208);c.quadraticCurveTo(gx,214,gx-26,208);c.closePath();fs(c,G)
  c.beginPath();c.moveTo(gx-18,170);c.lineTo(gx-14,144+bob);c.moveTo(gx+18,170);c.lineTo(gx+14,144+bob);sk(c,4,Gd)
  for(const f of[-1,1]){el(c,gx+f*14,170,3);fs(c,Y,2)}
  rr(c,gx-9,176,18,13,3);fs(c,Gd,2.5);c.beginPath();c.moveTo(gx,208);c.lineTo(gx,196);sk(c,2.5)
  // head
  c.save();c.translate(gx,104+bob);c.rotate(.06);c.scale(.74,.74)
  hd(c,S)
  const o=seedIn?{e:I,lx:7,ly:3,m:'smile'}:drop?{e:I,lx:8,ly:7,m:'o'}:pat?{e:I,ex:'happy',m:'cat'}
    :t<.56?{e:I,lx:6,ly:-2,pp:1.1,m:'o',mo:1.1,by:2}:clasp?{e:I,ex:'star',m:'grin',mo:1.1,lx:4}:{e:I,lx:6,ly:3,m:'smile'}
  face(c,{...o,fr:'#c47a55'})
  cap(c,[50,26,47,-4,40,6,36,-16,26,-2,18,-22,6,-6,-6,-24,-16,-6,-26,-20,-36,0,-44,-10,-50,26],H,.22,Hl)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,-14);c.quadraticCurveTo(f*58,14,f*48,38);c.quadraticCurveTo(f*58,58,f*46,74);c.quadraticCurveTo(f*42,50,f*38,40);c.quadraticCurveTo(f*44,16,f*36,-4);c.closePath();fs(c,H)}
  // straw sun hat with a ribbon and a daisy
  c.save();c.translate(0,-52);c.rotate(-.1)
  el(c,0,0,70,17);fs(c,Y);c.beginPath();c.ellipse(0,0,58,12,0,P*.15,P*.85);sk(c,2,Yd)
  c.beginPath();c.moveTo(-38,2);c.bezierCurveTo(-38,-44,38,-44,38,2);c.closePath();fs(c,Y)
  c.beginPath();c.moveTo(-38,-4);c.bezierCurveTo(-38,-14,38,-14,38,-4);c.lineTo(38,2);c.bezierCurveTo(26,-4,-26,-4,-38,2);c.closePath();fs(c,'#ff6fa3',2.5)
  c.beginPath();c.ellipse(0,0,70,17,0,0,P);c.closePath();fs(c,Y,0);c.beginPath();c.ellipse(0,0,70,17,0,0,P);sk(c,3.5)
  for(let k=0;k<6;k++){const a=k/6*2*P;el(c,26+cos(a)*7,-12+sin(a)*7,5,5);fs(c,'#fff',2)}el(c,26,-12,4.5);fs(c,'#ffd23a',2)
  c.restore();c.restore()
  // pot with soil and label
  c.beginPath();c.moveTo(132,172);c.lineTo(144,236);c.quadraticCurveTo(174,243,204,236);c.lineTo(216,172);c.closePath();fs(c,'#e07b4f')
  c.beginPath();c.moveTo(200,182);c.lineTo(192,232);sk(c,6,'#c9663e')
  rr(c,124,152,100,22,8);fs(c,'#ef9466');el(c,174,158,42,6);fs(c,'#5a3a2a',2.5)
  rr(c,144,188,60,28,6);fs(c,'#fff3dc',2.8);tx(c,'.git',174,202,19,'#d9568a',0)
  // seed
  const sx=lp(156,172,sg(t,.12,.2)),sy=drop?lp(134,156,sg(t,.12,.2)**2):0
  if(drop){el(c,sx,sy,5.5,7.5,.4);fs(c,'#9a643f',2.8);el(c,sx-1.5,sy-2.5,1.6,2.4,.4);fs(c,'#fff',0)}
  // plant
  c.save();c.translate(174,158);c.scale(fade,fade);c.translate(-174,-158)
  if(gm>0&&fade>0){part(c,MN,gm);st(c,6,'#5cc46a',3);if(gb>0){part(c,BR,gb);st(c,6,'#ff8fb8',3)}
    const tip=gm>.98?1:0;if(tip)for(const f of[-1,1]){c.save();c.translate(174,52);c.rotate(f*.7);el(c,0,-10,6,11);fs(c,'#7fe08a',3);c.restore()}
    for(const[x,y,f,a]of DT){const g=f=='#3fc46a'?gm:gb,z=sg(g,a,a+.12)*(1+.3*hop(g,a+.06,a+.2));if(z>0){c.save();c.translate(x,y);c.scale(z,z);el(c,0,0,9);fs(c,f,3);el(c,0,0,3.5);fs(c,'#fff',0);c.restore()}}}
  c.restore()
  if(t>.88&&t<.97)for(let k=0;k<5;k++){const q=sg(t,.88,.97),a=-P/2+(k-2)*.6;spk(c,174+cos(a)*(10+q*40),150+sin(a)*(10+q*40),8*(1-q)+2,'#fff3a0',2)}
  // arm: holding the seed, patting the soil, then hands clasped
  const ph=pat?-10*abs(sin((t-.2)/.12*2*P)):0,ax=clasp?gx+10:seedIn?158:drop?lp(158,150,sg(t,.12,.2)):pat?164:lp(164,gx+24,sg(t,.32,.4)),ay=clasp?150:seedIn?140:drop?130:pat?156+ph:lp(156,186,sg(t,.32,.4))
  lb(c,gx+20,150+bob,lp(gx+30,ax-10,.5),lp(170,ay+18,.5),ax,ay,10,'#fff')
  if(clasp){lb(c,gx-20,150+bob,gx-24,172,gx-4,152,10,'#fff');el(c,gx-2,153,8,7.5);fs(c,S,3);el(c,gx+9,150,8,7.5);fs(c,S,3)}
  else{lb(c,gx-20,150+bob,gx-34,176,gx-26,192,10,'#fff');el(c,gx-26,193,7.5,7);fs(c,S,3);el(c,ax,ay,8,7.5);fs(c,S,3)
    if(seedIn){el(c,ax-2,ay-8,5.5,7.5,.4);fs(c,'#9a643f',2.8);el(c,ax-3.5,ay-10.5,1.6,2.4,.4);fs(c,'#fff',0)}}
  if(pat&&abs(ph)<2)for(const f of[-1,1]){el(c,164+f*14,162,3,2);fs(c,'#8a6a4a',1.8)}
  // sparkles
  if(glow)for(let k=0;k<5;k++){const a=k*1.3+t*6,r=48+k%2*12;spk(c,lp(gx,190,k%2)+cos(a)*r*.5,70+sin(a)*r*.45-k*4,6+(k+i)%3*2,k%2?'#fff3a0':'#ffd0e2',2)}
}
