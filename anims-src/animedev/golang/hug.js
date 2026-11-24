// a girl with pink twin tails in a yellow hoodie squeezing and nuzzling a chubby cyan gopher cheek to cheek while hearts pop up
// tags: anime, coding, love, animal, cute, happy
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
export const frames=20,delay=80,rim=4
const H='#ff8fc8',Hd='#e0589c',Hl='#ffd0e8',SK='#ffe9dc',Y='#ffd24a',Yd='#e8a91c',G='#62d2e6',Gd='#2f9db8',Gb='#e8fbff'
export default(c,t,i)=>{
  const T=t*2*P,n=S(T*2),q=.5-.5*C(T*2),hx=164+n*4,hy=94+q*3,hr=-.24+n*.06,k=.86
  // twin tails behind everything
  c.save();c.translate(hx,hy);c.rotate(hr);c.scale(k,k)
  for(const f of[-1,1]){const w=S(T*2+f)*.06;c.save();c.translate(f*44,-46);c.rotate(f*.2+w)
    c.beginPath();c.moveTo(0,0);c.bezierCurveTo(f*44,10,f*46,70,f*22,118);c.quadraticCurveTo(f*20,90,f*6,104);c.quadraticCurveTo(f*20,60,-f*4,16);c.closePath();fs(c,H)
    c.beginPath();c.moveTo(f*14,14);c.quadraticCurveTo(f*32,50,f*22,92);c.lineWidth=2.5;c.strokeStyle=Hd;c.stroke();c.restore()}
  c.restore()
  // hoodie torso
  c.beginPath();c.moveTo(136,146);c.bezierCurveTo(112,152,104,176,104,204);c.lineTo(106,240);c.lineTo(226,240);c.lineTo(226,204);c.bezierCurveTo(226,176,216,152,192,146);c.closePath();fs(c,Y)
  c.beginPath();c.moveTo(148,148);c.quadraticCurveTo(164,162,182,148);c.lineWidth=3;c.stroke()
  // gopher: chubby blob, squished by the hug
  c.save();c.translate(98,222);c.scale(1-q*.05,1+q*.04);c.rotate(.06+n*.03)
  for(const f of[-1,1]){el(c,f*26,-2,15,8);fs(c,'#ffe7c2')}
  for(const f of[-1,1]){el(c,f*36,-122,11,10);fs(c,G);el(c,f*36,-121,5.5,5);fs(c,'#ff9fb6',0)}
  c.beginPath();c.moveTo(-58,-56);c.bezierCurveTo(-60,-120,-30,-130,0,-130);c.bezierCurveTo(30,-130,60,-120,58,-56);c.bezierCurveTo(58,-16,40,0,0,0);c.bezierCurveTo(-40,0,-58,-16,-58,-56);fs(c,G)
  el(c,0,-34,32,28);fs(c,Gb,0)
  c.beginPath();c.arc(0,-70,48,P*1.15,P*1.4);c.lineWidth=5;c.strokeStyle='#b6f2fb';c.stroke()
  // its face, off to the left of her cheek
  c.save();c.translate(-16,-80);c.scale(1.3,1.3)
  for(const x of[-14,12]){c.beginPath();c.moveTo(x-6,2);c.quadraticCurveTo(x,-6,x+6,2);c.lineWidth=3.2;c.strokeStyle=O;c.stroke()}
  c.lineWidth=1.6;for(const g of[-1,1])for(const d of[-2,3]){c.beginPath();c.moveTo(g*14-1,12+d);c.lineTo(g*24-1,10+d*1.8);c.stroke()}
  for(const x of[-26,24]){el(c,x,12,7,4);fs(c,'rgba(255,100,140,.45)',0)}
  el(c,-1,10,9,7);fs(c,Gb,2.5);el(c,-1,6,4.5,3.2);fs(c,'#ff7f9e',2.2)
  c.beginPath();c.moveTo(-1,9);c.lineTo(-1,14);c.lineWidth=2;c.stroke()
  rr(c,-5,15,8,6,1.5);fs(c,'#fff',2);c.beginPath();c.moveTo(-1,15);c.lineTo(-1,21);c.lineWidth=1.5;c.stroke()
  c.restore()
  c.restore()
  // head pressed against the gopher
  c.save();c.translate(hx,hy);c.rotate(hr);c.scale(k,k)
  hd(c,SK)
  const op=t>.42&&t<.58
  face(c,op?{e:['#6a2bb0','#d8a6ff'],lx:-5,ly:2,m:'grin',mo:1,bc:Hd,bs:.6}:{ex:'happy',m:i%5<3?'grin':'cat',mo:1.05,bc:Hd,bs:.6})
  c.beginPath();c.moveTo(-50,20);c.bezierCurveTo(-58,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-44,50,20)
  qs(c,[50,20,46,-6,38,-14,30,0,24,-20,12,-6,4,-22,-6,-6,-16,-20,-24,-4,-34,-14,-44,2,-50,20],.18);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.24,P*1.5);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.beginPath();c.moveTo(-14,-64);c.quadraticCurveTo(-30,-80,-24,-90);c.quadraticCurveTo(-14,-78,-14,-64);fs(c,H,3)
  // ribbons tying the tails
  for(const f of[-1,1]){c.save();c.translate(f*44,-46);c.rotate(f*.3)
    for(const g of[-1,1]){c.beginPath();c.moveTo(0,0);c.lineTo(g*14,-9);c.lineTo(g*14,9);c.closePath();fs(c,'#7ee0ff',3)}el(c,0,0,5);fs(c,'#7ee0ff',3);c.restore()}
  c.restore()
  // her arms wrapped round the gopher
  const ax=q*6
  el(c,48+ax,186,9,8,.9);fs(c,SK,3.2);c.beginPath();c.moveTo(44+ax,181);c.lineTo(50+ax,180);c.lineWidth=2;c.stroke()
  c.beginPath();c.moveTo(206,164);c.quadraticCurveTo(178,232,112+ax,200);st(c,15,Y)
  c.beginPath();c.moveTo(124+ax,192);c.lineTo(122+ax,210);c.lineWidth=6;c.strokeStyle='#fff';c.stroke()
  el(c,108+ax,200,10,8.5,-.3);fs(c,SK,3.2)
  // hearts popping up
  for(let j=0;j<3;j++){const p=(t+j/3)%1,x=126+[-30,6,34][j]+S(p*P*2+j)*6,y=86-p*70,z=sg(p,0,.25)*(1-sg(p,.75,1))
    if(z>0)heart(c,x,y,(.7+.12*j)*z,['#ff5c8a','#ff8fc8','#ff4f6d'][j])}
}
