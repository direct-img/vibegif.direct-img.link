// girl with teal twin braids walking her shiba inu on a red leash, both trotting along, the shiba's curly tail wagging
const{sin,cos,PI,abs,max,hypot,sqrt}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#a61e4d',HD='#7a1638',HL='#fcc2d7',EYE='#a9744f',ED='#5c3d2e',SW='#fcc419',SWD='#f08c00',SK='#4263eb',SHOE='#a9744f',DOG='#ffa94d',DD='#e8590c',CR='#fff4e6',RED='#fa5252',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+4,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-8,13,10,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+1,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+10,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const ik=(hx,hy,fx,fy,L)=>{const dx=fx-hx,dy=fy-hy,d=hypot(dx,dy),k=sqrt(max(0,L*L-d*d/4));return[hx+dx/2+dy/d*k,hy+dy/2-dx/d*k]}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t,i)=>{
  const g=2*T*t,d4=4*T*t,gb=-3*abs(sin(g)),db=-2*abs(sin(d4))
  c.fillStyle='#dee2e6';c.beginPath();c.ellipse(80,232,34,5,0,0,T);c.ellipse(194,232,40,5,0,0,T);c.fill()
  const hip=[80,176+gb],hx=118,hy=150+gb,cx=208,cy=178+db
  for(const s of[1,0]){const ph=g+s*PI,f=[hip[0]+14*sin(ph),228-6*max(0,cos(ph))],k=ik(hip[0],hip[1],f[0],f[1]-4,27);line(c,[hip,k,[f[0],f[1]-4]],8,s?'#fff':'#fff')
    c.fillStyle=SHOE;c.lineWidth=4;c.beginPath();c.ellipse(f[0]+4,f[1]-1,10,6,0,0,T);c.fill();c.stroke()}
  line(c,[[74,132+gb],[66+8*sin(g),150+gb],[64+12*sin(g),166+gb]],8,SW)
  c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(64+12*sin(g),168+gb,6,0,T);c.fill();c.stroke()
  c.translate(0,gb)
  c.fillStyle=SK;c.lineWidth=5;c.beginPath();c.moveTo(62,164);c.lineTo(98,164);c.lineTo(108,190);c.lineTo(52,190);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#364fc7';c.lineWidth=3;c.beginPath();c.moveTo(72,168);c.lineTo(68,188);c.moveTo(88,168);c.lineTo(92,188);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SW;c.lineWidth=5;c.beginPath();c.moveTo(66,126);c.lineTo(94,126);c.quadraticCurveTo(102,146,100,168);c.lineTo(60,168);c.quadraticCurveTo(58,146,66,126);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(80,128),c.lineTo(80+d*12,124),c.lineTo(80+d*10,134),c.closePath(),c.fill(),c.stroke()
  c.strokeStyle=SWD;c.lineWidth=3;c.beginPath();c.moveTo(62,160);c.lineTo(98,160);c.stroke();c.strokeStyle='#111'
  c.translate(0,-gb)
  const lx=(hx+cx)/2,ly=max(hy,cy)+26
  for(const[w,col]of[[8,'#111'],[3.5,RED]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(hx,hy),c.quadraticCurveTo(lx,ly,cx,cy),c.stroke()
  c.strokeStyle='#111'
  line(c,[[90,132+gb],[104,142+gb],[hx-4,hy-2]],8,SW)
  c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(hx,hy,6.5,0,T);c.fill();c.stroke()
  c.save();c.translate(0,gb)
  c.save();c.translate(82,90);c.scale(.5,.5);c.translate(-128,-128)
  for(const d of[-1,1]){const sw=d*4+6*sin(g+d);c.lineWidth=8;c.fillStyle=HAIR;for(let k=0;k<4;k++){const y=164+k*22;c.beginPath();c.ellipse(128+d*62+sw*k/3,y,15-k*1.5,13,0,0,T);c.fill();c.stroke()}
    c.fillStyle=RED;c.beginPath();c.ellipse(128+d*62+sw,250,9,6,0,0,T);c.fill();c.stroke();c.fillStyle=HAIR;c.beginPath();c.moveTo(128+d*56+sw,254);c.lineTo(128+d*62+sw,272);c.lineTo(128+d*70+sw,254);c.closePath();c.fill();c.stroke()}
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(i==11){c.lineWidth=7;for(const x of[107,157])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}else eye(c,107,140,-1),eye(c,157,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(134+d*42,162,12,6,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(136,163,9,.15*PI,.85*PI);c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,188,150)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,100,164,110);c.quadraticCurveTo(156,96,146,92);c.quadraticCurveTo(140,104,132,110)
  c.quadraticCurveTo(126,96,118,92);c.quadraticCurveTo(112,104,104,110);c.quadraticCurveTo(96,96,88,96);c.quadraticCurveTo(82,104,80,110);c.quadraticCurveTo(70,118,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.restore();c.restore()
  c.translate(0,db)
  const leg=(x,ph)=>{const fx=x+7*sin(ph),fy=228-5*max(0,cos(ph))-db;line(c,[[x,192],[fx,fy-4]],8,DOG);c.fillStyle=CR;c.lineWidth=4;c.beginPath();c.ellipse(fx+2,fy-2,7,5,0,0,T);c.fill();c.stroke()}
  leg(168,d4+PI);leg(204,d4)
  c.save();c.translate(160,176);c.rotate(.25*sin(d4))
  for(const[w,col]of[[20,'#111'],[11,DOG]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.arc(-4,-12,10,.3*PI,2.1*PI),c.stroke()
  c.strokeStyle=CR;c.lineWidth=11;c.beginPath();c.arc(-4,-12,10,1.7*PI,2.1*PI);c.stroke();c.strokeStyle='#111';c.restore()
  c.fillStyle=DOG;c.lineWidth=5;const body=()=>{c.beginPath();c.moveTo(160,190);c.bezierCurveTo(156,166,176,164,196,166);c.quadraticCurveTo(214,166,220,180);c.quadraticCurveTo(222,202,204,204);c.lineTo(170,204);c.quadraticCurveTo(160,202,160,190);c.closePath()}
  body();c.fill();c.save();c.clip();c.fillStyle=CR;c.beginPath();c.ellipse(198,206,30,9,0,0,T);c.ellipse(218,192,8,14,0,0,T);c.fill();c.restore();body();c.stroke()
  leg(176,d4);leg(212,d4+PI)
  c.fillStyle=DOG;c.lineWidth=5;for(const x of[218,234]){c.beginPath();c.moveTo(x-8,160);c.lineTo(x,138);c.lineTo(x+8,158);c.closePath();c.fill();c.stroke()}
  c.fillStyle=CR;for(const x of[218,234])c.beginPath(),c.moveTo(x-4,158),c.lineTo(x,146),c.lineTo(x+4,158),c.closePath(),c.fill()
  const head=()=>{c.beginPath();c.moveTo(208,170);c.bezierCurveTo(206,146,240,142,244,160);c.quadraticCurveTo(256,164,252,176);c.quadraticCurveTo(246,188,228,186);c.quadraticCurveTo(210,186,208,170);c.closePath()}
  c.fillStyle=DOG;head();c.fill();c.save();c.clip();c.fillStyle=CR;c.beginPath();c.ellipse(238,180,18,9,0,0,T);c.fill();c.restore();head();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(250,168,3.5,3,0,0,T);c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(230,162,5,1.15*PI,1.85*PI);c.stroke()
  c.fillStyle='#ff8fab';c.lineWidth=3;c.beginPath();c.moveTo(240,178);c.quadraticCurveTo(242,192+2*sin(d4),248,180);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(250,172);c.quadraticCurveTo(246,178,240,177);c.stroke()
  c.fillStyle=BL;c.beginPath();c.ellipse(224,174,4,2.5,0,0,T);c.fill()
  c.fillStyle=RED;c.lineWidth=4;c.beginPath();c.moveTo(206,166);c.lineTo(214,164);c.lineTo(216,190);c.lineTo(208,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ffd43b';c.beginPath();c.arc(212,194,4,0,T);c.fill();c.stroke()
}
