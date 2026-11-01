// a blonde girl stuck in vim, frantically mashing the Esc key then typing :q! into the terminal
const P=Math.PI,O='#2b1d2e'
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
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=16,delay=75,rim=4
const H='#ffd65a',Hd='#e0a92e',Hl='#fff3b8',S='#e3a57a',J='#e0483f',Jd='#a82c2c'
export default(c,t,i)=>{
  const mash=i<8,dn=mash&&i%2==0,typ=!mash,ty=k=>typ&&(i+k)%2==0?4:0
  // terminal window with vim's tildes
  rr(c,8,14,156,120,10);fs(c,'#1d2133');rr(c,8,14,156,20,[10,10,0,0]);fs(c,'#3a3f57',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,22+k*13,24,4);fs(c,f,0)})
  for(let k=0;k<4;k++)tx(c,'~',22,48+k*16,20,'#6d8bff',0)
  const cmd=':q!'.slice(0,typ?Math.min(3,(i-7)>>1):0)
  c.font='bold 26px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle='#fff';c.fillText(cmd,18,116)
  if(i%2==0||typ){rr(c,18+cmd.length*15.6,105,13,22,2);fs(c,'#e8ecff',0)}
  // side ponytail behind
  c.save();c.translate(170,100);c.scale(.9,.9)
  c.beginPath();c.moveTo(40,-50);c.bezierCurveTo(90,-50,84,20,72,70);c.quadraticCurveTo(66,40,56,60);c.quadraticCurveTo(64,10,36,-20);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-58,40,-48,56,-38,60);c.lineTo(38,60);c.bezierCurveTo(48,56,58,40,50,0);fs(c,Hd)
  c.restore()
  // torso: red flannel over a white tee
  c.save();c.beginPath();c.moveTo(150,140);c.bezierCurveTo(126,146,116,166,114,196);c.lineTo(114,232);c.lineTo(230,232);c.lineTo(228,196);c.bezierCurveTo(226,166,214,146,190,140);c.closePath();fs(c,J);c.clip()
  c.fillStyle='rgba(110,20,30,.35)';for(let x=118;x<230;x+=18)c.fillRect(x,130,6,110);for(let y=150;y<240;y+=18)c.fillRect(110,y,130,6)
  c.restore();c.beginPath();c.moveTo(154,142);c.lineTo(170,200);c.lineTo(186,142);fs(c,'#fff',3)
  // head
  c.save();c.translate(170,100);c.scale(.9,.9);c.rotate(mash?(i%4<2?-.05:.05):-.06)
  hd(c,S)
  face(c,mash?{ex:'shut',m:'wave',mo:1.2,br:1,bc:Hd,bl:1}:{e:['#1b4aa6','#86ccff'],lx:-4,ly:-2,pp:.7,m:'grit',mo:.8,br:-.6,bc:Hd})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,24)
  qs(c,[50,24,46,-10,38,4,30,-16,18,0,10,-22,-2,-2,-10,-20,-22,-4,-30,-18,-40,6,-46,-6,-50,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  el(c,38,-50,9,7,.6);fs(c,'#ff4f6d',3)
  c.restore()
  drop(c,226,mash?60-(i%4)*3:70,1.1);if(mash)drop(c,120,78-(i%3)*3,.8)
  // keyboard with a big Esc key
  pg(c,70,188,238,188,244,232,62,232);fs(c,"#e6e9f2")
  for(let r=0;r<2;r++)for(let k=0;k<8;k++){rr(c,116+k*15.5-r*2,194+r*16,12,11,2);fs(c,(r==1&&k>1&&k<6)?'#cfd5e6':'#fff',1.6)}
  const ed=dn?3:0;rr(c,60,176+ed,50,40,7);fs(c,'#a8323c');rr(c,64,178+ed,42,30,6);fs(c,'#ff6b6b',2.5);tx(c,'Esc',85,193+ed,17,'#fff',0,'DejaVu Sans')
  if(dn)for(const a of[-1.4,-.9,-.4]){c.beginPath();c.moveTo(85+Math.sin(a)*34,196-Math.cos(a)*34);c.lineTo(85+Math.sin(a)*44,196-Math.cos(a)*44);c.lineWidth=4;c.strokeStyle=O;c.stroke()}
  // arms: fists pounding Esc, or typing
  const arm=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,15,J);el(c,x,y,9.5,8.5);fs(c,S,3.2)}
  if(mash){
    if(dn)arm(140,162,112,192,92,170);else{arm(140,162,116,176,100,124);for(const k of[0,1]){c.beginPath();c.moveTo(82+k*12,136+k*4);c.lineTo(86+k*12,154+k*4);c.lineWidth=3;c.strokeStyle=O;c.stroke()}}
    arm(204,162,232,156,214,122)
  }else{arm(140,162,140,196,150,194-ty(0));arm(204,162,204,200,194,196-ty(1))}
}
