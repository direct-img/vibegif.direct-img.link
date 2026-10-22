// silver-haired girl in the spring wind: long hair and hair ribbon streaming sideways while cherry petals drift past
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#dee2e6',HD='#adb5bd',HL='#fff',EYE='#f06595',ED='#a61e4d',COAT='#4c6ef5',CD='#364fc7',RB='#ff6b6b',BL='#ffa8a8',PET='#ffc9de'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const petal=(c,x,y,a,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(11,-4,6,7);c.lineTo(0,4);c.lineTo(-6,7);c.quadraticCurveTo(-11,-4,0,-9);c.restore();c.fill();c.stroke()}
const petals=(c,t,l)=>{c.fillStyle=PET;c.lineWidth=3;for(const[o,y,n,s]of l){const p=(t*n+o)%1;petal(c,-20+p*296,y+12*sin(p*T*2+o*9),p*T*n+o*7,s)}}
export default(c,t)=>{
  const w=k=>sin(T*t-k*1.1),tip=k=>[238+6*cos(T*t-k*1.1)+k*3,74+46*k+9*w(k)]
  petals(c,t,[[.1,40,1,1],[.55,96,1,.8],[.8,214,2,1.1]])
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(96,188);c.bezierCurveTo(68,170,64,150,66,120);c.bezierCurveTo(62,70,86,36,128,36)
  let[x,y]=tip(0);c.bezierCurveTo(170,34,200,y-24+4*w(0),x,y)
  for(let k=1;k<4;k++){const[nx,ny]=tip(k),vx=x-44,vy=(y+ny)/2+6*w(k-.5);c.bezierCurveTo(x-10,y+8,vx+22,vy-10,vx,vy);c.bezierCurveTo(vx+12,vy+2,nx-24,ny-14,nx,ny);[x,y]=[nx,ny]}
  c.bezierCurveTo(x-14,y+12,150,214,96,188);c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;for(const k of[0,1,2,3]){const[a,b]=tip(k);c.beginPath();c.moveTo(186,b-6-8*k*.3);c.bezierCurveTo(200,b-10,a-30,b-6,a-12,b-1);c.stroke()}c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=COAT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.lineTo(128,226);c.lineTo(152,190);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.strokeStyle=CD;c.lineWidth=4;c.beginPath();c.moveTo(128,226);c.lineTo(128,250);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.lineTo(128,208);c.lineTo(140,192);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.fillStyle=RB;for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*16,203),c.lineTo(128+d*16,221),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,212,5,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(128,163,7,.2*PI,.8*PI);c.stroke()
  const b=2*sin(T*t)
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(72,140)
  c.bezierCurveTo(56,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,150)
  c.quadraticCurveTo(186,118,180+b,102);c.quadraticCurveTo(172,104,166+b,114);c.quadraticCurveTo(162,98,152+b,92);c.quadraticCurveTo(146,104,140+b,112)
  c.quadraticCurveTo(134,96,126+b,90);c.quadraticCurveTo(120,102,114+b,110);c.quadraticCurveTo(108,96,98+b,94);c.quadraticCurveTo(92,104,90+b,112)
  c.quadraticCurveTo(82,102,80,100);c.quadraticCurveTo(72,116,72,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  const rt=(k,o)=>[180+k*18,60+o+k*(4+o*.4)+(k?6:0)*sin(T*t*2-k*1.2)]
  for(const o of[-6,10])for(const[l,s]of[[15,'#111'],[8,RB]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...rt(0,o));for(let k=1;k<4;k++){const[a,e]=rt(k,o),[f,g]=rt(k+1,o);c.quadraticCurveTo(a,e,(a+f)/2,(e+g)/2)}c.stroke()}
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=RB
  for(const d of[-1,1])c.beginPath(),c.moveTo(176,58),c.quadraticCurveTo(176+d*8,30,176+d*22,44),c.quadraticCurveTo(176+d*18,66,176,58),c.fill(),c.stroke()
  c.beginPath();c.arc(176,58,6,0,T);c.fill();c.stroke()
  petals(c,t,[[.3,150,1,1.2],[.7,24,2,.9],[0,232,1,.9],[.45,60,2,1]])
}
