// emoticon nodding yes with a big smile, two eager nods of its ball-like face, eyes squeezing happily at each dip
export const frames=30,delay=70
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,C=Math.cos,R=96
  // pitch: two nods (big then smaller), each followed by a small bounce back up past level
  let a=0;for(const[s,L,A,b]of[[0,.3,.5,.15],[.34,.28,.46,.7]]){const u=(t-s)/L
    if(u>=0&&u<1)a+=A*S(Math.PI*u)**2;else if(u>=1&&u<1+b)a-=.14*A*S(Math.PI*(u-1)/b)}
  const ca=C(a),sa=S(a)
  // project a point painted on the front of the ball after pitching it down by a
  const J=(x,y)=>{const z=Math.sqrt(Math.max(0,R*R-x*x-y*y));return[x,y*ca+z*sa]}
  const path=(pts,close)=>{c.beginPath();pts.forEach(([x,y],k)=>{const[u,v]=J(x,y);k?c.lineTo(u,v):c.moveTo(u,v)});if(close)c.closePath()}
  const arc=(x,y,rx,ry,a0,a1,n=20)=>[...Array(n+1)].map((_,k)=>{const q=a0+(a1-a0)*k/n;return[x+rx*C(q),y+ry*S(q)]})
  c.translate(128,128+10*a);c.scale(1+.04*a,1-.04*a)
  c.beginPath();c.arc(0,0,R,0,P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke()
  c.fillStyle='#111'
  for(const d of[-1,1]){
    if(a>.3){c.lineWidth=8;path(arc(d*32,-4,13,11,Math.PI+.35,P-.35,12));c.stroke()}
    else{path(arc(d*32,-12,10,14,0,P),1);c.fill()}
    c.lineWidth=7;path([[d*20,-44],[d*32,-49-6*Math.max(0,-a)*8],[d*45,-45]]);c.stroke()
  }
  // big smile with dimples
  c.lineWidth=8;path([...Array(13)].map((_,k)=>{const x=-38+k*76/12;return[x,26+24*(1-(x/38)**2)]}));c.stroke()
  c.lineWidth=6;for(const d of[-1,1]){path([[d*44,20],[d*40,28],[d*33,29]]);c.stroke()}
}
