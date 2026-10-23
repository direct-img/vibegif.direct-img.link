// manga chibi mummy girl with screentone twin buns: she twirls, a loose bandage unravels into a spiral round her while she flusters, then it winds back on
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
// sleepy round eye with a heavy lid
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,14,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+5,9,10,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-3,y+1,3.5,0,T);c.fill();c.beginPath();c.arc(x+4,y+9,1.6,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-15,y-1);c.quadraticCurveTo(x,y-8,x+15,y-1);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(x+d*14,y-2);c.lineTo(x+d*20,y-4);c.stroke()
}
// wavy wrap lines across whatever shape is clipped
// slanted bandage strips with little overlap ticks, across whatever shape is clipped
const wraps=(c,x0,x1,y0,y1,g)=>{c.lineWidth=2.5;c.beginPath();for(let y=y0-30;y<y1;y+=g){c.moveTo(x0,y);c.lineTo(x1,y+(x1-x0)*.22);for(let x=x0+14+(y/g|0)%3*9;x<x1;x+=34){const yy=y+(x-x0)*.22;c.moveTo(x,yy);c.lineTo(x+3,yy+g*.5)}}c.stroke()}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  c.translate(128,242);c.scale(1.16,1.16);c.translate(-128,-242)
  const u=ease(t/.4)-ease((t-.6)/.36),fl=u>.15,sp=t*T*2,tw=.08*sin(t*T*2)
  // the loose bandage: a helix around her, from the waist outward; split into behind and in-front passes
  const L=u*1,pts=[];for(let k=0;k<=60;k++){const s=k/60*L,a=sp+s*T*2.2,R=34+44*s;pts.push([128+R*cos(a),200-120*s+R*.28*sin(a),sin(a)])}
  // stroke each unbroken run of front (or back) segments as one ribbon, so there are no seams along it
  const band=front=>{let run=[];const flush=()=>{if(run.length>1)for(const[l,s]of[[14,'#111'],[8,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();for(const[x,y]of run)c.lineTo(x,y);c.stroke()}run=[]}
    for(let k=1;k<pts.length;k++){if((pts[k-1][2]>0)==front){if(!run.length)run.push(pts[k-1]);run.push(pts[k])}else flush()}flush();c.strokeStyle='#111'}
  band(false)
  // twirl lines round her feet
  if(fl){c.lineWidth=3;c.beginPath();c.ellipse(128,236,52,8,0,PI*.1,PI*.9);c.stroke();c.beginPath();c.ellipse(128,236,62,10,0,PI*1.15,PI*1.5);c.stroke()}
  // little wrapped feet and body
  c.fillStyle='#fff';c.lineWidth=5;for(const x of[112,144])c.beginPath(),c.ellipse(x,234,14,8,0,0,T),c.fill(),c.stroke()
  const body=()=>{c.beginPath();c.moveTo(104,142);c.quadraticCurveTo(92,190,98,232);c.lineTo(158,232);c.quadraticCurveTo(164,190,152,142);c.closePath()}
  c.lineWidth=6;body();c.fill();c.save();body();c.clip();wraps(c,88,170,150,232,11);c.restore();body();c.stroke()
  // arms: hands up to her cheeks when flustered, down at her sides otherwise
  for(const d of[-1,1]){const hx=128+d*(fl?34:42),hy=fl?112:196
    for(const[l,s]of[[20,'#111'],[12,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*22,152),c.quadraticCurveTo(128+d*48,fl?150:170,hx,hy),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(hx,hy,9,0,T);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(hx-6,hy-2);c.lineTo(hx+6,hy+2);c.stroke()}
  // head
  c.save();c.translate(128,92);c.scale(.6,.6);c.translate(-128,-120)
  // screentone twin buns poking out of the head wrap
  // screentone twin tails hanging from under the head wrap, tied off with bandage
  c.lineWidth=7;for(const d of[-1,1]){const tl=()=>{c.beginPath();c.moveTo(128+d*56,90);c.bezierCurveTo(128+d*104,100,128+d*108,170,128+d*96,204);c.quadraticCurveTo(128+d*76,180,128+d*48,120);c.closePath()}
    c.fillStyle='#fff';tl();c.fill();c.save();tl();c.clip();c.fillStyle=tn;c.fillRect(20,80,216,160);c.restore();tl();c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(128+d*52,96);c.lineTo(128+d*84,86);c.lineTo(128+d*86,106);c.lineTo(128+d*56,114);c.closePath();c.fillStyle='#fff';c.fill();c.stroke();c.lineWidth=7}
  c.fillStyle='#fff';c.beginPath();c.moveTo(66,150);c.bezierCurveTo(48,70,86,36,128,36);c.bezierCurveTo(170,36,208,70,190,150);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(40,30,180,130);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(fl){c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,128),c.lineTo(128+d*36,136),c.lineTo(128+d*14,144),c.stroke()}
  else{eye(c,103,134,-1);eye(c,153,134,1)}
  const bl=fl?6:3;c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<bl;k++)c.beginPath(),c.moveTo(128+d*(48-k*5)-3,166),c.lineTo(128+d*(48-k*5)+3,156),c.stroke()
  c.lineWidth=3.5;c.beginPath()
  if(fl){c.moveTo(116,170);for(let k=0;k<6;k++)c.lineTo(120+k*4,k%2?166:172)}else c.arc(128,164,5,.2*PI,.8*PI)
  c.stroke()
  if(fl){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(188,96);c.quadraticCurveTo(198,112,190,118);c.quadraticCurveTo(180,112,188,96);c.fill();c.stroke()}
  // bandage band across the forehead with a loose flap, and a patch on one cheek
  const fh=()=>{c.beginPath();c.moveTo(70,78);c.quadraticCurveTo(128,64,186,78);c.lineTo(188,104);c.quadraticCurveTo(128,90,68,104);c.closePath()}
  c.lineWidth=6;c.fillStyle='#fff';fh();c.fill();c.save();fh();c.clip();wraps(c,60,196,74,104,10);c.restore();fh();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(186,82);c.lineTo(212,70+6*sin(t*T*4));c.lineTo(210,90+6*sin(t*T*4));c.lineTo(188,98);c.fill();c.stroke()
  c.lineWidth=4;c.save();c.translate(156,160);c.rotate(-.3);c.beginPath();c.rect(-12,-5,24,10);c.fill();c.stroke();c.beginPath();c.moveTo(-4,-5);c.lineTo(-4,5);c.moveTo(4,-5);c.lineTo(4,5);c.lineWidth=2;c.stroke();c.restore()
  c.restore()
  band(true)
}
