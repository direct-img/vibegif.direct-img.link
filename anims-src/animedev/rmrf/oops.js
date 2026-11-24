// a girl with a teal bob, round glasses and a mustard sweater cheerfully types rm -rf / and pokes Enter, the floating files and folders around her crumble into dust one by one and she slaps both hands over her mouth until they pop back
// tags: anxious, anime, coding, terminal, files, delete
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
export const frames=24,delay=95,rim=4
const S='#fde0c8',H='#2fb5ad',Hd='#1f8a86',Hl='#8ff0e2',J='#f2b632',Jd='#cf8f1a'
// files floating around her: [x,y,folder?,dissolve order]
const F=[[30,52,1,3],[22,122,0,4],[38,190,1,5],[200,92,0,0],[228,150,1,1],[214,206,0,2]]
const icon=(c,x,y,fd,k)=>{c.save();c.translate(x,y)
  if(fd){c.beginPath();c.moveTo(-15,-12);c.lineTo(-4,-12);c.lineTo(0,-8);c.lineTo(15,-8);c.lineTo(15,13);c.lineTo(-15,13);c.closePath();fs(c,'#e9a92e',3);rr(c,-15,-4,30,17,2);fs(c,'#ffd15c',3)}
  else{c.beginPath();c.moveTo(-12,-16);c.lineTo(5,-16);c.lineTo(12,-9);c.lineTo(12,16);c.lineTo(-12,16);c.closePath();fs(c,'#fff',3);c.beginPath();c.moveTo(5,-16);c.lineTo(5,-9);c.lineTo(12,-9);ln(c,2.4)
    ;['#7eb6ff','#ff8fb3','#8fe3a1'].forEach((f,j)=>{rr(c,-7,-6+j*7,j==1?10:14,3.4,1.7);fs(c,f,0)})}
  c.restore()}
