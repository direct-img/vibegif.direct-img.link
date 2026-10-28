// silver bob haired girl in a polka dot headscarf humming as she sweeps, a crumpled paper ball drops in and her broom flicks it into a green trash can whose lid flips open and claps shut
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#ced4da',HD='#868e96',HL='#f8f9fa',EYE='#4dabf7',ED='#1864ab',SC='#ff8787',SH='#ffe066',AP='#74c0fc',APD='#1c7ed6',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',WD='#e8b07a',ST='#ffd43b',SD='#e67700',BD='#ff6b6b',CN='#8ce99a',CND='#37b24d',NT='#b197fc'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x+3,y+3,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+3,y-7,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x+3,y+3,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y+5,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-1,y-3,4.5,0,T);c.fill();c.beginPath();c.arc(x+8,y+10,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const ball=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();for(let k=0;k<9;k++){const b=k*T/9,q=r*(k%2?.84:1);c.lineTo(cos(b)*q,sin(b)*q)}c.closePath();c.fill();c.stroke()
  c.strokeStyle='#adb5bd';c.lineWidth=3;c.beginPath();c.moveTo(-r*.5,-r*.2);c.lineTo(0,r*.1);c.lineTo(r*.4,-r*.4);c.moveTo(-r*.2,r*.5);c.lineTo(r*.3,r*.3);c.stroke();c.restore()}
