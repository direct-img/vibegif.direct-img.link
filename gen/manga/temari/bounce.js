// manga zashiki-warashi: chibi child with an ink okappa bob and a flower-print kimono, bouncing an embroidered temari ball twice per loop
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs,max,min}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
// round child eye: big ink iris, two big highlights, short lashes
const eye=(c,x,y,d,lx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,16,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,y+2,10.5,13,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+lx-3,y-3,4.8,0,T);c.fill();c.beginPath();c.arc(x+lx+4,y+7,2.5,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-19,x+16,y-6);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(x+d*14,y-9);c.lineTo(x+d*19,y-14);c.stroke()
}
// temari: white ball with a toned band, crossing thread stars and a center flower
const ball=(c,x,y,r,sq,tn,rot)=>{
  c.save();c.translate(x,y);c.scale(1+sq,1-sq);c.rotate(rot)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,0,r,0,T);c.fill()
  // kiku stitching: alternating toned and white wedges, then a white ring of thread round the middle
  c.save();c.clip();c.fillStyle=tn;for(let k=0;k<8;k+=2){c.beginPath();c.moveTo(0,0);c.arc(0,0,r,k*PI/4,(k+1)*PI/4);c.fill()}
  c.lineWidth=2;c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4;c.moveTo(0,0);c.lineTo(r*cos(a),r*sin(a))}c.stroke()
  c.restore();c.beginPath();c.arc(0,0,r,0,T);c.stroke();c.lineWidth=2.5;c.fillStyle='#fff';c.beginPath();c.arc(0,0,r*.55,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();for(let k=0;k<10;k++){const a=k*PI/5,q=k%2?3:7;c.lineTo(q*cos(a),q*sin(a))}c.closePath();c.fill()
  c.restore()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  // ball: hand on top at the peak, floor at the bottom, squashed on contact
  const ph=abs(sin(2*PI*t)),r=17,by=226-88*ph,sq=ph<.12?.18*(1-ph/.12):0,bx=184
  const hy=min(by-r-4,118+10*(1-ph)),look=(1-ph)*3
  // floor shadows
  c.fillStyle=tn;c.lineWidth=3;c.beginPath();c.ellipse(112,244,50,7,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(bx,244,12+8*(1-ph),4,0,0,T);c.fill();c.stroke()
  // little zori feet
  c.fillStyle='#fff';c.lineWidth=4;for(const x of[96,126])c.beginPath(),c.ellipse(x,240,13,6,0,0,T),c.fill(),c.stroke()
  // kimono: toned with a scatter of white five-petal flowers, white obi with a bow behind
  const kim=()=>{c.beginPath();c.moveTo(94,134);c.quadraticCurveTo(80,170,76,236);c.lineTo(146,236);c.quadraticCurveTo(142,170,130,134);c.closePath()}
  c.lineWidth=6;c.fillStyle='#fff';kim();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(70,130,90,110)
  c.fillStyle='#fff';c.lineWidth=2;for(const[x,y]of[[90,200],[118,214],[132,184],[100,226],[86,170]]){for(let k=0;k<5;k++){const a=k*T/5;c.beginPath();c.arc(x+4*cos(a),y+4*sin(a),3,0,T);c.fill();c.stroke()}c.fillStyle='#111';c.beginPath();c.arc(x,y,1.5,0,T);c.fill();c.fillStyle='#fff'}
  c.restore();c.lineWidth=6;kim();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(98,136);c.lineTo(112,160);c.lineTo(126,136);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(84,166);c.lineTo(140,166);c.lineTo(141,180);c.lineTo(83,180);c.closePath();c.fill();c.stroke()
  // left sleeve hanging, hand tucked
  c.beginPath();c.moveTo(94,140);c.quadraticCurveTo(68,150,64,192);c.lineTo(88,194);c.quadraticCurveTo(90,168,98,156);c.closePath();c.fillStyle='#fff';c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(60,136,40,60);c.restore();c.stroke()
  // right arm reaching over to pat the ball, wide sleeve swinging under it
  const hx=bx-2
  for(const[l,s]of[[22,'#111'],[13,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128,146),c.quadraticCurveTo(160,148,hx-4,hy+2),c.stroke()
  c.strokeStyle='#111'
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(134,144);c.quadraticCurveTo(150,150,152,176);c.quadraticCurveTo(140,180,130,168);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(128,140,30,42);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,10,7,0,0,T);c.fill();c.stroke()
  ball(c,bx,by,r,sq,tn,t*T)
  // head: ink okappa with a blunt fringe and a white ribbon
  c.save();c.translate(112,86);c.scale(.6,.6);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(62,170);c.bezierCurveTo(42,70,86,30,128,30);c.bezierCurveTo(170,30,214,70,194,170);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,136,-1,look);eye(c,153,136,1,look)
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#111';c.beginPath();c.moveTo(118,164);c.quadraticCurveTo(128,176,138,164);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(66,140);c.bezierCurveTo(56,70,90,40,128,40);c.bezierCurveTo(166,40,200,70,190,140);c.lineTo(184,140);c.lineTo(182,108);c.lineTo(74,108);c.lineTo(72,140);c.closePath();c.fill()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(128,110,58,PI*1.25,PI*1.42);c.stroke();c.beginPath();c.arc(128,110,58,PI*1.52,PI*1.7);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(170,52),c.quadraticCurveTo(170+d*22,40-6,170+d*26,58),c.quadraticCurveTo(170+d*14,62,170,52),c.fill(),c.stroke()
  c.beginPath();c.arc(170,52,6,0,T);c.fill();c.stroke()
  c.restore()
}
