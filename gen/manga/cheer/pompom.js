// cheerleader with an ink-black high ponytail shaking her pompoms, crouching and leaping into a spread jump, sparkles at the top
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=75,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const pom=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.lineWidth=4;c.fillStyle='#fff';c.beginPath();for(let k=0;k<28;k++){const b=k*T/28,rr=k%2?r*.78:r;c.lineTo(rr*cos(b),rr*sin(b))}c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(let k=0;k<14;k++){const b=k*T/14+.2;c.beginPath();c.moveTo(r*.2*cos(b),r*.2*sin(b));c.lineTo(r*.7*cos(b+.15),r*.7*sin(b+.15));c.stroke()}c.restore()}
const limb=(c,pts,w,core)=>{c.beginPath();c.moveTo(...pts[0]);c.quadraticCurveTo(...pts[1],...pts[2]);for(const[l,s]of[[w,'#111'],[w-6,core]])c.lineWidth=l,c.strokeStyle=s,c.stroke();c.strokeStyle='#111'}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat')
  const air=t>=.2&&t<.6,p=air?(t-.2)/.4:0,oy=t<.1?0:t<.2?8*(t-.1)/.1:air?8*(1-p)-32*sin(PI*p):t<.72?8*sin(PI*(t-.6)/.12):0
  const kb=air?0:max(0,oy)/8,up=air?sin(PI*p):0,sh=air?0:(i%2?4:-4),vel=air?-cos(PI*p):0
  c.translate(0,4)
  // shadow on the ground
  c.lineWidth=3;c.fillStyle=dot;c.beginPath();c.ellipse(128,240,40-14*up,6-2*up,0,0,T);c.fill()
  // ponytail lags the jump
  c.save();c.translate(152,52+oy);c.rotate(-.15+.4*vel)
  c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.moveTo(-8,-4);c.bezierCurveTo(44,-16,66,30,58,84);c.quadraticCurveTo(50,72,42,82);c.quadraticCurveTo(40,66,30,70);c.bezierCurveTo(40,34,20,12,-8,10);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(12,2);c.bezierCurveTo(36,6,50,34,48,64);c.stroke();c.strokeStyle='#111';c.restore()
  // legs: planted and bending, or spread wide in the air
  for(const d of[-1,1]){
    const hx=128+d*10,hy=190+oy,fx=air?128+d*(14+30*up):128+d*12,fy=air?hy+40-8*up:234,kx=(hx+fx)/2+d*(10*kb+6*up),ky=(hy+fy)/2
    limb(c,[[hx,hy],[kx,ky],[fx,fy-4]],13,'#fff')
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(fx+d*3,fy,10,6,d*(air?.5*up:0),0,T);c.fill();c.stroke();c.beginPath();c.moveTo(fx+d*3-9,fy+3);c.lineTo(fx+d*3+9,fy+3);c.stroke()
  }
  // pleated skirt flares in the jump
  const fl=8*up
  c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.moveTo(110,168+oy);c.lineTo(146,168+oy);c.lineTo(158+fl,194+oy-fl*.4);c.lineTo(98-fl,194+oy-fl*.4);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2.5;for(const k of[-2,-1,0,1,2])c.beginPath(),c.moveTo(128+k*7,172+oy),c.lineTo(128+k*(11+fl/3),192+oy-fl*.4),c.stroke()
  c.beginPath();c.moveTo(101-fl,189+oy-fl*.4);c.lineTo(155+fl,189+oy-fl*.4);c.stroke();c.strokeStyle='#111'
  // top with a star
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(110,132+oy);c.lineTo(146,132+oy);c.lineTo(148,170+oy);c.lineTo(108,170+oy);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(114,133+oy);c.lineTo(128,150+oy);c.lineTo(142,133+oy);c.lineTo(136,133+oy);c.lineTo(128,143+oy);c.lineTo(120,133+oy);c.closePath();c.fill()
  c.lineWidth=2.5;c.beginPath();for(let k=0;k<10;k++){const a=k*PI/5-PI/2,r=k%2?3.5:8;c.lineTo(128+r*cos(a),160+oy+r*sin(a))}c.closePath();c.fillStyle=dot;c.fill();c.stroke()
  // arms: pompoms shaking at the hips, or thrown up in a V
  for(const d of[-1,1]){
    const sx=128+d*17,sy=138+oy,hx=128+d*(40+12*up),hy=(1-up)*(176+d*sh)+up*82+oy,ex=(sx+hx)/2+d*12,ey=(sy+hy)/2
    limb(c,[[sx,sy],[ex,ey],[hx,hy]],12,'#fff');pom(c,hx+d*4,hy-4*up,17+3*up,t*T*2*d)
  }
  // head
  c.save();c.translate(128,92+oy);c.scale(.62,.62);c.translate(-128,-120)
  c.lineWidth=8;c.fillStyle='#111';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){
    if(air){c.lineWidth=8;c.beginPath();c.moveTo(x-14,146);c.quadraticCurveTo(x,128,x+14,146);c.stroke();continue}
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x,141,10.5,15,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-3,135,5,0,T);c.fill();c.beginPath();c.arc(x+4,149,2.2,0,T);c.fill()
    c.lineWidth=8;c.beginPath();c.moveTo(x-d*12,130);c.quadraticCurveTo(x,119,x+d*15,131);c.lineTo(x+d*21,125);c.stroke()
  }
  c.lineWidth=3;for(const d of[-1,1])for(let k=0;k<4;k++)c.beginPath(),c.moveTo(128+d*42+(k-1.5)*6-3,172),c.lineTo(128+d*42+(k-1.5)*6+3,161),c.stroke()
  c.lineWidth=4.5;c.fillStyle='#111';c.beginPath();c.moveTo(114,163);c.quadraticCurveTo(128,186,142,163);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#fff';c.beginPath();c.ellipse(128,182,8,5,0,0,T);c.fill();c.restore()
  // swept bangs, white shine, ribbon at the tie
  c.lineWidth=8;c.fillStyle='#111';c.beginPath();c.moveTo(70,140);c.bezierCurveTo(56,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,140)
  c.quadraticCurveTo(184,112,170,100);c.quadraticCurveTo(160,112,146,112);c.quadraticCurveTo(140,98,128,92);c.quadraticCurveTo(116,110,98,112);c.quadraticCurveTo(90,104,86,98);c.quadraticCurveTo(72,114,70,140);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=30;k++){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?52:48)*cos(a),100+(k%2?52:48)*sin(a))}for(let k=30;k>=0;k--){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?44:40)*cos(a),100+(k%2?44:40)*sin(a))}c.fill()
  c.fillStyle='#fff';c.lineWidth=6;for(const e of[-1,1])c.beginPath(),c.moveTo(166,44),c.lineTo(166+e*22,30),c.lineTo(166+e*20,58),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(166,44,7,0,T);c.fill();c.stroke()
  c.restore()
  // sparkles at the top of the jump
  if(up>.3){c.fillStyle='#fff';c.lineWidth=3;for(const[x,y,o]of[[46,62,0],[212,52,1],[198,132,2],[56,140,3]]){const s=(6+5*sin(o+t*T*4))*up;c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,r=k%2?s*.3:s;c.lineTo(x+r*cos(a),y+oy*.4+r*sin(a))}c.closePath();c.fill();c.stroke()}}
}
