// a deep-brown-skinned girl with two big black afro puffs and gold hoops on a video call, crisp navy blazer and a cheery wave inside the camera frame, pink star pyjama pants and bunny slippers happily tapping below it
// tags: happy, anime, work, home, cozy, slippers
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
export const frames=20,delay=90,rim=4
const SK='#9a6240',HR='#2a1d1c',HL='#5c4136',BZ='#33427a',BZd='#25305c',PJ='#ff9ec4',PJl='#ffc8de',I=['#5a2a08','#f0a838']
const puff=(c,x,y,r,n=11)=>{c.beginPath();for(let k=0;k<n;k++){const a=k/n*2*P;c.arc(x+cos(a)*r,y+sin(a)*r,r*.34,a-1.4,a+1.4)}c.closePath();fs(c,HR)}
export default(c,t,i)=>{
  const T=t*2*P,b=sin(T*2)*1.2,wv=sin(T*3)
  // lower body below the frame: pyjama pants swaying, bunny slippers tapping
  const sw=sin(T*2)*4,tap=[max(0,sin(T*2)),max(0,-sin(T*2))]
  const pants=()=>{c.beginPath();c.moveTo(96,140);c.lineTo(160,140);c.lineTo(166+sw,216);c.lineTo(132+sw,218);c.lineTo(128+sw*.5,180);c.lineTo(124+sw,218);c.lineTo(90+sw,216);c.closePath()}
  pants();fs(c,PJ)
  c.save();pants();c.clip()
  for(const[x,y,k]of[[106,162,0],[146,168,1],[112,192,1],[152,196,0],[136,154,0],[104,146,1],[150,146,0]]){const X=x+sw*(y-150)/70
    if(k)spk(c,X,y,5,'#fff',0);else{c.beginPath();c.arc(X,y,5,.6,P*1.6+.6);c.arc(X+2.5,y-1.5,4,P*1.6+.3,.9,1);fs(c,'#ffe27a',0)}}
  rr(c,84+sw,207,90,12,0);fs(c,PJl,0)
  c.restore();pants();fs(c,'rgba(0,0,0,0)')
  c.beginPath();c.moveTo(91+sw,207);c.lineTo(124+sw,208);c.moveTo(132+sw,208);c.lineTo(165+sw,207);ln(c,2.5)
  for(const[s,k]of[[-1,0],[1,1]]){const x=128+s*20+sw,y=228,u=tap[k]
    c.save();c.translate(x+s*2,y+6);c.rotate(-s*u*.28);c.translate(0,-6-u*5)
    // ears: flop back on each tap
    for(const e of[-1,1]){c.save();c.translate(e*6,-7);c.rotate(e*(.35+u*.5)+s*.1);el(c,0,-11,4.6,11);fs(c,'#fff',3);el(c,0,-10,2,7);fs(c,'#ffb3cc',0);c.restore()}
    el(c,0,0,18,11);fs(c,'#fff');el(c,0,4,15,5);fs(c,'#f0eef6',0)
    el(c,-6,-2,2,2.4);fs(c,O,0);el(c,6,-2,2,2.4);fs(c,O,0);el(c,0,2,2.4,1.8);fs(c,'#ff8fb3',0)
    el(c,-10,3,3,1.8);fs(c,'rgba(255,120,160,.5)',0);el(c,10,3,3,1.8);fs(c,'rgba(255,120,160,.5)',0)
    c.restore()}
  // the camera frame: everything above the waist
  const win=()=>rr(c,22,8,212,144,14)
  win();fs(c,'#dde5fb',0)
  c.save();win();c.clip()
  // backdrop: shelf with books and a plant
  rr(c,170,58,64,6,2);fs(c,'#b98a5e',2.5)
  ;[['#ff8a7a',12,26],['#7ec4ff',9,22],['#ffd66b',11,28],['#9de0a8',8,20]].forEach(([f,w,h],k)=>{rr(c,176+k*13,58-h,w,h,2);fs(c,f,2.5)})
  rr(c,38,112,26,30,4);fs(c,'#e98a5a',2.5)
  for(const[a,l]of[[-.5,30],[0,36],[.5,30],[-.9,22],[.9,22]]){c.save();c.translate(51,114);c.rotate(a);el(c,0,-l/2,6,l/2);fs(c,'#5fbf74',2.5);c.restore()}
  // afro puffs behind the head
  c.save();c.translate(128,70+b);c.scale(.8,.8)
  for(const s of[-1,1]){puff(c,s*56,-34,25);c.beginPath();c.arc(s*56,-34,15,P*1.1,P*1.5);ln(c,3,HL)}
  c.restore()
  // blazer torso and the arm hanging out of frame
  rr(c,119,98,18,16,4);fs(c,SK,3)
  c.beginPath();c.moveTo(91,124);c.quadraticCurveTo(80,140,84,170);st(c,15,BZ)
  c.beginPath();c.moveTo(110,108);c.quadraticCurveTo(84,112,82,134);c.lineTo(84,170);c.lineTo(172,170);c.lineTo(174,134);c.quadraticCurveTo(172,112,146,108);c.closePath();fs(c,BZ)
  pg(c,114,108,142,108,128,136);fs(c,'#fff',3)
  for(const s of[-1,1]){pg(c,128+s*16,107,128+s*24,124,128+s*13,132,128+s*6,148,128+s*2,140);fs(c,BZd,3)}
  for(let k=0;k<7;k++){el(c,128+(k-3)*3.6,112+abs(k-3)*-.8+3,1.8);fs(c,'#fff',1.2)}
  el(c,128,146,2.6);fs(c,'#f2c94c',2)
  // head
  c.save();c.translate(128,70+b);c.scale(.8,.8);c.rotate(wv*.035)
  for(const s of[-1,1]){c.beginPath();c.arc(s*44,30,7,0,2*P);ln(c,6.5);ln(c,3,'#f5c542')}
  hd(c,SK)
  const bk=i==8||i==17
  face(c,{e:I,ex:bk?'happy':0,lx:1,ly:0,m:i%6<3?'grin':'smile',mo:1,br:-.1,bc:HR,blc:'rgba(255,90,110,.32)'})
  c.beginPath();c.moveTo(-50,16);c.bezierCurveTo(-58,-46,-30,-70,0,-70);c.bezierCurveTo(30,-70,58,-46,50,16)
  qs(c,[50,16,47,-4,40,-16,30,-23,19,-27,7,-29,-6,-29,-18,-27,-29,-23,-39,-16,-46,-4,-50,16],.32);c.closePath();fs(c,HR)
  for(const[x,y]of[[-20,-50],[4,-56],[24,-46]]){c.beginPath();c.arc(x,y,7,P*.9,P*1.8);ln(c,3,HL)}
  for(const s of[-1,1]){el(c,s*44,-32,6.5,6.5);fs(c,'#f5c542',3)}
  c.restore()
  // waving arm
  const ex=194,ey=128,a=wv*.38,hx=ex+sin(a)*36,hy=ey-cos(a)*36
  c.beginPath();c.moveTo(164,118);c.quadraticCurveTo(184,120,ex,ey);c.lineTo(hx,hy+8);st(c,15,BZ)
  c.save();c.translate(hx,hy);c.rotate(a)
  rr(c,-10,8,20,6,2);fs(c,'#fff',2.5)
  for(const[r,l]of[[-.42,12],[-.14,15],[.14,15],[.42,12]]){c.save();c.rotate(r);rr(c,-3,-l-6,6,l+6,3);fs(c,SK,2.6);c.restore()}
  c.save();c.rotate(-1.1);rr(c,-3,-17,6,12,3);fs(c,SK,2.6);c.restore();el(c,0,0,10,9.5);fs(c,SK,0);c.beginPath();c.arc(0,0,10,-.1,P+.1);ln(c,3)
  c.restore()
  for(const s of[-1,1]){c.beginPath();c.arc(hx,hy,22,(s<0?P:0)-.5,(s<0?P:0)+.5);ln(c,3)}
  c.restore()
  // frame chrome: speaking highlight, REC, name tag, mic
  win();ln(c,4,'#4fd37f');rr(c,24,10,208,140,12);ln(c,2,'rgba(255,255,255,.6)');win();ln(c,3.5)
  rr(c,30,16,46,16,8);fs(c,'rgba(30,24,40,.7)',0);el(c,39,24,3.6);fs(c,i%8<5?'#ff4b5c':'#7a2a33',0);tx(c,'REC',58,24.5,10,'#fff',0,'DejaVu Sans')
  rr(c,30,132,62,15,6);fs(c,'rgba(30,24,40,.7)',0);tx(c,'Sr. Dev',61,140,10,'#fff',0,'DejaVu Sans')
  el(c,215,139,9);fs(c,'rgba(30,24,40,.7)',0);rr(c,212,132,6,10,3);fs(c,'#fff',0);c.beginPath();c.arc(215,139,5,.2,P-.2);c.moveTo(215,144);c.lineTo(215,147);ln(c,1.6,'#fff')
}
