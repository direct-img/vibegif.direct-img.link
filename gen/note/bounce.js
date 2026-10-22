// pair of music notes bouncing on the beat while little notes float up on either side
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=20,delay=70
const D=(c,f,a=18,b=6)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const head=(c,x,y,s=1)=>{c.beginPath();c.ellipse(x,y,22*s,15*s,-.35,0,T);c.fill();c.stroke()}
export default(c,t)=>{
  for(const[x0,o,d]of[[40,0,1],[216,.5,-1]]){
    const p=(t+o)%1,s=.55*sin(PI*p),x=x0+10*sin(p*T),y=230-p*170
    if(s<.08)continue
    c.save();c.translate(x,y);c.scale(s,s)
    D(c,()=>{c.moveTo(18,-6);c.lineTo(18,-80);c.quadraticCurveTo(26,-56,44,-50)},16,6)
    c.lineWidth=7/s;head(c,0,0);c.restore()
  }
  const b=abs(sin(2*PI*t)),y=-26*b,sq=1+.08*(1-b)
  c.translate(128,200);c.scale(sq,2-sq);c.translate(-128,-200+y)
  D(c,()=>{c.moveTo(110,176);c.lineTo(110,74);c.moveTo(182,156);c.lineTo(182,54)})
  c.beginPath();c.moveTo(104,64);c.lineTo(188,40);c.lineTo(188,68);c.lineTo(104,92);c.closePath();c.fill();c.stroke()
  head(c,90,182);head(c,162,162)
}
