// a girl with a copper-red messy top bun stabbed with a pencil and a cobalt hoodie slams a big Ctrl+S key and the jumbled code blocks on her screen snap into neat aligned rows with sparkles, she beams satisfied
// tags: happy, anime, coding, satisfying, keyboard, sparkle
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
const cl=(c,x,y,r,n=9,b=.2,ry=r,ph=0)=>{c.beginPath();for(let j=0;j<=n*10;j++){const a=j/(n*10)*2*P,q=1-b+b*Math.abs(Math.sin(a*n/2+ph));c.lineTo(x+Math.cos(a)*r*q,y+Math.sin(a)*ry*q)}c.closePath()}
export const frames=28,delay=75,rim=4
const SK='#9c6440',H='#d9542c',Hd='#a83a1c',Hl='#ff9a6b',J='#3f6fe0',Jd='#2a4fb0'
const K=['#ff79a8','#ffd166','#7ee0ff','#a1f08f','#c99bff']
const rows=[[0,[22,30]],[1,[18,26,16]],[2,[30,22]],[2,[14,34]],[1,[26,18]],[0,[12]]]
const rnd=k=>{const s=sin(k*91.7)*4373.1;return s-floor(s)}
export default(c,t,i)=>{
  // messy -> wind up -> SLAM save -> snap into rows -> admire -> code drifts messy again
  const wu=sg(t,.22,.34),sl=sg(t,.34,.4),dn=t>=.39&&t<.5,sat=t>.5&&t<.84,mess=sg(t,.84,1)
  const hx=62,hy=118,kd=dn?4:0
  // monitor with the code blocks
  rr(c,104,12,142,138,10);fs(c,'#1d2133');rr(c,104,12,142,20,[10,10,0,0]);fs(c,'#3a3f57',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,118+k*13,22,4);fs(c,f,0)})
  c.save();rr(c,104,32,142,118,[0,0,10,10]);c.clip()
  let n=0
  for(const[r,[ind,ws]]of rows.entries()){let x=116+ind*14
    for(const[j,w]of ws.entries()){const q=n++,d=.012*r+.006*j,p=t<.4?0:t<.84?min(1,(t-.4-d)/.1):1-mess
      const e=p<=0?0:p>=1?1:1+2.2*(p-1)**3+1.2*(p-1)**2,m=1-e
      const dx=(rnd(q)-.5)*52*m,dy=(rnd(q+9)-.5)*22*m,a=(rnd(q+3)-.5)*1.3*m+(t<.4?sin(t*P*8+q)*.04:0)
      c.save();c.translate(x+w/2+dx,48+r*17+dy);c.rotate(a);rr(c,-w/2,-4.5,w,9,4.5);fs(c,K[(q*2+r)%5],0);c.restore();x+=w+6}}
  c.restore()
  // snap sparkles along the rows + a little check badge
  if(t>.44&&t<.8){const p=(t-.44)/.36;for(let k=0;k<4;k++){const b=sg(p,k*.12,k*.12+.3)*(1-sg(p,k*.12+.4,k*.12+.7));if(b>0)spk(c,[136,214,186,152][k],[44,62,100,126][k],10*b,k%2?'#fff3a0':'#b6f7ff',2.5)}
    const b=E(min(1,p*4))*(1-sg(p,.85,1));el(c,226,132,13*b);fs(c,'#3ccf7a',3*b);c.beginPath();c.moveTo(220,132);c.lineTo(225,137);c.lineTo(233,127);ln(c,3.4*b,'#fff')}
  // Ctrl+S keycap
  rr(c,132,178+kd,92,48,9);fs(c,'#b9c0d6');rr(c,138,180+kd,80,36,8);fs(c,'#eef1f8',3);tx(c,'Ctrl+S',178,198+kd,17,'#3a3f57',0)
  if(dn){c.lineWidth=4;c.strokeStyle=O;for(const b of[-2.6,-.5,-2.95,-.15]){c.beginPath();c.moveTo(178+cos(b)*56,206+sin(b)*36);c.lineTo(178+cos(b)*68,206+sin(b)*44);c.stroke()}}
  c.save();c.translate(hx,hy);c.scale(.92,.92)
  // hoodie with the hood bunched behind the neck
  el(c,0,50,38,14);fs(c,Jd)
  c.beginPath();c.moveTo(-24,46);c.bezierCurveTo(-48,52,-56,80,-56,110);c.lineTo(-58,128);c.lineTo(58,128);c.lineTo(56,110);c.bezierCurveTo(56,80,48,52,24,46);c.closePath();fs(c,J)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*10,56);c.lineTo(f*12,88);ln(c,2.6,'#fff');el(c,f*12,90,3);fs(c,'#fff',2)}
  rr(c,-24,96,48,22,6);fs(c,Jd,2.5)
  // head
  c.rotate(-.04+wu*.05-sl*.08)
  hd(c,SK)
  face(c,dn?{ex:'shut',m:'open',mo:1,br:-.8,bc:Hd,bl:1.3}:sat?{ex:'calm',m:'cat',mo:1.2,br:.4,bc:Hd,bl:1.6}
    :{e:['#4a1a8a','#b78cff'],lx:6,ly:-1,op:.7,tl:3,m:wu>.3?'grit':'frown',mo:.9,br:-.8,bc:Hd,bl:1})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,44,-4,36,0,30,-18,18,-4,10,-22,-2,-6,-12,-24,-24,-8,-34,-18,-42,2,-50,26],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.5);ln(c,5,Hl)
  c.save();c.translate(0,-66);c.rotate(-.1+(dn?.08:0))
  c.save();c.rotate(-.5);rr(c,-36,-5,64,10,3);fs(c,'#ffd34d',3);pg(c,28,-5,40,0,28,5);fs(c,'#f6d7b0',2.5);el(c,38,0,2.2);fs(c,O,0);rr(c,-40,-5,8,10,[3,0,0,3]);fs(c,'#ff8fab',2.5);c.restore()
  cl(c,0,-6,21,7,.12,18);fs(c,H);c.beginPath();c.arc(0,-6,11,P*1.1,P*1.9);c.moveTo(-14,0);c.quadraticCurveTo(0,8,14,0);ln(c,2.5,Hd)
  c.save();c.rotate(-.5);rr(c,-4,-5,32,10,3);fs(c,'#ffd34d',3);pg(c,28,-5,40,0,28,5);fs(c,'#f6d7b0',2.5);el(c,38,0,2.2);fs(c,O,0);c.restore()
  c.restore()
  c.restore()
  if(sat){for(const[x,y,s]of[[hx+48,hy-50,1],[hx-50,hy-38,.7]]){const b=sin(((t-.5)/.34)*P);spk(c,x,y,9*s*b,'#fff3a0',2.2)}}
  // slamming arm: wind up high, then down onto the key
  const ax=lerp(lerp(136,128,wu),168,sl)+(t<.22?sin(t*P*9)*2:0),ay=lerp(lerp(168,100,wu),186+kd,sl)
  c.beginPath();c.moveTo(hx+28,hy+46);c.quadraticCurveTo(hx+48,max(ay,hy+40)+10,ax-6,ay+2);st(c,15,J)
  el(c,ax,ay,11,10);fs(c,SK,3.2);c.beginPath();c.moveTo(ax-3,ay-8);c.lineTo(ax-3,ay-2);c.moveTo(ax+3,ay-9);c.lineTo(ax+3,ay-3);ln(c,2)
  c.beginPath();c.moveTo(hx-28,hy+46);c.quadraticCurveTo(hx-44,hy+80,hx-30,hy+104);st(c,15,J);el(c,hx-28,hy+106,9.5,8.5);fs(c,SK,3.2)
}
const lerp=(a,b,k)=>a+(b-a)*k
