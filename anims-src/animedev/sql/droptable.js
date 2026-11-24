// a girl with round glasses and a long brown braid types DROP TABLE on her laptop, the little wooden users table next to her drops through a trapdoor and she gasps, then frantically types ROLLBACK and it pops back up
// tags: anime, coding, database, laptop, anxious, oops
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
export const frames=28,delay=85,rim=4
const H='#5a3624',Hd='#3c2116',Hl='#9a6a4a',SK='#b5784f',SKd='#94603c',J='#2fb5a5',Jd='#1f8579',Wd='#c98a4a',Wdd='#9a5f2c'
const ob=x=>{const a=2.2;return 1+(a+1)*(x-1)**3+a*(x-1)**2}
export default(c,t,i)=>{
  const cmd='DROP TABLE users;',n1=min(17,Math.floor(sg(t,.02,.36)*17.99)),rb='ROLLBACK;',n2=min(9,Math.floor(max(0,(t-.68)/.14)*10))
  const typing=t<.38||(t>.68&&t<.82),gasp=t>.46&&t<.68,panic=t>=.68&&t<.84,relief=t>=.88
  const open=sg(t,.42,.45)*(1-sg(t,.92,.96))
  let dy=t<.44?0:t<.84?110*min(1,((t-.44)/.11)**2):110*(1-ob(min(1,(t-.84)/.08)))
  const hx=78,hy=108+(typing&&i%2?1.5:0)+(gasp?-3:0)
  // terminal popup
  rr(c,124,12,122,64,8);fs(c,'#1d2133');rr(c,124,12,122,14,[8,8,0,0]);fs(c,'#3a3f57',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,134+k*10,19,3.2);fs(c,f,0)})
  c.font='bold 11px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle'
  const ln=[[cmd.slice(0,n1),'#fff']]
  if(t>.4)ln.push(['Query OK','#5dff8a'])
  if(t>.68)ln.push([rb.slice(0,n2),'#ffd34d'])
  ln.forEach(([s,f],k)=>{c.fillStyle=f;c.fillText(s,130,35+k*14)})
  const cur=ln[ln.length-1];if(i%2==0&&(typing||t<.4)){c.fillStyle='#e8ecff';c.fillRect(130+cur[0].length*6.62,30+(ln.length-1)*14,6,11)}
  // floor slab with the trapdoor
  pg(c,146,208,248,208,248,232,138,232);fs(c,'#e2b981');rr(c,138,230,110,10,[0,0,4,4]);fs(c,'#b9884f')
  c.lineWidth=1.8;c.strokeStyle='#c49a63';for(const y of[214,220,226]){c.beginPath();c.moveTo(146-(y-208)*.35,y);c.lineTo(246,y);c.stroke()}
  pg(c,168,212,232,212,234,228,164,228);fs(c,'#1a1420',2.5)
  // the users table (falls through the hole, clipped by the trapdoor's front edge)
  c.save();c.beginPath();c.rect(0,0,256,228);c.clip();c.translate(0,dy)
  for(const x of[176,222]){rr(c,x-4,172,8,48,3);fs(c,Wdd,3)}
  rr(c,172,172,56,12,3);fs(c,Wdd,3)
  rr(c,164,162,72,12,4);fs(c,Wd,3.5);c.beginPath();c.moveTo(170,166);c.lineTo(198,166);c.lineWidth=2.5;c.strokeStyle='#e8b27a';c.stroke()
  // potted sprout on top
  pg(c,188,162,212,162,208,144,192,144);fs(c,'#e86d4f',3);rr(c,189,140,22,6,2);fs(c,'#f08a6a',2.5)
  for(const f of[-1,1]){c.beginPath();c.moveTo(200,140);c.quadraticCurveTo(200+f*4,128,200+f*13,124);c.quadraticCurveTo(200+f*6,134,200,140);fs(c,'#5ccf6a',2.5)}
  // paper tag on the apron
  c.save();c.translate(200,188);c.rotate(.06*S(t*2*P*2));rr(c,-22,-7,44,15,3);fs(c,'#fffbe6',2.5);c.fillStyle=O;c.font='bold 11px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillText('users',0,1);c.restore()
  c.restore()
  // trapdoor flaps swinging down
  if(open>0){const w=34*(1-open*.85);for(const[h,s]of[[166,1],[233,-1]]){pg(c,h,212,h+s*w,212+open*14,h+s*w,226+open*10,h,228);fs(c,'#a8763f',2.5)}}
  else{pg(c,168,212,232,212,234,228,164,228);fs(c,'#cfa067',2.5);c.beginPath();c.moveTo(200,212);c.lineTo(199,228);c.lineWidth=2.5;c.stroke()}
  if(t>.44&&t<.5){c.lineWidth=3;c.strokeStyle=O;for(const x of[172,228]){c.beginPath();c.moveTo(x,150);c.lineTo(x,184);c.stroke()}}
  // braid behind, then torso
  c.save();c.translate(hx,hy);c.scale(.86,.86)
  c.beginPath();c.moveTo(-52,-10);c.bezierCurveTo(-60,30,-52,52,-42,58);c.lineTo(42,58);c.bezierCurveTo(52,52,60,30,52,-10);fs(c,Hd)
  c.restore()
  c.beginPath();c.moveTo(hx-26,150);c.bezierCurveTo(hx-48,156,hx-56,176,hx-58,204);c.lineTo(hx-58,240);c.lineTo(hx+58,240);c.lineTo(hx+58,204);c.bezierCurveTo(hx+56,176,hx+48,156,hx+26,150);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-14,151);c.quadraticCurveTo(hx,162,hx+14,151);fs(c,'#fff',3)
  for(let k=0;k<5;k++){el(c,hx+38+k*1.5,hy+40+k*14,9-k*.6,9.5);fs(c,H,3);c.beginPath();c.moveTo(hx+32+k*1.5,hy+36+k*14);c.quadraticCurveTo(hx+40+k*1.5,hy+44+k*14,hx+46+k*1.5,hy+38+k*14);c.lineWidth=2;c.strokeStyle=Hd;c.stroke()}
  el(c,hx+46,hy+110,5,4);fs(c,'#ff7aa8',2.5)
  // head
  c.save();c.translate(hx,hy);c.scale(.86,.86);c.rotate(gasp?-.06:0)
  hd(c,SK)
  const E=['#3f5a1e','#b4cf62']
  face(c,gasp?{e:E,pp:.5,lx:7,m:'gasp',mo:1.2,br:1.2,bs:.2}:panic?{ex:'shut',m:'wave',mo:1.1,br:1}:relief?{ex:'calm',m:'smile',mo:.8,br:.6}:t>.4?{e:E,lx:8,ly:-1,m:'o',br:.4}:{e:E,ly:4,lx:2,m:'cat',br:0,op:.9})
  // round glasses
  for(const f of[-1,1]){el(c,f*20,11,15,14);c.lineWidth=3;c.strokeStyle='#6a3b8a';c.stroke();c.beginPath();c.moveTo(f*8,-1);c.lineTo(f*2,2);c.stroke()
    c.beginPath();c.moveTo(f*35,8);c.lineTo(f*45,4);c.stroke();c.beginPath();c.moveTo(f*20-8,2);c.lineTo(f*20-3,-2);c.lineWidth=2;c.strokeStyle='rgba(255,255,255,.8)';c.stroke()}
  c.beginPath();c.moveTo(-50,20);c.bezierCurveTo(-58,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-44,50,20)
  qs(c,[50,20,42,-12,30,-4,22,-22,10,-8,-2,-24,-8,-6,-22,-18,-32,-2,-42,-12,-50,20],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  // laptop lid seen from behind
  rr(c,30,172,96,60,7);fs(c,'#cfd6e4');rr(c,30,226,96,8,3);fs(c,'#aab3c6',3)
  c.save();c.translate(78,198);el(c,0,-8,12,4.5);fs(c,'#7ee0ff',2.5);c.beginPath();c.moveTo(-12,-8);c.lineTo(-12,8);c.ellipse(0,8,12,4.5,0,P,0,1);c.lineTo(12,-8);fs(c,'#7ee0ff',2.5);c.beginPath();c.ellipse(0,0,12,4.5,0,0,P);c.lineWidth=2;c.stroke();c.restore()
  // hands: typing on the lid edge, flying to her cheeks in the gasp
  if(gasp){for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*38,160);c.quadraticCurveTo(hx+f*64,172,hx+f*34,hy+30);st(c,13,J);el(c,hx+f*33,hy+28,9,10);fs(c,SK,3.2)}
    drop(c,hx+52,hy-30,1.1);drop(c,hx-50,hy-20,.8)}
  else{for(const f of[-1,1]){const u=typing&&(i+(f>0))%2?-4:0;el(c,hx+f*26,170+u,8,6.5);fs(c,SK,3)}
    if(typing){c.lineWidth=2.4;c.strokeStyle=O;for(const f of[-1,1]){const x=hx+f*26;if((i+(f>0))%2)for(const a of[-.5,0,.5]){c.beginPath();c.moveTo(x+S(a)*12,158-C(a)*4);c.lineTo(x+S(a)*16,152-C(a)*6);c.stroke()}}}}
  if(t>.36&&t<.44)tx(c,'⏎',hx+44,168,24,'#ffd34d',5,'DejaVu Sans')
  if(relief)drop(c,hx+48,hy-26,.9)
}
