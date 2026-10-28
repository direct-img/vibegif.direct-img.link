// steel blue haired girl in a sweater vest shoves a yellow file folder into a little safe, swings the heavy door shut, spins the dial and a green check pops with sparkles before the door swings open again
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#94a9c0',HD='#5a7088',HL='#eef3f8',EYE='#4dabf7',ED='#1864ab',VS='#5c7cfa',VSD='#3b5bdb',TIE='#ff8787',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',SF='#38d9a9',SFD='#0ca678',IN='#343a40',DL='#e9ecef',FD='#ffd43b',FDD='#f59f00',OK='#51cf66',SP='#ffe066',CL='#ffa8a8'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const folder=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.fillStyle=FDD;c.lineWidth=5;c.beginPath();c.moveTo(-24,-16);c.lineTo(-24,-22);c.lineTo(-8,-22);c.lineTo(-4,-16);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(-18,-20,34,20);c.fill();c.stroke()
  c.fillStyle=FD;c.beginPath();c.roundRect(-24,-16,48,34,3);c.fill();c.stroke();c.restore()}
const kf=(K,t)=>{for(let k=1;k<K.length;k++)if(t<=K[k][0]){const[a,...p]=K[k-1],[b,...q]=K[k],u=ez(t,a,b);return p.map((v,j)=>v+(q[j]-v)*u)}}
const SX=132,SY=94,SW=96,SH=118,HX=SX+SW,HK=[[0,100,270],[.12,102,168],[.3,152,141],[.42,108,196],[.5,166,160],[.72,166,160],[.84,110,210],[1,100,270]]
export default(c,t,i)=>{
  const op=1-ez(t,.32,.46)+ez(t,.9,1),a=1.85*op,cw=cos(a)
  const dl=4*PI*ez(t,.5,.72),ok=t>=.72&&t<.92,q=min(1,max(0,(t-.72)/.1)),pb=ok?(1+2.7*(q-1)**3+1.7*(q-1)**2)*(1-ez(t,.86,.92)):0
  const push=t<.32,turn=t>=.48&&t<.74,cn=t>=.46&&t<.52
  const H=f=>{c.save();c.translate(64,206);c.rotate(push?.05:0);c.scale(.74,.74);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,208,170);c.lineTo(212,290);c.lineTo(44,290);c.lineTo(48,170);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=VS;c.beginPath();c.moveTo(66,214);c.lineTo(110,200);c.lineTo(128,250);c.lineTo(146,200);c.lineTo(190,214);c.quadraticCurveTo(206,260,210,330);c.lineTo(46,330);c.quadraticCurveTo(50,260,66,214);c.fill();c.stroke()
    c.strokeStyle=VSD;c.lineWidth=4;for(let k=0;k<4;k++)c.beginPath(),c.moveTo(70+k*8,250+k*20),c.lineTo(186-k*8,250+k*20),c.stroke();c.strokeStyle='#111'
    c.fillStyle='#fff';c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128,204),c.lineTo(128+d*26,188),c.lineTo(128+d*30,210),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=TIE;c.beginPath();c.moveTo(122,204);c.lineTo(134,204);c.lineTo(138,240);c.lineTo(128,250);c.lineTo(118,240);c.closePath();c.fill();c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(push){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
    else if(ok){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else eye(c,103,140,-1,5,turn?2:0),eye(c,153,140,1,5,turn?2:0)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(push){c.beginPath();c.moveTo(114,164);c.lineTo(142,164);c.quadraticCurveTo(142,178,128,178);c.quadraticCurveTo(114,178,114,164);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.rect(115,164,26,5);c.fill();c.stroke()}
    else if(ok){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,188,128,188);c.quadraticCurveTo(114,188,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,9,7,0,0,T);c.fill();c.restore()}
    else if(turn){c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(128,174,138,168);c.stroke();c.fillStyle=TG;c.lineWidth=4;c.beginPath();c.ellipse(136,174,5,6,-.3,0,T);c.fill();c.stroke()}
    else{c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(128,176,138,168);c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*58,96),c.quadraticCurveTo(128+d*66,150,128+d*62,208),c.lineTo(128+d*44,208),c.quadraticCurveTo(128+d*48,150,128+d*44,104),c.closePath(),c.fill(),c.stroke()
    c.beginPath();c.moveTo(66,132)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,132);c.lineTo(178,112)
    for(let k=0;k<7;k++)c.lineTo(170-k*14,k%2?104:116),c.lineTo(163-k*14,k%2?114:104)
    c.lineTo(78,112);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=CL;c.lineWidth=6;for(const x of[158,172])c.beginPath(),c.roundRect(x,74,8,26,4),c.fill(),c.stroke()
  })
  c.fillStyle=SF;c.lineWidth=7;c.beginPath();c.roundRect(SX-6,SY-6,SW+12,SH+12,12);c.fill();c.stroke()
  c.fillStyle=SFD;c.lineWidth=5;for(const x of[SX+8,HX-24])c.beginPath(),c.roundRect(x,SY+SH+4,16,10,3),c.fill(),c.stroke()
  c.fillStyle=IN;c.lineWidth=5;c.beginPath();c.rect(SX+4,SY+4,SW-8,SH-8);c.fill();c.stroke()
  c.strokeStyle='#868e96';c.lineWidth=5;c.beginPath();c.moveTo(SX+6,SY+64);c.lineTo(HX-6,SY+64);c.stroke();c.strokeStyle='#111'
  for(const[k,cc]of[[0,'#74c0fc'],[1,'#ff8787'],[2,'#b197fc']]){c.fillStyle=cc;c.lineWidth=4;c.beginPath();c.roundRect(SX+18+k*20,SY+72,16,38,3);c.fill();c.stroke()}
  const[hx,hy]=kf(HK,t)
  if(t<.3)folder(c,hx+26,hy-4,1-.2*min(1,max(0,(hx-102)/50)));else if(op>.05)folder(c,178,141,.8)
  const fw=SW*cw,sk=1+.14*sin(a)
  c.save();c.translate(HX,SY+SH/2)
  c.fillStyle=cw>0?SF:SFD;c.lineWidth=6;c.beginPath();c.moveTo(0,-SH/2);c.lineTo(-fw,-SH/2*sk);c.lineTo(-fw,SH/2*sk);c.lineTo(0,SH/2);c.closePath();c.fill();c.stroke()
  if(cw>.2){c.translate(-fw/2,0);c.scale(cw,1)
    c.strokeStyle=SFD;c.lineWidth=4;c.beginPath();c.roundRect(-SW/2+10,-SH/2+10,SW-20,SH-20,8);c.stroke();c.strokeStyle='#111'
    c.save();c.rotate(dl);c.fillStyle=DL;c.lineWidth=6;c.beginPath();c.arc(0,0,20,0,T);c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();for(let k=0;k<12;k++)c.moveTo(cos(k*PI/6)*14,sin(k*PI/6)*14),c.lineTo(cos(k*PI/6)*18,sin(k*PI/6)*18);c.stroke()
    c.fillStyle='#ff6b6b';c.lineWidth=3.5;c.beginPath();c.moveTo(-4,-4);c.lineTo(0,-16);c.lineTo(4,-4);c.closePath();c.fill();c.stroke()
    c.fillStyle='#868e96';c.beginPath();c.arc(0,0,5,0,T);c.fill();c.stroke();c.restore()
    ds(c,11,5,DL,()=>{c.moveTo(-32,-14);c.lineTo(-32,14)})}
  else if(cw<-.1){c.strokeStyle='#087f5b';c.lineWidth=4;c.beginPath();for(const y of[-36,0,36])c.moveTo(-fw*.3,y*sk*.9),c.lineTo(-fw*.75,y*sk*.95);c.stroke();c.strokeStyle='#111'}
  c.restore()
  c.fillStyle='#868e96';c.lineWidth=4;for(const y of[SY+18,SY+SH-18])c.beginPath(),c.roundRect(HX-4,y-9,8,18,3),c.fill(),c.stroke()
  if(cn)for(const[x,y,dx,dy]of[[SX-14,SY+30,-12,-6],[SX-14,SY+80,-12,6],[HX+12,SY-8,8,-10]])ds(c,7,3,'#fff',()=>{c.moveTo(x,y);c.lineTo(x+dx,y+dy)})
  ds(c,22,13,'#fff',()=>{c.moveTo(96,262);c.quadraticCurveTo(hx-10,max(hy+30,236),hx,hy+8)})
  c.fillStyle=SKIN;c.lineWidth=5;c.save();c.translate(hx,hy);if(turn)c.rotate(sin(dl)*.4);c.beginPath();c.ellipse(0,0,12,12,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-4,-4);c.lineTo(4,-6);c.moveTo(-4,3);c.lineTo(5,1);c.stroke();c.restore()
  if(turn)for(const k of[0,1])ds(c,7,3,'#fff',()=>{c.arc(HX-SW/2,SY+SH/2,30+k*8,dl-1-k*.3,dl-.2-k*.3)})
  if(pb>.02){c.save();c.translate(HX-SW/2,SY-14);c.scale(pb,pb);c.fillStyle=OK;c.lineWidth=6;c.beginPath();c.arc(0,0,24,0,T);c.fill();c.stroke()
    ds(c,13,6,'#fff',()=>{c.moveTo(-11,0);c.lineTo(-3,8);c.lineTo(12,-8)});c.restore()
    c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[140,62,0],[214,52,.05],[110,96,.1]]){const r=12*sin(PI*min(1,max(0,(t-.74-o)/.16)));if(r>1)star(c,x,y,r)}}
}
