// a ringmaster girl with mint twin tails, a red tailcoat and a tiny top hat keeps plates spinning on poles in both hands and one right on top of her hat, new request plates keep landing on the stacks and wobbling until served ones fly off with a 200
// tags: anxious, anime, coding, circus, balance, spin
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
// head shape centred on the origin: radius 45, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// glossy anime eye at x (f=-1 left, 1 right); op lid openness, lx/ly look, pp pupil scale, ex special shapes
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='dot'){c.moveTo(x-9,y-2);c.lineTo(x+9,y-2);c.stroke();el(c,x,y+5,2.6,3);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){c.save();c.translate(x+lx,y+2+ly);c.beginPath();for(let k=0;k<8;k++){const r=k%2?2.6:7.5,q=k*P/4-P/2;c.lineTo(cos(q)*r,sin(q)*r)}c.closePath();fs(c,'#fff',0);c.restore();el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// eyes, brows (br>0 worried, <0 angry), blush and mouth: smile grin o big cat wave smug grit frown flat tongue
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,by=0}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br+by);c.quadraticCurveTo(f*20,-15-br+by,f*28,-12+3*br+by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='big'){el(c,0,2,6,7.5);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,8,4.5,3);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='tongue'){c.moveTo(-6,-1);c.quadraticCurveTo(0,3,6,-1);c.stroke();c.beginPath();c.moveTo(1,.5);c.quadraticCurveTo(3,7,6,5);c.quadraticCurveTo(7,2,5.5,-.5);fs(c,'#ff7d96',2/mo)}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono',al='center')=>{c.font=`bold ${z}px ${fn}`;c.textAlign=al;c.textBaseline='middle';c.lineJoin='round';c.lineWidth=w;c.strokeStyle=O;if(w)c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
// 4-point sparkle, sweat drop
const spk=(c,x,y,r,f='#fff6a8',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,d=k%2?r*.28:r;c.lineTo(x+cos(q)*d,y+sin(q)*d)}c.closePath();fs(c,f,w)}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
export const frames=18,delay=105,rim=4
const S='#c98d62',H='#7fe0c4',Hd='#4fb89a',Hl='#d8fff2',J='#e0393f',Jd='#a8222a',G='#ffcf3f'
const PL=['#ff7aa8','#ffcf3f','#5ab8ff'],OFF=[0,.34,.67]
const plate=(c,x,y,a,f,ph,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);el(c,0,2,25,8);fs(c,'#d9dde8',3);el(c,0,0,25,8);fs(c,'#fff',3);el(c,0,0,15,4.6);fs(c,f,2)
  for(let k=0;k<3;k++){const q=ph+k*2*P/3,z=sin(q);if(z<-.2)continue;el(c,cos(q)*20,sin(q)*6,2.6,1.6);fs(c,f,0)}c.restore()}
