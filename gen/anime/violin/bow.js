// violinist with an auburn side braid playing with her eyes closed, the bow sawing across the strings, swaying gently, notes drifting up
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#a0442a',HD='#7a2f1c',HL='#e3a08a',BL='#ffa8a8',DRS='#20c997',DRD='#0ca678',VIO='#e8590c',VIL='#ffa94d',FB='#495057',BOW='#a9744f',HAIRB='#fff',RIB='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const shut=(c,x,y,d)=>{c.lineWidth=7;c.beginPath();c.arc(x,y-6,15,.12*PI,.88*PI);c.stroke();c.lineWidth=4;c.beginPath();for(const a of[.3,.5,.7])c.moveTo(x+15*cos(a*PI),y-6+15*sin(a*PI)),c.lineTo(x+20*cos(a*PI),y-6+20*sin(a*PI)+1);c.moveTo(x+d*14,y-1);c.lineTo(x+d*22,y+2);c.stroke()}
const note=(c,x,y,s,col)=>{ds(c,8,3,col,()=>{c.moveTo(x+6*s,y);c.lineTo(x+6*s,y-22*s);c.quadraticCurveTo(x+18*s,y-16*s,x+14*s,y-6*s)});c.fillStyle=col;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,7*s,5*s,-.4,0,T);c.fill();c.stroke()}
export default(c,t)=>{
  const sw=.035*sin(T*t),st=50+34*sin(2*T*t),va=-.22,vx=150,vy=172,ba=-1.02,bd=[cos(ba),sin(ba)]
  const L=(x,y)=>[vx+x*cos(va)-y*sin(va),vy+x*sin(va)+y*cos(va)],cp=L(-12,0),hx=cp[0]-bd[0]*st,hy=cp[1]-bd[1]*st
  for(const[x,o,col]of[[206,0,'#ffd43b'],[230,.5,'#f783ac']]){const p=(t+o)%1,s=sin(PI*p);if(s>.2)note(c,x+5*sin(p*T),110-70*p,.45+.4*s,col)}
  c.save();c.translate(128,256);c.rotate(sw);c.translate(-128,-256)
  c.lineWidth=7;c.fillStyle=DRS;c.beginPath();c.moveTo(102,150);c.quadraticCurveTo(62,160,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,160,154,150);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(108,152);c.quadraticCurveTo(128,176,148,152);c.quadraticCurveTo(128,162,108,152);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.moveTo(118,134);c.lineTo(118,152);c.quadraticCurveTo(128,160,138,152);c.lineTo(138,134);c.fill();c.beginPath();c.moveTo(118,134);c.lineTo(118,150);c.moveTo(138,134);c.lineTo(138,150);c.stroke()
  c.save();c.translate(124,98);c.rotate(.14);c.scale(.68,.68);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,210,100,198,170);c.lineTo(58,170);c.bezierCurveTo(46,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  shut(c,103,142,-1);shut(c,153,142,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const x of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+x-2,167),c.lineTo(128+d*44+x+2,161),c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(119,168);c.quadraticCurveTo(128,175,137,168);c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
  c.bezierCurveTo(48,78,86,38,128,38);c.bezierCurveTo(170,38,208,78,190,160)
  c.quadraticCurveTo(190,124,180,104);c.quadraticCurveTo(160,100,142,86);c.quadraticCurveTo(140,98,132,104)
  c.quadraticCurveTo(122,92,118,84);c.quadraticCurveTo(106,104,84,112);c.quadraticCurveTo(70,130,66,160);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,106,58,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  for(let k=0;k<5;k++){const x=78-k*1.5,y=150+k*17;c.fillStyle=k%2?HD:HAIR;c.lineWidth=6;c.beginPath();c.ellipse(x,y,13-k,11,.15,0,T);c.fill();c.stroke()}
  c.fillStyle=RIB;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(71+d*10,236,10,6,d*.4,0,T),c.fill(),c.stroke()
  c.beginPath();c.arc(71,236,5,0,T);c.fill();c.stroke()
  const nk=L(80,0)
  ds(c,20,11,DRS,()=>{c.moveTo(150,170);c.lineTo(196,196);c.lineTo(nk[0]-4,nk[1]+10)})
  c.save();c.translate(vx,vy);c.rotate(va)
  const body=()=>{c.moveTo(-40,0);c.bezierCurveTo(-40,-26,-16,-26,-10,-16);c.quadraticCurveTo(-2,-12,6,-16);c.bezierCurveTo(14,-24,36,-22,36,0);c.bezierCurveTo(36,22,14,24,6,16);c.quadraticCurveTo(-2,12,-10,16);c.bezierCurveTo(-16,26,-40,26,-40,0)}
  c.fillStyle=VIO;c.lineWidth=6;c.beginPath();body();c.fill();c.stroke()
  c.strokeStyle=VIL;c.lineWidth=4;c.beginPath();c.moveTo(-30,-12);c.quadraticCurveTo(-20,-18,-12,-12);c.moveTo(14,-14);c.quadraticCurveTo(24,-16,30,-8);c.stroke();c.strokeStyle='#111'
  c.lineWidth=2.5;for(const d of[-1,1]){c.beginPath();c.moveTo(-6,d*8);c.bezierCurveTo(-2,d*14,2,d*4,6,d*10);c.stroke()}
  c.fillStyle=FB;c.lineWidth=5;c.beginPath();c.moveTo(-4,-5);c.lineTo(80,-4);c.lineTo(80,4);c.lineTo(-4,5);c.closePath();c.fill();c.stroke()
  c.fillStyle=VIO;c.beginPath();c.roundRect(78,-6,16,12,3);c.fill();c.stroke();c.beginPath();c.arc(98,0,7,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-34,-6);c.lineTo(-20,-4);c.lineTo(-20,4);c.lineTo(-34,6);c.closePath();c.fill()
  c.strokeStyle='#fff';c.lineWidth=1.2;c.beginPath();for(const y of[-3,-1,1,3])c.moveTo(-22,y*.9),c.lineTo(80,y*.9);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.rect(-14,-8,4,16);c.fill();c.stroke()
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(nk[0],nk[1],10,11,0,0,T);c.fill();c.stroke()
  ds(c,20,11,DRS,()=>{c.moveTo(104,170);c.lineTo(84,206);c.lineTo(hx-4,hy+4)})
  c.restore()
  const tx=hx+bd[0]*150,ty=hy+bd[1]*150,nx=-bd[1],ny=bd[0]
  ds(c,9,4,BOW,()=>{c.moveTo(hx,hy);c.lineTo(tx,ty)})
  ds(c,6,2.5,HAIRB,()=>{c.moveTo(hx+nx*6,hy+ny*6);c.lineTo(tx+nx*3,ty+ny*3)})
  c.fillStyle='#111';c.beginPath();c.moveTo(hx+nx*7,hy+ny*7);c.lineTo(hx+bd[0]*14+nx*7,hy+bd[1]*14+ny*7);c.lineTo(hx+bd[0]*14,hy+bd[1]*14);c.lineTo(hx,hy);c.fill()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,11,11,0,0,T);c.fill();c.stroke()
  if(Math.abs(cos(2*T*t))>.5)for(const d of[-1,1])ds(c,6,2.5,'#fff',()=>{c.moveTo(cp[0]+d*14+12,cp[1]-12);c.lineTo(cp[0]+d*18+16,cp[1]-18)})
}
