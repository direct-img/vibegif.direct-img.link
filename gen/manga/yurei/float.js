// manga yurei girl in a white kimono bobbing in the air, hands drooping, wispy tail for feet, three hitodama flames circling her
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,round,atan2}=Math,T=2*PI
export const frames=16,delay=90,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+4,11,13,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-10,24,28);c.fillStyle='#111';c.fillRect(x-12,y-10,24,9);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+4,11,13,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+5,5,6.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-4,y,4,5,-.4,0,T);c.fill();c.beginPath();c.arc(x+4,y+10,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-2);c.quadraticCurveTo(x,y-9,x+16,y-2);c.moveTo(x+d*15,y-2);c.lineTo(x+d*20,y+4);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-6,y+20);c.lineTo(x+6,y+20);c.stroke()
}
// hitodama: a glowing round head with a long wavy dotted tail trailing behind it
const flame=(c,x,y,a,s,tn,w)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  c.beginPath();c.arc(0,0,10,-PI/2,PI/2);c.bezierCurveTo(-12,10,-20,8+w,-30,4+w);c.quadraticCurveTo(-38,1+w,-46,-2-w);c.quadraticCurveTo(-34,-6-w,-26,-8);c.bezierCurveTo(-16,-10,-8,-10,0,-10);c.closePath()
  c.fillStyle='#fff';c.lineWidth=3.5/s;c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=tn;c.fillRect(-48,-14,50,30);c.restore()
  c.fillStyle='#fff';c.lineWidth=2.5/s;c.beginPath();c.arc(1,0,6,0,T);c.fill();c.stroke()
  c.restore()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),b=round(5*sin(t*T)),w=sin(t*T*2)
  const orb=k=>{const a=t*T+k*T/3;return[a,128+96*cos(a),150+22*sin(a)+b,sin(a)]}
  const fl=k=>{const[a,x,y,z]=orb(k);flame(c,x,y,atan2(22*cos(a),-96*sin(a)),.95+.2*z,tn,3*sin(t*T*4+k))}
  for(const k of[0,1,2])if(orb(k)[3]<0)fl(k)
  c.save();c.translate(0,b);c.translate(128,134);c.scale(1.12,1.12);c.translate(-128,-134)
  // long hair behind
  c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.moveTo(128,30);c.bezierCurveTo(70,30,68,80,74,120)
  c.bezierCurveTo(78,160,66,180,62+3*w,200);c.quadraticCurveTo(80,192,92,200);c.lineTo(164,200);c.quadraticCurveTo(176,192,194-3*w,200)
  c.bezierCurveTo(190,180,178,160,182,120);c.bezierCurveTo(188,80,186,30,128,30);c.fill();c.stroke()
  // kimono body tapering into a wispy tail
  const tl=10*sin(t*T)
  c.fillStyle='#fff';c.beginPath();c.moveTo(110,120);c.quadraticCurveTo(88,128,88,160);c.quadraticCurveTo(90,192,106,208)
  c.bezierCurveTo(118,222,138+tl,226,148+tl*1.4,242);c.bezierCurveTo(156+tl,226,166,212,168,194)
  c.quadraticCurveTo(170,166,168,152);c.quadraticCurveTo(166,126,146,120);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=tn;c.beginPath();c.moveTo(150,186);c.quadraticCurveTo(170,200,156+tl,240);c.lineTo(200,240);c.lineTo(200,186);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.moveTo(120,210);c.quadraticCurveTo(134,218,142+tl*.6,232);c.stroke()
  // collar, crossed left over right
  c.beginPath();c.moveTo(114,121);c.lineTo(134,152);c.moveTo(142,121);c.lineTo(128,142);c.stroke()
  // obi
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(92,170);c.quadraticCurveTo(128,176,166,170);c.lineTo(166,184);c.quadraticCurveTo(128,190,94,184);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=tn;c.fillRect(80,160,100,30);c.restore()
  // furisode sleeves hanging from the forearms, hands drooping at the wrists in front of the chest
  for(const d of[-1,1]){
    c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(128+d*30,124);c.quadraticCurveTo(128+d*46,132,128+d*48,150);c.lineTo(128+d*46,190+2*w*d)
    c.quadraticCurveTo(128+d*32,196+2*w*d,128+d*18,188+2*w*d);c.lineTo(128+d*12,150);c.quadraticCurveTo(128+d*18,136,128+d*30,124);c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(128+d*38,160);c.quadraticCurveTo(128+d*40,176,128+d*36,186+2*w*d);c.stroke()
    const hx=128+d*10,hy=150
    c.lineWidth=3;c.beginPath();c.moveTo(hx+d*4,hy-6);c.quadraticCurveTo(hx-d*8,hy-6,hx-d*7,hy+6);c.quadraticCurveTo(hx-d*6,hy+16,hx-d*1,hy+17);c.quadraticCurveTo(hx+d*2,hy+10,hx+d*4,hy+6);c.closePath();c.fill();c.stroke()
    c.lineWidth=1.8;c.beginPath();c.moveTo(hx-d*4,hy+6);c.lineTo(hx-d*3,hy+14);c.stroke()
  }
  // head
  c.save();c.translate(128,84);c.scale(.6,.6);c.translate(-128,-120)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,136,-1,tn);eye(c,153,136,1,tn)
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.ellipse(128,171,5,6+w,0,0,T);c.stroke()
  // straight hime bangs, ink black with a shine band
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(72,150);c.bezierCurveTo(54,70,88,38,128,38);c.bezierCurveTo(168,38,202,70,184,150)
  c.lineTo(180,112);c.lineTo(76,112);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;for(const[a,e]of[[1.3,1.44],[1.52,1.62],[1.68,1.74]])c.beginPath(),c.arc(128,112,52,PI*a,PI*e),c.stroke()
  c.lineWidth=2.5;for(const x of[100,118,138,156])c.beginPath(),c.moveTo(x,84),c.lineTo(x-1,108),c.stroke();c.strokeStyle='#111'
  // tenkan triangle on the forehead
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(112,100);c.lineTo(144,100);c.lineTo(128,74);c.closePath();c.fill();c.stroke()
  c.restore()
  c.restore()
  for(const k of[0,1,2])if(orb(k)[3]>=0)fl(k)
}
