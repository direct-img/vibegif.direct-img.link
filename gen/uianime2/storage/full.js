// aqua haired girl with twin buns sitting on an overstuffed storage box straining to squash the lid shut, it keeps bursting open and shooting files out while the red "FULL" bar flashes
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#3bc9db',HD='#0c8599',HL='#c5f6fa',EYE='#f76707',TE='#ff8fab',TED='#e64980',SHT='#4c6ef5',SHO='#ffd43b',BL='#ffa8a8',BX='#e8b07a',BXD='#c47f45',TP='#fff3bf',BR='#fa5252',BRL='#ff8787',SW='#a5d8ff',FC=[['#d0ebff','#339af0'],['#d3f9d8','#40c057'],['#fff3bf','#fab005'],['#f3d9fa','#be4bdb']]
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const file=(c,x,y,a,[f,l],z=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(z,z)
  c.fillStyle=f;c.lineWidth=5;c.beginPath();c.moveTo(-14,-18);c.lineTo(5,-18);c.lineTo(14,-9);c.lineTo(14,18);c.lineTo(-14,18);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(5,-18);c.lineTo(5,-9);c.lineTo(14,-9);c.closePath();c.fill();c.stroke()
  c.strokeStyle=l;c.lineWidth=4;c.beginPath();for(const[w,yy]of[[12,-2],[18,6],[14,13]])c.moveTo(-8,yy),c.lineTo(-8+w,yy);c.stroke();c.restore()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,15,18,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,15,18,0,0,T);c.clip();c.beginPath();c.ellipse(x,y+3,8.5,10,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(x,y+4,4,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-3,y,2.5,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y,15,18,0,0,T);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-8);c.quadraticCurveTo(x,y-22,x+17,y-8);c.moveTo(x+d*16,y-9);c.lineTo(x+d*22,y-14);c.stroke()
}
export default(c,t,i)=>{
  const j=i%8,cy=i>>3,h=[1,1,.8,.55,.3,.1,0,0][j],pop=j<2,rl=j==6,LY=162-24*h,X=128+(j==7?(i%2?2:-2):0),la=(cy?1:-1)*.06*h,sq=j>1&&j<6?.05:0
  c.fillStyle=BX;c.lineWidth=7;c.beginPath();c.rect(38,168,180,100);c.fill();c.stroke()
  c.strokeStyle=BXD;c.lineWidth=5;c.beginPath();c.moveTo(48,250);c.lineTo(48,184);c.moveTo(208,184);c.lineTo(208,250);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(52,212,152,30,15);c.fill();c.stroke()
  c.fillStyle=i%2?BRL:BR;c.lineWidth=5;c.beginPath();c.roundRect(57,217,142,20,10);c.fill();c.stroke()
  c.fillStyle='#fff';c.font='bold 17px DejaVu Sans';c.textAlign='center';c.fillText('FULL',128,234)
  c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=4;c.beginPath();c.moveTo(66,221);c.lineTo(90,221);c.stroke();c.strokeStyle='#111'
  c.save();c.beginPath();c.rect(0,0,256,168);c.clip();for(let k=0;k<5;k++)file(c,62+k*33,172-26*h+(k%2)*6,(k-2)*.22,FC[k%4],.8);c.restore()
  c.save();c.translate(X,LY+8);c.rotate(la);c.translate(-X,-LY-8)
  c.fillStyle=BX;c.lineWidth=7;c.beginPath();c.roundRect(28,LY,200,20,4);c.fill();c.stroke()
  c.fillStyle=TP;c.lineWidth=5;c.beginPath();c.rect(110,LY,36,20);c.fill();c.stroke()
  c.restore()
  const by=LY
  c.save();c.translate(X,by);c.scale(1+sq,1-sq);c.translate(-X,-by)
  for(const d of[-1,1]){const kk=pop?0:4*sin(T*t*8+d);ds(c,15,8,SKIN,()=>{c.moveTo(X+d*10,by-2);c.lineTo(X+d*12,by+30+kk)})
    c.fillStyle=SHO;c.lineWidth=5;c.beginPath();c.ellipse(X+d*14,by+36+kk,11,7,0,0,T);c.fill();c.stroke()}
  c.fillStyle=SHT;c.lineWidth=6;c.beginPath();c.moveTo(X-24,by-14);c.lineTo(X+24,by-14);c.lineTo(X+26,by+4);c.quadraticCurveTo(X,by+8,X-26,by+4);c.closePath();c.fill();c.stroke()
  c.fillStyle=TE;c.beginPath();c.moveTo(X-14,by-50);c.lineTo(X+14,by-50);c.quadraticCurveTo(X+24,by-48,X+24,by-36);c.lineTo(X+22,by-12);c.lineTo(X-22,by-12);c.lineTo(X-24,by-36);c.quadraticCurveTo(X-24,by-48,X-14,by-50);c.fill();c.stroke()
  c.strokeStyle=TED;c.lineWidth=5;c.beginPath();c.moveTo(X-22,by-22);c.lineTo(X+22,by-22);c.stroke();c.strokeStyle='#111'
  for(const d of[-1,1])ds(c,16,9,TE,()=>{c.moveTo(X+d*18,by-44);c.quadraticCurveTo(X+d*34,by-36,X+d*40,by-6)})
  c.fillStyle=SKIN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(X+d*41,by-2,10,7,0,0,T),c.fill(),c.stroke()
  const H=f=>{c.save();c.translate(X,by-46);c.scale(.46,.46);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=10;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,96,202,150);c.lineTo(54,150);c.bezierCurveTo(46,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=HAIR;for(const d of[-1,1]){c.beginPath();c.arc(128+d*58,56,28,0,T);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.arc(128+d*58,56,17,PI*(d>0?1.2:1.3),PI*(d>0?1.7:1.8));c.stroke();c.strokeStyle='#111';c.lineWidth=10}
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(pop){eye(c,103,140,-1);eye(c,153,140,1)}
    else if(rl){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else{c.lineWidth=9;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=7;c.fillStyle='#c92a2a'
    if(pop){c.beginPath();c.ellipse(128,172,9,11,0,0,T);c.fill();c.stroke()}
    else if(rl){c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,184,142,166);c.closePath();c.fill();c.stroke()}
    else{c.fillStyle='#fff';c.beginPath();c.roundRect(108,162,40,18,7);c.fill();c.stroke();c.beginPath();c.moveTo(110,171);c.lineTo(146,171);c.stroke()}
    c.lineWidth=10;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=SW;c.lineWidth=8;for(const[x,y]of[[204,100],[220,136]])if(!rl)c.beginPath(),c.moveTo(x,y-20),c.quadraticCurveTo(x+13,y,x,y+8),c.quadraticCurveTo(x-13,y,x,y-20),c.fill(),c.stroke()
  })
  c.restore()
  for(const[k,t0,d]of[[0,0,-1],[1,.5,1]]){const u=((t-t0+1)%1)/.5;if(u<1)file(c,X+d*(52+96*u),150-210*u+180*u*u,d*(.3+4*u),FC[k*2+cy],.8+.3*sin(PI*u))}
  if(pop){const q=j/2;for(const a of[-2.7,-2.2,-.9,-.4])ds(c,7,3,'#fff',()=>{c.moveTo(X+cos(a)*(108+14*q),LY+10+sin(a)*(30+10*q));c.lineTo(X+cos(a)*(122+18*q),LY+10+sin(a)*(40+14*q))})}
}
