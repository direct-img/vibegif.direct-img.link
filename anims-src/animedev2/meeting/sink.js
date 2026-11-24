// a pale girl with long mint hime-cut hair and a cream sweater slowly melting down into her office chair through an endless meeting while the wall clock spins, her soul drifts out, then her name gets called and she snaps upright
// tags: tired, anime, work, clock, bored, slow
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
export const frames=24,delay=100,rim=3
const SK='#fff0e8',HR='#7fe0c4',HD='#46ad94',HL='#c8fff0',SW='#f4ead6',SWd='#dccdae',CH='#4a5574',CHd='#363f59',I=['#4a2a8a','#b79cff']
export default(c,t,i)=>{
  const snap=t>=.82,m=snap?1-sg(t,.82,.87):sg(t,.04,.76),jp=snap&&t<.96?sin(P*min(1,(t-.82)/.14))*8:0
  const p=min(1,t/.82),cx=118
  // speech bubble from someone off-screen
  const say=snap&&t<.97?'@you?':['blah','blah.','blah..','blah...'][i>>1&3]
  c.save();c.translate(52,30);if(snap){const k=1+.15*sin(min(1,(t-.82)/.05)*P);c.scale(k,k)}
  c.beginPath();c.roundRect(-40,-16,80,30,12);c.moveTo(-34,8);c.lineTo(-46,22);c.lineTo(-22,12);fs(c,'#fff')
  c.beginPath();c.roundRect(-40,-16,80,30,12);fs(c,'#fff',0);tx(c,say,0,-1,snap?15:13,snap?'#e2445c':'#7a7090',0)
  c.restore()
  // wall clock, hands whirling
  c.save();c.translate(212,48)
  el(c,0,0,30);fs(c,'#ff7a7a');el(c,0,0,23);fs(c,'#fff',3)
  for(let k=0;k<12;k++){const a=k*P/6;c.beginPath();c.moveTo(sin(a)*18,-cos(a)*18);c.lineTo(sin(a)*(k%3?20:16),-cos(a)*(k%3?20:16));ln(c,k%3?1.6:2.6)}
  const ma=p*8*P,ha=p*2*P+.5
  if(!snap){c.beginPath();c.arc(0,0,26+4,ma-P/2-1.2,ma-P/2-.2);ln(c,2.6);c.beginPath();c.arc(0,0,34,ma-P/2-1,ma-P/2-.4);ln(c,2.6)}
  c.beginPath();c.moveTo(0,0);c.lineTo(sin(ha)*11,-cos(ha)*11);ln(c,4.2)
  c.beginPath();c.moveTo(0,0);c.lineTo(sin(ma)*17,-cos(ma)*17);ln(c,2.8,'#e2445c')
  el(c,0,0,2.8);fs(c,O,0)
  c.restore()
  // chair back, base
  rr(c,cx-46,58,92,118,26);fs(c,CH);rr(c,cx-36,68,72,96,20);fs(c,'#56638a',0)
  rr(c,cx-6,186,12,30,3);fs(c,'#8b93a8',3)
  for(const a of[-1,-.45,.45,1]){c.beginPath();c.moveTo(cx,214);c.lineTo(cx+a*46,222+abs(a)*-4+6);st(c,6,'#5d6580',3)}
  for(const a of[-1,-.45,.45,1]){el(c,cx+a*46,230-abs(a)*4,6.5);fs(c,'#2f3447',3)}
  // head pose: drops and squashes as she melts
  const hy=86+m*62-jp,sx=.8*(1+.08*m),sy=.8*(1-.16*m),tl=m*.14
  const H=()=>{c.translate(cx+m*4,hy);c.rotate(tl);c.scale(sx,sy)}
  // long back hair
  c.save();c.beginPath();c.rect(0,0,256,176);c.clip();H();c.beginPath();c.moveTo(-48,-20);c.bezierCurveTo(-52,-80,52,-80,48,-20);c.lineTo(52,118);c.lineTo(-52,118);c.closePath();fs(c,HD);c.restore()
  // seat cushion and armrests
  el(c,cx,178,58,14);fs(c,CHd)
  for(const s of[-1,1]){rr(c,cx+s*52-3,150,6,26,2);fs(c,'#8b93a8',2.5);rr(c,cx+s*52-12,146,24,9,4);fs(c,'#2f3447',3)}
  // legs and loafers
  const fy=m*5
  for(const s of[-1,1]){c.beginPath();c.moveTo(cx+s*12,184);c.quadraticCurveTo(cx+s*(14+m*10),204,cx+s*(13+m*14),220+fy);st(c,12,'#4a3f5c');rr(c,cx+s*(13+m*14)-9+s*2,220+fy,18,10,5);fs(c,'#8a4b2e',3)}
  // sweater body: upright, then puddling over the seat with drips
  const top=120+m*42-jp,wt=26+m*30,wb=34+m*24
  c.beginPath();c.moveTo(cx-wt,top+12);c.quadraticCurveTo(cx,top-4-m*4,cx+wt,top+12)
  c.quadraticCurveTo(cx+wb+4,top+30,cx+wb,186)
  const dr=[[.7,10],[.25,20],[-.3,14],[-.75,18]]
  for(const[u,l]of dr){const x=cx+u*wb,L=l*m;c.lineTo(x+7,186);c.quadraticCurveTo(x+7,186+L,x,188+L);c.quadraticCurveTo(x-7,186+L,x-7,186)}
  c.lineTo(cx-wb,186);c.quadraticCurveTo(cx-wb-4,top+30,cx-wt,top+12);c.closePath();fs(c,SW)
  c.save();c.clip();for(let k=-3;k<=3;k++){c.beginPath();c.moveTo(cx+k*11*(1+m*.6),top+14);c.lineTo(cx+k*12*(1+m*.6),196);ln(c,2,SWd)}c.restore()
  c.beginPath();c.moveTo(cx-14,top+2);c.quadraticCurveTo(cx,top+12,cx+14,top+2);ln(c,3)
  // arms: hands in lap -> noodling over the armrests
  for(const s of[-1,1]){const sx0=cx+s*(wt-6),sy0=top+16,ex=cx+s*(30+m*26),ey=152-m*8,hx=cx+s*(14+m*46),hy=168+m*30
    c.beginPath();c.moveTo(sx0,sy0);c.quadraticCurveTo(ex,ey,hx,hy);st(c,13,SW);el(c,hx,hy+3,7,7.5);fs(c,SK,3)}
  // goo drops falling off the seat
  if(m>.5&&!snap)for(const[u,l,o]of[[.25,20,0],[-.75,18,.5]]){const q=(t*4+o)%1,x=cx+u*wb,y=188+l*m+q*q*40;if(y<238){c.beginPath();c.moveTo(x,y-10);c.quadraticCurveTo(x+7,y+1,x,y+6);c.quadraticCurveTo(x-7,y+1,x,y-10);fs(c,SW,2.8)}}
  // head
  c.save();H()
  hd(c,SK)
  const ph=m<.25?0:m<.55?1:m<.9?2:3,wake=snap&&t<.97
  face(c,wake?{e:I,pp:.55,m:'open',mo:.9,br:1}:[{e:I,m:'smile',br:-.1},{e:I,op:.55,ly:2,m:'flat',br:.5},{e:I,ex:'flat',m:'wave',mo:.9,br:.6},{e:I,ex:'dot',m:'o',mo:1.1,br:.8,bl:0}][ph])
  // blunt bangs and sidelocks
  c.beginPath();c.moveTo(-52,20);c.bezierCurveTo(-58,-48,-30,-72,0,-72);c.bezierCurveTo(30,-72,58,-48,52,20);c.lineTo(46,-10)
  qs(c,[46,-10,34,-13,22,-11,10,-13,-2,-11,-14,-13,-26,-11,-38,-13,-46,-10],-.12);c.closePath();fs(c,HR)
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*40,-14);c.lineTo(s*52,-10);c.lineTo(s*54,62);c.lineTo(s*36,60);c.closePath();fs(c,HR)}
  c.beginPath();c.arc(0,-28,40,P*1.18,P*1.46);ln(c,5,HL)
  c.beginPath();c.moveTo(4,-70);c.quadraticCurveTo(14,-92,26,-84);ln(c,6.5);ln(c,3,HR)
  el(c,32,-50,7,4.5,-.6);fs(c,'#b79cff',2.6);el(c,40,-44,4.5,3,-.6);fs(c,'#b79cff',2.6)
  c.restore()
  // her soul wisping out at peak boredom
  if(m>.92&&!snap){const q=(t-.68)/.14,y=hy-62-q*22,x=cx+6+q*10+sin(q*9)*4;c.save();c.translate(x,y);c.scale(1.5,1.5);c.translate(-x,-y)
    c.globalAlpha=min(1,q*3);c.beginPath();c.moveTo(x-9,y);c.arc(x,y,9,P,0);c.quadraticCurveTo(x+9,y+14,x+2,y+20);c.quadraticCurveTo(x+4,y+10,x-2,y+12);c.quadraticCurveTo(x-6,y+10,x-9,y);fs(c,'#fff',2.6)
    el(c,x-3,y-1,1.4,2);fs(c,O,0);el(c,x+3,y-1,1.4,2);fs(c,O,0);c.restore();c.globalAlpha=1}
  // startled when called on
  if(wake){tx(c,'!',cx+50,hy-34,30,'#ff5a6e',6,'DejaVu Sans');drop(c,cx-40,hy-30,1.1,-.3)}
}
