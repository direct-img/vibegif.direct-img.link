// a dark-skinned girl with long wavy blonde hair in a black hoodie runs npm audit and a red 999 vulnerabilities balloon inflates out of her laptop bigger and bigger until it pops in her face, leaving her sooty and frizzy
// tags: anxious, anime, coding, security, balloon, explosion
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,floor,round}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const star=(c,x,y,r,f,w=2)=>{c.beginPath();for(let k=0;k<10;k++){const a=k*P/5-P/2,q=k%2?r*.45:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);c.stroke();c.beginPath();c.moveTo(x+f*9,y+3);c.lineTo(x+f*13,y);c.lineWidth=3;return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){star(c,x+lx,y+ly+2,7.5*pp,'#fff36b',1.6);el(c,x+lx-4.5,y+ly-5,2.4,2.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
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
  else if(m=='drool'){c.moveTo(-5,0);c.quadraticCurveTo(0,3,5,0);c.stroke();c.beginPath();c.moveTo(4,1);c.quadraticCurveTo(7,6,5,9);c.quadraticCurveTo(2,6,4,1);fs(c,'#bfe8ff',1.6)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=30,delay=80,rim=4
const H='#ffd86b',Hd='#e0a93a',Hl='#fff4c0',S='#6e4029',J='#2b2d3a',Jl='#4a4d62'
export default(c,t,i)=>{
  const tp=sg(t,.02,.12),inf=sg(t,.14,.6),boom=t>=.6&&t<.66,soot=t>=.62&&t<.92,
    st2=inf<.01?0:inf,pulse=sin(t*8*P)*.04*(inf>0&&inf<1?1:0),br=.2+st2*.85+pulse,
    lean=sg(t,.4,.6)*(1-sg(t,.62,.7)),hx=182+lean*8,hy=94-lean*2
  // long wavy back hair (frizzes up after the pop)
  c.save();c.translate(hx,hy);c.scale(.8,.8)
  c.beginPath();c.moveTo(-48,-20)
  if(soot){for(let k=0;k<=14;k++){const a=P*(1.05-k/14*1.1)+P,r=k%2?54:68;c.lineTo(cos(a)*r,-4+sin(-a)*r*-1)}}
  else{c.bezierCurveTo(-70,20,-50,50,-66,90);c.quadraticCurveTo(-52,104,-40,96);c.quadraticCurveTo(-30,110,-16,98);c.lineTo(16,98);c.quadraticCurveTo(30,110,40,96);c.quadraticCurveTo(52,104,66,90);c.bezierCurveTo(50,50,70,20,48,-20)}
  c.closePath();fs(c,Hd)
  c.restore()
  // black hoodie
  c.beginPath();c.moveTo(hx-22,134);c.bezierCurveTo(hx-46,140,hx-52,164,hx-52,196);c.lineTo(hx-52,240);c.lineTo(hx+52,240);c.lineTo(hx+50,196);c.bezierCurveTo(hx+50,164,hx+44,140,hx+22,134);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-26,134);c.quadraticCurveTo(hx,156,hx+26,134);fs(c,Jl,3)
  for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*8,150);c.lineTo(hx+f*9,176);c.lineWidth=2.5;c.strokeStyle='#e8e8f0';c.stroke()}
  // head
  c.save();c.translate(hx,hy);c.scale(.8,.8);c.rotate(lean*.1)
  hd(c,S)
  const E1=['#1a4fa0','#7cc8ff'],bc='#c08a2a',bl='rgba(255,110,140,.45)'
  face(c,soot?{e:E1,ex:'dot',m:'o',mo:1.1,br:1,bc,blc:bl}
    :t<.14||t>=.92?{e:E1,lx:-6,ly:4,m:'cat',op:t>.95?.15:1,bc,blc:bl}
    :inf<.45?{e:E1,lx:-7,ly:0,pp:.9,m:'o',mo:.8,br:.6,bc,blc:bl}
    :{e:E1,lx:-6,ly:-2,pp:.55,m:'wave',mo:1.2,br:1,bc,blc:bl})
  if(soot)for(const[x,y,a,b]of[[-26,26,10,6],[24,-4,8,5],[6,36,7,4],[-34,-2,6,4]]){el(c,x,y,a,b);fs(c,'rgba(30,26,34,.55)',0)}
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,24)
  if(soot)qs(c,[50,24,54,-6,40,0,42,-22,24,-8,22,-34,4,-14,-6,-36,-18,-12,-34,-28,-38,-2,-54,-8,-50,24],.25)
  else qs(c,[50,24,46,-6,38,4,32,-16,22,-2,12,-20,2,-4,-8,-20,-18,-2,-28,-18,-38,4,-46,-6,-50,24],.2)
  c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  if(inf>.5&&t<.6)drop(c,hx+42,hy-28+(i%3)*2,1)
  // laptop
  pg(c,14,196,118,196,128,236,6,236);fs(c,'#cfd5e4')
  c.save();c.transform(1,0,-.12,1,0,0);rr(c,36,122,96,74,6);fs(c,'#dde3ee');rr(c,42,128,84,62,4);fs(c,'#1d2133',3)
  c.font='bold 11px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle='#7ee0a0';c.fillText('$',48,142);c.fillStyle='#fff';if(t<.92)c.fillText('npm audit'.slice(0,floor(tp*9)),58,142)
  if(inf>.05&&t<.92){c.fillStyle='#ff6b6b';c.fillText('found',48,160);c.fillText('999!!',48,176)}
  c.restore()
  // arms
  const arm=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,15,J);el(c,x,y,8.5,8);fs(c,S,3.2)}
  if(t<.14||t>=.92)arm(hx-40,150,hx-50,214,104-(t<.14?(i%2)*4:0),214)
  else if(t<.6)arm(hx-40,150,hx-62,170,hx-56,134-lean*10)
  else arm(hx-40,150,hx-46,200,hx-30,222)
  arm(hx+40,150,hx+56,200,hx+36,224)
  // balloon
  if(inf>0&&t<.6){const bx=74+inf*56,by=150-inf*56,r=12+inf*50+pulse*40
    c.beginPath();c.moveTo(74,128);c.quadraticCurveTo(bx-20,by+r+20,bx,by+r+6);c.lineWidth=2.5;c.strokeStyle=O;c.stroke()
    pg(c,bx,by+r-2,bx-5,by+r+7,bx+5,by+r+7);fs(c,'#d42a3a',2.5)
    el(c,bx,by,r*.92,r);fs(c,'#ec3b4b');el(c,bx-r*.38,by-r*.42,r*.18,r*.28,.5);fs(c,'rgba(255,255,255,.6)',0)
    if(r>24){c.save();c.translate(bx,by);c.scale(r/64,r/64);tx(c,'999',0,-8,40,'#fff',7,'DejaVu Sans');tx(c,'vulnerabilities',0,22,13,'#ffe0e0',4,'DejaVu Sans');c.restore()}}
  // pop
  if(boom){const p=(t-.6)/.06,bx=150,by=96
    c.save();c.translate(bx,by);c.scale(1.05+p*.4,1.05+p*.4);c.beginPath();for(let k=0;k<24;k++){const a=k*P/12,r=k%2?40:70;c.lineTo(cos(a)*r,sin(a)*r*.85)}c.closePath();fs(c,'#ffe14d',4);tx(c,'POP!',0,2,30,'#ff3b4b',6,'DejaVu Sans');c.restore()}
  if(t>=.6&&t<.9){const p=(t-.6)/.3
    if(t>=.64)for(let k=0;k<7;k++){const a=k*.9+.4,x=150+cos(a)*(50+p*80),y=96+sin(a)*(20+p*60)+p*p*120;if(y<244&&x>8&&x<248){c.save();c.translate(x,y);c.rotate(k+p*8);pg(c,-6,-4,7,-2,4,5,-5,4);fs(c,'#ec3b4b',2.5);c.restore()}}
    if(soot)for(let k=0;k<3;k++){const q=(p*1.5+k/3)%1,x=hx-34+k*30,y=hy-50-q*22;el(c,x,y,6+q*6,5+q*4);fs(c,'#b8bcc8',2.5)}}
}
