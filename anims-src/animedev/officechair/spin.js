// a giggling girl with long cherry-red hair and a black headband spins round and round in her office chair with her arms up, hair flying out around her
// tags: happy, playful, anime, office, dizzy, fast
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
export const frames=24,delay=60,rim=4
const H='#e8434f',Hd='#b52a3a',Hl='#ff9aa2',S='#ffe2cf',C='#a98bff',Cd='#7a5ee0',K='#2d2b3d',I=['#1a4fa0','#7ec8ff']
export default(c,t,i)=>{
  const th=t*4*P,cs=cos(th),sn=sin(th),fr=cs>0,ax=128,bob=sin(t*8*P)*2
  // swoosh arcs around the seat
  c.lineWidth=3.5;c.strokeStyle=O
  for(const[ry,o]of[[16,0],[24,1.6]]){c.beginPath();c.ellipse(ax,166+ry*.4,96,ry,0,th*.5+o,th*.5+o+1.1);c.stroke();c.beginPath();c.ellipse(ax,166+ry*.4,96,ry,0,th*.5+o+P,th*.5+o+P+.9);c.stroke()}
  // 5 star base with wheels and the gas lift
  c.beginPath();c.moveTo(ax,186);c.lineTo(ax,214);st(c,8,'#9aa1b3',3)
  for(let k=0;k<5;k++){const a=k*2*P/5+th*.15,x=ax+cos(a)*46,y=222+sin(a)*10;c.beginPath();c.moveTo(ax,214);c.lineTo(x,y);st(c,6,'#5a5f73',3);el(c,x,y+6,7,6);fs(c,K,3)}
  // chair back rest, turning with her
  const back=()=>{const w=64*abs(cs)+14,x=ax-sn*30;rr(c,x-w/2,96+bob,w,82,14);fs(c,'#3b3f54');if(w>30){rr(c,x-w/2+8,104+bob,w-16,64,10);fs(c,'#4d5270',0)}c.beginPath();c.moveTo(x,178+bob);c.lineTo(ax,180+bob);st(c,6,'#5a5f73',3)}
  if(fr)back()
  // flying hair: strands flaring out around her, trailing the spin
  c.save();c.translate(ax,104+bob)
  for(let k=0;k<9;k++){const a=k/9*2*P+th,ca=cos(a),sa=sin(a);if(sa>.6&&fr)continue
    const tx_=ca*92,ty_=26+sa*16,mx=ca*60-sa*22,my=8+sa*10
    c.beginPath();c.moveTo(ca*20-8,-10);c.quadraticCurveTo(mx,my-8,tx_,ty_);c.quadraticCurveTo(mx+sa*6,my+12,ca*20+8,12);c.closePath();fs(c,k%2?H:Hd,3)}
  c.restore()
  // seat
  el(c,ax,182+bob,48,12);fs(c,'#3b3f54')
  // legs tucked up, swinging with the turn
  for(const f of[-1,1]){const x=ax+f*14*cs+sn*34,y=200+bob;c.beginPath();c.moveTo(ax+f*12*cs,176+bob);c.quadraticCurveTo((ax+x)/2,186+bob,x,y);st(c,12,S);el(c,x,y+4,9,6);fs(c,'#ffd23f',2.6)}
  // skirt + sweater torso (narrower when side on)
  const tw=16*abs(cs)+14
  c.beginPath();c.moveTo(ax-tw,170+bob);c.lineTo(ax-tw-8,184+bob);c.quadraticCurveTo(ax,190+bob,ax+tw+8,184+bob);c.lineTo(ax+tw,170+bob);c.closePath();fs(c,K)
  c.beginPath();c.moveTo(ax-tw+4,130+bob);c.bezierCurveTo(ax-tw-10,136+bob,ax-tw-6,156+bob,ax-tw,174+bob);c.lineTo(ax+tw,174+bob);c.bezierCurveTo(ax+tw+6,156+bob,ax+tw+10,136+bob,ax+tw-4,130+bob);c.closePath();fs(c,C)
  if(fr){c.beginPath();c.moveTo(ax-12*cs+sn*8,132+bob);c.quadraticCurveTo(ax+sn*8,142+bob,ax+12*cs+sn*8,132+bob);c.lineWidth=3;c.strokeStyle=Cd;c.stroke()}
  // arms up: wheee
  for(const f of[-1,1]){const sx=ax+f*(tw-2),x=ax+f*66*cs+sn*14*f,y=96+bob+f*sn*6;c.beginPath();c.moveTo(sx,140+bob);c.quadraticCurveTo(ax+f*52*cs,138+bob,x,y);st(c,11,C);el(c,x,y,8,8);fs(c,S,3)}
  // head
  c.save();c.translate(ax,84+bob);c.scale(.8,.8);c.rotate(-sn*.08)
  // head turning: hair all round, a face window that slides round and narrows as she turns away
  hd(c,H)
  const wr=22+28*cs,wx=sn*26,fx=max(.3,abs(cs))
  if(wr>12){c.save();c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);c.clip()
    el(c,wx,16,wr,42);fs(c,S,3.5)
    if(cs>-.15){c.save();c.translate(wx*.9,0);c.scale(fx,1);face(c,{e:I,ex:'happy',m:'grin',mo:1.2,bc:Hd});c.restore()}
    c.save();c.translate(wx,0);c.scale(max(.15,wr/50),1)
    c.beginPath();c.moveTo(-60,-80);c.lineTo(60,-80);c.lineTo(60,-6);qs(c,[60,-6,46,-8,34,0,22,-18,10,-4,0,-22,-10,-4,-22,-18,-34,0,-46,-8,-60,-6],.2);c.closePath();fs(c,H,0)
    c.beginPath();qs(c,[50,-8,46,-8,34,0,22,-18,10,-4,0,-22,-10,-4,-22,-18,-34,0,-46,-8,-50,-8],.2);c.lineWidth=3.5/max(.15,wr/50);c.strokeStyle=O;c.stroke()
    c.restore();c.restore()}
  else{c.beginPath();c.moveTo(-sn*10,-66);c.quadraticCurveTo(-sn*16,-10,-sn*6,40);c.lineWidth=3;c.strokeStyle=Hd;c.stroke()}
  hd(c,'rgba(0,0,0,0)')
  c.beginPath();c.arc(0,-20,46,P*1.12,P*1.88);c.lineWidth=7;c.strokeStyle=K;c.stroke()
  if(fr){c.beginPath();c.arc(0,-24,40,P*1.22,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()}
  c.restore()
  if(!fr)back()
}
