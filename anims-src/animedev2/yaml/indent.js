// a freckled girl with a red pixie cut and a pencil behind her ear checks yaml indents with a ruler, one line is off by a single space, it shakes and puffs into a red error cloud and she facepalms
// tags: anime, coding, config, ruler, sad, oops
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
const H='#c8452f',Hd='#8e2a1c',Hl='#f08a6a',SK='#fff0e6',SKd='#f0b89a',J='#8fe0c0',Jd='#4fb592'
const LN=[['app:',''],['  name:',' vibe'],['  port:',' 80'],['   env:',' dev'],['  debug:',' no']],X0=108,CW=8.43,Y0=44,LH=27
export default(c,t,i)=>{
  const back=sg(t,.9,1)+(t<.04?1:0),slide=sg(t,.06,.34),gap=t>.34&&t<.56,shake=t>.44&&t<.56,puff=t>.55&&t<.92,palm=sg(t,.6,.68)*(1-sg(t,.88,.96))
  // editor panel
  rr(c,96,14,150,176,10);fs(c,'#1d2133');rr(c,96,14,150,18,[10,10,0,0]);fs(c,'#3a3f57',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,108+k*11,23,3.4);fs(c,f,0)})
  c.setLineDash([2,4]);c.beginPath();c.moveTo(X0+2*CW,40);c.lineTo(X0+2*CW,180);c.lineWidth=1.5;c.strokeStyle='#4c567a';c.stroke();c.setLineDash([])
  c.font='bold 14px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle'
  LN.forEach(([k,v],j)=>{const y=Y0+j*LH;let x=X0,a=1
    if(j==3){if(shake)x+=(i%2?3:-3);if(t>.55&&t<.93)return;if(t>=.93){a=sg(t,.93,.99);c.globalAlpha=a}}
    c.fillStyle=j==3&&(shake||gap&&t>.4)?'#ff6b6b':'#7ee0ff';c.fillText(k,x,y);c.fillStyle=j==3&&shake?'#ff9a9a':'#ffd34d';c.fillText(v,x+k.length*CW,y);c.globalAlpha=1})
  // the extra space highlighted
  if(gap){const y=Y0+3*LH,u=sg(t,.34,.4);c.fillStyle=`rgba(255,80,80,${.55*u})`;c.fillRect(X0+2*CW+1,y-9,CW,18)
    c.save();c.translate(226,y-1);c.scale(u,u);rr(c,-14,-9,28,18,6);fs(c,'#ff4b4b',3);tx(c,'+1',0,1,12,'#fff',0);c.restore()}
  // error cloud puff
  if(puff){const u=sg(t,.55,.62),f=1-sg(t,.84,.92),y=Y0+3*LH,z=(.4+.6*u)*(1+.06*S(t*60))
    c.save();c.translate(170,y);c.scale(z,z);c.globalAlpha=f
    c.beginPath();for(const[x,yy,r]of[[-34,4,14],[-18,-8,16],[4,-10,17],[24,-6,15],[38,4,13],[18,10,15],[-8,10,16]])c.ellipse(x,yy,r,r,0,0,2*P)
    for(const[x,yy,r]of[[-34,4,14],[-18,-8,16],[4,-10,17],[24,-6,15],[38,4,13],[18,10,15],[-8,10,16]]){el(c,x,yy,r);fs(c,'#ff4b4b',7)}
    for(const[x,yy,r]of[[-34,4,14],[-18,-8,16],[4,-10,17],[24,-6,15],[38,4,13],[18,10,15],[-8,10,16]]){el(c,x,yy,r);fs(c,'#ff4b4b',0)}
    tx(c,'ERROR',2,1,13,'#fff',3.5,'DejaVu Sans');c.restore();c.globalAlpha=1}
  // girl: pixie cut, cardigan
  const hx=58,hy=134+palm*4
  c.beginPath();c.moveTo(hx-26,176);c.bezierCurveTo(hx-48,182,hx-54,202,hx-56,226);c.lineTo(hx-56,242);c.lineTo(hx+58,242);c.lineTo(hx+56,226);c.bezierCurveTo(hx+54,202,hx+48,182,hx+26,176);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-14,177);c.lineTo(hx,206);c.lineTo(hx+14,177);fs(c,'#fff',3)
  for(const y of[214,230]){el(c,hx+3,y,2.6);fs(c,'#fff',1.6)}
  c.save();c.translate(hx,hy);c.scale(.82,.82);c.rotate(palm*.12)
  hd(c,SK)
  const E=['#1f6b3a','#8eeaa8']
  face(c,palm>.4?{ex:'shut',m:'wave',mo:1,br:1,bc:Hd}:puff?{e:E,pp:.5,lx:8,m:'gasp',br:1.1,bc:Hd}:shake?{e:E,lx:9,m:'o',br:.8,bc:Hd}:gap?{e:E,lx:9,ly:-2,m:'flat',br:.5,bc:Hd}:{e:E,lx:9,ly:-2+slide*4,m:'cat',bc:Hd,fr:'#d9845a'})
  c.beginPath();c.moveTo(-50,18);c.bezierCurveTo(-58,-46,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-46,50,18)
  qs(c,[50,18,48,0,40,-10,36,-2,30,-22,18,-10,10,-26,-2,-10,-12,-26,-20,-8,-32,-20,-38,-4,-46,-12,-50,18],.25);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(4,-66);c.quadraticCurveTo(2,-88,18,-90);c.quadraticCurveTo(10,-80,14,-66);fs(c,H,3)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.save();c.translate(-46,-30);c.rotate(-.9);rr(c,-4,-22,8,40,2);fs(c,'#ffd34d',2.6);pg(c,-4,18,4,18,0,26);fs(c,'#ffe0b0',2.4);rr(c,-4,-26,8,6,2);fs(c,'#ff8fa8',2.4);c.restore()
  if(palm>.4){c.lineWidth=2.5;c.strokeStyle='#6a5a8a';for(const x of[-24,-12,0,12,24]){c.beginPath();c.moveTo(x,-80);c.lineTo(x,-92);c.stroke()}}
  c.restore()
  // ruler sliding down the indent column
  const ry=56+slide*32
  c.save();c.translate(0,ry)
  rr(c,X0-1,0,2*CW+1,92,3);fs(c,'#ffd34d',3)
  c.lineWidth=1.8;c.strokeStyle=O;for(let k=1;k<15;k++){c.beginPath();c.moveTo(X0+2*CW,k*6);c.lineTo(X0+2*CW-(k%5?4:8),k*6);c.stroke()}
  c.restore()
  // ruler hand
  c.beginPath();c.moveTo(hx+36,186);c.quadraticCurveTo(hx+56,ry+90,X0-4,ry+60);st(c,13,J);el(c,X0-4,ry+58,8.5,8);fs(c,SK,3.2)
  // facepalm hand
  const fp=[hx-30+palm*30,214-palm*84]
  c.beginPath();c.moveTo(hx-36,188);c.quadraticCurveTo(hx-60+palm*10,212-palm*40,fp[0],fp[1]+6);st(c,13,J)
  c.save();c.translate(fp[0],fp[1]);c.rotate(-palm*.5);el(c,0,0,12+palm*4,10+palm*2);fs(c,SK,3.2)
  if(palm>.4){c.lineWidth=2;c.strokeStyle=SKd;for(const x of[-6,0,6]){c.beginPath();c.moveTo(x,-8);c.lineTo(x,0);c.stroke()}}
  c.restore()
}
