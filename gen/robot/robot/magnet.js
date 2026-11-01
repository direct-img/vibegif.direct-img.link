// yellow industrial robot holds a red horseshoe magnet over scattered screws, bolts, nuts and washers; it switches on, the hardware leaps up and clings to the poles, then it switches off and everything clatters back down
export const frames=32,delay=60
const P=Math.PI,FL=236,MX=96,Z=1.05
const cl=k=>Math.max(0,Math.min(1,k)),ez=k=>k*k*(3-2*k)
const lerp=(a,b,k)=>a+(b-a)*k
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const thr=(c,x0,x1,h)=>{c.lineWidth=1.5;for(let x=x0;x<x1;x+=3.5){c.beginPath();c.moveTo(x,-h);c.lineTo(x+2.5,h);c.stroke()}}
const D={
  screw(c,col){
    c.beginPath();c.moveTo(-10,-4);c.lineTo(10,-4);c.lineTo(17,0);c.lineTo(10,4);c.lineTo(-10,4);c.closePath()
    c.fillStyle=col;c.lineWidth=2.5;c.fill();c.stroke();thr(c,-8,10,4)
    c.lineWidth=2.5;c.beginPath();c.moveTo(-10,-8);c.quadraticCurveTo(-18,-8,-18,0);c.quadraticCurveTo(-18,8,-10,8);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(-16,0);c.lineTo(-12,0);c.stroke()
  },
  bolt(c,col){
    rr(c,-10,-4.5,28,9,2);c.fillStyle=col;c.lineWidth=2.5;c.fill();c.stroke();thr(c,2,17,4.5)
    c.lineWidth=2.5;rr(c,-19,-9,9,18,2);c.fill();c.stroke()
    c.beginPath();c.moveTo(-19,-3);c.lineTo(-10,-3);c.moveTo(-19,3);c.lineTo(-10,3);c.lineWidth=1.5;c.stroke()
  },
  nut(c,col){
    c.beginPath();for(let k=0;k<6;k++)c.lineTo(Math.cos(k*P/3)*10,Math.sin(k*P/3)*10);c.closePath()
    c.fillStyle=col;c.lineWidth=2.5;c.fill();c.stroke()
    c.beginPath();c.arc(0,0,4,0,2*P);c.fillStyle='#39414d';c.fill();c.stroke()
  },
  washer(c,col){
    c.beginPath();c.arc(0,0,8.5,0,2*P);c.fillStyle=col;c.lineWidth=2.5;c.fill();c.stroke()
    c.beginPath();c.arc(0,0,3.5,0,2*P);c.fillStyle='#39414d';c.fill();c.stroke()
  }
}
// kind, color, floor x, floor y, floor angle, stuck x, stuck y (relative to magnet), stuck angle, leap start
const it=[
  ['screw','#e5b552',52,FL-8.5,.06,-22,22,P/2,.13],
  ['nut','#b9c3cf',86,FL-9.5,0,22,12,.3,.15],
  ['bolt','#9fb4c9',160,FL-9.5,P,27,44,P/2+.25,.21],
  ['washer','#d9dee5',22,FL-9,0,-36,-4,0,.17],
  ['screw','#e5b552',120,FL-8.5,P+.05,-28,54,P/2-.3,.22]
]
export default(c,t)=>{
  const on=t>.12&&t<.66,pw=t<.12?0:t<.66?1:0
  const held=it.map(([,,,,,,,,s])=>cl((t-s)/.11))
  const sag=ez(cl((t-.2)/.1))*3*(1-ez(cl((t-.66)/.06))),my=sag+Math.sin(t*2*P*6)*.4*pw
  // floor line
  c.lineWidth=4;c.strokeStyle='#8f99a8';c.beginPath();c.moveTo(8,FL+2);c.lineTo(246,FL+2);c.stroke();c.strokeStyle='#111'
  // robot legs (far, near), body, head
  c.save();c.translate(12,0)
  for(const[x,f]of[[210,'#c99a2e'],[190,'#f2c14e']]){
    rr(c,x-8,186,16,42,6);c.fillStyle='#5c6573';c.lineWidth=6;c.fill();c.stroke()
    rr(c,x-20,224,34,13,6);c.fillStyle=f;c.fill();c.stroke()
  }
  rr(c,170,116,66,78,18);c.fillStyle='#f2c14e';c.lineWidth=7;c.fill();c.stroke()
  c.save();rr(c,170,116,66,78,18);c.clip()
  c.fillStyle='#2b2f36';c.fillRect(170,170,66,14)
  c.fillStyle='#f2c14e';for(let x=160;x<240;x+=14){c.beginPath();c.moveTo(x,184);c.lineTo(x+7,184);c.lineTo(x+14,170);c.lineTo(x+7,170);c.fill()}
  c.fillStyle='#d9a63a';c.fillRect(220,116,16,54)
  c.restore();rr(c,170,116,66,78,18);c.lineWidth=7;c.stroke()
  c.beginPath();c.moveTo(170,170);c.lineTo(236,170);c.moveTo(170,184);c.lineTo(236,184);c.lineWidth=3;c.stroke()
  rr(c,196,104,22,16,4);c.fillStyle='#5c6573';c.lineWidth=6;c.fill();c.stroke()
  rr(c,178,66,54,42,13);c.fillStyle='#f2c14e';c.lineWidth=7;c.fill();c.stroke()
  rr(c,174,76,30,20,8);c.fillStyle='#232a33';c.lineWidth=5;c.fill();c.stroke()
  const ey=86+(on?2:0)
  c.beginPath();c.arc(184,ey,5.5,0,2*P);c.fillStyle=pw?'#7fe3ff':'#3f8fa6';c.fill()
  c.beginPath();c.arc(182.5,ey-1.5,1.8,0,2*P);c.fillStyle='#fff';c.fill()
  // beacon on top flashes while magnet is live
  c.lineWidth=5;rr(c,200,56,12,10,3);c.fillStyle=pw&&Math.floor(t*16)%2?'#ff6a3d':'#a8452a';c.fill();c.stroke()
  c.restore()
  // arm: shoulder -> elbow -> magnet clamp
  const sh=[208,140],el=[166,154+my*.4],wr=[MX+34,92+my]
  for(const[w,col]of[[18,'#111'],[10,'#7d8796']]){c.lineWidth=w;c.strokeStyle=col;c.beginPath();c.moveTo(...sh);c.lineTo(...el);c.lineTo(...wr);c.stroke()}
  c.strokeStyle='#111'
  for(const[x,y,r]of[[...sh,10],[...el,8]]){c.beginPath();c.arc(x,y,r,0,2*P);c.fillStyle='#f2c14e';c.lineWidth=4;c.fill();c.stroke()}
  // horseshoe magnet
  const yb=96+my
  c.beginPath();c.moveTo(MX-22,yb+40);c.lineTo(MX-22,yb);c.arc(MX,yb,22,P,2*P);c.lineTo(MX+22,yb+40)
  c.lineCap='butt';c.lineWidth=34;c.stroke();c.lineWidth=26;c.strokeStyle='#e8413c';c.stroke()
  c.beginPath();c.arc(MX,yb,22,P*1.15,P*1.6);c.lineWidth=6;c.strokeStyle='#ff9a8c';c.lineCap='round';c.stroke()
  c.beginPath();c.moveTo(MX-29,yb+2);c.lineTo(MX-29,yb+24);c.stroke()
  for(const g of[-1,1]){rr(c,MX+g*22-13,yb+33,26,17,2);c.fillStyle='#dfe4ea';c.lineWidth=4.5;c.strokeStyle='#111';c.fill();c.stroke()}
  rr(c,MX+28,yb-14,22,30,5);c.fillStyle='#5c6573';c.fill();c.stroke()
  c.beginPath();c.arc(MX+39,yb+1,4.5,0,2*P);c.fillStyle=pw?'#7fe3ff':'#2b3440';c.lineWidth=2.5;c.fill();c.stroke()
  // field lines and sparks while live
  if(pw){
    c.setLineDash([5,7]);c.lineDashOffset=-t*120;c.lineWidth=3;c.strokeStyle='#5fcfff'
    for(const k of[0,1,2]){c.beginPath();c.ellipse(MX,yb+50,22+k*13,10+k*14,0,P,0,true);c.stroke()}
    c.setLineDash([]);c.lineWidth=3
    const f=Math.floor(t*32)%2?1:-1
    for(const[x,y,a]of[[MX-44,yb-4,P],[MX-30,yb-40,P*1.25],[MX+4,yb-52,P*1.5]]){
      const ca=Math.cos(a),sa=Math.sin(a),p=(d,o)=>[x+ca*d-sa*o,y+sa*d+ca*o]
      c.beginPath();c.moveTo(...p(0,0));c.lineTo(...p(6,4*f));c.lineTo(...p(10,-3*f));c.lineTo(...p(16,2*f));c.stroke()}
    c.strokeStyle='#111'
  }
  // hardware
  for(const[k,[n,col,fx,fy,fa,sx,sy,sa,s]]of it.entries()){
    const h=held[k],tx=MX+sx,ty=yb+50+sy
    let x,y,a
    if(t<.66){
      const e=h**2.4,jit=h==0&&t>.12?Math.sin(t*900+k)*1.2:0
      x=lerp(fx,tx,e);y=lerp(fy,ty,e)-Math.sin(P*h)*8+jit;a=lerp(fa,sa,ez(h))+(h==1?Math.sin((t-s)*2*P*5)*(sy>30?.12:.04)*cl((.62-t)/.1+1):0)
    }else{
      const f=cl((t-.66-k*.012)/.1),b=cl((t-.66-k*.012-.1)/.1)
      x=lerp(tx,fx,ez(f));y=lerp(ty,fy,f*f)-Math.sin(P*b)*7*(1-b);a=lerp(sa,fa,ez(f))
    }
    c.save();c.translate(x,y);c.rotate(a);c.scale(Z,Z);D[n](c,col);c.restore()
  }
}
