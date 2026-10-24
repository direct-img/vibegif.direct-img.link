// a dot sends out radar ripple rings that grow wider and thinner until they fade away
const{cos,PI}=Math,T=2*PI
export const frames=15,delay=80
export default(c,t)=>{
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,r=28+88*p
    c.lineWidth=16*(1-p)**.7;c.strokeStyle='#999';c.beginPath();c.arc(128,128,r,0,T);c.stroke()
  }
  const s=1+.08*cos(T*3*t)
  c.lineWidth=7;c.strokeStyle='#111';c.beginPath();c.arc(128,128,30*s,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(128,128,13*s,0,T);c.fill()
}
