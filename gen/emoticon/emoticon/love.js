// emoticon smitten with heart eyes that thump ba-dum, an ω mouth and braille-dot blush, swaying dreamily as typed <3 glyphs float up
const P=Math.PI,K='#111',G='#9a9a9a',S=Math.sin
export const frames=26,delay=76
const heart=(c,x,y,s,a=0)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath()
  c.moveTo(0,1);c.bezierCurveTo(-.15,.8,-1,.35,-1,-.25);c.bezierCurveTo(-1,-.8,-.3,-1,0,-.5)
  c.bezierCurveTo(.3,-1,1,-.8,1,-.25);c.bezierCurveTo(1,.35,.15,.8,0,1);c.restore()
}
// <3 drawn as strokes, the 3 typed in a beat after the <; black outline under a white or grey core
const lt3=(c,x,y,s,a,n,f)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath()
  c.moveTo(-8,-14);c.lineTo(-25,0);c.lineTo(-8,14)
  if(n>1)c.arc(10,-7,7,-.85*P,.5*P),c.arc(10,7,7,-.5*P,.85*P)
  c.lineWidth=15;c.stroke();c.strokeStyle=f;c.lineWidth=8;c.stroke();c.restore()
}
// ba-dum: two quick beats each half loop
const bump=(p,a,w)=>p>a&&p<a+w?S(P*(p-a)/w):0,beat=t=>{const p=t*2%1;return bump(p,0,.18)+.75*bump(p,.2,.18)}
export default(c,t,i)=>{
  const s=S(2*P*t),b=beat(t)
  const fl=()=>{
    // <3 glyphs drifting up past the head, alternating sides
    for(let j=0;j<4;j++){
      const f=((t-j/4)%1+1)%1*2,d=j%2?-1:1,k=Math.min(1,2.4*S(P*f))
      if(f>=1)continue
      lt3(c,128+d*(72+10*f+4*S(3*P*f)),96-72*f,.85*k,.3*S(2*P*f)*d,f>.14?2:1,j>1?G:'#fff')
    }
  }
  c.save();c.translate(128+5*s,130-3*Math.abs(s));c.rotate(.1*s)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.stroke()
  // heart eyes, thumping
  c.fillStyle=K
  for(const d of[-1,1])heart(c,d*35,-20,23*(1+.28*b),-d*.12),c.fill()
  // ω mouth, stretching wide on each beat
  const w=1+.18*b;c.save();c.translate(0,30);c.scale(w,1/w);c.beginPath()
  c.arc(-13,0,13,P,0,true);c.arc(13,0,13,P,0,true);c.lineWidth=10;c.stroke();c.restore()
  // blush as a braille-style dot grid, dots swelling on the beat
  c.fillStyle=G
  for(const d of[-1,1])for(let k=0;k<6;k++){
    c.beginPath();c.arc(d*64+(k%3-1)*10,14+(k/3|0)*10,3.4+1.2*b*(k%2?1:.5),0,2*P);c.fill()
  }
  c.restore();fl()
}
