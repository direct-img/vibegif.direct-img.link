// 90s girl with a violet side ponytail, round glasses and a color-block windbreaker watches a broken red commit crash onto her stack of code blocks, then aims a chunky VHS remote and rewinds it right back out with tracking lines and a blinking ◀◀
// tags: retro, anime, coding, git, undo, smug
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
export const frames=24,delay=85,rim=4
const H='#9b6bff',Hd='#6b3fd0',Hl='#d6c2ff',S='#fcdcc6',W='#2ec4b6',Wp='#ff5fa2',Wv='#7b5cff',I=['#a0206a','#ff9ad5']
const K=['#ff79a8','#ffd166','#7ee0ff','#a1f08f','#c99bff'],BX=208
// tape time: plays forward, rewinds fast past the start, then plays back up to it
const tape=t=>t<.55?t/.55:t<.85?1-1.273*E((t-.55)/.3):(t-.85)/.55-.273
const block=(c,y,k,a=0,sy=1)=>{c.save();c.translate(BX,y+12);c.rotate(a);c.scale(1,sy)
  const bad=k<0;rr(c,-32,-12,64,24,5);fs(c,bad?'#ff4f5e':'#262b45')
  if(bad){c.beginPath();c.moveTo(-24,-5);c.lineTo(-16,3);c.moveTo(-16,-5);c.lineTo(-24,3);sk(c,3,'#fff')
    c.beginPath();c.moveTo(-8,-3);for(let j=0;j<6;j++)c.lineTo(-8+j*6+3,j%2?-6:0);c.moveTo(-8,5);for(let j=0;j<5;j++)c.lineTo(-8+j*5+2.5,j%2?2:7);sk(c,2.2,'#fff')}
  else{rr(c,-25,-6,12,5,2.5);fs(c,K[k%5],0);rr(c,-10,-6,26,5,2.5);fs(c,K[(k+2)%5],0);rr(c,-19,2,20,5,2.5);fs(c,K[(k+3)%5],0)}
  c.restore()}
