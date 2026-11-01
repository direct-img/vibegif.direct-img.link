// underwater ROV robot seen through a brass submarine porthole: yellow-foam submersible with tubular frame, spinning rear thruster, headlight beams, grabber claw and orange tether, bobbing nose-down as bubbles rise and marine snow glints
export const frames=24
let s=7
const R=()=>(s=s*16807%2147483647)/2147483647,P=Math.PI,TAU=2*P
const snow=[...Array(46)].map(()=>[R()*256,R()*256,R(),R()*1.6+.6])
const bub=[...Array(9)].map((_,k)=>[k/9+R()*.05,R()*TAU,R()*2+3])
export default(c,t,i)=>{
  const sn=Math.sin,cs=Math.cos,w=TAU*t
  c.save();c.beginPath();c.arc(128,128,106,0,TAU);c.clip()
  // water
  let g=c.createLinearGradient(0,22,0,234);g.addColorStop(0,'#2b8fbf');g.addColorStop(.55,'#145a86');g.addColorStop(1,'#0a2744')
  c.fillStyle=g;c.fillRect(0,0,256,256)
  // light shafts from the surface
  for(let k=0;k<4;k++){
    const x=40+k*52,a=.06+k%2*.05
    c.fillStyle=`rgba(200,240,255,${a})`;c.beginPath();c.moveTo(x,10);c.lineTo(x+22,10);c.lineTo(x-28,250);c.lineTo(x-62,250);c.fill()
  }
  // ROV transform: bob + slight nose-down pitch
  const y=134+sn(w)*5,p=.12+sn(w+1)*.035
  // marine snow, brighter where the lamps hit
  for(const[x,y0,f,r]of snow){
    const u=(t+f)%1,yy=y0-u*18,a=sn(u*P)
    const lit=x>180&&Math.abs(yy-y-(x-128)*p-8)<(x-180)*.6+20
    c.fillStyle=lit?`rgba(255,250,215,${a})`:`rgba(200,232,245,${a*.6})`
    c.beginPath();c.arc(x+sn(u*TAU+f*9)*2,yy,lit?r+.8:r,0,TAU);c.fill()
  }
  c.save();c.translate(120,y);c.rotate(p);c.scale(1.05,1.05)
  // lamp beams
  for(const ly of[-6,24]){
    const b=c.createLinearGradient(62,0,200,0);b.addColorStop(0,'rgba(255,248,200,.75)');b.addColorStop(1,'rgba(255,248,200,0)')
    c.fillStyle=b;c.beginPath();c.moveTo(62,ly-3);c.lineTo(200,ly-44);c.lineTo(200,ly+50);c.lineTo(62,ly+3);c.fill()
  }
  c.lineWidth=5
  // tether
  c.strokeStyle='#111';c.lineWidth=9
  const sw=sn(w)*10,teth=()=>{c.beginPath();c.moveTo(-40,-38);c.bezierCurveTo(-52,-80,-90+sw,-100,-96+sw,-200);c.stroke()}
  teth();c.strokeStyle='#ff7a1a';c.lineWidth=4;teth()
  // rear thruster: duct + spinning blades
  const pipe=(pts,cl='#8d99a6')=>{c.beginPath();pts.forEach(([a,b],k)=>k?c.lineTo(a,b):c.moveTo(a,b));c.strokeStyle='#111';c.lineWidth=10;c.stroke();c.strokeStyle=cl;c.lineWidth=4;c.stroke()}
  pipe([[-50,10],[-64,10]])
  c.fillStyle='#2a3440';c.beginPath();c.ellipse(-70,10,8,17,0,0,TAU);c.fill()
  c.strokeStyle='#c7d2dc';c.lineWidth=3
  for(let k=0;k<3;k++){const q=w*5+k*TAU/3;c.beginPath();c.moveTo(-70,10);c.lineTo(-70+cs(q)*5,10+sn(q)*14);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.ellipse(-70,10,8,17,0,0,TAU);c.stroke()
  c.fillStyle='#ff7a1a';c.beginPath();c.ellipse(-70,10,3,5,0,0,TAU);c.fill()
  // frame
  pipe([[-56,32],[60,32]]);pipe([[-50,-10],[-50,32]]);pipe([[2,-10],[2,32]]);pipe([[50,-10],[50,32]])
  // pods inside the frame
  c.lineWidth=5;c.strokeStyle='#111'
  c.fillStyle='#e8ecef';c.beginPath();c.roundRect(-44,-4,42,14,7);c.fill();c.stroke()
  c.fillStyle='#9aa6b2';c.fillRect(-38,-1,4,8);c.fillRect(-14,-1,4,8)
  c.fillStyle='#4f5b67';c.beginPath();c.roundRect(-40,14,36,12,3);c.fill();c.stroke()
  c.fillStyle='#ff7a1a';c.beginPath();c.roundRect(10,0,32,22,4);c.fill();c.stroke()
  c.fillStyle='#ffd23f';c.beginPath();c.arc(26,11,4,0,TAU);c.fill()
  // grabber arm
  const cl=.35+.3*sn(w*2)
  pipe([[44,32],[56,46],[72,44]],'#c7d2dc')
  c.save();c.translate(72,44);c.strokeStyle='#111';c.lineWidth=5
  for(const d of[-1,1]){c.beginPath();c.moveTo(0,0);c.lineTo(8,d*(4+cl*6));c.lineTo(14,d*(1+cl*3));c.stroke()}
  c.restore()
  // foam buoyancy block
  c.fillStyle='#f6c43a';c.beginPath();c.roundRect(-62,-42,124,34,8);c.fill()
  c.save();c.clip();c.fillStyle='#d49a18';c.fillRect(-70,-18,140,12);c.fillStyle='#ffe08a';c.fillRect(-52,-37,70,5)
  c.fillStyle='#222';for(let k=0;k<4;k++)c.fillRect(-58+k*30,-16,14,6);c.restore()
  c.beginPath();c.roundRect(-62,-42,124,34,8);c.stroke()
  for(const x of[-34,30]){c.beginPath();c.arc(x,-46,4,P,TAU);c.stroke()}
  // camera dome + lamps
  c.fillStyle='#16263a';c.beginPath();c.arc(56,8,11,-P/2,P/2);c.fill();c.stroke()
  c.fillStyle='#7fd0ff';c.beginPath();c.arc(59,4,3,0,TAU);c.fill()
  for(const ly of[-6,24]){
    c.fillStyle='#4f5b67';c.beginPath();c.roundRect(50,ly-5,12,10,2);c.fill();c.stroke()
    c.fillStyle='#fff7c8';c.fillRect(60,ly-3,4,6)
  }
  c.restore()
  // bubbles rising from the vents
  for(const[f,ph,r]of bub){
    const u=(t+f)%1,bx=(f*9%2<1?78:98)+sn(u*TAU*2+ph)*4,by=y-50-u*130
    c.strokeStyle=`rgba(225,248,255,${1-u*.35})`;c.lineWidth=2.5;c.beginPath();c.arc(bx,by,r*(.5+u*.6),0,TAU);c.stroke()
    c.fillStyle='rgba(255,255,255,.8)';c.beginPath();c.arc(bx-r*.25,by-r*.25,1.2,0,TAU);c.fill()
  }
  // glass glare
  c.strokeStyle='rgba(255,255,255,.16)';c.lineWidth=14;c.beginPath();c.arc(128,128,86,P*1.08,P*1.42);c.stroke()
  c.restore()
  // brass porthole ring with bolts
  c.lineWidth=5;c.strokeStyle='#111'
  c.fillStyle='#c48f38';c.beginPath();c.arc(128,128,124,0,TAU);c.arc(128,128,104,0,TAU,1);c.fill()
  c.strokeStyle='#e9c46a';c.lineWidth=4;c.beginPath();c.arc(128,128,119,P*.95,P*1.6);c.stroke()
  c.strokeStyle='#8c5f1c';c.beginPath();c.arc(128,128,109,P*.05,P*.7);c.stroke()
  c.strokeStyle='#111';c.lineWidth=5
  c.beginPath();c.arc(128,128,124,0,TAU);c.stroke();c.beginPath();c.arc(128,128,104,0,TAU);c.stroke()
  for(let k=0;k<8;k++){
    const q=k*P/4+P/8,bx=128+cs(q)*114,by=128+sn(q)*114
    c.fillStyle='#f2d58a';c.lineWidth=3;c.beginPath();c.arc(bx,by,5,0,TAU);c.fill();c.stroke()
  }
}
