// a worried girl with chin-length silver hair, a cowlick and a yellow raincoat holds up a little lantern and hops down a staircase of nested }) steps in a code window, deeper and deeper toward a fiery red glow
// tags: anxious, anime, coding, fire, stairs, nesting
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
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
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=20,delay=100,rim=4
const SK='#d9a27a',H='#e8ecf4',Hd='#9aa3b8',Hl='#ffffff',J='#ffd23a',Jd='#e0a000'
const mix=(a,b,k)=>'#'+[0,2,4].map(j=>Math.round(parseInt(a.slice(1+j,3+j),16)*(1-k)+parseInt(b.slice(1+j,3+j),16)*k).toString(16).padStart(2,'0')).join('')
export default(c,t,i)=>{
  // camera drifts one step per loop, she waits nervously, then hops down onto the next step
  const u=t,SW=30,SH=32,sx=k=>4+(k-u)*SW,sy=k=>50+(k-u)*SH
  const hp=sg(t,.5,.82),hopY=-sin(hp*P)*20,crouch=t>.38&&t<.5?sin((t-.38)/.12*P)*5:t>.82&&t<.92?sin((t-.82)/.1*P)*6:0
  // window with a dark-to-ember gradient
  rr(c,8,8,240,240,12);const g=c.createLinearGradient(40,30,220,250);g.addColorStop(0,'#1a1d33');g.addColorStop(.55,'#3a1730');g.addColorStop(1,'#a3242c');fs(c,g,0)
  c.save();rr(c,8,8,240,240,12);c.clip()
  // flames licking up from the bottom right
  for(const[f,k,w]of[['#e8452c',1,3],['#ff9a2e',.72,0],['#ffe066',.45,0]]){c.beginPath();c.moveTo(120,252)
    for(let j=0;j<6;j++){const a=120+j*22,b=a+22,m=(a+b)/2,hh=(18+j*9)*k*(.8+.25*sin(t*P*4+j*2.1))*(j%2?.85:1);c.quadraticCurveTo(a+3,250-hh*.5,m+sin(t*P*4+j)*4,250-hh);c.quadraticCurveTo(b-3,250-hh*.5,b,252)}
    c.closePath();fs(c,f,w)}
  for(let k=0;k<6;k++){const p=(t+k/6)%1,x=150+k*16+sin(p*6+k)*6,y=246-p*90;el(c,x,y,2.4*(1-p)+.8);fs(c,k%2?'#ffd34d':'#ff7a2e',0)}
  // the }) steps, hotter the deeper they go
  for(let k=-1;k<9;k++){const x=sx(k),y=sy(k),d=min(1,max(0,(y-40)/200))
    c.setLineDash([2,6]);c.beginPath();c.moveTo(18,y+12);c.lineTo(x-4,y+12);ln(c,2,mix('#5a6390','#ff7a5a',d));c.setLineDash([])
    rr(c,x,y,56,26,5);fs(c,mix('#4b5590','#8a2433',d),3);rr(c,x+3,y+2,50,6,3);fs(c,mix('#6a76b8','#c4503f',d),0)
    tx(c,'})',x+28,y+15,19,mix('#8ff0ff','#ffe066',d),4.5)}
  // girl standing on step 4, hopping to step 5
  const fx=sx(4)+28+hp*SW,fy=sy(4)+hp*SH+hopY
  c.save();c.translate(fx,fy);c.scale(.56,.56)
  const sq=crouch/6
  // legs
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*12,-46+crouch*2);c.lineTo(f*13+(hp>0&&hp<1?f*5:0),-8);st(c,15,'#3a3550');rr(c,f*13-12,-12,24,14,[7,7,3,3]);fs(c,'#ff5a5a')}
  c.translate(0,-150+crouch*5)
  // hoodie body
  c.beginPath();c.moveTo(-24,46);c.bezierCurveTo(-44,50,-48,80,-46,106);c.quadraticCurveTo(0,114,46,106);c.bezierCurveTo(48,80,44,50,24,46);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(-26,46);c.quadraticCurveTo(0,66,26,46);ln(c,3,Jd)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*9,56);c.lineTo(f*10,74);ln(c,3,'#fff');el(c,f*10,76,3.5);fs(c,'#fff',2)}
  rr(c,-24,80,48,18,6);fs(c,Jd,2.5)
  // hand clutching her chest
  c.beginPath();c.moveTo(-34,58);c.quadraticCurveTo(-40,80,-14,74);st(c,15,J);el(c,-10,70,10,9);fs(c,SK,3.2)
  // head
  c.save();c.rotate(.08)
  hd(c,SK)
  face(c,t>.52&&t<.7?{ex:'shut',m:'wave',mo:1.3,br:1.4,bc:Hd,bl:1.1}:{e:['#0b5a63','#5fe0e8'],lx:4,ly:6,pp:.75,m:'wave',mo:1.2,br:1.4,bc:Hd,bl:1.1})
  c.beginPath();c.moveTo(-50,30);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,30)
  qs(c,[50,30,46,0,38,6,32,-16,20,-2,10,-20,-2,-4,-12,-22,-24,-4,-34,-16,-42,4,-50,30],.2);c.closePath();fs(c,H)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*50,14);c.quadraticCurveTo(f*58,40,f*48,56);c.quadraticCurveTo(f*44,36,f*40,16);fs(c,H,3)}
  c.beginPath();c.moveTo(-4,-66);c.quadraticCurveTo(-2,-94,18,-90);c.quadraticCurveTo(4,-84,6,-66);fs(c,H,3)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.5);ln(c,5,Hl)
  c.restore()
  // lantern arm held out toward the depths
  const lx=58,ly=70+sin(t*P*4)*3
  c.beginPath();c.moveTo(34,60);c.quadraticCurveTo(52,78,lx,ly-24);st(c,15,J);el(c,lx,ly-26,9.5,9);fs(c,SK,3.2)
  c.beginPath();c.moveTo(lx,ly-18);c.lineTo(lx,ly-10);ln(c,3)
  c.save();c.translate(lx,ly+10);c.rotate(sin(t*P*4)*.15)
  rr(c,-14,-20,28,36,6);fs(c,'#ffe680',3.5);c.beginPath();c.moveTo(-14,-8);c.lineTo(14,-8);c.moveTo(-14,4);c.lineTo(14,4);ln(c,2.5)
  el(c,0,-2,5,8);fs(c,'#ff9a2e',0);rr(c,-16,-26,32,8,3);fs(c,'#7a6a8a',3);rr(c,-16,14,32,7,3);fs(c,'#7a6a8a',3)
  c.restore()
  c.restore()
  drop(c,fx+30,fy-104+(t*2%1)*12,.9)
  c.restore()
  // window chrome
  rr(c,8,8,240,24,[12,12,0,0]);fs(c,'#2c2f48',0);c.beginPath();c.moveTo(8,32);c.lineTo(248,32);ln(c,3)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,24+k*13,20,4);fs(c,f,0)})
  tx(c,'callback.js',156,20,12,'#c9cde0',0)
  rr(c,8,8,240,240,12);ln(c,3.5)
}
