// diamond kite dancing in the wind with its bow tail waving, clouds drifting past
const{sin,cos,PI,atan2}=Math,T=2*PI
export const frames=24,delay=70
const Q=['#ff6b6b','#ffd43b','#4dabf7','#69db7c'],BOWS=['#f783ac','#b197fc','#ffa94d','#38d9a9']
const cloud=(c,x,y,s)=>{const P=[[-14*s,2*s,11*s],[0,-6*s,15*s],[14*s,2*s,11*s]],b=()=>c.roundRect(x-26*s,y,52*s,16*s,8*s);c.lineWidth=12;for(const[a,bb,r]of P)c.beginPath(),c.arc(x+a,y+bb,r,0,T),c.stroke();c.beginPath();b();c.stroke();c.fillStyle='#fff';for(const[a,bb,r]of P)c.beginPath(),c.arc(x+a,y+bb,r,0,T),c.fill();c.beginPath();b();c.fill();c.lineWidth=7}
export default(c,t)=>{
  for(const[y,o,s]of[[50,0,1],[190,.5,.8]]){const p=(t+o)%1;cloud(c,290-p*340,y,s)}
  const kx=140+18*sin(t*T),ky=86+12*sin(2*T*t),r=.2*sin(t*T+.5)
  for(const[w,s]of[[6,'#111'],[2,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(kx,ky+56),c.quadraticCurveTo(70,200,20,246),c.stroke()
  c.strokeStyle='#111'
  const tail=[];for(let k=0;k<=24;k++){const u=k/24;tail.push([kx-sin(r)*60+u*60+12*sin(u*7-t*T*2),ky+cos(r)*60+u*100])}
  for(const[w,s]of[[8,'#111'],[3,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(const[x,y]of tail)c.lineTo(x,y);c.stroke()}
  c.strokeStyle='#111'
  for(let k=1;k<=4;k++){const[x,y]=tail[k*5],[px,py]=tail[k*5-1],a=atan2(y-py,x-px)+PI/2;c.save();c.translate(x,y);c.rotate(a);c.fillStyle=BOWS[k-1];c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(0,0),c.lineTo(d*14,-7),c.lineTo(d*14,7),c.closePath(),c.fill(),c.stroke();c.restore()}
  c.save();c.translate(kx,ky);c.rotate(r);c.lineWidth=7
  const pts=[[0,-64],[46,-6],[0,62],[-46,-6]],ctr=[0,-6]
  for(let k=0;k<4;k++){c.fillStyle=Q[k];c.beginPath();c.moveTo(...ctr);c.lineTo(...pts[k]);c.lineTo(...pts[(k+1)%4]);c.closePath();c.fill()}
  c.beginPath();for(const p of pts)c.lineTo(...p);c.closePath();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(0,-64);c.lineTo(0,62);c.moveTo(-46,-6);c.lineTo(46,-6);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*12,-20,4,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(0,-14,6,.15*PI,.85*PI);c.stroke()
  c.restore()
}
