// girl with copper low pigtails and a yellow raincoat leans back tugging a rope down out of a cloud labelled origin until it pops and a pile of changed files and diffs tumbles down on her, leaving her dizzy, then it all merges in with a check
// tags: anxious, anime, coding, git, cloud, chaos
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
export const frames=23,delay=95,rim=4
const H='#e0622a',Hd='#a8401a',Hl='#ffa070',S='#c08156',R='#ffd23a',Rd='#e0a816',I=['#4a2a8a','#b48cff'],GX=99,GY=240,CX=172
// changes: kind (0 file, 1 +chip, 2 -chip), rest x, y, angle, fall start
const IT=[[0,59,226,-.3,.46],[1,147,232,.2,.48],[0,91,80,.25,.5],[2,85,234,.1,.52],[0,131,214,.35,.54],[1,69,206,-.25,.56],[0,107,222,-.08,.58],[2,119,196,-.2,.6],[0,87,196,.3,.62],[1,99,178,.15,.64]]
const item=(c,k,x,y,a,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  if(k==0){c.beginPath();c.moveTo(-13,-16);c.lineTo(5,-16);c.lineTo(13,-8);c.lineTo(13,16);c.lineTo(-13,16);c.closePath();fs(c,'#fff',3)
    pg(c,5,-16,5,-8,13,-8);fs(c,'#d6dbe8',2.5)
    for(const[v,w,f]of[[-6,12,'#3fc46a'],[0,16,'#ff4f5e'],[6,10,'#3fc46a']]){c.beginPath();c.moveTo(-7,v);c.lineTo(-7+w,v);sk(c,3,f)}}
  else{rr(c,-17,-10,34,20,6);fs(c,k==1?'#3fc46a':'#ff4f5e',3);tx(c,k==1?'+12':'-3',0,0,13,'#fff',0)}
  c.restore()}
