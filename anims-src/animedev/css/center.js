// a girl with a green ponytail and orange overalls shoving a div box around a dotted grid, it overshoots left, then right, finally snaps dead center and she cheers, then bumps it off again
// tags: anime, coding, layout, design, proud, playful
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
export const frames=26,delay=90,rim=4
const H='#5ed37a',Hd='#2f9e55',Hl='#b8f5c4',SK='#d9a27a',SKd='#b47b54',Ov='#ff8a3d',Ovd='#d9622a'
const ob=x=>{const a=1.9;return 1+(a+1)*(x-1)**3+a*(x-1)**2}
const mv=(t,a,b,u,v)=>u+(v-u)*ob(min(1,max(0,(t-a)/(b-a))))
export default(c,t,i)=>{
  // box x offset from center along the timeline
  let bx=44,by=0,br=0
  if(t<.1)bx=44;else if(t<.3)bx=mv(t,.1,.24,44,-34);else if(t<.48)bx=mv(t,.3,.42,-34,26);else if(t<.84)bx=mv(t,.48,.56,26,0)
  else{const u=sg(t,.84,.94);bx=44*u;by=-18*S(u*P);br=S(u*P)*.25}
  const ok=t>.54&&t<.86,cheer=sg(t,.56,.62)*(1-sg(t,.8,.84)),slam=t>.83&&t<.9,gasp=t>.9||t<.06
  const bob=cheer?-abs(S(t*2*P*5))*6*cheer:slam?3:0,lean=t<.3&&t>.08?-6:t<.48&&t>.28?6:0
  const hx=128+lean*sm(cheer?0:1),hy=84+bob
  // ponytail and torso behind the table
  c.save();c.translate(hx,hy);c.scale(.9,.9)
  const sw=S(t*2*P*2)*.12+lean*.02
  c.save();c.translate(22,-62);c.rotate(sw);c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(60,-30,76,40,58,96);c.quadraticCurveTo(50,70,40,84);c.quadraticCurveTo(54,30,8,14);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(12,6);c.bezierCurveTo(48,0,58,40,52,74);c.lineWidth=2.5;c.strokeStyle=Hd;c.stroke();c.restore()
  c.restore()
  c.beginPath();c.moveTo(hx-28,124+bob);c.bezierCurveTo(hx-52,130,hx-60,150,hx-62,170);c.lineTo(hx+62,170);c.bezierCurveTo(hx+60,150,hx+52,130,hx+28,124+bob);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(hx-30,170);c.lineTo(hx-28,146+bob);c.lineTo(hx+28,146+bob);c.lineTo(hx+30,170);c.closePath();fs(c,Ov,3)
  for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*22,148+bob);c.lineTo(hx+f*34,126+bob);st(c,6,Ov,2.5);el(c,hx+f*22,150+bob,3);fs(c,'#ffd34d',1.8)}
  // head
  c.save();c.translate(hx,hy);c.scale(.9,.9)
  hd(c,SK)
  const E=['#5a2e12','#d39255']
  const fc=gasp?{e:E,pp:.55,m:'gasp',mo:1.1,br:1}:cheer>.5||slam?{ex:'happy',m:'grin',mo:1.2,br:-.3}:t<.2?{e:E,lx:-6,m:'grit',mo:.9,br:-.8}:t<.3?{e:E,lx:-7,pp:.6,m:'o',mo:1.2,br:1}:t<.38?{e:E,lx:6,m:'grit',mo:.9,br:-.8}:t<.48?{e:E,op:.62,lx:5,m:'wave',mo:1,br:.6}:{e:E,lx:-3,ly:3,m:'cat',mo:1,br:0}
  face(c,{...fc,bc:Hd,fr:SKd})
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-44,50,22)
  qs(c,[50,22,44,-8,36,4,28,-18,18,-2,8,-20,-2,-4,-12,-22,-22,-4,-32,-16,-42,4,-46,-6,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  el(c,22,-62,9,7,.3);fs(c,'#ff5c8a',3)
  for(const[x,r]of[[-30,-.5],[-22,-.5]]){c.save();c.translate(x,-34);c.rotate(r);rr(c,-8,-2.5,16,5,2);fs(c,['#ffd34d','#7ee0ff'][x<-25?0:1],2.2);c.restore()}
  c.restore()
  if(gasp)drop(c,hx+44,hy-22,1)
  // table top with a dotted grid and center guide
  pg(c,34,150,222,150,246,214,10,214);fs(c,'#eef1f8')
  c.save();pg(c,34,150,222,150,246,214,10,214);c.clip()
  for(let r=0;r<6;r++){const y=154+r*11,w=94+r*4.2*(1+r*.02);for(let k=-10;k<=10;k++){el(c,128+k*w/9,y+2,1.6,1.1);fs(c,'#a8b0c8',0)}}
  c.setLineDash([6,5]);c.beginPath();c.moveTo(128,150);c.lineTo(128,214);c.lineWidth=2.5;c.strokeStyle=ok?'#2fc26b':'#ff4fa0';c.stroke()
  c.beginPath();c.moveTo(10,182);c.lineTo(246,182);c.stroke();c.setLineDash([])
  c.restore()
  rr(c,10,212,236,16,[0,0,6,6]);fs(c,'#c7cde0');pg(c,34,150,222,150,246,214,10,214);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  // the div box
  const X=128+bx,Y=200+by
  c.save();c.translate(X,Y);c.rotate(br)
  el(c,0,4,34*(1+by/60),5);fs(c,'rgba(43,29,46,.18)',0)
  pg(c,-32,-42,32,-42,27,-52,-27,-52);fs(c,'#d8c4ff',3)
  rr(c,-32,-42,64,44,4);fs(c,ok?'#b8f5c4':'#b593ff',3.5)
  c.setLineDash([4,4]);rr(c,-26,-36,52,32,3);c.lineWidth=2;c.strokeStyle=ok?'#2f9e55':'#6b49c8';c.stroke();c.setLineDash([])
  tx(c,'div',0,-20,17,'#fff',4.5)
  c.restore()
  // arms: pushing a side of the box, cheering up high, slamming the table, hands to cheeks
  const push=s=>s>0?[[hx-46,172],[X+41,Y-22]]:[[X-41,Y-22],[hx+46,172]],gp=[[hx-26,hy+34],[hx+26,hy+34]],ch=[[hx-48,40+bob],[hx+48,40+bob]],sl=[[hx-30,176],[hx+30,176]]
  const lp=(a,b,u)=>a.map((p,j)=>[p[0]+(b[j][0]-p[0])*u,p[1]+(b[j][1]-p[1])*u-(u>0&&u<1?S(u*P)*18:0)])
  let hs
  if(t<.1)hs=lp(gp,push(1),sg(t,.02,.1));else if(t<.24)hs=push(1);else if(t<.3)hs=lp(push(1),push(-1),sg(t,.24,.3))
  else if(t<.42)hs=push(-1);else if(t<.48)hs=lp(push(-1),push(1),sg(t,.42,.48));else if(t<.56)hs=push(1)
  else if(t<.8)hs=lp(push(1),ch,sg(t,.56,.62));else if(t<.9)hs=lp(ch,sl,sg(t,.8,.84));else hs=lp(sl,gp,sg(t,.9,.96))
  if(gasp&&t<.1)hs=lp(gp,push(1),sg(t,.02,.1))
  const sh=[[hx-36,136+bob],[hx+36,136+bob]]
  hs.forEach(([x,y],j)=>{const[a,b]=sh[j];c.beginPath();c.moveTo(a,b);c.quadraticCurveTo((a+x)/2+(j?14:-14),(b+y)/2+10,x,y);st(c,12,'#fff');el(c,x,y,8.5,8);fs(c,SK,3.2)})
  if(slam){c.lineWidth=3;c.strokeStyle=O;for(const[x,y]of sl)for(const a of[-2.4,-1.6,-.8]){c.beginPath();c.moveTo(x+C(a)*14,y+S(a)*14);c.lineTo(x+C(a)*22,y+S(a)*22);c.stroke()}}
  // centered! check pop
  if(ok){const u=sg(t,.54,.6),z=u*(1+.25*S(u*P));c.save();c.translate(128,134);c.scale(z,z);el(c,0,0,14);fs(c,'#2fc26b',3.5);c.beginPath();c.moveTo(-6,0);c.lineTo(-1,5);c.lineTo(7,-5);c.lineWidth=3.5;c.strokeStyle='#fff';c.stroke();c.restore()
    for(let j=0;j<4;j++){const a=j*P/2+t*8,r=40+S(t*40+j)*4;c.save();c.translate(128+C(a)*r*1.3,170+S(a)*r*.6);c.rotate(a);c.beginPath();for(let q=0;q<8;q++){const rr2=q%2?2:6;c.lineTo(C(q*P/4)*rr2,S(q*P/4)*rr2)}c.closePath();fs(c,'#ffd34d',2);c.restore()}}
}
