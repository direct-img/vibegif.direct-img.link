// ferris wheel turning clockwise on a slate-blue A-frame stand: white outlined rim, grey spokes and a red hub, eight hanging cabins alternating coral with a yellow roof and teal with a violet roof, staying upright and swaying gently as the wheel eases along
const{sin,cos,PI}=Math,T=2*PI
export const frames=15,delay=60
const X=128,Y=104,R=74,C=[['#ff6b5e','#ffc533'],['#25c2b0','#8c6cff']]
// outlined bar: dark stroke with a coloured core
const bar=(c,w,f,p)=>{c.beginPath(),p(),c.lineWidth=w+7,c.strokeStyle='#111',c.stroke(),c.lineWidth=w,c.strokeStyle=f,c.stroke()}
export default(c,t)=>{
 // a quarter turn per loop (cabin styles repeat every two), speed eases a little
 const ph=PI/2*(t-.08*sin(T*t)),sw=.1*sin(T*t-.6)
 c.translate(X,Y)
 // stand behind the wheel
 bar(c,9,'#6f87a8',()=>{c.moveTo(-58,118),c.lineTo(0,0),c.lineTo(58,118),c.moveTo(-36,72),c.lineTo(36,72)})
 c.lineWidth=6,c.fillStyle='#6f87a8',c.beginPath(),c.roundRect(-78,114,156,14,7),c.fill(),c.stroke()
 // spokes and rim
 c.beginPath()
 for(let k=0;k<8;k++){const a=ph+k*T/8;c.moveTo(0,0),c.lineTo(R*cos(a),R*sin(a))}
 c.lineWidth=5,c.strokeStyle='#8a97aa',c.stroke()
 bar(c,7,'#f4f6f9',()=>c.arc(0,0,R,0,T))
 c.lineWidth=5,c.strokeStyle='#111',c.fillStyle='#ff5a5f',c.beginPath(),c.arc(0,0,13,0,T),c.fill(),c.stroke()
 // cabins hang from the rim, upright, with a little swing
 for(let k=0;k<8;k++){
  const a=ph+k*T/8,[b,r]=C[k%2]
  c.save(),c.translate(R*cos(a),R*sin(a)),c.rotate(sw+.06*sin(4*a))
  c.lineWidth=5,c.beginPath(),c.moveTo(0,0),c.lineTo(0,10),c.stroke()
  c.fillStyle=b,c.beginPath(),c.roundRect(-15,10,30,23,[3,3,11,11]),c.fill(),c.stroke()
  c.fillStyle=r,c.beginPath(),c.roundRect(-17,4,34,10,5),c.fill(),c.stroke()
  c.fillStyle='#f4f6f9',c.beginPath(),c.arc(0,0,4.5,0,T),c.fill(),c.stroke()
  c.restore()
 }
}
