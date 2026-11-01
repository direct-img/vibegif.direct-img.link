// emoticon shaking its head no with eyes shut tight and a stubborn frown, grey swish lines at its sides
export const frames=30,delay=60
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,C=Math.cos,R=96,K=v=>v<0?0:v>1?1:v
  // yaw: three quick shakes that ease in and settle, then a stubborn hold
  const u=K(t/.7),a=.5*S(P*3*u)*S(Math.PI*u)**.6,v=.5*P*3*C(P*3*u)*S(Math.PI*u)**.6 // angle and rough speed
  const ca=C(a),sa=S(a)
  const J=(x,y)=>{const z=Math.sqrt(Math.max(0,R*R-x*x-y*y));return[x*ca+z*sa,y]}
  const path=(pts,close)=>{c.beginPath();pts.forEach(([x,y],k)=>{const[p,q]=J(x,y);k?c.lineTo(p,q):c.moveTo(p,q)});if(close)c.closePath()}
  const seg=(x0,y0,x1,y1,n=8)=>[...Array(n+1)].map((_,k)=>[x0+(x1-x0)*k/n,y0+(y1-y0)*k/n])
  c.translate(128+6*a,128)
  // grey swish arcs trailing the turn
  const sw=Math.min(1,Math.abs(v)/6);if(sw>.15){c.strokeStyle='#9a9a9a';c.lineWidth=5;c.globalAlpha=sw
    const d=-Math.sign(v);for(const r of[107,116]){c.beginPath();c.arc(0,0,r,(d>0?0:Math.PI)-.5+(r-107)*.015,(d>0?0:Math.PI)+.5-(r-107)*.015);c.stroke()}
    c.globalAlpha=1;c.strokeStyle='#111'}
  c.beginPath();c.arc(0,0,R,0,P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.stroke()
  // eyes squeezed shut, brows pulled down and in
  for(const d of[-1,1]){
    c.lineWidth=8;path(seg(d*20,-10,d*45,-12));c.stroke()
    c.lineWidth=7;path(seg(d*17,-33,d*46,-41));c.stroke()
  }
  // tight downturned mouth
  c.lineWidth=8;path([...Array(11)].map((_,k)=>{const x=-24+k*4.8;return[x,46-8*(1-(x/24)**2)]}));c.stroke()
}
