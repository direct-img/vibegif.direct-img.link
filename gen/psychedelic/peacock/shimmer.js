// blue peacock with its tail fanned out wide, every eyespot feather pulsing with rainbow rings that ripple outward across the fan
export const frames=20,delay=75
const P=['#ff2d6f','#ff8a00','#ffd500','#3ddc4a','#00c8ff','#8b4dff'],X=128,Y=176,TAU=Math.PI*2,A0=-.34,AW=Math.PI+.68
// eyespot rows: radius, count, size
const eyes=[[102,13,12],[74,12,10],[48,7,8]].flatMap(([r,n,s],j)=>[...Array(n)].map((_,k)=>({r,s,a:A0+AW*(k+.5)/n})))
const pt=(a,r)=>[X+r*Math.cos(a),Y-r*Math.sin(a)]
export default(c,t)=>{
  // fan of 13 feather wedges with rounded tips, outline by stroking wide first then filling
  const fan=k=>{
    const a=A0+AW*k/13,b=A0+AW*(k+1)/13,[x,y]=pt((a+b)/2,104)
    c.beginPath();c.moveTo(X,Y);c.lineTo(...pt(a,104));c.lineTo(...pt(b,104));c.closePath()
    c.moveTo(x+16.5,y);c.arc(x,y,16.5,0,TAU)
  }
  c.lineWidth=8
  for(let k=0;k<13;k++){fan(k);c.stroke()}
  for(let k=0;k<13;k++){c.fillStyle=k%2?'#0b6e57':'#11876a';fan(k);c.fill()}
  c.strokeStyle='#2fd8a4';c.lineWidth=2;c.beginPath()
  for(let k=0;k<26;k++){c.moveTo(X,Y);c.lineTo(...pt(A0+AW*(k+.5)/26,k%2?78:112))}
  c.stroke()
  // eyespots, rings expand from the core outward, phase delayed by distance from the body
  for(const e of eyes){
    const[x,y]=pt(e.a,e.r),s=6*t-e.r/28,f=s-Math.floor(s),n=4
    c.save();c.translate(x,y);c.rotate(-e.a)
    c.fillStyle='#111';c.beginPath();c.ellipse(0,0,e.s*1.3+2.5,e.s+2.5,0,0,TAU);c.fill()
    for(let m=n;m>=0;m--){
      const q=Math.min(1,(m+f)/n);if(q<=0)continue
      c.fillStyle=P[((m-Math.floor(s))%6+6)%6]
      c.beginPath();c.ellipse(0,0,e.s*1.3*q,e.s*q,0,0,TAU);c.fill()
    }
    c.fillStyle='#1b1464';c.beginPath();c.ellipse(-e.s*.15,0,e.s*.5,e.s*.42,0,0,TAU);c.fill()
    c.restore()
  }
  // body with a gentle head bob
  const b=Math.sin(TAU*t)*1.5
  c.strokeStyle='#111';c.lineWidth=6
  c.beginPath();c.moveTo(119,222);c.lineTo(115,248);c.moveTo(137,222);c.lineTo(141,248);c.stroke()
  c.lineWidth=2;c.beginPath()
  for(const a of[-.5,0,.5]){c.moveTo(128,98+b);c.lineTo(128+Math.sin(a)*16,98+b-Math.cos(a)*16)}
  c.stroke()
  for(const a of[-.5,0,.5]){c.fillStyle='#00c8ff';c.beginPath();c.arc(128+Math.sin(a)*17,96+b-Math.cos(a)*17,3.5,0,TAU);c.fill();c.lineWidth=1.5;c.stroke()}
  c.lineWidth=5
  c.fillStyle='#1f5cff';c.beginPath();c.moveTo(128,96+b);c.bezierCurveTo(146,96+b,144,120,138,140)
  c.bezierCurveTo(168,160,160,220,128,226);c.bezierCurveTo(96,220,88,160,118,140)
  c.bezierCurveTo(112,120,110,96+b,128,96+b);c.stroke();c.fill()
  c.fillStyle='#7a4a1c'
  for(const m of[1,-1]){
    c.beginPath();c.moveTo(128+m*14,150);c.bezierCurveTo(128+m*36,158,128+m*38,196,128+m*20,218)
    c.bezierCurveTo(128+m*16,196,128+m*12,170,128+m*14,150);c.fill();c.stroke()
  }
  // face: white eye patches, eyes, beak
  for(const m of[1,-1]){
    c.fillStyle='#fff';c.beginPath();c.ellipse(128+m*6,110+b,4.5,3,m*.4,0,TAU);c.fill()
    c.fillStyle='#111';c.beginPath();c.arc(128+m*6,110+b,2,0,TAU);c.fill()
  }
  c.fillStyle='#ffb000';c.lineWidth=2;c.beginPath();c.moveTo(124.5,116+b);c.lineTo(131.5,116+b);c.lineTo(128,125+b);c.closePath();c.fill();c.stroke()
}
