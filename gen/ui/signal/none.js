// a phone with no signal, its empty bars light up one by one as it searches and then blink, while its little face looks round sadly
const{sin,PI}=Math,T=2*PI
export const frames=16,delay=90
export default(c,t,i)=>{
  c.beginPath();c.roundRect(58,10,140,236,28);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.roundRect(72,38,112,176,12);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(112,24);c.lineTo(144,24);c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(128,230,7,0,T);c.stroke()
  const scan=i<8?i>>1:-1,dim=i>=8&&i%4>1
  for(let k=0;k<4;k++){
    const h=18+16*k,x=82+k*24
    c.fillStyle=k==scan?'#bbb':'#fff';c.strokeStyle=dim?'#bbb':'#111';c.lineWidth=5
    c.beginPath();c.roundRect(x,126-h,18,h,4);c.fill();c.stroke()
  }
  c.fillStyle='#111';c.strokeStyle='#111'
  const e=i<8?(scan-1.5)*3:0
  for(const d of[-1,1])c.beginPath(),c.arc(128+d*16+e,160,6,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128+e*.5,192,12,PI*1.15,PI*1.85);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(100+e,151);c.lineTo(112+e,145);c.moveTo(156+e,151);c.lineTo(144+e,145);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(164,140+(i%8));c.bezierCurveTo(158,152+(i%8),160,160+(i%8),166,160+(i%8));c.bezierCurveTo(172,160+(i%8),174,152+(i%8),164,140+(i%8));c.fill();c.stroke()
}
