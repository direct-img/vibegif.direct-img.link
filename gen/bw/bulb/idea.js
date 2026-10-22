// sleepy light bulb flickers on, wakes up with a grin and shines, then dozes off again
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
export default(c,t,i)=>{
  const on=t>=.36&&t<.86||t>=.25&&t<.36&&i%2==1
  if(on)for(let k=0;k<7;k++){
    const a=PI+k*PI/6,r1=74,r2=96+6*sin(2*T*t*2+k)
    for(const[w,s]of[[13,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+cos(a)*r1,100+sin(a)*r1),c.lineTo(128+cos(a)*r2,100+sin(a)*r2),c.stroke()
  }
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.arc(128,100,58,.7*PI,.3*PI);c.lineTo(150,170);c.lineTo(106,170);c.closePath();c.fill();c.stroke()
  for(const[x,y,w,h]of[[102,168,52,13],[105,181,46,13],[112,194,32,12]])c.beginPath(),c.roundRect(x,y,w,h,5),c.fill(),c.stroke()
  c.beginPath();c.arc(128,208,7,0,PI);c.fill();c.stroke()
  c.lineWidth=5
  if(on){
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*20,100,6,0,T),c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*20-2,97,2.2,0,T),c.fill()
    c.beginPath();c.arc(128,112,16,.15*PI,.85*PI);c.stroke()
    c.lineWidth=4;c.beginPath();c.arc(128,100,44,PI*1.15,PI*1.4);c.stroke()
  }else{
    for(const d of[-1,1])c.beginPath(),c.arc(128+d*20,98,7,.15*PI,.85*PI),c.stroke()
    c.beginPath();c.moveTo(122,122);c.lineTo(134,122);c.stroke()
  }
}
