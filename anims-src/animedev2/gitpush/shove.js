// strong girl with a navy high ponytail, a red sweatband and orange work gloves heaves a heavy box of commits overhead and shoves it up into a cloud labelled origin, it pops in, and she dusts off her hands proudly
// tags: proud, anime, coding, git, cloud, strong
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k,hop=(t,a,b)=>t<a||t>b?0:sin((t-a)/(b-a)*P)
// limb: a thick outlined quadratic stroke
const lb=(c,x0,y0,x1,y1,x2,y2,w,f)=>{c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(x1,y1,x2,y2);st(c,w,f)}
// head shape, centred on the eyes' row, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// hair cap with a fringe: p runs from the right temple across to the left one
const cap=(c,p,col,k=.18,hl)=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,p,k);c.closePath();fs(c,col)
  if(hl){c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);sk(c,5,hl);c.beginPath();c.arc(0,-24,40,P*1.56,P*1.64);sk(c,5,hl)}}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,r=k%2?2.2:7.5;c.lineTo(x+lx+cos(q)*r,y+ly+sin(q)*r)}c.closePath();fs(c,'#fff',0);el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6*pp**.5,y+ly-4*pp**.5,3.4*pp**.5,4.2*pp**.5);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// face: o.e iris colours, ex eye style, m mouth, mo mouth scale, br brow worry(+)/anger(-), by brow lift, bc brow colour, fr freckles
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,by=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.32)',0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br-by);c.quadraticCurveTo(f*20,-15-br-by,f*28,-12+3*br-by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='open'){c.moveTo(-6,-3);c.quadraticCurveTo(0,-5,6,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-6,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='gasp'){c.moveTo(0,-6);c.bezierCurveTo(8,-6,8,12,0,12);c.bezierCurveTo(-8,12,-8,-6,0,-6);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,12,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='chew'){el(c,0,0,5,3.2);fs(c,'#a3304a',2.2/mo)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#fff3a0',w=2.5)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;if(w)c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
// open hand, fingers pointing up (rotate with a), thumb to the left (mirror with s<0)
const palm=(c,x,y,a,col,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,abs(s))
  for(const L of[0,1]){for(const[q,l]of[[-.55,10],[-.18,12],[.18,12],[.52,10],[-1.45,8]]){c.beginPath();c.moveTo(0,1);c.lineTo(sin(q)*l,-cos(q)*l);c.lineWidth=L?4.4:10.4;c.strokeStyle=L?col:O;c.stroke()}el(c,0,3,L?7:10.4,L?6.5:9.9);c.fillStyle=L?col:O;c.fill()}
  c.restore()}
export const frames=26,delay=85,rim=4
const H='#232a52',Hl='#5a6cb0',S='#f3cba8',T='#2f3f8f',K='#c8a46a',Kd='#9c7a44',GL='#ff8a2a',I=['#7a4a00','#ffd23a'],GX=88,CX=182,CY=48
const box=(c,x,y,a,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  rr(c,-30,-23,60,46,4);fs(c,'#d9a066');rr(c,-30,-23,60,10,[4,4,0,0]);fs(c,'#c98a4c',3)
  c.beginPath();c.moveTo(-8,-23);c.lineTo(-8,-13);c.lineTo(8,-13);c.lineTo(8,-23);fs(c,'#f3e2b8',2.5)
  c.beginPath();c.moveTo(-18,0);c.lineTo(18,0);sk(c,3,'#7a4f2a');for(const x of[-18,0,18]){el(c,x,0,5);fs(c,x>10?'#ff6fa3':'#3fc46a',2.5)}
  tx(c,'commits',0,13,10,'#7a4f2a',0);c.restore()}
// head height over the loop (crouch, tiptoe), its change drives the ponytail swing
const HY=t=>{t=(t%1+1)%1;const push=sg(t,.3,.47);return 106-push*6*(1-sg(t,.5,.58))+hop(t,-.06,.14)*10+sg(t,.95,1)*6}
// high ponytail from the crown, arcing up and back over to her left; a lifts it
const tail=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(.76,.76)
  c.beginPath();c.moveTo(10,2);c.bezierCurveTo(6,-40,-46,-50,-62,-10);c.bezierCurveTo(-70,10,-64,36,-56,58);c.lineTo(-50,44);c.lineTo(-42,62);c.lineTo(-40,40);c.lineTo(-30,52)
  c.bezierCurveTo(-38,22,-40,-8,-26,-20);c.bezierCurveTo(-14,-28,-2,-16,-8,4);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-6,-26);c.bezierCurveTo(-30,-38,-52,-24,-54,0);sk(c,3.5,Hl);c.beginPath();c.moveTo(-44,-4);c.quadraticCurveTo(-52,20,-48,40);sk(c,2.5,'#141a3a')
  el(c,0,0,10,8,-.3);fs(c,'#e8384f',3);c.beginPath();c.moveTo(-6,-4);c.lineTo(-3,5);c.moveTo(3,-6);c.lineTo(5,4);sk(c,2,'#b0202e');c.restore()}
