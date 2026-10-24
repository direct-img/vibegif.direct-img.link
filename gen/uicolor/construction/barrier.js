// orange and white striped road barrier, its two warning lamps flashing in turn, the lit lamp wide awake and beaming while the other dozes
const{sin,cos,PI,floor,max}=Math,T=2*PI
export const frames=16,delay=90
const OR='#ff922b',ON='#ffd43b',OFF='#c8962e',HS='#495057',PO='#dee2e6',BL='#ffa8a8'
const board=(c,y,h)=>{
  const r=()=>{c.beginPath();c.roundRect(14,y,228,h,10)}
  c.save();r();c.fillStyle='#fff';c.fill();c.clip();c.fillStyle=OR
  for(let s=-60;s<250;s+=44)c.beginPath(),c.moveTo(s,y+h),c.lineTo(s+22,y+h),c.lineTo(s+22+h,y),c.lineTo(s+h,y),c.fill()
  c.restore();r();c.stroke()
}
export default(c,t)=>{
  const k=floor(t*4)%2,p=(t*4)%1,pop=1+.1*max(0,1-p*3)
  c.fillStyle=PO
  for(const x of[64,192])c.beginPath(),c.roundRect(x-9,70,18,156,6),c.fill(),c.stroke(),c.beginPath(),c.roundRect(x-38,222,76,16,8),c.fill(),c.stroke()
  board(c,90,48);board(c,158,38)
  for(const[j,x]of[[0,64],[1,192]]){
    const on=j==k
    c.save();c.translate(x,54);if(on)c.scale(pop,pop)
    if(on)for(let r=0;r<7;r++){const a=PI+r*PI/6;for(const[w,s]of[[9,'#111'],[4,ON]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(cos(a)*35,sin(a)*35),c.lineTo(cos(a)*44,sin(a)*44),c.stroke()}
    c.strokeStyle='#111';c.lineWidth=7
    c.fillStyle=HS;c.beginPath();c.arc(0,0,30,0,T);c.fill();c.stroke()
    c.fillStyle=on?ON:OFF;c.lineWidth=5;c.beginPath();c.arc(0,0,22,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.lineWidth=3.5
    if(on){
      c.fillStyle='#fff';c.beginPath();c.ellipse(-10,-11,5,3,-.6,0,T);c.fill()
      c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*8,-2,3.5,4.5,0,0,T),c.fill()
      c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*14,6,4,2.5,0,0,T),c.fill()
      c.beginPath();c.arc(0,4,6,.15*PI,.85*PI);c.stroke()
    }else{
      for(const d of[-1,1])c.beginPath(),c.arc(d*8,-4,4,.2*PI,.8*PI),c.stroke()
      c.beginPath();c.moveTo(-3,9);c.lineTo(3,9);c.stroke()
    }
    c.restore()
  }
}
