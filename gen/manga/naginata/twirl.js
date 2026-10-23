// chibi girl in a dark hakama with white low braids twirls a naginata overhead like a propeller, blade trailing motion arcs
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,atan2,hypot}=Math,T=2*PI
export const frames=16,delay=60,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.4),LITE=tile(5,'#fff',1)
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
const eye=(c,x,y,d,lt)=>{
  c.save();c.beginPath();c.moveTo(x-17,y-6+d*4);c.lineTo(x+17,y-6-d*4);c.lineTo(x+17,y+22);c.lineTo(x-17,y+22);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y-1,10,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-10,y+3,22,10)
  c.fillStyle='#fff';c.beginPath();c.arc(x-3,y-5,4,0,T);c.fill();c.beginPath();c.arc(x+4,y+6,1.8,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6+d*4);c.lineTo(x+16,y-6-d*4);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(x-13,y-25+d*5);c.lineTo(x+13,y-25-d*5);c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const th=-T*2*t,b=2*sin(t*T*4),cx=128,cy=42,R=64,r=16
  const P=a=>[cx+R*cos(a),cy+r*sin(a)],A=P(th),B=P(th+PI)
  c.save();c.translate(128,136);c.scale(.93,.93);c.translate(-128,-136)
  c.fillStyle=dt;c.beginPath();c.ellipse(128,242,52,7,0,0,T);c.fill()
  // motion arcs trail behind the blade
  c.lineWidth=5;for(const q of[0,1])c.beginPath(),c.ellipse(cx,cy,R+26-q*12,r+8-q*4,0,th+.25,th+1.5-q*.3),c.stroke()
  // hakama legs, body
  c.save();c.translate(0,b)
  const hk=()=>{c.beginPath();c.moveTo(92,184);c.lineTo(164,184);c.lineTo(184,240+2*sin(t*T*4));c.lineTo(134,240);c.lineTo(128,214);c.lineTo(122,240);c.lineTo(72,240-2*sin(t*T*4));c.closePath()}
  c.fillStyle='#111';c.lineWidth=14;c.strokeStyle='#fff';hk();c.stroke();c.lineWidth=6;c.strokeStyle='#111';hk();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();for(const[x0,x1]of[[108,96],[118,112],[140,146],[150,162]])c.moveTo(x0,190),c.lineTo(x1,236);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;for(const x of[96,160])c.beginPath(),c.ellipse(x,244,14,6,0,0,T),c.fill(),c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(96,186);c.lineTo(94,150);c.quadraticCurveTo(128,140,162,150);c.lineTo(160,186);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(116,146);c.lineTo(134,172);c.moveTo(140,146);c.lineTo(128,162);c.stroke()
  c.fillStyle='#111';c.fillRect(94,176,68,10);c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.moveTo(96,150);c.lineTo(160,180);c.stroke()
  // low fist at the hip
  limb(c,[[156,154],[170,176],[154,188]],13);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(152,188,9,0,T);c.fill();c.stroke()
  // raised arm goes up behind the head to grip the middle of the shaft
  limb(c,[[154,152],[194,108],[cx+8,cy+8]],14)
  // head with white low braids
  c.save();c.translate(124,106);c.scale(.62,.62);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle='#fff'
  for(const d of[-1,1]){const w=4*sin(t*T*4+d);c.beginPath();c.moveTo(128+d*54,140);c.quadraticCurveTo(128+d*70,180,128+d*62+w,226);c.lineTo(128+d*46+w,226);c.quadraticCurveTo(128+d*52,180,128+d*40,146);c.closePath();c.fill();c.stroke()
    c.lineWidth=4;for(const y of[166,186,206])c.beginPath(),c.moveTo(128+d*44+w*(y-140)/86,y),c.quadraticCurveTo(128+d*56,y+8,128+d*66+w*(y-140)/86,y),c.stroke()
    c.lineWidth=9;c.fillStyle='#111';c.beginPath();c.roundRect(128+d*54-10+w,222,20,14,4);c.fill();c.stroke();c.fillStyle='#fff'}
  c.beginPath();c.moveTo(68,150);c.bezierCurveTo(50,72,88,36,128,36);c.bezierCurveTo(168,36,206,72,188,150);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,104,140,-1,lt);eye(c,152,140,1,lt)
  c.lineWidth=3.5;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+j-3,166),c.lineTo(128+d*44+j+3,158),c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.quadraticCurveTo(128,176,140,166);c.stroke()
  c.beginPath();c.moveTo(72,124);c.bezierCurveTo(66,66,100,48,128,50);c.bezierCurveTo(156,48,190,66,184,124);c.lineTo(176,108);c.lineTo(168,116);c.lineTo(160,100);c.lineTo(148,112);c.lineTo(136,96);c.lineTo(128,110);c.lineTo(120,96);c.lineTo(108,112);c.lineTo(96,100);c.lineTo(88,116);c.lineTo(80,108);c.closePath();c.lineWidth=9;c.fill();c.stroke()
  c.lineWidth=4;for(const[a,y0,e,y1]of[[100,62,94,90],[156,62,162,90],[128,54,128,80]])c.beginPath(),c.moveTo(a,y0),c.quadraticCurveTo((a+e)/2+6,(y0+y1)/2,e,y1),c.stroke()
  c.restore()
  c.restore()
  // naginata: foreshortened shaft, curved blade on the A end, black cap on the B end
  const near=sin(th)>0,dl=hypot(A[0]-B[0],A[1]-B[1]),u=[(A[0]-B[0])/dl,(A[1]-B[1])/dl],f=.45+.55*dl/(2*R)
  const blade=()=>{c.save();c.translate(...A);c.rotate(atan2(u[1],u[0]));c.scale(f*(near?.78:.66),near?.78:.66);c.fillStyle='#fff';c.lineWidth=5
    c.fillStyle='#111';c.beginPath();c.ellipse(0,0,5,10,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.moveTo(4,-6);c.lineTo(34,-8);c.quadraticCurveTo(58,-10,66,-22);c.quadraticCurveTo(60,4,34,6);c.lineTo(4,6);c.closePath();c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(10,0);c.lineTo(34,-1);c.quadraticCurveTo(54,-4,60,-14);c.stroke();c.restore()}
  const shaft=()=>{for(const[l,s]of[[13,'#111'],[6,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...B),c.lineTo(...A),c.stroke();c.strokeStyle='#111'
    c.fillStyle='#111';c.beginPath();c.arc(...B,7,0,T);c.fill()}
  if(!near)blade();shaft();if(near)blade()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(cx,cy+4,11,10,0,0,T);c.fill();c.stroke()
  c.restore()
}
