// emoticon smitten with heart eyes that thump ba-dum, swaying dreamily as little hearts float up
const P=Math.PI,K='#111',G='#9a9a9a',S=Math.sin
export const frames=26,delay=76
const heart=(c,x,y,s,a=0)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath()
  c.moveTo(0,1);c.bezierCurveTo(-.15,.8,-1,.35,-1,-.25);c.bezierCurveTo(-1,-.8,-.3,-1,0,-.5)
  c.bezierCurveTo(.3,-1,1,-.8,1,-.25);c.bezierCurveTo(1,.35,.15,.8,0,1);c.restore()
}
// ba-dum: two quick beats each half loop
const bump=(p,a,w)=>p>a&&p<a+w?S(P*(p-a)/w):0,beat=t=>{const p=t*2%1;return bump(p,0,.18)+.75*bump(p,.2,.18)}
export default(c,t,i)=>{
  const s=S(2*P*t),b=beat(t)
  const fl=()=>{
    // little hearts drifting up past the head, alternating sides
    for(let j=0;j<4;j++){
      const f=((t-j/4)%1+1)%1*2,d=j%2?-1:1,k=Math.min(1,2.4*S(P*f))
      if(f>=1)continue
      heart(c,128+d*(84+18*f+5*S(3*P*f)),100-82*f,14*k,.35*S(2*P*f)*d)
      c.lineWidth=1+4*k;c.fillStyle=j>1?G:'#fff';c.fill();c.stroke()
    }
  }
  c.save();c.translate(128+5*s,130-3*Math.abs(s));c.rotate(.1*s)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.stroke()
  // heart eyes, thumping
  c.fillStyle=K
  for(const d of[-1,1])heart(c,d*35,-20,23*(1+.28*b),-d*.12),c.fill()
  // dreamy open smile
  c.beginPath();c.moveTo(-34,26);c.quadraticCurveTo(0,34,34,26);c.ellipse(0,26,34,26+2*b,0,0,P);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle=G;c.beginPath();c.ellipse(0,54,18,12,0,0,2*P);c.fill();c.restore()
  // blush
  c.strokeStyle=G;c.lineWidth=4
  for(const d of[-1,1])for(let k=-1;k<2;k++){
    const x=d*64+k*9;c.beginPath();c.moveTo(x-4,26);c.lineTo(x+4,14);c.stroke()
  }
  c.restore();fl()
}
