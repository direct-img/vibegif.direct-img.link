// will-o-wisp floating: a round flame spirit bobbing and tilting, its flame tips flicker, embers drift up beside it, it blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const bl=t>.4&&t<.46,Mx=128+6*sin(T*t*2),My=40+4*sin(T*t*3),R=4*sin(T*t*2+1),L=4*sin(T*t*2+2.5)
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  for(const[i,x]of[-46,40,-30].entries()){const q=(t+i/3)%1;c.beginPath();c.arc(128+x+5*sin(T*q),110-74*q,5*sin(PI*q),0,T);c.fill()}
  c.translate(128,132+8*sin(T*t));c.rotate(.05*sin(T*t+1));c.scale(1.15,1.15);c.translate(-128,-128)
  c.beginPath();c.moveTo(82,148);c.arc(128,148,46,PI,0,true)
  c.bezierCurveTo(176,122,176,96,170+R,74);c.quadraticCurveTo(158,84,150,94)
  c.bezierCurveTo(152,72,140,54,Mx,My);c.bezierCurveTo(116,56,104,74,106,92)
  c.quadraticCurveTo(98,86,88+L,80);c.bezierCurveTo(80,100,80,124,82,148);c.fill();c.stroke()
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*16,136,7,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.ellipse(128+d*16,138,7,10,0,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(128,156,7,.2*PI,.8*PI);c.stroke()
}
