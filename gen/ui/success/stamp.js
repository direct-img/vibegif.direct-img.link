// a rubber stamp winds up, slams down on a sheet of paper and bounces back up leaving a check mark imprint, then the sheet slides away for a fresh one
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=28,delay=70
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),bk=u=>(u=cl(u),1+2.4*(u-1)**3+1.4*(u-1)**2)
const paper=(c,x)=>{c.beginPath();c.moveTo(62+x,162);c.lineTo(194+x,162);c.lineTo(224+x,230);c.lineTo(32+x,230);c.closePath();c.fill();c.stroke()}
const ink=(c,x)=>{c.save();c.translate(128+x,196);c.scale(1,.42);c.lineWidth=10;c.beginPath();c.arc(0,0,44,0,T);c.stroke();c.lineWidth=14;c.beginPath();c.moveTo(-20,0);c.lineTo(-6,16);c.lineTo(22,-16);c.stroke();c.restore()}
export default(c,t)=>{
  const sl=-264*io((t-.74)/.22),q=sin(PI*cl((t-.31)/.11))
  const y=t<.24?124-10*io((t-.06)/.18):t<.31?114+82*cl((t-.24)/.07)**2:t<.42?196:196-72*bk((t-.42)/.16)
  paper(c,sl);paper(c,sl+264)
  const h=(y-124)/72
  if(t<.31||t>.42&&t<.74||t>.96){c.fillStyle='#ccc';c.beginPath();c.ellipse(128,196,30+22*h,9+4*h,0,0,T);c.fill();c.fillStyle='#fff'}
  if(t>.31)ink(c,sl)
  if(t>.6&&t<.74){const p=(t-.6)/.14;c.lineWidth=5;for(const[x,yy,r]of[[52,146,12],[206,154,10]]){const s=sin(PI*p)*r;c.beginPath();c.moveTo(x,yy-s*2);c.quadraticCurveTo(x,yy,x+s*2,yy);c.quadraticCurveTo(x,yy,x,yy+s*2);c.quadraticCurveTo(x,yy,x-s*2,yy);c.quadraticCurveTo(x,yy,x,yy-s*2);c.fill();c.stroke()}}
  if(q>.01)for(const d of[-1,1])for(const a of[-.5,0,.5]){const r1=72+14*q,r2=r1+16*q;for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*r1*cos(a),188-r1*.5*sin(a+.4)),c.lineTo(128+d*r2*cos(a),188-r2*.5*sin(a+.4)),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7
  c.save();c.translate(128,y);c.scale(1+.08*q,1-.12*q)
  c.fillStyle='#888';c.beginPath();c.roundRect(-48,-12,96,12,3);c.fill();c.stroke();c.fillStyle='#fff'
  c.beginPath();c.roundRect(-58,-38,116,28,9);c.fill();c.stroke()
  c.beginPath();c.roundRect(-14,-62,28,26,4);c.fill();c.stroke()
  c.beginPath();c.ellipse(0,-82,31,19,0,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(0,-82,14,PI*1.15,PI*1.5);c.stroke()
  c.restore()
}
