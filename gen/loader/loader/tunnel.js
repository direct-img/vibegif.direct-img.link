// rounded window looking down an endless tunnel of nested squares in a pink, orange, yellow, teal, blue, purple cycle, each square turned a bit more than the last, all shrinking toward the centre so the tunnel twists and zooms inward
const{PI,min}=Math
export const frames=36,delay=50
const P=['#ff5d8f','#ff9f43','#ffd23f','#3ddc97','#38a3f5','#8f6bff'],n=P.length,q=.76,A=.16
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=min(255,D[j]+16&~31)
  }
  c.putImageData(d,0,0)
}
export default(c,t)=>{
  const W=190,o=128-W/2
  c.save();c.beginPath();c.roundRect(o,o,W,W,34);c.fillStyle='#1b1430';c.fill();c.clip()
  // square k sits at depth k+t*n: after one loop every square has moved n places, same color, same angle
  for(let k=-10;k<40;k++){
    const u=k+t*n,s=300*q**u
    if(s>420)continue
    if(s<9)break
    c.save();c.translate(128,128);c.rotate(A*u)
    c.beginPath();c.roundRect(-s/2,-s/2,s,s,s*.08)
    c.fillStyle=P[(k%n+n)%n];c.fill();c.lineWidth=min(5,s*.06+1);c.strokeStyle='#111';c.stroke()
    c.restore()
  }
  c.restore()
  c.beginPath();c.roundRect(o,o,W,W,34);c.lineWidth=9;c.strokeStyle='#111';c.stroke()
  Q(c)
}
