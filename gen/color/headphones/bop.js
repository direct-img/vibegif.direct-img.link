// headphones bopping to the beat, ear cups thumping, music notes popping out the sides
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=16,delay=70
const BAND='#4dabf7',CUP='#f783ac',CUSH='#ffd43b',NOTES=['#b197fc','#69db7c','#ffa94d']
export default(c,t)=>{
  const b=abs(sin(2*PI*t)),y=-8*b,s=1+.06*b
  for(const d of[-1,1])for(let k=0;k<2;k++){
    const p=(t+k/2+(d>0?.25:0))%1,sz=sin(PI*p)*.9,x=128+d*(86+p*30),yy=150-p*110
    if(sz<.15)continue
    c.save();c.translate(x,yy);c.scale(sz,sz);c.rotate(.3*sin(p*T))
    for(const[w,st]of[[12,'#111'],[5,NOTES[(k+(d>0?1:0))%3]]])c.lineWidth=w/sz>30?30:w,c.strokeStyle=st,c.beginPath(),c.moveTo(8,4),c.lineTo(8,-30),c.quadraticCurveTo(14,-18,24,-16),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=NOTES[(k+(d>0?1:0))%3];c.beginPath();c.ellipse(0,6,11,8,-.4,0,T);c.fill();c.stroke()
    c.restore()
  }
  c.translate(0,y)
  for(const[w,st]of[[26,'#111'],[14,BAND]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(128,140,78,PI*1.05,PI*1.95),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  for(const d of[-1,1]){
    c.save();c.translate(128+d*80,152);c.scale(s,s)
    c.fillStyle=CUSH;c.beginPath();c.roundRect(-d*22-10,-34,20,68,10);c.fill();c.stroke()
    c.fillStyle=CUP;c.beginPath();c.roundRect(-18+d*6,-42,36,84,18);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.arc(d*6,0,10,0,T);c.stroke()
    c.restore()
  }
  if(b>.7)for(const d of[-1,1])for(const r of[20,32])for(const[w,st]of[[9,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(128+d*86,152,r+20,d>0?-.5:PI-.5,d>0?.5:PI+.5),c.stroke()
}
