// two jigsaw pieces slide together and snap into place with a click spark, grin about it, then drift apart
const{sin,cos,PI,atan2,max}=Math,T=2*PI
export const frames=24,delay=70
const D=(c,f,a=11,b=4)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
// one side from (x1,y1) to (x2,y2) with a round tab (k=1) or slot (k=-1) in the middle; outward is to the left of travel
const side=(c,x1,y1,x2,y2,k)=>{
  const l=Math.hypot(x2-x1,y2-y1),dx=(x2-x1)/l,dy=(y2-y1)/l,nx=dy*k,ny=-dx*k,mx=(x1+x2)/2,my=(y1+y2)/2
  const cx=mx+nx*13,cy=my+ny*13,a1=atan2(my-dy*9-cy,mx-dx*9-cx),a2=atan2(my+dy*9-cy,mx+dx*9-cx),ao=atan2(ny,nx)
  const cw=((ao-a1)%T+T)%T<((a2-a1)%T+T)%T
  c.lineTo(mx-dx*9,my-dy*9);c.arc(cx,cy,15.8,a1,a2,!cw);c.lineTo(x2,y2)
}
const face=(c,x,happy,look)=>{
  c.fillStyle='#111';c.lineWidth=5
  for(const d of[-1,1]){
    if(happy)c.beginPath(),c.arc(x+d*12,2,7,PI*1.1,PI*1.9),c.stroke()
    else c.beginPath(),c.ellipse(x+d*12+look,0,5,7,0,0,T),c.fill()
  }
  if(happy){c.lineWidth=3;for(const d of[-1,1])for(const o of[-4,0,4])c.beginPath(),c.moveTo(x+d*20+o-2,16),c.lineTo(x+d*20+o+2,10),c.stroke()}
  c.lineWidth=4;c.beginPath();c.arc(x,10,happy?8:5,.15*PI,.85*PI);c.stroke()
  c.lineWidth=7;c.fillStyle='#fff'
}
export default(c,t)=>{
  const g=t<.35?22*(1-(t/.35)**2):t<.7?0:22*(1-cos(PI*(t-.7)/.3))/2,on=t>=.35&&t<.7,j=on&&t<.45?3*sin((t-.35)*80):0
  c.translate(128,128);c.scale(1.12,1.12);c.translate(-128,-128)
  if(t>=.35&&t<.52){const k=sin(PI*(t-.35)/.17);for(const a of[-.9,-.45,.45,.9])D(c,()=>{c.moveTo(128+sin(a)*20*k,90-cos(a)*20*k);c.lineTo(128+sin(a)*44*k,90-cos(a)*44*k)})}
  c.save();c.translate(128-g,128+j)
  c.beginPath();c.moveTo(-76,-38);side(c,-76,-38,0,-38,1);side(c,0,-38,0,38,1);c.lineTo(-76,38);c.closePath();c.fill();c.stroke()
  face(c,-38,on,g>4?4:0);c.restore()
  c.save();c.translate(128+g,128+j)
  c.beginPath();c.moveTo(0,-38);c.lineTo(76,-38);c.lineTo(76,38);side(c,76,38,0,38,1);side(c,0,38,0,-38,-1);c.closePath();c.fill();c.stroke()
  face(c,42,on,g>4?-4:0);c.restore()
}
