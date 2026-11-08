// green snake curled in a ring biting its own tapering tail, its dark green back diamonds and pale yellow belly scales flowing steadily round the ring and into its mouth, white eye that blinks once
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=28,delay=60
const Rc=82,W=32,a0=.2,a1=T-.22,N=90,P=.34
// body half-width at a, measured counter-clockwise back from the head
const hw=a=>W/2*min(1,(a1-a)/1.8+.2)
const pt=(a,r)=>[r*cos(-a),r*sin(-a)]
export default(c,t)=>{
 c.translate(128,128),c.rotate(-PI/2-.5) // head sits upper left
 const ring=(o,i)=>{
  c.beginPath()
  for(let k=0;k<=N;k++){const a=a0+(a1-a0)*k/N;c.lineTo(...pt(a,Rc+o*hw(a)))}
  for(let k=N;k>=0;k--){const a=a0+(a1-a0)*k/N;c.lineTo(...pt(a,Rc+i*hw(a)))}
  c.closePath()
 }
 c.lineWidth=6,ring(1,-1),c.fillStyle='#3fae4f',c.fill(),c.stroke()
 c.save(),ring(1,-1),c.clip()
 // belly band on the inner side
 ring(-.3,-1),c.fillStyle='#e8f08a',c.fill()
 // skin flows round three diamonds per loop, from under the head into the mouth
 const s=3*P*t
 c.strokeStyle='#8fae3c',c.lineWidth=2.5,c.beginPath()
 for(let a=a0+s%(P/2);a<a1;a+=P/2)c.moveTo(...pt(a,Rc-hw(a)*.3)),c.lineTo(...pt(a,Rc-hw(a)-2))
 c.stroke()
 c.fillStyle='#1f6e35'
 for(let a=a0+s%P;a<a1;a+=P){
  const h=hw(a),r=Rc+h*.35,d=h*.8/Rc
  c.beginPath(),c.moveTo(...pt(a-d,r)),c.lineTo(...pt(a,r+h*.48)),c.lineTo(...pt(a+d,r)),c.lineTo(...pt(a,r-h*.48)),c.fill()
 }
 c.restore()
 c.strokeStyle='#111',c.lineWidth=6,ring(1,-1),c.stroke()
 // head at angle 0 facing clockwise, snout over the tail tip
 c.save(),c.translate(Rc,0),c.rotate(PI/2),c.scale(1.12,1.12),c.lineWidth=5.5
 c.fillStyle='#3fae4f',c.beginPath(),c.moveTo(-27,0)
 c.bezierCurveTo(-27,-21,-4,-24,12,-18),c.bezierCurveTo(25,-13,33,-6,32,1)
 c.bezierCurveTo(31,10,20,17,7,19),c.bezierCurveTo(-9,21,-27,17,-27,0),c.fill(),c.stroke()
 c.fillStyle='#e8f08a',c.beginPath(),c.moveTo(29,6),c.bezierCurveTo(22,15,8,17,-4,15),c.quadraticCurveTo(10,8,29,6),c.fill()
 c.lineWidth=4,c.beginPath(),c.moveTo(31,3),c.quadraticCurveTo(16,9,2,7),c.stroke() // mouth
 c.fillStyle='#1f6e35',c.beginPath(),c.ellipse(-12,-9,7,4.5,.3,0,T),c.fill() // head marking
 const bl=t>.62&&t<.7 // blink
 c.fillStyle='#fff',c.beginPath(),c.arc(8,-7,7.5,0,T),c.fill(),c.stroke()
 c.fillStyle='#111'
 if(bl)c.beginPath(),c.moveTo(1,-7),c.lineTo(15,-7),c.stroke()
 else c.beginPath(),c.arc(10,-7,4,0,T),c.fill()
 c.beginPath(),c.arc(24,-6,2.2,0,T),c.fill() // nostril
 c.restore()
}
