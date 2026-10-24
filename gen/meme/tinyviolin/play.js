// blob in profile with eyes shut in mock sorrow saws away at a teeny tiny violin, pinky up, sad little notes drifting off ("world's smallest violin")
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=100,rim=5
const Y='#ffd43b',BL='#ff8787',VW='#e8803a',VD='#9c4a1a',NT='#4dabf7',TR='#74c0fc'
const note=(c,x,y,s,a,two)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  for(const[w,st]of[[12,'#111'],[5,NT]]){c.lineWidth=w;c.strokeStyle=st;c.beginPath();c.moveTo(6,4);c.lineTo(6,-22);if(two)c.lineTo(22,-26),c.lineTo(22,0);else c.quadraticCurveTo(10,-14,18,-12);c.stroke()}
  c.strokeStyle='#111';c.fillStyle=NT;c.lineWidth=4
  for(const x of two?[0,16]:[0])c.beginPath(),c.ellipse(x,4,7.5,5.5,-.4,0,T),c.fill(),c.stroke()
  c.restore()}
export default(c,t)=>{
  const b=sin(t*T*2)
  c.translate(150,132);c.scale(1.22,1.22);c.translate(-180,-120);c.lineWidth=6.5
  // body, facing right
  c.fillStyle=Y;c.beginPath();c.moveTo(22,240);c.bezierCurveTo(14,120,50,56,108,56);c.bezierCurveTo(166,56,190,110,184,240);c.closePath();c.fill();c.stroke()
  // face: shut eye with lashes, worried brow, wobbly pout, a tear rolling down
  c.lineWidth=5;c.beginPath();c.arc(142,104,13,.1*PI,.9*PI);c.stroke()
  c.lineWidth=3.5;c.beginPath();for(const k of[-.7,-.1,.5])c.moveTo(142+sin(k)*13,104+cos(k)*13),c.lineTo(142+sin(k)*19,104+cos(k)*19);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(128,88);c.quadraticCurveTo(142,86,154,78);c.stroke()
  c.fillStyle=BL;c.beginPath();c.ellipse(150,134,12,6,0,0,T);c.fill()
  c.lineWidth=4.5;c.beginPath();for(let x=-8;x<=8;x+=2)c.lineTo(170+x,146-(x*x)/-24-3+1.2*sin(x+t*T*4));c.stroke()
  const tp=(t*2)%1,tx=136-tp*4,ty=124+tp*34;c.fillStyle=TR;c.lineWidth=3.5;c.beginPath();c.moveTo(tx,ty-8);c.quadraticCurveTo(tx+6,ty+2,tx,ty+4);c.quadraticCurveTo(tx-6,ty+2,tx,ty-8);c.fill();c.stroke()
  // the teeny violin under the chin
  c.save();c.translate(200,164);c.rotate(.12)
  c.lineWidth=4.5;c.fillStyle='#343a40';c.beginPath();c.roundRect(2,-3.5,26,7,3.5);c.fill();c.stroke()
  c.fillStyle=VD;c.beginPath();c.arc(32,-1,5.5,0,T);c.fill();c.stroke()
  c.fillStyle=VW;c.beginPath();c.moveTo(-18,0);c.bezierCurveTo(-18,-13,-7,-13,-5,-7);c.bezierCurveTo(-3,-11,9,-12,9,0);c.bezierCurveTo(9,12,-3,11,-5,7);c.bezierCurveTo(-7,13,-18,13,-18,0);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(-12,-6);c.quadraticCurveTo(-9,-4,-11,-1);c.moveTo(-12,6);c.quadraticCurveTo(-9,4,-11,1);c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(-4,-6);c.lineTo(-4,6);c.stroke()
  c.restore()
  // bow sliding across the strings, hand with its pinky up
  const ux=cos(1.95),uy=sin(1.95),o=-12+22*b,bx=198+ux*o,by=163+uy*o
  for(const[w,s]of[[8,'#111'],[3,'#f1f3f5']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(bx-ux*26,by-uy*26),c.lineTo(bx+ux*44,by+uy*44),c.stroke()
  c.strokeStyle='#111';c.lineWidth=2.5;c.beginPath();c.moveTo(bx-ux*26+4,by-uy*26+1);c.lineTo(bx+ux*40+4,by+uy*40+1);c.stroke()
  const hx=bx+ux*50,hy=by+uy*50
  c.lineWidth=6;c.fillStyle=Y;c.beginPath();c.ellipse(hx,hy,13,12,0,0,T);c.fill();c.stroke()
  c.beginPath();c.roundRect(hx+8,hy-20,7,14,3.5);c.fill();c.stroke()
  // sad notes drifting up and away
  for(let k=0;k<3;k++){const p=(t+k/3)%1,s=min(1,p*6)*(1-max(0,p-.8)*5)
    if(s>.05)note(c,212+p*12+6*sin(p*T*1.5+k),140-p*96,s*.75,.3*sin(p*T+k),k==1)}
}
