// a tan girl with a teal bob, yellow star clips and a sunny hoodie watches notification pings burst out of her phone, pile up and swarm around her until she ducks and covers her head, then they all pop
// tags: anxious, anime, phone, notifications, chaos, overwhelmed
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,round}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w=3.5,pf=0)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47-pf,24+pf,-22-pf,46,0,46);c.bezierCurveTo(22+pf,46,47+pf,24+pf,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+4);c.lineTo(x+10,y+4);c.stroke();c.beginPath();c.moveTo(x-8,y+10);c.quadraticCurveTo(x,y+13,x+8,y+10);c.lineWidth=2;c.strokeStyle='rgba(43,29,46,.4)';return c.stroke()}
  if(ex=='dot'){el(c,x,y+3,3.2,4);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='open'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,10,0,11);c.quadraticCurveTo(-8,10,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='pout'){c.moveTo(-5,3);c.quadraticCurveTo(-2,-2,0,1);c.quadraticCurveTo(2,-2,5,3);c.stroke()}
  else if(m=='chew'){c.moveTo(-6,0);c.quadraticCurveTo(-3,3,0,0);c.quadraticCurveTo(3,3,6,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#ffe066',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a-P/2)*q,y+sin(a-P/2)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=20,delay=95,rim=3
const SK='#f0c39a',HR='#2fb3c9',HD='#1d7f99',HL='#a6f2ff',HO='#ffd23f',HOd='#e8a91c',I=['#0f5a3a','#62d68f']
const N=12,PS=[...Array(N)].map((_,k)=>{const a=k*2.4+.6,r=84+(k%3)*10;return{a,r,t:.04+.36*(k/(N-1))**.6,k:k%4,n:['1','3','@','!','9+','12','99+'][k%7]}})
const ping=(c,x,y,s,q,ring)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.rotate(sin(q.a*5)*.15)
  if(q.k==1){c.beginPath();c.roundRect(-16,-12,32,22,8);c.moveTo(-8,8);c.lineTo(-12,16);c.lineTo(0,9);fs(c,'#fff',3);tx(c,'@',0,-1,16,'#8b5cf6',0)}
  else if(q.k==2){c.beginPath();c.moveTo(-12,8);c.quadraticCurveTo(-10,-14,0,-14);c.quadraticCurveTo(10,-14,12,8);c.lineTo(15,11);c.lineTo(-15,11);c.closePath();fs(c,'#ffd84d',3);el(c,0,14,3.5);fs(c,'#ffd84d',2.5);c.beginPath();c.moveTo(0,-14);c.lineTo(0,-18);ln(c,3)}
  else if(q.k==3){c.beginPath();c.roundRect(-14,-12,28,24,6);fs(c,'#4fc3ff',3);c.beginPath();c.moveTo(-14,-9);c.lineTo(0,2);c.lineTo(14,-9);ln(c,2.6)}
  else{const w=max(13,q.n.length*6+6);c.beginPath();c.roundRect(-w,-13,w*2,26,13);fs(c,'#ff4757',3);tx(c,q.n,0,1,15,'#fff',0,'DejaVu Sans')}
  if(ring){c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){c.beginPath();c.arc(0,0,24,(s<0?P:0)-.5,(s<0?P:0)+.5);c.stroke()}}
  c.restore()
}
export default(c,t,i)=>{
  const T=t*2*P,d=sg(t,.36,.46)-sg(t,.84,.95),pop=t>.82&&t<.9,cx=128,cy=136
  // pings sitting behind her in the back half of the swarm
  const pos=q=>{const sw=sg(t,.4,.6)*(t<.86?1:0),a=q.a+sw*(t-.4)*14+sin(T*3+q.a)*.08,r=q.r-sw*6
    return[cx+cos(a)*r*1.08,cy+sin(a)*r*.9,a]}
  const draw=back=>{for(const q of PS){if(t<q.t||t>.88)continue
    const f=min(1,(t-q.t)/.05),[x,y,a]=pos(q),beh=sin(a)<-.2;if(beh!=back)continue
    const X=128+(x-128)*E(f),Y=168+(y-168)*E(f),s=f<1?.4+.6*f+.35*sin(f*P):1
    if(pop){const g=(t-.82)/.08;c.globalAlpha=1-g;ping(c,X,Y,1+g*.6,q,0);c.globalAlpha=1;for(let k=0;k<4;k++){const b=k*P/2+.6;spk(c,X+cos(b)*(14+g*18),Y+sin(b)*(14+g*18),6*(1-g)+1,'#fff',2)}}
    else ping(c,X,Y,s,q,f<1||t-q.t<.08)}}
  draw(1)
  // legs and sneakers
  const hy=94+d*58,hem=190+d*14
  for(const s of[-1,1]){c.beginPath();c.moveTo(cx+s*10,hem-6);c.quadraticCurveTo(cx+s*(12+d*30),208-d*6,cx+s*(11+d*10),224);st(c,13,'#3c4a7a')
    rr(c,cx+s*(11+d*10)-11+s*3,222,22,12,6);fs(c,'#fff');c.beginPath();c.moveTo(cx+s*(11+d*10)-9+s*3,229);c.lineTo(cx+s*(11+d*10)+9+s*3,229);ln(c,2.5,'#ff6b8a')}
  // hoodie body
  const sh=hy+38-d*6,w=26+d*12
  c.beginPath();c.moveTo(cx-16,sh);c.quadraticCurveTo(cx-w-4,sh+2,cx-w-2,sh+26);c.lineTo(cx-w-4+d*-4,hem);c.quadraticCurveTo(cx,hem+6,cx+w+4+d*4,hem);c.lineTo(cx+w+2,sh+26);c.quadraticCurveTo(cx+w+4,sh+2,cx+16,sh);c.closePath();fs(c,HO)
  rr(c,cx-16,hem-26+d*4,32,14,6);fs(c,HOd,2.6)
  for(const s of[-1,1]){c.beginPath();c.moveTo(cx+s*6,sh+4);c.lineTo(cx+s*7,sh+22);ln(c,2.2,'#fff');el(c,cx+s*7,sh+24,2.4);fs(c,'#fff',1.6)}
  // back hair: short bob
  const H=()=>{c.translate(cx,hy);c.rotate(d*.06);c.scale(.8,.8)}
  c.save();H();c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-54,-84,54,-84,50,-20);c.quadraticCurveTo(58,30,46,46);c.lineTo(-46,46);c.quadraticCurveTo(-58,30,-50,-20);fs(c,HD);c.restore()
  // head
  c.save();H();hd(c,SK)
  const ph=t<.13?0:d<.5?(t<.5?1:3):2
  face(c,[{e:I,lx:8,ly:4,m:'o',br:-.2},{e:I,pp:.6,lx:(i%2?-3:3),m:'wave',br:1},{ex:'shut',m:'wave',mo:1.2,br:1},{e:I,ly:-4,lx:-2,m:'o',mo:.8,br:.8}][ph])
  c.beginPath();c.moveTo(-54,20);c.bezierCurveTo(-60,-50,-30,-72,0,-72);c.bezierCurveTo(30,-72,60,-50,54,20)
  qs(c,[54,20,48,-6,42,4,36,-18,24,-6,18,-24,6,-8,-4,-26,-14,-8,-24,-22,-34,-4,-42,-16,-48,4,-54,20],.18);c.closePath();fs(c,HR)
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*46,-8);c.quadraticCurveTo(s*56,24,s*50,46);c.lineTo(s*40,36);c.quadraticCurveTo(s*44,14,s*38,-4);fs(c,HR)}
  c.beginPath();c.arc(0,-26,42,P*1.2,P*1.48);ln(c,5,HL)
  for(const[x,y,r]of[[34,-46,.3],[44,-30,-.2]]){c.save();c.translate(x,y);c.rotate(r);spk(c,0,0,10,HO,2.6);c.restore()}
  c.restore()
  // arms: holding the phone up -> wrapped over her head
  for(const s of[-1,1]){const ax=cx+s*(w-4),ay=sh+10,ex=cx+s*(22+d*34),ey=sh+38-d*70,hx=cx+s*(10+d*4),hy2=sh+30-d*104
    c.beginPath();c.moveTo(ax,ay);c.quadraticCurveTo(ex,ey,hx,hy2);st(c,13-d*2,HO)
    if(s>0&&d<.5){rr(c,cx-11,sh+12,22,34,5);fs(c,'#2b3044');rr(c,cx-8,sh+16,16,24,3);fs(c,i%4<2&&t<.4?'#bfe9ff':'#7fb6d6',0)}
    const ux=hx-ex,uy=hy2-ey,ul=Math.hypot(ux,uy);c.beginPath();c.moveTo(hx-ux/ul*9,hy2-uy/ul*9);c.lineTo(hx-ux/ul*3,hy2-uy/ul*3);st(c,14,'#fff',3)
    el(c,hx,hy2,7.5,7);fs(c,SK,3)}
  if(ph==1)drop(c,cx+46,hy-28,1,.3)
  if(d>.5)for(const s of[-1,1]){c.beginPath();c.moveTo(cx+s*52,hy-40);c.lineTo(cx+s*60,hy-48);c.moveTo(cx+s*56,hy-28);c.lineTo(cx+s*66,hy-30);ln(c,3)}
  draw(0)
}
