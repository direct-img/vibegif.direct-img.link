// a lavender-haired code reviewer in glasses slamming an LGTM stamp onto a pull request, then posing proudly as her glasses gleam
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
const spark=(c,x,y,r,f='#fff',w=2.2)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);fs(c,f,w)}
export const frames=20,delay=[90,90,90,140,60,70,80,90,90,90,90,90,90,90,70,70,70,70,90,90],rim=4
const H='#b893f2',Hd='#8a64cc',Hl='#e6d8ff',S='#9a6141',J='#2f9a8f',Jd='#1f7069',R='#e8334a'
export default(c,t,i)=>{
  const e=x=>x<0?0:x>1?1:x*x*(3-2*x),slam=i==4,stamped=i>=5&&i<18,proud=i>=7&&i<14,fl=i<14?0:i<18?e((i-13)/4):0
  // stamp position: raised, slammed, then lifted high in triumph
  const sp=[[70,92],[66,84],[62,78],[60,74],[152,186],[140,160],[76,118],[70,80],[68,74],[68,74],[68,74],[68,76],[68,78],[68,80],[70,84],[70,86],[72,88],[72,90],[72,92],[71,92]][i],[sx,sy]=sp
  // long wavy hair behind
  c.save();c.translate(130,84);c.scale(.86,.86)
  c.beginPath();c.moveTo(-50,-10);c.bezierCurveTo(-70,30,-56,60,-74,96);c.quadraticCurveTo(-50,90,-40,108);c.quadraticCurveTo(-30,92,0,98);c.quadraticCurveTo(30,92,40,108);c.quadraticCurveTo(50,90,74,96);c.bezierCurveTo(56,60,70,30,50,-10);fs(c,Hd)
  c.restore()
  // torso: teal blazer over a white shirt
  c.beginPath();c.moveTo(110,130);c.bezierCurveTo(84,136,74,156,72,184);c.lineTo(188,184);c.bezierCurveTo(186,156,176,136,150,130);c.closePath();fs(c,J)
  pg(c,116,132,130,170,144,132);fs(c,'#fff',3);pg(c,112,134,124,150,118,160);fs(c,Jd,2.6);pg(c,148,134,136,150,142,160);fs(c,Jd,2.6)
  // head
  c.save();c.translate(130,84);c.scale(.86,.86);c.rotate(proud?-.08:slam?.04:0)
  hd(c,S)
  face(c,proud?{ex:'calm',m:'smug',mo:1.2,br:.1,bc:Hd,bl:.8}:{e:['#7a1030','#ff6f8e'],ly:4,lx:-3,op:.8,tl:2,m:slam?'grin':'smug',br:-.3,bc:Hd,bl:.6})
  // glasses, gleaming while she gloats
  for(const f of[-1,1]){rr(c,f*20-14,0,28,22,6);if(proud){fs(c,'rgba(255,255,255,.88)',2.8);c.save();c.clip();c.beginPath();c.moveTo(f*20-8,24);c.lineTo(f*20+2,-2);c.lineTo(f*20+9,-2);c.lineTo(f*20-1,24);fs(c,'#cfe8ff',0);c.restore()}else{c.lineWidth=2.8;c.strokeStyle=O;c.stroke()}}
  c.beginPath();c.moveTo(-6,8);c.lineTo(6,8);c.lineWidth=2.8;c.stroke()
  c.beginPath();c.moveTo(-50,30);c.bezierCurveTo(-58,-40,-32,-68,4,-68);c.bezierCurveTo(36,-68,58,-40,50,30)
  qs(c,[50,30,48,0,40,-14,30,-4,22,-22,8,-10,-2,-24,-14,-8,-26,-18,-34,-2,-44,-8,-50,30],.22);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,42,P*1.22,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  // clipboard with a pull request diff
  c.save();c.translate(134,206);c.rotate(-.05)
  rr(c,-70,-46,140,84,8);fs(c,'#c58b52')
  const page=k=>{rr(c,-62,-38,124,70,4);fs(c,'#fff',3);[['#4fcf72',40,0],['#ff6b7a',30,0],['#4fcf72',52,8],['#4fcf72',34,8],['#ff6b7a',46,0]].forEach(([f,w,x],j)=>{rr(c,-52+x,-28+j*11,w,6,3);fs(c,f,0)})}
  page()
  if(stamped&&fl<.97){c.save();if(fl){c.translate(0,-38);c.scale(1,1-fl);c.translate(0,38)}
    {page();c.save();c.translate(18,6);c.rotate(-.18);const z=i==5?1.15:1;c.scale(z,z);rr(c,-41,-16,82,32,5);c.lineWidth=4;c.strokeStyle=R;c.stroke();c.font='bold 24px DejaVu Sans';c.textAlign='center';c.textBaseline='middle';c.fillStyle=R;c.fillText('LGTM',0,1);c.restore()}
    c.restore()}
  rr(c,-18,-52,36,14,4);fs(c,'#cfd6e6',3)
  c.restore()
  // other hand steadies the clipboard
  c.beginPath();c.moveTo(178,150);c.quadraticCurveTo(198,180,194,198);st(c,14,J);el(c,194,200,9,8.5);fs(c,S,3)
  // the stamp in her hand
  c.save();c.translate(sx,sy);c.rotate(slam?0:-.25)
  rr(c,-30,8,60,12,3);fs(c,'#3a3346');rr(c,-27,18,54,6,2);fs(c,R,2.5)
  rr(c,-5,-22,10,32,4);fs(c,'#b77a45',3);el(c,0,-28,12,10);fs(c,R,3);el(c,-4,-31,3.5,2.5);fs(c,'#ff9aa8',0)
  c.restore()
  c.beginPath();c.moveTo(96,146);c.quadraticCurveTo((96+sx)/2-18,(146+sy)/2+18,sx+2,sy-12);st(c,14,J);el(c,sx,sy-12,10,9);fs(c,S,3)
  if(slam)for(const a of[-1.3,-.8,.8,1.3]){c.beginPath();c.moveTo(152+Math.sin(a)*44,206-Math.cos(a)*22);c.lineTo(152+Math.sin(a)*58,206-Math.cos(a)*32);st(c,3.5,'#ffe14d',2.5)}
  if(proud){const z=1+Math.sin((i-7)*1.2)*.2;spark(c,40,48,11*z,'#ffe14d');spark(c,216,40,9/z,'#fff');spark(c,212,108,7*z,'#ffe14d')}
}
