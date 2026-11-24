// a girl with pink twin tails in a lemon hoodie focuses at her keyboard while a tomato kitchen timer ticks down, it rings and she stretches her arms up happily for her break
// tags: happy, calm, anime, coding, timer, focus
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
export const frames=24,delay=90,rim=4
const H='#ff8cc0',Hd='#e0609c',Hl='#ffd0e6',S='#fff0e6',C='#ffe066',Cd='#e8b832',I=['#13663a','#7fe39a'],R='#ff4d3d',Rd='#c92f25'
export default(c,t,i)=>{
  const wk=t<.56,rg=t>=.56&&t<.68,stv=sg(t,.66,.74)*(1-sg(t,.9,.98)),rs=t>=.9
  const rot=wk?150*(1-t/.56):rs?150*sg(t,.9,.99):0
  // girl first (behind the keyboard)
  const hx=100,hy=100-stv*6
  // twin tails behind
  c.save();c.translate(hx,hy);c.scale(.82,.82)
  for(const f of[-1,1]){const sw=sin(t*P*4+f)*.05+(rg?sin(i*2.5)*.12:0)
    c.save();c.translate(f*44,-40);c.rotate(f*(.12+stv*.3)+sw)
    c.beginPath();c.moveTo(0,-4);c.bezierCurveTo(f*44,-6,f*40,60,f*22,104);c.quadraticCurveTo(f*20,84,f*8,96);c.bezierCurveTo(f*18,50,f*10,20,0,10);c.closePath();fs(c,H)
    c.beginPath();c.moveTo(f*14,20);c.quadraticCurveTo(f*24,50,f*16,80);c.lineWidth=3;c.strokeStyle=Hd;c.stroke()
    c.restore()}
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-56,30,-46,46,-36,48);c.lineTo(36,48);c.bezierCurveTo(46,46,56,30,50,0);c.closePath();fs(c,Hd)
  c.restore()
  // arms up behind the head while stretching
  const arm=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,15,C)}
  // torso: lemon hoodie
  c.save();c.translate(hx,236);c.scale(1,1+stv*.04);c.translate(-hx,-236)
  c.beginPath();c.moveTo(hx-22,138);c.bezierCurveTo(hx-46,144,hx-52,168,hx-54,198);c.lineTo(hx-56,238);c.lineTo(hx+56,238);c.lineTo(hx+54,198);c.bezierCurveTo(hx+52,168,hx+46,144,hx+22,138);c.closePath();fs(c,C)
  c.beginPath();c.moveTo(hx-24,140);c.quadraticCurveTo(hx,160,hx+24,140);c.lineWidth=3;c.strokeStyle=Cd;c.stroke()
  for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*8,152);c.lineTo(hx+f*9,176);c.lineWidth=2.6;c.strokeStyle='#fff';c.stroke();el(c,hx+f*9,178,2.6);fs(c,'#fff',1.8)}
  c.restore()
  if(stv>.02){const k=stv;for(const f of[-1,1]){const x=hx+f*(30+30*k),y=212-174*k+sin(t*P*6)*2*k;c.beginPath();c.moveTo(hx+f*34,154);c.quadraticCurveTo(hx+f*(50+22*k),168-80*k,x,y);st(c,13,C);el(c,x,y,10,9);fs(c,S,3.2)}}
  // head
  c.save();c.translate(hx,hy);c.scale(.82,.82);c.rotate(stv*-.08+(rg?sin(i*3)*.04:0))
  hd(c,S)
  if(wk)face(c,{e:I,op:.78,ly:4,lx:6,m:'cat',mo:.9,br:.2,bc:Hd})
  else if(rg)face(c,{e:I,pp:.55,lx:6,m:'o',mo:1.6,br:-1.2,bc:Hd})
  else if(t<.8)face(c,{e:I,ex:'shut',m:'o',mo:2,br:-.5,bc:Hd})
  else face(c,{e:I,ex:t<.92?'happy':'calm',m:t<.92?'smile':'cat',mo:1.1,bc:Hd})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,44,-6,36,0,28,-20,16,-6,6,-24,-4,-6,-16,-22,-26,-4,-34,-20,-42,0,-50,26],.18);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  for(const f of[-1,1]){el(c,f*42,-42,9,7,f*.5);fs(c,'#5ee0b4',3)}
  c.restore()
  // keyboard
  pg(c,14,206,184,206,192,236,6,236);fs(c,'#e6e9f2')
  for(let r=0;r<2;r++)for(let k=0;k<9;k++){rr(c,22+k*17-r*2+r*4,210+r*12,13,9,2);fs(c,'#fff',1.6)}
  // typing hands (or resting while ringing)
  if(stv<.02){for(const f of[-1,1]){const u=wk?-5*max(0,sin(t*P*24+f*1.6)):0,x=hx+f*30,y=212+u
    arm(hx+f*38,158,hx+f*46,196,x,y);el(c,x,y,10,8);fs(c,S,3.2)}}
  // tomato timer
  const tx0=210,ty0=170,sh=rg?(i%2?.16:-.16):0,hop=rg?-abs(sin(i*P/2))*6:0
  c.save();c.translate(tx0,ty0+hop+30);c.rotate(sh);c.translate(0,-30)
  el(c,0,4,36,32);fs(c,R,3.5)
  // dial band (a little cylinder of numbers)
  c.save();rr(c,-34,-10,68,16,4);c.clip();c.fillStyle='#fff';c.fillRect(-36,-12,72,20)
  for(let n=0;n<60;n+=5){const a=(n*6-rot)*P/180,x=sin(a)*34,z=cos(a);if(z<.1)continue;c.save();c.translate(x,-2);c.scale(z,1);c.font='bold 11px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillStyle=n==0?Rd:O;c.fillText(n,0,0);c.restore()}
  for(let n=0;n<60;n++){if(n%5==0)continue;const a=(n*6-rot)*P/180,x=sin(a)*34;if(cos(a)<.1)continue;c.beginPath();c.moveTo(x,2);c.lineTo(x,5);c.lineWidth=1.4;c.strokeStyle=O;c.stroke()}
  c.restore();rr(c,-34,-10,68,16,4);c.lineWidth=3;c.strokeStyle=O;c.stroke()
  pg(c,-4,-16,4,-16,0,-10);fs(c,Rd,2)
  c.beginPath();c.ellipse(-16,18,8,5,-.5,0,2*P);c.fillStyle='rgba(255,255,255,.45)';c.fill()
  // leaves + stem
  pg(c,0,-28,-18,-34,-8,-26,-16,-20,-2,-24,0,-18,2,-24,16,-20,8,-26,18,-34);fs(c,'#4cbf5a',3)
  rr(c,-3,-42,6,14,2);fs(c,'#2f9a44',2.6)
  c.restore()
  if(rg){c.lineWidth=3.5;c.strokeStyle=O;for(const a of[-2.6,-2,-1.2,-.5]){c.beginPath();c.moveTo(tx0+cos(a)*48,ty0+sin(a)*46);c.lineTo(tx0+cos(a)*60,ty0+sin(a)*58);c.stroke()}
    c.save();c.translate(tx0,ty0-70);c.rotate(i%2?.1:-.1);tx(c,'RING!',0,0,19,'#ffe14d',5);c.restore()}
  // relaxed sparkles while stretching
  if(stv>.5){for(const[x,y,o]of[[40,70,0],[160,52,.5],[30,140,.25]]){const s=.6+.4*sin(t*P*8+o*6);c.save();c.translate(x,y);c.scale(s,s);pg(c,0,-9,2.5,-2.5,9,0,2.5,2.5,0,9,-2.5,2.5,-9,0,-2.5,-2.5);fs(c,'#fff6a8',2.5);c.restore()}}
}
