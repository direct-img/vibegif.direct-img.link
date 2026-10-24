// two hands clasped in a handshake, pumping up and down, with little shake lines above and below
const{sin,cos,PI,atan2,hypot}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t)=>{
  const D=(f,a=12,b=5)=>{for(const[w,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const v=sin(2*T*t),cx=128,cy=108+14*v,S=1.35,w=7/S
  for(const s of[-1,1])if(s*cos(2*T*t)<-.3)for(const k of[0,1])D(()=>{const y=cy+s*(s<0?56:62)+s*k*14;c.moveTo(cx-24+k*6,y+s*6);c.quadraticCurveTo(cx,y-s*4,cx+24-k*6,y+s*6)},11,4)
  for(const d of[-1,1]){
    const wx=cx+d*66,wy=cy+12,ex=128+d*88,ey=224,r=atan2(ey-wy,ex-wx),l=hypot(ex-wx,ey-wy)
    c.save();c.translate(wx,wy);c.rotate(r)
    c.fillStyle=d<0?'#777':'#fff';c.beginPath();c.roundRect(6,-25,l,50,14);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.roundRect(-6,-30,18,60,7);c.fill();c.stroke()
    c.restore()
  }
  c.save();c.translate(cx,cy);c.rotate(.05*v);c.scale(S,S);c.lineWidth=w
  c.beginPath();c.roundRect(-14,-22,62,46,20);c.fill();c.stroke()
  c.beginPath();c.roundRect(-52,-24,52,46,20);c.fill();c.stroke()
  for(const[y,l]of[[16,22],[6,32],[-4,36],[-14,32]])c.beginPath(),c.roundRect(-10,y-6,l,12,6),c.fill(),c.stroke()
  c.beginPath();c.roundRect(-40,-31,48,15,7.5);c.fill();c.stroke();c.lineWidth=w*.7;c.beginPath();c.moveTo(-31,-27);c.lineTo(-31,-20);c.stroke()
  c.restore()
}
