// a girl with a long lavender braid in a coral blazer climbs the career ladder past its JR, MID and SR rungs, waves proudly from the top, then slides all the way back down
// tags: proud, happy, anime, career, success, climb
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
export const frames=28,delay=75,rim=4
const H='#a57be0',Hd='#7651b8',Hl='#d9c2ff',S='#d8a47e',C='#ff7a68',Cd='#d4523f',T='#4a4f63',I=['#3f1b80','#b98cff']
const LB=[[1,'JR','#7ad67a'],[3,'MID','#5cc3ff'],[5,'SR','#ffc93c']]
export default(c,t,i)=>{
  const st_=.1,up=t<.6,top=t>=.6&&t<.84,sl=t>=.84
  const k=up?min(5,t/st_|0):6,f=up?t/st_-k:0,f2=sg(f,.15,.85)
  const n=up?k+f2:sl?6*(1-E((t-.84)/.16)):6
  const cam=up?t/st_:sl?n:6,ry=r=>236-(r-cam)*34,X0=80,X1=164,G=1.2
  // speed lines while sliding
  if(sl&&t<.97){c.lineWidth=3;c.strokeStyle=O;for(const[x,o]of[[40,0],[30,.5],[226,.3],[214,.75]]){const y=((t*900+o*240)%240);c.beginPath();c.moveTo(x,y);c.lineTo(x,y+30);c.stroke()}}
  // ladder rails and rungs (top cap at rung 7)
  const tp=ry(7)-12
  for(const x of[X0,X1]){c.beginPath();c.moveTo(x,max(tp,-10));c.lineTo(x,266);st(c,9,'#c98b4f',3.2)}
  for(let r=0;r<=7;r++){const y=ry(r);if(y<-10||y>270)continue;c.beginPath();c.moveTo(X0+4,y);c.lineTo(X1-4,y);st(c,7,'#e0a868',3)}
  // rank plaques hanging off the right rail
  for(const[r,s,col]of LB){const y=ry(r);if(y<-30||y>290)continue;const pass=n>r+.5,w=pass?sin(t*P*12)*.08*(n<r+1.5):0
    c.save();c.translate(X1+6,y);c.rotate(w);c.beginPath();c.moveTo(0,0);c.lineTo(12,6);c.lineWidth=3;c.strokeStyle=O;c.stroke()
    rr(c,10,-2,s.length*13+16,26,7);fs(c,col,3.2);tx(c,s,18+s.length*6.5,12,17,'#fff',4.5)
    if(pass){el(c,12,-2,8);fs(c,'#fff',2.6);c.beginPath();c.moveTo(8,-2);c.lineTo(11,1.5);c.lineTo(16,-5);c.lineWidth=2.6;c.stroke()}
    c.restore()}
  // top sparkle
  if(top||t<.62&&t>.58){const p=sg(t,.58,.7),y=ry(7)-20;c.save();c.globalAlpha=1-sg(t,.78,.84);for(let j=0;j<6;j++){const a=-P/2+(j-2.5)*.5,d=30+p*30;c.save();c.translate(122+cos(a)*d*1.5,y-74+sin(a)*d);c.scale(.6+p*.4,.6+p*.4);pg(c,...[...Array(8)].flatMap((_,q)=>{const r=q%2?3:9,b=q*P/4;return[cos(b)*r,sin(b)*r]}));fs(c,j%2?'#ffe14d':'#fff',2.5);c.restore()}c.restore()}
  // the girl, hips at hy
  const hy=236-(n-cam)*34-60,hx=122,ld=k%2,L=(x,y)=>[hx+(x-hx)/G,hy+(y-hy)/G],ly=y=>L(0,y)[1],lx=x=>L(x,0)[0]
  c.save();c.translate(hx,hy);c.scale(G,G);c.translate(-hx,-hy)
  const foot=s=>{ // s=0 left 1 right
    if(sl)return[hx+(s?18:-18),hy+48]
    if(top)return s==1?[hx+16,ly(ry(7))]:[hx-16,ly(ry(6))]
    const lead=s==ld,yL=ry(k+1),yT=ry(k)+(ry(k+2)-ry(k))*sg(f,.6,1)
    return[hx+(s?16:-16),ly(lead?yL:yT)]}
  // braid behind
  const bw=sl?-1:1
  // legs
  for(const s of[0,1]){const[fx,fy]=foot(s),d=s?1:-1,kx=hx+d*10+d*max(0,26-(fy-hy)*.5),ky=(hy+fy)/2
    c.beginPath();c.moveTo(hx+d*8,hy);c.quadraticCurveTo(kx+d*6,ky,fx,fy-6);st(c,13,T)
    c.beginPath();c.ellipse(fx+d*3,fy-4,10,6,0,0,2*P);fs(c,'#3b2a44',3)}
  // torso: coral blazer
  c.beginPath();c.moveTo(hx-14,hy-44);c.bezierCurveTo(hx-28,hy-40,hx-28,hy-20,hx-24,hy+4);c.lineTo(hx+24,hy+4);c.bezierCurveTo(hx+28,hy-20,hx+28,hy-40,hx+14,hy-44);c.closePath();fs(c,C)
  pg(c,hx-10,hy-44,hx,hy-22,hx+10,hy-44);fs(c,'#fff',2.6)
  c.beginPath();c.moveTo(hx-12,hy-43);c.lineTo(hx-2,hy-16);c.moveTo(hx+12,hy-43);c.lineTo(hx+2,hy-16);c.lineWidth=2.6;c.strokeStyle=Cd;c.stroke()
  el(c,hx,hy-8,2.6);fs(c,'#fff',2)
  const tilt=up?(ld?.05:-.05)*sin(f*P):top?.08:-.04
  // arms
  const arm=(s,x,y)=>{const d=s?1:-1;c.beginPath();c.moveTo(hx+d*20,hy-36);c.quadraticCurveTo(hx+d*34,(hy-36+y)/2+6,x,y);st(c,11,C);el(c,x,y,7.5,7);fs(c,S,3)}
  if(up){for(const s of[0,1]){const reach=s!=ld?sin(f*P)*14:0;arm(s,lx(s?X1:X0),hy-28-reach)}}
  else if(top){arm(0,lx(X0),ly(ry(7)-4));const w=sin(t*P*14)*.5;arm(1,hx+40+cos(w-1)*14,hy-96+sin(w-1)*10)
    // waving motion lines
    c.lineWidth=3;c.strokeStyle=O;for(const s of[-1,1]){c.beginPath();c.arc(hx+48,hy-108,22,-P/2+s*.6-.2,-P/2+s*.6+.2);c.stroke()}}
  else{arm(0,lx(X0),hy-44);arm(1,lx(X1),hy-44)}
  c.save();c.translate(hx,hy-76);c.scale(.68,.68);c.rotate(tilt)
  // braid over the right shoulder (flies up while sliding)
  c.save();c.translate(40,34);c.rotate(sl?-2.6:.25+sin(t*P*6)*.05)
  for(let j=0;j<5;j++){el(c,0,j*15,10-j*.8,9,j%2?.3:-.3);fs(c,j%2?Hd:H,3.2)}
  el(c,0,76,6,4);fs(c,'#ff7a68',2.6)
  c.beginPath();c.moveTo(-5,82);c.lineTo(0,94);c.lineTo(5,82);fs(c,H,2.6)
  c.restore()
  c.restore()
  // head
  c.save();c.translate(hx,hy-76);c.scale(.68,.68);c.rotate(tilt)
  c.beginPath();c.moveTo(-50,10);c.bezierCurveTo(-56,40,-46,52,-36,54);c.lineTo(36,54);c.bezierCurveTo(46,52,56,40,50,10);c.closePath();fs(c,Hd)
  hd(c,S)
  if(up)face(c,{e:I,ly:-4,lx:2,m:'smile',mo:.8,br:-.4,bc:Hd})
  else if(top)face(c,{e:I,ex:(i%4<2)?'happy':0,m:'grin',mo:1.15,br:-.4,bc:Hd})
  else face(c,{e:I,ex:'happy',m:'grin',mo:1.3,bc:Hd})
  // side-swept bangs
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,46,-4,40,-12,30,-6,18,-20,4,-8,-10,-22,-22,-10,-34,-24,-42,-8,-50,26],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  // star hair clip
  c.save();c.translate(-32,-40);pg(c,...[...Array(10)].flatMap((_,q)=>{const r=q%2?4:9,b=q*P/5-P/2;return[cos(b)*r,sin(b)*r]}));fs(c,'#ffd23f',2.6);c.restore()
  c.restore()
}
