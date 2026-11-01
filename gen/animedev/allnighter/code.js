// a sleepy silver-haired girl coding at 3am lit by her laptop, coffee cups piled up, her head slipping off her hand until her eyes snap open
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
export const frames=16,delay=[150,150,150,150,150,150,150,150,150,150,110,90,90,90,110,130],rim=4
const H='#e6e3f2',Hd='#aaa3c8',Hl='#ffffff',S='#f6e6e4',J='#8e93a8',Jd='#6c7088',L='rgba(170,240,255,'
export default(c,t,i)=>{
  // droop d: 0 resting on her hand .. 1 head slipped off; then a snap upright and a settle back
  const d=i<11?(i/10)**1.5:0,snap=i>10&&i<14,u=snap?[1,.8,.6][i-11]:i>13?[.4,.2][i-14]:0
  const hx=120-d*4,hy=104+d*16-u*6,rot=-.12-d*.24+u*.2,op=snap?1.15:.52-d*.52+u*.9
  // cups piled up
  const cup=(x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);pg(c,-11,0,11,0,14,-26,-14,-26);fs(c,'#fff',3);pg(c,-12.5,-8,12.5,-8,13.6,-18,-13.6,-18);fs(c,'#b07a4f',2.5);rr(c,-16,-31,32,6,3);fs(c,'#6e4a36',3);c.restore()}
  const sw=Math.sin(t*2*P)*.03
  cup(210,236,0);cup(212,207,.06+sw);cup(209,178,-.04+sw*2);cup(213,149,.08+sw*3)
  for(let k=0;k<2;k++){const p=(t*2+k/2)%1;c.beginPath();c.moveTo(214+k*6,112-p*28);c.quadraticCurveTo(220+k*6+Math.sin(p*7)*6,104-p*28,214+k*6,96-p*28);c.lineWidth=3.5*Math.sin(p*P);c.strokeStyle='#c9c7d6';if(p<.95)c.stroke()}
  // back hair
  c.save();c.translate(hx,hy);c.rotate(rot)
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-58,40,-48,58,-38,62);c.lineTo(38,62);c.bezierCurveTo(48,58,58,40,50,0);fs(c,Hd)
  c.restore()
  // torso in oversized hoodie
  c.beginPath();c.moveTo(102,146);c.bezierCurveTo(70,150,56,168,54,200);c.lineTo(54,232);c.lineTo(186,232);c.lineTo(184,200);c.bezierCurveTo(182,168,166,150,136,146);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(92,150);c.quadraticCurveTo(119,174,146,150);c.quadraticCurveTo(119,150,92,150);fs(c,Jd,3)
  // head
  c.save();c.translate(hx,hy);c.rotate(rot)
  // messy bun with a pencil stuck in
  c.save();c.translate(12,-64);c.rotate(.95);rr(c,-3.5,-30,7,40,2);fs(c,'#ffcf4a',2.6);pg(c,-3.5,-30,3.5,-30,0,-39);fs(c,'#f3d6b0',2.6);el(c,0,-37,1.6);fs(c,O,0);c.restore()
  el(c,6,-64,22,17);fs(c,H);c.beginPath();c.arc(6,-64,11,P*.8,P*1.9);c.lineWidth=2.5;c.strokeStyle=Hd;c.stroke()
  for(const[a,b,e,f]of[[-8,-76,-20,-86],[22,-72,30,-84],[26,-58,42,-62]]){c.beginPath();c.moveTo(a,b);c.quadraticCurveTo(e+8,f+4,e,f);c.lineWidth=3;c.strokeStyle=O;c.stroke()}
  hd(c,S)
  const o={e:['#7a2318','#ff9d6c'],op,pp:snap?.55:1,ly:snap?0:2,m:snap?'o':d>.5?'o':'line',mo:snap?1.2:.7,br:snap?1.3:.6,bc:Hd,bl:.5}
  if(o.op<.08)o.ex='calm'
  face(c,o)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*12,27);c.quadraticCurveTo(f*20,32,f*29,26);c.lineWidth=2.2;c.strokeStyle='#a48ab8';c.stroke()}
  // glow of the screen on the face
  c.save();hd(c,'rgba(0,0,0,0)',0);c.clip();const g=c.createLinearGradient(0,50,0,0);g.addColorStop(0,L+'.5)');g.addColorStop(1,L+'0)');c.fillStyle=g;c.fillRect(-50,-10,100,60);c.restore()
  // messy bangs
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-66,0,-66);c.bezierCurveTo(32,-66,58,-40,50,26)
  qs(c,[50,26,46,-6,40,8,32,-16,24,4,16,-20,4,0,-2,-18,-12,2,-18,-20,-30,2,-38,-12,-44,10,-50,26],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-22,40,P*1.22,P*1.5);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  if(snap)for(const a of[-.9,-.5,.5,.9]){c.beginPath();c.moveTo(Math.sin(a)*66,-Math.cos(a)*66-12);c.lineTo(Math.sin(a)*80,-Math.cos(a)*80-12);c.lineWidth=4;c.strokeStyle=O;c.stroke()}
  c.restore()
  // propping arm: elbow on the desk, palm at the cheek
  c.beginPath();c.moveTo(66,176);c.lineTo(78,226);c.lineTo(86,154);st(c,19,J)
  c.beginPath();c.moveTo(76,160);c.lineTo(97,163);c.lineWidth=5;c.strokeStyle=Jd;c.stroke()
  c.save();c.translate(88,146);c.rotate(-.35);c.beginPath();c.moveTo(-11,8);c.quadraticCurveTo(-14,-10,-2,-14);c.quadraticCurveTo(12,-16,13,-2);c.quadraticCurveTo(12,8,4,10);c.closePath();fs(c,S,3.2);c.restore()
  // laptop lid with a glowing edge
  rr(c,96,160,104,66,8);fs(c,'#4d5470');rr(c,98,161,100,5,3);fs(c,'#bff2ff',0);rr(c,90,224,116,9,4);fs(c,'#9aa1b8',3)
  c.beginPath();c.arc(148,193,11,P*.35,P*1.65);c.arc(153,189,9,P*1.55,P*.45,1);c.closePath();fs(c,'#ffe27a',2.5)
  // desk clock
  rr(c,12,196,60,34,7);fs(c,'#2c2d3d');tx(c,i%4<2?'3:00':'3 00',42,214,19,'#ff6a5c',0)
  // sleepy z's, snap marks
  for(let k=0;k<3;k++){const p=i/10*1.5-k*.4;if(i<11&&p>0&&p<1){const z=Math.min(1,p*4,(1-p)*4);c.save();c.translate(52-p*16+k*6,92-p*48);c.scale(z,z);c.rotate(-.2);tx(c,'z',0,0,22+k*4,'#cfe9ff',5,'DejaVu Sans');c.restore()}}
  if(snap){tx(c,'!',168,46,34,'#ffe14d',6,'DejaVu Sans');drop(c,170,86,1.1)}
}