export default(c,t,i)=>{
  const tp=tape(t),rew=t>=.55&&t<.85,trk=hop(t,.55,.85)
  // bad block: falls, hits the stack at tape .5, bounces once and settles crooked
  const fall=sg(tp,.28,.5),b1=hop(tp,.5,.6),byy=tp<.5?lp(-40,142,(tp-.28)/.22<0?0:min(1,((tp-.28)/.22)**2)):142-16*b1,ba=tp>.5?lp(0,.07,sg(tp,.55,.62)):(tp-.28)*.6
  const imp=hop(tp,.5,.58)
  // code chips drifting around her, they move with the tape too
  ;[['{ }',140,70,0],['</>',160,124,2],['=>',226,90,1]].forEach(([s,x,y,k])=>{
    const yy=y-tp*28+sin(tp*4+k)*4
    tx(c,s,x+(rew?(i%2?3:-3):0),yy,16,K[k],4.5)})
  // stack of good blocks, squished on impact
  for(let k=0;k<3;k++)block(c,214-k*24+imp*k*3,k,0,1-imp*.12)
  if(tp>.25){if(rew){c.globalAlpha=.35;block(c,byy-14,-1,ba);c.globalAlpha=1}block(c,byy,-1,ba)}
  // impact sparks
  if(tp>.5&&tp<.82){const q=(tp-.5)/.32;for(let k=0;k<5;k++){const a=-P*(.15+k*.175),r=10+q*40;spk(c,BX+cos(a)*r*.75,166+sin(a)*r+q*q*30,6*(1-q*.6),k%2?'#ffd166':'#fff3a0',2.2)}}
  // girl: back of the side ponytail
  c.save();c.translate(80,104)
  c.beginPath();c.moveTo(-36,-40);c.bezierCurveTo(-72,-34,-72,30,-60,86);c.lineTo(-51,74);c.lineTo(-45,90);c.lineTo(-38,72);c.bezierCurveTo(-46,30,-44,-8,-24,-30);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-55,-6);c.quadraticCurveTo(-60,30,-53,64);sk(c,2.5,Hd)
  c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-56,30,-50,60,-46,66);c.quadraticCurveTo(0,74,46,66);c.bezierCurveTo(50,60,56,30,50,-20);fs(c,Hd)
  c.restore()
  // windbreaker
  const tor=()=>{c.beginPath();c.moveTo(52,148);c.bezierCurveTo(30,154,22,172,20,200);c.quadraticCurveTo(18,236,30,240);c.lineTo(130,240);c.quadraticCurveTo(142,236,140,200);c.bezierCurveTo(138,172,130,154,108,148);c.closePath()}
  tor();fs(c,W);c.save();tor();c.clip()
  pg(c,20,176,140,170,140,196,20,204);fs(c,Wp,3);pg(c,0,140,40,140,46,250,0,250);fs(c,Wv,3);pg(c,120,140,160,140,160,250,116,250);fs(c,Wv,3)
  c.beginPath();c.moveTo(80,156);c.lineTo(80,240);sk(c,3);c.restore();tor();sk(c,3.5)
  c.beginPath();c.moveTo(62,146);c.lineTo(68,164);c.lineTo(80,156);c.lineTo(92,164);c.lineTo(98,146);fs(c,'#fff',3)
  // head
  c.save();c.translate(80,104);c.rotate(.05)
  hd(c,S)
  const o=t<.27?{e:I,lx:6,ly:2,m:'smile'}
    :t<.36?{e:I,ex:'shut',m:'wave',br:.8}
    :t<.55?{e:I,lx:7,ly:1,m:'frown',br:-.7,op:.85}
    :t<.85?{e:I,op:.62,lx:6,ly:2,m:'smug',br:-.3,tl:2}
    :{e:I,ex:'happy',m:'grin'}
  face(c,o)
  // round glasses with a glint while she rewinds
  for(const f of[-1,1]){el(c,f*20,11,16,15);sk(c,3.2,'#3a2860');if(rew&&i%4<2){c.save();el(c,f*20,11,14,13);c.clip();c.beginPath();c.moveTo(f*20-12,22);c.lineTo(f*20+8,-6);sk(c,4,'rgba(255,255,255,.85)');c.restore()}}
  c.beginPath();c.moveTo(-5,8);c.quadraticCurveTo(0,4,5,8);sk(c,3,'#3a2860')
  cap(c,[50,26,48,-6,42,-2,38,-24,28,-8,20,-30,8,-12,-4,-34,-20,-14,-30,-28,-38,-8,-46,-14,-50,26],H,.2,Hl)
  c.beginPath();c.moveTo(-50,-24);c.quadraticCurveTo(-62,0,-56,30);c.quadraticCurveTo(-48,10,-42,-10);fs(c,H)
  // scrunchie
  for(const a of[0,1.3,2.6,3.9,5.2])el(c,-40+cos(a)*6,-38+sin(a)*6,6,6);c.fillStyle='#ffd23a';c.fill()
  for(const a of[0,1.3,2.6,3.9,5.2]){el(c,-40+cos(a)*6,-38+sin(a)*6,6,6);sk(c,2.6)}
  for(const a of[0,1.3,2.6,3.9,5.2]){el(c,-40+cos(a)*6,-38+sin(a)*6,4.6,4.6);c.fillStyle='#ffd23a';c.fill()}
  c.restore()
  // remote arm: lowered, then aimed at the stack
  const aim=sg(t,.42,.52)*(1-sg(t,.86,.96)),press=t>.52&&t<.58
  const hx=lp(126,150,aim),hy=lp(214,174,aim),ra=lp(-1.2,-.62,aim)
  lb(c,112,164,lp(124,138,aim),lp(196,186,aim),hx,hy,15,W)
  c.save();c.translate(hx,hy);c.rotate(ra)
  rr(c,-6,-11,50,22,7);fs(c,'#3b3f52');rr(c,40,-6,6,12,3);fs(c,'#ff4f5e',2.5)
  el(c,30,0,5.5);fs(c,'#ff4f5e',2.2);rr(c,4,-7,9,6,2);fs(c,'#9aa3c0',1.8);rr(c,4,1,9,6,2);fs(c,press?'#ffd166':'#7ee0ff',1.8);rr(c,16,-7,7,6,2);fs(c,'#9aa3c0',1.8);rr(c,16,1,7,6,2);fs(c,'#9aa3c0',1.8)
  c.restore()
  el(c,hx,hy,10,9);fs(c,S,3.2);c.beginPath();c.moveTo(hx-4,hy-8);c.quadraticCurveTo(hx+4-press*3,hy-12,hx+8,hy-6);sk(c,2.4)
  // IR waves
  if(t>.52&&t<.84)for(let k=0;k<3;k++){const q=(t*8+k/3)%1,r=8+q*26,ex=hx+cos(ra)*48,ey=hy+sin(ra)*48
    c.globalAlpha=1-q;c.beginPath();c.arc(ex,ey,r,ra-.5,ra+.5);sk(c,3,'#ff4f5e');c.globalAlpha=1}
  // VHS tracking bands while rewinding
  if(trk>0)for(let k=0;k<2;k++){const y=(t*900+k*120)%250
    c.fillStyle='rgba(255,255,255,.55)';c.fillRect(12,y,232,5+k*3)
    for(let j=0;j<7;j++){c.fillStyle=j%2?'#fff':'#c9d4ff';c.fillRect(12+((j*53+i*37)%200),y+2+j%3,10+j*4%14,2)}}
  // on screen display
  const osd=rew?(i%4<3?'◀◀ REW':''):'▶ PLAY',ox=16,oy=24
  if(osd){c.font='bold 20px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.lineWidth=5;c.strokeStyle=O;c.strokeText(osd,ox,oy)
    if(rew){c.fillStyle='#ff4f9e';c.fillText(osd,ox-1.5,oy);c.fillStyle='#4fe0ff';c.fillText(osd,ox+1.5,oy)}c.fillStyle='#fff';c.fillText(osd,ox,oy)}
}
