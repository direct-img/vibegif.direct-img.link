// scalloped seal badge with a big check, gently wobbling, a shine sweeps across it and little sparkles twinkle
const{sin,cos,PI,abs,min,max}=Math,T=2*PI
export const frames=20,delay=80
const cl=u=>min(1,max(0,u))
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?r*.42:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const a=.1*sin(T*t),sh=cl((t-.12)/.3)
  for(const d of[-1,1]){
    c.save();c.translate(128+d*26,150);c.rotate(d*.32+a*.5)
    c.beginPath();c.moveTo(-20,0);c.lineTo(-20,82);c.lineTo(0,68);c.lineTo(20,82);c.lineTo(20,0);c.closePath();c.fill();c.stroke()
    c.restore()
  }
  c.translate(128,110);c.rotate(a)
  const seal=()=>{c.beginPath();for(let k=0;k<=320;k++){const th=k*T/320,r=80+11*(1-(1-abs(cos(8*th)))**2);c.lineTo(cos(th)*r,sin(th)*r)}c.closePath()}
  seal();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(0,0,62,0,T);c.fill()
  if(sh>0&&sh<1){
    c.save();c.beginPath();c.arc(0,0,62,0,T);c.clip();c.rotate(.6);c.fillStyle='#666'
    const x=-110+220*sh;c.fillRect(x-14,-80,22,160);c.fillRect(x+16,-80,8,160);c.restore()
  }
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,0,52,0,T);c.stroke()
  c.lineWidth=20;c.beginPath();c.moveTo(-26,2);c.lineTo(-8,20);c.lineTo(28,-20);c.stroke()
  c.setTransform(1,0,0,1,0,0);c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=5
  for(const[x,y,o,r]of[[214,40,.42,22],[40,60,.56,18],[222,150,.7,16]]){const g=cl((t-o)/.22),s=sin(g*PI);if(s>0)star(c,x,y,r*s)}
}
