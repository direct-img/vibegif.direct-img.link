// arcade girl with a neon magenta side ponytail gripping a joystick and frantically mashing a red button while a "CONTINUE?" screen counts 9 down to 0, pupils shaking and sweat flying
const{sin,PI}=Math,T=2*PI
export const frames=20,delay=100
const SKIN='#ffe3d1',HAIR='#f03ec8',HD='#a61e8a',HL='#ffd6f5',EYE='#22b8cf',ED='#0b7285',JK='#845ef7',TRIM='#66d9e8',BL='#ffa8a8',FR='#da77f2',SC='#1b1d3a',OFF='#2c2f5a',LIT='#ffe066',HOT='#ff6b6b',DK='#4dabf7',DKD='#1c7ed6',RD='#ff6b6b',RDD='#e03131',SW='#a5d8ff',STAR='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const W=24,G=8,V=44,SEG=[[-W+G,-V,W-G,-V],[W,-V+G,W,-G],[W,G,W,V-G],[-W+G,V,W-G,V],[-W,G,-W,V-G],[-W,-V+G,-W,-G],[-W+G,0,W-G,0]],DG=['abcdef','bc','abged','abgcd','fgbc','afgcd','afgedc','abc','abcdefg','abcdfg']
const eye=(c,x,y,d,jx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,15,18,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,15,18,0,0,T);c.clip();c.beginPath();c.ellipse(x+jx,y+3,8.5,10,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+jx,y-4,9,5,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.arc(x+jx,y+4,3.5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+jx-3,y-1,2.5,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y,15,18,0,0,T);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(x-17,y-8);c.quadraticCurveTo(x,y-22,x+17,y-8);c.moveTo(x+d*16,y-9);c.lineTo(x+d*22,y-14);c.stroke()
}
export default(c,t,i)=>{
  const n=9-(i>>1),tk=i%2==0,dn=i%2==1,jx=dn?1.5:-1.5,col=n<4?HOT:LIT,sw=sin(T*t*5)*.08
  c.lineWidth=6;c.fillStyle=FR;c.beginPath();c.roundRect(6,8,120,196,16);c.fill();c.stroke()
  c.fillStyle=SC;c.lineWidth=5;c.beginPath();c.roundRect(16,18,100,176,9);c.fill();c.stroke()
  c.fillStyle=n<4&&tk?HOT:'#fff';c.font='bold 14px DejaVu Sans';c.textAlign='center';c.fillText('CONTINUE?',66,44)
  c.save();c.translate(66,116);const s=tk?1.08:1;c.scale(s,s)
  c.strokeStyle=OFF;c.lineWidth=13;c.beginPath();for(const[a,b,e,f]of SEG)c.moveTo(a,b),c.lineTo(e,f);c.stroke()
  const on=SEG.filter((_,k)=>DG[n].includes('abcdefg'[k]))
  for(const[w,s]of[[15,col],[4,'rgba(255,255,255,.75)']]){c.strokeStyle=s;c.lineWidth=w;c.beginPath();for(const[a,b,e,f]of on)c.moveTo(a,b),c.lineTo(e,f);c.stroke()}
  c.restore();c.strokeStyle='#111'
  c.fillStyle='rgba(255,255,255,.18)';c.beginPath();c.moveTo(24,26);c.lineTo(52,26);c.lineTo(24,62);c.closePath();c.fill()
  const H=f=>{c.save();c.translate(182+jx,156);c.scale(.64,.64);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.save();c.translate(190,66);c.rotate(sw);c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,-6);c.bezierCurveTo(36,-14,42,70,32,140);c.quadraticCurveTo(26,160,12,152);c.bezierCurveTo(26,100,22,44,-6,14);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(12,10);c.bezierCurveTo(26,40,28,90,22,130);c.stroke();c.strokeStyle='#111';c.restore()
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,96,202,150);c.lineTo(54,150);c.bezierCurveTo(46,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=JK;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.lineTo(128,236);c.lineTo(152,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=TRIM;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*24,188),c.lineTo(128+d*4,240),c.lineTo(128+d*12,250),c.lineTo(128+d*38,196),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1,dn?2:-2);eye(c,153,140,1,dn?2:-2)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,164,12,7,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*46+k-2,168),c.lineTo(128+d*46+k+2,160),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(112,170);c.quadraticCurveTo(128,162,144,170);c.quadraticCurveTo(144,186+(dn?2:0),128,186+(dn?2:0));c.quadraticCurveTo(112,186+(dn?2:0),112,170);c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(116,169);c.quadraticCurveTo(128,163,140,169);c.lineTo(138,174);c.quadraticCurveTo(128,170,118,174);c.closePath();c.fill();c.stroke()
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,146)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(74,132,80,166);c.quadraticCurveTo(72,170,66,160);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(88,122);c.lineTo(112,114);c.moveTo(144,114);c.lineTo(168,122);c.stroke()
    c.fillStyle=TRIM;c.lineWidth=7;c.beginPath();c.ellipse(190,64,11,16,.5,0,T);c.fill();c.stroke()
    c.fillStyle=STAR;c.lineWidth=6;c.beginPath();for(let k=0;k<10;k++){const a=-PI/2+k*PI/5,r=k%2?7:16;c.lineTo(86+r*Math.cos(a),66+r*sin(a))}c.closePath();c.fill();c.stroke()
    c.fillStyle=SW;c.lineWidth=6;for(const[x,y,o]of[[208,92,0],[200,130,.5]]){const p=(t*4+o)%1,dx=22*p,yy=y-10*p+30*p*p;c.save();c.globalAlpha=1-p*p;c.beginPath();c.moveTo(x+dx,yy-16);c.quadraticCurveTo(x+dx+11,yy,x+dx,yy+6);c.quadraticCurveTo(x+dx-11,yy,x+dx,yy-16);c.fill();c.stroke();c.restore()}
  })
  c.lineWidth=6;c.fillStyle=DK;c.beginPath();c.moveTo(-8,224);c.lineTo(264,224);c.lineTo(264,262);c.lineTo(-8,262);c.closePath();c.fill();c.stroke()
  c.fillStyle=DKD;c.beginPath();c.moveTo(-8,242);c.lineTo(264,242);c.lineTo(264,262);c.lineTo(-8,262);c.closePath();c.fill();c.stroke()
  c.strokeStyle=STAR;c.lineWidth=4;c.beginPath();c.moveTo(-4,251);c.lineTo(260,251);c.stroke();c.strokeStyle='#111'
  c.lineWidth=4;for(const[x,f]of[[30,STAR],[62,'#69db7c'],[94,'#74c0fc']])c.fillStyle='#343a40',c.beginPath(),c.ellipse(x,234,11,5,0,0,T),c.fill(),c.stroke(),c.fillStyle=f,c.beginPath(),c.ellipse(x,231,9,4.5,0,0,T),c.fill(),c.stroke()
  const sx=140+(dn?-7:7),by=dn?228:220
  c.fillStyle='#343a40';c.lineWidth=5;c.beginPath();c.ellipse(140,234,17,6,0,0,T);c.fill();c.stroke()
  ds(c,10,4,'#adb5bd',()=>{c.moveTo(140,234);c.lineTo(sx,204)})
  c.fillStyle='#343a40';c.lineWidth=5;c.beginPath();c.ellipse(226,235,22,8,0,0,T);c.fill();c.stroke()
  c.fillStyle=RDD;c.beginPath();c.moveTo(208,234);c.lineTo(208,by);c.lineTo(244,by);c.lineTo(244,234);c.quadraticCurveTo(226,242,208,234);c.fill();c.stroke()
  c.fillStyle=RD;c.beginPath();c.ellipse(226,by,18,6.5,0,0,T);c.fill();c.stroke()
  ds(c,22,13,JK,()=>{c.moveTo(154,182);c.quadraticCurveTo(154,204,sx+8,216)})
  ds(c,22,13,JK,()=>{c.moveTo(212,182);c.quadraticCurveTo(232,186,226,by-(dn?12:26))})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(sx+5,214,11,10,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(226,by-(dn?8:22),13,9,0,0,T);c.fill();c.stroke()
  c.fillStyle=RD;c.lineWidth=5;c.beginPath();c.arc(sx,196,12,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(sx-4,192,3.5,0,T);c.fill()
  if(dn)for(const a of[-2.6,-2,-1.45,-.95])ds(c,7,3,'#fff',()=>{c.moveTo(226+30*Math.cos(a),212+20*sin(a));c.lineTo(226+40*Math.cos(a),212+28*sin(a))})
}
