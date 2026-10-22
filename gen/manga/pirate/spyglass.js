// manga pirate captain with an eye patch and wavy ink hair: lifts her spyglass to her eye, extends it, scans, spots something, collapses and lowers it; coat and hair whipping in the wind
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x+2,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-14,28,32);c.fillStyle='#111';c.fillRect(x-12,y-14,28,13);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x+2,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+2,y+3,4.5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-2,y-5,4.5,5.5,-.4,0,T);c.fill();c.beginPath();c.arc(x+6,y+8,2.2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-6);c.quadraticCurveTo(x,y-21,x+17,y-6);c.moveTo(x+d*16,y-7);c.lineTo(x+d*23,y-12);c.moveTo(x+d*17,y-2);c.lineTo(x+d*23,y-3);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+19);c.lineTo(x+8,y+19);c.stroke()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),w=sin(t*T*2),spot=t>.5&&t<.66
  // lift: spyglass from her chest up to her eye and back; ex: segments slide out only while it's up
  const lf=ease((t-.08)/.12)-ease((t-.8)/.12),ex=ease((t-.22)/.12)-ease((t-.68)/.1),sa0=-.28+.1*sin((t-.34)/.34*T)*(t>.34&&t<.68)
  const H=f=>{c.save();c.translate(108,98);c.scale(.62,.62);c.translate(-128,-120);f();c.restore()}
  // wavy ink hair streaming left behind
  H(()=>{c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(128,50);c.bezierCurveTo(60,40,40,100,36,150)
    for(const[x,y,k]of[[-6+8*w,170,0],[18,190,1],[-20+10*w,214,2],[30,226,3],[80,230,4]])c.quadraticCurveTo(x+20,y-20+4*sin(t*T*2+k),x,y)
    c.lineTo(180,200);c.bezierCurveTo(196,140,190,50,128,50);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(60,110);c.quadraticCurveTo(30,150,10+6*w,170);c.moveTo(70,150);c.quadraticCurveTo(46,190,0+8*w,212);c.stroke();c.strokeStyle='#111'})
  // coat with flapping tails, screentone, big white cuffs and a jabot
  const ct=()=>{c.beginPath();c.moveTo(92,156);c.quadraticCurveTo(64,170,60,206);c.quadraticCurveTo(40,226+6*w,22+8*w,246+4*w);c.quadraticCurveTo(50,242,64,252);c.lineTo(168,252);c.quadraticCurveTo(164,176,128,156);c.closePath()}
  c.lineWidth=5;c.fillStyle='#fff';ct();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(0,150,180,110);c.restore();ct();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(60,206);c.quadraticCurveTo(44,228,34+7*w,242);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(96,158);c.lineTo(110,252);c.lineTo(132,252);c.lineTo(126,158);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(112,160);for(let y=160,k=0;y<230;y+=10,k++)c.quadraticCurveTo(k%2?98:126,y+5,112,y+10);c.lineTo(112,160);c.fill();c.lineWidth=3;c.stroke()
  c.beginPath();c.moveTo(112,166);c.lineTo(112,226);c.stroke()
  c.fillStyle='#111';for(const y of[214,232])c.beginPath(),c.arc(140,y,4,0,T),c.fill()
  // head
  H(()=>{
    c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    // eye patch over her left eye, strap across the forehead
    c.lineWidth=3;c.beginPath();c.moveTo(74,112);c.lineTo(96,134);c.moveTo(112,130);c.lineTo(182,104);c.stroke()
    c.fillStyle='#111';c.beginPath();c.ellipse(104,141,12,10,-.2,0,T);c.fill()
    // her uncovered eye, big and bright; the eyepiece covers it while she looks
    eye(c,153,140,1,tn)
    // grin and blush
    c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(112,168);c.quadraticCurveTo(128,184,146,166);c.quadraticCurveTo(128,172,112,168);c.closePath();c.fill();c.stroke()
    c.lineWidth=3;for(const x of[85,171])for(const k of[-5,1,7])c.beginPath(),c.moveTo(x+k-3,170),c.lineTo(x+k+3,162),c.stroke()
    // wavy ink bangs
    c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,74,86,44,128,44);c.bezierCurveTo(170,44,204,74,186,150);c.quadraticCurveTo(184,118,176,104)
    c.quadraticCurveTo(168,110,160,108);c.quadraticCurveTo(158,94,146,88);c.quadraticCurveTo(138,104,128,108);c.quadraticCurveTo(118,96,108,90);c.quadraticCurveTo(102,106,92,110);c.quadraticCurveTo(84,104,80,100);c.quadraticCurveTo(72,120,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;for(const[a,e]of[[1.34,1.46],[1.54,1.64]])c.beginPath(),c.arc(128,110,52,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
    // tricorn hat with skull and crossbones
    const hat=()=>{c.beginPath();c.moveTo(40,82);c.quadraticCurveTo(70,66,84,40);c.quadraticCurveTo(128,4,172,40);c.quadraticCurveTo(186,66,216,82);c.quadraticCurveTo(170,74,128,86);c.quadraticCurveTo(86,74,40,82);c.closePath()}
    c.lineWidth=7;c.fillStyle='#111';hat();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(48,80);c.quadraticCurveTo(86,70,128,80);c.quadraticCurveTo(170,70,208,80);c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(114,44);c.lineTo(142,66);c.moveTo(142,44);c.lineTo(114,66);c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(128,46,9,0,T);c.fill();c.fillRect(123,50,10,7);c.fillStyle='#111';c.beginPath();c.arc(124.5,46,2.5,0,T);c.arc(131.5,46,2.5,0,T);c.fill()
    c.strokeStyle='#111'
  })
  // spyglass from her right eye, segments sliding out
  const ey=[156-38*lf,178-68*lf],L=[34,30*ex,26*ex],sa=-.95+(.95+sa0)*lf
  c.save();c.translate(...ey);c.rotate(sa)
  let x=4;const seg=[[34,13,true],[30,10.5,false],[26,8,false]]
  for(let k=2;k>=0;k--){const o=4+L.slice(0,k).reduce((a,b)=>a+b,0)-(k?6:0),[l,r,tone]=seg[k];if(k&&!ex)continue
    c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.rect(o,-r,l,2*r);c.fill();if(tone){c.save();c.clip();c.fillStyle=tn;c.fillRect(o,0,l,r);c.restore()}c.stroke()
    c.lineWidth=3;c.beginPath();c.moveTo(o+l-3,-r-2);c.lineTo(o+l-3,r+2);c.stroke()}
  const tip=4+L[0]+L[1]+L[2]-(ex?12:0)
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.ellipse(tip+(ex?0:0),0,4,ex?9:13,0,0,T);c.fill();c.stroke()
  c.restore()
  // hand on the scope
  const hp=[ey[0]+30*cos(sa),ey[1]+30*sin(sa)+12]
  for(const[l,s]of[[20,'#111'],[11,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(132,172),c.quadraticCurveTo(170,186-14*lf,hp[0],hp[1]),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.ellipse(hp[0],hp[1]-2,10,9,0,0,T);c.fill();c.stroke()
  // she spotted something
  if(spot){const g=min(1,(t-.55)/.06);c.lineWidth=4;c.fillStyle='#fff';c.save();c.translate(178,40);c.scale(1.35*g,1.35*g);c.beginPath();c.moveTo(-5,-20);c.lineTo(5,-20);c.lineTo(2,4);c.lineTo(-2,4);c.closePath();c.fill();c.stroke();c.beginPath();c.arc(0,12,4.5,0,T);c.fill();c.stroke()
    c.lineWidth=3;for(const a of[-2.6,-.5])c.beginPath(),c.moveTo(cos(a)*16,sin(a)*16-4),c.lineTo(cos(a)*24,sin(a)*24-4),c.stroke();c.restore()}
}
