// a cheerful girl in a teal janitor jumpsuit and a GC cap, long lavender braid swinging, sweeps grey unused object cubes across the floor into a dustpan where they vanish in sparkles
// tags: happy, anime, coding, cleaning, broom, sparkle
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x)
const sg=(t,a,b)=>E((t-a)/(b-a))
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+Math.cos(a+f)*a*.6,y+2+ly+Math.sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<10;k++){const q=k%2?2.4:6.5,a=k*P/5-P/2;c.lineTo(x+lx-1+Math.cos(a)*q,y+ly-1+Math.sin(a)*q)}fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,mx=0,my=0}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    const q={...o,...(f<0?o.L:o.R)},b=q.br??br;eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*b);c.quadraticCurveTo(f*20,-15-b,f*28,-12+3*b);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(mx,32+my);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'||m=='open'){const w=m=='open'?10:m=='grin'?9:6.5,h=m=='open'?1.8:1.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*h,0,w*h*.87);c.quadraticCurveTo(-w*.6,w*h,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*h*.83,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='pant'){el(c,0,2,6,7);fs(c,'#a3304a',2.2/mo);c.save();el(c,0,2,6,7);c.clip();el(c,0,8,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
const spk=(c,x,y,r,f='#fff3a0',w=2.5)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.32:r;c.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q)}c.closePath();fs(c,f,w)}
export const frames=24,delay=80,rim=4
const SK='#c48356',H='#b89cff',Hd='#8466d8',Hl='#e4d9ff',J='#2bb3a3',Jd='#1d8478',G=234,Z=.9
const cube=(c,x,y,a,s=1,al=1)=>{if(al<=0)return;c.save();c.globalAlpha=al;c.translate(x,y);c.rotate(a);c.scale(s,s)
  pg(c,0,-4,15,-12,15,4,0,12);fs(c,'#a99fcf',0);pg(c,0,-4,-15,-12,-15,4,0,12);fs(c,'#d4cdef',0);pg(c,0,-20,15,-12,0,-4,-15,-12);fs(c,'#f4f1ff',0)
  pg(c,0,-20,15,-12,15,4,0,12,-15,4,-15,-12);ln(c,3);c.beginPath();c.moveTo(-15,-12);c.lineTo(0,-4);c.lineTo(15,-12);c.moveTo(0,-4);c.lineTo(0,12);ln(c,2)
  c.font='bold 9px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#7a70a6';c.translate(-7.5,4);c.transform(1,.53,0,1,0,0);c.fillText('{}',0,0);c.restore()}