export default(c,t,i)=>{
  const sw=t>=.14&&t<.34,a=.5+(sw?.16*sin(T*(t-.14)/.1):0)-.2*ez(t,.34,.39)+.6*ez(t,.39,.44)-.4*ez(t,.5,.72),lo=ez(t,.38,.46)-ez(t,.72,.82),fl=t>=.42&&t<.7,hap=t>=.42&&t<.82
  const P=[98,184],dir=[sin(a),cos(a)],B=[P[0]+46*dir[0],P[1]+46*dir[1]],bx0=144+16*ez(t,.14,.34)
  const H=f=>{c.save();c.translate(84,128+2*sin(T*t*2));c.rotate(-.06+.04*sin(T*t*2));c.scale(.62,.62);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=10;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,206,196);c.lineTo(50,196);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=SH;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(48,194,42,250);c.lineTo(38,400);c.lineTo(218,400);c.lineTo(214,250);c.quadraticCurveTo(208,194,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=AP;c.beginPath();c.moveTo(88,244);c.lineTo(168,244);c.lineTo(176,400);c.lineTo(80,400);c.closePath();c.fill();c.stroke()
    ds(c,18,8,AP,()=>{c.moveTo(94,246);c.lineTo(104,198);c.moveTo(162,246);c.lineTo(152,198)})
    c.fillStyle=APD;c.beginPath();c.roundRect(106,272,44,30,6);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=10;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else if(i==14){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,149,x+15,142),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=7;c.fillStyle=MO;c.beginPath()
    if(hap)c.moveTo(112,163),c.quadraticCurveTo(128,168,144,163),c.quadraticCurveTo(142,188,128,188),c.quadraticCurveTo(114,188,112,163),c.fill(),c.stroke(),c.save(),c.clip(),c.fillStyle=TG,c.beginPath(),c.ellipse(128,189,8,6,0,0,T),c.fill(),c.restore()
    else c.moveTo(116,166),c.quadraticCurveTo(128,176,140,166),c.stroke()
    c.lineWidth=10;c.fillStyle=HAIR;c.beginPath();c.moveTo(56,196)
    c.bezierCurveTo(44,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,200,196);c.lineTo(178,196)
    c.quadraticCurveTo(186,130,178,104);c.quadraticCurveTo(170,106,164,114);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,88);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,130,78,196);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*62,126),c.quadraticCurveTo(128+d*66,150,128+d*62,176),c.stroke()
    c.strokeStyle='#111';c.fillStyle=SC;c.beginPath();c.moveTo(58,96);c.bezierCurveTo(56,20,200,20,198,96);c.quadraticCurveTo(128,72,58,96);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle='#fff';for(const[x,y]of[[86,62],[118,44],[150,50],[176,70],[112,74],[146,78]])c.beginPath(),c.arc(x,y,6,0,T),c.fill();c.restore()
    c.fillStyle=SC;c.save();c.translate(198,84);for(const r of[-.5,.5])c.save(),c.rotate(r),c.beginPath(),c.ellipse(16,0,18,9,0,0,T),c.fill(),c.stroke(),c.restore();c.beginPath();c.arc(0,0,9,0,T);c.fill();c.stroke();c.restore()
  })
  const q=(t-.42)/.28,bx=160+40*q,by=230-64*q-440*q*(1-q)
  if(fl&&q>.85)ball(c,bx,by,17*(1-.2*q),q*8)
  c.fillStyle=CN;c.lineWidth=6;c.beginPath();c.roundRect(166,144,64,14,4);c.fill();c.stroke()
  c.beginPath();c.moveTo(164,154);c.lineTo(232,154);c.lineTo(226,252);c.lineTo(170,252);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CND;c.lineWidth=6;for(const x of[184,198,212])c.beginPath(),c.moveTo(x,168),c.lineTo(x+(x-198)*.08,238),c.stroke();c.strokeStyle='#111'
  c.fillStyle=CND;c.beginPath();c.roundRect(166,144,64,12,4);c.fill();c.stroke()
  c.save();c.translate(236,152);c.rotate(1.3*lo)
  c.fillStyle=CN;c.lineWidth=6;c.beginPath();c.roundRect(-80,-14,84,14,5);c.fill();c.stroke()
  c.beginPath();c.roundRect(-50,-22,24,9,4);c.fill();c.stroke();c.restore()
  if(t<.14){const p=t/.14;ball(c,144,-20+250*p*p,17,p*3)}
  else if(t<.42)ball(c,bx0,230-(t<.2?10*sin(PI*(t-.14)/.06):0),17,(bx0-144)/15+3)
  if(fl&&q<=.85)ball(c,bx,by,17*(1-.2*q),q*8)
  if(t>=.42&&t<.58){const p=(t-.42)/.16;c.fillStyle='#fff';c.lineWidth=4;for(const[dx,r]of[[-14,7],[0,10],[14,6]])c.beginPath(),c.arc(B[0]+dx+10*p,244-8*p,r*(1-p*.6),0,T),c.fill(),c.stroke()}
  ds(c,10,5,WD,()=>{c.moveTo(P[0]-44*dir[0],P[1]-44*dir[1]);c.lineTo(B[0],B[1])})
  c.save();c.translate(B[0],B[1]);c.rotate(-a)
  c.fillStyle=ST;c.lineWidth=5;c.beginPath();c.moveTo(-9,0);c.lineTo(9,0);c.quadraticCurveTo(24,16,22,28);c.lineTo(-22,28);c.quadraticCurveTo(-24,16,-9,0);c.fill();c.stroke()
  c.strokeStyle=SD;c.lineWidth=3;c.beginPath();for(const x of[-14,-5,4,13])c.moveTo(x*.6,8),c.lineTo(x,25);c.stroke();c.strokeStyle='#111'
  c.fillStyle=BD;c.lineWidth=4;c.beginPath();c.roundRect(-11,-2,22,9,3);c.fill();c.stroke();c.restore()
  for(const[k,s]of[[0,-26],[1,2]]){const x=P[0]+s*dir[0],y=P[1]+s*dir[1]
    ds(c,20,12,SH,()=>{k?(c.moveTo(116,152),c.quadraticCurveTo(132,190,x,y)):(c.moveTo(54,152),c.quadraticCurveTo(44,190,x,y))})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(x,y,10,11,0,0,T);c.fill();c.stroke()}
  if(!hap&&t>=.14){const p=(t*2)%1;c.save();c.translate(142-6*sin(T*p),62-30*p);c.rotate(.2);c.fillStyle=NT;c.lineWidth=4;c.beginPath();c.ellipse(0,0,7,5.5,-.4,0,T);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(6,-2);c.lineTo(6,-22);c.quadraticCurveTo(12,-16,16,-14);c.stroke();c.restore()}
}
