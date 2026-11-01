// gingerbread man waving hello with one arm, bobbing and swaying happily, blinking once
export const frames=24,delay=50,rim=6
const P=Math.PI*2,O='#1d1418',sn=Math.sin,cs=Math.cos
export default(c,t)=>{
  const wv=sn(P*2*t),a=-.74+.3*wv,b=2.6+.1*sn(P*2*t-1),bob=-4*Math.abs(sn(P*2*t+.6)),tilt=.05*sn(P*2*t-.4)
  c.translate(120,216+bob);c.rotate(tilt);c.translate(-128,-216)
  // limbs: [x0,y0,x1,y1,width]
  const sx=168,sy=122,L=[[98,120,98+56*cs(b),120+56*sn(b),36],[sx,sy,sx+60*cs(a),sy+60*sn(a),36],[110,156,94,210,38],[146,156,162,210,38]]
  const sh=(f,g,d)=>{
    for(const[x0,y0,x1,y1,w]of L){c.lineWidth=w+d;c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);f()}
    c.beginPath();c.roundRect(94-d/2,100-d/2,68+d,66+d,22+d/2);g()
    c.beginPath();c.arc(128,64,41+d/2,0,P);g()
  }
  // outline, baked dark edge, lighter middle
  c.strokeStyle=c.fillStyle=O;sh(()=>c.stroke(),()=>c.fill(),12)
  c.strokeStyle=c.fillStyle='#b8692e';sh(()=>c.stroke(),()=>c.fill(),0)
  c.strokeStyle=c.fillStyle='#d6894a';sh(()=>c.stroke(),()=>c.fill(),-10)
  // icing squiggles across wrists and ankles
  c.strokeStyle='#fff';c.lineWidth=4
  for(const[x0,y0,x1,y1,w]of L){
    const dx=x1-x0,dy=y1-y0,l=Math.hypot(dx,dy),ux=dx/l,uy=dy/l,cx=x1-ux*12,cy=y1-uy*12
    c.beginPath();for(let k=0;k<=6;k++){const v=(k/6-.5)*(w-12),z=(k%2?4:-4);c.lineTo(cx-uy*v+ux*z,cy+ux*v+uy*z)}c.stroke()
  }
  // face
  const bl=Math.abs(t-.62)<.05
  c.fillStyle=O
  for(const x of[112,144]){c.beginPath();if(bl)c.ellipse(x,58,7,2.5,0,0,P);else c.ellipse(x,57,6,7.5,0,0,P);c.fill()}
  if(!bl){c.fillStyle='#fff';for(const x of[110,142]){c.beginPath();c.arc(x,54,2.4,0,P);c.fill()}}
  c.fillStyle='#ff8f8f';for(const x of[100,156]){c.beginPath();c.ellipse(x,74,7,4.5,0,0,P);c.fill()}
  c.strokeStyle='#fff';c.lineWidth=4.5;c.beginPath();c.arc(128,68,16,.35,Math.PI-.35);c.stroke()
  // red icing bow tie
  c.fillStyle='#e23b45';c.strokeStyle=O;c.lineWidth=3.5
  c.beginPath();c.moveTo(128,110);c.lineTo(110,100);c.lineTo(110,120);c.closePath();c.moveTo(128,110);c.lineTo(146,100);c.lineTo(146,120);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(128,110,5.5,0,P);c.fill();c.stroke()
  // gumdrop buttons
  for(const[y,f]of[[132,'#2f9a58'],[152,'#ffd23a']]){c.fillStyle=f;c.beginPath();c.arc(128,y,7.5,0,P);c.fill();c.stroke();c.fillStyle='rgba(255,255,255,.7)';c.beginPath();c.arc(125.5,y-2.5,2.2,0,P);c.fill()}
}
