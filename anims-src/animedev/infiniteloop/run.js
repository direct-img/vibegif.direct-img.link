// a sweaty, panting girl with long pink twin-tails, a white sweatband and a red-and-white gym uniform runs laps around an ∞-shaped track forever, a +1 pops on the LAP ∞ board every time she passes the finish line
// tags: tired, anime, coding, exercise, sweat, fast
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+Math.cos(a+f)*a*.6,y+2+ly+Math.sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<10;k++){const q=k%2?2.4:6.5,a=k*P/5-P/2;c.lineTo(x+lx-1+Math.cos(a)*q,y+ly-1+Math.sin(a)*q)}fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,mx=0,my=0}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    const q={...o,...(f<0?o.L:o.R)},b=q.br??br;eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*b);c.quadraticCurveTo(f*20,-15-b,f*28,-12+3*b);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(mx,32+my);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'||m=='open'){const w=m=='open'?10:m=='grin'?9:6.5,h=m=='open'?1.8:1.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*h,0,w*h*.87);c.quadraticCurveTo(-w*.6,w*h,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*h*.83,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='pant'){el(c,0,2,6,7);fs(c,'#a3304a',2.2/mo);c.save();el(c,0,2,6,7);c.clip();el(c,0,8,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=30,delay=70,rim=4
const SK='#ffd9c4',H='#ff8fc8',Hd='#e0559a',Hl='#ffd1ea',CX=128,CY=200,A=82,B=.62
const lem=s=>{const d=1+sin(s)**2;return[CX+A*cos(s)/d,CY+A*B*sin(s)*cos(s)/d]}
export default(c,t,i)=>{
  // infield grass inside both loops, then the track ribbon with a lane line and the finish strip
  const tr=()=>{c.beginPath();for(let k=0;k<=120;k++)c.lineTo(...lem(k/120*2*P));c.closePath()}
  tr();c.fillStyle='#8fdc7a';c.fill('evenodd')
  tr();ln(c,30);tr();ln(c,23,'#e9704e');c.setLineDash([7,7]);tr();ln(c,2.5,'#fff');c.setLineDash([])
  c.save();c.translate(CX+A-1,CY);for(let r=0;r<2;r++)for(let k=0;k<4;k++){c.fillStyle=(r+k)%2?'#fff':'#2b1d2e';c.fillRect(-6+r*6,-11.5+k*5.75,6,5.75)}c.restore()
  // LAP ∞ scoreboard on a post, with a +1 popping on each lap
  for(const f of[-1,1]){c.beginPath();c.moveTo(CX+f*30,40);c.lineTo(CX+f*30,64);ln(c,9);c.beginPath();c.moveTo(CX+f*30,40);c.lineTo(CX+f*30,64);ln(c,3.5,'#a9b6c9')}
  rr(c,CX-46,8,92,36,8);fs(c,'#2c2f48');rr(c,CX-40,13,80,26,5);fs(c,'#141626',2.5)
  tx(c,'LAP',CX-15,26,16,'#ffd23a',0);tx(c,'∞',CX+20,25,27,'#5dff8a',0,'DejaVu Sans')
  if(t<.3){const p=t/.3;c.globalAlpha=min(1,(1-p)*3);tx(c,'+1',CX+66+p*4,34-p*14,24,'#5dff8a',5.5,'DejaVu Sans');c.globalAlpha=1}
  // runner position on the ∞, facing the way she runs, a touch smaller on the far side
  const s=-t*2*P,[x,y]=lem(s),[x2]=lem(s-.05),d=x2>=x?1:-1,sc=.63+(y-CY)/(A*B*.36)*.03,ph=t*P*2*9
  c.save();c.translate(x,y);c.scale(sc*d,sc)
  // legs in a sprint cycle
  for(const k of[0,1]){const a=sin(ph+k*P),hx=(k?6:-6),th=a*.75,kn=th-.2-max(0,-a)*1.1
    const kx=hx+sin(th)*26,ky=-56+cos(th)*26,fx=kx+sin(kn)*28,fy=ky+cos(kn)*28
    c.beginPath();c.moveTo(hx,-58);c.lineTo(kx,ky);c.lineTo(fx,fy);st(c,14,SK);rr(c,fx-10,fy-6,26,13,[6,8,3,3]);fs(c,'#fff');c.beginPath();c.moveTo(fx-7,fy+3);c.lineTo(fx+12,fy+3);ln(c,3,'#ff4b5c')}
  c.save();c.rotate(.18);c.translate(0,-150)
  // twin-tails bouncing behind her
  const by=abs(sin(ph))*-4
  for(const f of[-1,1]){const w=sin(ph+f*.8)*.18;c.save();c.translate(-6+f*36,-34+by);c.rotate(.42+w+f*.1)
    c.beginPath();c.moveTo(-10,0);c.bezierCurveTo(-30,22,-26,58,-8,90);c.quadraticCurveTo(-6,74,2,70);c.quadraticCurveTo(12,46,12,22);c.quadraticCurveTo(12,8,10,0);c.closePath();fs(c,f<0?Hd:H)
    c.beginPath();c.moveTo(-6,14);c.quadraticCurveTo(-16,44,-8,72);ln(c,2.5,f<0?'#b8407a':Hd);c.restore()}
  // arms swing: back one behind the shirt, front one over it
  const arm=(k,col)=>{const a=sin(ph+k*P+P)*.85;c.save();c.translate(k?10:-6,50);c.rotate(-a);c.beginPath();c.moveTo(0,0);c.lineTo(0,20);c.lineTo(14,24);st(c,11,SK);c.beginPath();c.moveTo(0,0);c.lineTo(0,9);st(c,13,'#fff');el(c,16,23,7,6.5);fs(c,SK,3);c.restore()}
  arm(0)
  // gym shirt + bloomers
  rr(c,-26,72,52,24,8);fs(c,'#c8283c')
  c.beginPath();c.moveTo(-22,42);c.bezierCurveTo(-36,48,-36,70,-34,84);c.lineTo(34,84);c.bezierCurveTo(36,70,36,48,22,42);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(-14,44);c.quadraticCurveTo(0,56,14,44);ln(c,4,'#ff4b5c');rr(c,-30,76,60,6,2);fs(c,'#ff4b5c',2.5)
  arm(1)
  // head bobbing with each stride
  c.save();c.translate(0,-4+by);c.rotate(-.12)
  hd(c,SK)
  face(c,{e:['#5a1a8a','#c99bff'],lx:6,ly:2,op:.58,tl:-3,m:'pant',mo:1.2,br:1.2,bc:Hd,bl:1.7,mx:3})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,46,-2,38,4,32,-16,20,0,10,-20,-2,-4,-12,-22,-24,-4,-34,-16,-42,4,-50,26],.2);c.closePath();fs(c,H)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*50,-12);c.quadraticCurveTo(f*58,22,f*46,44);c.quadraticCurveTo(f*42,22,f*38,2);fs(c,H,3);el(c,f*38,-30,8,7);fs(c,'#ff4b5c',3)}
  c.beginPath();c.moveTo(-50,-16);c.quadraticCurveTo(0,-34,50,-16);ln(c,12);c.beginPath();c.moveTo(-50,-16);c.quadraticCurveTo(0,-34,50,-16);ln(c,6.5,'#fff')
  c.beginPath();c.arc(0,-24,40,P*1.25,P*1.45);ln(c,4,Hl)
  c.restore()
  c.restore()
  // sweat flying off behind her
  for(let k=0;k<3;k++){const p=(t*5+k/3)%1;drop(c,-30-p*34,-200-k*16+p*p*40,1.5*(1-p*.5),-.8)}
  c.restore()
}
