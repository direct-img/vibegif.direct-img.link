// ringed planet with a little moon orbiting behind and in front of it, stars twinkling around
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=70
const PL='#ffa94d',B1='#ff922b',B2='#ffd8a8',RG='#ffe066',MN='#ced4da',BL='#ff8787'
const tilt=-.28
export default(c,t)=>{
  const th=t*T,mx=112*cos(th),my=40*sin(th),Mx=128+mx*cos(tilt)-my*sin(tilt),My=128+mx*sin(tilt)+my*cos(tilt)
  const moon=()=>{c.fillStyle=MN;c.beginPath();c.arc(Mx,My,15,0,T);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.arc(Mx-4,My-4,4,0,T);c.arc(Mx+6,My+5,3,0,T);c.stroke();c.lineWidth=7}
  for(const[x,y,o]of[[30,40,0],[226,46,.4],[220,214,.7],[40,206,.2]]){
    const s=4+5*(1+sin((t+o)*T*2))/2;c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()
  }
  c.lineWidth=7
  if(sin(th)<0)moon()
  const ring=(a,b)=>{c.save();c.translate(128,128);c.rotate(tilt);for(const[w,s]of[[24,'#111'],[12,RG]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.ellipse(0,0,98,24,0,a,b),c.stroke();c.restore();c.strokeStyle='#111';c.lineWidth=7}
  ring(PI,T)
  c.fillStyle=PL;c.beginPath();c.arc(128,128,56,0,T);c.fill()
  c.save();c.clip();c.translate(128,128);c.rotate(tilt);c.fillStyle=B1;c.fillRect(-60,-34,120,12);c.fillRect(-60,26,120,10);c.fillStyle=B2;c.fillRect(-60,-14,120,8);c.restore()
  c.beginPath();c.arc(128,128,56,0,T);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*18,124,5.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*18-2,122,2,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,132,8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*32,136,7,4,0,0,T),c.fill()
  ring(0,PI)
  if(sin(th)>=0)moon()
}
