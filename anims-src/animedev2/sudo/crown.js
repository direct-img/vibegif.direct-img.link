// a girl with long straight black hime-cut hair and a purple hoodie types sudo, slams Enter and a golden crown drops onto her head, she does a haughty noble laugh pose in a burst of sparkles until the crown floats away again
// tags: proud, anime, coding, terminal, royal, sparkle
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
export const frames=28,delay=80,rim=4
const S='#7b4a2e',Sl='#93603f',H='#262238',Hd='#17142a',Hl='#625a96',J='#8a55e0',Jd='#6436b4',G='#ffd23f',Gd='#e09a1a'
const crown=(c,x,y,a,q=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(.8*(1+(1-q)*.25),.8*q)
  c.beginPath();c.moveTo(-34,0);c.lineTo(-38,-30);c.lineTo(-19,-14);c.lineTo(0,-38);c.lineTo(19,-14);c.lineTo(38,-30);c.lineTo(34,0);c.quadraticCurveTo(0,8,-34,0);fs(c,G)
  c.beginPath();c.moveTo(-34,-6);c.quadraticCurveTo(0,2,34,-6);ln(c,3,Gd)
  for(const[u,v,r]of[[-38,-32,4.5],[0,-41,5.5],[38,-32,4.5]]){el(c,u,v,r);fs(c,'#fff4b8',2.6)}
  el(c,0,-10,6,7);fs(c,'#ff4d6d',2.6);el(c,-2,-13,1.8);fs(c,'#fff',0);for(const u of[-20,20]){el(c,u,-5,3.6);fs(c,'#5ad1ff',2.2)}
  c.beginPath();c.moveTo(-26,-18);c.lineTo(-24,-6);ln(c,3,'#fff6c8');c.restore()}
