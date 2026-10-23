// unicorn prancing in place, front hooves lifting in turn, rainbow mane and tail flowing, a sparkle off the horn
const{sin,cos,PI,abs,max}=Math,T=2*PI
export const frames=16,delay=80
const RB=['#ff6b6b','#ffa94d','#ffd43b','#69db7c','#4dabf7','#b197fc'],HN='#ffd43b',HO='#b197fc',FAR='#e9ecef',PK='#faa2c1'
export default(c,t)=>{
  const b=-5*abs(sin(T*t)),l1=max(0,sin(T*t)),l2=max(0,-sin(T*t)),w=sin(T*t)
  const D=(wd,col,f)=>{for(const[l,s]of[[wd,'#111'],[wd-12,col]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const leg=(x,y,l,col)=>{
    const kx=x+16*l,ky=y+30-6*l,fx=x+4*l,fy=226-30*l
    D(26,col,()=>{c.moveTo(x,y);c.lineTo(kx,ky);c.lineTo(fx,fy)})
    c.fillStyle=HO;c.beginPath();c.roundRect(fx-12,fy-4,24,14,5);c.fill();c.stroke()
  }
  // rainbow bundle: every strand stroked black and wide first, then the colors on top, so it reads as one outlined ribbon
  const bundle=(f)=>{
    for(let k=0;k<6;k++)c.lineWidth=20,c.beginPath(),f(k),c.stroke()
    for(let k=0;k<6;k++)c.lineWidth=8,c.strokeStyle=RB[k],c.beginPath(),f(k),c.stroke()
    c.lineWidth=7;c.strokeStyle='#111'
  }
  c.translate(0,b)
  leg(98,160,0,FAR);leg(164,160,l2,FAR)
  bundle(k=>{const o=k*6-15;c.moveTo(64,138+o*.4);c.bezierCurveTo(30+o,140+o*.3,26+8*w+o*.6,186,46+12*w-o*.3,214+o*.2)})
  leg(80,164,0,'#fff');leg(150,164,l1,'#fff')
  c.fillStyle='#fff';c.beginPath();c.moveTo(170,68);c.lineTo(176,40);c.lineTo(190,62);c.closePath();c.fill();c.stroke()
  const sil=()=>{c.beginPath();c.ellipse(118,146,62,36,0,0,T);c.moveTo(144,152);c.lineTo(160,96);c.lineTo(196,92);c.lineTo(182,150);c.closePath();c.moveTo(232,96);c.ellipse(198,86,34,24,.45,0,T)}
  sil();c.lineWidth=14;c.stroke();c.fillStyle='#fff';sil();c.fill();c.lineWidth=7
  c.fillStyle=PK;c.beginPath();c.ellipse(222,104,4,3,.4,0,T);c.fill()
  c.fillStyle=PK;c.beginPath();c.ellipse(196,100,9,5,.3,0,T);c.fill()
  c.lineWidth=5;c.beginPath();c.arc(188,82,8,.15*PI,.85*PI);c.stroke()
  c.beginPath();c.moveTo(181,86);c.lineTo(176,90);c.moveTo(184,89);c.lineTo(181,94);c.stroke()
  c.beginPath();c.moveTo(212,110);c.quadraticCurveTo(218,114,224,110);c.stroke();c.lineWidth=7
  bundle(k=>{const o=k*5-12;c.moveTo(184-o*.4,60+o*.6);c.bezierCurveTo(160-o*.8,64+o*.4,150+5*w-o*.9,96,140+7*w-o,136+o*.3)})
  c.save();c.translate(200,66);c.rotate(.5)
  c.fillStyle=HN;c.beginPath();c.moveTo(-11,0);c.lineTo(0,-54);c.lineTo(11,0);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const y of[-14,-28,-40])c.beginPath(),c.moveTo(-9-y*.2,y+4),c.lineTo(9+y*.2,y-4),c.stroke()
  c.restore();c.lineWidth=7
  const s=abs(sin(2*T*t+.6)),sx=236,sy=24
  if(s>.25){c.fillStyle=HN;c.lineWidth=4;c.beginPath();for(let k=0;k<8;k++){const r=k%2?6*s:20*s,a=k*PI/4-PI/2;c.lineTo(sx+cos(a)*r,sy+sin(a)*r)}c.closePath();c.fill();c.stroke()}
}
