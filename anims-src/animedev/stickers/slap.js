// a freckled girl with a sky-blue high ponytail in green overalls slaps stickers onto her closed laptop one by one, then shows off her decorated lid with a proud ta-da
// tags: proud, happy, anime, laptop, decorating, playful
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
export const frames=32,delay=75,rim=4
const H='#5aa9ff',Hd='#2f7ad9',Hl='#bfe0ff',S='#a86b4a',Sd='#8a5236',G='#4caf6a',Gd='#2f8a4e',I=['#0a5a6b','#5fd3e8']
const slot=[[.2,.36],[.52,.24],[.82,.42],[.3,.76],[.7,.74]],D=.14
const lid=(u,v)=>{const y=152+v*78,l=36-v*14,r=220+v*14;return[l+(r-l)*u,y]}
const stk=(c,k)=>{c.lineWidth=3
  if(k==0){c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-18,-4,-10,-18,0,-8);c.bezierCurveTo(10,-18,18,-4,0,8);fs(c,'#ff5d8f',3);el(c,-6,-7,3,2);fs(c,'#fff',0)}
  else if(k==1){rr(c,-20,-11,40,22,7);fs(c,'#2f3a66',3);tx(c,'</>',0,1,14,'#7ee0ff',0)}
  else if(k==2){pg(c,...[...Array(10)].flatMap((_,q)=>{const r=q%2?7:16,a=q*P/5-P/2;return[cos(a)*r,sin(a)*r+2]}));fs(c,'#ffd23f',3)}
  else if(k==3){pg(c,-15,-4,-12,-17,-4,-10,4,-10,12,-17,15,-4);c.closePath();fs(c,'#ffb86b',3);el(c,0,2,15,12);fs(c,'#ffb86b',3);for(const f of[-1,1]){el(c,f*6,0,2,2.6);fs(c,O,0)}c.beginPath();c.moveTo(-3,6);c.quadraticCurveTo(0,9,3,6);c.lineWidth=2;c.stroke()}
  else{rr(c,-24,-10,48,20,10);fs(c,'#7ae582',3);tx(c,'LGTM',0,1,12,'#fff',3.5,'DejaVu Sans')}}
