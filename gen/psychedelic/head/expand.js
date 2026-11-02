// mind expanding: violet side-profile head with a serene closed eye, its open crown pouring out a swaying rainbow-striped plume with colors cycling and a stream of stars, eyes, spirals and ringed planets that fly out and grow
export const frames=24,delay=75
const P=Math.PI*2,ox=123,oy=128,M=12
const star=c=>{c.beginPath();for(let j=0;j<10;j++){const r=j%2?.45:1,a=j*P/10-P/4;c.lineTo(r*Math.cos(a),r*Math.sin(a))}c.closePath()}
const kinds=[
  (c,h)=>{star(c);c.fillStyle=`hsl(${h},100%,62%)`;c.fill();c.stroke()},
  (c,h)=>{c.beginPath();c.moveTo(-1.1,0);c.quadraticCurveTo(0,-1,1.1,0);c.quadraticCurveTo(0,1,-1.1,0)
    c.fillStyle='#fff';c.fill();c.stroke()
    c.beginPath();c.arc(0,0,.45,0,P);c.fillStyle=`hsl(${h},100%,55%)`;c.fill()
    c.beginPath();c.arc(0,0,.18,0,P);c.fillStyle='#111';c.fill()},
  (c,h)=>{c.beginPath();for(let j=0;j<=40;j++){const a=j*.42,r=j/40;c.lineTo(r*Math.cos(a),r*Math.sin(a))}
    c.save();c.lineWidth*=2.2;c.stroke();c.restore();c.strokeStyle=`hsl(${h},100%,65%)`;c.stroke()},
  (c,h)=>{c.beginPath();c.arc(0,0,.6,0,P);c.fillStyle=`hsl(${h},90%,60%)`;c.fill();c.stroke()
    c.beginPath();c.ellipse(0,0,1.15,.32,-.4,-.15*P,.65*P);c.stroke()}
]
export default(c,t)=>{
  // head
  c.lineWidth=6;c.strokeStyle='#111';c.fillStyle='#8e5cff'
  c.beginPath();c.moveTo(67,oy)
  c.bezierCurveTo(50,160,56,202,88,216);c.lineTo(94,260);c.lineTo(160,260);c.lineTo(158,224)
  c.bezierCurveTo(170,222,186,220,188,208);c.bezierCurveTo(190,200,186,198,190,194)
  c.bezierCurveTo(196,192,194,186,190,185);c.bezierCurveTo(196,183,196,178,192,176)
  c.bezierCurveTo(200,176,209,172,205,166);c.bezierCurveTo(198,158,190,150,186,145)
  c.bezierCurveTo(188,138,184,132,179,oy);c.closePath();c.fill();c.stroke()
  // crown opening full of space
  c.beginPath();c.ellipse(ox,oy,56,10,0,0,P);c.fillStyle='#1a0b3d';c.fill();c.stroke()
  c.fillStyle='#fff'
  for(let j=0;j<7;j++){c.beginPath();c.arc(ox-40+j*13,oy-3+(j*5)%7,1.3,0,P);c.fill()}
  // rainbow plume streaming up out of the crown, swaying as it widens
  const B=[...Array(7)].map(()=>[]),H=24
  for(let j=0;j<=H;j++){
    const v=j/H,y=oy-v*(oy+12),cx=ox+22*v*Math.sin(v*5-t*P),w=50+v*55
    for(let i=0;i<7;i++){
      const e=i%6?5*v*Math.sin(v*7+i*1.7-t*P*2):0
      B[i].push([cx+(i/3-1)*w+e,y])
    }
  }
  for(let i=0;i<6;i++){
    c.beginPath();for(const p of[...B[i],...[...B[i+1]].reverse()])c.lineTo(...p)
    c.fillStyle=`hsl(${i*55-10-t*360},100%,58%)`;c.fill()
  }
  c.lineWidth=5
  for(const i of[0,6]){c.beginPath();for(const p of B[i])c.lineTo(...p);c.stroke()}
  // cosmic bits flying out
  c.strokeStyle='#111'
  for(let k=0;k<M;k++){
    const u=(t+k/M)%1,a=-Math.PI*(.15+.7*((k*7)%M)/(M-1)),d=u*175,s=17*u**.6
    const x=ox+d*Math.cos(a),y=oy-4+d*Math.sin(a)*.95-u*(1-u)*40
    c.save();c.translate(x,y);c.rotate(u*P*(k%2?1:-1));c.scale(s+.01,s+.01);c.lineWidth=Math.min(3,s*.3)/(s+.01)
    kinds[k%4](c,k*97%360);c.restore()
  }
  // face: ear, brow, closed eye, smile, blush
  c.lineWidth=4.5;c.strokeStyle='#111'
  c.fillStyle='#b38cff';c.beginPath();c.ellipse(112,172,10,15,0,0,P);c.fill();c.stroke()
  c.beginPath();c.arc(114,172,5,-1.8,1.8,true);c.stroke()
  c.beginPath();c.arc(168,147,10,1.1*Math.PI,1.6*Math.PI);c.stroke()
  c.beginPath();c.arc(168,153,8,.15*Math.PI,.85*Math.PI);c.stroke()
  for(const q of[.3,.5,.7]){const a=q*Math.PI;c.beginPath();c.moveTo(168+8*Math.cos(a),153+8*Math.sin(a));c.lineTo(168+13*Math.cos(a),153+13*Math.sin(a));c.stroke()}
  c.beginPath();c.moveTo(184,189);c.quadraticCurveTo(180,193,176,190);c.stroke()
  c.fillStyle='#ff7ab8';c.beginPath();c.ellipse(166,174,9,6,0,0,P);c.fill()
}
