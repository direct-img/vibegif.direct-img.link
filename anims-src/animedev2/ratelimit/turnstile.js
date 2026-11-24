// a stern bouncer girl with a black afro puff, shades on her head and a STAFF tee holds back a jostling crowd of request arrows at a turnstile, smirking as she lets them through one at a time
// tags: anime, coding, api, crowd, queue, proud
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const pl=(c,...p)=>{c.beginPath();c.moveTo(p[0],p[1]);for(let j=2;j<p.length;j+=2)c.lineTo(p[j],p[j+1])}
const cv=(c,x,y,qx,qy,X,Y)=>{c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(qx,qy,X,Y)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='dot'){el(c,x,y+1,11,13);fs(c,'#fff',3.6);el(c,x+lx,y+1+ly,3,3.6);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp,11.5*pp);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='yell'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,9,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(7,2,0,6);c.quadraticCurveTo(-7,2,0,-9);fs(c,'#8fd8ff',2.5);c.restore()}
const bangs=(c,H,Hl,pts=[50,26,44,-8,36,6,30,-18,20,0,12,-20,2,-2,-6,-20,-16,-2,-24,-18,-34,4,-42,-8,-50,26])=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,pts,.18);c.closePath();fs(c,H);c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()}
export const frames=28,delay=80,rim=4
const S='#8a5636',Sd='#6e4228',H='#231a22',Hl='#4a3a48',TE='#2e2f3a',PA='#3b4a5e',AC=['#ff6f9c','#4fc6ff']
const SL=[[90,198],[62,183],[64,216],[36,168],[36,202]]
const arrow=(c,x,y,col,r=0,sq=1,look=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(sq*.82,.82/sq)
  c.beginPath();c.moveTo(-24,-7);c.lineTo(2,-7);c.lineTo(2,-15);c.lineTo(24,0);c.lineTo(2,15);c.lineTo(2,7);c.lineTo(-24,7);c.closePath();fs(c,col,3.2)
  for(const u of[-8,0]){el(c,u+look,-1,2.2,3);fs(c,O,0)}c.restore()}
