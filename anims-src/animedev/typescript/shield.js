// a silver-bob girl in light blue knight armor holding up a blue TS shield, little red "any" arrows thunk into it and bounce right off while she smirks
// tags: anime, coding, proud, armor, smug, safe
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
export const frames=18,delay=95,rim=4
const H='#eef0fa',Hd='#b3b9d6',Hs='#4a86ff',SK='#ffe6da',A='#a9d4ff',Ad='#5f9ae0',Al='#e4f3ff',B='#2f6fd0',Bd='#1d4a96',R='#e8434f'
// arrow with its tip at 0,0 pointing to -x
const arrow=c=>{
  c.beginPath();c.moveTo(0,0);c.lineTo(11,-7);c.lineTo(11,7);c.closePath();fs(c,'#d8dde8',3)
  pg(c,42,-3,54,-10,50,0,54,10,42,3);fs(c,'#ffd34d',2.6)
  rr(c,10,-7,34,14,5);fs(c,R,3);tx(c,'any',27,0,12,'#fff',0)
}
export default(c,t,i)=>{
  const hits=[[142,112],[186,134],[170,184]],D=[-.94,.34],ang=Math.atan2(D[1],D[0])+P
  const ph=k=>(t+1-k/3)%1,imp=max(...[0,1,2].map(k=>{const p=ph(k);return p>.18&&p<.3?1-(p-.18)/.12:0}))
  const smug=[0,1,2].some(k=>{const p=ph(k);return p>.2&&p<.34})
  const hx=88,hy=96,k=.9,bob=S(t*2*P*3)*1.2
  c.save();c.translate(-16,0)
  // bob hair behind
  c.save();c.translate(hx,hy+bob);c.scale(k,k)
  c.beginPath();c.moveTo(-52,-14);c.bezierCurveTo(-60,20,-58,42,-50,52);c.quadraticCurveTo(-36,46,-30,54);c.lineTo(30,54);c.quadraticCurveTo(36,46,50,52);c.bezierCurveTo(58,42,60,20,52,-14);fs(c,Hd)
  c.restore()
  // body armor: breastplate, faulds, pauldrons
  const tor=()=>{c.beginPath();c.moveTo(62,142);c.bezierCurveTo(42,148,34,168,34,196);c.lineTo(36,240);c.lineTo(140,240);c.lineTo(142,196);c.bezierCurveTo(142,168,134,148,114,142);c.closePath()}
  tor();fs(c,'#3a4a6e');c.save();tor();c.clip()
  c.beginPath();c.moveTo(50,150);c.quadraticCurveTo(88,140,126,150);c.lineTo(122,204);c.quadraticCurveTo(88,216,54,204);c.closePath();fs(c,A,3)
  c.beginPath();c.moveTo(88,150);c.lineTo(88,208);c.lineWidth=2.5;c.stroke();c.beginPath();c.moveTo(64,160);c.quadraticCurveTo(70,186,66,198);c.lineWidth=5;c.strokeStyle=Al;c.stroke()
  for(let r=0;r<2;r++){c.beginPath();c.moveTo(48,212+r*14);c.quadraticCurveTo(88,224+r*14,128,212+r*14);c.lineTo(130,226+r*14);c.quadraticCurveTo(88,238+r*14,46,226+r*14);c.closePath();fs(c,r?Ad:A,3)}
  c.restore();tor();c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  el(c,88,170,7,8);fs(c,B,2.5);el(c,86,167,2,2.5);fs(c,'#fff',0)
  // free arm: gauntlet on her hip
  c.beginPath();c.moveTo(58,154);c.quadraticCurveTo(26,180,48,204);st(c,14,A);el(c,50,204,9,8);fs(c,Ad,3)
  for(const x of[58]){el(c,x,152,20,14,-.3);fs(c,A);c.beginPath();c.ellipse(x,152,14,8,-.3,P*1.1,P*1.9);c.lineWidth=3;c.strokeStyle=Al;c.stroke()}
  // head
  c.save();c.translate(hx,hy+bob);c.scale(k,k)
  hd(c,SK)
  face(c,smug?{ex:'calm',m:'smug',mo:1.3,bc:Hd,br:-.7}:{e:['#163f9c','#6fd6ff'],op:.74,tl:3,lx:5,ly:-1,m:'smug',mo:1.3,bc:Hd,br:-.7})
  // blunt bangs with a blue streak, side locks
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*50,-14);c.quadraticCurveTo(f*56,20,f*48,50);c.lineTo(f*38,44);c.quadraticCurveTo(f*42,14,f*34,-8);c.closePath();fs(c,H)}
  c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-58,-46,-30,-68,0,-68);c.bezierCurveTo(30,-68,58,-46,50,0)
  c.lineTo(42,-6);c.lineTo(36,-2);c.lineTo(30,-10);c.lineTo(22,-4);c.lineTo(14,-10);c.lineTo(4,-4);c.lineTo(-6,-10);c.lineTo(-14,-4);c.lineTo(-24,-10);c.lineTo(-32,-3);c.lineTo(-42,-8);c.closePath();fs(c,H)
  c.save();c.beginPath();c.moveTo(-50,0);c.bezierCurveTo(-58,-46,-30,-68,0,-68);c.bezierCurveTo(30,-68,58,-46,50,0);c.lineTo(-50,0);c.clip()
  c.beginPath();c.moveTo(14,-70);c.quadraticCurveTo(26,-40,22,-2);c.lineTo(30,-8);c.quadraticCurveTo(32,-40,22,-70);c.closePath();fs(c,Hs,0);c.restore()
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.45);c.lineWidth=5;c.strokeStyle='#fff';c.stroke()
  c.beginPath();c.moveTo(-26,-56);c.quadraticCurveTo(-20,-30,-24,-12);c.lineWidth=2;c.strokeStyle=Hd;c.stroke()
  // little knight circlet
  c.beginPath();c.moveTo(-46,-36);c.quadraticCurveTo(0,-64,46,-36);st(c,5,'#d9e6f7',2.5)
  c.beginPath();c.moveTo(0,-58);c.lineTo(8,-48);c.lineTo(0,-38);c.lineTo(-8,-48);c.closePath();fs(c,'#4a8cff',3);el(c,-2,-50,1.5,2.5);fs(c,'#fff',0)
  c.restore()
  // the shield, nudged back on each hit
  const sx=178-imp*4,sy=150+imp*2
  c.save();c.translate(sx,sy);c.rotate(-.06-imp*.05)
  const sh=(g=0)=>{c.beginPath();c.moveTo(-44+g,-52+g);c.quadraticCurveTo(0,-60+g,44-g,-52+g);c.lineTo(44-g,4);c.quadraticCurveTo(40-g,40-g,0,62-g);c.quadraticCurveTo(-40+g,40-g,-44+g,4);c.closePath()}
  sh();fs(c,'#dfe7f3',3.5);sh(7);fs(c,B,3);c.save();sh(7);c.clip();c.beginPath();c.moveTo(-40,-60);c.lineTo(-12,-60);c.lineTo(-40,0);c.closePath();fs(c,'rgba(255,255,255,.18)',0);c.restore()
  for(const[x,y]of[[-36,-44],[36,-44],[-36,2],[36,2],[0,52]]){el(c,x,y,2.6);fs(c,'#dfe7f3',1.6)}
  tx(c,'TS',2,4,40,'#fff',6,'DejaVu Sans')
  c.restore()
  // gauntlet gripping the shield edge
  el(c,sx-42,sy+16,9,10);fs(c,A,3);c.beginPath();c.moveTo(sx-46,sy+10);c.lineTo(sx-38,sy+10);c.moveTo(sx-46,sy+17);c.lineTo(sx-38,sy+17);c.lineWidth=2;c.stroke()
  c.restore()
  // incoming "any" arrows: fly in, thunk, wobble, bounce off and fall
  for(let a=0;a<3;a++){const p=ph(a),[hx0,hy0]=hits[a]
    let x,y,r=ang,al=1
    if(p<.18){const u=1-p/.18;x=hx0-D[0]*150*u;y=hy0-D[1]*150*u;al=min(1,(1-u)*3)}
    else if(p<.4){const w=(p-.18)/.22;x=hx0;y=hy0;r+=S(w*P*5)*.18*(1-w)}
    else{const q=(p-.4)/.6;x=hx0+12+q*44;y=hy0-q*36+q*q*210;r+=q*8}
    if(al<=0)continue
    c.save();c.globalAlpha=al;c.translate(x-imp*(p>.18&&p<.4?5:0),y);c.rotate(r);arrow(c);c.restore()
    if(p>.18&&p<.3){const s=1-(p-.18)/.12;c.lineWidth=3;c.strokeStyle=O;for(const b of[-2.2,-1.4,-.6,.6,1.4]){c.beginPath();c.moveTo(hx0+C(b+P)*12,hy0+S(b+P)*12);c.lineTo(hx0+C(b+P)*(14+12*s),hy0+S(b+P)*(14+12*s));c.stroke()}
      tx(c,"thunk",hx0+16,hy0-22,12,'#ffd34d',4.5,'DejaVu Sans')}
  }
}
