// calm sky-blue haired girl in a cardigan sipping from a steaming teacup with her eyes closed while loading dots bounce in a little thought cloud
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#74c0fc',HD='#339af0',HL='#e7f5ff',CAR='#ffec99',CD='#fcc419',CUP='#fcc2d7',CPD='#f06595',TEA='#c77c3a',BL='#ffa8a8',RB='#b197fc',DOT=['#ff8787','#ffd43b','#69db7c'],Z=.88
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
export default(c,t)=>{
  const u=ease((t-.1)/.12)-ease((t-.46)/.12),cx=124-6*u,cy=218-26*u,ca=-.4*u
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();for(const[x,y,r]of[[206,40,22],[228,46,16],[184,48,16],[208,58,16]])c.moveTo(x+r,y),c.arc(x,y,r,0,T);c.stroke();c.fill()
  c.beginPath();c.arc(170,82,6,0,T);c.stroke();c.fill();c.beginPath();c.arc(160,96,4,0,T);c.stroke();c.fill()
  for(let k=0;k<3;k++){const h=max(0,sin(T*(t*2-k*.15)));c.fillStyle=DOT[k];c.lineWidth=4;c.beginPath();c.arc(190+k*16,50-9*h,6,0,T);c.fill();c.stroke()}
  c.save();c.translate(112,258);c.scale(Z,Z);c.translate(-128,-258)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(200,36,214,110,210,258);c.lineTo(46,258);c.bezierCurveTo(42,110,56,36,128,36);c.fill();c.stroke()
  c.fillStyle=CAR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(60,198,52,258);c.lineTo(204,258);c.quadraticCurveTo(196,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(108,190);c.lineTo(128,240);c.lineTo(148,190);c.closePath();c.fill();c.lineWidth=6;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.fillStyle=RB;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*16,203),c.lineTo(128+d*14,222),c.closePath(),c.fill(),c.stroke()
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()
  c.lineWidth=5;for(const[x,d]of[[103,-1],[153,1]])c.beginPath(),c.moveTo(x+d*12,140),c.lineTo(x+d*18,136),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,14,7,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-2,166),c.lineTo(128+d*42+k+2,158),c.stroke()
  c.lineWidth=4.5;c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(123,174,128,169);c.quadraticCurveTo(133,174,138,168);c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,200);c.bezierCurveTo(44,76,86,36,128,36);c.bezierCurveTo(170,36,212,76,196,200)
  c.lineTo(182,200);c.quadraticCurveTo(186,140,178,106);c.quadraticCurveTo(168,106,162,114);c.quadraticCurveTo(156,98,146,92);c.quadraticCurveTo(140,104,132,110)
  c.quadraticCurveTo(126,96,116,92);c.quadraticCurveTo(110,104,102,110);c.quadraticCurveTo(96,98,88,98);c.quadraticCurveTo(84,106,80,106)
  c.quadraticCurveTo(70,140,74,200);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=RB;c.lineWidth=6;c.beginPath();c.moveTo(80,64);c.quadraticCurveTo(128,36,176,64);c.lineTo(174,76);c.quadraticCurveTo(128,50,82,76);c.closePath();c.fill();c.stroke()
  c.restore()
  for(const o of[0,.5]){const p=(t*2+o)%1,x=cx+14+8*sin(T*p+o*9)+30*p,y=cy-26-60*p;if(p>.05&&p<.95)for(const[w,s]of[[11,'#111'],[5,'#fff']]){c.lineWidth=w*(1-p*.4);c.strokeStyle=s;c.beginPath();c.moveTo(x,y+14);c.bezierCurveTo(x-10,y+6,x+10,y-2,x,y-12);c.stroke()}}
  c.strokeStyle='#111'
  c.save();c.translate(cx,cy);c.rotate(ca)
  c.lineWidth=5;c.fillStyle=CUP;c.beginPath();c.arc(30,0,10,-PI/2,PI/2);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(-28,-16);c.lineTo(28,-16);c.quadraticCurveTo(28,22,0,22);c.quadraticCurveTo(-28,22,-28,-16);c.fill();c.stroke()
  c.fillStyle=TEA;c.lineWidth=4;c.beginPath();c.ellipse(0,-16,28,6,0,0,T);c.fill();c.stroke()
  c.fillStyle=CPD;c.lineWidth=3.5;c.beginPath();c.moveTo(0,10);c.bezierCurveTo(-10,2,-6,-6,0,-1);c.bezierCurveTo(6,-6,10,2,0,10);c.fill();c.stroke()
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(cx+d*26,cy+10+d*6*u,11,13,0,0,T),c.fill(),c.stroke()
  for(const d of[-1,1])for(const[l,s]of[[26,'#111'],[16,CAR]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(cx+d*46,262),c.lineTo(cx+d*28,cy+22+d*6*u),c.stroke()
  c.strokeStyle='#111'
}
