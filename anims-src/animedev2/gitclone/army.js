// girl with a silver bob, a cat-ear headband and a black hoodie types git clone on her laptop and identical copies of her pop out one by one in a row beside her, everybody waving
// tags: happy, anime, coding, git, copy, playful
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
const H='#ebe9f5',Hd='#b5b1cc',Hl='#ffffff',S='#fff0e8',D='#2a2633',Dl='#433d52',L='#c9a8ff',I=['#4b1d8a','#c49bff']
// copies: feet x, y, scale, pop time
const CP=[[207,190,.68,.46],[170,204,.82,.34],[124,222,1,.22]],CMD='$ git clone'
const girl=(c,x,y,s,o)=>{c.save();c.translate(x,y);c.scale(s,s)
  const{wv=0,f}=o
  // bob back
  c.save();c.translate(0,-98);c.scale(.62,.62);c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-56,-80,56,-80,50,-20);c.quadraticCurveTo(58,30,46,50);c.quadraticCurveTo(0,58,-46,50);c.quadraticCurveTo(-58,30,-50,-20);fs(c,Hd);c.restore()
  // legs, socks, shoes
  for(const g of[-1,1]){c.beginPath();c.moveTo(g*8,-30);c.lineTo(g*9,-6);st(c,9,S);rr(c,g*9-5,-15,10,8,2);fs(c,'#fff',2.5);el(c,g*10,-3,9,5);fs(c,D,3)}
  // hoodie
  c.beginPath();c.moveTo(-14,-70);c.quadraticCurveTo(-27,-68,-26,-54);c.lineTo(-29,-24);c.quadraticCurveTo(0,-19,29,-24);c.lineTo(26,-54);c.quadraticCurveTo(27,-68,14,-70);c.closePath();fs(c,D)
  c.beginPath();c.moveTo(-15,-71);c.quadraticCurveTo(0,-60,15,-71);sk(c,5,L);c.beginPath();c.moveTo(-15,-71);c.quadraticCurveTo(0,-60,15,-71);sk(c,2)
  for(const g of[-1,1]){c.beginPath();c.moveTo(g*5,-64);c.lineTo(g*6,-52);sk(c,2.5,L);el(c,g*6,-51,2);fs(c,L,0)}
  // laptop held at the chest, lid facing out with a sticker
  c.save();c.translate(-2,-46);c.rotate(-.08);rr(c,-20,-15,40,26,4);fs(c,'#c9cede');rr(c,-22,9,44,6,3);fs(c,'#9aa3c0',2.5)
  c.beginPath();c.moveTo(0,-8);c.lineTo(-6,-2);c.lineTo(0,4);c.moveTo(4,4);c.lineTo(9,4);sk(c,2.4,'#8b5cf6');c.restore()
  // left hand under the laptop
  lb(c,-18,-64,-30,-46,-20,-34,8,D);el(c,-18,-34,6,5.5);fs(c,S,3)
  // right arm: typing behind the lid, or waving
  if(!wv){const ty=o.ty?(o.ty%2?-2:2):0;lb(c,18,-64,30,-50,12,-48+ty,8,D);el(c,12,-48+ty,6,5.5);fs(c,S,3)}
  // head
  c.save();c.translate(0,-98);c.rotate(o.rot||0);c.scale(.62,.62)
  hd(c,S);face(c,f)
  cap(c,[50,26,48,-2,42,-10,36,-24,26,-12,18,-28,6,-14,-4,-30,-14,-12,-24,-26,-34,-10,-42,-18,-48,0,-50,26],H,.2,'#fff')
  for(const g of[-1,1]){c.beginPath();c.moveTo(g*42,-26);c.quadraticCurveTo(g*54,10,g*48,40);c.quadraticCurveTo(g*44,14,g*36,-4);c.closePath();fs(c,H)}
  c.beginPath();c.arc(0,-24,40,P*1.25,P*1.4);sk(c,4,Hd)
  // cat ear headband
  for(const g of[-1,1]){pg(c,g*20,-58,g*38,-80,g*44,-48);fs(c,D);pg(c,g*27,-58,g*37,-72,g*40,-54);fs(c,'#ff9ec4',0)}
  c.beginPath();c.moveTo(-50,-22);c.quadraticCurveTo(0,-80,50,-22);st(c,5,D,3)
  c.restore()
  if(wv){const a=sin(wv*2*P)*.45;lb(c,18,-64,40,-70,40,-96,8,D);palm(c,41,-102,a,S,.8)}
  c.restore()}
const poof=(c,x,y,q,s)=>{if(q<=0||q>=1)return;c.globalAlpha=1-q*q
  for(let k=0;k<7;k++){const a=k/7*2*P+.3,r=(14+q*22)*s;el(c,x+cos(a)*r,y+sin(a)*r*.7,(10-q*5)*s);fs(c,'#f4f2fa',2.5)}
  c.globalAlpha=1}
export default(c,t,i)=>{
  const typed=floor(min(1,t/.18)*CMD.length),gone=sg(t,.86,.91)
  // terminal bubble
  rr(c,10,10,128,30,8);fs(c,'#262b45');c.beginPath();c.moveTo(44,40);c.lineTo(52,52);c.lineTo(60,40);fs(c,'#262b45',0);c.beginPath();c.moveTo(43,39.5);c.lineTo(52,52);c.lineTo(61,39.5);sk(c,3.5)
  const sh=t<.86?CMD.slice(0,typed):'';c.font='bold 14px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle='#7ee0ff';c.fillText(sh.slice(0,1),20,26);c.fillStyle='#a1f08f';c.fillText(sh.slice(1),28.5,26)
  if(i%2==0&&t<.86)c.fillRect(20+sh.length*8.5,19,7,14)
  // copies, back to front, popping in with a bounce, poofing out at the end
  CP.forEach(([x,y,s,p],k)=>{
    const q=sg(t,p,p+.08),z=q*(1+.1*hop(t,p+.04,p+.14))*(1-gone)
    if(z>.02){const wv=t>p+.08?(t*3+k*.25)%1:0
      girl(c,x,y,s*z,{wv,f:t<p+.1?{e:I,m:'o',lx:-4}:{e:I,ex:'happy',m:'grin'},rot:-.04})
      if(t>p+.08&&t<.86){c.save();c.translate(x+s*30,y-s*150);c.scale(s,s);rr(c,-15,-10,30,18,6);fs(c,'#fff',2.5);tx(c,`(${3-k})`,0,-1,12,'#8b5cf6',0);c.restore()}}
    poof(c,x,y-60*s,sg(t,p-.02,p+.12),s);poof(c,x,y-60*s,sg(t,.86,.96),s)})
  // the original, in front
  const typing=t<.2,wv=t>.52&&t<.9?(t*3)%1:0
  girl(c,62,240,1.25,{ty:typing?i:0,wv,rot:.03,f:typing?{e:I,lx:2,ly:4,op:.8,m:'cat'}:t<.52?{e:I,ex:'star',m:'grin',lx:6}:{e:I,ex:'happy',m:'grin'}})
  if(t>.2&&t<.5)for(let k=0;k<3;k++)spk(c,22+k*18,74-(k%2)*10,4+k%2*2,'#fff3a0')
}
