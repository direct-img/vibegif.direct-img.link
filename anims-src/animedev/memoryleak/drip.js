// a panicking girl with mint-green low pigtails and denim overalls holds an 8GB bucket under a leaky pipe that drips little RAM sticks, the bucket is overflowing and sticks keep tumbling over the rim
// tags: anxious, anime, coding, ram, overflow, bucket
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x)
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+Math.cos(a+f)*a*.6,y+2+ly+Math.sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<10;k++){const q=k%2?2.4:6.5,a=k*P/5-P/2;c.lineTo(x+lx-1+Math.cos(a)*q,y+ly-1+Math.sin(a)*q)}fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,mx=0,my=0}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    const q={...o,...(f<0?o.L:o.R)},b=q.br??br;eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*b);c.quadraticCurveTo(f*20,-15-b,f*28,-12+3*b);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(mx,32+my);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'||m=='open'){const w=m=='open'?10:m=='grin'?9:6.5,h=m=='open'?1.8:1.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*h,0,w*h*.87);c.quadraticCurveTo(-w*.6,w*h,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*h*.83,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='pant'){el(c,0,2,6,7);fs(c,'#a3304a',2.2/mo);c.save();el(c,0,2,6,7);c.clip();el(c,0,8,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=24,delay=75,rim=4
const SK='#e8b48c',H='#7fe0c0',Hd='#3fb393',Hl='#c8fff0',J='#4a7fd6',Jd='#2f5aa8',Y='#ffd54a'
const ram=(c,x,y,a,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  rr(c,-16,-7,32,14,2);fs(c,'#2fa35a',2.6)
  c.fillStyle='#1d2430';for(const u of[-11,-3,5])c.fillRect(u,-4.5,6,6)
  c.fillStyle='#f2c230';for(let u=-13;u<14;u+=4)c.fillRect(u,3.5,2.4,3)
  c.restore()}
