// emoticon rolls its eyes up and around in exasperation, then droops its lids and sighs out a puff
export const frames=32,delay=60
const K='#111',W='#fff',G='#9a9a9a',P=Math.PI,
cl=x=>x<0?0:x>1?1:x,
sm=x=>(x=cl(x),x*x*(3-2*x))
export default(c,t)=>{
  // pupil path: centre, over to one side, up and over the top, down the other side, back to centre
  const a=sm((t-.06)/.1),th=P*sm((t-.16)/.36),d=sm((t-.52)/.12),
  [px,py]=t<.16?[-13*a,6*(1-a)]:t<.52?[-13*Math.cos(th),-19*Math.sin(th)]:[13*(1-d),6*d],
  up=sm((t-.08)/.1)-sm((t-.5)/.1),        // eyes go wide and the head tips back during the roll
  lid=sm((t-.54)/.1)-sm((t-.9)/.1),        // then heavy, fed-up lids
  s=cl((t-.62)/.3)
  c.translate(128,128);c.rotate(-.07*up+.03*lid)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.translate(0,-8*up+3*lid)
  for(const m of[-1,1]){
    const x=34*m,y=-14,L=y-26-4*up+22*lid
    c.lineWidth=7;c.fillStyle=W;c.beginPath();c.ellipse(x,y,21,25,0,0,2*P);c.fill()
    c.save();c.clip();c.fillStyle=K;c.beginPath();c.arc(x+px,y+py,12,0,2*P);c.fill()
    // the upper lid is skin coloured, sliding down over the eyeball
    c.fillStyle=W;c.beginPath();c.rect(x-30,y-40,60,L-y+40);c.fill();c.restore()
    c.beginPath();c.ellipse(x,y,21,25,0,0,2*P);c.stroke()
    if(L>y-24){c.beginPath();c.moveTo(x-20,L+2*m);c.lineTo(x+20,L-2*m);c.lineWidth=8;c.stroke()}
    // flat brows lifting with the roll
    c.lineWidth=8;c.beginPath();c.moveTo(x-18,-56-6*up+6*lid);c.lineTo(x+18,-56-6*up+6*lid-2*m*lid);c.stroke()
  }
  // flat, fed-up mouth that opens a little to sigh
  const o=Math.sin(P*s)
  c.lineWidth=8;c.beginPath();c.moveTo(-26,46);c.quadraticCurveTo(0,40-6*o,26,46+2*o);c.stroke()
  if(o>.02){
    c.beginPath();c.ellipse(26,45,4+3*o,3+5*o,0,0,2*P);c.fillStyle=K;c.fill()
    // grey sigh puff drifting off from the mouth corner
    const z=Math.sin(P*Math.min(1,s*1.3))**.6,x=40+30*s,y=50+12*s;c.fillStyle=G;c.beginPath()
    for(const[u,v,r]of[[0,0,10],[11,-6,8],[10,7,7]])c.moveTo(x+u*z+r*z,y+v*z),c.arc(x+u*z,y+v*z,r*z,0,2*P)
    c.fill()
  }
}
