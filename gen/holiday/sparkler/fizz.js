// hand holding a lit sparkler, the burning tip fizzing out streaks of sparks that fork into tiny stars
export const frames=24,delay=50,rim=4
const P=Math.PI*2,S=Math.sin,C=Math.cos
// tiny deterministic hash -> [0,1)
const hs=n=>{n=Math.sin(n*127.1+311.7)*43758.5453;return n-Math.floor(n)}
export default(c,t)=>{
  const X=142,Y=105,hx=74,hy=207
  // the stick: bare wire, then the grey coated part up to the flame
  const at=k=>[hx+(X-hx)*k,hy+(Y-hy)*k]
  const seg=(a,b,w,col)=>{const[x0,y0]=at(a),[x1,y1]=at(b);c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.lineWidth=w+6;c.strokeStyle='#111';c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
  seg(-.12,.45,4,'#9aa3ad');seg(.45,.97,9,'#6d6f78')
  // flecks on the coating
  c.fillStyle='#4b4c54';for(let k=0;k<7;k++){const[x,y]=at(.5+k*.065);c.beginPath();c.arc(x+(k%2?2:-2),y+(k%2?-1:1),1.6,0,P);c.fill()}
  c.strokeStyle='#111'
  // sparks: each slot fires a few times a loop, direction changes per firing but repeats every loop
  const N=44,R=3
  for(let i=0;i<N;i++){
    const f=t*R+i/N,cy=Math.floor(f),a=f-cy,h=(cy%R+R)%R*N+i
    const th=(i*.618+(cy%R+R)%R*.21+hs(h)*.12)*P,len=34+hs(h+.5)**.7*50,d1=len*(1-(1-a)**2),d0=len*(1-(1-Math.max(0,a-.28))**2)
    const w=3.6*(1-a),cs=['#fff7c2','#ffe45c','#ffd23f'][Math.floor(hs(h+.7)*3)],dx=C(th),dy=S(th)
    if(w<.25||d1-d0<1)continue
    c.beginPath();c.moveTo(X+dx*(d0+6),Y+dy*(d0+6));c.lineTo(X+dx*(d1+6),Y+dy*(d1+6))
    c.lineWidth=w+3.5*Math.min(1,(1-a)*4);c.strokeStyle='#ff8a1f';c.stroke();c.lineWidth=w;c.strokeStyle=cs;c.stroke()
    // late in life some sparks fork into a little star
    if(hs(h+.3)<.5&&a>.45){const b=(a-.45)/.55,r=8*S(Math.PI*b),ex=X+dx*(d1+6),ey=Y+dy*(d1+6)
      for(let k=0;k<4;k++){const q=th+k*P/4+.6;c.beginPath();c.moveTo(ex,ey);c.lineTo(ex+C(q)*r,ey+S(q)*r);c.lineWidth=4.5;c.strokeStyle='#ff7a1a';c.stroke();c.lineWidth=1.8;c.strokeStyle=cs;c.stroke()}}
  }
  c.strokeStyle='#111'
  // fizzing core: a spiky star that flickers
  const sp=12,fl=k=>1+.25*S(P*(3*t+k*.37))+.15*S(P*(5*t+k*.71))
  c.beginPath();for(let k=0;k<sp*2;k++){const r=k%2?12:26*fl(k),q=k*Math.PI/sp+.2*S(P*t);c.lineTo(X+r*C(q),Y+r*S(q))}c.closePath()
  c.fillStyle='#ffd23f';c.lineWidth=4;c.strokeStyle='#ff7a1a';c.fill();c.stroke();c.strokeStyle='#111'
  c.beginPath();for(let k=0;k<16;k++){const r=k%2?7:13*fl(k+3),q=k*Math.PI/8-.25*S(P*t);c.lineTo(X+r*C(q),Y+r*S(q))}c.closePath();c.fillStyle='#fffbe6';c.fill()
  // the hand gripping the wire
  c.lineWidth=5;c.fillStyle='#ffcc9a'
  c.save();c.translate(hx,hy);c.rotate(Math.atan2(Y-hy,X-hx)+Math.PI/2)
  c.beginPath();c.moveTo(-22,-14);c.quadraticCurveTo(-26,10,-18,30);c.quadraticCurveTo(0,40,18,30);c.lineTo(22,-4);c.quadraticCurveTo(24,-16,10,-16);c.closePath();c.fill();c.stroke()
  // fingers wrapped round the wire
  for(let k=0;k<4;k++){c.beginPath();c.ellipse(-20+k*1,-10+k*11,9,6.5,.15,0,P);c.fill();c.stroke()}
  // thumb across the front
  c.beginPath();c.moveTo(14,-14);c.quadraticCurveTo(-2,-22,-12,-14);c.quadraticCurveTo(-14,-6,-4,-6);c.quadraticCurveTo(6,-6,14,-2);c.fill();c.stroke()
  c.restore()
}
