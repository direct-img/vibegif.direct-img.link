// a girl with a silver pixie cut and a red beanie in a denim jacket wanders around holding her laptop up over her head, hunting for wifi bars until she finds the one magic spot
// tags: anxious, hopeful, anime, laptop, internet, signal
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
const H='#eef0f8',Hd='#b9bdd8',S='#6b4226',J='#5b8fd9',Jd='#3f6db8',B='#e63946',I=['#7a1048','#ff8cc8']
export default(c,t,i)=>{
  const L=94,R=162,fd=t>=.56&&t<.8,lv=t>=.8
  const x=t<.28?128+(L-128)*E(t/.28):t<.56?L+(R-L)*E((t-.28)/.28):t<.8?R:R+(128-R)*E((t-.8)/.2)
  const walk=!fd,step=walk?abs(sin(t*P*10)):0,y=-step*5-(fd?5*sg(t,.56,.62):0),tilt=walk?sin(t*P*10)*.06:0
  const bars=fd?3:lv?max(0,2-((t-.8)/.06|0)):(i%5==2?1:0)
  // wifi signal icon riding above the laptop
  const wx=x+tilt*40,wy=62+y
  c.save();c.translate(wx,wy)
  for(let k=0;k<3;k++){c.beginPath();c.arc(0,0,11+k*10,-P*.75,-P*.25);st(c,5,k<bars?(fd?'#3ddc84':'#ffd23f'):'#d0d4e0',2.6)}
  el(c,0,-2,4.5);fs(c,bars?(fd?'#3ddc84':'#ffd23f'):'#d0d4e0',2.6)
  if(!bars){c.save();c.translate(22,-10);el(c,0,0,8);fs(c,B,2.6);c.beginPath();c.moveTo(-3,-3);c.lineTo(3,3);c.moveTo(3,-3);c.lineTo(-3,3);c.lineWidth=2.4;c.strokeStyle='#fff';c.stroke();c.restore()}
  c.restore()
  if(fd){for(let j=0;j<5;j++){const a=-P/2+(j-2)*.55,d=40+6*sin(t*P*16+j);c.save();c.translate(wx+cos(a)*d,wy-6+sin(a)*d*.8);const s=.5+.3*sin(t*P*12+j*2);c.scale(s,s);pg(c,0,-9,2.5,-2.5,9,0,2.5,2.5,0,9,-2.5,2.5,-9,0,-2.5,-2.5);fs(c,'#fff3a0',2.4);c.restore()}}
  // torso: denim jacket over a white tee
  c.save();c.translate(x,0)
  c.beginPath();c.moveTo(-24,188+y);c.bezierCurveTo(-48,194,-54,204,-56,238);c.lineTo(56,238);c.bezierCurveTo(54,204,48,194,24,188+y);c.closePath();fs(c,J)
  pg(c,-14,189+y,14,189+y,10,238,-10,238);fs(c,'#fff',3)
  for(const f of[-1,1]){pg(c,f*16,189+y,f*8,206+y,f*14,238,f*22,238,f*26,200+y);fs(c,Jd,3)}
  c.restore()
  // arms up holding the laptop overhead
  const lx=x+tilt*30,ly=102+y
  for(const f of[-1,1]){c.beginPath();c.moveTo(x+f*34,202+y);c.quadraticCurveTo(x+f*62,160+y,lx+f*40,ly+4);st(c,13,J)}
  // head (looking up)
  c.save();c.translate(x,158+y);c.scale(.8,.8);c.rotate(tilt)
  hd(c,S)
  if(fd)face(c,{e:I,ex:'happy',m:'grin',mo:1.2,br:-.4,bc:Hd})
  else if(lv&&t<.88)face(c,{e:I,ly:-5,pp:.6,m:'o',mo:1.4,br:-1,bc:Hd})
  else face(c,{e:I,ly:-6,lx:tilt*40,m:lv?'frown':'wave',mo:lv?1.2:.9,br:1,bc:Hd})
  // silver pixie fringe
  c.beginPath();c.moveTo(-48,14);c.bezierCurveTo(-56,-40,-32,-66,0,-66);c.bezierCurveTo(32,-66,56,-40,48,14)
  qs(c,[48,14,44,-6,36,-4,30,-20,18,-8,10,-24,-2,-10,-12,-26,-22,-10,-32,-22,-40,-4,-48,14],.22);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-24,-30);c.quadraticCurveTo(-30,-18,-30,-14);c.moveTo(20,-30);c.quadraticCurveTo(26,-20,30,-14);c.lineWidth=2.4;c.strokeStyle=Hd;c.stroke()
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,-20);c.quadraticCurveTo(f*54,6,f*44,30);c.quadraticCurveTo(f*42,14,f*36,8);c.quadraticCurveTo(f*40,-6,f*34,-14);c.closePath();fs(c,H)}
  // red beanie
  c.beginPath();c.moveTo(-50,-30);c.bezierCurveTo(-50,-90,50,-90,50,-30);c.closePath();fs(c,B)
  for(const u of[-24,-8,8,24]){c.beginPath();c.moveTo(u,-38);c.quadraticCurveTo(u*1.1,-60,u*.7,-78);c.lineWidth=2.4;c.strokeStyle='#b52a35';c.stroke()}
  rr(c,-52,-42,104,16,8);fs(c,'#c92f3c')
  c.restore()
  // laptop held up (we see the back of the lid)
  c.save();c.translate(lx,ly);c.rotate(tilt*.6)
  rr(c,-50,-46,100,48,6);fs(c,'#cfd6e4',3.5)
  c.beginPath();c.moveTo(0,-30);c.bezierCurveTo(-12,-40,-20,-24,0,-12);c.bezierCurveTo(20,-24,12,-40,0,-30);fs(c,'#ff7aa8',2.6)
  el(c,-30,-34,6);fs(c,'#ffd23f',2.4)
  rr(c,-56,0,112,9,4);fs(c,'#aab2c5',3.2)
  c.restore()
  for(const f of[-1,1]){el(c,lx+f*40,ly+4,9,8);fs(c,S,3)}
  // worry sweat while wandering
  if(walk&&!lv)drop(c,x+48,132+y-(i%3)*2,.85)
}
