// a freckled girl with a messy navy pixie cut, round glasses and a mustard cardigan swats the red squiggly worms crawling under her code with a fly swatter, they go flat for a second, then wriggle right back
// tags: angry, anime, coding, editor, bugs, swat
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x)
const sg=(t,a,b)=>E((t-a)/(b-a))
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
const spk=(c,x,y,r,f='#fff3a0',w=2.5)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.32:r;c.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q)}c.closePath();fs(c,f,w)}
export const frames=28,delay=75,rim=4
const SK='#fff0e2',H='#27305c',Hd='#161c3c',Hl='#5a6aa8',J='#f2b632',Jd='#c98a12'
const K=['#ff79a8','#ffd166','#7ee0ff','#a1f08f','#c99bff']
const worm=(c,x,y,L,amp,ph,fl)=>{
  const pt=s=>[x+s*L,y+sin(s*P*3+ph)*amp]
  c.beginPath();for(let s=0;s<=1;s+=.04)c.lineTo(...pt(s));ln(c,9.5);c.beginPath();for(let s=0;s<=1;s+=.04)c.lineTo(...pt(s));ln(c,5,'#ff3b4f')
  const[hx,hy]=pt(1);el(c,hx+2,hy,6.5,6);fs(c,'#ff3b4f',2.5)
  if(fl){c.beginPath();for(const f of[-1,1]){c.moveTo(hx+f*2-1.5,hy-3);c.lineTo(hx+f*2+1.5,hy-.5);c.moveTo(hx+f*2+1.5,hy-3);c.lineTo(hx+f*2-1.5,hy-.5)}ln(c,1.3)}
  else{el(c,hx+1,hy-1.5,1.2);fs(c,O,0);el(c,hx+5,hy-1.5,1.2);fs(c,O,0)}}
