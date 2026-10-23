// girl in a santa hat and red coat tossing a wrapped present up past her head and catching it, eyes following it, snowflakes drifting
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#6b4226',HD='#4a2c17',HL='#c08a5e',EYE='#2f9e44',ED='#1b5e20',RED='#fa5252',RD='#c92a2a',FUR='#fff',BOX='#51cf66',BXD='#2f9e44',RIB='#ffd43b',BL='#ffa8a8',MO='#c92a2a'
const cl=x=>max(0,min(1,x))
const eye=(c,x,y,d,dx,dy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip()
  c.fillStyle=EYE;c.beginPath();c.ellipse(x+dx,y+2+dy,11.5,15,0,0,T);c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+dx,y-8+dy,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+dx,y+3+dy,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4+dx,y-5+dy,4.5,0,T);c.fill();c.beginPath();c.arc(x+5+dx,y+8+dy,2,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const flake=(c,x,y,r)=>{for(const[w,s]of[[7,'#111'],[3,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(let k=0;k<3;k++){const a=k*PI/3;c.moveTo(x-r*cos(a),y-r*sin(a));c.lineTo(x+r*cos(a),y+r*sin(a))}c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  const a=cl((t-.1)/.62),air=a>0&&a<1,h=sin(PI*a),px=136+76*h,py=230-182*h+(t<.1?6*sin(PI*t/.1):0)+(t>.72&&t<.86?8*sin(PI*(t-.72)/.14):0),hu=air?10*h:0,dx=3*h,dy=-5*h
  for(const[x,o]of[[30,0],[226,.5],[56,.3]]){const p=(t+o)%1;flake(c,x+8*sin(T*p),20+200*p,7)}
  c.save();c.translate(128,256);c.scale(.82,.82);c.translate(-128,-256)
  // hat tip flops behind the head
  const fl=8*sin(T*t)
  c.lineWidth=7;c.fillStyle=RED;c.beginPath();c.moveTo(72,74);c.bezierCurveTo(90,18,160,0,200+fl,40);c.quadraticCurveTo(206+fl,58,214+fl,74);c.quadraticCurveTo(190,56,184,74);c.closePath();c.fill();c.stroke()
  c.fillStyle=FUR;c.beginPath();c.arc(214+fl,82,15,0,T);c.fill();c.stroke()
  c.fillStyle=HD;c.beginPath();c.moveTo(128,50);c.bezierCurveTo(194,50,204,110,198,172);c.quadraticCurveTo(186,182,172,170);c.lineTo(84,170);c.quadraticCurveTo(70,182,58,172);c.bezierCurveTo(52,110,62,50,128,50);c.fill();c.stroke()
  // coat
  c.fillStyle=RED;c.beginPath();c.moveTo(102,188);c.quadraticCurveTo(52,196,40,262);c.lineTo(216,262);c.quadraticCurveTo(204,196,154,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=FUR;c.beginPath();c.moveTo(94,190);c.quadraticCurveTo(128,214,162,190);c.quadraticCurveTo(166,204,156,210);c.quadraticCurveTo(128,226,100,210);c.quadraticCurveTo(90,204,94,190);c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle=RIB;for(const y of[234,252])c.beginPath(),c.arc(128,y,5,0,T),c.fill(),c.stroke()
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.rect(116,170,24,20);c.fill();c.beginPath();c.moveTo(116,170);c.lineTo(116,188);c.moveTo(140,170);c.lineTo(140,188);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,108);c.bezierCurveTo(70,160,100,190,128,192);c.bezierCurveTo(156,190,186,160,182,108);c.bezierCurveTo(182,58,74,58,74,108);c.fill();c.stroke()
  eye(c,103,146,-1,dx,dy);eye(c,153,146,1,dx,dy)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,166,12,6,0,0,T),c.fill()
  c.lineWidth=4;c.fillStyle=MO;c.beginPath()
  if(air)c.moveTo(117,170),c.quadraticCurveTo(128,186,139,170),c.closePath(),c.fill(),c.stroke();else c.arc(128,170,7,.15*PI,.85*PI),c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,150)
  c.bezierCurveTo(58,104,72,78,92,74);c.lineTo(166,74);c.bezierCurveTo(186,78,198,104,190,150)
  c.quadraticCurveTo(186,124,176,112);c.quadraticCurveTo(168,110,162,118);c.quadraticCurveTo(156,104,146,100);c.quadraticCurveTo(140,112,132,116)
  c.quadraticCurveTo(126,102,116,98);c.quadraticCurveTo(110,112,100,116);c.quadraticCurveTo(94,104,86,106);c.quadraticCurveTo(76,120,66,150);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*60,150),c.quadraticCurveTo(128+d*76,170,128+d*68,186),c.quadraticCurveTo(128+d*60,172,128+d*56,160),c.fill(),c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[x,y]of[[100,90],[150,90]])c.beginPath(),c.moveTo(x-8,y+4),c.quadraticCurveTo(x,y-2,x+8,y+4),c.stroke();c.strokeStyle='#111'
  // fur band of the hat
  c.lineWidth=7;c.fillStyle=FUR;c.beginPath();c.moveTo(64,82);c.quadraticCurveTo(128,52,192,82);c.quadraticCurveTo(198,92,190,100);c.quadraticCurveTo(128,72,66,100);c.quadraticCurveTo(58,92,64,82);c.fill();c.stroke()
  c.restore()
  // arms: sleeves with fur cuffs, hands lift a little as she tosses
  for(const d of[-1,1]){const hx=128+d*(24+4*h),hy=242-hu
    for(const[l,s]of[[30,'#111'],[19,RED]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*66,256),c.quadraticCurveTo(128+d*52,236,hx+d*10,hy+6),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=FUR;c.beginPath();c.ellipse(hx+d*12,hy+6,9,12,d*.6,0,T);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,11,9,0,0,T);c.fill();c.stroke()}
  // the present
  c.save();c.translate(px,py);c.rotate(air?T*a:0)
  c.lineWidth=5;c.fillStyle=BOX;c.beginPath();c.roundRect(-20,-16,40,32,4);c.fill();c.stroke()
  c.fillStyle=RIB;c.beginPath();c.rect(-5,-16,10,32);c.fill();c.stroke()
  c.fillStyle=BXD;c.beginPath();c.roundRect(-23,-20,46,10,3);c.fill();c.stroke();c.fillStyle=RIB;c.beginPath();c.rect(-5,-20,10,10);c.fill();c.stroke()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(0,-20),c.quadraticCurveTo(d*16,-36,d*4,-22),c.closePath(),c.fill(),c.stroke()
  c.restore()
  if(t>.72&&t<.84){c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*40,214),c.lineTo(128+d*50,208),c.moveTo(128+d*40,224),c.lineTo(128+d*52,224),c.stroke()}
}
