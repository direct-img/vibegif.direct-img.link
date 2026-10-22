// alarm clock rocking tick-tock while the second hand steps once a frame around the dial
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=160
export default(c,t,i)=>{
  c.translate(128,232);c.rotate(i%2?.045:-.045);c.translate(-128,-232)
  for(const d of[-1,1]){
    c.beginPath();c.moveTo(128+d*40,212);c.lineTo(128+d*56,236);c.lineWidth=12;c.stroke();c.lineWidth=7
    c.save();c.translate(128+d*50,66);c.rotate(d*.6);c.beginPath();c.arc(0,0,24,PI,0);c.closePath();c.fill();c.stroke();c.restore()
  }
  for(const[w,s]of[[14,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,64,30,PI*1.15,PI*1.85),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.arc(128,140,82,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(128,140,70,0,T);c.stroke()
  for(let k=0;k<12;k++){const a=k*T/12,r=k%3?62:56;c.lineWidth=k%3?4:6;c.beginPath();c.moveTo(128+cos(a)*r,140+sin(a)*r);c.lineTo(128+cos(a)*66,140+sin(a)*66);c.stroke()}
  c.lineWidth=8;for(const[a,r]of[[-PI*.83,34],[-PI*.17,48]])c.beginPath(),c.moveTo(128,140),c.lineTo(128+cos(a)*r,140+sin(a)*r),c.stroke()
  const s=i/12*T-PI/2
  c.lineWidth=3;c.beginPath();c.moveTo(128-cos(s)*12,140-sin(s)*12);c.lineTo(128+cos(s)*58,140+sin(s)*58);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(128,140,7,0,T);c.fill()
}
