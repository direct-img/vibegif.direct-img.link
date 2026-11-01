// a big ice-blue snowflake slowly turning, a shine sweeping across it and sparkles glinting at its tips
export const frames=36,delay=70,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const R=102,y0=128+3*S(T*t),rot=T/6*t
  // one path for all six arms, small spikes between them
  const ln=(a,b,d,l)=>{c.moveTo(a,b);c.lineTo(a+C(d)*l,b+S(d)*l)}
  const st=(col,w)=>{
    c.beginPath()
    for(let k=0;k<6;k++){
      const a=rot+k*T/6-Math.PI/2,ca=C(a),sa=S(a)
      ln(ca*20,sa*20,a,R-20)
      for(const[d,l]of[[42,28],[70,20]])for(const m of[-1,1])ln(ca*d,sa*d,a+m*T/6,l)
      ln(0,0,a+T/12,40)
    }
    c.strokeStyle=col;c.lineWidth=w;c.stroke()
  }
  c.save();c.translate(128,y0)
  const hex=(r,a=rot)=>{c.beginPath();for(let k=0;k<6;k++)c.lineTo(r*C(a+k*T/6),r*S(a+k*T/6));c.closePath()}
  st(K,18);hex(26);c.lineWidth=7;c.strokeStyle=K;c.stroke()
  st('#7cc4ee',11);hex(24);c.fillStyle='#7cc4ee';c.fill()
  st('#cdeefd',4);hex(14,rot+T/12);c.fillStyle='#cdeefd';c.fill()
  // shine band sweeping across once a loop
  const u=(t-.1)/.45
  if(u>0&&u<1){
    const band=w=>{c.save();c.rotate(.6);c.beginPath();c.rect(-150+300*u-w/2,-150,w,300);c.rotate(-.6);c.clip()}
    band(56);st('#bfe9fd',11);hex(24);c.fillStyle='#bfe9fd';c.fill();st('#fff',5);c.restore()
    band(22);st('#fff',11);hex(24);c.fillStyle='#fff';c.fill();c.restore()
  }
  c.restore()
  // sparkles twinkling at the arm tips
  for(const[k,ph,b]of[[0,.05,0],[3,.3,1],[2,.5,0],[5,.75,1]]){
    const v=(t-ph+1)%1/.24;if(v>=1)continue
    const z=S(Math.PI*v),a=rot+k*T/6-Math.PI/2+b*.21,d=b?82:R-4,x=128+C(a)*d,y=y0+S(a)*d,r=(b?25:16)*z
    c.save();c.translate(x,y);c.rotate(v*1.2);c.beginPath()
    for(let j=0;j<8;j++){const q=j%2?r*.36:r;c.lineTo(q*C(j*T/8),q*S(j*T/8))}
    c.closePath();c.fillStyle='#fffbe8';c.fill();c.lineWidth=Math.min(3.5,r*.25);c.strokeStyle=K;c.stroke();c.restore()
  }
}
