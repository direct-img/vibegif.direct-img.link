// lavender twintailed girl in a pink cardigan who jumps in surprise with a "!" when a golden bell beside her dings and a red count badge pops onto it, then beams up at it
const{sin,cos,PI,max,min,exp}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#b197fc',HD='#7048e8',HL='#f3f0ff',EYE='#f783ac',ED='#c2255c',CAR='#ffdeeb',CD='#f783ac',BL='#ffa8a8',BELL='#ffd43b',BD='#f59f00',RD='#fa5252',RB='#ffd43b',MO='#c92a2a'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d,g,w)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+g,y+2+g*.6,11.5*w,15*w,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+g,y-8+g*.6,13*w,10*w,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+g,y+3+g*.6,5.5*w,7.5*w,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+g-4*w,y-5+g*.6,4.5*w,0,T);c.fill();c.beginPath();c.arc(x+g+5*w,y+8+g*.6,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6-3*(1-w));c.quadraticCurveTo(x,y-20-6*(1-w),x+16,y-6-3*(1-w));c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const k=t-.22,sur=t>=.22&&t<.42,jq=min(1,max(0,k/.22)),jy=-20*sin(PI*jq),up=sin(PI*jq),hap=t>=.42&&t<.9,bk=i==1,bo=2*sin(T*t*2)
  const ang=k<0?0:.5*exp(-3.2*k)*sin(T*k*3)*(1-ease((t-.85)/.13)),bs=(t<.22?0:t<.28?1.35:1)*(1-ease((t-.88)/.1)),ex=t<.22||t>.7?0:t<.28?1.4:1
  c.save();c.translate(62,26);c.rotate(ang)
  if(k>0&&k<.5)for(const d of[-1,1])for(const r of[46,58])ds(c,7,3,'#fff',()=>{c.arc(0,62,r,d<0?PI*.82:-PI*.18,d<0?PI*1.12:PI*.12)})
  c.fillStyle=BELL;c.lineWidth=5;c.beginPath();c.arc(0,8,8,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();c.arc(0,84,9,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(-40,72);c.quadraticCurveTo(-30,64,-30,40);c.bezierCurveTo(-30,4,30,4,30,40);c.quadraticCurveTo(30,64,40,72);c.closePath();c.fill();c.stroke()
  c.strokeStyle=BD;c.lineWidth=6;c.beginPath();c.moveTo(18,26);c.quadraticCurveTo(22,40,21,58);c.stroke();c.strokeStyle='#fff';c.beginPath();c.moveTo(-18,28);c.quadraticCurveTo(-20,36,-20,46);c.stroke();c.strokeStyle='#111'
  c.fillStyle=BD;c.lineWidth=6;c.beginPath();c.roundRect(-44,68,88,12,6);c.fill();c.stroke()
  if(bs>0){c.save();c.translate(30,22);c.scale(bs,bs);c.fillStyle=RD;c.lineWidth=5;c.beginPath();c.arc(0,0,17,0,T);c.fill();c.stroke()
    c.beginPath();c.moveTo(-5,-7);c.quadraticCurveTo(0,-12,5,-7);c.quadraticCurveTo(7,-2,0,-1);c.quadraticCurveTo(8,1,5,6);c.quadraticCurveTo(0,11,-5,6);c.lineWidth=4;c.strokeStyle='#fff';c.stroke();c.restore();c.strokeStyle='#111'}
  c.restore()
  const H=f=>{c.save();c.translate(170,200+jy+bo);c.scale(.64,.64);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9
    for(const d of[-1,1]){c.save();c.translate(128+d*64,76);c.rotate(d*(-.05-.42*up)+.06*sin(T*t*2+1))
      c.fillStyle=HAIR;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*38,4,d*52,70,d*32,128);c.quadraticCurveTo(d*24,146,d*6,140);c.bezierCurveTo(d*24,94,d*8,36,0,0);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(d*12,18);c.bezierCurveTo(d*28,46,d*34,84,d*26,118);c.stroke();c.strokeStyle='#111';c.lineWidth=9
      c.restore()}
    c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,96,202,156);c.lineTo(54,156);c.bezierCurveTo(46,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=CAR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,380);c.lineTo(216,380);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.lineTo(128,240);c.lineTo(152,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=CD;for(const y of[258,290])c.beginPath(),c.arc(128,y,7,0,T),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(bk){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,142),c.quadraticCurveTo(x,150,x+14,142),c.stroke()}
    else if(sur)eye(c,103,138,-1,0,.62),eye(c,153,138,1,0,.62)
    else eye(c,103,140,-1,hap?-4:0,1),eye(c,153,140,1,hap?-4:0,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(sur)c.beginPath(),c.ellipse(128,174,7,9,0,0,T),c.fill(),c.stroke()
    else if(hap){c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,188,142,164);c.closePath();c.fill();c.stroke();c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,182,8,6,0,0,T);c.fill();c.restore()}
    else c.beginPath(),c.arc(128,164,8,.15*PI,.85*PI),c.stroke()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
    c.fillStyle=RB;c.lineWidth=8;for(const d of[-1,1]){c.save();c.translate(128+d*60,72);c.rotate(d*.3);for(const e of[-1,1])c.beginPath(),c.moveTo(0,0),c.lineTo(e*20,-13),c.lineTo(e*20,13),c.closePath(),c.fill(),c.stroke();c.beginPath();c.arc(0,0,8,0,T);c.fill();c.stroke();c.restore()}
  })
  for(const d of[-1,1]){const hx=170+d*(54+8*up),hy=244-60*up+jy
    if(up>.05){ds(c,20,11,CAR,()=>{c.moveTo(170+d*36,232+jy);c.quadraticCurveTo(170+d*66,250+jy,hx,hy+8)})
      c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.arc(hx,hy,10,0,T);c.fill();c.stroke()}}
  if(ex>0){c.save();c.translate(226,70);c.scale(ex,ex);c.rotate(.15);c.fillStyle=RD;c.lineWidth=5;c.beginPath();c.moveTo(-7,-28);c.lineTo(7,-28);c.lineTo(4,4);c.lineTo(-4,4);c.closePath();c.fill();c.stroke();c.beginPath();c.arc(0,16,6,0,T);c.fill();c.stroke()
    c.restore();for(const a of[-.5,0,.5])ds(c,6,2.5,'#fff',()=>{c.moveTo(226+sin(a)*38,70-cos(a)*38);c.lineTo(226+sin(a)*48,70-cos(a)*48)})}
}
