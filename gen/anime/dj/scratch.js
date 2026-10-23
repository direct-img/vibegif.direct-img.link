// dj girl with copper hair and big headphones scratching a record back and forth, nodding to the beat, light beams behind her
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#e07a3a',HD='#b0561e',HL='#f8c9a0',EYE='#15aabf',ED='#0b7285',BL='#ffa8a8',HOOD='#9775fa',HOD='#7048e8',PH='#38d9a9',PHD='#0ca678',LED='#f783ac',DECK='#e9ecef',DKD='#adb5bd',REC='#495057',LAB='#ffd43b',B1='#faa2c1',B2='#74c0fc'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const note=(c,x,y,s,col)=>{ds(c,8,3,col,()=>{c.moveTo(x+6*s,y);c.lineTo(x+6*s,y-22*s);c.lineTo(x+16*s,y-18*s)});c.fillStyle=col;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,7*s,5*s,-.4,0,T);c.fill();c.stroke()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x-2,y+6,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x-2,y-4,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-2,y+7,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-6,y,4.5,0,T);c.fill();c.beginPath();c.arc(x+3,y+12,2,0,T);c.fill()
  c.fillStyle=SKIN;c.fillRect(x-16,y-20,32,9);c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-9);c.quadraticCurveTo(x,y-16,x+16,y-9);c.moveTo(x+d*15,y-9);c.lineTo(x+d*21,y-14);c.stroke()
}
export default(c,t)=>{
  const nod=abs(sin(2*PI*t)),th=1.1*sin(2*T*t),cf=10*sin(2*T*t)
  for(const[x,d,col]of[[50,-1,B1],[206,1,B2]]){c.save();c.translate(x,206);c.rotate(d*.45);c.fillStyle=col;c.lineWidth=5;c.beginPath();c.moveTo(-6,0);c.lineTo(-30,-190);c.lineTo(30,-190);c.lineTo(6,0);c.closePath();c.fill();c.stroke();c.restore()}
  for(const[x,o,col]of[[40,0,'#ffd43b'],[212,.5,'#f783ac']]){const p=(t+o)%1,s=sin(PI*p);if(s>.2)note(c,x+5*sin(p*T),120-60*p,.5+.4*s,col)}
  c.lineWidth=7;c.fillStyle=HOOD;c.beginPath();c.moveTo(100,150);c.quadraticCurveTo(58,160,50,230);c.lineTo(206,230);c.quadraticCurveTo(198,160,156,150);c.closePath();c.fill();c.stroke()
  c.fillStyle=HOD;c.lineWidth=5;c.beginPath();c.moveTo(102,152);c.quadraticCurveTo(128,176,154,152);c.quadraticCurveTo(150,168,128,170);c.quadraticCurveTo(106,168,102,152);c.fill();c.stroke()
  ds(c,7,3,'#fff',()=>{c.moveTo(118,166);c.lineTo(116,190);c.moveTo(138,166);c.lineTo(140,190)})
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.moveTo(118,136);c.lineTo(118,154);c.quadraticCurveTo(128,162,138,154);c.lineTo(138,136);c.fill();c.beginPath();c.moveTo(118,136);c.lineTo(118,152);c.moveTo(138,136);c.lineTo(138,152);c.stroke()
  c.save();c.translate(128,96+Math.round(3*nod));c.scale(.7,.7);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,210,100,200,166);c.lineTo(56,166);c.bezierCurveTo(46,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,184,144,164);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(114,165);c.lineTo(142,165);c.lineTo(140,170);c.lineTo(116,170);c.closePath();c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,150)
  c.bezierCurveTo(48,76,86,38,128,38);c.bezierCurveTo(170,38,208,76,192,150)
  c.lineTo(186,120);c.lineTo(178,126);c.lineTo(174,102);c.lineTo(160,110);c.quadraticCurveTo(150,94,134,86)
  c.quadraticCurveTo(120,106,90,118);c.quadraticCurveTo(100,104,98,94);c.lineTo(80,110);c.lineTo(76,126);c.lineTo(70,122);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.3,1.42],[1.52,1.6],[1.68,1.78]])c.beginPath(),c.arc(128,108,58,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  ds(c,24,14,PH,()=>{c.arc(128,118,78,PI*1.04,PI*1.96)})
  for(const d of[-1,1]){c.fillStyle=PH;c.lineWidth=7;c.beginPath();c.ellipse(128+d*76,130,22,32,0,0,T);c.fill();c.stroke();c.fillStyle=PHD;c.beginPath();c.ellipse(128+d*82,130,10,20,0,0,T);c.fill();c.stroke()
    c.strokeStyle=nod>.5?LED:'#fff';c.lineWidth=5;c.beginPath();c.ellipse(128+d*76,130,15,24,0,0,T);c.stroke();c.strokeStyle='#111'}
  c.restore()
  c.lineWidth=7;c.fillStyle=DECK;c.beginPath();c.moveTo(18,192);c.lineTo(238,192);c.lineTo(250,250);c.lineTo(6,250);c.closePath();c.fill();c.stroke()
  c.fillStyle=DKD;c.lineWidth=6;c.beginPath();c.moveTo(6,238);c.lineTo(250,238);c.lineTo(250,250);c.lineTo(6,250);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=14;c.strokeStyle='#fff';c.beginPath();c.ellipse(82,216,56,20,0,0,T);c.stroke();c.strokeStyle='#111'
  c.fillStyle=REC;c.lineWidth=6;c.beginPath();c.ellipse(82,216,56,20,0,0,T);c.fill();c.stroke()
  c.strokeStyle=DKD;c.lineWidth=2;for(const r of[.5,.72,.9])c.beginPath(),c.ellipse(82,216,56*r,20*r,0,0,T),c.stroke();c.strokeStyle='#111'
  c.fillStyle=LAB;c.lineWidth=4;c.beginPath();c.ellipse(82,216,18,7,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(82,216);c.lineTo(82+16*cos(th),216+6*sin(th));c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(82,216,3,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const[x,y]of[[164,206],[182,206],[220,206]])c.beginPath(),c.arc(x,y,6,0,T),c.fill(),c.stroke()
  c.fillStyle=DKD;c.lineWidth=4;c.beginPath();c.roundRect(160,222,64,8,4);c.fill();c.stroke()
  const fx=192+cf,a=th+2.4,rx=82+44*cos(a),ry=216+15*sin(a)
  ds(c,20,11,HOOD,()=>{c.moveTo(104,172);c.lineTo(rx+6,ry-10)})
  ds(c,20,11,HOOD,()=>{c.moveTo(152,172);c.lineTo(fx-4,212)})
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(fx-7,218,14,16,4);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;for(const[x,y]of[[rx,ry],[fx,218]])c.beginPath(),c.ellipse(x,y,12,10,0,0,T),c.fill(),c.stroke()
  for(const d of[-1,1])if(abs(cos(2*T*t))<.6)ds(c,6,2.5,'#fff',()=>{c.moveTo(rx+d*18,ry-6);c.lineTo(rx+d*26,ry-10)})
}
