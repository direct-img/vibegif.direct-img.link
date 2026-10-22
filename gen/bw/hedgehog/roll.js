// hedgehog curls into a spiky ball, rolls with speed lines, then uncurls and sniffs
// the spiky coat is a zigzag band whose sweep grows from its back to all the way round
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  const k=t<.15?0:t<.3?sm((t-.15)/.15):t<.7?1:t<.85?sm(1-(t-.7)/.15):0,u=1-k
  const ro=t>=.3&&t<.7?2*T*(t-.3)/.4:0,rx=70-18*k,ry=48+4*k,cx=128,cy=158+4*k-(k==1?3*Math.abs(sin(2*ro)):0),sn=k?0:1.5*sin(8*T*t)
  const P=(a,s)=>[cx+(rx+s)*cos(a),cy+(ry+s)*sin(a)]
  if(k==1){c.lineWidth=7;for(const[o,y]of[[0,-20],[14,4],[4,26]]){const p=(t*5+o/14)%1,x0=cx-rx-24-o-8*p
    for(const[l,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,cy+y),c.lineTo(x0-30,cy+y),c.stroke()}
    c.strokeStyle='#111';c.lineWidth=7}
  if(u>.02)for(const x of[-34,30])c.beginPath(),c.ellipse(cx+x,cy+ry+4,15*u,8*u,0,0,T),c.fill(),c.stroke()
  c.beginPath();c.ellipse(cx,cy,rx,ry,0,0,T);c.fill();c.stroke()
  if(u>.02){
    c.beginPath();c.ellipse(cx+rx*.8+8*u,cy+8+sn*.3,28*u,18*u,-.2,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(cx+rx*.8+34*u,cy+2+sn,7*u,0,T);c.fill()
    c.beginPath();c.arc(cx+rx*.55,cy-ry*.1,5.5*u,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(cx+rx*.55-1.5,cy-ry*.1-2,2*u,0,T);c.fill()
  }
  const S=PI*(1.05+.95*k),a0=-.42*PI+ro,n=Math.round(S/(T/24)),I=a=>[cx+.9*rx*cos(a),cy+.9*ry*sin(a)],E=I(a0),band=()=>{
    c.beginPath();for(let i=0;i<=2*n;i++){const a=a0-i*S/(2*n);c.lineTo(...P(a,i%2?18:2))}
    c.lineTo(...I(a0-S));c.quadraticCurveTo(cx+.45*rx+k*(E[0]-cx-.45*rx),cy+.05*ry+k*(E[1]-cy-.05*ry),...E);c.closePath()}
  band();c.fill();c.stroke()
  c.lineWidth=4;for(let i=3;i<n-2;i+=2){const a=a0-i*S/n;c.beginPath();c.moveTo(cx+rx*.74*cos(a),cy+ry*.74*sin(a));c.lineTo(...P(a,-8));c.stroke()}
  c.lineWidth=7
  if(u>.02){c.beginPath();c.arc(cx+rx*.3,cy-ry*.66,8*u,0,T);c.fill();c.stroke()}
}
