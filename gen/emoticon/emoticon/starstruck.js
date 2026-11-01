// emoticon star-struck, star eyes popping big and twisting as sparkles twinkle all around
const P=Math.PI,K='#111',G='#9a9a9a',W='#fff',S=Math.sin,C=Math.cos
export const frames=26,delay=68
const star=(c,x,y,R,a,n=5,q=.48)=>{
  c.beginPath()
  for(let k=0;k<2*n;k++){const r=k%2?R*q:R,b=a+k*P/n;c.lineTo(x+r*S(b),y-r*C(b))}
  c.closePath()
}
export default(c,t,i)=>{
  // pop: a springy jolt of amazement at the top of the loop, eased back in before it comes round
  const u=t-.08,p=t<.08?S(P/2*t/.08):Math.exp(-5*u)*C(11*u)*((1-t)/.92)**2-.2*Math.max(0,S(P*(t-.8)/.2))*(t>.8)
  // sparkles twinkling round the head
  for(const[x,y,ph,R]of[[34,42,0,18],[222,56,.3,14],[222,200,.55,17],[32,190,.8,13],[184,16,.15,10]]){
    const k=Math.max(0,S(2*P*(t*2+ph)))
    if(k<.08)continue
    star(c,x,y,R*k,k*.8,4,.28);c.lineWidth=5;c.strokeStyle=W;c.stroke();c.fillStyle=K;c.fill()
  }
  c.translate(128,132-8*p)
  c.beginPath();c.ellipse(0,0,96*(1-.04*p),96*(1+.06*p),0,0,2*P);c.fillStyle=W;c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  c.scale(1-.04*p,1+.06*p)
  // brows flung up high
  c.lineWidth=8
  for(const d of[-1,1]){c.beginPath();c.arc(d*36,-54-6*p,20,1.22*P,1.78*P);c.stroke()}
  // star eyes, popping and spinning
  c.fillStyle=K;c.lineWidth=5
  for(const d of[-1,1])star(c,d*36,-14,25*(1+.22*p),d*(.35*S(2*P*t)+.2*p)),c.fill(),c.stroke()
  // open-mouthed wow grin
  const H=34+8*p
  c.beginPath();c.moveTo(-40,26);c.quadraticCurveTo(0,32,40,26);c.ellipse(0,26,40,H,0,0,P);c.closePath()
  c.fill();c.save();c.clip();c.fillStyle=G;c.beginPath();c.ellipse(0,26+H,22,14,0,0,2*P);c.fill();c.restore()
}