export default(c,t,i)=>{
  // timeline: type sudo, slam Enter, crown drops and bounces, noble laugh pose, crown floats off
  const nTy=t<.3?Math.min(4,Math.floor((t-.02)/.06)+1):t<.9?4:0,slam=sg(t,.28,.34)-sg(t,.36,.4)
  const hit=t>=.36&&t<.4,fall=sg(t,.38,.48),land=t>.48&&t<.58?sin((t-.48)/.1*P):0
  const pose=sg(t,.54,.6)*(1-sg(t,.84,.9)),off=sg(t,.86,1),shk=hit?(i%2?2:-2):0
  const hx=150+shk,hy=114-pose*4,ha=-pose*.12
  // golden rays behind her while posing
  if(pose>.02){c.save();c.translate(hx,hy-6);c.rotate(t*2);c.globalAlpha=pose*.9
    for(let k=0;k<12;k++){c.rotate(P/6);c.beginPath();c.moveTo(0,0);c.lineTo(-11,-110);c.lineTo(11,-110);c.closePath();c.fillStyle=k%2?'#fff1a8':'#ffe07a';c.fill()}c.restore()}
  // long straight back hair
  c.save();c.translate(hx,hy);c.rotate(ha)
  c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-60,40,-58,90,-56,118);c.lineTo(56,118);c.bezierCurveTo(58,90,60,40,50,-14);fs(c,Hd)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*52,30);c.quadraticCurveTo(f*56,70,f*52,108);ln(c,2.4,'#3b3558')}
  c.restore()
  // hoodie
  c.beginPath();c.moveTo(126,154);c.bezierCurveTo(104,160,94,180,92,214);c.lineTo(208,214);c.bezierCurveTo(206,180,196,160,174,154);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(126,155);c.quadraticCurveTo(150,176,174,155);fs(c,Jd,3)
  for(const x of[141,159]){c.beginPath();c.moveTo(x,166);c.lineTo(x,190);ln(c,2.6,'#e4d4ff');el(c,x,192,2.6);fs(c,'#e4d4ff',1.8)}
  // head
  c.save();c.translate(hx,hy);c.rotate(ha)
  hd(c,S)
  const fc=pose>.5?{ex:'happy',m:'big',mo:1.25,br:-.3,bl:1.4}
    :t>.4&&t<.56?{e:['#8a5a00','#ffd34d'],ly:-4,pp:.55,m:'o',mo:1.1,br:.8,bl:1.4}
    :t>.86?{e:['#8a5a00','#ffd34d'],ly:-5,lx:-1,op:.85,m:'frown',br:.9,bl:1.4}
    :{e:['#8a5a00','#ffd34d'],lx:-4,ly:-2,op:slam>.3?1:.82,m:'smug',mo:1.1,br:slam>.3?-.7:-.3,bl:1.4}
  face(c,{...fc,bc:Hl})
  // hime cut: blunt bangs and straight cheek-length side locks
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-56,-46,-30,-68,0,-68);c.bezierCurveTo(30,-68,56,-46,50,0);c.lineTo(46,-4);c.lineTo(-46,-4);c.closePath();fs(c,H)
  c.beginPath();for(const x of[-30,-14,4,22,36]){c.moveTo(x,-6);c.lineTo(x+2,-24)}ln(c,2.2,'#4a4372')
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*50,-8);c.lineTo(f*53,40);c.lineTo(f*34,40);c.lineTo(f*36,-8);c.closePath();fs(c,H)}
  c.beginPath();c.arc(0,-26,40,P*1.18,P*1.46);ln(c,5,Hl)
  c.restore()
  // the crown: drops in, squashes on landing, then floats away again
  const cy0=hy-60,cyy=t<.38?-60:t<.86?-60+(cy0+60)*fall:cy0-off*110,q=1-land*.22
  if(t>=.38)crown(c,hx-4+off*20,cyy+land*3,-.12+ha-off*.4,q)
  if(t>.47&&t<.55){c.lineWidth=3.5;c.strokeStyle=O;for(const a of[-2.6,-2.2,-.9,-.5]){c.beginPath();c.moveTo(hx+cos(a)*52,cy0-16+sin(a)*30);c.lineTo(hx+cos(a)*68,cy0-16+sin(a)*40);c.stroke()}}
  // keyboard with a big Enter key
  pg(c,26,198,230,198,240,238,16,238);fs(c,'#e9ebf4')
  for(let r=0;r<2;r++)for(let k=0;k<9;k++){rr(c,32+k*17-r*3,204+r*16,13,11,2);fs(c,'#fff',1.6)}
  const ed=slam>.6?4:0;rr(c,190,200+ed,42,34,6);fs(c,'#7b45d6');rr(c,193,202+ed,36,25,5);fs(c,'#b48cff',2.4);tx(c,'↵',211,215+ed,20,'#fff',0,'DejaVu Sans')
  if(hit)for(const a of[-1.1,-.6,-.1,.4]){c.beginPath();c.moveTo(211+sin(a)*28,214-cos(a)*28);c.lineTo(211+sin(a)*38,214-cos(a)*38);ln(c,4)}
  // arms: typing, slamming Enter, then the back of the hand to the mouth
  const arm=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,15,J);el(c,x,y,9.5,8.5);fs(c,S,3.2)}
  const tp=k=>t<.28&&(i+k)%2?-5:0
  arm(124,166,104,196,96+(nTy%2)*8,212+tp(0))
  if(pose>.3){const x=hx+38,y=hy+38;c.beginPath();c.moveTo(176,166);c.quadraticCurveTo(226,180,x+8,y+6);st(c,15,J);el(c,x,y,10,8,-.6);fs(c,S,3.2)
    c.beginPath();c.moveTo(x-6,y-4);c.lineTo(x-10,y-12);c.moveTo(x-1,y-6);c.lineTo(x-3,y-14);ln(c,2.4)}
  else{const u=sg(t,.24,.32)*(1-sg(t,.33,.36)),y=212+tp(1)-u*42+ed;arm(176,166,196,190-u*30,204+u*6,y)}
  // terminal window
  rr(c,8,12,108,50,9);fs(c,'#1f1b30');rr(c,8,12,108,16,[9,9,0,0]);fs(c,'#3b3456',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,20+k*11,20,3.4);fs(c,f,0)})
  const cmd='sudo'.slice(0,nTy);c.font='bold 19px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle'
  c.fillStyle='#7ee0a0';c.fillText('$',16,45);c.fillStyle=hit||pose>.3?G:'#fff';c.fillText(cmd,32,45)
  if(i%2==0&&nTy<4){rr(c,33+cmd.length*11.5,36,10,18,2);fs(c,'#e8ecff',0)}
  // sparkles while posing
  if(pose>.1)[[40,96,0],[226,70,.3],[230,150,.6],[54,170,.15],[110,30,.45]].forEach(([x,y,o])=>{const s=sin(((t*3+o)%1)*P)*pose;if(s>.05)spk(c,x,y,13*s)})
}
