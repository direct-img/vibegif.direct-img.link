// girl with a tangerine bob pedals a bicycle with a puppy riding in the front basket, wheels spinning, scarf streaming behind
const{sin,cos,PI,max,min,hypot,sqrt}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#fd7e14',HD='#e8590c',HL='#ffe8cc',EYE='#339af0',ED='#1864ab',TOP='#fff',STR='#20c997',DEN='#4dabf7',DD='#1c7ed6',SCARF='#20c997',SCD='#0ca678',BIKE='#ff6b6b',BD='#e03131',BAS='#e0a96d',BSD='#b07d4f',PUP='#fff4e6',EAR='#a9744f',SHOE='#fa5252',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x+3,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+3,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x+3,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const ik=(hx,hy,fx,fy,L)=>{const dx=fx-hx,dy=fy-hy,d=hypot(dx,dy),k=sqrt(max(0,L*L-d*d/4));return[hx+dx/2-dy/d*k,hy+dy/2+dx/d*k]}
export default(c,t,i)=>{
  const f=T*t,bob=1.2*sin(2*f),RH=[70,198],FH=[192,198],BB=[128,200],R=33
  c.fillStyle='#ced4da';c.lineWidth=5;c.beginPath();c.roundRect(14,226,228,16,8);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(14,226,228,16,8);c.clip();c.strokeStyle='#fff';c.lineWidth=4;for(let k=0;k<4;k++){const x=((k*64-t*256)%256+256)%256;c.beginPath();c.moveTo(x,234);c.lineTo(x+28,234);c.stroke()}c.restore()
  for(const[k,y]of[[0,132],[1,164]]){const x=((k*20-t*48)%48+48)%48-6;line(c,[[x,y],[x+20,y]],3,'#fff')}
  const pd=k=>[BB[0]+15*cos(f+k*PI),BB[1]+15*sin(f+k*PI)],hip=[112,146+bob]
  const leg=(k,col)=>{const p=pd(k),kn=ik(...hip,p[0],p[1]-3,37);line(c,[hip,kn,[p[0],p[1]-3]],9,col);line(c,[kn,[(kn[0]+p[0])/2,(kn[1]+p[1])/2]],9,SKIN);c.fillStyle=SHOE;c.lineWidth=5;c.beginPath();c.ellipse(p[0]+4,p[1]-1,11,6,0,0,T);c.fill();c.stroke()}
  leg(1,DD)
  const wheel=([x,y])=>{c.strokeStyle='#fff';c.lineWidth=16;c.beginPath();c.arc(x,y,R,0,T);c.stroke();c.strokeStyle='#343a40';c.lineWidth=9;c.stroke();c.strokeStyle='#111';c.lineWidth=2.5;c.beginPath();c.arc(x,y,R+5,0,T);c.stroke();c.beginPath();c.arc(x,y,R-5,0,T);c.stroke()
    c.strokeStyle='#adb5bd';c.lineWidth=2.5;for(let k=0;k<6;k++){const a=f+k*PI/3;c.beginPath();c.moveTo(x,y);c.lineTo(x+(R-5)*cos(a),y+(R-5)*sin(a));c.stroke()}c.strokeStyle='#111';c.fillStyle='#e9ecef';c.lineWidth=4;c.beginPath();c.arc(x,y,5,0,T);c.fill();c.stroke()}
  wheel(RH);wheel(FH)
  const seat=[112,152],ht=[172,150]
  line(c,[RH,BB,seat,RH],6,BIKE);line(c,[seat,ht],6,BIKE);line(c,[BB,[170,162]],6,BIKE);line(c,[[176,140],FH],6,BD);line(c,[[176,140],[176,126],[162,124]],5,'#adb5bd')
  c.fillStyle='#495057';c.lineWidth=5;c.beginPath();c.ellipse(108,148,16,6,0,0,T);c.fill();c.strokeStyle='#fff';c.lineWidth=9;c.stroke();c.strokeStyle='#111';c.lineWidth=5;c.stroke()
  c.fillStyle=BIKE;c.lineWidth=4;c.beginPath();c.arc(...BB,8,0,T);c.fill();c.stroke()
  const scarf=Array.from({length:7},(_,k)=>[128-15*k,112+6*sin(k*.9-T*t*2)*k/6+k*2.5+bob])
  line(c,scarf,10,SCARF);c.strokeStyle=SCD;c.lineWidth=3;const e=scarf[6];for(const d of[-5,0,5])c.beginPath(),c.moveTo(e[0],e[1]+d),c.lineTo(e[0]-9,e[1]+d+2),c.stroke();c.strokeStyle='#111'
  c.fillStyle=DEN;c.lineWidth=5;c.beginPath();c.moveTo(100,150+bob);c.lineTo(108,124+bob);c.lineTo(132,122+bob);c.lineTo(132,152+bob);c.quadraticCurveTo(116,160,100,150+bob);c.closePath();c.fill();c.stroke()
  leg(0,DEN)
  c.fillStyle=TOP;c.lineWidth=5;c.beginPath();c.moveTo(112,104+bob);c.lineTo(134,100+bob);c.lineTo(140,128+bob);c.lineTo(110,132+bob);c.closePath();c.fill();c.save();c.clip();c.strokeStyle=STR;c.lineWidth=4;for(const y of[108,116,124])c.beginPath(),c.moveTo(100,y+bob+2),c.lineTo(150,y+bob-3),c.stroke();c.restore();c.stroke()
  c.fillStyle=DEN;c.lineWidth=4;c.beginPath();c.moveTo(116,118+bob);c.lineTo(134,114+bob);c.lineTo(136,128+bob);c.lineTo(114,132+bob);c.closePath();c.fill();c.stroke()
  const sh=[130,108+bob],gp=[164,124]
  line(c,[sh,[148,122+bob/2],gp],8,SKIN);c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(...gp,6.5,0,T);c.fill();c.stroke()
  c.fillStyle=SCARF;c.lineWidth=5;c.beginPath();c.ellipse(128,104+bob,16,8,-.2,0,T);c.fill();c.stroke()
  c.save();c.translate(132,72+bob);c.rotate(.05);c.scale(.54,.54);c.translate(-128,-120)
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(124,34);c.bezierCurveTo(192,34,206,96,196,160);c.quadraticCurveTo(180,170,168,160);c.lineTo(70,160);c.quadraticCurveTo(46,168,44,140);c.bezierCurveTo(26,124,30,104,46,110);c.bezierCurveTo(46,60,70,34,124,34);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(78,96);c.bezierCurveTo(74,152,104,184,132,186);c.bezierCurveTo(160,184,190,152,186,96);c.bezierCurveTo(186,44,78,44,78,96);c.fill();c.stroke()
  eye(c,110,140,-1);eye(c,160,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(136+d*42,162,12,6,0,0,T),c.fill()
  c.fillStyle='#c92a2a';c.lineWidth=6;c.beginPath();c.moveTo(126,164);c.quadraticCurveTo(140,184,154,164);c.closePath();c.fill();c.stroke()
  c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(72,148);c.bezierCurveTo(56,74,94,40,134,40);c.bezierCurveTo(178,40,208,78,192,148)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,102,164,112);c.quadraticCurveTo(158,98,148,94);c.quadraticCurveTo(142,106,134,112)
  c.quadraticCurveTo(128,98,120,94);c.quadraticCurveTo(114,106,106,112);c.quadraticCurveTo(100,98,92,98);c.quadraticCurveTo(86,106,82,112);c.quadraticCurveTo(74,124,72,148);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=8;for(const[a0,a1]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(132,104,56,PI*a0,PI*a1),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#ffd43b';c.lineWidth=7;c.beginPath();c.roundRect(150,70,34,13,6);c.fill();c.stroke()
  c.restore()
  const bx=178,by=118
  c.save();c.translate(bx+19,by-6+bob*.5);c.scale(1.25,1.25)
  for(const d of[-1,1]){c.save();c.translate(d*11,-8);c.rotate(d*(.5+.35*sin(T*t*3+d)));c.fillStyle=EAR;c.lineWidth=4;c.beginPath();c.ellipse(0,9,6,11,0,0,T);c.fill();c.stroke();c.restore()}
  c.fillStyle=PUP;c.lineWidth=5;c.beginPath();c.ellipse(0,0,15,13,0,0,T);c.fill();c.stroke()
  c.fillStyle=EAR;c.beginPath();c.ellipse(-6,-6,6,5,0,0,T);c.fill()
  c.fillStyle='#111';for(const x of[-5,6])c.beginPath(),c.arc(x,-1,2.6,0,T),c.fill()
  c.beginPath();c.ellipse(1,4,3.5,2.5,0,0,T);c.fill()
  c.fillStyle='#ff8fab';c.lineWidth=2.5;c.beginPath();c.moveTo(-2,8);c.quadraticCurveTo(1,16+2*sin(T*t*3),5,8);c.closePath();c.fill();c.stroke();c.restore()
  c.fillStyle=BAS;c.lineWidth=5;c.beginPath();c.moveTo(bx,by+8);c.lineTo(bx+38,by+8);c.lineTo(bx+34,by+32);c.lineTo(bx+4,by+32);c.closePath();c.fill();c.stroke()
  c.strokeStyle=BSD;c.lineWidth=3;for(const y of[16,24])c.beginPath(),c.moveTo(bx+2,by+y),c.lineTo(bx+36,by+y),c.stroke();for(const x of[10,19,28])c.beginPath(),c.moveTo(bx+x,by+10),c.lineTo(bx+x-1,by+30),c.stroke();c.strokeStyle='#111'
  c.fillStyle=PUP;c.lineWidth=3.5;for(const x of[8,28])c.beginPath(),c.ellipse(bx+x,by+8,5,4,0,0,T),c.fill(),c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=3.5;c.beginPath();for(let k=0;k<10;k++){const r=k%2?3:7,b=k*PI/5-PI/2;c.lineTo(bx+19+r*cos(b),by+21+r*sin(b))}c.closePath();c.fill();c.stroke()
}
