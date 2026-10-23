// strawberry frog hopping in place: crouch, leap with legs stretched, land with a squash, then its throat puffs
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=70
const B='#ee5a5a',L='#f7adad',S='#f4c03e',G='#8cc084',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const air=t>.12&&t<.56,ap=air?(t-.12)/.44:0,h=air?56*sin(PI*ap):0,ext=air?sin(PI*min(1,ap*1.6)):0
  const sq=t<.12?.12*sin(PI*t/.12):t>.56&&t<.7?.14*sin(PI*(t-.56)/.14):0,g=t>.7?sin(PI*(t-.7)/.3):0
  const cx=128,base=214-h,W=64*(1+sq),H=96*(1-sq)+10*ext,y0=base-H,bl=t>.9&&t<.96
  for(const d of[-1,1]){
    fill(B,()=>c.ellipse(cx+d*W*.78,base-14+8*ext,22-6*ext,15+10*ext,d*(.5-.5*ext),0,T))
    fill(B,()=>c.ellipse(cx+d*(W*.98-14*ext),base+18*ext,17,6,d*.2,0,T))
  }
  fill(B,()=>{c.moveTo(cx,y0+4);c.bezierCurveTo(cx+W*.9,y0-4,cx+W*1.12,y0+H*.4,cx+W*.72,y0+H*.72)
    c.bezierCurveTo(cx+W*.44,y0+H*1.02,cx+W*.14,base,cx,base);c.bezierCurveTo(cx-W*.14,base,cx-W*.44,y0+H*1.02,cx-W*.72,y0+H*.72)
    c.bezierCurveTo(cx-W*1.12,y0+H*.4,cx-W*.9,y0-4,cx,y0+4)})
  for(const d of[-1,1])fill(B,()=>c.arc(cx+d*32,y0+8,19,0,T))
  for(const a of[-2.6,-2,-1.15,-.5])fill(G,()=>c.ellipse(cx+15*cos(a),y0+4+10*sin(a),14,6,a,0,T))
  c.strokeStyle=G;c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(cx,y0);c.lineTo(cx+3,y0-14);c.stroke()
  fill(S,()=>{for(const[x,y]of[[-30,.5],[30,.5],[-14,.64],[14,.64],[0,.78],[-24,.74],[24,.74]])c.moveTo(cx+x*W/64+2.5,y0+H*y),c.ellipse(cx+x*W/64,y0+H*y,2.5,4,0,0,T)})
  if(g>0)fill(L,()=>c.ellipse(cx,y0+H*.46+6*g,14*g+4,11*g+3,0,0,T))
  for(const d of[-1,1])fill(B,()=>c.ellipse(cx+d*16,base-2+6*ext,11,6,0,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.moveTo(cx+d*32-7,y0+8),c.lineTo(cx+d*32+7,y0+8),c.stroke()
  else c.beginPath(),c.arc(cx+d*32,y0+8,7,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(cx,y0+H*.2,22,.2*PI,.8*PI);c.stroke()
}
