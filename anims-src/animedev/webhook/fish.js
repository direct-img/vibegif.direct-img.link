// a girl with teal twin braids, a straw sun hat and yellow overalls fishing off a dock gets a bite, reels up a flopping { } JSON payload fish and shows it off proudly before it wriggles free and splashes back in
// tags: anime, coding, json, nature, proud, happy
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const pl=(c,...p)=>{c.beginPath();c.moveTo(p[0],p[1]);for(let j=2;j<p.length;j+=2)c.lineTo(p[j],p[j+1])}
const cv=(c,x,y,qx,qy,X,Y)=>{c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(qx,qy,X,Y)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='dot'){el(c,x,y+1,11,13);fs(c,'#fff',3.6);el(c,x+lx,y+1+ly,3,3.6);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp,11.5*pp);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='yell'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,9,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(7,2,0,6);c.quadraticCurveTo(-7,2,0,-9);fs(c,'#8fd8ff',2.5);c.restore()}
const bangs=(c,H,Hl,pts=[50,26,44,-8,36,6,30,-18,20,0,12,-20,2,-2,-6,-20,-16,-2,-24,-18,-34,4,-42,-8,-50,26])=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,pts,.18);c.closePath();fs(c,H);c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()}
export const frames=24,delay=90,rim=4
const S='#e0a878',H='#2fb7a8',Hd='#1e8a80',Hl='#8ff0e0',OV='#ffcf3a',OVd='#e0a420',F='#ff8a4a',Fl='#ffc06a'
const spk=(c,x,y,r)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.35:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,'#fff6a8',2.4)}
const fish=(c,x,y,r,s=1)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
  c.beginPath();c.moveTo(18,0);c.lineTo(34,-13);c.quadraticCurveTo(30,0,34,13);c.closePath();fs(c,Fl,3)
  el(c,-2,0,24,16);fs(c,F,3.2);c.save();el(c,-2,0,24,16);c.clip();el(c,-2,12,26,8);fs(c,Fl,0);c.restore()
  c.beginPath();c.moveTo(-6,-15);c.quadraticCurveTo(4,-24,12,-14);fs(c,Fl,2.8)
  tx(c,'{}',0,1,17,'#fff',4);el(c,-16,-4,4,4.5);fs(c,'#fff',2.2);el(c,-17,-4,2,2.6);fs(c,O,0)
  c.beginPath();c.arc(-21,5,3,0,P);sk(c,2.2);c.restore()}
