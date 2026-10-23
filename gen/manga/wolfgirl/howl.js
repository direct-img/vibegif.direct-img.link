// manga wolf girl with shaggy crosshatched hair: ears perk, she tips her head back and howls at a toned crescent moon, sound arcs rolling up, fluffy tail swishing
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=110,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
const hatch=(c,x0,y0,w,h,g)=>{c.save();c.clip();c.lineWidth=1.6;c.beginPath();for(let k=-h;k<w;k+=g)c.moveTo(x0+k,y0+h),c.lineTo(x0+k+h,y0);for(let k=0;k<w+h;k+=g)c.moveTo(x0+k,y0+h),c.lineTo(x0+k-h,y0);c.stroke();c.restore()}
// sharp wolf eye: slanted, ink iris with a slit-ish pupil highlight
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.moveTo(x-d*16,y+2);c.quadraticCurveTo(x,y-14,x+d*16,y-6);c.quadraticCurveTo(x+d*12,y+16,x,y+15);c.quadraticCurveTo(x-d*12,y+14,x-d*16,y+2);c.fill()
  c.save();c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,9,12,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-3,y,2.5,5,0,0,T);c.fill();c.beginPath();c.arc(x+3,y+9,1.6,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-d*16,y+2);c.quadraticCurveTo(x,y-14,x+d*18,y-8);c.lineTo(x+d*22,y-13);c.stroke()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  // breathe in, then a long howl, then settle
  const h=ease((t-.18)/.14)-ease((t-.78)/.14),pre=t<.18?sin(t/.18*PI):0,ang=-.38*h+.06*pre,sw=sin(t*T*2)
  // toned crescent moon sticker with two twinkles
  const moon=()=>{c.beginPath();c.arc(204,54,34,.523*PI,1.851*PI);c.arc(222,42,30,1.917*PI,.634*PI,true);c.closePath()}
  c.lineWidth=5;c.fillStyle='#fff';moon();c.fill();c.save();moon();c.clip();c.fillStyle=tn;c.fillRect(160,10,90,90);c.restore();moon();c.stroke()
  c.lineWidth=2.5;for(const[x,y,r]of[[160,24,6],[240,104,5]]){const s=r*(.7+.3*sin(t*T*4+x));c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?s*.35:s;c.lineTo(x+q*cos(a),y+q*sin(a))}c.closePath();c.fill();c.stroke()}
  // fluffy hatched tail swishing behind her
  c.save();c.translate(62,232);c.rotate(-.3+.22*sw)
  const tail=()=>{c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-30,-30,-34,-90,-6,-118);c.quadraticCurveTo(4,-100,10,-112);c.quadraticCurveTo(12,-92,22,-98);c.bezierCurveTo(26,-60,22,-24,0,0)}
  c.lineWidth=6;c.fillStyle='#fff';tail();c.fill();tail();hatch(c,-40,-124,70,130,7);c.fillStyle='#fff';c.beginPath();c.moveTo(-6,-118);c.quadraticCurveTo(-14,-96,4,-90);c.quadraticCurveTo(16,-98,22,-98);c.quadraticCurveTo(12,-92,10,-112);c.quadraticCurveTo(4,-100,-6,-118);c.fill();tail();c.stroke()
  c.restore()
  // toned jacket with a fluffy white ruff round the neck
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(92,176);c.quadraticCurveTo(48,186,40,256);c.lineTo(188,256);c.quadraticCurveTo(180,186,136,176);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(30,170,170,90);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(102,150,24,30);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(102,150);c.lineTo(102,176);c.moveTo(126,150);c.lineTo(126,176);c.stroke()
  c.lineWidth=5;c.beginPath();for(let k=0;k<9;k++){const a=PI*(.05+k*.1125),x=114+44*cos(a),y=180+14*sin(a);c.arc(x,y,9,a-1.4,a+1.4)}c.closePath();c.fill();c.stroke()
  c.save();c.translate(114,166);c.rotate(ang);c.translate(-114,-166)
  c.save();c.translate(114,108);c.scale(.74,.74);c.translate(-128,-128)
  // wolf ears, hatched outside, white inside, twitching up when she howls
  for(const d of[-1,1]){c.save();c.translate(128+d*40,62);c.rotate(d*(.2-.18*h))
    const ear=()=>{c.beginPath();c.moveTo(-22,8);c.lineTo(d*4,-48);c.lineTo(22,8);c.closePath()}
    c.lineWidth=6;c.fillStyle='#fff';ear();c.fill();ear();hatch(c,-26,-50,52,60,6);ear();c.stroke()
    c.beginPath();c.moveTo(-10,4);c.lineTo(d*3,-28);c.lineTo(10,4);c.closePath();c.fill();c.lineWidth=3;c.stroke();c.restore()}
  // shaggy crosshatched hair behind
  const back=()=>{c.beginPath();c.moveTo(128,40);c.bezierCurveTo(62,40,52,100,58,150);for(const[x,y]of[[50,186],[68,174],[66,204],[86,186]])c.lineTo(x,y);c.lineTo(170,186);for(const[x,y]of[[190,204],[188,174],[206,186],[198,150]])c.lineTo(x,y);c.bezierCurveTo(204,100,194,40,128,40)}
  c.lineWidth=6;c.fillStyle='#fff';back();c.fill();back();hatch(c,44,36,168,172,7);back();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(h>.3){c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.arc(x,140,12,PI*1.1,PI*1.9),c.stroke()}
  else{eye(c,103,138,-1);eye(c,153,138,1)}
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-3,168),c.lineTo(128+d*44+k+3,160),c.stroke()
  // mouth: a little closed smile, then a big round howl with fangs
  c.lineWidth=4;if(h>.3){c.fillStyle='#111';c.beginPath();c.ellipse(128,172,10,8+6*h,0,0,T);c.fill();c.stroke();c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*8,164),c.lineTo(128+d*5,172),c.lineTo(128+d*3,164),c.fill()}
  else{c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(123,172,128,168);c.quadraticCurveTo(133,172,138,168);c.stroke()}
  // shaggy bangs
  const bang=()=>{c.beginPath();c.moveTo(68,150);c.bezierCurveTo(52,76,88,42,128,42);c.bezierCurveTo(168,42,204,76,188,150);for(const[x,y]of[[180,104],[170,122],[160,98],[146,120],[136,96],[124,120],[112,98],[100,122],[90,100],[80,120],[74,106]])c.lineTo(x,y);c.closePath()}
  c.lineWidth=6;c.fillStyle='#fff';bang();c.fill();bang();hatch(c,50,38,156,92,7);bang();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(128,110,58,PI*1.3,PI*1.45);c.stroke();c.beginPath();c.arc(128,110,58,PI*1.55,PI*1.7);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.restore()
  // howl sound arcs rolling up toward the moon
  if(h>.3){c.lineWidth=4;for(let k=0;k<3;k++){const q=(t*4+k/3)%1,r=14+30*q;c.beginPath();c.arc(126,88,r+24*k*.3,-PI*.62,-PI*.18);c.stroke()}}
}
