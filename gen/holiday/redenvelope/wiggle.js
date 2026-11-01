// red envelope wiggling excitedly, then flipping its flap open as a gold coin peeks out and gleams
export const frames=48,delay=50,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),bo=x=>(x=cl(x)-1,1+2.7*x**3+1.7*x*x)
const W=64,T=-70,B=80
export default(c,t)=>{
  const S=(f,b,d,x=-5,y=-4)=>{c.beginPath();f();c.fillStyle=d;c.fill();c.save();c.clip();c.translate(x,y);c.beginPath();f();c.fillStyle=b;c.fill();c.restore();c.beginPath();f();c.stroke()}
  // wiggle (rock on its base), flap angle, coin rise
  const wg=Math.sin(Math.PI*cl((t-.06)/.28)),rot=.17*wg*Math.sin(P*(t-.06)/.28*2.5)
  const fa=Math.PI*(sm((t-.33)/.08)-sm((t-.78)/.08)),cr=bo((t-.38)/.12)-sm((t-.68)/.1)
  const hop=Math.max(0,Math.sin(P*(t-.06)/.28*2.5+Math.PI/2))*6*wg+8*Math.sin(Math.PI*cl((t-.86)/.1))
  c.translate(128,152-hop);c.translate(0,B);c.rotate(rot);c.scale(1+.04*wg*Math.sin(P*t*5),1-.04*wg*Math.sin(P*t*5));c.translate(0,-B)
  const body=()=>c.roundRect(-W,T,W*2,B-T,12)
  const flap=h=>()=>{c.moveTo(-W+2,T+2);c.bezierCurveTo(-W+12,T+h*.8,-22,T+h,0,T+h);c.bezierCurveTo(22,T+h,W-12,T+h*.8,W-2,T+2);c.closePath()}
  const fh=56*Math.cos(fa)
  // back panel and the flap when it is open (inside showing)
  c.lineWidth=7
  S(body,'#c8232d','#9e1820')
  if(fh<0){c.lineWidth=6;S(flap(fh),'#a91c25','#871219',0,4);seal(c,T+fh,fh/56)}
  // coin peeking out of the pocket
  if(cr>.01){
    c.save();c.beginPath();c.rect(-90,-200,180,200+T+4);c.clip()
    const y=T+38-64*cr+3*Math.sin(P*(t-.5)*5)*sm((t-.5)/.04)*(1-sm((t-.64)/.04))
    c.lineWidth=6
    S(()=>c.arc(0,y,34,0,P),'#fbd04a','#d99a1c',-5,-4)
    c.lineWidth=3;c.beginPath();c.arc(0,y,24,0,P);c.stroke()
    c.lineWidth=4;c.fillStyle='#9e1820';c.beginPath();c.rect(-8,y-8,16,16);c.fill();c.stroke()
    c.lineWidth=3;for(let j=0;j<4;j++){const a=j*Math.PI/2;c.beginPath();c.moveTo(Math.cos(a)*13,y+Math.sin(a)*13);c.lineTo(Math.cos(a)*19,y+Math.sin(a)*19);c.stroke()}
    // gleam sweeping across
    const g=cl((t-.5)/.14)
    if(g>0&&g<1){c.save();c.beginPath();c.arc(0,y,31,0,P);c.clip();c.translate(-46+92*g,y);c.rotate(.6);c.fillStyle='rgba(255,255,255,.85)';c.fillRect(-5,-40,10,80);c.restore()}
    c.restore()
  }
  // front pocket
  c.lineWidth=7
  S(()=>{c.moveTo(-W,T+6);c.lineTo(W,T+6);c.lineTo(W,B-12);c.quadraticCurveTo(W,B,W-12,B);c.lineTo(-W+12,B);c.quadraticCurveTo(-W,B,-W,B-12);c.closePath()},'#e5413a','#b8262c',-7,-4)
  // gold trim and medallion
  c.strokeStyle='#f3bd3a';c.lineWidth=3;c.beginPath();c.roundRect(-W+10,T+16,W*2-20,B-T-26,6);c.stroke();c.strokeStyle='#111'
  c.lineWidth=5
  S(()=>c.arc(0,24,28,0,P),'#f8c843','#d0901c',-3,-3)
  c.fillStyle='#d23c3c';c.lineWidth=3
  for(let j=0;j<5;j++){const a=j*P/5-Math.PI/2;c.beginPath();c.arc(Math.cos(a)*10,24+Math.sin(a)*10,7.5,0,P);c.fill();c.stroke()}
  c.fillStyle='#f8c843';c.beginPath();c.arc(0,24,5,0,P);c.fill();c.stroke()
  // closed flap over the front
  if(fh>=0){c.lineWidth=6;S(flap(fh),'#e5413a','#b8262c',-5,-5);seal(c,T+fh,fh/56)}
  // sparkles around the coin
  for(let j=0;j<3;j++){
    const q=(t-.47-j*.06)/.16
    if(q>0&&q<1)tw(c,[-54,52,-44][j],[T-26,T-44,T-52][j],[13,14,11][j]*Math.sin(Math.PI*q))
  }
}
// round gold button on the flap tip, squashed as the flap turns
const seal=(c,y,k)=>{c.save();c.translate(0,y);c.scale(1,Math.max(.15,Math.abs(k)));c.beginPath();c.arc(0,0,9,0,P);c.fillStyle='#f8c843';c.lineWidth=4;c.fill();c.stroke();c.restore()}
// four point twinkle
const tw=(c,x,y,z)=>{
  if(z<.6)return
  c.beginPath()
  for(let j=0;j<8;j++){const a=j*Math.PI/4,r=j%2?z*.32:z;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
  c.closePath();c.fillStyle='#ffd23f';c.lineWidth=2.5;c.fill();c.stroke()
}
