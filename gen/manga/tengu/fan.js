// manga tengu girl with a white wolf cut, tokin cap and a crow mask on the side of her head, little black wings flapping as she waves her feather fan and gust curls blow off it
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
// sharp, confident eye: flat heavy lid, ink iris with a toned bottom
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.moveTo(x-15,y-5);c.lineTo(x+15,y-5);c.quadraticCurveTo(x+14,y+15,x,y+16);c.quadraticCurveTo(x-14,y+15,x-15,y-5);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x-d*2,y+5,10,13,0,0,T);c.fillStyle='#111';c.fill();c.fillStyle=tn;c.beginPath();c.ellipse(x-d*2,y+11,8,6,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-d*2-4,y+1,3.5,4.5,-.4,0,T);c.fill();c.beginPath();c.arc(x-d*2+4,y+11,1.8,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-d*16,y-3);c.lineTo(x+d*14,y-7);c.lineTo(x+d*21,y-11);c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(x-d*14,y-18);c.lineTo(x+d*12,y-22);c.stroke()
}
// a wind curl: a short tail then a spiral rolling up and in
const curl=(c,x,y,s)=>{c.beginPath();c.moveTo(x-2.4*s,y+s);c.lineTo(x,y+s);for(let k=1;k<=24;k++){const a=PI/2-k*.33,r=s*(1-.03*k);c.lineTo(x+r*cos(a),y+r*sin(a))}c.stroke()}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),fw=sin(2*T*t),wf=.13*sin(2*T*t+1)
  c.lineWidth=3.5
  for(let k=0;k<3;k++){const p=(2*t+k/3)%1,s=3+9*sin(PI*p);curl(c,200+32*p,112+k*32+6*sin(T*p),s)}
  c.save();c.translate(108,166);c.scale(.76,.76);c.translate(-128,-140)
  // little crow wings behind the shoulders
  for(const d of[-1,1]){
    c.save();c.translate(128+d*30,196);c.rotate(d*(wf-.05));c.scale(.8,.8)
    c.fillStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*20,-60,d*56,-108,d*98,-122)
    for(const[x,y]of[[100,-92],[96,-64],[84,-40],[66,-20],[44,-6],[20,4]])c.quadraticCurveTo(d*(x+14),y-16,d*x,y)
    c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();for(const[x,y]of[[96,-92],[90,-64],[78,-40],[60,-20],[40,-6]])c.moveTo(d*x*.4,y*.5-24),c.lineTo(d*(x-6),y-8);c.stroke();c.strokeStyle='#111'
    c.restore()
  }
  // white wolf-cut hair behind, layered spiky tips at the shoulders
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,38);c.bezierCurveTo(60,38,52,100,62,150)
  for(const[x,y]of[[54,178],[72,170],[74,196],[94,184]])c.lineTo(x,y)
  c.lineTo(162,184);for(const[x,y]of[[182,196],[184,170],[202,178],[194,150]])c.lineTo(x,y)
  c.bezierCurveTo(204,100,196,38,128,38);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const d of[-1,1])c.moveTo(128+d*58,130),c.lineTo(128+d*66,170),c.moveTo(128+d*48,150),c.lineTo(128+d*50,182);c.stroke()
  // yamabushi top: toned side panels, crossed collar, ink pom-poms
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,186);c.quadraticCurveTo(64,196,56,252);c.lineTo(200,252);c.quadraticCurveTo(192,196,156,186);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle=tn;c.beginPath();c.moveTo(50,252);c.lineTo(100,188);c.lineTo(116,252);c.fill();c.beginPath();c.moveTo(206,252);c.lineTo(156,188);c.lineTo(140,252);c.fill();c.restore();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(104,188);c.lineTo(128,224);c.lineTo(152,188);c.stroke()
  for(const x of[108,148]){c.fillStyle='#111';c.lineWidth=3;c.beginPath();c.arc(x,232,10,0,T);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x-3,228,3,0,T);c.fill()}
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  // face
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,138,-1,tn);eye(c,153,138,1,tn)
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-3,166),c.lineTo(128+d*44+k+3,158),c.stroke()
  // smirk with a fang
  c.lineWidth=3.5;c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(130,174,140,164);c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(131,171);c.lineTo(134,177);c.lineTo(136,169);c.fill();c.stroke()
  // spiky white bangs
  c.lineWidth=6;c.beginPath();c.moveTo(70,146);c.bezierCurveTo(52,74,88,40,128,40);c.bezierCurveTo(168,40,204,74,186,146)
  for(const[x,y]of[[180,102],[170,118],[160,94],[148,116],[138,92],[126,118],[114,92],[104,116],[94,96],[86,118],[78,102]])c.lineTo(x,y)
  c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const[a,b,e,f]of[[104,56,96,92],[124,50,120,88],[150,52,158,90],[170,64,178,98]])c.moveTo(a,b),c.lineTo(e,f);c.stroke()
  // tokin cap on the forehead, tied on with a cord
  c.lineWidth=3;c.beginPath();c.moveTo(108,60);c.quadraticCurveTo(84,70,78,90);c.moveTo(148,60);c.quadraticCurveTo(172,70,178,90);c.stroke()
  c.save();c.translate(128,52);c.fillStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(-15,9);c.lineTo(-17,-4);c.lineTo(-7,-15);c.lineTo(7,-15);c.lineTo(17,-4);c.lineTo(15,9);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(-12,-2);c.lineTo(12,-2);c.moveTo(0,-12);c.lineTo(0,7);c.stroke();c.strokeStyle='#111';c.restore()
  // crow mask pushed to the side of her head
  c.save();c.translate(70,90);c.rotate(-.4)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(0,0,16,20,0,0,T);c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(-16,-20,32,40);c.restore();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-6,0);c.lineTo(-32,12);c.lineTo(-4,13);c.closePath();c.fill();c.stroke()
  for(const x of[-5,7])c.beginPath(),c.ellipse(x,-6,4,2.5,0,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(-12,-14);c.lineTo(-1,-10);c.moveTo(13,-14);c.lineTo(3,-10);c.stroke()
  c.restore()
  // fan arm: wide sleeve out to the hand, a fan of seven long feathers pivoting at the wrist
  for(const[l,s]of[[30,'#111'],[20,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(160,212),c.quadraticCurveTo(196,212,204,178),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(204,170);c.rotate(.5+.45*fw)
  c.lineWidth=7;c.beginPath();c.moveTo(0,8);c.lineTo(0,-22);c.stroke()
  for(let k=-3;k<=3;k++){
    c.save();c.translate(0,-20);c.rotate(k*.2);c.fillStyle='#fff';c.lineWidth=4
    c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(-13,-40,0,-74);c.quadraticCurveTo(13,-40,0,0);c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(-14,-76,28,22);c.restore();c.stroke()
    c.lineWidth=2;c.beginPath();c.moveTo(0,-4);c.lineTo(0,-64);c.stroke();c.restore()
  }
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,-20,7,0,T);c.fill();c.stroke()
  c.restore()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(204,174,12,11,0,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(198,170);c.lineTo(208,168);c.moveTo(198,176);c.lineTo(208,174);c.stroke()
  c.restore()
}
