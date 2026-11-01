// two champagne flutes swinging together and clinking, bubbly sloshing and splashing
export const frames=48,delay=50,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),rn=n=>(n=Math.sin(n*127.1+311.7)*43758.5453,n-Math.floor(n))
const H=.42,K=.9
export default(c,t)=>{
  const u=t-H
  // swing: 0 apart .. 1 touching, with a little rebound after the hit
  const sw=t<.3?-.24*sm((t-.1)/.2):t<H?-.24+1.24*((t-.3)/(H-.3))**2:u<.12?1-.2*Math.sin(u/.12*Math.PI):1-sm((u-.12)/.28)-.07*Math.sin(Math.PI*cl((u-.34)/.18))
  const sl=u>0?.42*Math.exp(-u*8)*Math.sin(u*50):.1*sm((t-.12)/.18)-.3*sm((t-.32)/.1),lift=14*sm(sw*1.3)
  for(const d of[-1,1]){
    const r=-d*(-.06+.265*sw+.014*Math.sin(P*(t+(d>0?.5:0))))
    c.save();c.translate(128+d*58,240-lift);c.rotate(r);c.scale(K,K)
    flute(c,t,-r,-sl*d,d)
    c.restore()
  }
  // contact point of the rims
  const cx=128,cy=58
  // ting lines and sparkles
  if(u>0&&u<.12){
    const q=u/.12
    for(let j=0;j<5;j++){
      const an=-Math.PI/2+(j-2)*.62,r1=16+22*q,r2=r1+20*(1-q)
      c.beginPath();c.moveTo(cx+Math.cos(an)*r1,cy+Math.sin(an)*r1);c.lineTo(cx+Math.cos(an)*r2,cy+Math.sin(an)*r2)
      c.lineWidth=8;c.strokeStyle='#111';c.stroke();c.lineWidth=3.5;c.strokeStyle='#ffd23f';c.stroke()
    }
    c.strokeStyle='#111'
  }
  for(let j=0;j<3;j++){
    const q=(u-.02-j*.03)/.16
    if(q>0&&q<1)tw(c,cx+[-46,44,-6][j],cy+[-12,-20,-34][j],[10,9,8][j]*Math.sin(Math.PI*q))
  }
  // splash drops
  for(let j=0;j<12;j++){
    const q=(u-.005-rn(j)*.05)/.3
    if(q>0&&q<1){
      const s=j%2?1:-1,vx=s*(25+75*rn(j+5)),vy=-(150+110*rn(j+7)),tt=q*.75
      const x=cx+s*10+vx*tt,y=cy+20+vy*tt+330*tt*tt,r=(3.5+3.5*rn(j+3))*(1-q*q)
      if(r>1.4){c.beginPath();c.arc(x,y,r,0,P);c.fillStyle='#f7c948';c.lineWidth=3;c.fill();c.stroke()}
    }
  }
}
// one flute, origin at the foot, tl = tilt to undo for the liquid, sl = slosh
const flute=(c,t,tl,sl,d)=>{
  const bowl=()=>{c.moveTo(0,-82);c.bezierCurveTo(-27,-88,-31,-150,-27,-196);c.lineTo(27,-196);c.bezierCurveTo(31,-150,27,-88,0,-82);c.closePath()}
  c.lineWidth=6.5;c.fillStyle='#e4f2fb'
  // foot and stem
  c.beginPath();c.ellipse(0,-8,32,9,0,0,P);c.fill();c.stroke()
  c.beginPath();c.roundRect(-4.5,-88,9,80,4);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-10,-10,10,3,0,0,P);c.fill()
  // bowl with tilting liquid
  c.beginPath();bowl();c.fill()
  c.save();c.clip();c.translate(0,-150);c.rotate(tl+sl)
  c.fillStyle='#f6c13f';c.fillRect(-70,0,140,120)
  c.fillStyle='#e3a51f';c.fillRect(d>0?-70:18,0,52,120)
  c.fillStyle='#fff3b8';c.fillRect(-70,-2,140,7)
  c.lineWidth=3;c.beginPath();c.moveTo(-70,-2);c.lineTo(70,-2);c.stroke()
  // bubbles rising
  c.beginPath();c.rect(-70,6,140,120);c.clip()
  c.fillStyle='#fff8d8'
  for(let j=0;j<7;j++){
    const v=(t*2+j*.37+d*.2)%1,x=-12+j*4+Math.sin(v*9+j)*2,y=68-v*66
    c.beginPath();c.arc(x,y,1.6+v*1.6,0,P);c.fill()
  }
  c.restore()
  // glint and outline
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-16,-112);c.quadraticCurveTo(-21,-150,-19,-184);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6.5;c.beginPath();bowl();c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(0,-196,27,5,0,0,P);c.stroke()
}
// four point twinkle
const tw=(c,x,y,z)=>{
  if(z<.6)return
  c.beginPath()
  for(let j=0;j<8;j++){const a=j*Math.PI/4,r=j%2?z*.32:z;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
  c.closePath();c.fillStyle='#ffd23f';c.lineWidth=2.5;c.fill();c.stroke()
}
