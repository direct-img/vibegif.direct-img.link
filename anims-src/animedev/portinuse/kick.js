// a girl with a silver high ponytail and a red bomber jacket marches up carrying her app box, punts the smug squatter process blob out of the :3000 doorway and moves in, until it respawns
// tags: anime, coding, server, angry, proud, playful
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const pl=(c,...p)=>{c.beginPath();c.moveTo(p[0],p[1]);for(let j=2;j<p.length;j+=2)c.lineTo(p[j],p[j+1])}
const cv=(c,x,y,qx,qy,X,Y)=>{c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(qx,qy,X,Y)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='dot'){el(c,x,y+1,11,13);fs(c,'#fff',3.6);el(c,x+lx,y+1+ly,3,3.6);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp,11.5*pp);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='yell'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,9,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(7,2,0,6);c.quadraticCurveTo(-7,2,0,-9);fs(c,'#8fd8ff',2.5);c.restore()}
const bangs=(c,H,Hl,pts=[50,26,44,-8,36,6,30,-18,20,0,12,-20,2,-2,-6,-20,-16,-2,-24,-18,-34,4,-42,-8,-50,26])=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,pts,.18);c.closePath();fs(c,H);c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()}
export const frames=32,delay=75,rim=4
const S='#6e4026',H='#eef0f8',Hd='#b8bed6',Hl='#ffffff',J='#e8434f',Jd='#b52a38',SH='#2b2f45',BX='#e0b070',BXd='#b8844a',BL='#b4a8e0',BLd='#8a7cc0'
const blob=(c,x,y,r,sq,fly)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(1/sq,sq)
  c.beginPath();c.moveTo(-26,16);c.bezierCurveTo(-30,-10,-16,-30,0,-30);c.bezierCurveTo(16,-30,30,-10,26,16);c.quadraticCurveTo(0,22,-26,16);fs(c,BL)
  el(c,-8,-22,7,4,-.4);fs(c,'rgba(255,255,255,.55)',0)
  if(fly){for(const f of[-1,1]){c.beginPath();c.moveTo(f*12-4,-6);c.lineTo(f*12+4,2);c.moveTo(f*12+4,-6);c.lineTo(f*12-4,2);sk(c,2.6)}el(c,0,8,4,5);fs(c,'#7a2a4a',2.2)}
  else{for(const f of[-1,1]){c.beginPath();c.moveTo(f*11-5,-4);c.quadraticCurveTo(f*11,0,f*11+5,-4);sk(c,2.6)}c.beginPath();c.moveTo(-5,6);c.quadraticCurveTo(1,10,7,4);sk(c,2.4)
    for(const f of[-1,1]){el(c,f*20,4,4,2.4);fs(c,'rgba(255,120,160,.45)',0)}}
  c.restore()}
