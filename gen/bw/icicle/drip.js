// icicles hanging from a snowy ledge, a drop swelling on the longest one, falling and splashing into a puddle
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=70
export default(c,t)=>{
  c.beginPath();c.ellipse(128,226,82,17,0,0,T);c.fill();c.stroke()
  const s=(t-.68)/.32
  if(t>=.68){
    c.lineWidth=4;for(const k of[0,.4]){const q=s-k;if(q>0&&q<.9)c.beginPath(),c.ellipse(128,226,14+62*q,4+11*q,0,0,T),c.stroke()}
    c.lineWidth=4;for(const v of[-1,-.4,.4,1])if(s<.8)c.beginPath(),c.arc(128+v*50*s,220-80*s+100*s*s,7-5*s,0,T),c.fill(),c.stroke()
  }
  c.lineWidth=7
  for(const[x,w,l]of[[54,24,50],[90,28,78],[128,32,104],[164,28,72],[200,22,46]]){
    c.beginPath();c.moveTo(x-w/2,50);c.quadraticCurveTo(x-w*.18,50+l*.6,x,50+l);c.quadraticCurveTo(x+w*.18,50+l*.6,x+w/2,50);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(x-w*.18,58);c.quadraticCurveTo(x-w*.12,50+l*.45,x-2,50+l*.7);c.stroke();c.lineWidth=7
  }
  c.beginPath();c.roundRect(16,34,224,16,4);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();for(const x of[70,136,196])c.moveTo(x,38),c.lineTo(x,46);c.stroke();c.lineWidth=7
  c.beginPath();c.moveTo(12,40);c.quadraticCurveTo(14,18,40,18);c.quadraticCurveTo(70,6,100,16);c.quadraticCurveTo(136,4,170,16);c.quadraticCurveTo(204,6,226,18);c.quadraticCurveTo(246,22,244,40)
  c.quadraticCurveTo(236,48,222,40);c.quadraticCurveTo(176,34,150,38);c.quadraticCurveTo(144,52,134,40);c.quadraticCurveTo(80,34,44,38);c.quadraticCurveTo(36,50,28,40);c.quadraticCurveTo(18,46,12,40);c.fill();c.stroke()
  const drop=(x,y,r)=>{c.lineWidth=5;c.beginPath();c.moveTo(x,y-r*2.2);c.bezierCurveTo(x+r*.4,y-r*1.2,x+r,y-r*.6,x+r,y);c.arc(x,y,r,0,PI);c.bezierCurveTo(x-r,y-r*.6,x-r*.4,y-r*1.2,x,y-r*2.2);c.fill();c.stroke()}
  if(t<.5){const r=3+8*t/.5;drop(128,148+r*1.8,r)}
  else if(t<.68){const f=(t-.5)/.18;drop(128,170+f*f*50,10)}
}
