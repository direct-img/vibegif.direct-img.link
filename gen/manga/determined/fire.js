// fired-up girl with an ink high ponytail: fighting-spirit flames roar up behind her, fist pumped, flames burning in her eyes, shouting
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=80,rim=4
import{createCanvas}from'@napi-rs/canvas'
const DOT=(()=>{const t=createCanvas(6,6),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(3,3,1.6,0,T);x.fill();return t})()
// fire tongues: base point, tip point, width, phase; each is a hooked teardrop and they all merge into one blaze
const P=[[62,230,14,118,26,0],[72,206,30,56,28,.25],[98,180,72,18,30,.5],[128,170,128,4,32,.75],[158,180,184,18,30,.1],[184,206,226,56,28,.35],[194,230,242,118,26,.6]]
const blaze=(c,t,k)=>{c.beginPath();for(const[bx,by,tx,ty,w,o]of P){const sx=tx+8*sin(T*(2*t+o)),sy=ty+(1-k)*60+10*sin(T*(2*t+o)+1),W=w*k,h=by-sy,e=tx<128?-1:tx>128?1:0
  c.moveTo(bx-W,by);c.bezierCurveTo(bx-W,by-h*.5,sx-W*.7+e*10,sy+h*.35,sx,sy);c.bezierCurveTo(sx+W*.4,sy+h*.4,bx+W*1.1,by-h*.45,bx+W,by);c.closePath()}}
const flame=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+r*.9,y-r*.1,x+r*.5,y+r*.6);c.quadraticCurveTo(x,y+r*.9,x-r*.5,y+r*.6);c.quadraticCurveTo(x-r*.9,y-r*.1,x,y-r);c.closePath()}
export default(c,t)=>{
  c.lineWidth=14;blaze(c,t,1);c.stroke();c.fillStyle='#fff';c.fill()
  c.fillStyle=c.createPattern(DOT,'repeat');blaze(c,t+.15,.55);c.fill();c.lineWidth=3;c.stroke()
  c.lineWidth=6;c.strokeStyle='#111'
  const sw=.12*sin(T*t)
  c.save();c.translate(166,52);c.rotate(-.15+sw);c.fillStyle='#111';c.beginPath();c.moveTo(-4,-8);c.bezierCurveTo(40,-30,70,-10,84,-40);c.lineTo(80,-20);c.lineTo(92,-26);c.quadraticCurveTo(80,6,56,14);c.lineTo(62,22);c.quadraticCurveTo(30,30,0,16);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(14,-2);c.bezierCurveTo(34,-14,52,-8,68,-22);c.moveTo(16,8);c.bezierCurveTo(32,4,46,6,60,0);c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=6
  c.fillStyle='#111';c.beginPath();c.moveTo(72,152);c.bezierCurveTo(52,70,88,36,128,36);c.bezierCurveTo(168,36,204,70,184,152);c.closePath();c.fill()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(66,198,60,250);c.lineTo(196,250);c.quadraticCurveTo(190,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(96,190);c.lineTo(128,226);c.lineTo(160,190);c.lineTo(178,206);c.lineTo(128,240);c.lineTo(78,206);c.closePath();c.fill()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(128,226);c.lineTo(114,236);c.lineTo(118,250);c.lineTo(128,240);c.lineTo(138,250);c.lineTo(142,236);c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=142
    c.fillStyle='#fff';c.beginPath();c.moveTo(x-15,y-6);c.lineTo(x+15,y-6+d*0);c.quadraticCurveTo(x+14,y+16,x,y+16);c.quadraticCurveTo(x-14,y+16,x-15,y-6);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x,y+4,9,12,0,0,T);c.fill()
    c.fillStyle='#fff';flame(c,x,y+5,7+1.5*sin(T*(t*3)+d));c.fill()
    c.lineWidth=7;c.beginPath();c.moveTo(x-d*16,y-4);c.lineTo(x+d*16,y-9);c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(x+d*15,y-9);c.lineTo(x+d*21,y-14);c.stroke()
    c.fillStyle='#111';c.beginPath();c.moveTo(x-d*12,y-16);c.lineTo(x+d*14,y-26);c.lineTo(x+d*16,y-20);c.lineTo(x-d*10,y-11);c.closePath();c.fill()}
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,157);c.lineTo(127,160);c.stroke()
  const m=4*sin(2*T*t)
  c.fillStyle='#111';c.lineWidth=3.5;c.beginPath();c.moveTo(114,166);c.lineTo(142,166);c.quadraticCurveTo(140,182+m,128,182+m);c.quadraticCurveTo(116,182+m,114,166);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(117,167,22,4);c.fill()
  c.fillStyle='#111';c.beginPath();c.moveTo(66,154);c.bezierCurveTo(52,74,88,38,128,38);c.bezierCurveTo(168,38,204,74,190,154);c.quadraticCurveTo(186,118,178,104);c.lineTo(170,116);c.lineTo(164,100);c.lineTo(152,116);c.lineTo(144,98);c.lineTo(132,114);c.lineTo(124,96);c.lineTo(112,114);c.lineTo(104,98);c.lineTo(92,116);c.lineTo(86,102);c.lineTo(78,114);c.quadraticCurveTo(70,128,66,154);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(128,110,58,PI*1.25,PI*1.42);c.stroke();c.beginPath();c.arc(128,110,58,PI*1.55,PI*1.72);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(158,52,14,12,4);c.fill();c.stroke()
  const fy=-8*max(0,sin(2*T*t))
  for(const[l,s]of[[30,'#111'],[19,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(178,252),c.quadraticCurveTo(204,232,206,186+fy),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(186,150+fy,40,40,12);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const y of[160,170,180])c.moveTo(190,y+fy),c.lineTo(212,y+fy);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(188,158+fy);c.quadraticCurveTo(206,164+fy,214,182+fy);c.stroke()
  if(fy<-3)for(const[x0,y0,x1,y1]of[[232,150,244,142],[236,166,248,166],[230,182,242,190]])for(const[l,s]of[[8,'#fff'],[4,'#111']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,y0+fy),c.lineTo(x1,y1+fy),c.stroke()
}
