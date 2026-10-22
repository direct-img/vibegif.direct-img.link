// chibi catgirl with lavender hair waving hello, head tilting, ear twitching, blinking her golden cat eyes
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#b197fc',HD='#9775fa',HL='#e5dbff',EAR='#ffc9d6',EYE='#fcc419',ED='#e67700',COL='#364fc7',BOW='#fa5252',BL='#ffa8a8'
const eye=(c,x,y,shut,d)=>{
  if(shut){c.lineWidth=5;c.beginPath();c.moveTo(x-15,y);c.quadraticCurveTo(x,y+8,x+15,y);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+2,3.2,9,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
export default(c,t,i)=>{
  const tilt=.05*sin(t*T),blink=i==10||i==11,tw=i>=3&&i<=5?.3*sin((i-3)*PI/2):0
  const head=f=>{c.save();c.translate(128,178);c.rotate(tilt);c.translate(-128,-178);f();c.restore()}
  head(()=>{c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.quadraticCurveTo(212,200,200,228);c.lineTo(56,228);c.quadraticCurveTo(44,200,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()})
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,196,156,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=COL;c.beginPath();c.moveTo(98,189);c.lineTo(128,228);c.lineTo(158,189);c.lineTo(172,197);c.lineTo(128,246);c.lineTo(84,197);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(90,198);c.lineTo(128,238);c.lineTo(166,198);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,206);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.fillStyle=BOW;for(const d of[-1,1])c.beginPath(),c.moveTo(128,226),c.lineTo(128+d*20,216),c.lineTo(128+d*18,238),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,227,5,0,T);c.fill();c.stroke()
  head(()=>{
    for(const[d,r]of[[-1,0],[1,tw]]){
      c.save();c.translate(128+d*34,58);c.rotate(r)
      c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(d*-26,8);c.lineTo(d*14,-46);c.lineTo(d*22,12);c.closePath();c.fill();c.stroke()
      c.fillStyle=EAR;c.beginPath();c.moveTo(d*-12,4);c.lineTo(d*12,-30);c.lineTo(d*14,6);c.closePath();c.fill()
      c.restore()
    }
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,blink,-1);eye(c,153,140,blink,1)
    c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(119,167);c.quadraticCurveTo(123.5,173,128,168);c.quadraticCurveTo(132.5,173,137,167);c.stroke()
    c.fillStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(131,169);c.lineTo(136,169);c.lineTo(133.5,174);c.closePath();c.fill();c.stroke()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,150)
    c.quadraticCurveTo(190,118,180,100);c.quadraticCurveTo(176,100,172,108);c.quadraticCurveTo(166,96,158,90);c.quadraticCurveTo(154,100,148,108)
    c.quadraticCurveTo(140,94,130,88);c.quadraticCurveTo(126,100,120,108);c.quadraticCurveTo(112,96,104,90);c.quadraticCurveTo(100,100,94,106)
    c.quadraticCurveTo(88,98,80,98);c.quadraticCurveTo(70,118,66,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.22,1.34],[1.42,1.5],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
    c.strokeStyle='#111'
  })
  const a=-1.45+.35*sin(2*T*t),ex=206,ey=208,hx=ex+48*cos(a),hy=ey+48*sin(a)
  for(const[w,s]of[[30,'#111'],[19,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(168,224),c.lineTo(ex,ey),c.lineTo(ex+34*cos(a),ey+34*sin(a)),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
  c.save();c.translate(hx,hy);c.rotate(a+PI/2)
  for(const x of[-9,-3,3,9])c.beginPath(),c.ellipse(x,-14,3.6,8,0,0,T),c.fill(),c.stroke()
  c.beginPath();c.ellipse(-14,-2,4,8,-.7,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(0,-2,13,12,0,0,T);c.fill();c.stroke()
  c.restore()
}
