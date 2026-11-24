// a brown-skinned girl with low dark pigtails, a red polka-dot bandana and a mint apron sweeping every email envelope off her monitor with a broom until a sparkly 0 pops up, then leaning on the broom with a happy sigh
// tags: happy, anime, email, cleaning, relief, proud
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
export const frames=26,delay=85,rim=3
const SK='#c68a5e',HR='#4a2c1e',HL='#7a5240',BD='#e84a4a',DR='#8fc9ff',AP='#bff0dc',I=['#4a2a10','#c99a4a']
const RY=[68,94,120],CX=[142,186],ST=[.08,.22,.36],SL=.14
const env=(c,x,y,a=0,al=1,s=1)=>{c.save();c.globalAlpha=al;c.translate(x,y);c.rotate(a);c.scale(s,s);rr(c,-17,-11,34,22,3);fs(c,'#fff',2.8);c.beginPath();c.moveTo(-16,-10);c.lineTo(0,2);c.lineTo(16,-10);ln(c,2.4);el(c,13,-8,4);fs(c,'#ff4d5e',2);c.restore()}
export default(c,t,i)=>{
  const T=t*2*P
  // monitor
  rr(c,150,150,28,26,3);fs(c,'#8b93a8');rr(c,128,172,72,12,6);fs(c,'#a7aec0')
  rr(c,100,26,128,126,12);fs(c,'#2b2f45');rr(c,107,33,114,104,6);fs(c,'#f4f6ff',2.5)
  rr(c,107,33,114,20,[6,6,0,0]);fs(c,'#d9e0f7',2.5)
  // envelopes: pushed by the broom, flung off the screen, then new mail drops back in
  let n=0,bx=0,by=0,push=0
  RY.forEach((ry,r)=>{const s=(t-ST[r])/SL,pp=E(min(1,max(0,s)/.65))
    if(s>0&&s<1){by=ry;bx=s<.65?112+pp*96:208-E((s-.65)/.35)*96;push=s<.65}
    CX.forEach((cx,j)=>{const k=r*2+j,rf=.86+k*.018
      if(t<ST[r]||t>=rf){const f=t<ST[r]?1:min(1,(t-rf)/.04);if(t<ST[r]||f>=1)n++
        env(c,cx,ry-(1-f)*(1-f)*40,0,min(1,f*3),1+.15*sin(f*P));return}
      if(t>.84)return
      const x=max(cx,112+pp*96+22+j*42),d=x-214+max(0,s-.55)*300
      if(d<=0){env(c,x,ry);n++}
      else if(d<70)env(c,214+d*.9,ry-d*.7+d*d*.006,d*.06*(j?1:-1),1-d/70)})})
  tx(c,'Inbox',140,43,12,'#3a4060',0,'DejaVu Sans')
  rr(c,170,36,n>9?30:22,15,7.5);fs(c,n?'#ff4d5e':'#3ccf7a',2.2);tx(c,''+n,181,44,11,'#fff',0,'DejaVu Sans')
  // the sparkly zero
  const z=sg(t,.5,.56)*(1-sg(t,.84,.88))
  if(z>0){c.save();c.translate(164,96);c.scale(z*(1+.12*sin(min(1,(t-.5)/.08)*P)),z);tx(c,'0',0,2,72,'#ffd23f',8,'DejaVu Sans');c.restore()
    for(const[x,y,r,o]of[[126,66,9,0],[204,74,11,.3],[132,124,8,.6],[200,124,10,.15],[164,50,7,.45]]){const k=.6+.4*sin(T*4+o*9);spk(c,x,y,r*k*z,'#fff3a8',2.4)}}
  // broom pose: sweeping across the screen -> resting upright to lean on
  const rest=t<.3?1-sg(t,0,.08):sg(t,.5,.6),sw=1-rest
  if(!bx){bx=112;by=RY[0]}
  const tx0=bx,ty0=by+(push?0:-10),gx0=86+(bx-112)*.12,gy0=160,dl=Math.hypot(tx0-gx0,ty0-gy0)
  const Bx=(tx0-(tx0-gx0)/dl*16)*sw+104*rest,By=(ty0-(ty0-gy0)/dl*16)*sw+224*rest
  const Gx=gx0*sw+102*rest,Gy=gy0*sw+130*rest,ux=Gx-Bx,uy=Gy-By,ul=Math.hypot(ux,uy),vx=ux/ul,vy=uy/ul
  // pigtails and girl body
  const hx=62+rest*6,hy=94+rest*4,tl=rest*.16-sw*.04
  const H=()=>{c.translate(hx,hy);c.rotate(tl);c.scale(.72,.72)}
  c.save();H();for(const s of[-1,1]){c.beginPath();c.moveTo(s*40,6);c.quadraticCurveTo(s*62,40,s*50,88);c.quadraticCurveTo(s*44,96,s*38,86);c.quadraticCurveTo(s*44,50,s*28,16);c.closePath();fs(c,HR);el(c,s*40,16,6,5);fs(c,BD,2.6)}c.restore()
  for(const s of[-1,1]){c.beginPath();c.moveTo(62+s*9,196);c.lineTo(62+s*10,222);st(c,11,SK);rr(c,62+s*10-10+s*2,220,20,11,5);fs(c,'#6b3a2a',3)}
  c.beginPath();c.moveTo(48,124);c.quadraticCurveTo(34,128,34,148);c.lineTo(28,202);c.quadraticCurveTo(62,210,96,202);c.lineTo(90,148);c.quadraticCurveTo(90,128,76,124);c.closePath();fs(c,DR)
  c.beginPath();c.moveTo(46,146);c.lineTo(78,146);c.lineTo(86,200);c.quadraticCurveTo(62,206,38,200);c.closePath();fs(c,AP,3)
  rr(c,52,162,20,14,4);fs(c,'#9ee3c6',2.4);c.beginPath();c.moveTo(46,146);c.lineTo(52,128);c.moveTo(78,146);c.lineTo(72,128);ln(c,3)
  // broom: handle, bristles
  c.beginPath();c.moveTo(Bx,By);c.lineTo(Gx+vx*26,Gy+vy*26);st(c,6,'#c98a4a',3)
  c.save();c.translate(Bx,By);c.rotate(Math.atan2(vy,vx)+P/2)
  c.beginPath();c.moveTo(-9,-4);c.lineTo(9,-4);c.lineTo(17,22);c.quadraticCurveTo(0,27,-17,22);c.closePath();fs(c,'#f5c84c')
  c.beginPath();for(const x of[-9,-3,3,9]){c.moveTo(x*.7,2);c.lineTo(x*1.3,22)}ln(c,2,'#c99a2a');rr(c,-10,-8,20,8,3);fs(c,'#e84a4a',2.6)
  c.restore()
  // head
  c.save();H();hd(c,SK)
  const ph=t<.08?0:t<.5?1:t<.6?2:t<.86?3:0
  face(c,[{e:I,lx:5,m:'smug',br:-.3},{e:I,lx:6,m:push?'grit':'smile',mo:.9,br:-.7},{e:I,pp:1.25,lx:5,ly:-2,m:'grin',br:.2},{ex:'calm',m:'o',mo:.7,br:.3,blc:'rgba(255,90,110,.45)'}][ph])
  c.beginPath();c.moveTo(-50,18);c.bezierCurveTo(-56,-40,-30,-62,0,-62);c.bezierCurveTo(30,-62,56,-40,50,18)
  qs(c,[50,18,46,-6,38,-14,30,-4,22,-18,12,-10,2,-20,-8,-8,-18,-18,-28,-6,-36,-16,-44,-4,-50,18],.16);c.closePath();fs(c,HR)
  // bandana with knot
  c.beginPath();c.moveTo(-50,-18);c.bezierCurveTo(-52,-66,52,-66,50,-18);c.quadraticCurveTo(0,-34,-50,-18);fs(c,BD)
  c.save();c.clip();for(const[x,y]of[[-30,-38],[-6,-50],[18,-42],[36,-28],[-40,-24],[6,-30],[-20,-56],[30,-54]]){el(c,x,y,3.4);fs(c,'#fff',0)}c.restore()
  c.save();c.translate(30,-58);for(const s of[-1,1]){c.save();c.rotate(s*.7+sin(T*2)*.06);el(c,s*10,-4,11,6);fs(c,BD,3);c.restore()}el(c,0,0,6,5);fs(c,BD,3);c.restore()
  c.restore()
  // hands on the handle
  for(const[k,sx,sy]of[[0,48,150],[1,74,150]]){const gx=Gx-vx*k*14,gy=Gy-vy*k*14
    c.beginPath();c.moveTo(sx,sy-18);c.quadraticCurveTo(sx+(gx-sx)*.3,gy+12,gx,gy);st(c,11,DR);el(c,gx,gy,7,7);fs(c,SK,3)}
  // happy sigh puff
  if(ph==3){const q=(t-.6)/.26,x=hx+30+q*26,y=hy+12-q*20;c.globalAlpha=min(1,(1-q)*3);for(const[a,b,r]of[[0,0,7],[8,-3,6],[15,1,5]]){el(c,x+a*(1+q),y+b,r*(1+q*.6));fs(c,'#fff',2.4)}c.globalAlpha=1}
}
