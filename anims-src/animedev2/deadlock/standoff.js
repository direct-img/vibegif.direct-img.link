// two girls locked in a standoff, a chestnut-haired hime-cut girl in a green blazer holding a pink key and a girl with a long plum braid in a purple hoodie holding a blue key, each wants the other's, arms crossed, glaring with sparks between their eyes and sweat dripping, nobody moves
// tags: angry, anime, coding, rivals, stubborn, tense
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
const spk=(c,x,y,r,f='#fff3a0',w=2.5)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.32:r;c.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q)}c.closePath();fs(c,f,w)}
const cl=(c,x,y,r,n=9,b=.2,ry=r,ph=0)=>{c.beginPath();for(let j=0;j<=n*10;j++){const a=j/(n*10)*2*P,q=1-b+b*Math.abs(Math.sin(a*n/2+ph));c.lineTo(x+Math.cos(a)*r*q,y+Math.sin(a)*ry*q)}c.closePath()}
export const frames=20,delay=85,rim=4
const KA='#ff5f8f',KB='#3f9bff'
const key=(c,x,y,a,f,g)=>{c.save();c.translate(x,y);c.rotate(a)
  c.beginPath();c.moveTo(0,0);c.lineTo(0,34);ln(c,13);c.beginPath();c.moveTo(0,0);c.lineTo(0,34);ln(c,6,f)
  c.beginPath();c.moveTo(0,22);c.lineTo(7,22);c.moveTo(0,30);c.lineTo(9,30);ln(c,10);c.beginPath();c.moveTo(0,22);c.lineTo(7,22);c.moveTo(0,30);c.lineTo(9,30);ln(c,4,f)
  el(c,0,-6,11);fs(c,f,3.5);el(c,0,-6,4.5);fs(c,'#fff',3)
  if(g)spk(c,-9,-14,8*g,'#fff',2)
  c.restore()}
const lock=(c,x,y,f)=>{c.beginPath();c.arc(x,y-6,8,P,0);ln(c,9);c.beginPath();c.arc(x,y-6,8,P,0);ln(c,4,'#c9cdd8')
  rr(c,x-12,y-6,24,19,4);fs(c,f,3);el(c,x,y+1,2.6);fs(c,O,0);c.beginPath();c.moveTo(x,y+2);c.lineTo(x,y+8);ln(c,2.4)}
