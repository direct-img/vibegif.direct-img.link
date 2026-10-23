// chibi in a striped jumpsuit with an inky braid holds a cool wide stance while her nunchaku whirls in blurred circles at her side
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=50,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.4),LITE=tile(5,'#fff',1)
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
const stick=(c,x,y,a,dt)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(-6,0,12,44,5);c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(-6,14,12,30);c.restore();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-6,10);c.lineTo(6,10);c.stroke();c.restore()}
const eye=(c,x,y,d,lt)=>{
  c.save();c.beginPath();c.moveTo(x-17,y-2+d*5);c.lineTo(x+17,y-2-d*5);c.lineTo(x+17,y+16);c.lineTo(x-17,y+16);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+d*-4,y+4,9,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-14,y+6,22,10)
  c.fillStyle='#fff';c.beginPath();c.arc(x+d*-6,y+1,3.5,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-2+d*5);c.lineTo(x+16,y-2-d*5);c.lineTo(x+d*21,y-6-d*2);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-10,y+14);c.lineTo(x+10,y+14);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(x-14,y-18+d*8);c.lineTo(x+14,y-18-d*8);c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const a=T*2*t,b=1.5*abs(sin(t*T*4)),hx=180,hy=140+b
  c.save();c.translate(-6,0)
  c.fillStyle=dt;c.beginPath();c.ellipse(116,240,62,7,0,0,T);c.fill()
  // whirl blur rings behind the free stick
  c.lineWidth=5;for(const q of[0,1,2])c.beginPath(),c.arc(hx+4,hy-34,58-q*9,a-PI/2-1.8+q*.3,a-PI/2-.2),c.stroke()
  c.save();c.translate(0,b)
  // horse stance legs with a stripe down the jumpsuit
  for(const d of[-1,1]){const p=[[116+d*12,182],[116+d*40,206],[116+d*46,234]];limb(c,p,18);c.lineWidth=4;c.beginPath();c.moveTo(p[0][0]+d*7,p[0][1]+2);c.lineTo(p[1][0]+d*8,p[1][1]);c.lineTo(p[2][0]+d*8,p[2][1]-4);c.stroke()
    c.fillStyle='#111';c.lineWidth=5;c.beginPath();c.ellipse(116+d*50,240-b,16,7,0,0,T);c.fill();c.stroke()}
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(92,186);c.lineTo(92,144);c.quadraticCurveTo(116,134,140,144);c.lineTo(140,186);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const x of[96,136])c.beginPath(),c.moveTo(x,148),c.lineTo(x,184),c.stroke()
  c.fillStyle='#111';c.fillRect(92,174,48,9);c.lineWidth=4;c.beginPath();c.moveTo(104,142);c.lineTo(116,156);c.lineTo(128,142);c.stroke()
  // forward guard hand, palm out
  limb(c,[[96,150],[72,160],[58,140]],13);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(48,118,18,26,6);c.fill();c.stroke();c.beginPath();c.ellipse(70,136,5,8,.5,0,T);c.fill();c.stroke()
  c.restore()
  // free stick swings behind her head on the left half of its circle
  const P=[hx+4,hy-34],ca=a-PI/2,ch=[P[0]+12*cos(ca),P[1]+12*sin(ca)],back=cos(ca)<-.2
  const free=()=>{c.lineWidth=3;c.setLineDash([3,3]);c.beginPath();c.moveTo(...P);c.lineTo(...ch);c.stroke();c.setLineDash([]);stick(c,...ch,ca-PI/2,dt)}
  if(back)free()
  // head, with the braid swinging over her shoulder
  c.save();c.translate(114,98+b);c.rotate(-.06);c.scale(.66,.66);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle='#111'
  const sw=6*sin(t*T*2);c.beginPath();c.moveTo(64,140);c.quadraticCurveTo(44,200,56+sw,248);c.lineTo(76+sw,248);c.quadraticCurveTo(70,198,88,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;for(const y of[176,200,224])c.beginPath(),c.moveTo(56+sw*(y-140)/108,y),c.quadraticCurveTo(66,y+8,78+sw*(y-140)/108,y-4),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.beginPath();c.roundRect(52+sw,244,26,12,4);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(66,154);c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,154);c.lineTo(170,154);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,104,140,-1,lt);eye(c,152,140,1,lt)
  c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.quadraticCurveTo(132,172,144,162);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(70,128);c.lineTo(70,90);c.bezierCurveTo(86,48,170,48,186,90);c.lineTo(188,128);c.lineTo(180,110);c.lineTo(172,122);c.quadraticCurveTo(164,100,150,98);c.lineTo(140,118);c.quadraticCurveTo(132,98,118,96);c.lineTo(100,116);c.quadraticCurveTo(92,104,86,104);c.lineTo(80,122);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;for(const[s,e]of[[1.2,1.32],[1.4,1.56],[1.64,1.76]])c.beginPath(),c.arc(128,122,60,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  // spinning nunchaku: the held stick points up from her fist, the free stick whirls on its chain around the held stick's top
  limb(c,[[136,148+b],[164,140+b],[hx,hy]],13)
  stick(c,hx-2,hy+8,PI+.1,dt)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(hx,hy,10,0,T);c.fill();c.stroke()
  if(!back)free()
  c.restore()
}
