// a girl with pastel pink wavy hair in a high bun and a frilly white apron pipes pastel frosting rosettes onto her terminal like decorating a cake, the frosted monitor sits on a cake stand with a cherry on top and scrolls up for the next row
// tags: happy, anime, coding, cake, pastel, food
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
export const frames=24,delay=85,rim=4
const S='#ffe9dc',H='#ffb6d3',Hd='#e889b0',Hl='#ffe1ee',D='#8fdcc0',Dd='#5fb89a',
  K=['#ffaad0','#a6f0d2','#d2b6ff','#fff09a'],ROW=26,X0=164,DX=20
// one piped rosette: ridged star with a swirl
const ros=(c,x,y,s,f)=>{if(s<=0)return;c.save();c.translate(x,y);c.scale(s,s);c.beginPath()
  for(let k=0;k<16;k++){const q=k*P/8+.2,r=k%2?5.6:9.6;c.lineTo(cos(q)*r,sin(q)*r)}c.closePath();fs(c,f,2.4/s)
  c.beginPath();c.arc(0,0,3.4,.4,P*1.6);c.lineWidth=1.6/s;c.strokeStyle='rgba(43,29,46,.5)';c.stroke();el(c,-2.6,-3,1.4);fs(c,'#fff',0);c.restore()}
