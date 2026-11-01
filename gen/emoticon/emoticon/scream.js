// emoticon screaming in horror, hands clamped to its cheeks, face stretched long and shaking as sound waves blast out
export const frames=16,delay=60
const P=Math.PI,B='#111',G='#9a9a9a',S=Math.sin,C=Math.cos
export default(c,t,i)=>{
  const a=2*P*t,sx=[0,3,-1,-3,1,3,-2,-3][i%8],wb=S(a*4),
  arc=(x,y,r,a0,a1,w)=>{c.beginPath();c.arc(x,y,r,a0,a1);c.lineWidth=w+5;c.strokeStyle='#fff';c.stroke();c.lineWidth=w;c.strokeStyle=B;c.stroke()}
  // sound waves rippling out from both sides of the head
  for(const s of[-1,1])for(let n=0;n<2;n++){
    const p=(t*2+n/2)%1,r=96+26*p,w=6*(1-p)
    if(w>1)arc(128+sx,104,r,s<0?P-.42:-.42,s<0?P+.42:.42,w)
  }
  c.save();c.translate(128+sx,124);c.rotate(sx*.006);c.scale(.9,1.08+.01*wb)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  for(const s of[-1,1]){
    // eyes stretched wide, pupils shrunk to pinpricks
    const x=s*34,y=-22
    c.beginPath();c.ellipse(x,y,15,21,0,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=6;c.strokeStyle=B;c.stroke()
    c.beginPath();c.arc(x+(i%2?1:-1),y+2,4,0,2*P);c.fillStyle=B;c.fill()
    // brows yanked up in the middle
    c.lineWidth=6;c.beginPath();c.moveTo(x+s*16,y-28);c.quadraticCurveTo(x+s*2,y-34,x-s*12,y-48);c.stroke()
  }
  // huge wobbling mouth with the uvula and tongue showing
  const mo=()=>{c.beginPath();for(let n=0;n<=40;n++){const q=n/40*2*P,r=1+.05*S(q*5+a*8);c.lineTo(r*20*(1+.38*S(q))*C(q),44+r*(37+2*wb)*S(q))}c.closePath()}
  mo();c.fillStyle=B;c.fill()
  c.save();mo();c.clip()
  c.beginPath();c.ellipse(0,84+2*wb,27,17,0,0,2*P);c.fillStyle=G;c.fill()
  c.beginPath();c.moveTo(-4,10);c.lineTo(-3,20);c.arc(0,21,3.5,P,0,true);c.lineTo(4,10);c.fillStyle=G;c.fill()
  c.restore()
  mo();c.lineWidth=5;c.strokeStyle=B;c.stroke()
  c.restore()
  // mitten hands squashing the cheeks
  for(const s of[-1,1]){
    c.save();c.translate(128+sx+s*80,178);c.rotate(-s*.28)
    const hd=()=>{c.beginPath();c.ellipse(0,0,19,27,0,0,2*P);c.moveTo(-s*8,-12);c.ellipse(-s*14,-14,7,12,-s*.6,0,2*P)}
    hd();c.fillStyle='#fff';c.fill();c.lineWidth=7;c.strokeStyle=B;c.stroke();hd();c.fill()
    c.restore()
  }
}
