// a plug gets yanked out of the wall socket with a tiny spark, it dangles sadly while its cord wiggles, then slides back in
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-8,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t,i)=>{
  const u=min(1,max(0,(t-.1)/.1)),d=56*(1-(1-u)**2)-56*ease((t-.78)/.16),out=d>4,w=out?max(0,1-(t-.2)/.5):0
  const dy=out?5*sin(T*t*3)*w:0,a=out?.07*sin(T*t*3+1)*w:0,A=2+9*w
  ln(c,18,()=>{
    const x0=168+d,y0=128+dy
    c.moveTo(x0,y0)
    for(let k=1;k<=24;k++){
      const v=k/24,m=1-v,bx=m**3*x0+3*m*m*v*(x0+56)+3*m*v*v*230+v**3*202,by=m**3*y0+3*m*m*v*y0+3*m*v*v*200+v**3*244
      c.lineTo(bx+A*sin(v*12-T*t*4)*v*m*4,by)
    }
  })
  c.beginPath();c.roundRect(12,14,26,232,8);c.fill();c.stroke()
  c.save();c.translate(116+d,128+dy);c.rotate(a)
  for(const y of[-18,18])c.beginPath(),c.roundRect(-58,y-5,30,10,3),c.fill(),c.stroke()
  c.beginPath();c.roundRect(48,-16,16,32,6);c.fill();c.stroke()
  c.beginPath();c.roundRect(-30,-38,80,76,18);c.fill();c.stroke()
  c.fillStyle='#111'
  if(out){c.lineWidth=5;for(const x of[-6,26])c.beginPath(),c.moveTo(x-6,-12),c.lineTo(x+6,-6),c.moveTo(x-6,-6),c.lineTo(x+6,-12),c.stroke();c.beginPath();c.ellipse(10,14,7,8,0,0,T);c.fill()}
  else{for(const x of[-6,26])c.beginPath(),c.arc(x,-8,5.5,0,T),c.fill();c.lineWidth=5;c.beginPath();c.arc(10,6,10,.15*PI,.85*PI);c.stroke()}
  c.restore();c.fillStyle='#fff';c.lineWidth=7
  c.beginPath();c.roundRect(32,70,58,116,14);c.fill();c.stroke()
  c.fillStyle='#111';for(const y of[110,146])c.beginPath(),c.roundRect(76,y-7,14,14,3),c.fill()
  c.fillStyle='#fff'
  if(t>.1&&t<.24){
    const s=1-(t-.1)/.14
    for(const a of[-2.3,-1.57,-.84,.84,1.57,2.3])ln(c,11,()=>{c.moveTo(98+cos(a)*16,128+sin(a)*16);c.lineTo(98+cos(a)*(16+18*s),128+sin(a)*(16+18*s))})
    c.lineWidth=5;c.beginPath();for(let k=0;k<8;k++){const r=k%2?5:13*s+4;c.lineTo(98+cos(k*PI/4)*r,128+sin(k*PI/4)*r)};c.closePath();c.fill();c.stroke()
  }
}