export default(c,t,i)=>{
  // raised -> wind-up -> SWAT -> worms flat -> they wriggle back, swatter goes back up
  const wu=sg(t,.24,.38),sw=sg(t,.38,.44),up=sg(t,.62,.86),hit=t>=.44&&t<.62,fl=sg(t,.43,.45)*(1-sg(t,.56,.76))
  const k1=sw*(1-up),hx=186-k1*6,hy=152,a=-1.3+wu*.3*(1-sw)-k1*1.05,hX=hx-28-k1*28+wu*6*(1-sw),hY=hy-58+k1*38-wu*4*(1-sw)
  // swatter arm: behind her head while raised, in front once it swings at the screen
  const swat=()=>{const sx=hX+cos(a)*56,sy=hY+sin(a)*56
    c.beginPath();c.moveTo(hx-30,hy+48);c.quadraticCurveTo(hx-46,(hy+48+hY)/2+6,hX,hY+6);st(c,14,J)
    c.beginPath();c.moveTo(hX,hY);c.lineTo(sx,sy);ln(c,9);c.beginPath();c.moveTo(hX,hY);c.lineTo(sx,sy);ln(c,4,'#3fa3ff')
    c.save();c.translate(sx,sy);c.rotate(a+P/2);rr(c,-20,-28,40,38,9);fs(c,'rgba(63,163,255,.55)',3.5)
    c.save();rr(c,-20,-28,40,38,9);c.clip();c.beginPath();for(let k=-21;k<22;k+=7){c.moveTo(k,-30);c.lineTo(k,10);c.moveTo(-21,k-10);c.lineTo(21,k-10)}ln(c,1.4,'#1f6fd0');c.restore()
    c.restore();el(c,hX,hY+2,9,8.5);fs(c,SK,3.2)}
  // editor window with three code lines
  rr(c,10,16,150,132,10);fs(c,'#1d2133');rr(c,10,16,150,20,[10,10,0,0]);fs(c,'#3a3f57',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,24+k*13,26,4);fs(c,f,0)})
  for(let k=0;k<3;k++){const y=50+k*32,ind=[0,14,14][k],w=[[22,34,18],[16,40,22],[30,20,28]][k];let x=20+ind
    for(const[j,L]of w.entries()){rr(c,x,y-4,L,8,4);fs(c,K[(j+k*2)%5],0);x+=L+6}}
  // squiggles under the lines, wriggling (flattened right after the hit)
  for(const[k,x,L]of[[0,22,58],[1,46,62],[2,30,54],[2,96,44]]){const y=50+k*32+12,amp=4*(1-fl),ph=t*P*6+k*2+x
    worm(c,x+sin(t*P*2+k)*3,y,L,amp,ph,fl>.4)}
  if(t>.43&&t<.56){const p=(t-.43)/.13;for(let k=0;k<6;k++){const b=k*P/3+.3;spk(c,100+cos(b)*(34+p*16),92+sin(b)*(30+p*14),6*(1-p)+2,'#fff3a0',2)}}
  // girl: cardigan shoulders
  c.beginPath();c.moveTo(hx-22,hy+40);c.bezierCurveTo(hx-44,hy+46,hx-50,hy+66,hx-52,236);c.lineTo(hx+52,236);c.bezierCurveTo(hx+50,hy+66,hx+44,hy+46,hx+22,hy+40);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-16,hy+42);c.lineTo(hx,hy+76);c.lineTo(hx+16,hy+42);c.closePath();fs(c,'#fff',3)
  c.beginPath();c.moveTo(hx,hy+76);c.lineTo(hx,236);ln(c,2.5,Jd);el(c,hx-6,hy+84,2.5);fs(c,'#fff',1.6)
  if(k1<.5)swat()
  // head
  c.save();c.translate(hx,hy);c.scale(.9,.9);c.rotate(-.06-k1*.08)
  hd(c,SK)
  const ex=t>.4&&t<.5?{ex:'shut',m:'grit',mo:1,br:-1.2}:t>.56&&t<.92?{e:['#0f6b3a','#7ee8a2'],lx:-6,ly:1,op:.55,tl:-3,m:'frown',mo:1.1,br:.9}:{e:['#0f6b3a','#7ee8a2'],lx:-6,ly:0,op:.72,tl:4,m:'grit',mo:.9,br:-1.2}
  face(c,{...ex,bc:Hd,bl:.9,fr:'#d9926a'})
  // round glasses
  for(const f of[-1,1]){el(c,f*20,11,15,14);ln(c,2.8,'#6b3a2a');c.beginPath();c.moveTo(f*20-7,4);c.lineTo(f*20-2,0);ln(c,2.5,'rgba(255,255,255,.85)')}
  c.beginPath();c.moveTo(-5,9);c.quadraticCurveTo(0,6,5,9);c.moveTo(-35,8);c.lineTo(-45,4);c.moveTo(35,8);c.lineTo(45,4);ln(c,2.8,'#6b3a2a')
  // messy pixie cut with a cowlick
  c.beginPath();c.moveTo(-50,20);c.bezierCurveTo(-58,-40,-32,-66,0,-66);c.bezierCurveTo(32,-66,58,-40,50,20)
  qs(c,[50,20,48,-2,40,-10,34,-24,22,-8,14,-28,2,-12,-8,-30,-18,-10,-30,-26,-38,-6,-46,-12,-50,20],.22);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-6,-62);c.quadraticCurveTo(-4,-86,14,-82);c.quadraticCurveTo(2,-76,4,-62);fs(c,H,3)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*50,10);c.quadraticCurveTo(f*56,26,f*46,38);c.quadraticCurveTo(f*44,24,f*42,12);fs(c,H,3)}
  c.beginPath();c.arc(0,-24,40,P*1.25,P*1.5);ln(c,4.5,Hl)
  c.restore()
  if(t>.6&&t<.95)drop(c,hx+42,hy-36+(t-.6)*40,1)
  if(k1>=.5)swat()
  if(hit){c.lineWidth=4;c.strokeStyle=O;for(const b of[-2.6,-2.1,-1.5,-3.1,2.7]){c.beginPath();c.moveTo(100+cos(b)*46,94+sin(b)*42);c.lineTo(100+cos(b)*58,94+sin(b)*52);c.stroke()}
    if(t<.54)tx(c,'SMACK!',70,136,19,'#ffd34d',5.5)}
}
