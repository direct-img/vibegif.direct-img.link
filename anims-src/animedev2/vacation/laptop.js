// a girl with long wavy teal hair, a straw sun hat and sunglasses lounges in a striped beach chair, slides her shades down to sneak a peek at her work laptop, then snaps it shut when a wave splashes behind her
// tags: playful, calm, anime, beach, summer, travel
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){c.save();c.translate(x+lx,y+ly+2);pg(c,...[...Array(10)].flatMap((_,k)=>{const r=k%2?3.2:8,a=k*P/5-P/2;return[cos(a)*r,sin(a)*r]}));fs(c,'#fff',0);c.restore()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=28,delay=85,rim=4
const H='#2fbfba',Hd='#1e8f8c',Hl='#9df0e6',S='#f3cfa6',Sd='#d9a878',T='#ff7b6b',I=['#8a3a00','#ffb347']
export default(c,t,i)=>{
  const pk=sg(t,.3,.38)*(1-sg(t,.62,.66)),op=sg(t,.4,.48)*(1-sg(t,.62,.65)),spl=t>=.6&&t<.76,inn=t>=.66&&t<.94
  // sea behind: a rounded band of waves with foam crests
  c.save();rr(c,10,96,236,84,40);c.clip()
  c.fillStyle='#5cc8ff';c.fillRect(0,90,256,100)
  for(let r=0;r<3;r++){const y=112+r*22,ph=t*2*P*(r%2?1:-1)+r;c.beginPath();c.moveTo(0,y+30);for(let x=0;x<=256;x+=4)c.lineTo(x,y+sin(x*.06+ph)*4);c.lineTo(256,y+30);c.closePath();c.fillStyle=['#7fd6ff','#45b4f0','#2f97d8'][r];c.fill()
    c.beginPath();for(let x=0;x<=256;x+=4)c.lineTo(x,y+sin(x*.06+ph)*4);c.lineWidth=3;c.strokeStyle='#fff';c.stroke()}
  c.restore();rr(c,10,96,236,84,40);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  // big splash
  if(spl){const p=(t-.6)/.16;c.save();c.globalAlpha=p<.7?1:1-(p-.7)*3.3;c.beginPath();c.moveTo(166,140);for(let j=0;j<=8;j++){const a=P+j/8*P,r=(j%2?40:72)*(.35+p*.8);c.lineTo(194+cos(a)*r*.7,128+sin(a)*r)}c.lineTo(222,140);c.closePath();fs(c,'#fff',3.2,'#2f97d8')
    for(let j=0;j<6;j++){const a=-P*.9+j*.16*P,d=40+p*50;el(c,194+cos(a)*d*.7,128+sin(a)*d+p*p*40,5,6);fs(c,'#bfeaff',2.4,'#2f97d8')}c.restore()}
  // beach chair back with stripes
  c.save();c.translate(116,160);c.rotate(-.08);rr(c,-62,-74,124,124,14);c.save();c.clip()
  for(let k=-4;k<5;k++){c.fillStyle=k%2?'#fff':'#ff5f6d';c.fillRect(k*16-8,-80,16,140)}c.restore();rr(c,-62,-74,124,124,14);c.lineWidth=3.5;c.strokeStyle=O;c.stroke();c.restore()
  // long wavy hair behind
  c.save();c.translate(118,98);c.scale(.8,.8);c.rotate(-.08)
  c.beginPath();c.moveTo(-52,-4);c.bezierCurveTo(-74,40,-56,70,-70,104);c.quadraticCurveTo(-30,112,0,96);c.quadraticCurveTo(30,112,70,104);c.bezierCurveTo(56,70,74,40,52,-4);c.closePath();fs(c,Hd)
  c.restore()
  // torso: coral tank with a white flower
  c.beginPath();c.moveTo(98,142);c.bezierCurveTo(76,150,72,172,74,206);c.lineTo(160,206);c.bezierCurveTo(162,172,158,150,136,142);c.closePath();fs(c,T)
  for(let k=0;k<5;k++){el(c,96+cos(k*1.26)*6,178+sin(k*1.26)*6,5);fs(c,'#fff',2)}el(c,96,178,3);fs(c,'#ffd23f',1.8)
  // legs
  for(const f of[-1,1]){c.beginPath();c.moveTo(118+f*18,204);c.quadraticCurveTo(118+f*24,224,118+f*20,236);st(c,15,S);el(c,118+f*22,238,10,5);fs(c,'#ffd23f',2.6)}
  // head
  c.save();c.translate(118,98);c.scale(.8,.8);c.rotate(-.08+(inn?sin(t*P*8)*.04:0))
  hd(c,S)
  const look={lx:7,ly:5}
  face(c,pk>.5?{e:I,...look,pp:op>.5?.7:1,m:op>.5?'o':'smug',br:-.3,bc:Hd}:spl&&t<.68?{e:I,pp:.55,m:'o',mo:1.5,br:-1,bc:Hd}:{e:I,ex:'calm',m:inn?'o':'cat',mo:inn?.8:1,br:.2,bc:Hd})
  // screen glow on her face
  // wavy fringe
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,46,0,36,-10,26,-2,14,-18,-2,-8,-16,-20,-28,-6,-38,-16,-46,2,-50,26],.22);c.closePath();fs(c,H)
  // sunglasses: on her eyes, slid down her nose while peeking
  const gy=-pk*36,ga=-pk*.06
  c.save();c.translate(0,gy);c.rotate(ga)
  for(const f of[-1,1]){rr(c,f*20-15,-2,30,22,[6,6,11,11]);fs(c,'#2a2440',3.2);c.beginPath();c.moveTo(f*20-9,4);c.lineTo(f*20-3,4);c.lineWidth=3;c.strokeStyle='rgba(255,255,255,.55)';c.stroke()}
  c.beginPath();c.moveTo(-5,4);c.quadraticCurveTo(0,1,5,4);c.lineWidth=3;c.strokeStyle=O;c.stroke()
  c.restore()
  // straw hat with pink ribbon
  el(c,0,-50,74,18);fs(c,'#f3d28a');c.beginPath();c.ellipse(0,-50,58,12,0,P*.05,P*.95);c.lineWidth=2;c.strokeStyle='#c9a35a';c.stroke()
  c.beginPath();c.moveTo(-40,-52);c.bezierCurveTo(-40,-96,40,-96,40,-52);c.closePath();fs(c,'#f6dc9a')
  c.beginPath();c.moveTo(-40,-60);c.quadraticCurveTo(0,-54,40,-60);c.lineTo(40,-52);c.quadraticCurveTo(0,-46,-40,-52);c.closePath();fs(c,'#ff7aa8',2.8)
  el(c,30,-56,7,5);fs(c,'#ff7aa8',2.6)
  c.restore()
  // drink in her left hand
  c.beginPath();c.moveTo(98,150);c.quadraticCurveTo(70,172,66,150);st(c,11,S)
  c.save();c.translate(60,138);rr(c,-11,-14,22,26,[3,3,9,9]);fs(c,'#ffe7a8',3);c.fillStyle='#ff9f45';c.fillRect(-8,-4,16,13);c.beginPath();c.moveTo(4,-14);c.lineTo(12,-30);c.lineWidth=3;c.strokeStyle=O;c.stroke();el(c,-8,-15,6,4,-.3);fs(c,'#ffd23f',2.4);c.restore()
  el(c,66,146,8,7);fs(c,S,3)
  // laptop on her lap: closed, cracked open to peek, snapped shut
  const lx=150,ly=208,ang=op*1.1
  pg(c,lx-44,ly,lx+44,ly,lx+48,ly+10,lx-48,ly+10);fs(c,'#cfd6e4',3.2)
  c.save();c.translate(0,ly);c.scale(1,-sin(ang)||-.001)
  if(ang>.05){c.save();c.translate(0,-ly);rr(c,lx-44,ly,88,58,5);fs(c,'#dde3ee',3.2);c.restore()}
  c.restore()
  if(ang>.05){const h=58*sin(ang);c.save();rr(c,lx-38,ly-h+5,76,h-8,3);fs(c,'#1f2540',2.4);c.clip();for(let k=0;k<4;k++){rr(c,lx-30,ly-h+10+k*9,30+k*9%24,5,2.5);fs(c,['#ff79a8','#7ee0ff','#ffd166','#a1f08f'][k],0)}c.restore()
    if(op>.6){el(c,lx+30,ly-h+6,7);fs(c,'#ff3b4a',2.4);tx(c,'!',lx+30,ly-h+6,10,'#fff',0)}}
  else{pg(c,lx-44,ly-6,lx+44,ly-6,lx+44,ly,lx-44,ly);fs(c,'#dde3ee',3.2)}
  // right hand on the laptop
  c.beginPath();c.moveTo(136,150);c.quadraticCurveTo(150,184,lx+18,ly-4-(op>.05?6:0));st(c,11,S);el(c,lx+18,ly-6-(op>.05?6:0),8,7);fs(c,S,3)
  // innocent whistle
  if(inn){const p=(t-.66)/.28;c.save();c.translate(64+p*20,70-p*30);c.globalAlpha=sin(p*P);c.font='bold 22px DejaVu Sans';c.textAlign='center';c.lineWidth=5;c.strokeStyle=O;c.strokeText('♪',0,0);c.fillStyle='#fff';c.fillText('♪',0,0);c.restore()
    drop(c,160,56,.9)}
}
