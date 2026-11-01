// top-down view of a six-legged silver hexapod spider robot crawling forward with a tripod gait, three legs lifting and swinging while the other three push, servo joints, amber sensor eyes blinking, glowing core on its back
export const frames=20,delay=60
const P=Math.PI*2
const L=[[-27,-26,-96,-84,-1],[-34,0,-116,-2,-.3],[-27,26,-98,80,1]]
export default(c,t)=>{
  const ci=(x,y,r,f)=>{c.beginPath();c.arc(x,y,r,0,P);c.fillStyle=f;c.fill();c.stroke()}
  const blk=(x,y,a,w,h,f)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();c.roundRect(-w/2,-h/2,w,h,4);c.fillStyle=f;c.fill();c.stroke();c.restore()}
  const sm=u=>u*u*(3-2*u)
  c.translate(128,130);c.rotate(Math.sin(P*t*2)*.03)
  // legs
  for(const s of[-1,1])L.forEach(([hx,hy,fx,fy,b],j)=>{
    const ph=(t+((j+(s>0))%2)*.5)%1,st=ph<.5
    const u=st?ph*2:(ph-.5)*2,dy=st?-16+u*32:16-sm(u)*32,lf=st?0:Math.sin(Math.PI*u)
    hx*=-s;fx*=-s
    const k=1+lf*.4,F=[fx*(1-lf*.1),fy+dy],a=Math.atan2(F[1]-hy,F[0]-hx)
    const K=[hx+(F[0]-hx)*.42,hy+(F[1]-hy)*.42],ka=Math.atan2(F[1]-K[1],F[0]-K[0])
    // femur bracket
    c.lineWidth=19*k;c.beginPath();c.moveTo(hx,hy);c.lineTo(...K);c.stroke()
    c.lineWidth=12*k;c.strokeStyle='#eef1f4';c.stroke();c.lineWidth=3;c.strokeStyle='#aab3bd';c.stroke();c.strokeStyle='#111'
    // tapered tibia
    const w=8*k,nx=-Math.sin(ka),ny=Math.cos(ka)
    c.lineWidth=4.5
    c.beginPath();c.moveTo(K[0]+nx*w,K[1]+ny*w);c.lineTo(F[0]+nx*1.5,F[1]+ny*1.5);c.lineTo(F[0]-nx*1.5,F[1]-ny*1.5);c.lineTo(K[0]-nx*w,K[1]-ny*w);c.closePath()
    c.fillStyle='#c3cad3';c.fill();c.stroke()
    ci(...F,3*k,'#3c434d')
    blk(...K,ka,20*k,16*k,'#5d6672');ci(...K,4*k,'#eef1f4')
    blk(hx,hy,a,18,15,'#5d6672')
  })
  c.lineWidth=7;c.scale(.88,.88)
  // rear battery pack
  c.beginPath();c.roundRect(-22,40,44,30,10);c.fillStyle='#9aa3ae';c.fill();c.stroke()
  c.lineWidth=3;for(const x of[-8,0,8])c.beginPath(),c.moveTo(x,52),c.lineTo(x,66),c.stroke()
  c.lineWidth=7
  // chassis
  const ch=()=>{c.beginPath();for(const[x,y]of[[-22,-52],[22,-52],[38,-24],[40,24],[22,50],[-22,50],[-40,24],[-38,-24]])c.lineTo(x,y);c.closePath()}
  ch();c.fillStyle='#c3cad3';c.fill();c.stroke()
  c.save();ch();c.clip();c.fillStyle='#eef1f4';c.beginPath();c.roundRect(-30,-44,52,80,14);c.fill();c.restore()
  c.lineWidth=3;c.strokeStyle='#5d6672'
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*12,-40);c.lineTo(s*24,-28);c.lineTo(s*24,26);c.lineTo(s*12,38);c.stroke()}
  c.strokeStyle='#111'
  for(const[x,y]of[[-16,-40],[16,-40],[-16,38],[16,38]]){c.fillStyle='#5d6672';c.beginPath();c.arc(x,y,2.5,0,P);c.fill()}
  // glowing core
  const gl=.5+.5*Math.sin(P*t)
  c.lineWidth=5;c.beginPath();for(let k=0;k<6;k++){const a=k*P/6+P/12;c.lineTo(Math.cos(a)*15,4+Math.sin(a)*15)}c.closePath()
  c.fillStyle='#3c434d';c.fill();c.stroke()
  c.beginPath();for(let k=0;k<6;k++){const a=k*P/6+P/12;c.lineTo(Math.cos(a)*8,4+Math.sin(a)*8)}c.closePath()
  c.fillStyle=`rgb(255,${150+gl*80|0},${40+gl*90|0})`;c.fill()
  c.fillStyle='#fff6d8';c.beginPath();c.arc(-1,2,1.5+gl*2,0,P);c.fill()
  // sensor head
  c.lineWidth=7
  c.beginPath();c.roundRect(-20,-76,40,30,12);c.fillStyle='#9aa3ae';c.fill();c.stroke()
  c.lineWidth=3
  ;[[-8,-64,6],[8,-64,6],[-15,-54,3],[15,-54,3],[0,-54,3]].forEach(([x,y,r],k)=>{
    const on=(t*3+k*.29)%1>.14
    ci(x,y,r,on?'#ffb52e':'#5a3a12')
    if(on&&r>4){c.fillStyle='#fff3d0';c.beginPath();c.arc(x-2,y-2,1.8,0,P);c.fill()}
  })
}
