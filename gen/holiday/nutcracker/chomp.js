// nutcracker soldier catching a walnut in his open jaw and chomping it, shell bits flying, eyes squeezing on the crack
export const frames=32,delay=55,rim=6
const P=Math.PI*2,O='#1d1418',sn=Math.sin,cs=Math.cos,cl=x=>x<0?0:x>1?1:x,ez=x=>x*x*(3-2*x)
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const nut=(c,x,y,r,sx=1,sy=1)=>{
  c.save();c.translate(x,y);c.scale(sx,sy);c.lineWidth=4
  c.fillStyle='#b5793f';c.beginPath();c.ellipse(0,0,r,r*.92,0,0,P);c.fill();c.stroke()
  c.strokeStyle='#7a4a22';c.lineWidth=2.5;c.beginPath();c.moveTo(0,-r*.9);c.bezierCurveTo(-r*.3,-r*.3,r*.3,r*.3,0,r*.9)
  c.moveTo(-r*.6,-r*.5);c.quadraticCurveTo(-r*.4,0,-r*.6,r*.5);c.moveTo(r*.6,-r*.5);c.quadraticCurveTo(r*.4,0,r*.6,r*.5);c.stroke()
  c.fillStyle='#e0b07a';c.beginPath();c.ellipse(-r*.4,-r*.45,r*.18,r*.12,-.6,0,P);c.fill();c.restore()
}
export default(c,t)=>{
  // jaw opening d (px): open wide while the nut flies in, snap shut at .3-.36, reopen .62-.84
  const d=t<.3?32:t<.36?32*(1-ez(cl((t-.3)/.06))):t<.62?0:32*ez(cl((t-.62)/.22))
  const cr=t>=.345,kt=cl((t-.345)/.4),bob=t>.33&&t<.45?4*sn(Math.PI*(t-.33)/.12):0
  c.strokeStyle=O;c.lineWidth=6;c.translate(0,bob-2)
  // impact spikes on the crack
  if(t>.34&&t<.44){const g=sn(Math.PI*(t-.34)/.1);c.fillStyle='#ffd23a';c.lineWidth=4.5;c.beginPath()
    for(let k=0;k<14;k++){const a=k*P/14,r=k%2?40:50+30*g;c.lineTo(128+r*cs(a)*1.3,158+r*sn(a)*.7)}c.closePath();c.fill();c.stroke();c.lineWidth=6}
  // jacket + epaulettes
  c.fillStyle='#e23b45';c.beginPath();c.moveTo(52,234);c.quadraticCurveTo(50,198,92,188);c.lineTo(164,188);c.quadraticCurveTo(206,198,204,234);c.quadraticCurveTo(204,240,198,240);c.lineTo(58,240);c.quadraticCurveTo(52,240,52,234);c.fill();c.stroke()
  c.fillStyle='#ffd23a';c.lineWidth=4;for(const m of[-1,1])for(const y of[212,230]){c.beginPath();c.arc(128+m*26,y,5,0,P);c.fill();c.stroke()}
  for(const m of[-1,1]){c.lineWidth=4.5;c.beginPath();c.ellipse(128+m*66,198,26,12,m*.18,0,P);c.fill();c.stroke()
    c.fillStyle='#e9a21c';c.beginPath();c.ellipse(128+m*70,201,14,5,m*.18,0,P);c.fill();c.fillStyle='#ffd23a'}
  c.lineWidth=6
  // mouth interior + walnut, behind the face and jaw
  c.fillStyle='#5a1420';rr(c,100,144,56,10+d,4);c.fill();c.stroke()
  if(t>=.2&&!cr){const g=10+d;nut(c,128,150+g/2,16,1+cl((32-g)/32)*.35,Math.min(1,g/32))}
  // jaw: chin block + lower teeth + beard, drops by d
  c.save();c.translate(0,d)
  c.fillStyle='#fff';c.beginPath();c.moveTo(92,166);c.quadraticCurveTo(86,188,106,198);c.quadraticCurveTo(128,208,150,198);c.quadraticCurveTo(170,188,164,166);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ffd9b8';rr(c,98,152,60,24,6);c.fill();c.stroke()
  c.fillStyle='#fff';rr(c,104,150,48,9,2);c.fill();c.lineWidth=3;c.stroke();c.beginPath();for(const x of[116,128,140]){c.moveTo(x,151);c.lineTo(x,158)}c.stroke()
  c.restore();c.lineWidth=6
  // hair down the sides
  c.fillStyle='#fff';for(const m of[-1,1]){const X=v=>128+m*v;c.beginPath();c.moveTo(X(34),86);c.quadraticCurveTo(X(52),86,X(54),98);c.quadraticCurveTo(X(64),108,X(56),120);c.quadraticCurveTo(X(66),134,X(56),146);c.quadraticCurveTo(X(62),162,X(46),168);c.quadraticCurveTo(X(40),150,X(36),130);c.closePath();c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();c.moveTo(X(44),100);c.quadraticCurveTo(X(52),118,X(46),136);c.stroke();c.lineWidth=6}
  // upper face
  c.fillStyle='#ffd9b8';rr(c,90,84,76,64,10);c.fill();c.stroke()
  c.fillStyle='#fff';rr(c,104,140,48,9,2);c.fill();c.lineWidth=3;c.stroke();c.beginPath();for(const x of[116,128,140]){c.moveTo(x,141);c.lineTo(x,148)}c.stroke();c.lineWidth=6
  c.fillStyle='#ff9c9c';for(const m of[-1,1]){c.beginPath();c.arc(128+m*26,124,8,0,P);c.fill()}
  // eyes: glance right for the incoming nut and follow it in, squeeze on the crack
  const sq=t>.33&&t<.5,lx=t<.2?6*(1-t/.2):t>.88?6*ez((t-.88)/.12):0
  for(const m of[-1,1]){const x=128+m*17
    if(sq){c.lineWidth=4.5;c.beginPath();c.moveTo(x+m*7,99);c.lineTo(x-m*5,106);c.lineTo(x+m*7,113);c.stroke()}
    else{c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.ellipse(x,106,9,10,0,0,P);c.fill();c.stroke()
      c.fillStyle=O;c.beginPath();c.arc(x+lx,107,5,0,P);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x+lx-1.5,105,1.6,0,P);c.fill()}
    c.lineWidth=6;c.beginPath();c.moveTo(x+m*11,sq?93:89);c.lineTo(x-m*8,sq?97:94);c.stroke()}
  // nose + mustache
  c.fillStyle='#ffc29a';c.lineWidth=4;c.beginPath();c.ellipse(128,122,8,9,0,0,P);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();for(const m of[-1,1]){c.moveTo(128,129);c.bezierCurveTo(128+m*10,124,128+m*34,126,128+m*40,140);c.bezierCurveTo(128+m*30,134,128+m*16,144,128,136)}c.fill();c.stroke()
  // hat: black shako with gold bands, star badge and a red plume
  c.lineWidth=6
  c.fillStyle='#e23b45';c.beginPath();c.ellipse(128,31,9,13,0,0,P);c.fill();c.stroke()
  c.fillStyle='#2b2733';c.beginPath();c.moveTo(94,86);c.lineTo(98,36);c.quadraticCurveTo(128,28,158,36);c.lineTo(162,86);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ffd23a';c.lineWidth=4.5;c.beginPath();c.moveTo(97,44);c.quadraticCurveTo(128,36,159,44);c.lineTo(159.5,52);c.quadraticCurveTo(128,44,96.5,52);c.closePath();c.fill();c.stroke()
  rr(c,88,78,80,12,4);c.fill();c.stroke()
  c.beginPath();for(let k=0;k<10;k++){const a=k*P/10-P/4,r=k%2?6:14;c.lineTo(128+r*cs(a),64+r*sn(a))}c.closePath();c.fill();c.stroke()
  // the walnut tossed in from the right, growing from nothing
  if(t>0&&t<.2){const u=ez(t/.2),s=Math.min(1,t/.08);nut(c,128+84*(1-u),171-36*sn(Math.PI*u)-6*(1-u),16*s)}
  // cracked shell halves and crumbs flying out, shrinking away
  if(cr&&kt<1){c.lineWidth=3.5
    for(const[vx,vy,sp,f]of[[-70,-60,-6,'#b5793f'],[74,-70,7,'#b5793f'],[-40,-20,4,'#e8c48f'],[46,-26,-5,'#e8c48f'],[-90,-10,9,'#b5793f'],[86,-14,-8,'#e8c48f']]){
      const s=(1-kt)**.7,x=128+vx*kt,y=156+vy*kt+130*kt*kt
      if(s<.15)continue
      c.save();c.translate(x,y);c.rotate(sp*kt);c.scale(s,s);c.fillStyle=f;c.beginPath()
      if(f=='#b5793f'){c.arc(0,0,17,Math.PI,0);c.quadraticCurveTo(0,6,-17,0)}else c.ellipse(0,0,9,7,0,0,P)
      c.fill();c.stroke();c.restore()}}
}
