// ghost bobbing in place, hem rippling, little arms flapping, blinks once per loop
const{sin,PI}=Math,T=2*PI
export default(c,t,i)=>{
  const y=sin(t*T)*8,L=66,R=190,hem=x=>196+y+7*sin((x-L)/(R-L)*3*T-t*T)
  for(const s of[-1,1]){
    c.beginPath();c.ellipse(128+s*68,150+y,20,10,s*(.5+.3*sin(t*T*2)),0,T);c.fill();c.stroke()
  }
  c.beginPath();c.moveTo(L,hem(L));c.arc(128,104+y,62,PI,0)
  for(let x=R;x>=L;x-=2)c.lineTo(x,hem(x))
  c.closePath();c.fill();c.stroke()
  c.fillStyle='#111'
  for(const x of[106,150]){
    c.beginPath()
    if(i==11||i==12)c.moveTo(x-7,108+y),c.lineTo(x+7,108+y),c.stroke()
    else c.ellipse(x,108+y,6.5,10,0,0,T),c.fill(),c.fillStyle='#fff',c.beginPath(),c.arc(x-2,104+y,2.5,0,T),c.fill(),c.fillStyle='#111'
  }
  c.beginPath();c.ellipse(128,138+y,6,8,0,0,T);c.fill()
}
