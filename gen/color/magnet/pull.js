// horseshoe magnet pulling paperclips in, holding them, then dropping them and starting again
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const R='#fa5252',TIP='#ced4da',CL='#adb5bd'
const clip=(c,x,y,a)=>{
  c.save();c.translate(x,y);c.rotate(a)
  for(const[w,st]of[[9,'#111'],[4,CL]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(14,-6),c.lineTo(-12,-6),c.arc(-12,0,6,-PI/2,PI/2,true),c.lineTo(12,6),c.arc(12,1,5,PI/2,-PI/2,true),c.lineTo(-8,-4),c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=7
}
export default(c,t,i)=>{
  const pull=min(1,t/.5),e=pull*pull,hold=t>=.5&&t<.75,drop=max(0,(t-.75)/.25),sh=hold?(i%2?2:-2):0
  if(t<.5)for(let k=0;k<3;k++){const a=-PI*.3+k*.3;for(const[w,st]of[[8,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.setLineDash([8,10]),c.lineDashOffset=-t*80,c.beginPath(),c.arc(150,128,70+k*18,a-.4,a+.4),c.stroke();c.setLineDash([])}
  c.strokeStyle='#111';c.lineWidth=7
  for(const[y0,tipY,o]of[[56,70,0],[204,186,.2],[128,96,.1]]){
    const sx=286,tx=212+(o*30),x=drop?tx+o*20:sx+(tx-sx)*e,y=drop?tipY+drop*drop*200:y0+(tipY-y0)*e,a=drop?drop*3+o*5:(1-e)*2+o
    clip(c,x+sh,y,a)
  }
  c.translate(sh,0)
  c.fillStyle=R;c.beginPath();c.moveTo(176,45);c.lineTo(110,45);c.arc(110,128,83,-PI/2,PI/2,true);c.lineTo(176,211);c.lineTo(176,161);c.lineTo(110,161);c.arc(110,128,33,PI/2,-PI/2);c.lineTo(176,95);c.closePath();c.fill();c.stroke()
  c.fillStyle=TIP;for(const y of[45,161])c.beginPath(),c.roundRect(174,y,30,50,[0,6,6,0]),c.fill(),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(60,104,6,16,.5,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(48,128+d*12,4.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(56,128,7,-.35*PI,.35*PI);c.stroke()
}
