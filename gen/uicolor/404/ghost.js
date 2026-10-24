// a shy little ghost rises out of a hole torn in a page, peeks left and right, then sinks back down
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const PG='#e7f5ff',LN='#a5d8ff',HO='#5f3dc4',HD='#3b2a8a',GH='#fff',GS='#e5dbff',BL='#ffa8a8'
const HX=128,HY=170,J=[1,.84,.97,.8,1,.88,.78,1,.86,.95,.8,1,.9,.8,.98,.84]
const hole=(c,s=1)=>{J.forEach((j,k)=>{const a=k/J.length*T;c.lineTo(HX+cos(a)*64*j*s,HY+sin(a)*32*j*s)});c.closePath()}
const ss=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
export default(c,t)=>{
  const u=ss(t/.22)-ss((t-.8)/.2),lk=ss((t-.28)/.1)-2*ss((t-.48)/.1)+ss((t-.68)/.1),gy=HY+70-170*u,ln=-.16*lk
  c.save();c.translate(128,150);c.rotate(-.05);c.translate(-128,-150)
  c.fillStyle=PG;c.beginPath();c.moveTo(42,62);c.lineTo(184,62);c.lineTo(214,92);c.lineTo(214,238);c.lineTo(42,238);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(184,62);c.lineTo(184,92);c.lineTo(214,92);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.strokeStyle=LN;c.lineWidth=8;for(const[y,a,b]of[[86,62,160],[106,62,190],[126,62,140],[220,70,186]])c.beginPath(),c.moveTo(a,y),c.lineTo(b,y),c.stroke()
  c.restore()
  c.fillStyle='#fff';c.beginPath();hole(c,1.12);c.fill();c.lineWidth=4;c.strokeStyle='#111';c.stroke()
  c.fillStyle=HO;c.beginPath();hole(c);c.fill();c.lineWidth=6;c.stroke()
  c.fillStyle=HD;c.beginPath();c.ellipse(HX,HY+6,44,18,0,0,T);c.fill()
  c.save();c.beginPath();c.rect(0,0,256,HY);hole(c);c.clip()
  c.translate(HX,HY);c.rotate(ln);c.translate(0,gy-HY);c.scale(.92,.84)
  const body=()=>{c.beginPath();c.moveTo(-40,0);c.arc(0,0,40,PI,0);c.lineTo(44,124);for(let k=0;k<4;k++){const x0=44-k*22,w=4*sin(T*t*2+k*1.6);c.quadraticCurveTo(x0-11,136+w,x0-22,124)}c.closePath()}
  c.fillStyle=GH;body();c.fill();c.save();c.clip();c.fillStyle=GS;c.beginPath();c.ellipse(-12,30,50,120,0,0,T);c.rect(80,-60,-200,240);c.fill('evenodd');c.restore()
  body();c.lineWidth=7;c.strokeStyle='#111';c.stroke()
  for(const d of[-1,1]){c.fillStyle=GH;c.beginPath();c.ellipse(d*44,44-lk*d*8,10,14,d*.5,0,T);c.fill();c.lineWidth=5;c.stroke()}
  const ex=lk*7
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*14+ex,-2,5.5,7.5,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*14+ex-2,-5,2.2,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(ex,14,4,5,0,0,T);c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*26+ex*.6,10,7,4,0,0,T),c.fill()
  c.restore()
}
