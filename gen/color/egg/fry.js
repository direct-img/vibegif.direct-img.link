// egg sizzling in a pan: the white wobbles, bubbles pop around its edge, the yolk bobs, steam curls up
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=70
const PAN='#868e96',IN='#495057',YK='#ffd43b',BL='#ffa8a8'
export default(c,t)=>{
  c.fillStyle=PAN;c.save();c.translate(196,196);c.rotate(PI/4);c.beginPath();c.roundRect(0,-13,74,26,13);c.restore();c.fill();c.stroke()
  c.beginPath();c.arc(112,140,94,0,T);c.fill();c.stroke()
  c.fillStyle=IN;c.beginPath();c.arc(112,140,80,0,T);c.fill();c.lineWidth=4;c.stroke();c.lineWidth=7
  c.fillStyle='#fff';c.beginPath()
  for(let a=0;a<=T+.01;a+=.08){const r=58+8*sin(3*a+1)+5*sin(5*a+2)+2.5*sin(4*a-2*T*t);c.lineTo(112+cos(a)*r,140+sin(a)*r)}
  c.closePath();c.fill();c.stroke()
  c.lineWidth=4
  for(let k=0;k<6;k++){const a=k*T/6+.4,p=(t*2+k/6)%1,s=6*sin(PI*p);if(s>1)c.beginPath(),c.arc(112+cos(a)*72,140+sin(a)*72,s,0,T),c.fill(),c.stroke()}
  const y=3*sin(2*T*t)
  c.lineWidth=7;c.fillStyle=YK;c.beginPath();c.arc(104,132+y,26,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(96,122+y,7,4,-.5,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(104+d*9,134+y,3.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(104,139+y,5,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(104+d*16,140+y,4,2.5,0,0,T),c.fill()
  for(const[x0,o]of[[160,0],[188,.5]])for(const[w,s]of[[11,'#111'],[4,'#fff']]){
    c.lineWidth=w;c.strokeStyle=s;c.beginPath()
    for(let yy=54;yy>=14;yy-=2)c.lineTo(x0+5*sin((54-yy)/20*T-t*T*2+o*6),yy)
    c.stroke()
  }
  c.strokeStyle='#111'
}
