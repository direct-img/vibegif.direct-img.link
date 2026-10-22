// snare drum with two sticks taking turns hitting it, the head dipping and impact lines on every hit
const{sin,cos,PI,abs,max}=Math,T=2*PI
export const frames=20,delay=60
const D=(c,f,a=11,b=4)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t)=>{
  const top=128,bot=192,rx=86,ry=26,h=[abs(sin(PI*t)),abs(cos(PI*t))]
  const dip=4*max(0,1-Math.min(...h)/.25)
  c.beginPath();c.moveTo(128-rx,top);c.lineTo(128-rx,bot);c.ellipse(128,bot,rx,ry,0,PI,0,true);c.lineTo(128+rx,top);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;for(const y of[top+12,bot-12])c.beginPath(),c.ellipse(128,y,rx,ry,0,.08,PI-.08),c.stroke()
  c.lineWidth=4;c.beginPath()
  for(let k=0;k<=8;k++){const x=52+k*19,e=Math.sqrt(1-((x-128)/rx)**2)*ry;c.lineTo(x,k%2?bot-12+e:top+12+e)}
  c.stroke();c.lineWidth=7
  c.beginPath();c.ellipse(128,top,rx,ry-dip,0,0,T);c.fill();c.stroke()
  for(const d of[-1,1]){
    const k=h[d<0?0:1],px=128+d*116,py=92,a=(d<0?.335:PI-.335)-d*.75*k,tx=px+cos(a)*97,ty=py+sin(a)*97
    if(k<.2)for(const b of[-.7,0,.7])D(c,()=>{c.moveTo(tx+sin(b)*16,top-6-cos(b)*16);c.lineTo(tx+sin(b)*32,top-6-cos(b)*32)})
    D(c,()=>{c.moveTo(px,py);c.lineTo(tx,ty)},17,8)
    c.beginPath();c.ellipse(tx,ty,9,7,a,0,T);c.fill();c.stroke()
  }
}
