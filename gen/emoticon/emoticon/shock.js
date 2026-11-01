// emoticon gasping in shock, eyes popping huge and the jaw dropping long, pupils quivering before it settles
export const frames=36,delay=75
// keys: t, shock (0 calm, 1 shocked, >1 overshoot)
const k=[[0,0],[.1,0],[.15,1.25],[.2,1],[.78,1],[.9,0],[1,0]]
const P=Math.PI,B='#111',G='#9a9a9a',S=Math.sin,C=Math.cos,cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x)),
K=t=>{let i=0;while(k[i+1][0]<=t)i++;const a=k[i],b=k[i+1],s=ez((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,j)=>v+(b[j+1]-v)*s)}
export default(c,T,i)=>{
  // loop starts mid-gasp so the first frame already shows the shock
  const t=(T+.22)%1,[h]=K(t),q=cl(h),j=t>.18&&t<.8?(i%2?1:-1):0,
  ln=(w,...p)=>{c.lineWidth=w;c.beginPath();c.moveTo(p[0],p[1]);for(let n=2;n<p.length;n+=2)c.lineTo(p[n],p[n+1]);c.stroke()},
  ink=(w,...p)=>{c.strokeStyle='#fff';ln(w+5,...p);c.strokeStyle=B;ln(w,...p)}
  // the face pulls long from the crown as the jaw drops
  c.save();c.translate(128,30);c.scale(1-.07*h,1+.1*h);c.translate(0,98)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  for(const s of[-1,1]){
    const x=s*35,y=-12-4*q
    if(q<.5){
      // calm: plain dot eyes
      c.beginPath();c.ellipse(x,y,11,15,0,0,2*P);c.fillStyle=B;c.fill()
    }else{
      // popped: big rings with pinprick pupils that jitter
      const r=13+12*h
      c.beginPath();c.ellipse(x,y,r,r*1.08,0,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=6;c.strokeStyle=B;c.stroke()
      c.beginPath();c.arc(x+j,y+1,4.5,0,2*P);c.fillStyle=B;c.fill()
    }
    // brows shoot way up
    const by=y-30-16*q
    c.lineWidth=6;c.beginPath();c.moveTo(x-13,by+3+2*q);c.quadraticCurveTo(x,by-5-4*q,x+13,by+3+2*q);c.stroke()
  }
  // mouth: a small calm line that drops open into a long gasp
  const g=t>.2&&t<.78?S((t-.2)/.58*P*6)*ez((t-.2)/.05)*ez((.78-t)/.05):0,my=46+12*q,rx=11+5*q-g,ry=3+27*q*h+3*g
  c.beginPath();c.ellipse(0,my,rx,ry,0,0,2*P);c.fillStyle=B;c.fill();c.lineWidth=5;c.stroke()
  // sweat drop sliding down the temple while frozen
  const u=cl((t-.24)/.5),d=6.5*ez(u/.15)*(1-ez((u-.85)/.15)),dx=-72,dy=-50+44*u
  if(d>.5){c.beginPath();c.moveTo(dx,dy-d*2.2);c.bezierCurveTo(dx+d*1.2,dy-d*.6,dx+d,dy+d,dx,dy+d);c.bezierCurveTo(dx-d,dy+d,dx-d*1.2,dy-d*.6,dx,dy-d*2.2);c.fillStyle=G;c.fill()}
  c.restore()
  // shock lines fanning off both sides of the crown
  if(q>.3)for(const s of[-1,1])for(let n=0;n<3;n++){
    const a=-P/2+s*(.62+n*.3),ux=C(a),uy=S(a),cx=128,cy=128+4*h,r0=106,r1=r0+14*q
    ink(5,cx+ux*r0,cy+uy*r0*1.02,cx+ux*r1,cy+uy*r1*1.02)
  }
}
