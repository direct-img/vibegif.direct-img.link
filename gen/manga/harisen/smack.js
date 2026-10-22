// tsukkomi girl with white twin tails winds up a paper fan, trembling with an anger mark, then smacks it down into a burst
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const dots=(col,r)=>{const k=createCanvas(6,6),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[3,3],[0,0],[6,0],[0,6],[6,6]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.3),LITE=dots('#fff',1.3)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u)
const eye=(c,x,y,d,L)=>{
  c.save();c.beginPath();c.moveTo(x-16,y-6+d*3);c.lineTo(x+16,y-6-d*3);c.lineTo(x+16,y+20);c.lineTo(x-16,y+20);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,12,13,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+2,10,13,0,0,T);c.fill();c.fillStyle=L;c.fillRect(x-6,y+4,20,12)
  c.fillStyle='#fff';c.beginPath();c.arc(x+1,y-2,3.5,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-14,y-6+d*3);c.lineTo(x+14,y-6-d*3);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(x-12,y-21+d*5);c.lineTo(x+12,y-21-d*5);c.stroke()
}
const fan=c=>{
  c.fillStyle='#fff';c.beginPath();c.moveTo(-7,16);c.lineTo(7,16);c.lineTo(8,-18);c.lineTo(20,-74);c.lineTo(-20,-74);c.lineTo(-8,-18);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.fillRect(-8,-2,16,10)
  c.lineWidth=2.5;c.beginPath();for(let k=-3;k<=3;k++)c.moveTo(k*1.2,-18),c.lineTo(k*6,-74);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(-20,-74);c.lineTo(20,-74);c.stroke()
}
const burst=(c,x,y,R,n=12)=>{c.beginPath();for(let k=0;k<n*2;k++){const r=k%2?R*.5:R*(k%4?1:.8),a=k*PI/n;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath()}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat'),lt=c.createPattern(LITE,'repeat')
  const a=t<.4?-1.25:t<.5?-1.25+2.6*ease((t-.4)/.1):t<.75?1.35:1.35-2.6*ease((t-.75)/.25),k=(a+1.25)/2.6,hit=t>=.5&&t<.75
  const sh=t<.4?1.5*sin(t*T*10):0,hx=170+sh-22*k,hy=78+50*k,front=1
  const arm=()=>{
    for(const[l,s]of[[26,'#111'],[15,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(116,200),c.quadraticCurveTo(150+10*k,150-10*k,hx,hy+8),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.save();c.translate(hx,hy);c.rotate(a);fan(c);c.restore()
    c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy+4,11,10,a,0,T);c.fill();c.stroke()
  }
  if(t>=.4&&t<.5){c.lineWidth=3;for(const r of[52,64,76])c.beginPath(),c.arc(hx,hy,r,-PI/2-1.25,-PI/2+a-.3),c.stroke()}
  if(hit){
    const p=(t-.5)/.25,R=22*(1.1-.4*p),bx=hx+70*sin(a),by=hy-70*cos(a)
    c.lineWidth=4;for(let j=0;j<8;j++){const b=j*PI/4+.4;c.beginPath();c.moveTo(bx+cos(b)*(R+5),by+sin(b)*(R+5));c.lineTo(bx+cos(b)*(R+13-5*p),by+sin(b)*(R+13-5*p));c.stroke()}
    c.lineWidth=5;c.fillStyle='#fff';burst(c,bx,by,R);c.fill();c.stroke();c.fillStyle=tn;burst(c,bx,by,R*.55,8);c.fill()
  }
  c.save();c.translate(80,128);c.scale(.86,.86);c.translate(-128,-128)
  c.lineWidth=6;c.fillStyle='#fff'
  for(const d of[-1,1]){const w=d*4*sin(t*T+d);c.beginPath();c.moveTo(128+d*54,64);c.bezierCurveTo(128+d*84,60,128+d*(84+w),140,128+d*(72+w),218);c.quadraticCurveTo(128+d*(60+w),206,128+d*58,160);c.quadraticCurveTo(128+d*58,110,128+d*50,80);c.closePath();c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(128+d*64,84);c.quadraticCurveTo(128+d*(76+w),150,128+d*(70+w),204);c.moveTo(128+d*72,80);c.quadraticCurveTo(128+d*(80+w),130,128+d*(78+w),170);c.stroke();c.lineWidth=6}
  c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,276);c.lineTo(202,276);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=tn;c.beginPath();c.moveTo(102,190);c.quadraticCurveTo(72,198,62,234);c.lineTo(104,226);c.lineTo(128,240);c.lineTo(152,226);c.lineTo(194,234);c.quadraticCurveTo(184,198,154,190);c.lineTo(128,226);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(70,228);c.lineTo(104,220);c.lineTo(128,233);c.lineTo(152,220);c.lineTo(186,228);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';c.beginPath();c.moveTo(128,226);c.lineTo(110,252);c.lineTo(122,258);c.lineTo(128,236);c.lineTo(134,258);c.lineTo(146,252);c.closePath();c.fill()
  c.fillStyle='#fff';c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,224);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.lineTo(128,224);c.lineTo(140,192);c.lineTo(140,168);c.stroke()
  c.restore()
  c.save();c.translate(80,128);c.scale(.86,.86);c.translate(-128,-128)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,106,140,-1,lt);eye(c,154,140,1,lt)
  c.lineWidth=2.5;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+j-3,166),c.lineTo(128+d*42+j+3,158),c.stroke()
  const m=hit?1:.6+.1*sin(t*T*10);c.lineWidth=4;c.fillStyle='#111';c.beginPath();c.moveTo(122,163);c.quadraticCurveTo(136,161,146,163);c.quadraticCurveTo(142,163+16*m,132,163+16*m);c.quadraticCurveTo(122,163+12*m,122,163);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=lt;c.beginPath();c.ellipse(134,166+16*m,10,6,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.rect(126,163,14,4);c.fill()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,40,128,40);c.bezierCurveTo(168,40,202,74,186,150)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(172,108,166,114);c.quadraticCurveTo(160,100,148,94);c.quadraticCurveTo(144,106,136,112)
  c.quadraticCurveTo(130,100,120,94);c.quadraticCurveTo(116,106,108,112);c.quadraticCurveTo(102,98,94,96);c.quadraticCurveTo(90,106,86,114)
  c.quadraticCurveTo(80,106,78,104);c.quadraticCurveTo(70,124,70,150);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const[x0,y0,x1,y1]of[[110,52,98,90],[132,48,128,88],[152,54,150,88],[92,64,82,100],[170,70,172,100]])c.moveTo(x0,y0),c.quadraticCurveTo((x0+x1)/2+4,(y0+y1)/2,x1,y1);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*54,70,8,13,d*.4,0,T),c.fill()
  const v=1+.18*sin(t*T*4)*(t<.5?1:0)+(hit?.25:0);c.save();c.translate(80,62);c.scale(v,v);c.lineWidth=4.5
  for(let j=0;j<4;j++){c.rotate(PI/2);c.beginPath();c.moveTo(3,-13);c.quadraticCurveTo(3,-3,13,-3);c.stroke()}
  c.restore()
  c.restore()
  if(front)arm()
}
