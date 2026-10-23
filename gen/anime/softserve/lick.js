// mint-haired girl with a soft-serve cone that tilts and starts to drip, she licks the drip up the side and beams with happy eyes
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#96f2d7',HD='#20c997',HL='#e6fcf5',EYE='#ff922b',ED='#d9480f',TEE='#fff',STR='#f783ac',VAN='#fff9db',VD='#ffe8a3',CONE='#e0a96d',CD='#b07d4f',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',HT='#ff6b9d'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+3,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-1,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+7,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const lick=ease((t-.38)/.08)-ease((t-.54)/.08),happy=t>=.4&&t<.82,r=-.04+.1*sin(T*t)-.3*lick,cx=214-28*lick,cy=208-8*lick,drip=t<.46?ease(t/.4):0
  c.lineWidth=6
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,200);c.quadraticCurveTo(190,214,170,204);c.lineTo(86,204);c.quadraticCurveTo(66,214,50,200);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.arc(128,32,18,0,T);c.fill();c.stroke()
  c.fillStyle=STR;c.beginPath();c.ellipse(128,46,14,6,0,0,T);c.fill();c.stroke()
  // striped tee
  c.fillStyle=TEE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=STR;for(const y of[206,226,246])c.fillRect(40,y,180,9);c.restore()
  c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  // face
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(happy){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,160,13,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,163),c.lineTo(128+d*44+k+2,157),c.stroke()
  c.lineWidth=3.5;c.fillStyle=MO
  if(lick>.05){c.beginPath();c.ellipse(132,170,8,7,0,0,T);c.fill();c.stroke()}
  else{c.beginPath();c.moveTo(120,166);c.quadraticCurveTo(128,176,136,166);c.stroke()}
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,100,164,110);c.quadraticCurveTo(156,94,140,92);c.quadraticCurveTo(138,104,130,110)
  c.quadraticCurveTo(122,96,108,94);c.quadraticCurveTo(106,106,96,112);c.quadraticCurveTo(90,100,82,100);c.quadraticCurveTo(76,108,76,112)
  c.quadraticCurveTo(70,128,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,102,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111'
  // cone in her hand, tilting
  for(const[l,s]of[[26,'#111'],[17,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(230,256),c.lineTo(cx+6,cy+12),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(cx,cy);c.rotate(r)
  c.lineWidth=5;c.fillStyle=CONE;c.beginPath();c.moveTo(-22,-34);c.lineTo(22,-34);c.lineTo(2,30);c.lineTo(-2,30);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle=CD;c.lineWidth=3;c.beginPath();for(let k=-3;k<4;k++)c.moveTo(-30+k*12,-36),c.lineTo(10+k*12,34),c.moveTo(30+k*12,-36),c.lineTo(-10+k*12,34);c.stroke();c.restore()
  c.lineWidth=5
  for(const[y,w]of[[-42,26],[-60,21],[-76,15]]){c.fillStyle=VAN;c.beginPath();c.ellipse(0,y,w,11,0,0,T);c.fill();c.stroke();c.strokeStyle=VD;c.lineWidth=3;c.beginPath();c.arc(-w*.2,y-1,w*.6,PI*1.1,PI*1.6);c.stroke();c.strokeStyle='#111';c.lineWidth=5}
  c.fillStyle=VAN;c.beginPath();c.moveTo(-8,-84);c.quadraticCurveTo(0,-104,10,-96);c.quadraticCurveTo(4,-90,8,-82);c.fill();c.stroke()
  // the drip slides down the cone until she licks it off
  if(drip>0){const len=6+30*drip;c.fillStyle=VAN;c.beginPath();c.moveTo(-24,-40);c.lineTo(-24,-40+len);c.arc(-19,-40+len,5,PI,0,true);c.lineTo(-14,-40);c.fill();c.stroke()}
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(cx+2,cy+6,14,12,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(cx-10,cy+2);c.lineTo(cx+4,cy+2);c.moveTo(cx-10,cy+10);c.lineTo(cx+4,cy+10);c.stroke()
  // tongue sweeping up the side of the swirl
  if(lick>.05){
    const a=-.4-.5*ease((t-.4)/.14),L=4+12*lick
    c.save();c.translate(136,172);c.rotate(a);c.fillStyle=TG;c.lineWidth=4
    c.beginPath();c.moveTo(0,-7);c.lineTo(L,-7);c.arc(L,0,7,-PI/2,PI/2);c.lineTo(0,7);c.closePath();c.fill();c.stroke()
    c.strokeStyle=MO;c.lineWidth=2;c.beginPath();c.moveTo(2,0);c.lineTo(L,0);c.stroke()
    c.restore()
  }
  if(t>.5&&t<.86){c.fillStyle=HT;c.lineWidth=3.5;for(const[x,y,o]of[[52,92,0],[208,60,.1]]){const p=(t-.5-o)/.3;if(p>0&&p<1)heart(c,x,y-20*p,1.1*sin(PI*p))}}
}
