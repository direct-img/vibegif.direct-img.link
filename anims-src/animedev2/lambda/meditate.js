// a serene girl with long floating lavender hair meditating cross-legged in mid-air under a glowing λ halo, little red side-effect sparks drift toward her and fizzle out against her calm aura
// tags: anime, coding, calm, float, functional, pure
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
export const frames=16,delay=115,rim=4
const H='#c7a6ff',Hd='#9a72e0',Hl='#f1e6ff',SK='#e6c29a',SKd='#c99a6c',R='#ffffff',G='#ffc93c',L='#9b7be8',Ld='#6f50c4'
const tags=['I/O','mut','rand','null']
export default(c,t,i)=>{
  const T=t*2*P,f=S(T)*5,cx=128,cy=150+f
  // soft shadow on the ground
  el(c,cx,236,48-f*1.5,6);fs(c,'#d4cce2',0)
  // calm aura bubble
  el(c,cx,cy-24,96,92);c.fillStyle='#f3edff';c.fill();c.lineWidth=2.5;c.strokeStyle='#c7a6ff';c.setLineDash([3,7]);c.lineDashOffset=-t*40;c.stroke();c.setLineDash([])
  const hx=cx,hy=cy-62
  // long hair floating behind
  c.save();c.translate(hx,hy);c.scale(.8,.8)
  c.beginPath();c.moveTo(-52,-14)
  for(let k=0;k<=6;k++){const u=k/6,x=-58-u*16+S(T+u*4)*6,y=-14+u*110;c.lineTo(x,y)}
  c.quadraticCurveTo(-40,108,-20,92);c.lineTo(20,92);c.quadraticCurveTo(40,108,74+S(T+4)*6,96)
  for(let k=6;k>=0;k--){const u=k/6,x=58+u*16+S(T+u*4+2)*6,y=-14+u*110;c.lineTo(x,y)}
  c.closePath();fs(c,Hd)
  c.restore()
  // crossed legs and lap
  c.beginPath();c.moveTo(cx-56,cy+28);c.bezierCurveTo(cx-66,cy+56,cx-40,cy+62,cx,cy+56);c.bezierCurveTo(cx+40,cy+62,cx+66,cy+56,cx+56,cy+28);c.quadraticCurveTo(cx,cy+16,cx-56,cy+28);fs(c,L)
  c.beginPath();c.moveTo(cx-40,cy+44);c.quadraticCurveTo(cx,cy+34,cx+40,cy+44);c.moveTo(cx-48,cy+36);c.quadraticCurveTo(cx-30,cy+40,cx-20,cy+48);c.lineWidth=2.5;c.strokeStyle=Ld;c.stroke()
  for(const s of[-1,1]){el(c,cx+s*18,cy+46,11,6,s*.3);fs(c,SK,3)}
  // robe top with a sash
  c.beginPath();c.moveTo(cx-24,cy-24);c.bezierCurveTo(cx-46,cy-18,cx-52,cy,cx-50,cy+30);c.lineTo(cx+50,cy+30);c.bezierCurveTo(cx+52,cy,cx+46,cy-18,cx+24,cy-24);c.closePath();fs(c,R)
  c.beginPath();c.moveTo(cx-16,cy-24);c.lineTo(cx+8,cy+16);c.moveTo(cx+16,cy-24);c.lineTo(cx+2,cy-2);c.lineWidth=4;c.strokeStyle=G;c.stroke();c.lineWidth=1.5;c.strokeStyle=O;c.stroke()
  rr(c,cx-48,cy+12,96,12,4);fs(c,L,3)
  // arms resting on the knees, hands in a mudra
  for(const s of[-1,1]){c.beginPath();c.moveTo(cx+s*36,cy-16);c.quadraticCurveTo(cx+s*58,cy+6,cx+s*56,cy+28);st(c,13,R)
    el(c,cx+s*58,cy+32,8,7);fs(c,SK,3);el(c,cx+s*62,cy+28,3.2);c.lineWidth=2;c.strokeStyle=O;c.stroke()}
  // head
  c.save();c.translate(hx,hy);c.scale(.8,.8);c.rotate(S(T)*.03)
  hd(c,SK)
  face(c,{ex:'calm',m:'cat',mo:.9,br:.2,bc:Hd,bs:.35})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-44,50,24)
  qs(c,[50,24,46,-4,40,-12,34,4,24,-20,12,-4,0,-24,-12,-4,-24,-20,-34,4,-40,-12,-46,-4,-50,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  el(c,0,-6,4,4);fs(c,'#ff7aa8',2.5)
  c.restore()
  // the halo: a glowing ring floating above her head with a lambda on it
  const ry=hy-64+S(T+1)*2
  c.lineWidth=2.5;c.strokeStyle='#ffd65a';for(let j=0;j<6;j++){const b=j*P/3+t*P*2/3,r=44+S(T*2+j)*3;c.beginPath();c.moveTo(hx+C(b)*r,ry+S(b)*r*.35);c.lineTo(hx+C(b)*(r+6),ry+S(b)*(r+6)*.35);c.stroke()}
  el(c,hx,ry,34,9);c.lineWidth=10;c.strokeStyle=O;c.stroke();c.lineWidth=5;c.strokeStyle=G;c.stroke()
  c.beginPath();c.ellipse(hx,ry,34,9,0,P*1.1,P*1.4);c.lineWidth=2;c.strokeStyle='#fff6c8';c.stroke()
  tx(c,'λ',hx,ry-2,26,G,6,'DejaVu Sans')
  // side-effect sparks drifting in and fizzling at the aura
  for(let k=0;k<4;k++){const p=(t+k/4)%1,a=[-2.4,-.7,2.7,.45][k],r0=128,r1=100
    if(p>.78)continue
    const u=min(1,p/.58),r=r0+(r1-r0)*sm(u),w=S(p*P*6+k)*.12,x=cx+C(a+w)*r,y=cy-24+S(a+w)*r*.92
    if(p<.58){c.save();c.translate(x,y);c.rotate(S(p*30+k)*.2)
      c.beginPath();for(let q=0;q<12;q++){const rr2=q%2?9:16+(q%4?0:3);c.lineTo(C(q*P/6+p*9)*rr2,S(q*P/6+p*9)*rr2)}c.closePath();fs(c,'#ff4b4b',2.8)
      tx(c,tags[k],0,1,10,'#fff',3)
      c.restore()}
    else{const q=(p-.58)/.2;c.globalAlpha=1-q
      for(let j=0;j<3;j++){el(c,x+(j-1)*8*(1+q),y-q*10-(j%2)*5,5+q*5);fs(c,'#c4bccc',2)}
      c.lineWidth=2.5;c.strokeStyle='#ff8a5c';for(let j=0;j<5;j++){const b=j*1.26+k;c.beginPath();c.moveTo(x+C(b)*(8+q*10),y+S(b)*(8+q*10));c.lineTo(x+C(b)*(12+q*14),y+S(b)*(12+q*14));c.stroke()}
      c.globalAlpha=1}
  }
}
