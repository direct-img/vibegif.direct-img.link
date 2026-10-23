// strawberry bedhead girl in star pajamas stretching both arms overhead in a big morning yawn, eyes squeezed shut and tears beading
const{sin,PI}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#ff9fb8',HD='#e8708f',HL='#ffe0ea',EYE='#20c997',ED='#087f5b',PJ='#bac8ff',PD='#748ffc',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',TEAR='#a5d8ff'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x+4,y+7,2.5,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  // heavy sleepy lid: a dome that hides the top half of the eye
  c.fillStyle=SKIN;c.beginPath();c.moveTo(x-19,y+5);c.quadraticCurveTo(x,y-12,x+19,y+5);c.lineTo(x+19,y-24);c.lineTo(x-19,y-24);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y+5);c.quadraticCurveTo(x,y-11,x+16,y+5);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-9,y+23);c.quadraticCurveTo(x,y+26,x+9,y+23);c.stroke()
}
const drop=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r*1.6);c.quadraticCurveTo(x+r,y-r*.2,x+r,y+r*.3);c.arc(x,y+r*.3,r,0,PI);c.quadraticCurveTo(x-r,y-r*.2,x,y-r*1.6);c.fill();c.stroke()}
export default(c,t)=>{
  const s=ease((t-.06)/.28)-ease((t-.62)/.22),w=sin(2*T*t),hy=-6*s
  c.translate(128,256);c.scale(.86,.86);c.translate(-128,-256)
  // bedhead strands sticking up, drawn first so the hair covers their roots
  // bedhead flyaways curling off the top and sides
  for(const[x0,y0,x1,y1,x2,y2,o]of[[104,48,84,40,80,22,0],[136,40,150,24,140,12,1.4],[186,66,206,66,214,48,2.8],[70,80,52,74,48,58,4.2]])
    for(const[l,st]of[[10,'#111'],[4,HAIR]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(x0,y0+hy),c.quadraticCurveTo(x1,y1+hy,x2+4*sin(2*T*t+o),y2+hy+2*sin(2*T*t+o)),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34+hy);c.bezierCurveTo(200,34+hy,214,100,206,168)
  for(const[x,y]of[[198,186],[188,170],[176,192],[164,178]])c.lineTo(x,y)
  c.lineTo(92,178);for(const[x,y]of[[80,192],[68,170],[58,186],[50,168]])c.lineTo(x,y)
  c.bezierCurveTo(42,100,56,34+hy,128,34+hy);c.fill();c.stroke()
  // pajama top with piping and star print
  c.fillStyle=PJ;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,262);c.lineTo(202,262);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;for(const[x,y]of[[78,236],[178,230],[112,250],[150,252]]){c.beginPath();for(let k=0;k<10;k++){const r=k%2?2.5:6,a=k*PI/5-PI/2;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}c.closePath();c.fill();c.stroke()}
  c.lineWidth=5;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*30,190),c.lineTo(128+d*34,204),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=PD;for(const y of[226,246])c.beginPath(),c.arc(128,y,3.5,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,170+hy);c.lineTo(116,192);c.lineTo(128,210);c.lineTo(140,192);c.lineTo(140,170+hy);c.fill();c.beginPath();c.moveTo(116,170+hy);c.lineTo(116,192);c.moveTo(140,170+hy);c.lineTo(140,192);c.stroke()
  // arms rise from the sides to clasp overhead
  const hands=[]
  for(const d of[-1,1]){
    // elbow and hand swing out to the side on the way up instead of crossing the chest
    const q=(a,b,e)=>(1-s)*(1-s)*a+2*s*(1-s)*b+s*s*e
    const ex=128+d*q(66,118,102),ey=q(270,220,112),hx=128+d*q(58,124,20),hy2=q(312,160,16)
    for(const[l,st]of[[30,'#111'],[19,PJ]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(128+d*46,214),c.lineTo(ex,ey),c.lineTo(hx,hy2+10),c.stroke()
    hands.push([hx,hy2])
  }
  c.strokeStyle='#111'
  c.save();c.translate(0,hy)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(s<.35){eye(c,103,142,-1);eye(c,153,142,1)}
  else for(const d of[-1,1]){
    const x=128+d*25
    c.lineWidth=6;c.beginPath();c.moveTo(x+d*13,132);c.lineTo(x-d*9,142);c.lineTo(x+d*13,150);c.stroke()
    c.fillStyle=TEAR;c.lineWidth=3;drop(c,x+d*20,146,2+4*s)
  }
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,6,0,0,T),c.fill()
  c.lineWidth=3.5
  if(s>.12){
    const rx=6+8*s,ry=4+13*s,my=166+3*s
    c.fillStyle=MO;c.beginPath();c.ellipse(128,my,rx,ry,0,0,T);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,my+ry,rx*.8,ry*.55,0,0,T);c.fill();c.restore()
    c.beginPath();c.ellipse(128,my,rx,ry,0,0,T);c.stroke()
  }else c.beginPath(),c.moveTo(120,168),c.quadraticCurveTo(124,165,128,168),c.quadraticCurveTo(132,171,136,168),c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
  c.quadraticCurveTo(186,118,180,104);c.quadraticCurveTo(172,96,168,112);c.quadraticCurveTo(160,88,146,90);c.quadraticCurveTo(144,104,134,112)
  c.quadraticCurveTo(128,92,114,90);c.quadraticCurveTo(112,104,100,110);c.quadraticCurveTo(94,92,84,100);c.quadraticCurveTo(84,110,78,114)
  c.quadraticCurveTo(70,128,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.restore()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
  for(const[k,[x,y]]of hands.entries())c.beginPath(),c.ellipse(x,y+4,10,12,(k?-1:1)*.5,0,T),c.fill(),c.stroke()
}
