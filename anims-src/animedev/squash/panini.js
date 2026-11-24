// girl with black afro puffs, a red polka-dot bandana and a yellow apron presses a tall stack of commit slices flat in a panini press, holds up the one golden toasted commit and takes happy bites
// tags: happy, anime, coding, git, food, cooking
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k,hop=(t,a,b)=>t<a||t>b?0:sin((t-a)/(b-a)*P)
// limb: a thick outlined quadratic stroke
const lb=(c,x0,y0,x1,y1,x2,y2,w,f)=>{c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(x1,y1,x2,y2);st(c,w,f)}
// head shape, centred on the eyes' row, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// hair cap with a fringe: p runs from the right temple across to the left one
const cap=(c,p,col,k=.18,hl)=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,p,k);c.closePath();fs(c,col)
  if(hl){c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);sk(c,5,hl);c.beginPath();c.arc(0,-24,40,P*1.56,P*1.64);sk(c,5,hl)}}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,r=k%2?2.2:7.5;c.lineTo(x+lx+cos(q)*r,y+ly+sin(q)*r)}c.closePath();fs(c,'#fff',0);el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6*pp**.5,y+ly-4*pp**.5,3.4*pp**.5,4.2*pp**.5);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// face: o.e iris colours, ex eye style, m mouth, mo mouth scale, br brow worry(+)/anger(-), by brow lift, bc brow colour, fr freckles
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,by=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.32)',0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br-by);c.quadraticCurveTo(f*20,-15-br-by,f*28,-12+3*br-by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='open'){c.moveTo(-6,-3);c.quadraticCurveTo(0,-5,6,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-6,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='gasp'){c.moveTo(0,-6);c.bezierCurveTo(8,-6,8,12,0,12);c.bezierCurveTo(-8,12,-8,-6,0,-6);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,12,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='chew'){el(c,0,0,5,3.2);fs(c,'#a3304a',2.2/mo)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#fff3a0',w=2.5)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;if(w)c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
// open hand, fingers pointing up (rotate with a), thumb to the left (mirror with s<0)
const palm=(c,x,y,a,col,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,abs(s))
  for(const L of[0,1]){for(const[q,l]of[[-.55,10],[-.18,12],[.18,12],[.52,10],[-1.45,8]]){c.beginPath();c.moveTo(0,1);c.lineTo(sin(q)*l,-cos(q)*l);c.lineWidth=L?4.4:10.4;c.strokeStyle=L?col:O;c.stroke()}el(c,0,3,L?7:10.4,L?6.5:9.9);c.fillStyle=L?col:O;c.fill()}
  c.restore()}
export const frames=26,delay=85,rim=4
const S='#8a5536',Hc='#22171c',Hl='#4a3540',A='#ffd23a',Ad='#e0a816',I=['#7a3d00','#ffc04d']
const PX=232,BT=214,X0=136,X1=212,SL=[['#f6c86b','a1f'],['#ffde59','c3e'],['#ff7a6b','7b2'],['#8fe07c','e90'],['#f6c86b','4d5']]
// top plate (floating hinge): rear bottom y and tilt over the loop: lift, press, hold, open
const plate=t=>t<.08?[144,.1]:t<.14?[lp(144,136,sg(t,.08,.14)),lp(.1,.13,sg(t,.08,.14))]:t<.32?[lp(136,206,sg(t,.14,.32)**1.6),lp(.13,0,sg(t,.14,.32))]
  :t<.44?[206,0]:t<.5?[lp(206,144,sg(t,.44,.5)),lp(0,.1,sg(t,.44,.5))]:[144,.1]
const toast=(c,x,y,a,s,nb)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  const xl=-30+nb*11,path=()=>{c.beginPath();c.moveTo(xl,-17);c.lineTo(24,-17);c.quadraticCurveTo(31,-17,31,-10);c.lineTo(31,10);c.quadraticCurveTo(31,17,24,17);c.lineTo(xl,17)
    for(let j=0;j<3;j++){const y0=17-j*34/3,y1=17-(j+1)*34/3;nb?c.quadraticCurveTo(xl+7,(y0+y1)/2,xl,y1):c.lineTo(xl,y1)}c.closePath()}
  path();fs(c,'#eaa54c');c.save();path();c.clip()
  for(let k=-3;k<4;k++){c.beginPath();c.moveTo(k*12-10,-20);c.lineTo(k*12+6,20);sk(c,3.5,'#a8601f')}
  c.beginPath();c.rect(-40,-17,80,34);c.lineWidth=7;c.strokeStyle='#c27a2c';c.stroke();c.restore();path();sk(c,3.5)
  el(c,4,0,7.5);fs(c,'#fff',3);el(c,4,0,3.5);fs(c,'#ff7a3d',0);c.restore()}
