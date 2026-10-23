// close-up of a girl with long wavy ash-blonde hair breathing in a bouquet with her eyes shut, then sighing dreamily, petals drifting by
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#d8cbb0',HD='#a99c80',HL='#f4efe3',EYE='#b197fc',ED='#7048e8',BL='#ffa8a8',DR='#b2d8a8',WR='#faa2c1',WRD='#f06595',ROSE='#ff8787',RD='#e03131',DAI='#fff',YEL='#ffd43b',LEAF='#69db7c',PET='#ffc9de'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,lid)=>{
  const u=-lid*.7
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x+1,y+2+u,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+1,y-8+u,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+1,y+3+u,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-3,y-2+u,5.5,0,T);c.fill();c.beginPath();c.arc(x+6,y+8+u,2.5,0,T);c.fill()
  c.lineWidth=1.5;c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?1.6:4.5;c.lineTo(x+5+cos(a)*q,y+2+u+sin(a)*q)}c.closePath();c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const shut=(c,x,y,d)=>{c.lineWidth=6;c.beginPath();c.arc(x,y-6,15,.12*PI,.88*PI);c.stroke();c.lineWidth=4;c.beginPath();for(const a of[.25,.5,.75])c.moveTo(x+15*cos(a*PI)*.9,y-6+15*sin(a*PI)),c.lineTo(x+19*cos(a*PI)*.9,y-6+19*sin(a*PI)+2);c.moveTo(x+d*14,y-1);c.lineTo(x+d*21,y+2);c.stroke()}
