// black hime cut girl in a sailor uniform between two speech bubbles that flip to swap "あ" and "A" while swap arrows spin overhead, eyes following the bubbles, finger raised like a tiny teacher
const{sin,PI,max}=Math,T=2*PI
export const frames=16,delay=95
const SKIN='#ffe3d1',HAIR='#3d3b52',HD='#1f1d30',HL='#8f8bb3',EYE='#cc5de8',ED='#862e9c',SL='#364fc7',SC='#ff6b6b',BL='#ffa8a8',RB='#f03e3e',JP='#ff6b9d',EN='#4dabf7',AR='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+8,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const ja=c=>{c.moveTo(-15,-12);c.lineTo(13,-15);c.moveTo(-3,-23);c.quadraticCurveTo(-7,0,-1,17);c.moveTo(9,-5);c.quadraticCurveTo(0,14,-12,13);c.bezierCurveTo(-21,12,-17,-3,0,-3);c.bezierCurveTo(21,-3,22,16,4,20)}
const en=c=>{c.moveTo(-14,19);c.lineTo(0,-20);c.lineTo(14,19);c.moveTo(-8,6);c.lineTo(8,6)}
const bub=(c,x,d,k,sx,pp)=>{c.save();c.translate(x,56);c.scale(pp,pp);c.save();c.scale(d,1)
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(-16,-34);c.lineTo(16,-34);c.arcTo(38,-34,38,-12,22);c.lineTo(38,10);c.arcTo(38,32,16,32,22);c.lineTo(26,50);c.lineTo(2,32)
  c.lineTo(-16,32);c.arcTo(-38,32,-38,10,22);c.lineTo(-38,-12);c.arcTo(-38,-34,-16,-34,22);c.closePath();c.fill();c.stroke();c.restore()
  c.scale(max(.02,sx),1);ds(c,13,6.5,k?JP:EN,()=>(k?ja:en)(c));c.restore()}
export default(c,t,i)=>{
  const ph=Math.floor(t*2)%2,g=t*2%1,sx=g<.25?ease(g/.25):g>.75?ease((1-g)/.25):1,gx=ph?4:-4,bk=i==5,fu=sin(T*t*2)
  bub(c,46,1,ph==0,sx,1+.06*(1-sx));bub(c,210,-1,ph==1,sx,1+.06*(1-sx))
  c.save();c.translate(128,48);c.rotate(T*t)
  for(const d of[0,PI])ds(c,14,7,AR,()=>{c.arc(0,0,20,d+.35,d+2.6)})
  c.fillStyle=AR;c.lineWidth=4;for(const d of[0,PI]){c.save();c.rotate(d+2.6);c.beginPath();c.moveTo(20,-11);c.lineTo(33,0);c.lineTo(10,4);c.closePath();c.restore();c.fill();c.stroke()}
  c.restore()
  const H=f=>{c.save();c.translate(124,200);c.scale(.64,.64);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(206,34,218,110,216,200);c.lineTo(222,400);c.lineTo(34,400);c.lineTo(40,200);c.bezierCurveTo(38,110,50,34,128,34);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,400);c.lineTo(216,400);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SL;c.beginPath();c.moveTo(98,190);c.quadraticCurveTo(60,196,52,214);c.lineTo(84,250);c.lineTo(128,290);c.lineTo(172,250);c.lineTo(204,214);c.quadraticCurveTo(196,196,158,190);c.lineTo(128,250);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(66,214);c.lineTo(90,240);c.lineTo(128,274);c.lineTo(166,240);c.lineTo(190,214);c.stroke();c.strokeStyle='#111'
    c.fillStyle=SC;c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128,262),c.lineTo(128+d*30,250),c.lineTo(128+d*24,282),c.closePath(),c.fill(),c.stroke()
    c.beginPath();c.moveTo(122,270);c.lineTo(110,316);c.lineTo(124,310);c.lineTo(128,272);c.lineTo(132,310);c.lineTo(146,316);c.lineTo(134,270);c.fill();c.stroke()
    c.beginPath();c.arc(128,264,9,0,T);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,196);c.quadraticCurveTo(128,208,142,196);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.moveTo(142,168);c.lineTo(142,194);c.stroke()
    c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(bk){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}
    else eye(c,103,140,-1,gx,-3),eye(c,153,140,1,gx,-3)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(128,170,138,166);c.quadraticCurveTo(136,178,128,178);c.quadraticCurveTo(120,178,118,166);c.fill();c.stroke()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(56,188)
    c.bezierCurveTo(40,70,88,36,128,36);c.bezierCurveTo(168,36,216,70,200,188);c.lineTo(178,188);c.lineTo(180,112)
    c.lineTo(166,112);c.lineTo(162,104);c.lineTo(156,112);c.lineTo(110,112);c.lineTo(104,104);c.lineTo(98,112);c.lineTo(76,112)
    c.lineTo(78,188);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.lineWidth=5;for(const x of[66,190])c.beginPath(),c.moveTo(x,128),c.lineTo(x,170),c.stroke()
    c.strokeStyle='#111';c.fillStyle=RB;c.lineWidth=7;c.save();c.translate(186,64);c.rotate(.5);for(const e of[-1,1])c.beginPath(),c.moveTo(0,0),c.quadraticCurveTo(e*22,-22,e*26,-2),c.quadraticCurveTo(e*20,10,0,0),c.fill(),c.stroke()
    c.beginPath();c.arc(0,0,8,0,T);c.fill();c.stroke();c.restore()
  })
  const hy=176+3*fu
  ds(c,20,12,'#fff',()=>{c.moveTo(176,250);c.quadraticCurveTo(204,240,198,hy+14)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(198,hy+8,11,12,0,0,T);c.fill();c.stroke()
  ds(c,10,5,SKIN,()=>{c.moveTo(200,hy);c.lineTo(202,hy-16)})
}