export default(c,t,i)=>{
  // sweep stroke: cubes fade in, she pushes right, they tip into the pan and vanish, broom comes back
  const push=sg(t,.16,.52)-sg(t,.7,.96),bx=104+push*58,hx=72+push*12,hy=G-166*Z
  const W=(x,y)=>[hx+x*Z,hy+y*Z],Lc=(x,y)=>[(x-hx)/Z,(y-hy)/Z]
  // dustpan back + handle
  c.beginPath();c.moveTo(238,G-4);c.lineTo(244,178);ln(c,12);c.beginPath();c.moveTo(238,G-4);c.lineTo(244,178);ln(c,6,'#ffb347')
  pg(c,196,G,244,G,242,192,214,198);fs(c,'#ff8f3d')
  // the cubes: unreferenced garbage that gets pushed into the pan, then poofs
  for(const[k,x0,y0,a]of[[0,140,0,-.1],[1,176,0,.08],[2,158,-21,.04]]){
    const app=sg(t,.0+k*.04,.08+k*.04),gone=sg(t,.58+k*.02,.64+k*.02)
    let x=max(x0,bx+40+(k==1?36:k==2?18:0)),y=G-14+y0,r=a
    if(x>198){const q=min(1,(x-198)/16);x=198+q*20+k*4;y=G-16-q*8+y0*.6;r=a-q*.35}
    cube(c,x,y,r+push*(1-push)*sin(t*P*16+k)*.25,1.15,app*(1-gone))}
  for(let k=0;k<6;k++){const p=sg(t,.58+k*.02,.84+k*.02);if(p>0&&p<1){const a=-P/2+(k-2.5)*.48;spk(c,220+cos(a)*(10+p*36),204+sin(a)*(10+p*30),10*sin(p*P),k%2?'#fff3a0':'#b6f7ff')}}
  pg(c,194,G,246,G,244,204);fs(c,'#ffb347')
  // clean floor gleam where the broom passed
  if(t>.5&&t<.9){const p=(t-.5)/.4;spk(c,128,G-20-p*10,8*sin(p*P),'#fff',2.2);spk(c,150,G-10-p*8,6*sin(min(1,p*1.3)*P),'#b6f7ff',2)}
  c.save();c.translate(hx,hy);c.scale(Z,Z)
  // braid swinging behind
  c.save();c.translate(-32,6);c.rotate(.32+push*.1)
  for(let k=0;k<6;k++){el(c,0,k*14,11-k*.6,9.5);fs(c,H,3);c.beginPath();c.moveTo(-6,k*14-4);c.quadraticCurveTo(0,k*14+2,6,k*14-4);ln(c,2,Hd)}
  el(c,0,86,7,5.5);fs(c,'#ffd34d',2.5);c.beginPath();c.moveTo(-4,90);c.lineTo(-7,104);c.moveTo(0,91);c.lineTo(0,106);c.moveTo(4,90);c.lineTo(7,104);ln(c,6.5,H)
  c.restore()
  // legs, boots, jumpsuit with a pocket notepad
  for(const f of[-1,1]){const fx=f*18+push*(f>0?10:-4);c.beginPath();c.moveTo(f*16,100);c.lineTo(fx,148);st(c,20,J);rr(c,fx-14,144,30,22,[9,9,4,4]);fs(c,'#5a4a6a')}
  c.beginPath();c.moveTo(-26,42);c.bezierCurveTo(-46,48,-48,80,-46,110);c.quadraticCurveTo(0,120,46,110);c.bezierCurveTo(48,80,46,48,26,42);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(-42,94);c.quadraticCurveTo(0,102,42,94);ln(c,2.5,Jd);c.beginPath();c.moveTo(0,48);c.lineTo(0,104);ln(c,2.5,Jd)
  rr(c,-30,62,20,16,3);fs(c,'#ffd34d',2.5);c.beginPath();c.moveTo(-26,68);c.lineTo(-14,68);c.moveTo(-26,73);c.lineTo(-18,73);ln(c,1.6)
  // head
  hd(c,SK)
  const fin=t>.58&&t<.86
  face(c,fin?{ex:'happy',m:'grin',mo:1,br:.3,bc:Hd,bl:1.3}:{e:['#a0204f','#ff8fc0'],lx:5,ly:4,op:.9,m:'cat',mo:1.1,bc:Hd,bl:1.2})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-60,0,-60);c.bezierCurveTo(32,-60,58,-40,50,26)
  qs(c,[50,26,44,-4,36,2,30,-14,18,-2,8,-16,-4,-2,-14,-16,-24,0,-34,-12,-42,4,-50,26],.18);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-20,42,P*1.6,P*1.85);ln(c,4,Hl)
  // janitor cap with GC patch
  c.beginPath();c.moveTo(-50,-30);c.bezierCurveTo(-52,-80,52,-80,50,-30);c.closePath();fs(c,Jd)
  c.beginPath();c.moveTo(-54,-30);c.quadraticCurveTo(0,-38,54,-30);c.quadraticCurveTo(62,-22,52,-20);c.quadraticCurveTo(0,-26,-52,-20);c.quadraticCurveTo(-62,-22,-54,-30);fs(c,'#24443f')
  rr(c,-19,-68,38,25,5);fs(c,'#fff',3);tx(c,'GC',0,-55,19,J,0)
  c.restore()
  // push broom from her chest down to the bristle block, hands on the handle
  const A=W(10,58),B=[bx,G-16],at=k=>[A[0]+(B[0]-A[0])*k,A[1]+(B[1]-A[1])*k],h1=at(.08),h2=at(.4)
  c.beginPath();c.moveTo(...A);c.lineTo(...B);ln(c,11);c.beginPath();c.moveTo(...A);c.lineTo(...B);ln(c,5,'#c98a4b')
  rr(c,bx-26,G-22,52,11,3);fs(c,'#8a5a3a',3)
  c.beginPath();for(let k=0;k<10;k++){c.moveTo(bx-23+k*5.1,G-11);c.lineTo(bx-24+k*5.1-push*2,G-1)}ln(c,2.6)
  if(push>.05&&push<.95&&t<.6)for(let k=0;k<3;k++){const p=(t*6+k/3)%1;el(c,bx-30-p*18,G-4-p*8-k*3,2.5*(1-p)+1);fs(c,'#e4e0f2',1.5)}
  c.save();c.translate(hx,hy);c.scale(Z,Z)
  for(const[h,s]of[[h1,[-24,52]],[h2,[28,50]]]){const[x,y]=Lc(...h);c.beginPath();c.moveTo(...s);c.quadraticCurveTo((s[0]+x)/2+4,(s[1]+y)/2+12,x,y);st(c,13,J);el(c,x,y,8.5,8);fs(c,SK,3.2)}
  c.restore()
}