export default(c,t,i)=>{
  const sl=t<.7,pr=t>=.7&&t<.93,rs=sg(t,.92,.99),k=sl?t/D|0:5,p=sl?t/D-k:0
  const imp=sl&&p>=.45&&p<.7
  // ponytail behind (bounces with each slap)
  const hx=128,hy=80+(imp?3:0)-(pr?4:0)
  c.save();c.translate(hx,hy);c.scale(.8,.8)
  c.save();c.translate(14,-64);c.rotate(.02+(imp?.18:0)+sin(t*P*4)*.06)
  c.beginPath();c.moveTo(-8,0);c.bezierCurveTo(40,-40,96,0,82,74);c.quadraticCurveTo(72,52,62,70);c.bezierCurveTo(64,26,36,8,8,12);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(26,0);c.quadraticCurveTo(52,10,56,36);c.lineWidth=3;c.strokeStyle=Hd;c.stroke()
  el(c,0,4,10,8,.4);fs(c,'#ffd23f',3)
  c.restore()
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-56,30,-46,46,-36,48);c.lineTo(36,48);c.bezierCurveTo(46,46,56,30,50,0);c.closePath();fs(c,Hd)
  c.restore()
  // torso: overalls over a striped tee
  c.save();c.beginPath();c.moveTo(106,118);c.bezierCurveTo(84,124,76,140,74,170);c.lineTo(182,170);c.bezierCurveTo(180,140,172,124,150,118);c.closePath();fs(c,'#fff');c.clip()
  c.fillStyle='#ff7a68';for(let y=124;y<170;y+=10)c.fillRect(60,y,140,5);c.restore()
  c.beginPath();c.moveTo(106,118);c.bezierCurveTo(84,124,76,140,74,170);c.lineTo(182,170);c.bezierCurveTo(180,140,172,124,150,118);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  for(const f of[-1,1]){el(c,128+f*40,134,12,10,f*.5);fs(c,'#fff',3)}
  rr(c,104,138,48,34,6);fs(c,G);for(const f of[-1,1]){c.beginPath();c.moveTo(128+f*20,140);c.lineTo(128+f*24,120);st(c,6,G,3);el(c,128+f*20,142,3);fs(c,'#ffd23f',2)}
  // head
  c.save();c.translate(hx,hy);c.scale(.8,.8);c.rotate(pr?-.06:imp?.03:0)
  hd(c,S)
  if(pr)face(c,{e:I,ex:'happy',m:'smile',mo:1.2,br:-.3,bc:Hd,fr:'#6e3f26'})
  else if(imp)face(c,{e:I,ex:'shut',m:'grin',mo:1.1,br:-.6,bc:Hd,fr:'#6e3f26'})
  else face(c,{e:I,ly:5,lx:(slot[min(4,k)][0]-.5)*10,m:'cat',mo:1.1,br:-.3,bc:Hd,fr:'#6e3f26'})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,46,-4,38,-12,30,2,20,-18,8,-4,-2,-22,-12,-4,-24,-18,-34,0,-44,-10,-50,26],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  // closed laptop lying on the desk
  pg(c,36,150,220,150,234,232,22,232);fs(c,'#c7cfdf',3.5);pg(c,22,232,234,232,232,240,24,240);fs(c,'#9aa3b8',3)
  c.save();pg(c,36,150,220,150,234,232,22,232);c.clip();c.beginPath();c.moveTo(60,150);c.lineTo(36,232);c.moveTo(74,150);c.lineTo(56,232);c.lineWidth=5;c.strokeStyle='rgba(255,255,255,.5)';c.stroke();c.restore()
  // placed stickers
  for(let j=0;j<5;j++){if(j>k||(j==k&&(!sl||p<.45)))if(!(j<k))continue;const[x,y]=lid(...slot[j]);const q=j==k?sg(p,.45,.6):1,b=j==k?1+.35*sin(min(1,(p-.45)/.3)*P):1,z=(1-rs)*(1.2+slot[j][1]*.3)
    if(z<=.02)continue;c.save();c.translate(x,y);c.rotate([-.15,.1,.2,-.1,.08][j]);c.scale(z*b,z*.7*b*(2-q));stk(c,j);c.restore()}
  // arms: one slaps a sticker down, the other rests on the lid edge
  const arm=(sx,x,y,f)=>{c.beginPath();c.moveTo(sx,130);c.quadraticCurveTo(sx+f*18,(130+y)/2+10,x,y);st(c,11,S);el(c,x,y,9.5,8.5);fs(c,S,3.2)}
  if(sl){const[x,y]=lid(...slot[k]),f=slot[k][0]<.5?-1:1,wu=sg(p,0,.3),dn=sg(p,.3,.45),bk=sg(p,.75,1)
    const ix=hx+f*58,iy=168,rx=x*.6+hx*.4+f*12,ry=96
    let ax=ix+(rx-ix)*wu,ay=iy+(ry-iy)*wu;ax+=(x-ax)*dn;ay+=(y-ay)*dn;if(bk){ax+=(ix-ax)*bk;ay+=(iy-ay)*bk}
    if(p<.45){c.save();c.translate(ax,ay-14);c.rotate(f*.3);c.scale(.8,.8);stk(c,k);c.restore()}
    arm(hx+f*24,ax,ay,f);arm(hx-f*24,hx-f*58,168,-f)
    if(imp){c.lineWidth=3.5;c.strokeStyle=O;for(const a of[-2.6,-1.9,-1.2,-.5]){c.beginPath();c.moveTo(x+cos(a)*26,y+sin(a)*18);c.lineTo(x+cos(a)*38,y+sin(a)*28);c.stroke()}
      c.save();c.translate(x+(f<0?34:-34),y-34);c.rotate(f*-.15);tx(c,'SLAP!',0,0,15,'#ffe14d',4.5);c.restore()}
  }else{const tw=sg(t,.7,.76)*(1-sg(t,.9,.97));for(const f of[-1,1]){const x=hx+f*(58+34*tw),y=168-60*tw;arm(hx+f*24,x,y,f)}
    if(pr)for(const[x,y,o]of[[40,70,0],[216,64,.4],[200,124,.7],[56,128,.2]]){const s=.5+.4*sin(t*P*10+o*6);c.save();c.translate(x,y);c.scale(s,s);pg(c,0,-10,3,-3,10,0,3,3,0,10,-3,3,-10,0,-3,-3);fs(c,'#fff3a0',2.4);c.restore()}}
}
