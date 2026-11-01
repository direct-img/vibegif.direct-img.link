// groundhog popping out of its snowy burrow, looking left and right, spotting its shadow and ducking back down
export const frames=48,delay=60,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),bp=(t,a,b)=>Math.sin(Math.PI*cl((t-a)/(b-a)))
const bo=x=>(x=cl(x)-1,1+2.6*x**3+1.6*x*x),HX=128,HY=176
export default(c,t)=>{
  const S=(f,b,d,x=-5,y=-4)=>{c.beginPath();f();c.fillStyle=d;c.fill();c.save();c.clip();c.translate(x,y);c.beginPath();f();c.fillStyle=b;c.fill();c.restore();c.beginPath();f();c.stroke()}
  // rise 0..1: pops up, holds, ducks fast
  const up=bo((t-.05)/.1)-sm((t-.66)/.06),st=1+.1*bp(t,.05,.12)-.07*bp(t,.13,.19)+.06*bp(t,.62,.66)
  const lk=-8*sm((t-.2)/.05)+16*sm((t-.33)/.06)-8*sm((t-.52)/.04),ld=5*sm((t-.42)/.04)*(1-sm((t-.52)/.04))
  const wow=sm((t-.52)/.03)*(1-sm((t-.66)/.04)),bl=Math.max(bp(t,.27,.31),bp(t,.45,.48))
  // mound with snow cap
  const md=()=>{c.moveTo(18,228);c.bezierCurveTo(28,170,80,150,128,150);c.bezierCurveTo(176,150,228,170,238,228);c.closePath()}
  c.lineWidth=7;S(md,'#a5693a','#7a4626',-6,-6)
  c.save();c.beginPath();md();c.clip()
  const sn=()=>{c.moveTo(0,0);c.lineTo(0,194);for(let j=0;j<8;j++){const x=j*32;c.quadraticCurveTo(x+16,194+(j%2?20:14),x+32,194)}c.lineTo(256,0);c.closePath()}
  c.lineWidth=5;S(sn,'#fbfdff','#cfe1f0',-5,-6)
  // shadow on the snow, cast to the right
  if(up>.05){c.save();c.translate(HX+20,HY+6);c.transform(1,0,-1.4,.3,0,0);c.scale(1,up);c.fillStyle='rgba(50,70,110,.36)';c.beginPath();c.ellipse(0,-34,40,52,0,0,P);c.ellipse(0,-86,32,28,0,0,P);c.fill();c.restore()}
  c.restore()
  c.lineWidth=7;c.beginPath();md();c.stroke()
  // hole: dirt ring and dark inside
  c.lineWidth=6;c.fillStyle='#8a5530';c.beginPath();c.ellipse(HX,HY,52,16,0,0,P);c.fill();c.stroke()
  c.fillStyle='#2e1b10';c.beginPath();c.ellipse(HX,HY+1,44,11,0,0,P);c.fill()
  // eyes glinting in the dark while it is down
  const dn=sm((t-.76)/.04)*(1-sm((t-.93)/.04)),eb=bp(t,.86,.9)
  if(dn>.02)for(const d of[-1,1]){c.save();c.translate(HX+d*11+4*Math.sin(P*t*2),HY+1);c.scale(dn,dn*(1-eb*.9));c.fillStyle='#fff';c.beginPath();c.arc(0,0,4.5,0,P);c.fill();c.fillStyle='#111';c.beginPath();c.arc(1,.5,2.5,0,P);c.fill();c.restore()}
  // groundhog, hidden below the front rim of the hole
  if(up>.01){
    c.save();c.beginPath();c.rect(0,0,256,HY);c.ellipse(HX,HY+1,44,11,0,0,P);c.clip()
    c.translate(HX,HY+128*(1-up)-4*wow);c.rotate(lk*.007);c.scale(1/st**.5,st)
    hog(c,lk,ld,bl,wow)
    c.restore()
  }
  // front lip of the hole
  c.lineWidth=6;c.beginPath();c.ellipse(HX,HY,52,16,0,.15,Math.PI-.15);c.stroke()
  // snow puff when it ducks
  const v=(t-.7)/.2
  if(v>0&&v<1)for(let j=0;j<6;j++){
    const a=-Math.PI/2+(j-2.5)*.42,d=20+40*v,r=(5+(j%3)*2)*(1-v)**.7
    c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.arc(HX+Math.cos(a)*(d+26),HY-6+Math.sin(a)*d*.8+50*v*v,r,0,P);c.fill();c.stroke()
  }
  // startled "!"
  const ex=sm((t-.52)/.03)*(1-sm((t-.62)/.03))
  if(ex>.02){
    c.save();c.translate(HX+44,HY-128-6*ex);c.rotate(.2);c.scale(ex,ex)
    c.lineWidth=12;c.beginPath();c.moveTo(0,-22);c.lineTo(0,2);c.stroke();c.beginPath();c.arc(0,14,2,0,P);c.stroke()
    c.lineWidth=6;c.strokeStyle='#ff4b4b';c.beginPath();c.moveTo(0,-22);c.lineTo(0,2);c.stroke();c.beginPath();c.arc(0,14,.5,0,P);c.stroke()
    c.restore()
  }
}
// the groundhog, origin at the hole, lk = look (x shift), ld = look down, bl = blink, wow = startled
const hog=(c,lk,ld,bl,wow)=>{
  const fx=lk,fy=ld
  // ears
  for(const d of[-1,1]){c.lineWidth=5;c.fillStyle='#8f5a30';c.beginPath();c.arc(d*27+fx*.4,-110-6*wow,10,0,P);c.fill();c.stroke();c.fillStyle='#e7a07a';c.beginPath();c.arc(d*27+fx*.4,-109-6*wow,4.5,0,P);c.fill()}
  // body + head as one furry blob
  const bd=[[0,-26,44,60],[fx*.3,-86,37,32]]
  c.lineWidth=13;for(const[x,y,a,b]of bd){c.beginPath();c.ellipse(x,y,a,b,0,0,P);c.stroke()}
  c.fillStyle='#8f5a30';for(const[x,y,a,b]of bd){c.beginPath();c.ellipse(x,y,a,b,0,0,P);c.fill()}
  c.save();c.beginPath();for(const[x,y,a,b]of bd)c.ellipse(x,y,a,b,0,0,P);c.clip()
  c.fillStyle='#ad7240';for(const[x,y,a,b]of bd){c.beginPath();c.ellipse(x-6,y-5,a,b,0,0,P);c.fill()}
  c.restore()
  // belly
  c.fillStyle='#dcae78';c.beginPath();c.ellipse(fx*.2,-20,27,40,0,0,P);c.fill()
  // face
  c.save();c.translate(fx,fy)
  for(const d of[-1,1]){
    const ex=d*16,ey=-96
    if(bl>.5){c.lineWidth=4;c.beginPath();c.moveTo(ex-5,ey);c.quadraticCurveTo(ex,ey+4,ex+5,ey);c.stroke()}
    else{const r=5.5+3*wow;c.fillStyle=wow>.3?'#fff':'#111';c.beginPath();c.arc(ex,ey,r,0,P);c.fill();if(wow>.3){c.lineWidth=3;c.stroke();c.fillStyle='#111';c.beginPath();c.arc(ex+1,ey+1,3,0,P);c.fill()}else{c.fillStyle='#fff';c.beginPath();c.arc(ex-1.8,ey-2,1.8,0,P);c.fill()}}
  }
  c.fillStyle='#f3dcb0';c.lineWidth=4
  for(const d of[-1,1]){c.beginPath();c.arc(d*9,-76,11,0,P);c.fill()}
  // buck teeth, open mouth when startled
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.roundRect(-6,-68,12,11+3*wow,2);c.fill();c.stroke();c.beginPath();c.moveTo(0,-68);c.lineTo(0,-57+3*wow);c.stroke()
  for(const d of[-1,1]){c.lineWidth=3.5;c.beginPath();c.arc(d*9,-76,11,d>0?-.2:Math.PI*.35,d>0?Math.PI*.65:Math.PI+.2);c.stroke()}
  c.fillStyle='#3a2216';c.beginPath();c.moveTo(-8,-87);c.quadraticCurveTo(0,-91,8,-87);c.quadraticCurveTo(6,-80,0,-79);c.quadraticCurveTo(-6,-80,-8,-87);c.fill()
  // whiskers
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-1,1]){c.beginPath();c.moveTo(d*19,-77+k*3);c.lineTo(d*31-fx*.25,-79+k*5);c.stroke()}
  c.restore()
  // paws on the rim
  for(const d of[-1,1]){c.lineWidth=4.5;c.fillStyle='#7a4a26';c.beginPath();c.ellipse(d*23+fx*.2,3,12,8,0,0,P);c.fill();c.stroke();c.lineWidth=2.5;for(const k of[-4,0,4]){c.beginPath();c.moveTo(d*23+k+fx*.2,6);c.lineTo(d*23+k+fx*.2,10);c.stroke()}}
}
