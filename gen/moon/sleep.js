// crescent moon sleeping and rocking gently while z's drift up and two stars twinkle
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=90
export default(c,t)=>{
  for(const[x,y,p]of[[44,58,0],[214,206,.5]]){
    const s=8+6*(1+sin((t+p)*T))/2
    c.lineWidth=5;c.beginPath()
    for(let k=0;k<8;k++){const r=k%2?s*.35:s,a=k*PI/4-PI/2;c.lineTo(x+r*cos(a),y+r*sin(a))}
    c.closePath();c.fill();c.stroke()
  }
  c.save();c.translate(128,128);c.rotate(.06*sin(t*T));c.translate(-128,-128)
  c.lineWidth=7;c.beginPath();c.arc(124,132,72,0,T);c.fill();c.stroke()
  c.globalCompositeOperation='destination-out';c.beginPath();c.arc(162,104,63.5,0,T);c.fill();c.globalCompositeOperation='source-over'
  c.save();c.beginPath();c.arc(124,132,75.5,0,T);c.clip();c.beginPath();c.arc(162,104,60,0,T);c.stroke();c.restore()
  c.lineWidth=5;c.beginPath();c.arc(84,134,9,.15*PI,.85*PI);c.stroke()
  c.beginPath();c.arc(100,166,7,.1*PI,.9*PI);c.stroke()
  c.lineWidth=3;for(const k of[-5,0,5])c.beginPath(),c.moveTo(80+k-2,154),c.lineTo(80+k+2,148),c.stroke()
  c.restore()
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,s=22*sin(PI*p),x=156+p*58,y=96-p*72
    if(s<2)continue
    for(const[l,st]of[[12,'#111'],[5,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(x-s/2,y-s/2),c.lineTo(x+s/2,y-s/2),c.lineTo(x-s/2,y+s/2),c.lineTo(x+s/2,y+s/2),c.stroke()
  }
}
