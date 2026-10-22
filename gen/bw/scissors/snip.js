// scissors snipping open and shut twice, with a little spark at the tips each time they close
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t)=>{
  const o=.5+.5*cos(2*T*t),th=.03+.3*o
  c.translate(140,122);c.rotate(-.75)
  for(const s of[1,-1]){
    c.save();c.rotate(s*th)
    for(const[w,k]of[[30,'#111'],[16,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(0,0),c.quadraticCurveTo(-28,-s*4,-50,-s*22),c.stroke(),c.beginPath(),c.arc(-72,-s*36,24,0,T),c.stroke()
    c.lineWidth=7;c.strokeStyle='#111'
    c.beginPath();c.moveTo(-10,-s*14);c.quadraticCurveTo(50,-s*18,112,0);c.quadraticCurveTo(50,s*4,-10,s*8);c.closePath();c.fill();c.stroke()
    c.restore()
  }
  c.beginPath();c.arc(0,0,10,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(0,0,3.5,0,T);c.fill();c.fillStyle='#fff'
  const sp=max(0,1-o*4)
  if(sp>0)for(const a of[-1,0,1])for(const[w,k]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(116+cos(a)*12,sin(a)*12),c.lineTo(116+cos(a)*(12+16*sp),sin(a)*(12+16*sp)),c.stroke()
}
