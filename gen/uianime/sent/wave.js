// turquoise haired girl waving goodbye as a winged love letter flaps up and away into the corner and vanishes with a twinkle
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#3bc9db',HD='#1098ad',HL='#e3fafc',EYE='#f783ac',ED='#a61e4d',CAR='#d0bfff',CD='#9775fa',FL='#ffd43b',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',ENV='#fff9db',HT='#fa5252'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x+3,y+1,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+3,y-9,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x+3,y+1,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+8,y+7,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const letter=(c,x,y,s,f)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.rotate(-.25)
  c.fillStyle='#fff';c.lineWidth=5
  for(const d of[-1,1]){c.save();c.translate(d*22,-4);c.rotate(d*f);c.beginPath();c.moveTo(0,6);c.bezierCurveTo(d*10,-26,d*36,-32,d*44,-22);c.quadraticCurveTo(d*36,-16,d*40,-9);c.quadraticCurveTo(d*30,-6,d*32,2);c.quadraticCurveTo(d*20,4,0,10);c.closePath();c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();c.moveTo(d*12,-6);c.quadraticCurveTo(d*22,-15,d*34,-18);c.stroke();c.lineWidth=5;c.restore()}
  c.fillStyle=ENV;c.lineWidth=6;c.beginPath();c.roundRect(-30,-20,60,40,5);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(-26,-16);c.lineTo(0,4);c.lineTo(26,-16);c.stroke()
  c.fillStyle=HT;c.lineWidth=3.5;heart(c,0,4,1.1)
  c.restore()
}
export default(c,t)=>{
  const a=-1.4+.4*sin(2*T*t),p=min(1,t/.7),fl=.55*sin(8*T*t)
  c.save();c.translate(102,254);c.scale(.86,.86);c.translate(-128,-250)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,206,150);c.quadraticCurveTo(218,200,204,250);c.lineTo(52,250);c.quadraticCurveTo(38,200,50,150);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=CAR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*16,188,128+d*30,190),c.quadraticCurveTo(128+d*34,206,128,212),c.closePath(),c.fill(),c.stroke()
  c.strokeStyle=CD;c.lineWidth=4;c.beginPath();c.moveTo(128,214);c.lineTo(128,250);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=3;for(const y of[226,242])c.beginPath(),c.arc(136,y,3.5,0,T),c.fill(),c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,206,140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(119,165);c.quadraticCurveTo(128,170,137,165);c.quadraticCurveTo(136,180,128,180);c.quadraticCurveTo(120,180,119,165);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,181,6,5,0,0,T);c.fill();c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,190)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,190);c.quadraticCurveTo(182,176,178,186)
  c.quadraticCurveTo(184,124,178,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,124,78,186);c.quadraticCurveTo(72,176,66,190);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=FL;c.lineWidth=4;for(let k=0;k<5;k++){const b=k*T/5-PI/2;c.beginPath();c.arc(84+10*cos(b),70+10*sin(b),7,0,T);c.fill();c.stroke()}
  c.fillStyle='#ff922b';c.beginPath();c.arc(84,70,5,0,T);c.fill();c.stroke()
  const ex=198,ey=214,hx=ex+50*cos(a),hy=ey+50*sin(a)
  ds(c,30,19,CAR,()=>{c.moveTo(166,226);c.lineTo(ex,ey);c.lineTo(ex+34*cos(a),ey+34*sin(a))})
  c.lineWidth=5;c.fillStyle=SKIN
  c.save();c.translate(hx,hy);c.rotate(a+PI/2);c.scale(1.25,1.25)
  for(const x of[-9,-3,3,9])c.beginPath(),c.ellipse(x,-14,3.6,8,0,0,T),c.fill(),c.stroke()
  c.beginPath();c.ellipse(-14,-2,4,8,-.7,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(0,-2,13,12,0,0,T);c.fill();c.stroke()
  c.restore()
  for(const d of[-1,1])ds(c,7,3,'#fff',()=>{const r=60,b=a+d*.45;c.arc(ex,ey,r,b-.12,b+.12)})
  c.restore()
  if(t<.7){const x=196+30*p,y=114-78*p-8*sin(PI*p),s=.9-.4*p
    if(p>.12)ds(c,8,3.5,'#fff',()=>{for(const k of[0,1,2])c.moveTo(x-30*s-8-k*6,y+16*s+k*10),c.lineTo(x-30*s-20-k*6,y+24*s+k*10)})
    letter(c,x,y,s,fl)}
  else{const q=(t-.7)/.3;c.fillStyle=FL;c.lineWidth=3.5;spark(c,232,36,20*sin(PI*q));c.fillStyle='#fff';spark(c,206,22,10*sin(PI*min(1,q*1.4)))}
}
