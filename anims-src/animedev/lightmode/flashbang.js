// a dark-mode girl with long black hair and a moon hoodie opens a light-mode page, gets blasted by a blinding white flash, shields her eyes, then pulls her sunglasses down and plays it cool
// tags: funny, anime, coding, screen, bright, sunglasses
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
export const frames=28,delay=[...Array(28)].map((_,k)=>k==6?160:85),rim=4
const H='#2c2a40',Hd='#1b1a2b',Hl='#6b68a0',S='#fde3d0',C='#5a5288',Cd='#3d3766',I=['#4b1170','#d07bff']
export default(c,t,i)=>{
  const lit=t>=.2&&t<.92,fl=t>=.2&&t<.3,sh=t>=.26&&t<.6,gd=sg(t,.56,.66)-sg(t,.92,.99),cool=t>=.66&&t<.92
  const blast=fl?1-(t-.2)/.1:0
  // light rays from the monitor
  const sx=66,sy=96
  if(lit){const n=14,L=fl?96:sh?84+sin(t*P*10)*6:72;c.save();c.beginPath();c.rect(9,9,238,238);c.clip();c.translate(sx,sy)
    for(let k=0;k<n;k++){const a=k/n*2*P+t*.8,l=L*(k%2?.75:1);pg(c,cos(a-.2)*20,sin(a-.2)*20,cos(a-.07)*l,sin(a-.07)*l,cos(a+.07)*l,sin(a+.07)*l,cos(a+.2)*20,sin(a+.2)*20);fs(c,k%2?'#fff1a0':'#ffe066',3)}
    c.restore()}
  // monitor
  rr(c,58,142,16,24,3);fs(c,'#8e96aa');rr(c,36,162,60,10,4);fs(c,'#aab2c5')
  rr(c,12,52,108,92,9);fs(c,'#3a3f55');rr(c,20,60,92,76,4);fs(c,lit?'#ffffff':'#1b1f33',2.5)
  c.save();rr(c,20,60,92,76,4);c.clip()
  if(lit){c.fillStyle='#e9edf5';c.fillRect(20,60,92,12);for(let k=0;k<5;k++){rr(c,28,80+k*10,[60,44,52,30,48][k],5,2.5);fs(c,'#c7cede',0)}}
  else for(let k=0;k<6;k++){rr(c,28+(k%3)*8,68+k*11,[40,30,46,24,36,20][k],5,2.5);fs(c,['#ff79a8','#7ee0ff','#ffd166','#a1f08f','#c99bff','#7ee0ff'][k],0)}
  if(t>=.9||t<.04){const p=t>=.9?sg(t,.9,.95):1-sg(t,0,.04);c.save();c.translate(66,98);c.scale(.5+p*.5,.5+p*.5);c.globalAlpha=p;el(c,0,0,18);fs(c,'#3a3f55',3);c.beginPath();c.arc(-2,0,10,P*.35,P*1.65);c.arc(4,-2,8,P*1.5,P*.5,1);c.closePath();fs(c,'#ffd23f',2.4);c.restore()}
  c.restore()
  // the girl, hair blown back by the blast
  const hx=180,hy=104,bw=blast*14
  c.save();c.translate(hx,hy);c.scale(.82,.82);c.rotate(blast*.12)
  c.beginPath();c.moveTo(-52,-6);c.bezierCurveTo(-60+bw,50,-46+bw,90,-36+bw*1.6,112);c.lineTo(40+bw*1.6,112);c.bezierCurveTo(52+bw,90,62+bw,50,52,-6);c.closePath();fs(c,Hd)
  c.restore()
  // hoodie
  c.beginPath();c.moveTo(hx-22,142);c.bezierCurveTo(hx-48,148,hx-54,172,hx-56,206);c.lineTo(hx-58,238);c.lineTo(hx+58,238);c.lineTo(hx+56,206);c.bezierCurveTo(hx+54,172,hx+48,148,hx+22,142);c.closePath();fs(c,C)
  c.beginPath();c.moveTo(hx-24,144);c.quadraticCurveTo(hx,164,hx+24,144);c.lineWidth=3;c.strokeStyle=Cd;c.stroke()
  c.beginPath();c.arc(hx+6,194,13,P*.3,P*1.7);c.arc(hx+13,191,10,P*1.6,P*.4,1);c.closePath();fs(c,'#ffd23f',2.6)
  // mouse hand (before the blast) / resting hand
  if(!sh){const mx=hx-40,my=208;c.beginPath();c.moveTo(hx-40,160);c.quadraticCurveTo(hx-62,190,mx,my);st(c,13,C);el(c,mx-4,my+6,10,7);fs(c,'#e8ebf3',2.6);el(c,mx,my,8.5,7.5);fs(c,S,3)}
  // head
  c.save();c.translate(hx,hy);c.scale(.82,.82);c.rotate(blast*.12-(sh?.06:0))
  hd(c,S)
  if(t<.2)face(c,{e:I,lx:-6,ly:1,m:'cat',bc:Hd})
  else if(fl)face(c,{e:I,ex:'shut',m:'grit',mo:1.3,br:-1,bc:Hd})
  else if(sh)face(c,{e:I,ex:'shut',m:'wave',mo:1.1,br:1.2,bc:Hd})
  else if(cool)face(c,{e:I,ex:'line',m:'smug',mo:1.2,bc:Hd})
  else face(c,{e:I,lx:-6,m:'cat',bc:Hd})
  // fringe
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,46,-4,38,-10,32,6,22,-16,14,0,4,-22,-6,-2,-18,-18,-28,2,-38,-12,-46,-2,-50,26],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  // sunglasses: parked on her head, pulled down over her eyes
  const gy=-46+56*E(gd)
  c.save();c.translate(0,gy)
  for(const f of[-1,1]){rr(c,f*21-16,-2,32,22,[5,5,12,12]);fs(c,'#15131f',3.2)}
  c.beginPath();c.moveTo(-5,3);c.quadraticCurveTo(0,0,5,3);c.lineWidth=3.2;c.strokeStyle=O;c.stroke()
  c.lineWidth=3;c.strokeStyle='rgba(255,255,255,.5)';for(const f of[-1,1]){c.beginPath();c.moveTo(f*21-10,4);c.lineTo(f*21-4,4);c.stroke()}
  c.restore()
  // moon hair clip
  c.save();c.translate(36,-38);c.rotate(.4);c.beginPath();c.arc(0,0,9,P*.35,P*1.65);c.arc(5,-2,7,P*1.5,P*.5,1);c.closePath();fs(c,'#ffd23f',2.6);c.restore()
  c.restore()
  // glint on the shades
  if(cool){const p=(t-.68)/.12;if(p>0&&p<1){c.save();c.translate(hx-12+p*10,hy+6);const s=sin(p*P);c.scale(s,s);pg(c,0,-14,3,-3,14,0,3,3,0,14,-3,3,-14,0,-3,-3);fs(c,'#fff',2.4);c.restore()}}
  // shielding arm across her eyes
  if(sh){const k=sg(t,.26,.32)*(1-sg(t,.54,.6)),ax=hx-58+20*(1-k),ay=122-30*k
    c.beginPath();c.moveTo(hx-40,160);c.quadraticCurveTo(hx-64,140,ax,ay);c.lineTo(ax+52*k,ay-6*k);st(c,14,C);el(c,ax+56*k,ay-6*k,9,8);fs(c,S,3)}
  // big flash burst
  if(fl){const s=.55+blast*.45;c.save();c.beginPath();c.rect(9,9,238,238);c.clip();c.translate(106,104);c.scale(s,s);pg(c,...[...Array(24)].flatMap((_,k)=>{const r=k%2?44:86,a=k*P/12;return[cos(a)*r,sin(a)*r]}));fs(c,'#fff',3.5);c.restore()
    c.save();c.translate(hx-6,hy-56);c.rotate(-.1);tx(c,'AAH!',0,0,22,'#ff5d8f',5);c.restore()}
}
