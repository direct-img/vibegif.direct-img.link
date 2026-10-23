// lilac-skinned alien girl with bobbling antennae waving hello, a soft UFO plushie tucked under her arm, stars twinkling
const{sin,cos,PI,round,max}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#e5dbff',SK2='#d0bfff',HAIR='#22b8cf',HD='#0c8599',HL='#c5f6fa',EYE='#ff6b6b',ED='#c92a2a',SUIT='#e9ecef',SD='#adb5bd',GO='#ffd43b',UF='#91a7ff',UD='#5c7cfa',DOME='#faa2c1',BL='#f783ac'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,15,18,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,12.5,16,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,14,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,12.5,16,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,6,8,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2.5,0,T);c.fill();c.beginPath();c.arc(x+6,y-3,1.5,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{const q=r*.2;c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+q,y-q,x+r,y);c.quadraticCurveTo(x+q,y+q,x,y+r);c.quadraticCurveTo(x-q,y+q,x-r,y);c.quadraticCurveTo(x-q,y-q,x,y-r);c.fill();c.stroke()}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  const wv=sin(2*T*t),bob=sin(T*t)
  for(const[x,y,o]of[[54,40,0],[202,40,.5]]){const r=round(9*max(0,sin(T*(t+o))));if(r>2){c.fillStyle=GO;c.lineWidth=3;spark(c,x,y,r)}}
  c.save();c.translate(128,262);c.scale(.82,.82);c.translate(-128,-262)
  for(const d of[-1,1]){const a=d*.32+.16*sin(T*t*2+d)+.06*bob,L=70,bx=128+d*24,by=50,ex=bx+L*sin(a),ey=by-L*cos(a)
    line(c,[[bx,by],[(bx+ex)/2+d*8,(by+ey)/2],[ex,ey]],4,SK2)
    c.fillStyle=d<0?GO:DOME;c.lineWidth=6;c.beginPath();c.arc(ex,ey,13,0,T);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(ex-4,ey-4,4,0,T);c.fill()}
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,212,98,202,150);c.quadraticCurveTo(218,170,214,180);c.quadraticCurveTo(196,176,184,170);c.lineTo(72,170);c.quadraticCurveTo(60,176,42,180);c.quadraticCurveTo(38,170,54,150);c.bezierCurveTo(44,98,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=SUIT;c.beginPath();c.moveTo(98,190);c.quadraticCurveTo(56,198,46,262);c.lineTo(210,262);c.quadraticCurveTo(200,198,158,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=UF;c.beginPath();c.ellipse(128,192,36,12,0,0,T);c.fill();c.stroke()
  c.fillStyle=GO;c.lineWidth=5;c.beginPath();for(let k=0;k<10;k++){const r=k%2?6:14,a=k*PI/5-PI/2;c.lineTo(150+cos(a)*r,226+sin(a)*r)}c.closePath();c.fill();c.stroke()
  c.strokeStyle=SD;c.lineWidth=4;c.beginPath();c.moveTo(70,226);c.quadraticCurveTo(80,240,76,262);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,12,6,0,0,T),c.fill()
  c.lineWidth=4;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(116,164);c.quadraticCurveTo(128,182,140,164);c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,150)
  c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,210,74,196,150)
  c.quadraticCurveTo(192,120,182,106);c.quadraticCurveTo(172,96,166,108);c.quadraticCurveTo(156,90,146,92);c.quadraticCurveTo(140,106,130,110)
  c.quadraticCurveTo(124,94,112,90);c.quadraticCurveTo(108,106,98,110);c.quadraticCurveTo(92,96,84,98);c.quadraticCurveTo(80,110,76,114)
  c.quadraticCurveTo(66,122,60,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.save();c.translate(76,236);c.scale(.8,.8);c.rotate(-.12+.04*bob)
  c.fillStyle=DOME;c.lineWidth=5;c.beginPath();c.ellipse(0,-14,24,22,0,PI,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-9,-24,6,4,-.5,0,T);c.fill()
  c.fillStyle=UF;c.beginPath();c.ellipse(0,-6,52,18,0,0,T);c.fill();c.stroke()
  c.fillStyle=UD;c.beginPath();c.ellipse(0,4,32,8,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*13,-8,3.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(0,-7,5,.15*PI,.85*PI);c.stroke()
  c.fillStyle=GO;c.lineWidth=3;for(const x of[-38,38])c.beginPath(),c.arc(x,-6,5,0,T),c.fill(),c.stroke()
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(100,224,11,9,-.4,0,T);c.fill();c.stroke()
  const sx=176,sy=214,ea=-.7,ex=sx+40*cos(ea),ey=sy+40*sin(ea),fa=-1.5+.45*wv,hx=ex+36*cos(fa),hy=ey+36*sin(fa)
  line(c,[[sx,sy],[ex,ey],[hx,hy]],11,SUIT)
  c.save();c.translate(hx,hy);c.rotate(fa+PI/2);c.fillStyle=SKIN;c.lineWidth=5
  c.beginPath();c.moveTo(-11,4);c.quadraticCurveTo(-14,-22,-6,-26);c.quadraticCurveTo(0,-30,6,-26);c.quadraticCurveTo(14,-22,11,4);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const k of[-4,2])c.moveTo(k,-25),c.lineTo(k+.5,-15);c.stroke()
  c.lineWidth=5;c.beginPath();c.ellipse(-13,-6,4.5,8,-.7,0,T);c.fill();c.stroke();c.restore()
  c.lineWidth=4;for(const s of[1,-1])c.beginPath(),c.arc(hx,hy,26,fa+s*.6-.2,fa+s*.6+.2),c.stroke()
  c.restore()
}
