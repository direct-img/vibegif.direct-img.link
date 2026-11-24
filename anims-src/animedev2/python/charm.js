// a snake-charmer girl with black curls under a purple headwrap playing a pungi flute, a blue-and-yellow python sways up out of its basket to the music and boops her nose
// tags: anime, coding, music, animal, cute, love
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
export const frames=18,delay=100,rim=4
const H='#221a2a',Hl='#55456a',SK='#8a5636',SKd='#6c3f24',W='#8b45c9',Wd='#5f2690',G='#ffc93c',V='#e0475c',SB='#3d7fd6',SBd='#2558a8',SY='#ffd43b'
export default(c,t,i)=>{
  const T=t*2*P
  // timeline: snake rises swaying, leans in, boops her nose, sinks back into the basket
  const up=sg(t,0,.42)*(1-sg(t,.8,1)),lean=sg(t,.48,.62)*(1-sg(t,.74,.86)),boop=t>=.6&&t<.78,after=t>=.78&&t<.92
  const sway=S(T*3)*(1-lean)
  let sx=204+sway*16*up,sy=188-up*104
  sx+=(101-sx)*lean;sy+=(115-sy)*lean
  const hr=.035*S(T*3)*(1-lean)-.07*lean,hx=86,hy=98,k=.88,fd=boop?7:0
  const W2=(x,y)=>[hx+k*(x*C(hr)-y*S(hr)),hy+k*(x*S(hr)+y*C(hr))]
  // back curls: a cloud of circles
  const cl=[[-50,-10,18],[-56,14,17],[-52,40,18],[-40,62,17],[50,-10,18],[56,14,17],[52,40,18],[40,62,17],[-30,-46,22],[30,-46,22],[0,-56,22]]
  c.save();c.translate(hx,hy);c.rotate(hr);c.scale(k,k)
  for(const[x,y,r]of cl){el(c,x,y,r);fs(c,H,7)}for(const[x,y,r]of cl){el(c,x,y,r);fs(c,H,0)}
  c.restore()
  // torso: cream top under a crimson vest with gold trim
  const tor=()=>{c.beginPath();c.moveTo(60,144);c.bezierCurveTo(38,150,30,170,28,200);c.quadraticCurveTo(26,232,38,238);c.lineTo(134,238);c.quadraticCurveTo(146,232,144,200);c.bezierCurveTo(142,168,134,150,112,144);c.closePath()}
  tor();fs(c,'#fff1d6');c.save();tor();c.clip()
  for(const f of[-1,1]){c.beginPath();c.moveTo(86+f*14,140);c.quadraticCurveTo(86+f*4,190,86+f*10,240);c.lineTo(86+f*70,240);c.lineTo(86+f*70,140);c.closePath();fs(c,V,3);c.beginPath();c.moveTo(86+f*14,140);c.quadraticCurveTo(86+f*4,190,86+f*10,240);c.lineWidth=4;c.strokeStyle=G;c.stroke()
    for(let y=178;y<236;y+=14){el(c,86+f*28,y,2.2);fs(c,G,0)}}
  c.restore();tor();c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  c.beginPath();c.moveTo(72,145);c.quadraticCurveTo(86,156,100,145);c.lineWidth=2.5;c.stroke()
  // head
  c.save();c.translate(hx,hy);c.rotate(hr);c.scale(k,k)
  hd(c,SK)
  const ex=boop?{ex:'shut'}:after||t<.08||t>.9?{ex:'calm'}:t<.2?{ex:'happy'}:lean>.3?{e:['#7a3c00','#ffbf47'],cx:4.5,ly:1,pp:.8}:{e:['#7a3c00','#ffbf47'],lx:6,ly:-2}
  face(c,{...ex,m:boop?'cat':'o',mo:.9,br:boop?.6:0,bc:H,bs:boop?.65:.38})
  c.beginPath();c.moveTo(-1,20);c.quadraticCurveTo(2,23,4,20);c.lineWidth=2;c.strokeStyle=SKd;c.stroke()
  for(const f of[-1,1]){c.beginPath();c.arc(f*44,36,6,0,2*P);c.lineWidth=3;c.strokeStyle=G;c.stroke()}
  // bangs, then the headwrap with a jewel
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-56,-30,-30,-52,0,-52);c.bezierCurveTo(30,-52,56,-30,50,22)
  qs(c,[50,22,45,-6,36,2,29,-14,17,-2,8,-18,-4,-4,-14,-18,-24,-2,-32,-12,-42,2,-46,-6,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-22,40,P*1.18,P*1.36);c.lineWidth=4;c.strokeStyle=Hl;c.stroke()
  const wr=()=>{c.beginPath();c.moveTo(-53,-16);c.bezierCurveTo(-64,-84,64,-84,53,-16);c.quadraticCurveTo(0,-42,-53,-16);c.closePath()}
  wr();fs(c,W);c.save();wr();c.clip()
  for(const a of[-30,-6,18]){c.beginPath();c.moveTo(a-20,-74);c.quadraticCurveTo(a+8,-50,a+26,-22);c.lineWidth=3;c.strokeStyle=Wd;c.stroke()}
  c.restore()
  c.beginPath();c.moveTo(-53,-16);c.quadraticCurveTo(0,-42,53,-16);st(c,5,G,2)
  c.beginPath();c.moveTo(0,-48);c.quadraticCurveTo(8,-38,0,-26);c.quadraticCurveTo(-8,-38,0,-48);fs(c,'#3ee0c8',3)
  el(c,-2,-39,1.6,3);fs(c,'#fff',0)
  c.restore()
  // arms, then the pungi flute in her mouth, then the hands gripping its pipes
  const[fx,fy]=W2(0,32),hs=[[fx+50,fy+fd+60],[fx+70,fy+fd+66]]
  for(const[[x0,y0,qx,qy],[x,y]]of[[[60,154,50,204],hs[0]],[[112,154,128,184],hs[1]]]){c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(qx,qy,x,y);st(c,13,'#fff1d6')}
  c.save();c.translate(fx,fy+fd);c.rotate(hr*.5)
  c.beginPath();c.moveTo(0,0);c.lineTo(24,20);st(c,6,'#c98a3e',3)
  for(const d of[0,7]){c.beginPath();c.moveTo(40+d,40-d);c.lineTo(68+d,74-d);st(c,7,'#8a5530',3);el(c,68+d,74-d,5);fs(c,G,2.5)}
  el(c,34,30,18,14,.75);fs(c,'#e8a94f');c.save();el(c,34,30,18,14,.75);c.clip()
  for(const d of[-8,0,8]){c.beginPath();c.moveTo(20+d,44+d);c.lineTo(48+d,16+d);c.lineWidth=2.5;c.strokeStyle='#b8742e';c.stroke()}c.restore()
  el(c,28,22,4,3,.75);fs(c,'#ffe2a8',0)
  c.restore()
  for(const[x,y]of hs){el(c,x,y,8,7);fs(c,SK,3.2);c.beginPath();c.moveTo(x-4,y-3);c.lineTo(x+3,y-5);c.lineWidth=2;c.stroke()}
  // music notes drifting up
  for(let j=0;j<3;j++){const p=(t*2+j/3)%1,x=fx+52+j*10+S(p*P*3+j)*8-p*30,y=fy+20-p*120,z=S(p*P)**.5
    c.save();c.translate(x,y);c.scale(z,z);c.rotate(S(p*9)*.2);tx(c,j%2?'♫':'♪',0,0,22,[G,'#ff7aa8','#7ee0ff'][j],5,'DejaVu Sans');c.restore()}
  // basket back and the python
  el(c,204,196,34,10);fs(c,'#5a3418',3.5)
  const bx=204,by=204,d=Math.hypot(sx-bx,sy-by),pts=[]
  for(let j=0;j<=24;j++){const s=j/24,u=1-s,cx1=bx,cy1=by-d*.55,cx2=sx+d*.32,cy2=sy+d*.22
    let x=u*u*u*bx+3*u*u*s*cx1+3*u*s*s*cx2+s*s*s*sx,y=u*u*u*by+3*u*u*s*cy1+3*u*s*s*cy2+s*s*s*sy
    x+=S(s*P*2.2-T*3)*7*S(s*P)*up;pts.push([x,y])}
  c.beginPath();pts.forEach(([x,y])=>c.lineTo(x,y));st(c,15,SB)
  c.beginPath();pts.forEach(([x,y])=>c.lineTo(x+2,y+2));c.lineWidth=4;c.strokeStyle=SBd;c.setLineDash([2,9]);c.stroke();c.setLineDash([])
  pts.forEach(([x,y],j)=>{if(j%3==1&&j<23){c.save();c.translate(x,y);c.rotate(P/4);rr(c,-3.5,-3.5,7,7,2);fs(c,SY,2);c.restore()}})
  // snake head facing her
  c.save();c.translate(sx,sy);c.rotate(S(T*3)*.12*(1-lean)+lean*.15)
  el(c,0,0,15,11.5);fs(c,SB);c.save();el(c,0,0,15,11.5);c.clip();el(c,-2,11,15,6);fs(c,SY,2.5);c.restore();el(c,0,0,15,11.5);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  if(i%4<2&&!boop){c.beginPath();c.moveTo(-14,4);c.lineTo(-23,5);c.lineTo(-27,2);c.moveTo(-23,5);c.lineTo(-27,8);c.lineWidth=2.2;c.strokeStyle='#e8344a';c.stroke()}
  for(const x of[-6,4]){if(boop||after){c.beginPath();c.moveTo(x-4,-2);c.quadraticCurveTo(x,-8,x+4,-2);c.lineWidth=2.5;c.strokeStyle=O;c.stroke()}else{el(c,x,-3,3.6,4.6);fs(c,O,0);el(c,x-1.2,-4.8,1.5);fs(c,'#fff',0)}}
  el(c,-2,5,4,2.4);fs(c,'rgba(255,120,150,.5)',0)
  c.restore()
  // basket front wall
  c.beginPath();c.moveTo(238,196);c.bezierCurveTo(242,222,232,242,216,242);c.lineTo(192,242);c.bezierCurveTo(176,242,166,222,170,196);c.ellipse(204,196,34,10,0,P,0,1);c.closePath();fs(c,'#d9974a')
  c.save();c.clip();c.lineWidth=2.5;c.strokeStyle='#a0612a'
  for(const y of[214,228]){c.beginPath();c.ellipse(204,y-10,40,10,0,0,P);c.stroke()}
  for(let x=176;x<240;x+=9){c.beginPath();c.moveTo(x,204+(abs(x-204)<20?4:0));c.lineTo(x+4,244);c.stroke()}
  c.restore()
  c.beginPath();c.ellipse(204,196,34,10,0,0,P);st(c,6,'#b8742e',3)
  // boop: heart and sparkle
  if(t>.6&&t<.9){const p=(t-.6)/.3;heart(c,128-p*6,82-p*40,.7+S(p*P)*.5,'#ff5c8a')}
  if(boop){c.lineWidth=3;c.strokeStyle=O;for(const a of[-.8,-.1,.6]){c.beginPath();c.moveTo(94+C(a)*16,104+S(a)*16-14);c.lineTo(94+C(a)*24,104+S(a)*24-14);c.stroke()}}
}