export default(c,t,i)=>{
  // two tugs, the cloud stretches, pops, the pile falls, then merges away
  const g1=sg(t,.06,.18)*(1-sg(t,.2,.28)),g2=sg(t,.28,.42),pull=max(g1*.55,g2*(t<.44?1:0)),grip=t<.44||t>.95
  const pop=hop(t,.44,.52),bur=t>.62&&t<.9,poof=sg(t,.86,.93),shield=t>=.44&&t<.6
  const ln=grip?-.16-pull*.14:shield?.04:0,sq=pull*6
  const W=(x,y)=>[GX+x*cos(ln)-y*sin(ln),GY+x*sin(ln)+y*cos(ln)]
  // cloud, pulled down toward her
  const cy=50+pull*8-pop*4,cw=1+pop*.12
  c.save();c.translate(CX,cy);c.rotate(-pull*.12);c.scale(.88*cw,.88*(1/cw+pull*.1))
  c.beginPath();c.moveTo(-70,14);c.arc(-52,0,20,P*.6,P*1.5);c.arc(-20,-14,26,P*1.1,P*1.85);c.arc(18,-16,24,P*1.15,P*1.95);c.arc(52,0,22,P*1.4,P*.4);c.quadraticCurveTo(0,26+pull*14,-70,14);c.closePath();fs(c,'#fff')
  c.beginPath();c.arc(-20,-14,18,P*1.2,P*1.5);sk(c,3,'#d7e3f5')
  tx(c,'origin',0,2,19,'#3a8ae0',0);c.restore()
  if(pop>0)for(let k=0;k<6;k++){const a=P*.12+k*P*.17,r=40+pop*14;c.beginPath();c.moveTo(CX+cos(a)*r*1.1,cy+sin(a)*r*.8);c.lineTo(CX+cos(a)*(r+10)*1.1,cy+sin(a)*(r+10)*.8);sk(c,3)}
  // rope: hand to cloud, tail on the floor; dangling from the cloud once she lets go
  const[ux,uy]=W(40,-74),[lx2,ly2]=W(28,-60),rt=[CX-22,cy+18]
  if(grip){c.beginPath();c.moveTo(...rt);c.lineTo(ux,uy);c.lineTo(lx2,ly2);c.quadraticCurveTo(GX-10,GY-30,GX-44,GY-2);st(c,5,'#d9a066',2.5)
    for(let k=1;k<5;k++){const x=lp(rt[0],ux,k/5),y=lp(rt[1],uy,k/5);c.beginPath();c.moveTo(x-2,y-2);c.lineTo(x+2,y+2);sk(c,1.6,'#a8743c')}}
  else{const sw=sin(t*P*8)*8;c.beginPath();c.moveTo(...rt);c.quadraticCurveTo(rt[0]+sw,rt[1]+30,rt[0]+sw*1.6,rt[1]+58);st(c,5,'#d9a066',2.5)}
  // girl, leaning back from her feet
  c.save();c.translate(GX,GY);c.rotate(ln)
  // pigtails behind
  for(const f of[-1,1]){c.save();c.translate(f*36,-112+sq);c.rotate(f*(.18+(shield?.3*sin(t*60):0))+ln*-1.5)
    c.beginPath();c.moveTo(0,-8);c.bezierCurveTo(f*26,4,f*24,46,f*10,66);c.lineTo(f*5,52);c.lineTo(-f*2,64);c.bezierCurveTo(f*2,42,-f*4,16,-f*7,0);c.closePath();fs(c,H)
    el(c,0,-2,6.5,5.5);fs(c,'#3a8ae0',3);c.restore()}
  // legs braced and boots
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*9,-30+sq);c.quadraticCurveTo(f*(12+sq),-16,f*12+(f>0?6*pull:0),-8);st(c,9,S);rr(c,f*12+(f>0?6*pull:0)-8,-14,16,14,4);fs(c,'#ff4f5e',3)}
  // raincoat
  c.beginPath();c.moveTo(-16,-76+sq);c.quadraticCurveTo(-31,-74+sq,-30,-58+sq);c.lineTo(-35,-22);c.quadraticCurveTo(0,-15,35,-22);c.lineTo(30,-58+sq);c.quadraticCurveTo(31,-74+sq,16,-76+sq);c.closePath();fs(c,R)
  c.beginPath();c.moveTo(0,-68+sq);c.lineTo(0,-19);sk(c,2.5);for(const v of[-58,-44,-30]){el(c,5,v+sq*.6,2.5);fs(c,Rd,2)}
  pg(c,-16,-77+sq,-3,-66+sq,-21,-63+sq);fs(c,R,3);pg(c,16,-77+sq,3,-66+sq,21,-63+sq);fs(c,R,3)
  // head
  c.save();c.translate(0,-108+sq);c.rotate(bur?.08*sin(t*P*6):-ln*.6);c.scale(.78,.78)
  hd(c,S)
  const o=grip&&t<.06||t>.94?{e:I,lx:6,ly:-4,m:'smile'}:grip?{e:I,op:.75,lx:6,ly:-3,br:-.8,m:'grit'}:t<.56?{e:I,pp:.4,lx:3,ly:-5,by:4,br:.6,m:'gasp',mo:1.2}
    :bur?{e:I,ex:'swirl',m:'wave',mo:1.2,br:.6}:{e:I,ex:'happy',m:'grin'}
  face(c,o)
  cap(c,[50,26,46,-6,40,4,34,-18,22,-2,14,-24,2,-6,-10,-24,-20,-4,-30,-20,-40,2,-46,-8,-50,26],H,.2,Hl)
  c.beginPath();c.arc(0,-24,40,P*1.25,P*1.4);sk(c,4,Hd)
  c.restore()
  // arms: on the rope, up to shield, limp while buried
  for(const f of[-1,1]){const sx=f*18,sy=-68+sq
    if(grip){const hx=f>0?40:28,hy=f>0?-74:-60;lb(c,sx,sy,sx+f*6+8,sy+16,hx,hy,9,R)}
    else if(shield){lb(c,sx,sy,sx+f*22,sy-18,f*28,-128,9,R);palm(c,f*28,-132,f*.3,S,f*.85)}
    else{lb(c,sx,sy,sx+f*14,sy+10,f*32,-40,9,R);el(c,f*32,-40,7,6.5);fs(c,S,3)}}
  if(grip){el(c,40,-74,7.5,7);fs(c,S,3);el(c,28,-60,7.5,7);fs(c,S,3)}
  c.restore()
  if(grip&&pull>.3)for(let k=0;k<2;k++){const[x,y]=W(-40,-140+k*16);drop(c,x-k*6,y,.8)}
  // the changes tumbling down and piling up
  IT.forEach(([k,x,y,a,s],j)=>{const q=min(1,max(0,(t-s)/.07)),z=1-poof
    if(q<=0||z<=0)return
    const fx=CX-24+(j%3-1)*12,yy=q<1?lp(cy+18,y,q*q):y-6*hop(t,s+.07,s+.11),xx=q<1?lp(fx,x,q):x,aa=q<1?a+(1-q)*3*(j%2?1:-1):a
    item(c,k,xx,yy,aa,z)})
  if(bur)for(let k=0;k<3;k++){const a=t*P*8+k*2.1;spk(c,GX+cos(a)*34,70+sin(a)*8,7,'#fff3a0',2)}
  if(t>.86&&t<.98){const q=sg(t,.86,.9)*(1-sg(t,.95,.98));c.save();c.translate(170,140);c.scale(q,q);el(c,0,0,18);fs(c,'#3fc46a',3);c.beginPath();c.moveTo(-8,0);c.lineTo(-2,7);c.lineTo(9,-7);sk(c,4,'#fff');c.restore()
    for(let k=0;k<5;k++){const a=k*1.25,r=20+poof*40;spk(c,GX+cos(a)*r*1.4,200+sin(a)*r*.6,8*(1-poof)+2,'#fff3a0',2)}}
}
