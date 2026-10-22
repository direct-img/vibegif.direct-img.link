// bear sitting and waving hello with one paw
const{sin,cos,PI}=Math,T=2*PI
export const delay=70
export default(c,t)=>{
  c.beginPath();c.ellipse(128,190,62,50,0,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.ellipse(128,200,34,28,0,0,T);c.stroke();c.lineWidth=7
  for(const x of[92,164])c.beginPath(),c.ellipse(x,232,22,12,0,0,T),c.fill(),c.stroke()
  for(const x of[84,172]){
    c.beginPath();c.arc(x,58,20,0,T);c.fill();c.stroke()
    c.lineWidth=5;c.beginPath();c.arc(x,60,9,0,T);c.stroke();c.lineWidth=7
  }
  c.beginPath();c.arc(128,100,54,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const x of[106,150])c.beginPath(),c.arc(x,96,6,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[104,148])c.beginPath(),c.arc(x,94,2.2,0,T),c.fill()
  c.beginPath();c.ellipse(128,122,26,19,0,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(128,118);c.lineTo(128,126);c.arc(121,126,7,0,PI);c.moveTo(142,126);c.arc(135,126,7,0,PI);c.stroke();c.lineWidth=7
  c.fillStyle='#111';c.beginPath();c.ellipse(128,113,10,7,0,0,T);c.fill();c.fillStyle='#fff'
  const a=-1+.4*sin(2*T*t),hx=172+50*cos(a),hy=176+50*sin(a)
  for(const[x0,y0,x1,y1]of[[94,176,84,212],[164,186,hx,hy]])
    for(const[l,s]of[[42,'#111'],[28,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,y0),c.lineTo(x1,y1),c.stroke()
  c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.arc(hx,hy,7,0,T);c.stroke()
  for(const k of[-1,0,1])c.beginPath(),c.arc(hx+cos(a+k*.7)*13,hy+sin(a+k*.7)*13,3,0,T),c.stroke()
}
