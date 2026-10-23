// cat-whale drifting along: one solid white shape with a dark edge, it bobs, flicks its tail, twitches an ear, puffs a spout and blinks
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=sin(T*t),k=sin(T*t-1.4),p=t/.45,tw=t>.6&&t<.68?.3:0,bl=t>.82&&t<.9,tx=46+4*k,ty=92-5*k
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(128,132+7*s);c.rotate(.04*cos(T*t));c.scale(.9,.9);c.translate(-126,-128)
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  shape(0,0,0,()=>{
    c.moveTo(150,86);c.bezierCurveTo(196,84,226,112,224,146);c.bezierCurveTo(222,182,190,198,148,198)
    c.bezierCurveTo(98,198,52,178,44,134);c.quadraticCurveTo(tx-10,114,tx-7,ty);c.lineTo(tx+7,ty)
    c.quadraticCurveTo(tx+8,118,72,122);c.bezierCurveTo(84,98,112,86,150,86)})
  shape(tx,ty,.2*k-.12,()=>{
    c.moveTo(0,6);c.quadraticCurveTo(-16,0,-36,-22);c.quadraticCurveTo(-16,-22,0,-8)
    c.quadraticCurveTo(12,-20,26,-20);c.quadraticCurveTo(12,0,0,6)})
  shape(152,86,0,()=>{c.moveTo(-14,6);c.lineTo(-6,-30);c.lineTo(14,0)})
  shape(190,90,tw,()=>{c.moveTo(-14,-4);c.lineTo(8,-34);c.lineTo(14,8)})
  shape(150,190,-.6-.35*sin(T*t-2),()=>c.ellipse(-20,0,24,9,0,0,T))
  c.lineWidth=3;for(const[y,d]of[[146,-8],[156,4]])c.beginPath(),c.moveTo(214,y),c.quadraticCurveTo(230,y+d/2,244,y+d),c.stroke()
  if(p<1){
    // palm-tree spout: grows out of the blowhole, opens, then sinks back
    const g=sin(PI*p),x=110,y=94,h=46*g,w=15*min(1,g*1.5)
    c.lineWidth=8*g+2;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-h);c.stroke()
    for(const d of[-1,1])c.beginPath(),c.moveTo(x,y-h),c.quadraticCurveTo(x+d*w*.8,y-h-w*.5,x+d*w,y-h+w*.5),c.stroke(),
      c.beginPath(),c.arc(x+d*w,y-h+w*.5+5,5*g,0,T),c.fill()
  }
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(190,128,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(190,130,6.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(214,160);c.quadraticCurveTo(206,167,196,165);c.stroke()
}
