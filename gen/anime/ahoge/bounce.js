// full-body chibi with ginger hair whose single ahoge strand boings and wobbles wildly, then curls into a heart and springs loose
const{sin,PI,exp}=Math,T=2*PI
export const frames=24,delay=70
const SKIN='#ffe3d1',HAIR='#8c5a3c',HD='#6b4226',HL='#d9b38c',EYE='#15aabf',ED='#0b7285',DRESS='#8ce99a',DD='#40c057',SHOE='#e03131',BL='#ffa8a8',MO='#c92a2a',CLIP='#fff',SP='#ffd43b'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const S0=[[0,0],[-2,-8],[-6,-14],[-4,-22],[-2,-34],[-12,-44],[-2,-56],[8,-66],[28,-64],[24,-50]],W=[0,1,2,4,6,9,13,16,20,22]
const H=[[0,0],[0,-6],[0,-12],[0,-18],[-31,-40],[-22,-66],[0,-49],[22,-66],[31,-40],[2,-20]]
const eye=(c,x,y,d,u)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3-u,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5-u,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8-u,2,0,T);c.fill();c.restore()
  c.lineWidth=3.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[px,py,qx,qy]of[[r,0,r*.18,-r*.18],[0,r,r*.18,r*.18],[-r,0,-r*.18,r*.18],[0,-r,-r*.18,-r*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const m=ease((t-.5)/.12)-ease((t-.84)/.1),A=t<.5?exp(-5*t):t>=.84?(t-.84)/.16:0,b=A*sin(T*5*t),hap=m>.5,Z=.66
  const P=S0.map(([x,y],k)=>[128+(x+W[k]*b)*(1-m)+H[k][0]*m,78+y*(1-m)+H[k][1]*m])
  for(const[l,s]of[[12,'#111'],[6,HAIR]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...P[0]);for(let k=1;k<10;k+=3)c.bezierCurveTo(...P[k],...P[k+1],...P[k+2]);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=5
  for(const d of[-1,1])for(const[l,s]of[[15,'#111'],[8,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*12,214),c.lineTo(128+d*12,236),c.stroke(),c.beginPath(),c.moveTo(128+d*24,180),c.lineTo(128+d*36,206),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SHOE;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*14,240,11,6.5,0,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;for(const d of[-1,1])c.beginPath(),c.arc(128+d*37,208,6,0,T),c.fill(),c.stroke()
  c.fillStyle=DRESS;c.beginPath();c.moveTo(112,166);c.quadraticCurveTo(100,168,98,182);c.lineTo(88,218);c.quadraticCurveTo(128,228,168,218);c.lineTo(158,182);c.quadraticCurveTo(156,168,144,166);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*26,178,9,8,d*.5,0,T),c.fill(),c.stroke()
  c.strokeStyle=DD;c.lineWidth=3;c.beginPath();c.moveTo(92,212);c.quadraticCurveTo(128,220,164,212);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128,170),c.quadraticCurveTo(128+d*14,166,128+d*16,176),c.quadraticCurveTo(128+d*8,184,128,176),c.fill(),c.stroke()
  c.save();c.translate(128,72);c.scale(Z,Z);c.translate(-128,-40)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,146);c.quadraticCurveTo(208,160,194,160);c.lineTo(62,160);c.quadraticCurveTo(48,160,58,146);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(hap){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}
  else{const u=4*A;eye(c,103,140,-1,u);eye(c,153,140,1,u)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,7,0,0,T),c.fill()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath()
  if(hap)c.moveTo(116,164),c.quadraticCurveTo(128,184,140,164),c.closePath(),c.fill(),c.stroke()
  else c.ellipse(128,170,6,7,0,0,T),c.fill(),c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,148)
  c.bezierCurveTo(50,74,88,38,128,38);c.bezierCurveTo(168,38,206,74,190,148)
  c.quadraticCurveTo(186,120,180,108);c.quadraticCurveTo(170,100,164,112);c.quadraticCurveTo(160,96,148,90);c.quadraticCurveTo(142,106,132,110)
  c.quadraticCurveTo(128,96,118,88);c.quadraticCurveTo(112,104,100,108);c.quadraticCurveTo(96,96,88,94);c.quadraticCurveTo(84,106,78,110)
  c.quadraticCurveTo(70,124,66,148);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=CLIP;c.lineWidth=6;c.beginPath();c.roundRect(150,72,26,10,4);c.fill();c.stroke()
  c.restore()
  if(m>.6){c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[84,26,0],[176,34,.5],[90,60,.25]]){const s=sin(PI*(((t-.56)/.3*2+o)%1));if(s>.1)spark(c,x,y,11*s)}}
}
