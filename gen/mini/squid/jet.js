// squid: squeezes its mantle, shoots upward with arms trailing, then drifts back down with arms fanning open
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  const sq=t<.15?sm(t/.15):t<.3?1-sm((t-.15)/.15):0
  const Y=t<.15?4*sm(t/.15):t<.35?4-30*(1-(1-(t-.15)/.2)**2):-26+26*sm((t-.35)/.65)
  const s=t<.15?1-sm(t/.15):t<.4?0:sm((t-.4)/.4),cy=146+Y,w=44*(1-.2*sq)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const limb=(bx,a,L,w0,w1,bend,ph)=>{
    let x=bx,y=cy+12,px,py
    for(let i=1;i<=14;i++){const u=i/14,an=a+bend*sin(T*t*2+ph+u*3)*u;px=x;py=y;x+=sin(an)*L/14;y+=cos(an)*L/14
      c.lineWidth=w0+(w1-w0)*u;c.beginPath();c.moveTo(px,py);c.lineTo(x,y);c.stroke()}
    return[x,y]
  }
  for(const d of[-1,1]){
    const[x,y]=limb(128+d*11,d*(.1+.25*s),60,7,3,.25*s,d)
    c.beginPath();c.ellipse(x,y,6,8,-d*(.08+.25*s),0,T);c.fill()
  }
  for(let i=0;i<5;i++)limb(128+(i-2)*9,(i-2)*.2*s,40,12,3,.35*s,i*1.3)
  c.lineWidth=6
  c.beginPath();c.ellipse(128,cy+4,32*(1-.1*sq),18,0,0,T);c.fill();c.stroke()
  const tip=cy-90-6*sq,fl=4*sin(T*t*3)
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*4,tip+6),c.lineTo(128+d*(48+fl),cy-60),c.lineTo(128+d*w*.8,cy-46),c.fill(),c.stroke()
  c.beginPath();c.moveTo(128,tip);c.bezierCurveTo(128+w*.8,tip+16,128+w,cy-40,128+w*.85,cy-6);c.quadraticCurveTo(128,cy+2,128-w*.85,cy-6)
  c.bezierCurveTo(128-w,cy-40,128-w*.8,tip+16,128,tip);c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*16,cy+3,6.5,0,T),c.fill()
}
