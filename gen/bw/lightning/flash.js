// grumpy storm cloud that zaps a lightning bolt twice and shakes when it does
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
export default(c,t,i)=>{
  const z=i==2||i==3||i==6,sx=z?(i%2?3:-3):0
  if(z){
    c.beginPath();for(const[x,y]of[[146,136],[100,192],[132,192],[96,242],[172,170],[140,170],[168,136]])c.lineTo(x+sx,y);c.closePath();c.fill();c.stroke()
    for(const[a,l]of[[-2.7,18],[-2.1,22],[-.4,18],[-1,22]])
      for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(96+sx+cos(a)*16,240+sin(a)*16),c.lineTo(96+sx+cos(a)*(16+l),240+sin(a)*(16+l)),c.stroke()
    c.lineWidth=7;c.strokeStyle='#111'
  }
  const P=[[76,112,34],[122,84,46],[176,104,38]],base=()=>c.roundRect(40+sx,104,176,50,25)
  c.lineWidth=14;for(const[x,y,r]of P)c.beginPath(),c.arc(x+sx,y,r,0,T),c.stroke()
  c.beginPath();base();c.stroke()
  for(const[x,y,r]of P)c.beginPath(),c.arc(x+sx,y,r,0,T),c.fill()
  c.beginPath();base();c.fill()
  c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+sx+d*36,110+(z?-2:0)),c.lineTo(128+sx+d*14,118),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+sx+d*24,126,5,0,T),c.fill()
  c.beginPath();if(z)c.ellipse(128+sx,144,8,6,0,0,T),c.fill();else c.arc(128+sx,148,9,PI*1.2,PI*1.8),c.stroke()
  c.fillStyle='#fff'
}
