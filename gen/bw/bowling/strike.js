// bowling ball rolls into three pins, they tumble up and spin back down into place, the ball rolls off into the distance and a new one pops in
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const D=(c,f,a=11,b=4)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const shape=c=>{c.beginPath();c.moveTo(-9,36);c.bezierCurveTo(-22,16,-16,-4,-7,-16);c.bezierCurveTo(-3,-22,-14,-28,-11,-36);c.arc(0,-36,11,PI,0);c.bezierCurveTo(14,-28,3,-22,7,-16);c.bezierCurveTo(16,-4,22,16,9,36);c.closePath()}
const pin=(c,x,y,s,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.translate(0,5.5);c.lineWidth=7/s
  shape(c);c.fill();c.stroke()
  c.save();shape(c);c.clip();c.fillStyle='#111';c.fillRect(-20,-22,40,4);c.fillRect(-20,-15,40,4);c.restore()
  c.restore()
}
const ball=(c,x,y,r)=>{
  c.beginPath();c.arc(x,y,r,0,T);c.lineWidth=16*r/34;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7*r/34;c.strokeStyle='#111';c.stroke()
  const a=x/30;c.fillStyle='#fff'
  for(const[hx,hy,s]of[[6,-20,5],[20,-11,5],[9,4,6]])c.beginPath(),c.arc(x+(hx*cos(a)-hy*sin(a))*r/34,y+(hx*sin(a)+hy*cos(a))*r/34,s*r/34,0,T),c.fill()
  c.lineWidth=7;c.strokeStyle='#111';c.fillStyle='#fff'
}
// x, base y, scale, then how far it splays sideways, how high it hops and which way it spins
const PINS=[[172,178,1.05,0,56,1],[146,208,1.2,-30,50,-1],[198,208,1.2,-12,42,1]]
export default(c,t)=>{
  const roll=t<.22,bx=roll?60+32*t/.22:92+80*(t-.22)/.28,by=roll?178:178-24*(t-.22)/.28,bs=roll?1:max(0,1-(t-.22)/.28)
  c.translate(0,-8)
  if(roll)for(const o of[0,.5])D(c,()=>c.arc(bx,by,39,PI*(.75+o)+bx/30,PI*(1.05+o)+bx/30))
  if(t>=.22&&t<.36){const k=sin(PI*(t-.22)/.14);for(let j=0;j<5;j++){const b=-PI*.85+j*PI*.3;D(c,()=>{c.moveTo(124+cos(b)*22*k,166+sin(b)*22*k);c.lineTo(124+cos(b)*46*k,166+sin(b)*46*k)})}}
  if(t>=.82){const u=(t-.82)/.18;ball(c,60,178,30*(u+.35*sin(PI*u)))}
  else if(bs>.05)ball(c,bx,by,30*bs)
  for(const[x,y,s,dx,h,sp]of PINS){
    const e=(t-.24)/.52,hop=e>0&&e<1?sin(PI*e):0,w=t>=.76&&t<.92?.12*sin(T*(t-.76)/.08)*(1-(t-.76)/.16):0
    if(hop)pin(c,x+dx*hop,y-41.5*s-h*hop,s,sp*T*e)
    else{c.save();c.translate(x,y);c.rotate(w);pin(c,0,-41.5*s,s,0);c.restore()}
  }
}
