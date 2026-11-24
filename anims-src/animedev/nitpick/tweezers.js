// a pale code reviewer with a sleek wine-red low bun, hair sticks and a black turtleneck peering through a brass jeweller's loupe, plucking a tiny wriggling "nit:" out of a line of code with tweezers, dropping it in a specimen dish, and deadpanning when another pops right back
// tags: anime, coding, review, detail, picky, smug
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
export const frames=26,delay=85,rim=3
const SK='#fff1ea',HR='#8a2846',HD='#5e1530',HL='#d4577a',TN='#2a2533',TL='#4a4458',I=['#2a3f66','#8fb4e6'],NX=116,NY=203
const nit=(c,x,y,s,w,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  c.lineWidth=1.3;c.strokeStyle='#ff9aa8';for(const k of[-1,0,1]){const v=sin(w+k*2)*1.6;c.beginPath();c.moveTo(-6+k*6,3);c.lineTo(-8+k*6,7+v);c.moveTo(-4+k*6,3);c.lineTo(-2+k*6,7-v);c.stroke()}
  tx(c,'nit:',0,-1,10,'#ff5a6e',3.2);c.restore()}
export default(c,t,i)=>{
  const T=t*2*P,K=(a,b)=>sg(t,a,b)
  // tweezer tip path: approach, pinch, tug, pop, inspect, to the jar, back
  const ap=K(.02,.18),tug=K(.26,.34),pp=K(.34,.4),jr=K(.62,.74),bk=K(.78,.9)
  let x=178,y=150
  x+=(NX-x)*ap;y+=(NY-y)*ap;y-=tug*7;x+=(150-x)*pp;y+=(122-y)*pp
  x+=(204-x)*jr;y+=(146-y)*jr;x+=(178-x)*bk;y+=(150-y)*bk
  const hold=t>=.26&&t<.74,shut=hold?1:K(.18,.24)*(1-K(.74,.76)),wig=T*6
  if(t>.4&&t<.62){x+=sin(T*5)*2;y+=sin(T*7)*1.5}
  // hair bun behind
  const tl=.12*(1-pp)+.06*jr*(1-bk)+(-.04)*pp*(1-jr),hx=92+tl*20,hy=90
  const H=()=>{c.translate(hx,hy);c.rotate(tl);c.scale(.85,.85)}
  c.save();H()
  for(const s of[-1,1]){c.save();c.translate(-50,-30);c.rotate(s*.5-.4);rr(c,-2.5,-34,5,46,2);fs(c,'#f2d06b',2.6);c.restore()}
  el(c,-46,-22,20,18,-.4);fs(c,HR);c.beginPath();c.arc(-46,-22,11,P*.8,P*1.6);ln(c,3,HD)
  c.beginPath();c.moveTo(-48,-20);c.bezierCurveTo(-54,-84,54,-84,48,-20);c.quadraticCurveTo(54,20,40,40);c.lineTo(-40,40);c.quadraticCurveTo(-54,20,-48,-20);fs(c,HD)
  c.restore()
  // turtleneck body
  c.beginPath();c.moveTo(70,134);c.quadraticCurveTo(38,138,36,170);c.lineTo(36,176);c.lineTo(150,176);c.lineTo(148,170);c.quadraticCurveTo(144,138,114,134);c.closePath();fs(c,TN)
  rr(c,76,120,32,20,8);fs(c,TN);for(const y of[127,133]){c.beginPath();c.moveTo(80,y);c.lineTo(104,y);ln(c,2,TL)}
  // left hand steadying on the panel
  c.beginPath();c.moveTo(46,150);c.quadraticCurveTo(36,166,54,172);st(c,14,TN);el(c,58,170,9,7);fs(c,SK,3)
  // code panel with the offending line
  rr(c,14,168,228,68,10);fs(c,'#232842');el(c,58,170,9,6);fs(c,SK,3)
  c.font='bold 11px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle';c.fillStyle='#5d6690';c.fillText('41',22,184);c.fillText('42',22,NY);c.fillText('43',22,222)
  rr(c,42,180,60,8,4);fs(c,'#5d6690',0);rr(c,108,180,36,8,4);fs(c,'#5d6690',0)
  rr(c,42,218,30,8,4);fs(c,'#ff7eb6',0);rr(c,78,218,70,8,4);fs(c,'#7ee0ff',0);rr(c,154,218,24,8,4);fs(c,'#ffd166',0)
  c.font='bold 15px DejaVu Sans Mono';for(const[s,x,f]of[['let',42,'#ff7eb6'],['x',78,'#e8ecff'],['=',136,'#e8ecff'],['42',154,'#ffb86b'],[';',172,'#e8ecff']]){c.fillStyle=f;c.fillText(s,x,NY+1)}
  // specimen dish of plucked nits
  el(c,204,161,27,8);fs(c,'rgba(214,236,255,.9)');el(c,204,158,23,5);fs(c,'rgba(255,255,255,.5)',2)
  const cnt=t>.76?4:3
  for(let k=0;k<cnt;k++){const fy=k==3?min(1,(t-.76)/.04):1;nit(c,192+k%2*22+(k>>1)*4,158-(k==3?0:(k>>1)*2)-(1-fy)*14,.6,wig+k*2,k%2?.3:-.25)}
  // the nit: on the line, tugged up, carried, and a new one popping back at the end
  const back=K(.87,.92)
  if(t<.26)nit(c,NX,NY,1,wig)
  else if(t<.34){c.beginPath();c.moveTo(NX-8,NY+4);c.quadraticCurveTo(x,y+6,NX+8,NY+4);ln(c,2,'#ff5a6e');nit(c,x,y+5,1,wig)}
  if(back>0){nit(c,NX,NY,back*(1+.4*sin(back*P)),wig);if(back<1){c.beginPath();for(const a of[-2.4,-1.6,-.8]){c.moveTo(NX+cos(a)*14,NY+sin(a)*12);c.lineTo(NX+cos(a)*22,NY+sin(a)*18)}ln(c,2.4,'#ffd166')}}
  if(t>.33&&t<.37){c.beginPath();for(const a of[-2.6,-1.6,-.6]){c.moveTo(NX+cos(a)*12,NY-8+sin(a)*10);c.lineTo(NX+cos(a)*22,NY-8+sin(a)*18)}ln(c,3)}
  // head
  c.save();H();hd(c,SK)
  const ph=t<.34?0:t<.4?1:t<.62?2:t<.78?3:t<.87?4:5,LX=[4,3,7,8,0,1][ph],LY=[5,-3,-1,-2,1,4][ph]
  face(c,[{e:I,op:.45,lx:LX,ly:LY,m:'flat',br:-.4},{e:I,lx:LX,ly:LY,m:'o',mo:.8,br:.4},{e:I,op:.6,lx:LX,ly:LY,m:'smug',br:-.2},{ex:'happy',m:'smile',br:0},{e:I,lx:LX,ly:LY,m:'cat',br:0},{ex:'flat',m:'frown',br:.2}][ph])
  for(const s of[-1,1]){el(c,s*45,30,3.6);fs(c,'#fff',2)}
  // brass loupe over her right eye, magnifying it
  c.save();el(c,-20,11,17);c.clip();fs(c,SK,0);c.translate(-20,11);c.scale(1.5,1.5);c.translate(20,-11)
  eye(c,-20,-1,{e:I,lx:LX*.6,ly:LY*.6,op:ph==5?.7:1,pp:ph==1?.7:1});c.restore()
  el(c,-20,11,17);c.fillStyle='rgba(170,220,255,.18)';c.fill();ln(c,8,O);ln(c,4.5,'#d9a441')
  c.beginPath();c.arc(-20,11,11,P*1.1,P*1.45);ln(c,2.6,'rgba(255,255,255,.85)')
  c.beginPath();c.moveTo(-36,6);c.lineTo(-47,-2);ln(c,6,O);ln(c,3,TL)
  // sleek centre-parted hair
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-56,-46,-30,-70,0,-70);c.bezierCurveTo(30,-70,56,-46,50,26);c.quadraticCurveTo(44,0,30,-16);c.quadraticCurveTo(14,-30,2,-46);c.quadraticCurveTo(-12,-30,-30,-18);c.quadraticCurveTo(-44,-4,-50,26);fs(c,HR)
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*42,-12);c.quadraticCurveTo(s*54,22,s*46,50);c.quadraticCurveTo(s*40,30,s*34,4);fs(c,HR)}
  c.beginPath();c.moveTo(-6,-62);c.quadraticCurveTo(-26,-52,-36,-30);ln(c,4.5,HL);c.beginPath();c.moveTo(8,-62);c.quadraticCurveTo(26,-54,36,-34);ln(c,3,HD)
  c.restore()
  if(ph==2){spk(c,hx-38,hy-18,8,'#fff6b0',2.2)}
  // tweezers and the hand holding them
  const a=Math.atan2(-38,12),hx2=x+12,hy2=y-38,g=1.2+(1-shut)*5
  c.save();c.translate(x,y);c.rotate(a-P/2+P)
  c.beginPath();c.moveTo(-g,0);c.lineTo(-2,-40);c.moveTo(g,0);c.lineTo(2,-40);st(c,3,'#d5dbe8',2.2);c.restore()
  c.beginPath();c.moveTo(132,148);c.quadraticCurveTo((132+hx2)/2+16,max(hy2,148)+16,hx2,hy2);st(c,12,TN)
  el(c,hx2,hy2,9,8);fs(c,SK,3);c.beginPath();c.moveTo(hx2-6,hy2+4);c.lineTo(hx2-12,hy2+10);ln(c,6.5);ln(c,3.4,SK)
  // the nit held up (drawn over the hand) and dropped into the dish
  if(t>=.34&&t<.74)nit(c,x,y+5,1+pp*.6,wig*(1+pp),sin(wig)*.15*pp)
  else if(t>=.74&&t<.76){const f=(t-.74)/.02;nit(c,x,y+5+f*8,1.6-f*1,wig)}
}
