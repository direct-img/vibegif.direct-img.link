// a girl with two big brown afro puffs, a teal polo and an ID lanyard sees the server throw an error, yanks its power plug, blows on it, plugs it back in and the lights flicker back to green, she grins with a thumbs up
// tags: happy, anime, coding, server, fix, hopeful
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
export const frames=26,delay=85,rim=4
const S='#d9a477',H='#4a2c1e',Hd='#331d14',Hl='#7a4e36',J='#2bb3a0',Jd='#1d8a7a'
const rnd=n=>{const s=sin(n*91.7+12.3)*43758.5;return s-Math.floor(s)}
export default(c,t,i)=>{
  const st0=t<.1||t>=.72?'ok':t<.3?'err':t<.58?'off':'boot'
  const L=(a,b,u)=>a+(b-a)*u
  // left hand path: rest -> plug -> yank up -> by the mouth -> back in -> rest
  const rest=[66,204],sock=[54,176],up=[80,136],blow=[68,128]
  let hp=rest,held=false
  if(t>=.16&&t<.24)hp=[L(rest[0],sock[0],sg(t,.16,.24)),L(rest[1],sock[1],sg(t,.16,.24))]
  else if(t>=.24&&t<.28)hp=sock,held=true
  else if(t>=.28&&t<.34)hp=[L(sock[0],up[0],E((t-.28)/.04)),L(sock[1],up[1],E((t-.28)/.04))],held=true
  else if(t>=.34&&t<.5)hp=[L(up[0],blow[0],sg(t,.34,.4)),L(up[1],blow[1],sg(t,.34,.4))],held=true
  else if(t>=.5&&t<.6)hp=[L(blow[0],sock[0],sg(t,.5,.56)),L(blow[1],sock[1],sg(t,.5,.56))],held=true
  else if(t>=.6&&t<.72)hp=[L(sock[0],rest[0],sg(t,.62,.72)),L(sock[1],rest[1],sg(t,.62,.72))]
  const pl=held?[hp[0]-2,hp[1]]:sock,out=held&&t>.3&&t<.55
  // server rack
  rr(c,156,30,86,200,8);fs(c,'#3a3f4e');rr(c,164,40,70,22,4);fs(c,'#14161f',2.6)
  const pt={ok:['OK','#6dff94'],err:['ERR','#ff5a5a'],off:['',''],boot:['...','#ffd34d']}[st0];if(pt[0])tx(c,pt[0],199,52,15,pt[1],0)
  for(let k=0;k<5;k++){const y=70+k*30;rr(c,164,y,70,24,3);fs(c,'#555c6e',2.4)
    for(let v=0;v<3;v++){c.beginPath();c.moveTo(172+v*8,y+6);c.lineTo(172+v*8,y+18);ln(c,2.4,'#3a3f4e')}
    for(let v=0;v<3;v++){const r=rnd(k*3+v+i*7),f=st0=='ok'?((k+v+i)%5?'#6dff94':'#c8ffd8'):st0=='err'?((v+i+k)%2?'#ff5a5a':'#7a2a2a'):st0=='off'?'#2a2d38':(r<.45?'#2a2d38':r<.75?'#ffd34d':'#6dff94')
      el(c,204+v*10,y+12,3.6);fs(c,f,1.6)
      if(st0=='ok'&&t>.72&&t<.8){c.save();c.globalAlpha=.5;el(c,204+v*10,y+12,6);fs(c,'#6dff94',0);c.restore()}}}
  if(st0=='err'){const b=(i%2)*3;c.beginPath();c.moveTo(199,4+b);c.lineTo(214,28+b);c.lineTo(184,28+b);c.closePath();fs(c,'#ffd34d',3);tx(c,'!',199,19+b,15,O,0,'DejaVu Sans')}
  // outlet on the left
  rr(c,8,140,32,58,7);fs(c,'#f4efe4');for(const y of[156,182]){rr(c,14,y-9,20,18,5);fs(c,'#e2dccc',2);c.beginPath();c.moveTo(20,y-4);c.lineTo(20,y+4);c.moveTo(28,y-4);c.lineTo(28,y+4);ln(c,2.6)}
  // cable from the plug to the server
  c.beginPath();c.moveTo(pl[0]+14,pl[1]);c.bezierCurveTo(pl[0]+40,pl[1]+8,70,236,112,234);c.lineTo(180,234);c.quadraticCurveTo(192,234,192,226);st(c,5,'#33384a',2.8)
  // spark at the socket when yanked
  if(t>.28&&t<.36){c.save();c.translate(36,182);for(let k=0;k<6;k++){const a=k*P/3+i;c.beginPath();c.moveTo(cos(a)*5,sin(a)*5);c.lineTo(cos(a)*15,sin(a)*15);ln(c,3.5,'#ffd34d')}c.restore()}
  // back hair and afro puffs
  const hx=104,hy=96,ha=t>.3&&t<.56?-.08:.04
  c.save();c.translate(hx,hy);c.rotate(ha)
  for(const f of[-1,1]){const b=sin(t*4*P+f)*1.2;c.beginPath();for(let k=0;k<90;k++){const a=k*P/45,r=25+b+3.2*abs(sin(a*6.5))**.6;c.lineTo(f*44+cos(a)*r,-50+sin(a)*r)}c.closePath();fs(c,H)
    c.beginPath();for(const[u,v]of[[-10,-8],[6,-12],[-4,6],[10,4]]){c.moveTo(f*44+u+4,-50+v);c.arc(f*44+u,-50+v,4,0,P*1.3)}ln(c,2.2,Hl);el(c,f*28,-38,7,9,f*.6);fs(c,'#ffcf3f',2.6)}
  c.beginPath();c.moveTo(-46,-14);c.bezierCurveTo(-54,14,-50,30,-42,36);c.lineTo(42,36);c.bezierCurveTo(50,30,54,14,46,-14);fs(c,Hd)
  c.restore()
  // polo body with lanyard and badge
  c.beginPath();c.moveTo(82,146);c.bezierCurveTo(60,152,52,174,50,206);c.quadraticCurveTo(48,234,62,236);c.lineTo(146,236);c.quadraticCurveTo(160,234,158,206);c.bezierCurveTo(156,174,148,152,126,146);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(88,147);c.lineTo(104,160);c.lineTo(120,147);c.closePath();fs(c,'#fff',3);c.beginPath();c.moveTo(104,160);c.lineTo(104,176);ln(c,2.4,Jd)
  c.beginPath();c.moveTo(90,150);c.lineTo(100,190);c.moveTo(118,150);c.lineTo(108,190);ln(c,3,'#ff7a5c');rr(c,94,186,20,24,3);fs(c,'#fff',2.6);el(c,104,194,4);fs(c,'#ffcf9a',1.4);c.beginPath();c.moveTo(98,204);c.lineTo(110,204);ln(c,2,'#7aa0d8')
  // head
  c.save();c.translate(hx,hy);c.rotate(ha)
  hd(c,S)
  const e=['#2d5a2a','#8ad070']
  const fc=st0=='ok'&&t>.72?{ex:'happy',m:'grin',mo:1.1,bl:1.3}
    :st0=='ok'?{e,lx:5,m:'smile',bl:1}
    :t<.18?{e,lx:6,ly:-3,pp:.5,m:'o',br:.8}
    :t<.26?{ex:'calm',m:'flat',br:.7}
    :t<.34?{ex:'shut',m:'grit',br:-.6}
    :t<.5?{ex:'calm',m:'o',mo:.8,bl:1.8}
    :t<.6?{e,lx:-4,ly:2,op:.8,m:'smug',br:-.4}
    :{e,lx:6,ly:-2,m:'o',mo:.9,br:.5,pp:1.1}
  face(c,{...fc,bc:Hd})
  // short curly bangs
  c.beginPath();c.moveTo(-50,18);c.bezierCurveTo(-56,-40,-30,-64,0,-64);c.bezierCurveTo(30,-64,56,-40,50,18)
  c.lineTo(48,-8);for(let k=1;k<=8;k++){const x=48-k*12,y=k==8?18:-8-(k==4?4:0);c.quadraticCurveTo(x+6,y+14,x,y)}c.closePath();fs(c,H)
  c.beginPath();for(const[u,v]of[[-24,-34],[2,-42],[24,-32],[-8,-22],[16,-20]]){c.moveTo(u+4,v);c.arc(u,v,4,0,P*1.3)}ln(c,2,Hd)
  c.beginPath();c.arc(0,-22,38,P*1.22,P*1.46);ln(c,4.5,Hl)
  c.restore()
  // blowing on the plug
  if(t>.4&&t<.5){c.save();c.globalAlpha=.85;for(let k=0;k<3;k++){const p=((t-.4)/.1*2+k/3)%1;c.beginPath();c.moveTo(92-p*16,124+k*4-4);c.quadraticCurveTo(86-p*16,120+k*4,80-p*16,124+k*4);ln(c,2.6,'#9fd0ff')}c.restore()}
  // the plug, held or in the socket
  c.save();c.translate(pl[0],pl[1]);if(out)c.rotate(-.5);c.beginPath();c.moveTo(-6,-4);c.lineTo(-14,-4);c.moveTo(-6,4);c.lineTo(-14,4);ln(c,3.4,'#c9cfdc');rr(c,-6,-9,20,18,5);fs(c,'#e9ecf4',3);c.restore()
  // left arm
  c.beginPath();c.moveTo(76,156);c.quadraticCurveTo(60,(156+hp[1])/2+10,hp[0]+8,hp[1]+2);st(c,12,S);el(c,74,156,11,10);fs(c,J)
  el(c,hp[0]+6,hp[1]+2,9,8.5);fs(c,S,3.2)
  // right arm: at the side, thumbs up once it boots
  const tu=sg(t,.74,.8)*(1-sg(t,.96,1.02)),rx=146+tu*4,ry=206-tu*52
  c.beginPath();c.moveTo(132,156);c.quadraticCurveTo(150,184-tu*10,rx,ry);st(c,12,S);el(c,134,156,11,10);fs(c,J)
  el(c,rx,ry,9.5,8.5);fs(c,S,3.2);if(tu>.5){rr(c,rx-4,ry-20,8,14,4);fs(c,S,3)}
  if(t>.74)[[150,26,.1],[30,100,.5],[246,236,.8]].forEach(([x,y,o])=>{const s=sin(((t-.74)/.26*2+o)%1*P);if(s>.05)spk(c,x-8,y,12*s,'#b8ffcc')})
}
