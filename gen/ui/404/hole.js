// a little 404 signpost stands by a hole; a mole pops up, looks left and right, shrugs and ducks back down
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=32,delay=70
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2)
const HX=172,HY=198
const Q=(c,x,y,s)=>{
  c.save();c.translate(x,y);c.scale(s,s)
  for(const[w,st]of[[18,'#111'],[7,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(0,-10,10,PI,PI*2.3),c.quadraticCurveTo(0,3,0,8),c.stroke()
  c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.arc(0,22,5.5,0,T);c.fill();c.stroke();c.restore()
}
export default(c,t)=>{
  const up=bk((t-.08)/.12)-io((t-.8)/.08),lk=sin(T*cl((t-.24)/.24)),sh=min(1,2.2*sin(PI*cl((t-.52)/.24))),u0=cl((t-.1)/.3),wb=.05*sin(T*2*u0)*(1-u0)
  c.beginPath();c.roundRect(10,178,236,54,27);c.fill();c.stroke()
  c.fillStyle='#111';for(const[x,y]of[[32,214],[58,222],[112,218],[228,214]])c.beginPath(),c.arc(x,y,3.5,0,T),c.fill()
  c.beginPath();c.ellipse(HX,HY,48,13,0,0,T);c.fill();c.fillStyle='#fff'
  c.lineWidth=6;for(const[x,r]of[[HX-56,13],[HX+57,10]])c.beginPath(),c.arc(x,HY+4,r,PI,0),c.closePath(),c.fill(),c.stroke()
  c.lineWidth=7
  c.save();c.translate(72,204);c.rotate(.02+wb);c.translate(-72,-204)
  c.beginPath();c.roundRect(65,110,14,96,4);c.fill();c.stroke()
  c.beginPath();c.roundRect(20,62,104,56,10);c.fill();c.stroke()
  c.lineWidth=9;for(const x of[42,102])c.beginPath(),c.moveTo(x+7,104),c.lineTo(x+7,76),c.lineTo(x-11,96),c.lineTo(x+11,96),c.stroke()
  c.beginPath();c.ellipse(72,90,8,14,0,0,T);c.stroke()
  c.restore()
  const v=cl((t-.08)/.2)
  if(v>0&&v<1){c.lineWidth=4;for(const[d,h]of[[-1,40],[1,52],[-.5,58],[.6,34]])c.beginPath(),c.arc(HX+d*(26+34*v),HY-4-h*sin(PI*v)+20*v*v,6*(1-v**3),0,T),c.fill(),c.stroke()}
  if(up>.01){
    c.save();c.beginPath();c.rect(0,0,256,HY);c.ellipse(HX,HY,48,13,0,0,T);c.clip()
    c.translate(HX,HY+20+96*(1-up));c.rotate(.08*sh)
    c.lineWidth=7;c.beginPath();c.roundRect(-32,-106,64,130,32);c.fill();c.stroke()
    const e=7*lk
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*12+e,-72,4.5,0,T),c.fill()
    c.beginPath();c.ellipse(e*1.3,-58,11,8,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(e*1.3-4,-61,2.5,0,T);c.fill()
    c.lineWidth=3;c.beginPath();c.roundRect(e-6,-50,12,9,2);c.fill();c.stroke();c.beginPath();c.moveTo(e,-50);c.lineTo(e,-41);c.stroke()
    for(const d of[-1,1])for(const a of[-.15,.15])c.beginPath(),c.moveTo(e*1.3+d*14,-58+a*20),c.lineTo(e*1.3+d*26,-58+a*44),c.stroke()
    if(sh>.1){c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(d*12+e,-80-4*sh,6,PI*1.2,PI*1.8),c.stroke()}
    for(const d of[-1,1]){
      c.save();c.translate(d*(30+14*sh),-10-38*sh);c.rotate(d*(-.2-.9*sh));c.lineWidth=5
      c.beginPath();c.ellipse(0,0,14,10,0,0,T);c.fill();c.stroke()
      c.lineWidth=3;for(const k of[-5,0,5])c.beginPath(),c.moveTo(k,-9),c.lineTo(k,-15),c.stroke()
      c.restore()
    }
    c.restore()
  }
  if(sh>.05)Q(c,HX+50,74,sh)
}
