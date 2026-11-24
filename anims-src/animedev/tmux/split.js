// a fair girl with teal twin buns in an orange bomber jacket waves a star wand to split her terminal into halves, quarters and eighths, a tiny copy of her face pops up in every pane, then they all merge back into one
// tags: playful, anime, coding, terminal, magic, happy
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
export const frames=30,delay=85,rim=4
const H='#2fc4b8',Hd='#1c8f88',Hl='#a8f2ea',S='#f9dfca',J='#ff8f3a',Jd='#d9661c',
  L=[[[128,67,30],[70,67,28],[70,40,17],[41,40,16]],[0,[186,67,28],[186,40,17],[157,40,16]],[0,0,[70,94,17],[41,94,16]],[0,0,[186,94,17],[157,94,16]],
    [0,0,0,[99,40,16]],[0,0,0,[215,40,16]],[0,0,0,[99,94,16]],[0,0,0,[215,94,16]]],
  SP=[[.05,.15],[.25,.35],[.45,.55]],MV=[[.14,.2],[.34,.4],[.54,.6]],MX=['wink','o','happy','cat','o','happy','wink','cat']
const mini=(c,x,y,r,k,bl)=>{c.save();c.translate(x,y);c.scale(r/30,r/30)
  for(const f of[-1,1]){el(c,f*22,-22,10);fs(c,H,3)}
  el(c,0,0,27,26);fs(c,H,3);c.save();el(c,0,0,27,26);c.clip();el(c,0,10,24,22);fs(c,S,0);c.restore();el(c,0,0,27,26);c.lineWidth=3;c.strokeStyle=O;c.stroke()
  c.beginPath();c.moveTo(-24,-4);qs(c,[-24,-4,-14,-14,-8,-4,0,-16,8,-4,14,-14,24,-4],.2);c.lineTo(24,-26);c.lineTo(-24,-26);c.closePath();fs(c,H,0)
  c.beginPath();c.moveTo(-24,-4);qs(c,[-24,-4,-14,-14,-8,-4,0,-16,8,-4,14,-14,24,-4],.2);c.lineWidth=2.5;c.stroke()
  const m=MX[k]
  for(const f of[-1,1]){if(bl||m=='happy'||(m=='wink'&&f>0)){c.beginPath();c.moveTo(f*9-5,6);c.quadraticCurveTo(f*9,0,f*9+5,6);c.lineWidth=2.6;c.strokeStyle=O;c.stroke()}
    else{el(c,f*9,6,4,5.5);fs(c,'#c2410c',2);el(c,f*9-1.3,4,1.6,2);fs(c,'#fff',0)}
    el(c,f*16,14,4,2.4);fs(c,'rgba(255,100,125,.4)',0)}
  if(m=='o'){el(c,0,17,2.6,3.2);fs(c,'#a3304a',1.8)}else{c.beginPath();c.moveTo(-4,15);c.quadraticCurveTo(0,19,4,15);c.lineWidth=2.2;c.strokeStyle=O;c.stroke()}
  c.restore()}