export default(c,t,i)=>{
  const T=t*2*P,bite=t>.2&&t<.36,yk=sg(t,.34,.42)*(1-sg(t,.8,.95)),hold=t>.5&&t<.8,proud=t>.46&&t<.8
  const ra=-.62-yk*.38-(hold?sin(T*6)*.03:0),bx=104,by=172,tipx=bx+150*cos(ra),tipy=by+150*sin(ra)
  const B=[200,212+sin(T*3)*2+(bite?6*abs(sin(T*9)):0)],D=[tipx+4+sin(T*5)*6,tipy+52]
  let L,fp=null
  if(t<.38)L=B
  else if(t<.5){const p=sg(t,.38,.5);L=[lp(B[0],D[0],p),lp(B[1],D[1],p)-sin(p*P)*30];fp=[...L,-1.2*(1-p)]}
  else if(t<.8){L=D;fp=[...D,sin(T*10)*.35]}
  else{const p=sg(t,.8,.95);L=[lp(D[0],B[0],p),lp(D[1],B[1],p*p)]}
  if(t>=.8&&t<.93){const p=(t-.8)/.13;fp=[lp(D[0],176,p),D[1]-40*sin(p*P)+p*p*130,p*5]}
  // fish leaving/entering the water (drawn behind the water)
  if(fp){c.save();c.beginPath();c.rect(0,0,256,226);c.clip();fish(c,fp[0],fp[1]+8,fp[2],1.3);c.restore()}
  // water
  c.beginPath();c.moveTo(10,206);for(let x=10;x<=246;x+=6)c.lineTo(x,206+sin(x*.09)*2.2);c.lineTo(246,226);c.quadraticCurveTo(246,240,232,240);c.lineTo(24,240);c.quadraticCurveTo(10,240,10,226);c.closePath();fs(c,'#5fc4f0')
  c.lineWidth=2.6;c.strokeStyle='#bdf0ff';for(const[x,y]of[[150,222],[200,232],[60,230]]){c.beginPath();c.moveTo(x+sin(T)*4,y);c.lineTo(x+16+sin(T)*4,y);c.stroke()}
  // bobber + ripples
  if(t<.38||t>.93){c.save();c.translate(...B);if(bite||t>.93){const p=t>.93?(t-.93)/.07:(T*9/(2*P))%1;c.globalAlpha=1-p;el(c,0,4,10+p*18,3+p*5);sk(c,2.4,'#fff');c.globalAlpha=1}
    el(c,0,0,8,8);fs(c,'#fff',3);c.save();el(c,0,0,8,8);c.clip();c.fillStyle='#ff4d5e';c.fillRect(-9,-9,18,9);c.restore();el(c,0,0,8,8);sk(c,3);c.restore()}
  else if(t>=.8&&t<.93){}
  // splashes
  for(const[t0,x]of[[.38,200],[.9,176]]){const p=(t-t0)/.1;if(p>0&&p<1)for(let k=0;k<5;k++){const a=-P/2+(k-2)*.45,r=8+p*26;el(c,x+cos(a)*r,206+sin(a)*r+p*p*20,4.5*(1-p)+1,6*(1-p)+1);fs(c,'#bdf0ff',2.2)}}
  // dock
  for(const x of[30,104]){rr(c,x-6,196,12,40,3);fs(c,'#8a5a3c',3)}
  rr(c,10,180,122,18,4);fs(c,'#c48a5c');for(const x of[40,70,100]){pl(c,x,182,x,196);sk(c,2.4,'#8a5a3c')}rr(c,10,180,122,18,4);sk(c,3.5)
  // tackle bucket
  rr(c,20,152,30,28,5);fs(c,'#7fc0ff');c.beginPath();c.arc(35,154,14,P,0);sk(c,2.6);el(c,35,153,15,4);fs(c,'#3a7ac0',2.6)
  // back braids
  for(const f of[-1,1]){c.beginPath();c.moveTo(78+f*26,104);c.quadraticCurveTo(78+f*34,130,78+f*26+sin(T+f)*3,156);sk(c,14,O);sk(c,8,H)
    for(const y of[118,132,146]){el(c,78+f*28.5+(y-104)*.05*f,y,6.5,5);fs(c,H,2.4)}rr(c,78+f*26-5+sin(T+f)*3,154,10,6,3);fs(c,'#ff6f9c',2.4)
    c.beginPath();c.moveTo(78+f*26+sin(T+f)*3,160);c.lineTo(78+f*26-4+sin(T+f)*3,170);c.lineTo(78+f*26+4+sin(T+f)*3,170);c.closePath();fs(c,H,2.4)}
  // torso: tee + overalls
  c.beginPath();c.moveTo(62,128);c.quadraticCurveTo(52,140,56,182);c.lineTo(104,182);c.quadraticCurveTo(108,140,96,128);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(60,150);c.lineTo(100,150);c.lineTo(104,182);c.lineTo(56,182);c.closePath();fs(c,OV)
  for(const x of[66,92]){pl(c,x,150,x+(x<80?-2:2),128);st(c,5,OV,2.4)}rr(c,70,156,20,14,3);fs(c,OVd,2.4)
  // legs dangling over the edge, sandals swinging
  for(const[k,ph]of[[0,0],[1,1.6]]){const sw=sin(T*2+ph)*.18,kx=112+k*8,ky=184
    c.beginPath();c.moveTo(84,178+k*2);c.lineTo(kx,ky);st(c,14,OV)
    c.save();c.translate(kx,ky);c.rotate(sw);c.beginPath();c.moveTo(0,0);c.lineTo(2,26);st(c,10,S);el(c,6,30,9,5);fs(c,'#ff6f9c',3);c.restore()}
  // rod + line
  const bend=yk*14+(hold?6:0)
  c.beginPath();c.moveTo(bx,by);c.quadraticCurveTo((bx+tipx)/2+bend*sin(ra)*-1,(by+tipy)/2+bend*cos(ra),tipx,tipy);sk(c,8);sk(c,4,'#a8743c')
  c.beginPath();c.moveTo(tipx,tipy);if(t<.34)c.quadraticCurveTo((tipx+L[0])/2+8,(tipy+L[1])/2+16,L[0],L[1]-8);else c.lineTo(L[0],L[1]-(fp?14:8));sk(c,1.6,'#fff');c.stroke();c.lineWidth=1.2;c.strokeStyle=O;c.stroke()
  el(c,bx+22*cos(ra),by+22*sin(ra),6,6);fs(c,'#5a5f72',2.6)
  // arms holding the rod
  const h1=[bx+30*cos(ra),by+30*sin(ra)],h2=[bx+54*cos(ra),by+54*sin(ra)]
  cv(c,66,134,58,162,h1[0]-4,h1[1]+2);st(c,9,S);cv(c,94,134,104,140,h2[0]-4,h2[1]+3);st(c,9,S)
  el(c,...h1,7.5,7);fs(c,S,3);el(c,...h2,7.5,7);fs(c,S,3)
  // head with straw hat
  c.save();c.translate(78,90);c.rotate(proud?-.08:bite?.05:0);c.scale(.7,.7)
  hd(c,S)
  const sp=t>.8&&t<.9
  face(c,{e:['#5a2e10','#e0a060'],ex:proud?'happy':0,op:bite?1:.82,pp:bite?.8:1,lx:bite?6:3,ly:bite?4:0,m:proud?'grin':bite||sp?'o':'cat',mo:proud?1.3:1.2,br:bite?.6:0,bc:Hd,fr:'#b5703f'})
  bangs(c,H,Hl,[50,26,44,-4,34,6,28,-18,16,0,8,-20,-2,-2,-10,-20,-18,0,-28,-16,-36,4,-44,-6,-50,26])
  el(c,0,-58,78,17,-.04);fs(c,'#f2cf7a');c.save();el(c,0,-58,78,17,-.04);c.clip();c.lineWidth=2;c.strokeStyle='#d8a84a';for(let k=-3;k<=3;k++){c.beginPath();c.ellipse(0,-58,78*(.4+abs(k)*.0),10+k*2,-.04,0,P*2);}c.restore()
  c.beginPath();c.moveTo(-40,-62);c.bezierCurveTo(-40,-108,40,-108,40,-62);fs(c,'#f2cf7a')
  c.beginPath();c.moveTo(-41,-66);c.quadraticCurveTo(0,-56,41,-66);c.lineTo(40,-76);c.quadraticCurveTo(0,-66,-40,-76);c.closePath();fs(c,'#ff6f9c',3)
  el(c,30,-70,8,8);fs(c,'#fff',2.6);el(c,30,-70,3);fs(c,'#ffd34d',0)
  c.restore()
  // bite alert
  if(bite){const z=E((t-.2)/.04);c.save();c.translate(150,34);c.scale(z,z);c.rotate(.15);tx(c,'!',0,0,34,'#ff4d5e',6,'DejaVu Sans');c.restore()}
  if(proud)for(let k=0;k<3;k++){const p=(t*6+k/3)%1;spk(c,D[0]+cos(k*2.1)*36,D[1]-10+sin(k*2.1)*26,7*sin(p*P))}
}
