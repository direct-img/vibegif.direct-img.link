// a girl with curly afro puffs and a mint sweater waits on a Promise ticket while its pending dots blink, it shakes and resolves, a present springs out and she fist-pumps and cheers
// tags: excited, happy, anime, coding, gift, celebration
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
const cl=(c,x,y,r,n=9,b=.2,ry=r,ph=0)=>{c.beginPath();for(let j=0;j<=n*10;j++){const a=j/(n*10)*2*P,q=1-b+b*Math.abs(Math.sin(a*n/2+ph));c.lineTo(x+Math.cos(a)*r*q,y+Math.sin(a)*ry*q)}c.closePath()}
export const frames=30,delay=72,rim=4
const SK='#8d5a3c',H='#2e1d1b',Hl='#5e3d33',J='#8fe0c0',Jd='#56b896',
  K=['#ff6f91','#ffd34d','#7ee0ff','#a1f08f','#c99bff']
export default(c,t,i)=>{
  // timeline: wait (dots blink) -> shake -> pop -> cheer -> poof back to a fresh ticket
  const sh=t>.4&&t<.5?sin(i*2.9)*2.5*sg(t,.4,.48):0,pop=t>=.5&&t<.92,ch=sg(t,.5,.56)*(1-sg(t,.84,.92)),
    hop=ch*abs(sin((t-.5)*P*6))*7,hx=94,hy=96-hop,TX=146+sh,TY=194-hop*.6,tr=-.03+ch*.12+sh*.02
  const pr=t<.5?0:t<.62?1.25*sin(min(1,(t-.5)/.09)*P*.62)/sin(P*.62)-.25*E((t-.59)/.03):1-sg(t,.86,.9)
  // afro puffs + scrunchies behind the head
  c.save();c.translate(hx,hy)
  for(const f of[-1,1]){cl(c,f*38,-54,25,9,.16,25,f);fs(c,H);c.lineWidth=2.5;c.strokeStyle=Hl
    for(const[u,v]of[[-8,-6],[6,-12],[2,6],[-12,8]]){c.beginPath();c.arc(f*38+u,-54+v,4.5,P*1.1,P*1.9);c.stroke()}
    el(c,f*27,-38,8,5,f*.7);fs(c,'#ff7fae',3)}
  c.restore()
  // sweater body, stretching a little on the hops
  c.beginPath();c.moveTo(hx-24,hy+46);c.bezierCurveTo(hx-48,hy+52,hx-56,hy+76,hx-56,206);c.lineTo(hx-58,236);c.lineTo(hx+58,236);c.lineTo(hx+56,206);c.bezierCurveTo(hx+56,hy+76,hx+48,hy+52,hx+24,hy+46);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-40,206);c.quadraticCurveTo(hx-30,214,hx-34,232);c.moveTo(hx+42,200);c.quadraticCurveTo(hx+34,214,hx+38,232);ln(c,2.5,Jd)
  for(const f of[-1,1]){c.beginPath();c.moveTo(0+hx,hy+50);c.quadraticCurveTo(hx+f*24,hy+48,hx+f*22,hy+62);c.quadraticCurveTo(hx+f*10,hy+64,hx,hy+50);fs(c,'#fff',3)}
  // raised fist arm when cheering
  const fy=hy+20-ch*44+ch*sin((t-.5)*P*12)*6,fx=hx-46-ch*4
  if(ch>.05){c.beginPath();c.moveTo(hx-38,hy+62);c.quadraticCurveTo(fx-14,hy+60,fx,fy);st(c,15,J);el(c,fx,fy-3,10,9);fs(c,SK,3.2)
    c.beginPath();c.moveTo(fx-6,fy-9);c.lineTo(fx-6,fy-2);c.moveTo(fx,fy-10);c.lineTo(fx,fy-3);ln(c,2)}
  // head
  c.save();c.translate(hx,hy);c.rotate(-.04+ch*.08)
  hd(c,SK)
  const bk=abs(t-.24)<.025,wide=t>.4&&t<.5
  face(c,ch>.5?{ex:t<.7?'star':'happy',e:['#7a3e0a','#ffc04d'],m:'open',mo:1.1,br:.4,bl:1.6}
    :{e:['#7a3e0a','#ffc04d'],lx:4,ly:wide?3:5,pp:wide?.75:1,op:bk?.12:wide?1:.88,m:wide?'o':'line',br:wide?.9:.5,bl:1.3})
  // curly hairline, a couple of loose curls and gold hoops
  c.beginPath();c.moveTo(-48,6);c.bezierCurveTo(-52,-46,-28,-66,0,-66);c.bezierCurveTo(28,-66,52,-46,48,6)
  qs(c,[48,6,44,-8,35,-16,22,-21,8,-23,-6,-23,-20,-21,-33,-16,-43,-8,-48,6],.32);c.closePath();fs(c,H)
  c.lineWidth=2.5;c.strokeStyle=Hl;for(const[u,v]of[[-24,-44],[0,-52],[22,-42],[-36,-28],[34,-26]]){c.beginPath();c.arc(u,v,5,P*1.1,P*1.9);c.stroke()}
  c.beginPath();c.arc(-4,-22,5,-P*.4,P*.9);c.moveTo(12,-21);c.arc(16,-20,4,P,P*2.2);ln(c,3,H)
  for(const f of[-1,1]){el(c,f*46,33,4.5,6.5);ln(c,2.6,'#e8b630')}
  c.restore()
  // present springs out from behind the ticket
  if(pr>.01){const px=TX+46,py=TY-30-56*min(1,pr)+(t>.62?sin((t-.62)*P*8)*3:0)
    c.save();c.translate(px,py);c.scale(pr*1.25,pr*1.25);c.rotate(sin(t*P*8)*.08)
    for(const f of[-1,1]){c.beginPath();c.moveTo(0,-26);c.bezierCurveTo(f*24,-44,f*26,-24,0,-26);fs(c,K[1],3)}
    rr(c,-22,-14,44,34,4);fs(c,K[0]);rr(c,-26,-24,52,13,4);fs(c,'#ff8fab')
    c.beginPath();c.rect(-5,-24,10,44);fs(c,K[1],2.5);el(c,0,-26,5,4);fs(c,K[1],2.5)
    c.restore()}
  // pop burst
  if(t>.49&&t<.6){const p=(t-.49)/.11;c.lineWidth=4;c.strokeStyle=O;c.globalAlpha=1-p*p
    for(let k=0;k<7;k++){const a=-P*.95+k*P*.15,r=30+p*30;c.beginPath();c.moveTo(TX+cos(a)*r,TY-20+sin(a)*r*.8);c.lineTo(TX+cos(a)*(r+12),TY-20+sin(a)*(r+12)*.8);c.stroke()}
    c.globalAlpha=1}
  // arms reach behind the ticket, hands grip its ends (left one leaves to fist-pump)
  const R=[TX+60*cos(tr)-6*sin(tr),TY+60*sin(tr)+6*cos(tr)],Lh=[TX-60,TY+6]
  c.beginPath();c.moveTo(hx+38,hy+62);c.quadraticCurveTo(hx+60,hy+104,R[0]-8,R[1]);st(c,15,J)
  if(ch<=.05){c.beginPath();c.moveTo(hx-38,hy+62);c.quadraticCurveTo(hx-48,hy+100,Lh[0]+6,Lh[1]);st(c,15,J)}
  // the ticket: notched stub with blinking pending dots, then resolved
  c.save();c.translate(TX,TY);c.rotate(tr)
  c.beginPath();c.moveTo(-58,-30);c.lineTo(58,-30);c.arc(58,0,10,-P/2,P/2,1);c.lineTo(58,30);c.lineTo(-58,30);c.arc(-58,0,10,P/2,-P/2,1);c.closePath();fs(c,pop?'#d9ffe0':'#fff1b8')
  c.setLineDash([4,4]);rr(c,-44,-22,88,44,4);ln(c,1.6,pop?'#5bbf7a':'#e0b04a');c.setLineDash([])
  tx(c,'Promise',0,-9,19,'#6b3fa0',0)
  if(t>=.51&&t<.92)tx(c,'resolved ✓',0,11,14,'#1f8a4c',0,'DejaVu Sans')
  else{tx(c,'pending',-9,11,14,'#a0742a',0);for(let k=0;k<3;k++){el(c,25+k*7,14,2.4);fs(c,k<(i>>1)%4?'#a0742a':'rgba(160,116,42,.25)',0)}}
  c.restore()
  const hand=(x,y)=>{el(c,x,y,9.5,8.5);fs(c,SK,3.2)}
  hand(...R)
  if(ch<=.05){hand(...Lh);if(t<.4){const u=(i%4<2)?-3:0;c.beginPath();c.moveTo(Lh[0]+4,Lh[1]-6+u);c.lineTo(Lh[0]+4,Lh[1]-1+u);ln(c,2)}}
  // confetti while cheering, then a poof cloud swaps the present back for a fresh ticket
  if(ch>.05)for(let k=0;k<9;k++){const p=((t-.5)*2.4+k/9)%1,x=120+k*15+sin(p*8+k)*8,y=20+p*90
    c.save();c.translate(x,y);c.rotate(p*9+k);c.globalAlpha=ch;rr(c,-4,-2,8,4,1);fs(c,K[k%5],1.5);c.restore()}
  c.globalAlpha=1
  if(t>.85&&t<.98){const p=(t-.85)/.13;c.globalAlpha=1-p*p
    for(const[u,v,r]of[[-14,0,14],[12,-6,16],[2,14,13],[20,14,11],[-20,16,10]]){el(c,TX+46+u*(1+p*.6),TY-86+v*(1+p*.6),r*(.6+p*.6));fs(c,'#f4f2fa',2.5)}
    c.globalAlpha=1}
  if(t>.84||t<.04)drop(c,hx+52,hy-30+(t>.5?(t-.84)*60:(t+.16)*60),.9,.3)
}
