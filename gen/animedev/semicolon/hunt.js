// a detective girl in a deerstalker sweeping a magnifying glass over code until she finds the missing semicolon
const P=Math.PI,O='#2b1d2e'
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
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
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+Math.cos(a+f)*a*.6,y+2+ly+Math.sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.3)',0)}
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
const spark=(c,x,y,r,f='#fff',w=2.2)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=20,delay=90,rim=4
const H='#7a4528',Hd='#5a301b',Hl='#b5774c',S='#e8bb90',C='#a0703f',Cd='#7a5028',
  code=[['const ','#ff79a8','a = 4;','#e9ecff'],['let ','#ff79a8','b = a*2;','#e9ecff'],['if ','#ff79a8','(b > a) {','#e9ecff'],['  log','#7ee0ff','(b)','#e9ecff'],['}','#e9ecff','',''],['run','#7ee0ff','(a, b);','#e9ecff']]
export default(c,t,i)=>{
  const found=i>=12&&i<18,e=x=>x<0?0:x>1?1:x*x*(3-2*x)
  // lens path: sweep over the lines, stop on the missing semicolon, glide back
  const path=[[46,132],[108,138],[52,166],[112,170],[60,196],[98,186]],sx=76,sy=184
  let lx,ly
  if(i<12){const p=i/12*5,k=Math.floor(p),u=e(p-k),a=path[k],b=path[k+1];lx=a[0]+(b[0]-a[0])*u;ly=a[1]+(b[1]-a[1])*u
    if(i>=10){const v=e((i-9)/3);lx+=(sx-lx)*v;ly+=(sy-ly)*v}}
  else if(found){lx=sx;ly=sy}else{const v=e((i-17)/3);lx=sx+(46-sx)*v;ly=sy+(132-sy)*v}
  // girl: braid behind, cape
  c.beginPath();c.moveTo(142,150);c.bezierCurveTo(118,156,110,180,110,206);c.lineTo(108,240);c.lineTo(242,240);c.lineTo(240,206);c.bezierCurveTo(240,178,232,156,206,150);c.closePath();fs(c,'#3f5a7a')
  c.beginPath();c.moveTo(136,152);c.bezierCurveTo(104,160,100,190,104,206);c.lineTo(244,206);c.bezierCurveTo(248,190,242,160,212,152);c.closePath();fs(c,C)
  c.save();c.clip();c.strokeStyle=Cd;c.lineWidth=2.5;for(let x=100;x<250;x+=14){c.beginPath();c.moveTo(x,150);c.lineTo(x,210);c.stroke()}for(let y=162;y<210;y+=14){c.beginPath();c.moveTo(100,y);c.lineTo(250,y);c.stroke()}c.restore()
  el(c,174,160,8,6);fs(c,'#e04d5c',3)
  // head
  c.save();c.translate(178,94);c.scale(.86,.86);c.rotate(-.06)
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-56,40,-46,56,-36,60);c.lineTo(36,60);c.bezierCurveTo(46,56,56,40,50,0);fs(c,Hd)
  hd(c,S)
  face(c,found?{e:['#3f6b1f','#b5e36a'],lx:-4,ly:3,m:'grin',mo:1,br:.8,bc:Hd}:{e:['#3f6b1f','#b5e36a'],lx:-4+(lx-80)/14,ly:3,op:.8,m:'cat',mo:.8,br:-.4,bc:Hd})
  for(const f of[-1,1]){el(c,f*20,11,15.5,15);c.lineWidth=2.8;c.strokeStyle='#8a5a2b';c.stroke()}
  c.beginPath();c.moveTo(-5,9);c.quadraticCurveTo(0,6,5,9);c.stroke()
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-56,-20,-40,-44,-10,-46);c.lineTo(10,-46);c.bezierCurveTo(40,-44,56,-20,50,22)
  qs(c,[50,22,46,-6,36,-2,26,-18,14,-6,4,-22,-8,-6,-18,-20,-28,-4,-40,-12,-50,22],.2);c.closePath();fs(c,H)
  // deerstalker hat
  c.beginPath();c.moveTo(-52,-28);c.bezierCurveTo(-54,-78,54,-78,52,-28);c.quadraticCurveTo(0,-38,-52,-28);fs(c,'#b88a52')
  c.save();c.clip();c.strokeStyle='#8a6232';c.lineWidth=3;for(let x=-50;x<56;x+=13){c.beginPath();c.moveTo(x,-80);c.lineTo(x,-26);c.stroke()}for(let y=-70;y<-26;y+=13){c.beginPath();c.moveTo(-56,y);c.lineTo(56,y);c.stroke()}c.restore()
  c.beginPath();c.moveTo(-52,-28);c.bezierCurveTo(-54,-78,54,-78,52,-28);c.quadraticCurveTo(0,-38,-52,-28);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  c.beginPath();c.moveTo(-34,-30);c.quadraticCurveTo(0,-16,34,-30);c.quadraticCurveTo(0,-26,-34,-30);fs(c,'#9a6e3a',3)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*50,-34);c.quadraticCurveTo(f*62,-22,f*54,-8);c.quadraticCurveTo(f*46,-20,f*44,-30);fs(c,'#9a6e3a',3)}
  el(c,0,-70,7,4.5);fs(c,'#9a6e3a',3)
  c.restore()
  // braid over the shoulder
  for(let k=0;k<5;k++){el(c,140-k*1.5,140+k*14,8-k*.4,9);fs(c,H,3);c.beginPath();c.moveTo(134-k*1.5,138+k*14);c.quadraticCurveTo(140,144+k*14,146-k*1.5,138+k*14);c.lineWidth=2;c.strokeStyle=Hd;c.stroke()}
  el(c,134,212,5,4);fs(c,'#e04d5c',2.5)
  // code panel
  const panel=()=>{
    rr(c,10,112,138,124,10);fs(c,'#232842',3.5)
    c.font='bold 11px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle'
    code.forEach(([a,ca,b,cb],k)=>{const y=130+k*18;c.fillStyle=ca;c.fillText(a,20,y);c.fillStyle=cb;c.fillText(b,20+a.length*6.62,y)})
    if(found){c.fillStyle='#ffe14d';c.fillText(';',73,184)}
  }
  panel()
  // magnifying glass: zoomed code inside the lens
  const R=34
  c.beginPath();c.moveTo(lx+R*.85,ly+R*.53);c.lineTo(lx+R*1.8,ly+R*1.12);st(c,11,'#6b3a1f')
  c.save();el(c,lx,ly,R);c.clip();c.translate(lx,ly);c.scale(1.8,1.8);c.translate(-lx,-ly);panel();c.restore()
  if(found){c.save();el(c,lx,ly,R);c.clip();const g=c.createRadialGradient(lx,ly,2,lx,ly,26);g.addColorStop(0,'rgba(255,240,160,.85)');g.addColorStop(1,'rgba(255,240,160,0)');c.fillStyle=g;c.fillRect(lx-R,ly-R,2*R,2*R);c.restore();tx(c,';',lx,ly-1,40,'#ffe14d',6)}
  el(c,lx,ly,R);c.lineWidth=9;c.strokeStyle=O;c.stroke();c.lineWidth=5;c.strokeStyle='#e8b64a';c.stroke()
  c.beginPath();c.arc(lx,ly,R-8,P*1.1,P*1.4);c.lineWidth=4;c.strokeStyle='rgba(255,255,255,.7)';c.stroke()
  // hand on the handle, arm from the shoulder
  const hx=lx+R*1.8,hy=ly+R*1.12
  c.beginPath();c.moveTo(150,172);c.quadraticCurveTo(hx+24,hy-4,hx+5,hy+2);st(c,14,Cd);el(c,hx,hy,8.5,8);fs(c,S,3)
  if(i>3&&i<11)tx(c,'?',216,40,28,'#fff',5.5,'DejaVu Sans')
  if(found){const z=[.6,1.1,1,1,1,.9][i-12];c.save();c.translate(214,30);c.scale(z,z);tx(c,'!',0,0,34,'#ffe14d',6,'DejaVu Sans');c.restore();spark(c,lx-30,ly-28,9*z,'#ffe14d');spark(c,lx+34,ly-30,6*z,'#fff')}
}
