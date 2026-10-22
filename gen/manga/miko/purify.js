// shrine maiden with long ink-black hair waves her gohei side to side, paper streamers fluttering and sparkles popping
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const dots=(col,r,s=6)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.6)
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+r*.15,y-r*.15,x+r,y);c.quadraticCurveTo(x+r*.15,y+r*.15,x,y+r);c.quadraticCurveTo(x-r*.15,y+r*.15,x-r,y);c.quadraticCurveTo(x-r*.15,y-r*.15,x,y-r);c.fill();c.stroke()}
const shide=(c,a)=>{c.save();c.rotate(a);c.lineJoin='miter';for(const[l,s]of[[15,'#111'],[8,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(0,0);for(let k=1;k<=4;k++)c.lineTo(k%2?14:0,k*13);c.stroke()}c.restore();c.strokeStyle='#111';c.lineJoin='round'}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat')
  const a=.27+.28*sin(t*T),hx=160,hy=200,L=100,tx=hx+L*sin(a),ty=hy-L*cos(a),lag=-.7*cos(t*T)
  c.fillStyle='#fff';c.lineWidth=3.5
  for(let j=0;j<5;j++){const p=(t*2+j/5)%1,s=8*sin(PI*p),b=-.3+.9*j/4,r=128+(j%2)*18;if(s>1.5)spark(c,hx+r*sin(b)+6,hy-r*cos(b)-6,s)}
  c.save();c.translate(-10,0)
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(60,96);c.quadraticCurveTo(36,170,44,250);c.lineTo(140,250);c.lineTo(140,140);c.quadraticCurveTo(150,100,124,60);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(78,178);c.quadraticCurveTo(40,190,36,252);c.lineTo(164,252);c.quadraticCurveTo(160,190,124,178);c.closePath();c.fill();c.stroke()
  c.fillStyle=tn;c.beginPath();c.rect(52,232,104,20);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(48,232);c.lineTo(156,232);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(80,178);c.lineTo(102,224);c.lineTo(122,178);c.moveTo(88,178);c.lineTo(102,206);c.lineTo(114,178);c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.rect(90,156,22,26);c.fill();c.beginPath();c.moveTo(90,156);c.lineTo(90,180);c.moveTo(112,156);c.lineTo(112,180);c.stroke()
  c.save();c.translate(100,102);c.scale(.7,.7);c.translate(-128,-128)
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[104,-1],[152,1]]){c.lineWidth=7;c.beginPath();c.moveTo(x-15,140);c.quadraticCurveTo(x,152,x+15,140);c.stroke();c.lineWidth=4;c.beginPath();for(const j of[-8,0,8])c.moveTo(x+j,148+(j?-1:1)),c.lineTo(x+j*1.3,156);c.moveTo(x+d*15,140);c.lineTo(x+d*21,136);c.stroke()}
  c.lineWidth=3;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+j-3,168),c.lineTo(128+d*44+j+3,160),c.stroke()
  c.lineWidth=4.5;c.beginPath();c.moveTo(118,170);c.quadraticCurveTo(128,178,138,170);c.stroke()
  c.lineWidth=8;c.fillStyle='#111';c.beginPath();c.moveTo(64,186);c.lineTo(60,104);c.bezierCurveTo(56,50,92,34,128,34);c.bezierCurveTo(164,34,200,50,196,104);c.lineTo(192,186);c.lineTo(176,186);c.lineTo(178,116);c.lineTo(80,116);c.lineTo(80,186);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();for(const[aa,b]of[[1.2,1.32],[1.42,1.52],[1.62,1.76]])c.arc(128,110,60,PI*aa,PI*b);c.stroke()
  c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;for(const x of[70,186])c.beginPath(),c.roundRect(x-11,150,22,12,3),c.fill(),c.stroke()
  c.restore();c.restore()
  c.save();c.translate(tx,ty);shide(c,lag*.8-.5);c.scale(-1,1);shide(c,-lag*.8-.5);c.restore()
  c.save();c.translate(hx,hy);c.rotate(a)
  for(const[l,s]of[[10,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(0,22),c.lineTo(0,-L),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-8,-L-2);c.lineTo(0,-L-14);c.lineTo(8,-L-2);c.closePath();c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,184);c.quadraticCurveTo(150,186,hx-10,hy+4);c.lineTo(hx+12,hy+20);c.quadraticCurveTo(hx+30,232,hx+22,252);c.lineTo(hx-30,252);c.quadraticCurveTo(hx-38,224,124,216);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(hx-2,hy+22);c.quadraticCurveTo(hx+8,236,hx,250);c.stroke()
  c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,11,10,a,0,T);c.fill();c.stroke()
}
