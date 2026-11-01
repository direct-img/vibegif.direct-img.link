// canned cranberry sauce, can ridges and all, jiggling and wobbling on a plate being jostled, slices and berries alongside
export const frames=32,delay=50,rim=5
const K='#2a1810',P=Math.PI*2,PI=Math.PI,S=Math.sin,R=50,Q=.3,H=122,Y=184
export default(c,t)=>{
  const px=5*S(P*2*t),sw=15*S(P*2*t-1.1)+2*S(P*4*t+1.2),sy=1+.05*S(P*4*t-1.6),bu=-(sy-1)*1.3,
    // lateral u in -1..1, height v in 0..1 -> canvas point on the wobbling log
    X=(u,v)=>100+px+u*R*(1+bu*4*v*(1-v))+sw*v*v,
    V=v=>Y-v*H*sy,
    ring=(v,a,b,n)=>{const r=R*(1+bu*4*v*(1-v));n||c.beginPath();c.ellipse(X(0,v),V(v),r,r*Q,0,a,b)},
    edge=(u,a,b)=>{for(let k=0;k<=20;k++){const v=a+(b-a)*k/20;c.lineTo(X(u,v),V(v))}},
    body=()=>{c.beginPath();c.moveTo(X(-1,0),V(0));edge(-1,0,1);ring(1,PI,P,1);edge(1,1,0);ring(0,0,PI,1);c.closePath()}
  c.strokeStyle=K;c.lineWidth=6
  // plate
  c.beginPath();c.ellipse(128+px,Y+12,70,20,0,0,P);c.fillStyle='#cdbfae';c.fill();c.stroke()
  c.beginPath();c.ellipse(128+px,Y,104,31,0,0,P);c.fillStyle='#fbf6ee';c.fill();c.stroke()
  c.beginPath();c.ellipse(128+px,Y+3,72,20,0,0,P);c.fillStyle='#ece3d6';c.fill()
  c.strokeStyle='#d8a23c';c.lineWidth=4;c.beginPath();c.ellipse(128+px,Y,91,26,0,0,P);c.stroke()
  c.strokeStyle=K;c.lineWidth=6
  // the log: base colour, shaded right side, glossy left
  c.save();body();c.fillStyle='#a8152d';c.fill();c.clip()
  c.beginPath();c.moveTo(X(.45,0),V(0));edge(.45,0,1);edge(1.2,1,0);c.fillStyle='#7c0c1f';c.fill()
  // can ridges: dark groove with a lit lip above
  for(const v of[.2,.4,.6,.8]){
    c.lineWidth=6;c.strokeStyle='#5e0614';ring(v,.05,PI-.05);c.stroke()
    c.lineWidth=4;c.strokeStyle='#e25a70';c.save();c.translate(0,-6);ring(v,.4,PI-.7);c.stroke();c.restore()
  }
  c.lineWidth=7;c.strokeStyle='rgba(255,170,180,.7)';c.beginPath();c.moveTo(X(-.62,.1),V(.1));edge(-.62,.1,.9);c.stroke()
  c.restore();c.lineWidth=6;c.strokeStyle=K;body();c.stroke()
  // two cut slices shingled on the plate, berries in front
  const sl=(x,y)=>{c.lineWidth=5;c.beginPath();c.ellipse(x,y+7,28,9,0,0,PI);c.lineTo(x-28,y);c.ellipse(x,y,28,9,0,PI,0,!0);c.closePath();c.fillStyle='#7c0c1f';c.fill();c.stroke()
    c.beginPath();c.ellipse(x,y,28,9,0,0,P);c.fillStyle='#c42540';c.fill();c.stroke()
    c.strokeStyle='rgba(255,190,200,.85)';c.lineWidth=3;c.beginPath();c.ellipse(x-5,y-1,16,4,0,3.4,4.7);c.stroke();c.strokeStyle=K}
  for(const[x,y,o]of[[180,170,0],[194,186,1]])sl(px+x+1.6*S(P*2*t-1.3-o*.4),y+1.2*S(P*4*t-2-o))
  for(const[x,y,o]of[[64,194,1],[82,203,2],[62,208,3]]){
    const bx=px+x-2.5*S(P*2*t-1.2+o)
    c.lineWidth=4;c.beginPath();c.arc(bx,y,9.5,0,P);c.fillStyle='#b3132e';c.fill();c.stroke()
    c.fillStyle='#f6a3b0';c.beginPath();c.arc(bx-3,y-3,2.6,0,P);c.fill()
  }
  c.lineWidth=6;c.strokeStyle=K
  // top face
  ring(1,0,P);c.fillStyle='#c42540';c.fill();c.stroke()
  c.strokeStyle='rgba(255,190,200,.85)';c.lineWidth=4
  c.beginPath();c.ellipse(X(0,1)-14,V(1)-2,R*.55,R*Q*.45,0,3.4,4.6);c.stroke()
}