export default(c,t,i)=>{
  const T=t*2*P,u=t*2%1,pc=floor(t*2)
  const go=sg(u,.42,.52)*(1-sg(u,.74,.86)),rot=sg(u,.46,.66)*P*2/3,pass=sg(u,.46,.72),shuf=sg(u,.58,.86)
  // queue of arrows jostling (slot 0 passes, the rest shuffle up a slot, a new one walks in)
  for(let k=4;k>=1;k--){const[a,b]=SL[k],[p,q]=SL[k-1],x=lp(a,p,shuf)+sin(T*6+k*1.9)*2.5,y=lp(b,q,shuf)+cos(T*5+k)*1.5
    arrow(c,x,y,AC[(k+pc)%2],sin(T*4+k)*.12,1,2)}
  {const[a,b]=SL[4];c.globalAlpha=shuf;arrow(c,lp(a-30,a,shuf)+sin(T*6)*2,b,AC[(5+pc)%2],0,1,2);c.globalAlpha=1}
  // girl: afro puff, body
  c.save();c.translate(184,86)
  c.beginPath();for(let k=0;k<=14;k++){const a=k/14*2*P;c.lineTo(cos(a)*(30+(k%2)*4),-60+sin(a)*(26+(k%2)*3))}c.closePath();c.scale(.72,.72);c.restore()
  c.save();c.translate(184,86);c.scale(.72,.72)
  c.beginPath();for(let k=0;k<=20;k++){const a=k/20*2*P,r=k%2?40:46;c.lineTo(cos(a)*r,-72+sin(a)*r*.82)}c.closePath();fs(c,H)
  c.restore()
  // legs + shoes
  for(const x of[172,198]){rr(c,x-11,196,22,36,6);fs(c,PA);el(c,x+3,234,15,7);fs(c,'#f4f4f8',3.2)}
  // torso: black tee
  c.beginPath();c.moveTo(166,120);c.quadraticCurveTo(150,124,150,146);c.lineTo(156,204);c.lineTo(214,204);c.lineTo(218,146);c.quadraticCurveTo(218,124,202,120);c.closePath();fs(c,TE)
  rr(c,154,196,62,10,3);fs(c,'#5a4632',2.8);rr(c,180,196,10,10,2);fs(c,'#ffd34d',2.2)
  tx(c,'STAFF',186,160,12,'#ffd34d',3.5,'DejaVu Sans')
  c.beginPath();c.moveTo(174,120);c.quadraticCurveTo(184,128,194,120);fs(c,S,3)
  // hand on hip
  cv(c,214,130,234,154,214,180);st(c,13,S);el(c,212,182,8,7);fs(c,S,3);cv(c,212,128,226,134,226,144);st(c,14,TE)
  // turnstile cabinet with LED and rotating arms
  const arms=b=>{for(let k=0;k<3;k++){const a=rot+P+k*P*2/3+.0,s=sin(a),ex=128+cos(a)*50,ey=170+s*12
    if((s<0)==b){pl(c,128,170,ex,ey);st(c,7,'#cfd6e2',3.2);el(c,ex,ey,4.5,4);fs(c,'#e04848',2.8)}}}
  arms(true)
  rr(c,106,170,44,66,7);fs(c,'#8e98ae');rr(c,112,184,32,22,4);fs(c,'#1d2133',2.6)
  const ok=go>.5;tx(c,ok?'200':'429',128,195.5,13,ok?'#7cff9a':'#ff5a5a',0)
  rr(c,112,214,32,6,3);fs(c,'#5d667e',0);el(c,128,170,22,7);fs(c,'#b8c0d0',3.2);el(c,128,166,7,4);fs(c,ok?'#5cff8a':'#ff4d4d',2.6)
  arms(false)
  // the arrow that gets through
  {const x=lp(SL[0][0],252,pass),y=lp(SL[0][1],206,pass),sq=1+sin(min(1,pass*2)*P)*.25
    c.globalAlpha=1-sg(pass,.62,.95)
    if(pass>.05)for(let k=0;k<3;k++){pl(c,x-34-k*10,y-8+k*8,x-48-k*10-pass*20,y-8+k*8);sk(c,3,AC[pc%2])}
    arrow(c,x+(pass?0:sin(T*6)*2.5),y,AC[pc%2],pass?0:-.05+sin(T*4)*.06,pass?sq:.9,pass?3:3);c.globalAlpha=1}
  // head
  c.save();c.translate(184,86);c.rotate(-.05+go*.04);c.scale(.72,.72)
  hd(c,S)
  for(const f of[-1,1]){el(c,f*44,30,5,8);sk(c,3.2,'#ffcf3a')}
  face(c,{e:['#6a2c00','#ffb347'],op:go?.85:.62,lx:-3,ly:1,br:go?0:-1.1,tl:go?0:2,m:go?'smug':'flat',mo:1.2,bs:'rgba(255,90,110,.25)',ex:go>.6&&u<.74?0:0})
  if(go>.5){c.save();c.translate(20,10);c.fillStyle=S;el(c,0,1,14,15);c.fill();c.beginPath();c.moveTo(-10,3);c.quadraticCurveTo(0,-6,10,3);sk(c,3.8);c.restore()}
  // short curly fringe
  c.beginPath();c.moveTo(-48,10);c.bezierCurveTo(-56,-50,-28,-70,0,-70);c.bezierCurveTo(28,-70,56,-50,48,10)
  for(let k=0;k<=8;k++){const x=48-k*12,y=-18-(k%2)*10+(k==0||k==8?20:0);c.quadraticCurveTo(x+6,y+12,x,y)}c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-28,38,P*1.25,P*1.45);sk(c,4,Hl)
  // shades parked on her head
  for(const f of[-1,1]){rr(c,f*21-16,-60,32,16,7);fs(c,'#6a3a8a',3.4);rr(c,f*21-10,-57,10,4,2);fs(c,'rgba(255,255,255,.7)',0)}
  pl(c,-5,-54,5,-54);sk(c,3.4)
  c.restore()
  // stop arm: palm out at the queue, lifts to wave one through
  const ang=lp(P*1.02,P*1.42,go),sx=160,sy=130,hx=sx+cos(ang)*58,hy=sy+sin(ang)*58
  cv(c,sx,sy,sx+cos(ang)*30,sy+sin(ang)*30+8,hx,hy);st(c,13,S)
  cv(c,sx+4,sy-2,sx-8,sy+2,sx-12,sy+6);st(c,15,TE)
  c.save();c.translate(hx,hy);c.rotate(go?.25+sin(T*8)*.15:-.12)
  c.save();c.rotate(-1.1);rr(c,-4,-16,8,16,4);fs(c,S,2.8);c.restore()
  for(const[a,l]of[[-.32,15],[-.1,18],[.12,18],[.34,15]]){c.save();c.rotate(a);rr(c,-4,-l-6,8,l+6,4);fs(c,S,2.8);c.restore()}
  el(c,1,2,11,10);fs(c,S,0);c.beginPath();c.ellipse(1,2,11,10,0,-.2,P+.2);sk(c,3);c.restore()
  if(!go){c.lineWidth=3;c.strokeStyle=O;for(const a of[-.6,0,.6]){const x=hx-14,y=hy-8;pl(c,x+cos(P+a)*8,y+sin(P+a)*8,x+cos(P+a)*15,y+sin(P+a)*15);c.stroke()}}
}
