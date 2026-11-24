// a girl in cat-ear headphones with her arms twisted like a game of twister, fingers stretched across Ctrl, Meta, Shift and X, sweating and trembling until a tiny check pops up and she collapses onto the keyboard in relief
// tags: anime, coding, keyboard, anxious, tired, shortcut
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
export const frames=28,delay=80,rim=4
const H='#3a2a55',Hd='#231834',Hl='#7a64a8',SK='#f0c09a',SKd='#d0956a',J='#7d5ad8',Jd='#5a3cb0',HP='#ff8fc8'
const keys={Ctrl:[14,212,46,26,'#ff6b6b'],X:[82,186,30,24,'#ffd34d'],Shift:[178,186,64,24,'#5fd77a'],Meta:[188,212,46,26,'#4fb4ff']}
export default(c,t,i)=>{
  const reach=sg(t,0,.12)*(1-sg(t,.66,.74)),strain=t>.1&&t<.62,col=sg(t,.66,.74)*(1-sg(t,.9,1)),ok=t>.6&&t<.9
  const tr=strain?(i%2?1.6:-1.6):0,hx=128+tr*.6,hy=86+col*40+(strain?S(i*2.3)*1:0)
  // headphone band and hair behind
  c.save();c.translate(hx,hy);c.rotate(col*.28);c.scale(.86,.86)
  c.beginPath();c.moveTo(-50,-16);c.bezierCurveTo(-58,30,-50,52,-40,58);c.lineTo(40,58);c.bezierCurveTo(50,52,58,30,50,-16);fs(c,Hd)
  c.restore()
  // hoodie torso
  c.beginPath();c.moveTo(100,132+col*30);c.bezierCurveTo(76,138,66,156,64,176);c.lineTo(192,176);c.bezierCurveTo(190,156,180,138,156,132+col*30);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(114,134+col*30);c.quadraticCurveTo(128,146+col*30,142,134+col*30);c.lineWidth=3;c.stroke()
  // keyboard
  rr(c,8,160,240,82,10);fs(c,'#e6e9f2');rr(c,8,232,240,10,[0,0,10,10]);fs(c,'#c3c9da',3.5)
  for(let k=0;k<12;k++){rr(c,16+k*19.2,166,15,14,3);fs(c,'#fff',1.8)}
  for(let k=0;k<4;k++){rr(c,118+k*15,190,12,16,3);fs(c,'#fff',1.8)}
  rr(c,64,214,118,20,4);fs(c,'#fff',1.8)
  rr(c,62,190,16,16,3);fs(c,'#fff',1.8)
  for(const[n,[x,y,w,h,f]]of Object.entries(keys)){const d=reach>.5?2:0;rr(c,x,y+2,w,h,5);fs(c,'#9aa3b8',2.5);rr(c,x,y-2+d,w,h,5);fs(c,reach>.5?f:'#fff',2.5);tx(c,n,x+w/2,y+h/2-1+d,n.length>3?12:14,'#fff',3.5,'DejaVu Sans')}
  // head
  c.save();c.translate(hx,hy);c.rotate(col*.28);c.scale(.86,.86)
  hd(c,SK)
  const E=['#8a1020','#ff7a7a']
  face(c,col>.5?{ex:'calm',m:'smile',mo:.8,br:.8,bc:Hl,bs:.5}:ok?{e:E,pp:.6,m:'o',br:.6,bc:Hl}:strain?{ex:t>.35?'shut':0,e:E,pp:.5,lx:tr,ly:4,m:'grit',mo:1.1,br:1.2,bc:Hl,bs:.6}:{e:E,ly:4,m:'cat',bc:Hl})
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-44,50,22)
  qs(c,[50,22,44,-8,36,2,28,-16,16,-2,6,-22,-6,-4,-16,-20,-26,-2,-36,-14,-44,4,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  // cat-ear headphones
  c.beginPath();c.arc(0,-14,56,P*1.08,P*1.92);st(c,6,HP,2.5)
  for(const f of[-1,1]){pg(c,f*30,-58,f*46,-84,f*52,-48);fs(c,HP,3);pg(c,f*36,-58,f*45,-74,f*48,-54);fs(c,'#fff',0);rr(c,f*56-9,-14,18,34,8);fs(c,HP,3.2);rr(c,f*56-4,-8,8,22,4);fs(c,'#ffd0e8',0)}
  c.restore()
  // sweat
  if(strain){const p=(t*6)%1;drop(c,hx+52+p*14,hy-30+p*16,.9);drop(c,hx-54-p*12,hy-18+p*14,.8);if(t>.3)drop(c,hx+40,hy-52+p*10,.7)}
  // arms: crossed over each other twister style, then flopped down
  const L0=[66+tr,164],R0=[190-tr,162],Lf=[[26,214],[88,190]],Rf=[[190,190],[200,214]]
  const flop=[[86,206],[170,206]]
  const mix=(a,b,u)=>[a[0]+(b[0]-a[0])*u,a[1]+(b[1]-a[1])*u]
  const rest=[[96,200],[160,200]]
  const pL=mix(mix(rest[0],R0,reach),flop[1],col),pR=mix(mix(rest[1],L0,reach),flop[0],col)
  const arm=(sx,sy,p,bend)=>{c.beginPath();c.moveTo(sx,sy+col*28);c.quadraticCurveTo((sx+p[0])/2,(sy+p[1])/2+bend,p[0],p[1]);st(c,14,J)}
  // her left arm (screen right) crosses to the left keys, drawn under her right arm
  arm(160,146,pR,-30)
  const fing=(p,fs2)=>{if(reach>.3&&col<.5)for(const[x,y]of fs2){const fx=p[0]+(x-p[0])*reach,fy=p[1]+(y-p[1])*reach;c.beginPath();c.moveTo(p[0],p[1]);c.lineTo(fx+tr*.5,fy);st(c,6.5,SK,3);el(c,fx+tr*.5,fy,4.5);fs(c,SK,2.5);el(c,fx+tr*.5,fy-1.5,2.2,1.8);fs(c,'#ffd0d8',0)}
    el(c,p[0],p[1],10,9);fs(c,SK,3.2)}
  fing(pR,Lf)
  arm(96,146,pL,-30)
  fing(pL,Rf)
  if(strain){c.lineWidth=2.4;c.strokeStyle=O;for(const[x,y]of[...Lf,...Rf]){c.beginPath();c.moveTo(x-12,y+2);c.lineTo(x-7,y+1);c.moveTo(x+12,y+2);c.lineTo(x+7,y+1);c.stroke()}}
  // tiny check pop, then a relieved sigh
  if(ok){const u=sg(t,.6,.66),z=u*(1+.3*S(u*P));c.save();c.translate(204,58);c.scale(z,z);el(c,0,0,15);fs(c,'#2fc26b',3.5);c.beginPath();c.moveTo(-6,0);c.lineTo(-1.5,5);c.lineTo(7,-5);c.lineWidth=3.8;c.strokeStyle='#fff';c.stroke();c.restore()}
  if(col>.5){const p=sg(t,.72,.9);c.globalAlpha=1-p*.6;for(let j=0;j<3;j++){el(c,hx-60-p*14-j*8,hy-6-p*18-j*6,6+j*2);fs(c,'#eef1f8',2.5)}c.globalAlpha=1}
}
