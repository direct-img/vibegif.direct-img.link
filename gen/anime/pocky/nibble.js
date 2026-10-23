// cream-haired hime-cut girl nibbling a chocolate stick snack bite by bite until it's gone, then pulling a fresh one out of the box
const{sin,cos,PI,min,max,floor}=Math,T=2*PI
export const frames=24,delay=80
const SKIN='#ffe3d1',HAIR='#fff1c9',HD='#e8c98f',HL='#fff',EYE='#a9744f',ED='#6b4226',SW='#ff8787',SD='#e03131',COL='#fff',RIB='#4dabf7',BIS='#f0c27b',CHO='#7b4a2e',BOX='#fa5252',BL='#ffa8a8',MO='#c92a2a'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x),M=[140,172],A=.38,D=[cos(A),sin(A)],B=[46,184],FULL=74
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+4,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-1,y-4,4.5,0,T);c.fill();c.beginPath();c.arc(x+7,y+9,2,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
// stick held at (x,y) pointing along angle a, chocolate except the 16px biscuit handle
const stick=(c,x,y,L,a=A+PI)=>{
  if(L<2)return
  const u=[cos(a),sin(a)],e=[x+u[0]*L,y+u[1]*L],h=min(16,L),m=[x+u[0]*h,y+u[1]*h]
  for(const[l,s]of[[11,'#111'],[5,BIS]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(...e),c.stroke()
  if(L>16){c.lineWidth=6;c.strokeStyle=CHO;c.beginPath();c.moveTo(...m);c.lineTo(...e);c.stroke()}
  c.strokeStyle='#111'
}
export default(c,t)=>{
  // five bites over the first 60% of the loop, each shortening the stick a chunk
  const bt=min(1,t/.6),bite=floor(bt*5),bp=bt*5-bite,L=t<.6?FULL-(bite+ease(bp/.3))*FULL/5:0
  const chew=t<.68&&bp>.25,happy=t>=.6&&t<.7
  const tip=[M[0]+D[0]*L,M[1]+D[1]*L],lerp=(a,b,s)=>[a[0]+(b[0]-a[0])*s,a[1]+(b[1]-a[1])*s]
  const end=[M[0]+D[0]*FULL,M[1]+D[1]*FULL]
  const H=t<.62?tip:t<.78?lerp([M[0]+D[0]*14,M[1]+D[1]*14],B,ease((t-.62)/.16)):t<.94?lerp(B,end,ease((t-.78)/.16)):end
  const carry=t>=.78?FULL:0,ang=t>=.78&&t<.94?-PI/2+(A+PI*1.5)*ease((t-.8)/.12):A+PI
  c.lineWidth=6
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,100,204,200);c.lineTo(52,200);c.bezierCurveTo(46,100,58,34,128,34);c.fill();c.stroke()
  // sweater with a sailor collar
  c.fillStyle=SW;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=COL;c.beginPath();c.moveTo(100,190);c.lineTo(128,226);c.lineTo(156,190);c.lineTo(170,198);c.lineTo(128,244);c.lineTo(86,198);c.closePath();c.fill();c.stroke()
  c.fillStyle=RIB;for(const d of[-1,1])c.beginPath(),c.moveTo(128,232),c.lineTo(128+d*16,222),c.lineTo(128+d*14,242),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,232,4.5,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,212);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  // face
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(chew||happy){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,160,13,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,163),c.lineTo(128+d*44+k+2,157),c.stroke()
  // little mouth: open around the stick while biting, munching otherwise
  c.lineWidth=3.5;c.fillStyle=MO
  if(L>2&&!chew){c.beginPath();c.ellipse(M[0]-4,M[1],7,6,0,0,T);c.fill();c.stroke()}
  else{c.beginPath();c.moveTo(M[0]-12,M[1]-2);c.quadraticCurveTo(M[0]-8,M[1]+3+2*sin(T*t*12),M[0]-4,M[1]);c.quadraticCurveTo(M[0],M[1]+3,M[0]+4,M[1]-2);c.stroke()}
  if(chew){c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(164,162,6+3*sin(T*t*12),-PI*.5,PI*.5);c.fill();c.stroke()}
  // hime cut: straight blunt bangs and long side locks
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,190)
  c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,190);c.lineTo(178,190);c.lineTo(176,112)
  c.lineTo(80,112);c.lineTo(78,190);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;for(const x of[100,128,156])c.beginPath(),c.moveTo(x,90),c.lineTo(x,110),c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,100,56,PI*a,PI*e),c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,100,60,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111'
  // the box in her other hand, tilted toward her
  c.save();c.translate(58,226);c.rotate(-.3)
  for(const x of[-8,0,8])stick(c,x,-24,22+(x==0?4:0),-PI/2)
  c.lineWidth=5;c.fillStyle=BOX;c.beginPath();c.roundRect(-20,-30,40,64,4);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(-12,-16,24,26,3);c.fill();c.stroke()
  c.strokeStyle=CHO;c.lineWidth=4;c.beginPath();c.moveTo(-6,6);c.lineTo(6,-10);c.stroke();c.strokeStyle='#111'
  c.restore()
  for(const[l,s]of[[24,'#111'],[15,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(86,262),c.lineTo(76,238),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(76,234,11,12,-.3,0,T);c.fill();c.stroke()
  // the stick and the hand holding its biscuit end
  stick(c,...H,L||carry,ang)
  for(const[l,s]of[[24,'#111'],[15,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(184,262),c.quadraticCurveTo(H[0]+30,H[1]+44,H[0]+4,H[1]+10),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(H[0]+2,H[1]+5,10,9,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(H[0]-6,H[1]-2,4,6,A,0,T);c.fill();c.stroke()
  // crumbs from each bite
  if(t<.62&&bp<.5){c.fillStyle=CHO;c.lineWidth=2;for(const[dx,dy,o]of[[0,0,0],[6,4,.2],[-4,6,.4]]){const p=bp*2,x=M[0]+4+dx,y=M[1]+12+dy+30*p*p;c.beginPath();c.arc(x,y,2.5,0,T);c.fill();c.stroke()}}
}
