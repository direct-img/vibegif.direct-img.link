// a girl with long wavy pink hair, a big navy bow and a striped tee hits Enter on her very first program, a tiny smiling globe pops up on the monitor and waves back, she squeals with joy
// tags: happy, excited, anime, coding, computer, love
// ---
const P=Math.PI,O='#2b1d2e',{sin:S,cos:C,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,lw=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+16-lw);c.quadraticCurveTo(x,y+18-lw*1.3,a,y+16-lw);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+C(a+f)*a*.6,y+2+ly+S(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  if(lw){c.beginPath();c.moveTo(a+f*2,y+16-lw);c.quadraticCurveTo(x,y+18-lw*1.3,b-f*2,y+16-lw);c.lineWidth=2.4;c.stroke()}
  else{c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()}
}
const face=(c,o)=>{
  const{m='smile',mo=1,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    const q=f>0&&o.r?{...o,...o.r}:o,{br=0,bt=0,bc=O}=q
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br+3*bt);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br-3*bt);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='D'){c.moveTo(-9,-3);c.quadraticCurveTo(0,-1,9,-3);c.quadraticCurveTo(8,13,0,13);c.quadraticCurveTo(-8,13,-9,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,12,6.5,4.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const heart=(c,x,y,s,f='#ff5c8a',w=3)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-16,-2,-9,-15,0,-6);c.bezierCurveTo(9,-15,16,-2,0,8);fs(c,f,w/s);el(c,-5,-5,2.4,1.6,-.6);fs(c,'rgba(255,255,255,.75)',0);c.restore()}
const spark=(c,x,y,s,f='#ffe066',w=2.5)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<8;k++){const r=k%2?3.2:10,a=k*P/4;c.lineTo(S(a)*r,-C(a)*r)}c.closePath();fs(c,f,w/s);c.restore()}
export const frames=24,delay=75,rim=4
const H='#ff8fc4',Hd='#e05f9c',Hl='#ffd3ea',Sk='#d99a6c',J='#fff',N='#2d3f8c'
export default(c,t,i)=>{
  const en=sg(t,.04,.08)*(1-sg(t,.1,.14)),txt=t<.92?min(13,max(0,(t-.13)/.15*13|0)):0,gl=t<.3?0:t<.4?E((t-.3)/.1)*(1+.3*S((t-.3)/.1*P)):1-sg(t,.86,.93)
  const sq=sg(t,.38,.44)*(1-sg(t,.84,.92)),hop=sq*abs(S(t*P*12))*-8
  // monitor
  rr(c,122,20,124,122,12);fs(c,'#e6e9f2');rr(c,131,29,106,98,6);fs(c,'#1e2440',3)
  rr(c,174,142,20,16,0);fs(c,'#c8ccd9',3);el(c,184,162,32,7);fs(c,'#e6e9f2')
  el(c,232,133,2.5);fs(c,'#7cf29a',0)
  c.font='bold 13px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle='#8aa0d8'
  c.fillText('> run',138,40)
  const s='Hello,World!'.slice(0,txt)
  c.font='bold 15px DejaVu Sans Mono';c.fillStyle='#7cf29a';c.fillText(s.slice(0,6),138,58);c.fillText(s.slice(6),138,76)
  if(t<.13&&i%2==0){rr(c,180,33,8,14,1);fs(c,'#e8ecff',0)}
  // the tiny globe waving hello
  if(gl>.01){c.save();c.translate(200,104);c.scale(gl*1.15,gl*1.15);c.translate(0,S(t*P*8)*1.5)
    const w=S(t*P*10)*.55
    c.save();c.translate(17,-8);c.rotate(.5+w);c.beginPath();c.moveTo(0,0);c.lineTo(0,-15);st(c,5,'#3f9ae8',2.5);el(c,0,-19,6.5);fs(c,'#fff',2.6);c.restore()
    el(c,0,0,21);fs(c,'#4fb3ff',3.2)
    c.save();el(c,0,0,21);c.clip();c.fillStyle='#7ee27a'
    for(const[x,y,a,b]of[[-12,-10,9,6],[-6,8,7,9],[12,-2,6,11],[14,14,8,5]]){el(c,x+(t*40%42)-21,y,a,b);c.fill();el(c,x+(t*40%42)+21,y,a,b);c.fill()}
    c.restore();el(c,0,0,21);fs(c,'rgba(0,0,0,0)',3.2)
    for(const f of[-1,1]){c.beginPath();c.arc(f*7,-1,3.2,P*1.1,P*1.9);ln(c,2.6);el(c,f*12,5,3.5,2);fs(c,'rgba(255,110,140,.6)',0)}
    c.beginPath();c.arc(0,4,5,.2,P-.2);ln(c,2.4)
    c.restore()
    if(gl>.9){spark(c,226,48,.4+.3*S(t*P*6),'#fff6a8',2);c.save();c.translate(158,104);c.rotate(-.15);tx(c,'hi!',0,0,14,'#fff',4,'DejaVu Sans');c.restore()}}
  // long wavy hair behind
  const hx=78,hy=100+hop
  c.save();c.translate(hx,hy);c.scale(.9,.9)
  c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-74,30,-50,70,-72,112);c.quadraticCurveTo(-56,122,-44,112);c.quadraticCurveTo(-30,126,-16,114);c.lineTo(16,114);c.quadraticCurveTo(30,126,44,112);c.quadraticCurveTo(56,122,72,112);c.bezierCurveTo(50,70,74,30,50,-20);c.closePath();fs(c,Hd)
  // big bow peeking over the head
  for(const f of[-1,1]){c.beginPath();c.moveTo(0,-62);c.bezierCurveTo(f*20,-96,f*50,-90,f*44,-64);c.quadraticCurveTo(f*30,-52,0,-62);fs(c,N,3.2);c.beginPath();c.moveTo(f*8,-66);c.quadraticCurveTo(f*24,-80,f*36,-74);ln(c,2,'#5b70c8')}
  c.restore()
  // striped tee
  c.save();c.beginPath();c.moveTo(hx-28,138+hop);c.bezierCurveTo(hx-56,144+hop,hx-62,180,hx-62,236);c.lineTo(hx+62,236);c.bezierCurveTo(hx+62,180,hx+56,144+hop,hx+28,138+hop);c.closePath();fs(c,J);c.clip()
  c.fillStyle=N;for(let y=150;y<240;y+=14)c.fillRect(0,y+hop,256,6)
  c.restore();c.beginPath();c.moveTo(hx-28,138+hop);c.bezierCurveTo(hx-56,144+hop,hx-62,180,hx-62,236);c.moveTo(hx+28,138+hop);c.bezierCurveTo(hx+56,144+hop,hx+62,180,hx+62,236);ln(c,3.5)
  c.beginPath();c.moveTo(hx-18,137+hop);c.quadraticCurveTo(hx,150+hop,hx+18,137+hop);ln(c,3.5)
  // head
  c.save();c.translate(hx,hy);c.scale(.9,.9);c.rotate(sq?S(t*P*6)*.06:.04)
  hd(c,Sk)
  face(c,sq>.5?{ex:'shut',m:'D',mo:1.1,br:.8,bc:Hd,blc:'rgba(255,70,120,.5)'}:{e:['#086060','#62efd6'],lx:4+gl*2,ly:t<.12?4:-1,m:gl>.5?'o':'smile',br:gl>.3?1:0,bc:Hd,blc:'rgba(255,90,120,.38)'})
  c.beginPath();c.moveTo(-50,28);c.bezierCurveTo(-58,-42,-32,-70,0,-70);c.bezierCurveTo(32,-70,58,-42,50,28)
  qs(c,[50,28,46,-6,38,6,30,-14,20,0,12,-20,0,-6,-12,-24,-24,-12,-34,-26,-44,0,-50,28],.17);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.25,P*1.5);ln(c,5,Hl)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*46,-6);c.bezierCurveTo(f*56,20,f*40,40,f*52,70);c.quadraticCurveTo(f*36,50,f*38,-2);fs(c,H,3)}
  c.restore()
  // keyboard in front of her
  pg(c,34,204,152,204,158,234,28,234);fs(c,'#e6e9f2')
  for(let r=0;r<2;r++)for(let k=0;k<6;k++){rr(c,40+k*15-r*3,209+r*11,11,8,2);fs(c,'#c8ccd9',1.4)}
  rr(c,130,207+en*3,18,20,3);fs(c,'#ff7aa8',1.8)
  // arms: pressing Enter, then fists up at her cheeks squealing
  const arm=(sx,sy,x,y,f)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(sx+f*14,(sy+y)/2+12,x,y);st(c,14,J);c.beginPath();c.moveTo(sx,sy);c.lineTo(sx+f*4,sy+12);ln(c,10,J);el(c,x,y,8.5,8);fs(c,Sk,3.2)}
  if(sq>.5){arm(hx-34,150+hop,hx-26,134+hop,-1);arm(hx+34,150+hop,hx+26,134+hop,1)
    for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*21,131+hop);c.lineTo(hx+f*31,131+hop);ln(c,2)}}
  else{arm(hx-34,152,66,214,-1);arm(hx+34,152,139,206-6*sg(t,0,.04)+en*8,1)}
  // squeal hearts and exclaims
  if(sq>.5){for(let k=0;k<4;k++){const p=(t*2.2+k/4)%1,a=-2.6+k*.45;heart(c,hx+C(a)*(56+p*26),hy-10+S(a)*(36+p*26),.55+.25*S(p*P),k%2?'#ff8fc4':'#ff5c8a')}
    c.save();c.translate(22,64+hop);c.rotate(-.3);tx(c,'!!',0,0,22,'#ffd23a',5,'DejaVu Sans');c.restore()}
}
