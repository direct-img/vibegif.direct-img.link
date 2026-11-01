// red glass bauble swinging like a pendulum from a ribbon tied to a pine twig, its shine staying put
export const frames=24,delay=60,rim=6
const P=Math.PI*2,O='#1d1418',R=58,sn=Math.sin,cs=Math.cos
// twig centreline: left end -> right end, slightly rising
const tw=u=>[20+216*u,52-22*u-10*sn(Math.PI*u)]
// needles: back layer long and splayed, front layer shorter and swept toward the tip
const nd=(c,w,col,f)=>{
  c.strokeStyle=col;c.lineWidth=w;c.beginPath()
  for(let k=1;k<36;k++){
    const u=(k+f*.5)/36.5,[x,y]=tw(u),L=(f?24:30)*(.4+.6*sn(Math.PI*Math.min(1,u*1.15))),j=sn(k*12.9+f)*.15
    for(const s of[-1,1]){const a=s*((f?.75:1.2)+j);c.moveTo(x,y);c.lineTo(x+L*cs(a),y+L*sn(a))}
  }
  c.stroke()
}
export default(c,t)=>{
  c.translate(0,24)
  const th=.3*sn(P*t),[px,py]=tw(.5)
  // pine twig: needle outline pass, back needles, branch, front needles
  for(const[w,col,f]of[[9,O,0],[9,O,1],[3.5,'#237a45',0]])nd(c,w,col,f)
  c.strokeStyle=O;c.lineWidth=12;c.beginPath();for(let k=0;k<=20;k++)c.lineTo(...tw(k/20));c.stroke()
  c.strokeStyle='#8a5634';c.lineWidth=5;c.stroke()
  nd(c,3.5,'#3fae67',1)
  // ribbon + bauble, rotated about the knot
  c.save();c.translate(px,py);c.rotate(th)
  c.strokeStyle=O;c.lineWidth=9;c.beginPath();c.moveTo(0,0);c.lineTo(0,52);c.stroke()
  c.strokeStyle='#e23b45';c.lineWidth=4;c.stroke()
  const cy=118
  // ball
  c.lineWidth=6;c.strokeStyle=O;c.fillStyle='#e23b45'
  c.beginPath();c.arc(0,cy,R,0,P);c.fill()
  c.save();c.clip()
  // gold band with dots, latitude lines curve down a little
  const lat=(y,b)=>{c.beginPath();c.moveTo(-R-4,cy+y);c.quadraticCurveTo(0,cy+y+b,R+4,cy+y)}
  c.strokeStyle='#ffd23a';c.lineWidth=22;lat(2,22);c.stroke()
  c.strokeStyle=O;c.lineWidth=2.5;lat(-9,22);c.stroke();lat(13,22);c.stroke()
  c.strokeStyle='#ffd23a';c.lineWidth=4;lat(-26,18);c.stroke();lat(31,24);c.stroke()
  c.fillStyle='#fff';for(let k=-4;k<=4;k++){const x=k*13,y=cy+2+11*(1-(x/(R+4))**2);c.beginPath();c.arc(x,y,3.2*(1-(x/R)**2*.6),0,P);c.fill()}
  // white snow-dots above and below the band
  for(const[x,y]of[[-24,-32],[18,-38],[-4,-46],[30,48],[-28,46],[2,52]]){c.beginPath();c.arc(x,cy+y,2.5,0,P);c.fill()}
  c.restore()
  c.beginPath();c.arc(0,cy,R,0,P);c.lineWidth=6;c.stroke()
  // cap
  c.fillStyle='#ffd23a';c.beginPath();c.roundRect(-14,52,28,15,3);c.fill();c.lineWidth=4.5;c.stroke()
  c.fillStyle='#e9a21c';for(const x of[-5,4])c.fillRect(x,55,3,9)
  c.restore()
  // world-space shading so the light stays put while the ball swings
  const bx=px+cy*sn(-th),by=py+cy*cs(th)
  c.save();c.beginPath();c.arc(bx,by,R-3,0,P);c.clip()
  c.fillStyle='rgba(60,0,20,.28)';c.beginPath();c.arc(bx,by,R+8,0,P);c.arc(bx-16,by-18,R+6,0,P,1);c.fill()
  c.fillStyle='rgba(255,255,255,.85)';c.beginPath();c.ellipse(bx-26,by-24,9,16,.75,0,P);c.fill()
  c.beginPath();c.arc(bx-8,by-40,4,0,P);c.fill()
  c.restore()
  // little bow on the twig
  c.save();c.translate(px,py);c.rotate(-.1);c.lineWidth=4;c.strokeStyle=O;c.fillStyle='#e23b45'
  for(const s of[-1,1]){c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(s*22,-20,s*20,-2);c.quadraticCurveTo(s*16,6,0,0);c.fill();c.stroke()
    c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(s*8,12,s*13,22);c.lineTo(s*6,20);c.quadraticCurveTo(s*3,10,0,0);c.fill();c.stroke()}
  c.beginPath();c.arc(0,0,5.5,0,P);c.fill();c.stroke();c.restore()
  // holly berries near the right tip
  const[hx,hy]=tw(.8)
  for(const[x,y]of[[0,0],[9,-6],[10,5]]){c.fillStyle='#e23b45';c.lineWidth=3.5;c.beginPath();c.arc(hx+x,hy+y,6,0,P);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(hx+x-2,hy+y-2,1.6,0,P);c.fill()}
}
