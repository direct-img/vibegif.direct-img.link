// white-ponytailed swordswoman waits eyes shut as a petal falls, then a quick draw flashes and the petal drops in two halves
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=70,rim=4
const dots=(col,r)=>{const k=createCanvas(6,6),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[3,3],[0,0],[6,0],[0,6],[6,6]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.7),LITE=dots('#fff',1.2)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u)
const petal=c=>{c.beginPath();c.moveTo(0,12);c.bezierCurveTo(-12,4,-10,-10,-3,-12);c.lineTo(0,-8);c.lineTo(3,-12);c.bezierCurveTo(10,-10,12,4,0,12);c.closePath()}
const eye=(c,x,y,d,lt,o)=>{
  if(!o){c.lineWidth=6;c.beginPath();c.moveTo(x-14,y+2);c.quadraticCurveTo(x,y+10,x+14,y+2);c.moveTo(x+d*14,y+2);c.lineTo(x+d*19,y-1);c.stroke();return}
  c.save();c.beginPath();c.moveTo(x-16,y-4+d*2);c.lineTo(x+16,y-4-d*2);c.lineTo(x+16,y+20);c.lineTo(x-16,y+20);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+3,12,13,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+4,8,11,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-4,y+6,20,12)
  c.fillStyle='#fff';c.beginPath();c.arc(x+3,y,3.2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-14,y-4+d*2);c.lineTo(x+14,y-4-d*2);c.lineTo(x+d*19,y-8);c.stroke()
}
const blade=(c,b=1)=>{
  if(b){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(0,-4);c.lineTo(78,-6);c.quadraticCurveTo(88,-6,92,-2);c.quadraticCurveTo(84,2,76,3);c.lineTo(0,4);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;c.beginPath();c.moveTo(4,0);c.lineTo(80,-2);c.stroke()}
  c.fillStyle='#111';c.beginPath();c.ellipse(0,0,4,11,0,0,T);c.fill()
  c.beginPath();c.roundRect(-30,-5,28,10,4);c.fill();c.fillStyle='#fff';for(let j=0;j<3;j++)c.beginPath(),c.moveTo(-26+j*8,0),c.lineTo(-22+j*8,-3),c.lineTo(-18+j*8,0),c.lineTo(-22+j*8,3),c.fill()
}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat'),lt=c.createPattern(LITE,'repeat')
  const k=t<.45?0:t<.5?1:t<.72?1:1-ease((t-.72)/.2),open=t>=.45&&t<.9,flash=t>=.45&&t<.6
  const hx=165+7*k,hy=205-55*k,ha=-.42-.33*k
  if(flash){const f=1-(t-.45)/.15*.7;c.lineWidth=4;c.fillStyle='#fff';c.beginPath()
    for(let j=0;j<=20;j++){const u=j/20,a=.32-1.05*u;c.lineTo(70+156*cos(a),166+156*sin(a))}
    for(let j=20;j>=0;j--){const u=j/20,a=.32-1.05*u,r=156-18*f*sin(PI*u);c.lineTo(70+r*cos(a),166+r*sin(a))}
    c.closePath();c.fill();c.stroke()}
  const py=t<.45?14+112*t/.45:0,px=212+8*sin(t*T*2)
  if(t<.45){c.save();c.translate(px,py);c.rotate(.6*sin(t*T*3));c.lineWidth=3.5;c.fillStyle='#fff';petal(c);c.fill();c.stroke();c.restore()}
  else{const u=(t-.45)/.55,yy=126+100*u*u+20*u,s=1-u*.6
    for(const d of[-1,1]){c.save();c.translate(px-8*u+d*(5+22*u),yy+d*4*u);c.rotate(-.4+d*(.2+2*u));c.scale(s,s);c.beginPath();c.rect(d<0?-20:0,-20,20,40);c.clip();c.lineWidth=3.5;c.fillStyle='#fff';petal(c);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(0,-14);c.lineTo(0,14);c.stroke();c.restore()}}
  const sw=3*sin(t*T)+(t>=.45&&t<.72?8*sin((t-.45)/.27*PI):0)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(88,30);c.bezierCurveTo(40,24,24-sw,90,20-sw,170);c.quadraticCurveTo(30-sw,150,36-sw,190);c.quadraticCurveTo(46-sw,120,58,92);c.quadraticCurveTo(70,60,96,46);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(70,40);c.bezierCurveTo(44,60,34-sw,110,30-sw,160);c.moveTo(80,46);c.bezierCurveTo(58,80,48-sw,120,44-sw,150);c.stroke()
  c.lineWidth=6;c.fillStyle=tn;c.beginPath();c.moveTo(56,206);c.lineTo(40,256);c.lineTo(160,256);c.lineTo(150,206);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const x of[74,98,122,140])c.moveTo(x,210),c.lineTo(x-6,252);c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(78,150);c.quadraticCurveTo(46,158,46,214);c.lineTo(160,214);c.quadraticCurveTo(156,158,118,150);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(84,150);c.lineTo(112,196);c.lineTo(118,190);c.lineTo(94,150);c.closePath();c.fill();c.beginPath();c.moveTo(114,150);c.lineTo(100,174);c.lineTo(104,180);c.lineTo(120,152);c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(84,150);c.lineTo(114,198);c.moveTo(114,150);c.lineTo(98,176);c.stroke()
  c.fillStyle='#111';c.fillRect(48,200,112,10)
  c.save();c.translate(150,212);c.rotate(-.42);c.fillStyle='#111';c.beginPath();c.roundRect(-118,-6,118,12,6);c.fill();c.fillStyle='#fff';c.fillRect(-60,-6,4,12);c.restore()
  
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.rect(88,128,22,26);c.fill();c.beginPath();c.moveTo(88,128);c.lineTo(88,152);c.moveTo(110,128);c.lineTo(110,152);c.stroke()
  c.save();c.translate(98,92);c.scale(.66,.66);c.translate(-128,-128)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,106,138,-1,lt,open);eye(c,156,138,1,lt,open)
  c.lineWidth=4;c.beginPath();if(open)c.moveTo(130,170),c.lineTo(146,168);else c.moveTo(130,170),c.quadraticCurveTo(138,174,146,170);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,40,128,40);c.bezierCurveTo(168,40,202,74,186,150)
  c.quadraticCurveTo(186,118,180,104);c.quadraticCurveTo(176,108,170,118);c.quadraticCurveTo(164,100,150,92);c.quadraticCurveTo(148,106,140,116)
  c.quadraticCurveTo(134,98,124,90);c.quadraticCurveTo(118,104,112,112);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(90,108,84,118)
  c.quadraticCurveTo(80,108,78,106);c.quadraticCurveTo(68,124,70,150);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const[x0,y0,x1,y1]of[[110,50,96,92],[134,46,130,88],[158,54,160,92],[90,64,80,100],[176,72,180,104]])c.moveTo(x0,y0),c.quadraticCurveTo((x0+x1)/2+4,(y0+y1)/2,x1,y1);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(86,52,12,9,-.6,0,T);c.fill()
  c.restore()
  if(k<.5){c.save();c.translate(150,212);c.rotate(-.42);c.translate(32,0);blade(c,0);c.restore()}else{c.save();c.translate(hx,hy);c.rotate(ha);c.scale(.85,.85);c.translate(16,0);blade(c);c.restore()}
  for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(70,166),c.quadraticCurveTo(100+20*k,214-50*k,hx-4,hy+4),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,10,9,ha,0,T);c.fill();c.stroke()
}
