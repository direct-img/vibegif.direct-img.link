// chibi girl in earmuffs and a striped scarf packing a snowball, winding up and throwing it off to the side, breath puffing
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#a5d8ff',HD='#4dabf7',HL='#e7f5ff',EYE='#9775fa',ED='#5f3dc4',COAT='#748ffc',CD='#4c6ef5',SC='#fa5252',MUFF='#faa2c1',MD='#f06595',BOOT='#a9744f',SN='#fff',SD='#d0ebff',BL='#ffa8a8',Z=.7
const cl=x=>max(0,min(1,x)),ease=x=>x*x*(3-2*x),lerp=(a,b,k)=>a.map((v,j)=>v+(b[j]-v)*k)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2.5,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const ball=(c,x,y,r)=>{if(r<1)return;c.fillStyle=SN;c.lineWidth=4;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke();c.strokeStyle=SD;c.lineWidth=2.5;c.beginPath();c.arc(x+r*.15,y+r*.15,r*.55,.2,1.6);c.stroke();c.strokeStyle='#111'}
const puff=(c,x,y,s)=>{c.fillStyle='#e9ecef';c.lineWidth=3.5;c.beginPath();for(const[a,b,r]of[[0,0,6],[-9,-3,5],[-17,-1,4]])c.moveTo(x+a*s+r*s,y+b*s),c.arc(x+a*s,y+b*s,r*s,0,T);c.stroke();c.fill()}
export default(c,t)=>{
  const X=104,Y=232,pk=cl(t/.4),wu=ease(cl((t-.4)/.15)),th=ease(cl((t-.55)/.07)),rc=ease(cl((t-.62)/.3))
  const R0=[14,-62],R1=[60,-114],R2=[64,-64],L0=[-14,-62],L1=[-34,-84]
  let Rh=lerp(lerp(lerp(R0,R1,wu),R2,th),R0,rc),Lh=lerp(lerp(L0,L1,wu),L0,rc)
  if(t<.4){const p=2*sin(PI*pk*6);Rh=[Rh[0],Rh[1]+p];Lh=[Lh[0],Lh[1]-p]}
  for(const[x,o]of[[30,0],[200,.5],[150,.25],[240,.75],[60,.6]]){const p=(t+o)%1;c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(x+8*sin(p*T*2),p*230-10,4,0,T);c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle=SN;c.beginPath();c.moveTo(6,248);c.quadraticCurveTo(10,226,40,222);c.quadraticCurveTo(70,214,104,222);c.quadraticCurveTo(150,212,190,222);c.quadraticCurveTo(232,226,240,248);c.closePath();c.fill();c.stroke()
  c.strokeStyle=SD;c.lineWidth=4;c.beginPath();c.moveTo(150,236);c.quadraticCurveTo(180,230,210,236);c.moveTo(30,240);c.quadraticCurveTo(46,234,60,238);c.stroke();c.strokeStyle='#111'
  c.save();c.translate(X,Y)
  c.fillStyle=BOOT;c.lineWidth=6
  for(const d of[-1,1])c.beginPath(),c.moveTo(d*5,-24),c.lineTo(d*5,-2),c.quadraticCurveTo(d*5,2,d*11,2),c.lineTo(d*26,2),c.quadraticCurveTo(d*30,-6,d*22,-8),c.lineTo(d*22,-24),c.closePath(),c.fill(),c.stroke()
  const arm=(d,h)=>{for(const[w,s]of[[24,'#111'],[13,COAT]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(d*18,-84),c.lineTo(...h),c.stroke();c.strokeStyle='#111'}
  c.lineWidth=6;c.fillStyle=COAT;c.beginPath();c.moveTo(-22,-92);c.quadraticCurveTo(-30,-60,-40,-26);c.quadraticCurveTo(0,-16,40,-26);c.quadraticCurveTo(30,-60,22,-92);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(-40,-26);c.quadraticCurveTo(0,-16,40,-26);c.lineTo(41,-20);c.quadraticCurveTo(0,-8,-41,-20);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CD;c.lineWidth=4;c.beginPath();c.moveTo(0,-84);c.lineTo(0,-20);c.stroke();c.strokeStyle='#111'
  const fl=sin(T*t*2)
  c.fillStyle=SC;c.lineWidth=5;c.beginPath();c.moveTo(-6,-90);c.lineTo(-10,-58);c.lineTo(2,-60+fl*2);c.lineTo(6,-88);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;for(const y of[-80,-70])c.beginPath(),c.moveTo(-7,y),c.lineTo(4,y+1),c.stroke();c.strokeStyle='#111'
  c.beginPath();c.roundRect(-26,-98,52,14,7);c.fill();c.stroke()
  c.save();c.translate(0,-86);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,48);c.bezierCurveTo(60,48,56,110,68,150);c.lineTo(188,150);c.bezierCurveTo(200,110,196,48,128,48);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const hap=t>=.55&&t<.8
  if(hap){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,161,14,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath()
  if(hap)c.moveTo(116,165),c.quadraticCurveTo(128,186,140,165),c.closePath(),c.fill(),c.stroke();else if(t>=.4)c.ellipse(128,169,5,6,0,0,T),c.fill(),c.stroke();else c.arc(128,164,8,.2*PI,.8*PI),c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,144)
  c.bezierCurveTo(54,74,88,42,128,42);c.bezierCurveTo(168,42,202,74,186,144)
  c.quadraticCurveTo(182,114,172,102);c.quadraticCurveTo(164,108,160,116);c.quadraticCurveTo(154,100,142,94);c.quadraticCurveTo(136,106,128,112)
  c.quadraticCurveTo(122,98,110,94);c.quadraticCurveTo(104,108,98,116);c.quadraticCurveTo(92,106,84,102);c.quadraticCurveTo(72,118,70,144);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.28,1.4],[1.48,1.56],[1.64,1.74]])c.beginPath(),c.arc(128,104,54,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=HAIR;c.lineWidth=7
  for(const d of[-1,1])for(let k=0;k<4;k++)c.beginPath(),c.ellipse(128+d*(60-k*1.5),156+k*22,11-k,13-k,0,0,T),c.fill(),c.stroke()
  c.fillStyle=MUFF
  c.lineWidth=13;c.beginPath();c.arc(128,104,58,PI*1.08,PI*1.92);c.stroke();c.strokeStyle=MD;c.lineWidth=6;c.stroke();c.strokeStyle='#111'
  c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.arc(128+d*58,112,20,0,T),c.fill(),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*58,112,10,PI*1.1,PI*1.6),c.stroke();c.strokeStyle='#111'
  c.restore()
  arm(-1,Lh);arm(1,Rh)
  c.lineWidth=5;c.fillStyle=SC;for(const h of[Rh,Lh])c.beginPath(),c.arc(h[0],h[1],9.5,0,T),c.fill(),c.stroke()
  if(t<.4)ball(c,(Rh[0]+Lh[0])/2,Rh[1]-4,3+9*pk);else if(t<.6)ball(c,Rh[0]+3,Rh[1]-13,12)
  c.restore()
  for(const o of[.2,.7]){const p=(t-o+1)%1;if(p<.3)puff(c,X-4-p*110,Y-98-p*60,.8+p*2.4)}
  if(t>=.6&&t<.9){const p=(t-.6)/.3;ball(c,X+64+(290-X-64)*p,Y-78-160*p+40*p*p,12)}
}
