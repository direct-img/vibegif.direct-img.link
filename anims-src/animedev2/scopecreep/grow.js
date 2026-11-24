// a peachy girl with a messy tangerine pixie cut and a purple track jacket stomps along holding a tiny "fix" box overhead, it grows with every step into a giant REWRITE box that squashes her flat, then it poofs back and she boings up
// tags: anxious, anime, work, task, box, squash
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,round}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w=3.5,pf=0)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47-pf,24+pf,-22-pf,46,0,46);c.bezierCurveTo(22+pf,46,47+pf,24+pf,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+4);c.lineTo(x+10,y+4);c.stroke();c.beginPath();c.moveTo(x-8,y+10);c.quadraticCurveTo(x,y+13,x+8,y+10);c.lineWidth=2;c.strokeStyle='rgba(43,29,46,.4)';return c.stroke()}
  if(ex=='dot'){el(c,x,y+3,3.2,4);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
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
  else if(m=='open'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,10,0,11);c.quadraticCurveTo(-8,10,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='pout'){c.moveTo(-5,3);c.quadraticCurveTo(-2,-2,0,1);c.quadraticCurveTo(2,-2,5,3);c.stroke()}
  else if(m=='chew'){c.moveTo(-6,0);c.quadraticCurveTo(-3,3,0,0);c.quadraticCurveTo(3,3,6,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#ffe066',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a-P/2)*q,y+sin(a-P/2)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=28,delay=85,rim=3
const SK='#ffdcc6',HR='#ff8a2a',HD='#d9601a',HL='#ffc58a',JK='#7b5cd6',JKd='#5a3fb0',I=['#1b4aa6','#7ec8ff']
const SZ=[22,34,50,72,94],LB=['fix','fix+','feature','EPIC','REWRITE'],HT=[164,160,150,130,98],LD=[.1,.22,.34,.46]
export default(c,t,i)=>{
  const T=t*2*P
  // growth stage and pop on each stomp
  let k=0;for(const l of LD)if(t>=l)k++
  const pk=k?min(1,(t-LD[k-1])/.05):1,poof=sg(t,.84,.88),sq=sg(t,.6,.63)
  let bs=k?SZ[k-1]+(SZ[k]-SZ[k-1])*E(pk):SZ[0];bs*=1+(k?.1*sin(pk*P):0);if(t>.84)bs=SZ[4]+(SZ[0]-SZ[4])*poof
  // her height to the hands: buckling, flattened, springing back
  let h=k?HT[k-1]+(HT[k]-HT[k-1])*E(pk):HT[0]
  if(t>=.6)h=h+(30-h)*sq
  if(t>=.86){const s=min(1,(t-.86)/.1);h=30+(HT[0]-30)*E(min(1,s*1.4))+sin(min(1,s)*P)*16*(s>.5?1:0)}
  const flat=t>.63&&t<.87,sy=h/HT[0],sx=1+(1-min(1,sy))*.45,wb=k>=3&&t<.6?sin(T*10)*.05*(k-2):0
  // stomp: lift one leg before each landing
  let lift=[0,0];LD.forEach((l,j)=>{if(t>l-.1&&t<l)lift[j%2]=sin((t-l+.1)/.1*P)*10})
  // dust and impact
  if(flat&&t<.74){const q=(t-.62)/.12;c.globalAlpha=1-q;for(const s of[-1,1])for(let j=0;j<3;j++){el(c,128+s*(62+q*30+j*12),228-j*6-q*8,8+q*6-j*2,6+q*4);fs(c,'#e8e2d6',2.6)}c.globalAlpha=1}
  LD.forEach((l,j)=>{const q=(t-l)/.06;if(q>0&&q<1){c.globalAlpha=1-q;const x=128+(j%2?14:-14);for(const s of[-1,1]){el(c,x+s*(12+q*10),232-q*4,5+q*3,3.5+q*2);fs(c,'#e8e2d6',2.2)}c.globalAlpha=1}})
  // her head (local, unscaled), shared by the standing and pancake poses
  const ph=flat?5:t>=.86?(t<.93?6:0):k<1?0:k<2?1:k<3?2:k<4?3:4
  const head=()=>{
    c.beginPath();c.moveTo(-48,-20);c.bezierCurveTo(-54,-84,54,-84,48,-20);c.quadraticCurveTo(54,14,44,30);c.lineTo(-44,30);c.quadraticCurveTo(-54,14,-48,-20);fs(c,HD)
    hd(c,SK)
    face(c,[{ex:'happy',m:'grin',br:-.2},{e:I,ly:-5,m:'smile',br:0},{e:I,ly:-6,pp:.7,m:'o',br:.6},{ex:'shut',m:'grit',br:1},{e:I,ex:'swirl',m:'wave',mo:1.2,br:1},{e:I,ex:'swirl',m:'wave',mo:1.4,br:1,blc:'rgba(255,100,125,.5)'},{e:I,pp:.6,m:'open',br:.8}][ph])
    c.beginPath();c.moveTo(-52,22);c.bezierCurveTo(-58,-46,-30,-70,0,-70);c.bezierCurveTo(30,-70,58,-46,52,22)
    qs(c,[52,22,50,-2,42,6,38,-16,28,-4,22,-22,10,-8,2,-24,-8,-6,-18,-22,-26,-2,-36,-16,-44,4,-48,-6,-52,22],.22);c.closePath();fs(c,HR)
    c.beginPath();c.moveTo(-2,-68);c.quadraticCurveTo(-8,-92,10,-94);c.quadraticCurveTo(2,-84,6,-70);fs(c,HR,3)
    c.beginPath();c.arc(0,-26,40,P*1.2,P*1.46);ln(c,5,HL)
    c.save();c.translate(-36,-38);c.rotate(-.6);el(c,0,0,10,5);fs(c,'#5fd06a',2.6);c.beginPath();c.moveTo(-8,0);c.lineTo(8,0);ln(c,1.6);c.restore()}
  if(!flat){
    // standing, scaled about her feet
    c.save();c.translate(128,236);c.scale(sx,sy)
    for(const s of[-1,1]){const l=lift[s<0?0:1];c.beginPath();c.moveTo(s*9,-46);c.lineTo(s*10,-14-l);st(c,11,SK);rr(c,s*10-10+s*2,-16-l,20,6,2);fs(c,'#fff',2.4);c.beginPath();c.ellipse(s*11+s*2,-7-l,12,7,0,P,0);c.lineTo(s*11+s*2-12,-7-l);c.closePath();fs(c,'#ff4d5e')}
    c.beginPath();c.moveTo(-22,-58);c.lineTo(22,-58);c.lineTo(25,-38);c.lineTo(2,-38);c.lineTo(0,-44);c.lineTo(-2,-38);c.lineTo(-25,-38);c.closePath();fs(c,'#2c2c3a')
    c.beginPath();c.moveTo(-14,-96);c.quadraticCurveTo(-28,-94,-28,-80);c.lineTo(-25,-54);c.lineTo(25,-54);c.lineTo(28,-80);c.quadraticCurveTo(28,-94,14,-96);c.closePath();fs(c,JK)
    c.beginPath();c.moveTo(0,-96);c.lineTo(0,-55);ln(c,2.4,'#fff');rr(c,-24,-60,48,8,3);fs(c,JKd,2.4)
    c.save();c.translate(0,-128);c.rotate(wb*.6);c.scale(.7,.7);head();c.restore()
    c.restore()
  }else{
    // squashed flat: legs kicking out, pancake body, a squished face peeking from under the box
    for(const s of[-1,1]){const f=sin(T*10+s*2)*4;c.beginPath();c.moveTo(128+s*30,232);c.lineTo(128+s*58,228+f);st(c,9,SK);c.beginPath();c.ellipse(128+s*64,228+f,10,6,s*.3,0,2*P);fs(c,'#ff4d5e')}
    el(c,128,231,50,7);fs(c,JK)
    c.save();c.translate(128,222);c.scale(.95,.3);head();c.restore()
  }
  // the box riding on her hands
  const bb=236-h-2,bx=128+wb*40,hw=max(8,bs*.36)
  if(!flat){for(const s of[-1,1]){const sx0=128+s*24*sx,sy0=236-90*sy,hx=bx+s*hw,hy=bb+2
      c.beginPath();c.moveTo(sx0,sy0);c.quadraticCurveTo(128+s*max(50*sx,hw+12),(sy0+hy)/2-6,hx,hy+4);st(c,11,JK);ln(c,2.4,'#fff');el(c,hx,hy+2,6.5,6);fs(c,SK,3)}}
  else for(const s of[-1,1]){const f=sin(T*12+s)*5;c.beginPath();c.moveTo(128+s*40,230);c.lineTo(128+s*74,226+f);st(c,9,JK);el(c,128+s*78,226+f,6,5.5);fs(c,SK,3)}
  if(bs>2){c.save();c.translate(bx,bb-bs/2);c.rotate(wb)
    const d=bs*.16
    pg(c,-bs/2,-bs/2,-bs/2+d,-bs/2-d,bs/2+d,-bs/2-d,bs/2,-bs/2);fs(c,'#f0c389',max(2,min(3.5,bs/12)))
    rr(c,-bs/2,-bs/2,bs,bs,max(1,bs*.04));fs(c,'#d9a066',max(2,min(3.5,bs/12)))
    c.fillStyle='#f2d6a2';c.fillRect(-bs*.08,-bs/2+1.5,bs*.16,bs*.3)
    const lw=bs*.84,lh=bs*.3;rr(c,-lw/2,-lh*.2,lw,lh,bs*.04);fs(c,'#fff',max(1.4,min(3,bs/14)))
    const lb=t>.84?LB[0]:LB[k];c.font=`bold 20px DejaVu Sans`;const tw=c.measureText(lb).width,fz=min(20*lw*.86/tw,lh*.8)
    tx(c,lb,0,lh*.3,fz,k>=3&&t<.84?'#e2445c':'#3a3550',0,'DejaVu Sans')
    c.restore()}
  if(poof>0&&poof<1){c.globalAlpha=1-poof;for(let j=0;j<8;j++){const a=j*P/4,r=30+poof*40;el(c,128+cos(a)*r,bb-40+sin(a)*r*.8,10*(1-poof)+4);fs(c,'#fff',2.4)}c.globalAlpha=1}
  if(k>=3&&t<.6)drop(c,128+46*sx,236-118*sy,1,.4)
  if(flat&&t>.66){c.lineWidth=3;c.strokeStyle=O;for(const s of[-1,1])for(const r of[0,1]){c.beginPath();c.moveTo(128+s*(60+r*8),120-r*10);c.lineTo(128+s*(70+r*10),110-r*12);c.stroke()}}
}
