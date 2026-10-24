// lavender haired office girl in round glasses flips open an old folder, a cloud of dust bursts out and she squeezes her eyes shut coughing
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=85
const SKIN='#ffe3d1',HAIR='#b197fc',HD='#845ef7',HL='#e5dbff',EYE='#845ef7',ED='#5f3dc4',BL='#ffa8a8',JK='#748ffc',TIE='#fa5252',FD='#ffd8a8',FDD='#e0a96d',DU='#e9ecef',MO='#c92a2a'
const E=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const puff=(c,x,y,s)=>{c.fillStyle=DU;c.lineWidth=4;c.beginPath();for(const[ox,oy,r]of[[-10,3,10],[2,-5,12],[13,4,9]])c.moveTo(x+(ox+r)*s,y+oy*s),c.arc(x+ox*s,y+oy*s,r*s,0,T);c.stroke();c.fill()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x,y+3,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y-7,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+4,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-3,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+9,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const op=E((t-.14)/.1)-E((t-.84)/.1),du=t>.24&&t<.86,cg=t>.3&&t<.84,jl=cg&&i%3==0?1:0,dz=E((t-.24)/.2)*(1-E((t-.62)/.22))
  c.save();c.translate(128,150+3*jl);c.scale(.76,.76);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,104,206,180);c.quadraticCurveTo(206,214,184,212);c.lineTo(72,212);c.quadraticCurveTo(50,214,50,180);c.bezierCurveTo(42,104,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=JK;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(54,198,44,300);c.lineTo(212,300);c.quadraticCurveTo(202,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.lineTo(128,240);c.lineTo(152,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,204);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.fillStyle=TIE;c.lineWidth=6;c.beginPath();c.moveTo(122,206);c.lineTo(134,206);c.lineTo(138,236);c.lineTo(128,246);c.lineTo(118,236);c.closePath();c.fill();c.stroke()
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(cg){c.lineWidth=7;c.beginPath();c.moveTo(91,130);c.lineTo(113,141);c.lineTo(91,151);c.moveTo(165,130);c.lineTo(143,141);c.lineTo(165,151);c.stroke()
    c.lineWidth=5;c.fillStyle=MO;c.beginPath();c.ellipse(128,172,jl?11:8,jl?11:6,0,0,T);c.fill();c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1);c.lineWidth=5;c.beginPath();c.moveTo(121,170);c.quadraticCurveTo(128,166,135,170);c.stroke()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,164,12,6,0,0,T),c.fill()
  c.lineWidth=6;c.beginPath();for(const x of[103,153])c.moveTo(x+23,140),c.arc(x,140,23,0,T);c.moveTo(126,138);c.quadraticCurveTo(128,134,130,138);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();for(const x of[103,153])c.moveTo(x+12,124),c.lineTo(x+17,129);c.stroke();c.strokeStyle='#111'
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
  c.bezierCurveTo(48,74,88,38,128,38);c.bezierCurveTo(168,38,208,74,190,160)
  c.quadraticCurveTo(188,124,182,108);c.quadraticCurveTo(174,110,166,100);c.quadraticCurveTo(158,110,146,112);c.quadraticCurveTo(140,100,130,96)
  c.quadraticCurveTo(122,108,110,112);c.quadraticCurveTo(104,102,96,98);c.quadraticCurveTo(88,108,76,108);c.quadraticCurveTo(68,128,66,160);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.restore()
  // folder: back, empty inside, cover flipping up on its top edge
  c.lineWidth=6;c.fillStyle=FDD;c.beginPath();c.moveTo(56,182);c.lineTo(56,250);c.lineTo(200,250);c.lineTo(200,182);c.lineTo(122,182);c.lineTo(112,166);c.lineTo(66,166);c.quadraticCurveTo(56,166,56,176);c.closePath();c.fill();c.stroke()
  c.fillStyle='#f4c38a';c.lineWidth=4;c.beginPath();c.rect(62,190,132,54);c.fill()
  const s=1-1.45*op
  c.save();c.translate(0,190);c.scale(1,s);c.beginPath();c.rect(56,0,144,60);c.restore()
  c.fillStyle=s>0?FD:'#fff0d6';c.lineWidth=6;c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;for(const x of[56,200])c.beginPath(),c.ellipse(x,224,11,13,0,0,T),c.fill(),c.stroke()
  // dust bursting up into her face
  if(du){for(const[x0,y0,dx,dy,o]of[[96,190,-50,-96,0],[128,196,0,-40,.12],[160,190,50,-96,.06],[104,196,-72,-40,.2],[152,196,72,-44,.16]]){const p=min(1,max(0,(t-.24-o*.4)/.4)),s2=(.4+.9*p)*(1-E((t-.62)/.22));if(s2>.08)puff(c,x0+dx*p,y0+dy*p,s2)}
    c.fillStyle='#adb5bd';c.lineWidth=2.5;for(let k=0;k<8;k++){const p=(t*3+k/8)%1,x=128+cos(k*2.3)*(30+70*p),y=190-90*p+20*sin(k);if(dz>.1)c.beginPath(),c.arc(x,y,3*dz,0,T),c.fill(),c.stroke()}}
  if(cg&&jl)for(const d of[-1,1])ds(c,7,3,'#fff',()=>{c.moveTo(128+d*30,128);c.lineTo(128+d*44,120)})
}
