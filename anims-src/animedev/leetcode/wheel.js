// a fair girl with honey-blonde pigtails, a pink sweatband with little hamster ears and red gym shorts sprints panting inside a spinning hamster wheel labelled O(n²), sweat flying off her
// tags: tired, anime, coding, interview, running, fast
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,round}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w=3.5,pf=0)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47-pf,24+pf,-22-pf,46,0,46);c.bezierCurveTo(22+pf,46,47+pf,24+pf,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+4);c.lineTo(x+10,y+4);c.stroke();c.beginPath();c.moveTo(x-8,y+10);c.quadraticCurveTo(x,y+13,x+8,y+10);c.lineWidth=2;c.strokeStyle='rgba(43,29,46,.4)';return c.stroke()}
  if(ex=='dot'){el(c,x,y+3,3.2,4);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
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
  else if(m=='open'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,10,0,11);c.quadraticCurveTo(-8,10,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='pout'){c.moveTo(-5,3);c.quadraticCurveTo(-2,-2,0,1);c.quadraticCurveTo(2,-2,5,3);c.stroke()}
  else if(m=='chew'){c.moveTo(-6,0);c.quadraticCurveTo(-3,3,0,0);c.quadraticCurveTo(3,3,6,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#ffe066',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a-P/2)*q,y+sin(a-P/2)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=15,delay=75,rim=3
const SK='#ffe4d4',HR='#f2c25a',HD='#c9902a',HL='#fff0b0',I=['#3d5a1a','#b8d860'],WX=128,WY=132,R=102
export default(c,t,i)=>{
  const T=t*2*P,ph=T*3,rot=t*P/3
  // stand behind the wheel
  for(const s of[-1,1]){c.beginPath();c.moveTo(WX,WY);c.lineTo(WX+s*76,240);st(c,7,'#8a93a8')}
  c.beginPath();c.moveTo(WX-88,240);c.lineTo(WX+88,240);st(c,5,'#8a93a8')
  // wheel: back panel, spokes, rungs, front rim
  el(c,WX,WY,R-8);fs(c,'#eaf4fb',0)
  c.save();c.translate(WX,WY);c.rotate(rot)
  for(let k=0;k<6;k++){const a=k*P/3;c.beginPath();c.moveTo(0,0);c.lineTo(cos(a)*(R-8),sin(a)*(R-8));ln(c,5.5);ln(c,2.4,'#5fc4e8')}
  c.restore()
  el(c,WX,WY,R-8);ln(c,9);ln(c,4,'#3a9ec8')
  c.save();c.translate(WX,WY);c.rotate(rot)
  for(let k=0;k<24;k++){const a=k*P/12;c.beginPath();c.moveTo(cos(a)*(R-8),sin(a)*(R-8));c.lineTo(cos(a)*R,sin(a)*R);ln(c,3.2)}
  c.restore()
  el(c,WX,WY,15);fs(c,'#5fc4e8');el(c,WX,WY,6);fs(c,'#fff',2.6)
  // runner at the bottom of the wheel, legs cycling, arms pumping (drawn a bit larger about her feet)
  const fy=WY+R-12;c.save();c.translate(124,fy);c.scale(1.25,1.25);c.translate(-124,-fy)
  const bob=-abs(cos(ph))*4,hip=[124,fy-34+bob]
  const leg=(q,col)=>{const a1=sin(q)*.85,b=.25+max(0,-cos(q))*1.3,kx=hip[0]+sin(a1)*17,ky=hip[1]+cos(a1)*17,fx=kx+sin(a1-b)*17,fy2=ky+cos(a1-b)*17
    c.beginPath();c.moveTo(hip[0],hip[1]);c.lineTo(kx,ky);c.lineTo(fx,fy2);st(c,10,col)
    c.save();c.translate(fx,fy2);c.rotate(a1-b+P/2-P/2);rr(c,-6,-4,18,10,5);fs(c,'#ff5a7a',3);c.beginPath();c.moveTo(-4,4);c.lineTo(10,4);ln(c,2,'#fff');c.restore()}
  leg(ph+P,'#f2cfbd')
  // back arm
  const arm=(q,col)=>{const sh=[130,hip[1]-30],a=-sin(q)*.9,ex=sh[0]+sin(a)*14,ey=sh[1]+cos(a)*14,hx=ex+cos(a)*13,hy=ey-sin(a)*13
    c.beginPath();c.moveTo(sh[0],sh[1]);c.lineTo(ex,ey);c.lineTo(hx,hy);st(c,9,col);el(c,hx,hy,5.5);fs(c,col,3)}
  arm(ph,'#f2cfbd')
  // pigtails behind
  const hx=134,hy=hip[1]-62,sw=sin(ph*2)*.15
  for(const s of[-1,1]){c.save();c.translate(hx+s*22-6,hy-18);c.rotate(-.6+s*.2+sw);c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-20,-4,-34,10,-36,26);c.quadraticCurveTo(-26,20,-18,24);c.quadraticCurveTo(-14,10,2,8);c.closePath();fs(c,HR);c.restore();el(c,hx+s*22-6,hy-18,4.5);fs(c,'#ff6fa3',2.4)}
  // torso: tank top and shorts, leaning into the run
  c.save();c.translate(hip[0],hip[1]);c.rotate(.18)
  rr(c,-13,-8,26,14,4);fs(c,'#e8394a');c.beginPath();c.moveTo(0,-6);c.lineTo(0,5);ln(c,2,'#fff')
  c.beginPath();c.moveTo(-11,-6);c.lineTo(-12,-30);c.quadraticCurveTo(0,-36,12,-30);c.lineTo(11,-6);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(-12,-26);c.lineTo(12,-26);ln(c,2.4,'#7ec8ff');tx(c,'42',0,-16,9,'#3a4a8a',0,'DejaVu Sans')
  c.restore()
  leg(ph,SK)
  // head
  c.save();c.translate(hx,hy);c.rotate(.12+sin(ph*2)*.03);c.scale(.62,.62)
  hd(c,SK)
  c.save();hd(c,'rgba(0,0,0,0)',0);c.clip();el(c,0,-4,40,14);fs(c,'rgba(120,140,255,.12)',0);c.restore()
  face(c,{e:I,op:.7,lx:7,ly:1,m:'open',mo:1.1,br:1,blc:'rgba(255,80,100,.5)'})
  c.beginPath();c.moveTo(-52,20);c.bezierCurveTo(-58,-46,-30,-70,0,-70);c.bezierCurveTo(30,-70,58,-46,52,20)
  qs(c,[52,20,48,-4,42,4,36,-16,26,-4,20,-22,8,-6,0,-22,-10,-6,-20,-20,-30,-2,-40,-14,-46,2,-52,20],.18);c.closePath();fs(c,HR)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.46);ln(c,4.5,HL)
  // sweatband with hamster ears
  for(const s of[-1,1]){el(c,s*34,-56,11,10);fs(c,'#f6d2a8');el(c,s*34,-55,5.5,5);fs(c,'#ffb0c0',0)}
  c.beginPath();c.moveTo(-52,-26);c.quadraticCurveTo(0,-52,52,-26);ln(c,15);ln(c,9,'#ff8ab4')
  for(let k=-4;k<=4;k++){const x=k*10,y=-39+abs(k)*1.6+(k*k)*.3;c.beginPath();c.moveTo(x,y-3);c.lineTo(x,y+3);ln(c,1.6,'#e0608e')}
  c.restore()
  // front arm
  arm(ph+P,SK)
  // sweat flying back
  for(let k=0;k<3;k++){const p=(t*3+k/3)%1,x=hx-30-p*36,y=hy-24+k*10-p*10+p*p*26
    c.globalAlpha=min(1,(1-p)*3);drop(c,x,y,.75+p*.3,-1.2);c.globalAlpha=1}
  c.restore()
  // the O(n²) sign hanging at the top
    rr(c,WX-42,8,84,26,7);fs(c,'#ffd84d');tx(c,'O(n²)',WX,22,19,'#e2445c',0)
}
