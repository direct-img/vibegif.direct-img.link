// stapler chomping like a hungry mouth with a big eye, and on each bite a staple hops out the front and lands
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=70
export default(c,t)=>{
  const u=(t*2)%1,bite=u<.14?u/.14:u<.3?1-(u-.14)/.16:0,a=.5*(1-bite),p=(u-.16)/.5
  c.lineWidth=7
  c.beginPath();c.roundRect(20,198,212,32,16);c.fill();c.stroke()
  c.beginPath();c.roundRect(170,186,40,16,5);c.fill();c.stroke()
  c.save();c.translate(50,186);c.rotate(-a)
  for(const[w,s]of[[30,'#fff'],[16,'#111']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(24,14),c.lineTo(160,14),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.moveTo(-18,-4);c.quadraticCurveTo(-18,-58,36,-60);c.lineTo(160,-50);c.quadraticCurveTo(184,-48,184,-22);c.lineTo(184,2);c.quadraticCurveTo(184,14,170,14);c.lineTo(4,14);c.quadraticCurveTo(-18,14,-18,-4);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(14,-34);c.lineTo(110,-30);c.stroke()
  if(bite>.5){c.lineWidth=6;c.beginPath();c.moveTo(140,-32);c.lineTo(152,-24);c.lineTo(140,-16);c.stroke()}
  else{c.lineWidth=6;c.beginPath();c.arc(150,-24,15,0,T);c.stroke();c.fillStyle='#111';c.beginPath();c.arc(153,-22,8,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(150,-25,3,0,T);c.fill()}
  c.restore()
  c.lineWidth=7;c.beginPath();c.arc(46,188,15,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(46,188,5,0,T);c.fill();c.fillStyle='#fff'
  if(p>0&&p<1){
    const x=220+14*p,y=176-80*4*p*(1-p)+20*p
    c.save();c.translate(x,y);c.rotate(p*T)
    for(const[w,k]of[[13,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(-12,8),c.lineTo(-12,-5),c.lineTo(12,-5),c.lineTo(12,8),c.stroke()
    c.restore()
  }
  if(bite>.6)for(const[x,y]of[[196,108],[220,112],[240,126]])for(const[w,k]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(x-6,y+6),c.lineTo(x+4,y-4),c.stroke()
}
