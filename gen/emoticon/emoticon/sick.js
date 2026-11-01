// emoticon queasy and swaying with a rippling mouth, cheeks bulge as a mitten hand clamps over the mouth, then a hard gulp
export const frames=28,delay=100
// keys: t, puff (cheeks bulge, <0 gulp squash), wide (eyes pop in alarm), hand over mouth
const k=[[0,0,0,0],[.44,0,0,0],[.52,1,1,1],[.68,1.05,.9,1],[.75,-.5,.1,.3],[.84,.05,0,0],[1,0,0,0]]
const P=Math.PI,B='#111',G='#9a9a9a',S=Math.sin,cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x)),
K=t=>{let i=0;while(k[i+1][0]<=t)i++;const a=k[i],b=k[i+1],s=ez((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,j)=>v+(b[j+1]-v)*s)}
export default(c,t)=>{
  const[pf,w,h]=K(t),a=2*P*t,q=cl(pf),ln=(w,...p)=>{c.lineWidth=w;c.beginPath();c.moveTo(p[0],p[1]);for(let n=2;n<p.length;n+=2)c.lineTo(p[n],p[n+1]);c.stroke()}
  // seasick roll: tilt and drift one way, then the other
  c.translate(128+7*S(a)*(1-.5*q),224+3*S(2*a));c.rotate(.11*S(a)*(1-.5*q));c.scale(1+.1*pf,1-.06*pf);c.translate(0,-96)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill()
  // queasy pallor: grey streaks hanging on the forehead, quivering
  c.strokeStyle=G;c.lineWidth=4
  for(let n=-2;n<=2;n++){const x=n*13,l=14+6*((n*n+1)%3)+3*S(a*2+n);c.beginPath();c.moveTo(x,-68+Math.abs(n)*4);c.lineTo(x,-68+Math.abs(n)*4+l);c.stroke()}
  c.beginPath();c.arc(0,0,96,0,2*P);c.lineWidth=8;c.strokeStyle=B;c.stroke()
  c.fillStyle=B
  for(const s of[-1,1]){
    // woozy: the lids sag unevenly and trade places as he rolls
    const x=s*34,y=-6,ry=15+5*w,L=cl(.42+.22*s*S(a)-.5*w-1.4*Math.min(0,pf)),yl=y-ry+2*ry*L
    c.save();c.beginPath();c.rect(x-20,yl,40,50);c.clip()
    c.beginPath();c.ellipse(x,y,11+2*w,ry,0,0,2*P);c.fill();c.restore()
    if(L>.05)ln(6,x-s*15,yl+1,x+s*15,yl+3)
    // worried brows, inner ends up
    ln(6,x+s*13,y-30+3*w,x-s*9,y-37-6*w)
    // bulging cheeks
    if(q>.05){c.lineWidth=5;c.beginPath();c.arc(x*1.22,42,17*q+.1,s<0?P*.68:-P*.32,s<0?P*1.32:P*.32);c.stroke()}
  }
  // sweat drop sliding down the temple
  const u=(t*2)%1,dx=-74+4*u,dy=-30+30*u,r=6*ez(u/.2)*(1-ez((u-.8)/.2))
  if(r>.5){c.beginPath();c.moveTo(dx,dy-r*2.2);c.bezierCurveTo(dx+r*1.2,dy-r*.6,dx+r,dy+r,dx,dy+r);c.bezierCurveTo(dx-r,dy+r,dx-r*1.2,dy-r*.6,dx,dy-r*2.2);c.fillStyle=G;c.fill()}
  // mouth: a wobbly ripple that gets clamped tight
  const mw=24-12*q,A=5-2.5*q
  c.lineWidth=6;c.beginPath()
  for(let x=-mw;x<=mw;x+=2)c[x>-mw?'lineTo':'moveTo'](x,48+2*q+A*S(x/mw*P*1.5-a*3))
  c.stroke()
  // mitten hand clamps over the mouth for the worst of it
  if(h>.15){
    c.save();c.translate(4,58+36*(1-h));c.rotate(-.12-.3*(1-h));c.scale(.55+.45*h,.55+.45*h);c.fillStyle='#fff';c.strokeStyle=B;c.lineWidth=7
    const hd=()=>{c.beginPath();c.ellipse(0,0,29,21,0,0,2*P);c.moveTo(-3,-16);c.ellipse(-11,-17,8,13,-.7,0,2*P)}
    hd();c.fill();c.stroke();hd();c.fill()
    c.lineWidth=4;c.beginPath();c.moveTo(14,-12);c.quadraticCurveTo(20,0,14,12);c.stroke()
    c.restore()
  }
}