const hand=(c,x,y)=>{el(c,x,y,8.5,8);fs(c,GL,3);c.beginPath();c.moveTo(x-6,y+5);c.lineTo(x+6,y+5);sk(c,2.5,'#c8601a')}
export default(c,t,i)=>{
  // phases: grab, lift overhead, shove into the cloud, pop, dust off hands, proud, a new box slides in
  const lift=sg(t,.08,.24),push=sg(t,.3,.47),pop=hop(t,.46,.58),dust=t>=.6&&t<.82,proud=t>=.82&&t<.95,nb=sg(t,.88,.97)
  const hold=t>=.1&&t<.44,strain=hold?(i%2?1.4:-1.4):0,tip=push*6*(1-sg(t,.5,.58)),crouch=hop(t,-.06,.14)*10+sg(t,.95,1)*6,ox=push*8*(1-sg(t,.5,.6))
  // box path: on the floor, overhead, into the cloud; a new one slides in at the end
  let bx=lp(GX+4,GX+6,lift)+strain,by=lp(212,38,lift),ba=0,bs=.9
  if(t>=.3){bx=lp(GX+6,CX,E(push));by=lp(38,CY+4,push);ba=push*.15;bs=.9-push*.4}
  if(t>=.88){bx=lp(-40,GX+4,nb);by=212;ba=-.1*(1-nb);bs=.9}
  const hr=dust?-.1:proud?-.06:0,sw=max(-.45,min(.5,(HY(t-.02)-HY(t-.07))*.11))+.3*hop(t,.47,.62)+(dust?.06*sin(t*P*14):0)
  tail(c,GX+ox+sin(hr)*53+2,HY(t)-cos(hr)*53,sw+hr)
  if(t>=.3&&t<.47)box(c,bx,by,ba,bs)
  // cloud
  const cw=1+pop*.1
  c.save();c.translate(CX,CY);c.scale(.8*cw,.8/cw*(1+pop*.08))
  c.beginPath();c.moveTo(-70,14);c.arc(-52,0,20,P*.6,P*1.5);c.arc(-20,-14,26,P*1.1,P*1.85);c.arc(18,-16,24,P*1.15,P*1.95);c.arc(52,0,22,P*1.4,P*.4);c.quadraticCurveTo(0,26,-70,14);c.closePath();fs(c,'#fff')
  c.beginPath();c.arc(-20,-14,18,P*1.2,P*1.5);sk(c,3,'#d7e3f5');tx(c,'origin',0,2,19,'#3a8ae0',0);c.restore()
  if(pop>0){for(let k=0;k<6;k++){const a=P*.45+k*P*.17,r=44+pop*16;c.beginPath();c.moveTo(CX+cos(a)*r*1.2,CY+sin(a)*r*.6);c.lineTo(CX+cos(a)*(r+10)*1.2,CY+sin(a)*(r+10)*.6);sk(c,3)}
    for(let k=0;k<3;k++)spk(c,CX-40+k*40,CY+44+(k%2)*10-pop*10,8*pop+2,'#fff3a0',2)}
  // hand targets
  let L,R
  if(t<.08){L=[bx-25,by+8];R=[bx+25,by+8]}
  else if(t<.3){L=[bx-22,by+18];R=[bx+22,by+18]}
  else if(t<.47){const q=min(push,.4),x=lp(GX+6,CX,E(q)),y=lp(38,CY+4,q);L=[x-20,y+18];R=[x+20,y+14]}
  else if(t<.6){const q=sg(t,.47,.6);L=[lp(GX-10,GX-26,q),lp(60,194,q)];R=[lp(GX+42,GX+26,q),lp(52,194,q)]}
  else if(dust){const k=.5-.5*cos((t-.6)/.22*P*6);L=[GX-8,170];R=[GX+26-k*30,160+k*8]}
  else{const q=t>=.88?sg(t,.92,1):0;L=[lp(GX-26,bx-25,q),lp(194,by+8,q)];R=[lp(GX+26,bx+25,q),lp(194,by+8,q)]}
  const hx=GX+ox,hy=106-tip+crouch,b=crouch
  // legs, sneakers, shorts
  for(const f of[-1,1]){c.beginPath();c.moveTo(GX+ox*.5+f*10,206+b*.6-tip);c.quadraticCurveTo(GX+f*(12+b*1.4),222,GX+f*11,232-tip);st(c,10,S);el(c,GX+f*12,237-tip*.5,11,6);fs(c,'#fff',3);c.beginPath();c.moveTo(GX+f*12-6,236-tip*.5);c.lineTo(GX+f*12+6,236-tip*.5);sk(c,2.5,'#e8384f')}
  c.save();c.translate(ox*.6,b*.6-tip)
  c.beginPath();c.moveTo(GX-26,190);c.lineTo(GX+26,190);c.lineTo(GX+30,212);c.lineTo(GX+3,214);c.lineTo(GX,206);c.lineTo(GX-3,214);c.lineTo(GX-30,212);c.closePath();fs(c,K)
  rr(c,GX+16,196,10,10,2);fs(c,Kd,2.2);c.restore()
  // tank top
  c.save();c.translate(ox,b-tip)
  c.beginPath();c.moveTo(GX-14,146);c.quadraticCurveTo(GX-26,150,GX-26,164);c.lineTo(GX-27,194);c.lineTo(GX+27,194);c.lineTo(GX+26,164);c.quadraticCurveTo(GX+26,150,GX+14,146);c.closePath();fs(c,T)
  c.beginPath();c.moveTo(GX-27,182);c.lineTo(GX+27,182);sk(c,4,'#fff');c.beginPath();c.moveTo(GX-10,147);c.quadraticCurveTo(GX,158,GX+10,147);fs(c,S,3)
  c.restore()
  const sl=[GX-22+ox,156+b-tip],sr=[GX+22+ox,156+b-tip]
  const arm=(s,h,f)=>{const pr=proud&&t<.9,ex=pr?s[0]+f*20:(s[0]+h[0])/2+f*14,ey=pr?s[1]+14:(s[1]+h[1])/2+(h[1]<s[1]?2:6);lb(c,s[0],s[1],ex,ey,h[0],h[1],10,S)}
  const hiA=L[1]<120
  if(t>=.16&&t<.3)box(c,bx,by,ba,bs)
  if(hiA){arm(sl,L,-1);arm(sr,R,1)}
  // head
  c.save();c.translate(hx,hy);c.rotate(dust?-.1:proud?-.06:0);c.scale(.76,.76)
  hd(c,S)
  const o=t<.08?{e:I,lx:2,ly:6,m:'cat'}:t<.3?{e:I,ex:'shut',m:'grit',mo:1.1}:t<.47?{e:I,lx:7,ly:-6,br:-.9,op:.85,m:'grit'}
    :t<.6?{e:I,lx:6,ly:-4,m:'o',mo:1.1}:dust?{e:I,ex:'calm',m:'smug',mo:1.2,br:-.2}:t<.9?{e:I,ex:'happy',m:'grin'}:{e:I,lx:-6,ly:5,m:'o'}
  face(c,o)
  // long side locks framing the face
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*46,-26);c.quadraticCurveTo(f*60,8,f*54,40);c.lineTo(f*50,30);c.lineTo(f*46,58);c.quadraticCurveTo(f*42,30,f*40,12);c.quadraticCurveTo(f*38,-6,f*34,-14);c.closePath();fs(c,H)
    c.beginPath();c.moveTo(f*48,-8);c.quadraticCurveTo(f*52,16,f*48,38);sk(c,2,Hl)}
  cap(c,[50,26,47,-12,38,-24,20,-30,0,-31,-20,-30,-38,-24,-47,-12,-50,26],H,.15)
  // separate bang strands, sweeping a little to her left
  for(const[x,l,w]of[[-34,22,9],[-19,30,10],[-3,26,10],[13,32,10],[29,24,9]]){c.beginPath();c.moveTo(x-w,-36);c.quadraticCurveTo(x-w*.6,-36+l*.6,x-4,-34+l);c.quadraticCurveTo(x+w*.5,-34+l*.5,x+w,-36);c.closePath();fs(c,H,3)}
  c.beginPath();c.moveTo(-14,-30);c.quadraticCurveTo(-12,-18,-15,-10);c.moveTo(19,-28);c.quadraticCurveTo(20,-16,16,-6);sk(c,2.2,Hl)
  // sweatband sitting on the hair, with hair showing above it and a shine arc
  c.beginPath();c.moveTo(-49,-30);c.quadraticCurveTo(0,-62,49,-30);st(c,7,'#e8384f',3.2)
  c.beginPath();c.arc(0,-22,42,P*1.24,P*1.42);sk(c,4.5,Hl);c.beginPath();c.arc(0,-22,42,P*1.52,P*1.6);sk(c,4.5,Hl)
    c.restore()
  // box in front of her while on the floor and lifting
  if(t<.16||t>=.88)box(c,bx,by,ba,bs)
  if(!hiA){arm(sl,L,-1);arm(sr,R,1)}
  hand(c,...L);hand(c,...R)
  // effort sweat, dust puffs, proud sparkle
  if(hold){drop(c,GX-44,94+(i%3)*3,.9);drop(c,GX+46,102-(i%3)*2,.8)}
  if(dust)for(let j=0;j<3;j++){const q=((t-.6)/.22*3+j/3)%1,x=GX-22-q*34+j*4,y=166-q*30+j*8;c.globalAlpha=1-q*q;el(c,x,y,5+q*8,4.5+q*7);fs(c,'#efe8da',2.5);c.globalAlpha=1}
  if(proud&&t<.9)for(let k=0;k<3;k++)spk(c,GX-44+k*44,64-(k%2)*14,7+k%2*3,'#fff3a0',2)
}
