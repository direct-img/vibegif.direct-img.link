// emoticon going shh with a mitten finger pressed to its puckered lips, sneaky eyes glancing as hush waves spread
export const frames=32,delay=70
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v,io=v=>(v=K(v),v<.5?2*v*v:1-2*(1-v)**2)
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const L=(...p)=>{c.beginPath();c.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);c.stroke()}
  // two shh pulses, each with a lean-in; eyes slide to the other side between them
  const ph=(t*2)%1,pu=S(Math.PI*K(ph/.45))**2,side=io((t<.5?t:1-t)*4-.5)*2-1
  c.translate(128,126-2*pu);c.scale(1+.03*pu,1-.02*pu)
  E(0,0,96,96);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke()
  // half-lidded eyes: flat heavy lids, pupils sliding side to side
  for(const d of[-1,1]){
    c.save();c.beginPath();c.rect(d*32-18,-24,36,44);c.clip()
    c.fillStyle='#111';E(d*32+6*side,-14,11,15);c.fill();c.restore()
    c.lineWidth=8;L(d*32-17,-25-d*2,d*32+17,-25+d*2)
  }
  // puckered lips peeking out around the finger
  c.fillStyle='#111';E(-2,44,15,11+2*pu);c.fill()
  c.fillStyle='#fff';E(-2,44,5,4+pu);c.fill()
  // hush waves: grey arcs rolling out sideways from the lips
  c.strokeStyle='#9a9a9a';c.lineWidth=5
  for(const d of[-1,1])for(const o of[0,.22]){
    const a=K((ph-o)/.5);if(a<=0||a>=1)continue
    c.globalAlpha=S(Math.PI*a);c.beginPath();c.arc(-2,44,24+30*a,(d<0?Math.PI:0)-.5,(d<0?Math.PI:0)+.5);c.stroke()
  }
  c.globalAlpha=1;c.strokeStyle='#111'
  // fist below with a stubby index finger up across the lips, pressing on each pulse
  c.save();c.translate(12,86-3*pu);c.rotate(.1)
  c.lineWidth=33;L(-4,-6,-4,-50);c.strokeStyle='#fff';c.lineWidth=19;L(-4,-6,-4,-50);c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=7;E(6,6,27,21);c.fill();c.stroke()
  c.beginPath();c.moveTo(4,-2);c.quadraticCurveTo(18,-4,28,6);c.stroke()
  c.restore()
}
