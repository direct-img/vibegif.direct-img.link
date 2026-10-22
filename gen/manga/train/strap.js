// manga girl dozing on the train, swaying from a hanging strap, nodding off then jerking awake, window streaks sliding past
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=90,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,10.5,14,0,0,T);c.clip();c.fillStyle='#111';c.fill();c.fillStyle='#777';c.beginPath();c.ellipse(x,y+13,10,6,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-4,y-4,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+4,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-20,x+16,y-5);c.moveTo(x+d*14,y-8);c.lineTo(x+d*21,y-13);c.stroke()
}
const zz=(c,x,y,s)=>{c.lineWidth=4;c.beginPath();c.moveTo(x-s,y-s);c.lineTo(x+s,y-s);c.lineTo(x-s,y+s);c.lineTo(x+s,y+s);c.stroke()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8),a=.045*sin(t*T),P=[128,420]
  const nod=t<.7?.2*(t/.7)**1.5:t<.74?-.04:-.04*(1-(t-.74)/.26),awake=t>=.7&&t<.84,half=t>=.84
  const rot=(x,y)=>[30+.86*(P[0]+(x-P[0])*cos(a)-(y-P[1])*sin(a)),30+.86*(P[1]+(x-P[0])*sin(a)+(y-P[1])*cos(a))]
  // train window behind her, streaks sliding left
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.roundRect(8,30,94,136,12);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(18,40,74,116,6);c.clip();c.fillStyle=FINE;c.fillRect(18,40,74,116)
  c.fillStyle='#fff';c.beginPath();c.moveTo(18,120);for(let x=18;x<=92;x+=12)c.lineTo(x,106+((x*7)%17));c.lineTo(92,156);c.lineTo(18,156);c.fill()
  c.lineWidth=3;for(let k=0;k<6;k++){const x=18+((k*53-t*144*2)%144+144)%144-36,y=50+k*17;c.beginPath();c.moveTo(x,y);c.lineTo(x+22+k%3*8,y);c.stroke()}
  c.restore();c.lineWidth=5;c.beginPath();c.roundRect(18,40,74,116,6);c.stroke()
  c.save();c.translate(30,30);c.scale(.86,.86);c.translate(...P);c.rotate(a);c.translate(-P[0],-P[1])
  const head=f=>{c.save();c.translate(128,184);c.rotate(-nod);c.translate(-128,-184);f();c.restore()}
  head(()=>{c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,208,100,202,160);c.lineTo(208,250);c.lineTo(48,250);c.lineTo(54,160);c.bezierCurveTo(48,100,58,36,128,36);c.fill();c.stroke()})
  // blazer with tone, shirt and tie
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(106,186);c.quadraticCurveTo(66,194,60,252);c.lineTo(196,252);c.quadraticCurveTo(190,194,150,186);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(110,188);c.lineTo(128,226);c.lineTo(146,188);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(122,200);c.lineTo(134,200);c.lineTo(138,240);c.lineTo(128,250);c.lineTo(118,240);c.closePath();c.fill()
  c.fillStyle='#fff';c.fillRect(116,166,24,26);c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  // raised arm to the strap
  for(const[l,s]of[[28,'#111'],[17,'#fff'],[17,DOT]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(176,214),c.lineTo(194,86),c.stroke()
  c.strokeStyle='#111'
  head(()=>{
    c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(awake){eye(c,103,140,-1);eye(c,153,140,1)}
    else{c.lineWidth=5;for(const x of[103,153])c.beginPath(),half?(c.moveTo(x-15,138),c.lineTo(x+15,138),c.moveTo(x-12,138),c.quadraticCurveTo(x,152,x+12,138)):c.arc(x,136,13,.15*PI,.85*PI),c.stroke()
      if(half){c.fillStyle='#111';for(const x of[103,153])c.beginPath(),c.arc(x,142,5,0,PI),c.fill()}}
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*36+k-3,166),c.lineTo(128+d*36+k+3,158),c.stroke()
    c.lineWidth=3.5;c.beginPath();if(awake)c.ellipse(128,170,5,6,0,0,T);else c.ellipse(128,170,4,2.5,0,0,T);c.stroke()
    c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,38,128,38);c.bezierCurveTo(168,38,202,74,186,150)
    c.quadraticCurveTo(184,118,178,104);c.quadraticCurveTo(170,100,164,110);c.quadraticCurveTo(156,96,146,92);c.quadraticCurveTo(140,104,132,110)
    c.quadraticCurveTo(126,96,116,92);c.quadraticCurveTo(110,104,102,110);c.quadraticCurveTo(96,98,88,98);c.quadraticCurveTo(84,106,80,110)
    c.quadraticCurveTo(72,124,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;for(const[s,e]of[[1.2,1.3],[1.36,1.44],[1.5,1.6],[1.66,1.74]])c.beginPath(),c.arc(128,108,52,PI*s,PI*e),c.stroke()
    c.lineWidth=2;for(const s of[1.25,1.4,1.55,1.7])c.beginPath(),c.moveTo(128+cos(PI*s)*46,108+sin(PI*s)*46),c.lineTo(128+cos(PI*s)*40,108+sin(PI*s)*40),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(160,78,18,7,3);c.fill();c.stroke()
    if(awake){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(62,104);c.quadraticCurveTo(72,120,62,124);c.quadraticCurveTo(52,120,62,104);c.fill();c.stroke()
      c.lineWidth=5;c.beginPath();c.moveTo(68,58);c.lineTo(62,40);c.moveTo(80,52);c.lineTo(80,34);c.moveTo(56,68);c.lineTo(44,56);c.stroke()}
  })
  c.restore()
  if(t<.7)for(let k=0;k<3;k++){const p=(t/.7*1.5+k/3)%1;c.globalAlpha=min(1,(1-p)*3);zz(c,96-p*30,74-p*44,4+p*5)}
  c.globalAlpha=1
  // rail, strap and ring, gripped by her hand
  const[hx,hy]=rot(194,82),ang=Math.atan2(hx-197,hy-20)
  c.lineWidth=14;c.beginPath();c.moveTo(126,16);c.lineTo(244,16);c.stroke();c.lineWidth=6;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.roundRect(189,10,16,12,3);c.fill();c.stroke()
  const L=Math.hypot(hx-197,hy-20)-30,rx=197+sin(ang)*L,ry=20+cos(ang)*L
  for(const[l,s]of[[11,'#111'],[5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(197,22),c.lineTo(rx,ry),c.stroke()
  for(const[l,s]of[[10,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.arc(rx+sin(ang)*12,ry+cos(ang)*12,12,0,T),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,11,10,-a,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(hx-6,hy-4);c.lineTo(hx+6,hy-4);c.stroke()
}
