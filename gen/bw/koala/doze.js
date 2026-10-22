// koala hugging a branch and dozing off, its head slowly nodding while Z's drift up
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=90
export default(c,t)=>{
  const a=.07*sin(t*T),dy=3+3*sin(t*T)
  c.beginPath();c.ellipse(122,184,50,54,0,0,T);c.fill();c.stroke()
  c.save();c.translate(112,152);c.rotate(a);c.translate(-112,-152+dy)
  for(const[x,y,r]of[[68,84,26],[150,76,24]]){
    c.lineWidth=7;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()
    c.lineWidth=4;for(const k of[-1,0,1])c.beginPath(),c.moveTo(x+k*7,y+8),c.lineTo(x+k*9,y-6),c.stroke()
  }
  c.lineWidth=7;c.beginPath();c.arc(108,112,44,0,T);c.fill();c.stroke()
  c.lineWidth=5;for(const x of[88,128])c.beginPath(),c.arc(x,104,8,.15*PI,.85*PI),c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(108,122,13,16,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(103,115,3,5,-.3,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(108,140,6,.2*PI,.8*PI);c.stroke()
  c.restore()
  c.lineWidth=7;c.beginPath();c.roundRect(148,8,38,242,18);c.fill();c.stroke()
  c.lineWidth=4;for(const[x,y]of[[160,30],[174,84],[160,118],[172,236]])c.beginPath(),c.moveTo(x,y),c.quadraticCurveTo(x+4,y+10,x,y+20),c.stroke()
  for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(184,52),c.lineTo(226,30),c.stroke()
  c.strokeStyle='#111'
  for(const[x,y,r]of[[214,22,-.9],[232,46,.6]]){
    c.lineWidth=6;c.beginPath();c.ellipse(x,y,16,8,r,0,T);c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();c.moveTo(x-12*cos(r),y-12*sin(r));c.lineTo(x+12*cos(r),y+12*sin(r));c.stroke()
  }
  for(const[x0,y0,x1,y1]of[[126,172,166,154],[138,214,170,214]]){
    for(const[w,s]of[[34,'#111'],[20,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,y0),c.lineTo(x1,y1),c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.ellipse(x1+4,y1,14,12,0,0,T);c.fill();c.stroke()
    c.lineWidth=3;for(const k of[-1,0,1])c.beginPath(),c.moveTo(x1+14,y1+k*5),c.lineTo(x1+20,y1+k*6),c.stroke()
  }
  for(const k of[0,.5]){
    const p=(t+k)%1,s=9*sin(PI*p),x=110-12*p,y=46-26*p
    if(s>2)for(const[w,st]of[[10,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(x-s,y-s),c.lineTo(x+s,y-s),c.lineTo(x-s,y+s),c.lineTo(x+s,y+s),c.stroke()
  }
}