export default(c,t,i)=>{
  const[pb,th]=plate(t),tn=Math.tan(th),ly=x=>pb-(PX-x)*tn,gp=(x,y)=>[PX+x*cos(th)-y*sin(th),pb+x*sin(th)+y*cos(th)]
  const shut=t>=.2&&t<.46,eat=t>=.6&&t<.88,ate=t>=.88
  // girl's body
  const gx=58,lean=sg(t,.14,.3)*(1-sg(t,.4,.5)),up=hop(t,.08,.2)
  c.save();c.translate(gx+lean*5,0)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*9,206);c.lineTo(f*10,232-up*3);st(c,10,S);el(c,f*11,236-up*3,10,5.5);fs(c,'#ff5a6e',3)}
  c.beginPath();c.moveTo(-16,138);c.quadraticCurveTo(-30,140,-29,156);c.lineTo(-30,212);c.quadraticCurveTo(0,218,30,212);c.lineTo(29,156);c.quadraticCurveTo(30,140,16,138);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(-22,160);c.lineTo(-20,152);c.lineTo(20,152);c.lineTo(22,160);c.lineTo(27,212);c.quadraticCurveTo(0,218,-27,212);c.closePath();fs(c,A)
  c.beginPath();c.moveTo(-18,152);c.lineTo(-12,138);c.moveTo(18,152);c.lineTo(12,138);sk(c,3,Ad)
  rr(c,-11,178,22,16,4);fs(c,Ad,2.5);c.beginPath();c.moveTo(0,190);c.bezierCurveTo(-7,184,-4,180,0,184);c.bezierCurveTo(4,180,7,184,0,190);fs(c,'#ff5a6e',0)
  // head: puffs, bandana, curly bangs
  c.save();c.translate(0,100-up*4+lean*4);c.rotate(.04+lean*.06);c.scale(.8,.8)
  for(const f of[-1,1]){c.beginPath();for(let k=0;k<12;k++){const a=k/12*2*P,r=25+(k%2)*4;c.lineTo(f*35+cos(a)*r,-64+sin(a)*r)}c.closePath();fs(c,Hc)
    c.beginPath();c.arc(f*35-6,-72,11,P*1.1,P*1.5);sk(c,3.5,Hl)}
  hd(c,S)
  const o=t<.14?{e:I,lx:6,ly:2,m:'smile'}:t<.44?{e:I,ex:t>.2?'shut':0,lx:6,m:'grit',br:-.8,op:.8}:t<.6?{e:I,ex:'star',m:'grin',mo:1.1,lx:5,ly:1}
    :eat?{e:I,ex:'happy',m:'chew',mo:1.1}:{e:I,ex:'happy',m:'cat',mo:1.2}
  face(c,o)
  if(eat)for(const f of[-1,1]){el(c,f*33,24,9,7);fs(c,'rgba(255,110,120,.35)',0)}
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-40,-32,-66,0,-66);c.bezierCurveTo(32,-66,58,-40,50,24)
  for(let k=0;k<=12;k++){const x=50-k*100/12,y=k==0||k==12?24:-14-(k%2)*7-abs(6-k)*.8;c.quadraticCurveTo(x+4,y-8,x,y)}c.closePath();fs(c,Hc)
  c.beginPath();c.arc(0,-26,40,P*1.25,P*1.4);sk(c,4,Hl)
  // bandana with dots and a knot on top
  c.beginPath();c.moveTo(-48,-22);c.quadraticCurveTo(0,-74,48,-22);st(c,12,'#e8384f',3.5)
  for(let k=1;k<8;k++){const u=k/8,x=lp(-48,48,u),y=(1-u)*(1-u)*-22+2*u*(1-u)*-74+u*u*-22;el(c,x,y,2,2);fs(c,'#fff',0)}
  for(const f of[-1,1]){c.beginPath();c.moveTo(0,-50);c.quadraticCurveTo(f*10,-66,f*18,-60);c.quadraticCurveTo(f*12,-50,0,-50);fs(c,'#e8384f',3)}
  el(c,0,-50,5,5);fs(c,'#e8384f',3)
  c.restore();c.restore()
  // panini press: rear arm, base, light
  c.beginPath();c.moveTo(236,224);c.lineTo(PX+3,pb-8);st(c,6,'#5b5f73',3);el(c,236,224,5);fs(c,'#3b3f52',2.5)
  for(const x of[128,222]){rr(c,x-6,232,12,10,3);fs(c,'#3b3f52',3)}
  rr(c,112,212,128,22,7);fs(c,'#6b7086');rr(c,120,213,112,5,2);fs(c,'#3b3f52',0)
  el(c,226,224,3.5);fs(c,shut?(i%2?'#ff4f5e':'#ffb0b8'):'#7a2a35',2)
  // the stack squashed under the plate, the flat toast, or new slices dropping in
  if(t<.32||ate){
    const hs=ate?60:min(60,BT-ly(X0)),hr=ate?60:min(60,BT-ly(X1)),bu=(1-(hs+hr)/120)*10
    SL.forEach(([f,h],j)=>{
      const q=ate?sg(t,.88+j*.022,.93+j*.022):1;if(q<=0)return
      const y0l=BT-j*hs/5,y1l=BT-(j+1)*hs/5,y0r=BT-j*hr/5,y1r=BT-(j+1)*hr/5,dy=(1-q)*-16
      c.beginPath();c.moveTo(X0-bu,y0l+dy);c.lineTo(X1+bu,y0r+dy);c.quadraticCurveTo(X1+6+bu,(y0r+y1r)/2+dy,X1+bu,y1r+dy);c.lineTo(X0-bu,y1l+dy);c.quadraticCurveTo(X0-6-bu,(y0l+y1l)/2+dy,X0-bu,y0l+dy);fs(c,f,3)
      const hh=(y0l-y1l)*.7+(y0r-y1r)*.3
      if(hh>5){c.save();c.translate(0,(y0l+y1l)/2+dy+(y0r-y0l)*.2);c.scale(1,min(1,hh/12));el(c,148,0,4.2,4.2);fs(c,'#fff',2.2);tx(c,h,170,0,10,O,0);c.restore()}})
  }else if(t<.5){rr(c,X0-6,BT-8,X1-X0+12,8,4);fs(c,'#eaa54c',3)}
  else if(t<.6){const q=sg(t,.5,.6);toast(c,lp(174,gx+38,q),lp(208,128,q)-hop(t,.5,.6)*46,lp(.4,0,q),lp(.5,1,q),0)}
  // top plate with its handle
  c.save();c.translate(PX,pb);c.rotate(th)
  rr(c,-106,-20,110,20,7);fs(c,'#7d8299');rr(c,-100,-5,98,5,2);fs(c,'#3b3f52',0)
  c.beginPath();c.moveTo(-96,-15);c.lineTo(-20,-15);sk(c,3,'#a9aec4')
  c.beginPath();c.moveTo(-106,-10);c.lineTo(-122,-10);st(c,5,'#9aa0b8',3);rr(c,-140,-17,22,13,6);fs(c,'#e8384f',3)
  el(c,2,-8,5);fs(c,'#3b3f52',2.5);c.restore()
  // steam while it's shut
  if(t>.22&&t<.54)for(let k=0;k<3;k++){const q=(t*4+k/3)%1,x=152+k*26,y=190-q*40,w=4+q*3
    c.globalAlpha=min(1,(1-q)*2.5,q*5);c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+w,y-5,x,y-10);c.quadraticCurveTo(x-w,y-15,x,y-20);st(c,3,'#fff',2.2);c.globalAlpha=1}
  // arms: both hands on the handle, then the toast up to her mouth
  const[px,py]=gp(-129,-10),sx=gx+lean*5,bite=hop(t,.62,.68)+hop(t,.72,.78)+hop(t,.82,.88),nb=t<.67?0:t<.77?1:2
  if(eat){const ox=gx+40-bite*10,oy=128
    toast(c,ox,oy,0,1,nb)
    for(const f of[-1,1]){const x=ox+f*24,y=oy+14;lb(c,sx+f*18,154,sx+f*24,184,x,y,10,'#fff');el(c,x,y,7.5,7);fs(c,S,3)}
    if(nb&&(t*10)%1<.6)for(let k=0;k<3;k++){const q=(t*10+k/3)%1;el(c,ox-32+k*4-q*10,oy+20+q*30,2.5,2);fs(c,'#eaa54c',1.8)}}
  else{const g=t>=.5&&t<.6?sg(t,.5,.56):0,rx=lp(px,sx+18,g),ry=lp(py,190,g)
    for(const f of[-1,1]){const hx=rx+f*7,hy=ry+(f>0?-1:2);lb(c,sx+f*18,154,sx+f*12+20,190,hx,hy,10,'#fff');el(c,hx,hy,7.5,7);fs(c,S,3)}}
  if(t>.5&&t<.6)for(let k=0;k<3;k++)spk(c,84+k*26,84-(k%2)*16,6+k%2*2,'#fff3a0')
  if(eat&&t>.66)for(let k=0;k<2;k++){const q=(t*4+k/2)%1;c.globalAlpha=1-q;c.save();c.translate(26+k*82,74-q*30);c.scale(.6,.6);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-14,-2,-8,-14,0,-6);c.bezierCurveTo(8,-14,14,-2,0,8);fs(c,'#ff6f91',3.5);c.restore();c.globalAlpha=1}
}
