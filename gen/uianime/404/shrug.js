// teal bob girl in a yellow hoodie giving a big "dunno" shrug: shoulders up, palms out, head tilted with half-lidded eyes while a question mark pops over her
const{sin,PI,min}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#3bc9db',HD='#1098ad',HL='#c5f6fa',EYE='#9775fa',ED='#6741d9',HO='#ffd43b',HOD='#f59f00',BL='#ffa8a8',Q='#ff8787',Z=.9
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d,lx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+lx,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,y+4,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+lx-4,y+1,4,0,T);c.fill();c.beginPath();c.arc(x+lx+5,y+10,2,0,T);c.fill()
  c.fillStyle=SKIN;c.fillRect(x-16,y-20,32,18);c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-17,y-2);c.lineTo(x+16,y-2);c.lineTo(x+d*16+(d>0?4:-4),y-7);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+19);c.lineTo(x+8,y+19);c.stroke()
}
export default(c,t)=>{
  const u=ease((t-.04)/.14)-ease((t-.66)/.14),sh=-8*u,lx=5*u-1
  if(u>.05){const sc=min(1,u*1.2)*(1+.25*ease(1-(t-.18)/.1)*(t>.18));c.save();c.translate(212,44);c.rotate(.2);c.scale(sc,sc)
    for(const[w,s]of[[15,'#111'],[7,Q]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-11,-12),c.bezierCurveTo(-11,-29,13,-29,13,-13),c.bezierCurveTo(13,-2,0,-2,0,10),c.stroke()
    c.strokeStyle='#111';c.fillStyle=Q;c.lineWidth=4.5;c.beginPath();c.arc(0,24,6,0,T);c.fill();c.stroke();c.restore()}
  c.translate(128,250);c.scale(Z,Z);c.translate(-128,-252)
  const head=f=>{c.save();c.translate(128,190+sh*.6);c.rotate(-.12*u);c.translate(-128,-190);f();c.restore()}
  head(()=>{c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(200,36,214,100,204,160);c.quadraticCurveTo(200,178,184,176);c.lineTo(72,176);c.quadraticCurveTo(56,178,52,160);c.bezierCurveTo(42,100,56,36,128,36);c.fill();c.stroke()})
  c.lineWidth=6;c.fillStyle=HOD;c.beginPath();c.ellipse(128,196+sh,58,20,0,0,T);c.fill();c.stroke()
  c.fillStyle=HO;c.beginPath();c.moveTo(98,190+sh);c.quadraticCurveTo(58,196+sh,50,252);c.lineTo(206,252);c.quadraticCurveTo(198,196+sh,158,190+sh);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,192+sh);c.quadraticCurveTo(128,204+sh,140,192+sh);c.lineTo(140,168);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190+sh);c.moveTo(140,168);c.lineTo(140,190+sh);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(104,192+sh);c.quadraticCurveTo(128,214+sh,152,192+sh);c.stroke()
  c.lineWidth=4;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,206+sh),c.lineTo(128+d*16,232+sh),c.stroke(),c.beginPath(),c.arc(128+d*16,236+sh,4,0,T),c.fill(),c.stroke()
  c.strokeStyle=HOD;c.lineWidth=4;c.beginPath();c.moveTo(96,240);c.lineTo(160,240);c.stroke();c.strokeStyle='#111'
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,142,-1,lx);eye(c,153,142,1,lx)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,164,12,6,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,167),c.lineTo(128+d*42+k+2,161),c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(120,171);c.quadraticCurveTo(126,168,129,171);c.quadraticCurveTo(132,174,137,169);c.stroke()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,170)
    c.bezierCurveTo(42,74,88,36,128,36);c.bezierCurveTo(168,36,214,74,196,170);c.quadraticCurveTo(186,176,178,166)
    c.quadraticCurveTo(186,124,178,104);c.lineTo(170,112);c.quadraticCurveTo(164,98,154,92);c.quadraticCurveTo(150,104,142,110)
    c.quadraticCurveTo(136,96,124,90);c.quadraticCurveTo(120,102,112,110);c.quadraticCurveTo(106,98,96,96);c.quadraticCurveTo(92,104,86,110)
    c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,124,78,166);c.quadraticCurveTo(70,176,60,170);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.22,1.34],[1.42,1.5],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
    c.strokeStyle='#111';c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*25,124-6*u,13,PI*1.2,PI*1.8),c.stroke()
    c.fillStyle='#ff6b6b';c.lineWidth=4;c.beginPath();c.moveTo(70,92);c.lineTo(92,82);c.lineTo(88,96);c.closePath();c.fill();c.stroke()
  })
  for(const d of[-1,1]){
    const sx=128+d*52,sy=214+sh,ex=128+d*90,ey=236+sh*.5,hx=128+d*(98+10*u),hy=222-50*u
    for(const[w,s]of[[30,'#111'],[19,HO]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,sy),c.lineTo(ex,ey),c.lineTo(hx,hy+12),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
    c.save();c.translate(hx,hy);c.rotate(d*(.45+.55*u))
    const P=[[0,0,13,12,0],[-d*13,-4,4.5,9,-d*.8],...[-9,-3,3,9].map(k=>[k,-15,3.8,9,k*.02])]
    for(const[l,st]of[[10,'#111'],[0,SKIN]])for(const[x,y,a,b2,r]of P){c.beginPath();c.ellipse(x,y,a,b2,r,0,T);if(l)c.lineWidth=l,c.stroke();else c.fill()}
    c.lineWidth=2.5;c.beginPath();for(const k of[-6,0,6])c.moveTo(k,-20),c.lineTo(k,-9);c.stroke()
    c.restore()
  }
}
