// a girl with silver hair in a bun with red kanzashi sticks and a red haori reads a haiku scroll as sakura petals drift by, smug through "it's not DNS / there's no way it's DNS" until "it was DNS" appears and she wilts into gloom
// tags: sad, anime, coding, poem, sakura, network
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
// head shape centred on the origin: radius 45, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// glossy anime eye at x (f=-1 left, 1 right); op lid openness, lx/ly look, pp pupil scale, ex special shapes
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='dot'){c.moveTo(x-9,y-2);c.lineTo(x+9,y-2);c.stroke();el(c,x,y+5,2.6,3);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){c.save();c.translate(x+lx,y+2+ly);c.beginPath();for(let k=0;k<8;k++){const r=k%2?2.6:7.5,q=k*P/4-P/2;c.lineTo(cos(q)*r,sin(q)*r)}c.closePath();fs(c,'#fff',0);c.restore();el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// eyes, brows (br>0 worried, <0 angry), blush and mouth: smile grin o big cat wave smug grit frown flat tongue
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,by=0}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br+by);c.quadraticCurveTo(f*20,-15-br+by,f*28,-12+3*br+by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='big'){el(c,0,2,6,7.5);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,8,4.5,3);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='tongue'){c.moveTo(-6,-1);c.quadraticCurveTo(0,3,6,-1);c.stroke();c.beginPath();c.moveTo(1,.5);c.quadraticCurveTo(3,7,6,5);c.quadraticCurveTo(7,2,5.5,-.5);fs(c,'#ff7d96',2/mo)}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono',al='center')=>{c.font=`bold ${z}px ${fn}`;c.textAlign=al;c.textBaseline='middle';c.lineJoin='round';c.lineWidth=w;c.strokeStyle=O;if(w)c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
// 4-point sparkle, sweat drop
const spk=(c,x,y,r,f='#fff6a8',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,d=k%2?r*.28:r;c.lineTo(x+cos(q)*d,y+sin(q)*d)}c.closePath();fs(c,f,w)}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
export const frames=20,rim=4,delay=[120,120,420,120,120,120,450,200,150,260,120,120,120,120,120,120,120,400,120,120]
const S='#f2cfae',H='#e6e8f4',Hd='#b9bed8',Hl='#ffffff',R='#d8394a',Rd='#a52234',INK='#2b1d2e'
const L=[["it's not DNS",161,15],["there's no way it's DNS",186,14],["it was ",211,18]]
const petal=(c,x,y,a,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-6);c.quadraticCurveTo(7,-4,5,4);c.lineTo(0,2);c.lineTo(-5,4);c.quadraticCurveTo(-7,-4,0,-6);fs(c,'#ffc2d6',1.8);c.restore()}
export default(c,t,i)=>{
  // frame-indexed beats: ink line 1, hold, ink line 2, hold, line 3 lands, shock, gloom, ink fades
  const pl=[min(1,i/2),i<3?0:min(1,(i-2)/3),i<7?0:i==7?.55:1],shock=i==8||i==9,sad=i<10?0:i==10?.6:1,fade=i<18?0:i==18?.45:.85
  const nod=i<7?[0,1.5,0,-1,0,1,0][i]:0,dr=sad*6,hx=128,hy=88+nod+dr,ha=i>2&&i<7?-.07:sad*.08
  // petals behind
  for(let k=0;k<3;k++){const p=(t+k/3)%1;petal(c,20+k*80+p*60,-10+p*150+sin(p*2*P+k)*8,p*4+k,1.1)}
  // back hair and bun
  c.save();c.translate(hx,hy);c.rotate(ha)
  c.beginPath();c.moveTo(-52,-10);c.bezierCurveTo(-60,20,-56,40,-46,50);c.lineTo(46,50);c.bezierCurveTo(56,40,60,20,52,-10);fs(c,Hd)
  // kanzashi sticks and dangling flower behind the bun
  for(const[a,b]of[[-40,-58],[40,-70]]){c.beginPath();c.moveTo(-a*.2,-54);c.lineTo(a,b);st(c,4,Rd,2.8);el(c,a,b,4);fs(c,'#ffd23f',2.4)}
  el(c,-6,-60,20,15);fs(c,H);c.beginPath();c.arc(-6,-60,10,P*.9,P*1.9);ln(c,2.4,Hd)
  c.save();c.translate(-28,-54);for(let k=0;k<5;k++){el(c,cos(k*1.256)*5,sin(k*1.256)*5,4.2);fs(c,'#ff8fb0',2)}el(c,0,0,2.4);fs(c,'#ffd23f',1.4)
  c.beginPath();c.moveTo(-2,6);c.lineTo(-4,22+sin(t*2*P)*2);ln(c,1.8);el(c,-4,25+sin(t*2*P)*2,3);fs(c,R,1.8);c.restore()
  c.restore()
  // shoulders: red haori over a white crossed collar
  c.beginPath();c.moveTo(102,130);c.bezierCurveTo(74,134,60,146,54,162);c.lineTo(202,162);c.bezierCurveTo(196,146,182,134,154,130);c.closePath();fs(c,R)
  c.beginPath();c.moveTo(110,130);c.lineTo(128,156);c.lineTo(146,130);c.closePath();fs(c,S,0)
  c.beginPath();c.moveTo(108,131);c.lineTo(132,158);c.moveTo(148,131);c.lineTo(124,154);ln(c,7);c.beginPath();c.moveTo(108,131);c.lineTo(132,158);c.moveTo(148,131);c.lineTo(124,154);ln(c,4,'#fff')
  // head
  c.save();c.translate(hx,hy);c.rotate(ha)
  hd(c,S)
  const fc=i==19?{ex:'shut',m:'wave',br:.6,bl:.6}:i==7?{e:['#3d2470','#a98ae8'],ly:4,m:'flat',br:.2}:sad>.4?{e:['#3d2470','#a98ae8'],op:.48,ly:4,pp:.6,m:'wave',mo:1.1,br:1,bl:.5}
    :shock?{e:['#3d2470','#a98ae8'],pp:.35,ly:2,m:'o',mo:1.2,br:.9}
    :i>2?{ex:'happy',m:'smug',mo:1.2,br:-.2,bl:1.3}
    :{e:['#3d2470','#a98ae8'],op:.72,ly:4,m:'smug',mo:1.1,br:-.3}
  face(c,{...fc,bc:Hd})
  if(sad>.1){c.save();c.globalAlpha=sad*(1-fade);hd(c,'rgba(70,80,170,0)',0);c.clip();const g=c.createLinearGradient(0,-40,0,14);g.addColorStop(0,'rgba(80,90,190,.55)');g.addColorStop(1,'rgba(80,90,190,0)');c.fillStyle=g;c.fillRect(-50,-50,100,64)
    c.beginPath();for(const x of[-26,-16,-6,4,14,24]){c.moveTo(x,-14);c.lineTo(x,-2-(x%4?3:0))}ln(c,2.4,'#5562c4');c.restore()}
  // side-parted bangs and long side locks
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-44,-30,-68,6,-68);c.bezierCurveTo(36,-68,58,-44,50,26)
  qs(c,[50,26,46,-6,38,4,32,-18,22,-4,14,-24,0,-8,-8,-28,-18,-8,-30,-20,-38,2,-46,-6,-50,26],.2);c.closePath();fs(c,H)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*48,-8);c.quadraticCurveTo(f*60,30,f*52,64);c.quadraticCurveTo(f*46,54,f*40,58);c.quadraticCurveTo(f*44,24,f*40,-4);c.closePath();fs(c,H)}
  c.beginPath();c.moveTo(-6,-60);c.quadraticCurveTo(-14,-40,-8,-28);ln(c,2,Hd)
  c.beginPath();c.arc(4,-26,40,P*1.22,P*1.5);ln(c,5,Hl)
  c.restore()
  // the scroll: paper with silk edges, wooden rollers, hands gripping them
  const sw=sin(t*2*P)*1.2
  c.save();c.translate(0,sw)
  rr(c,26,136,204,96,3);fs(c,'#fbf3dc')
  for(const y of[136,224]){rr(c,26,y,204,8,0);fs(c,'#3d5aa8',2.6)}
  c.beginPath();for(let x=36;x<224;x+=14){c.moveTo(x,139);c.lineTo(x+6,139)}ln(c,1.6,'#e8c25a')
  // the haiku, inked in line by line
  c.save();c.globalAlpha=1-fade
  L.forEach(([s,y,z],k)=>{const p=pl[k];if(p<=0)return
    c.save();c.beginPath();c.rect(30,y-14,196*p,28);c.clip()
    c.font=`bold ${z}px DejaVu Serif`;c.textBaseline='middle';c.textAlign='left'
    if(k<2){c.textAlign='center';c.fillStyle=INK;c.fillText(s,128,y)}
    else{const w=c.measureText(s).width,w2=(c.font=`bold ${z+2}px DejaVu Serif`,c.measureText('DNS').width),x0=128-(w+w2)/2
      c.font=`bold ${z}px DejaVu Serif`;c.fillStyle=INK;c.fillText(s,x0,y);c.font=`bold ${z+2}px DejaVu Serif`;c.lineWidth=3;c.strokeStyle='#fff';c.fillStyle=R;c.fillText('DNS',x0+w,y)
      if(i>8){c.save();c.translate(x0+w+w2/2,y+12);c.beginPath();c.moveTo(-w2/2-2,0);c.quadraticCurveTo(0,4,w2/2+2,-1);ln(c,2.4,R);c.restore()}}
    c.restore()})
  c.restore()
  for(const x of[20,236]){rr(c,x-7,130,14,110,6);fs(c,'#8a3b2a');el(c,x,130,7,3.5);fs(c,'#c46a4a',2.4);el(c,x,240,7,3.5);fs(c,'#c46a4a',2.4)}
  for(const f of[-1,1]){const x=f<0?18:238,y=186;el(c,x+f*-2,y,10,12);fs(c,S,3.2);c.beginPath();for(const d of[-6,0,6]){c.moveTo(x-f*6,y+d);c.lineTo(x-f*12,y+d)}ln(c,2.2)}
  c.restore()
  // shock flash, then a ghostly sigh drifting up
  if(shock){c.lineWidth=3.5;c.strokeStyle=O;for(const a of[-2.7,-2.3,-.8,-.4]){c.beginPath();c.moveTo(hx+cos(a)*58,hy-10+sin(a)*56);c.lineTo(hx+cos(a)*74,hy-10+sin(a)*70);c.stroke()}}
  if(i>10&&i<18){const p=(i-11)/6;c.save();c.globalAlpha=1-p*.6;c.translate(hx+56+p*12,hy+24-p*44);c.scale(1.4,1.4);c.beginPath();c.moveTo(-8,6);c.bezierCurveTo(-12,-6,-4,-14,4,-10);c.bezierCurveTo(12,-8,10,4,4,6);c.quadraticCurveTo(2,14,-4,16);c.quadraticCurveTo(0,10,-8,6);fs(c,'#eef0ff',2.4);el(c,-1,-4,1.4);fs(c,O,0);el(c,4,-5,1.4);fs(c,O,0);c.restore()}
}