export default(c,t,i)=>{
  const T=t*2*P
  // where the girl is and what she's doing
  const walk1=sg(t,0,.2),walk2=sg(t,.46,.66),gx=t<.4?lp(-34,130,walk1):lp(130,190,walk2)
  const moving=(t<.2)||(t>.46&&t<.66),ph=moving?(t<.2?t/.2:(t-.46)/.2)*P*4:0
  const wind=sg(t,.22,.28)*(1-sg(t,.28,.31)),kick=sg(t,.28,.31)*(1-sg(t,.38,.46))
  const bob=moving?-abs(sin(ph))*4:wind*2
  const cl=sg(t,.72,.8)*(1-sg(t,.9,.98)) // door closed amount
  const launch=t>.3?(t-.3)/.14:0
  // the :3000 door
  rr(c,144,74,94,166,6);fs(c,'#8a5a3c')
  const g=c.createLinearGradient(0,84,0,236);g.addColorStop(0,'#3a3150');g.addColorStop(1,'#5b4b78')
  rr(c,154,86,74,152,3);fs(c,g,3)
  rr(c,150,40,82,30,6);fs(c,'#1d2133',3.5);tx(c,':3000',191,55.5,18,'#7cff9a',0)
  for(const x of[166,216]){pl(c,x,70,x,74);sk(c,3)}
  // squatter blob: lounging, kicked into orbit, back again after the door reopens
  if(t<.3)blob(c,191,214,0,1-wind*.12,0)
  else if(t<.46){const p=launch;blob(c,191+p*30,214-p*260+p*p*20,p*9,1+(p<.15?.2:0),1)}
  if(t>.93){const p=sg(t,.93,1);c.save();c.globalAlpha=p;blob(c,191,214+(1-p)*6,0,1,0);c.restore()}
  if(t<.22||t>.95)for(let k=0;k<3;k++){const p=(t*3+k/3)%1;c.globalAlpha=sin(p*P);tx(c,'z',206+p*16+k*2,186-p*30,10+p*6,'#fff',3);c.globalAlpha=1}
  // twinkle where it lands
  if(t>.44&&t<.56){const p=(t-.44)/.12,r=12*sin(p*P);c.beginPath();for(let k=0;k<8;k++){const a=k*P/4+p,q=k%2?r*.3:r;c.lineTo(214+cos(a)*q,22+sin(a)*q)}c.closePath();fs(c,'#ffe44d',2.6)}
  if(cl<=0){pg(c,154,86,140,96,140,228,154,238);fs(c,'#c48a5c')}
  // girl (shrinks a touch as she steps inside)
  if(t<.8){c.save();if(walk2>.6){c.beginPath();c.rect(0,87,256,170);c.clip()}const gs=1-.1*walk2;c.translate(gx,236);c.scale(gs,gs);c.translate(-gx,-236)
  const by=236+bob,hx=gx,hy=by-110
  // ponytail behind
  c.save();c.translate(hx-6,hy-24);c.rotate(-.5+sin(ph*2)*.15-kick*.3)
  c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-30,-6,-44,22,-40,48);c.quadraticCurveTo(-26,30,-12,26);c.quadraticCurveTo(-4,14,10,8);c.closePath();fs(c,H);c.restore()
  // legs: walking swing, wind-up, high kick
  const leg=(f,a)=>{const x=gx+f*8,y=by-36,ex=x+sin(a)*28,ey=y+cos(a)*28
    pl(c,x,y,ex,ey);st(c,11,SH);c.save();c.translate(ex,ey);c.rotate(-a);rr(c,-6,-2,17,10,5);fs(c,'#fff',3);rr(c,-6,5,17,4,2);fs(c,J,0);c.restore()}
  const sw=sin(ph)*.5
  leg(-1,moving?-sw:wind*.2-kick*.25)
  leg(1,moving?sw:-wind*.9+kick*1.75)
  // shorts + jacket
  c.beginPath();c.moveTo(gx-18,by-50);c.lineTo(gx+18,by-50);c.lineTo(gx+20,by-34);c.lineTo(gx-20,by-34);c.closePath();fs(c,SH)
  c.beginPath();c.moveTo(gx-14,by-84);c.quadraticCurveTo(gx-26,by-80,gx-24,by-46);c.lineTo(gx+24,by-46);c.quadraticCurveTo(gx+26,by-80,gx+14,by-84);c.closePath();fs(c,J)
  rr(c,gx-24,by-50,48,7,3);fs(c,Jd,2.6)
  // head
  c.save();c.translate(hx,hy);c.rotate(moving?sin(ph)*.04:-wind*.12+kick*.1);c.scale(.62,.62)
  c.beginPath();c.moveTo(-46,-10);c.bezierCurveTo(-56,30,-50,50,-40,58);c.lineTo(40,58);c.bezierCurveTo(50,50,56,30,46,-10);fs(c,Hd)
  hd(c,S)
  const mad=t>.18&&t<.3,hap=t>.38&&t<.92
  face(c,{e:['#8a1a5a','#ff7ac0'],ex:kick>.3?'shut':hap?'happy':0,op:mad?.62:.85,lx:mad?5:3,ly:1,br:mad?-1.2:0,tl:mad?2:0,m:kick>.3?'grit':hap?'grin':mad?'frown':'smile',mo:1.2,bs:'rgba(255,90,120,.3)'})
  bangs(c,H,Hd,[50,26,46,-8,40,6,34,-18,22,-2,14,-22,2,-4,-8,-22,-18,-4,-28,-20,-38,4,-44,-6,-50,26])
  c.beginPath();c.arc(0,-22,42,P*1.15,P*1.42);sk(c,5,Hl)
  rr(c,-16,-74,22,12,5);fs(c,J,3)
  if(mad){c.save();c.translate(36,-42);for(const a of[0,P/2,P,P*1.5]){c.save();c.rotate(a+.78);c.beginPath();c.moveTo(3,-9);c.quadraticCurveTo(3,-3,9,-3);sk(c,3.4,'#ff3a5a');c.restore()}c.restore()}
  c.restore()
  // app box held in both arms
  const bx=gx+4,byy=by-72+(moving?sin(ph*2)*1.5:0)+kick*-4
  rr(c,bx-24,byy,48,34,3);fs(c,BX);pg(c,bx-24,byy,bx-30,byy-8,bx-4,byy-8,bx,byy);fs(c,BXd,2.8);pg(c,bx+24,byy,bx+30,byy-8,bx+4,byy-8,bx,byy);fs(c,BXd,2.8)
  pl(c,bx-24,byy,bx+24,byy);sk(c,3);rr(c,bx-12,byy+10,24,14,2);fs(c,'#fff6e0',2.2);tx(c,'app',bx,byy+17.5,10,'#b8844a',0)
  for(const f of[-1,1]){el(c,bx+f*24,byy+20,7,6.5);fs(c,S,3)}
  c.restore()}
  // door swings shut over her, then reopens
  if(cl>0){const w=lp(-14,74,cl);pg(c,154,86,154+w,86+(1-cl)*10,154+w,238-(1-cl)*10,154,238);fs(c,'#c48a5c');if(cl>.6){el(c,218,166,4);fs(c,'#ffd34d',2.6);rr(c,166,100,50,40,4);sk(c,2.4,'#8a5a3c');rr(c,166,150,50,74,4);sk(c,2.4,'#8a5a3c')}}
  // kick impact
  if(t>.29&&t<.34){c.save();c.translate(178,204);for(let k=0;k<8;k++){const a=k*P/4;pl(c,cos(a)*20,sin(a)*20,cos(a)*32,sin(a)*32);sk(c,3.4)}c.restore();tx(c,'POW',178,178,18,'#ffe44d',5,'DejaVu Sans')}
}
