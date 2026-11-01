// reindeer face with its big red nose blinking on and glowing, ears twitching, eyes blinking
export const frames=24,delay=60,rim=6
const P=Math.PI*2,O='#1d1418',sn=Math.sin,cs=Math.cos
// one antler as polylines (left side; mirrored for the right)
const AN=[[[106,92],[94,66],[78,46],[66,24]],[[94,66],[66,64],[50,50]],[[80,48],[88,24]],[[68,62],[58,76]]]
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  // nose: two blinks a loop, quick on, hold, quick off
  const g=Math.max(sm((cs(P*2*t)+.15)*3),0)
  c.translate(0,14)
  // antlers
  const ant=(w,col)=>{c.lineWidth=w;c.strokeStyle=col;for(const m of[1,-1]){c.beginPath();for(const l of AN){c.moveTo(m>0?l[0][0]:256-l[0][0],l[0][1]);for(const[x,y]of l.slice(1))c.lineTo(m>0?x:256-x,y)}c.stroke()}}
  ant(26,O);ant(14,'#d9b07a');ant(5,'#ecd2a6')
  // ears, twitching now and then
  for(const m of[1,-1]){
    c.save();c.translate(128-m*56,116);c.scale(m,1);c.rotate(-.45+.18*Math.max(0,sn(P*2*t+m*1.3))**6)
    c.beginPath();c.ellipse(-26,0,30,15,0,0,P);c.fillStyle='#9a5b34';c.fill();c.lineWidth=6;c.strokeStyle=O;c.stroke()
    c.beginPath();c.ellipse(-26,1,19,7,0,0,P);c.fillStyle='#f3a0a8';c.fill();c.restore()
  }
  // head + muzzle union: stroke both, then fill both
  const hd=()=>{c.beginPath();c.ellipse(128,128,60,56,0,0,P);c.moveTo(178,174);c.ellipse(128,174,50,36,0,0,P)}
  c.lineWidth=12;c.strokeStyle=O;hd();c.stroke();c.fillStyle='#9a5b34';hd();c.fill()
  c.save();hd();c.clip()
  c.fillStyle='#86492a';c.beginPath();c.ellipse(150,130,58,60,0,0,P);c.ellipse(108,124,60,64,0,0,P,1);c.fill('evenodd')
  c.fillStyle='#e9c79a';c.beginPath();c.ellipse(128,176,46,32,0,0,P);c.fill()
  c.fillStyle='#f6ddb8';c.beginPath();c.ellipse(116,168,22,12,-.2,0,P);c.fill()
  // nose glow lighting up the face
  if(g>.02){const r=c.createRadialGradient(128,168,8,128,168,70);r.addColorStop(0,`rgba(255,70,60,${.6*g})`);r.addColorStop(1,'rgba(255,70,60,0)');c.fillStyle=r;c.fillRect(40,90,176,130)}
  c.restore()
  // forelock tuft
  c.fillStyle='#9a5b34';c.strokeStyle=O;c.lineWidth=5
  c.beginPath();c.moveTo(108,78);c.quadraticCurveTo(116,58,124,74);c.quadraticCurveTo(130,52,138,74);c.quadraticCurveTo(148,62,150,80);c.quadraticCurveTo(130,90,108,78);c.fill();c.stroke()
  // eyes blink once a loop
  const bl=Math.abs(t-.8)<.045
  for(const x of[104,152]){
    c.fillStyle=O;c.beginPath();if(bl)c.ellipse(x,128,10,2.5,0,0,P);else c.ellipse(x,126,9,11.5,0,0,P);c.fill()
    if(!bl){c.fillStyle='#fff';c.beginPath();c.arc(x-3,121,3.6,0,P);c.arc(x+3.5,131,1.6,0,P);c.fill()}
  }
  c.fillStyle='rgba(255,120,130,.65)';for(const x of[86,170]){c.beginPath();c.ellipse(x,146,9,5.5,0,0,P);c.fill()}
  // mouth
  c.strokeStyle=O;c.lineWidth=4;c.beginPath();c.moveTo(118,194);c.quadraticCurveTo(128,202,138,194);c.stroke()
  // the nose
  const nc=(a,b)=>`rgb(${a.map((v,j)=>v+(b[j]-v)*g|0)})`
  c.save();c.translate(128,166);c.scale(1+.08*g,1+.08*g);c.translate(-128,-166)
  c.fillStyle=nc([150,26,40],[255,58,58]);c.lineWidth=5.5;c.strokeStyle=O
  c.beginPath();c.ellipse(128,166,22,18,0,0,P);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=nc([110,14,28],[230,30,44]);c.beginPath();c.ellipse(134,176,24,14,0,0,P);c.fill();c.restore()
  c.fillStyle=nc([210,110,120],[255,240,236]);c.beginPath();c.ellipse(120,159,7,4.5,-.4,0,P);c.fill();c.restore()
  // twinkles beside the lit nose
  c.fillStyle='#fff6c8';c.strokeStyle=O;c.lineWidth=2.5
  for(const[x,y,z,f]of[[94,160,12,0],[164,188,10,1.6]]){const q=z*g*(.75+.25*sn(P*4*t+f));if(q<4)continue
    c.beginPath();for(let k=0;k<8;k++){const a=k*P/8,d=k%2?q*.3:q;c.lineTo(x+d*cs(a),y+d*sn(a))}c.closePath();c.fill();c.stroke()}
}
