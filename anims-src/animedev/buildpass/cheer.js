// a brown-skinned girl with a high silver ponytail in a green track jacket nervously watches a CI badge, it flips from running to passing and she leaps up firing two party poppers
// tags: excited, anime, coding, celebration, confetti, happy
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,floor}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const star=(c,x,y,r,f,w=2)=>{c.beginPath();for(let k=0;k<10;k++){const a=k*P/5-P/2,q=k%2?r*.45:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);c.stroke();c.beginPath();c.moveTo(x+f*9,y+3);c.lineTo(x+f*13,y);c.lineWidth=3;return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){star(c,x+lx,y+ly+2,7.5*pp,'#fff36b',1.6);el(c,x+lx-4.5,y+ly-5,2.4,2.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
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
  else if(m=='drool'){c.moveTo(-5,0);c.quadraticCurveTo(0,3,5,0);c.stroke();c.beginPath();c.moveTo(4,1);c.quadraticCurveTo(7,6,5,9);c.quadraticCurveTo(2,6,4,1);fs(c,'#bfe8ff',1.6)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=24,delay=85,rim=4
const H='#e9eef8',Hd='#b4bfd6',Hl='#ffffff',S='#b7794f',J='#3cc47a',Jd='#22915a',CF=['#ff5d8f','#ffd23f','#4cc9f0','#a06cff','#ff8a3d','#5ce08a']
export default(c,t,i)=>{
  const fl=sg(t,.12,.22)-sg(t,.9,.99),ps=fl>.5,cr=sg(t,.2,.27)*(1-sg(t,.3,.33)),air=sg(t,.3,.42)*(1-sg(t,.62,.76)),land=sin(sg(t,.74,.82)*P),
    jy=-air*20+cr*8+land*6-sin(sg(t,.42,.62)*P)*4*air,yay=t>.29&&t<.86,fire=sg(t,.3,.34)
  // CI badge flipping over
  c.save();c.translate(128,26);c.scale(1,max(.05,abs(cos(fl*P))))
  const s2=fl>.5?'passing':'running',col=fl>.5?'#3fbf5e':'#e0b028'
  rr(c,-70,-14,140,28,8);fs(c,'#555c70');c.save();rr(c,-70,-14,140,28,8);c.clip();c.fillStyle=col;c.fillRect(-16,-14,90,28);c.restore();rr(c,-70,-14,140,28,8);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  c.beginPath();c.moveTo(-16,-14);c.lineTo(-16,14);c.lineWidth=2;c.stroke()
  tx(c,'build',-43,1,14,'#fff',3.5,'DejaVu Sans');tx(c,s2,29,1,14,'#fff',3.5,'DejaVu Sans')
  c.restore()
  if(ps&&t<.5){const p=sg(t,.22,.4);for(let k=0;k<8;k++){const a=k*P/4;c.beginPath();c.moveTo(128+cos(a)*(76+p*10),26+sin(a)*(20+p*10));c.lineTo(128+cos(a)*(84+p*16),26+sin(a)*(26+p*14));c.lineWidth=3.5*(1-p);c.strokeStyle='#3fbf5e';if(p<.95)c.stroke()}}
  const bx=128,by=126+jy
  c.save();c.translate(128,236);c.scale(1.05,1.05);c.translate(-128,-236)
  // ponytail and back hair
  c.save();c.translate(bx,by);c.scale(.82,.82)
  const sw=sin(t*4*P)*.15+air*.3
  c.save();c.translate(8,-62);c.rotate(.5+sw);c.beginPath();c.moveTo(-10,0);c.bezierCurveTo(30,-30,74,-10,70,40);c.quadraticCurveTo(66,60,74,76);c.quadraticCurveTo(46,66,48,40);c.bezierCurveTo(48,10,24,6,8,10);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(30,-8);c.quadraticCurveTo(58,6,58,40);c.lineWidth=2.5;c.strokeStyle=Hd;c.stroke();c.restore()
  c.beginPath();c.moveTo(-50,-10);c.bezierCurveTo(-56,24,-50,40,-40,44);c.lineTo(40,44);c.bezierCurveTo(50,40,56,24,50,-10);fs(c,Hd)
  c.restore()
  // legs: tucked in the air, bent in the crouch
  for(const f of[-1,1]){const k=air,hx=bx+f*12,hy=by+74,kx=hx+f*(6+cr*8+k*6),ky=hy+16-k*6,fx=hx+f*(2+k*10),fy=hy+34-k*14
    c.beginPath();c.moveTo(hx,hy);c.lineTo(kx,ky);c.lineTo(fx,fy);st(c,10,S,3.2);rr(c,fx-9+f*3,fy-2,18,9,4);fs(c,'#fff',3);c.beginPath();c.moveTo(fx-6+f*3,fy+5);c.lineTo(fx+6+f*3,fy+5);c.lineWidth=2;c.strokeStyle=J;c.stroke()}
  rr(c,bx-24,by+62,48,16,5);fs(c,'#2c2f45')
  // track jacket
  c.beginPath();c.moveTo(bx-20,by+34);c.bezierCurveTo(bx-34,by+40,bx-34,by+60,bx-30,by+74);c.lineTo(bx+30,by+74);c.bezierCurveTo(bx+34,by+60,bx+34,by+40,bx+20,by+34);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(bx,by+38);c.lineTo(bx,by+74);c.lineWidth=2.5;c.strokeStyle=Jd;c.stroke()
  for(const f of[-1,1]){c.beginPath();c.moveTo(bx+f*25,by+42);c.lineTo(bx+f*29,by+72);c.lineWidth=3;c.strokeStyle='#fff';c.stroke()}
  pg(c,bx-10,by+34,bx,by+44,bx+10,by+34);fs(c,'#fff',2.5)
  // head
  c.save();c.translate(bx,by);c.scale(.82,.82);c.rotate(yay?sin(t*8*P)*.04:0)
  hd(c,S)
  face(c,yay?{ex:'happy',m:'grin',mo:1.25,br:.6,bc:'#8a94b0',blc:'rgba(255,90,120,.45)'}
    :ps?{e:['#8a5a00','#ffd44d'],ly:-5,pp:.8,m:'o',mo:1.1,br:.8,bc:'#8a94b0',blc:'rgba(255,90,120,.4)'}
    :{e:['#8a5a00','#ffd44d'],ly:-6,lx:1,m:'wave',mo:.9,br:.9,bc:'#8a94b0',blc:'rgba(255,90,120,.4)'})
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,22)
  qs(c,[50,22,44,-10,34,0,28,-20,16,-4,6,-24,-4,-6,-14,-22,-24,-4,-32,-18,-40,2,-46,-8,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke();c.beginPath();c.arc(0,-24,40,P*1.55,P*1.8);c.lineWidth=2.5;c.strokeStyle=Hd;c.stroke()
  rr(c,0,-72,18,12,5);fs(c,'#ff5d8f',3)
  c.restore()
  if(!ps)drop(c,bx+46,by-20+(i%3),1)
  // arms with party poppers
  const pop=(f)=>{const sx=bx+f*24,sy=by+44,a=yay?f*(.55+.1*air):f*.25,hx=yay?bx+f*58:bx+f*12,hy=yay?by+10-air*6:by+56
    c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(yay?bx+f*44:bx+f*34,yay?by+44:by+66,hx,hy);st(c,12,J,3.2)
    c.save();c.translate(hx,hy);c.rotate(a);pg(c,-8,4,8,4,13,-30,-13,-30);fs(c,f<0?'#ff5d8f':'#4cc9f0');c.beginPath();c.moveTo(-10,-10);c.lineTo(10,-10);c.moveTo(-12,-20);c.lineTo(12,-20);c.lineWidth=3;c.strokeStyle='#ffd23f';c.stroke()
    el(c,0,-30,13,4);fs(c,'#ffe9a8',3);c.restore();el(c,hx,hy+2,8,7.5);fs(c,S,3.2)
    return[hx+sin(a)*32,hy-cos(a)*32,a]}
  const tips=[pop(-1),pop(1)].map(([x,y,a])=>[128+(x-128)*1.05,236+(y-236)*1.05,a])
  c.restore()
  // confetti and streamers
  if(fire>0&&t<.95){const age=t-.3
    tips.forEach(([x,y,a],f)=>{for(let k=0;k<9;k++){const sp=1.6+(k*.37)%1.4,an=a-P/2+(k-4)*.15,r=age*sp*170
      const px=x+cos(an)*r*.9,py=y+sin(an)*r+age*age*700,cf=CF[(k+f*3)%6],fa=1-sg(t,.84,.95)
      if(py>250||px<4||px>252)continue;if(fa<=0)continue;c.save();c.translate(px,py);c.rotate(k+t*20);c.scale(fa,fa)
      if(k%3==0){c.beginPath();c.moveTo(-8,0);c.quadraticCurveTo(-3,-6,0,0);c.quadraticCurveTo(3,6,8,0);c.lineWidth=6;c.strokeStyle=O;c.stroke();c.lineWidth=3;c.strokeStyle=cf;c.stroke()}
      else{rr(c,-4,-2.5,8,5,1);fs(c,cf,2)}c.restore()}})
    if(fire<1||age<.06)for(const[x,y]of tips){star(c,x,y,12*(1-age*10),'#fff36b',2.5)}}
}
