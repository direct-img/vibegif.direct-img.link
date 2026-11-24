// sporty girl with a mint-green high ponytail, a white headband and a purple track jacket hops across commit stepping stones, each jump half as long, good, bad, then lands on the first bad commit and a bug pops out of the water
// tags: playful, anime, coding, git, bounce, debugging
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k,hop=(t,a,b)=>t<a||t>b?0:sin((t-a)/(b-a)*P)
// limb: a thick outlined quadratic stroke
const lb=(c,x0,y0,x1,y1,x2,y2,w,f)=>{c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(x1,y1,x2,y2);st(c,w,f)}
// head shape, centred on the eyes' row, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// hair cap with a fringe: p runs from the right temple across to the left one
const cap=(c,p,col,k=.18,hl)=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,p,k);c.closePath();fs(c,col)
  if(hl){c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);sk(c,5,hl);c.beginPath();c.arc(0,-24,40,P*1.56,P*1.64);sk(c,5,hl)}}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,r=k%2?2.2:7.5;c.lineTo(x+lx+cos(q)*r,y+ly+sin(q)*r)}c.closePath();fs(c,'#fff',0);el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6*pp**.5,y+ly-4*pp**.5,3.4*pp**.5,4.2*pp**.5);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// face: o.e iris colours, ex eye style, m mouth, mo mouth scale, br brow worry(+)/anger(-), by brow lift, bc brow colour, fr freckles
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,by=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.32)',0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br-by);c.quadraticCurveTo(f*20,-15-br-by,f*28,-12+3*br-by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='open'){c.moveTo(-6,-3);c.quadraticCurveTo(0,-5,6,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-6,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='gasp'){c.moveTo(0,-6);c.bezierCurveTo(8,-6,8,12,0,12);c.bezierCurveTo(-8,12,-8,-6,0,-6);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,12,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='chew'){el(c,0,0,5,3.2);fs(c,'#a3304a',2.2/mo)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#fff3a0',w=2.5)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;if(w)c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
// open hand, fingers pointing up (rotate with a), thumb to the left (mirror with s<0)
const palm=(c,x,y,a,col,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,abs(s))
  for(const L of[0,1]){for(const[q,l]of[[-.55,10],[-.18,12],[.18,12],[.52,10],[-1.45,8]]){c.beginPath();c.moveTo(0,1);c.lineTo(sin(q)*l,-cos(q)*l);c.lineWidth=L?4.4:10.4;c.strokeStyle=L?col:O;c.stroke()}el(c,0,3,L?7:10.4,L?6.5:9.9);c.fillStyle=L?col:O;c.fill()}
  c.restore()}
export const frames=26,delay=80,rim=4
const H='#5fd8b0',Hd='#2f9e86',Hl='#b6f5dc',S='#d8a073',J='#8b5cf6',Jd='#6a3fd0',I=['#9a3a06','#ffb347']
const X=k=>58+k*24.5,SY=214
// jumps: crouch start, take off, land, from stone, to stone, arc height
const JP=[[0,.06,.27,0,4,38],[.33,.37,.49,4,6,30],[.54,.57,.65,6,5,18],[.86,.87,1,5,0,36]]
const stone=(c,x,s)=>{
  c.beginPath();c.moveTo(x-14,SY+2);c.quadraticCurveTo(x-15,SY+19,x,SY+20);c.quadraticCurveTo(x+15,SY+19,x+14,SY+2);fs(c,'#8f92a6')
  el(c,x,SY+2,14,6);fs(c,'#c9cbd8',3)
  // commit dot on the front: plain, good, bad or the bug
  const f=[0,'#3fc46a','#ff4f5e','#ff4f5e'][s];el(c,x,SY+12,f?7:5);fs(c,f||'#fff',2.5)
  c.beginPath();if(s==1){c.moveTo(x-3,SY+12);c.lineTo(x-.5,SY+14.5);c.lineTo(x+3.5,SY+9.5)}else if(s>1){c.moveTo(x-2.5,SY+9.5);c.lineTo(x+2.5,SY+14.5);c.moveTo(x+2.5,SY+9.5);c.lineTo(x-2.5,SY+14.5)}sk(c,2,'#fff')
}
const bug=(c,x,y,s,a)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*5,-12);c.quadraticCurveTo(f*8,-24,f*15,-24);sk(c,2.5);el(c,f*15,-24,3);fs(c,'#ff7ab8',2)}
  for(const f of[-1,1])for(const v of[-2,4,10]){c.beginPath();c.moveTo(f*12,v);c.lineTo(f*19,v+3);sk(c,2.5)}
  el(c,0,0,15,15);fs(c,'#9b5cf0');c.beginPath();c.moveTo(0,-15);c.lineTo(0,15);sk(c,2.2)
  for(const[u,v]of[[-7,4],[8,6],[-5,-6]]){el(c,u,v,2.6);fs(c,'#5b2aa8',0)}
  for(const f of[-1,1]){el(c,f*6,-7,4.4,5);fs(c,'#fff',2);el(c,f*6+1,-6,2.2,3);fs(c,O,0)}
  c.beginPath();c.arc(0,-2,3,.2,P-.2);sk(c,2);c.restore()}
