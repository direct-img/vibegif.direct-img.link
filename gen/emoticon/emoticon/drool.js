// emoticon drooling over a floating drumstick, glossy eyes locked on it, tongue lolling while a drip stretches from the mouth and falls
export const frames=28,delay=85
const P=Math.PI,B='#111',G='#9a9a9a',S=Math.sin,C=Math.cos,cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x))
export default(c,t)=>{
  const a=2*P*t,fy=6*S(a),ey=1.5*S(a-.6),
  ink=w=>{c.lineWidth=w+5;c.strokeStyle='#fff';c.stroke();c.lineWidth=w;c.strokeStyle=B;c.stroke()},
  spark=(x,y,r)=>{if(r<1)return;c.beginPath();for(let n=0;n<8;n++){const q=n*P/4,l=n%2?r*.3:r;c.lineTo(x+l*C(q),y+l*S(q))}c.closePath();c.lineWidth=5;c.strokeStyle='#fff';c.stroke();c.fillStyle=B;c.fill()}
  c.save();c.translate(122,134);c.rotate(.07)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  for(const s of[-1,1]){
    // big glossy eyes gazing up at the food, following it
    const x=s*34+7,y=-12+ey
    c.beginPath();c.ellipse(x,y,15,19,0,0,2*P);c.fillStyle=B;c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+5,y-8,6,0,2*P);c.fill();c.beginPath();c.arc(x-4,y+7,3,0,2*P);c.fill()
    c.lineWidth=6;c.strokeStyle=B;c.beginPath();c.moveTo(x-13,y-31);c.quadraticCurveTo(x,y-43,x+13,y-33);c.stroke()
  }
  // slack open mouth, tongue lolling over the bottom lip
  const mo=()=>{c.beginPath();c.ellipse(1,50,25,17,-.06,0,2*P)}
  mo();c.fillStyle=B;c.fill();c.lineWidth=5;c.strokeStyle=B;c.stroke()
  const tg=()=>{c.beginPath();c.moveTo(-6,56);c.bezierCurveTo(-6,76,22,80,22,60);c.bezierCurveTo(20,50,-4,48,-6,56)}
  tg();c.fillStyle=G;c.fill();c.lineWidth=4.5;c.stroke()
  c.beginPath();c.moveTo(8,58);c.lineTo(9,67);c.lineWidth=3;c.stroke()
  // drool: a drip swells and stretches from the corner, snaps off and falls away
  const L=t<.6?4+42*ez(t/.6):4+42*(1-ez((t-.6)/.14)),r=5+5*cl(L/46),x0=-24,y0=44,
  drop=(x,y,r,top)=>{c.beginPath();c.moveTo(x-5,top);c.bezierCurveTo(x-2,top+(y-top)*.45,x-r,y-r*1.3,x-r,y);c.arc(x,y,r,P,0,true);c.bezierCurveTo(x+r,y-r*1.3,x+2,top+(y-top)*.45,x+5,top)
    c.fillStyle=G;c.fill();c.lineWidth=3.5;c.strokeStyle=B;c.stroke();c.beginPath();c.arc(x,y,r*.55,P*.6,P*.95);c.lineWidth=2.5;c.strokeStyle='#fff';c.stroke()}
  drop(x0,y0+L,r,y0)
  if(t>.6&&t<.88){const v=(t-.6)/.28,d=9*(1-ez((v-.45)/.55)),y=y0+48+v*v*28;if(d>1)drop(x0,y,d,y-d*2.6)}
  c.restore()
  // the drumstick, bobbing in the corner with twinkles
  c.save();c.translate(208,50+fy*.85);c.rotate(-.55+.1*S(a))
  const bone=()=>{c.beginPath();c.moveTo(4,-5);c.lineTo(27,-5);c.arc(32,-10,7,P*.8,P*2.1);c.arc(32,2,7,P*1.9,P*1.2);c.lineTo(4,5)},
  meat=()=>{c.beginPath();c.moveTo(8,-6);c.bezierCurveTo(-2,-22,-38,-24,-38,0);c.bezierCurveTo(-38,24,-2,22,8,6);c.closePath()}
  bone();ink(4.5);c.fillStyle='#fff';c.fill()
  meat();ink(5.5);c.fillStyle='#fff';c.fill()
  c.beginPath();c.moveTo(-30,8);c.quadraticCurveTo(-18,16,-4,8);c.lineWidth=5;c.strokeStyle=G;c.stroke()
  c.restore()
  spark(236,92+fy*.5,9*ez(1-Math.abs((t*2)%1-.5)*3))
  spark(168,16+fy*.5,8*ez(1-Math.abs(((t*2)+.5)%1-.5)*3))
}