export default(c,t,i)=>{
  // piping timeline: four rosettes then the screen scrolls up a row and the bag swings back
  const tk=k=>.06+k*.14,gr=k=>{const s=E((t-tk(k))/.07);return s*(1+.3*sin(s*P))}
  const u=(t-.06)/.14,k=Math.floor(u),f=u-k,pr=max(0,min(3,k)),back=sg(t,.55,.95)
  let px=k<0?X0:k<3?X0+DX*(k+E((f-.5)/.5)):X0+3*DX*(1-back)
  const press=k>=0&&k<4&&f<.5?sin(f/.5*P):0
  const scr=sg(t,.64,.84)*ROW,done=t>.6&&t<.8,lean=t<.62?(px-X0)/DX*1.5:0
  // back hair: wavy and shoulder length, plus the high bun
  c.save();c.translate(82+lean*.5,96);c.rotate(.08)
  el(c,-6,-62,21,19);fs(c,H);c.beginPath();c.arc(-6,-62,12,P*.9,P*1.8);ln(c,2.4,Hd)
  c.beginPath();c.moveTo(-50,-12);c.bezierCurveTo(-64,30,-58,56,-50,66);c.quadraticCurveTo(-40,74,-30,64);c.quadraticCurveTo(0,72,30,64);c.quadraticCurveTo(40,74,50,66);c.bezierCurveTo(58,56,64,30,50,-12);fs(c,Hd)
  c.restore()
  // body: mint dress with puff sleeves under a frilly white apron
  c.beginPath();c.moveTo(60,142);c.bezierCurveTo(40,148,32,172,30,204);c.quadraticCurveTo(28,234,42,238);c.lineTo(126,238);c.quadraticCurveTo(140,234,138,204);c.bezierCurveTo(136,172,128,148,108,142);c.closePath();fs(c,D)
  c.beginPath();c.moveTo(58,170);c.quadraticCurveTo(84,164,110,170);c.lineTo(118,238);c.lineTo(50,238);c.closePath();fs(c,'#fff',3)
  c.beginPath();for(let x=52;x<=116;x+=8)c.arc(x+4,171+(x-84)*(x-84)*.0006,4,P,0);ln(c,2.2,'#ff9cc4')
  c.save();c.translate(84,200);c.beginPath();c.moveTo(0,6);c.bezierCurveTo(-12,-4,-6,-14,0,-6);c.bezierCurveTo(6,-14,12,-4,0,6);fs(c,'#ffaad0',2.6);c.restore()
  c.beginPath();c.moveTo(70,143);c.quadraticCurveTo(84,154,98,143);fs(c,'#fff',3)
  el(c,48,152,15,12,-.4);fs(c,D)
  // left arm resting, holding a little spatula
  c.beginPath();c.moveTo(46,158);c.quadraticCurveTo(34,190,52,212);st(c,12,S)
  c.save();c.translate(58,214);c.rotate(-.5);rr(c,-3,-34,6,26,3);fs(c,'#d2b6ff',2.6);rr(c,-6,-50,12,18,5);fs(c,'#e7ebf5',2.6);c.restore()
  el(c,54,214,8,7.5);fs(c,S,3.2)
  // head
  c.save();c.translate(82+lean*.5,96);c.rotate(.08+lean*.01)
  hd(c,S)
  face(c,done?{ex:'happy',m:'grin',mo:1.05,bc:Hd}:{e:['#8a2a6a','#ff8ac8'],lx:3,ly:-1,op:1,pp:1.05,m:press>.3?'tongue':'cat',mo:1,br:.35,bc:Hd})
  // fringe with soft waves and two curly side locks
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,26)
  qs(c,[50,26,46,-6,38,6,34,-16,22,-6,14,-20,4,-6,-6,-20,-16,-6,-26,-18,-36,4,-44,-6,-50,26],.22);c.closePath();fs(c,H)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,-4);c.bezierCurveTo(f*60,14,f*42,26,f*54,40);c.bezierCurveTo(f*62,52,f*48,62,f*50,70);c.bezierCurveTo(f*42,58,f*40,44,f*44,34);c.bezierCurveTo(f*36,20,f*42,6,f*38,-4);c.closePath();fs(c,H)}
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);ln(c,5,Hl)
  // cherry hair clip
  c.beginPath();c.moveTo(24,-56);c.quadraticCurveTo(30,-70,40,-70);ln(c,2.6,'#4d8a3a');for(const[x,y]of[[22,-54],[33,-58]]){el(c,x,y,5.5);fs(c,'#ff4d6d',2.6);el(c,x-1.8,y-2,1.5);fs(c,'#fff',0)}
  c.restore()
  // cake stand
  rr(c,170,220,28,16,4);fs(c,'#fdfdff');el(c,184,239,30,6);fs(c,'#fdfdff');el(c,184,218,64,9);fs(c,'#fdfdff')
  c.beginPath();for(let x=124;x<=244;x+=10)c.arc(x+5,221+abs(x+5-184)*-.03,3,0,P);ln(c,2,'#d2b6ff')
  // monitor: cream bezel, terminal screen
  rr(c,126,96,118,120,14);fs(c,'#fff4e6')
  rr(c,136,110,98,90,6);fs(c,'#3b2c4f',3)
  c.save();rr(c,136,110,98,78,[6,6,0,0]);c.clip()
  for(let j=0;j<4;j++){const y=124+j*ROW-scr
    tx(c,'$',146,y,15,K[1],0)
    for(let k=0;k<4;k++)ros(c,X0+DX*k,y,j<2?1:j==2?gr(k):0,K[k])}
  c.restore()
  // pastel powerline status bar
  c.save();rr(c,136,110,98,90,6);c.clip();[[136,'#ffaad0'],[164,'#d2b6ff'],[192,'#a6f0d2']].forEach(([x,f],k)=>{pg(c,x,189,x+28,189,x+34,195,x+28,201,x,201);fs(c,f,0)});tx(c,'~',150,195,11,'#3b2c4f',0);c.restore()
  rr(c,136,110,98,90,6);ln(c,3)
  // little piped pearls on the bottom bezel, power dot
  for(let k=0;k<7;k++){el(c,140+k*12,208,3.2);fs(c,'#fff',2)}el(c,230,208,3.4);fs(c,'#9bffb0',2)
  // frosting on top with drips, sprinkles and a cherry
  c.beginPath();c.moveTo(126,112);c.lineTo(126,104);c.quadraticCurveTo(126,92,140,92);c.lineTo(230,92);c.quadraticCurveTo(244,92,244,104);c.lineTo(244,110)
  for(const[x,d]of[[238,14],[224,6],[210,20],[196,8],[180,16],[164,6],[150,22],[136,8]])c.quadraticCurveTo(x+4,104,x,104+d),c.quadraticCurveTo(x-4,104+d+4,x-6,104)
  c.closePath();fs(c,'#ff9cc4')
  c.beginPath();c.moveTo(140,97);c.lineTo(224,97);ln(c,3,'#ffd3e6')
  ;[[146,101,.6,K[1]],[170,96,-.5,K[3]],[190,102,.9,K[2]],[214,98,-.3,'#fff'],[232,101,.4,K[1]],[158,105,1.2,K[2]]].forEach(([x,y,a,f])=>{c.save();c.translate(x,y);c.rotate(a);rr(c,-4,-1.6,8,3.2,1.6);fs(c,f,1.4);c.restore()})
  c.beginPath();c.moveTo(204,82);c.quadraticCurveTo(206,70,216,66);ln(c,3,'#4d8a3a');el(c,204,84,8);fs(c,'#ff4d6d',3);el(c,201,81,2.2);fs(c,'#fff',0)
  // sparkles over the finished row
  if(t>.56&&t<.82){const s=sin(sg(t,.56,.82)*P);spk(c,236,150-scr*0,9*s);spk(c,150,138,6*s,'#ffd3e6')}
  // piping arm and tri-colour piping bag
  const ty=168-press*3-sin(back*P)*22,hx=px-22,hy=ty-34
  c.beginPath();c.moveTo(110,150);c.quadraticCurveTo(116,hy+28,hx-4,hy+4);st(c,12,S)
  el(c,112,150,13,11,.5);fs(c,D)
  c.save();c.translate(px,ty);c.rotate(-.55);const q=1-press*.12;c.scale(q,1)
  pg(c,-2.5,-2,2.5,-2,4,-8,-4,-8);fs(c,'#c9cfdc',2.4)
  c.beginPath();c.moveTo(-4,-8);c.lineTo(-17,-46);c.quadraticCurveTo(0,-52,17,-46);c.lineTo(4,-8);c.closePath();fs(c,'#f8f6ff',3)
  c.save();c.clip();for(const[x,f]of[[-9,K[0]],[0,K[2]],[9,K[1]]]){c.beginPath();c.moveTo(x*.3,-8);c.lineTo(x*1.4,-50);ln(c,7,f)}c.restore()
  c.beginPath();c.moveTo(-4,-8);c.lineTo(-17,-46);c.quadraticCurveTo(0,-52,17,-46);c.lineTo(4,-8);c.closePath();ln(c,3)
  c.beginPath();c.moveTo(-4,-50);c.quadraticCurveTo(0,-58,6,-52);ln(c,3)
  c.restore()
  el(c,hx,hy,9.5,8.5,-.5);fs(c,S,3.2)
  // a squeeze of frosting coming out while piping
  if(press>.2&&t<.62){el(c,px,ty+5,3*press,4*press);fs(c,K[pr],1.8)}
}
