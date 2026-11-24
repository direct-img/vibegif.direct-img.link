// a brown-skinned girl with short teal hair, a red beret and paint-splattered overalls rolls a FEATURE sign right over the BUG on her board, the ladybug pops on a tiny bow and waves, and she gives a winking thumbs up
// tags: happy, anime, coding, bug, paint, playful
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,hypot,floor}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lr=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-11,y+3);c.lineTo(x+11,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  if(op>.5){c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()}
}
const face=(c,o)=>{
  const{m='smile',mo=1,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    const q={...o,...(f<0?o.L:o.R)},br=q.br||0
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br+(q.by||0));c.quadraticCurveTo(f*20,-15-br+(q.by||0),f*28,-12+3*br+(q.by||0));c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(o.mx||0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='D'){c.moveTo(-8,-3);c.quadraticCurveTo(0,-5,8,-3);c.quadraticCurveTo(7,12,0,12);c.quadraticCurveTo(-7,12,-8,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,11,6,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='tiny'){c.moveTo(-2.5,0);c.lineTo(2.5,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono',al='center')=>{c.font=`bold ${z}px ${fn}`;c.textAlign=al;c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const limb=(c,p,w,f)=>{c.beginPath();c.moveTo(p[0],p[1]);if(p.length==4)c.lineTo(p[2],p[3]);else c.quadraticCurveTo(p[2],p[3],p[4],p[5]);st(c,w,f)}
export const frames=26,delay=90,rim=4
const H='#2fc4b8',Hd='#1a8f88',Hl='#a6f2ea',S='#a86b44',EY=['#7a4a00','#ffd34d'],J='#5b8fd6',Jd='#3f6fb0',T='#ffd34d',PT='#ffcf3f'
const B0=118,B1=244,BT=60,BB=142,PY=84,PH=38
export default(c,t,i)=>{
  const ro=sg(t,.08,.4),rx=lr(B0+8,B1-8,ro),bow=sg(t,.42,.47),wave=t>.48&&t<.9?sin((t-.48)*P*10):0,th=sg(t,.52,.6)*(1-sg(t,.9,.96)),rst=sg(t,.92,1),rollin=t>.06&&t<.42
  // easel legs and board
  for(const[a,b]of[[140,236],[222,236]]){c.beginPath();c.moveTo(a+(a<180?10:-10),BB-4);c.lineTo(a,b);st(c,7,'#9a6a3a',3)}
  rr(c,B0,BT,B1-B0,BB-BT,8);fs(c,'#f4dcae');c.beginPath();for(const y of[78,104,128]){c.moveTo(B0+6,y);c.lineTo(B1-6,y)};ln(c,2,'#ddbc84')
  tx(c,'BUG',(B0+B1)/2,PY+PH/2+1,32,'#e84a4a',5,'DejaVu Sans')
  // fresh paint band with FEATURE, clipped to how far the roller got, fading out at loop end
  const pa=1-rst
  if(ro>0&&pa>0){c.save();c.globalAlpha=pa;c.beginPath();c.rect(B0+4,PY-4,rx-B0-4,PH+8);c.clip()
    rr(c,B0+6,PY,B1-B0-12,PH,6);fs(c,PT,3)
    for(const[x,d]of[[150,10],[190,16],[226,8]]){rr(c,x,PY+PH-4,6,d,3);fs(c,PT,2.5)}
    tx(c,'FEATURE',(B0+B1)/2,PY+PH/2+1,22,'#fff',5,'DejaVu Sans');c.restore()}
  // the ladybug sitting on the board
  c.save();c.translate(206,BT-12+(rollin?abs(sin(t*P*14))*-2:0));c.rotate(wave*.06)
  for(const g of[-1,1]){c.beginPath();c.moveTo(g*5,-10);c.quadraticCurveTo(g*8,-22,g*13,-24);ln(c,2.4)}
  el(c,0,4,20,14);fs(c,'#e84a4a');c.beginPath();c.moveTo(0,-8);c.lineTo(0,18);ln(c,2.2)
  for(const[x,y]of[[-10,2],[9,4],[-5,11],[6,12]]){el(c,x,y,3);fs(c,O,0)}
  el(c,0,-6,12,9);fs(c,'#3a2a44')
  for(const g of[-1,1]){if(rollin){c.beginPath();c.moveTo(g*7,-9);c.lineTo(g*3,-6);c.lineTo(g*7,-3);ln(c,1.8,'#fff')}else{el(c,g*5,-7,3.6,4);fs(c,'#fff',0);el(c,g*5+1,-6,1.8,2.2);fs(c,O,0)}}
  c.beginPath();c.moveTo(-3,-1);c.quadraticCurveTo(0,rollin?-3:2,3,-1);ln(c,1.6,'#fff')
  if(bow*pa>0){c.save();c.translate(8,-15);c.scale(bow*pa,bow*pa);c.rotate(.3)
    for(const g of[-1,1]){c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(g*10,-9,g*11,0);c.quadraticCurveTo(g*10,8,0,0);fs(c,'#ff7ab8',2.4)}el(c,0,0,3);fs(c,'#ff7ab8',2.2);c.restore()}
  // waving leg
  c.beginPath();c.moveTo(16,2);c.lineTo(26,-6+wave*6);ln(c,2.6);el(c,27,-7+wave*6,2.6);fs(c,'#3a2a44',0)
  c.restore()
  if(bow>0&&bow<1){for(let k=0;k<4;k++){const a=k*P/2+.4;c.beginPath();c.moveTo(214+cos(a)*12,32+sin(a)*12);c.lineTo(214+cos(a)*19,32+sin(a)*19);ln(c,3)}}
  // girl: overalls body
  const hx=66,hy=104
  c.beginPath();c.moveTo(40,150);c.bezierCurveTo(22,156,16,178,14,206);c.quadraticCurveTo(12,234,24,240);c.lineTo(110,240);c.quadraticCurveTo(122,234,120,206);c.bezierCurveTo(118,178,112,156,92,150);c.closePath();fs(c,T)
  c.beginPath();c.moveTo(30,184);c.lineTo(104,184);c.lineTo(112,240);c.lineTo(22,240);c.closePath();fs(c,J)
  rr(c,44,170,44,30,5);fs(c,J,3);for(const x of[36,96]){c.beginPath();c.moveTo(x,154);c.lineTo(x+(x<66?12:-12),174);st(c,5,J,2.5);el(c,x+(x<66?12:-12),176,3);fs(c,'#e0c060',2)}
  for(const[x,y,r,f]of[[52,214,5,'#ff7ab8'],[92,224,4,'#ffd34d'],[74,196,3.5,'#2fc4b8'],[38,228,3,'#e84a4a']]){el(c,x,y,r,r*.8);fs(c,f,2)}
  // head
  c.save();c.translate(hx,hy);c.scale(.86,.86);c.rotate(-.05+th*.05)
  c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-56,12,-52,26,-44,30);c.lineTo(44,30);c.bezierCurveTo(52,26,56,12,50,-14);fs(c,Hd)
  hd(c,S)
  face(c,th>.5?{e:EY,lx:2,m:'grin',mo:1.1,br:-.2,bc:Hd,R:{ex:'happy'}}:rollin?{e:EY,lx:7,ly:-2,m:'cat',mo:1.1,br:-.3,bc:Hd}:{e:EY,lx:6,ly:-3,m:'smile',bc:Hd,br:.1})
  c.beginPath();c.moveTo(-50,18);c.bezierCurveTo(-58,-44,-32,-66,0,-66);c.bezierCurveTo(32,-66,58,-44,50,18)
  qs(c,[50,18,46,-10,38,-18,30,-6,22,-26,8,-10,-2,-28,-14,-10,-24,-24,-36,-6,-44,-14,-50,18],.22);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.46);ln(c,5,Hl)
  // beret
  c.beginPath();c.ellipse(10,-62,48,17,.18,0,2*P);fs(c,'#e84a4a');c.beginPath();c.ellipse(10,-62,48,17,.18,P*.15,P*.85);ln(c,3,'#b8303a')
  c.beginPath();c.moveTo(14,-78);c.lineTo(17,-88);ln(c,4)
  el(c,-32,26,4,3);fs(c,'#ff7ab8',0)
  c.restore()
  // roller on a pole
  const rs=sg(t,.42,.5)*(1-sg(t,.9,1)),qx=lr(rx,186,rs),qy=lr(PY,150,rs),ry=qy+PH/2,bx=34,by=214,ex=qx-2,ey=ry+26,pt=k=>[lr(bx,ex,k),lr(by,ey,k)]
  c.beginPath();c.moveTo(bx,by);c.lineTo(ex,ey);st(c,5,'#9a6a3a',3)
  c.beginPath();c.moveTo(ex,ey);c.lineTo(qx+12,ey-4);c.lineTo(qx+12,ry-PH/2-2);ln(c,3.5,'#7a7f93');ln(c,1.5,'#c9cedb')
  rr(c,qx-6,qy-2,14,PH+4,5);fs(c,PT,3);c.beginPath();for(let k=0;k<3;k++){const y=qy+4+((k*12+ro*PH*6)%(PH-6));c.moveTo(qx-4,y);c.lineTo(qx+6,y)}ln(c,1.8,'#e0a91e')
  // hands on the pole, the free one swings up into a thumbs up
  const[h1x,h1y]=pt(.62);el(c,h1x,h1y,8.5,8);fs(c,S,3)
  c.beginPath();c.moveTo(100,162);c.quadraticCurveTo(112,180,h1x-4,h1y+4);st(c,12,T,3);el(c,h1x,h1y,8.5,8);fs(c,S,3)
  const[h2x,h2y]=pt(.35),ux=lr(h2x,30,th),uy=lr(h2y,150,th)
  c.beginPath();c.moveTo(36,164);c.quadraticCurveTo(lr(40,8,th),lr(196,180,th),ux,uy+4);st(c,12,T,3)
  if(th>.5){rr(c,ux-9,uy-6,18,16,6);fs(c,S,3);rr(c,ux-4,uy-20,8,17,4);fs(c,S,3);c.beginPath();for(const y of[uy,uy+5])c.moveTo(ux-8,y),c.lineTo(ux+2,y);ln(c,1.8)}
  else{el(c,ux,uy,8.5,8);fs(c,S,3)}
  if(th>.5)for(let k=0;k<3;k++){const a=-P/2+(k-1)*.6,r=24+th*4;c.beginPath();c.moveTo(ux+cos(a)*r,uy-8+sin(a)*r);c.lineTo(ux+cos(a)*(r+7),uy-8+sin(a)*(r+7));ln(c,3)}
}
