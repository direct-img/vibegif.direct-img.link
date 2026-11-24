// a bored girl with very long mint-green hair and a star clip in an orange hoodie slowly spins all the way around in an office chair while the compile progress bar crawls along above her
// tags: tired, anime, coding, slow, spin, bored
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,floor}=Math
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
export const frames=32,delay=90,rim=4
const H='#7fd9b0',Hd='#4fb08a',Hl='#c9f7e2',S='#f3cba8',J='#ff8a4c',Jd='#d9622a',PN='#3b4a7a'
export default(c,t,i)=>{
  const th=t*2*P-.6*sin(t*2*P),sn=sin(th),cs=cos(th),k=cs,ft=cs>0,cx=128,R=42,hy=94
  const X=(x,z)=>cx+x*cs+z*sn,Z=(x,z)=>-x*sn+z*cs
  // progress window
  rr(c,14,6,228,40,9);fs(c,'#fff');c.font='bold 13px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle='#4a4f6a';c.fillText('compiling'+'...'.slice(0,1+floor(t*12)%3),24,17)
  rr(c,24,27,208,12,6);fs(c,'#e3e6f0',2.5)
  c.save();rr(c,24,27,208*.61,12,6);c.clip();c.fillStyle='#5ad18f';c.fillRect(24,26,208,14)
  c.fillStyle='rgba(255,255,255,.4)';for(let x=-20+t*48;x<240;x+=12){c.beginPath();c.moveTo(x,39);c.lineTo(x+6,39);c.lineTo(x+12,27);c.lineTo(x+6,27);c.fill()}
  c.restore();rr(c,24,27,208*.61,12,6);c.lineWidth=2.5;c.strokeStyle=O;c.stroke();c.textAlign='right';c.fillStyle='#2f8f5a';c.fillText('61%',232,17)
  // chair base: rolling star legs
  c.beginPath();c.moveTo(cx,180);c.lineTo(cx,212);st(c,8,'#9aa3b8',3)
  const legs=[...Array(5)].map((_,j)=>th*.6+j*2*P/5).sort((a,b)=>cos(b)-cos(a))
  for(const a of legs.reverse()){const x=cx+sin(a)*44,y=216+cos(a)*8;c.beginPath();c.moveTo(cx,214);c.lineTo(x,y);st(c,6,'#6c7488',3);el(c,x,y+6,6);fs(c,'#2b2f3e',3)}
  const back=()=>{const w=12+58*abs(cs),x=X(0,-32);rr(c,x-w/2,104,w,62,14);fs(c,'#5b64d6');rr(c,x-w/2+6,112,max(2,w-12),46,10);fs(c,'#7c86ee',0)
    c.beginPath();c.moveTo(x,166);c.lineTo(x,176);st(c,6,'#9aa3b8',3)}
  if(ft)back()
  el(c,cx,174,44,11);fs(c,'#5b64d6')
  const leg=f=>{const kx=X(f*11,30),fx=X(f*11,36);c.beginPath();c.moveTo(X(f*11,0),170);c.lineTo(kx,174);c.lineTo(fx,206);st(c,11,PN,3.2);el(c,fx+sn*5,210,8+abs(sn)*3,5.5);fs(c,'#fff',3)}
  const hair=()=>{const x=X(0,-10),w=.72+.28*abs(cs);c.save();c.translate(x,hy);c.scale(w,1);c.beginPath();c.moveTo(-44,-6);c.bezierCurveTo(-56,40,-54,80,-40,100);c.quadraticCurveTo(-30,96,-24,104);c.quadraticCurveTo(-10,96,0,106);c.quadraticCurveTo(10,96,24,104);c.quadraticCurveTo(30,96,40,100);c.bezierCurveTo(54,80,56,40,44,-6);fs(c,ft?Hd:H)
    if(!ft){c.beginPath();for(const u of[-24,-8,8,24]){c.moveTo(u*.6,10);c.quadraticCurveTo(u,50,u*1.1,90)}c.lineWidth=2.5;c.strokeStyle=Hd;c.stroke()}c.restore()}
  const arm=f=>{const sx=X(f*26,0),hx=X(f*24,22);c.beginPath();c.moveTo(sx,136);c.quadraticCurveTo(X(f*30,6),156,hx,170);st(c,12,J,3.2);el(c,hx,172,7,6.5);fs(c,S,3)}
  if(!ft){leg(-1);leg(1)}
  if(ft)hair()
  for(const f of[-1,1])if(Z(f*26,0)<0)arm(f)
  // hoodie torso
  const tw=30*(.8+.2*abs(cs));c.beginPath();c.moveTo(cx-tw*.7,128);c.quadraticCurveTo(cx-tw-4,140,cx-tw,176);c.lineTo(cx+tw,176);c.quadraticCurveTo(cx+tw+4,140,cx+tw*.7,128);c.closePath();fs(c,J)
  if(cs>.1){c.save();c.translate(X(0,28),0);c.scale(cs,1);rr(c,-16,154,32,14,5);fs(c,Jd,2.5);c.beginPath();c.moveTo(0,130);c.lineTo(0,154);c.lineWidth=2.5;c.strokeStyle=Jd;c.stroke()
    for(const f of[-1,1]){c.beginPath();c.moveTo(f*6,132);c.lineTo(f*7,146);c.lineWidth=2;c.strokeStyle='#fff';c.stroke()}c.restore()}
  else if(cs<-.1){c.save();c.translate(X(0,-24),0);c.scale(-cs,1);c.beginPath();c.moveTo(-18,126);c.quadraticCurveTo(0,150,18,126);fs(c,Jd,3);c.restore()}
  if(!ft)hair()
  for(const f of[-1,1])if(Z(f*26,0)>=0)arm(f)
  if(ft){leg(-1);leg(1)}
  // head: a ball turning, the face rides around on it
  c.save();c.translate(cx,hy)
  el(c,0,0,R,R*.98);c.fillStyle=H;c.fill();c.save();el(c,0,0,R,R*.98);c.clip()
  const px=R*sn
  if(cs>-.15){c.save();c.translate(px,0);c.scale(max(.01,k),1)
    el(c,0,10,36,34);fs(c,S,3)
    const sigh=cs>.85
    for(const f of[-1,1]){el(c,f*26,24,7,4);fs(c,'rgba(255,100,125,.32)',0)}
    for(const f of[-1,1]){c.save();c.translate(f*17,0);c.scale(.85,.85);eye(c,0,f,{e:['#8a4a0c','#ffc76a'],op:sigh?.3:.5,lx:0,ly:-4,pp:.9});c.restore()
      c.beginPath();c.moveTo(f*9,-6);c.quadraticCurveTo(f*17,-8,f*25,-5);c.lineWidth=2.6;c.strokeStyle=Hd;c.stroke()}
    c.beginPath();if(sigh){el(c,0,27,5,3.5);fs(c,'#a3304a',2.2)}else{c.moveTo(-5,27);c.lineTo(5,27);c.lineWidth=2.4;c.strokeStyle=O;c.stroke()}
    c.beginPath();c.moveTo(-46,-50);c.lineTo(46,-50);c.lineTo(46,-2);qs(c,[42,-2,36,-14,28,0,20,-16,10,-4,2,-20,-6,-4,-16,-18,-26,-2,-34,-14,-42,-2],.2);c.lineTo(-46,-2);c.closePath();fs(c,H,3)
    c.restore()}
  c.restore();el(c,0,0,R,R*.98);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  c.beginPath();c.arc(0,0,R-8,P*1.22,P*1.45);c.lineWidth=4.5;c.strokeStyle=Hl;c.stroke()
  const sz=Z(30,30)/42;if(sz>-.2){const sx=R*sin(th+.9)*.95;c.save();c.translate(sx,-26);c.scale(max(.2,cos(th+.9)),1);star(c,0,0,10,'#ffd84d',3);c.restore()}
  c.restore()
  if(!ft)back()
  if(cs>.85){const p=(t+.12)%1*8%1;c.globalAlpha=1-p;el(c,X(0,50)+14+p*16,hy+38-p*10,4+p*5,3+p*3);fs(c,'#fff',2.5);c.globalAlpha=1}
}
