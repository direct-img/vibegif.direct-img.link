// manga oni girl with messy white hair, little horns and a fang grin, playfully swinging a studded kanabo club over her shoulder
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11,14,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-14,24,30);c.fillStyle='#111';c.fillRect(x-12,y-14,24,11);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11,14,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,4,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-4,y-5,4,5,-.4,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-7);c.quadraticCurveTo(x,y-20,x+16,y-7);c.moveTo(x+d*15,y-8);c.lineTo(x+d*22,y-14);c.moveTo(x+d*16,y-4);c.lineTo(x+d*21,y-5);c.stroke()
}
// tiger stripes: tapered black wedges coming in from both sides of a shape
const stripes=(c,x0,x1,y0,y1)=>{c.fillStyle='#111';for(let y=y0,k=0;y<y1;y+=17,k++)for(const[e,d]of[[x0,1],[x1,-1]]){const l=26+(k*7+(d>0?0:11))%18;c.beginPath();c.moveTo(e-d*4,y-5);c.quadraticCurveTo(e+d*l*.6,y-2,e+d*l,y+3);c.quadraticCurveTo(e+d*l*.5,y+3,e-d*4,y+6);c.fill()}}
const club=(c,x,y,a,tn)=>{
  c.save();c.translate(x,y);c.rotate(a)
  const sh=()=>{c.beginPath();c.moveTo(-14,-5);c.lineTo(20,-7);c.lineTo(92,-14);c.quadraticCurveTo(106,-14,106,0);c.quadraticCurveTo(106,14,92,14);c.lineTo(20,7);c.lineTo(-14,5);c.closePath()}
  c.lineWidth=5;c.fillStyle='#fff';sh();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(20,2,90,16);c.restore();sh();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(20,-7);c.lineTo(20,7);c.stroke()
  c.lineWidth=2.5;c.fillStyle='#fff';for(const[u,v]of[[36,-3],[52,4],[68,-6],[84,5],[98,-4],[60,-9],[90,-9],[44,7],[76,0],[98,7]])c.beginPath(),c.arc(u,v,3.6,0,T),c.fill(),c.stroke()
  c.restore()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),a=-1.32+.44*sin(t*T),da=cos(t*T),up=sin(t*T)>.55
  const P=[176,202]
  const H=f=>{c.save();c.translate(110,104);c.scale(.8,.8);c.translate(-128,-120);f();c.restore()}
  // long messy hair behind, then the body, then the club, so the club rests in front of the hair
  H(()=>{
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,40);c.bezierCurveTo(60,40,54,120,58,170);c.lineTo(50,208);c.lineTo(70,196);c.lineTo(72,222);c.lineTo(88,200);c.lineTo(100,190)
  c.lineTo(156,190);c.lineTo(168,200);c.lineTo(184,222);c.lineTo(186,196);c.lineTo(206,208);c.lineTo(198,170);c.bezierCurveTo(202,120,196,40,128,40);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const d of[-1,1])c.moveTo(128+d*62,130),c.lineTo(128+d*68,196),c.moveTo(128+d*52,150),c.lineTo(128+d*48,206);c.stroke()
  })
  // body: tiger-print haori over a white shirt
  c.save();c.translate(-14,0)
  c.lineWidth=5;const body=()=>{c.beginPath();c.moveTo(102,168);c.quadraticCurveTo(64,176,52,252);c.lineTo(196,252);c.quadraticCurveTo(186,176,146,168);c.closePath()}
  c.fillStyle='#fff';body();c.fill();c.save();c.clip();stripes(c,52,196,182,252);c.restore();body();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(108,168);c.lineTo(124,252);c.lineTo(132,252);c.lineTo(142,168);c.closePath();c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(118,170);c.lineTo(126,190);c.lineTo(134,170);c.stroke()
  // rope belt knot
  c.lineWidth=4;c.beginPath();c.moveTo(94,234);c.quadraticCurveTo(128,242,176,232);c.stroke();c.beginPath();c.arc(150,238,6,0,T);c.fillStyle='#fff';c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(114,150,24,24);c.fill();c.lineWidth=4;c.beginPath();c.moveTo(114,150);c.lineTo(114,168);c.moveTo(138,150);c.lineTo(138,168);c.stroke()
  c.restore()
  // swing trail behind the club tip
  if(Math.abs(da)>.5){c.lineWidth=3;const s=Math.sign(da);for(const[r,l]of[[112,.5],[98,.38],[84,.28]])c.beginPath(),c.arc(P[0],P[1],r,a-s*(l+.08),a-s*.1,s<0),c.stroke()}
  club(c,P[0],P[1],a,tn)
  // arm up to the fist holding the club
  for(const[l,s]of[[22,'#111'],[13,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(146,192),c.quadraticCurveTo(178,234,P[0],P[1]),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(P[0],P[1]);c.rotate(a);c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.ellipse(-2,0,11,12,0,0,T);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(-4,-8);c.lineTo(-4,8);c.stroke();c.restore()
  // head
  c.save();c.translate(110,104);c.scale(.8,.8);c.translate(-128,-120)
  // horns
  for(const d of[-1,1]){c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(128+d*22,46);c.quadraticCurveTo(128+d*26,20,128+d*40,4);c.quadraticCurveTo(128+d*42,26,128+d*38,48);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(128+d*36-8,0,16,50);c.restore();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(128+d*24,34);c.lineTo(128+d*39,34);c.moveTo(128+d*28,22);c.lineTo(128+d*39,21);c.stroke()}
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(up){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,144),c.quadraticCurveTo(x,128,x+14,144),c.stroke()}
  else{eye(c,103,140,-1,tn);eye(c,153,140,1,tn)}
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-3,168),c.lineTo(128+d*44+k+3,160),c.stroke()
  // wide grin with one fang
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(110,164);c.quadraticCurveTo(128,170,148,162);c.quadraticCurveTo(142,184,128,184);c.quadraticCurveTo(114,184,110,164);c.closePath()
  c.save();c.fillStyle='#111';c.fill();c.clip();c.fillStyle='#fff';c.beginPath();c.ellipse(130,186,12,7,0,0,T);c.fill();c.restore();c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(134,166);c.lineTo(140,165);c.lineTo(137,174);c.closePath();c.fill();c.stroke()
  // messy white hair with strand lines
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,148)
  c.bezierCurveTo(50,96,64,52,104,40);c.lineTo(114,30);c.lineTo(122,38);c.lineTo(138,28);c.lineTo(144,40)
  c.bezierCurveTo(196,66,202,110,186,150);c.lineTo(180,120);c.lineTo(170,128);c.lineTo(168,104);c.lineTo(156,116);c.lineTo(148,92);c.lineTo(136,112);c.lineTo(126,90);c.lineTo(114,112)
  c.lineTo(104,94);c.lineTo(96,118);c.lineTo(86,106);c.lineTo(80,130);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const[x0,y0,x1,y1]of[[100,52,92,86],[122,46,118,80],[146,48,152,82],[166,62,174,98],[84,70,78,104]])c.moveTo(x0,y0),c.lineTo(x1,y1);c.stroke()
  c.restore()
}
