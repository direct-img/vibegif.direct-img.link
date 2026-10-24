// clipboard checklist: the three boxes get ticked one by one, the clipboard does a happy hop, then the ticks pop away
const{sin,PI,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=70
const cl=u=>min(1,max(0,u)),L=hypot(9,10)+hypot(21,27)
export default(c,t)=>{
  const h=t>.66&&t<.82?sin((t-.66)/.16*PI):0,out=1-cl((t-.88)/.08)
  c.translate(128,234-10*h);c.scale(1-.03*h,1+.02*h);c.translate(-128,-234)
  c.fillStyle='#ddd';c.beginPath();c.roundRect(50,52,156,182,16);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(66,70,124,148,6);c.fill();c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(128,40,16,0,T);c.fill();c.stroke()
  c.beginPath();c.roundRect(92,44,72,26,9);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(128,38,5,0,T);c.stroke()
  for(let k=0;k<3;k++){
    const y=104+k*48,s=.06+k*.18,p=cl((t-s)/.12),q=cl((t-s-.12)/.1),b=1+.22*sin(q*PI)
    c.save();c.translate(96,y);c.scale(b,b)
    c.lineWidth=6;c.beginPath();c.roundRect(-15,-15,30,30,7);c.fill();c.stroke();c.restore()
    c.lineWidth=10;c.strokeStyle='#bbb';c.beginPath();c.moveTo(126,y-6);c.lineTo([168,154,174][k],y-6);c.moveTo(126,y+8);c.lineTo([150,166,140][k],y+8);c.stroke()
    c.strokeStyle='#111'
    if(p>0&&out>0){
      c.save();c.translate(96,y);c.scale(out,out);c.lineWidth=11;c.setLineDash([L*p,999])
      c.beginPath();c.moveTo(-10,-1);c.lineTo(-1,9);c.lineTo(20,-18);c.stroke();c.restore()
    }
  }
}
