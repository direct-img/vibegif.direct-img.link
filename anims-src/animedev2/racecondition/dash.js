// two racing girls, thread 1 with a sky-blue bob and red headband in a yellow jersey and thread 2 with long straight black hair in an orange jersey, dash in from both sides and grab the same cookie at the exact same moment, it crumbles to bits and they stare in shock
// tags: anime, coding, cookie, food, fast, shocked
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
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
export const frames=24,delay=85,rim=4
const G=230,Z=.74
export default(c,t,i)=>{
  // ready -> dash -> both grab -> crumble -> shock -> shuffle back, a new cookie pops in
  const run=E((t-.1)/.24)**1.6*(t<.8?1:1-sg(t,.8,.96)),grab=t>.34&&t<.44,cr=t>=.43,shock=t>.44&&t<.9,back=t>.8&&t<.96
  const pop=t>.94?sg(t,.94,1)*1.15:t<.04?1.15-.15*sg(t,0,.04):cr?0:1,ph=t*P*12
  const girl=(x,d,o)=>{
    const lean=(t>.1&&t<.36?.18:shock?-.06:.06)*d,mv=t>.1&&t<.36||back
    c.save();c.translate(x,G-150*Z);c.scale(Z,Z)
    o.back()
    // legs: sprinting cycle while moving, planted otherwise
    for(const k of[0,1]){const a=mv?sin(ph+k*P)*.7*(back?-.5:1):k?-.12:.12
      c.save();c.translate((k?10:-10)*1,100);c.rotate(a);c.beginPath();c.moveTo(0,0);c.lineTo(0,34);st(c,15,o.SK);rr(c,-10+d*2,32,22,13,[6,6,3,3]);fs(c,'#fff');c.beginPath();c.moveTo(-8+d*2,40);c.lineTo(10+d*2,40);ln(c,3,o.J);c.restore()}
    c.rotate(lean)
    rr(c,-26,88,52,20,6);fs(c,'#2f3a6e')
    c.beginPath();c.moveTo(-22,44);c.bezierCurveTo(-36,48,-38,70,-36,96);c.lineTo(36,96);c.bezierCurveTo(38,70,36,48,22,44);c.closePath();fs(c,o.J)
    rr(c,-17,60,34,24,4);fs(c,'#fff',2.6);tx(c,o.n,0,73,18,'#2b1d2e',0)
    for(const f of[-1,1]){el(c,f*12-1,62,2);fs(c,'#c9c9d6',0)}
    // pumping back arm
    if(!(grab||shock)){const a=mv?sin(ph+P)*.9:.4;c.save();c.translate(-d*20,52);c.rotate(-d*a);c.beginPath();c.moveTo(0,0);c.lineTo(-d*4,30);st(c,13,o.J);el(c,-d*4,34,8,7.5);fs(c,o.SK,3);c.restore()}
    // head
    c.save();c.translate(0,0);c.rotate(lean*.4)
    hd(c,o.SK)
    c.save();c.translate(d*4,0)
    face(c,shock?(t<.62?{e:o.e,lx:d*2,ly:7,pp:.45,op:1,m:'o',mo:1.6,br:1.4,bc:o.Hd,bl:.8}:{e:o.e,lx:d*3,ly:7,op:.85,m:'wave',mo:1.1,br:1.2,bc:o.Hd,bl:1.4,tear:1}):
      grab?{e:o.e,lx:d*7,ly:3,op:1,pp:.8,m:'grit',br:-1,bc:o.Hd}:
      t>.1&&t<.36?{e:o.e,lx:d*7,ly:2,op:.8,tl:3,m:'grin',mo:.9,br:-.9,bc:o.Hd}:{e:o.e,lx:d*6,ly:3,ex:t>.96||t<.06?'star':0,m:'cat',mo:1.1,br:.2,bc:o.Hd,bl:1.3})
    if(shock&&t>=.62)for(const f of[-1,1]){const p=(t*3+f*.3)%1;drop(c,f*22,30+p*10,.6*(1-p*.4))}
    c.restore()
    o.front()
    c.restore()
    // reaching arm (in front)
    if(grab||shock||t>.26&&t<.36){const r=grab?1:shock?.75:sg(t,.26,.34),hxl=d*(30+r*16),hyl=56-r*4
      c.beginPath();c.moveTo(d*22,52);c.quadraticCurveTo(d*30,60-r*6,hxl,hyl);st(c,13,o.J);el(c,hxl+d*4,hyl,8.5,8);fs(c,o.SK,3)}
    c.restore()
    if(mv&&!back)for(let k=0;k<3;k++){c.beginPath();const y=G-110+k*22,L=14+k%2*8,q=x-d*(48+k*6);c.moveTo(q,y);c.lineTo(q-d*L,y);ln(c,3.2)}
    if(mv&&!back&&i%3==0){el(c,x-d*30,G-4,8,5);fs(c,'#f0ece4',2.5)}}
  // pedestal table
  c.beginPath();c.moveTo(128,G-56);c.lineTo(128,G-4);ln(c,13);c.beginPath();c.moveTo(128,G-56);c.lineTo(128,G-4);ln(c,6,'#c99a6e')
  el(c,128,G-2,18,5);fs(c,'#a3714a',3);el(c,128,G-58,30,7);fs(c,'#fff',3)
  // two racers: thread 1 from the left, thread 2 from the right
  const x1=45+run*36,x2=211-run*36
  girl(x1,1,{SK:'#f5cfae',J:'#ffd23a',Hd:'#2f78c4',n:'T1',e:['#1a5a2a','#6fdc8a'],
    back:()=>{c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-56,30,-50,46,-42,50);c.lineTo(42,50);c.bezierCurveTo(50,46,56,30,50,-14);fs(c,'#3f9de6')},
    front:()=>{c.beginPath();c.moveTo(-50,30);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,30)
      qs(c,[50,30,46,-2,38,4,30,-18,18,-2,8,-20,-4,-4,-14,-22,-26,-6,-36,-18,-44,4,-50,30],.2);c.closePath();fs(c,'#6cc4ff')
      c.beginPath();c.arc(0,-24,40,P*1.22,P*1.5);ln(c,5,'#d4f0ff')
      c.beginPath();c.moveTo(-48,-28);c.quadraticCurveTo(0,-58,48,-28);ln(c,9);c.beginPath();c.moveTo(-48,-28);c.quadraticCurveTo(0,-58,48,-28);ln(c,4.5,'#ff5a5a')}})
  girl(x2,-1,{SK:'#7a4b2e',J:'#ff7a3d',Hd:'#140c10',n:'T2',e:['#7a3a00','#ffb347'],
    back:()=>{const fl=t>.1&&t<.36?8:0;c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-58,30,-56,70,-52+fl,96);qs(c,[-52+fl,96,-34+fl,90,-18+fl,98,0+fl,90,18+fl,98,34+fl,90,52+fl,96],-.25);c.bezierCurveTo(56,70,58,30,50,-14);c.closePath();fs(c,'#231a26')},
    front:()=>{c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,22)
      qs(c,[50,22,44,-8,32,-2,26,-22,10,-4,0,-24,-10,-8,-22,-26,-32,-6,-42,-12,-50,22],.2);c.closePath();fs(c,'#231a26')
      c.beginPath();c.arc(0,-24,40,P*1.22,P*1.48);ln(c,5,'#5a4a66');el(c,26,-50,7,6);fs(c,'#ffd23a',3)}})
  // the cookie, or its crumbs
  const CX=128,CY=G-72
  if(!cr&&pop>.01){c.save();c.translate(CX+(grab?sin(i*3)*1.5:0),CY);c.scale(pop,pop);el(c,0,0,17,15);fs(c,'#e0a35a',3.2)
    for(const[u,v]of[[-7,-5],[5,-7],[8,4],[-4,6],[0,-1]]){el(c,u,v,2.6,2.2);fs(c,'#5a3220',0)}c.restore()
    if(t>.94||t<.08){const b=t>.5?sg(t,.94,1):1-sg(t,0,.08);spk(c,CX+24,CY-18,9*b,'#fff3a0');spk(c,CX-22,CY-12,6*b,'#fff3a0')}}
  if(cr){const p=sg(t,.43,.56),f=1-sg(t,.82,.94)
    c.globalAlpha=f
    for(let k=0;k<6;k++){const a=-P/2+(k-2.5)*.55,r=p*22,x=CX+cos(a)*r*1.3,y=CY+sin(a)*r+p*p*12+(k%2)*3
      c.save();c.translate(x,min(y,CY+8));c.rotate(k+p*2);pg(c,-7,-5,6,-6,8,4,-2,7,-8,2);fs(c,'#e0a35a',2.6);c.restore()}
    for(let k=0;k<10;k++){const x=CX-30+k*6.5,y=min(CY+12,CY-6+p*(18+k%3*6));el(c,x,y,1.8);fs(c,'#a8733a',0)}
    c.globalAlpha=1
    if(t<.52){const q=(t-.43)/.09;c.lineWidth=3.5;c.strokeStyle=O;for(let k=0;k<6;k++){const a=k*P/3+.5;c.beginPath();c.moveTo(CX+cos(a)*(20+q*10),CY+sin(a)*(18+q*10));c.lineTo(CX+cos(a)*(28+q*12),CY+sin(a)*(26+q*12));c.stroke()}}}
  // speech bubbles: both claim it, gasp, then trail off
  for(const[x,d]of[[x1,1],[x2,-1]]){const bx=x+d*6,by=44+(t<.36?sin(t*P*8+d)*2:0),s=t<.36||t>.94?'mine!':grab?'!!':t<.8?'!?':'...',w=s.length>2?58:38
    c.beginPath();c.roundRect(bx-w/2,by-14,w,28,12);c.moveTo(bx-4,by+13);c.lineTo(bx+d*2,by+24);c.lineTo(bx+6,by+13);fs(c,'#fff',3);rr(c,bx-w/2,by-14,w,28,12);fs(c,'#fff',0)
    tx(c,s,bx,by+1,s=='mine!'?16:18,s=='mine!'?(d>0?'#e0a000':'#ff6a2a'):'#ff4b5c',0,'DejaVu Sans')}
}
