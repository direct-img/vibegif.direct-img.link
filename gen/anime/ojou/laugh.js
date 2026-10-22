// ojou-sama with golden drill curls laughing "ohohoho" behind the back of her hand, curls bouncing, sparkles and rose petals drifting
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#fcc419',HD='#f08c00',HL='#fff3bf',DRESS='#e64980',DD='#a61e4d',BL='#ffa8a8',ROSE='#e03131',RD='#a51111',LEAF='#40c057',MO='#c92a2a',TG='#ff8fab',GEM='#4dabf7'
const drill=(c,x,y,d,s)=>{
  const n=5,cx=k=>x+d*k*1.5,cy=k=>y+k*s
  c.lineWidth=5;c.fillStyle=HAIR;c.beginPath();c.moveTo(cx(4)-8,cy(4)+6);c.lineTo(cx(4)+d*3,cy(4)+28);c.lineTo(cx(4)+8,cy(4)+6);c.fill();c.stroke()
  for(let k=n-1;k>=0;k--){
    const rx=25-k*3,ry=14-k*.8
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=HAIR;c.beginPath();c.ellipse(cx(k),cy(k),rx,ry,d*.3,0,T);c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.ellipse(cx(k),cy(k)+2,rx*.62,ry*.45,d*.3,.15*PI,.85*PI);c.stroke()
    c.strokeStyle=HL;c.lineWidth=3.5;c.beginPath();c.ellipse(cx(k),cy(k)-1,rx*.7,ry*.55,d*.3,1.15*PI,1.45*PI);c.stroke()
  }
  c.strokeStyle='#111'
}
const spark=(c,x,y,r)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,rr=k%2?r*.3:r;c.lineTo(x+cos(a)*rr,y+sin(a)*rr)}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const h=abs(sin(3*PI*t)),hl=abs(sin(3*PI*t-.7)),o=.35+.65*h
  c.lineWidth=3;c.fillStyle=ROSE
  for(const[x0,o2,r]of[[24,0,1],[232,.5,-1]]){const p=(t+o2)%1,x=x0+12*sin(T*(p+o2)),y=-16+p*280;c.save();c.translate(x,y);c.rotate(r*T*p+o2*6);c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(9,0,0,9);c.quadraticCurveTo(-9,0,0,-9);c.fill();c.stroke();c.restore()}
  c.lineWidth=6;c.fillStyle=DRESS;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,166,24,28);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,190),c.quadraticCurveTo(128+d*22,182,128+d*30,192),c.quadraticCurveTo(128+d*20,206,128,198),c.fill(),c.stroke()
  for(const[y,r]of[[236,13],[222,15],[208,16]])c.beginPath(),c.ellipse(128,y,r,9,0,0,T),c.fill(),c.stroke()
  c.fillStyle=GEM;c.beginPath();c.moveTo(128,190);c.lineTo(136,198);c.lineTo(128,208);c.lineTo(120,198);c.closePath();c.fill();c.stroke()
    c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,38);c.bezierCurveTo(200,38,214,100,206,150);c.lineTo(50,150);c.bezierCurveTo(42,100,56,38,128,38);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){
    c.lineWidth=6;c.beginPath();c.moveTo(x-15,143);c.quadraticCurveTo(x,129,x+15,143);c.moveTo(x+d*15,143);c.lineTo(x+d*22,139);c.moveTo(x+d*11,136);c.lineTo(x+d*17,130);c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(x-12,118);c.quadraticCurveTo(x,110,x+12,116);c.stroke()
  }
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,158,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,152);c.lineTo(127,156);c.stroke()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(124,163);c.lineTo(150,163);c.quadraticCurveTo(149,172+8*o,137,172+8*o);c.quadraticCurveTo(125,170+6*o,124,163);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(138,174+8*o,8,5,0,0,T);c.fill();c.restore()
  for(const d of[-1,1])drill(c,128+d*76,134,d,22+5*hl)
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(56,134)
  c.bezierCurveTo(36,64,84,38,128,38);c.bezierCurveTo(172,38,220,64,200,134)
  c.quadraticCurveTo(190,116,180,102);c.bezierCurveTo(168,84,140,90,128,62)
  c.bezierCurveTo(116,90,88,84,76,102);c.quadraticCurveTo(66,116,56,134);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.2,1.32],[1.68,1.8]])c.beginPath(),c.arc(128,104,60,PI*a,PI*e),c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.moveTo(128,66),c.bezierCurveTo(128+d*10,86,128+d*36,84,128+d*46,96),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=LEAF
  for(const a of[.4,1.6])c.beginPath(),c.ellipse(176+cos(a)*14,64+sin(a)*10,10,5,a,0,T),c.fill(),c.stroke()
  c.fillStyle=ROSE;c.lineWidth=5;c.beginPath();c.arc(176,62,12,0,T);c.fill();c.stroke()
  c.strokeStyle=RD;c.lineWidth=3;c.beginPath();c.arc(176,62,7,.2,PI*1.6);c.moveTo(178,61);c.arc(176,62,3,0,PI*1.4);c.stroke();c.strokeStyle='#111'
  for(const[l,s]of[[30,'#111'],[19,DRESS]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(84,252),c.lineTo(98,200),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(98,198,14,8,-.3,0,T);c.fill();c.stroke()
  c.save();c.translate(108,180);c.rotate(-.75);c.fillStyle=SKIN
  c.beginPath();c.moveTo(-12,-8);c.lineTo(12,-10);c.quadraticCurveTo(24,-9,23,-2);c.quadraticCurveTo(24,5,12,7);c.lineTo(-8,10);c.quadraticCurveTo(-16,2,-12,-8);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(10,-4);c.lineTo(20,-4);c.moveTo(10,2);c.lineTo(19,3);c.stroke()
  c.lineWidth=5;c.beginPath();c.ellipse(0,13,4,9,-.9,0,T);c.fill();c.stroke()
  c.restore()
  c.fillStyle=HL;c.lineWidth=3.5
  for(const[x,y,o2]of[[30,44,0],[226,34,.33],[128,16,.66],[230,128,.5]]){const s=sin(T*(t*2+o2));if(s>.1)spark(c,x,y,12*s)}
}
