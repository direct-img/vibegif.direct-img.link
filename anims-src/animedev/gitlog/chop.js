// lumberjack girl with short choppy teal hair, a mustard pompom beanie and a red buffalo-check flannel swings her axe into a log whose cut end shows tree rings made of commit hashes, wood chips flying
// tags: proud, anime, coding, git, wood, strong
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
export const frames=22,delay=90,rim=4
const H='#1f8a8a',Hd='#126464',Hl='#5fd0c8',S='#9b5f3c',F='#d8333f',Fd='#6e1420',J='#3b5ea8',BN='#f0b43a',I=['#3d5a00','#c8f060'],GX=66
const FX=184,FY=184,RG=[[43,'c0ffee1·a3f9c1e·7be20d4·19ffa02·'],[32,'5aa9f03·d1e7c55·e4d2b17·'],[21,'9b0e3a1·f2c4d88·']]
// axe angle over the loop: stuck in the log, raised overhead, a beat, then the chop
const ang=t=>t<.05?-.7:t<.32?lp(-.7,-1.95,sg(t,.05,.32)):t<.4?lp(-1.95,-2.1,sg(t,.32,.4)):t<.47?lp(-2.1,-.7,((t-.4)/.07)**2):-.7
export default(c,t,i)=>{
  const th=ang(t),up=(-th-.7)/1.4,imp=t>=.47&&t<.53,chip=t>=.47&&t<.8,shk=imp?(i%2?2:-2):0,swing=t>=.4&&t<.47
  // log: bark body going back, then the cut end with hash rings
  c.save();c.translate(shk,0)
  c.beginPath();c.moveTo(FX-46,FY-14);c.lineTo(FX-96,FY-56);c.bezierCurveTo(FX-104,FY-90,FX-56,FY-112,FX-30,FY-92);c.lineTo(FX+20,FY-48);c.closePath();fs(c,'#8a5a3a')
  for(const[a,b]of[[-80,-70],[-62,-86],[-44,-54]]){c.beginPath();c.moveTo(FX+a,FY+b);c.lineTo(FX+a+30,FY+b+26);sk(c,2.5,'#5e3a22')}
  el(c,FX,FY,52,54);fs(c,'#8a5a3a');el(c,FX,FY,46,48);fs(c,'#f3cd8e',2.5)
  for(const[r]of RG){el(c,FX,FY,r+5.5,r+6);sk(c,1.6,'#c8925a')}
  el(c,FX,FY,10,10);fs(c,'#e8b46a',2);el(c,FX,FY,4);fs(c,'#7a4a24',0)
  c.font='bold 9px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#7a4a24'
  for(const[r,s]of RG){const st=6.3/r;for(let k=0;k<s.length;k++){const a=-P/2+(k-s.length/2+.5)*st;c.save();c.translate(FX+cos(a)*r,FY+sin(a)*r*1.04);c.rotate(a+P/2);c.fillText(s[k],0,0);c.restore()}}
  // notch where the axe bites
  c.beginPath();c.moveTo(FX-52,FY-80);c.lineTo(FX-40,FY-66);c.lineTo(FX-32,FY-80);fs(c,'#f3cd8e',2.5)
  c.restore()
  // girl
  const lean=lp(.1,-.08,up),sq=imp?4:0
  const hx=lp(GX+30,GX+40,up),hy=lp(150,110,up),dx=cos(th),dy=sin(th)
  c.save();c.translate(GX,240);c.rotate(lean*.5);c.translate(-GX,-240)
  // legs, boots
  for(const f of[-1,1]){c.beginPath();c.moveTo(GX+f*10,202);c.lineTo(GX+f*13,228);st(c,11,J);rr(c,GX+f*13-9,224,18,14,4);fs(c,'#6b4026',3)}
  // flannel shirt with buffalo check
  const tor=()=>{c.beginPath();c.moveTo(GX-16,136+sq);c.quadraticCurveTo(GX-30,138+sq,GX-29,154+sq);c.lineTo(GX-30,206);c.quadraticCurveTo(GX,212,GX+30,206);c.lineTo(GX+29,154+sq);c.quadraticCurveTo(GX+30,138+sq,GX+16,136+sq);c.closePath()}
  tor();fs(c,F);c.save();tor();c.clip();c.fillStyle='rgba(60,10,20,.55)';for(let x=GX-30;x<GX+30;x+=16)c.fillRect(x,130,8,90);for(let y=140;y<212;y+=16)c.fillRect(GX-32,y,64,8);c.restore();tor();sk(c,3.5)
  c.beginPath();c.moveTo(GX-12,137+sq);c.lineTo(GX,152+sq);c.lineTo(GX+12,137+sq);fs(c,'#f2ece0',3)
  c.beginPath();c.moveTo(GX,152+sq);c.lineTo(GX,208);sk(c,2.5);for(const v of[164,180,196]){el(c,GX+4,v,2);fs(c,'#f2ece0',1.5)}
  const axe=()=>{
  if(swing){c.beginPath();c.arc(hx,hy,74,th-.9,th);sk(c,10,'rgba(255,255,255,.85)')}
  c.beginPath();c.moveTo(hx-dx*10,hy-dy*10);c.lineTo(hx+dx*70,hy+dy*70);st(c,6,'#a8743c',3)
  c.save();c.translate(hx+dx*64,hy+dy*64);c.rotate(th)
  c.beginPath();c.moveTo(-6,-6);c.lineTo(8,-6);c.lineTo(10,14);c.quadraticCurveTo(0,18,-10,14);c.closePath();fs(c,'#c9cede');c.beginPath();c.moveTo(-9,12);c.quadraticCurveTo(0,16,9,12);sk(c,2.5,'#fff');rr(c,-7,-10,14,7,2);fs(c,F,2.5)
  c.restore()
  }
  // head
  c.save();c.translate(GX,100+sq);c.rotate(lean);c.scale(.76,.76)
  hd(c,S)
  const o=t<.4?{e:I,lx:7,ly:t<.3?2:-1,br:-.7,op:.85,m:t<.3?'cat':'grit'}:swing||imp?{e:I,ex:'shut',m:'open',mo:1.1,br:-.5}:t<.8?{e:I,ex:'happy',m:'grin',mo:1.1}:{e:I,lx:6,ly:3,m:'smug',br:-.2}
  face(c,{...o,fr:'#6e3a20'})
  cap(c,[50,26,48,0,42,8,38,-12,30,4,24,-16,14,-2,6,-20,-4,-4,-14,-20,-24,-2,-34,-16,-42,6,-48,-4,-50,26],H,.1,Hl)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,-16);c.quadraticCurveTo(f*56,8,f*52,26);c.lineTo(f*46,18);c.lineTo(f*44,32);c.quadraticCurveTo(f*40,10,f*36,-2);c.closePath();fs(c,H)}
  // mustard beanie with a pompom
  c.beginPath();c.moveTo(-50,-22);c.bezierCurveTo(-52,-80,52,-80,50,-22);c.closePath();fs(c,BN)
  for(let x=-40;x<=40;x+=10){c.beginPath();c.moveTo(x,-30);c.quadraticCurveTo(x*.6,-56,x*.3,-70);sk(c,2,'#c98a20')}
  rr(c,-53,-34,106,16,7);fs(c,'#ffcf5a',3);for(let x=-44;x<=44;x+=8){c.beginPath();c.moveTo(x,-31);c.lineTo(x,-21);sk(c,2,'#c98a20')}
  for(let k=0;k<10;k++){const a=k/10*2*P;el(c,cos(a)*9,-80+sin(a)*8,6,6);c.fillStyle='#fff3d0';c.fill()}
  el(c,0,-80,13,12);sk(c,3.5);for(let k=0;k<10;k++){const a=k/10*2*P;el(c,cos(a)*7,-80+sin(a)*6,6,6);c.fillStyle='#fff3d0';c.fill()}
  c.restore()
  // arms and axe: hands slide along the handle as it swings
  axe()
  for(const[sx,k]of[[GX-22,10],[GX+22,0]]){const x=hx-dx*k,y=hy-dy*k;lb(c,sx,152+sq,lp(sx,x,.5)+(sx<GX?-10:10),lp(176,y,.5),x,y,10,F);el(c,x,y,7.5,7);fs(c,S,3)}
  c.restore()
  // impact: thwack lines, flying wood chips
  if(imp)for(const a of[-2.2,-1.7,-1.2,-.7]){c.beginPath();c.moveTo(FX-42+cos(a)*26,FY-76+sin(a)*26);c.lineTo(FX-42+cos(a)*40,FY-76+sin(a)*40);sk(c,3.5)}
  if(chip){const q=(t-.47)/.33;for(let k=0;k<7;k++){const vx=(k-3)*20+6,vy=-70-(k%3)*22,x=FX-42+vx*q,y=FY-78+vy*q+170*q*q
    if(y<246){c.save();c.translate(x,y);c.rotate(q*(k%2?8:-7)+k);rr(c,-6,-3,12,6,2);fs(c,k%3?'#f3cd8e':'#e0a96a',2.5);c.restore()}}}
  if(t>=.47&&t<.62){const z=sg(t,.47,.5);c.save();c.translate(190,40);c.rotate(.12);c.scale(z,z);tx(c,'THWACK!',0,0,17,'#ffd23a',5,'DejaVu Sans');c.restore()}
}
