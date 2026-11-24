// a girl with mint green pigtails and a striped tee hops along array boxes counting 0 1 2 3, takes one hop too many onto an empty slot that drops away, windmills her arms in midair and falls, then drops back in at index 0
// tags: playful, anime, coding, array, jump, bounce
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,hypot,floor}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lr=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
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
  if(ex=='line'){c.moveTo(x-11,y+3);c.lineTo(x+11,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  if(op>.5){c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()}
}
const face=(c,o)=>{
  const{m='smile',mo=1,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    const q={...o,...(f<0?o.L:o.R)},br=q.br||0
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br+(q.by||0));c.quadraticCurveTo(f*20,-15-br+(q.by||0),f*28,-12+3*br+(q.by||0));c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(o.mx||0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='D'){c.moveTo(-8,-3);c.quadraticCurveTo(0,-5,8,-3);c.quadraticCurveTo(7,12,0,12);c.quadraticCurveTo(-7,12,-8,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,11,6,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='tiny'){c.moveTo(-2.5,0);c.lineTo(2.5,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono',al='center')=>{c.font=`bold ${z}px ${fn}`;c.textAlign=al;c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const limb=(c,p,w,f)=>{c.beginPath();c.moveTo(p[0],p[1]);if(p.length==4)c.lineTo(p[2],p[3]);else c.quadraticCurveTo(p[2],p[3],p[4],p[5]);st(c,w,f)}
export const frames=36,delay=70,rim=4
const H='#7fe0c4',Hd='#3fae92',Hl='#d6fff3',S='#f2c9a0',EY=['#a0205a','#ff8ac0'],J='#ff7aa8',BY=192,G=1.3,W=58
export default(c,t,i)=>{
  t=(t+.1)%1
  // where she is: drop in, four hops, the bad fifth hop, hang, fall
  const hop=(a,b)=>sg(t,a,b),seg=[[.12,.2],[.22,.3],[.32,.4],[.42,.5]]
  let y=BY,sq=0,k=0,kf=0
  if(t<.1){const q=t/.1;y=-20+(BY+20)*q*q}
  for(const[a,b]of seg){if(t>=a){k++;const q=min(1,(t-a)/(b-a));kf=k-1+E(q);y=BY-sin(q*P)*18}}
  if(t>.84)kf=4*(1-sg(t,.84,.98))
  // camera pans along the row so she stays well inside the frame
  const o=90-39*kf,bx=j=>W*j+o,x=bx(kf)
  const land=[.1,.2,.3,.4,.5].map(a=>t>a&&t<a+.05?sin((t-a)/.05*P):0).reduce((a,b)=>a+b),wind=t>.52&&t<.76,fall=sg(t,.76,.86)
  if(t>.5){y=BY+(t>.76?((t-.76)/.1)**2*200:0)}
  sq=land*.18
  const gone=sg(t,.52,.62)
  // array boxes, the fifth one is an empty dashed slot that drops away
  const kl=t<.08?-1:[.2,.3,.4,.5].filter(b=>t>=b).length,mid=seg.some(([a,b])=>t>a&&t<b)
  for(let j=0;j<4;j++){const lit=j==kl;rr(c,bx(j)-26,BY,52,50,8);fs(c,lit?'#ffe066':'#dfe6ff');tx(c,''+j,bx(j),BY+25,28,lit?'#ff6a3d':'#5a6aa8',0)}
  c.save();if(t>.5){const d=gone,a=t<.52?0:min(1,(t-.52)/.18);c.translate(bx(4),BY+25+a*a*120);c.rotate(a*.8);c.translate(-bx(4),-BY-25)}
  c.globalAlpha=t>.84?sg(t,.84,.94):1;c.setLineDash([6,5]);rr(c,bx(4)-26,BY,52,50,8);ln(c,3,'#8a90a8');c.setLineDash([]);if(t<.5||t>.84)tx(c,'4',bx(4),BY+25,28,'#c0c4d6',0)
  c.restore();c.globalAlpha=1
  if(t>.5&&t<.6){c.beginPath();for(const[a,b]of[[-36,-10],[36,-10],[-30,12],[30,12]]){c.moveTo(bx(4)+a*.75,BY+25+b*.75);c.lineTo(bx(4)+a,BY+25+b)};ln(c,3)}
  // the girl
  c.save();c.translate(x,y);c.scale(G*(1+sq*.6),G*(1-sq))
  const air=y<BY-4&&!wind,A=t*2*P*8
  // legs and sneakers
  for(const g of[-1,1]){const kx=wind?g*8+sin(A+g)*6:g*6,ky=air?-6:0;c.beginPath();c.moveTo(g*6,-22);c.lineTo(kx,-6+ky);st(c,9,S,3);c.beginPath();c.ellipse(kx+g*2,ky-2,8,5,0,0,2*P);fs(c,'#fff',3);c.beginPath();c.moveTo(kx+g*2-6,ky-3);c.lineTo(kx+g*2+6,ky-3);ln(c,2,'#ff5a6a')}
  rr(c,-15,-30,30,12,4);fs(c,'#4a6fd0',3)
  // arms: up while hopping, windmilling when the floor is gone
  for(const g of[-1,1]){const a=wind?A*.6*g+g*1.5:air?g*2.3:g*.5,hx=g*13+sin(a)*22,hy=-46-cos(a)*22*(air||wind?1:-1)
    if(wind){c.beginPath();c.arc(g*13,-46,30,a*g>0?-P/2-g*a:0,0);c.beginPath();const b=-P/2+g*a;c.arc(g*13,-46,30,b-g*1.2,b,g<0);ln(c,2.4,'#9aa7c7')}
    c.beginPath();c.moveTo(g*13,-46);c.lineTo(hx,hy);st(c,8,J,3);el(c,hx,hy,5.5);fs(c,S,2.8)}
  c.beginPath();c.moveTo(-14,-50);c.quadraticCurveTo(0,-54,14,-50);c.lineTo(17,-26);c.lineTo(-17,-26);c.closePath();fs(c,'#fff')
  c.save();c.clip();c.fillStyle=J;for(const yy of[-48,-40,-32])c.fillRect(-20,yy,40,4);c.restore()
  c.beginPath();c.moveTo(-14,-50);c.quadraticCurveTo(0,-54,14,-50);c.lineTo(17,-26);c.lineTo(-17,-26);c.closePath();ln(c,3)
  // head
  c.save();c.translate(0,-80);c.scale(.6,.6)
  for(const g of[-1,1]){c.save();c.translate(g*48,8);c.rotate(g*(.3+(air?.3:0)+(wind?sin(A)*.3:0)));el(c,g*12,18,15,24);fs(c,H,3.5);el(c,0,-6,7,5);fs(c,'#ff5a6a',3);c.restore()}
  hd(c,S)
  face(c,wind||fall>0?{e:EY,ex:'dot',m:'D',mo:1.2,br:1.2,bc:Hd}:air?{e:EY,ex:'happy',m:'grin',bc:Hd}:{e:EY,lx:4,ly:2,m:'smile',mo:1.1,bc:Hd})
  c.beginPath();c.moveTo(-50,14);c.bezierCurveTo(-58,-46,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-46,50,14)
  qs(c,[50,14,44,-14,34,-6,28,-26,16,-12,8,-30,-4,-14,-14,-28,-22,-8,-32,-22,-42,-6,-50,14],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-28,40,P*1.24,P*1.44);ln(c,5,Hl)
  if(wind){drop(c,-58,-44,1.6)}
  c.restore()
  c.restore()
  // counting bubble
  const n=t<.76?kl:-1,say=n<0?'':n<4?''+n:t<.53?'4!':'!!'
  if(say){const bx2=kl<2?x+52:x-56,by2=y-128;c.save();c.translate(bx2,max(26,by2))
    el(c,0,0,say.length>1?22:18,17);fs(c,'#fff',3);tx(c,say,0,1,say.length>1?20:22,n<4?'#4a6fd0':'#ff4f6d',0);c.restore()}
}
