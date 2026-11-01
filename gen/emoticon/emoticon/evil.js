// emoticon with little horns and an evil toothy grin glances shiftily side to side, then chuckles heh heh heh
export const frames=32,delay=60
const K='#111',W='#fff',P=Math.PI,
cl=x=>x<0?0:x>1?1:x,
sm=x=>(x=cl(x),x*x*(3-2*x))
export default(c,t)=>{
  const g=sm((t-.06)/.08)-2*sm((t-.3)/.1)+sm((t-.54)/.08),s=cl((t-.6)/.36),
  h=Math.abs(Math.sin(3*P*s)),q=Math.sin(P*s)**.5
  c.translate(128,128-7*h);c.scale(1+.03*h,1-.03*h)
  // little horns, curling in at the tips
  c.lineWidth=7
  for(const m of[-1,1]){
    c.save();c.scale(m,1);c.rotate(.66);c.beginPath();c.moveTo(-16,-82);c.bezierCurveTo(-14,-104,-2,-120,-10,-130)
    c.bezierCurveTo(10,-120,18,-104,16,-82);c.fill();c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(-14,-102);c.quadraticCurveTo(0,-98,13,-104);c.stroke();c.restore()
  }
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  // narrowed eyes under heavy V brows: glance one way, the other, then squint with glee
  for(const m of[-1,1]){
    const x=36*m,d=8*q
    c.save();c.beginPath();c.moveTo(x-30,-34+12*m+d);c.lineTo(x+30,-34-12*m+d);c.lineTo(x+30,20);c.lineTo(x-30,20);c.clip()
    c.fillStyle=K;c.beginPath();c.ellipse(x+10*g,-14,14,16,0,0,2*P);c.fill();c.restore()
    c.lineWidth=10;c.beginPath();c.moveTo(x-24,-42+16*m+d);c.lineTo(x+24,-42-16*m+d);c.stroke()
  }
  // wide crescent grin full of teeth, stretching wider on each chuckle
  const w=60+4*h,y=14-3*h,top=()=>{c.moveTo(-w,y);c.quadraticCurveTo(0,52,w,y)},
  out=()=>{c.beginPath();top();c.quadraticCurveTo(0,96+6*h,-w,y)}
  c.save();out();c.fillStyle=K;c.fill();c.clip()
  c.fillStyle=W;c.beginPath();c.moveTo(-w,y+14);c.quadraticCurveTo(0,66,w,y+14);c.lineTo(w,y);c.quadraticCurveTo(0,52,-w,y);c.fill()
  c.lineWidth=4;for(let k=-3;k<=3;k++){c.beginPath();c.moveTo(k*16,0);c.lineTo(k*16,70);c.stroke()}
  c.restore();c.lineWidth=7;out();c.stroke()
}
