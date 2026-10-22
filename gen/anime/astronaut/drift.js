// little astronaut with short crimson hair drifting in her bubble helmet, waving on a wavy tether while stars twinkle around her
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=110
const SKIN='#ffe3d1',HAIR='#e03131',HD='#c92a2a',HL='#ffc9c9',EYE='#51cf66',ED='#2b8a3e',SUIT='#fff',SS='#dee2e6',ACC='#ff922b',GL='#a5d8ff',BL='#ffa8a8',FR='#e8590c',PL='#b197fc',PD='#7950f2',ST='#ffd43b'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+r*.2,y-r*.2,x+r,y);c.quadraticCurveTo(x+r*.2,y+r*.2,x,y+r);c.quadraticCurveTo(x-r*.2,y+r*.2,x-r,y);c.quadraticCurveTo(x-r*.2,y-r*.2,x,y-r);c.fill();c.stroke()}
const limb=(c,pts,w)=>{for(const[lw,col]of[[w+8,'#111'],[w,SUIT]]){c.lineWidth=lw;c.strokeStyle=col;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t,i)=>{
  const ring=(a,b)=>{for(const[w,col]of[[10,'#111'],[4,'#ffd8a8']])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.ellipse(214,212,32,9,-.35,a,b),c.stroke();c.strokeStyle='#111'}
  ring(PI,T)
  c.fillStyle=PL;c.lineWidth=5;c.beginPath();c.arc(214,212,18,0,T);c.fill();c.stroke()
  c.save();c.beginPath();c.arc(214,212,18,0,T);c.clip();c.fillStyle=PD;c.beginPath();c.ellipse(208,206,8,5,.4,0,T);c.ellipse(222,220,5,3,.4,0,T);c.fill();c.restore()
  ring(-.05,PI+.05)
  c.lineWidth=3.5;for(const[k,x,y,r,col]of[[0,36,40,10,ST],[1,212,46,12,'#fff'],[2,226,118,7,ST],[3,30,150,7,'#fff'],[4,170,22,6,ST],[5,96,236,8,'#fff'],[6,56,96,5,ST]]){const s=.55+.45*sin(T*t*(k%2+1)+k*1.3);c.fillStyle=col;spark(c,x,y,r*s+2)}
  const ox=124+5*sin(T*t),oy=104+7*sin(T*t+1),a=.22+.08*sin(T*t),wv=sin(2*T*t)
  const bx=ox+cos(a)*-20-sin(a)*86,by=oy+sin(a)*-20+cos(a)*86
  for(const[w,col]of[[9,'#111'],[4,SS]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(bx,by),c.bezierCurveTo(bx-30,by+30+10*wv,30,170-20*wv,-6,190+8*wv),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(ox,oy);c.rotate(a)
  c.fillStyle=SS;c.lineWidth=5;c.beginPath();c.roundRect(-34,44,68,50,10);c.fill();c.stroke()
  limb(c,[[-14,92],[-22,120],[-12,136]],16);limb(c,[[14,92],[26,116],[22,138]],16)
  c.fillStyle=ACC;c.lineWidth=5;for(const[x,y]of[[-12,138],[22,140]])c.beginPath(),c.ellipse(x,y,12,8,0,0,T),c.fill(),c.stroke()
  limb(c,[[-24,58],[-44,74],[-50,96]],15)
  const wa=.15+.35*sin(2*T*t);limb(c,[[24,56],[52,48],[52+26*sin(wa),48-26*cos(wa)]],15)
  c.fillStyle=SS;c.lineWidth=4.5;for(const[x,y]of[[-50,98],[52+28*sin(wa),48-28*cos(wa)]])c.beginPath(),c.arc(x,y,9,0,T),c.fill(),c.stroke()
  c.fillStyle=SUIT;c.lineWidth=5;c.beginPath();c.moveTo(-26,46);c.quadraticCurveTo(0,40,26,46);c.quadraticCurveTo(34,74,26,98);c.quadraticCurveTo(0,104,-26,98);c.quadraticCurveTo(-34,74,-26,46);c.closePath();c.fill();c.stroke()
  c.fillStyle=SS;c.lineWidth=4;c.beginPath();c.roundRect(-13,62,26,18,4);c.fill();c.stroke()
  for(const[x,col]of[[-6,'#ff6b6b'],[0,ST],[6,'#4dabf7']])c.fillStyle=col,c.beginPath(),c.arc(x,71,2.6,0,T),c.fill()
  c.fillStyle=ACC;c.beginPath();c.rect(-28,86,56,7);c.fill();c.stroke()
  c.fillStyle=SS;c.lineWidth=5;c.beginPath();c.ellipse(0,46,30,9,0,0,T);c.fill();c.stroke()
  c.fillStyle='#e7f5ff';c.beginPath();c.arc(0,-6,50,0,T);c.fill()
  c.save();c.scale(.52,.52);c.translate(-128,-128)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,198,170);c.lineTo(58,170);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(i==9){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
  c.fillStyle=FR;for(const d of[-1,1])for(const[x,y]of[[-6,156],[2,153],[6,159]])c.beginPath(),c.arc(128+d*(40+x),y,2,0,T),c.fill()
  c.lineWidth=4;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,186,142,166);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,180,8,5,0,0,T);c.fill();c.restore()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(50,70,88,34,128,34);c.bezierCurveTo(168,34,206,70,188,150)
  c.lineTo(178,130);c.lineTo(180,106);c.lineTo(166,114);c.lineTo(162,94);c.lineTo(148,108);c.lineTo(140,88);c.lineTo(128,106);c.lineTo(116,88);c.lineTo(108,108);c.lineTo(94,94);c.lineTo(90,112);c.lineTo(76,106);c.lineTo(78,130);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.62,1.74]])c.beginPath(),c.arc(128,100,58,PI*a,PI*e),c.stroke()
  c.restore()
  c.save();c.globalAlpha=.18;c.fillStyle=GL;c.beginPath();c.arc(0,-6,50,0,T);c.fill();c.restore()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(0,-6,40,PI*1.1,PI*1.42);c.stroke();c.beginPath();c.arc(-30,-30,0,0,T);c.lineWidth=7;c.beginPath();c.arc(0,-6,40,PI*1.52,PI*1.58);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.arc(0,-6,50,0,T);c.stroke()
  c.restore()
}
