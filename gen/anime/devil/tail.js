// little devil with crimson hair and tiny horns hovering on flapping bat wings, spade tail swishing, poking her toy trident with a sly fanged grin
const{sin,cos,PI,round,max}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#e03131',HD='#a51111',HL='#ffc9c9',EYE='#ff922b',ED='#d9480f',HORN='#495057',WG='#9c36b5',WL='#e599f7',DR='#862e9c',DD='#5f3dc4',GO='#ffd43b',GD='#f59f00',TL='#c92a2a',BL='#ffa8a8'
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const sly=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+4,14,12,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+4,14,12,0,0,T);c.clip();c.fillStyle=EYE;c.beginPath();c.ellipse(x-d*3,y+8,11,13,0,0,T);c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x-d*3,y,12,8,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-d*3,y+8,3,7,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-d*3-4,y+3,3.5,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-17,y-6+d*3);c.lineTo(x+17,y-6-d*3);c.moveTo(x+d*16,y-6-d*3);c.lineTo(x+d*22,y-11-d*3);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(x-12,y-22+d*6);c.lineTo(x+12,y-22-d*2);c.stroke()
}
const wing=(c,x,y,d,a)=>{
  c.save();c.translate(x,y);c.scale(d,1);c.rotate(-a)
  const p=()=>{c.beginPath();c.moveTo(0,0);c.lineTo(30,-34);c.lineTo(76,-46);c.quadraticCurveTo(70,-24,82,-8);c.quadraticCurveTo(62,-12,56,6);c.quadraticCurveTo(40,-2,30,16);c.quadraticCurveTo(18,4,0,14);c.closePath()}
  c.lineWidth=14;c.strokeStyle='#fff';p();c.stroke();c.fillStyle=WG;p();c.fill();c.strokeStyle=WL;c.lineWidth=3;c.beginPath();for(const[ex,ey]of[[76,-46],[56,6],[30,16]])c.moveTo(30,-34),c.lineTo(ex,ey);c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;p();c.stroke();c.restore()
}
export default(c,t)=>{
  const by=round(4*sin(T*t)),a=.34*sin(2*T*t),sw=sin(T*t+1),pk=max(0,sin(2*T*t-1))
  c.translate(0,by)
  const tp=[[124,190]];for(let k=1;k<=10;k++){const s=k/10;tp.push([124-60*s+10*sin(s*PI*2+sw),196+28*sin(s*PI)-34*s*s+14*sw*s])}
  line(c,tp,4,TL)
  const[tx,ty]=tp[10],ta=.6+.5*sw
  c.save();c.translate(tx,ty);c.rotate(ta);c.fillStyle=TL;c.lineWidth=5;c.beginPath();c.moveTo(0,4);c.bezierCurveTo(-18,-2,-14,-22,0,-26);c.bezierCurveTo(14,-22,18,-2,0,4);c.closePath();c.fill();c.stroke();c.restore()
  for(const d of[-1,1])wing(c,128+d*14,138,d,a)
  for(const[x,s]of[[118,-1],[138,1]]){line(c,[[x,196],[x+s*3,218]],7,SKIN);c.lineWidth=5;c.fillStyle=DD;c.beginPath();c.ellipse(x+s*5,222,9,7,s*.3,0,T);c.fill();c.stroke()}
  c.fillStyle=DR;c.lineWidth=5;c.beginPath();c.moveTo(112,136);c.lineTo(144,136);c.bezierCurveTo(156,160,164,180,170,200);c.lineTo(158,194);c.lineTo(148,204);c.lineTo(138,196);c.lineTo(128,206);c.lineTo(118,196);c.lineTo(108,204);c.lineTo(98,194);c.lineTo(86,200);c.bezierCurveTo(92,180,100,160,112,136);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,148),c.lineTo(128+d*16,136),c.lineTo(128+d*18,146),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=GO;c.lineWidth=4;c.beginPath();c.moveTo(128,154);c.bezierCurveTo(118,146,120,138,128,144);c.bezierCurveTo(136,138,138,146,128,154);c.fill();c.stroke()
  line(c,[[114,142],[98,160],[104,172]],7,SKIN)
  const hx=168+6*pk,hy=156-8*pk,ang=.45
  c.save();c.translate(hx,hy);c.rotate(ang)
  for(const[lw,col]of[[11,'#111'],[5,GO]])c.lineWidth=lw,c.strokeStyle=col,c.beginPath(),c.moveTo(0,30),c.lineTo(0,-64),c.stroke()
  c.strokeStyle='#111';c.fillStyle=GO;c.lineWidth=5;c.beginPath();c.moveTo(-20,-62);c.quadraticCurveTo(-20,-74,-22,-88);c.lineTo(-14,-80);c.quadraticCurveTo(-12,-70,-6,-66);c.lineTo(-5,-86);c.lineTo(0,-100);c.lineTo(5,-86);c.lineTo(6,-66);c.quadraticCurveTo(12,-70,14,-80);c.lineTo(22,-88);c.quadraticCurveTo(20,-74,20,-62);c.quadraticCurveTo(0,-54,-20,-62);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ff6b6b';c.beginPath();c.arc(0,-60,5,0,T);c.fill();c.stroke()
  c.restore()
  line(c,[[142,142],[158,152],[hx,hy]],7,SKIN)
  c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(hx,hy,7,0,T);c.fill();c.stroke()
  if(pk>.6){c.lineWidth=4;const ex=hx+cos(ang-PI/2)*104,ey=hy+sin(ang-PI/2)*104;for(const b of[-.7,0,.7]){const q=ang-PI/2+b;c.beginPath();c.moveTo(ex+cos(q)*12,ey+sin(q)*12);c.lineTo(ex+cos(q)*22,ey+sin(q)*22);c.stroke()}}
  c.save();c.translate(128,92);c.scale(.6,.6);c.translate(-128,-128)
  c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(200,36,212,98,202,150);c.quadraticCurveTo(190,166,176,160);c.lineTo(80,160);c.quadraticCurveTo(66,166,54,150);c.bezierCurveTo(44,98,56,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  sly(c,103,140,-1);sly(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
  c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(108,162);c.quadraticCurveTo(128,186,150,160);c.quadraticCurveTo(128,170,108,162);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(134,167);c.lineTo(138,176);c.lineTo(142,165);c.fill();c.stroke()
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,142)
  c.bezierCurveTo(52,70,90,36,128,36);c.bezierCurveTo(166,36,204,70,190,142)
  c.quadraticCurveTo(186,112,176,100);c.quadraticCurveTo(168,104,162,114);c.quadraticCurveTo(156,96,146,90);c.quadraticCurveTo(140,104,132,110)
  c.quadraticCurveTo(126,96,116,90);c.quadraticCurveTo(110,104,100,112);c.quadraticCurveTo(96,98,88,96);c.quadraticCurveTo(82,108,80,114)
  c.quadraticCurveTo(70,114,66,142);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a0,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,104,56,PI*a0,PI*e),c.stroke();c.strokeStyle='#111'
  for(const d of[-1,1]){c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.arc(128+d*56,52,22,0,T);c.fill();c.stroke()
    const hp=()=>{c.beginPath();c.moveTo(128+d*24,52);c.quadraticCurveTo(128+d*22,22,128+d*38,6);c.quadraticCurveTo(128+d*36,30,128+d*44,48);c.closePath()}
    c.lineWidth=20;c.strokeStyle='#fff';hp();c.stroke();c.fillStyle=HORN;hp();c.fill();c.lineWidth=8;c.strokeStyle='#111';hp();c.stroke()
    c.strokeStyle='#adb5bd';c.lineWidth=4;c.beginPath();c.moveTo(128+d*29,40);c.quadraticCurveTo(128+d*29,26,128+d*35,16);c.stroke();c.strokeStyle='#111'}
  c.restore()
}
