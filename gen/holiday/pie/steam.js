// whole pumpkin pie fresh from the oven, curls of steam rising off the filling
export const frames=32,delay=60,rim=5
const K='#2a1810',P=Math.PI*2,PI=Math.PI,S=Math.sin,C=Math.cos,cx=128,cy=158
export default(c,t)=>{
  const E=(x,y,rx,ry,a=0,b=P,w)=>c.ellipse(x,y,rx,ry,0,a,b,w)
  c.strokeStyle=K;c.lineWidth=6;c.save();c.translate(cx,cy);c.scale(.93,.93);c.translate(-cx,-cy)
  // fluted crust side, tapering down into the dish
  const side=()=>{c.beginPath();E(cx,cy,106,46,0,PI);E(cx,cy+32,94,40,PI,0,!0);c.closePath()}
  c.save();side();c.fillStyle='#a8662a';c.fill();c.clip()
  c.beginPath();E(cx-14,cy+20,106,46,0,P);c.fillStyle='#d4934a';c.fill()
  c.strokeStyle='#8f5422';c.lineWidth=3.5;c.beginPath()
  for(let k=1;k<18;k++){const a=PI*k/18;c.moveTo(cx+106*C(a),cy+46*S(a));c.lineTo(cx+94*C(a),cy+32+40*S(a))}
  c.stroke();c.restore();c.lineWidth=6;side();c.stroke()
  // filling: baked darker edge, glossy middle
  c.beginPath();E(cx,cy,94,40);c.fillStyle='#b4541a';c.fill();c.stroke()
  c.beginPath();E(cx-5,cy-3,80,31);c.fillStyle='#d8772a';c.fill()
  c.strokeStyle='rgba(255,220,170,.85)';c.lineWidth=5;c.beginPath();E(cx-12,cy-8,52,17,3.55,4.6);c.stroke()
  // crimped rim: fluted petals, back ones first
  const N=30,b=[...Array(N)].map((_,k)=>P*(k+.5)/N).sort((u,v)=>S(u)-S(v))
  for(const a of b){
    const x=cx+100*C(a),y=cy+43*S(a),d=Math.atan2(43*C(a),-100*S(a)),q=.55+.3*Math.abs(S(a))
    c.save();c.translate(x,y);c.scale(1,q);c.rotate(d)
    const pe=()=>{c.beginPath();c.ellipse(0,0,11.5,15,0,0,P)}
    pe();c.fillStyle='#c4823a';c.fill();c.save();c.clip()
    c.beginPath();c.ellipse(-2,-3,10,13,0,0,P);c.fillStyle='#efbd6c';c.fill();c.restore()
    c.strokeStyle=K;c.lineWidth=4;pe();c.stroke()
    c.restore()
  }
  c.restore()
  // steam: three wavy ribbons, the wave travelling up them as they sway and stretch
  for(let k=0;k<3;k++){
    const Lk=[100,116,100][k]+10*S(P*t+k*2.1),x0=[86,128,170][k],y0=[168,160,168][k],L=[],R=[],n=32
    for(let j=0;j<=n;j++){
      const yy=Lk*j/n,u=j/n,A=2+yy*.11,ph=yy*.08-P*2*t+k*.7,
        w=S(PI*u)**.8*(8-2*u),x=x0+A*S(ph),y=y0-yy,
        dx=A*.08*C(ph)+.11*S(ph),nl=Math.hypot(1,dx)
      L.push([x-w/nl,y-w*dx/nl]);R.unshift([x+w/nl,y+w*dx/nl])
    }
    c.beginPath();[...L,...R].forEach(([x,y],j)=>j?c.lineTo(x,y):c.moveTo(x,y));c.closePath()
    c.fillStyle='#fffaf2';c.fill();c.strokeStyle=K;c.lineWidth=4.5;c.stroke()
  }
}