export default(c,t,i)=>{
  const T=t*2*P,sq=.5+.5*sin(T*2),gl=sg(t,.1,.2)*(1-sg(t,.3,.4))
  // thought bubbles: each pictures the padlock that needs the OTHER girl's key
  for(const[x,y,f,d]of[[30,30,KB,1],[226,30,KA,-1]]){
    el(c,x+d*20,62,4);fs(c,'#fff',2.5);el(c,x+d*12,52,6);fs(c,'#fff',2.5)
    cl(c,x,y,22,7,.14);fs(c,'#fff',3);lock(c,x,y,f)}
  const girl=(gx,gy,d,o)=>{
    c.save();c.translate(gx,gy);c.scale(.76,.76)
    o.back()
    // torso + crossed arms with the key poking up from the tucked hand
    c.beginPath();c.moveTo(-26,46);c.bezierCurveTo(-50,50,-58,80,-60,120);c.lineTo(-62,170);c.lineTo(62,170);c.lineTo(60,120);c.bezierCurveTo(58,80,50,50,26,46);c.closePath();fs(c,o.J)
    o.chest()
    c.save();c.translate(d*36,70);c.scale(1.3,1.3);key(c,0,-8,d*.22,o.K,o.g);c.restore()
    c.beginPath();c.moveTo(-d*52,82);c.quadraticCurveTo(-d*56,112,d*30,106);st(c,24,o.J)
    el(c,d*36,98,11,10);fs(c,o.S,3.2)
    c.beginPath();c.moveTo(d*54,80);c.quadraticCurveTo(d*58,118,-d*30,116);st(c,24,o.J)
    c.beginPath();c.moveTo(-d*24,104);c.lineTo(-d*24,128);ln(c,3,o.Jd)
    // head, leaning in toward the rival
    c.translate(0,0);c.rotate(d*.07)
    hd(c,o.S)
    c.save();c.translate(d*3,0)
    face(c,{e:o.e,lx:d*4,ly:1,op:.66-sq*.1,tl:4+sq*2,m:o.m,mo:1.1,br:-1.3,bc:o.Hd,bl:.8})
    c.restore()
    o.front()
    // sweat sliding down the temple
    const p=(t+o.ph)%1;if(p<.7)drop(c,-d*40,-18+p*44,1.1,-d*.2)
    c.restore()}
  // A: chestnut hime cut, green blazer, red ribbon
  const HA='#a8623a',HAd='#74401f'
  girl(66,104,1,{S:'#ffe6d6',J:'#3fa66b',Jd:'#2a7a4c',K:KA,e:['#8a1020','#ff6b6b'],m:'grit',Hd:HAd,ph:0,g:gl,
    back:()=>{c.beginPath();c.moveTo(-52,-20);c.bezierCurveTo(-60,40,-60,100,-58,150);c.lineTo(58,150);c.bezierCurveTo(60,100,60,40,52,-20);fs(c,HAd)},
    chest:()=>{c.beginPath();c.moveTo(-20,48);c.lineTo(0,90);c.lineTo(20,48);fs(c,'#fff',3);c.beginPath();c.moveTo(-8,56);c.lineTo(8,64);c.lineTo(8,56);c.lineTo(-8,64);c.closePath();fs(c,'#e8343f',2.5)},
    front:()=>{c.beginPath();c.moveTo(-50,40);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,40);c.lineTo(38,40);c.lineTo(38,-4);c.lineTo(-38,-4);c.lineTo(-38,40);c.closePath();fs(c,HA)
      c.beginPath();c.moveTo(-36,-6);c.lineTo(36,-6);ln(c,2.5,HAd);c.save();c.translate(-30,-40);c.scale(.8+sq*.3,.8+sq*.3);c.beginPath();for(const a of[0,1,2,3]){const u=cos(a*P/2+P/4),v=sin(a*P/2+P/4);c.moveTo(u*3,v*3);c.quadraticCurveTo(u*9-v*3,v*9+u*3,u*10,v*10)}ln(c,6);ln(c,3,'#ff3b4f');c.restore();c.beginPath();c.arc(0,-26,40,P*1.2,P*1.45);ln(c,5,'#d99a6a')
      for(const f of[-1,1]){c.beginPath();c.moveTo(f*26,-4);c.lineTo(f*26,-18);ln(c,2,HAd)}}})
  // B: plum braid over the shoulder, purple hoodie, star clip
  const HB='#4a2d63',HBd='#2e1b40'
  girl(190,104,-1,{S:'#b0754c',J:'#9b6bdc',Jd:'#6e45ad',K:KB,e:['#8a5a00','#ffd23a'],m:'frown',Hd:HBd,ph:.45,g:sg(t,.6,.7)*(1-sg(t,.8,.9)),
    back:()=>{c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-56,30,-50,50,-42,56);c.lineTo(42,56);c.bezierCurveTo(50,50,56,30,50,-14);fs(c,HBd)},
    chest:()=>{for(const f of[-1,1]){c.beginPath();c.moveTo(f*10,52);c.lineTo(f*12,84);ln(c,3,'#fff');el(c,f*12,86,3);fs(c,'#fff',2)}},
    front:()=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
      qs(c,[50,26,44,-6,34,-2,26,-20,12,-6,2,-24,-12,-8,-22,-22,-34,-4,-42,-10,-50,26],.2);c.closePath();fs(c,HB)
      c.beginPath();c.arc(0,-26,40,P*1.25,P*1.5);ln(c,4.5,'#8a63b0')
      for(let k=0;k<6;k++){el(c,46+sin(k*1.3)*2,24+k*15,10.5,9.5,.2);fs(c,HB,3);c.beginPath();c.moveTo(40+sin(k*1.3)*2,20+k*15);c.quadraticCurveTo(46,26+k*15,52,22+k*15);ln(c,2,'#8a63b0')}el(c,47,116,7,5.5);fs(c,'#ffd23a',2.5);c.beginPath();c.moveTo(42,122);c.lineTo(38,136);c.moveTo(47,122);c.lineTo(47,138);c.moveTo(52,122);c.lineTo(56,136);ln(c,5,HB)
      c.save();c.translate(36,-40);c.rotate(.3);c.beginPath();for(let k=0;k<10;k++){const q=k%2?4.5:10,a=k*P/5-P/2;c.lineTo(cos(a)*q,sin(a)*q)}c.closePath();fs(c,'#ffd23a',2.6);c.restore()}})
  // crackling glare sparks meeting in the middle
  const ey=111,z=(o,w,f)=>{c.beginPath();c.moveTo(106,ey+o);for(let k=1;k<=8;k++)c.lineTo(106+k*5.5,ey+o+(k<8?((k+i)%2?-6:6)*(1+((k*7+i*3)%3)*.3):0));ln(c,w,f)}
  for(const o of[-5,5]){z(o,8);z(o,3.5,i%2?'#ffe44d':'#fff6a0')}
  spk(c,128,ey,8+4*sq,'#fff6a0',2.5)
}
