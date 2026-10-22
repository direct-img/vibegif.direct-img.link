// skater girl with a gold side ponytail and a backwards cap rolls along and pops an ollie, wheels spinning, speed lines streaming behind
const{sin,cos,PI,min,max,hypot,sqrt}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#fab005',HD='#e67700',HL='#fff3bf',EYE='#12b886',ED='#087f5b',CAP='#fa5252',HOOD='#3bc9db',HOD='#1098ad',SHO='#4263eb',DECK='#845ef7',DL='#d0bfff',WH='#fff',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x+3,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+3,y-8,13,10,0,0,T);c.fill();c.restore()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.lineWidth=2.5;c.beginPath();c.ellipse(x+3,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const ik=(hx,hy,fx,fy,L)=>{const dx=fx-hx,dy=fy-hy,d=hypot(dx,dy),k=sqrt(max(0,L*L-d*d/4));return[hx+dx/2+dy/d*k,hy+dy/2-dx/d*k]}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t,i)=>{
  const p=(t-.3)/.45,air=p>=0&&p<=1,h=air?46*sin(PI*p):0
  const ang=air?(p<.3?-.42*sin(PI*p/.3):.12*sin(PI*(p-.3)/.7)):0
  const cr=t<.2?0:t<.3?10*(t-.2)/.1:t<.75?10:t<.9?10*(1-(t-.75)/.15):0
  const cx=124,cy=212-h,oy=12-h+cr
  c.save();c.beginPath();c.rect(0,0,96,256);c.clip()
  for(const[k,y]of[[0,140],[1,160],[2,180],[3,200]]){const x=((k*97-t*512)%256+256)%256-60;line(c,[[x,y],[x+46,y]],3,'#fff')}
  c.restore()
  c.fillStyle='#ced4da';c.beginPath();c.ellipse(cx,236,56*(1-h/110),6*(1-h/110),0,0,T);c.fill()
  const B=(x,y)=>[cx+x*cos(ang)-y*sin(ang),cy+x*sin(ang)+y*cos(ang)]
  c.save();c.translate(cx,cy);c.rotate(ang)
  c.fillStyle='#adb5bd';c.lineWidth=4;for(const x of[-38,38])c.beginPath(),c.rect(x-8,3,16,6),c.fill(),c.stroke()
  for(const x of[-38,38]){c.fillStyle=WH;c.lineWidth=4;c.beginPath();c.arc(x,15,8,0,T);c.fill();c.stroke();const a=-T*t*4;c.lineWidth=3;c.beginPath();c.moveTo(x+3*cos(a),15+3*sin(a));c.lineTo(x+7*cos(a),15+7*sin(a));c.stroke()}
  c.fillStyle=DECK;c.lineWidth=5;c.beginPath();c.moveTo(-48,-4);c.lineTo(44,-4);c.quadraticCurveTo(54,-6,60,-14);c.quadraticCurveTo(66,-6,60,0);c.quadraticCurveTo(54,5,44,5);c.lineTo(-44,5);c.quadraticCurveTo(-54,5,-60,0);c.quadraticCurveTo(-66,-6,-60,-14);c.quadraticCurveTo(-54,-6,-48,-4);c.closePath();c.fill();c.stroke()
  c.strokeStyle=DL;c.lineWidth=3;c.beginPath();c.moveTo(-36,1);c.lineTo(36,1);c.stroke();c.strokeStyle='#111'
  c.restore()
  const bf=B(-26,-8),ff=B(24,-8),hy=148+oy-cr*.6
  const legs=[[114,bf],[132,ff]]
  for(const[hx,f]of legs){const k=ik(hx,hy,f[0],f[1]-4,30);line(c,[[hx,hy],k],12,SHO);line(c,[k,[f[0],f[1]-4]],9,SKIN)}
  for(const[,f]of legs){c.save();c.translate(f[0],f[1]-2);c.rotate(ang);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(4,-2,13,7,0,0,T);c.fill();c.stroke();c.strokeStyle=CAP;c.lineWidth=3;c.beginPath();c.moveTo(-4,-1);c.lineTo(10,-1);c.stroke();c.restore()}
  c.translate(0,oy)
  const ar=air?sin(PI*p):0
  line(c,[[110,118],[92,130-ar*10],[78,128-ar*22]],8,HOOD)
  c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(76,127-ar*22,6,0,T);c.fill();c.stroke()
  c.fillStyle=HOOD;c.lineWidth=5;c.beginPath();c.moveTo(108,108);c.lineTo(140,108);c.quadraticCurveTo(152,130,146,154);c.lineTo(106,154);c.quadraticCurveTo(100,130,108,108);c.closePath();c.fill();c.stroke()
  c.fillStyle=HOD;c.beginPath();c.moveTo(106,108);c.quadraticCurveTo(124,124,142,108);c.quadraticCurveTo(124,100,106,108);c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(114,138);c.lineTo(138,138);c.lineTo(136,150);c.lineTo(116,150);c.closePath();c.stroke()
  line(c,[[138,116],[156,124+ar*4],[170,116-ar*14]],8,HOOD)
  c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(172,115-ar*14,6,0,T);c.fill();c.stroke()
  c.save();c.translate(126,76);c.scale(.5,.5);c.translate(-128,-128)
  c.save();c.translate(62,92);c.rotate(.5+.15*sin(T*t*2)+.25*ar)
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(0,-8);c.bezierCurveTo(-50,0,-70,60,-60,110);c.quadraticCurveTo(-40,90,-30,110);c.bezierCurveTo(-34,60,-12,30,14,12);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(-10,10);c.bezierCurveTo(-36,30,-46,60,-46,90);c.stroke();c.strokeStyle='#111'
  c.fillStyle=CAP;c.lineWidth=7;c.beginPath();c.ellipse(0,0,13,16,.4,0,T);c.fill();c.stroke();c.restore()
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(i==2){c.lineWidth=7;for(const x of[107,157])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}else eye(c,107,140,-1),eye(c,157,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(132+d*42,162,12,6,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath()
  if(air)c.moveTo(118,164),c.quadraticCurveTo(132,186,146,164),c.closePath(),c.fill();else c.arc(132,164,9,.15*PI,.85*PI)
  c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,140)
  c.bezierCurveTo(56,90,80,64,128,64);c.bezierCurveTo(176,64,200,90,186,140)
  c.quadraticCurveTo(184,118,178,104);c.quadraticCurveTo(170,100,164,110);c.quadraticCurveTo(156,96,146,92);c.quadraticCurveTo(140,104,132,110)
  c.quadraticCurveTo(126,96,118,92);c.quadraticCurveTo(112,104,104,110);c.quadraticCurveTo(96,96,88,96);c.quadraticCurveTo(82,104,80,110);c.quadraticCurveTo(72,118,70,140);c.closePath();c.fill();c.stroke()
  c.fillStyle=CAP;c.beginPath();c.moveTo(66,92);c.bezierCurveTo(60,30,196,30,190,92);c.quadraticCurveTo(128,78,66,92);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(70,84);c.quadraticCurveTo(40,80,22,96);c.quadraticCurveTo(44,100,70,94);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(128,90,50,PI*1.2,PI*1.38);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(128,40,8,0,T);c.fill();c.stroke()
  c.restore()
}
