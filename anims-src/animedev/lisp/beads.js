// a girl with short magenta curls and a yellow headband happily stringing rainbow parenthesis beads ( ( ( ) ) ) onto a necklace that keeps growing and coils up on the floor
// tags: anime, coding, happy, crafts, rainbow, cozy
// ---
const P=Math.PI,O='#2b1d2e',{sin:S,cos:C,min,max,abs}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>sm((t-a)/(b-a))
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,ly=0,pp=1,tl=0,ex}=o,lx=(o.lx||0)-f*(o.cx||0),a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+C(a+f)*a*.6,y+2+ly+S(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,bs=.3}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${bs})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='gasp'){el(c,0,3,6,8);fs(c,'#a3304a',2.2/mo);c.save();el(c,0,3,6,8);c.clip();el(c,0,10,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='flat'){c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6/s);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const heart=(c,x,y,s,f='#ff5c8a')=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,9);c.bezierCurveTo(-16,-2,-11,-16,0,-7);c.bezierCurveTo(11,-16,16,-2,0,9);fs(c,f,3/s);el(c,-5,-5,2.5,2);fs(c,'#fff',0);c.restore()}
export const frames=18,delay=110,rim=4
const H='#e0408f',Hd='#a8256a',Hl='#ff9ccb',SK='#6b4029',SKd='#4e2c1b',J='#7fd99a',Jd='#3fae66',sp=17
const K=['#ff5c5c','#ffb03a','#ffe14d','#5fd77a','#4fb4ff','#b07cff'],PT='((()))'
// strand path: from the needle hand, swooping down into a coil on the floor
const pts=[],bz=(a,b,d,e,N)=>{for(let j=1;j<=N;j++){const s=j/N,u=1-s;pts.push([u*u*u*a[0]+3*u*u*s*b[0]+3*u*s*s*d[0]+s*s*s*e[0],u*u*u*a[1]+3*u*u*s*b[1]+3*u*s*s*d[1]+s*s*s*e[1]])}}
pts.push([142,170]);bz([142,170],[172,156],[216,164],[222,196],24);bz([222,196],[226,214],[218,234],[204,234],10)
const NH=pts.length-1
for(let j=1;j<=60;j++){const a=P/2-j/60*P*3.2,r=1-j/60*.55;pts.push([204+C(a)*32*r,222+S(a)*12*r])}
const len=[0];for(let j=1;j<pts.length;j++)len.push(len[j-1]+Math.hypot(pts[j][0]-pts[j-1][0],pts[j][1]-pts[j-1][1]))
const at=s=>{let j=1;while(j<len.length-1&&len[j]<s)j++;const u=(s-len[j-1])/(len[j]-len[j-1]||1),[x0,y0]=pts[j-1],[x1,y1]=pts[j];return[x0+(x1-x0)*u,y0+(y1-y0)*u,Math.atan2(y1-y0,x1-x0)]}
const bead=(c,x,y,r,m,z=1)=>{const k=((m%6)+6)%6;c.save();c.translate(x,y);c.scale(z,z);tx(c,PT[k],0,0,22,K[k],5.5);c.restore()}
export default(c,t,i)=>{
  const n=t*6,cy=Math.floor(n),q=n-cy,o=cy+sg(q,.5,.85),hx=92,hy=90,T=t*2*P
  const tip=[150,140],J0=[142,170]
  // curly bob behind
  const cl=[[-48,-6,17],[-52,18,15],[-42,40,15],[48,-6,17],[52,18,15],[42,40,15],[-34,-44,20],[34,-44,20],[0,-56,22]]
  c.save();c.translate(hx,hy);c.scale(.86,.86)
  for(const[x,y,r]of cl){el(c,x,y,r);fs(c,H,7)}for(const[x,y,r]of cl){el(c,x,y,r);fs(c,H,0)}
  c.restore()
  // striped tee
  const tor=()=>{c.beginPath();c.moveTo(hx-28,140);c.bezierCurveTo(hx-52,146,hx-58,168,hx-60,200);c.lineTo(hx-60,240);c.lineTo(hx+60,240);c.lineTo(hx+60,200);c.bezierCurveTo(hx+58,168,hx+52,146,hx+28,140);c.closePath()}
  tor();fs(c,J);c.save();tor();c.clip();c.fillStyle=Jd;for(let y=152;y<240;y+=16)c.fillRect(0,y,256,6);c.restore();tor();c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  c.beginPath();c.moveTo(hx-14,141);c.quadraticCurveTo(hx,152,hx+14,141);fs(c,'#fff',3)
  // the strand and its beads
  c.beginPath();pts.forEach(([x,y])=>c.lineTo(x,y));c.lineWidth=5;c.strokeStyle=O;c.stroke();c.lineWidth=2;c.strokeStyle='#f3d9b0';c.stroke()
  for(let m=cy;m>cy-60;m--){const s=(o-m-1)*sp;if(s<0)continue;if(s>len[len.length-1]-4)break
    const[x,y,r]=at(s),z=s>len[NH]?.8:1;bead(c,x,y,r,m,z)}
  // head
  c.save();c.translate(hx,hy);c.scale(.86,.86);c.rotate(S(T*3)*.03)
  hd(c,SK)
  const E=['#8a1f3a','#ff8aa8'],lk=q<.3?{lx:3,ly:3}:{lx:7,ly:-4}
  face(c,i%10<2?{ex:'happy',m:'grin',mo:1.1,bc:Hd}:{e:E,...lk,m:q>.5?'grin':'cat',mo:1,bc:Hd,bs:.45})
  c.beginPath();c.moveTo(-48,10);c.bezierCurveTo(-56,-46,-30,-68,0,-68);c.bezierCurveTo(30,-68,56,-46,48,10)
  for(let k=0;k<7;k++){const x=40-k*13.3;c.arc(x-6.6,-8+(k%2?-6:0),8,0,P,0)}c.closePath();fs(c,H)
  for(const[x,y]of[[-30,-36],[-6,-48],[20,-40]]){c.beginPath();c.arc(x,y,7,P*.9,P*1.9);c.lineWidth=2.5;c.strokeStyle=Hd;c.stroke()}
  c.beginPath();c.moveTo(-50,-30);c.quadraticCurveTo(0,-74,50,-30);st(c,7,'#ffd23a',2.5)
  c.restore()
  // bowl of loose beads
  el(c,84,218,28,9);fs(c,'#7a4fc0',3.5)
  for(let k=0;k<4;k++)bead(c,70+k*9,216-(k%2)*3,0,k*2+1,.7)
  c.beginPath();c.ellipse(84,218,28,9,0,0,P);c.bezierCurveTo(56,236,70,242,84,242);c.bezierCurveTo(98,242,112,236,112,218);fs(c,'#b48cff',3.5)
  // needle hand (her left) with the needle
  c.beginPath();c.moveTo(hx+38,154);c.quadraticCurveTo(hx+58,186,J0[0],J0[1]+4);st(c,13,J)
  c.beginPath();c.moveTo(J0[0],J0[1]);c.lineTo(tip[0],tip[1]);c.lineWidth=5;c.strokeStyle=O;c.stroke();c.lineWidth=2;c.strokeStyle='#e4e8f2';c.stroke()
  el(c,J0[0],J0[1]+6,8.5,8);fs(c,SK,3.2)
  // current bead: carried from the bowl to the needle tip, then slid down onto the strand
  const ar=q<.5?sg(q,0,.3):1-sg(q,.85,1)
  const bx=84+(tip[0]-8-84)*ar,by=214+(tip[1]+2-214)*ar-S(ar*P)*14
  if(q<.5)bead(c,bx+5,by-4,0,cy)
  else if(q<.85){const u=sg(q,.5,.85),r=Math.atan2(J0[1]-tip[1],J0[0]-tip[0]);bead(c,tip[0]+(J0[0]-tip[0])*u,tip[1]+(J0[1]-tip[1])*u,r,cy)}
  c.beginPath();c.moveTo(hx-38,156);c.quadraticCurveTo(hx-56,206,bx,by);st(c,13,J)
  el(c,bx,by,8.5,8);fs(c,SK,3.2)
  // sparkles off the necklace
  for(let k=0;k<3;k++){const p=(t*3+k/3)%1,x=[176,222,188][k],y=[166,196,232][k]-p*10,z=S(p*P)
    c.save();c.translate(x,y);c.scale(z,z);c.beginPath();for(let j=0;j<8;j++){const r=j%2?2:7;c.lineTo(C(j*P/4)*r,S(j*P/4)*r)}c.closePath();fs(c,'#fff6a8',2);c.restore()}
}
