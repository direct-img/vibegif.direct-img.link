// cyan haired girl with a bouncy ahoge holds her phone up to a big qr code, a red laser line sweeps down it, then a green check pops and she cheers
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#3bc9db',HD='#0c8599',HL='#e3fafc',EYE='#f06595',ED='#a61e4d',HO='#ffe066',HOD='#fab005',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',PH='#b197fc',PS='#364fc7',LZ='#ff4d4d',OK='#51cf66',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const QX=14,QY=20,QS=100,N=11,M=[...Array(N*N)].map((_,k)=>{const v=sin(k%N*12.9898+(k/N|0)*78.233)*43758.5453;return v-Math.floor(v)>.48})
export default(c,t,i)=>{
  const sc=t<.5,ly=QY+12+(QS-24)*(sc?ez(t,0,.48):1),ok=t>=.5&&t<.94,q=min(1,max(0,(t-.5)/.12)),pb=ok?(1+2.7*(q-1)**3+1.7*(q-1)**2)*(1-ez(t,.86,.94)):0
  const hop=ok?-6*sin(PI*min(1,(t-.5)/.2)):0,aw=sin(T*t*2)*.25
  c.fillStyle='#fff';c.lineWidth=6;c.strokeStyle=ok?OK:'#111';c.beginPath();c.roundRect(QX,QY,QS,QS,12);c.fill();c.stroke();c.strokeStyle='#111'
  c.fillStyle='#212529';const m=(QS-20)/N
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){const f=(x<4||x>6)&&y<4||x<4&&y>6;if(!f&&M[y*N+x])c.beginPath(),c.roundRect(QX+10+x*m,QY+10+y*m,m+.3,m+.3,1.5),c.fill()}
  for(const[x,y]of[[0,0],[8,0],[0,8]]){const X=QX+10+x*m,Y=QY+10+y*m;c.lineWidth=4.5;c.beginPath();c.roundRect(X+2.2,Y+2.2,3*m-4.4,3*m-4.4,4);c.stroke();c.beginPath();c.roundRect(X+m-.5,Y+m-.5,m+1,m+1,2);c.fill()}
  const px=132,py=126+hop,pa=-.35
  if(sc){c.fillStyle='rgba(255,77,77,.3)';c.beginPath();c.moveTo(px-18,py-26);c.lineTo(QX+6,ly);c.lineTo(QX+QS-6,ly);c.closePath();c.fill()
    ds(c,10,5,LZ,()=>{c.moveTo(QX+6,ly);c.lineTo(QX+QS-6,ly)})}
  const H=f=>{c.save();c.translate(188,218+hop);c.scale(.72,.72);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,160);c.quadraticCurveTo(208,186,190,196);c.lineTo(66,196);c.quadraticCurveTo(48,186,50,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=HO;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=HOD;c.beginPath();c.moveTo(84,196);c.quadraticCurveTo(128,176,172,196);c.lineTo(166,214);c.quadraticCurveTo(128,200,90,214);c.closePath();c.fill();c.stroke()
    c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,212),c.lineTo(128+d*16,250),c.stroke()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*16,254,5,0,T),c.fill(),c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(ok){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else eye(c,103,140,-1,-5,-3),eye(c,153,140,1,-5,-3)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(ok){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,188,128,188);c.quadraticCurveTo(114,188,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,9,7,0,0,T);c.fill();c.restore()}
    else{c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(128,174,138,168);c.stroke();c.fillStyle=TG;c.lineWidth=4;c.beginPath();c.ellipse(122,174,5,6,.3,0,T);c.fill();c.stroke()}
    c.save();c.translate(130,40);c.rotate(aw);c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,4);c.bezierCurveTo(-14,-30,24,-40,26,-18);c.bezierCurveTo(26,-6,12,-8,10,-16);c.bezierCurveTo(12,-24,4,-22,6,4);c.closePath();c.fill();c.stroke();c.restore()
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,160)
    c.quadraticCurveTo(188,120,178,100);c.quadraticCurveTo(168,106,160,114);c.quadraticCurveTo(154,96,142,90);c.quadraticCurveTo(138,104,130,112)
    c.quadraticCurveTo(124,96,112,90);c.quadraticCurveTo(108,104,100,110);c.quadraticCurveTo(94,98,86,98);c.quadraticCurveTo(82,108,80,112)
    c.quadraticCurveTo(70,128,66,160);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=PH;c.lineWidth=6;for(const[x,y]of[[172,82],[178,96]])c.beginPath(),c.arc(x,y,6,0,T),c.fill(),c.stroke()
  })
  ds(c,22,13,HO,()=>{c.moveTo(146,262);c.quadraticCurveTo(140,py+50,px+4,py+22)})
  c.save();c.translate(px,py);c.rotate(pa)
  c.fillStyle=PH;c.lineWidth=6;c.beginPath();c.roundRect(-20,-34,40,68,9);c.fill();c.stroke()
  c.fillStyle=ok?OK:PS;c.lineWidth=3.5;c.beginPath();c.roundRect(-14,-26,28,50,4);c.fill();c.stroke()
  if(ok){c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-7,0);c.lineTo(-2,6);c.lineTo(8,-6);c.stroke()}
  else{c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();for(const[a,b]of[[-1,-1],[1,-1],[-1,1],[1,1]])c.moveTo(a*8,b*9),c.lineTo(a*8,b*16),c.lineTo(a*2,b*16);c.stroke();c.strokeStyle=LZ;c.beginPath();c.moveTo(-9,-12+24*ez(t,0,.48));c.lineTo(9,-12+24*ez(t,0,.48));c.stroke()}
  c.strokeStyle='#111';c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(px+6,py+20,12,11,pa,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(px-2,py+16);c.lineTo(px+4,py+12);c.stroke()
  if(pb>.02){c.save();c.translate(QX+QS/2,QY+QS/2);c.scale(pb,pb);c.fillStyle=OK;c.lineWidth=6;c.beginPath();c.arc(0,0,30,0,T);c.fill();c.stroke()
    ds(c,14,7,'#fff',()=>{c.moveTo(-13,0);c.lineTo(-4,10);c.lineTo(14,-10)});c.restore()
    c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[124,26,0],[18,136,.06],[118,104,.12]]){const r=12*sin(PI*min(1,max(0,(t-.52-o)/.3)));if(r>1)star(c,x,y,r)}}
}
