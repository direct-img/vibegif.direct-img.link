// girl with a sunflower ponytail and visor tosses the ball up, swings the racket over her head and serves it streaking away
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=70
const SKIN='#ffe3d1',HAIR='#fcc419',HD='#f08c00',HL='#fff3bf',EYE='#20c997',ED='#087f5b',VIS='#51cf66',VD='#2f9e44',RQ='#ff6b6b',BAND='#ffd43b',BALL='#d8f5a2',BL='#ffa8a8'
const eye=(c,x,y,d,ly)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();const Y=y+ly
  c.beginPath();c.ellipse(x,Y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x,Y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,Y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,Y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,Y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,Y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const ss=u=>u*u*(3-2*u)
const key=(K,t)=>{let k=0;while(k<K.length-2&&t>=K[k+1][0])k++;const[t0,...a]=K[k],[t1,...b]=K[k+1],u=ss(min(1,max(0,(t-t0)/(t1-t0))));return a.map((v,j)=>v+(b[j]-v)*u)}
const RK=[[0,168,172,1.3],[.12,168,172,1.3],[.32,152,104,1.95],[.44,150,84,3.6],[.5,150,72,4.55],[.6,176,128,6.6],[.8,168,172,7.58],[1,168,172,7.58]]
const TK=[[0,92,170],[.1,92,170],[.24,100,70],[.5,102,76],[.62,116,150],[.8,92,170],[1,92,170]]
const ball=(c,x,y,r)=>{c.fillStyle=BALL;c.lineWidth=4;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.arc(x-r*.9,y,r*.8,-.9,.9);c.stroke();c.strokeStyle='#111'}
export default(c,t,i)=>{
  const oy=t>.28&&t<.5?6*sin(PI*(t-.28)/.22*.5):t>=.5&&t<.66?-5*sin(PI*(t-.5)/.16):0
  const[rx,ry,ra]=key(RK,t),[tx,ty]=key(TK,t),behind=t>.22&&t<.47,look=t>.12&&t<.52?-5:0
  const racket=()=>{
    c.save();c.translate(rx,ry);c.rotate(ra)
    line(c,[[0,0],[24,0]],6,'#fff');c.strokeStyle=RQ;c.lineWidth=6;c.beginPath();c.moveTo(-4,0);c.lineTo(12,0);c.stroke();c.strokeStyle='#111'
    c.lineWidth=5;c.beginPath();c.moveTo(22,0);c.lineTo(30,-7);c.moveTo(22,0);c.lineTo(30,7);c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(48,0,20,15,0,0,T);c.fill();c.save();c.clip();c.strokeStyle='#adb5bd';c.lineWidth=1.5;for(let k=-20;k<=20;k+=6)c.beginPath(),c.moveTo(28,k),c.lineTo(68,k),c.moveTo(48+k,-16),c.lineTo(48+k,16),c.stroke();c.restore()
    c.strokeStyle='#111';c.lineWidth=10;c.beginPath();c.ellipse(48,0,20,15,0,0,T);c.stroke();c.strokeStyle=RQ;c.lineWidth=5;c.stroke();c.strokeStyle='#111'
    c.restore()
  }
  c.fillStyle='#dee2e6';c.beginPath();c.ellipse(120,234,48,6,0,0,T);c.fill()
  const head=g=>{c.save();c.translate(116,90+oy);c.rotate(t>.1&&t<.52?-.07:0);c.scale(.56,.56);c.translate(-128,-120);g();c.restore()}
  head(()=>{
    c.save();c.translate(178,36);c.rotate(-.15+.22*sin(T*t-1.2)+(t>.48&&t<.7?.25:0))
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,0);c.bezierCurveTo(56,-14,92,50,80,124);c.quadraticCurveTo(72,140,58,146);c.quadraticCurveTo(66,96,4,30);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(14,8);c.bezierCurveTo(50,22,68,66,66,116);c.stroke();c.strokeStyle='#111'
    c.fillStyle=VIS;c.lineWidth=7;c.beginPath();c.arc(0,4,11,0,T);c.fill();c.stroke();c.restore()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(208,36,216,100,206,158);c.lineTo(50,158);c.bezierCurveTo(40,100,48,36,128,36);c.fill();c.stroke();c.strokeStyle=HD;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*70,100),c.quadraticCurveTo(128+d*74,130,128+d*70,150),c.stroke();c.strokeStyle='#111'
  })
  if(behind)racket()
  const lg=[[110,-1],[128,1]]
  for(const[x,d]of lg){const fx=x+d*8,kx=x+d*(2+oy*.6);line(c,[[x,186+oy],[kx,206+oy*.5],[fx,222]],8,SKIN);line(c,[[fx,214],[fx,222]],8,'#fff')}
  for(const[x,d]of lg){const fx=x+d*8;c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(fx+d*4,228,12,7,0,0,T);c.fill();c.stroke();c.strokeStyle=VIS;c.lineWidth=3;c.beginPath();c.moveTo(fx+d*4-6,228);c.quadraticCurveTo(fx+d*4,224,fx+d*4+7,227);c.stroke();c.strokeStyle='#111'}
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(102,164+oy);c.lineTo(134,164+oy);c.lineTo(148,194+oy);c.lineTo(88,194+oy);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;for(const x of[104,118,132])c.beginPath(),c.moveTo(118+(x-118)*.6,168+oy),c.lineTo(x,192+oy),c.stroke()
  c.strokeStyle=VIS;c.lineWidth=4;c.beginPath();c.moveTo(91,188+oy);c.lineTo(145,188+oy);c.stroke();c.strokeStyle='#111'
  const sl=[104,138+oy],sr=[132,138+oy]
  line(c,[sl,[(sl[0]+tx)/2-8,(sl[1]+ty)/2],[tx,ty]],8,SKIN)
  c.fillStyle=SKIN;c.beginPath();c.rect(110,124+oy,12,10);c.fill()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(104,130+oy);c.lineTo(128,130+oy);c.lineTo(136,140+oy);c.lineTo(134,168+oy);c.lineTo(100,168+oy);c.lineTo(98,140+oy);c.closePath();c.fill();c.stroke()
  c.strokeStyle=VIS;c.lineWidth=4;c.beginPath();c.moveTo(108,131+oy);c.lineTo(116,142+oy);c.lineTo(124,131+oy);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(tx,ty,6.5,0,T);c.fill();c.stroke()
  head(()=>{
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(t>.48&&t<.54){c.lineWidth=8;for(const[x,d]of[[103,1],[153,-1]])c.beginPath(),c.moveTo(x-12*d,128),c.lineTo(x+10*d,140),c.lineTo(x-12*d,152),c.stroke()}else eye(c,103,140,-1,look),eye(c,153,140,1,look)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
    c.fillStyle='#c92a2a';c.lineWidth=6;c.beginPath()
    if(t>.46&&t<.6)c.ellipse(128,168,8,10,0,0,T),c.fill();else if(t>.6||t<.1)c.moveTo(116,164),c.quadraticCurveTo(128,182,140,164),c.closePath(),c.fill();else c.moveTo(120,168),c.lineTo(136,168)
    c.stroke()
    c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(68,150);c.bezierCurveTo(52,74,88,40,128,40);c.bezierCurveTo(168,40,204,74,188,150)
    c.quadraticCurveTo(184,128,176,114);c.quadraticCurveTo(168,112,162,122);c.quadraticCurveTo(156,108,146,106);c.quadraticCurveTo(140,116,132,122)
    c.quadraticCurveTo(126,108,118,106);c.quadraticCurveTo(112,116,104,122);c.quadraticCurveTo(98,108,90,110);c.quadraticCurveTo(84,116,80,122);c.quadraticCurveTo(70,130,68,150);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=8;c.beginPath();c.moveTo(66,84);c.quadraticCurveTo(128,58,190,84);c.lineTo(190,98);c.quadraticCurveTo(128,72,66,98);c.closePath();c.fill();c.stroke()
    c.fillStyle=VIS;c.beginPath();c.moveTo(62,96);c.quadraticCurveTo(128,66,194,96);c.quadraticCurveTo(204,110,186,110);c.quadraticCurveTo(128,90,70,110);c.quadraticCurveTo(52,110,62,96);c.closePath();c.fill();c.stroke()
    c.strokeStyle=VD;c.lineWidth=5;c.beginPath();c.moveTo(80,102);c.quadraticCurveTo(128,86,176,102);c.stroke();c.strokeStyle='#111'
  })
  line(c,[sr,[(sr[0]+rx)/2+10,(sr[1]+ry)/2+(ry<120?10:0)],[rx,ry]],8,SKIN)
  if(!behind)racket()
  c.fillStyle=BAND;c.lineWidth=4;c.beginPath();c.arc(rx,ry,7,0,T);c.fill();c.stroke()
  if(t<.2||t>=.84){const s=t>=.84?min(1,(t-.84)/.06):1;ball(c,tx+2,ty-9,8*s)}
  else if(t<.5){const u=(t-.2)/.3,x=101+(138-101)*u,y=62-(62-26)*(1-(1-u)**2)*1.1+(u>.85?(u-.85)*30:0);ball(c,x,y,8)}
  else if(t<.62){const u=(t-.5)/.12,x=140+u*150,y=28+u*30;c.strokeStyle='#fff';for(const k of[-6,0,6]){line(c,[[x-60,y+k*.9-10*.2],[x-14,y+k]],2,'#fff')}ball(c,x,y,8)
    if(t<.56){c.fillStyle='#fff3bf';c.lineWidth=4;c.beginPath();for(let k=0;k<16;k++){const r=k%2?8:20,b=k*PI/8;c.lineTo(140+r*cos(b),30+r*sin(b))}c.closePath();c.fill();c.stroke()}}
}
