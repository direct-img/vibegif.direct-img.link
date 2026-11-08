// round orange and cream hamster running flat out inside a mint exercise wheel on a grey stand, legs whirling, pink-blushed cheeks bouncing and body bobbing while the spokes spin, bold black outlines
export const frames=24,delay=50
const{sin,cos,PI}=Math,T=2*PI,X=128,Y=112,R=86
export default(c,t)=>{
  const w=T/3*t,ph=T*4*t,bob=-2.5*sin(2*ph),hx=X+3*sin(T*t),hy=136+bob
  // stand behind the wheel
  for(const s of[-1,1]){
    c.lineWidth=20,c.beginPath(),c.moveTo(X,Y),c.lineTo(X+s*50,230),c.stroke()
    c.lineWidth=10,c.strokeStyle='#8e9ab0',c.stroke(),c.strokeStyle='#111'
  }
  // wheel: pale disc, spokes, rim band with rivets
  c.save(),c.translate(X,Y),c.rotate(w)
  c.fillStyle='#e6f5f1',c.beginPath(),c.arc(0,0,R,0,T),c.fill()
  c.beginPath();for(let k=0;k<6;k++){const a=k*PI/3;c.moveTo(0,0),c.lineTo(76*cos(a),76*sin(a))}
  c.lineWidth=8,c.strokeStyle='#5aa89b',c.stroke(),c.strokeStyle='#111'
  c.lineWidth=20,c.beginPath(),c.arc(0,0,R-7,0,T),c.stroke(),c.lineWidth=11,c.strokeStyle='#7fd3c3',c.stroke(),c.strokeStyle='#111'
  c.fillStyle='#3f8f82';for(let k=0;k<12;k++){const a=k*PI/6+PI/12;c.beginPath(),c.arc((R-7)*cos(a),(R-7)*sin(a),2.6,0,T),c.fill()}
  c.fillStyle='#c9d3dc',c.lineWidth=6,c.beginPath(),c.arc(0,0,11,0,T),c.stroke(),c.fill()
  c.restore()
  c.save(),c.translate(hx,hy)
  // legs tucked under the body: paws trace little loops, pairs half a stride apart
  const leg=(x,p,f)=>{
    const px=x+14*cos(p),py=35+7*sin(p)
    c.lineWidth=15,c.beginPath(),c.moveTo(x,12),c.lineTo(px,py),c.stroke(),c.lineWidth=8,c.strokeStyle=f,c.stroke(),c.strokeStyle='#111'
    c.fillStyle='#f7a3a8',c.beginPath(),c.arc(px,py,4,0,T),c.fill()
  }
  leg(-20,ph+PI*.9,'#d9965a'),leg(20,ph+PI*.4,'#d9965a'),leg(-12,ph-PI*.1,'#f2b46d'),leg(28,ph+PI*1.4,'#f2b46d')
  // body and head as one outlined blob, tail nub
  c.lineWidth=5,c.fillStyle='#f2b46d',c.beginPath(),c.arc(-44,-2,6,0,T),c.stroke(),c.fill()
  const blob=()=>{c.beginPath(),c.ellipse(-6,0,40,30,0,0,T),c.moveTo(46,-10),c.arc(24,-10,22,0,T)}
  c.lineWidth=14,blob(),c.stroke(),c.fillStyle='#f2b46d',blob(),c.fill()
  c.fillStyle='#fff1db',c.beginPath(),c.ellipse(6,12,26,15,-.15,0,T),c.fill()
  c.fillStyle='#e39d55',c.beginPath(),c.ellipse(-18,-14,13,8,-.3,0,T),c.fill()
  // ears
  for(const[ex,ey]of[[11,-33],[27,-35]])c.lineWidth=5,c.fillStyle='#f2b46d',c.beginPath(),c.arc(ex,ey,8.5,0,T),c.stroke(),c.fill(),c.fillStyle='#f7a3a8',c.beginPath(),c.arc(ex,ey+1,4.5,0,T),c.fill()
  // bouncing cheek pouch, eye, nose
  const ck=1+.14*sin(2*ph-1)
  c.save(),c.translate(32,1),c.scale(ck,2-ck),c.lineWidth=4,c.fillStyle='#fff1db',c.beginPath(),c.arc(0,0,12,0,T),c.stroke(),c.fill()
  c.fillStyle='#f7a3a8',c.beginPath(),c.ellipse(1,2,5.5,3.5,0,0,T),c.fill(),c.restore()
  c.fillStyle='#111',c.beginPath(),c.arc(30,-17,5,0,T),c.fill(),c.fillStyle='#fff',c.beginPath(),c.arc(31.6,-18.6,1.8,0,T),c.fill()
  c.fillStyle='#ff7d8e',c.beginPath(),c.arc(46,-10,3.8,0,T),c.fill()
  c.restore()
}
