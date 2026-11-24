// a girl with streaming hot pink twintails, a red headband and a white racing jacket zooms forward on roller skates along a straight commit line, speed lines whooshing past a flashing fast-forward sign
// tags: excited, anime, coding, git, fast, speed
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,hypot,floor}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lr=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-11,y+3);c.lineTo(x+11,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  if(op>.5){c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()}
}
const face=(c,o)=>{
  const{m='smile',mo=1,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    const q={...o,...(f<0?o.L:o.R)},br=q.br||0
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br+(q.by||0));c.quadraticCurveTo(f*20,-15-br+(q.by||0),f*28,-12+3*br+(q.by||0));c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(o.mx||0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='D'){c.moveTo(-8,-3);c.quadraticCurveTo(0,-5,8,-3);c.quadraticCurveTo(7,12,0,12);c.quadraticCurveTo(-7,12,-8,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,11,6,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='tiny'){c.moveTo(-2.5,0);c.lineTo(2.5,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono',al='center')=>{c.font=`bold ${z}px ${fn}`;c.textAlign=al;c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const limb=(c,p,w,f)=>{c.beginPath();c.moveTo(p[0],p[1]);if(p.length==4)c.lineTo(p[2],p[3]);else c.quadraticCurveTo(p[2],p[3],p[4],p[5]);st(c,w,f)}
export const frames=20,delay=55,rim=4
const H='#ff5fae',Hd='#d93a8a',Hl='#ffc2e2',S='#fff0e8',EY=['#1b4aa6','#7fd0ff'],J='#fafafa',R='#ef3b4f',GY=228
const ribbon=(c,pts,w0,w1,f)=>{const L=[],Rr=[],n=pts.length
  for(let k=0;k<n;k++){const[a,b]=pts[max(0,k-1)],[x,y]=pts[min(n-1,k+1)],d=hypot(x-a,y-b)||1,w=lr(w0,w1,k/(n-1))/2,[px,py]=pts[k];L.push([px-(y-b)/d*w,py+(x-a)/d*w]);Rr.unshift([px+(y-b)/d*w,py-(x-a)/d*w])}
  c.beginPath();for(const[x,y]of[...L,...Rr])c.lineTo(x,y);c.closePath();fs(c,f)}
const ik=(hx,hy,fx,fy,l)=>{const dx=fx-hx,dy=fy-hy,d=min(hypot(dx,dy),2*l-.1),a=Math.atan2(dy,dx),b=Math.acos(d/2/l);return[hx+cos(a-b)*l,hy+sin(a-b)*l]}
export default(c,t,i)=>{
  const A=t*2*P*2,bob=-abs(sin(A))*3
  // speed lines streaking past
  for(let k=0;k<9;k++){const y=24+k*23+(k%2)*6,len=30+(k*37)%40,x=((k*113-t*256*3)%330+330)%330-50
    c.beginPath();c.moveTo(x,y);c.lineTo(x+len,y);c.lineCap='round';ln(c,4,'#a9b5d6')}
  // flashing fast-forward sign
  c.save();c.translate(214,140);const z=1+.07*max(0,sin(t*2*P*4));c.scale(z,z)
  rr(c,-34,-20,68,40,10);fs(c,R,3.5);for(const x of[-14,8]){pg(c,x-10,-11,x+10,0,x-10,11);fs(c,'#fff',2.5)}
  c.restore()
  // commit line with nodes sliding by
  c.beginPath();c.moveTo(10,GY);c.lineTo(246,GY);st(c,6,'#7c8cff',3)
  for(let k=0;k<6;k++){const x=((k*64-t*256)%320+320)%320-30;if(x>2&&x<254){el(c,x,GY,8);fs(c,'#fff',3.5);el(c,x,GY,3.5);fs(c,'#7c8cff',0)}}
  // twintails streaming behind
  const hx=146,hy=66+bob
  for(const[ax,ay,o]of[[hx+12,hy-42,1],[hx-30,hy-28,0]]){const pts=[];for(let k=0;k<=12;k++){const u=k/12;pts.push([ax-u*116,ay+u*(o?2:20)+sin(u*5-A*1.5+o*2)*8*u])}ribbon(c,pts,o?22:28,8,o?Hd:H)}
  // legs and skates
  const hip=[116,150+bob],foot=k=>{const a=A+k*P;return[116+34*cos(a),GY-22-max(0,-sin(a))*12]}
  const skate=(fx,fy,k)=>{
    for(let w=0;w<3;w++){const x=fx-6+w*11;el(c,x,fy+15,5.5);fs(c,k?'#3fd4c4':'#ffd34d',2.8);c.beginPath();const r=-t*2*P*6;c.moveTo(x+cos(r)*3,fy+15+sin(r)*3);c.lineTo(x-cos(r)*3,fy+15-sin(r)*3);ln(c,1.8)}
    rr(c,fx-12,fy+6,32,6,3);fs(c,'#8a93a8',2.8)
    c.beginPath();c.moveTo(fx-10,fy-12);c.lineTo(fx+4,fy-12);c.quadraticCurveTo(fx+6,fy-2,fx+16,fy);c.quadraticCurveTo(fx+22,fy+2,fx+20,fy+7);c.lineTo(fx-11,fy+7);c.closePath();fs(c,J,3)
    c.beginPath();c.moveTo(fx-10,fy-5);c.lineTo(fx+4,fy-5);ln(c,3,R)}
  const leg=k=>{const[fx,fy]=foot(k),[kx,ky]=ik(hip[0],hip[1],fx-2,fy-12,33)
    c.beginPath();c.moveTo(...hip);c.lineTo(kx,ky);c.lineTo(fx-2,fy-12);st(c,14,S,3.2)
    el(c,kx,ky,9.5,8);fs(c,k?'#ff8fb0':R,3);skate(fx,fy,k)}
  const back=cos(A)>0?1:0;leg(back)
  // back arm
  const sw=cos(A),arm=(s)=>{const sx=138,sy=108+bob,ex=sx-s*20,ey=sy+20-s*4,hx2=sx-s*34,hy2=sy+26-s*10
    c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(ex,ey,hx2,hy2);st(c,13,J,3.2);el(c,hx2,hy2,8);fs(c,S,3)}
  arm(-sw)
  // torso leaning into the wind: shorts, jacket with racing stripe
  c.save();c.translate(...hip);c.rotate(.38)
  rr(c,-19,-6,38,20,7);fs(c,'#2c2f45',3.2)
  c.beginPath();c.moveTo(-18,-2);c.lineTo(-20,-38);c.quadraticCurveTo(-17,-56,0,-56);c.quadraticCurveTo(17,-56,19,-38);c.lineTo(18,-2);c.closePath();fs(c,J)
  c.save();c.clip();c.fillStyle=R;c.fillRect(-5,-58,10,58);c.fillRect(-22,-12,44,7);c.restore()
  c.beginPath();c.moveTo(-18,-2);c.lineTo(-20,-38);c.quadraticCurveTo(-17,-56,0,-56);c.quadraticCurveTo(17,-56,19,-38);c.lineTo(18,-2);c.closePath();ln(c,3.2)
  c.restore()
  leg(1-back)
  // head
  c.save();c.translate(hx,hy);c.scale(.8,.8);c.rotate(.1)
  hd(c,S)
  face(c,{e:EY,lx:5,ly:-1,m:'grin',mo:1.1,br:-.3,bc:Hd})
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-44,50,22)
  qs(c,[50,22,44,-6,36,-20,24,-4,18,-26,6,-6,-6,-28,-16,-8,-28,-24,-38,-4,-46,-12,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-8,58,P*1.18,P*1.82);st(c,7,R,3)
  c.beginPath();c.arc(0,-26,42,P*1.25,P*1.45);ln(c,5,Hl)
  for(const g of[-1,1]){el(c,g*44,-42,7);fs(c,'#ffd34d',3)}
  c.restore()
  // front arm
  arm(sw)
  // dust puffs kicked off the back skate
  for(let k=0;k<3;k++){const p=(t*4+k/3)%1,x=80-p*60,y=GY-10-p*12;c.globalAlpha=1-p;el(c,x,y,4+p*8,3+p*6);fs(c,'#fff',2.5);c.globalAlpha=1}
}
