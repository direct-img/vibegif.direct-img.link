// a girl with a glossy black bob and red glasses in a teal cardigan draws a neat binary tree on the whiteboard for her interview, it flips itself upside down and she sweats bullets
// tags: anxious, anime, coding, interview, algorithm, nervous
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
export const frames=24,delay=90,rim=4
const H='#3d3858',Hd='#25213a',Hl='#8178b8',S='#ffe3d3',C='#27b5a2',Cd='#17867a',G='#e8453c',B='#2c47a8'
const N=[[84,40,'4'],[50,80,'2'],[118,80,'7'],[32,120,'1'],[66,120,'3'],[102,120,'6'],[136,120,'9']],L=[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]]
const bk=x=>1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t,i)=>{
  const dr=min(1,t/.36)*7,fl=sg(t,.4,.54),sw=t>.54&&t<.9,er=sg(t,.86,.96),wo=sg(t,.5,.56)*(1-sg(t,.86,.94))
  // whiteboard
  rr(c,10,10,150,146,8);fs(c,'#c3cad8');rr(c,16,16,138,134,4);fs(c,'#fbfdff',2.5)
  c.beginPath();c.moveTo(24,30);c.lineTo(40,24);c.moveTo(30,140);c.lineTo(46,134);c.lineWidth=3;c.strokeStyle='#e6ecf5';c.stroke()
  rr(c,22,154,124,8,3);fs(c,'#9aa3b5',3)
  rr(c,34,148,22,7,2);fs(c,'#e8453c',2.5);rr(c,60,148,22,7,2);fs(c,'#2c47a8',2.5)
  // tree, rotated about its middle
  c.save();rr(c,16,16,138,134,4);c.clip();c.globalAlpha=1-er
  c.font='bold 12px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle=G;c.fillText('invert()',22,26)
  const r=P*bk(fl)*(fl>0),z=1-.18*sin(fl*P)
  c.translate(84,82);c.rotate(r);c.scale(z,z);c.translate(-84,-80)
  for(const[a,b]of L){const p=min(1,max(0,dr-b+.6)/.6);if(p<=0)continue;const[x,y]=N[a],[X,Y]=N[b];c.beginPath();c.moveTo(x,y);c.lineTo(x+(X-x)*p,y+(Y-y)*p);c.lineWidth=3;c.strokeStyle=B;c.stroke()}
  N.forEach(([x,y,s],k)=>{const p=min(1,max(0,dr-k)*2.5);if(p<=0)return;const q=p<1?p*1.25-.25*p*p:1
    c.save();c.translate(x,y);c.scale(q,q);el(c,0,0,12);fs(c,'#fff',3,B);c.font='bold 14px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillStyle=B;c.fillText(s,0,1);c.restore()})
  c.restore()
  // spin lines while it flips
  if(fl>.05&&fl<.95){c.lineWidth=3.5;c.strokeStyle=O;for(const a of[0,P]){c.beginPath();c.arc(84,82,64,a+r-.9,a+r-.2);c.stroke()}}
  // back hair (bob)
  const hx=190,hy=100+(sw?sin(t*P*24)*1:0)
  c.save();c.translate(hx,hy);c.scale(.84,.84);c.rotate(-.06)
  c.beginPath();c.moveTo(-52,-8);c.bezierCurveTo(-62,30,-56,44,-50,52);c.quadraticCurveTo(0,60,50,52);c.bezierCurveTo(56,44,62,30,52,-8);fs(c,Hd)
  c.restore()
  // torso: cardigan over a white collared shirt
  c.beginPath();c.moveTo(168,138);c.bezierCurveTo(150,144,142,166,140,196);c.lineTo(138,238);c.lineTo(244,238);c.lineTo(242,196);c.bezierCurveTo(240,166,230,144,212,138);c.closePath();fs(c,C)
  pg(c,174,140,190,196,206,140);fs(c,'#fff',3)
  pg(c,176,139,190,150,183,158);fs(c,'#fff',2.5);pg(c,204,139,190,150,197,158);fs(c,'#fff',2.5)
  c.beginPath();c.moveTo(181,152);c.lineTo(190,196);c.lineTo(199,152);c.lineWidth=3;c.strokeStyle=O;c.stroke()
  for(const y of[176,196,216]){el(c,194+(y-176)*.05,y,2.6);fs(c,'#fff',2)}
  // head
  c.save();c.translate(hx,hy);c.scale(.84,.84);c.rotate(-.06)
  hd(c,S)
  const look=t<.4?{lx:-5,ly:-2}:{lx:-4,ly:0}
  if(t<.4)face(c,{e:['#5a2e12','#d6955a'],...look,m:'smile',mo:.8,br:.3,bc:Hd,op:.85})
  else if(!sw&&t<.88)face(c,{e:['#5a2e12','#d6955a'],lx:-3,pp:.55,m:'o',mo:1.3,br:-1,bc:Hd})
  else if(sw&&t<.86)face(c,{e:['#5a2e12','#d6955a'],lx:-5+sin(t*P*16)*2,pp:.6,m:'wave',mo:1.15,br:1.3,bc:Hd,op:.95})
  else face(c,{e:['#5a2e12','#d6955a'],ex:'calm',m:'cat',br:.6,bc:Hd})
  // glasses
  c.lineWidth=3.4;c.strokeStyle=G;for(const f of[-1,1]){rr(c,f*20-15,-5,30,28,9);c.stroke()}
  c.beginPath();c.moveTo(-5,6);c.quadraticCurveTo(0,3,5,6);c.stroke()
  c.fillStyle='rgba(255,255,255,.45)';for(const f of[-1,1]){pg(c,f*20-10,-2,f*20-4,-2,f*20-11,14,f*20-14,14);c.fill()}
  // blunt fringe
  c.beginPath();c.moveTo(-50,30);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,30)
  c.lineTo(46,30);c.quadraticCurveTo(46,-6,40,-14);qs(c,[40,-14,30,-12,20,-16,10,-12,0,-16,-10,-12,-20,-16,-30,-12,-40,-14],.12);c.quadraticCurveTo(-46,-6,-46,30);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.18,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.beginPath();c.arc(0,-26,40,P*1.62,P*1.74);c.stroke()
  // gloom lines
  if(wo>.1){c.save();c.globalAlpha=wo*.8;c.lineWidth=3;c.strokeStyle='#7d8cf0';for(const x of[-24,-12,0,12,24]){c.beginPath();c.moveTo(x,-44);c.lineTo(x,-24+(x%24?0:6));c.stroke()}c.restore()}
  c.restore()
  // sweat flying off
  if(sw){const p=(t-.54)/.36*3%1;drop(c,232+p*8,70-p*14,1,.4);drop(c,146-p*8,78-p*12,.8,-.4);drop(c,224,108+p*4,.7)}
  // drawing arm: marker hand points at the node being drawn, then drops and shakes
  const k=min(6,dr|0),f=E(dr-k),n0=N[k],n1=N[min(6,k+1)],sx=162,sy=160
  let hx2,hy2
  if(t<.38){const tx_=n0[0]+(n1[0]-n0[0])*f*(dr<7),ty_=n0[1]+(n1[1]-n0[1])*f*(dr<7),dx=tx_-sx,dy=ty_-sy,d=Math.hypot(dx,dy),R=58;hx2=sx+dx/d*R+cos(t*P*40)*3;hy2=sy+dy/d*R+sin(t*P*40)*3}
  else{const b=sg(t,.38,.46)*(1-sg(t,.93,1));hx2=118+52*b+(sw?sin(t*P*48)*2:0);hy2=124+76*b}
  c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(hy2>170?146:(sx+hx2)/2+6,hy2>170?200:(sy+hy2)/2+14,hx2,hy2);st(c,15,C)
  const ma=Math.atan2(hy2-sy,hx2-sx)
  c.save();c.translate(hx2,hy2);c.rotate(ma);rr(c,0,-4.5,24,9,3);fs(c,'#fff',2.8);rr(c,18,-4.5,8,9,2);fs(c,B,2.8);c.restore()
  el(c,hx2,hy2,9,8.5);fs(c,S,3.2)
}