export default(c,t,i)=>{
  // where she is: x, height, squash, facing, jump progress
  let x=X(0),h=0,sq=0,d=1,air=-1
  for(const[a,b,e,f,g,hh]of JP){
    if(t>=a&&t<b){x=X(f);sq=hop(t,a,b);d=g>f?1:-1}
    else if(t>=b&&t<e){const u=(t-b)/(e-b);x=lp(X(f),X(g),u);h=hh*4*u*(1-u);d=g>f?1:-1;air=u}
    else if(t>=e){x=X(g);d=g>f?1:-1;sq=hop(t,e,e+.05)*.8}
  }
  if(t<.06)sq=max(sq,hop(t,-.04,.06)*.8)
  const good=t>.28&&t<.87,bad=t>.5&&t<.87,found=t>.66&&t<.88,by=found?sg(t,.66,.7)*(1-sg(t,.84,.88)):0
  const fx=X(5),shock=t>.67&&t<.74,cheer=t>=.74&&t<.86
  // water and ripples
  c.beginPath();c.moveTo(10,228);for(let k=1;k<=12;k++)c.quadraticCurveTo(10+k*19.7-9.8,228+(k%2?3:-3)*sin(t*2*P+k),10+k*19.7,228);c.quadraticCurveTo(248,246,236,246);c.lineTo(20,246);c.quadraticCurveTo(8,246,10,228);fs(c,'#7cc8f0')
  for(let k=0;k<5;k++){const u=(k*47+t*40)%220+18;c.beginPath();c.moveTo(u,239);c.lineTo(u+10,239);sk(c,2.5,'#c6ecff')}
  // stones
  for(let k=0;k<7;k++)stone(c,X(k),k==4&&good?1:k==6&&bad?2:k==5&&found?3:0)
  // the bug splashing up out of the water
  if(by>0){const yy=lp(SY,46,E(by))+(by<1?0:4*sin(t*P*24))
    c.save();c.beginPath();c.rect(0,0,256,SY+4);c.clip();bug(c,fx,yy,1.1,.12*sin(t*P*16));c.restore()
    if(t<.75){const q=sg(t,.66,.75);for(let k=0;k<6;k++){const a=-P/2+(k-2.5)*.5;el(c,fx+cos(a)*40*q,SY-10+sin(a)*40*q+q*q*30,3,3);fs(c,'#ffd166',2)}}}
  // labels
  rr(c,12,12,92,22,7);fs(c,'#262b45');tx(c,'git bisect',58,24,13,'#7ee0ff',0)
  // girl: feet at (x, SY-h)
  c.save();c.translate(x,SY-h);c.scale(1.14*(1+sq*.08),1.14*(1-sq*.1))
  const tl=air>=0?(air-.5)*1.6:sq*.4,ar=air>=0?1-air*.6:-sq
  // ponytail behind, swinging with the jump
  const A=air>=0?.6-1.1*air:.6+.2*sq
  c.save();c.translate(-d*15,-118);c.rotate(-d*A);c.scale(d,1)
  c.beginPath();c.moveTo(2,-7);c.bezierCurveTo(-25,-14,-37,16,-30,48);c.lineTo(-24,38);c.lineTo(-19,50);c.lineTo(-15,36);c.bezierCurveTo(-20,16,-12,6,4,6);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-12,-2);c.quadraticCurveTo(-24,12,-23,32);sk(c,2.5,Hd)
  el(c,0,0,6.5,7.5);fs(c,'#ff6fa3',3)
  c.restore()
  // legs: tucked in the air
  const lg=air>=0?sin(air*P)*8:0
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*7,-28);c.lineTo(f*8+d*lg*.6,-6+lg*-.4);st(c,9,S);el(c,f*8+d*(lg*.6+2),-3-lg*.4,8.5,5);fs(c,'#5fd8b0',3);rr(c,f*8+d*lg*.6-4.5,-14-lg*.4,9,6,2);fs(c,'#fff',2.5)}
  // shorts and jacket
  pg(c,-18,-40,18,-40,20,-24,2,-26,-2,-26,-20,-24);fs(c,'#2c3560')
  c.beginPath();c.moveTo(-12,-64);c.quadraticCurveTo(-24,-62,-22,-48);c.lineTo(-21,-36);c.quadraticCurveTo(0,-32,21,-36);c.lineTo(22,-48);c.quadraticCurveTo(24,-62,12,-64);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(0,-60);c.lineTo(0,-35);sk(c,2.5);c.beginPath();c.moveTo(-9,-64);c.lineTo(0,-56);c.lineTo(9,-64);fs(c,'#fff',2.5)
  // arms: swing back on the crouch, up in the air, a point at the bug
  for(const f of[-1,1]){const pt=cheer&&f==1,up=shock?1:ar
    const hx=pt?26:f*(18+10*abs(up))+(shock?f*4:0),hy=pt?-96:lp(-36,-80,max(0,up))+max(0,-up)*6
    lb(c,f*14,-58,f*22,-50,hx,hy,8,J)
    if(shock)palm(c,hx,hy,f*.4,S,f*.7);else if(pt){el(c,hx,hy,6,5.5);fs(c,S,3);c.beginPath();c.moveTo(hx+1,hy-4);c.lineTo(hx+4,hy-13);st(c,3.5,S,3)}else{el(c,hx,hy,6,5.5);fs(c,S,3)}}
  // head
  c.save();c.translate(0,-88);c.rotate(d*.05+(shock?-.08:0));c.scale(.56,.56)
  hd(c,S)
  const lk=d*6,o=shock?{e:I,pp:.4,ly:-3,by:4,br:.6,m:'gasp',mo:1.2}
    :cheer?{e:I,ex:'star',m:'grin',mo:1.1,lx:2,ly:-3}
    :t>.28&&t<.34?{e:I,ex:'happy',m:'grin'}
    :t>.5&&t<.56?{e:I,lx:-3,ly:2,m:'frown',br:.6}
    :sq>.3?{e:I,lx:lk,ly:3,m:'cat',br:-.5}
    :{e:I,lx:lk,ly:-1,m:'smile',mo:1.1}
  face(c,o)
  cap(c,[50,26,47,-8,40,4,34,-16,24,-4,16,-22,4,-6,-6,-24,-18,-6,-28,-20,-38,2,-46,-8,-50,26],H,.2,Hl)
  c.beginPath();c.moveTo(-49,-14);c.quadraticCurveTo(0,-56,49,-14);st(c,7,'#fff',3.5)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,-10);c.quadraticCurveTo(f*52,20,f*46,40);c.quadraticCurveTo(f*42,22,f*36,4);c.closePath();fs(c,H)}
  c.restore()
  c.restore()
  if(shock){tx(c,'!',x-40,SY-150,28,'#ff5a6e',5,'DejaVu Sans');drop(c,x+38,SY-138,.9)}
  if(t>.28&&t<.34)spk(c,X(4)+26,SY-40,7,'#a1f08f')
  if(cheer)for(let k=0;k<3;k++)spk(c,x-44+k*30,SY-150+(k%2)*10+sin(t*30+k)*3,5+(k%2)*2,'#fff3a0')
}
