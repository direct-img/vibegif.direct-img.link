// glossy coral-red ball bouncing on the spot, falling and rising on a gravity curve, stretching in flight and squashing flat on impact with little grey bump ticks, over a grey oval shadow that widens as it lands and shrinks as it rises
const{sin,PI}=Math,T=2*PI
export const frames=30,delay=40
const r=34,G=206,H=116,cw=.11 // radius, ground, jump height, contact window
export default(c,t)=>{
 const q=(t+cw/2)%1 // contact runs over q in [0,cw)
 let h=0,sx=1,sy=1,s=0
 if(q<cw)s=sin(PI*q/cw),sx=1+.27*s,sy=1-.25*s
 else{
  const u=(q-cw)/(1-cw),v=1-2*u // flight: parabola, v is speed
  h=H*4*u*(1-u),sy=1+.16*v*v,sx=1/sy**.6
 }
 // shadow
 const k=1-h/H,w=r*(.55+.6*k)+14*s
 c.fillStyle='#98a1ad',c.beginPath(),c.ellipse(128,G+9,w,w*.2,0,0,T),c.fill()
 // impact ticks
 if(s>.4){
  c.strokeStyle='#98a1ad',c.lineWidth=6
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*(r*sx+10),G-8),c.lineTo(128+d*(r*sx+22),G-18),c.moveTo(128+d*(r*sx+14),G+1),c.lineTo(128+d*(r*sx+28),G-1),c.stroke()
 }
 // ball, anchored at its bottom
 c.save(),c.translate(128,G-h),c.scale(sx,sy),c.translate(0,-r)
 c.lineWidth=6/((sx+sy)/2),c.strokeStyle='#111'
 c.fillStyle='#ff4f63',c.beginPath(),c.arc(0,0,r,0,T),c.fill()
 // shade on the lower right, highlight on the upper left
 c.save(),c.clip(),c.fillStyle='#d62f4a',c.beginPath(),c.arc(0,0,r+2,0,T),c.arc(-9,-10,r+1,0,T,true),c.fill(),c.restore()
 c.fillStyle='#fff',c.beginPath(),c.ellipse(-13,-15,9,5.5,-.75,0,T),c.fill()
 c.beginPath(),c.arc(0,0,r,0,T),c.stroke()
 c.restore()
}
