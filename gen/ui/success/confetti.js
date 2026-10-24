// a party popper shakes, then bursts with a bang and confetti pieces and streamers flutter down, spinning as they fall
const{sin,cos,PI,min,max,exp}=Math,T=2*PI
export const frames=28,delay=70
let z=11;const R=()=>(z=z*16807%2147483647)/2147483647
const C=[...Array(14)].map((_,k)=>[-PI/4+(R()-.5)*1.7,90+R()*120,k%4,R()<.3?'#bbb':'#fff',R()*T,1+R()*2,R()*T,.7+R()*.6])
const t0=.12
export default(c,t)=>{
  const s=t-t0,mx=110,my=150
  if(s>0){
    const sc=min(1,(1-t)/.07),fall=u=>320*max(0,u-.12)**1.5
    for(const[a,d,k,f,r0,sp,ph,fz]of C){
      const e=1-exp(-11*s),x=mx+cos(a)*d*e+14*sin(T*s*2*fz+ph)*min(1,s*4),y=my+sin(a)*d*e+fall(s)*fz
      c.save();c.translate(x,y);c.rotate(r0+s*sp*T);c.scale(cos(T*s*3*fz+ph)*sc,sc);c.beginPath()
      if(k==0)c.rect(-11,-7,22,14);else if(k==1)c.arc(0,0,9,0,T);else if(k==2)c.moveTo(0,-11),c.lineTo(10,7),c.lineTo(-10,7),c.closePath();else c.ellipse(0,0,13,6,0,0,T)
      c.restore();c.lineWidth=5;c.fillStyle=f;c.fill();c.stroke()
    }
    c.fillStyle='#fff'
    for(const[a,d,o]of[[-1.15,120,0],[-.5,130,2]]){
      const e=1-exp(-9*s);for(const[w,st]of[[10,'#111'],[4,'#fff']]){c.lineWidth=w*sc;c.strokeStyle=st;c.beginPath()
      for(let u=0;u<=1;u+=.05){const L=d*e*(.35+.65*u),n=7*sin(u*12+s*20+o)*min(1,s*6);c.lineTo(mx+cos(a)*L-sin(a)*n,my+sin(a)*L+cos(a)*n+fall(s)*(1.1-.4*u)+40*s*u*u)}c.stroke()}
    }
    c.strokeStyle='#111'
    if(s<.12){const b=s/.12;for(let k=0;k<7;k++){const a=-PI/4+(k-3)*.42,r1=24+40*b,r2=r1+20*(1-b);for(const[w,st]of[[12,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(mx+cos(a)*r1,my+sin(a)*r1),c.lineTo(mx+cos(a)*r2,my+sin(a)*r2),c.stroke()}}
  }
  const sh=t<t0?.08*sin(T*t*14)*t/t0:t>.9?.05*sin(T*t*20)*(t-.9)/.1:0,rc=s>0&&s<.15?sin(PI*s/.15):0
  c.strokeStyle='#111';c.lineWidth=7
  c.save();c.translate(42-8*rc,222+8*rc);c.rotate(PI/4+sh)
  const cone=()=>{c.beginPath();c.moveTo(-9,6);c.lineTo(-38,-92);c.lineTo(38,-92);c.lineTo(9,6);c.quadraticCurveTo(0,11,-9,6)}
  cone();c.fill();c.save();cone();c.clip();c.fillStyle='#111'
  for(const v of[-70,-36])c.beginPath(),c.moveTo(-40,v),c.lineTo(40,v-20),c.lineTo(40,v-6),c.lineTo(-40,v+14),c.fill()
  c.restore();cone();c.stroke()
  c.beginPath();c.ellipse(0,-92,38,12,0,0,T);c.fill();c.stroke()
  if(s<0||s>.5){c.fillStyle='#111';c.beginPath();c.ellipse(0,-92,27,6,0,0,T);c.fill()}
  c.restore()
}