export default(c,t,i)=>{
  const T=t*2*P
  // three poles: left hand, right hand, on the hat
  const st3=OFF.map(o=>{const u=(t+o)%1,n=u>=.16&&u<.56?2:1,w=(n>1?.2:.07)*sin(T*3+o*9)*(u>=.16&&u<.56?1:.6)
    return{u,n,w,land:u>=.16&&u<.24?sin((u-.16)/.08*P):0}})
  const busy=st3.reduce((a,s,k)=>s.n>1&&abs(s.w)>abs(a[1])?[k,s.w]:a,[1,0])[0]
  const hx=128+st3[2].w*-14,hy=130
  // twin tails behind
  for(const f of[-1,1]){c.save();c.translate(hx+f*44,hy-34);c.rotate(f*(.2+sin(T*2+f)*.06))
    c.beginPath();c.moveTo(-8,0);c.bezierCurveTo(f*30-14,30,f*20-16,70,f*6,96);c.quadraticCurveTo(f*20,84,f*16,98);c.bezierCurveTo(f*36,60,f*28,24,10,-4);c.closePath();fs(c,H);c.restore()
    el(c,hx+f*44,hy-36,7,8);fs(c,'#ff7aa8',3)}
  // body: tailcoat, shirt, bow tie
  c.beginPath();c.moveTo(108,172);c.bezierCurveTo(88,178,82,198,80,224);c.lineTo(76,238);c.lineTo(180,238);c.lineTo(176,224);c.bezierCurveTo(174,198,168,178,148,172);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(114,174);c.lineTo(128,212);c.lineTo(142,174);c.closePath();fs(c,'#fff',3)
  for(const y of[196,212,226])for(const f of[-1,1]){el(c,128+f*14,y,3);fs(c,G,1.8)}
  c.beginPath();c.moveTo(128,178);c.lineTo(118,172);c.lineTo(118,184);c.closePath();c.moveTo(128,178);c.lineTo(138,172);c.lineTo(138,184);c.closePath();fs(c,'#2b2440',2);el(c,128,178,3);fs(c,'#2b2440',1.6)
  // head
  c.save();c.translate(hx,hy);c.rotate(st3[2].w*-.4)
  hd(c,S)
  const e=['#8a1a5a','#ff7ac0'],lk=[-6,6,0][busy],wob=st3.some(s=>s.n>1&&abs(s.w)>.12)
  const served=st3.some(s=>s.u>=.56&&s.u<.62)
  face(c,served?{ex:'happy',m:'grin',bc:Hd,bl:1.3}:{e,lx:lk,ly:-2,pp:wob?.75:1,m:wob?'wave':'tongue',br:wob?.8:.2,bc:Hd,bl:1.2})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-56,-40,-30,-64,0,-64);c.bezierCurveTo(30,-64,56,-40,50,24)
  qs(c,[50,24,44,-6,38,4,32,-16,20,-4,12,-22,0,-6,-12,-22,-20,-4,-32,-16,-38,4,-44,-6,-50,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-22,38,P*1.22,P*1.46);ln(c,4.5,Hl)
  // tiny top hat
  c.save();c.translate(14,-60);c.rotate(.12);el(c,0,0,20,5.5);fs(c,'#2b2440',3);rr(c,-13,-24,26,24,3);fs(c,'#2b2440',3);rr(c,-13,-9,26,6,0);fs(c,J,2);c.restore()
  c.restore()
  if(wob)drop(c,hx+52,hy-22+(i%3)*2,1)
  // poles and arms
  const tops=[[58+st3[0].w*40,66],[198+st3[1].w*40,66],[hx+17+st3[2].w*12,hy-82]],bases=[[70,176],[186,176]]
  for(let k=0;k<2;k++){c.beginPath();c.moveTo(bases[k][0],bases[k][1]+(k<2?14:0));c.lineTo(tops[k][0],tops[k][1]);st(c,4,'#e8e2d4',3)}
  for(const[k,f]of[[0,-1],[1,1]]){const b=bases[k];c.beginPath();c.moveTo(128+f*22,184);c.quadraticCurveTo(128+f*40,200,b[0]-f*4,b[1]+2);st(c,13,J);el(c,b[0],b[1],9,8.5);fs(c,S,3.2)}
  // plate stacks, incoming requests and served plates flying off
  st3.forEach((s,k)=>{const[x,y]=tops[k],ph=T*4*(k%2?-1:1)+k
    plate(c,x,y-4,s.w,PL[k],ph)
    if(s.n>1)plate(c,x+s.w*10,y-4-11+s.land*-4,s.w*1.4,PL[(k+1)%3],ph+1)
    if(s.u<.16){const p=s.u/.16,sx=k==1?280:-24,sy=k==2?-20:110;plate(c,sx+(x-sx)*p,sy+(y-15-sy)*p-sin(p*P)*30,p*6,PL[(k+1)%3],ph,.9)}
    if(s.u>=.56&&s.u<.86){const p=(s.u-.56)/.3,ex=x+(k==0?-34:34),ey=y-44;const px=x+(ex-x)*p,py=y-15+(ey-y+15)*p-sin(p*P)*14
      if(p<.85)plate(c,px,py,p*-6,PL[(k+1)%3],ph,1-p);else spk(c,ex,ey,10*(1-p)/.15+2,'#fff');if(p<.6){c.save();c.globalAlpha=min(1,(1-p/.6)*2);tx(c,'200',x+(k==0?30:-30),y-22-p*10,14,'#6ef08a',4.5);c.restore()}}
  })
  // motion swooshes around the spinning plates
  c.lineWidth=2.4;c.strokeStyle=O;for(const[x,y]of tops){c.beginPath();c.ellipse(x,y-6,33,11,0,T*2%(2*P),T*2%(2*P)+.9);c.stroke()}
}
