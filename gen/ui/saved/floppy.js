// a floppy disk squishes as it saves, then a check badge pops onto its corner, the check draws itself and the disk smiles
const{sin,cos,PI,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=70
const cl=u=>min(1,max(0,u)),bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2)
const P=[[-17,1],[-5,13],[18,-12]],LL=hypot(12,12)+hypot(23,25)
export default(c,t)=>{
  const q=sin(PI*cl(t/.16)),s=t<.86?bk((t-.16)/.14):1-cl((t-.86)/.12)**2,p=cl((t-.26)/.16),b=(t-.42)/.18,hp=t>.36&&t<.92
  c.save();c.translate(116,198);c.scale(1+.07*q,1-.09*q);c.translate(-116,-198)
  c.beginPath();c.moveTo(30,46);c.quadraticCurveTo(30,30,46,30);c.lineTo(174,30);c.lineTo(202,58);c.lineTo(202,182);c.quadraticCurveTo(202,198,186,198);c.lineTo(46,198);c.quadraticCurveTo(30,198,30,182);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ddd';c.beginPath();c.roundRect(66,30,100,58,[0,0,8,8]);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(132,42,18,34,3);c.fill()
  c.fillStyle='#fff';c.beginPath();c.roundRect(56,112,120,86,[12,12,0,0]);c.fill();c.stroke()
  c.fillStyle='#111';c.lineWidth=5
  if(hp)for(const d of[-1,1])c.beginPath(),c.arc(116+d*20,152,7,PI*1.1,PI*1.9),c.stroke()
  else for(const d of[-1,1])c.beginPath(),c.arc(116+d*20,148,6,0,T),c.fill()
  c.beginPath();c.arc(116,160,hp?14:9,.15*PI,.85*PI);c.stroke()
  c.restore()
  c.fillStyle='#fff';c.strokeStyle='#111'
  if(b>0&&b<1)for(let k=0;k<8;k++){const a=k*T/8+PI/8,r1=44+12*b,r2=r1+12*(1-b);for(const[w,st]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(190+cos(a)*r1,190+sin(a)*r1),c.lineTo(190+cos(a)*r2,190+sin(a)*r2),c.stroke()}
  if(s>.01){
    c.strokeStyle='#111';c.save();c.translate(190,190);c.scale(s,s);c.lineWidth=7/s
    c.beginPath();c.arc(0,0,36,0,T);c.fill();c.stroke()
    if(p>0){c.lineWidth=11;c.setLineDash([LL*p,999]);c.beginPath();for(const[x,y]of P)c.lineTo(x,y);c.stroke()}
    c.restore()
  }
}