const pile=[[-28,-4,.25],[26,-4,-.2],[0,-3,.05],[-18,-17,-.35],[14,-16,.3],[-2,-28,.1],[26,-22,-.55],[-30,-24,.6]]
export default(c,t,i)=>{
  const u=t*2%1,land=u>.5?max(0,1-(u-.5)/.2):0,BX=162,BY=150,fl=land>.45,s=.88
  // pipe from a wall flange with an elbow, a cracked joint and a gauge stuck in the red
  c.beginPath();c.moveTo(232,30);c.lineTo(BX,30);c.lineTo(BX,52);st(c,20,'#a9b6c9')
  c.beginPath();c.moveTo(226,24);c.lineTo(BX+6,24);ln(c,3,'#dfe7f2')
  rr(c,BX-15,48,30,14,3);fs(c,'#8796ad');for(const x of[-9,9]){el(c,BX+x,55,2.4);fs(c,'#dfe7f2',1.6)}
  rr(c,230,12,14,36,3);fs(c,'#8796ad',3)
  c.beginPath();c.moveTo(204,40);c.lineTo(204,50);ln(c,7);c.beginPath();c.moveTo(204,40);c.lineTo(204,50);ln(c,3,'#a9b6c9')
  el(c,204,64,15);fs(c,'#fff',3.2);c.beginPath();c.arc(204,64,10.5,P*.75,P*2.25);ln(c,3,'#a9b6c9');c.beginPath();c.arc(204,64,10.5,P*1.8,P*2.25);ln(c,3.5,'#ff4b5c')
  const na=P*2.12+sin(i*2.3)*.1;c.beginPath();c.moveTo(204,64);c.lineTo(204+cos(na)*10,64+sin(na)*10);ln(c,2.6);el(c,204,64,2.4);fs(c,O,0)
  c.beginPath();c.moveTo(BX-7,58);c.lineTo(BX-2,63);c.lineTo(BX+3,59);c.lineTo(BX+8,64);ln(c,2.2)
  // the drip: a stick squeezes out of the crack, wobbles, then drops into the pile
  if(u<.26){const g=E(u/.22);ram(c,BX+1,64+g*9,P/2+sin(u*50)*.15*g,.3+g*.7)}
  else if(u<.5){const p=(u-.26)/.24,y=73+p*(.4+.6*p)*52;ram(c,BX+1,y,P/2+p*1.3,1);if(p>.3){c.globalAlpha=.6;c.beginPath();c.moveTo(BX-12,y-26);c.lineTo(BX-12,y-12);c.moveTo(BX+14,y-28);c.lineTo(BX+14,y-14);ln(c,2.5);c.globalAlpha=1}}
  // girl
  c.save();c.translate(66+(fl?-2:0),110+land*2);c.scale(s,s)
  for(const f of[-1,1]){c.save();c.translate(f*44,10);c.rotate(f*(.1+land*.08))
    c.beginPath();c.moveTo(-10,0);c.bezierCurveTo(-22,30,-14,60,f*4,88);c.bezierCurveTo(16,58,22,30,10,0);c.closePath();fs(c,H)
    c.beginPath();c.moveTo(-4,20);c.quadraticCurveTo(-8,44,0,74);ln(c,2.5,Hd);el(c,0,4,8,6);fs(c,'#ff7a59',3);c.restore()}
  c.beginPath();c.moveTo(-24,46);c.bezierCurveTo(-48,52,-54,80,-54,120);c.lineTo(-56,150);c.lineTo(56,150);c.lineTo(54,120);c.bezierCurveTo(54,80,48,52,24,46);c.closePath();fs(c,'#fff')
  c.save();c.clip();c.fillStyle='#ff7a59';for(let y=58;y<150;y+=14)c.fillRect(-60,y,120,6);c.restore()
  c.beginPath();c.moveTo(-34,94);c.lineTo(34,94);c.lineTo(44,150);c.lineTo(-44,150);c.closePath();fs(c,J)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*20,50);c.lineTo(f*28,96);ln(c,12);c.beginPath();c.moveTo(f*20,50);c.lineTo(f*28,96);ln(c,6,J);el(c,f*27,94,3.5);fs(c,Y,2)}
  rr(c,-14,104,28,20,4);fs(c,Jd,2.5)
  c.save();c.rotate(.05+land*.04)
  hd(c,SK)
  face(c,fl?{ex:'shut',m:'wave',mo:1.2,br:1,bc:Hd,bl:1.2}:{e:['#7a2e10','#e8844a'],lx:6,ly:-3,pp:.55,tl:-2,m:'wave',mo:1.1,br:1.1,bc:Hd,bl:1.2})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,46,-6,36,0,28,-20,16,-4,6,-22,-6,-6,-16,-24,-26,-4,-36,-16,-44,0,-50,26],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);ln(c,5,Hl)
  c.restore()
  drop(c,-52,-24+(t*4%1)*14,1.1);drop(c,54,-36+((t*4+.5)%1)*14,.9)
  c.restore()
  // bucket labelled 8GB, heaped with RAM that jiggles on each landing
  c.save();c.translate(BX,BY+land*3)
  for(const[x,y,a]of pile)ram(c,x,y-(y<-10?land*4*sin(land*P):0),a+(y<-10?land*.25*sin(land*9):0),1.1)
  c.restore()
  c.beginPath();c.moveTo(BX-44,BY);c.lineTo(BX+44,BY);c.lineTo(BX+35,BY+68);c.lineTo(BX-35,BY+68);c.closePath();fs(c,'#c9d2e0')
  c.beginPath();c.moveTo(BX-42,BY+13);c.lineTo(BX+42,BY+13);c.moveTo(BX-36,BY+58);c.lineTo(BX+36,BY+58);ln(c,2.5,'#8796ad')
  el(c,BX,BY,45,7);fs(c,'#e9eef6',3.2)
  tx(c,'8GB',BX,BY+36,20,'#ff4b5c',5)
  // spill: the top stick tips over the rim and tumbles away
  if(u>.5){const p=(u-.5)/.5,sx=BX+34+p*30,sy=BY-16+(p<.25?p*24:6+(p-.25)**2*170)
    if(sy<236){c.globalAlpha=sy>220?max(0,1-(sy-220)/14):1;ram(c,sx,sy,.3+p*5,1.1);c.globalAlpha=1}}
  // arms in short sleeves: one hand on the rim, one hugging the bucket's side
  const hx=66+(fl?-2:0),hy=110+land*2,arm=(a,b,q,r,x,y)=>{c.beginPath();c.moveTo(a,b);c.quadraticCurveTo(q,r,x,y);st(c,13,SK)
    const d=Math.hypot(q-a,r-b),ex=a+(q-a)/d*16,ey=b+(r-b)/d*16;c.beginPath();c.moveTo(a,b);c.lineTo(ex,ey);st(c,18,'#fff');c.beginPath();c.moveTo(a+(ex-a)*.45,b+(ey-b)*.45);c.lineTo(a+(ex-a)*.75,b+(ey-b)*.75);ln(c,18,'#ff7a59')}
  arm(hx+32,hy+52,hx+56,hy+60,BX-40,BY+8);el(c,BX-42,BY+7,9,8.5);fs(c,SK,3.2)
  arm(hx-30,hy+54,hx-30,BY+56,BX-36,BY+46);el(c,BX-38,BY+46,9,9);fs(c,SK,3.2)
}