const petal=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=PET;c.lineWidth=3.5;c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(9,-2,0,9);c.quadraticCurveTo(-9,-2,0,-9);c.fill();c.stroke();c.restore()}
const rose=(c,x,y,r)=>{c.fillStyle=ROSE;c.lineWidth=5;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke();c.strokeStyle=RD;c.lineWidth=3;c.beginPath();for(let a=0;a<3*T;a+=.2){const q=r*.75*(1-a/(3*T));a?c.lineTo(x+q*cos(a),y+q*sin(a)):c.moveTo(x+q,y)}c.stroke();c.strokeStyle='#111'}
const daisy=(c,x,y,r)=>{c.fillStyle=DAI;c.lineWidth=3.5;for(let k=0;k<8;k++){const a=k*PI/4;c.beginPath();c.ellipse(x+cos(a)*r*.62,y+sin(a)*r*.62,r*.42,r*.22,a,0,T);c.fill();c.stroke()}c.fillStyle=YEL;c.beginPath();c.arc(x,y,r*.32,0,T);c.fill();c.stroke()}
export default(c,t)=>{
  const sn=t<.5,b=sn?sin(PI*t/.5):0,lid=sn?0:6+2*sin(2*T*t),g=sn?0:sin(PI*(t-.5)/.5)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,30)
  c.bezierCurveTo(214,30,228,110,222,178);for(let k=0;k<4;k++)c.quadraticCurveTo(236-(k%2)*20,190+k*16,226-(k%2)*8,204+k*16)
  c.lineTo(30,254);for(let k=3;k>=0;k--)c.quadraticCurveTo(20+(k%2)*20,198+k*16,30+(k%2)*8,186+k*16)
  c.bezierCurveTo(28,110,42,30,128,30);c.fill();c.stroke()
  c.fillStyle=DR;c.beginPath();c.moveTo(100,196);c.quadraticCurveTo(64,204,58,256);c.lineTo(198,256);c.quadraticCurveTo(192,204,156,196);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,210),c.quadraticCurveTo(128+d*16,196,128+d*30,198),c.quadraticCurveTo(128+d*26,214,128,214),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.moveTo(114,170);c.lineTo(114,198);c.quadraticCurveTo(128,212,142,198);c.lineTo(142,170);c.fill();c.beginPath();c.moveTo(114,170);c.lineTo(114,196);c.moveTo(142,170);c.lineTo(142,196);c.stroke()
  c.save();c.translate(128,110);c.scale(.92,.92);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(t>.06&&sn)shut(c,103,140,-1),shut(c,153,140,1);else eye(c,103,140,-1,lid),eye(c,153,140,1,lid)
  const bl=1+.25*g
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,163,13*bl,7*bl,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const x of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+x-2,167),c.lineTo(128+d*44+x+2,159),c.stroke()
  c.beginPath();c.moveTo(129,152);c.lineTo(127,157);c.stroke()
  c.lineWidth=4.5;c.beginPath()
  if(sn)c.moveTo(121,168),c.quadraticCurveTo(128,173,135,168),c.stroke();else c.fillStyle='#c92a2a',c.moveTo(121,167),c.quadraticCurveTo(129,176+4*g,137,167),c.closePath(),c.fill(),c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,170)
  c.bezierCurveTo(46,80,86,40,128,40);c.bezierCurveTo(170,40,212,80,190,170)
  c.quadraticCurveTo(190,130,182,108);c.quadraticCurveTo(170,96,152,92);c.quadraticCurveTo(150,104,144,110)
  c.quadraticCurveTo(128,96,108,90);c.quadraticCurveTo(112,104,106,112);c.quadraticCurveTo(92,104,84,96)
  c.quadraticCurveTo(86,108,80,118);c.quadraticCurveTo(70,140,66,170);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*56,110);c.bezierCurveTo(128+d*70,140,128+d*58,170,128+d*70,210);c.quadraticCurveTo(128+d*56,206,128+d*50,186);c.bezierCurveTo(128+d*44,160,128+d*54,140,128+d*46,116);c.closePath();c.fill();c.stroke()}
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,108,58,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.fillStyle=YEL;c.lineWidth=5;c.save();c.translate(170,74);c.rotate(.4);c.beginPath();c.roundRect(-14,-5,28,10,5);c.fill();c.stroke();c.restore()
  c.restore()
  if(sn&&b>.4)for(const k of[0,1,2])ds(c,6,2.5,'#fff',()=>{const x=146+k*8,y=150-k*3;c.moveTo(x,y);c.quadraticCurveTo(x+4,y-4,x+8,y)})
  if(g>.05){const s=g,x=170+36*(t-.5),y=168-40*(t-.5);c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();for(const[a,q,r]of[[0,0,9],[10,-5,7],[18,2,6]])c.moveTo(x+a*s+r*s,y+q*s),c.arc(x+a*s,y+q*s,r*s,0,T);c.fill();c.stroke()
    c.fillStyle='#f06595';c.lineWidth=3.5;for(const[x0,o]of[[204,0],[222,.25]]){const p=min(1,max(0,(t-.5-o*.4)/.4)),h=sin(PI*p);if(h>.1){const x=x0+4*sin(p*T),y=130-50*p;c.save();c.translate(x,y);c.scale(h,h);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}}}
  const bx=82+8*b,by=208-10*b,Z=.86
  c.save();c.translate(bx,by);c.rotate(-.35);c.scale(Z,Z)
  c.fillStyle=LEAF;c.lineWidth=5;for(const[a,l]of[[-1.2,30],[-2,30],[-.3,28]])c.beginPath(),c.ellipse(cos(a)*l,sin(a)*l,14,7,a,0,T),c.fill(),c.stroke()
  rose(c,-14,-22,15);daisy(c,16,-24,15);rose(c,4,-42,13);daisy(c,-30,-44,12);c.fillStyle=YEL;c.lineWidth=4;c.beginPath();c.arc(28,-50,8,0,T);c.fill();c.stroke()
  c.fillStyle=WR;c.lineWidth=6;c.beginPath();c.moveTo(-34,-14);c.lineTo(34,-14);c.lineTo(6,60);c.lineTo(-6,60);c.closePath();c.fill();c.stroke()
  c.strokeStyle=WRD;c.lineWidth=3;c.beginPath();c.moveTo(-14,-10);c.lineTo(0,52);c.moveTo(14,-10);c.lineTo(2,52);c.stroke();c.strokeStyle='#111'
  c.fillStyle=YEL;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.ellipse(d*10,18,10,6,d*.5,0,T),c.fill(),c.stroke()
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;for(const[x,y]of[[-10,22],[12,30]]){const a=-.35,X=bx+Z*(x*cos(a)-y*sin(a)),Y=by+Z*(x*sin(a)+y*cos(a));c.beginPath();c.ellipse(X,Y,13,11,0,0,T);c.fill();c.stroke()}
  for(const[o,y0]of[[0,40],[.5,70]]){const p=(t+o)%1;petal(c,250-200*p,y0+80*p+10*sin(p*T*2),p*T*1.5+o*4)}
}
