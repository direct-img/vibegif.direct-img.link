// blindfolded chibi playing suikawari on the beach: wobbles around with her stick raised, swings it down onto the watermelon with a bonk, raises it again
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#ffa94d',HD='#f76707',HL='#ffe8cc',TEE='#fff',TS='#ff6b6b',SHORT='#4dabf7',SD='#1c7ed6',BAND='#fff',STICK='#c08a5e',SAND='#ffe8a3',SAND2='#f5d27a',TOWEL='#74c0fc',MEL='#51cf66',MD='#2b8a3e',BL='#ffa8a8',MO='#c92a2a'
const cl=x=>max(0,min(1,x)),ease=x=>x*x*(3-2*x)
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[px,py,qx,qy]of[[r,0,r*.18,-r*.18],[0,r,r*.18,r*.18],[-r,0,-r*.18,r*.18],[0,-r,-r*.18,-r*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const sw=ease(cl((t-.52)/.1))*(1-ease(cl((t-.74)/.2))),wob=t<.52?.1*sin(T*2*t/.52):0,hit=t>=.62&&t<.74,hk=hit?sin(PI*(t-.62)/.12):0
  // sand and towel
  c.lineWidth=6;c.fillStyle=SAND;c.beginPath();c.ellipse(128,236,124,18,0,0,T);c.fill();c.stroke()
  c.fillStyle=SAND2;for(const[x,y]of[[40,236],[90,244],[150,230],[226,240]])c.beginPath(),c.arc(x,y,2.5,0,T),c.fill()
  c.fillStyle=TOWEL;c.beginPath();c.moveTo(160,226);c.lineTo(242,222);c.lineTo(248,244);c.lineTo(164,248);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#fff';for(const x of[176,202,228])c.beginPath(),c.rect(x,216,10,36),c.fill();c.restore()
  c.beginPath();c.moveTo(160,226);c.lineTo(242,222);c.lineTo(248,244);c.lineTo(164,248);c.closePath();c.stroke()
  // watermelon, squashing on the hit
  c.save();c.translate(204,226);c.scale(1+.12*hk,1-.14*hk)
  c.fillStyle=MEL;c.lineWidth=6;c.beginPath();c.ellipse(0,-20,30,24,0,0,T);c.fill();c.stroke()
  c.save();c.beginPath();c.ellipse(0,-20,30,24,0,0,T);c.clip();c.strokeStyle=MD;c.lineWidth=6
  for(const x of[-18,-4,10,24]){c.beginPath();c.moveTo(x-4,-46);for(let k=0;k<6;k++)c.lineTo(x+(k%2?4:-4)-(x/30)*k*2,-40+k*8);c.stroke()}c.restore()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-12,-32,6,3,-.5,0,T);c.fill()
  c.restore()
  if(hit){c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();for(let k=0;k<16;k++){const a=k*PI/8,r=(k%2?10:24)*(.6+.4*hk);c.lineTo(198+r*cos(a),190+r*sin(a))}c.closePath();c.fill();c.stroke()
    c.lineWidth=3;for(const[dx,dy]of[[-30,-24],[30,-26]])spark(c,198+dx,190+dy,8*hk)}
  // the whole girl wobbles around her feet
  c.save();c.translate(96,238);c.rotate(wob);c.translate(-96,-238)
  // legs and sandals
  for(const d of[-1,1]){const f=t<.52?3*sin(T*4*t/.52+(d>0?PI:0)):0
    for(const[l,s]of[[16,'#111'],[9,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(96+d*11,206),c.lineTo(96+d*(13+f),230),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=TS;c.beginPath();c.ellipse(96+d*(14+f),236,11,5,0,0,T);c.fill();c.stroke()}
  // shorts and tee
  c.lineWidth=5;c.fillStyle=SHORT;c.beginPath();c.moveTo(78,190);c.lineTo(114,190);c.lineTo(118,212);c.lineTo(98,212);c.lineTo(96,204);c.lineTo(94,212);c.lineTo(74,212);c.closePath();c.fill();c.stroke()
  c.fillStyle=TEE;c.beginPath();c.moveTo(82,162);c.quadraticCurveTo(70,166,72,182);c.lineTo(76,196);c.lineTo(116,196);c.lineTo(120,182);c.quadraticCurveTo(122,166,110,162);c.closePath();c.fill();c.stroke()
  c.strokeStyle=TS;c.lineWidth=5;c.beginPath();c.moveTo(76,180);c.lineTo(118,180);c.stroke();c.strokeStyle='#111'
  // stick and arms: raised back over her shoulder, then swung down onto the melon
  const G=[116+34*sw,36+122*sw],a=-2.65+3.4*sw,L=64,S=[G[0]+L*cos(a),G[1]+L*sin(a)],B=[G[0]-12*cos(a),G[1]-12*sin(a)]
  const stick=()=>{for(const[l,s]of[[13,'#111'],[6,STICK]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...B),c.lineTo(...S),c.stroke();c.strokeStyle='#111'}
  const arms=()=>{for(const sx of[76,116]){const qx=(sx+(sx-96)*1.6)*(1-sw)+((sx+G[0])/2+6)*sw,qy=104*(1-sw)+((170+G[1])/2+14)*sw;for(const[l,s]of[[15,'#111'],[8,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,170),c.quadraticCurveTo(qx,qy,G[0],G[1]),c.stroke()}
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(G[0],G[1],9,0,T);c.fill();c.stroke()}
  if(sw<.5)stick(),arms()
  // high ponytail swinging
  const pt=.25*sin(T*2*t)+(sw>.5?.6:0)
  c.save();c.translate(78,52);c.rotate(-.5+pt*.4)
  c.fillStyle=HAIR;c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-30,4,-42,40,-30,70);c.quadraticCurveTo(-20,58,-14,64);c.bezierCurveTo(-18,40,-6,16,8,8);c.closePath();c.fill();c.stroke()
  c.restore()
  // head
  const Z=.6;c.save();c.translate(96,66);c.scale(Z,Z);c.translate(-128,-40)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,196,150);c.lineTo(60,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,14,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle=MO;c.beginPath()
  if(hit)c.moveTo(112,164),c.quadraticCurveTo(128,190,144,164),c.closePath(),c.fill(),c.stroke();else c.moveTo(114,170),c.quadraticCurveTo(122,164,128,170),c.quadraticCurveTo(134,176,142,168),c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,140);c.bezierCurveTo(50,74,88,38,128,38);c.bezierCurveTo(168,38,206,74,190,140)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,90);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,96);c.quadraticCurveTo(86,106,80,112);c.quadraticCurveTo(70,124,66,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a0,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a0,PI*e),c.stroke();c.strokeStyle='#111'
  // blindfold with fluttering tails
  c.fillStyle=BAND;c.lineWidth=8;c.beginPath();c.moveTo(66,116);c.quadraticCurveTo(128,104,192,116);c.lineTo(190,150);c.quadraticCurveTo(128,140,66,150);c.closePath();c.fill();c.stroke()
  const fl=10*sin(T*4*t);c.beginPath();c.moveTo(66,128);c.quadraticCurveTo(40,120+fl,22,132+fl);c.lineTo(28,148+fl);c.quadraticCurveTo(44,140,66,140);c.fill();c.stroke()
  c.beginPath();c.moveTo(64,134);c.quadraticCurveTo(44,150-fl,36,170-fl);c.lineTo(50,174-fl);c.quadraticCurveTo(56,152,68,142);c.fill();c.stroke()
  c.restore()
  if(sw>=.5)stick(),arms()
  // sweat drop while she wobbles
  if(t<.5){c.fillStyle='#a5d8ff';c.lineWidth=4;const y=58+10*((t*4)%1);c.beginPath();c.moveTo(136,y);c.quadraticCurveTo(144,y+12,136,y+18);c.quadraticCurveTo(128,y+12,136,y);c.fill();c.stroke()}
  c.restore()
}
