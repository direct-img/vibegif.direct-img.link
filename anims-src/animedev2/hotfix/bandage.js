// a girl with a red high ponytail, blue bandana and denim overalls slaps a band-aid on a leaking pipe coming out of the PROD server, which pops the other band-aid off and springs a new leak, so she slaps that one too, forever
// tags: anxious, anime, coding, water, leak, fast
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
export const frames=20,delay=90,rim=4
const S='#b07850',H='#e8463c',Hd='#b52a2a',Hl='#ff9a7a',D='#4a7fd0',Dd='#2f5aa0',PY=180,AX=114,BX=196
const aid=(c,x,y,a,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);rr(c,-15,-7,30,14,7);fs(c,'#f6c99a',2.6);rr(c,-5,-6,10,12,2);fs(c,'#e8a878',1.8)
  for(const[u,v]of[[-11,-2],[-11,2],[9,-2],[9,2]]){el(c,u,v,.9);fs(c,'#c98a5a',0)}c.restore()}
export default(c,t,i)=>{
  // two half-cycles: a leak sprays at X, she winds up and slaps it, which bursts the other spot
  const h=Math.floor(((t+.08)%1)*2),s=((t+.08)%.5)/.5,X=h?AX:BX,Y=h?BX:AX,dir=X<150?-1:1
  const burst=s<.3,wind=sg(s,.5,.8),slap=s>.9,shake=slap?(i%2?2:-2):0
  // server tower
  rr(c,12,88,62,148,8);fs(c,'#3b4150');rr(c,20,98,46,18,3);fs(c,'#ffd34d',2.6);tx(c,'PROD',43,107,12,O,0,'DejaVu Sans')
  for(let k=0;k<4;k++){const y=124+k*24;rr(c,20,y,46,18,3);fs(c,'#5b6272',2.4);el(c,56,y+9,3);fs(c,(k+i)%3?'#6dff94':'#ff5a5a',1.4);c.beginPath();c.moveTo(26,y+9);c.lineTo(42,y+9);ln(c,2.4,'#3b4150')}
  // puddle
  el(c,150,236,78,7);fs(c,'#9fd8ff',2.6);el(c,128,234,22,2.5);fs(c,'#d6f0ff',0)
  // ponytail and back hair
  const hx=154+shake,hy=78
  c.save();c.translate(hx,hy);c.rotate(dir*.06)
  const sw=sin(t*4*P)*5;c.beginPath();c.moveTo(26,-58);c.bezierCurveTo(70,-76,86,-24,74+sw,28);c.quadraticCurveTo(66,16,62+sw*.6,26);c.quadraticCurveTo(66,-12,34,-34);c.closePath();fs(c,H);c.beginPath();c.moveTo(50,-46);c.quadraticCurveTo(66,-30,70+sw*.5,0);ln(c,2.4,Hd);el(c,34,-50,7,9,-.6);fs(c,'#2f7be0',3)
  c.beginPath();c.moveTo(-48,-10);c.bezierCurveTo(-56,20,-52,38,-44,44);c.lineTo(44,44);c.bezierCurveTo(52,38,56,20,48,-10);fs(c,Hd)
  c.restore()
  // legs and boots under the pipe
  for(const x of[136,170]){rr(c,x-10,192,20,32,4);fs(c,D);rr(c,x-13,220,26,14,6);fs(c,'#6b4a3a')}
  // white tee and overalls
  c.beginPath();c.moveTo(132,128);c.bezierCurveTo(114,134,108,156,106,194);c.lineTo(202,194);c.bezierCurveTo(200,156,194,134,176,128);c.closePath();fs(c,'#fafafa')
  c.beginPath();c.moveTo(126,154);c.lineTo(182,154);c.lineTo(188,194);c.lineTo(120,194);c.closePath();fs(c,D);rr(c,140,160,28,14,3);fs(c,Dd,2.4)
  for(const f of[-1,1]){c.beginPath();c.moveTo(154+f*22,155);c.lineTo(154+f*18,130);ln(c,9);c.beginPath();c.moveTo(154+f*22,155);c.lineTo(154+f*18,130);ln(c,5,D);el(c,154+f*22,154,3);fs(c,'#ffd34d',1.8)}
  for(const x of[128,180]){el(c,x,140,10,10);fs(c,'#fafafa')}
  // head
  c.save();c.translate(hx,hy);c.rotate(dir*.06)
  hd(c,S)
  const e=['#8a4a10','#ffb84d'],lk=dir*5
  const fc=slap?{ex:'shut',m:'grit',mo:1.1,br:-.8}:s<.12?{e,lx:lk,pp:.5,m:'o',mo:1.2,br:.9}:s<.5?{e,lx:lk,ly:2,m:'wave',br:.9}:{e,lx:lk,ly:-1,op:.8,m:'grit',mo:.9,br:-.7}
  face(c,{...fc,bc:Hd,bl:1.3})
  // bangs and the blue bandana
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-40,-30,-66,0,-66);c.bezierCurveTo(30,-66,58,-40,50,24)
  qs(c,[50,24,46,-4,38,6,34,-14,24,-2,16,-20,6,-4,-4,-20,-14,-4,-24,-18,-34,4,-42,-6,-50,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-22,40,P*1.2,P*1.46);ln(c,5,Hl)
  c.beginPath();c.moveTo(-47,-22);c.quadraticCurveTo(0,-62,47,-22);st(c,10,'#2f7be0');c.beginPath();for(const[u,v]of[[-30,-40],[-10,-47],[12,-46],[32,-38]]){c.moveTo(u+2,v);c.arc(u,v,2,0,2*P)}c.fillStyle='#fff';c.fill()
  c.save();c.translate(-46,-20);for(const a of[2.4,2.9]){c.save();c.rotate(a);rr(c,-4,0,8,18,4);fs(c,'#2f7be0',3);c.restore()}c.restore()
  c.restore()
  // pipe: out of the server, along, and down into the floor
  c.beginPath();c.moveTo(74,PY);c.lineTo(222,PY);c.quadraticCurveTo(236,PY,236,PY+14);c.lineTo(236,238);st(c,24,'#9bb8c8')
  c.beginPath();c.moveTo(80,PY-7);c.lineTo(216,PY-7);ln(c,4,'#d3e6ef')
  for(const x of[92,156]){rr(c,x-5,PY-15,10,30,3);fs(c,'#7a96a8',2.6)}rr(c,224,226,24,10,3);fs(c,'#7a96a8',2.6)
  // band-aids: the one on Y is fresh, the one on X flies off as it bursts
  aid(c,Y,PY-1,Y==AX?.25:-.2,1.25)
  if(slap)aid(c,X,PY-1,X==AX?.25:-.2,1.25)
  if(burst){const p=s/.3;aid(c,X+dir*p*40,PY-8-p*90+p*p*50,(X==AX?.25:-.2)+dir*p*5,1.25-p*.2)}
  // spray from the leak
  if(!slap){const pw=min(1,s*5),wb=sin(t*12*P)*4
    for(let k=0;k<3;k++){const ex=X+dir*(18+k*16)*pw,top=PY-12-(46-k*10)*pw+wb*(k-1)
      c.beginPath();c.moveTo(X,PY-12);c.quadraticCurveTo(X+dir*(4+k*6)*pw,top-8,ex,PY+4-k*2);st(c,6-k,k?'#a8dcff':'#7cc8ff',2.6)}
    c.beginPath();c.moveTo(X+dir*4,PY-14);c.quadraticCurveTo(X+dir*6*pw,PY-40*pw,X+dir*16*pw,PY-44*pw);ln(c,2.4,'#fff')
    for(let j=0;j<6;j++){const q=(t*6+j/6)%1,x=X+dir*(10+j*7)*pw+dir*q*16,y=PY-30*pw-sin(q*P)*16*pw+q*40,z=3.6*pw
      el(c,x,y,z*.8,z);fs(c,'#7cc8ff',2)}}
  // arms: the X hand winds up high and slaps, the Y hand lifts off its fresh band-aid
  const arm=(sx,x,y)=>{const mx=sx+(x-sx)*.2,my=y+30;c.beginPath();c.moveTo(sx,144);c.quadraticCurveTo(mx,my,x,y);st(c,11,S)
    el(c,x,y,10,9);fs(c,S,3.2)}
  const ry=k=>{const sd=k?BX:AX,fr=k?186:122;if(sd==X){if(slap)return[sd,PY-8];return[fr+(sd-fr)*wind*.6+(k?16:-16)*wind,148-wind*80]}
    const u=sg(s,.04,.3);return[sd+(fr-sd)*u,PY-8+(148-PY+8)*u]}
  for(const k of[0,1]){const[x,y]=ry(k);arm(k?180:128,x,y)}
  if(slap){c.lineWidth=4;c.strokeStyle=O;for(const a of[-1.2,-.6,0,.6,1.2]){c.beginPath();c.moveTo(X+sin(a)*24,PY-12-cos(a)*20);c.lineTo(X+sin(a)*36,PY-12-cos(a)*32);c.stroke()}}
  if(s>.08&&s<.6)drop(c,hx-dir*54,hy-14+((i%4)*2),1.1)
}
