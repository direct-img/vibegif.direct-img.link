// owl perched on a branch, rocking its head side to side and blinking its big eyes
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=90
const BR='#9c6644',BE='#f3d5b5',FA='#ede0d4',WG='#7f5539',Y='#ffd43b',O='#ff922b',BRANCH='#8d6346',LF='#69db7c'
export default(c,t,i)=>{
  const shut=i==8||i==9,a=.1*sin(t*T)
  c.fillStyle=BRANCH;c.beginPath();c.roundRect(14,206,228,20,10);c.fill();c.stroke()
  c.fillStyle=LF;for(const[x,r]of[[34,-.5],[226,.5]])c.beginPath(),c.ellipse(x,198,16,8,r,0,T),c.fill(),c.stroke()
  c.fillStyle=O;for(const x of[108,148])c.beginPath(),c.ellipse(x,208,14,7,0,0,T),c.fill(),c.stroke()
  c.translate(128,206);c.rotate(a);c.translate(-128,-206)
  c.fillStyle=BR
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*52,66),c.lineTo(128+d*66,30),c.lineTo(128+d*24,56),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.ellipse(128,128,70,78,0,0,T);c.fill();c.stroke()
  c.fillStyle=BE;c.beginPath();c.ellipse(128,160,44,40,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.lineWidth=4;for(const[x,y]of[[112,148],[136,146],[124,166],[148,164],[108,172]])c.beginPath(),c.arc(x,y-6,7,.2*PI,.8*PI),c.stroke()
  c.lineWidth=7;c.fillStyle=WG
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*62,150,16,40,-d*(.2+.08*sin(2*T*t)),0,T),c.fill(),c.stroke()
  c.fillStyle=FA;for(const d of[-1,1])c.beginPath(),c.arc(128+d*27,98,31,0,T),c.fill(),c.stroke()
  for(const d of[-1,1]){
    const x=128+d*27
    if(shut){c.lineWidth=5;c.beginPath();c.arc(x,94,14,.15*PI,.85*PI);c.stroke();c.lineWidth=7;continue}
    c.fillStyle='#fff';c.beginPath();c.arc(x,98,21,0,T);c.fill();c.lineWidth=5;c.stroke()
    c.fillStyle=Y;c.beginPath();c.arc(x+d*-2,99,13,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.arc(x+d*-2,99,7,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+d*-2-3,95,3,0,T);c.fill();c.lineWidth=7
  }
  c.fillStyle=O;c.lineWidth=5;c.beginPath();c.moveTo(119,122);c.lineTo(137,122);c.lineTo(128,140);c.closePath();c.fill();c.stroke()
}