const rnd=n=>{const s=sin(n*127.1+311.7)*43758.5;return s-Math.floor(s)}
export default(c,t,i)=>{
  const D=.42,dur=.14,cmd='rm -rf /',nT=t<.1?0:min(8,Math.floor((t-.1)/.03)+1)
  const lift=sg(t,.33,.39)*(1-sg(t,.41,.43)),poke=t>.41&&t<.46,shock=sg(t,.48,.54)*(1-sg(t,.88,.93)),relief=t>.88&&t<.97
  const back=k=>{const p=(t-.86-k*.018)/.06;return p<0?0:p>1?1:E(p)*(1+.35*sin(E(p)*P))}
  const tr=shock>.5?(i%2?1.2:-1.2):0
  // files: pop in, float, crumble to dust, pop back
  F.forEach(([x,y,fd,o],k)=>{const d=D+.06+o*.045,p=(t-d)/dur,bob=sin(t*2*P+k)*3,yy=y+bob
    if(t<d)icon(c,x,yy,fd,k)
    else if(t<.86){if(p<1){c.save();c.beginPath();c.rect(x-18+p*36,0,99,256);c.clip();c.globalAlpha=1-p*.4;icon(c,x,yy,fd,k);c.restore()}}
    else{const s=back(o);if(s>0){c.save();c.translate(x,yy);c.scale(s,s);icon(c,0,0,fd,k);c.restore()}}
    // dust: little squares peeling off the dissolving edge, drifting up and right
    for(let j=0;j<10;j++){const e=d+j/10*dur,a=(t-e)/.2;if(a<0||a>1||t>.86)continue
      const px=x-16+j/10*34+a*(40+rnd(k*31+j)*40),py=yy-16+rnd(k*17+j)*32-a*(26+rnd(j+k)*30)+sin(a*6+j)*3,z=5*(1-a*.5)
      c.globalAlpha=1-a;c.fillStyle=[fd?'#ffd15c':'#ffffff','#e9a92e','#c9b9a8',fd?'#ffd15c':'#7eb6ff'][j%4];c.fillRect(px,py,z,z);c.lineWidth=1;c.strokeStyle=O;c.strokeRect(px,py,z,z);c.globalAlpha=1}
  })
  // back hair: short bob
  const hx=112+tr,hy=104-lift*3
  c.save();c.translate(hx,hy)
  c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-60,20,-58,44,-48,52);c.quadraticCurveTo(-36,58,-28,48);c.lineTo(28,48);c.quadraticCurveTo(36,58,48,52);c.bezierCurveTo(58,44,60,20,50,-14);fs(c,Hd)
  c.restore()
  // sweater
  c.beginPath();c.moveTo(88,148);c.bezierCurveTo(66,154,58,176,56,206);c.lineTo(168,206);c.bezierCurveTo(166,176,158,154,136,148);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(92,150);c.quadraticCurveTo(112,166,132,150);fs(c,'#fff6e0',3)
  c.beginPath();for(const y of[176,186]){c.moveTo(62,y);c.lineTo(162,y)}ln(c,2.2,Jd)
  // head
  c.save();c.translate(hx,hy)
  hd(c,S)
  const fc=shock>.4?{e:['#7a4a1a','#e8a860'],pp:.42,br:1,bl:.6,m:'o'}
    :relief?{ex:'calm',m:'wave',br:.7,bl:1}
    :t>.33&&t<.43?{ex:'happy',m:'grin',bl:1.2}
    :t>.43?{e:['#7a4a1a','#e8a860'],lx:5,ly:-4,m:'flat',br:.3}
    :{e:['#7a4a1a','#e8a860'],ly:3,op:.85,m:'cat',br:.2}
  face(c,{...fc,bc:Hd})
  // round glasses
  for(const f of[-1,1]){c.beginPath();c.arc(f*20,11,15.5,0,2*P);ln(c,3,'#6a3f7a')}c.beginPath();c.moveTo(-5,8);c.quadraticCurveTo(0,4,5,8);ln(c,3,'#6a3f7a')
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*35,9);c.lineTo(f*44,6);ln(c,3,'#6a3f7a')}
  // gloom lines while horrified
  if(shock>.5){c.save();c.globalAlpha=shock;c.beginPath();for(const x of[-22,-12,-2,8,18]){c.moveTo(x,-20);c.lineTo(x,-6+(x%3)*2)}ln(c,2.6,'#5d6fd6');c.restore()}
  // teal bob with a side part and a star clip
  c.beginPath();c.moveTo(-50,30);c.bezierCurveTo(-58,-44,-30,-68,4,-68);c.bezierCurveTo(36,-68,58,-44,50,30)
  qs(c,[50,30,46,-2,40,6,34,-18,24,-6,12,-26,-6,-12,-18,-24,-26,-6,-36,-16,-42,6,-50,30],.2);c.closePath();fs(c,H)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*48,-6);c.quadraticCurveTo(f*58,26,f*50,50);c.quadraticCurveTo(f*44,40,f*42,30);c.quadraticCurveTo(f*44,10,f*40,-2);c.closePath();fs(c,H)}
  c.beginPath();c.arc(4,-24,40,P*1.24,P*1.5);ln(c,5,Hl)
  spk(c,-30,-44,10,'#ffd15c',2.6)
  c.restore()
  // laptop lid seen from behind
  rr(c,60,172,104,62,8);fs(c,'#cfd6e4');rr(c,52,230,120,8,4);fs(c,'#aab3c6',3)
  c.save();c.translate(96,198);c.rotate(-.2);rr(c,-12,-9,24,18,4);fs(c,'#2b2440',2.4);tx(c,'>_',0,0,11,'#7ef0a0',0);c.restore()
  c.save();c.translate(134,206);c.rotate(.15);c.beginPath();c.moveTo(0,7);c.bezierCurveTo(-11,-2,-6,-12,0,-5);c.bezierCurveTo(6,-12,11,-2,0,7);fs(c,'#ff8fb3',2.4);c.restore()
  // arms: hidden typing, finger raised then poke, hands over the mouth
  const sl=(x0,y0,x,y)=>{c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(x0+(x-x0)*.2,y+20,x,y);st(c,15,J)}
  if(shock>.4){for(const f of[-1,1]){const x=hx+f*9,y=hy+38;sl(hx+f*30,156,x+f*8,y+10);el(c,x,y,11,9.5,f*.3);fs(c,S,3.2);c.beginPath();c.moveTo(x-f*3,y-6);c.lineTo(x-f*2,y+4);ln(c,2)}}
  else if(lift>.02||poke){const y=poke?176:162-lift*26,x=150;sl(140,158,x,y+8);c.save();c.translate(x,y);rr(c,-3.5,-18,7,16,3.5);fs(c,S,3);el(c,0,2,9,8);fs(c,S,3.2);c.restore()
    if(poke)for(const a of[-1,-.5,0,.5,1]){c.beginPath();c.moveTo(150+sin(a)*22,170-cos(a)*22);c.lineTo(150+sin(a)*30,170-cos(a)*30);ln(c,3.5)}}
  // terminal popup
  rr(c,144,8,102,46,8);fs(c,'#1f1b30');rr(c,144,8,102,14,[8,8,0,0]);fs(c,'#3b3456',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,154+k*10,15,3);fs(c,f,0)})
  const s=t>.86?'':cmd.slice(0,nT);c.font='bold 15px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle'
  c.fillStyle='#7ee0a0';c.fillText('$',151,38);c.fillStyle=poke?'#ff6b6b':'#fff';c.fillText(s,165,38)
  if(i%2==0&&(nT<8||t>.86)){rr(c,166+s.length*9,30,8,15,2);fs(c,'#e8ecff',0)}
  // sweat drops
  if(shock>.5){drop(c,hx+52,hy-10+(i%4)*2,1);drop(c,hx-54,hy+4+(i%3)*2,.8)}
  if(relief){c.globalAlpha=.8;for(const k of[0,1]){el(c,hx+14+k*12,hy+52+k*6,6-k*1.5,4-k);fs(c,'#e6f2ff',2)}c.globalAlpha=1}
}
