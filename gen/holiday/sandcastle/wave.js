// sandcastle with a little pennant flag waving on top while a foamy wave laps up the beach and slides back
export const frames=30,delay=60,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos
const SA='#f5c86e',SD='#d9a046'
export default(c,t)=>{
  c.lineWidth=6
  c.translate(128,124);c.scale(.95,.95);c.translate(-128,-128)
  // beach patch
  const beach=()=>{c.beginPath();c.ellipse(128,218,116,33,0,0,P)}
  beach();c.fillStyle=SA;c.fill()
  // the wave rushes up the sand quickly and slides back slowly, leaving it wet
  const e=t<.3?S(Math.PI/2*t/.3):.5+.5*C(Math.PI*(t-.3)/.7),reach=256-e*42
  c.save();beach();c.clip()
  c.beginPath();c.ellipse(128,252,150,42,0,0,P);c.fillStyle='#e6b25c';c.fill()
  const edge=(dy,amp,f=13)=>{c.beginPath();c.moveTo(0,262);for(let x=0;x<=256;x+=4)c.lineTo(x,reach+dy+amp*S(x/f+P*t)-.05*(x-128));c.lineTo(256,262);c.closePath()}
  edge(0,3);c.fillStyle='#fff';c.fill();c.lineWidth=4;c.stroke()
  edge(6,2.5,11);c.fillStyle='#5cc0ff';c.fill()
  edge(16,2,9);c.fillStyle='#3a9cf0';c.fill()
  // foam bubbles riding the edge
  c.fillStyle='#fff';for(let k=0;k<6;k++){const x=30+k*38+6*S(P*t+k),y=reach+9-.05*(x-128)+2*S(k*2.1);c.beginPath();c.arc(x,y,2.6,0,P);c.fill()}
  c.restore()
  c.lineWidth=6;beach();c.stroke()
  // a block of the castle: tapered bucket shape with optional battlements
  const tower=(x0,x1,y0,y1,m)=>{
    const tp=4,w=x1-x0,n=m*2-1,s=(w-2*tp)/n
    const f=()=>{c.beginPath();c.moveTo(x0,y1);c.lineTo(x0+tp,y0);for(let k=0;k<n;k++){const X=x0+tp+k*s,h=k%2?0:10;c.lineTo(X,y0-h);c.lineTo(X+s,y0-h)}c.lineTo(x1,y1);c.closePath()}
    f();c.fillStyle=SA;c.fill()
    c.save();c.clip();c.fillStyle=SD;c.fillRect(x1-w*.28,0,w,256)
    c.strokeStyle=SD;c.lineWidth=3;for(let y=y0+14;y<y1-6;y+=14){c.beginPath();c.moveTo(x0,y);c.lineTo(x1,y);c.stroke()}
    c.restore();c.lineWidth=5.5;f();c.stroke()
  }
  // centre keep, behind, with the flag
  const fx=128,fy=40
  c.beginPath();c.moveTo(fx,96);c.lineTo(fx,fy-4);c.lineWidth=7;c.stroke();c.lineWidth=3;c.strokeStyle='#8a5a2b';c.stroke();c.strokeStyle='#111'
  // ripple along the pennant, growing toward its free end, two waves a loop
  const pts=[];for(let s=0;s<=1.0001;s+=.1)pts.push([fx+2+48*s,7*s*S(P*(s*1.1-2*t))+s*3])
  // pennant: both edges follow the ripple, narrowing to a point
  c.beginPath();for(const[x,w]of pts)c.lineTo(x,fy-11*(1-(x-fx-2)/48)+w);for(const[x,w]of[...pts].reverse())c.lineTo(x,fy+11*(1-(x-fx-2)/48)+w);c.closePath()
  c.fillStyle='#ff4b5c';c.lineWidth=4.5;c.fill();c.stroke()
  c.beginPath();c.arc(fx,fy-6,5,0,P);c.fillStyle='#ffd23f';c.fill();c.stroke()
  tower(102,154,96,200,3)
  // wall and side towers
  tower(64,192,148,214,5)
  tower(48,94,118,216,2);tower(162,208,118,216,2)
  // doorway, windows, a shell and a starfish
  c.lineWidth=5;c.beginPath();c.moveTo(114,214);c.lineTo(114,188);c.arc(128,188,14,Math.PI,0);c.lineTo(142,214);c.fillStyle='#7a4a1e';c.fill();c.stroke()
  for(const[x,y]of[[71,146],[185,146],[128,124]]){c.beginPath();c.roundRect(x-5,y-9,10,18,5);c.fillStyle='#7a4a1e';c.fill();c.lineWidth=4;c.stroke()}
  c.save();c.translate(92,176);c.beginPath();c.moveTo(0,8);c.lineTo(-10,-4);c.quadraticCurveTo(0,-14,10,-4);c.closePath();c.fillStyle='#ff9ec4';c.lineWidth=3.5;c.fill();c.stroke()
  c.beginPath();for(const a of[-.5,0,.5]){c.moveTo(0,7);c.lineTo(12*S(a),-9*C(a))}c.lineWidth=2;c.stroke();c.restore()
  c.save();c.translate(214,206);c.rotate(.3);c.beginPath();for(let k=0;k<10;k++){const r=k%2?5:13;c.lineTo(r*S(k*P/10),-r*C(k*P/10))}c.closePath();c.fillStyle='#ff8a3d';c.lineWidth=3.5;c.fill();c.stroke();c.restore()
}
