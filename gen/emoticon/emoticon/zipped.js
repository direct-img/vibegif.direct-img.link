// emoticon zipping its mouth shut with a mitten hand, then giving a satisfied sealed-lips nod
export const frames=32,delay=75
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v,io=v=>(v=K(v),v<.5?2*v*v:1-2*(1-v)**2)
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const ink=(w=7)=>{c.fillStyle='#fff';c.fill();c.lineWidth=w;c.strokeStyle='#111';c.stroke()}
  // z: 0 open .. 1 zipped; the hand pops in, drags the pull across, pops away; the zip springs back open at the end
  const z=t<.1?0:t<.42?io((t-.1)/.32):t<.9?1:1-io((t-.9)/.1),X=36,px=-X+2*X*z
  const hs=K((t-.03)/.07)*K((.55-t)/.07),calm=K((t-.5)/.05)*K((.9-t)/.04)
  const nod=calm*(1-Math.cos(K((t-.54)/.32)*P*2))*3,talk=1+.22*S(t*P*8)*(1-K(z*4))
  c.translate(128,126+nod)
  E(0,0,96,96);ink(8)
  c.fillStyle='#111';c.lineWidth=7
  if(calm>.5){c.lineWidth=8;for(const d of[-1,1]){c.beginPath();c.arc(d*32,-6,13,P/2+.45,P-.45);c.stroke()}}
  else{E(-32,-14,10,14);c.fill();E(32,-14,10,14);c.fill()}
  const br=(1-z)*6-calm*2 // brows lift while blabbing, settle when sealed
  c.beginPath();c.moveTo(-46,-44-br);c.lineTo(-20,-46-br);c.stroke()
  c.beginPath();c.moveTo(46,-44-br);c.lineTo(20,-46-br);c.stroke()
  const my=42
  // open part: from the slider to the far corner, jaw hanging lower than the lip
  if(px<X-1){const H=26*(X-px)/(2*X)*talk,f=u=>Math.sqrt(S(Math.PI*u));c.beginPath()
    for(let k=0;k<=24;k++){const u=k/24;c.lineTo(px+(X-px)*u,my-H*.45*f(u))}
    for(let k=24;k>=0;k--){const u=k/24;c.lineTo(px+(X-px)*u,my+H*f(u))}
    c.closePath();c.fillStyle='#111';c.fill();c.lineWidth=6;c.stroke()}
  // closed part: track with interlocking teeth
  c.lineWidth=5;c.beginPath();c.moveTo(-X,my);c.lineTo(px,my);c.stroke()
  c.lineWidth=4;for(let x=-X+3;x<px-4;x+=7){c.beginPath();c.moveTo(x,my-7);c.lineTo(x,my+7);c.stroke()}
  // slider and pull tab, swinging a little after it is let go
  const sw=z==1?.4*S(K((t-.44)/.2)*P*1.5)*(1-K((t-.44)/.2)):0
  c.save();c.translate(px,my);c.rotate(sw)
  c.beginPath();c.roundRect(-8,-8,16,15,4);ink(5)
  c.beginPath();c.roundRect(-6,6,12,20,5);ink(5)
  c.fillStyle='#111';E(0,19,2.5,3.5);c.fill()
  c.restore()
  // mitten gripping the pull, thumb on top
  if(hs>0){c.save();c.translate(px+6,my+28);c.scale(hs,hs);c.rotate(-.25)
    E(-10,-12,11,17,-.7);ink();E(8,6,26,20,.2);ink()
    c.beginPath();c.moveTo(-6,2);c.quadraticCurveTo(8,-3,18,5);c.stroke()
    c.restore()}
}
