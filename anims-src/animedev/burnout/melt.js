// an exhausted girl with a messy ash-blue bun in a baggy olive sweater slowly melts into a steaming puddle over her keyboard under a blinking low battery icon, then wobbles back up
// tags: tired, sad, anime, coding, exhausted, slow
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){c.save();c.translate(x+lx,y+ly+2);pg(c,...[...Array(10)].flatMap((_,k)=>{const r=k%2?3.2:8,a=k*P/5-P/2;return[cos(a)*r,sin(a)*r]}));fs(c,'#fff',0);c.restore()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
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
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=28,delay=[...Array(28)].map((_,k)=>k<3?140:85),rim=4
const H='#7e93bd',Hd='#5a6d96',Hl='#b7c6e6',S='#c08259',Sd='#9a6240',C='#8fae6c',Cd='#6c8a4c',I=['#27466b','#8fb3d9']
const bk=x=>1+2.2*(x-1)**3+1.2*(x-1)**2
export default(c,t,i)=>{
  const m=t<.9?sg(t,.1,.64):1-bk(min(1,(t-.9)/.1)),mm=max(0,m),by=208
  // desk
  rr(c,10,214,236,20,6);fs(c,'#c99a6e');c.beginPath();c.moveTo(16,222);c.lineTo(240,222);c.lineWidth=2;c.strokeStyle='#a87c52';c.stroke()
  const hs=.9,hy=118+52*m,hsx=hs*(1+.2*mm),hsy=hs*(1-.28*m)
  const HD=()=>{c.translate(128,hy);c.scale(hsx,hsy)}
  // back hair + messy bun
  c.save();HD()
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-58,34,-50,50,-38,54);c.lineTo(38,54);c.bezierCurveTo(50,50,58,34,50,0);c.closePath();fs(c,Hd)
  el(c,6,-74,22,18,.2);fs(c,H);c.beginPath();c.arc(6,-74,11,P*.9,P*1.9);c.lineWidth=2.6;c.strokeStyle=Hd;c.stroke()
  for(const[a,b,x,y]of[[-10,-86,-26,-100],[18,-88,34,-104],[24,-70,44,-74]]){c.beginPath();c.moveTo(a,b);c.quadraticCurveTo((a+x)/2+6,(b+y)/2,x,y);st(c,3,H,2.4)}
  c.restore()
  // baggy sweater + limp arms, squashed toward the desk as she melts
  c.save();c.translate(128,by);c.scale(1+.3*mm,1-.6*m);c.translate(-128,-by)
  c.beginPath();c.moveTo(104,152);c.bezierCurveTo(70,160,60,180,58,214);c.lineTo(198,214);c.bezierCurveTo(196,180,186,160,152,152);c.closePath();fs(c,C)
  c.beginPath();c.moveTo(104,154);c.quadraticCurveTo(128,170,152,154);c.lineWidth=5;c.strokeStyle=Cd;c.stroke()
  for(const f of[-1,1]){c.beginPath();c.moveTo(128+f*50,174);c.quadraticCurveTo(128+f*66,200,128+f*38,206);st(c,17,C);el(c,128+f*32,207,10,7);fs(c,S,3.2)}
  c.restore()
  // head
  c.save();HD()
  hd(c,S)
  const dead=m>.7
  face(c,dead?{e:I,ex:'swirl',m:'wave',mo:.9,br:1.2,bc:Hd,bl:.6}:m>.3?{e:I,op:.3,ly:3,m:'wave',mo:.8,br:1,bc:Hd,bl:.5}:{e:I,op:.55,ly:3,m:'frown',mo:.9,br:.8,bc:Hd,bl:.5})
  c.strokeStyle='rgba(110,70,130,.55)';c.lineWidth=2.4;for(const f of[-1,1]){c.beginPath();c.moveTo(f*20-8,26);c.quadraticCurveTo(f*20,30,f*20+8,26);c.stroke()}
  // messy fringe
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,46,-2,38,-14,32,4,22,-18,12,-2,4,-26,-6,-4,-18,-20,-28,0,-36,-16,-44,0,-50,26],.25);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.42);c.lineWidth=4.5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  // keyboard on the desk (in front of her)
  pg(c,52,196,204,196,214,216,42,216);fs(c,'#dfe3ee')
  for(let r=0;r<2;r++)for(let k=0;k<8;k++){rr(c,58+k*18.5-r*3+r*6,199+r*8,14,6,1.5);fs(c,'#fff',1.4)}
  // the puddle she becomes: sweater, skin and hair goo with drips over the desk edge
  if(mm>.02){const w=40+66*mm,hh=6+16*mm,wob=sin(t*P*6)*2*mm
    const goo=(col,w,h,y,dr)=>{c.beginPath();c.moveTo(128-w,y);c.bezierCurveTo(128-w,y-h-wob,128+w,y-h+wob,128+w,y)
      for(const[x,l]of dr){const X=128+x*w,L=l*mm*(1+.15*sin(t*P*4+x*9));c.lineTo(X+7,y);c.lineTo(X+7,y+L);c.arc(X,y+L,7,0,P);c.lineTo(X-7,y)}
      c.closePath();fs(c,col)}
    goo(C,w,hh,216,[[.7,14],[.3,24],[-.2,10],[-.6,20]])
    goo(C,w*.75,hh*1.2,214,[[.45,8],[-.4,10]])}
  // steam
  if(m>.25){const ht=hy-70*hsy;for(let j=0;j<3;j++){const p=(t*3+j/3)%1,x=[86,128,170][j];c.save();c.globalAlpha=sin(p*P)*min(1,(m-.25)*4);c.beginPath();for(let y=0;y<=36;y+=3)c.lineTo(x+sin(y*.2+p*6)*6,ht-4-p*30-y);st(c,4,'#fff',2.4);c.restore()}}
  // low battery hovering over her
  const blink=m>.6?i%2:i%4<3
  c.save();c.translate(52,34+sin(t*P*2)*3);rr(c,-24,-13,44,26,5);fs(c,'#fff',3.5);rr(c,20,-6,6,12,2);fs(c,O,0)
  if(blink){rr(c,-19,-8,m>.6?5:10,16,2);fs(c,'#ff3b4a',0)}
  if(m>.6){c.beginPath();c.moveTo(1,-9);c.lineTo(-4,1);c.lineTo(3,1);c.lineTo(-1,10);c.lineWidth=2.6;c.strokeStyle='#ff3b4a';c.stroke()}
  c.restore()
}
