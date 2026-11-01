// robot fish swimming side-on: riveted steel armor segments and a forked orange tail swish in a wave, cyan glowing eye, blinking antenna, pectoral fin paddling, bubbles rising from its mouth
export const frames=24,delay=50
const P=Math.PI*2
const plate=(c,L,h0,h1,g)=>{
  // armor plate from the joint to its convex rear edge, rivets along the edge
  c.beginPath();c.moveTo(-8,-h0);c.lineTo(L,-h1);c.quadraticCurveTo(L+12,0,L,h1);c.lineTo(-8,h0);c.closePath()
  c.fillStyle=g;c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#111'
  for(const y of[-.55,0,.55]){c.beginPath();c.arc(L-3,y*h1,2.2,0,P);c.fill()}
}
export default(c,t)=>{
  const s=x=>Math.sin(P*t-x),y0=150+5*Math.sin(P*t+1)
  // bubbles
  for(let k=0;k<3;k++){
    const u=(t+k/3)%1,r=Math.min(1,u*6)*(3.5+k*1.5)
    c.beginPath();c.arc(30+4*Math.sin(P*u*2+k),y0-4-u*104,r,0,P)
    c.fillStyle='#bfe9f5';c.lineWidth=2.5;c.fill();c.stroke()
  }
  c.translate(128,y0);c.scale(1.06,1.06)
  const g=c.createLinearGradient(0,-40,0,40)
  g.addColorStop(0,'#eef3f7');g.addColorStop(.55,'#c9d5df');g.addColorStop(1,'#8fa3b4')
  // spine: head joint then 3 plates and tail, each bending a bit more, lagging behind
  const L=[32,26,22],H=[[36,30],[30,21],[21,12]],A=[.16,.22,.3,.42]
  let x=-18,y=0,a=-.07*s(-.6)
  const J=[[x,y,a]]
  for(let k=0;k<4;k++){
    a+=A[k]*s(k*.9+.9)*.75
    J.push([x,y,a]);if(k<3)x+=L[k]*Math.cos(a),y+=L[k]*Math.sin(a)
  }
  const at=(j,f)=>{c.save();c.translate(J[j][0],J[j][1]);c.rotate(J[j][2]);f();c.restore()}
  // tail fin: forked, ribbed
  at(4,()=>{
    c.beginPath();c.moveTo(-4,-9);c.lineTo(36,-34);c.quadraticCurveTo(24,0,36,34);c.lineTo(-4,9);c.closePath()
    c.fillStyle='#ffb347';c.lineWidth=5;c.fill();c.stroke()
    c.lineWidth=2.5;for(const v of[-22,-9,9,22]){c.beginPath();c.moveTo(2,v*.2);c.lineTo(28,v);c.stroke()}
  })
  for(let k=2;k>=0;k--)at(k+1,()=>{
    if(!k){
      // dorsal fin riding on the first plate
      c.beginPath();c.moveTo(0,-32);c.lineTo(10,-52);c.quadraticCurveTo(22,-46,30,-28);c.closePath()
      c.fillStyle='#ffb347';c.lineWidth=4;c.fill();c.stroke()
      c.lineWidth=2;c.beginPath();c.moveTo(7,-32);c.lineTo(12,-46);c.moveTo(16,-31);c.lineTo(20,-44);c.stroke()
    }
    plate(c,L[k],H[k][0],H[k][1],g)
    c.lineWidth=2;c.beginPath();c.moveTo(L[k]*.4,-H[k][0]*.8);c.lineTo(L[k]*.4,H[k][0]*.8);c.stroke()
  })
  at(0,()=>{
    // antenna with a blinking tip
    c.lineWidth=3;c.beginPath();c.moveTo(-30,-38);c.quadraticCurveTo(-34,-52,-26,-60);c.stroke()
    c.beginPath();c.arc(-26,-61,5,0,P);c.fillStyle=t%.5<.25?'#ff4040':'#7a2020';c.lineWidth=2.5;c.fill();c.stroke()
    // head
    c.beginPath();c.moveTo(-4,-38);c.bezierCurveTo(-46,-44,-74,-18,-76,6);c.lineTo(-70,12)
    c.bezierCurveTo(-58,34,-30,40,-4,36);c.quadraticCurveTo(10,0,-4,-38)
    c.fillStyle=g;c.lineWidth=5;c.fill();c.stroke()
    c.lineWidth=2.5
    c.beginPath();c.moveTo(-76,6);c.lineTo(-60,8);c.stroke()
    c.beginPath();c.moveTo(-18,-32);c.quadraticCurveTo(-28,0,-18,32);c.stroke()
    c.fillStyle='#111'
    for(const v of[-20,-6,8,22]){c.beginPath();c.arc(-21.5+Math.abs(v)*.12,v,2.2,0,P);c.fill()}
    // eye: bezel, glowing lens, glint
    c.beginPath();c.arc(-48,-10,12,0,P);c.fillStyle='#555f69';c.lineWidth=3.5;c.fill();c.stroke()
    c.beginPath();c.arc(-48,-10,7,0,P);c.fillStyle='#3fe6ff';c.fill()
    c.beginPath();c.arc(-46,-12,3,0,P);c.fillStyle='#e8ffff';c.fill()
    // pectoral fin paddling on a hinge bolt
    c.save();c.translate(-30,18);c.rotate(.5+.45*s(.4))
    c.beginPath();c.moveTo(0,-5);c.quadraticCurveTo(26,-8,30,4);c.quadraticCurveTo(14,10,0,5);c.closePath()
    c.fillStyle='#ffb347';c.lineWidth=3.5;c.fill();c.stroke()
    c.lineWidth=2;c.beginPath();c.moveTo(3,0);c.lineTo(24,2);c.stroke()
    c.restore()
    c.beginPath();c.arc(-30,18,4,0,P);c.fillStyle='#111';c.fill()
  })
}