export default(c,t,i)=>{
  const mg=sg(t,.84,.95),sp=SP.map(([a,b])=>sg(t,a,b)*(1-mg)),mv=MV.map(([a,b])=>sg(t,a,b)),done=t>.6&&t<.84
  // terminal with a tmux status bar
  rr(c,10,10,236,130,9);fs(c,'#1d2133')
  rr(c,12,122,232,16,[0,0,7,7]);fs(c,'#3fbf5e',0);c.beginPath();c.moveTo(12,122);c.lineTo(244,122);c.lineWidth=2.5;c.strokeStyle=O;c.stroke()
  const np=mg>.6?1:mg>0?8:[1,2,4,8][mv.filter(v=>v>.5).length]
  c.font='bold 11px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle='#10301a';c.fillText('[0] 0:zsh*',18,130);c.textAlign='right';c.fillText(np+' pane'+(np>1?'s':''),238,130)
  rr(c,10,10,236,130,9);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  // split lines drawn by the wand sparkle
  const seg=(x0,y0,x1,y1,p)=>{if(p<=0)return;const x=x0+(x1-x0)*p,y=y0+(y1-y0)*p;c.beginPath();c.moveTo(x0,y0);c.lineTo(x,y);c.lineWidth=3;c.strokeStyle='#5ad18f';c.stroke();if(p<1&&mg==0)return[x,y,x1-x0,y1-y0,min(1,p*6,(1-p)*6)]}
  const tips=[]
  tips.push(seg(128,12,128,122,sp[0]))
  tips.push(seg(12,67,244,67,sp[1]))
  tips.push(seg(70,12,70,122,sp[2]));seg(186,122,186,12,sp[2])
  // faces in every pane
  for(let k=0;k<8;k++){
    let x,y,r,s=1
    const st=mv.filter(v=>v>=1).length,nx=st<3?st+1:3,a=L[k][st],b=L[k][nx],u=st<3?mv[st]:0
    if(!a&&!b)continue
    if(!a){if(u<=0)continue;[x,y,r]=b;s=u<1?min(1,u*1.6)+sin(u*P)*.25:1}
    else if(b&&u>0){x=a[0]+(b[0]-a[0])*u;y=a[1]+(b[1]-a[1])*u;r=a[2]+(b[2]-a[2])*u}
    else[x,y,r]=a
    if(mg>0){const o=L[0][0];if(k){s*=1-mg}x+=(o[0]-x)*mg;y+=(o[1]-y)*mg;r+=(o[2]-r)*mg}
    if(s<=.02)continue
    const hop=done?-abs(sin(t*6*P+k*.8))*4:0
    mini(c,x,y+hop,r*s,k,((i+k*3)%13)==0)}
  // girl at the bottom, wand raised
  const hx=128,hy=190,sw=SP.reduce((a,[p,q])=>a+sin(sg(t,p-.04,q)*P),0)
  c.save();c.translate(hx,hy);c.scale(.7,.7)
  for(const f of[-1,1]){el(c,f*44,-56,20);fs(c,H);c.beginPath();c.arc(f*44,-56,11,P*.9,P*1.8);c.lineWidth=3;c.strokeStyle=Hd;c.stroke()}
  c.beginPath();c.moveTo(-50,-10);c.bezierCurveTo(-56,20,-50,36,-38,40);c.lineTo(38,40);c.bezierCurveTo(50,36,56,20,50,-10);fs(c,Hd)
  c.restore()
  c.beginPath();c.moveTo(hx-22,218);c.bezierCurveTo(hx-50,222,hx-58,232,hx-60,244);c.lineTo(hx+60,244);c.bezierCurveTo(hx+58,232,hx+50,222,hx+22,218);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-14,218);c.lineTo(hx,234);c.lineTo(hx+14,218);c.lineWidth=3;c.strokeStyle=Jd;c.stroke()
  c.save();c.translate(hx,hy);c.scale(.7,.7)
  hd(c,S)
  face(c,mg>0?{e:['#c2410c','#ffb07a'],ly:-6,pp:.8,m:'o',mo:1.1,br:.8,bc:Hd}:done?{ex:'happy',m:'grin',mo:1.1,br:.4,bc:Hd}:{e:['#c2410c','#ffb07a'],ly:-6,lx:3,m:sw>.3?'smug':'cat',br:.2,bc:Hd})
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,22)
  qs(c,[50,22,46,-6,40,2,32,-16,20,-4,10,-22,0,-6,-10,-22,-20,-4,-32,-16,-40,2,-46,-6,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  // wand arm: swings with every split, the tip sparkle flies along the line
  const wx=hx+66,wy=196-sw*8,tp=tips.find(p=>p);let ang=-.45+sin(t*4*P)*.08
  if(tp)ang+=(Math.atan2(tp[0]-wx,wy-tp[1])-ang)*tp[4]
  c.beginPath();c.moveTo(hx+40,230);c.quadraticCurveTo(hx+64,232,wx,wy);st(c,13,J,3.2)
  const L2=34,ex=wx+sin(ang)*L2,ey=wy-cos(ang)*L2
  c.beginPath();c.moveTo(wx,wy);c.lineTo(ex,ey);st(c,4,'#ffe7a0',2.5);el(c,wx,wy+2,8,7.5);fs(c,S,3.2)
  star(c,ex,ey,9+sw*3,'#ffe14d',2.5)
  for(const p of tips)if(p){const d=Math.hypot(p[2],p[3]);for(let k=1;k<4;k++){el(c,p[0]-p[2]/d*k*9+(k%2?3:-3)*(p[3]?1:0),p[1]-p[3]/d*k*9+(k%2?3:-3)*(p[2]?1:0),3-k*.5);fs(c,'#fff36b',0)}star(c,p[0],p[1],10,'#fff36b',2.5)}
}
