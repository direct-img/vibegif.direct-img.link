// hime-cut girl in a summer yukata watching her senko hanabi sparkler crackle, fanning herself with an uchiwa
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#5c677d',HD='#3d4657',HL='#c5ccd8',EYE='#e8590c',ED='#a33a06',YU='#4c6ef5',YD='#364fc7',OBI='#ffa94d',FL='#fff',FP='#faa2c1',KZ='#f06595',BL='#ffa8a8',SP='#ffe066',Z=.8
const rnd=s=>()=>(s=(s*16807)%2147483647)/2147483647
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x-4,y+4,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=3;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x-4,y-4,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-5,y+6,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-8,y-1,4.5,0,T);c.fill();c.beginPath();c.arc(x+1,y+10,2,0,T);c.fill()
  c.fillStyle=SP;c.beginPath();c.arc(x-1,y+3,2.2,0,T);c.fill();c.restore()
  c.lineWidth=7.5;c.beginPath();c.moveTo(x-16,y-4);c.quadraticCurveTo(x,y-16,x+16,y-4);c.moveTo(x+d*15,y-5);c.lineTo(x+d*21,y-10);c.stroke()
}
const flower=(c,x,y,r,f)=>{c.fillStyle=f;c.beginPath();for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.moveTo(x+cos(a)*r*1.5+r*.75,y+sin(a)*r*1.5);c.arc(x+cos(a)*r*1.5,y+sin(a)*r*1.5,r*.75,0,T)}c.fill()}
export default(c,t,i)=>{
  const R=rnd(i*977+13),bx=58,by=200,fa=.22*sin(t*T*2)
  c.save();c.translate(144,166);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=7.5;c.fillStyle=HAIR;c.beginPath();c.moveTo(128,46);c.bezierCurveTo(58,46,54,110,58,200);c.lineTo(60,262);c.lineTo(196,262);c.lineTo(198,200);c.bezierCurveTo(202,110,198,46,128,46);c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle=YU;c.beginPath();c.moveTo(120,186);c.quadraticCurveTo(80,192,70,256);c.lineTo(218,256);c.quadraticCurveTo(208,192,168,186);c.closePath();c.fill();c.stroke()
  c.save();c.clip();for(const[x,y]of[[92,216],[196,206],[150,246],[84,250]])flower(c,x,y,5,FL),c.fillStyle=FP,c.beginPath(),c.arc(x,y,3,0,T),c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.moveTo(126,186);c.lineTo(144,226);c.lineTo(162,186);c.closePath();c.fill();c.stroke()
  c.fillStyle=YU;c.beginPath();c.moveTo(118,188);c.lineTo(150,236);c.lineTo(170,188);c.lineTo(160,186);c.lineTo(144,220);c.lineTo(128,186);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=OBI;c.lineWidth=6;c.beginPath();c.moveTo(76,232);c.quadraticCurveTo(144,240,214,232);c.lineTo(216,256);c.lineTo(74,256);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#e8590c';c.lineWidth=3;c.beginPath();c.moveTo(78,244);c.quadraticCurveTo(144,250,214,244);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.rect(132,166,24,22);c.fill();c.beginPath();c.moveTo(132,166);c.lineTo(132,186);c.moveTo(156,166);c.lineTo(156,186);c.stroke()
  c.save();c.translate(144,166);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=7.5;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,142,-1);eye(c,153,142,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,7,0,0,T),c.fill()
  c.lineWidth=4.5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(117,166);c.quadraticCurveTo(125,180,135,166);c.closePath();c.fill();c.stroke()
  c.lineWidth=7.5;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,172);c.lineTo(62,120);c.bezierCurveTo(56,64,90,40,128,40);c.bezierCurveTo(166,40,200,64,194,120);c.lineTo(192,172);c.lineTo(178,172);c.lineTo(178,112)
  for(let x=178;x>78;x-=20)c.lineTo(x-10,116),c.lineTo(x-20,112)
  c.lineTo(78,172);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.28,1.4],[1.48,1.56],[1.64,1.74]])c.beginPath(),c.arc(128,100,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  const bs=j=>60+3*sin(t*T*2+j);c.lineWidth=5;c.beginPath();c.moveTo(64,84);c.lineTo(bs(2),137);c.stroke();for(const j of[0,1,2])c.fillStyle=j%2?SP:KZ,c.beginPath(),c.arc(bs(j),101+j*18,5.5,0,T),c.fill(),c.stroke()
  c.lineWidth=6;c.beginPath();for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.moveTo(72+cos(a)*16+11,76+sin(a)*16);c.arc(72+cos(a)*16,76+sin(a)*16,11,0,T)}c.stroke();flower(c,72,76,11,KZ);c.fillStyle=SP;c.beginPath();c.arc(72,76,7,0,T);c.fill();c.lineWidth=4;c.stroke()
  c.restore()
  c.save();c.translate(212,236);c.rotate(-.35+fa)
  for(const[l,s]of[[12,'#111'],[6,'#e8c39e']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.lineTo(0,-40),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(0,-64,26,24,0,0,T);c.fill();c.stroke()
  c.fillStyle='#ff6b6b';c.lineWidth=3.5;c.beginPath();c.moveTo(-12,-60);c.quadraticCurveTo(0,-74,10,-64);c.lineTo(18,-70);c.lineTo(16,-58);c.lineTo(10,-62);c.quadraticCurveTo(0,-52,-12,-60);c.fill();c.stroke()
  c.strokeStyle='#4dabf7';c.lineWidth=3;c.beginPath();c.moveTo(-18,-50);c.quadraticCurveTo(-8,-46,0,-50);c.quadraticCurveTo(8,-54,16,-50);c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(0,-6,10,11,0,0,T);c.fill();c.stroke();c.restore()
  const hx=bx+6,hy=by-48
  c.lineWidth=6;c.fillStyle=YU;c.beginPath();c.moveTo(hx+12,hy+4);c.lineTo(hx+8,hy+40);c.quadraticCurveTo(hx+20,hy+58,112,232);c.lineTo(122,200);c.closePath();c.fill();c.stroke()
  c.save();c.clip();flower(c,hx+26,hy+40,4,FL);c.restore()
  for(const[l,s]of[[28,'#111'],[17,YU]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(122,202),c.quadraticCurveTo(96,190,hx+6,hy+2),c.stroke()
  c.strokeStyle='#111'
  for(const[l,s]of[[6,'#111'],[3,'#ff8787']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(hx-2,hy+6),c.quadraticCurveTo(bx+2,by-24,bx,by-6),c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,10,10,0,0,T);c.fill();c.stroke()
  const sp=[];for(let k=0;k<9;k++){const a=R()*T,l=16+R()*24,x=bx+cos(a)*l,y=by+sin(a)*l,br=[];for(let j=0;j<3;j++){const b=a+(R()-.5)*2.2,m=5+R()*8;br.push([x+cos(b)*m,y+sin(b)*m])}sp.push([a,x,y,br,6+R()*4])}
  for(const[w,s]of[[5,'#111'],[2.2,SP]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(const[a,x,y,br,r0]of sp){c.moveTo(bx+cos(a)*r0,by+sin(a)*r0);c.lineTo(x,y);for(const[u,v]of br)c.moveTo(x,y),c.lineTo(u,v)}c.stroke()}
  c.strokeStyle='#111';c.fillStyle='#ff922b';c.lineWidth=4;c.beginPath();c.arc(bx,by,6+R()*1.5,0,T);c.fill();c.stroke()
  c.fillStyle='#fff3bf';c.beginPath();c.arc(bx-1.5,by-1.5,2.5,0,T);c.fill()
}
