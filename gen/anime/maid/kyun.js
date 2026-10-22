// café maid with slate twin buns doing "moe moe kyun": heart hands wiggle, then a pink heart beam zaps the omurice's ketchup heart
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#c9a27e',HD='#9c7650',HL='#f0dfc8',EYE='#f03e3e',ED='#a51111',DRESS='#f783ac',BOW='#e03131',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',BEAM='#f06595',EGG='#ffd43b',KET='#e03131',RIM='#74c0fc'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const hp=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[px,py,qx,qy]of[[r,0,r*.18,-r*.18],[0,r,r*.18,r*.18],[-r,0,-r*.18,r*.18],[0,-r,-r*.18,-r*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const k=ease((t-.35)/.08)-ease((t-.7)/.1),wg=t<.35?5*sin(2*T*t/.35):0,ky=k>.5,hx=124+wg+8*k,hy=196+4*k,hs=1.9+.25*k
  const hit=t>=.58&&t<.9,kp=hit?1+.35*sin(PI*(t-.58)/.32):1
  c.save();c.translate(-14,0)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,212,110,206,214);c.quadraticCurveTo(196,224,184,214);c.lineTo(72,214);c.quadraticCurveTo(60,224,50,214);c.bezierCurveTo(44,110,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=DRESS;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(102,256);c.lineTo(106,204);c.quadraticCurveTo(128,212,150,204);c.lineTo(154,256);c.fill();c.stroke()
  c.fillStyle=DRESS;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,206,19,15,d*.4,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,168);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.fillStyle=BOW;for(const d of[-1,1])c.beginPath(),c.moveTo(128,200),c.lineTo(128+d*16,192),c.lineTo(128+d*16,208),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,200,5,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1)
  if(ky){c.lineWidth=5;c.beginPath();c.moveTo(166,130);c.lineTo(146,141);c.lineTo(166,151);c.stroke()}else eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const j of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+j-2,164),c.lineTo(128+d*42+j+2,158),c.stroke()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(119,165);c.quadraticCurveTo(128,(ky?184:177),137,165);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,ky?180:175,6,4,0,0,T);c.fill();c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,154)
  c.bezierCurveTo(52,76,88,40,128,40);c.bezierCurveTo(168,40,204,76,188,154)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(158,96,148,92);c.quadraticCurveTo(142,104,134,110)
  c.quadraticCurveTo(130,98,122,92);c.quadraticCurveTo(116,104,106,110);c.quadraticCurveTo(102,98,94,96);c.quadraticCurveTo(88,104,82,112)
  c.quadraticCurveTo(70,126,68,154);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.28,1.38],[1.62,1.72]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4
  for(let j=0;j<7;j++){const a=PI*(1.2+j*.6/6);c.beginPath();c.arc(128+cos(a)*64,108+sin(a)*64,8,0,T);c.fill();c.stroke()}
  for(const[l,s]of[[20,'#111'],[12,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.arc(128,108,58,PI*1.18,PI*1.82),c.stroke()
  c.strokeStyle='#111'
  for(const[x,y]of[[76,256],[180,256]])for(const[l,s]of[[24,'#111'],[14,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(hx+(x<128?-14:14)+14,hy+12),c.stroke()
  c.strokeStyle='#111';c.restore()
  for(const[l,s]of[[16,'#111'],[9,SKIN]])c.lineWidth=l,c.strokeStyle=s,hp(c,hx,hy,hs),c.stroke()
  c.strokeStyle='#111'
  const ox=206,oy=228
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(ox,oy+6,46,15,0,0,T);c.fill();c.stroke()
  c.strokeStyle=RIM;c.lineWidth=3;c.beginPath();c.ellipse(ox,oy+6,38,10,0,0,T);c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=EGG;c.beginPath();c.moveTo(ox-36,oy+6);c.bezierCurveTo(ox-34,oy-26,ox+34,oy-26,ox+36,oy+6);c.quadraticCurveTo(ox,oy+14,ox-36,oy+6);c.fill();c.stroke()
  c.fillStyle=KET;c.lineWidth=3.5;hp(c,ox,oy-7,.95*kp);c.fill();c.stroke()
  if(t>=.4&&t<.66){const p=(t-.4)/.26;c.fillStyle=BEAM;c.lineWidth=4;for(let j=0;j<3;j++){const q=p*1.3-j*.15;if(q>0&&q<1){const x=hx+20+(ox-hx-20)*q,y=hy-2+(oy-14-hy+2)*q;hp(c,x,y,1.2+.6*q);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x-5*(1.2+.6*q),y-3*(1.2+.6*q),2.5,0,T);c.fill();c.fillStyle=BEAM}}}
  if(hit){c.fillStyle='#fff3bf';c.lineWidth=3.5;for(const[x,y,o]of[[176,196,0],[238,198,.33],[210,182,.66]]){const s=sin(PI*(((t-.58)/.32*2+o)%1));if(s>.1)spark(c,x,y,11*s)}}
}
